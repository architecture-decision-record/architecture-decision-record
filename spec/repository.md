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
directories carry `.locale-peer-id` files (58 per locale: one per content
directory plus section and locale roots); these are opaque, copied unchanged
from `locales/en`, and never hand-edited. Template `LICENSE.md` files are
copied unchanged and never translated.

A complete locale has exactly **194 files**.

## Counts

| Item | Count |
|---|---|
| Documents | 12 |
| Templates | 11 |
| Examples | 40 |
| Locales (hyphenated dirs, incl. `en-001`) | 27 |

## Commits

Commits are SSH-signed. Trailer: `Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>`
for Claude-assisted commits.

## Verification

1. `find locales/<code> -type f | wc -l` is 194 (excluding `.DS_Store`).
2. Every relative link resolves. Known, accepted failures: four `0005-example.md`
   placeholders in the MADR template (`README.md` and `index.md`, two each).
3. Every `#fragment` link matches a heading slug (letters, marks, numbers,
   `-` and `_` kept; spaces become `-`; duplicate headings get `-N`).
4. `pnpm run check` in the website directory reports 0 errors.
