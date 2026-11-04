# Arkitekturbeslutningslogg (ADR) for Svelte-komponenter

<!--

Prompt:

Architecture decision record for Svelte components.

Compare options: SVAR, Carbon, Flowbite, SkeletonUI, MeltUI, SvelteUI, shadcn-svelte

The goal is full features for table, charts, lists, grids, gantt, 

-->

## Kontekst

Vi velger et UI-komponentbibliotek for Svelte som gir full funksjonalitet for:
- **Tabeller**
- **Diagrammer**
- **Lister**
- **Rutenett**
- **Gantt-diagrammer**

Målet er å velge et bibliotek som balanserer enkel integrasjon, full funksjonsstøtte, ytelse og langsiktig vedlikeholdbarhet. Alternativene som vurderes, er:

1. **SVAR**
2. **Carbon**
3. **Flowbite**
4. **SkeletonUI**
5. **MeltUI**
6. **SvelteUI**
7. **shadcn-svelte**

## Alternativanalyse

### 1. **SVAR**
- **Oversikt**: SVAR er et moderne og funksjonsrikt komponentbibliotek for Svelte, med fokus på designsystemer og komponenter klare for bedriftsbruk.
- **Fordeler**:
  - Komponenter med full funksjonalitet, blant annet tabeller, skjemaer og diagrammer.
  - Mange muligheter for tilpasning med innebygd støtte for temaer.
  - Innebygd støtte for tilgjengelighet og responsivitet.
  - Godt dokumentert, med bidrag fra miljøet.
- **Ulemper**:
  - Det kan være tyngre enn andre enklere biblioteker.
  - Begrenset støtte for bestemte komponenter som Gantt-diagrammer og avanserte rutenett.
- **Passer best for**: Applikasjoner på bedriftsnivå der et designsystem med full funksjonalitet er nødvendig.
- **Støtte for tabeller/diagrammer**: Moderat til god.
- **Støtte for rutenett/Gantt**: Minimal.

### 2. **Carbon**
- **Oversikt**: Carbon Design System er et designsystem med åpen kildekode fra IBM, som tilbyr et robust sett med UI-komponenter.
- **Fordeler**:
  - Polert design av høy kvalitet med omfattende dokumentasjon.
  - Svært tilgjengelig og responsivt.
  - Stort komponentbibliotek, blant annet rutenett, tabeller og skjemakontroller.
- **Ulemper**:
  - Ikke fokusert på Svelte, så integrasjonen kan være tungvint.
  - Kan kreve ekstra tilpasning for full kompatibilitet med Svelte.
  - Ingen støtte rett ut av boksen for avanserte komponenter som Gantt-diagrammer eller komplekse diagrammer.
- **Passer best for**: Storskala prosjekter som krever et konsistent, polert brukergrensesnitt.
- **Støtte for tabeller/diagrammer**: God (med integrasjon av diagrambibliotek).
- **Støtte for rutenett/Gantt**: God (støtte for rutenett finnes, men ikke Gantt-diagrammer).

### 3. **Flowbite**
- **Oversikt**: Flowbite er et komponentbibliotek bygget med Tailwind CSS, som tilbyr ulike komponenter og UI-elementer.
- **Fordeler**:
  - Basert på Tailwind CSS, noe som gjør det enkelt å tilpasse.
  - Enkelt å integrere og bruke med Svelte.
  - Gir rike komponenter som tabeller, diagrammer og UI-kontroller.
- **Ulemper**:
  - Mangler avanserte funksjoner (for eksempel Gantt-diagrammer eller komplekse rutenett).
  - Har ikke egne diagramkomponenter, og er avhengig av eksterne biblioteker.
- **Passer best for**: Prosjekter som krever rask utvikling med fokus på integrasjon med Tailwind CSS.
- **Støtte for tabeller/diagrammer**: God (krever integrasjon med diagrambiblioteker fra tredjeparter).
- **Støtte for rutenett/Gantt**: Minimal.

### 4. **SkeletonUI**
- **Oversikt**: SkeletonUI er et lett komponentbibliotek for Svelte, med fokus på enkelhet og minimalisme.
- **Fordeler**:
  - Ekstremt lett og raskt.
  - Enkelt og intuitivt API.
  - Bra for små prosjekter eller der ytelse er kritisk.
- **Ulemper**:
  - Svært få komponenter er med, så det er ikke funksjonsrikt.
  - Mangler avanserte komponenter for tabeller/rutenett/diagrammer/Gantt.
  - Begrenset støtte fra miljøet og mindre omfattende dokumentasjon.
- **Passer best for**: Prosjekter som krever lette komponenter med minimal overhead.
- **Støtte for tabeller/diagrammer**: Minimal.
- **Støtte for rutenett/Gantt**: Minimal.

### 5. **MeltUI**
- **Oversikt**: MeltUI er en samling tilgjengelige UI-komponenter for Svelte, med fokus på enkelhet og sammensettbarhet.
- **Fordeler**:
  - Lett og fullt tilpassbart.
  - Gode funksjoner for tilgjengelighet rett ut av boksen.
  - Moderne og minimalistisk design.
- **Ulemper**:
  - Mindre funksjonsrikt enn andre biblioteker.
  - Mangler avanserte rutenett- og tabellkomponenter.
  - Ingen Gantt-diagrammer eller komplekse diagramalternativer.
- **Passer best for**: Minimalistiske design som prioriterer tilgjengelighet og ytelse.
- **Støtte for tabeller/diagrammer**: Minimal.
- **Støtte for rutenett/Gantt**: Minimal.

### 6. **SvelteUI**
- **Oversikt**: SvelteUI er et omfattende og tilpassbart UI-komponentbibliotek for Svelte, utformet for å bygge moderne webapper med et elegant brukergrensesnitt.
- **Fordeler**:
  - Omfattende sett med komponenter, blant annet tabeller, rutenett, diagrammer og skjemaer.
  - Gir støtte for både lyst og mørkt modus.
  - Svært tilpassbart og enkelt å utvide.
  - Innebygde integrasjoner for diagrambiblioteker som `chart.js` eller `d3.js`.
- **Ulemper**:
  - Kan være tyngre enn enklere komponentbiblioteker.
  - Krever litt oppsett for å integrere eksterne biblioteker for mer komplekse funksjoner som Gantt-diagrammer.
- **Passer best for**: Prosjekter som trenger et omfattende, tilpassbart sett med komponenter.
- **Støtte for tabeller/diagrammer**: Utmerket (diagrambiblioteker støttes).
- **Støtte for rutenett/Gantt**: God (rutenettkomponenter finnes; Gantt trenger ekstern integrasjon).

### 7. **shadcn-svelte**
- **Oversikt**: En Svelte-versjon av ShadCN, som fokuserer på design med verktøyklasser først og gir moderne, stilede komponenter.
- **Fordeler**:
  - Design med verktøyklasser først, bygget på Tailwind CSS, noe som gjør det enkelt å tilpasse.
  - Rikt sett med komponenter og fullt stilet rett ut av boksen.
  - Enkelt å integrere med andre biblioteker.
- **Ulemper**:
  - Ikke like funksjonskomplett som noen andre når det gjelder avanserte UI-elementer.
  - Mangler innebygd støtte for tabeller, diagrammer eller rutenett.
  - Ingen støtte for Gantt-diagrammer rett ut av boksen.
- **Passer best for**: Små til mellomstore prosjekter som krever en tilnærming med verktøyklasser først og mulighet for tilpasning.
- **Støtte for tabeller/diagrammer**: Minimal.
- **Støtte for rutenett/Gantt**: Minimal.

## Beslutning

### Anbefalt alternativ: **SvelteUI**

- **Begrunnelse**: SvelteUI tilbyr et helhetlig og omfattende sett med komponenter som dekker behovet for tabeller, diagrammer, rutenett og skjemaer. Det er svært tilpassbart, integreres godt med andre diagrambiblioteker (som `chart.js` og `d3.js`) og har en god balanse mellom lett ytelse og funksjonsrikdom. Selv om det kanskje ikke gir støtte for Gantt-diagrammer rett ut av boksen, kan det enkelt utvides med integrasjoner fra tredjeparter, noe som gjør det ideelt for en skalerbar løsning med full funksjonalitet.
  
  - **Fordeler**:
    - Utmerket støtte for tabeller og diagrammer.
    - Komplette komponenter for rutenett og layout.
    - Tilpassbart og integreres godt med eksterne diagrambiblioteker.
    - Godt miljø og god dokumentasjon.
  
  - **Ulemper**:
    - Tyngre enn noen andre minimalistiske biblioteker.
    - Trenger ekstern integrasjon for komplekse diagrammer som Gantt-diagrammer.
  
### Alternativ: **Flowbite** eller **Carbon** (for større bedriftsprosjekter)
- Hvis det kreves et polert, Tailwind-basert eller mer konsistent designsystem, kan **Flowbite** (med Tailwind CSS) eller **Carbon** (for løsninger på bedriftsnivå) være egnede alternativer. De kan imidlertid kreve ekstra innsats for integrasjoner med mer komplekse diagrammer og komponenter.

## Konklusjon

Det beste valget for kravene dine (full funksjonalitet for tabeller, diagrammer, lister, rutenett og Gantt) er **SvelteUI**, etterfulgt av **Flowbite** og **Carbon** avhengig av prosjektets behov og designpreferanser.
