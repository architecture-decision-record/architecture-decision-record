# Microsoft Azure DevOps

Contents:

* [Soummary](#soummary)
  * [Maitter](#maitter)
  * [Decisioun](#decisioun)
  * [Staunin](#staunin)
* [Pairticulars](#pairticulars)
  * [Assumptiouns](#assumptiouns)
  * [Limitatiouns](#limitatiouns)
  * [Positiouns](#positiouns)
  * [Argiment](#argiment)
  * [Implicatiouns](#implicatiouns)
* [Relatit](#relatit)
  * [Relatit decisiouns](#relatit-decisiouns)
  * [Relatit requirements](#relatit-requirements)
  * [Relatit artefacts](#relatit-artefacts)
  * [Relatit principles](#relatit-principles)
* [Jottins](#jottins)
  * [Microsoft Devops CI: An Unsatisfying Adventure](#microsoft-devops-ci-an-unsatisfying-adventure)
  * [Hacker News discussion highlichts](#hacker-news-discussion-highlichts)
  * [Windows Develapment MVP](#windows-develapment-mvp)
  * [Edward Thomson (Azure PM) summary](#edward-thomson-azure-pm-summary)


## Soummary


### Maitter

We want tae uise devops tae big, integrate, deploy, an host oor projects. We are considerin Microsoft Azure DevOps.

  * We want developer experience tae be fast an reliable, for the setup o the devops e.g. configurin as weel as ongoin uise e.g. fast build times.
  
  * We want tae consider uisin Microsoft Azure as haill, for hostin the project apps, databaises, etc.


### Decisioun

Decidit against Microsoft Azure DevOps.


### Staunin

Decidit. Open tae revisitin if/whan new significant info arrives.


## Pairticulars


### Assumptiouns

Aw the usual devops assumptiouns, sic as in the beuk Accelerate.

  * Fast builds are a significant help. This accelerates the feedback loops.

  * We can swap in/oot pieces frae alternate vendors i.e. we micht want tae bring oor ain heicher-speed build servers, or uise oor ain chyce o version control system, or coordinate wi a self-hostit continuous integratioun server.
  
  * Streamlined uisability is a significant help, for developer experience, an in turn for subtle areas sic as consistency, clarity, security, an ease o learnin curve.

  * Whan onie thing is broken or problematic, we want an effective wey tae report the issue. This is especially important for onie security-relatit issues.


### Limitatiouns

Nane kent. Azure haes a publisht commitment tae playin weel wi external tuils.


### Positiouns

We consideret uisin Microsoft Azure Devops vs. AWS which is incumbent.

We experimentit wi Azure DevOps, Azure Pipelines, Azure Repo, an Azure spin up o new server via Terraform.

We experimentit wi gettin support frae Microsoft representatives.

We gaithered information frae peers on blogs an Hacker News.


### Argiment

Azure DevOps advertises an excellent set o offerins, but they dinnae haud up, an they dinnae wark weel thegither, an support is puir.

Oor firsthaun experience:

  * Azure setup is a mess o UIs, some o which owerlap wi Microsoft accounts, some o which dinnae. E.g. there's an Azure sign in, a Microsoft.com sign in, a Live.com sign in, etc. an aw are simultaneously in play.

  * We come athort a minor security issue durin setup, an foond nae resolution. We tried mony weys tae report it, tae mony Microsoft reps, wi nae success. We successfully reportit it tae Microsoft security, which replied wi won't fix.

  * Documentation is aften either wrang or oot o date. At least some o this is due tae Microsoft's puir search engine, an some o this is due tae sub-par SEO.
  
  * Terraform setup is weel documentit, an warks. But, Terraform supoprt is weak compared tae AWS acause Microsoft is biggin business relationships wi vendors tae dae chain-throu Terraform setup examples.

Oor peer experiences:

  * Efter we did oor ain blind assessment, we leukit for peer experiences. Whit we foond confirmed oor experiences.

  * Peers reportit additional problems wi build times, an problems wi bring-yer-ain-build server. Thir problems are significantly mair severe than UI problems, acause daein builds is the core purpose o a build pipeline, an we expect tae dae mony per day.

  * We foond excellent participation bi Azure teammates in the discussion areas. Kudos tae Microsoft for this. We are especially impressit wi Edward Thomson, Azure PM an coder, acause o his participation, directness, an technical explanatiouns.


### Implicatiouns

Chuisin Microsoft Azure DevOps leuks likely tae be mair expensive (~3x) in time an cost than no chuisin Azure.


## Relatit


### Relatit decisiouns

If we chuise Azure DevOps, there are mony relatit offerins, includin Azure Repo, Azure Pipeline, etc. We believe that if we chuise Azure Devops, this micht mak it easier tae uise mair Azure capabilities, or micht mak it harder tae uise ither vendors' capabilities.

We believe that Microsoft is makin great strides in developer experience, an we see Microsoft makin lairge acquisition o developer tuils (e.g. GitHub) an dependencies (e.g. Citus).

If we chuise Azure DevOps, than we micht want tae emphasise chuisin the Microsoft acquisition offerins, an we micht an aw want tae approach the acquisition offerins wi mair care/assessement acause o potential tissue-rejection e.g. staff turnower risk.


### Relatit requirements

We want build times tae be unco fast. We accept payin a heich premium for this. This is acause we want tae iterate unco fast.

We want reliability tae be unco heich. We accept payin a heich premium for this. This is acause we are testin heich-value uise cases, includin financial transations, confidential transactiouns, etc.

Oor tap 4 devops KPIs include mean time tae recovery, which necessitates fast builds an heich reliability.


### Relatit artefacts

We want the build system tae output artefacts suitable for uisin in ither systems, sic as Artifactory.


### Relatit principles

Easily reversible. We can evaluate Azure DevOps in parallel wi AWS incumbent.


## Jottins


### Microsoft Devops CI: An Unsatisfying Adventure

https://toxicbakery.github.io/vsts-devops/microsoft-devops-ci/

Blog post.

"As a saftware developer, I ken first-haun hoo difficult it is tae big quality products quickly an cheaply. It’s an art form that we whiles get richt, an ither times devolves intae somethin akin tae the Obama era healthcare government site. Oor level o control ower the resultin product varies, an blame for failure aften faas on the wrang fowk in the decisioun-makin hierarchy. Microsoft’s Azure DevOps (formerly kent as Visual Studio Team Services), despite clearly guid intentiouns, is a perfect storm o bad decisiouns an puir execution."


### Hacker News discussion highlichts

https://news.ycombinator.com/item?id=18983586

"We uise Azure DevOps extensively at my wark an, efter haein uised GitHub, Gitlab, self hostit solutiouns, Jenkins, TeamCity... Azure DevOps ranks deid last."

"The UI is terribly clunky everywhaur. The warst for me are pull requests. Incredibly teuch tae wark wi fowk on a pull request. I canna even pynt ye tae "a" particular problem - for us it's broken everywhaur."

"Azure Devops is somethin I want tae love. The UI keeps chyngin, but daesna fix unnerlyin bugs that hae been roun for ages."

"The tuils arena weel integratit, the UI is really slaw, there’s nae dashboard view o active pull requests, builds, releases, etc for my favourite repos. Build/Deploy times are insanely slaw."

"We tried tae an aw uise Azure Boards (Work Items, Boards, Backlogs, etc). Ouch. It is a complete UI mess o disjointit ideas. Instead o implementin ae thing weel, they implementit twa dizzen things terribly."


### Windows Develapment MVP

Windows Develapment MVP here. I feel like I maun shouther some o the responsibility here for no bein louder aboot thir issues. But maun say, I'm disappointit tae hear ye're "surprised" aboot the UX issues. I've been tellin yer fowk the UX is dreadful (e.g. as faur back as pre-launch) an kept hearin back "we ken, we're fixin it". I'll stairt formalisin the feedback an push it throu the pipes, stay tuned. I'm an aw local (Bellevue), wud love tae come in an try tae pipeline oor relatively simple oss .net/wpf/uwp app. I suspect it'll be an ee opener for the baith o us.

Some examples:

* Ye canna big a pipeline wi a git repo. that contains submodules

* Foond it impossible tae eedit the PATH for some custom tuilin

* The New Pipeline experience juist daesna mak a lot o sense, new uisers clickin roun will eventually end up at the wrang Docs.


### Edward Thomson (Azure PM) summary

I wrate the code that merges yer pull requests. Program Manager for at Microsoft for Azure DevOps; formerly a saftware engineer on version control tuils at GitHub, Microsoft, SourceGear.

https://www.edwardthomson.com/

Co-maintainer o libgit2. https://libgit2.github.io

Co-host o All Things Git, the Podcast aboot Git. https://www.allthingsgit.com/

Curator o Developer Tools Weekly, a newsletter aboot develapment tuils. https://developertoolsweekly.com/
