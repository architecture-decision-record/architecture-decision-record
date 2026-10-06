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

- `src/content/` is **generated** from the parent repo's `README.md` and
  `locales/en-001/{templates,examples}/` by `scripts/sync-content.mjs` — never
  hand-edit files under it. Edit the source content one level up (`../`),
  then run `pnpm run content` here.
- `src/lib/manifest.json` is **generated** by `scripts/generate-manifest.mjs`
  from `src/content/` — never hand-edit it.
- Guide, template, and example pages are all rendered by the same pattern:
  a `[slug]/+page.js` with `entries()` sourced from the manifest, dynamically
  importing the matching `.md` file from `src/content/`, and a
  `+page.svelte` that renders `data.content` (the mdsvex-compiled component).
  Follow this pattern for any new section rather than inventing a new one.
- The home page (`src/routes/+page.svelte`) and the skills page
  (`src/routes/skills/+page.svelte`) are hand-authored, not generated —
  edit them directly.
- Because this directory is `git subtree`-published on its own, everything
  the built site needs (content included) must live inside this directory,
  never referenced via `../` at runtime.
- Run `pnpm run check` before committing changes to `src/`.
- The language picker (`LOCALES` in `src/lib/components/Header.svelte`) is
  hand-maintained, sorted by code, and lists the locale dirs under `../locales/`
  (`xx-001` → `xx_001`). It only sets `lang`/`dir`; translated pages are not
  yet served.
- `static/llms.txt` and `static/llms.json` are **generated** by
  `scripts/generate-llms.mjs` (run by `pnpm run content`, `build`, and `dev`)
  from the manifest and `LOCALES` — never hand-edit them.
- `typescript` stays on 6.x: SvelteKit 3 needs TypeScript's JS API, which 7.x
  does not provide.
- `static/sitemap.xml` is **generated** by `scripts/generate-sitemap.mjs` from the
  manifest (run with `content`, `build`, `dev`; or `pnpm run sitemap`); never
  hand-edit it. `static/robots.txt` points to it.
