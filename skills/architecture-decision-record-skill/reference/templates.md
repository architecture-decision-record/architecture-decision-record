# ADR template skeletons

Copy the relevant skeleton into the new file and fill in the bracketed parts.
Sources are noted for attribution; full prose descriptions of each field are
in the upstream repo if the user wants more detail than fits here.

## Nygard (default, simplest)

Source: [Documenting architecture decisions — Michael Nygard](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)

```md
# Title

## Status

What is the status, such as proposed, accepted, rejected, deprecated, superseded, etc.?

## Context

What is the issue that we're seeing that is motivating this decision or change?

## Decision

What is the change that we're proposing and/or doing?

## Consequences

What becomes easier or more difficult to do because of this change?
```

## MADR (Markdown Any Decision Records)

Source: [adr.github.io/madr](https://adr.github.io/madr/). Good when the
choice was between several concrete options and the pros/cons matter.

```md
# [short title of solved problem and solution]

* Status: [proposed | rejected | accepted | deprecated | superseded by ADR-xxxx] <!-- optional -->
* Deciders: [list everyone involved in the decision] <!-- optional -->
* Date: [YYYY-MM-DD when the decision was last updated] <!-- optional -->

Technical Story: [description | ticket/issue URL] <!-- optional -->

## Context and Problem Statement

[Describe the context and problem statement, e.g. in two or three sentences.
You may want to phrase the problem as a question.]

## Decision Drivers <!-- optional -->

* [driver 1, e.g. a force, facing concern, …]
* [driver 2]

## Considered Options

* [option 1]
* [option 2]
* [option 3]

## Decision Outcome

Chosen option: "[option 1]", because [justification, e.g. only option that
meets a must-have criterion | comes out best in the comparison below].

### Positive Consequences <!-- optional -->

* [e.g. improvement of a quality attribute, follow-up decisions required, …]

### Negative Consequences <!-- optional -->

* [e.g. compromises a quality attribute, follow-up decisions required, …]

## Pros and Cons of the Options <!-- optional -->

### [option 1]

* Good, because [argument a]
* Bad, because [argument c]

### [option 2]

* Good, because [argument a]
* Bad, because [argument c]

## Links <!-- optional -->

* [Link type] [Link to ADR] <!-- e.g. Refined by ADR-0005 -->
```

## Tyree & Akerman (enterprise, traceability-heavy)

Source: ["Architecture Decisions: Demystifying Architecture" — Jeff Tyree and
Art Akerman, Capital One](https://www.utdallas.edu/~chung/SA/zz-Impreso-architecture_decisions-tyree-05.pdf).
Use when the decision must trace to requirements, principles, and other
decisions in a larger governance process.

```md
* **Issue**: The architectural design issue being addressed, leaving no
  question of why it's being addressed now.
* **Decision**: The architecture's direction — the position selected.
* **Status**: pending | decided | approved
* **Group**: A simple grouping (integration, presentation, data, …) to
  organize the set of decisions.
* **Assumptions**: The underlying assumptions in the decision environment —
  cost, schedule, technology, etc.
* **Constraints**: Any additional constraints the chosen alternative poses.
* **Positions**: The positions (viable options/alternatives) considered.
* **Argument**: Why this position was selected — cost, time to market,
  resource availability, etc.
* **Implications**: What this decision requires next — new requirements,
  renegotiated scope, staff training, other decisions triggered.
* **Related decisions**: Other decisions this one relates to.
* **Related requirements**: The requirements/objectives this decision maps to.
* **Related artifacts**: Architecture, design, or scope docs this impacts.
* **Related principles**: Which agreed-upon enterprise principles this aligns with.
* **Notes**: Notes and issues raised during the socialization process.
```

## ITD — Important Technical Decision (lean, executive-fast)

Source: ["ITDs: a lean ADR for executive technical decision-making at
scale" — Ignacio Larrañaga](https://ignaciolarranaga.medium.com/itds-a-lean-adr-for-executive-technical-decision-making-at-scale-e18bb3f6a563).
Good for a narrow technical choice (a model, a library, a CI/CD strategy)
that isn't strictly architectural but still needs quick, scannable review.

```md
# Title

State the decision itself, not a description of the topic — e.g. "Use
Qwen2.5 1.5B Instruct for on-device translation".

## The Problem

One sentence stating what we are trying to solve.

## Options Considered

The alternatives that were on the table, with the selected option in **bold**.

## Rationale

Only the decisive factors that led to the choice — not an exhaustive
pros/cons list.

## Notes

Optional. Constraints, assumptions, or links worth recording.
```

## Business case (vendor/tool selection, cost/SWOT-heavy)

Emphasizes building a case for a decision: criteria, candidates, and costs.

```md
# Title
(a short present-tense imperative phrase, < 50 chars, like a git commit message)

## Status
proposed | accepted | rejected | deprecated | superseded

## Evaluation criteria
What are we seeking to discover, and why? Be specific.

## Candidates to consider
How were candidates discovered? List all candidates and related options.

## Research and analysis of each candidate
For each candidate:
- Does/doesn't meet criteria, and why
- Cost analysis (licensing, training, operating, metering)
- SWOT analysis (strengths, weaknesses, opportunities, threats)
- Internal opinions/feedback (from the team, from other stakeholders)
- External opinions/feedback (who evaluated, what else they considered, how
  the winner has performed since, what they'd advise differently now)

## Recommendation
State the recommendation and the specifics behind it.
```

## Alexandrian pattern (Y-statement style)

A one-paragraph summary structure, with narrative sections behind it.

```md
## Prologue (Summary)

In the context of (use case)
facing (concern)
we decided for (option)
to achieve (quality)
accepting (downside).

## Discussion (Context)

Explain the forces at play (technical, political, social, project) — the
story behind the problem being resolved.

## Solution (Decision)

Explain how the decision solves the problem.

## Consequences (Results)

Explain the results of the decision over the long term. Did it work, not
work, get changed or upgraded?
```

## Planguage (formal, testable non-functional requirements)

Source: [Specifying Effective Non-functional Requirements](https://www.iaria.org/conferences2012/filesICCGI12/Tutorial%20Specifying%20Effective%20Non-func.pdf).
Not a full ADR shape — a keyword vocabulary to make a requirement/decision
precise and testable:

```
Tag:          a unique, persistent identifier
Gist:         a brief summary of the requirement/area addressed
Requirement:  the text detailing the requirement itself
Rationale:    the reasoning that justifies the requirement
Priority:     priority and claim on resources
Stakeholders: parties materially affected
Status:       draft | reviewed | committed | …
Owner:        person responsible for implementing
Author:       person who wrote the requirement
Revision:     version number
Date:         date of the most recent revision
Assumptions:  anything that could cause problems if untrue now or later
Risks:        anything that could cause malfunction, delay, negative impact
Defined:      definition of a term (better to keep a glossary instead)
```

## EdgeX Foundry template

Source: [EdgeX Foundry ADR template](https://docs.edgexfoundry.org/2.3/design/adr/template/).
Use when contributing to an EdgeX-style project.

```md
# Architecture Decision Record (ADR) template

### Submitters
- Name (Organization)

## Change Log
State is one of: pending, approved, amended, deprecated.
- [Status](URL of pull request) YYYY-MM-DD

## Referenced Use Case(s)
At least one relevant, approved use case.
- [Use Case Name](URL)

## Context
- How is the design architecturally significant enough to warrant an ADR
  (versus a simple issue + PR)?
- The high-level design approach (details in Proposed Design below).

## Proposed Design
- Services/modules impacted, added
- Model/DTO impact, API impact, config impact, devops impact

## Considerations
Alternatives, concerns, related issues, questions raised in debate, and how
(if) they were resolved.

## Decision
Agreed-upon implementation details, caveats, future considerations,
deferred issues. Note any requirements not satisfied by the proposed design.

## Other Related ADRs
- [ADR Title](URL) — relevance

## References
- [Title](URL)
```

## arc42 (full architecture doc; ADR is one section)

Source: [arc42.org](https://arc42.org/overview). Use only when the user
wants full architecture documentation, not a standalone ADR — architecture
decisions live in §9 "Architectural Decisions", referencing the fundamental
choices already summarized in §4 "Solution Strategy". The full arc42
template has 12 sections (Introduction & Goals, Constraints, Context &
Scope, Solution Strategy, Building Block View, Runtime View, Deployment
View, Crosscutting Concepts, Architectural Decisions, Quality Requirements,
Risks & Technical Debt, Glossary) — point the user to arc42.org for the
complete template rather than reproducing all of it here.

## Gareth Morgan (traffic-light options comparison)

Numbered ADR with a visual, at-a-glance options comparison.

```md
# [000] Title

## Status - DRAFT / ACTIVE / DEPRECATED by [000] / SUPERSEDES [000]

## Context
Briefly describe the problem(s) this ADR addresses, and why they exist.

## Decided Approach
The architecturally significant decision made, and how it addresses Context.

## Consequences
Impact on architecture characteristics and functional requirements.

## Governance
How will outcomes be monitored? How will compliance be ensured?

## Options Analysis
Trade-off analysis across options — optionally a table per option scored
red/amber/green against ease of implementation, timescales, strategic value,
functional fit, and non-functional fit (scalability, performance,
availability, etc.).
```

## GIG Cymru NHS Wales (options → analysis → recommendation narrative)

```md
# {Title}

**Status**: Proposed | Under Review | Accepted | Rejected | Superseded | Deprecated
**Updated**: {YYYY-MM-DD}

## Summary
2-4 sentences: the core problem/question/opportunity and a hint at the decision.

## Drivers
Why this decision, why now — the motivations/needs/problems.

## Options
For each option considered (even rejected ones): description, facts, links.

## Options Analysis
For each option: Pro / Con / Other statements, tied back to the Drivers.

## Recommendation
The final decision, the option chosen, and why — tie back to the Drivers.

### Consequences (optional)
Expected outcomes, both positive and negative; known limitations/costs/risks
accepted.

### Confirmation (optional)
How implementation will be verified and compliance maintained over time —
reviews, tests, metrics, who owns follow-up.

## More Information (optional)
Supporting links, who was involved, when to re-evaluate.
```
