# Architecture Decision Record — website

The published website for the [Architecture Decision
Record](https://github.com/architecture-decision-record/architecture-decision-record)
project: templates, examples, and teamwork guidance for ADRs. Live at
<https://architecture-decision-record.github.io/>.

Built with [SvelteKit](https://svelte.dev/docs/kit) (`@sveltejs/adapter-static`,
fully prerendered) and the [Lily Design System](https://lilydesignsystem.com/)
(headless components, theme/text-size/share pickers). Content is Markdown from
the parent repo's `locales/`, rendered at build time with [marked](https://marked.js.org/).

## Where the content comes from

This directory lives inside the `architecture-decision-record` monorepo, one
level below the repository root. Every page is a locale page: `scripts/sync-locales.mjs`
copies each locale's pages and its root `index.md` (the translated README, the
landing page) from `../locales/<code>/` into `src/content/locales/` and writes
`src/lib/locale-pages.json` and `locale-peers.json`. English is the `en-001`
locale.

**Never hand-edit files under `src/content/`.** Edit `../locales/` instead, then
regenerate:

```sh
pnpm run content   # sync locales, search indexes, llms.txt/json, sitemap.xml
```

## Development

```sh
pnpm install
pnpm run dev       # http://localhost:5173
pnpm run build     # prerenders the full site into build/
pnpm run preview   # serve the production build locally
pnpm run check     # svelte-check
```

## Structure

- `src/content/locales/` : synced Markdown source (see above).
- `src/routes/[locale]/…` : the locale routes (English is `en-001`), prerendered from
  `locales/` via `src/lib/server/locale-pages.js`; `/<locale>/?<query>` is search.
- `src/routes/+page.svelte` : the language router at `/` (reads
  `navigator.languages`, goes to the matching locale route, else `/en-001/`).
  There is no `/en/` site; `/en/…` and the old section URLs (`/guide/`, …) 404.
- `src/lib/components/Header.svelte`, `Footer.svelte`, `SearchResults.svelte` : the site chrome and search results.
- `static/themes/*.css` : the 45 Lily Design System themes, switched at
  runtime by `ThemePicker.svelte`.

## Publishing

This directory is published to its own
[`architecture-decision-record.github.io`](https://github.com/architecture-decision-record/architecture-decision-record.github.io)
repository with `git subtree`, from the parent monorepo's root:

```sh
git subtree push --prefix=architecture-decision-record.github.io \
  git@github.com:architecture-decision-record/architecture-decision-record.github.io.git main
```

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) — present in
this directory so it lands at the *root* of the split-out repository — then
builds and deploys to GitHub Pages on every push to that repository's
`main` branch. For the first deployment, set repository **Settings → Pages
→ Build and deployment → Source → GitHub Actions** on the
`architecture-decision-record.github.io` repository.
