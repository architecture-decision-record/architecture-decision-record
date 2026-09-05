---
name: architecture-decision-record-maintainer-skill
description: Use when working ON the joelparkerhenderson/architecture-decision-record repository itself (this repo) — adding or editing a decision-record template, example, tool/guardrail link, or translation; reviewing a contributor's PR against it; or keeping README.md and locales/en/ in sync. Not for writing an ADR for some other project — use architecture-decision-record-skill for that.
---

# architecture-decision-record repo maintainer skill

Helps maintain *this* repository: a curated collection of ADR templates,
examples, teamwork guidance, and tool/guardrail links, published as
`README.md` and mirrored per-locale under `locales/`.

## Repo layout

```
README.md                    canonical English content — most PRs touch only this
locales/README.md            language index (links to locales/<lang>/)
locales/index.md             same, duplicate for the doc-site renderer
locales/<lang>/documents/    per-section mirrors of README.md prose sections
locales/<lang>/examples/     one dir per ADR example, each with index.md + README.md
locales/<lang>/templates/    one dir per ADR template, each with index.md (+ LICENSE.md)
locales/{cy,es,fr,ja,ko,tr}/ non-English translations
```

Every content directory has an `index.md` and (where meant for GitHub
browsing) an identical `README.md` — keep both in sync if you touch one.
`.locale-peer-id` files are opaque IDs used by the maintainer's own
translation/sync tooling; never hand-edit them, and don't worry about
regenerating them.

## The `<div class="include">` mirroring pattern

Several `README.md` sections are wrapped like this:

```html
<div class="include" data-path="locales/en/documents/how-to-start-using-adrs">

## How to start using ADRs
...
</div>
```

The wrapped content is duplicated (sometimes with tiny wording drift) in
`locales/en/documents/<slug>/index.md`. In practice, **contributor PRs only
ever touch `README.md`**, editing content inside these divs directly — see
recent history (`git log --stat -- README.md`, and note it's the only file
changed in typo fixes, new tool links, etc.). Assume the repo owner's own
tooling reconciles `locales/en/documents/` and the other-language
translations from `README.md` afterward; don't attempt to keep them in sync
yourself unless the user explicitly asks you to edit inside `locales/`.

**Practical rule:** for prose changes to an existing `## Section` in
`README.md` (wording tweaks, typo fixes, new paragraphs of guidance),
edit `README.md` only.

## Adding a new tool / guardrail link

This repo tracks two different kinds of external tool:

1. **A PR/CI guardrail** (something that gates or surfaces ADRs on a pull
   request) — add it in **two** places in `README.md`:
   - A short paragraph under `## Decision guardrails for pull requests`
     (name as a link, what it does, CI/hook compatibility, license).
   - A one-line bullet under `Tools:` in `## For more information`.
2. **A general-purpose tool** (CLI, framework support, AI agent skill, etc.,
   not specifically a PR guardrail) — add it only under `Tools:` in
   `## For more information`.

Follow the existing terse style: name as a markdown link, then a short
factual description, license noted only if open source. See the "ADR Guard"
and "Decision Guardian" entries as the pattern to match.

## Adding a new ADR template

1. Create `locales/en/templates/decision-record-template-<slug>/index.md`
   (and a `LICENSE.md` if the source template carries one, e.g. Nygard's).
   Title the file `# Decision record template <by|for|using> <name>`, credit
   the source with a link, then either narrative field descriptions or a
   literal copy of the template's headings.
2. Add the same content as `README.md` in that directory too (contributors
   before you have kept these byte-identical — `diff` the two before
   committing).
3. Add a bullet linking to the new directory in **both**
   `locales/en/templates/index.md` and `locales/en/templates/README.md`
   (these two files are kept byte-identical — verify with `diff`).
4. Add the template to `README.md` in **two** places:
   - The `Templates:` bullet list near the top of the file.
   - The `## ADR example templates` section further down, with a short
     parenthetical characterizing it (e.g. "(simple and popular)",
     "(more MBA-oriented, with costs, SWOT, and more opinions)").

## Adding a new ADR example

1. Create `locales/en/examples/<slug>/` with `index.md` (and matching
   `README.md`) containing the worked example.
2. Add a bullet in `locales/en/examples/index.md` (and its `README.md` twin).
3. Add a bullet under `Examples:` near the top of `README.md` if it's
   prominent enough to feature there (the top list is a curated subset, not
   every example — check current entries before deciding).

## Conventions to match

- **Commit/PR titles**: present-tense imperative phrase, same convention
  the repo recommends for ADR file names itself — e.g. "Add ADR Guard to
  decision guardrails and tools", "Fix typo in C4 model description",
  "Rename ADR example file to 'choose-database.md'".
- **Link style**: `[Descriptive Name](url)` inline, not reference-style
  links or bare URLs, except where a URL is the whole point (e.g. a raw
  wikipedia link with a short label).
- **Tone**: terse, factual, vendor-neutral. Avoid marketing language when
  describing a third-party tool; state what it does and its license.
- No CI, no build step, and no `CONTRIBUTING.md` exist in this repo —
  don't invent one unless the user asks; the review process is plain GitHub
  PR review by the repo owner.

## Reviewing a contributor's PR against this repo

Check for:
- Only `README.md` changed (expected for prose/link additions — flag it as
  unusual, not necessarily wrong, if `locales/` was hand-edited instead).
- New template/example additions include the `locales/en/templates|examples`
  directory *and* the corresponding `index.md`/link updates described above,
  not just a `README.md` mention with nothing to link to.
- New external tool/service links: is it a genuine ADR-related tool
  (templates, tooling, guardrails, fitness functions), not off-topic?
  License and a one-line factual description should be present.
- Formatting matches surrounding style (heading level, bullet spacing —
  this repo uses blank lines between list items in many sections).
- No secrets, no unrelated reformatting/rewrapping of unrelated paragraphs
  bundled into an unrelated change.
