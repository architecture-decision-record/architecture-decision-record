# Monorepo eller multirepo

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

Prosjektet vårt innebærer å utvikle tre hovedkategorier av programvare:

  * Brukergrensesnitt (GUI) i frontend
  * Mellomvaretjenester
  * Servere i backend

Når vi utvikler, er systemet for versjonskontroll (VCS) vi bruker til håndtering av kildekode (SCM) git.

Vi må velge hvordan vi bruker git til å organisere koden vår.

Det overordnede valget er å organisere som «monorepo», «polyrepo» eller «hybrid»:

  * Monorepo betyr at vi legger alle delene i ett stort arkiv
  * Polyrepo betyr at vi legger hver del i sitt eget arkiv
  * Hybrid betyr en blanding av monorepo og polyrepo

For mer informasjon, se https://github.com/joelparkerhenderson/monorepo-vs-polyrepo


### Beslutning

Monorepo når en organisasjon/et team/et prosjekt er relativt lite, og rask iterasjon har høyere prioritet enn å opprettholde stabilitet.

Polyrepo når en organisasjon/et team/et prosjekt er relativt stort, og å opprettholde stabilitet har høyere prioritet enn rask iterasjon.


### Status

Besluttet. Åpen for å vurdere på nytt hvis/når det kommer nye verktøy for å håndtere monorepoer og/eller polyrepoer.


## Detaljer


### Forutsetninger

All koden vi utvikler er for én organisasjons tilbud, og ikke for allmennheten. Det vil si at meglerforetaket ikke tar sikte på å ha noe som ligner frivillige utviklere fra allmennheten.


### Begrensninger

Begrensningene er godt dokumentert på https://github.com/joelparkerhenderson/monorepo-vs-polyrepo


### Standpunkter

Vi vurderte monorepoer i stil med Google, Facebook og så videre. Vi tror at eventuelle skaleringsproblemer med monorepo ligger så langt fram i tid at vi vil kunne bruke de samme praksisene som Google og Facebook når vi får behov for dem.

Vi vurderte polyrepoer i stil med typiske åpen kildekode-prosjekter på Git, som Google Android, Facebook React og så videre. Vi tror at disse er det beste valget for deltakelse fra allmennheten (for eksempel at hvem som helst i verden kan arbeide på koden) og for individuell tilgjengelighet (for eksempel at prosjektet brukes for seg selv, uten andre deler).


### Argument

Når en organisasjon/et team/et prosjekt er relativt lite, velger vi monorepo, fordi rask iterasjon har betydelig høyere prioritet enn å opprettholde stabilitet

Når en organisasjon/et team/et prosjekt er relativt stort, velger vi polyrepo, fordi å opprettholde stabilitet har betydelig høyere prioritet enn rask iterasjon.


### Implikasjoner

Hvis det allerede finnes en leveranselinje for CI+CD, må vi kanskje justere den for å teste flere prosjekter i ett arkiv.

CI+CD kan ta lengre tid for et fullt bygg av et monorepo, fordi CI+CD kan bygge alle prosjektene i monorepoet.

Hvis en organisasjon/et team/et prosjekt vokser, får et monorepo skaleringsproblemer.

Skaleringsproblemer med monorepo kan gjøre det stadig mer verdifullt å gå over til et polyrepo.

Overgangen fra monorepo til polyrepo er en betydelig devops-oppgave, og må planlegges, ledes og programmeres.


## Relatert


### Relaterte beslutninger

Vi lager beslutninger for tilhørende verktøy for å håndtere monorepoer (for eksempel Google Bazel) og polyrepoer (for eksempel Lyft Refactorator).


### Relaterte krav

Vi må utvikle leveranselinjen for CI+CD slik at den fungerer godt med git.


### Relaterte artefakter

Vi forventer at organiseringen av arkivene har tilhørende artefakter for klargjøring, konfigurasjonsstyring, testing og lignende devops-områder. 


### Relaterte prinsipper

Lett å omgjøre. Hvis monorepoet ikke fungerer i praksis, eller ledelsen ikke ønsker det, er det enkelt å endre til polyrepo.

Kundeopptatthet. Vi verdsetter å få prosjektet i hendene på kundene, og vi tror at et monorepo kan få oss dit raskere enn et polyrepo, og også hjelpe oss å iterere raskere.

Tenk stort. Google og Facebook er sterke talsmenn for monorepoer framfor polyrepoer, fordi alle kjernetilbudene kan utvikles/testes/rulles ut i samspill.


## Merknader

Legg til eventuelle merknader her.
