# Arkitekturbeslutningslogg: Kodeeditorer for programmering

## Kontekst

Kodeeditorer for programmering er et uunnværlig verktøy for utviklere når de skriver og redigerer kode. Det finnes mange kodeeditorer, hver med sitt eget sett med funksjoner, fordeler og ulemper. Formålet med denne ADR-en er å dokumentere arkitekturbeslutningene som er tatt for kodeeditorer for programmering.

## Prioriteringer

Arkitekturen for kodeeditorer for programmering bør prioritere følgende:

* **Modularitet**: Kodeeditoren bør utformes på en modulær måte, slik at utviklere kan tilpasse og utvide den etter behov. Dette gir en fleksibel arkitektur som kan tilpasses behovene til ulike utviklere og team.

* **Ytelse**: Kodeeditoren bør være ytelsesdyktig og responsiv, slik at utviklere kan arbeide effektivt uten å bli bremset av verktøyet de bruker.

* **Brukergrensesnitt**: Brukergrensesnittet bør være intuitivt og enkelt å bruke, slik at utviklere kan konsentrere seg om koden i stedet for å slite med editoren.

* **Utvidbarhet**: Kodeeditoren bør utformes slik at den enkelt kan utvides med programtillegg og integrasjoner fra tredjeparter.

* **Kompatibilitet**: Kodeeditoren bør være kompatibel med et bredt spekter av programmeringsspråk og teknologier, slik at den er et nyttig verktøy for mange ulike utviklere.

## Beslutning

På grunnlag av disse prioriteringene bør arkitekturen for kodeeditorer for programmering utformes med følgende komponenter:

* **Kjerne**: Denne komponenten gir de grunnleggende funksjonene i kodeeditoren, som syntaksutheving, tekstredigering og filhåndtering.

* **Brukergrensesnitt**: Denne komponenten gir brukergrensesnittet for kodeeditoren, blant annet menyer, verktøylinjer og hurtigtaster.

* **Programtillegg**: Denne komponenten lar utviklere utvide funksjonaliteten i kodeeditoren ved å installere programtillegg fra tredjeparter. Programtillegg kan gi flere funksjoner, som kodefullføring, linting eller feilsøking.

* **Integrasjoner**: Denne komponenten lar kodeeditoren integreres med andre verktøy og teknologier, som systemer for versjonskontroll, byggesystemer eller feilsøkingsverktøy.

## Begrunnelse

Modulariteten i kodeeditoren lar utviklere tilpasse og utvide den etter behov. Dette er viktig fordi ulike utviklere og team har ulike behov og arbeidsflyter, og en fleksibel arkitektur kan imøtekomme disse forskjellene.

* **Ytelse**: avgjørende fordi utviklere må kunne arbeide effektivt uten å bli bremset av verktøyene sine. En ytelsesdyktig kodeeditor er avgjørende for produktiviteten og kan hjelpe utviklere å opprettholde fokus og konsentrasjon.

* **Brukergrensesnitt**: viktig fordi det lar utviklere konsentrere seg om koden i stedet for å slite med editoren. Dette kan gi bedre produktivitet og mindre frustrasjon for utviklere.

* **Utvidbarhet**: kraftfullt fordi det lar kodeeditoren tilpasses ulike behov og arbeidsflyter. Programtillegg og integrasjoner fra tredjeparter kan gi flere funksjoner og muligheter som ikke er med i kjerneeditoren.

* **Kompatibilitet**: verdifullt fordi det lar kodeeditoren brukes med et bredt spekter av programmeringsspråk og teknologier. Dette gjør editoren til et mer nyttig verktøy for mange ulike utviklere.

Kjernen, programtilleggene, integrasjonene og brukergrensesnittkomponentene gir en tydelig ansvarsfordeling og gjør det mulig med en modulær arkitektur som enkelt kan utvides og tilpasses. Denne arkitekturen er fleksibel, ytelsesdyktig og kompatibel med et bredt spekter av programmeringsspråk og teknologier, noe som gjør den til et nyttig verktøy for utviklere.
