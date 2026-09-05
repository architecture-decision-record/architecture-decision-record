# Architecture Decision Record — website

The published website for the [Architecture Decision
Record](https://github.com/architecture-decision-record/architecture-decision-record)
project: templates, examples, and teamwork guidance for ADRs. Live at
<https://architecture-decision-record.github.io/>.

Built with [SvelteKit](https://svelte.dev/docs/kit) (`@sveltejs/adapter-static`,
fully prerendered) and the [Lily Design System](https://lilydesignsystem.com/)
(headless components, theme/text-size/share pickers). Content is Markdown,
compiled with [mdsvex](https://mdsvex.pngwn.io/).

## Where the content comes from

This directory lives inside the `architecture-decision-record` monorepo,
one level below the repository root. The guide pages are parsed out of the
parent repo's own `README.md`; templates and examples are copied from
`../locales/en/templates/` and `../locales/en/examples/` (see
[`scripts/sync-content.mjs`](scripts/sync-content.mjs)), and a navigation
manifest is generated from the result (see
[`scripts/generate-manifest.mjs`](scripts/generate-manifest.mjs)).

**Never hand-edit files under `src/content/`.** Edit `../README.md` or
`../locales/en/` instead, then regenerate:

```sh
pnpm run content   # re-parses/copies from one level up, then rebuilds the manifest
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

- `src/content/{guide,templates,examples}/` : synced Markdown source (see above).
- `src/lib/manifest.json` : generated table of contents — see `scripts/generate-manifest.mjs`.
- `src/routes/guide/[slug]/`, `templates/[slug]/`, `examples/[slug]/` : dynamic
  routes that prerender one page per Markdown file, using `entries()` to
  enumerate slugs from the manifest.
- `src/routes/+page.svelte` : hand-authored home page.
- `src/routes/skills/+page.svelte` : hand-authored page promoting the two
  Claude Code skills that ship in the parent repo's `skills/` directory.
- `src/lib/components/Header.svelte`, `Footer.svelte`, `CardLinkList.svelte`,
  `MdLayout.svelte` : the site chrome.
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
