# Mal for beslutningslogg fra arc42

<https://arc42.org/overview>

## 1. Innledning og mål

Kort beskrivelse av kravene, drivkreftene og et utdrag (eller sammendrag) av
kravene. De tre (maksimalt fem) viktigste kvalitetsmålene for arkitekturen som har
høyest prioritet for de viktigste interessentene. En tabell over viktige
interessenter med forventningene deres til arkitekturen.

## 1.1 Oversikt over krav

### Innhold

Kort beskrivelse av de funksjonelle kravene, drivkreftene og et utdrag (eller
sammendrag) av kravene. Lenker til de (forhåpentligvis eksisterende) kravdokumentene,
med informasjon om hvor de finnes. 

### Motivasjon

Sett fra sluttbrukernes synspunkt lages eller endres et system for å
bedre støtten til en forretningsaktivitet og/eller bedre kvaliteten. 

### Form

Kort tekstbeskrivelse, gjerne i tabellform for bruksområder (use cases). Hvis det finnes
kravdokumenter, bør denne oversikten vise til disse dokumentene.

Hold disse utdragene så korte som mulig. Avvei lesbarheten i dette dokumentet
mot mulig overlapp med kravdokumentene. 

## 1.2 Kvalitetsmål

### Innhold

De tre (maksimalt fem) viktigste kvalitetsmålene for arkitekturen, som det er
aller viktigst for de sentrale interessentene at blir oppfylt. Vi mener virkelig kvalitetsmål
for arkitekturen. Ikke bland dem sammen med prosjektmål. De er ikke
nødvendigvis identiske. Standarden ISO 25010 gir en fin oversikt over
mulige temaer av interesse.

### Motivasjon

Du bør kjenne kvalitetsmålene til de viktigste interessentene dine, siden
de vil påvirke grunnleggende arkitekturbeslutninger. Vær svært
konkret om disse kvalitetene og unngå moteord. Hvis du som arkitekt ikke
vet hvordan kvaliteten på arbeidet ditt vil bli bedømt …

### Form

En tabell med de viktigste kvalitetsmålene og konkrete scenarioer, sortert etter prioritet.

## 1.3 Interessenter

### Innhold

Eksplisitt oversikt over interessentene i systemet, det vil si alle personer, roller eller
organisasjoner som

- bør kjenne arkitekturen

- må overbevises om arkitekturen

- må arbeide med arkitekturen eller med koden

- trenger dokumentasjonen av arkitekturen i arbeidet sitt

- må ta beslutninger om systemet eller utviklingen av det

### Motivasjon

Du bør kjenne alle parter som er involvert i utviklingen av systemet eller berørt av
systemet. Ellers kan du få ubehagelige overraskelser senere i utviklingsprosessen.
Disse interessentene bestemmer omfanget og detaljnivået i
arbeidet ditt og resultatene av det.

### Form

Tabell med rollenavn, personnavn og forventningene deres til
arkitekturen og dokumentasjonen av den.

## 2. Begrensninger

Alt som begrenser teamene i design- og implementeringsbeslutninger eller
beslutninger om tilhørende prosesser. Kan noen ganger gå utover enkeltsystemer og
gjelde for hele organisasjoner og selskaper.

### Innhold

Ethvert krav som begrenser programvarearkitektene i frihet til å ta design- og
implementeringsbeslutninger eller beslutninger om utviklingsprosessen. Disse
begrensningene går noen ganger utover enkeltsystemer og gjelder for hele
organisasjoner og selskaper.

### Motivasjon

Arkitekter bør vite nøyaktig hvor de er frie i designbeslutningene sine og
hvor de må følge begrensninger. Begrensninger må alltid håndteres,
men de kan være mulige å forhandle om.

### Form

Enkle tabeller over begrensninger med forklaringer. Ved behov kan du dele dem inn
i tekniske begrensninger, organisatoriske og politiske begrensninger og
konvensjoner (for eksempel retningslinjer for programmering eller versjonering, dokumentasjons- eller
navnekonvensjoner)

## 3. Kontekst og avgrensning

Avgrenser systemet ditt mot dets (eksterne) kommunikasjonspartnere (nabosystemer
og brukere). Spesifiserer de eksterne grensesnittene. Vist fra et
forretnings-/domeneperspektiv (alltid) eller et teknisk perspektiv (valgfritt)

### Innhold

Systemets avgrensning og kontekst avgrenser, som navnet tilsier, systemet ditt (det vil si
din avgrensning) mot alle kommunikasjonspartnerne (nabosystemer og brukere,
det vil si systemets kontekst). Dermed spesifiserer den de eksterne grensesnittene.

Ved behov kan du skille forretningskonteksten (domenespesifikke inndata og
utdata) fra den tekniske konteksten (kanaler, protokoller, maskinvare).

### Motivasjon

Domenegrensesnittene og de tekniske grensesnittene til kommunikasjonspartnere er
blant de mest kritiske sidene ved systemet ditt. Sørg for at du forstår dem
fullt ut.

### Form

- Ulike kontekstdiagrammer

- Lister over kommunikasjonspartnere og grensesnittene deres.

## 3.1 Forretningskontekst

### Innhold

Spesifikasjon av alle kommunikasjonspartnere (brukere, IT-systemer, …) med
forklaringer av domenespesifikke inndata og utdata eller grensesnitt. Valgfritt kan du
legge til domenespesifikke formater eller kommunikasjonsprotokoller.

### Motivasjon

Alle interessenter bør forstå hvilke data som utveksles med omgivelsene
til systemet.

### Form

Alle slags diagrammer som viser systemet som en svart boks og spesifiserer domenegrensesnittene
til kommunikasjonspartnerne.

Alternativt (eller i tillegg) kan du bruke en tabell. Tittelen på tabellen er
navnet på systemet ditt, og de tre kolonnene inneholder navnet på kommunikasjonspartneren,
inndata og utdata.

## 3.2 Teknisk kontekst

### Innhold

Tekniske grensesnitt (kanaler og overføringsmedier) som knytter systemet ditt til
omgivelsene. I tillegg en kobling mellom domenespesifikke inndata/utdata og
kanalene, det vil si en forklaring på hvilken kanal som brukes til hvilken I/O.

### Motivasjon

Mange interessenter tar arkitekturbeslutninger basert på de tekniske grensesnittene
mellom systemet og dets kontekst. Særlig de som designer infrastruktur eller maskinvare, bestemmer disse tekniske grensesnittene.

### Form

For eksempel et UML-distribusjonsdiagram som beskriver kanaler til nabosystemer, sammen
med en koblingstabell som viser forholdet mellom kanaler og
inndata/utdata.

## 4. Løsningsstrategi

Sammendrag av de grunnleggende beslutningene og løsningsstrategiene som former
arkitekturen. Kan omfatte teknologi, oppdeling på øverste nivå, tilnærminger for å
oppnå de viktigste kvalitetsmålene og relevante organisatoriske beslutninger.

### Innhold

Et kort sammendrag og en forklaring av de grunnleggende beslutningene og løsningsstrategiene som former systemets arkitektur. Disse omfatter

- teknologibeslutninger

- beslutninger om oppdelingen av systemet på øverste nivå, for eksempel bruk av et arkitekturmønster eller designmønster

- beslutninger om hvordan de viktigste kvalitetsmålene skal nås

- relevante organisatoriske beslutninger, for eksempel valg av utviklingsprosess eller å delegere bestemte oppgaver til tredjeparter.

### Motivasjon

Disse beslutningene danner hjørnesteinene i arkitekturen din. De er grunnlaget
for mange andre detaljerte beslutninger eller implementeringsregler.

### Form

Hold forklaringen av disse nøkkelbeslutningene kort.

Begrunn hva du har bestemt og hvorfor du bestemte deg slik, med utgangspunkt i
problemstillingen, kvalitetsmålene og de viktigste begrensningene. Vis til detaljer i
de følgende delene (del 5 for strukturelle detaljer, del 8 for
gjennomgående konsepter).

Du kan bruke en liste over løsningstilnærminger eller en tabell.

## 5. Byggeblokkvisning

Statisk oppdeling av systemet, abstraksjoner av kildekode, vist som
hierarki av hvite bokser (som inneholder svarte bokser), ned til passende detaljnivå.

### Innhold

Byggeblokkvisningen viser den statiske oppdelingen av systemet i
byggeblokker (moduler, komponenter, delsystemer, klasser, grensesnitt, pakker,
biblioteker, rammeverk, lag, partisjoner, nivåer, funksjoner, makroer, operasjoner,
datastrukturer, …) samt avhengighetene mellom dem (forhold, assosiasjoner,
…)

Denne visningen er obligatorisk for all arkitekturdokumentasjon. Som en analogi til
et hus er dette plantegningen.

### Motivasjon

Oppretthold oversikten over kildekoden ved å gjøre strukturen forståelig
gjennom abstraksjon.

Dette lar deg kommunisere med interessentene dine på et abstrakt nivå
uten å avsløre implementeringsdetaljer.

### Form

Byggeblokkvisningen er en hierarkisk samling av svarte bokser og hvite
bokser (se figuren nedenfor) og beskrivelsene av dem.

## 5.1 Hvit boks for hele systemet

Her beskriver du oppdelingen av hele systemet med følgende mal for hvit boks. Den inneholder

- et oversiktsdiagram

- en begrunnelse for oppdelingen

- beskrivelser av de inneholdte byggeblokkene som svarte bokser. For disse tilbyr vi alternativer:

  - bruk én tabell for en kort og pragmatisk oversikt over alle inneholdte byggeblokker og grensesnittene deres

  - bruk en liste med beskrivelser av byggeblokkene som svarte bokser etter malen for svart boks (se nedenfor). Avhengig av verktøyet du velger kan denne listen være underkapitler (i tekstfiler), undersider (i en wiki) eller nestede elementer (i et modelleringsverktøy).

  - (valgfritt:) viktige grensesnitt som ikke forklares i malene for svart boks til en byggeblokk, men som er svært viktige for å forstå den hvite boksen.

Siden det finnes så mange måter å spesifisere grensesnitt på, tilbyr vi ikke en bestemt mal for dem.

I beste fall klarer du deg med eksempler eller enkle signaturer.

## 5.2 Nivå 2

Her kan du spesifisere den indre strukturen til (noen) byggeblokker fra nivå 1
som hvite bokser.

Du må avgjøre hvilke byggeblokker i systemet ditt som er viktige nok til å
rettferdiggjøre en så detaljert beskrivelse. Prioriter relevans framfor fullstendighet.
Spesifiser viktige, overraskende, risikable, komplekse eller foranderlige byggeblokker. La
vanlige, enkle, kjedelige eller standardiserte deler av systemet ligge

### 5.2.1 Hvit boks for byggeblokk 1

Spesifiserer den interne strukturen til byggeblokk 1.

Bruk malen for hvit boks (se ovenfor).

## 6. Kjøretidsvisning

Atferden til byggeblokkene som scenarioer, som dekker viktige bruksområder eller
funksjoner, samhandling i kritiske eksterne grensesnitt, drift og
administrasjon samt feil- og unntaksatferd.

### Innhold

Kjøretidsvisningen beskriver konkret atferd og samhandling mellom systemets byggeblokker i form av scenarioer fra følgende områder:

- viktige bruksområder eller funksjoner: hvordan utfører byggeblokkene dem?

- samhandling i kritiske eksterne grensesnitt: hvordan samarbeider byggeblokkene med brukere og nabosystemer?

- drift og administrasjon: oppstart, igangsetting, stans

- feil- og unntaksscenarioer

Merknad: Hovedkriteriet for valg av mulige scenarioer (sekvenser, arbeidsflyter) er den arkitektoniske relevansen. Det er ikke viktig å beskrive mange scenarioer. Du bør heller dokumentere et representativt utvalg.

### Motivasjon

Du bør forstå hvordan (instanser av) byggeblokkene i systemet ditt utfører jobben sin og kommuniserer under kjøring. Du vil først og fremst fange opp scenarioer i dokumentasjonen for å kommunisere arkitekturen til interessenter som er mindre villige eller i stand til å lese og forstå de statiske modellene (byggeblokkvisning, distribusjonsvisning).

### Form

Det finnes mange notasjoner for å beskrive scenarioer, for eksempel


- nummerert liste over trinn (på naturlig språk)

- aktivitetsdiagrammer eller flytskjemaer

- sekvensdiagrammer

- BPMN eller EPC-er (hendelsesstyrte prosesskjeder)

- tilstandsmaskiner

- osv.

## 6.n Kjøretidsscenario n (1, 2, 3 osv.)

Sett inn kjøretidsdiagram eller tekstlig beskrivelse av scenarioet.

Sett inn beskrivelse av de bemerkelsesverdige sidene ved samhandlingen mellom instansene av byggeblokker som vises i dette diagrammet.

## 7. Distribusjonsvisning

Teknisk infrastruktur med miljøer, datamaskiner, prosessorer og topologier.
Kobling av (programvare)byggeblokker til infrastrukturelementer.

### Innhold

Distribusjonsvisningen beskriver:

- den tekniske infrastrukturen som brukes til å kjøre systemet ditt, med infrastruktur-
  elementer som geografiske steder, miljøer, datamaskiner, prosessorer,
  kanaler og nettverkstopologier samt andre infrastrukturelementer, og

- koblingen av (programvare)byggeblokker til disse infrastrukturelementene.

Ofte kjøres systemer i ulike miljøer, for eksempel utviklingsmiljø, testmiljø og
produksjonsmiljø. I slike tilfeller bør du dokumentere alle relevante miljøer.

Dokumenter særlig distribusjonsvisningen når programvaren kjøres som
distribuert system med mer enn én datamaskin, prosessor, server eller container,
eller når du designer og bygger dine egne maskinvareprosessorer og brikker.

Fra et programvareperspektiv er det nok å fange opp de elementene i
infrastrukturen som trengs for å vise distribusjonen av byggeblokkene dine.
Maskinvarearkitekter kan gå lenger og beskrive infrastrukturen på det
detaljnivået de trenger. 

### Motivasjon

Programvare kjører ikke uten maskinvare. Denne underliggende infrastrukturen kan og
vil påvirke systemet ditt og/eller noen gjennomgående konsepter. Derfor
må du kjenne infrastrukturen.

### Form

Kanskje finnes distribusjonsdiagrammet på høyeste nivå allerede i del 3.2 som teknisk kontekst, med din egen infrastruktur som ÉN svart boks. I denne delen zoomer du inn på denne svarte boksen med flere distribusjonsdiagrammer.

- UML har distribusjonsdiagrammer for å uttrykke denne visningen. Bruk dem, gjerne med nestede diagrammer, når infrastrukturen din er mer kompleks.

- Hvis (maskinvare)interessentene dine foretrekker andre typer diagrammer framfor
  UML-distribusjonsdiagram, la dem bruke hva som helst som kan vise noder og
  kanaler i infrastrukturen.

## 7.1 Infrastruktur nivå 1

Beskriv (vanligvis i en kombinasjon av diagrammer, tabeller og tekst):

- fordelingen av systemet ditt på flere steder, miljøer, datamaskiner, prosessorer, … samt de fysiske forbindelsene mellom dem

- viktig begrunnelse eller motivasjon for denne distribusjonsstrukturen

- kvalitets- og/eller ytelsesegenskaper ved infrastrukturen

- koblingen av programvareartefakter (byggeblokker) til elementer i infrastrukturen

For flere miljøer eller alternative distribusjoner kan du kopiere denne delen av arc42 for alle relevante miljøer. **

## 7.2 Infrastruktur nivå 2

Her kan du ta med den indre strukturen til (noen) infrastrukturelementer fra infrastruktur nivå 1.

Kopier strukturen fra nivå 1 for hvert valgt element.

## 8. Gjennomgående konsepter

Overordnede, prinsipielle regler og løsningstilnærminger som er relevante i flere
deler (→ gjennomgående) av systemet. Konsepter er ofte knyttet til flere
byggeblokker. Ta med ulike temaer som domenemodeller, arkitektur-
mønstre og -stiler, regler for bruk av bestemt teknologi og implementeringsregler.

### Innhold

Denne delen beskriver gjennomgående konsepter (praksiser, mønstre, regler
eller løsningsideer). Slike konsepter er ofte knyttet til flere byggeblokker.
De kan omfatte mange ulike temaer.

### Motivasjon

Konsepter danner grunnlaget for konseptuell integritet (konsistens, ensartethet) i
arkitekturen. Dermed er de et viktig bidrag til å oppnå de indre
kvalitetene i systemet ditt.

Dette er stedet i malen som vi har laget for en sammenhengende spesifikasjon av
slike konsepter.

Mange av disse konseptene henger sammen med eller påvirker flere av byggeblokkene dine.

### Form

Formen kan variere:

- konseptdokumenter med hvilken som helst struktur

- eksempelimplementeringer, særlig for tekniske konsepter

- gjennomgående modellutdrag eller scenarioer med notasjoner fra arkitekturvisningene

### Strukturen i denne delen

Velg bare de temaene som trengs mest for systemet ditt, og gi hvert av dem en overskrift på nivå 2 i denne delen (for eksempel 8.1, 8.2 osv.).

- IKKE FORSØK å dekke alle temaene i diagrammet nevnt ovenfor.

### Bakgrunn

Noen temaer i systemer angår ofte flere byggeblokker, maskinvareelementer
eller utviklingsprosesser. Det kan være enklere å formidle eller dokumentere
slike gjennomgående temaer på ett sentralt sted, i stedet for å gjenta dem i
beskrivelsen av de berørte byggeblokkene, maskinvareelementene eller
utviklingsprosessene.

Noen konsepter kan angå alle elementer i et system, mens andre bare er
relevante for noen få.

## 9. Arkitekturbeslutninger

Viktige, kostbare, kritiske, storskala eller risikable arkitekturbeslutninger
med begrunnelser.

### Innhold

Viktige, kostbare, storskala eller risikable arkitekturbeslutninger med
begrunnelser. Med «beslutninger» mener vi å velge ett alternativ ut fra gitte
kriterier.

Bruk dømmekraften din til å avgjøre om en arkitekturbeslutning bør
dokumenteres her i denne sentrale delen, eller om det er bedre å dokumentere den
lokalt (for eksempel i malen for hvit boks for én byggeblokk). Unngå
overflødig tekst. Vis til del 4, der du allerede har fanget opp de viktigste
beslutningene i arkitekturen din.

### Motivasjon

Interessentene i systemet ditt bør kunne forstå og følge beslutningene
dine.

### Form

- ADR (arkitekturbeslutningslogg) for hver viktig beslutning

- liste eller tabell, sortert etter viktighet og konsekvenser, eller

- mer detaljert i form av egne deler for hver beslutning

### Bakgrunn (om ADR-er)

Mindre dokumentasjonsbiter er enklere å lese, lage og vedlikeholde. Når det
gjelder arkitekturbeslutninger, vil utviklingsteam ofte:

- kjenne til beslutningen, siden den er synlig for eksempel i kildekoden, men

- mangle motivasjonen bak beslutningen (se Nygard 2011)

Derfor bør du dokumentere noen få viktige beslutninger sammen med motivasjonen og
begrunnelsen for dem

### Vårt forslag om beslutninger

Før en samling av arkitektonisk betydningsfulle beslutninger, det vil si beslutninger som
påvirker strukturen, kvalitetsegenskapene, viktige (særlig eksterne)
avhengigheter og grensesnitt, eller byggeteknikker (takket være Michael
Nygard for dette forslaget).

## 10. Kvalitetskrav

Kvalitetskrav som scenarioer, med et kvalitetstre som gir en overordnet
oversikt. De viktigste kvalitetsmålene bør være beskrevet i del
1.2. (kvalitetsmål).

### Innhold

Denne delen inneholder alle relevante kvalitetskrav.

De viktigste av disse kravene er allerede beskrevet i del
1.2. (kvalitetsmål), og bør derfor bare refereres til her. I denne
delen 10 bør du også fange opp kvalitetskrav av mindre betydning,
som ikke skaper stor risiko hvis de ikke nås fullt ut (men som kan være
fint å ha).

### Motivasjon

Siden kvalitetskrav vil ha stor innflytelse på arkitekturbeslutninger, bør du vite
hvilke kvaliteter som virkelig er viktige for interessentene dine, på en konkret og
målbar måte.

### Mer informasjon

Se den omfattende kvalitetsmodellen Q42 på https://quality.arc42.org.

## 10.1 Oversikt over kvalitetskrav

### Innhold

En oversikt eller et sammendrag av kvalitetskrav.

### Motivasjon

Ofte møter vi dusinvis (eller hundrevis) av detaljerte kvalitetskrav.
I denne oversiktsdelen bør du prøve å oppsummere, for eksempel ved å beskrive
kategorier eller temaer (slik ISO 25010:2023 eller Q42 foreslår

Hvis disse sammendragsbeskrivelsene allerede er presise, konkrete nok og
målbare, kan du hoppe over del 10.2.

### Form

Bruk en enkel tabell der hver linje inneholder en kategori eller et tema og en kort
beskrivelse av kvalitetskravet. Alternativt kan du bruke et tankekart for å
strukturere kvalitetskravene.

I litteraturen er også ideen om et kvalitetsattributtre beskrevet,
som setter det generiske begrepet «kvalitet» som rot og bruker en trelignende
forfining av begrepet «kvalitet». [Bass+21] innførte begrepet «Quality
Attribute Utility Tree» for dette formålet.

## 10.2 Kvalitetsscenarioer

### Innhold

Kvalitetsscenarioer gjør kvalitetskrav konkrete og gjør det mulig å avgjøre om
de er oppfylt (i betydningen akseptkriterier). Sørg for at scenarioene dine
er konkrete og målbare.

To typer scenarioer er særlig nyttige:

- Bruksscenarioer (også kalt applikasjonsscenarioer eller bruksområdescenarioer)
  beskriver systemets reaksjon under kjøring på en bestemt stimulus. Dette
  omfatter også scenarioer som beskriver systemets effektivitet eller ytelse.
  Eksempel: Systemet reagerer på en brukers forespørsel innen ett sekund.

- Endringsscenarioer beskriver ønsket virkning av en endring eller utvidelse av
  systemet eller de nære omgivelsene. Eksempel: Ny funksjonalitet
  implementeres eller kravene til et kvalitetsattributt endres, og innsatsen eller
  varigheten av endringen måles.

### Form

Typisk informasjon i detaljerte scenarioer omfatter følgende:

I kort form (foretrukket i Q42-modellen):

- Kontekst/bakgrunn: Hva slags system eller komponent, hva er omgivelsene eller situasjonen?

- Kilde/stimulus: Hvem eller hva som setter i gang eller utløser en atferd, reaksjon eller handling.

- Måleverdi/akseptkriterier: En respons med et mål eller en måleverdi

Den lange formen av scenarioer (foretrukket av SEI og [Bass+21]) er mer detaljert og inneholder følgende informasjon:

- Scenario-ID: En unik identifikator for scenarioet.

- Scenarionavn: Et kort, beskrivende navn på scenarioet.

- Kilde: Enheten (bruker, system eller hendelse) som setter i gang scenarioet.

- Stimulus: Hendelsen eller betingelsen som utløser, og som systemet må håndtere.

- Miljø: Den operative konteksten eller betingelsen systemet opplever stimulusen under.

- Artefakt: Byggeblokkene eller andre elementer i systemet som stimulusen påvirker.

- Respons: Utfallet eller atferden systemet viser som reaksjon på stimulusen.

- Responsmål: Kriteriene eller måleverdien som systemets respons evalueres etter.

### Se også

Siden januar 2023 har arc42 en pragmatisk kvalitetsmodell som foreslår å
merke kvalitetskrav med emneknagger eller etiketter som #flexible, #efficient,
#usable, #operable, #testable, #secure, #safe, #reliable.

## 11. Risikoer og teknisk gjeld

Kjente tekniske risikoer eller teknisk gjeld. Hvilke potensielle problemer finnes i eller
rundt systemet? Hva er utviklingsteamet misfornøyd med?

### Innhold

En liste over identifiserte tekniske risikoer eller teknisk gjeld, sortert etter prioritet

### Motivasjon

«Risikostyring er prosjektledelse for voksne» (Tim Lister, Atlantic
Systems Guild.)

Dette bør være mottoet ditt for systematisk oppdagelse og evaluering av risikoer og
teknisk gjeld i arkitekturen, noe som vil trenges av ledelsen blant interessentene (for eksempel
prosjektledere, produkteiere) som del av den samlede risikoanalysen og
tiltaksplanleggingen.

### Form

Liste over risikoer og/eller teknisk gjeld, gjerne med foreslåtte tiltak for å
minimere, redusere eller unngå risikoer eller redusere teknisk gjeld.
