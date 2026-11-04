# Arkitekturbeslutningslogg (ADR)

En arkitekturbeslutningslogg (ADR) er et dokument som fanger opp en viktig arkitekturbeslutning som er tatt, sammen med konteksten og konsekvensene av den.

> [!IMPORTANT]
> Gjør din egen grundige vurdering av disse ressursene før du bruker dem i kritiske systemer.

Innhold:

- [Hva er en arkitekturbeslutningslogg?](#hva-er-en-arkitekturbeslutningslogg)
- [Slik kommer du i gang med ADR-er](#slik-kommer-du-i-gang-med-adr-er)
- [Slik kommer du i gang med ADR-er og verktøy](#slik-kommer-du-i-gang-med-adr-er-og-verktøy)
- [Slik kommer du i gang med ADR-er og git](#slik-kommer-du-i-gang-med-adr-er-og-git)
- [Claude Code-ferdigheter for ADR-er](#claude-code-ferdigheter-for-adr-er)
- [Filnavnkonvensjoner for ADR-er](#filnavnkonvensjoner-for-adr-er)
- [Tips for å skrive gode ADR-er](#tips-for-å-skrive-gode-adr-er)
- [Eksempelmaler for ADR-er](#eksempelmaler-for-adr-er)
- [Råd om teamarbeid for ADR-er](#råd-om-teamarbeid-for-adr-er)
- [Spørsmål om teamarbeid for ADR-er](#spørsmål-om-teamarbeid-for-adr-er)
- [Konsepter for neste steg for ADR-er](#konsepter-for-neste-steg-for-adr-er)
- [Arkitekturdiagrammer, visninger og synspunkter](#arkitekturdiagrammer-visninger-og-synspunkter)
- [Egnethetsfunksjoner for beslutninger som kode](#egnethetsfunksjoner-for-beslutninger-som-kode)
- [Beslutningsrekkverk for pull requests](#beslutningsrekkverk-for-pull-requests)
- [Mer informasjon](#mer-informasjon)

Maler:

- [Mal for beslutningslogg fra Jeff Tyree og Art Akerman](maler/mal-for-beslutningslogg-fra-jeff-tyree-og-art-akerman/)
- [Mal for beslutningslogg fra Michael Nygard](maler/mal-for-beslutningslogg-fra-michael-nygard/)
- [Mal for beslutningslogg fra EdgeX](maler/mal-for-beslutningslogg-fra-edgex/)
- [Mal for beslutningslogg fra arc42](maler/mal-for-beslutningslogg-fra-arc42/)
- [Mal for beslutningslogg for alexandrinsk mønster](maler/mal-for-beslutningslogg-for-alexandrinsk-mønster/)
- [Mal for beslutningslogg for forretningscase](maler/mal-for-beslutningslogg-for-forretningscase/)
- [Mal for beslutningslogg fra MADR-prosjektet](maler/mal-for-beslutningslogg-fra-madr-prosjektet/)
- [Mal for beslutningslogg med Planguage](maler/mal-for-beslutningslogg-med-planguage/)
- [Mal for beslutningslogg av Paulo Merson](https://github.com/pmerson/ADR-template)
- [Mal for beslutningslogg av Olaf Zimmermann](https://medium.com/olzzio/y-statements-10eb07b5a177)
- [Mal for beslutningslogg fra Gareth Morgan](maler/mal-for-beslutningslogg-fra-gareth-morgan/)
- [Mal for beslutningslogg fra GIG Cymru NHS Wales](maler/mal-for-beslutningslogg-fra-gig-cymru-nhs-wales/)
- [Mal for beslutningslogg for viktige tekniske beslutninger (ITD-er) av Ignacio Larrañaga](maler/mal-for-beslutningslogg-for-viktige-tekniske-beslutninger/)

Eksempler:

- [CSS-rammeverk](eksempler/css-rammeverk/)
- [Konfigurasjon med miljøvariabler](eksempler/konfigurasjon-med-miljøvariabler/)
- [Måleverdier, overvåking, varsler](eksempler/måleverdier-overvåking-varsler/)
- [Microsoft Azure DevOps](eksempler/microsoft-azure-devops/)
- [Monorepo eller multirepo](eksempler/monorepo-eller-multirepo/)
- [Programmeringsspråk](eksempler/programmeringsspråk/)
- [Lagring av hemmeligheter](eksempler/lagring-av-hemmeligheter/)
- [Tidsstempelformat](eksempler/tidsstempelformat/)
- [Mange flere ...](eksempler/)

## Hva er en arkitekturbeslutningslogg?

En **arkitekturbeslutningslogg** (architecture decision record, ADR) er et dokument som fanger opp en viktig arkitekturbeslutning som er tatt, sammen med konteksten og konsekvensene av den.

En **arkitekturbeslutning** (architecture decision, AD) er et valg i programvaredesign som svarer på et vesentlig krav.

En **samling av arkitekturbeslutninger** (architecture decision log, ADL) er alle ADR-er som er opprettet og vedlikeholdt for et bestemt prosjekt (eller en bestemt organisasjon).

Et **arkitektonisk betydningsfullt krav** (architecturally-significant requirement, ASR) er et krav som har en målbar innvirkning på arkitekturen til et programvaresystem.

Alt dette hører inn under temaet **forvaltning av arkitekturkunnskap** (architecture knowledge management, AKM).

Målet med dette dokumentet er å gi en rask oversikt over ADR-er, hvordan du lager dem og hvor du finner mer informasjon.

Forkortelser:

  * **AD**: arkitekturbeslutning

  * **ADL**: samling av arkitekturbeslutninger

  * **ADR**: arkitekturbeslutningslogg

  * **AKM**: forvaltning av arkitekturkunnskap

  * **ASR**: arkitektonisk betydningsfullt krav

## Slik kommer du i gang med ADR-er

For å komme i gang med ADR-er bør du snakke med teamkollegene dine om disse områdene.

Identifisering av beslutninger:

  * Hvor haster og hvor viktig er AD-en?

  * Må den tas nå, eller kan den vente til man vet mer?

  * Både personlig og felles erfaring, i tillegg til anerkjente designmetoder og praksiser, kan hjelpe med å identifisere beslutninger.

  * Ideelt sett bør du føre en beslutningsliste som utfyller produktets oppgaveliste.

Beslutningstaking:

  * Det finnes mange teknikker for beslutningstaking, både generelle og spesifikke for programvarearkitektur, for eksempel dialogkartlegging.

  * Gruppebeslutninger er et aktivt forskningsemne.

Iverksetting og håndheving av beslutninger:

  * AD-er brukes i programvaredesign. Derfor må de formidles til og godtas av interessentene i systemet som finansierer, utvikler og driver det.

  * Arkitektonisk tydelige kodestiler og kodegjennomganger som fokuserer på arkitektoniske hensyn og beslutninger er to beslektede praksiser.

  * AD-er må også vurderes (på nytt) når et programvaresystem moderniseres i løpet av programvareevolusjonen.

Deling av beslutninger (valgfritt):

  * Mange AD-er går igjen på tvers av prosjekter.

  * Erfaringer med tidligere beslutninger, både gode og dårlige, kan derfor være verdifulle gjenbrukbare ressurser når man bruker en eksplisitt strategi for kunnskapsforvaltning.

Dokumentasjon av beslutninger:

  * Det finnes mange maler og verktøy for å fange opp beslutninger.

  * Se smidige miljøer, for eksempel ADR-ene til M. Nygard.

  * Se tradisjonell programvareutvikling og prosesser for arkitekturdesign, for eksempel tabelloppsettene som IBM UMF og Tyree og Akerman fra CapitalOne foreslår.

Mer informasjon:

  * Trinnene ovenfor er hentet fra Wikipedia-artikkelen om [Architectural Decision](https://en.wikipedia.org/wiki/Architectural_decision)

## Slik kommer du i gang med ADR-er og verktøy

- [MySpec](https://myspec.dev) — Automatisert plattform for spesifikasjoner og arkitekturbeslutninger som strukturerer prosjektets grunnlov, den tekniske arkitekturen og ADR-er i ryddig Markdown, tilgjengelig via MCP.

Du kan komme i gang med ADR-er og verktøy på den måten du selv ønsker.

For eksempel:

  * Hvis du liker Google Disk og redigering på nett, kan du lage et Google-dokument eller et Google-regneark.

  * Hvis du liker å bruke versjonskontroll av kildekode, for eksempel git, kan du lage én fil per ADR.

  * Hvis du liker prosjektplanleggingsverktøy, for eksempel Atlassian Jira, kan du bruke verktøyets planleggingsoversikt.

  * Hvis du liker wikier, for eksempel MediaWiki, kan du lage en ADR-wiki.

## Slik kommer du i gang med ADR-er og git

Hvis du liker å bruke versjonskontroll med git, viser vi her hvordan vi liker å komme i gang med ADR-er og git i et typisk programvareprosjekt med kildekode.

Lag en katalog for ADR-filer:

```sh
$ mkdir adr
```

Lag en tekstfil for hver ADR, for eksempel `choose-database.md`:

```sh
$ vi choose-database.md
```

Skriv hva du vil i ADR-en. Se malene i dette arkivet for ideer.

Commit ADR-en til git-arkivet ditt.

## Claude Code-ferdigheter for ADR-er

Dette arkivet inneholder to [Claude Code](https://claude.com/claude-code)-ferdigheter (skills) under [`skills/`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/), slik at en KI-kodeagent kan skrive og vedlikeholde ADR-er på den måten dette prosjektet anbefaler:

- [`architecture-decision-record-skill`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/architecture-decision-record-skill/) — til generell bruk, for alle som skriver en ADR i et hvilket som helst prosjekt. Hjelper med å avgjøre om en beslutning trenger en ADR, oppretter en katalog `adr/` eller `decisions/`, gir filen navn, velger en mal blant de elleve medfølgende skjelettene og skriver solide deler om kontekst, beslutning og konsekvenser.

- [`architecture-decision-record-maintainer-skill`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/architecture-decision-record-maintainer-skill/) — særlig for dem som vedlikeholder dette arkivet. Dokumenterer oppbyggingen av arkivet, konvensjonen om å speile README og locales og de nøyaktige trinnene for å legge til en ny mal, et nytt eksempel eller en ny verktøylenke.

For å bruke en ferdighet kopierer du mappen dens til `.claude/skills/` i roten av arkivet du arbeider i (eller til `~/.claude/skills/` for å gjøre den tilgjengelig i alle prosjekter), og ber deretter Claude Code skrive eller gjennomgå en ADR.

## Filnavnkonvensjoner for ADR-er

Hvis du velger å lage ADR-ene dine som vanlige tekstfiler, kan du ønske å finne på en egen filnavnkonvensjon for ADR-er.

Vi foretrekker en filnavnkonvensjon med et bestemt format.

Eksempler:

  * choose-database.md

  * format-timestamps.md

  * manage-passwords.md

  * handle-exceptions.md

Vår filnavnkonvensjon:

  * Navnet er en verbfrase i presens imperativ. Det gjør det lettere å lese og passer til formatet vi bruker i commit-meldinger.

  * Navnet bruker små bokstaver og bindestreker (som dette arkivet). Det er en balanse mellom lesbarhet og bruksvennlighet i systemet.

  * Filtypen er markdown. Det kan være nyttig for enkel formatering.

## Tips for å skrive gode ADR-er

Kjennetegn på en god ADR:

* Begrunnelse: Forklar grunnene til at den aktuelle AD-en tas. Det kan omfatte konteksten (se nedenfor), fordeler og ulemper ved ulike mulige valg, sammenligning av funksjoner, diskusjoner om kostnad og nytte, og mer.

* Avgrenset: Hver ADR skal handle om én AD, ikke flere.

* Tidsstempler: Angi når hvert punkt i ADR-en er skrevet. Dette er særlig viktig for forhold som kan endre seg over tid, som kostnader, tidsplaner, skalering og lignende.

* Uforanderlig: Ikke endre eksisterende informasjon i en ADR. Utvid i stedet ADR-en med ny informasjon, eller erstatt ADR-en ved å lage en ny ADR.

Kjennetegn på en god «Kontekst»-del i en ADR:

* Forklar organisasjonens situasjon og forretningsmessige prioriteringer.

* Ta med begrunnelser og hensyn som bygger på teamenes sosiale sammensetning og kompetanse.

* Ta med fordeler og ulemper som er relevante, og beskriv dem på måter som stemmer med dine behov og mål.

Kjennetegn på en god «Konsekvenser»-del i en ADR:

* Forklar hva som følger av å ta beslutningen. Det kan omfatte virkninger, utfall, resultater, oppfølging og mer.

* Ta med informasjon om eventuelle etterfølgende ADR-er. Det er ganske vanlig at én ADR utløser behov for flere ADR-er, for eksempel når én ADR gjør et stort overordnet valg som igjen skaper behov for flere mindre beslutninger.

* Ta med eventuelle prosesser for gjennomgang i etterkant. Det er vanlig at team gjennomgår hver ADR en måned senere, for å sammenligne informasjonen i ADR-en med det som faktisk har skjedd i praksis, slik at de kan lære og utvikle seg.

En ny ADR kan erstatte en tidligere ADR:

* Når det tas en AD som erstatter eller opphever en tidligere ADR, bør det lages en ny ADR

## Eksempelmaler for ADR-er

Eksempelmaler for ADR-er som vi har samlet på nettet:

- [ADR-mal fra Michael Nygard](maler/mal-for-beslutningslogg-fra-michael-nygard/) (enkel og populær)

- [ADR-mal fra Jeff Tyree og Art Akerman](maler/mal-for-beslutningslogg-fra-jeff-tyree-og-art-akerman/) (mer avansert)

- [ADR-mal for alexandrinsk mønster](maler/mal-for-beslutningslogg-for-alexandrinsk-mønster/) (enkel, med detaljer om konteksten)

- [ADR-mal for forretningscase](maler/mal-for-beslutningslogg-for-forretningscase/) (mer MBA-orientert, med kostnader, SWOT og flere meninger)

- [ADR-mal fra prosjektet Markdown Any Decision Records (MADR)](maler/mal-for-beslutningslogg-fra-madr-prosjektet/) (både enkel og utførlig versjon; den siste legger vekt på alternativer og fordeler og ulemper ved dem)

- [ADR-mal med Planguage](maler/mal-for-beslutningslogg-med-planguage/) (mer orientert mot kvalitetssikring)

- [Mal for viktige tekniske beslutninger (ITD-er) av Ignacio Larrañaga](maler/mal-for-beslutningslogg-for-viktige-tekniske-beslutninger/) (slank og med beslutningen først, optimalisert for rask gjennomgang på ledernivå)

## Råd om teamarbeid for ADR-er

Hvis du vurderer å bruke beslutningslogger sammen med teamet ditt, får du her noen råd vi har lært av å arbeide med mange team.

Du har en mulighet til å gå foran som leder for teamkollegene dine ved å snakke sammen om «hvorfor» i stedet for å pålegge «hva». Beslutningslogger er for eksempel en måte for team å tenke smartere og kommunisere bedre på. De er ikke verdifulle hvis de bare er et krav om papirarbeid som tvinges inn i etterkant.

Noen team foretrekker navnet «beslutninger» framfor forkortelsen «ADR-er». Når noen team bruker katalognavnet «decisions», er det som om en lyspære tennes, og teamet begynner å legge mer informasjon i katalogen, for eksempel leverandørbeslutninger, planleggingsbeslutninger, tidsplanbeslutninger og så videre. Alle disse typene informasjon kan bruke samme mal. Vi antar at folk lærer raskere med ord («beslutninger») enn med forkortelser («ADR-er»), at folk blir mer motivert til å skrive dokumenter underveis når ordet «logg» fjernes, og at noen utviklere og noen ledere ikke liker ordet «arkitektur».

I teorien er uforanderlighet ideelt. I praksis har foranderlighet fungert bedre for teamene våre. Vi setter inn ny informasjon i den eksisterende ADR-en, med dato og en merknad om at informasjonen kom etter beslutningen. Denne tilnærmingen gir et «levende dokument» som vi alle kan oppdatere. Typiske oppdateringer kommer når vi får informasjon takket være nye teamkolleger eller nye tilbud, eller fra resultater av egen bruk i praksis, eller fra endringer hos tredjeparter i etterkant, for eksempel leverandørers funksjoner, prisplaner, lisensavtaler og så videre.

## Spørsmål om teamarbeid for ADR-er

### Hvem kan lage en ADR?

Tenk på områder som bestemte personer, bestemte roller, bestemte team eller bestemte avdelinger. Vurder også om det finnes personer, roller, team eller avdelinger som kan bestille en ADR, det vil si be om en som noen andre skal skrive. 

Eksempelsvar: Alle i organisasjonen vår som har lest README-siden om arkitekturbeslutningslogger, kan foreslå en ADR, det vil si at personen kan begynne å skrive den og dele den med teamet.

### Hva berettiger å ta opp en ADR?

Tenk på områder som organisasjonens arbeidsmåter i team, strukturen i programvaresystemet, koordinering på tvers av team, langsiktig vedlikeholdbarhet, eksterne grensesnitt, hvem du vil at skal ha nytte av den, og lignende. 

Eksempelsvar: Vi vil lage en ADR når vi vil at framtidige utviklere skal forstå «hvorfor» bak det vi gjør.

### Hva berettiger å la være å ta opp en ADR?

Tenk på områder som beslutninger som ikke handler om arkitektur, eller som er bittesmå, for eksempel med minimal risiko, selvstendige eller begrenset til én utvikler, eller som allerede er fullt dekket andre steder, for eksempel av standarder, retningslinjer eller dokumentasjon, eller som er midlertidige, for eksempel omveier, konseptbevis eller eksperimenter. 

Eksempelsvar: Vi hopper over en ADR når en beslutning er begrenset i omfang, tid, risiko og kostnad, eller allerede er dekket andre steder.

### Hva er livssyklusen til en ADR?

Tenk på områder som opprettingsprosessen, undersøkelsesprosessen, beslutningsprosessen, implementeringsprosessen og avviklingsprosessen. Tenk på hvordan du følger livssyklusen til ADR-en over tid, for eksempel hvordan du flytter ADR-en fra én tilstand til den neste, og hvordan du formidler dette til interessentene. 

Eksempelsvar: Vi vil at en ADR skal ha fem livssyklustrinn: Oppstart → Undersøkelse → Evaluering → Implementering → Vedlikehold → Avvikling.

### Hva er kriteriene for trinnene i livssyklusen til en ADR?

Tenk på områder som akseptkriterier for en ADR, det vil si hvordan du vet at den er god nok til å gå videre fra ett livssyklustrinn til det neste. Er problemet tydelig formulert? Er alternativene vurdert? Er avveiningene godt nok forstått og dokumentert?
Er all relevant kontekst på plass? Er alle relevante interessenter involvert? Er alle tilbakemeldinger innarbeidet? 

Eksempelsvar: Vi vil at interessentene skal stemme over en ADR når det aktive teamet har 1) fullført undersøkelsen, 2) fullført evalueringen, 3) publisert ADR-forslaget til interessentene med en forespørsel om kommentarer og en tidsramme på én uke, og 4) alle kommentarer fra interessentene er innarbeidet og besvart.

### Hvilke roller og ansvar samhandler med en ADR?

Tenk på roller som forslagsstiller, undersøker, evaluator, gjennomgåer, godkjenner, vedlikeholder og lignende. Tenk på ansvar som kommunikasjon med interessenter, å sikre at forventningene oppfylles, deling på nettstedet eller intranettet, og å gjennomgå arbeidet jevnlig, og særlig når relevante endringer skjer.

Eksempelsvar: Vi vil at hver ADR alltid skal ha en primær kontaktperson, en sekundær kontaktperson og et ansvarlig team. De har ansvar for kommunikasjon, publisering, vedlikehold, jevnlig gjennomgang minst én gang i året og eventuell avvikling ved behov.

### Hvordan samhandler styring med en ADR?

Tenk på områder som organisasjonens arbeidsmåter, eventuelle spesielle behov for etterlevelse, for eksempel av juridiske eller personalmessige forhold, og hvordan du vil håndtere konsensus versus konflikt versus eskalering. Finnes det områder, personer eller team som kan ha mer innflytelse enn andre når det gjelder en ADR, for eksempel ved at de kan godkjenne den, stemme over den eller nedlegge veto mot den?

Eksempelsvar: Styringen av en ADR følger denne prioriteringsrekkefølgen: administrerende direktør (CEO), teknisk direktør (CTO), juridisk direktør (CLO), teamet som implementerer en ADR og ekspertene på teamet som kan mest om AD-en. Ingen andre har styring, med mindre det er beskrevet i ADR-en. 

### Hvilke prinsipper samhandler med en ADR?

Tenk på områder som organisasjonens arbeidsmåter, blant annet å bevege seg raskt versus langsomt, for beslutningskonsensus versus beslutningskonflikt, for risikopreferanser versus sikkerhetspreferanser, offentlig diskusjon versus privat diskusjon og lignende.

Eksempelsvar: Vi bruker lederprinsippene handlingsorientering, uenig-og-forplikt (disagree-and-commit), 70 % sikre anslag er gode nok for beslutninger som lett kan omgjøres og lett kan isoleres, og åpne arbeidsmåter med unntak av konfidensiell informasjon som beskrevet i organisasjonens taushetsavtale.

## Konsepter for neste steg for ADR-er

[Arc42](https://arc42.org/) svarer på to spørsmål på en pragmatisk måte og kan tilpasses dine behov. Hva bør du dokumentere/formidle om arkitekturen din? Hvordan bør du dokumentere/formidle? Arc42 omfatter arkitekturbeslutningslogger pluss veiledning om mål, begrensninger, kontekster, kvalitet, risikoer og mer.

[C4-modellen](https://c4model.com/) er en lettlært, utviklervennlig tilnærming til diagrammer for programvarearkitektur. C4 er et sett med hierarkiske diagrammer for kontekst, containere, komponenter og kode, pluss støttediagrammer for systemlandskap, dynamikk og distribusjon.

## Arkitekturdiagrammer, visninger og synspunkter

Et arkitekturdiagram kalles en «arkitekturvisning».

En «arkitekturvisning» er en instans av et «arkitektursynspunkt».

Et «arkitektursynspunkt» har en bestemt målgruppe med bestemte hensyn i tankene.

Eksempler på arkitektursynspunkter, visninger og diagrammer:

- Forretningsevner

- Overordnede forretningsprosesser

- [Verdistrømmer](https://en.wikipedia.org/wiki/Value_stream)

- Programvarefunksjoner koblet til applikasjonskomponenter

- Kontekstdiagram i [C4-modellen](https://en.wikipedia.org/wiki/C4_model) (TO-BE / AS-IS)

- Containerdiagram i [C4-modellen](https://en.wikipedia.org/wiki/C4_model) (TO-BE / AS-IS)

- [Entitetsrelasjonsdiagram](https://en.wikipedia.org/w/index.php?title=Entity_relationship_diagram) (ERD) for å koble dataentiteter til applikasjonskomponenter

- [Sekvensdiagrammer](https://en.wikipedia.org/wiki/Sequence_diagram) for å beskrive funksjonelle flyter innenfor systemer og for integrasjoner

- Diagrammer i [Business Process Model and Notation](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN) for å beskrive dataflyter på tvers av applikasjonskomponenter

- Diagrammer i [Business Process Model and Notation](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN) for å beskrive forretningsprosesser / brukerscenarioer

- Diagrammer for [identitets- og tilgangsstyring](https://en.wikipedia.org/wiki/Identity_and_access_management) (IAM)

- Diagrammer for [rollebasert tilgangskontroll](https://en.wikipedia.org/wiki/Role-based_access_control) (RBAC) med roller per applikasjonskomponent

- Diagrammer for [attributtbasert tilgangskontroll](https://en.wikipedia.org/wiki/Attribute-based_access_control) (ABAC) med attributter per applikasjonskomponent

- Personverndiagrammer

Beslektede diagrammer:

- Et bruksområdediagram (use case-diagram) viser bruksområder til ledelsen/kundene, som kommer før kravene, som kommer før programvarearkitekturen.

- Et distribusjonsdiagram viser den fysiske maskinvaren/datamaskinene som programvarekomponentene distribueres til.
- Et dataflytdiagram viser hvordan data beveger seg gjennom systemet og transformeres.
- Et sekvensdiagram brukes til å vise hvordan protokoller som HTTP fungerer på en tidsakse.

- Et aktivitetsdiagram viser arbeidsflyten av aktiviteter et programvaresystem utfører, som en NPC-KI.

## Egnethetsfunksjoner for beslutninger som kode

Egnethetsfunksjoner (fitness functions) er objektive, automatiserte kontroller, skrevet med programmeringskode, som verifiserer at beslutninger blir fulgt.

- Egnethetsfunksjoner gjør beslutninger testbare og sikrer at de holdes.

- Egnethetsfunksjoner for beslutninger kan hjelpe mye på kvalitetssikring, regulatoriske prosesser og styringsmål.

### Hvordan egnethetsfunksjoner henger sammen med beslutninger

En beslutningslogg dokumenterer beslutningen, mens en egnethetsfunksjon sikrer beslutningen.

- Eksempel på beslutning: Vi bruker event sourcing for å oppfylle revisjonskrav.

- Eksempel på egnethetsfunksjon: Vi bruker serveren for kontinuerlig integrasjon til å teste at alle tilstandsendringer må gi hendelser.

### Hvorfor egnethetsfunksjoner hjelper beslutninger

Objektive målinger: Egnethetsfunksjoner består eller feiler, så arbeidet blir synlig og tydelig.

Kontinuerlig bruk: Egnethetsfunksjoner er de levende reglene dine, og kjøres ved hver commit og hvert bygg.

Trygghet til å refaktorere: Egnethetsfunksjoner fanger automatisk opp feil mot beslutningsreglene.

Skalerbar styring: Egnethetsfunksjoner sikrer standarder uten å skape flaskehalser.

### Kan egnethetsfunksjoner bruke KI?

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

### Enhetstesting av arkitektur

[ArchUnit](https://www.archunit.org/): sjekk arkitekturregler i Java-kode med et vanlig rammeverk for Java-enhetstester.

[ArchUnitTS](https://github.com/LukasNiessen/ArchUnitTS): sjekk arkitekturregler i TypeScript-kode og JavaScript-kode med Jest, Vitest, Jasmine og lignende.

## Beslutningsrekkverk for pull requests

[Decision Guardian](https://github.com/DecispherHQ/decision-guardian)
viser automatisk de riktige beslutningsloggene i det riktige øyeblikket – når en
utvikler aktivt endrer koden som disse beslutningene dekker. I stedet for å
håpe at utviklere leser en dokumentmappe før de slår sammen, vises den relevante
konteksten direkte på pull requesten.

Dette fungerer for alle typer beslutningslogger: arkitekturbeslutninger, databeslutninger,
etterlevelsesbeslutninger, kliniske og medisinske beslutninger, sikkerhetsbeslutninger
og mer.

Fungerer med alle CI-systemer (GitLab, Jenkins, CircleCI) og som pre-commit-hook.
Åpen kildekode. MIT-lisens.

[ADR Guard](https://github.com/chohan-sarmad-ali/delivery-gates) er en GitHub
Action som får en pull request til å feile når overvåkede kodestier endres uten at
en arkitekturbeslutningslogg er lagt til eller oppdatert. Unntak er eksplisitte: en
linje med `ADR-Exempt:` og en begrunnelse slipper gjennom kontrollen og skrives inn i sammendraget
for jobben. Malnøytral, ingen avhengigheter. Åpen kildekode. MIT-lisens.

## Mer informasjon

Introduksjon:

- [Architectural decision (wikipedia.org)](https://wikipedia.org/wiki/Architectural_decision)

- [Architecturally significant requirements (wikipedia.org)](https://wikipedia.org/wiki/Architecturally_significant_requirements)

Maler:

- [Documenting architecture decisions - Michael Nygard (thinkrelevance.com)](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)

- [Markdown Architectural Decision Records (adr.github.io)](https://adr.github.io/madr/)

- [Template for documenting architecture alternatives and decisions (stackoverflow.com)](http://stackoverflow.com/questions/7104735/template-for-documenting-architecture-alternatives-and-decisions)

Fordypning:

- [ADMentor XML project (github.com)](https://github.com/IFS-HSR/ADMentor)

- [Architectural Decision Guidance across Projects: Problem Space Modeling, Decision Backlog Management and Cloud Computing Knowledge (ifs.hsr.ch)](https://www.ifs.hsr.ch/fileadmin/user_upload/customers/ifs.hsr.ch/Home/projekte/ADMentor-WICSA2015ubmissionv11nc.pdf)

- [The Decision View's Role in Software Architecture Practice (computer.org)](https://www.computer.org/csdl/mags/so/2009/02/mso2009020036-abs.html)

- [Documenting Software Architectures: Views and Beyond (resources.sei.cmu.edu)](http://resources.sei.cmu.edu/library/asset-view.cfm?assetID=30386)

- [Architecture Decisions: Demystifying Architecture (utdallas.edu)](https://www.utdallas.edu/~chung/SA/zz-Impreso-architecture_decisions-tyree-05.pdf)

- [ThoughtWorks Technology Radar: Lightweight Architecture Decision Records (thoughtworks.com)](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)

- [A Skeptic’s Guide to Software Architecture Decisions (infoq.com)](https://www.infoq.com/articles/architecture-skeptics-guide/)

- [Architectural Decisions — The Making Of](https://ozimmer.ch/practices/2020/04/27/ArchitectureDecisionMaking.html)

- [Architectural Retrospectives: the Key to Getting Better at Architecting](https://www.infoq.com/articles/architectural-retrospectives/)

- [Software Architecture Monday with Mark Richards](https://developertoarchitect.com/lessons/) - gratis månedlig leksjon i programvarearkitektur

- [Solution Architecture Decisions - By Gareth Morgan](https://www.linkedin.com/pulse/solution-architecture-decisions-gareth-morgan-0r5xe/)

- ["Keep the Why: Code Becomes Legacy When Nobody Remembers Why"](https://blog.technopathy.club/keep-the-why-code-becomes-legacy-when-nobody-remembers-why)

Verktøy:

- [Command-line tools for working with Architecture Decision Records](https://github.com/npryce/adr-tools)

- [Command line tools with python - by Victor Sluiter](https://bitbucket.org/tinkerer_/adr-tools-python/src/master/)

- [Architectural Design Decision Support Framework (ADvISE)](https://swa.univie.ac.at/Software_Architecture/research-projects/architectural-design-decision-support-framework-advise/)

- [Decision Guardian](https://github.com/DecispherHQ/decision-guardian)

- [Mneme HQ - ADR enforcement for AI coding agents](https://github.com/TheoV823/mneme)

- [Keep the Why - a repo-native convention and agent skill that continuously captures, or retrospectively recovers, the reasoning behind a codebase](https://github.com/oliver-zehentleitner/keep-the-why)

- [ADR Guard - GitHub Action that fails a pull request changing watched code without an architecture decision record](https://github.com/chohan-sarmad-ali/delivery-gates)

- [kgai - append-only decision log for AI coding agents, a machine-readable companion to ADR files](https://github.com/kgaidev/kgai)

Bedriftsspesifikk veiledning:

- [Amazon: AWS Prescriptive Guidance: ADR Process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)

- [GitHub: ADR GitHub organization](https://adr.github.io/)

- [RedHat: Why you should use ADRs](https://www.redhat.com/architect/architecture-decision-records)

Eksempler:

- [Repository of Architecture Decision Records made for the Arachne Framework](https://github.com/arachne-framework/architecture)

Videoer:

- [An introduction to arc42 with Savvas Kleanthous](https://www.youtube.com/watch?v=V5clR8c6D7o)

- [The C4 model for visualising software architecture - by Simon Brown](https://www.youtube.com/watch?v=KvoBrUd1-5E)

Podkaster:

- [Software Architecture Bookclub Podcast](https://www.developertoarchitect.com/bookclub-podcast.html)

Bøker:

- [Software Architecture Metrics: Case Studies to Improve the Quality of Your Architecture - by Christian Ciceri, Dave Farley, Neal Ford, Andrew Harmel-Law, Michael Keeling and Carola Lilienthal](https://www.amazon.com/Software-Architecture-Metrics-Christian-Ciceri-ebook/dp/B0B1NZ8Z5V)

- [Software Systems Architecture: Working With Stakeholders Using Viewpoints and Perspectives - by Nick Rozanski and Eoin Woods](https://www.amazon.com/Software-Systems-Architecture-Stakeholders-Perspectives/dp/032171833X)

- [Software Architecture in Practice (SEI Series in Software Engineering)](https://www.amazon.com/Software-Architecture-Practice-SEI-Engineering-ebook/dp/B094CPJ96B)

- [Documenting Software Architectures: Views and Beyond (SEI Series in Software Engineering)](https://www.amazon.com/Documenting-Software-Architectures-Beyond-Engineering-ebook/dp/B0046XS3RO)

- [The Software Architect Elevator: Redefining the Architect's Role in the Digital Enterprise](https://www.amazon.com/Software-Architect-Elevator-Redefining-Architects-ebook/dp/B086WQ9XL1)

- [Fundamentals of Software Architecture: An Engineering Approach - by Mark Richards and Neal Ford](https://www.amazon.com/Fundamentals-Software-Architecture-Engineering-Approach-ebook/dp/B0849MPK73)

- [Building Evolutionary Architectures - by Neal Ford, Rebecca Parsons, Patrick Kua, Pramod Sadalage](https://www.amazon.com/Building-Evolutionary-Architectures-Neal-Ford-ebook/dp/B0BN4T1P27?crid=37FA31IFLAS0Z)

- [Foundations of Decision Analysis by Ronald Howard and Ali Abbas](https://www.amazon.com/Foundations-Decision-Analysis-Ronald-Howard-ebook/dp/B00SZECJTI?crid=14BK5SDP76UN6)

- [Head First Software Architecture - by Raju Gandhi, Neal Ford and Mark Richards](https://www.amazon.com/Head-First-Software-Architecture-Architectural-ebook/dp/B0CW1JMNF2)

- [Communication Patterns: A Guide for Developers and Architects - by Jacqui Read](https://www.amazon.com/Communication-Patterns-Guide-Developers-Architects/dp/1098140540)

Se også:

- REMAP (Representation and Maintenance of Process Knowledge)

- DRL (Decision Representation Language)

- IBIS (Issue-Based Information System)

- QOC (Questions, Options, and Criteria)

- IBM’s e-Business Reference Architecture Framework

- [Decision Reasoning Format (DRF)](https://github.com/reasoning-formats/reasoning-formats) - Et leverandørnøytralt, maskinlesbart YAML/JSON-format for å representere beslutninger med eksplisitt resonnement, forutsetninger, kognitiv tilstand og avveininger. Utfyller ADR-er ved å legge til strukturert, validerbart resonnement i dokumentasjonen av beslutninger.
