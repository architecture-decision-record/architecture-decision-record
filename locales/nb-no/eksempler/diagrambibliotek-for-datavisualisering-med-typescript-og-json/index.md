# Arkitekturbeslutningslogg: diagrambibliotek for datavisualisering med TypeScript og JSON

<!--

ChatGPT prompt:

Long software architecture decision record 
chart library toolkit for data visualization using TypeScript and JSON

Evaluate Charts: Apache ECharts, Chart.js, ApexCharts, AG Charts, Highcharts, Carbon Charts, Layer Cake, D3.

Primary need: advanced interactive charts, especially for financial data, scientific data, and government data.

High importance: 1. Agile development because this is for a startup. 2. Doughnut Chart, Radar Chart, Clustering Process
Chart, Area Chart with Time Axis, Candlestick Chart, Nightingale Chart, Geo SVG Map. 3. Free open source.

Low importance: 1. Runtime speed. 2. Scalability. 3. Backwards compatibility.

-->

**Hovedmål:**  
Å velge et avansert diagramverktøy for å lage interaktive visualiseringer, med fokus på finansdata, vitenskapelige data og offentlige data, med TypeScript og JSON. Biblioteket bør gi robuste funksjoner og fleksibilitet, og ha åpen kildekode. 

### Kontekst og krav:

1. **Smidig utvikling (høy prioritet)**: Som oppstartsbedrift er rask iterasjon, prototyping og fleksibilitet i utviklingen avgjørende. Diagrambiblioteket må gi raske utviklingssykluser.
   
2. **Diagramtyper (høy prioritet)**:
   - **Smultringdiagram**
   - **Radardiagram**
   - **Klyngeprosessdiagram**
   - **Områdediagram med tidsakse**
   - **Candlestick-diagram**
   - **Nightingale-diagram**
   - **Geografisk SVG-kart**
   
   Disse diagramtypene er særlig viktige for å visualisere komplekse datasett, som finansielle trender, vitenskapelige måleverdier og geografisk informasjon.

3. **Gratis og åpen kildekode (høy prioritet)**: Verktøyet bør ha åpen kildekode for å unngå lisenskostnader, gi åpenhet og tilby fleksibilitet for tilpasning.

4. **Kriterier med lav viktighet**:
   - **Kjørehastighet**: Selv om ytelse er viktig, er den ikke en toppprioritet i denne beslutningen.
   - **Skalerbarhet**: Selv om skalerbarhet generelt er viktig, er det umiddelbare behovet å bygge en MVP som kan vokse over tid. Hensyn til skalerbarhet kan tas senere.
   - **Bakoverkompatibilitet**: Ikke et hovedhensyn for det første bygget, så lenge biblioteket er moderne og aktivt vedlikeholdt.

### Evaluerte biblioteker:

1. **Apache ECharts**
2. **Chart.js**
3. **ApexCharts**
4. **AG Charts**
5. **Highcharts**
6. **Carbon Charts**
7. **Layer Cake**
8. **D3.js**

---

### 1. **Apache ECharts**

**Oversikt**:  
Apache ECharts er et kraftig og fleksibelt diagrambibliotek for interaktive og tilpassbare visualiseringer. Det støtter et bredt utvalg av diagrammer og er særlig sterkt på komplekse, dynamiske visualiseringer.

**Styrker**:
- **Avansert interaktivitet**: ECharts er best på å gi interaktive diagrammer, med funksjoner som zooming, panorering og dynamiske dataoppdateringer.
- **Smultring, radar, candlestick, geografiske SVG-kart**: ECharts støtter mange av de nødvendige diagramtypene, blant annet smultringdiagram, radardiagram, candlestick-diagram og geografiske kartvisualiseringer.
- **Gratis og åpen kildekode**: ECharts er et bibliotek med åpen kildekode, noe som passer til en oppstartsbedrifts kostnadsbevissthet og gir frihet til å endre koden.
- **Fleksibilitet og utvidbarhet**: Svært tilpassbart, med omfattende støtte for animasjoner, egendefinerte visualiseringer og avanserte diagramteknikker.
  
**Svakheter**:
- **Læringskurve**: ECharts er kraftig, men kan ha en brattere læringskurve på grunn av fleksibiliteten og det omfattende API-et.
- **Kompleks dokumentasjon**: Dokumentasjonen er omfattende, men kan være overveldende for utviklere som akkurat har begynt å bruke det.

**Konklusjon**:  
ECharts passer svært godt til prosjektet på grunn av støtten for interaktive diagrammer, blant annet alle de nødvendige typene som candlestick-diagrammer, radardiagrammer og geografiske kart. Åpen kildekode stemmer med prosjektets behov for fleksibilitet og kostnadseffektivitet.

---

### 2. **Chart.js**

**Oversikt**:  
Chart.js er et enkelt og brukervennlig diagrambibliotek for å bygge vanlige diagramtyper. Det er kjent for enkelhet og enkel integrasjon.

**Styrker**:
- **Brukervennlighet**: Chart.js er svært enkelt å sette opp og bruke, med en minimal læringskurve.
- **Åpen kildekode**: Chart.js er gratis og har åpen kildekode, noe som er avgjørende for å redusere kostnadene.
- **Vanlige diagramtyper**: Det støtter grunnleggende diagrammer som smultringdiagram, områdediagram, radardiagram og linjediagram, som dekker de fleste hovedbehovene.

**Svakheter**:
- **Begrensede avanserte diagrammer**: Chart.js støtter ikke komplekse diagramtyper som candlestick-diagrammer, geografiske SVG-kart eller klyngeprosessdiagrammer innebygd. Disse funksjonene kan legges til gjennom programtillegg eller tilpasning, men det er ikke like enkelt som med andre biblioteker.
- **Interaktivitet**: Selv om Chart.js støtter grunnleggende interaktivitet (for eksempel verktøytips og hover-effekter), har det ikke like avanserte funksjoner som ECharts eller D3.js.

**Konklusjon**:  
Chart.js er flott for enkle og raske prosjekter, men manglende støtte for komplekse diagramtyper gjør det uegnet for en datatung applikasjon med avanserte behov som candlestick-diagrammer og geografiske kart. Det er et godt valg for prototyping, men for de nødvendige diagramtypene anbefales mer avanserte verktøy.

---

### 3. **ApexCharts**

**Oversikt**:  
ApexCharts er et moderne diagrambibliotek som tilbyr en rekke diagramtyper og fokuserer på interaktive visualiseringer med et brukervennlig API.

**Styrker**:
- **Interaktive funksjoner**: ApexCharts tilbyr interaktive diagrammer med verktøytips, zooming, panorering og oppdateringer.
- **Støtte for finansielle og vitenskapelige diagrammer**: Det støtter et bredt utvalg av diagramtyper, blant annet candlestick-diagrammer, radardiagrammer og områdediagrammer.
- **Brukervennlighet**: Det har et enkelt API og er enkelt å integrere i et prosjekt.
- **Gratis og åpen kildekode**: ApexCharts tilbyr en gratis versjon med åpen kildekode som passer for mange bruksområder.
  
**Svakheter**:
- **Kompleks tilpasning**: Selv om det har mange funksjoner, er tilpasningsmulighetene ikke like fleksible som i ECharts eller D3.js for svært komplekse eller egendefinerte diagrambehov.
- **Geografiske kart**: ApexCharts støtter ikke geografiske kart eller klyngeprosessdiagrammer innebygd, som kreves i dette prosjektet.

**Konklusjon**:  
ApexCharts er en sterk kandidat på grunn av brukervennligheten og interaktiviteten, men kommer til kort på enkelte avanserte diagramtyper, særlig behovet for geografiske kart og klyngediagrammer. Det er et godt alternativ for enklere diagrammer, men mangler noen nødvendige funksjoner.

---

### 4. **AG Charts**

**Oversikt**:  
AG Charts er et diagrambibliotek i kommersiell klasse, utformet for ytelse og presisjon. Det er svært godt egnet til å lage dashbord for finans, vitenskap og forretning.

**Styrker**:
- **Avanserte diagramtyper**: AG Charts støtter mange avanserte diagramtyper, blant annet candlestick-diagrammer, områdediagrammer, radardiagrammer og mer. Det har også dyp integrasjon med andre produkter fra AG Grid.
- **Høy ytelse**: Det har utmerket ytelse, særlig med store datasett.
- **Interaktivitet**: AG Charts støtter en rekke interaktive funksjoner som zooming, verktøytips og dynamiske oppdateringer.

**Svakheter**:
- **Ikke fullt ut gratis**: AG Charts har en gratis versjon, men den fullverdige versjonen er betalt, noe som kan være en barriere for oppstartsbedrifter som vil minimere kostnadene.
- **Kompleksitet**: Biblioteket er funksjonsrikt, men kan være overdrevent for enklere prosjekter og kan kreve mer oppsett og konfigurasjon enn andre alternativer.

**Konklusjon**:  
AG Charts er kraftig og funksjonsrikt, men er kanskje ikke det beste valget på grunn av den kommersielle karakteren og kostnadsstrukturen. Egnetheten avhenger av om budsjettet kan romme betalte versjoner, eller om alternativer med åpen kildekode foretrekkes.

---

### 5. **Highcharts**

**Oversikt**:  
Highcharts er et populært diagrambibliotek som er kjent for det brede utvalget av diagramtyper og de kraftige tilpasningsmulighetene.

**Styrker**:
- **Omfattende diagramtyper**: Highcharts støtter et bredt utvalg av diagrammer, blant annet candlestick, radar, område og geografiske kart.
- **Interaktivt og dynamisk**: Highcharts har rike interaktive funksjoner, blant annet drill-down, zooming og panorering.
- **Brukervennlighet**: Det har et brukervennlig API og god dokumentasjon, noe som gjør det enkelt å komme i gang.

**Svakheter**:
- **Kommersiell lisens**: Highcharts har en gratis versjon for ikke-kommersiell bruk, men den kommersielle lisensen er dyr, noe som kan være en betydelig ulempe for oppstartsbedrifter.
- **Læringskurve**: Selv om den ikke er like bratt som i ECharts, kan læringskurven for Highcharts fortsatt være utfordrende for nybegynnere.

**Konklusjon**:  
Highcharts er et funksjonsrikt bibliotek, men den kommersielle lisensieringen gjør det mindre egnet for kostnadsfølsomme prosjekter med åpen kildekode. De omfattende diagrammulighetene er et pluss, men lisensproblemet begrenser appellen for dette bruksområdet.

---

### 6. **Carbon Charts**

**Oversikt**:  
Carbon Charts er et diagrambibliotek utviklet av IBM, utformet for å lage visuelt tiltalende og svært tilpassbare diagrammer.

**Styrker**:
- **Tilpassbarhet**: Carbon Charts gir omfattende tilpasning av diagrammenes utseende og atferd.
- **Åpen kildekode**: Det er gratis og har åpen kildekode, noe som stemmer med prosjektets krav til rimelige løsninger.
- **Støtte for vanlige diagrammer**: Det støtter vanlige diagramtyper som smultringdiagram, radardiagram og områdediagram, men mangler støtte for mer avanserte typer som geografiske kart eller candlestick-diagrammer.

**Svakheter**:
- **Begrensede avanserte diagramtyper**: Det støtter ikke geografiske kart, klyngeprosessdiagrammer eller candlestick-diagrammer, som er avgjørende for prosjektet.
- **Mindre økosystem**: Carbon Charts har et mindre miljø og økosystem enn større diagrambiblioteker som ECharts eller Highcharts.

**Konklusjon**:  
Carbon Charts har åpen kildekode og kan tilpasses, men mangler støtte for de mer komplekse diagramtypene som trengs i dette prosjektet. Det passer bedre for enklere diagrambehov.

---

### 7. **Layer Cake**

**Oversikt**:  
Layer Cake er et bibliotek for datavisualisering utformet for å lage fleksible, lagdelte visualiseringer.

**Styrker**:
- **Tilpassbare lag**: Det gir kraftige muligheter for lagdeling i komplekse visualiseringer.
- **Åpen kildekode**: Det er gratis og har åpen kildekode, noe som gjør det til et mulig alternativ for kostnadsbevisste prosjekter.

**Svakheter**:
- **Begrenset dokumentasjon**: Layer Cake mangler omfattende dokumentasjon og støtte fra miljøet, noe som gjør det vanskeligere å arbeide med enn mer etablerte biblioteker.
- **Ikke bygget for diagrammer**: Layer Cake passer bedre for visualiseringer som ikke er diagrammer, så mulighetene for diagrammer rett ut av boksen er begrensede.

**Konklusjon**:  
Selv om Layer Cake er interessant for unike visualiseringer, er det ikke ideelt for tradisjonelle diagramkrav som candlestick-diagrammer eller radardiagrammer. Det passer bedre for egendefinerte visualiseringer utenfor rammene for standarddiagrammer.

---

### 8. **D3.js**

**Oversikt**:  
D3.js er et kraftig JavaScript-bibliotek for å lage datadrevne visualiseringer gjennom HTML, SVG og CSS.

**Styrker**:
- **Enestående fleksibilitet**: D3.js gjør det mulig å lage nesten hvilken som helst type egendefinert visualisering, noe som gjør det svært kraftig for avanserte og interaktive diagrammer.
- **Omfattende funksjoner**: Det støtter alle nødvendige diagramtyper, blant annet geografiske kart, klyngediagrammer og mer.
- **Tilpassbart**: Graden av tilpasning i D3.js er uovertruffen og lar utviklere bygge svært skreddersydde visualiseringer.

**Svakheter**:
- **Bratt læringskurve**: D3.js har en bratt læringskurve og er mer komplekst å integrere enn andre biblioteker.
- **Tidkrevende**: Å bygge diagrammer i D3.js kan være tidkrevende, særlig for vanlige diagrammer som candlestick- eller smultringdiagrammer.

**Konklusjon**:  
D3.js er utrolig kraftig for avanserte, skreddersydde diagrammer, men er overdrevent for mange typiske bruksområder på grunn av den bratte læringskurven og utviklingstiden. Det er best i situasjoner der de andre diagrambibliotekene ikke gir nødvendig grad av tilpasning.

---

### Konklusjon

Etter å ha evaluert bibliotekene ut fra prosjektets behov skiller **Apache ECharts** seg ut som det beste alternativet. Det støtter hele spekteret av nødvendige diagrammer, blant annet geografiske kart, candlestick-diagrammer og klyngediagrammer. Det har åpen kildekode, er funksjonsrikt og svært interaktivt, noe som stemmer perfekt med prosjektets mål. Selv om **D3.js** gir mest fleksibilitet, gjør kompleksiteten og tidsinvesteringen det mindre ideelt for en oppstartsbedrift som vil iterere raskt. **ApexCharts** og **Chart.js** er gode alternativer for enklere prosjekter, men mangler støtte for avanserte diagramtyper.
