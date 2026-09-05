# Claude Code skills for ADRs

This repository ships two [Claude Code](https://claude.com/claude-code) skills under [`skills/`](skills/), so an AI coding agent can write and maintain ADRs the way this project recommends:

- [`architecture-decision-record-skill`](skills/architecture-decision-record-skill/) — general purpose, for anyone writing an ADR in any project. Helps decide whether a decision needs an ADR, sets up an `adr/` or `decisions/` directory, names the file, picks a template from the eleven bundled skeletons, and writes solid Context/Decision/Consequences sections.

- [`architecture-decision-record-maintainer-skill`](skills/architecture-decision-record-maintainer-skill/) — for maintainers of this repository specifically. Documents the repo's layout, the README/locales mirroring convention, and the exact steps for adding a new template, example, or tool link.

To use a skill, copy its folder into `.claude/skills/` at the root of the repository you're working in (or into `~/.claude/skills/` to make it available in every project), then ask Claude Code to write or review an ADR.
