# Mal for beslutningslogg for viktige tekniske beslutninger (ITD-er)

Dette er malen for viktige tekniske beslutninger (Important Technical Decisions, ITD) som er beskrevet i
[ITDs: a lean ADR for executive technical decision-making at scale - Ignacio Larrañaga](https://ignaciolarranaga.medium.com/itds-a-lean-adr-for-executive-technical-decision-making-at-scale-e18bb3f6a563).

ITD-er er en målrettet videreutvikling av ADR-er, optimalisert for hastighet, tydelighet og
validering på ledernivå. Der en ADR dokumenterer hva som ble besluttet, er en ITD et
slankt artefakt som setter beslutningen først og gjør selve beslutningen etterprøvbar, slik at
interessenter raskt kan skumlese den og enkelt utfordre den. ITD-er passer godt
for tekniske beslutninger som ikke strengt tatt er arkitektoniske, for eksempel valg av en
modell, et bibliotek eller en strategi for CI/CD.

Skriv disse delene i hver ITD-fil:

# Tittel

Angi selve beslutningen, ikke en beskrivelse av temaet.
For eksempel «Bruk Qwen2.5 1.5B Instruct til oversettelse på enheten».

## Problemet

Én setning som sier hva vi prøver å løse.

## Vurderte alternativer

Alternativene som var på bordet, med det valgte alternativet i **fet skrift**.

## Begrunnelse

Bare de avgjørende faktorene som førte til valget, ikke en uttømmende liste over
alle fordeler og ulemper.

## Merknader

Valgfritt. Annen kontekst som er verdt å dokumentere, for eksempel begrensninger,
forutsetninger eller lenker.
