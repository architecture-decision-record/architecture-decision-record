# Translate a locale

Rules: [spec/locales.md](../spec/locales.md). Translate serially, one locale at
a time; do not use parallel subagents.

1. Pick the next code from `locales/locales-by-priority.md`. Source is
   `locales/en-001`.
2. Build the slug map (section, English slug, localized directory) for the
   3 sections, 12 documents, 11 templates (+ 40 examples). Keep product names
   in Latin script.
3. Translate documents, then templates, then examples, then the three section
   index pages. Link targets must equal the translated directory names; arc42
   and GIG Cymru links end with `/`.
4. Keep code, URLs, and product names untranslated. Regenerate any table of
   contents from the translated headings.
5. Copy each directory's `index.md` to `README.md`, copy `.locale-peer-id`
   files from `locales/en` (58), and copy `LICENSE.md` files unchanged.
6. Delete `.DS_Store`; confirm 194 files.
7. Run the checks in [spec/repository.md](../spec/repository.md#verification).
8. Append `* [<Endonym> (<World>)](<code>/)` to `locales/index.md`
   (`locales/README.md` is a symlink to it).
9. Add `<language>_<region>` to `LOCALES` in `Header.svelte`, sorted by code;
   run `pnpm run check`.
10. Commit, then follow [publish.md](publish.md).
