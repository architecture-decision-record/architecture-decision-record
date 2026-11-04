# Decisioun record templat bi arc42

<https://arc42.org/overview>

## 1. Introduction an Goals

Short description o the requirements, drivin forces, extract (or abstract) o
requirements. Tap three (max five) quality goals for the architectur that hae
the heichest priority for the major stakeholders. A table o important stakeholders
wi their expectation regardin architectur.

## 1.1 Requirements Owerview

### Contents

Short description o the functional requirements, drivin forces, extract (or
abstract) o requirements. Links tae the (hopefully existin) requirements
documents, wi information whaur tae find it. 

### Motivation

Frae the pynt o view o the end uisers a system is made or modified tae
improve support o a business activity and/or improve the quality. 

### Form

Short textual description, probably in tabular uise-case format. If requirements
documents exist this owerview sud refer tae thae documents.

Keep thir excerpts as short as possible. Balance readability o this document
wi potential redundancy w.r.t. requirements documents. 

## 1.2 Quality goals

### Content

The tap three (max five) quality goals for the architectur whase fulfilment is
o heichest importance tae the major stakeholders. We really mean quality goals
for the architectur. Dinnae confuse them wi project goals. They are no
necessarily identical. The ISO 25010 staundart provides a nice owerview o
potential topics o interest.

### Motivation

Ye sud ken the quality goals o yer maist important stakeholders, sin
they will influence fundamental architectural decisiouns. Mak siccar tae be unco
concrete aboot thir qualities, avoid buzzwirds. If ye as an architect dinnae
ken hoo the quality o yer wark will be judged …

### Form

A table wi the maist important quality goals an concrete scenarios, ordered bi priorities.

## 1.3 Stakeholder

### Content

Explicit owerview o stakeholders o the system, i.e. aw fowk, roles or
organisations that

- sud ken the architectur

- hae tae be convinced o the architectur

- hae tae wark wi the architectur or wi code

- need the documentation o the architectur for their wark

- hae tae come up wi decisiouns aboot the system or its development

### Motivation

Ye sud ken aw pairties involved in development o the system or affectit bi
the system. Itherwise, ye micht get nesty surprises efter in the development
process. Thir stakeholders determine the extent an the level o detail o yer
wark an its results.

### Form

Table wi role names, person names, an their expectatiouns wi respect tae the
architectur an its documentation.

## 2. Constraints

Onie thing that constrains teams in design an implementation decisiouns or
decisioun aboot relatit processes. Can whiles gae ayont individual systems an
are valid for haill organisatiouns an companies.

### Content

Onie requirement that constrains saftware architects in their freedom o design
an implementation decisiouns or decisioun aboot the development process. Thir
constraints whiles gae ayont individual systems an are valid for haill
organisatiouns an companies.

### Motivation

Architects sud ken exactly whaur they are free in their design decisiouns an
whaur they maun adhere tae constraints. Constraints maun aye be dealt wi;
they micht be negotiable, tho.

### Form

Simple tables o constraints wi explanatiouns. If needit ye can subdivide them
intae technical constraints, organisational an political constraints an
conventiouns (e.g. programmin or versionin guidelines, documentation or namin
conventiouns)

## 3. Context an Scope

Delimits yer system frae its (external) communication partners (neighbourin
systems an uisers). Specifies the external interfaces. Shawn frae a
business/domain perspective (aye) or a technical perspective (optional)

### Content

System scope an context - as the name suggests - delimits yer system (i.e.
yer scope) frae aw its communication partners (neighbourin systems an uisers,
i.e. the context o yer system). It thereby specifies the external interfaces.

If necessary, differentiate the business context (domain specific inputs an
outputs) frae the technical context (channels, protocols, hardware).

### Motivation

The domain interfaces an technical interfaces tae communication partners are
amang yer system’s maist critical aspects. Mak siccar ye completely
unnerstaun them.

### Form

- Various context diagrams

- Lists o communication partners an their interfaces.

## 3.1 Business context

### Content

Specification o aw communication partners (uisers, IT-systems, …) wi
explanatiouns o domain specific inputs an outputs or interfaces. Optionally ye
can add domain specific formats or communication protocols.

### Motivation

Aw stakeholders sud unnerstaun which data are exchanged wi the environment
o the system.

### Form

Aw kinds o diagrams that shaw the system as a black box an specify the domain
interfaces tae communiations partners.

Alternatively (or additionally) ye can uise a table. The title o the table is
the name o yer system, the three columns contain the name o the communication
partner, the inputs, an the outputs.

## 3.2 Technical context

### Contents

Technical interfaces (channels an transmission media) linkin yer system tae
its environment. In addition a mappin o domain specific input/output tae the
channels, i.e. an explanation wi I/O uises which channel.

### Motivation

Mony stakeholders mak architectural decisiouns based on the technical interfaces
atween the system an its context. Especially infrastructur or hardware
designers decide thir technical interfaces.

### Form

E.g. UML deployment diagram describin channels tae neighbourin systems, thegither
wi a mappin table shawin the relationships atween channels an
input/output.

## 4. Solution Strategy

Summary o the fundamental decisiouns an solution strategies that shape the
architectur. Can include technology, tap-level decomposition, approaches tae
achieve tap quality goals an relevant organisational decisiouns.

### Contents

A short summary an explanation o the fundamental decisiouns an solution strategies, that shape the system’s architectur. These include

- technology decisiouns

- decisiouns aboot the tap-level decomposition o the system, e.g. uisage o an architectural pattern or design pattern

- decisiouns on hoo tae achieve key quality goals

- relevant organisational decisiouns, e.g. selectin a development process or delegatin certain tasks tae third pairties.

### Motivation

Thir decisiouns form the cornerstanes for yer architectur. They are the basis
for mony ither detailed decisiouns or implementation rules.

### Form

Keep the explanation o thir key decisiouns short.

Motivate whit ye hae decidit an why ye decidit that wey, based upon yer
problem statement, the quality goals an key constraints. Refer tae details in
the follaein sections (section 5 for structural details, section 8 for
crosscuttin concepts).

Ye micht uise a list o solution-approaches or a table.

## 5. Biggin Block View

Static decomposition o the system, abstractions o source-code, shawn as
hierarchy o white boxes (containin black boxes), up tae the appropriate level
o detail.

### Content

The biggin block view shaws the static decomposition o the system intae
biggin blocks (modules, components, subsystems, classes, interfaces, packages,
leebraries, frameworks, layers, partitions, tiers, functions, macros, operatiouns,
data structurs, …) as weel as their dependencies (relationships, associatiouns,
…)

This view is mandatory for ilka architectur documentation. In analogy tae a
hoose this is the floor plan.

### Motivation

Keep an owerview o yer source code bi makin its structur unnerstaundable
throu abstraction.

This lets ye communicate wi yer stakeholder on an abstract level
athoot disclosin implementation details.

### Form

The biggin block view is a hierarchial collection o black boxes an white
boxes (see figure ablow) an their descriptions.

## 5.1 Whitebox Owerall System

Here ye describe the decomposition o the owerall system uisin the follaein white box template. It contains

- an owerview diagram

- a motivation for the decomposition

- black box descriptions o the containit biggin blocks. For thir we offer ye alternatives:

  - uise ae table for a short an pragmatic owerview o aw containit biggin blocks an their interfaces

  - uise a list o black box descriptions o the biggin blocks accordin tae the black box template (see ablow). Dependin on yer chyce o tuil this list could be sub-chapters (in text files), sub-pages (in a Wiki) or nestit elements (in a modellin tuil).

  - (optional:) important interfaces, that are no explainit in the black box templates o a biggin block, but are unco important for unnerstaunin the white box.

Sin there are sae mony weys tae specify interfaces why dae we no provide a specific templat for them.

In the best case ye will get awa wi examples or simple signatures.

## 5.2 Level 2

Here ye can specify the inner structur o (some) biggin blocks frae level 1
as white boxes.

Ye hae tae decide which biggin blocks o yer system are important eneuch tae
justify sic a detailed description. Please prefer relevance ower completeness.
Specify important, surprisin, risky, complex or volatile biggin blocks. Leave
oot normal, simple, borin or staundartised pairts o yer system

### 5.2.1 White Box for biggin block 1

Specifies the internal structur o biggin block 1.

Uise the white box templat (see abune).

## 6. Runtime View

Behaviour o biggin blocks as scenarios, coverin important uise cases or
features, interactiouns at critical external interfaces, operation an
administration plus error an exception behaviour.

### Content

The runtime view describes concrete behaviour an interactiouns o the system’s biggin blocks in form o scenarios frae the follaein areas:

- important uise cases or features: hoo dae biggin blocks execute them?

- interactiouns at critical external interfaces: hoo dae biggin blocks cooperate wi uisers an neighbourin systems?

- operation an administration: launch, start-up, stop

- error an exception scenarios

Remark: The main criterion for the chyce o possible scenarios (sequences, workflows) is their architectural relevancy. It isna important tae describe a muckle nummer o scenarios. Ye sud raither document a representative selection.

### Motivation

Ye sud unnerstaun hoo (instances o) biggin blocks o yer system perform their job an communicate at runtime. Ye will mainly tak doun scenarios in yer documentation tae communicate yer architectur tae stakeholders that are less willin or able tae read an unnerstaun the static models (biggin block view, deployment view).

### Form

There are mony notations for describin scenarios, e.g.


- numbered list o steps (in natural leid)

- activity diagrams or flow chairts

- sequence diagrams

- BPMN or EPCs (event process chains)

- state machines

- etc.

## 6.n Runtime Scenario n (1, 2, 3, etc.)

Insert runtime diagram or textual description o the scenario.

Insert description o the notable aspects o the interactiouns atween the biggin block instances depictit in this diagram.

## 7. Deployment View

Technical infrastructur wi environments, computers, processors, topologies.
Mappin o (saftware) biggin blocks tae infrastructur elements.

### Content

The deployment view describes:

- the technical infrastructur uised tae execute yer system, wi infrastructur
  elements like geographical locatiouns, environments, computers, processors,
  channels an net topologies as weel as ither infrastructur elements an

- the mappin o (saftware) biggin blocks tae that infrastructur elements.

Aften systems are executit in different environments, e.g. development
environment, test environment, production environment. In sic cases ye sud
document aw relevant environments.

Especially document the deployment view whan yer saftware is executit as
distributit system wi mair than ane computer, processor, server or container
or whan ye design an construct yer ain hardware processors an chips.

Frae a saftware perspective it is sufficient tae tak doun thae elements o the
infrastructur that are needit tae shaw the deployment o yer biggin blocks.
Hardware architects can gae ayont that an describe the infrastructur tae onie
level o detail they need tae tak doun. 

### Motivation

Saftware daesna rin athoot hardware. This unnerlyin infrastructur can an
will influence yer system and/or some cross-cuttin concepts. Therefore, ye
need tae ken the infrastructur.

### Form

Maybe the heichest level deployment diagram is awready containit in section 3.2. as technical context wi yer ain infrastructur as AE black box. In this section ye will zoom intae this black box uisin additional deployment diagrams.

- UML offers deployment diagrams tae express that view. Uise it, probably wi nestit diagrams, whan yer infrastructur is mair complex.

- Whan yer (hardware) stakeholders prefer ither kinds o diagrams raither than
  UML deployment diagram, let them uise onie kind that is able tae shaw nodes an
  channels o the infrastructur.

## 7.1 Infrastructur Level 1

Describe (usually in a combination o diagrams, tables, an text):

- the distribution o yer system tae multiple locatiouns, environments, computers, processors, .. as weel as the physical connectiouns atween them

- important justification or motivation for this deployment structur

- quality and/or performance features o the infrastructur

- the mappin o saftware artefacts (biggin blocks) tae elements o the infrastructur

For multiple environments or alternative deployments please copy that section o arc42 for aw relevant environments. **

## 7.2 Infrastructur Level 2

Here ye can include the internal structur o (some) infrastructur elements frae infrastructur level 1.

Please copy the structur frae level 1 for each selectit element.

## 8. Crosscuttin Concepts

Owerall, principal regulatiouns an solution approaches relevant in multiple
pairts (→ cross-cuttin) o the system. Concepts are aften relatit tae multiple
biggin blocks. Include different topics like domain models, architectur
patterns an -styles, rules for uisin specific technology an implementation
rules.

### Content

This section describes crosscuttin concepts (practices, patterns, regulatiouns
or solution ideas). Sic concepts are aften relatit tae multiple biggin blocks.
They micht include mony different topics.

### Motivation

Concepts form the basis for conceptual integrity (consistency, homogeneity) o
the architectur. Sae, they are an important contribution tae achieve inner
qualities o yer system.

This is the place in the templat that we providit for a cohesive specification
o sic concepts.

Mony o thir concepts relate tae or influence several o yer biggin blocks.

### Form

The form can be varied:

- concept papers wi onie kind o structur

- example implementatiouns, especially for technical concepts

- cross-cuttin model excerpts or scenarios uisin notatiouns o the architectur views

### Structur o this section

Pick juist the maist-needit topics for yer system an assign each a level-2 heading in this section (e.g. 8.1, 8.2 etc).

- DINNAE ATTEMPT tae cover aw o the topics o the aforementioned diagram.

### Background

Some topics within systems aften concern multiple biggin blocks, hardware
elements or development processes. It micht be easier tae communicate or document
sic cross-cuttin topics at a central locatioun, instead o repeatin them in
the description o the concernit biggin blocks, hardware elements or
development processes.

Certain concepts micht concern aw elements o a system, ithers micht juist
be relevant for a few.

## 9. Architectural Decisions

Important, expensive, critical, muckle scale or risky architectur decisiouns
includin rationales.

### Content

Important, expensive, muckle scale or risky architectur decisiouns includin
rationales. Wi “decisions” we mean selectin ae alternative based on gien
criteria.

Please uise yer judgement tae decide whether an architectural decisioun sud be
documentit here in this central section or whether ye better document it
locally (e.g. within the white box templat o ae biggin block). Avoid
redundant texts. Refer tae section 4, whaur ye tuik doun the maist important
decisiouns o yer architectur awready.

### Motivation

Stakeholders o yer system sud be able tae comprehend an retrace yer
decisiouns.

### Form

- ADR (architectur decisioun record) for ilka important decisioun

- list or table, ordered bi importance an consequences or

- mair detailed in form o separate sections per decisioun

### Background (on ADRs)

Smaller pieces o documentation are easier tae read, mak an keep up. Whan it
comes tae architectur decisiouns, development teams will aften:

- ken aboot the decisioun, as it visible e.g. in source code, but

- miss the motivation ahint that decisioun (see Nygard 2011)

Therefore ye sud document a few important decisiouns thegither wi their
motivation, reasonin

### Oor proposal concernin decisiouns

Keep a collection o architecturally significant decisiouns, thae decisiouns that
affect the structur, quality characteristics, important (especially external)
dependencies an interfaces, or constructioun techniques (thanks tae Michael
Nygard for this proposal).

## 10. Quality Requirements

Quality requirements as scenarios, wi quality tree tae provide heich-level
owerview. The maist important quality goals sud hae been describit in section
1.2. (quality goals).

### Content

This section contains aw relevant quality requirements.

The maist important o thir requirements hae awready been describit in section
1.2. (quality goals), therefore they sud juist be referencit here. In this
section 10 ye sud an aw tak doun quality requirements wi lesser importance,
which winna mak heich risks whan they arena fully achieved (but micht be
nice-tae-hae).

### Motivation

Sin quality requirements will hae a lot o influence on architectural
decisiouns ye sud ken whit qualities are really important for yer
stakeholders, in a specific an measurable wey.

### Further Information

See the extensive Q42 quality model on https://quality.arc42.org.

## 10.1 Quality Requirements Owerview

### Content

An owerview or summary o quality requirements.

### Motivation

Aften we come athort dizzens (or even hunders) o detailed quality requirements.
In this owerview section ye sud try tae summarise, e.g. bi describin
categories or topics (as suggestit bi ISO 25010:2023 or Q42

If thir summary descriptions are awready precise, specific eneuch an
measurable, ye micht skip section 10.2.

### Form

Uise a simple table in which each line contains a category or topic an a short
description o the quality requirement. Alternatively, ye micht uise a mindmap tae
structur thir quality requirements.

In literature, the idea o a quality attribute tree haes an aw been describit,
which pits the generic term “quality” as the root an uises a tree-like
refinement o the term “quality”. [Bass+21] introducit the term “Quality
Attribute Utility Tree” for this purpose.

## 10.2 Quality Scenarios

### Content

Quality scenarios mak quality requirements concrete an allou tae decide whether
they are fulfilt (in the sense o acceptance criteria). Ensure that yer
scenarios are specific an measurable.

Twa kinds o scenarios are especially uiseful:

- Uisage scenarios (an aw cried application scenarios or uise case scenarios)
  describe the system’s runtime reaction tae a certain stimulus. This an aw
  includes scenarios that describe the system’s efficiency or performance.
  Example: The system reacts tae a uiser’s request within ae second.

- Chynge scenarios describe the desired effect o a modification or extension o
  the system or o its immediate environment. Example: Additional functionality
  is implementit or requirements for a quality attribute chynge, an the effort
  or duration o the chynge is measured.

### Form

Typical information for detailed scenarios include the follaein:

In short form (favoured in the Q42 model):

- Context/Background: Whit kind o system or component, whit is the environment or situation?

- Source/Stimulus: Wha or whit initiates or triggers a behaviour, reaction or action.

- Metric/Acceptance Criteria: A response includin a measure or metric

The lang form o scenarios (favoured bi the SEI an [Bass+21]) is mair detailed an includes the follaein information:

- Scenario ID: A unique identifier for the scenario.

- Scenario Name: A short, descriptive name for the scenario.

- Source: The entity (uiser, system, or event) that initiates the scenario.

- Stimulus: The triggerin event or condition the system maun address.

- Environment: The operational context or condition unner which the system experiences the stimulus.

- Artifact: The biggin-blocks or ither elements o the system affectit bi the stimulus.

- Response: The outcome or behaviour the system exhibits in reaction tae the stimulus.

- Response Measure: The criteria or metric bi which the system’s response is evaluatit.

### See also

Frae January 2023, arc42 provides a pragmatic quality model, that proposes tae
label quality requirements, wi hashtags or labels like #flexible, #efficient,
#usable, #operable, #testable, #secure, #safe, #reliable.

## 11. Risks an Technical Debt

Kent technical risks or technical debt. Whit potential problems exist within or
roun the system? Whit daes the development team feel meeserable aboot?

### Content

A list o identifiet technical risks or technical debts, ordered bi priority

### Motivation

“Risk management is project management for grown-ups” (Tim Lister, Atlantic
Systems Guild.)

This sud be yer motto for systematic detection an evaluation o risks an
technical debts in the architectur, which will be needit bi management
stakeholders (e.g. project managers, product awners) as pairt o the owerall risk
analysis an measurement plannin.

### Form

List o risks and/or technical debts, probably includin suggestit measures tae
minimise, mitigate or avoid risks or reduce technical debts.
