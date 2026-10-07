# Locales

## Codes

Every directory under `locales/` is named lowercase `<language>-<region>`
(e.g. `en-001`, `cy-gb`, `zh-tw`). Two-letter, region-less directories such as
`locales/en/` do not exist and must not be created. `-001` means "world" (UN
M.49), used for a language-wide translation. Regional variants exist for Welsh
(`cy-gb`), English (`en-gb`, `en-us`) and Chinese (`zh-cn`, `zh-tw`).

`en-001` is the English source of truth: edit English there, then translate.
Links to English content use `locales/en-001/`.

The picker uses `_` and mixed case instead (`en_GB`, `zh_TW`, `da_001`); its
bare value `en` means `en-001`. A directory name is also the locale's route
(`/<code>/`) and its search-index name (`static/search/<code>.json`). The
website's English site at `/en/` is separate from the `/en-001/` locale route;
see [website.md](website.md#url-scheme). Only locale directories live in
`locales/`; stray or duplicate directories (for example a copy of a locale
under another name) fail the audit and the sync, and are deleted.

## The 28 locales

| Directory and route | Picker value | Endonym (Intl) |
|---|---|---|
| `ar-001` | `ar_001` | العربية (العالم) |
| `bn-001` | `bn_001` | বাংলা (পৃথিবী) |
| `cy-001` | `cy_001` | Cymraeg (Y Byd) |
| `cy-gb` | `cy_GB` | Cymraeg (Y Deyrnas Unedig) |
| `da-001` | `da_001` | dansk (Verden) |
| `de-001` | `de_001` | Deutsch (Welt) |
| `en-001` | `en` | English |
| `en-gb` | `en_GB` | English (United Kingdom) |
| `en-us` | `en_US` | English (United States) |
| `es-001` | `es_001` | español (Mundo) |
| `et-001` | `et_001` | eesti (maailm) |
| `fi-001` | `fi_001` | suomi (maailma) |
| `fr-001` | `fr_001` | français (Monde) |
| `hi-001` | `hi_001` | हिन्दी (विश्व) |
| `id-001` | `id_001` | Indonesia (Dunia) |
| `it-001` | `it_001` | italiano (Mondo) |
| `ja-001` | `ja_001` | 日本語 (世界) |
| `ko-001` | `ko_001` | 한국어(세계) |
| `nl-001` | `nl_001` | Nederlands (wereld) |
| `pt-001` | `pt_001` | português (Mundo) |
| `ru-001` | `ru_001` | русский (весь мир) |
| `sv-001` | `sv_001` | svenska (världen) |
| `th-001` | `th_001` | ไทย (โลก) |
| `ur-001` | `ur_001` | اردو (دنیا) |
| `vi-001` | `vi_001` | Tiếng Việt (Thế giới) |
| `zh-001` | `zh_001` | 中文（世界） |
| `zh-cn` | `zh_CN` | 中文（中国） |
| `zh-tw` | `zh_TW` | 中文（台灣） |

Counts: 28 locales, of which `en-001` is the source and 27 are translations or
variants (`en-gb` and `en-us` follow English; `cy-gb` is a copy of `cy-001`).
Every one of the 28 is complete: 203 files, 63 pages.

`locales/index.md` lists each locale as `* [<Endonym> (<World>)](<code>/)`.
`locales/locales-by-priority.md` records the translation order (all 28 are
done).

Turkish is in progress and not yet one of the 28: `tr-001` (the world locale)
and `tr-tr` (identical content, kept for the regional name) each hold a partial
translation (188 of 203 files, 15 pages missing). Neither is listed in
`locales/index.md`, in `LOCALES`, or wired into the website until
`scripts/audit-locales.py` reports them OK. They are the only locale directories
outside the 28.

## Browser language routing

`/` sends a visitor to a locale route from `navigator.languages`: the exact
locale, else Chinese script/region (`zh-Hant`, `zh-HK` to `zh-tw`), else the
language's `*-001` locale, else `/en/`. Full rules:
[website.md](website.md#url-scheme). Adding a locale to `LOCALES` makes it
eligible for routing automatically.

## Translating directory names

Everything under `locales/<code>/` is translated, including directory names:
the three section directories and every content directory. Slugs are
lowercase, hyphen-separated, keep Latin-script product names, and have no
punctuation other than `-` (no underscores, spaces, or middle dots; Latin
letters inside CJK names are lowercased and split with `-`, e.g.
`google-cloud-platform`). A slug may equal the English one only when it is a
product name or a genuine cognate in that language (listed in
`scripts/audit-locales.py`). Link targets must match the translated directory
names exactly. The English-to-local slug mapping is kept as a three-column
TSV (section, English slug, localized directory) while translating.

## Translation workflow (per locale, serial)

1. Translate 12 documents, 11 templates, 40 examples, plus the three section
   index pages.
2. Make each directory's `README.md` a symlink to its `index.md`; copy `.locale-peer-id`
   files from `locales/en-001`; copy `LICENSE.md` files unchanged.
3. Run the verification in [repository.md](repository.md#verification).
4. Append `* [<Endonym> (<World>)](<code>/)` to `locales/index.md`.
5. Add the code to `LOCALES` in the website's `src/lib/locales.js`, keeping the
   array sorted by code.
6. Commit, push, publish the website subtree, verify.

Translations are produced without native-reader review unless stated.

## Picker labels

The endonym comes from `Intl.DisplayNames`. For `*_001` the region is
dropped (`Deutsch`); for other regions it becomes ` - `
(`English - United States`). The first letter of each part is capitalized.

## Welsh terminology (`cy-001`, `cy-gb`)

Welsh translations follow the Welsh Government's TermCymru terminology list
(`2026-07-02 - TermCymru.csv`) wherever it has an entry. Both Welsh locales
hold identical content (`cy-gb` is a copy of `cy-001`). Terms used throughout:

| English | Welsh | Source |
|---|---|---|
| architecture (software) | saernïaeth | TermCymru (ICT) |
| architect | pensaer | TermCymru |
| decision | penderfyniad | |
| record | cofnod | TermCymru |
| template | templed (pl. templedi) | TermCymru |
| context | cyd-destun | TermCymru |
| status | statws | |
| consequence(s) | canlyniad(au) | |
| requirement | gofyniad | TermCymru |
| stakeholder | rhanddeiliad | TermCymru |
| criteria / criterion | meini prawf / maen prawf | TermCymru |
| teamwork | gwaith tîm | TermCymru |
| sustainability / sustainable | cynaliadwyedd / cynaliadwy | TermCymru |
| governance | llywodraethiant | TermCymru |
| compliance | cydymffurfedd | TermCymru |
| lifecycle | cylch oes | TermCymru |
| repository | ystorfa | TermCymru |
| pipeline | piblinell | TermCymru |
| compatibility | cydweddoldeb | TermCymru |
| scalability | graddadwyedd | |
| rationale | sail resymegol | TermCymru |
| timestamp | stamp amser | |
| front end / back end | pen blaen / pen ôl | |

Conventions: ADR plurals are "ADRau"; acronyms (ADR, AD, ADL, ASR, AKM) are kept;
product names, code, and URLs stay in English; "deprecated" is "anghymeradwy",
"superseded" "wedi'i ddisodli". The English acronym expansion
"architecture decision record" is "cofnod penderfyniad saernïaeth".
Directory names are Welsh slugs (`dogfennau`, `templedi`, `enghreifftiau`).
