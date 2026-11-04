# Monorepo an aghaidh multirepo

Susbaint:

* [Geàrr-chunntas](#geàrr-chunntas)
  * [Cùis](#cùis)
  * [Co-dhùnadh](#co-dhùnadh)
  * [Staid](#staid)
* [Mion-fhiosrachadh](#mion-fhiosrachadh)
  * [Barailean](#barailean)
  * [Cuingeadan](#cuingeadan)
  * [Seasamhan](#seasamhan)
  * [Argamaid](#argamaid)
  * [Builean](#builean)
* [Co-cheangailte](#co-cheangailte)
  * [Co-dhùnaidhean co-cheangailte](#co-dhùnaidhean-co-cheangailte)
  * [Riatanasan co-cheangailte](#riatanasan-co-cheangailte)
  * [Ealain-chruthan co-cheangailte](#ealain-chruthan-co-cheangailte)
  * [Prionnsabalan co-cheangailte](#prionnsabalan-co-cheangailte)
* [Notaichean](#notaichean)


## Geàrr-chunntas


### Cùis

Tha ar pròiseact a’ gabhail a-steach leasachadh trì prìomh roinnean de bhathar-bog:

  * GUIan aghaidh
  * Seirbheisean middleware
  * Frithealaichean cùil

Nuair a leasaicheas sinn, is e git ar siostam smachd tionndaidh (VCS) riaghlaidh còd-tùs (SCM).

Feumaidh sinn taghadh ciamar a chleachdas sinn git gus ar còd a rèiteachadh.

Is e an taghadh aig an ìre as àirde rèiteachadh mar “monorepo” no “polyrepo” no “hybrid”:

  * Tha monorepo a’ ciallachadh gu bheil sinn a’ cur a h-uile pìos ann an aon repo mòr
  * Tha polyrepo a’ ciallachadh gu bheil sinn a’ cur gach pìos na repo fhèin
  * Tha hybrid a’ ciallachadh measgachadh de monorepo agus polyrepo

Airson tuilleadh faic https://github.com/joelparkerhenderson/monorepo-vs-polyrepo


### Co-dhùnadh

Monorepo nuair a tha buidheann/sgioba/pròiseact an ìre mhath beag, agus gu bheil ath-aithris luath na phrìomhachas nas àirde na seasmhachd a chumail suas.

Polyrepo nuair a tha buidheann/sgioba/pròiseact an ìre mhath mòr, agus gu bheil seasmhachd a chumail suas na phrìomhachas nas àirde na ath-aithris luath.


### Staid

Air co-dhùnadh. Fosgailte do bhith ag ath-bheachdachadh ma/nuair a thig innealan ùra gu bhith ri fhaighinn airson monorepos agus/no polyrepos a riaghladh.


## Mion-fhiosrachadh


### Barailean

Tha a’ chòd a tha sinn a’ leasachadh uile airson tairgsean aon bhuidheann, agus chan ann dhan phoball choitcheann. I.e. chan eil am Broker-Dealer ag amas air dad coltach ri luchd-leasachaidh saor-thoileach poblach coitcheann.


### Cuingeadan

Tha cuingeadan air an clàradh gu math aig https://github.com/joelparkerhenderson/monorepo-vs-polyrepo


### Seasamhan

Bheachdaich sinn air monorepos ann an stoidhle Google, Facebook, msaa. Tha sinn a’ smaoineachadh gu bheil duilgheadasan sgèileadh monorepo sam bith cho fad air falbh san àm ri teachd gum bi sinn comasach air na h-aon chleachdaidhean ri Google is Facebook a chleachdadh, ron àm a dh’fheumas sinn iad.

Bheachdaich sinn air polyrepos ann an stoidhle pròiseactan stòr fosgailte Git àbhaisteach, leithid Google Android, Facebook React, msaa. Tha sinn a’ smaoineachadh gur iad sin an roghainn as fheàrr airson com-pàirteachadh poblach coitcheann (m.e. faodaidh neach sam bith san t-saoghal obrachadh air a’ chòd) agus ruigsinneachd fa leth (m.e. thathar a’ cleachdadh a’ phròiseict leis fhèin, gun phìosan eile).


### Argamaid

Nuair a tha buidheann/sgioba/pròiseact an ìre mhath beag, tha sinn a’ taghadh monorepo, oir tha ath-aithris luath gu mòr nas àirde ann am prìomhachas na seasmhachd a chumail suas

Nuair a tha buidheann/sgioba/pròiseact an ìre mhath mòr, tha sinn a’ taghadh polyrepo, oir tha seasmhachd a chumail suas gu mòr nas àirde ann am prìomhachas na ath-aithris luath.


### Builean

Ma tha pìob ann mar-thà airson CI+CD, dh’fhaodadh gum feum sinn a h-atharrachadh airson grunn phròiseactan a dheuchainn taobh a-staigh aon repo.

Dh’fhaodadh CI+CD barrachd ùine a ghabhail airson làn thogail airson monorepo, oir dh’fhaodadh CI+CD a h-uile pròiseact sa mhonorepo a thogail.

Ma dh’fhàsas buidheann/sgioba/pròiseact, bidh duilgheadasan sgèileadh aig monorepo.

Dh’fhaodadh duilgheadasan sgèileadh monorepo gluasad gu polyrepo a dhèanamh a’ sìor fhàs luachmhor.

Tha gluasad bho monorepo gu polyrepo na dhleastanas devops susbainteach, agus feumaidh e a bhith air a dhealbhadh, air a riaghladh, agus air a phrògramachadh.


## Co-cheangailte


### Co-dhùnaidhean co-cheangailte

Cruthaichidh sinn co-dhùnaidhean airson innealan co-cheangailte gus monorepos (m.e. Google Bazel) agus polyrepos (m.e. Lyft Refactorator) a riaghladh.


### Riatanasan co-cheangailte

Feumaidh sinn a’ phìob CI+CD a leasachadh gus obrachadh gu math le git.


### Ealain-chruthan co-cheangailte

Tha sinn an dùil gum bi ealain-chruthan co-cheangailte aig rèiteachadh an repo airson solarachadh, riaghladh rèiteachaidh, deuchainn, agus raointean devops coltach ris. 


### Prionnsabalan co-cheangailte

Furasta a thilleadh. Mura h-obraich am monorepo ann an cleachdadh, no mura h-eil e ag iarraidh le ceannardas, tha e sìmplidh atharrachadh gu polyrepo.

Ùidh anns an teachdaire. Tha sinn a’ cur luach air am pròiseact a chur ann an làmhan theachdairean, agus tha sinn a’ creidsinn gun urrainn monoreop sinn a thoirt ann nas luaithe na polyrepo, agus cuideachd ar cuideachadh gus ath-aithris nas luaithe.

Smaoinich mòr. Tha Google agus Facebook nan luchd-tagraidh glè làidir airson monorepos seach polyrepos, oir faodar a h-uile prìomh thairgse a leasachadh/dheuchainn/chur gu gnìomh còmhla.


## Notaichean

Cuir notaichean sam bith ris an seo.
