# Decision guardrails for pull requests

[Decision Guardian](https://github.com/DecispherHQ/decision-guardian)
automatically surfaces the right decision records at the right moment — when a
developer is actively modifying the code those decisions cover. Instead of
hoping developers read a docs folder before merging, the relevant context
appears directly on the pull request.

This works for any kind of decision record: architecture decisions, data
decisions, compliance decisions, clinical and medical decisions, security
decisions, and more.

Works with any CI system (GitLab, Jenkins, CircleCI) and as a pre-commit hook.
Open source. MIT license.

[ADR Guard](https://github.com/chohan-sarmad-ali/delivery-gates) is a GitHub
Action that fails a pull request when watched code paths change without an
architecture decision record being added or updated. Waivers are explicit: an
`ADR-Exempt:` line with a reason passes the gate and is written into the job
summary. Template-agnostic, no dependencies. Open source. MIT license.
