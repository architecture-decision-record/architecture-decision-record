# Microsoft Azure DevOps

Wetin Dey Inside:

* [Summary](#summary)
  * [Issue](#issue)
  * [Decision](#decision)
  * [Status](#status)
* [Details](#details)
  * [Wetin We Assume](#wetin-we-assume)
  * [Wetin Dey Limit Us](#wetin-dey-limit-us)
  * [Positions](#positions)
  * [Argument](#argument)
  * [Wetin E Mean](#wetin-e-mean)
* [Wetin Join](#wetin-join)
  * [Decision Dem Wey Join](#decision-dem-wey-join)
  * [Requirement Dem Wey Join](#requirement-dem-wey-join)
  * [Artifact Dem Wey Join](#artifact-dem-wey-join)
  * [Principle Dem Wey Join](#principle-dem-wey-join)
* [Notes](#notes)
  * [Microsoft Devops CI: Adventure Wey No Satisfy](#microsoft-devops-ci-adventure-wey-no-satisfy)
  * [Highlights from Hacker News discussion](#highlights-from-hacker-news-discussion)
  * [Windows Development MVP](#windows-development-mvp)
  * [Summary from Edward Thomson (Azure PM)](#summary-from-edward-thomson-azure-pm)


## Summary


### Issue

We want use devops to build, integrate, deploy, and host our projects. We dey consider Microsoft Azure DevOps.

  * We want make developer experience fast and reliable, for di setup of di devops e.g. configuring and also ongoing use e.g. fast build times.
  
  * We want consider to use Microsoft Azure as whole, to host di project apps, databases, etc.


### Decision

Decided against Microsoft Azure DevOps.


### Status

Decided. We open to revisit if/wen new significant info arrive.


## Details


### Wetin We Assume

All di usual devops assumptions, like for di book Accelerate.

  * Fast builds na significant help. Dis one dey accelerate di feedback loops.

  * We fit swap in/out pieces from alternate vendors i.e. we fit want bring our own higher-speed build servers, or use our own choice of version control system, or coordinate with self-hosted continuous integration server.
  
  * Streamlined usabilitiy na significant help, for developer experience, and in turn for subtle areas like consistency, clarity, security, and ease of learning curve.

  * Wen anything break or get problem, we want effective way to report di issue. Dis one important especially for any security-related issues.


### Wetin Dey Limit Us

None wey we know. Azure get published commitment to play well with external tools.


### Positions

We consider to use Microsoft Azure Devops vs. AWS wey be incumbent.

We experiment with Azure DevOps, Azure Pipelines, Azure Repo, and Azure spin up of new server through Terraform.

We experiment to get support from Microsoft representatives.

We gather information from peers on blogs and Hacker News.


### Argument

Azure DevOps advertise excellent set of offerings, but dem no hold up, and dem no work well together, and support poor.

Our firsthand experience:

  * Azure setup na mess of UIs, some of dem overlap with Microsoft accounts, some no overlap. E.g. Azure sign in dey, Microsoft.com sign in dey, Live.com sign in dey, etc. and all of dem dey play at di same time.

  * We meet minor security issue during setup, and we no find resolution. We try many ways to report am, to many Microsoft reps, with no success. We successfully report am to Microsoft security, wey reply with won't fix.

  * Documentation often wrong or outdated. At least some of dis one na because of Microsoft poor search engine, and some na because of sub-par SEO.
  
  * Terraform setup well documented, and e work. But Terraform supoprt weak compared to AWS because Microsoft dey build business relationships with vendors to do chain-through Terraform setup examples.

Our peer experiences:

  * After we do our own blind assessment, we look for peer experiences. Wetin we find confirm our experiences.

  * Peers report additional problems with build times, and problems with bring-your-own-build server. Dis problems significantly more severe than UI problems, because to do builds na di core purpose of build pipeline, and we expect to do many per day.

  * We find excellent participation by Azure teammates for di discussion areas. Kudos to Microsoft for dis. We impressed especially with Edward Thomson, Azure PM and coder, because of im participation, directness, and technical explanations.


### Wetin E Mean

To choose Microsoft Azure DevOps look likely to cost more (~3x) for time and cost than to no choose Azure.


## Wetin Join


### Decision Dem Wey Join

If we choose Azure DevOps, many related offerings dey, including Azure Repo, Azure Pipeline, etc. We believe say if we choose Azure Devops, dis fit make am easier to use more Azure capabilities, or fit make am harder to use other vendors capabilities.

We believe say Microsoft dey make great strides for developer experience, and we dey see Microsoft make large acquisition of developer tools (e.g. GitHub) and dependencies (e.g. Citus).

If we choose Azure DevOps, then we fit want emphasize to choose di Microsoft acquisition offerings, and we fit also want approach di acquisition offerings with more care/assessement because of potential tissue-rejection e.g. staff turnover risk.


### Requirement Dem Wey Join

We want make build times very fast. We accept to pay high premium for dis. Na because we want iterate very fast.

We want make reliability very high. We accept to pay high premium for dis. Na because we dey test high-value use cases, including financial transations, confidential transactions, etc.

Our top 4 devops KPIs include mean time to recovery, wey necessitate fast builds and high reliability.


### Artifact Dem Wey Join

We want make di build system output artifacts wey suitable to use for other systems, like Artifactory.


### Principle Dem Wey Join

Easily reversible. We fit evaluate Azure DevOps for parallel with AWS incumbent.


## Notes


### Microsoft Devops CI: Adventure Wey No Satisfy

https://toxicbakery.github.io/vsts-devops/microsoft-devops-ci/

Blog post.

"As software developer, I know first-hand how e hard to build quality products quick and cheap. Na art form wey we sometimes get right, and other times e dey turn into something like di Obama era healthcare government site. Our level of control over di product wey come out dey vary, and blame for failure often dey fall on di wrong people for di decision-making hierarchy. Microsoft Azure DevOps (wey dem before call Visual Studio Team Services), even though di intentions clear say dem good, na perfect storm of bad decisions and poor execution."


### Highlights from Hacker News discussion

https://news.ycombinator.com/item?id=18983586

"We dey use Azure DevOps extensively for my work and, after we don use GitHub, Gitlab, self hosted solutions, Jenkins, TeamCity... Azure DevOps rank dead last."

"Di UI clunky terribly everywhere. Di worst for me na pull requests. E incredibly tough to work with people on pull request. I no fit even point you to "one" particular problem - for us e broken everywhere."

"Azure Devops na something wey I want love. Di UI keep changing, but e no fix di underlying bugs wey don dey around for ages."

"Di tools no integrate well, di UI really slow, no dashboard view dey of active pull requests, builds, releases, etc for my favorite repos. Build/Deploy times slow insanely."

"We try also use Azure Boards (Work Items, Boards, Backlogs, etc). Ouch. Na complete UI mess of disjointed ideas. Instead of to implement one thing well, dem implement two dozen things terribly."


### Windows Development MVP

Windows Development MVP dey here. I feel say I must carry some of di responsibility here because I no talk louder about dis issues. But I must talk say, I disappointed to hear say you "surprised" about di UX issues. I don dey tell your people say di UX dreadful (e.g. from as far back as pre-launch) and I keep hear back "we know, we dey fix am". I go start to formalize di feedback and push am through di pipes, stay tuned. I dey local too (Bellevue), I go like come in and try to pipeline our relatively simple oss .net/wpf/uwp app. I suspect say e go open eye for both of us.

Some examples:

* You no fit build pipeline with git repo. wey get submodules

* I find say e impossible to edit di PATH for some custom tooling

* Di New Pipeline experience no make plenty sense, new users wey dey click around go eventually end up for di wrong Docs.


### Summary from Edward Thomson (Azure PM)

Na me write di code wey merge your pull requests. Program Manager for Microsoft for Azure DevOps; before, I be software engineer on version control tools for GitHub, Microsoft, SourceGear.

https://www.edwardthomson.com/

Co-maintainer of libgit2. https://libgit2.github.io

Co-host of All Things Git, di Podcast about Git. https://www.allthingsgit.com/

Curator of Developer Tools Weekly, newsletter about development tools. https://developertoolsweekly.com/
