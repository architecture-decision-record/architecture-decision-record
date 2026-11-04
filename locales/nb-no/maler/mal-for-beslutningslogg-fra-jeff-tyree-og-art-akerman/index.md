# Mal for beslutningslogg fra Jeff Tyree og Art Akerman

Dette er malen for beskrivelse av arkitekturbeslutninger som er publisert i ["Architecture Decisions: Demystifying Architecture" av Jeff Tyree og Art Akerman, Capital One Financial](https://www.utdallas.edu/~chung/SA/zz-Impreso-architecture_decisions-tyree-05.pdf).

* **Problem** (Issue): Beskriv arkitekturproblemet du tar for deg, slik at det ikke er noen spørsmål om hvorfor du tar tak i det nå. Følg en minimalistisk tilnærming, og ta bare for deg og dokumenter problemene som må løses på ulike punkter i livssyklusen.

* **Beslutning** (Decision): Angi tydelig arkitekturens retning, det vil si standpunktet du har valgt.

* **Status**: Beslutningens status, for eksempel ventende, besluttet eller godkjent.

* **Gruppe** (Group): Du kan bruke en enkel gruppering, for eksempel integrasjon, presentasjon, data og så videre, for å organisere settet av beslutninger. Du kan også bruke en mer avansert arkitekturontologi, for eksempel den til John Kyaruzi og Jan van Katwijk, som har mer abstrakte kategorier som hendelse, kalender og sted. Med denne ontologien grupperer du for eksempel beslutninger som handler om forekomster der systemet trenger informasjon, under hendelse.

* **Forutsetninger** (Assumptions): Beskriv tydelig de underliggende forutsetningene i omgivelsene der du tar beslutningen – kostnad, tidsplan, teknologi og så videre. Merk at begrensninger i omgivelsene (som godkjente teknologistandarder, virksomhetsarkitektur, ofte brukte mønstre og så videre) kan begrense alternativene du vurderer.

* **Begrensninger** (Constraints): Fang opp eventuelle ytterligere begrensninger for omgivelsene som det valgte alternativet (beslutningen) kan medføre.

* **Standpunkter** (Positions): List opp standpunktene (gjennomførbare alternativer) du vurderte. Disse krever ofte lange forklaringer, noen ganger til og med modeller og diagrammer. Dette er ikke en uttømmende liste. Du vil likevel ikke høre spørsmålet «Tenkte du på …?» under en sluttgjennomgang. Det fører til tap av troverdighet og at andre arkitekturbeslutninger blir trukket i tvil. Denne delen bidrar også til å sikre at du har hørt andres meninger, og når andre meninger angis eksplisitt, hjelper det å vinne talspersonene deres for beslutningen din.

* **Argument**: Skisser hvorfor du valgte et standpunkt, med punkter som implementeringskostnad, totale eierkostnader, tid til markedet og tilgjengeligheten av nødvendige utviklingsressurser. Dette er sannsynligvis like viktig som selve beslutningen.

* **Implikasjoner** (Implications): En beslutning har mange implikasjoner, slik REMAP-metamodellen viser. En beslutning kan for eksempel skape behov for å ta andre beslutninger, lage nye krav eller endre eksisterende krav, medføre ytterligere begrensninger for omgivelsene, kreve ny forhandling om omfang eller tidsplan med kundene, eller kreve ekstra opplæring av ansatte. Å forstå og angi implikasjonene av beslutningen tydelig kan være svært effektivt for å vinne oppslutning og lage et veikart for gjennomføringen av arkitekturen.

* **Relaterte beslutninger**: Det er åpenbart at mange beslutninger henger sammen, og du kan liste dem opp her. Vi har imidlertid funnet ut at i praksis er en sporbarhetsmatrise, beslutningstrær eller metamodeller mer nyttige. Metamodeller er nyttige for å vise komplekse sammenhenger diagrammatisk (for eksempel Rose-modeller).

* **Relaterte krav**: Beslutninger bør være forretningsdrevne. For å vise ansvarlighet bør du koble beslutningene eksplisitt til målene eller kravene. Du kan liste opp disse relaterte kravene her, men vi har funnet det mer praktisk å vise til en sporbarhetsmatrise. Du kan vurdere hver arkitekturbeslutnings bidrag til å oppfylle hvert krav, og deretter vurdere hvor godt kravet oppfylles på tvers av alle beslutninger. Hvis en beslutning ikke bidrar til å oppfylle et krav, bør du ikke ta den beslutningen.

* **Relaterte artefakter**: List opp de relaterte arkitektur-, design- eller omfangsdokumentene som denne beslutningen påvirker.

* **Relaterte prinsipper**: Hvis virksomheten har et vedtatt sett av prinsipper, må du sørge for at beslutningen stemmer med ett eller flere av dem. Det bidrar til å sikre samsvar på tvers av domener eller systemer.

* **Merknader** (Notes): Fordi beslutningsprosessen kan ta uker, har vi funnet det nyttig å fange opp merknader og problemer som teamet diskuterer under forankringsprosessen.
