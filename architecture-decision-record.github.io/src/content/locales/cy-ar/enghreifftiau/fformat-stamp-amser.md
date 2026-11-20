# Fformat stamp amser

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

Rydym am allu olrhain pryd y mae pethau'n digwydd drwy ddefnyddio stampiau amser a thrwy ddefnyddio fformat stamp amser cyson sy'n gweithio'n dda ar draws ein holl systemau a systemau trydydd parti.

Rydym yn rhyngweithio â systemau sydd â fformatau stamp amser gwahanol:

* Nid oes gan negeseuon JSON fformat stamp amser brodorol, felly mae angen i ni ddewis sut i drosi stamp amser yn llinyn, a throsi llinyn yn stamp amser, h.y. sut i gyfresoli/dadgyfresoli.

* Mae rhai cymwysiadau wedi'u gosod i ddefnyddio amser lleol, yn hytrach nag amser UTC. Gall hyn fod yn gyfleus ar gyfer prosiectau sy'n gorfod addasu i amser lleol, fel prosiectau sy'n sbarduno digwyddiadau sy'n seiliedig ar amser lleol.

* Mae gan rai systemau anghenion a galluoedd manylder amser gwahanol, fel defnyddio cydraniad amser o eiliadau o'i gymharu â milieiliadau o'i gymharu â nanoeiliadau. Er enghraifft, mae gorchymyn `date` y system weithredu Linux yn defnyddio manylder amser rhagosodedig o eiliadau, tra bo cyfnewidfa stoc Nasdaq eisiau manylder amser rhagosodedig o nanoeiliadau.


### Penderfyniad

Rydym yn dewis fformat safonol stamp amser ISO 8601 gyda manylder nanoeiliad, yn benodol "YYYY-MM-DDTHH:MM:SS.NNNNNNNNNZ".

Mae'r fformat yn dangos y flwyddyn, y mis, y diwrnod, yr awr, y funud, yr eiliad, y nanoeiliadau, a pharth amser Zulu a elwir hefyd yn UTC, GMT.


### Statws

Penderfynwyd.


## Manylion


### Rhagdybiaethau

Mae angen i ni drin y llinynnau testun stamp amser hyn, i drosi o stamp amser i linyn (a elwir hefyd yn gyfresoli) a throsi o linyn i stamp amser (a elwir hefyd yn ddadgyfresoli).

Rydym am gael fformat sy'n gyffredinol hawdd ei ddefnyddio, yn hawdd ei drosi, ac yn hawdd i berson ei ddarllen.

Rydym am gael cydweddoldeb ag ystod eang o systemau allanol na allwn eu rheoli, fel systemau dadansoddeg, systemau cronfeydd data, systemau ariannol.


### Cyfyngiadau

Mae gan rai systemau gyfyngiadau o ran manylder amser. Er enghraifft, gall gorchymyn `date` y system weithredu macOS argraffu manylder amser mewn eiliadau, ond nid mewn nanoeiliadau.


### Safbwyntiau

Ystyriasom ystod o ddewisiadau:

* Epoc Unix h.y. un rhif sy'n cynyddu.

* Fformat testun cryno "YYYYMMDDTHHMMSSNNNNNNNNN".

* Defnyddio parth amser lleol o'i gymharu â'r parth amser UTC.


### Dadl

Ar gyfer defnydd nodweddiadol, rydym yn gwerthfawrogi darllen/ysgrifennu hawdd gan bobl, yn fwy na chyflymder/maint crai.

Ar gyfer defnydd nodweddiadol, rydym am gael fformat sy'n gweithio'n iawn mewn systemau peiriant, ac sydd hefyd yn gweithio'n dda â llaw, fel ysgrifennu data sampl, darllen allbwn JSON, grepio ffeil log, ac ati.

Ar gyfer defnydd annodweddiadol, fel cyfrifiadura perfformiad uchel, rydym yn disgwyl y byddwn am optimeiddio unrhyw fformat testun a ddewiswn drwy drosi'r testun i fformat cyflymach, fel math gwrthrych dyddiad adeiledig iaith raglennu. Felly nid yw'r fformat testun o bwys mawr ar gyfer HPC.


### Goblygiadau

Bydd ein gwahanol systemau testun a systemau amser yn cydgyfeirio ar y fformat hwn.


## Cysylltiedig


### Penderfyniadau cysylltiedig

Efallai y byddwn am gael ffordd gyflym/hawdd o olrhain gwahaniaethau amser a elwir hefyd yn hydoedd. Mae'r rhain yn hawdd gyda stampiau amser epoc Unix.


### Gofynion cysylltiedig

Efallai y byddwn am addasu ein penderfyniad e.e. os oes gennym ofyniad cysylltiedig ar gyfer math penodol o stamp neges logio, fel ar gyfer Splunk, Sumo, ELK, ac ati.


### Arteffactau cysylltiedig

Fformatwyr a dosbarthwyr iaith:

  * [date-fns: Modern JavaScript date utility library](https://date-fns.org/)
  * [Crono: date and time library for Rust](https://github.com/chronotope/chron)
  
Enghreifftiau Rosetta Code:

  * [System time](https://www.rosettacode.org/wiki/System_time)
  * [Data format](https://www.rosettacode.org/wiki/Date_format)
  * [Show the epoch](https://www.rosettacode.org/wiki/Show_the_epoch)

Enghreifftiau SixArm:

  * [now_string](https://github.com/SixArm/rosetta_code/tree/master/tasks/now_string)


### Egwyddorion cysylltiedig

Hawdd ei wrthdroi. Gallwn newid yn eithaf hawdd i fformat gwahanol, fel epoc Unix.

Gohirio optimeiddio cynamserol. Ar gyfer defnydd nodweddiadol nid ydym yn poeni llawer am lond llaw o nodau ychwanegol fel fformat sy'n defnyddio cysylltnodau a cholonau.


## Nodiadau

Ychwanegwch nodiadau yma.
