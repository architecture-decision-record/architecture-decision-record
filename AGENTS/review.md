# Review a contributor's pull request

- Prose and link additions normally touch only the root `README.md`; flag
  hand-edits under `locales/` as unusual, not wrong.
- New templates/examples must include the directory, `index.md`, identical
  `README.md`, and index links, not just a README mention.
- New tool links: genuinely ADR-related, vendor-neutral tone, terse factual
  description, license noted only if open source, inline `[Name](url)` style.
- Check counts and lists in `spec/` and `static/llms.txt` still match.
- Check commit/PR title is a present-tense imperative phrase.
- No CI or `CONTRIBUTING.md` exists; do not invent one.
