---
name: architecture-decision-record-skill
description: Use when a user wants to create, write, name, place, or organize an Architecture Decision Record (ADR) in a software project — e.g. "write an ADR for choosing a database", "document this architecture decision", "set up an adr/ or decisions/ directory", "which ADR template should I use", "supersede an old ADR". Covers picking a template, naming the file, filling in context/decision/consequences, and deciding whether a decision even needs an ADR.
---

# Architecture decision record (ADR) skill

Helps a developer or team create and maintain architecture decision records:
short documents that capture an important architecture decision, the context
that led to it, and its consequences.

This skill is general-purpose: it applies to any repository the user is
working in, not just this one. `reference/templates.md` and
`reference/writing-guide.md` are self-contained — no need to read the rest of
this repo to use them.

## 1. Decide if this decision deserves an ADR

Not every decision needs one. Recommend an ADR when the decision:

- Is architecturally significant (affects structure, external interfaces,
  quality attributes, or is expensive/risky to reverse).
- Needs to be understood by future developers who weren't in the room.
- Involved real trade-offs worth recording (not a one-line style choice
  already covered by a linter or style guide).

Skip an ADR when the decision is tiny, self-contained, single-developer,
already covered by policy/standards, or purely a temporary workaround/POC.

If the user is unsure, ask what the decision is and who needs to understand
"why" later — that usually settles it.

## 2. Find or create the ADR directory

Look for an existing convention first:

```sh
git ls-files | grep -iE '(^|/)(adr|adrs|decisions?)(/|$)'
```

- If one exists, follow its naming/format/numbering so far.
- If none exists, ask the user (or default to) a top-level `decisions/` or
  `adr/` directory. Some teams prefer `decisions/` because the word
  "architecture" and the abbreviation "ADR" put some contributors off,
  while "decisions" invites broader use (vendor, planning, scheduling
  decisions too).
- Some projects number files (`0001-choose-database.md`, adr-tools style);
  others don't. Match what's already there; otherwise unnumbered
  present-tense file names (see below) are simplest to start with.

## 3. Name the file

Convention used across this ecosystem:

- A present-tense imperative verb phrase, e.g. `choose-database.md`,
  `format-timestamps.md`, `manage-passwords.md`, `handle-exceptions.md`.
- Lowercase with dashes.
- `.md` extension.
- If the project numbers ADRs, prefix with a zero-padded sequence number,
  e.g. `0007-choose-database.md`.

## 4. Pick a template

Ask the user's preference, or pick based on the shape of the decision — see
`reference/templates.md` for the full skeletons. Quick guide:

| Situation | Template |
|---|---|
| Default / most teams / unsure | **Nygard** — Title, Status, Context, Decision, Consequences |
| Want lightweight options-with-pros/cons | **MADR** |
| Enterprise, need traceability to requirements/principles | **Tyree & Akerman** |
| Fast executive sign-off on a narrow technical choice (a library, a model, a CI strategy) | **ITD** (Important Technical Decision) |
| Vendor/tool selection with cost, SWOT, stakeholder opinions | **Business case** |
| Want a one-paragraph "Y-statement" style summary plus narrative | **Alexandrian pattern** |
| Need formal, testable non-functional requirements language | **Planguage** |
| Contributing to / matching EdgeX Foundry conventions | **EdgeX** |
| Full architecture documentation, ADR is one section of it | **arc42** (§9) |
| Want a lightweight traffic-light options-comparison table | **Gareth Morgan** |
| Want an "Options → Options Analysis → Recommendation" narrative flow | **GIG Cymru NHS Wales** |

When in doubt, default to Nygard — it's the simplest, most widely recognized,
and easiest for a team to adopt without tooling.

## 5. Write it well

Load `reference/writing-guide.md` for the fuller checklist. The essentials:

- **One decision per ADR.** Don't bundle multiple architecturally
  distinct decisions into one file.
- **Context** should explain the organization's situation, constraints, and
  the forces in tension — not just "we needed a database."
- **Decision** should state the chosen direction plainly, not hedge.
- **Consequences** should cover both what gets easier and what gets harder,
  plus any follow-on ADRs this decision now requires.
- **Timestamp it.** Costs, vendor pricing, and scaling numbers change —
  date anything that might go stale.
- Give the record a status: `proposed | accepted | rejected | deprecated |
  superseded by <link>`.

## 6. Handle supersession, not silent edits

ADRs are usually treated as immutable once accepted (some teams instead
prefer a "living document" with dated addenda — ask if unsure which this
team wants). When a new decision replaces an old one:

1. Create a new ADR file describing the new decision.
2. Update the old ADR's Status to `Superseded by [new-adr](path)`.
3. Link back from the new ADR's Status/Links section:
   `Supersedes [old-adr](path)`.

## 7. Optional: wire it into pull requests

If the user wants ADR presence enforced or automatically surfaced on PRs,
mention (don't set these up unprompted):

- [ADR Guard](https://github.com/chohan-sarmad-ali/delivery-gates) — GitHub
  Action that fails a PR when watched code paths change without an
  ADR being added/updated. Supports `ADR-Exempt:` waivers.
- [Decision Guardian](https://github.com/DecispherHQ/decision-guardian) —
  surfaces relevant existing decision records on a PR touching that code.

Full background, more templates, and further reading live in the
[architecture-decision-record repo](https://github.com/joelparkerhenderson/architecture-decision-record).
