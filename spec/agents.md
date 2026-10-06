# AI agents

## Skills (`skills/`)

| Folder | Purpose |
|---|---|
| `architecture-decision-record-skill` | Writing an ADR in any project; `reference/templates.md`, `reference/writing-guide.md` |
| `architecture-decision-record-maintainer-skill` | Maintaining this repository |

Each has a `SKILL.md` with `name` and `description` frontmatter. The
description must state when to use it and when not to. Skill text must agree
with [repository.md](repository.md) and [locales.md](locales.md).

## Agent files

- `architecture-decision-record.github.io/AGENTS.md` — website working rules.
- Root `AGENTS.md` — repository-wide rules and map.
- `AGENTS/*.md` — task guides, indexed by `AGENTS/README.md`; they cite the spec rather than restate it.
- Each `AGENTS.md`/`CLAUDE.md` stays under 40,000 bytes and points here
  rather than duplicating the spec.

## llms.txt

`architecture-decision-record.github.io/static/llms.txt` follows the llms.txt
format (H1, blockquote summary, link sections) and states the template,
example, and locale counts from [repository.md](repository.md#counts).
