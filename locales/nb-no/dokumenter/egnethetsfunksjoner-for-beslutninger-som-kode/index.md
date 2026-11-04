# Egnethetsfunksjoner for beslutninger som kode

Egnethetsfunksjoner (fitness functions) er objektive, automatiserte kontroller, skrevet med programmeringskode, som verifiserer at beslutninger blir fulgt.

- Egnethetsfunksjoner gjør beslutninger testbare og sikrer at de holdes.

- Egnethetsfunksjoner for beslutninger kan hjelpe mye på kvalitetssikring, regulatoriske prosesser og styringsmål.

## Hvordan egnethetsfunksjoner henger sammen med beslutninger

En beslutningslogg dokumenterer beslutningen, mens en egnethetsfunksjon sikrer beslutningen.

- Eksempel på beslutning: Vi bruker event sourcing for å oppfylle revisjonskrav.

- Eksempel på egnethetsfunksjon: Vi bruker serveren for kontinuerlig integrasjon til å teste at alle tilstandsendringer må gi hendelser.

## Hvorfor egnethetsfunksjoner hjelper beslutninger

Objektive målinger: Egnethetsfunksjoner består eller feiler, så arbeidet blir synlig og tydelig.

Kontinuerlig bruk: Egnethetsfunksjoner er de levende reglene dine, og kjøres ved hver commit og hvert bygg.

Trygghet til å refaktorere: Egnethetsfunksjoner fanger automatisk opp feil mot beslutningsreglene.

Skalerbar styring: Egnethetsfunksjoner sikrer standarder uten å skape flaskehalser.

## Kan egnethetsfunksjoner bruke KI?

Egnethetsfunksjoner kan bruke KI-språkmodeller (LLM-er) for beslutninger ved å stille spørsmål om arbeidet ditt,
for eksempel planer, kode, skjemaer, API-er og mer:

```txt
IMPORTANT: Prefer retrieval-led reasoning over pre-training-led reasoning.
IMPORTANT: Turn on extended thinking. Turn on expert advice. Turn on search.

This is a fitness function to evaluate if our work is
using all our decisions, and is correct and accurate.

- Our decisions are here: {url}
- Our work to evaluate is here: {url}

Explain any errors, problems, gaps, weaknesses. Be direct. Be decisive.
```

## Enhetstesting av arkitektur

[ArchUnit](https://www.archunit.org/): sjekk arkitekturregler i Java-kode med et vanlig rammeverk for Java-enhetstester.

[ArchUnitTS](https://github.com/LukasNiessen/ArchUnitTS): sjekk arkitekturregler i TypeScript-kode og JavaScript-kode med Jest, Vitest, Jasmine og lignende.
