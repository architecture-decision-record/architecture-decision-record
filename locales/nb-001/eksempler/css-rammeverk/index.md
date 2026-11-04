# Arkitekturbeslutningslogg: CSS-rammeverk

Innhold:

- [Sammendrag](#sammendrag)
  - [Problem](#problem)
  - [Beslutning](#beslutning)
  - [Status](#status)
- [Detaljer](#detaljer)
  - [Forutsetninger](#forutsetninger)
  - [Begrensninger](#begrensninger)
  - [Standpunkter](#standpunkter)
  - [Argument](#argument)
  - [Implikasjoner](#implikasjoner)
- [Relatert](#relatert)
  - [Relaterte beslutninger](#relaterte-beslutninger)
  - [Relaterte krav](#relaterte-krav)
  - [Relaterte artefakter](#relaterte-artefakter)
  - [Relaterte prinsipper](#relaterte-prinsipper)
- [Merknader](#merknader)


## Sammendrag


### Problem

Vi vil bruke et CSS-rammeverk til å lage webapplikasjonene våre:

  * Vi vil at brukeropplevelsen skal være rask og pålitelig, i alle populære nettlesere og på alle skjermstørrelser.

  * Vi vil ha rask iterasjon på design, layout, UI/UX og så videre.

  * Vi vil ha responsive applikasjoner, særlig for mindre skjermer som på mobile enheter, større skjermer som 4K-bredskjermer og dynamiske skjermer som skjermer som kan roteres.  


### Beslutning

Vi har valgt Bulma.


### Status

Vi har valgt Bulma. Åpen for nye valg av CSS-rammeverk etter hvert som de dukker opp.


## Detaljer


### Forutsetninger

Vi vil lage webapper som er moderne, raske, pålitelige, responsive og så videre.

Typiske moderne webapper reduserer eller eliminerer bruken av jQuery av flere grunner: 

  * Moderne JavaScript tar gradvis over mange av egenskapene jQuery har gitt, så jQuery trengs mindre, og det finnes bedre/raskere/mindre moduler som gir spesifikke implementeringer

  * jQuerys brede tilnærming er å manipulere DOM direkte, som er et antimønster for moderne JavaScript-rammeverk (for eksempel React, Vue, Svelte)

  * jQuery forstyrrer seg selv hvis det lastes to ganger og så videre.


### Begrensninger

Hvis vi velger et CSS-rammeverk som bruker jQuery, blir vi sittende fast med å importere jQuery. Semantic UI bruker for eksempel jQuery, mens Tachyons ikke gjør det.

Hvis vi velger et CSS-rammeverk som er minimalt, går vi glipp av rammeverkskomponenter som vi kanskje vil ha nå eller snart. Semantic UI har for eksempel en bildekarusell, mens Tachyons ikke har det.


### Standpunkter

Vi vurderte å ikke bruke noe rammeverk. Det virker fortsatt gjennomførbart, særlig fordi CSS grid gir mye av det vi trenger i prosjektet vårt..

Vi vurderte mange CSS-rammeverk i en rask utvelgelse: Bootstrap, Bulma, Foundation, Materialize, Semantic UI, Tachyons og så videre. Våre to valg for en dypere gjennomgang er Semantic UI (fordi det har den mest semantiske tilnærmingen) og Bulma (fordi det har den letteste tilnærmingen og gir komponentene vi vil ha nå).

Vi vurderte Semantic UI. Det har mange komponenter, blant annet noen vi vil ha i prosjektet vårt: faner, rutenett, knapper og så videre. Vi gjorde en pilot med Semantic UI på to måter: med vanlige CDN-filer og med NPM-arkiver. Vi lyktes med Semantic UI på en statisk HTML-side, men lyktes ikke innenfor tidsrammen vår med å bygge en JavaScript-SPA (hovedsakelig på grunn av problemer med innlasting av jQuery). Vi oppdaget at andre utviklere har bedt utviklerne av Semantic UI om å lage en versjon uten jQuery, av de samme grunnene som oss. Andre utviklere har bedt om en versjon uten jQuery i mange år, men utviklerne har sagt nei og sagt at en versjon uten jQuery ville vært for vanskelig å skrive, for eksempel ~«Semantic UI-prosjektet har mer enn 22 000 berøringspunkter som bruker jQuery».

Eksempel med Semantic:

```html
<div class="ui top attached tabular menu">
  <a class="item">Alpha</a>
  <a class="item">Bravo</a>
</div>
```

Vi vurderte Bulma. Bulma har mange av de samme egenskapene som Semantic UI, men ikke like mange avanserte komponenter. Bulma er bygget med moderne teknikker, for eksempel uten jQuery. Bulma har noen komponenter fra tredjeparter, og noen av dem kan vi tenke oss å bruke.


Eksempel med Bulma:
```html
<div class="tabs">
  <ul>
    <li><a>Alpha</a></li>
    <li><a>Bravo</a></li>
  </ul>
</div>
```


### Argument

Som ovenfor.

Særlig Semantic UI ser ut til å ha et varselflagg både når det gjelder teknologi (det vil si så mange berøringspunkter med jQuery) og når det gjelder ledelse (det vil si at en versjon uten jQuery var et rungende nei, i stedet for å forsøke en veikartplan, kontinuerlig forbedring, innsamling av donasjoner og så videre).


### Implikasjoner

Hvis vi finner et godt CSS-rammeverk uten jQuery, er det generelt til hjelp og bra totalt sett.


## Relatert


### Relaterte beslutninger

CSS-rammeverket vi velger kan påvirke testbarheten.


### Relaterte krav

Vi vil levere en helt moderne app raskt. 

Vi vil ikke bruke tid på å arbeide med eldre rammeverk (særlig Semantic UI) som bruker eldre avhengigheter (særlig jQuery).


### Relaterte artefakter

Påvirker all typisk HTML som bruker CSS-en.


### Relaterte prinsipper

Lett å omgjøre.

Behov for fart.


## Merknader

Eventuelle merknader her.
