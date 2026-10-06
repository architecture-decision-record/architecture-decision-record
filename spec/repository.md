# Repository

Monorepo `architecture-decision-record`, remotes pushed together by
`git push origin main` (4 push URLs).

## Layout

```
README.md                         canonical English overview (also parsed for the site guide)
spec/                             this specification
skills/                           Claude Code skills (see agents.md)
locales/index.md                  locale index; locales/README.md is a symlink to it
locales/<code>/                   one directory per locale (see locales.md)
architecture-decision-record.github.io/   website, published via git subtree (see website.md)
```

Legacy locale dirs without a region (`en`, `es`, `fr`, `ja`, `ko`, `tr`) predate
the `<language>-<region>` scheme and are not part of the 27 spec locales.

## Per-locale layout

Each locale holds three section directories (names translated per
[locales.md](locales.md)): documents, templates, examples. Every content
directory contains `index.md` and a byte-identical `README.md`. Locale
directories carry `.locale-peer-id` files (67 per locale: one per content
directory plus section and locale roots); these are opaque, copied unchanged
from `locales/en-001`, and never hand-edited. Template `LICENSE.md` files are
copied unchanged and never translated. A new page gets one freshly generated
32-character hex id in `locales/en-001`, copied to its translation in every
locale (the nine newest pages were given ids this way).

A complete locale has exactly **203 files**.

## Counts

| Item | Count |
|---|---|
| Documents | 12 |
| Templates | 11 |
| Examples | 40 |
| Locales (hyphenated dirs, incl. `en-001`) | 27 |

## Commits

Commits are SSH-signed. Trailer: `Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>`
for Claude-assisted commits. Titles are present-tense imperative phrases.

## Delivery: automatically commit, push, publish

When an agent finishes a change, it delivers it without waiting to be asked:

1. **Verify** with the checks below that apply to the change (for site changes,
   `pnpm run check` and `pnpm run build`). If any check fails, stop: do not
   commit, and report the failure.
2. **Commit** the files belonging to the task, staged by path, signed, with
   the trailer above. Do not sweep in unrelated changes; report them instead.
3. **Push** with `git push origin main` (4 push URLs).
4. **Publish** the website with `git subtree push` (see
   [website.md](website.md#publishing)) whenever anything under
   `architecture-decision-record.github.io/` changed in the commit.
5. **Report** the commit hash, the push result, and the subtree range. Do not
   claim the site redeployed unless it was checked.

Limits: never force-push, rewrite history, skip signing or hooks, or delete
remote branches automatically; those still require an explicit request.
If a push or publish fails, stop and report; do not retry destructively.
A user instruction to hold off (for example "don't push yet") overrides this
rule for that task.

## Verification

1. `find locales/<code> -type f | wc -l` is 203 (excluding `.DS_Store`).
2. Every relative link resolves. Known, accepted failures: four `0005-example.md`
   placeholders in the MADR template (`README.md` and `index.md`, two each).
3. Every `#fragment` link matches a heading slug (letters, marks, numbers,
   `-` and `_` kept; spaces become `-`; duplicate headings get `-N`).
4. `python3 scripts/audit-locales.py` exits 0: every locale has every page and file
   (203 files), README equals index, no stray files or symlinks,
   every slug is translated and clean, and all links and anchors resolve.
5. `pnpm run check` in the website directory reports 0 errors.
