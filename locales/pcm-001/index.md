# Architecture decision record (ADR)

Architecture decision record (ADR) na document wey dey capture important architecture decision wey dem make together with im context and consequences.

> [!IMPORTANT]
> Do your own due dilligence for dis resources before you use dem for any critical systems.

Wetin dey inside:

- [Wetin be architecture decision record?](#wetin-be-architecture-decision-record)
- [How to start use ADR](#how-to-start-use-adr)
- [How to start use ADR with tools](#how-to-start-use-adr-with-tools)
- [How to start use ADR with git](#how-to-start-use-adr-with-git)
- [Claude Code skills fo ADR](#claude-code-skills-fo-adr)
- [Rules fo how to name ADR file](#rules-fo-how-to-name-adr-file)
- [Advice fo how to write good ADR](#advice-fo-how-to-write-good-adr)
- [ADR example templet dem](#adr-example-templet-dem)
- [Teamwork advice fo ADR](#teamwork-advice-fo-adr)
- [Teamwork questions fo ADR](#teamwork-questions-fo-adr)
- [Next step concepts fo ADR](#next-step-concepts-fo-adr)
- [Architecture diagrams & views & viewpoints](#architecture-diagrams--views--viewpoints)
- [Fitness functions fo decisions as code](#fitness-functions-fo-decisions-as-code)
- [Decision guardrails fo pull request](#decision-guardrails-fo-pull-request)
- [Fo more information](#fo-more-information)

Templets:

- [Decision record templet wey Jeff Tyree and Art Akerman mek](templet/decision-record-templet-wey-jeff-tyree-and-art-akerman-mek/)
- [Decision record templet wey Michael Nygard mek](templet/decision-record-templet-wey-michael-nygard-mek/)
- [Decision record templet wey EdgeX mek](templet/decision-record-templet-wey-edgex-mek/)
- [Decision record templet wey arc42 mek](templet/decision-record-templet-wey-arc42-mek/)
- [Decision record templet fo Alexandrian pattern](templet/decision-record-templet-fo-alexandrian-pattern/)
- [Decision record templet fo business case](templet/decision-record-templet-fo-business-case/)
- [Decision record templet fo MADR Project](templet/decision-record-templet-fo-madr-project/)
- [Decision record templet wey dey use Planguage](templet/decision-record-templet-wey-dey-use-planguage/)
- [Decision record templet wey Paulo Merson mek](https://github.com/pmerson/ADR-template)
- [Decision record templet wey Olaf Zimmermann mek](https://medium.com/olzzio/y-statements-10eb07b5a177)
- [Decision record templet wey Gareth Morgan mek](templet/decision-record-templet-wey-gareth-morgan-mek/)
- [Decision record templet wey GIG Cymru NHS Wales mek](templet/decision-record-templet-wey-gig-cymru-nhs-wales-mek/)
- [Decision record templet fo Important Technical Decisions (ITDs) wey Ignacio Larrañaga mek](templet/decision-record-templet-fo-important-technical-decision/)

Examples:

- [Framework fo CSS](eksample/framework-fo-css/)
- [How to configure environment variable](eksample/how-to-configure-environment-variable/)
- [Metric, monitor, alert](eksample/metric-monitor-and-alert/)
- [Microsoft Azure DevOps](eksample/microsoft-azure-devops/)
- [Monorepo or multirepo](eksample/monorepo-or-multirepo/)
- [Programming languages](eksample/programming-language-dem/)
- [Where to keep secret](eksample/where-to-keep-secret/)
- [Format fo timestamp](eksample/how-to-format-timestamp/)
- [Many more...](eksample/)

## Wetin be architecture decision record?

**Architecture decision record** (ADR) na document wey dey capture important architectural decision wey dem make together with im context and consequences.

**Architecture decision** (AD) na software design choice wey address significant requirement.

**Architecture decision log** (ADL) na di collection of all ADR wey dem create and maintain for particular project (or organization).

**Architecturally-significant requirement** (ASR) na requirement wey get measurable effect on software system architecture.

All dis one dey inside di topic of **architecture knowledge management** (AKM).

Di goal of dis document na to give fast overview of ADR, how to create dem, and where to look for more information.

Abbreviations:

  * **AD**: architecture decision

  * **ADL**: architecture decision log

  * **ADR**: architecture decision record

  * **AKM**: architecture knowledge management

  * **ASR**: architecturally-significant requirement

## How to start use ADR

To start use ADR, talk with your teammates about dis areas.

Decision identification:

  * How urgent and how important be di AD?

  * E must make now, or e fit wait until dem know more?

  * Both personal and collective experience, and also recognized design methods and practices, fit help with decision identification.

  * Ideally, maintain decision todo list wey go complement di product todo list.

Decision making:

  * Plenty decision making techniques dey, both general ones and software architecture specific ones, for instance, dialogue mapping.

  * Group decision making na active research topic.

Decision enactment and enforcement:

  * Dem dey use ADs for software design; so dem must communicate dem to di stakeholders of di system wey dey fund am, develop am, and operate am, and di stakeholders must accept dem.

  * Architecturally evident coding styles and code reviews wey focus on architectural concerns and decisions na two related practices.

  * Dem must also (re-)consider ADs wen dem dey modernize one software system for software evolution.

Decision sharing (optional):

  * Plenty ADs dey recur across projects.

  * So, experiences with past decisions, both good and bad, fit be valuable reusable assets wen you dey use explicit knowledge management strategy.

Decision documentation:

  * Plenty templates and tools dey for decision capturing.

  * Check agile communities, e.g. M. Nygard's ADRs.

  * Check traditional software engineering and architecture design processes, e.g. table layouts wey IBM UMF and Tyree and Akerman from CapitalOne suggest.

For more:

  * Di steps above na from di Wikipedia entry on [Architectural Decision](https://en.wikipedia.org/wiki/Architectural_decision)

## How to start use ADR with tools

- [MySpec](https://myspec.dev) — Automated specification and architectural decision platform wey dey structure project constitution, technical architecture, and ADRs into clean Markdown wey dem dey serve through MCP.

You fit start use ADR with tools any way wey you want.

For example:

  * If you like to use Google Drive and online editing, then you fit create Google Doc, or Google Sheet.

  * If you like to use source code version control, like git, then you fit create one file for each ADR.

  * If you like to use project planning tools, like Atlassian Jira, then you fit use di tool planning tracker.

  * If you like to use wikis, like MediaWiki, then you fit create ADR wiki.

## How to start use ADR with git

If you like to use git version control, then na so we like to start use ADR with git for typical software project wey get source code.

Create directory for ADR files:

```sh
$ mkdir adr
```

For each ADR, create one text file, like `choose-database.md`:

```sh
$ vi choose-database.md
```

Write anything wey you want inside di ADR. Check di templates for dis repository for ideas.

Commit di ADR to your git repo.

## Claude Code skills fo ADR

Dis repository get two [Claude Code](https://claude.com/claude-code) skills inside [`skills/`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/), so AI coding agent fit write and maintain ADR di way wey dis project recommend:

- [`architecture-decision-record-skill`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/architecture-decision-record-skill/) — general purpose, for anybody wey dey write ADR for any project. E dey help decide whether decision need ADR, e dey set up `adr/` or `decisions/` directory, e dey name di file, e dey pick templet from di eleven skeletons wey dey inside, and e dey write solid Context/Decision/Consequences sections.

- [`architecture-decision-record-maintainer-skill`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/architecture-decision-record-maintainer-skill/) — for maintainers of dis repository specifically. E document di repo layout, di README/locales mirroring convention, and di exact steps to add new templet, example, or tool link.

To use skill, copy im folder go `.claude/skills/` for di root of di repository wey you dey work for (or go `~/.claude/skills/` so e go dey available for every project), then ask Claude Code to write or review ADR.

## Rules fo how to name ADR file

If you choose to create your ADR dem with typical text files, then you fit want to come up with your own ADR file name convention.

We prefer to use file name convention wey get one specific format.

Examples:

  * choose-database.md

  * format-timestamps.md

  * manage-passwords.md

  * handle-exceptions.md

Our file name convention:

  * Di name get present tense imperative verb phrase. Dis one dey help readability and e match our commit message format.

  * Di name dey use lowercase and dashes (same as dis repo). Dis na balance between readability and system usability.

  * Di extension na markdown. Dis fit useful for easy formatting.

## Advice fo how to write good ADR

Characteristics of good ADR:

* Rationale: Explain di reasons for to do di particular AD. Dis fit include di context (check below), pros and cons of different potential choices, feature comparisons, cost/benefit discussions, and more.

* Specific: Each ADR suppose be about one AD, no be many ADs.

* Timestamps: Identify wen dem write each item for di ADR. Dis one important well well for aspects wey fit change as time dey go, like costs, schedules, scaling, and di like.

* Immutable: No alter information wey dey inside ADR already. Instead, amend di ADR by to add new information, or supersede di ADR by to create new ADR.

Characteristics of good "Context" section for ADR:

* Explain your organization situation and business priorities.

* Include rationale and considerations based on social and skills makeups of your teams.

* Include pros and cons wey relevant, and describe dem for terms wey align with your needs and goals.

Characteristics of good "Consequences" section for ADR:

* Explain wetin follow after you make di decision. Dis fit include di effects, outcomes, outputs, follow ups, and more.

* Include information about any subsequent ADR. E common small for one ADR to trigger need for more ADRs, like wen one ADR make big overarching choice, wey then create needs for more smaller decisions.

* Include any after-action review processes. E typical for teams to review each ADR one month later, to compare di ADR information with wetin don happen for actual practice, so dem go learn and grow.

New ADR fit take di place of previous ADR:

* Wen dem make AD wey replace or invalidate previous ADR, then dem suppose create new ADR

## ADR example templet dem

ADR example templet dem wey we don collect for di net:

- [ADR templet wey Michael Nygard mek](templet/decision-record-templet-wey-michael-nygard-mek/) (simple and popular)

- [ADR templet wey Jeff Tyree and Art Akerman mek](templet/decision-record-templet-wey-jeff-tyree-and-art-akerman-mek/) (more sophisticated)

- [ADR templet fo Alexandrian pattern](templet/decision-record-templet-fo-alexandrian-pattern/) (simple with context specifics)

- [ADR templet fo business case](templet/decision-record-templet-fo-business-case/) (more MBA-oriented, with costs, SWOT, and more opinions)

- [ADR templet fo Markdown Any Decision Records (MADR) project](templet/decision-record-templet-fo-madr-project/) (both simple and elaborate version; di one wey elaborate emphasize options and their pros and cons)

- [ADR templet wey dey use Planguage](templet/decision-record-templet-wey-dey-use-planguage/) (more quality assurance oriented)

- [Templet fo Important Technical Decisions (ITDs) wey Ignacio Larrañaga mek](templet/decision-record-templet-fo-important-technical-decision/) (lean and decision-first, dem optimize am for fast executive review)

## Teamwork advice fo ADR

If you dey think to use decision records with your team, then na dis advice we don learn from to work with plenty teams.

You get opportunity to lead your teammates, by to talk together about di "why", instead of to force di "what". For example, decision records na way for teams to think smarter and communicate better; decision records no valuable if na just after-the-fact forced paperwork requirement.

Some teams like di name "decisions" well pass di abbreviation "ADRs". Wen some teams use di directory name "decisions", e be like say light bulb turn on, and di team start put more information inside di directory, like vendor decisions, planning decisions, scheduling decisions, etc. All dis kinds of information fit use di same template. We hypothesize say people dey learn faster with words ("decisions") pass abbreviations ("ADRs"), and people dey more motivated to write work-in-progress docs wen dem remove di word "record", and also some developers and some managers no like di word "architecture".

For theory, immutability na ideal. For practice, mutability don work better for our teams. We dey insert di new info inside di ADR wey dey already, with date stamp, and note say di info come after di decision. Dis kind approach dey lead to "living document" wey all of us fit update. Typical updates na wen we get information thanks to new teammates, or new offerings, or real-world results of how we dey use things, or after-the-fact third-party changes like vendor capabilities, pricing plans, license agreements, etc.

## Teamwork questions fo ADR

### Who fit create ADR?

Consider areas like specific people, or specific roles, or specific teams, or specific departments; also consider if people, or roles, or teams, or department dey wey fit commission ADR, wey mean say dem fit request one wey another person go author.

Example answer: Any person for our organization wey don read di architecture decision record README page fit propose ADR, wey mean say di person fit start to write am, and share am with di team.

### Wetin justify to raise ADR?

Consider areas like your organization team ways of working, your software system structure, cross-team coordination, long-term maintainability, external interfaces, who you want make e benefit, and di like.

Example answer: We want create ADR wen we want make future developers understand di “why” of wetin we dey do.

### Wetin justify to no raise ADR?

Consider areas like decisions wey no be about architecture, or wey tiny like minimal-risk or self-contained or single-developer, or wey dem already cover fully for another place like by standards or policies or documentation, or wey temporary like workarounds or proofs of concepts or experiments.

Example answer: We want skip ADR wen decision limited for scope and time and risk and cost, or wen dem already cover am for another place.

### Wetin be di lifecycle of ADR?

Consider areas like di creation process, research process, decisioning process, implementation process, and sunsetting process. Consider how to track di ADR lifecycle as time dey go, like how to move di ADR from one state to di next state, and also how to communicate dis to stakeholders.

Example answer: We want make ADR get five lifecycle stages: Initiating → Researching → Evaluating → Implementing → Maintaining → Sunsetting.

### Wetin be di criteria for lifecycle steps of ADR?

Consider areas like acceptance criteria for ADR, wey mean say how you go know say e good enough to progress from one lifecycle step to di next? Di problem clear well well? Dem don consider di alternatives? Dem understand and document di trade-offs well enough?
All relevant context dey place? All relevant stakeholders dey involved? Dem don incorporate all feedback?

Example answer: We want make stakeholders vote on ADR wen di active team 1) don complete their research, 2) don complete their evaluation, 3) don publish di ADR proposal to di stakeholders with request for comments and timebox of one week, 4) dem don incorporate and address all stakeholder comments.

### Which roles and responsibilities dey interact with ADR?

Consider roles like proposer, researcher, evaluator, reviewer, approver, maintainer, and di like. Consider responsibilities like communication with stakeholders, to make sure say expectations dey met, to share on di website or intranet, and to review di work periodically and especially wen relevant changes happen.

Example answer: We want make each ADR always get primary contact person, secondary contact person, and accountable team; dem dey responsible for communications, publications, maintenance, periodic review at least once per year, and eventual sunsetting as e needed.

### How governance dey interact with ADR?

Consider areas like your organization ways of working, any special compliance needs like for legal aspects or human resource aspects, how you want handle consensus versus conflict versus escalation. Areas or people or teams dey wey fit get more influence pass others regarding ADR, like to fit approve am, or vote on am, or veto am?

Example answer: Di governance of ADR dey for dis priority order: di CEO, di CTO, di CLO, di team wey implement ADR, di experts for di team wey know di AD pass. No one else get governance unless dem describe am for di ADR.

### Which principles dey interact with ADR?

Consider areas like your organization ways of working wey include to move quickly versus to move slowly, for decision consensus versus decision conflict, and for risk preferences versus safety preferences, public discussion versus private discussion, and di like.

Example answer: We dey use di leadership principles of bias for action, disagree-and-commit, 70% estimates dey good enough for easily-reversable easily-isolatable decisions, and public ways of working except confidential information as our organization confidentiality agreement describe.

## Next step concepts fo ADR

[Arc42](https://arc42.org/) answer two questions for pragmatic way and dem fit tailor am to your specific needs. Wetin you suppose document/communicate about your architecture? How you suppose document/communicate am? Arc42 include architecture decision records plus guidance on goals, constraints, contexts, quality, risks, and more.

[The C4 model](https://c4model.com/) na approach to software architecture diagramming wey easy to learn and developer friendly. C4 na set of hierarchical diagrams for context, containers, components, code, plus supporting diagrams for system landscape, dynamic, and deployment.

## Architecture diagrams & views & viewpoints

Dem dey call architecture diagram "architecture view".

"Architecture view" na instance of "architecture viewpoint".

"Architecture viewpoint" get specific audience wey get specific concerns for mind.

Architecture viewpoint examples, view examples, and diagram examples:

- Business Capabilities

- High-level Business Processes

- [Value Streams](https://en.wikipedia.org/wiki/Value_stream)

- Software Functions wey dem map to application components

- [C4 Model](https://en.wikipedia.org/wiki/C4_model) Context Diagram (TO-BE / AS-IS)

- [C4 Model](https://en.wikipedia.org/wiki/C4_model) Container Diagram (TO-BE / AS-IS)

- [Entity-relationship Diagram](https://en.wikipedia.org/w/index.php?title=Entity_relationship_diagram) (ERD) to map data entities to application components

- [Sequence Diagrams](https://en.wikipedia.org/wiki/Sequence_diagram) to describe functional flows inside systems and for integrations

- [Business Process Model and Notation](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN) diagrams to describe data flows across application components

- [Business Process Model and Notation](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN) diagrams to describe business processes / user Scenarios

- [Identity and Access Management](https://en.wikipedia.org/wiki/Identity_and_access_management) (IAM) diagrams

- [Role-Based Access Control](https://en.wikipedia.org/wiki/Role-based_access_control) (RBAC) diagrams with roles per application component

- [Attribute-Based Access Control](https://en.wikipedia.org/wiki/Attribute-based_access_control) (ABAC) diagrams with attributes per application component

- Privacy diagrams

Related diagrams:

- Use Case Diagram dey show use cases to management/customers, wey come before requirements, wey come before di software architecture.

- Deployment Diagram dey show di physical hardware/computers wey dem deploy di software components to.
- Data Flow Diagram dey show how data dey move through di system and how dem dey transform am.
- Dem dey use Sequence Diagram to show how protocols like HTTP dey work on time axis.

- Activity Diagram dey depict di workflow of activities wey software system dey undertake, like NPC AI.

## Fitness functions fo decisions as code

Fitness functions na objective automated checks, wey dem write with programming code, wey dey verify say dem still dey maintain di decisions.

- Fitness functions dey make decisions testable and assurable.

- Fitness functions for decisions fit help quality assurance, regulatory processes, and governance goals well well.

### How fitness functions connect to decisions

Decision record dey document di decision, while fitness function dey assure di decision.

- Example decision: We dey use event sourcing for audit requirements.

- Example fitness function: We dey use di continuous integration server to test say all state changes must produce events.

### Why fitness functions dey help decisions

Objective measurements: Fitness functions dey pass or fail, so di work dey visible and clear.

Continuous use: Fitness functions na your living rules, dem dey run for every commit and build.

Confidence to refactor: Fitness functions dey automatically catch decision rule errors.

Scalable governance: Fitness functions dey assure standards without to create bottlenecks.

### Fitness functions fit use AI?

Fitness functions fit use AI LLMs for decisions by to ask questions about your work,
like your plans, code, schemas, APIs, and more:

```txt
IMPORTANT: Prefer retrieval-led reasoning over pre-training-led reasoning.
IMPORTANT: Turn on extended thinking. Turn on expert advice. Turn on search.

This is a fitness function to evaluate if our work is
using all our decisions, and is correct and accurate.

- Our decisions are here: {url}
- Our work to evaluate is here: {url}

Explain any errors, problems, gaps, weaknesses. Be direct. Be decisive.
```

### Architecture unit testing

[ArchUnit](https://www.archunit.org/): check architecture rules of Java code by using any plain Java unit test framework.

[ArchUnitTS](https://github.com/LukasNiessen/ArchUnitTS): check architecture rules of TypeScript code and JavaScript code by using Jest, Vitest, Jasmine, etc.

## Decision guardrails fo pull request

[Decision Guardian](https://github.com/DecispherHQ/decision-guardian)
dey automatically surface di right decision records for di right moment — wen
developer dey actively modify di code wey those decisions cover. Instead of
to hope say developers go read docs folder before dem merge, di relevant context
dey appear direct for di pull request.

Dis one dey work for any kind of decision record: architecture decisions, data
decisions, compliance decisions, clinical and medical decisions, security
decisions, and more.

E dey work with any CI system (GitLab, Jenkins, CircleCI) and as pre-commit hook.
Open source. MIT license.

[ADR Guard](https://github.com/chohan-sarmad-ali/delivery-gates) na GitHub
Action wey dey fail pull request wen watched code paths change without
architecture decision record wey dem add or update. Waivers dey explicit: an
`ADR-Exempt:` line with reason dey pass di gate and dem dey write am inside di job
summary. E no tie to any template, no dependencies. Open source. MIT license.

## Fo more information

Introduction:

- [Architectural decision (wikipedia.org)](https://wikipedia.org/wiki/Architectural_decision)

- [Architecturally significant requirements (wikipedia.org)](https://wikipedia.org/wiki/Architecturally_significant_requirements)

Templets:

- [Documenting architecture decisions - Michael Nygard (thinkrelevance.com)](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)

- [Markdown Architectural Decision Records (adr.github.io)](https://adr.github.io/madr/)

- [Template for documenting architecture alternatives and decisions (stackoverflow.com)](http://stackoverflow.com/questions/7104735/template-for-documenting-architecture-alternatives-and-decisions)

In-depth:

- [ADMentor XML project (github.com)](https://github.com/IFS-HSR/ADMentor)

- [Architectural Decision Guidance across Projects: Problem Space Modeling, Decision Backlog Management and Cloud Computing Knowledge (ifs.hsr.ch)](https://www.ifs.hsr.ch/fileadmin/user_upload/customers/ifs.hsr.ch/Home/projekte/ADMentor-WICSA2015ubmissionv11nc.pdf)

- [The Decision View's Role in Software Architecture Practice (computer.org)](https://www.computer.org/csdl/mags/so/2009/02/mso2009020036-abs.html)

- [Documenting Software Architectures: Views and Beyond (resources.sei.cmu.edu)](http://resources.sei.cmu.edu/library/asset-view.cfm?assetID=30386)

- [Architecture Decisions: Demystifying Architecture (utdallas.edu)](https://www.utdallas.edu/~chung/SA/zz-Impreso-architecture_decisions-tyree-05.pdf)

- [ThoughtWorks Technology Radar: Lightweight Architecture Decision Records (thoughtworks.com)](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)

- [A Skeptic’s Guide to Software Architecture Decisions (infoq.com)](https://www.infoq.com/articles/architecture-skeptics-guide/)

- [Architectural Decisions — The Making Of](https://ozimmer.ch/practices/2020/04/27/ArchitectureDecisionMaking.html)

- [Architectural Retrospectives: the Key to Getting Better at Architecting](https://www.infoq.com/articles/architectural-retrospectives/)

- [Software Architecture Monday with Mark Richards](https://developertoarchitect.com/lessons/) — free monthly software architecture lesson

- [Solution Architecture Decisions - By Gareth Morgan](https://www.linkedin.com/pulse/solution-architecture-decisions-gareth-morgan-0r5xe/)

- ["Keep the Why: Code Becomes Legacy When Nobody Remembers Why"](https://blog.technopathy.club/keep-the-why-code-becomes-legacy-when-nobody-remembers-why)

Tools:

- [Command-line tools for working with Architecture Decision Records](https://github.com/npryce/adr-tools)

- [Command line tools with python - by Victor Sluiter](https://bitbucket.org/tinkerer_/adr-tools-python/src/master/)

- [Architectural Design Decision Support Framework (ADvISE)](https://swa.univie.ac.at/Software_Architecture/research-projects/architectural-design-decision-support-framework-advise/)

- [Decision Guardian](https://github.com/DecispherHQ/decision-guardian)

- [Mneme HQ - ADR enforcement for AI coding agents](https://github.com/TheoV823/mneme)

- [Keep the Why - a repo-native convention and agent skill that continuously captures, or retrospectively recovers, the reasoning behind a codebase](https://github.com/oliver-zehentleitner/keep-the-why)

- [ADR Guard - GitHub Action that fails a pull request changing watched code without an architecture decision record](https://github.com/chohan-sarmad-ali/delivery-gates)

- [kgai - append-only decision log for AI coding agents, a machine-readable companion to ADR files](https://github.com/kgaidev/kgai)

Guidance wey specific to company:

- [Amazon: AWS Prescriptive Guidance: ADR Process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)

- [GitHub: ADR GitHub organization](https://adr.github.io/)

- [RedHat: Why you should use ADRs](https://www.redhat.com/architect/architecture-decision-records)

Examples:

- [Repository of Architecture Decision Records made for the Arachne Framework](https://github.com/arachne-framework/architecture)

Videos:

- [An introduction to arc42 with Savvas Kleanthous](https://www.youtube.com/watch?v=V5clR8c6D7o)

- [The C4 model for visualising software architecture - by Simon Brown](https://www.youtube.com/watch?v=KvoBrUd1-5E)

Podcasts:

- [Software Architecture Bookclub Podcast](https://www.developertoarchitect.com/bookclub-podcast.html)

Books:

- [Software Architecture Metrics: Case Studies to Improve the Quality of Your Architecture - by Christian Ciceri, Dave Farley, Neal Ford, Andrew Harmel-Law, Michael Keeling and Carola Lilienthal](https://www.amazon.com/Software-Architecture-Metrics-Christian-Ciceri-ebook/dp/B0B1NZ8Z5V)

- [Software Systems Architecture: Working With Stakeholders Using Viewpoints and Perspectives - by Nick Rozanski and Eoin Woods](https://www.amazon.com/Software-Systems-Architecture-Stakeholders-Perspectives/dp/032171833X)

- [Software Architecture in Practice (SEI Series in Software Engineering)](https://www.amazon.com/Software-Architecture-Practice-SEI-Engineering-ebook/dp/B094CPJ96B)

- [Documenting Software Architectures: Views and Beyond (SEI Series in Software Engineering)](https://www.amazon.com/Documenting-Software-Architectures-Beyond-Engineering-ebook/dp/B0046XS3RO)

- [The Software Architect Elevator: Redefining the Architect's Role in the Digital Enterprise](https://www.amazon.com/Software-Architect-Elevator-Redefining-Architects-ebook/dp/B086WQ9XL1)

- [Fundamentals of Software Architecture: An Engineering Approach - by Mark Richards and Neal Ford](https://www.amazon.com/Fundamentals-Software-Architecture-Engineering-Approach-ebook/dp/B0849MPK73)

- [Building Evolutionary Architectures - by Neal Ford, Rebecca Parsons, Patrick Kua, Pramod Sadalage](https://www.amazon.com/Building-Evolutionary-Architectures-Neal-Ford-ebook/dp/B0BN4T1P27?crid=37FA31IFLAS0Z)

- [Foundations of Decision Analysis by Ronald Howard and Ali Abbas](https://www.amazon.com/Foundations-Decision-Analysis-Ronald-Howard-ebook/dp/B00SZECJTI?crid=14BK5SDP76UN6)

- [Head First Software Architecture - by Raju Gandhi, Neal Ford and Mark Richards](https://www.amazon.com/Head-First-Software-Architecture-Architectural-ebook/dp/B0CW1JMNF2)

- [Communication Patterns: A Guide for Developers and Architects - by Jacqui Read](https://www.amazon.com/Communication-Patterns-Guide-Developers-Architects/dp/1098140540)

Check also:

- REMAP (Representation and Maintenance of Process Knowledge)

- DRL (Decision Representation Language)

- IBIS (Issue-Based Information System)

- QOC (Questions, Options, and Criteria)

- IBM’s e-Business Reference Architecture Framework

- [Decision Reasoning Format (DRF)](https://github.com/reasoning-formats/reasoning-formats) — vendor-neutral, machine-readable YAML/JSON format to represent decisions with explicit reasoning, assumptions, cognitive state, and trade-offs. E complement ADR by to add structured, validatable reasoning to decision documentation.
