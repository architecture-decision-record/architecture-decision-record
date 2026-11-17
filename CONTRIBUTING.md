# Contributing to Architecture decision record (ADR)

Thanks for helping improve this project.

## Ways to contribute

- **Report a problem:** open an issue describing what is wrong, unclear, or missing.
- **Fix or improve something:** open a pull request. Small fixes can go straight to a pull request; for larger changes, please open an issue first so we can agree on the approach.
- **Add content or examples:** follow the structure and style of the existing files.

## Development

Read `AGENTS.md` and `spec/` first; the spec is the source of truth. Edit English in `locales/en-001`, then translate; the website is in `architecture-decision-record.github.io/`.

```sh
python3 scripts/audit-locales.py          # locale audit; must exit 0
cd architecture-decision-record.github.io
pnpm run content                          # regenerate generated files; leaves no uncommitted changes
pnpm test && pnpm run check
pnpm run build && pnpm run verify && pnpm run a11y
```

These are what CI (`.github/workflows/ci.yml`) runs.

## Code of conduct

Participation is governed by our [Code of Conduct](CODE_OF_CONDUCT.md).

## License

By contributing, you agree that your contribution is offered under the terms in [LICENSE.md](LICENSE.md).
