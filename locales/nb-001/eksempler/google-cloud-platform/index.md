# Arkitekturbeslutningslogg for Google Cloud Platform

## Kontekst

Google Cloud Platform (GCP) er en fremtredende plattform for skytjenester som tilbyr ulike skytjenester, blant annet løsninger for databehandling, lagring og nettverk. Denne ADR-en har som mål å dokumentere arkitekturbeslutningene som er tatt for å utvikle og implementere en GCP-basert infrastruktur for organisasjonen vår.

## Beslutning

Organisasjonen vår har besluttet å bruke Google Cloud Platform som skyinfrastruktur for applikasjonen vår. De viktigste hensynene bak denne beslutningen er:

   - Kostnadseffektivitet

   - Skalerbarhet

   - Pålitelighet

   - Fleksibilitet

## Valg

Følgende tjenester fra GCP er valgt for å dekke kravene våre:

   - Compute Engine for virtuelle maskiner og databehandlingsressurser

   - Cloud Storage for objektlagring og filhosting

   - Cloud SQL for administrert databasetjeneste

   - Firebase for apputvikling og hosting

## Begrunnelse

   - Kostnadseffektivitet: Google Cloud Platform er svært kostnadseffektivt sammenlignet med andre skyplattformer, noe som gjør det til et attraktivt alternativ for organisasjoner med budsjettbegrensninger.

   - Skalerbarhet: GCP sin infrastruktur er lett å skalere og gjør det mulig å håndtere hvilken som helst trafikkmengde i sanntid.

   - Pålitelighet: GCP sine administrerte tjenester har høy pålitelighet, med automatiske sikkerhetskopier og muligheter for katastrofegjenoppretting som sikrer høy tilgjengelighet for ressurser og data.

   - Fleksibilitet: Plattformen tilbyr ulike verktøy og tjenester på tvers av områder som KI, dataanalyse og IoT, noe som gjør den svært allsidig.

## Konsekvenser

Migrering til Google Cloud Platform vil kreve opplæring av teamene våre i GCP-tjenester, omarbeiding av applikasjonens arkitektur slik at den er kompatibel med de valgte tjenestene, og oppdatering av infrastrukturkoden for å støtte GCP-tjenester. Vi forventer likevel at vi, når migreringen er fullført, får en svært skalerbar, pålitelig og kostnadseffektiv infrastruktur for å drifte applikasjonen vår. Vi må også håndtere de løpende kostnadene ved å tilby ressurser på GCP.

## Konklusjon

Google Cloud Platform er et utmerket valg for skyinfrastrukturen vår på grunn av kostnadseffektiviteten, skalerbarheten, påliteligheten og fleksibiliteten. Ved å bruke de valgte tjenestene kan vi tilby en svært tilgjengelig og robust infrastruktur for applikasjonen vår.
