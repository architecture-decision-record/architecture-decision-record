# Locales

## Codes

Directory names are lowercase `<language>-<region>`. `-001` means "world"
(UN M.49), used for a language-wide translation. Regional variants exist for
Welsh (`cy-gb`), English (`en-gb`, `en-us`) and Chinese (`zh-cn`, `zh-tw`).

The picker uses `_` and mixed case instead (`en_GB`, `zh_TW`, `da_001`).

## The 27 locales

en-001 (source), en-gb, en-us, cy-001, cy-gb, zh-001, zh-cn, zh-tw, hi-001,
es-001, fr-001, ar-001, bn-001, ru-001, pt-001, ur-001, id-001, ja-001,
vi-001, de-001, sv-001, ko-001, nl-001, da-001, et-001, it-001, th-001.

`locales/locales-by-priority.md` records the translation order.

## Translating directory names

Everything under `locales/<code>/` is translated, including directory names:
the three section directories and every content directory. Slugs are
lowercase, hyphen-separated, keep Latin-script product names, and have no
punctuation other than `-`. Link targets must match the translated directory
names exactly. The English-to-local slug mapping is kept as a three-column
TSV (section, English slug, localized directory) while translating.

## Translation workflow (per locale, serial)

1. Translate 12 documents, 11 templates, 40 examples, plus the three section
   index pages.
2. Copy each directory's `index.md` to `README.md`; copy `.locale-peer-id`
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
