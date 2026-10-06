# Monorepo neu multirepo

Cynnwys:

* [Crynodeb](#crynodeb)
  * [Mater](#mater)
  * [Penderfyniad](#penderfyniad)
  * [Statws](#statws)
* [Manylion](#manylion)
  * [Rhagdybiaethau](#rhagdybiaethau)
  * [Cyfyngiadau](#cyfyngiadau)
  * [Safbwyntiau](#safbwyntiau)
  * [Dadl](#dadl)
  * [Goblygiadau](#goblygiadau)
* [Cysylltiedig](#cysylltiedig)
  * [Penderfyniadau cysylltiedig](#penderfyniadau-cysylltiedig)
  * [Gofynion cysylltiedig](#gofynion-cysylltiedig)
  * [Arteffactau cysylltiedig](#arteffactau-cysylltiedig)
  * [Egwyddorion cysylltiedig](#egwyddorion-cysylltiedig)
* [Nodiadau](#nodiadau)


## Crynodeb


### Mater

Mae ein prosiect yn cynnwys datblygu tri phrif gategori o feddalwedd:

  * GUIau pen blaen
  * Gwasanaethau canolwedd
  * Gweinyddion pen ôl

Pan fyddwn yn datblygu, git yw ein system rheoli fersiynau (VCS) ar gyfer rheoli cod ffynhonnell (SCM).

Mae angen i ni ddewis sut rydym yn defnyddio git i drefnu ein cod.

Y dewis lefel uchaf yw trefnu fel "monorepo" neu "polyrepo" neu "hybrid":

  * Mae monorepo yn golygu ein bod yn rhoi pob darn mewn un ystorfa fawr
  * Mae polyrepo yn golygu ein bod yn rhoi pob darn yn ei ystorfa ei hun
  * Mae hybrid yn golygu rhyw gymysgedd o monorepo a polyrepo

I gael rhagor, gweler https://github.com/joelparkerhenderson/monorepo-vs-polyrepo


### Penderfyniad

Monorepo pan fo sefydliad/tîm/prosiect yn gymharol fach, a bod ailadrodd cyflym yn flaenoriaeth uwch na chynnal sefydlogrwydd.

Polyrepo pan fo sefydliad/tîm/prosiect yn gymharol fawr, a bod cynnal sefydlogrwydd yn flaenoriaeth uwch nag ailadrodd cyflym.


### Statws

Penderfynwyd. Rydym yn agored i ailystyried os/pan ddaw offer newydd ar gael i reoli monorepos a/neu polyrepos.


## Manylion


### Rhagdybiaethau

Mae'r holl god rydym yn ei ddatblygu ar gyfer cynigion un sefydliad, ac nid ar gyfer y cyhoedd. H.y. nid yw'r Gwerthwr-Ddeliwr yn anelu at gael unrhyw beth tebyg i ddatblygwyr gwirfoddol o blith y cyhoedd.


### Cyfyngiadau

Mae'r cyfyngiadau wedi'u dogfennu'n dda yn https://github.com/joelparkerhenderson/monorepo-vs-polyrepo


### Safbwyntiau

Ystyriasom monorepos yn null Google, Facebook, ac ati. Credwn fod unrhyw broblemau graddio monorepo mor bell yn y dyfodol y byddwn yn gallu defnyddio'r un arferion â Google a Facebook, erbyn i ni eu hangen.

Ystyriasom polyrepos yn null prosiectau ffynhonnell agored Git nodweddiadol, fel Google Android, Facebook React, ac ati. Credwn mai'r rhain yw'r dewis gorau ar gyfer cyfranogiad y cyhoedd (e.e. gall unrhyw un yn y byd weithio ar y cod) ac argaeledd unigol (e.e. defnyddir y prosiect ar ei ben ei hun, heb unrhyw ddarnau eraill).


### Dadl

Pan fo sefydliad/tîm/prosiect yn gymharol fach, rydym yn dewis monorepo, oherwydd bod ailadrodd cyflym yn flaenoriaeth sylweddol uwch na chynnal sefydlogrwydd

Pan fo sefydliad/tîm/prosiect yn gymharol fawr, rydym yn dewis polyrepo, oherwydd bod cynnal sefydlogrwydd yn flaenoriaeth sylweddol uwch nag ailadrodd cyflym.


### Goblygiadau

Os oes piblinell CI+CD eisoes, efallai y bydd angen i ni ei haddasu i brofi sawl prosiect o fewn un ystorfa.

Gallai CI+CD gymryd mwy o amser ar gyfer adeiladwaith llawn monorepo, oherwydd gallai CI+CD adeiladu'r holl brosiectau yn y monorepo.

Os bydd sefydliad/tîm/prosiect yn tyfu, yna bydd gan monorepo broblemau graddio.

Gall problemau graddio monorepo ei gwneud hi'n fwyfwy gwerthfawr i drawsnewid i polyrepo.

Mae trawsnewid o monorepo i polyrepo yn dasg devops sylweddol, ac mae angen ei chynllunio, ei rheoli a'i rhaglennu.


## Cysylltiedig


### Penderfyniadau cysylltiedig

Byddwn yn creu penderfyniadau ar gyfer offer cysylltiedig i reoli monorepos (e.e. Google Bazel) a polyrepos (e.e. Lyft Refactorator).


### Gofynion cysylltiedig

Mae angen i ni ddatblygu'r biblinell CI+CD i weithio'n dda gyda git.


### Arteffactau cysylltiedig

Rydym yn disgwyl i drefniadaeth yr ystorfa gael arteffactau cysylltiedig ar gyfer darparu, rheoli ffurfweddiad, profi, a meysydd devops tebyg. 


### Egwyddorion cysylltiedig

Hawdd ei wrthdroi. Os nad yw'r monorepo yn gweithio'n ymarferol, neu os nad yw'r arweinyddiaeth ei eisiau, mae'n syml newid i polyrepo.

Obsesiwn â'r cwsmer. Rydym yn gwerthfawrogi cael y prosiect yn nwylo cwsmeriaid, a chredwn y gall monorepo ein cael ni yno'n gyflymach na polyrepo, a hefyd ein helpu i ailadrodd yn gyflymach.

Meddwl yn fawr. Mae Google a Facebook yn eiriolwyr cryf iawn dros monorepos yn hytrach na polyrepos, oherwydd gellir datblygu/profi/cyflwyno'r holl gynigion craidd gyda'i gilydd.


## Nodiadau

Ychwanegwch unrhyw nodiadau yma.
