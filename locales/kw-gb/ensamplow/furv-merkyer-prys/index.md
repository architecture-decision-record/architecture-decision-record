# Furv merkyer prys

Kenwyns:

* [Berrskrif](#berrskrif)
  * [Kudyn](#kudyn)
  * [Dyberth](#dyberth)
  * [Studh](#studh)
* [Manylyow](#manylyow)
  * [Tybyansow](#tybyansow)
  * [Lettyansow](#lettyansow)
  * [Savyow](#savyow)
  * [Argument](#argument)
  * [Sewyansow](#sewyansow)
* [Kelmys](#kelmys)
  * [Dybyrthow kelmys](#dybyrthow-kelmys)
  * [Othommow kelmys](#othommow-kelmys)
  * [Arteffaktys kelmys](#arteffaktys-kelmys)
  * [Prensiplys kelmys](#prensiplys-kelmys)
* [Notennow](#notennow)


## Berrskrif


### Kudyn

Ni a vynn bos abyl dhe dreckya pan hwarvo taklow dre usya merkyer prys ha dre usya furv merkyer prys kesson a oberi yn da a-dreus oll agan systemow ha systemow trydhes-parti.

Ni a ynterweythya gans systemow a'n jeves furvyow merkyer prys dyffrans:

* Messajys JSON nyns eus dhedha furv merkyer prys genesek, ytho res yw dhyn dewis fatel dhe dreylya merkyer prys dhe ystynn, ha dreylya ystynn dhe verkyer prys, hen yw fatel dhe serializya/dhe-serializya.

* Nebes aplikasyons yw settys dhe usya termyn leel, yn le termyn UTC. Hemma a hyll bos hegar rag towlow a res omdhegesa dhe dermyn leel, avel towlow a gorfenn hwarvosow selys war dermyn leel.

* Nebes systemow a'n jeves othommow ha gallusow dyffrans a gewar termyn, avel usya dhegres termyn a eylennow erbynn milieylennow erbynn nanoeylennow. Rag ensampel, gorhemmynn `date` kolonn-oberi Linux a usya kewar termyn defowt a eylennow, hag exchange stock Nasdaq a vynn kewar termyn defowt a nanoeylennow.


### Dyberth

Ni a dhewis an furv savonys merkyer prys ISO 8601 gans kewar nanoeylenn, arbennik "YYYY-MM-DDTHH:MM:SS.NNNNNNNNNZ".

An furv a dhiskwedh an bledhen, mis, dydh, our, mynysenn, eylenn, nanoeylennow, ha kerhen-termyn Zulu a.k.a. UTC, GMT.


### Studh

Dewisys.


## Manylyow


### Tybyansow

Res yw dhyn rewlya an gevennow tekst merkyer prys ma, dhe dreylya dhyworth merkyer prys dhe ystynn (a.k.a. serializya) ha dreylya dhyworth ystynn dhe verkyer prys (a.k.a. dhe-serializya).

Ni a vynn furv es yn ollgemmyn dhe usya, es dhe dreylya, hag es rag den dhe redya.

Ni a vynn kesstowans gans ystynnans ledan a systemow a-ves na hyllyn kontrollya, avel systemow dasdhesk, systemow selva ros, systemow arghansek.


### Lettyansow

Nebes systemow a'n jeves lettyansow kewar termyn. Rag ensampel, gorhemmynn `date` kolonn-oberi macOS a hyll skrifa kewar termyn yn eylennow, mes nyns yw yn nanoeylennow.


### Savyow

Ni a gemeras yn kyfrif ystynnans a dhewisyow:

* Epoch Unix hen yw unn niver ow ystynna.

* Furv tekst berr "YYYYMMDDTHHMMSSNNNNNNNNN".

* Usya kerhen-termyn leel erbynn kerhen-termyn UTC.


### Argument

Rag usadow ollgemmyn, ni a brys es dhe redya/dhe skrifa gans tus, moy es skonder/mens krev.

Rag usadow ollgemmyn, ni a vynn furv a oberi yn da yn systemow maskin, hag a oberi yn da dre dhorn ynwedh, avel skrifa data ensampel, redya ynworr JSON, grepya fayl log, hag yn.

Rag usadow anollgemmyn, avel kompoterya gwrians uhel, ni a wayt y hwrewn mynnes gwellhe pynag furv tekst a dhewisyn dre dreylya an tekst dhe furv moy skon, avel sort objekt dydhyas genesek yeth towlennans. Rakhenna an furv tekst ny wra meur dyffrans rag HPC.


### Sewyansow

Agan systemow tekst ha systemow termyn dyffrans a konverjya war an furv ma.


## Kelmys


### Dybyrthow kelmys

Martesen y hwrewn mynnes fordh skon/es dhe dreckya ynwedh deltas termyn a.k.a. spasow. An re ma yw es gans merkyer prys epoch Unix.


### Othommow kelmys

Martesen y hwrewn mynnes hewelya agan dyberth rag ensampel mar kevyn othom kelmys rag sort arbennik a verkyer messaj logyans, avel rag Splunk, Sumo, ELK, hag yn.


### Arteffaktys kelmys

Furvyoryon ha dyvynnoryon yeth:

  * [date-fns: Modern JavaScript date utility library](https://date-fns.org/)
  * [Crono: date and time library for Rust](https://github.com/chronotope/chron)
  
Ensamplow Rosetta Code:

  * [System time](https://www.rosettacode.org/wiki/System_time)
  * [Data format](https://www.rosettacode.org/wiki/Date_format)
  * [Show the epoch](https://www.rosettacode.org/wiki/Show_the_epoch)

Ensamplow SixArm:

  * [now_string](https://github.com/SixArm/rosetta_code/tree/master/tasks/now_string)


### Prensiplys kelmys

Es dhe dasfyna. Ni a hyll chanjya yn es dhe furv dyffrans, avel epoch Unix.

Dilea gwellhe anskon. Rag usadow ollgemmyn ny wren ni kemeres meur a hevelep rag lyes lytherennow ychwanek avel furv a usya tonnow-stryp ha dewbwynt.


## Notennow

Gorrewgh notennow omma.
