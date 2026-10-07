# Architecture Decision Record — website

The published website for the Architecture Decision Record project. See
[README.md](README.md) for the human-oriented overview. Repository-wide rules and the
specification live in the parent repo's `AGENTS.md` and `spec/`.

## What this is

A SvelteKit project (`@sveltejs/adapter-static`) that prerenders the whole
guide as a static site, deployed by GitHub Actions to
<https://architecture-decision-record.github.io/>.

This directory lives inside the `architecture-decision-record` monorepo and
is published to its own `architecture-decision-record.github.io` GitHub
repository via `git subtree`. See the parent repo's
`skills/architecture-decision-record-maintainer-skill/SKILL.md` for the
publishing commands.

## Working rules

- `src/content/locales/` and `src/lib/locale-pages.json` / `locale-peers.json` are
  **generated** from the parent repo's `locales/` by `scripts/sync-locales.mjs`
  — never hand-edit them. Edit the source one level up (`../locales/`), then
  run `pnpm run content` here.
- Every page is a locale route (`src/routes/[locale]/…`), rendered at build time
  by `src/lib/server/locale-pages.js` with `marked`; there are no per-page
  routes or Markdown-to-Svelte (mdsvex) pipeline.
- The only hand-authored page is `/` (`src/routes/+page.svelte`, the language
  router); every other page is a locale route rendered from `locales/`. There
  is no `/en/` site.
- Because this directory is `git subtree`-published on its own, everything
  the built site needs (content included) must live inside this directory,
  never referenced via `../` at runtime.
- Run `pnpm run check` before committing changes to `src/`.
- The language picker (`LOCALES` in `src/lib/locales.js`) is
  hand-maintained, sorted by code, and lists the locale dirs under `../locales/`
  (`xx-001` → `xx_001`). Choosing a locale navigates to the same page in that locale
  (`src/lib/locale-nav.js`, via `.locale-peer-id`s).
- `static/llms.txt` and `static/llms.json` are **generated** by
  `scripts/generate-llms.mjs` (run by `pnpm run content`, `build`, and `dev`)
  from the manifest and `LOCALES` — never hand-edit them.
- `typescript` stays on 6.x: SvelteKit 3 needs TypeScript's JS API, which 7.x
  does not provide.
- `static/sitemap.xml` is **generated** by `scripts/generate-sitemap.mjs` from the
  manifest (run with `content`, `build`, `dev`; or `pnpm run sitemap`); never
  hand-edit it. `static/robots.txt` points to it.
- `static/search/<locale>.json` (per-locale search indexes), `src/content/` (including
  `src/content/locales/`, the translated pages) and `src/lib/locale-pages.json` and `src/lib/locale-peers.json` are
  **generated** from `../locales/` by `pnpm run content`; commit the output.
  Locale list and slug rules live in `src/lib/locales.js` (shared with the
  picker); add new locales there, then run `pnpm run content`.
  The route `/<locale>/?<query>` is `src/routes/[locale]/`; see
  `spec/locale-specific-search-picker/index.md`.
- `static/themes/*.css` are copied unmodified from Lily's upstream `themes/`; refresh
  all 45 after upgrading `@lilydesignsystem/*` (see `spec/website.md#themes`).
