# Arkitekturbeslutningslogg: API med JSON eller gRPC

## Status

Godtatt

## Kontekst

Vi designer et API for en ny tjeneste som skal brukes av flere klienter. Vi har vurdert to alternativer for å implementere API-et: JSON over HTTP eller gRPC.

JSON over HTTP er en mye brukt tilnærming for å bygge API-er, og den støttes av mange programmeringsspråk og rammeverk. Denne tilnærmingen er enkel, lett og lett å forstå, noe som gjør den til et godt valg for mange prosjekter. Den kan imidlertid være mindre effektiv enn andre alternativer, særlig når det gjelder å håndtere store datamengder.

gRPC er derimot en nyere teknologi som gir en mer effektiv måte å bygge API-er på. Den bruker binær serialisering til å overføre data, noe som kan være raskere og mer kompakt enn JSON. gRPC støtter også toveis strømming, noe som gjør det til et godt valg for sanntidsapplikasjoner.

## Beslutning

Etter å ha vurdert fordeler og ulemper ved begge alternativene har vi besluttet å bruke gRPC til API-et vårt. Selv om JSON over HTTP er et enklere alternativ, tror vi at gRPC gir en mer effektiv og skalerbar løsning for tjenesten vår. Vi forventer også at API-et vårt kommer til å håndtere store datamengder, og binær serialisering i gRPC vil være mer effektiv i dette bruksområdet.

I tillegg tror vi at støtten for toveis strømming i gRPC vil være nyttig for sanntidsapplikasjoner vi kan komme til å utvikle i framtiden.

## Konsekvenser

Ved å velge gRPC må vi bruke et annet sett med verktøy og biblioteker for å bygge API-et enn med JSON over HTTP. Det kan kreve ekstra tid og innsats for å lære og implementere disse teknologiene. Dessuten må klienter som vil bruke API-et vårt, bruke gRPC-kompatible biblioteker, som kanskje ikke støttes like bredt som biblioteker for JSON over HTTP.

Vi tror likevel at fordelene ved å bruke gRPC veier tyngre enn disse mulige ulempene, og vi er trygge på at denne beslutningen vil gi et mer effektivt og skalerbart API.
