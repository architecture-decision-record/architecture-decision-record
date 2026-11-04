# Konfigurasjon med miljøvariabler

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

Vi vil at applikasjonene våre skal kunne konfigureres utover artefakter/binærfiler/kildekode, slik at ett bygg kan oppføre seg ulikt avhengig av miljøet det rulles ut i.

  * For å få til dette vil vi bruke konfigurasjon med miljøvariabler.

  * Vi vil håndtere konfigurasjonen med filer som vi kan versjonskontrollere.

  * Vi vil gi utviklerne litt ergonomi i utvikleropplevelsen, for eksempel at de ser hva som kan konfigureres og eventuelle relevante standardverdier.


### Beslutning

Vi har valgt .env-filer med tilhørende standardfil og skjemafil.


### Status

Besluttet. Åpen for å vurdere nye muligheter etter hvert som de dukker opp.


## Detaljer


### Forutsetninger

Vi foretrekker å skille applikasjonskode og miljøkode. Vi antar at appen må fungere ulikt i ulike miljøer, for eksempel utviklingsmiljø, testmiljø, demomiljø, produksjonsmiljø og så videre.

Vi foretrekker bransjepraksisen «12 factor app» og enda mer den beslektede praksisen «15 factor app».

Mange av de tidligere prosjektene våre har brukt konvensjonen med en `.env`-fil eller en tilsvarende `.env`-katalog. Det er vanlig praksis å holde disse utenfor versjonskontroll og i stedet bruke en annen måte å rulle dem ut, versjonere dem og håndtere dem på.


### Begrensninger

Vi vil holde hemmeligheter utenfor systemet for versjonskontroll (VCS) som brukes til håndtering av kildekode (SCM).

Vi vil sikte mot kompatibilitet med populære programvarerammeverk og -biblioteker. Node har for eksempel modulen «dotenv» for å lese konfigurasjon med miljøvariabler.


### Standpunkter

Vi vurderte noen tilnærminger:

  * Lagre konfigurasjonen i appen, for eksempel i en fil `config.js`.

  * Lagre konfigurasjonen i miljøet, for eksempel i en fil `.env`.

  * Hente konfigurasjonen fra et kjent sted, for eksempel en lisensserver.


### Argument

Vi valgte tilnærmingen med en .env-fil fordi:

  * Den er populær, også blant eksperter.

  * Den følger mønsteret med `.env`-filer som teamene våre har brukt med suksess mange ganger i mange prosjekter.

  * Den er enkel. Vi er foreløpig fornøyde med de betydelige avveiningene vi ser, for eksempel mangel på revisjonsmuligheter sammenlignet med en tilnærming med lisensserver.


### Implikasjoner

Vi må finne en måte å skille konfigurasjon med miljøvariabler som er offentlig fra håndtering av hemmeligheter.


## Relatert


### Relaterte beslutninger

Vi forventer at alle applikasjonene våre bruker denne tilnærmingen.

Vi planlegger å oppgradere alle applikasjoner som bruker en mindre dyktig tilnærming, for eksempel hardkoding i en binærfil eller i kildekode.

Vi beholder som de er alle applikasjoner som bruker en mer dyktig tilnærming, for eksempel en lisensserver.


### Relaterte krav

Vi legger til devops-muligheter for filene, blant annet hooks, tester og kontinuerlig integrasjon.

Vi må gi alle utviklerkollegene opplæring i denne beslutningen.



### Relaterte artefakter

Hvert område vi ruller ut i trenger sin egen .env-fil og tilhørende filer.


### Relaterte prinsipper

Lett å omgjøre.


## Merknader


Eksempel på filen `.env`:

```env
NAME=Alice Anderson
EMAIL=alice@example.com
```

Eksempel på filen `.env.defaults`:

```env
NAME=Joe Doe
EMAIL=joe@example.com
```

Eksempel på filen `.env.schema` med bare nøklene:

```env
NAME
EMAIL
```
