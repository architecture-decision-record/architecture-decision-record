# Architectur decisioun record (ADR)

An architectur decisioun record (ADR) is a document that taks doun an important architectur decisioun made alang wi its context an consequences.

> [!IMPORTANT]
> Dae yer ain due diligence for thir resources afore uisin them in onie critical systems.

Contents:

- [Whit is an architectur decisioun record?](#whit-is-an-architectur-decisioun-record)
- [Hoo tae stairt uisin ADRs](#hoo-tae-stairt-uisin-adrs)
- [Hoo tae stairt uisin ADRs wi tuils](#hoo-tae-stairt-uisin-adrs-wi-tuils)
- [Hoo tae stairt uisin ADRs wi git](#hoo-tae-stairt-uisin-adrs-wi-git)
- [Claude Code skills for ADRs](#claude-code-skills-for-adrs)
- [File name conventiouns for ADRs](#file-name-conventiouns-for-adrs)
- [Suggestiouns for screivin guid ADRs](#suggestiouns-for-screivin-guid-adrs)
- [ADR example templats](#adr-example-templats)
- [Teamwark advice for ADRs](#teamwark-advice-for-adrs)
- [Teamwark speirins for ADRs](#teamwark-speirins-for-adrs)
- [Neist step concepts for ADRs](#neist-step-concepts-for-adrs)
- [Architectur diagrams & views & viewpynts](#architectur-diagrams--views--viewpynts)
- [Fitness functions for decisiouns as code](#fitness-functions-for-decisiouns-as-code)
- [Decisioun guardrails for pull requests](#decisioun-guardrails-for-pull-requests)
- [For mair information](#for-mair-information)

Templats:

- [Decisioun record templat bi Jeff Tyree an Art Akerman](templats/decisioun-record-templat-bi-jeff-tyree-an-art-akerman/)
- [Decisioun record templat bi Michael Nygard](templats/decisioun-record-templat-bi-michael-nygard/)
- [Decisioun record templat bi EdgeX](templats/decisioun-record-templat-bi-edgex/)
- [Decisioun record templat bi arc42](templats/decisioun-record-templat-bi-arc42/)
- [Decisioun record templat for Alexandrian pattren](templats/decisioun-record-templat-for-alexandrian-pattren/)
- [Decisioun record templat for business case](templats/decisioun-record-templat-for-business-case/)
- [Decisioun record templat o the MADR Project](templats/decisioun-record-templat-o-the-madr-project/)
- [Decisioun record templat uisin Planguage](templats/decisioun-record-templat-uisin-planguage/)
- [Decisioun record templat bi Paulo Merson](https://github.com/pmerson/ADR-template)
- [Decisioun record templat bi Olaf Zimmermann](https://medium.com/olzzio/y-statements-10eb07b5a177)
- [Decisioun record templat bi Gareth Morgan](templats/decisioun-record-templat-bi-gareth-morgan/)
- [Decisioun record templat bi GIG Cymru NHS Wales](templats/decisioun-record-templat-bi-gig-cymru-nhs-wales/)
- [Decisioun record templat for Important Technical Decisiouns (ITDs) bi Ignacio Larrañaga](templats/decisioun-record-templat-for-important-technical-decisiouns/)

Examples:

- [CSS framewark](ensamples/css-framewark/)
- [Environment variable configuratioun](ensamples/environment-variable-configuratioun/)
- [Metrics, monitors, alerts](ensamples/metrics-monitors-an-alerts/)
- [Microsoft Azure DevOps](ensamples/microsoft-azure-devops/)
- [Monorepo versus multirepo](ensamples/monorepo-versus-multirepo/)
- [Programmin leids](ensamples/programmin-leids/)
- [Secrets stowage](ensamples/secrets-stowage/)
- [Timestamp furm](ensamples/timestamp-furm/)
- [Mony mair...](ensamples/)

## Whit is an architectur decisioun record?

An **architectur decisioun record** (ADR) is a document that taks doun an important architectural decisioun that wis made, alang wi its context an consequences.

An **architectur decisioun** (AD) is a saftware design chyce that tackles a muckle requirement.

An **architectur decisioun log** (ADL) is the haill collection o aw the ADRs that hae been made an kept up for a particular project (or organisation).

An **architecturally-significant requirement** (ASR) is a requirement that haes a measurable effect on the architectur o a saftware system.

Aw o this fa's unner the topic o **architectur knowledge management** (AKM).

The aim o this document is tae gie ye a quick owerview o ADRs, hoo tae mak them, an whaur tae leuk for mair information.

Abbreviations:

  * **AD**: architectur decisioun

  * **ADL**: architectur decisioun log

  * **ADR**: architectur decisioun record

  * **AKM**: architectur knowledge management

  * **ASR**: architecturally-significant requirement

## Hoo tae stairt uisin ADRs

Tae stairt uisin ADRs, hae a blether wi yer teammates aboot thir areas.

Decisioun identification:

  * Hoo urgent an hoo important is the AD?

  * Haes it tae be made noo, or can it wait til mair is kent?

  * Baith personal an collective experience, as weel as recognised design methods an practices, can help wi decisioun identification.

  * Ideally keep a decisioun todo list that gaes alangside the product todo list.

Decisioun makin:

  * A wheen o decisioun makin techniques exist, baith general anes an saftware architectur specific anes, for instance, dialogue mappin.

  * Group decisioun makin is an active research topic.

Decisioun enactment an enforcement:

  * ADs are uised in saftware design; sae they hae tae be communicatit tae, an accepted bi, the stakeholders o the system that fund, develop, an rin it.

  * Architecturally evident codin styles an code reviews that focus on architectural concerns an decisiouns are twa relatit practices.

  * ADs an aw hae tae be (re-)considered whan modernisin a saftware system in saftware evolution.

Decisioun sharin (optional):

  * Mony ADs recur athort projects.

  * Sae, experiences wi past decisiouns, baith guid an bad, can be valuable reusable assets whan employin an explicit knowledge management strategy.

Decisioun documentation:

  * Mony templates an tuils for decisioun capturin exist.

  * See agile communities, e.g. M. Nygard's ADRs.

  * See traditional saftware engineerin an architectur design processes, e.g. table layouts suggestit bi IBM UMF an bi Tyree an Akerman frae CapitalOne.

For mair:

  * The steps abune are adoptit frae the Wikipedia entry on [Architectural Decision](https://en.wikipedia.org/wiki/Architectural_decision)

## Hoo tae stairt uisin ADRs wi tuils

- [MySpec](https://myspec.dev) — Automatit specification an architectural decisioun platform that structures project constitution, technical architectur, an ADRs intae clean Markdown served ower MCP.

Ye can stairt uisin ADRs wi tuils onie wey ye like.

For example:

  * If ye like uisin Google Drive an online eeditin, than ye can mak a Google Doc, or Google Sheet.

  * If ye like uisin source code version control, sic as git, than ye can mak a file for each ADR.

  * If ye like uisin project plannin tuils, sic as Atlassian Jira, than ye can uise the tuil's plannin tracker.

  * If ye like uisin wikis, sic as MediaWiki, than ye can mak an ADR wiki.

## Hoo tae stairt uisin ADRs wi git

If ye like uisin git version control, than here's hoo we like tae stairt uisin ADRs wi git for a typical saftware project wi source code.

Mak a directory for ADR files:

```sh
$ mkdir adr
```

For each ADR, mak a text file, sic as `choose-database.md`:

```sh
$ vi choose-database.md
```

Scrieve onie thing ye want in the ADR. See the templates in this repository for ideas.

Commit the ADR tae yer git repo.

## Claude Code skills for ADRs

This repository ships twa [Claude Code](https://claude.com/claude-code) skills unner [`skills/`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/), sae an AI codin agent can screive an keep up ADRs the wey this project recommends:

- [`architecture-decision-record-skill`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/architecture-decision-record-skill/) — general purpose, for onieane screivin an ADR in onie project. Helps decide whether a decisioun needs an ADR, sets up an `adr/` or `decisions/` directory, names the file, picks a templat frae the eleiven bundlit skeletons, an screives solid Context/Decision/Consequences sections.

- [`architecture-decision-record-maintainer-skill`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/architecture-decision-record-maintainer-skill/) — for maintainers o this repository specifically. Documents the repo's layoot, the README/locales mirrorin convention, an the exact steps for addin a new templat, example, or tuil link.

Tae uise a skill, copy its folder intae `.claude/skills/` at the root o the repository ye're warkin in (or intae `~/.claude/skills/` tae mak it available in every project), than ask Claude Code tae screive or review an ADR.

## File name conventiouns for ADRs

If ye chuise tae mak yer ADRs uisin typical text files, than ye micht want tae come up wi yer ain ADR file name convention.

We prefer tae uise a file name convention that haes a specific format.

Examples:

  * choose-database.md

  * format-timestamps.md

  * manage-passwords.md

  * handle-exceptions.md

Oor file name convention:

  * The name haes a present tense imperative verb phrase. This helps readability an matches oor commit message format.

  * The name uises lowercase an dashes (the same as this repo). This is a balance o readability an system uisability.

  * The extension is markdown. This can be uiseful for easy formattin.

## Suggestiouns for screivin guid ADRs

Characteristics o a guid ADR:

* Rationale: Explain the reasons for daein the particular AD. This can include the context (see ablow), pros an cons o various potential chyces, feature comparisons, cost/benefit discussiouns, an mair.

* Specific: Each ADR sud be aboot ae AD, no a wheen o ADs.

* Timestamps: Identify whan each item in the ADR wis written. This is especially important for aspects that micht chynge ower time, sic as costs, schedules, scalin, an the like.

* Immutable: Dinnae alter existin information in an ADR. Instead, amend the ADR bi addin new information, or supersede the ADR bi makin a new ADR.

Characteristics o a guid "Context" section in an ADR:

* Explain yer organisation's situation an business priorities.

* Include rationale an considerations based on social an skills makeups o yer teams.

* Include pros an cons that are relevant, an describe them in terms that align wi yer needs an goals.

Characteristics o guid "Consequences" section in an ADR:

* Explain whit follaes frae makin the decisioun. This can include the effects, outcomes, outputs, follae ups, an mair.

* Include information aboot onie subsequent ADRs. It's relatively common for ae ADR tae trigger the need for mair ADRs, sic as whan ae ADR maks a muckle owerarchin chyce, which in turn creates needs for mair smaller decisiouns.

* Include onie efter-action review processes. It's typical for teams tae review each ADR ae month efter, tae compare the ADR information wi whit's happent in actual practice, in order tae lairn an growe.

A new ADR can tak the place o a previous ADR:

* Whan an AD is made that replaces or invalidates a previous ADR, than a new ADR sud be creatit

## ADR example templats

ADR example templats that we hae gaitherit on the net:

- [ADR templat bi Michael Nygard](templats/decisioun-record-templat-bi-michael-nygard/) (simple an popular)

- [ADR templat bi Jeff Tyree an Art Akerman](templats/decisioun-record-templat-bi-jeff-tyree-an-art-akerman/) (mair sophisticatit)

- [ADR templat for Alexandrian pattren](templats/decisioun-record-templat-for-alexandrian-pattren/) (simple wi context specifics)

- [ADR templat for business case](templats/decisioun-record-templat-for-business-case/) (mair MBA-oriented, wi costs, SWOT, an mair opinions)

- [ADR templat o the Markdown Any Decision Records (MADR) project](templats/decisioun-record-templat-o-the-madr-project/) (baith simple an elaborate version; the latter emphasises options an their pros an cons)

- [ADR templat uisin Planguage](templats/decisioun-record-templat-uisin-planguage/) (mair quality assurance oriented)

- [Templat for Important Technical Decisiouns (ITDs) bi Ignacio Larrañaga](templats/decisioun-record-templat-for-important-technical-decisiouns/) (lean an decisioun-first, optimisit for fast executive review)

## Teamwark advice for ADRs

If ye're considerin uisin decisioun records wi yer team, than here's some advice that we've lairnt bi warkin wi mony teams.

Ye hae a chance tae lead yer teammates, bi blethrin thegither aboot the "why", raither than mandatin the "whit". For example, decisioun records are a wey for teams tae think smairter an communicate better; decisioun records are no valuable if they're juist an efter-the-fact forced paperwark requirement.

Some teams muckle prefer the name "decisiouns" ower the abbreviation "ADRs". Whan some teams uise the directory name "decisiouns", than it's as if a licht bulb turns on, an the team stairts puttin mair information intae the directory, sic as vendor decisiouns, plannin decisiouns, schedulin decisiouns, etc. Aw o thir kinds o information can uise the same template. We hypothesise that fowk lairn faster wi wirds ("decisiouns") ower abbreviations ("ADRs"), an fowk are mair motivatit tae scrieve wark-in-progress docs whan the wird "record" is taen awa, an an aw some developers an some managers dislike the wird "architectur".

In theory, immutability is ideal. In practice, mutability haes warked better for oor teams. We insert the new info intae the existin ADR, wi a date stamp, an a note that the info arrived efter the decisioun. This kind o approach leads tae a "livin document" that we aw can update. Typical updates are whan we get information thanks tae new teammates, or new offerins, or real-warld results o oor uisages, or efter-the-fact third-pairty chynges sic as vendor capabilities, pricin plans, licence agreements, etc.

## Teamwark speirins for ADRs

### Wha can mak an ADR?

Consider areas sic as specific fowk, or specific roles, or specific teams, or specific departments; an consider an aw if there's fowk, or roles, or teams, or departments that can commission an ADR, meanin they request ane that somebody else will screive. 

Example answer: Onie person in oor organisation wha haes read the architectur decisioun record README page can propose an ADR, meanin the person can stairt screivin it, an share it wi the team.

### Whit justifies raisin an ADR?

Consider areas sic as yer organisation's team weys o warkin, yer saftware system structur, cross-team coordination, lang-term maintainability, external interfaces, wha ye want tae benefit, an the like. 

Example answer: We want tae mak an ADR whan we want future developers tae unnerstaun the “why” o whit we're daein.

### Whit justifies no raisin an ADR?

Consider areas sic as decisiouns that are no aboot architectur, or are wee sic as minimal-risk or self-contained or single-developer, or are awready fully coverit elsewhaur sic as bi staundarts or policies or documentation, or are temporary sic as warkarounds or proofs o concepts or experiments. 

Example answer: We want tae skip an ADR whan a decisioun is limitit in scope an time an risk an cost, or is awready coverit elsewhaur.

### Whit is the lifecycle o an ADR?

Consider areas sic as the creation process, research process, decisionin process, implementation process, an sunsettin process. Consider hoo tae track the ADR lifecycle ower time, sic as hoo tae muive the ADR frae ae state tae the neist state, an an aw hoo tae communicate this tae stakeholders. 

Example answer: We want an ADR tae hae five lifecycle stages: Initiatin → Researchin → Evaluatin → Implementin → Maintainin → Sunsettin.

### Whit are criteria for lifecycle steps o an ADR?

Consider areas sic as acceptance criteria for an ADR, meanin hoo dae ye ken it's guid eneuch tae progress frae ae lifecycle step tae the neist? Is the problem clearly articulatit? Hae the alternatives been consideret? Are trade-offs weel-eneuch unnerstuid an documentit?
Is aw relevant context in place? Are aw relevant stakeholders involved? Haes aw feedback been incorporatit? 

Example answer: We want an ADR tae be votit on bi stakeholders whan the active team haes 1) completit their research, 2) completit their evaluation, 3) publisht the ADR proposal tae the stakeholders wi a request for comments an a timebox o ae week, 4) aw stakeholder comments hae been incorporatit an addressed.

### Whit roles an responsibilities interact wi an ADR?

Consider roles sic as proposer, researcher, evaluator, reviewer, approver, maintainer, an the like. Consider responsibilities sic as communication wi stakeholders, ensurin expectations are met, sharin on the website or intranet, an reviewin the wark periodically an especially whan relevant chynges happen.

Example answer: We want each ADR tae aye hae a primary contact person, secondary contact person, an accountable team; thir are responsible for communications, publications, maintenance, periodic review at least ance per year, an eventual sunsettin as needit.

### Hoo daes governance interact wi an ADR?

Consider areas sic as yer organisation's weys o warkin, onie special compliance needs sic as for legal aspects or human resource aspects, hoo ye want tae haunle consensus versus conflict versus escalation. Are there areas or fowk or teams that can hae mair influence than ithers regardin an ADR, sic as bein able tae approve it, or vote on it, or veto it?

Example answer: The governance o an ADR is in this priority order: the CEO, the CTO, the CLO, the team that implements an ADR, the experts on the team that ken maist aboot the AD. Naebody else haes governance unless described in the ADR. 

### Whit principles interact wi an ADR?

Consider areas sic as yer organisation's weys o warkin that include muivin quickly versus muivin slowly, for decisioun consensus versus decisioun conflict, an for risk preferences versus safety preferences, public discussioun versus private discussioun, an the like.

Example answer: We uise the leadership principles o bias for action, disagree-an-commit, 70% estimates are guid eneuch for easily-reversable easily-isolatable decisiouns, an public weys o warkin wi the exception o confidential information as described in oor organisation's confidentiality agreement.

## Neist step concepts for ADRs

[Arc42](https://arc42.org/) answers twa questions in a pragmatic wey an can be tailored tae yer specific needs. Whit sud ye document/communicate aboot yer architectur? Hoo sud ye document/communicate? Arc42 includes architectur decisioun records plus guidance on goals, constraints, contexts, quality, risks, an mair.

[The C4 model](https://c4model.com/) is an easy tae lairn, developer friendly approach tae saftware architectur diagrammin. C4 is a set o hierarchical diagrams for context, containers, components, code, plus supportin diagrams for system landscape, dynamic, an deployment.

## Architectur diagrams & views & viewpynts

An architectur diagram is cried an "architectur view".

An "architectur view" is an instance o an "architectur viewpynt".

An "architectur viewpynt" haes a specific audience wi specific concerns in mind.

Architectur viewpynt examples, view examples, an diagram examples:

- Business Capabilities

- Heich-level Business Processes

- [Value Streams](https://en.wikipedia.org/wiki/Value_stream)

- Saftware Functions mappit tae application components

- [C4 Model](https://en.wikipedia.org/wiki/C4_model) Context Diagram (TO-BE / AS-IS)

- [C4 Model](https://en.wikipedia.org/wiki/C4_model) Container Diagram (TO-BE / AS-IS)

- [Entity-relationship Diagram](https://en.wikipedia.org/w/index.php?title=Entity_relationship_diagram) (ERD) tae map data entities tae application components

- [Sequence Diagrams](https://en.wikipedia.org/wiki/Sequence_diagram) tae describe functional flows within systems an for integratiouns

- [Business Process Model and Notation](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN) diagrams tae describe data flows athort application components

- [Business Process Model and Notation](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN) diagrams tae describe business processes / uiser Scenarios

- [Identity and Access Management](https://en.wikipedia.org/wiki/Identity_and_access_management) (IAM) diagrams

- [Role-Based Access Control](https://en.wikipedia.org/wiki/Role-based_access_control) (RBAC) diagrams wi roles per application component

- [Attribute-Based Access Control](https://en.wikipedia.org/wiki/Attribute-based_access_control) (ABAC) diagrams wi attributes per application component

- Privacy diagrams

Relatit diagrams:

- A Use Case Diagram shaws uise cases tae management/customers, which precedes requirements, which precedes the saftware architectur.

- A Deployment Diagram shaws the physical hardware/computers that the saftware components are deployed tae.
- A Data Flow Diagram shaws hoo data muives throu the system an is transformed.
- A Sequence Diagram is uised tae shaw hoo protocols like HTTP wark on a time axis.

- An Activity Diagram depicts the workflow o activities a saftware system undertaks, like an NPC AI.

## Fitness functions for decisiouns as code

Fitness functions are objective automatit checks, written wi programmin code, that verify decisiouns are bein keepit up.

- Fitness functions mak decisiouns testable an assurable.

- Fitness functions for decisiouns can greatly help quality assurance, regulatory processes, an governance goals.

### Hoo fitness functions connect tae decisiouns

A decisioun record documents the decisioun, while a fitness function assures the decisioun.

- Example decisioun: We uise event sourcin for audit requirements.

- Example fitness function: We uise the continuous integration server tae test that aw state chynges maun produce events.

### Why fitness functions help decisiouns

Objective measurements: Fitness functions pass or fail, sae wark is visible an clear.

Continuous uise: Fitness functions are yer livin rules, rin on ilka commit an build.

Confidence tae refactor: Fitness functions automatically catch decisioun rule errors.

Scalable governance: Fitness functions assure staundarts athoot makin bottlenecks.

### Can fitness functions uise AI?

Fitness functions can leverage AI LLMs for decisiouns bi askin questions for yer wark,
sic as yer plans, code, schemas, APIs, an mair:

```txt
IMPORTANT: Prefer retrieval-led reasoning over pre-training-led reasoning.
IMPORTANT: Turn on extended thinking. Turn on expert advice. Turn on search.

This is a fitness function to evaluate if our work is
using all our decisions, and is correct and accurate.

- Our decisions are here: {url}
- Our work to evaluate is here: {url}

Explain any errors, problems, gaps, weaknesses. Be direct. Be decisive.
```

### Architectur unit testin

[ArchUnit](https://www.archunit.org/): check architectur rules o Java code bi uisin onie plain Java unit test framewark.

[ArchUnitTS](https://github.com/LukasNiessen/ArchUnitTS): check architectur rules o TypeScript code an JavaScript code bi uisin Jest, Vitest, Jasmine, etc.

## Decisioun guardrails for pull requests

[Decision Guardian](https://github.com/DecispherHQ/decision-guardian)
automatically surfaces the richt decisioun records at the richt moment — whan a
developer is actively modifyin the code thae decisiouns cover. Instead o
hopin developers read a docs folder afore mergin, the relevant context
appears directly on the pull request.

This warks for onie kind o decisioun record: architectur decisiouns, data
decisiouns, compliance decisiouns, clinical an medical decisiouns, security
decisiouns, an mair.

Warks wi onie CI system (GitLab, Jenkins, CircleCI) an as a pre-commit hook.
Open source. MIT licence.

[ADR Guard](https://github.com/chohan-sarmad-ali/delivery-gates) is a GitHub
Action that fails a pull request whan watchit code paths chynge athoot an
architectur decisioun record bein addit or updatit. Waivers are explicit: an
`ADR-Exempt:` line wi a reason passes the gate an is written intae the job
summary. Templat-agnostic, nae dependencies. Open source. MIT licence.

## For mair information

Introduction:

- [Architectural decision (wikipedia.org)](https://wikipedia.org/wiki/Architectural_decision)

- [Architecturally significant requirements (wikipedia.org)](https://wikipedia.org/wiki/Architecturally_significant_requirements)

Templats:

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

- [Software Architecture Monday with Mark Richards](https://developertoarchitect.com/lessons/) — free monthly saftware architectur lesson

- [Solution Architecture Decisions - By Gareth Morgan](https://www.linkedin.com/pulse/solution-architecture-decisions-gareth-morgan-0r5xe/)

- ["Keep the Why: Code Becomes Legacy When Nobody Remembers Why"](https://blog.technopathy.club/keep-the-why-code-becomes-legacy-when-nobody-remembers-why)

Tuils:

- [Command-line tools for working with Architecture Decision Records](https://github.com/npryce/adr-tools)

- [Command line tools with python - by Victor Sluiter](https://bitbucket.org/tinkerer_/adr-tools-python/src/master/)

- [Architectural Design Decision Support Framework (ADvISE)](https://swa.univie.ac.at/Software_Architecture/research-projects/architectural-design-decision-support-framework-advise/)

- [Decision Guardian](https://github.com/DecispherHQ/decision-guardian)

- [Mneme HQ - ADR enforcement for AI coding agents](https://github.com/TheoV823/mneme)

- [Keep the Why - a repo-native convention and agent skill that continuously captures, or retrospectively recovers, the reasoning behind a codebase](https://github.com/oliver-zehentleitner/keep-the-why)

- [ADR Guard - GitHub Action that fails a pull request changing watched code without an architecture decision record](https://github.com/chohan-sarmad-ali/delivery-gates)

- [kgai - append-only decision log for AI coding agents, a machine-readable companion to ADR files](https://github.com/kgaidev/kgai)

Company-Specific Guidance:

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

Beuks:

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

See an aw:

- REMAP (Representation and Maintenance of Process Knowledge)

- DRL (Decision Representation Language)

- IBIS (Issue-Based Information System)

- QOC (Questions, Options, and Criteria)

- IBM’s e-Business Reference Architecture Framework

- [Decision Reasoning Format (DRF)](https://github.com/reasoning-formats/reasoning-formats) — A vendor-neutral, machine-readable YAML/JSON furm for representin decisiouns wi explicit reasonin, assumptiouns, cognitive state, an trade-offs. Complements ADRs bi addin structurt, validatable reasonin tae decisioun documentation.
