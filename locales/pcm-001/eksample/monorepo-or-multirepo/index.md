# Monorepo or multirepo

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


## Summary


### Issue

Our project involve to develop three major categories of software:

  * Front-end GUIs
  * Middleware services
  * Back-end servers

Wen we dey develop, our source code management (SCM) version control system (VCS) na git.

We need to choose how we go use git to organize our code.

Di top-level choice na to organize as "monorepo" or "polyrepo" or "hybrid":

  * Monorepo mean say we put all pieces inside one big repo
  * Polyrepo mean say we put each piece inside im own repo
  * Hybrid mean some mix of monorepo and polyrepo

For more, abeg check https://github.com/joelparkerhenderson/monorepo-vs-polyrepo


### Decision

Monorepo wen organization/team/project relatively small, and rapid iteration get higher priority than to sustain stability.

Polyrepo wen organization/team/project relatively large, and to sustain stability get higher priority than rapid iteration.


### Status

Decided. We open to revisit if/wen new tooling dey available to manage monorepos and/or polyrepos.


## Details


### Wetin We Assume

All di code wey we dey develop na for one organization offerings, no be for general public. I.e. di Broker-Dealer no dey aim to get anything like general public volunteer developers.


### Wetin Dey Limit Us

Dem document constraints well for https://github.com/joelparkerhenderson/monorepo-vs-polyrepo


### Positions

We consider monorepos for di style of Google, Facebook, etc. We think say any monorepo scaling issues far for future so by di time we need dem, we go fit leverage di same practices as Google and Facebook.

We consider polyrepos for di style of typical Git open source projects, like Google Android, Facebook React, etc. We think say na dem be di best choice for general public participation (e.g. anybody for di world fit work on di code) and individual availability (e.g. dem use di project on its own, without any other pieces).


### Argument

Wen organization/team/project relatively small, we choose monorepo, because rapid iteration get significantly higher priority than to sustain stability

Wen organization/team/project relatively large, we choose polyrepo, because to sustain stability get significantly higher priority than rapid iteration.


### Wetin E Mean

If pipeline for CI+CD dey already, then we fit need to adjust am to test multiple projects inside one repo.

CI+CD fit take more time for full build for monorepo, because CI+CD fit build all di projects inside di monorepo.

If organization/team/project grow, then monorepo go get scaling issues.

Monorepo scaling issues fit make am increasingly valuable to transition go polyrepo.

Transition from monorepo go polyrepo na significant devops task, and dem go need to plan am, manage am, and program am.


## Wetin Join


### Decision Dem Wey Join

We go create decisions for related tooling to manage monorepos (e.g. Google Bazel) and polyrepos (e.g. Lyft Refactorator).


### Requirement Dem Wey Join

We need to develop di CI+CD pipeline so e go work well with git.


### Artifact Dem Wey Join

We expect say di repo organization go get related artifacts for provisioning, configuration management, testing, and similar devops areas.


### Principle Dem Wey Join

Easily reversible. If di monorepo no work for practice, or leadership no want am, e simple to change go polyrepo.

Customer Obsession. We value to put di project for customers hands, and we believe say monoreop fit take us there faster than polyrepo, and also help us iterate faster.

Think big. Google and Facebook strongly advocate for monorepos over polyrepos, because dem fit develop/test/deploy all di core offerings together.


## Notes

Add any notes here.
