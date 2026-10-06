# Locale-specific search picker

Status: implemented. Code: `src/lib/locales.js`, `src/lib/search.js`,
`scripts/generate-search-index.mjs`, `src/routes/[locale]/`, and the picker
wiring in `src/lib/components/Header.svelte`. The site does not yet serve
translated pages, so result links go to the English page (or GitHub).

## Requirements

1. The Lily `SearchPicker` (inside `PickerBar`) opens a dropdown search form.
2. Submitting the form navigates to `/<locale>/?<query>`, where `<locale>` is
   the currently selected locale in URL form and `<query>` is the bare,
   URI-encoded query (`foo` gives `/de-001/?foo`, not `?q=foo`).
3. The route `/<locale>/?<query>` searches for the query in the files of
   that locale only. Results never include any other locale.

## Locale code mapping

Three spellings of one locale exist; derive the others from the picker value.

| Where | Form | Example |
|---|---|---|
| Picker value (`LOCALES`, `localStorage` key `adr-locale`) | `ll_RR` / `en` | `de_001`, `en_GB`, `zh_TW`, `en` |
| URL segment | lowercase, `_` becomes `-` | `de-001`, `en-gb`, `zh-tw` |
| Source directory | same as the URL segment | `locales/de-001/` |

The bare picker value `en` has no directory of its own; it maps to the
source-of-truth locale `en-001` (see [../locales.md](../locales.md)). Its URL
is `/en-001/`. A single function `localeToSlug(value)` implements this and is
used by the picker, the route, and the index builder.

## Build-time search index (one per locale)

The site is fully prerendered and static (`trailingSlash = 'always'`,
GitHub Pages, no server), so search runs in the browser against prebuilt
index files.

- A script `scripts/generate-search-index.mjs` reads
  `locales/<slug>/{documents,templates,examples}/**/index.md` and writes
  `static/search/<slug>.json`, one file per locale. The script reads the parent
  monorepo, so it runs with `pnpm run content` (not `build`); the generated
  `static/search/*.json` files are committed.
- Because the site directory is published alone and must not reference `../`
  at runtime, `sync-content` (or this script) copies what it needs into the
  site directory first; the browser only ever fetches
  `/search/<slug>.json`.
- Each record: `id`, `title` (first H1), `section` (translated section dir
  name), `url` (the page path, see below), `headings` (all headings), and
  `text` (Markdown stripped to plain text). Nothing from another locale is
  written into a locale's file. This is what guarantees isolation: the
  browser cannot match what it never downloaded.
- Do not index `LICENSE.md`, `README.md` duplicates of `index.md`, or
  `.locale-peer-id` files.

## Route: `/<locale>/?<query>`

- `src/routes/[locale]/+page.svelte` with `entries()` returning the locale
  slugs (the 27 locale directories, as in [../locales.md](../locales.md)) so
  each is prerendered as `/<slug>/index.html`. An unknown slug is a 404.
- The query is the whole `location.search` minus the leading `?`, decoded with
  `decodeURIComponent`. It is read in the browser (`onMount` / `$effect`),
  never at prerender time. With no query the page shows the locale's landing
  content and the search form prompt.
- The page fetches `/search/<slug>.json` for the URL's locale, never the
  picker's stored locale, so a shared link always searches the locale in its
  own path.
- If the file is missing (locale without an index) the page says search is
  unavailable for that locale and does not fall back to another locale.

### Matching

- Case-insensitive, Unicode-normalized (NFKC) matching.
- Tokenize with `Intl.Segmenter(<locale>, { granularity: 'word' })` so that
  languages without spaces (`th`, `ja`, `zh-*`) work; drop non-word segments.
- A record matches when every query token is a prefix of one of its tokens,
  or (for query tokens of 3 or more characters) contained in one. Rank by: title match, heading match, then body match; ties by
  section order (documents, templates, examples).
- A small library such as MiniSearch may be used for the index; whichever is
  chosen must accept a custom tokenizer for the rule above.
- Show title, section, and a snippet around the first body match, linking to
  the record's `url`. Show a translated "no results" message.

### Result URLs

Translated pages are not served yet. Until they are, each record's `url`
points to the English page when one exists with the same slug mapping, or to
the locale's directory on GitHub
(`https://github.com/architecture-decision-record/architecture-decision-record/tree/main/locales/<slug>/<section>/<dir>/`).
When translated pages are routed, `url` becomes `/<slug>/<section>/<dir>/`
and this section is updated.

## Picker wiring

In `Header.svelte`:

1. Keep one reactive `locale` value, initialized from `localStorage`
   (`adr-locale`), defaulting to `en`.
2. Pass `localeProps.onChange = (value) => (locale = value)`. `LocalePicker`
   supports `onChange` and a bindable `value`.
3. Pass `searchProps.action` as `` `/${localeToSlug(locale)}/` `` so the
   picker's own href rule produces `/<slug>/?<query>`. The picker trims and
   URI-encodes the query; do not re-encode it.
4. Use the picker's default navigation (`location.assign`) or SvelteKit's
   `goto` for in-app navigation; remove the DuckDuckGo `searchSite` handler.
5. Search labels (`search`, `searchInput`, `searchSubmit`) are translated per
   locale when the site is localized; until then they are English.

On a `/<slug>/` page, the picker's locale should follow the URL: if the
stored locale and the URL's locale differ, the URL wins for that page's
search, and selecting a locale in the picker navigates to `/<new-slug>/`
only when the visitor is already on a locale route.

## Constraints and edge cases

- Empty or whitespace query: the picker does not navigate (its own rule).
- Queries containing `&`, `#`, `%`, or spaces round-trip through
  `encodeURIComponent`/`decodeURIComponent`; the route must not treat `&` as
  a parameter separator.
- Malformed percent-encoding must not throw; show the raw text and no results.
- Right-to-left locales (`ar-001`, `ur-001`) render results with `dir="rtl"`.
- Index size: budget each `/search/<slug>.json` at 1 MB uncompressed or less
  (GitHub Pages serves gzip). If exceeded, index titles, headings, and the
  first 500 characters of body text only.
- The `/<slug>/` pages are search results pages (`noindex`), so they are not
  listed in `sitemap.xml`.

## Acceptance tests

1. Choose `de_001`, search `foo`: the browser lands on `/de-001/?foo`.
2. On `/de-001/?foo` every result comes from `static/search/de-001.json`; a
   term that appears only in `locales/fr-001` returns no results.
3. `/en-001/?foo` and the picker value `en` agree.
4. `/zh-tw/?<Chinese term>` and `/th-001/?<Thai term>` return matches
   (segmenter works without spaces).
5. `/xx-001/` is a 404; a locale without an index file shows the unavailable
   message and no cross-locale results.
6. Network tab on a locale route shows exactly one `/search/*.json` request,
   for that locale.
7. `pnpm run check` reports 0 errors; `pnpm run build` produces
   `build/search/<slug>.json` for every locale.
