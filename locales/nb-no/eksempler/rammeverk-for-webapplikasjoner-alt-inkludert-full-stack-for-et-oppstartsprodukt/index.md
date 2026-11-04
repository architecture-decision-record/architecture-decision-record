# Arkitekturbeslutningslogg: rammeverk for webapplikasjoner, alt inkludert, full stack, for et oppstartsprodukt

<!-- 

ChatGPT prompt

Long software architecture decision record 
for a web application framework, batteries included, full stack, for a startup product.

Evaluate Python Django, Ruby on Rails, Phoenix Elixir, Rust Loco.

Primary need: web application for paying customers to sign in, upload files, process data, and view reports. 

High importance: 1. Agile development because this is for a startup. 2. Full-stack because we do not want to spend extra time on a separate front-end. 3. Works well with AI/ML tools for data analysis, such as Project Jupyter notebooks.

Low importance: 1. Runtime speed. 2. Scalability. 3. Backwards compatibility.

-->

**Hovedmål:**  
Å bygge en webapplikasjon der betalende kunder kan logge inn, laste opp filer, behandle data og se rapporter, med fokus på smidig utvikling, full-stack-funksjonalitet og sterk kompatibilitet med KI/ML-verktøy, særlig Project Jupyter-notatbøker.

### Kontekst og krav:

1. **Smidig utvikling (høy prioritet)**: Som oppstartsbedrift trenger vi rask iterasjon og fleksibilitet. Smidige praksiser, som rask prototyping, iterativ utvikling og evne til å tilpasse seg endringer, er nøkkelen i utviklingssyklusen vår.

2. **Full-stack-rammeverk (høy prioritet)**: Vi vil minimere overhead ved å velge et rammeverk som kan håndtere både backend og frontend effektivt, slik at behovet for egne rammeverk for frontend reduseres.

3. **Kompatibilitet med KI/ML-verktøy (høy prioritet)**: Det er avgjørende å kunne integrere enkelt med verktøy for dataanalyse som Jupyter-notatbøker og Pythons økosystem for datavitenskap (NumPy, Pandas, TensorFlow og så videre). Det vil gjøre databehandling og rapportering effektiv.

4. **Kriterier med lav viktighet**:
   - **Kjørehastighet**: Selv om ytelse er relevant, er den ikke den mest kritiske faktoren i starten, siden vi er mer opptatt av utviklingshastighet og fullstendige funksjoner.
   - **Skalerbarhet**: Vi forventer vekst, men hensyn til skalerbarhet kan tas senere, og det er ikke et hovedkrav akkurat nå.
   - **Bakoverkompatibilitet**: Vi fokuserer på dagens teknologier og er ikke særlig opptatt av bakoverkompatibilitet med eldre systemer.

### Evaluerte rammeverk:

1. **Django (Python)**  
2. **Ruby on Rails (Ruby)**  
3. **Phoenix (Elixir)**  
4. **Loco (Rust)**

---

### 1. **Django (Python)**

**Oversikt**:  
Django er et webrammeverk på høyt nivå for Python som fremmer rask utvikling og et rent, pragmatisk design. Det er kjent for filosofien «batteries included», som betyr at det rett ut av boksen har mange funksjoner som autentisering, ruting, ORM og skjemahåndtering.

**Styrker**:  
- **Full stack**: Django er et omfattende full-stack-rammeverk som kan håndtere behov for både backend og frontend med integrerte funksjoner (for eksempel malmotor og administrasjonsgrensesnitt).
- **Smidig utvikling**: Djangos veldefinerte struktur og konvensjoner gir rask utvikling og tilpasningsevne, avgjørende i en oppstartsbedrift. Rammeverket har utmerket dokumentasjon og et rikt økosystem av pakker fra tredjeparter, som akselererer utviklingen.
- **KI/ML-integrasjon**: Pythons økosystem er uovertruffent når det gjelder datavitenskap og maskinlæring. Django, som er Python-basert, integreres sømløst med verktøy som Jupyter-notatbøker, Pandas, NumPy, TensorFlow og scikit-learn.
- **Miljø og økosystem**: Django har et omfattende miljø, robust dokumentasjon og et bredt utvalg av programtillegg og utvidelser, som øker tempoet i utvikling og feilsøking betydelig.
  
**Svakheter**:  
- **Kjørehastighet**: Python har en tendens til å være tregere enn språk som Rust eller Elixir. For dette bruksområdet, der ytelse ikke er hovedhensynet, trenger det likevel ikke å være avgjørende.
- **Skalerbarhet**: Selv om Django er svært skalerbart, kan det bli utfordringer ved svært høy skala uten nøye optimalisering (for eksempel ved mange samtidige forespørsler). Django kan likevel skaleres effektivt med lastbalansering og hurtigbufringsteknikker.

**Konklusjon**:  
Django stemmer godt med kravene til smidig utvikling, full-stack-støtte og KI/ML-kompatibilitet. Python-integrasjonen gir sømløs tilgang til verktøyene og bibliotekene for datavitenskap som applikasjonen trenger.

---

### 2. **Ruby on Rails (Ruby)**

**Oversikt**:  
Ruby on Rails (RoR) er et modent full-stack-rammeverk for webapplikasjoner, kjent for tilnærmingen «konvensjon framfor konfigurasjon», som gir rask utvikling.

**Styrker**:  
- **Full stack**: RoR har innebygde verktøy for utvikling av både backend og frontend (for eksempel visninger, maler og stillasbygging), og det rike biblioteket av gems gjør det mulig å implementere ulike funksjoner raskt.
- **Smidig utvikling**: Ruby on Rails er særlig kjent for raske iterasjonssykluser, som er en fordel for oppstartsbedrifter som vil iterere raskt på funksjoner. RoR støtter testdrevet utvikling (TDD) og har et etablert økosystem for smidige arbeidsflyter.
- **Miljø og økosystem**: RoR har et veletablert og sterkt miljø og et bredt utvalg av gems som kan fremskynde utviklingen.
- **Brukervennlighet**: Rails har en svært utviklervennlig syntaks og er kjent for å gjøre oppgaver som databasemigreringer, arkitekturen Model-View-Controller (MVC) og håndtering av ruter raske og enkle.

**Svakheter**:  
- **Ytelse**: Ruby har en tendens til å ha tregere kjøretidsytelse enn Python eller Elixir. Selv om RoR kan skalere med riktig infrastruktur, kan Rubys ytelse bli en flaskehals for applikasjoner som krever tung sanntidsbehandling eller mye samtidig trafikk.
- **KI/ML-integrasjon**: Selv om Ruby har noen biblioteker for maskinlæring, er det ikke like utbredt i KI/ML-miljøet som Python. Integrasjon med verktøy som Jupyter-notatbøker er ikke like sømløs, noe som gjør Python til et sterkere valg for datatunge applikasjoner.
  
**Konklusjon**:  
Selv om Ruby on Rails er best på smidig utvikling og rask prototyping, kommer det til kort på KI/ML-kompatibilitet sammenlignet med Python (Django). Det er et mulig valg for oppstartsbedrifter som prioriterer rask iterasjon framfor dyp integrasjon med dataanalyse.

---

### 3. **Phoenix (Elixir)**

**Oversikt**:  
Phoenix er et webrammeverk bygget med Elixir, et funksjonelt programmeringsspråk utformet for skalerbarhet og samtidighet. Phoenix utnytter Erlang VM, som er kjent for å håndtere massiv samtidighet og feiltolerante systemer.

**Styrker**:  
- **Skalerbarhet og ytelse**: Phoenix utmerker seg i skalerbarhet og håndtering av høy samtidighet. Det er bygget på Erlang VM, som kan støtte tusenvis (eller til og med millioner) av samtidige tilkoblinger, noe som gjør det til en sterk kandidat for applikasjoner som krever sanntidsbehandling av data eller mye trafikk.
- **Full stack**: Phoenix har alt som trengs for å bygge både backend og frontend i en applikasjon. Det støtter live views for interaktive oppdateringer av brukergrensesnittet og har en malmotor.
- **Smidig utvikling**: Phoenix er svært modulært, noe som gir rask iterasjon på funksjoner. Det passer godt for oppstartsbedrifter som må bevege seg raskt.
- **KI/ML-kompatibilitet**: Selv om Elixir har nye biblioteker for maskinlæring, er det ikke like bredt støttet for KI/ML-oppgaver som Python. Integrasjon med verktøy som Jupyter-notatbøker ville kreve omveier, siden Elixirs økosystem for datavitenskap ikke er like modent som Pythons.

**Svakheter**:  
- **KI/ML-økosystem**: Elixir er ikke hovedspråket som brukes i datavitenskap eller maskinlæring, og økosystemet er ikke like modent som Pythons. Integrasjon med verktøy som Jupyter-notatbøker eller populære KI-biblioteker (TensorFlow, PyTorch) blir derfor tungvint.
- **Læringskurve**: Hvis teamet ikke kjenner funksjonell programmering og Elixir, kan det bli en brattere læringskurve.

**Konklusjon**:  
Phoenix er et utmerket valg hvis skalerbarhet og samtidighet er et hovedhensyn. Med tanke på prioriteten for KI/ML-kompatibilitet er Phoenix likevel kanskje ikke det beste valget, på grunn av Elixirs begrensede økosystem på dette området.

---

### 4. **Loco (Rust)**

**Oversikt**:  
Loco er et webrammeverk bygget med Rust, et systemprogrammeringsspråk som er kjent for ytelse, minnesikkerhet og samtidighet. Rust blir stadig mer populært for å bygge applikasjoner med høy ytelse.

**Styrker**:  
- **Ytelse**: Rusts hovedstyrke ligger i den høye ytelsen og minnesikkerheten, noe som gjør det til et utmerket valg for applikasjoner som krever kontroll på lavt nivå eller ekstremt høy ytelse.
- **Samtidighet**: Rusts eierskapssystem sikrer minnesikkerhet og tillater trygg samtidig programmering, noe som gjør det ideelt for systemer som må skalere effektivt og håndtere parallellitet.

**Svakheter**:  
- **Full-stack-utvikling**: Loco er lovende, men ikke like modent som de andre rammeverkene når det gjelder å tilby en komplett full-stack-løsning. Det passer bedre for backend-utvikling, og økosystemet for frontend rundt Rust er fortsatt i støpeskjeen.
- **Smidig utvikling**: Utvikling med Rust kan gå tregere enn med språk på høyere nivå som Python eller Ruby, på grunn av at det er mer lavnivå og har en brattere læringskurve.
- **KI/ML-økosystem**: Rust har ikke det samme omfattende økosystemet for KI/ML som Python. Selv om det vokser fram biblioteker i Rust for numerisk databehandling, er de langt mindre modne enn Pythons tilbud, som Jupyter-notatbøker eller rammeverk for maskinlæring.
  
**Konklusjon**:  
Selv om Rust og rammeverket Loco gir eksepsjonell ytelse, gjør mangelen på full-stack-støtte, fordeler for smidig utvikling og KI/ML-økosystem det mindre ideelt for dette bestemte bruksområdet. Det passer bedre for ytelseskritiske applikasjoner enn for rask webutvikling med integrerte verktøy for datavitenskap.

---

### Konklusjon

Etter å ha evaluert alternativene ut fra prosjektets krav er **Django (Python)** det mest egnede valget. Det har følgende fordeler:

- **Full-stack-muligheter**: Django er et full-stack-rammeverk som integrerer utvikling av både backend og frontend.
- **Smidig utvikling**: Rammeverket passer godt for rask prototyping og iterasjon, noe som er avgjørende i en oppstartsbedrift.
- **KI/ML-kompatibilitet**: Python er det ledende språket innen KI/ML, og Djangos kompatibilitet med biblioteker som Jupyter-notatbøker sikrer smidig integrasjon for dataanalyse og databehandling.
- **Miljø og økosystem**: Djangos sterke støtte fra miljøet og omfattende økosystem av biblioteker gir mange verktøy som kan fremskynde utviklingen.

Selv om **Ruby on Rails** også er en sterk kandidat for smidig utvikling, gjør den begrensede KI/ML-støtten det mindre ideelt for dette bestemte bruksområdet. **Phoenix (Elixir)** og **Loco (Rust)** er utmerkede for skalerbarhet og ytelse, men kommer til kort på KI/ML-integrasjon og full-stack-utvikling. Derfor er Django det anbefalte rammeverket for dette prosjektet.
