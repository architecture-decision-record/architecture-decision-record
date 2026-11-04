# Mal for arkitekturbeslutningslogg (ADR) <!-- Erstatt med ADR-tittel -->

Dette er en mal for ADR-er i EdgeX Foundry.

Kilde: https://docs.edgexfoundry.org/2.3/design/adr/template/


### Innsendere

List opp innsenderne av ADR-en.

Format:

- Navn (organisasjon)


## Endringslogg

List opp endringene i dokumentet, inkludert tilstand, dato og URL til pull request.

Tilstand er én av: pending (ventende), approved (godkjent), amended (endret), deprecated (foreldet).

Dato er en tekststreng i ISO 8601 (ÅÅÅÅ-MM-DD).

PR er pull requesten som sendte inn endringen, med informasjon som diff, bidragsytere og gjennomgåere.

Format:

- \[Status for ADR, for eksempel approved, amended osv.\]\(URL til pull request\) ÅÅÅÅ-MM-DD


## Refererte bruksområder

List opp alle relevante dokumenter om bruksområder og krav.

En ADR krever minst ett relevant og godkjent bruksområde.

Format:

- \[Navn på bruksområde\]\(URL\)

Legg til forklaringer hvis ADR-en ikke tar for seg alle kravene til et bruksområde.


## Kontekst

Beskriv:

- hvordan designet er arkitektonisk betydningsfullt og dermed krever en ADR (i stedet for en enkel sak og PR for å rette et problem)

- den overordnede designtilnærmingen (detaljer beskrives i det foreslåtte designet nedenfor)


## Foreslått design

Detaljer om designet (uten å gå inn på implementering der det er mulig).

Disposisjon:

- tjenester/moduler som påvirkes (endres)

- nye tjenester/moduler som skal legges til

- påvirkning på modell og DTO (endringer/tillegg/fjerninger)

- påvirkning på API (endringer/tillegg/fjerninger)

- påvirkning på generell konfigurasjon (nye deler, endringer/tillegg/fjerninger)

- påvirkning på devops


## Vurderinger

Dokumenter alternativer, bekymringer, tilgrensende eller beslektede saker og spørsmål som dukket opp i debatten om ADR-en. 

Angi om og hvordan de ble løst eller dempet.


## Beslutning

Dokumenter eventuelle avtalte viktige implementeringsdetaljer, forbehold, framtidige hensyn og gjenstående eller utsatte designspørsmål.

Dokumenter alle deler av kravene som det foreslåtte designet ikke oppfyller.


## Andre relaterte ADR-er

List opp relevante ADR-er, for eksempel en designbeslutning for en delkomponent i en funksjon, et design som er gjort foreldet av dette designet og så videre. 

Format:

- \[ADR-tittel\]\(URL\) - Relevans


## Referanser

List opp flere referanser.

Format:

- \[Tittel\]\(URL\)
