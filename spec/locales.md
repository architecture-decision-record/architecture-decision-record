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
   files from `locales/en`; copy `LICENSE.md` files unchanged.
3. Run the verification in [repository.md](repository.md#verification).
4. Append `* [<Endonym> (<World>)](<code>/)` to `locales/index.md`.
5. Add the code to `LOCALES` in the website's `Header.svelte`, keeping the
   array sorted by code.
6. Commit, push, publish the website subtree, verify.

Translations are produced without native-reader review unless stated.

## Picker labels

The endonym comes from `Intl.DisplayNames`. For `*_001` the region is
dropped (`Deutsch`); for other regions it becomes ` - `
(`English - United States`). The first letter of each part is capitalized.
