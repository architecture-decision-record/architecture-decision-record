# Tidsstempelformat

Innhold:

* [Sammendrag](#sammendrag)
  * [Problem](#problem)
  * [Beslutning](#beslutning)
  * [Status](#status)
* [Detaljer](#detaljer)
  * [Forutsetninger](#forutsetninger)
  * [Begrensninger](#begrensninger)
  * [Standpunkter](#standpunkter)
  * [Argument](#argument)
  * [Implikasjoner](#implikasjoner)
* [Relatert](#relatert)
  * [Relaterte beslutninger](#relaterte-beslutninger)
  * [Relaterte krav](#relaterte-krav)
  * [Relaterte artefakter](#relaterte-artefakter)
  * [Relaterte prinsipper](#relaterte-prinsipper)
* [Merknader](#merknader)


## Sammendrag


### Problem

Vi vil kunne følge med på når ting skjer ved å bruke tidsstempler og et konsistent tidsstempelformat som fungerer godt på tvers av alle systemene våre og systemer fra tredjeparter.

Vi samhandler med systemer som har ulike tidsstempelformater:

* JSON-meldinger har ikke et eget tidsstempelformat, så vi må velge hvordan et tidsstempel konverteres til en tekststreng, og hvordan en tekststreng konverteres til et tidsstempel, det vil si hvordan vi serialiserer/deserialiserer.

* Noen applikasjoner er satt til å bruke lokal tid i stedet for UTC-tid. Det kan være praktisk for prosjekter som må tilpasse seg lokal tid, for eksempel prosjekter som utløser hendelser basert på lokal tid.

* Noen systemer har ulike behov for og muligheter til tidspresisjon, for eksempel tidsoppløsning i sekunder, millisekunder eller nanosekunder. Kommandoen `date` i operativsystemet Linux bruker for eksempel sekunder som standard tidspresisjon, mens børsen Nasdaq vil ha nanosekunder som standard tidspresisjon.


### Beslutning

Vi velger standardformatet ISO 8601 for tidsstempler med nanosekunders presisjon, nærmere bestemt «ÅÅÅÅ-MM-DDTHH:MM:SS.NNNNNNNNNZ».

Formatet viser år, måned, dag, time, minutt, sekund, nanosekunder og tidssonen Zulu, også kalt UTC eller GMT.


### Status

Besluttet.


## Detaljer


### Forutsetninger

Vi må håndtere disse tekststrengene for tidsstempler, for å konvertere fra et tidsstempel til en tekststreng (også kalt serialisere) og konvertere fra en tekststreng til et tidsstempel (også kalt deserialisere).

Vi vil ha et format som generelt er enkelt å bruke, enkelt å konvertere og enkelt for et menneske å lese.

Vi vil ha kompatibilitet med et bredt spekter av eksterne systemer som vi ikke kan kontrollere, for eksempel analysesystemer, databasesystemer og finanssystemer.


### Begrensninger

Noen systemer har begrensninger i tidspresisjon. Kommandoen `date` i operativsystemet macOS kan for eksempel skrive ut tidspresisjon i sekunder, men ikke i nanosekunder.


### Standpunkter

Vi vurderte en rekke alternativer:

* Unix epoch, det vil si ett tall som øker.

* Kortfattet tekstformat «ÅÅÅÅMMDDTHHMMSSNNNNNNNNN».

* Bruk av en lokal tidssone i stedet for tidssonen UTC.


### Argument

For typisk bruk verdsetter vi at det er lett for mennesker å lese og skrive mer enn ren hastighet og størrelse.

For typisk bruk vil vi ha et format som fungerer fint i maskinelle systemer, og som også fungerer godt manuelt, for eksempel når man skriver eksempeldata, leser JSON-utdata, søker med grep i en loggfil og så videre.

For atypisk bruk, som høytytende databehandling, forventer vi at vi vil optimalisere tekstformatet vi velger ved å konvertere teksten til et raskere format, for eksempel et innebygd datoobjekt i et programmeringsspråk. Så tekstformatet betyr ikke så mye for høytytende databehandling.


### Implikasjoner

De ulike tekstsystemene og tidssystemene våre vil konvergere mot dette formatet.


## Relatert


### Relaterte beslutninger

Vi vil kanskje også ha en rask/enkel måte å følge med på tidsdifferanser, også kalt varigheter. Disse er enkle med tidsstempler i Unix epoch.


### Relaterte krav

Vi kan ønske å justere beslutningen vår, for eksempel hvis vi har et relatert krav til en bestemt type stempel i loggmeldinger, for eksempel for Splunk, Sumo, ELK og så videre.


### Relaterte artefakter

Formaterere og parsere for språk:

  * [date-fns: Modern JavaScript date utility library](https://date-fns.org/)
  * [Crono: date and time library for Rust](https://github.com/chronotope/chron)
  
Eksempler fra Rosetta Code:

  * [System time](https://www.rosettacode.org/wiki/System_time)
  * [Data format](https://www.rosettacode.org/wiki/Date_format)
  * [Show the epoch](https://www.rosettacode.org/wiki/Show_the_epoch)

Eksempler fra SixArm:

  * [now_string](https://github.com/SixArm/rosetta_code/tree/master/tasks/now_string)


### Relaterte prinsipper

Lett å omgjøre. Vi kan ganske enkelt bytte til et annet format, for eksempel Unix epoch.

Utsett for tidlig optimalisering. For typisk bruk bryr vi oss ikke særlig om en håndfull ekstra tegn, for eksempel i et format som bruker bindestreker og kolon.


## Merknader

Legg til merknader her.
