# Monorepo versus multirepo

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


## Soummary


### Maitter

Oor project involves develapin three major categories o saftware:

  * Front-end GUIs
  * Middleware services
  * Back-end servers

Whan we develap, oor source code management (SCM) version control system (VCS) is git.

We need tae chuise hoo we uise git tae organise oor code.

The tap-level chyce is tae organise as a "monorepo" or "polyrepo" or "hybrid":

  * Monorepo means we pit aw pieces intae ae muckle repo
  * Polyrepo means we pit each piece in its ain repo
  * Hybrid means some mix o monorepo an polyrepo

For mair please see https://github.com/joelparkerhenderson/monorepo-vs-polyrepo


### Decisioun

Monorepo whan an organisation/team/project is relatively sma, an rapid iteration is heicher priority than sustainin stability.

Polyrepo whan an organisation/team/project is relatively muckle, an sustainin stability is heicher priority than rapid iteration.


### Staunin

Decidit. Open tae revisitin if/whan new tuilin becomes available for managin monorepos and/or polyrepos.


## Pairticulars


### Assumptiouns

Aw the code that we're develapin is for ae organisation's offerins, an no for the general public. I.e. the Broker-Dealer isna aimin tae hae onie thing like general public volunteer developers.


### Limitatiouns

Constraints are weel-documentit at https://github.com/joelparkerhenderson/monorepo-vs-polyrepo


### Positiouns

We consideret monorepos in the style o Google, Facebook, etc. We think onie monorepo scalin issues are sae faur in the future that we will be able tae leverage the same practices as Google an Facebook, bi the time we need them.

We consideret polyrepos in the style o typical Git open source projects, sic as Google Android, Facebook React, etc. We think thir are the best chyce for general public participation (e.g. onieane in the warld can wark on the code) an individual availability (e.g. the project is uised on its ain, athoot onie ither pieces).


### Argiment

Whan an organisation/team/project is relatively sma, we chuise monorepo, acause rapid iteration is significantly heicher in priority than sustainin stability

Whan an organisation/team/project is relatively muckle, we chuise polyrepo, acause sustainin stability is significantly heicher in priority than rapid iteration.


### Implicatiouns

If there's an existin pipeline for CI+CD, than we micht need tae adjust it for testin multiple projects within ae repo.

CI+CD could tak mair time for a full build for a monorepo, acause CI+CD could big aw the projects in the monorepo.

If an organisation/team/project growes, than a monorepo will hae scalin issues.

Monorepo scalin issues micht mak it increasin valuable tae transition tae a polyrepo.

Transition frae monorepo tae polyrepo is a significant devops task, an will need tae be plannit, managed, an programmed.


## Relatit


### Relatit decisiouns

We will mak decisiouns for relatit tuilin tae manage monorepos (e.g. Google Bazel) an polyrepos (e.g. Lyft Refactorator).


### Relatit requirements

We need tae develap the CI+CD pipeline tae wark weel wi git.


### Relatit artefacts

We expect the repo organisation tae hae relatit artefacts for provisionin, configuration management, testin, an similar devops areas. 


### Relatit principles

Easily reversible. If the monorepo daesna wark in practice, or isna wantit bi leadership, it's simple tae chynge tae polyrepo.

Customer Obsession. We value gettin the project in the hauns o customers, an we believe that a monoreop can get us there faster than a polyrepo, an an aw help us iterate faster.

Think big. Google an Facebook are unco strang advocates for monorepos ower polyrepos, acause aw the core offerins can be develapit/testit/deployed in concert.


## Jottins

Add onie notes here.
