# Writing good ADRs — checklist and teamwork notes

## Characteristics of a good ADR

- **Rationale**: explain the reasons for the decision — context, pros/cons
  of the options, feature comparisons, cost/benefit, not just the outcome.
- **Specific**: one ADR, one decision. Split bundled decisions into
  separate files.
- **Timestamped**: date anything that may change over time — costs,
  schedules, scaling numbers, vendor terms.
- **Immutable by default**: don't rewrite an accepted ADR's original
  content. Amend it by adding new dated information, or supersede it with a
  new ADR. (Some teams deliberately choose a "living document" style
  instead — inserting new info into the existing ADR with a date stamp and
  a note that it arrived after the decision. Either is fine; be consistent
  within one project and say which convention is in use.)

## Writing the Context section

- Explain the organization's actual situation and business priorities, not
  just the technical problem.
- Include the social/skills makeup of the team where it's relevant to the
  decision.
- State pros and cons in terms that align with this team's actual needs and
  goals — not generic boilerplate.

## Writing the Consequences section

- Cover what becomes easier *and* what becomes harder.
- Call out any subsequent ADRs this decision now requires — one ADR often
  triggers the need for more, e.g. a big overarching choice creating the
  need for several smaller follow-on decisions.
- If the team does after-action reviews (common: one month later, to
  compare the ADR against what actually happened), note that expectation
  here.

## Deciding whether a decision needs an ADR at all

Justifies raising one:
- Future developers will need to understand the "why" of what's being done.
- The decision is architecturally significant, cross-team, or hard to reverse.

Justifies skipping one:
- The decision isn't architectural, or is tiny (minimal-risk,
  self-contained, single-developer).
- It's already fully covered by an existing standard/policy/doc.
- It's temporary — a workaround, proof of concept, or experiment.

## Lifecycle (if the team wants a formal one)

A common shape: **Initiating → Researching → Evaluating → Implementing →
Maintaining → Sunsetting.**

Useful acceptance-criteria questions to gate moving between stages:
- Is the problem clearly articulated?
- Have the alternatives actually been considered?
- Are trade-offs well understood and documented?
- Is all relevant context in place, and have all relevant stakeholders been
  involved?
- Has all feedback been incorporated?

## Roles worth naming on an ADR (if the team wants accountability)

Proposer, researcher, evaluator, reviewer, approver, maintainer. A simple
version: give each ADR a primary contact, secondary contact, and
accountable team, responsible for communication, publication, maintenance,
periodic review (e.g. at least once a year), and eventual sunsetting.

## Fitness functions — making a decision testable, not just documented

A decision record documents the decision; a fitness function is an
automated, objective check (run in CI) that the decision is still being
followed.

- Example decision: "We use event sourcing for audit requirements."
- Example fitness function: CI asserts that all state changes produce events.

Tools: [ArchUnit](https://www.archunit.org/) (Java),
[ArchUnitTS](https://github.com/LukasNiessen/ArchUnitTS) (TypeScript/JavaScript).

If asked to write an AI-based fitness function prompt to check whether work
matches the decisions on record, this shape works well:

```txt
IMPORTANT: Prefer retrieval-led reasoning over pre-training-led reasoning.
IMPORTANT: Turn on extended thinking. Turn on expert advice. Turn on search.

This is a fitness function to evaluate if our work is
using all our decisions, and is correct and accurate.

- Our decisions are here: {url}
- Our work to evaluate is here: {url}

Explain any errors, problems, gaps, weaknesses. Be direct. Be decisive.
```
