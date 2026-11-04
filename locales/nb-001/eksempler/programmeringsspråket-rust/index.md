# Arkitekturbeslutningslogg: Programmeringsspråket Rust

Beslutningsnummer: AR-001

Beslutningstittel: Innføring av programmeringsspråket Rust

Dato: 1. desember 2021

Status: Godtatt

### Problemstilling

Etter hvert som vi fortsetter å utvikle programvareapplikasjoner, har vi sett at det blir stadig mer utfordrende å redusere mulige sikkerhetssårbarheter og forhindre kjøretidsfeil. Med de eksisterende programmeringsspråkene, som C og C++, opplever vi fortsatt problemer som bufferoverflyt, minnelekkasjer og udefinert atferd som fører til at applikasjoner krasjer. Vi trenger et programmeringsspråk som gir garantier for minnesikkerhet og er effektivt nok til å støtte ytelseskritiske applikasjoner.

### Vurderinger

Flere programmeringsspråk er utformet for å ta for seg de eksisterende problemene. Blant dem har programmeringsspråket Rust fått stor oppmerksomhet i utviklermiljøet på grunn av de unike designegenskapene. Vurderingene omfatter;

1. Minnesikkerhet og sikkerhet

2. Ytelse og effektivitet

3. Støtte fra miljøet og utbredelse

4. Læringskurve

5. Verktøy og økosystem

6. Kompatibilitet med eksisterende programvaresystemer.

### Begrensninger

Å ta i bruk et nytt programmeringsspråk krever omskolering av utviklere, noe som tar tid og ressurser. Det kan være en utfordring å integrere språket i den eksisterende utviklingsarbeidsflyten. Vi må sikre kompatibilitet med de eksisterende systemene og unngå endringer som bryter kompatibiliteten, for å opprettholde kontinuiteten.

### Implementering

1. Utviklingsteamet vårt gjennomgår opplæring for å lære og bli kjent med programmeringsspråket Rust.

2. Vi lager et nytt prosjekt i Rust på prøvebasis for å evaluere kompatibiliteten og egnetheten for våre utviklingsformål.

3. Vi migrerer gradvis eksisterende systemer skrevet i C og C++ til Rust.

4. Vi samarbeider med Rust-miljøet for å utforske tilgjengelige verktøy og biblioteker som kan forbedre utviklingsarbeidsflyten vår.

5. Vi følger jevnlig med på ytelsen til Rust og sammenligner den med ytelsen til de eksisterende programmeringsspråkene.

6. Vi tar i bruk en langsiktig tilnærming som balanserer kostnadene ved opplæring og integrasjon mot de mulige fordelene ved å bruke Rust.

### Begrunnelse

Vi har tatt i bruk Rust på grunn av de unike egenskapene som er utformet for å gi garantier for minnesikkerhet og sikkerhet samtidig som ytelse og effektivitet opprettholdes. Rusts robuste typesystem, borrow checker og konsepter for minnesikkerhet gjør det svært egnet til å utvikle ytelseskritiske og sikkerhetskritiske applikasjoner. Rust har dessuten et betydelig miljø av utviklere, som gir oss tilgang til et bredt spekter av verktøy, biblioteker og et økosystem som støtter utviklingsarbeidsflyten vår. Selv om Rust har en læringskurve, tror vi at fordelene ved å ta i bruk Rust veier tyngre enn kostnadene og gir en utmerket mulighet for fortsatt vekst og innovasjon.

### Konsekvenser

1. Innføringen av Rust vil kreve en betydelig investering i tid og ressurser for å lære opp utviklere og integrere språket i den eksisterende utviklingsarbeidsflyten.

2. Innføringen av Rust kan gi en viss grad av kompatibilitetsproblemer med eksisterende systemer, noe som krever refaktorering og endringer.

3. Innføringen av Rust kan øke antallet utviklere som kan bidra til prosjektet vårt, ved å tiltrekke Rust-utviklere som vil arbeide med spennende prosjekter.

4. Innføringen kan gi bedre ytelse, effektivitet og sikkerhet sammenlignet med de eksisterende språkene.

5. Til slutt gir innføringen av Rust en mulig fordel i form av færre sikkerhetssårbarheter i applikasjonene våre.
   
<h6>Kreditering: denne siden er generert av ChatGPT og deretter redigert for klarhet og format.</h6>
