# Update the website

Rules: [spec/website.md](../spec/website.md). Work in
`architecture-decision-record.github.io/`.

- Content change: edit the source under `locales/` or the root `README.md`,
  then `pnpm run content`. Never edit `src/content/` or `src/lib/manifest.json`.
- New locale in the picker: see [translate-locale.md](translate-locale.md).
- Dependencies: `pnpm update --latest`, then `pnpm run check` and
  `pnpm run build`. Keep `typescript` on 6.x. `@lilydesignsystem/*` versions
  newer than about a day may be held back by pnpm's release-age policy; do not
  bypass it without asking.
- After upgrading `@lilydesignsystem/*`, refresh `static/themes/*.css` from
  Lily's upstream `themes/` (spec/website.md#themes); stale themes leave new
  picker elements unstyled.
- Hand-authored pages: `src/routes/+page.svelte` (the `/` language router),
  `src/lib/components/Header.svelte`. `static/llms.txt` and `llms.json` are generated.
- Nothing may reference `../` at runtime.
- Finish with `pnpm run check` (0 errors).
