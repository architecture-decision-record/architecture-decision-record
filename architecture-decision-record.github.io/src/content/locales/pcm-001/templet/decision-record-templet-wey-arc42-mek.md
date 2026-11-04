# Decision record templet wey arc42 mek

<https://arc42.org/overview>

## 1. Introduction and Goals

Short description of di requirements, driving forces, extract (or abstract) of
requirements. Top three (max five) quality goals for di architecture wey get
highest priority for di major stakeholders. Table of important stakeholders
with wetin dem expect regarding architecture.

## 1.1 Requirements Overview

### Contents

Short description of di functional requirements, driving forces, extract (or
abstract) of requirements. Links to di requirements documents (we hope say dem
exist), with information where to find am.

### Motivation

From di point of view of di end users, dem create or modify system to
improve support of business activity and/or improve di quality.

### Form

Short textual description, probably for tabular use-case format. If requirements
documents exist, dis overview suppose refer to dem.

Keep dis excerpts as short as e possible. Balance di readability of dis document
with potential redundancy w.r.t. requirements documents.

## 1.2 Quality goals

### Content

Di top three (max five) quality goals for di architecture wey di major stakeholders
need dem to fulfill pass. We really mean quality goals
for di architecture. No confuse dem with project goals. Dem no
necessarily identical. Di ISO 25010 standard give nice overview of
potential topics of interest.

### Motivation

You suppose know di quality goals of your most important stakeholders, because
dem go influence fundamental architectural decisions. Make sure say you be very
concrete about dis qualities, avoid buzzwords. If you as architect no
know how dem go judge di quality of your work …

### Form

Table with di most important quality goals and concrete scenarios, wey dem order by priorities.

## 1.3 Stakeholder

### Content

Explicit overview of stakeholders of di system, i.e. all person, roles or
organizations wey

- suppose know di architecture

- dem must convince about di architecture

- must work with di architecture or with code

- need di documentation of di architecture for their work

- must come up with decisions about di system or im development

### Motivation

You suppose know all parties wey dey involved for development of di system or wey di
system affect. Otherwise, you fit get nasty surprises later for di development
process. Dis stakeholders determine di extent and di level of detail of your
work and im results.

### Form

Table with role names, person names, and wetin dem expect regarding di
architecture and im documentation.

## 2. Constraints

Anything wey constrain teams for design and implementation decisions or
decision about related processes. E fit sometimes go beyond individual systems and
e valid for whole organizations and companies.

### Content

Any requirement wey constrain software architects for their freedom of design
and implementation decisions or decision about di development process. Dis
constraints sometimes go beyond individual systems and dem valid for whole
organizations and companies.

### Motivation

Architects suppose know exactly where dem free for their design decisions and
where dem must adhere to constraints. Dem must always deal with constraints;
but dem fit dey negotiable.

### Form

Simple tables of constraints with explanations. If need dey, you fit subdivide dem
into technical constraints, organizational and political constraints and
conventions (e.g. programming or versioning guidelines, documentation or naming
conventions)

## 3. Context and Scope

E dey delimit your system from im (external) communication partners (neighboring
systems and users). E specify di external interfaces. Dem show am from
business/domain perspective (always) or technical perspective (optional)

### Content

System scope and context - as di name suggest - delimit your system (i.e.
your scope) from all im communication partners (neighboring systems and users,
i.e. di context of your system). So e specify di external interfaces.

If necessary, differentiate di business context (domain specific inputs and
outputs) from di technical context (channels, protocols, hardware).

### Motivation

Di domain interfaces and technical interfaces to communication partners dey
among di most critical aspects of your system. Make sure say you completely
understand dem.

### Form

- Various context diagrams

- Lists of communication partners and their interfaces.

## 3.1 Business context

### Content

Specification of all communication partners (users, IT-systems, …) with
explanations of domain specific inputs and outputs or interfaces. Optionally, you
fit add domain specific formats or communication protocols.

### Motivation

All stakeholders suppose understand which data dem dey exchange with di environment
of di system.

### Form

All kinds of diagrams wey show di system as black box and specify di domain
interfaces to communiations partners.

Alternatively (or additionally) you fit use table. Di title of di table na
di name of your system, di three columns contain di name of di communication
partner, di inputs, and di outputs.

## 3.2 Technical context

### Contents

Technical interfaces (channels and transmission media) wey link your system to
im environment. Plus mapping of domain specific input/output to di
channels, i.e. explanation of which I/O use which channel.

### Motivation

Many stakeholders dey make architectural decision based on di technical interfaces
between di system and im context. Especially infrastructure or hardware
designers dey decide dis technical interfaces.

### Form

E.g. UML deployment diagram wey describe channels to neighboring systems, together
with mapping table wey show di relationships between channels and
input/output.

## 4. Solution Strategy

Summary of di fundamental decisions and solution strategies wey shape di
architecture. E fit include technology, top-level decomposition, approaches to
achieve top quality goals and relevant organizational decisions.

### Contents

Short summary and explanation of di fundamental decisions and solution strategies, wey shape di architecture of di system. Dis include

- technology decisions

- decisions about di top-level decomposition of di system, e.g. usage of architectural pattern or design pattern

- decisions on how to achieve key quality goals

- relevant organizational decisions, e.g. to select development process or to delegate certain tasks to third parties.

### Motivation

Dis decisions na di cornerstones for your architecture. Dem be di basis
for many other detailed decisions or implementation rules.

### Form

Keep di explanation of dis key decisions short.

Motivate wetin you decide and why you decide am dat way, based on your
problem statement, di quality goals and key constraints. Refer to details for
di following sections (section 5 for structural details, section 8 for
crosscutting concepts).

You fit use list of solution-approaches or table.

## 5. Building Block View

Static decomposition of di system, abstractions of source-code, wey dem show as
hierarchy of white boxes (wey contain black boxes), up to di appropriate level
of detail.

### Content

Di building block view show di static decomposition of di system into
building blocks (modules, components, subsystems, classes, interfaces, packages,
libraries, frameworks, layers, partitions, tiers, functions, macros, operations,
data structures, …) and also their dependencies (relationships, associations,
…)

Dis view na mandatory for every architecture documentation. If you compare am to
house, na di floor plan.

### Motivation

Maintain overview of your source code by to make im structure understandable
through abstraction.

Dis one allow you to communicate with your stakeholder for abstract level
without to disclose implementation details.

### Form

Di building block view na hierarchial collection of black boxes and white
boxes (check di figure below) and their descriptions.

## 5.1 Whitebox Overall System

Here you describe di decomposition of di overall system wey use di following white box template. E contain

- overview diagram

- motivation for di decomposition

- black box descriptions of di building blocks wey dey inside. For dis one we offer you alternatives:

  - use one table for short and pragmatic overview of all di building blocks wey dey inside and their interfaces

  - use list of black box descriptions of di building blocks according to di black box template (check below). Depending on di tool wey you choose, dis list fit be sub-chapters (for text files), sub-pages (for Wiki) or nested elements (for modelling tool).

  - (optional:) important interfaces, wey no dey explained for di black box templates of building block, but wey very important to understand di white box.

Since plenty ways dey to specify interfaces, we no provide specific template for dem.

For di best case, examples or simple signatures go be enough.

## 5.2 Level 2

Here you fit specify di inner structure of (some) building blocks from level 1
as white boxes.

You must decide which building blocks of your system important enough to
justify such detailed description. Abeg prefer relevance over completeness.
Specify important, surprising, risky, complex or volatile building blocks. Leave
out normal, simple, boring or standardized parts of your system

### 5.2.1 White Box for building block 1

E specify di internal structure of building block 1.

Use di white box template (check above).

## 6. Runtime View

Behavior of building blocks as scenarios, wey cover important use cases or
features, interactions for critical external interfaces, operation and
administration plus error and exception behavior.

### Content

Di runtime view describe concrete behavior and interactions of di system building blocks for form of scenarios from di following areas:

- important use cases or features: how building blocks dey execute dem?

- interactions for critical external interfaces: how building blocks dey cooperate with users and neighbouring systems?

- operation and administration: launch, start-up, stop

- error and exception scenarios

Remark: Di main criterion to choose possible scenarios (sequences, workflows) na their architectural relevancy. E no important to describe large number of scenarios. Better you document representative selection.

### Motivation

You suppose understand how (instances of) building blocks of your system dey do their job and communicate for runtime. You go mainly capture scenarios for your documentation to communicate your architecture to stakeholders wey less willing or able to read and understand di static models (building block view, deployment view).

### Form

Many notations dey to describe scenarios, e.g.


- numbered list of steps (for natural language)

- activity diagrams or flow charts

- sequence diagrams

- BPMN or EPCs (event process chains)

- state machines

- etc.

## 6.n Runtime Scenario n (1, 2, 3, etc.)

Insert runtime diagram or textual description of di scenario.

Insert description of di notable aspects of di interactions between di building block instances wey di diagram depict.

## 7. Deployment View

Technical infrastructure with environments, computers, processors, topologies.
Mapping of (software) building blocks to infrastructure elements.

### Content

Di deployment view describe:

- di technical infrastructure wey dem use to execute your system, with infrastructure
  elements like geographical locations, environments, computers, processors,
  channels and net topologies and also other infrastructure elements and

- di mapping of (software) building blocks to dat infrastructure elements.

Often dem dey execute systems for different environments, e.g. development
environment, test environment, production environment. For such cases, you suppose
document all relevant environments.

Especially document di deployment view wen dem execute your software as
distributed system with more than one computer, processor, server or container
or wen you design and construct your own hardware processors and chips.

From software perspective, e enough to capture dose elements of di
infrastructure wey need to show di deployment of your building blocks.
Hardware architects fit go beyond dat and describe di infrastructure to any
level of detail wey dem need to capture.

### Motivation

Software no dey run without hardware. Dis underlying infrastructure fit and
go influence your system and/or some cross-cutting concepts. So,
you need to know di infrastructure.

### Form

Maybe di highest level deployment diagram don already dey inside section 3.2. as technical context with your own infrastructure as ONE black box. For dis section you go zoom into dis black box with additional deployment diagrams.

- UML offer deployment diagrams to express dat view. Use am, probably with nested diagrams, wen your infrastructure more complex.

- Wen your (hardware) stakeholders prefer other kinds of diagrams instead of
  UML deployment diagram, let dem use any kind wey fit show nodes and
  channels of di infrastructure.

## 7.1 Infrastructure Level 1

Describe (usually with combination of diagrams, tables, and text):

- di distribution of your system to multiple locations, environments, computers, processors, .. and also di physical connections between dem

- important justification or motivation for dis deployment structure

- quality and/or performance features of di infrastructure

- di mapping of software artifacts (building blocks) to elements of di infrastructure

For multiple environments or alternative deployments, abeg copy dat section of arc42 for all relevant environments. **

## 7.2 Infrastructure Level 2

Here you fit include di internal structure of (some) infrastructure elements from infrastructure level 1.

Abeg copy di structure from level 1 for each selected element.

## 8. Crosscutting Concepts

Overall, principal regulations and solution approaches wey relevant for multiple
parts (→ cross-cutting) of di system. Concepts often relate to multiple
building blocks. Include different topics like domain models, architecture
patterns and -styles, rules to use specific technology and implementation
rules.

### Content

Dis section describe crosscutting concepts (practices, patterns, regulations
or solution ideas). Such concepts often relate to multiple building blocks.
Dem fit include many different topics.

### Motivation

Concepts form di basis for conceptual integrity (consistency, homogeneity) of
di architecture. So, dem be important contribution to achieve inner
qualities of your system.

Dis na di place for di template wey we provide for cohesive specification
of such concepts.

Many of dis concepts relate to or influence several of your building blocks.

### Form

Di form fit vary:

- concept papers with any kind of structure

- example implementations, especially for technical concepts

- cross-cutting model excerpts or scenarios wey use notations of di architecture views

### Structure of this section

Pick only di most-needed topics for your system and assign each level-2 heading for dis section (e.g. 8.1, 8.2 etc).

- NO TRY to cover all di topics of di diagram wey we mention before.

### Background

Some topics inside systems often concern multiple building blocks, hardware
elements or development processes. E fit easier to communicate or document
such cross-cutting topics for one central location, instead of to repeat dem in
di description of di building blocks, hardware elements or
development processes wey concern.

Certain concepts fit concern all elements of system, others fit only be
relevant for few.

## 9. Architectural Decisions

Important, expensive, critical, large scale or risky architecture decisions
including rationales.

### Content

Important, expensive, large scale or risky architecture decisions including
rationales. With “decisions” we mean to select one alternative based on given
criteria.

Abeg use your judgement to decide whether architectural decision suppose be
documented here for dis central section or whether e better to document am
locally (e.g. inside di white box template of one building block). Avoid
redundant texts. Refer to section 4, where you don already capture di most important
decisions of your architecture.

### Motivation

Stakeholders of your system suppose fit comprehend and retrace your
decisions.

### Form

- ADR (architecture decision record) for every important decision

- list or table, wey dem order by importance and consequences or

- more detailed for form of separate sections per decision

### Background (on ADRs)

Smaller pieces of documentation easier to read, create and maintain. Wen e
come to architecture decisions, development teams often:

- know about di decision, as e visible e.g. for source code, but

- miss di motivation behind dat decision (check Nygard 2011)

So you suppose document few important decisions together with their
motivation, reasoning

### Our proposal concerning decisions

Keep collection of architecturally significant decisions, dose decisions wey
affect di structure, quality characteristics, important (especially external)
dependencies and interfaces, or construction techniques (thanks to Michael
Nygard for dis proposal).

## 10. Quality Requirements

Quality requirements as scenarios, with quality tree to give high-level
overview. Di most important quality goals suppose don dey described for section
1.2. (quality goals).

### Content

Dis section contain all relevant quality requirements.

Dem don already describe di most important of dis requirements for section
1.2. (quality goals), so dem suppose only dey referenced here. For dis
section 10 you suppose also capture quality requirements wey less important,
wey no go create high risks if dem no fully achieve dem (but fit be
nice-to-have).

### Motivation

Since quality requirements go get plenty influence on architectural
decisions, you suppose know which qualities really important for your
stakeholders, for specific and measurable way.

### Further Information

Check di extensive Q42 quality model for https://quality.arc42.org.

## 10.1 Quality Requirements Overview

### Content

Overview or summary of quality requirements.

### Motivation

Often we dey meet dozens (or even hundreds) of detailed quality requirements.
For dis overview section, you suppose try to summarize, e.g. by to describe
categories or topics (as ISO 25010:2023 or Q42 suggest

If dis summary descriptions don already precise, specific enough and
measurable, you fit skip section 10.2.

### Form

Use simple table where each line contain category or topic and short
description of di quality requirement. Alternatively, you fit use mindmap to
structure dis quality requirements.

For literature, dem don also describe di idea of quality attribute tree,
wey put di generic term “quality” as di root and use tree-like
refinement of di term “quality”. [Bass+21] introduce di term “Quality
Attribute Utility Tree” for dis purpose.

## 10.2 Quality Scenarios

### Content

Quality scenarios dey make quality requirements concrete and dem allow to decide whether
dem fulfilled (for di sense of acceptance criteria). Make sure say your
scenarios specific and measurable.

Two kinds of scenarios dey especially useful:

- Usage scenarios (dem also dey call dem application scenarios or use case scenarios)
  describe di runtime reaction of di system to certain stimulus. Dis also
  include scenarios wey describe di efficiency or performance of di system.
  Example: Di system react to user request within one second.

- Change scenarios describe di desired effect of modification or extension of
  di system or of im immediate environment. Example: Dem implement additional functionality
  or requirements for quality attribute change, and dem measure di effort
  or duration of di change.

### Form

Typical information for detailed scenarios include di following:

For short form (wey Q42 model favour):

- Context/Background: Which kind of system or component, wetin be di environment or situation?

- Source/Stimulus: Who or wetin initiate or trigger behaviour, reaction or action.

- Metric/Acceptance Criteria: Response wey include measure or metric

Di long form of scenarios (wey SEI and [Bass+21] favour) more detailed and include di following information:

- Scenario ID: Unique identifier for di scenario.

- Scenario Name: Short, descriptive name for di scenario.

- Source: Di entity (user, system, or event) wey initiate di scenario.

- Stimulus: Di triggering event or condition wey di system must address.

- Environment: Di operational context or condition wey di system experience di stimulus under.

- Artifact: Di building-blocks or other elements of di system wey di stimulus affect.

- Response: Di outcome or behavior wey di system show as reaction to di stimulus.

- Response Measure: Di criteria or metric wey dem use to evaluate di response of di system.

### See also

Since January 2023, arc42 dey provide pragmatic quality model, wey propose to
label quality requirements, with hashtags or labels like #flexible, #efficient,
#usable, #operable, #testable, #secure, #safe, #reliable.

## 11. Risks and Technical Debt

Known technical risks or technical debt. Which potential problems dey inside or
around di system? Wetin dey make di development team feel miserable?

### Content

List of technical risks or technical debts wey dem identify, wey dem order by priority

### Motivation

“Risk management is project management for grown-ups” (Tim Lister, Atlantic
Systems Guild.)

Dis suppose be your motto for systematic detection and evaluation of risks and
technical debts for di architecture, wey management stakeholders (e.g. project managers, product owners) go need as part of di overall risk
analysis and measurement planning.

### Form

List of risks and/or technical debts, probably including suggested measures to
minimize, mitigate or avoid risks or reduce technical debts.
