# AWS-prosessen for arkitekturbeslutningslogger

https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html

En arkitekturbeslutningslogg (ADR) er et dokument som beskriver et valg teamet tar om en vesentlig side ved programvarearkitekturen de planlegger å bygge. Hver ADR beskriver arkitekturbeslutningen, konteksten og konsekvensene av den. ADR-er har tilstander og følger derfor en livssyklus. For et eksempel på en ADR, se vedlegget.

ADR-prosessen gir en samling arkitekturbeslutningslogger. Denne samlingen utgjør beslutningsloggen. Beslutningsloggen gir prosjektkonteksten, i tillegg til detaljert informasjon om implementering og design. Prosjektmedlemmer skumleser overskriftene i hver ADR for å få en oversikt over prosjektkonteksten. De leser ADR-ene for å gå i dybden på prosjektets implementeringer og designvalg.

Når teamet godtar en ADR, blir den uforanderlig. Hvis ny innsikt krever en annen beslutning, foreslår teamet en ny ADR. Når teamet godtar den nye ADR-en, erstatter den den forrige ADR-en.

## Omfanget av ADR-prosessen

Prosjektmedlemmer bør lage en ADR for hver arkitektonisk betydningsfull beslutning som påvirker programvareprosjektet eller produktet, inkludert følgende (Richards og Ford 2020):

* Struktur (for eksempel mønstre som mikrotjenester)

* Ikke-funksjonelle krav (sikkerhet, høy tilgjengelighet og feiltoleranse)

* Avhengigheter (kobling mellom komponenter)

* Grensesnitt (API-er og publiserte kontrakter)

* Byggeteknikker (biblioteker, rammeverk, verktøy og prosesser)

* Funksjonelle og ikke-funksjonelle krav er de vanligste inndataene til ADR-prosessen.


## Innholdet i en ADR

Når teamet ser at det trengs en ADR, begynner et teammedlem å skrive den ut fra en mal som gjelder for hele prosjektet. (Se ADR-organisasjonen på GitHub for eksempelmaler.) Malen forenkler arbeidet med å lage ADR-er og sørger for at ADR-en fanger opp all relevant informasjon. Som et minimum bør hver ADR definere konteksten for beslutningen, selve beslutningen og konsekvensene av beslutningen for prosjektet og leveransene. (For eksempler på disse delene, se vedlegget.) Et av de mest kraftfulle trekkene ved ADR-strukturen er at den fokuserer på grunnen til beslutningen i stedet for hvordan teamet gjennomførte den. Når man forstår hvorfor teamet tok beslutningen, blir det lettere for andre teammedlemmer å slutte seg til den, og det hindrer at andre arkitekter som ikke var med i beslutningsprosessen, overstyrer beslutningen i framtiden.


## Prosessen for å ta i bruk en ADR

Alle teammedlemmer kan lage en ADR, men teamet bør fastsette en definisjon av eierskap for en ADR. Hver forfatter som eier en ADR, bør aktivt vedlikeholde og formidle innholdet i ADR-en. For å tydeliggjøre dette eierskapet omtaler denne veiledningen ADR-forfattere som ADR-eiere i de følgende delene. Andre teammedlemmer kan alltid bidra til en ADR. Hvis innholdet i en ADR endres før teamet godtar den, bør eieren godkjenne endringene.

Etter at teamet har identifisert en arkitekturbeslutning og eieren av den, leverer ADR-eieren ADR-en i tilstanden **Foreslått** (Proposed) ved prosessens begynnelse. ADR-er i tilstanden Foreslått er klare for gjennomgang.

ADR-eieren starter deretter gjennomgangsprosessen for ADR-en. Målet med gjennomgangsprosessen er å avgjøre om teamet godtar ADR-en, mener at den trenger omarbeiding, eller avviser den. Prosjektteamet, inkludert eieren, gjennomgår ADR-en. Gjennomgangsmøtet bør begynne med et avsatt tidsrom for å lese ADR-en. I gjennomsnitt bør 10 til 15 minutter være nok. I løpet av denne tiden leser hvert teammedlem dokumentet og legger til kommentarer og spørsmål for å markere uklare temaer. Etter gjennomgangsfasen leser ADR-eieren opp og diskuterer hver kommentar med teamet.

Hvis teamet finner handlingspunkter som kan forbedre ADR-en, forblir tilstanden til ADR-en **Foreslått**. ADR-eieren formulerer tiltakene og legger, i samarbeid med teamet, til en ansvarlig for hvert tiltak. Hvert teammedlem kan bidra til og avslutte handlingspunktene. Det er ADR-eierens ansvar å sette opp gjennomgangsprosessen på nytt.

Teamet kan også bestemme seg for å avvise ADR-en. I så fall legger ADR-eieren til en begrunnelse for avvisningen for å unngå framtidige diskusjoner om samme tema. Eieren endrer tilstanden til ADR-en til **Avvist** (Rejected).

Hvis teamet godkjenner ADR-en, legger eieren til et tidsstempel, en versjon og en liste over interessenter. Eieren oppdaterer deretter tilstanden til **Godtatt** (Accepted).

ADR-er og beslutningsloggen de danner, representerer beslutninger teamet har tatt, og gir en historikk over alle beslutninger. Teamet bruker ADR-ene som referanse under kode- og arkitekturgjennomganger der det er mulig. I tillegg til å utføre kodegjennomganger, designoppgaver og implementeringsoppgaver bør teammedlemmer slå opp i ADR-ene for strategiske beslutninger om produktet.

Som god praksis bør hver programvareendring gjennom fagfellevurdering og kreve minst én godkjenning. Under kodegjennomgangen kan en kodegjennomgåer finne endringer som bryter med én eller flere ADR-er. I så fall ber gjennomgåeren forfatteren av kodeendringen om å oppdatere koden, og deler en lenke til ADR-en. Når forfatteren har oppdatert koden, blir den godkjent av fagfellene og slått sammen med hovedkodebasen.


## Prosessen for gjennomgang av ADR-er

Teamet bør behandle ADR-er som uforanderlige dokumenter etter at teamet har godtatt eller avvist dem. Endringer i en eksisterende ADR krever at man lager en ny ADR, setter opp en gjennomgangsprosess for den nye ADR-en og godkjenner den. Hvis teamet godkjenner den nye ADR-en, bør eieren endre tilstanden til den gamle ADR-en til **Erstattet** (Superseded).
