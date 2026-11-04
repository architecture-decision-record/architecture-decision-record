## Arkitekturbeslutningslogg: rammeverk for nettleserautomatisering ved E2E-testing (Playwright eller Selenium)

### 1. **Kontekst**

Vi er i ferd med å velge et rammeverk for nettleserautomatisering til vår ende-til-ende-testlinje (E2E). Dette rammeverket blir sentralt i CI/CD-prosessene våre, der det kjører tester som simulerer reelle brukerinteraksjoner på plattformen vår. Testene skal spesielt dekke scenarioer som registrering og pålogging av brukere, filopplastinger, interaksjoner i dashbord og nedlasting av rapporter.

Som en **oppstartsbedrift** er fokuset vårt på **smidig utvikling**, med behov for å iterere og utvikle oss raskt. Teamet vårt jobber hovedsakelig med **TypeScript** og **Python**, og det er avgjørende å kunne skrive tester i disse språkene. Plattformen har dessuten **interaktive diagrammer og dashbord**, noe som gjør det kritisk at automatiseringsverktøyet støtter rike, dynamiske brukergrensesnitt godt.

De to kandidatene til oppgaven er **Playwright** og **Selenium**, som begge har sine styrker og avveininger. Vi må evaluere disse rammeverkene ut fra funksjonene og kravene som er beskrevet nedenfor.

### 2. **Vurderte alternativer**

- **Playwright** (fra Microsoft)
- **Selenium** (fra Selenium-prosjektet)

### 3. **Beslutningsdrivere**

Faktorene som påvirker beslutningen vår, er følgende:

1. **Smidig utvikling**: Det valgte verktøyet må gi raske og fleksible utviklingssykluser.
2. **Språkstøtte**: Teamet vårt trenger støtte for både **TypeScript** og **Python**.
3. **Testing av interaktive brukergrensesnitt**: Det er avgjørende å kunne teste interaktive diagrammer, dashbord og dynamiske elementer pålitelig.
4. **Kjørehastighet**: Selv om det ikke er hovedhensynet, er ytelsen i CI/CD-leveranselinjer noe vi tar hensyn til.
5. **Skalerbarhet**: Vi planlegger ikke massiv skalering i nærmeste framtid, men vil sikre at løsningen kan håndtere framtidig vekst.
6. **Bakoverkompatibilitet**: Eldre systemer og kompatibilitet med eldre nettlesere er ikke kritisk for prosjektet vårt på dette tidspunktet.
7. **Mobiltesting**: Selv om det ikke er et umiddelbart fokus, bør rammeverket kunne teste mobilresponsive funksjoner eller kunne utvides for slike bruksområder.
8. **Testing med flere skjermer**: Støtte for konfigurasjoner med flere skjermer er et sekundært krav, særlig hvis vi noen gang skalerer til testing av mer komplekse brukerarbeidsflyter.
9. **Testing av filopplasting**: Rammeverket må håndtere filopplastinger effektivt, et kjernekrav i testbehovene våre.

### 4. **Evalueringskriterier**

- **Brukervennlighet**: Hvor enkelt er det å skrive og vedlikeholde tester?
- **Språkstøtte**: Støtter rammeverket TypeScript og Python, de to språkene teamet vårt bruker oftest?
- **Testing av interaktive brukergrensesnitt**: Hvor godt håndterer rammeverket komplekse, interaktive brukergrensesnitt som diagrammer, filopplastinger og dynamiske data?
- **CI/CD-integrasjon**: Hvor godt integreres rammeverket i vanlige CI/CD-verktøy og -tjenester?
- **Støtte for flere nettlesere**: Hvilke nettlesere støttes, og hvor godt fungerer de?
- **Ytelse og hastighet**: Hvor raskt kjører testene, særlig i en CI/CD-leveranselinje?
- **Skalerbarhet**: Hvor godt kan rammeverket skalere hvis det legges til flere tester eller mer komplekse scenarioer?
- **Miljø og økosystem**: Hvor aktivt er miljøet rundt rammeverket? Finnes det mange integrasjoner og utvidelser?

### 5. **Vurderinger**

#### 5.1 **Playwright**

##### **Fordeler**:
1. **Smartere API for opplasting av lokale filer**: Playwrights API for å samhandle med lokale filer og utføre filopplastinger er enklere og mer intuitivt. Det gjør testing av filopplasting enklere å implementere og vedlikeholde.
2. **Syntaks og kodegenerering**: Playwright har en kortere og mer konsis syntaks. Det gir mindre standardkode, noe som forbedrer vedlikeholdbarheten og utviklernes effektivitet. Den kortere syntaksen forbedrer også kvaliteten på kodegenerering med OpenAI, noe som gjør det enklere å generere testskript automatisk.
3. **Testing av interaktive brukergrensesnitt**: Playwright er best på å teste dynamiske, interaktive webapplikasjoner, for eksempel med rike diagrammer, komplekse brukerinteraksjoner og sanntidsoppdateringer. Det håndterer WebSockets, WebRTC, shadow DOM og andre moderne nettteknologier svært effektivt.
4. **Støtte for flere nettlesere**: Playwright støtter **Chromium**, **WebKit** og **Firefox**. Det har jevn ytelse i disse nettleserne, noe som bør dekke de fleste testbehovene våre.
5. **CI/CD-integrasjon**: Playwright integreres sømløst med moderne CI/CD-plattformer (GitHub Actions, Jenkins og så videre). Det kan kjøre tester parallelt i ulike nettlesere, noe som optimaliserer kjøretidene for testene og gjør det egnet for rask utvikling.
6. **Raskt og pålitelig**: Playwright er generelt raskere enn Selenium, særlig i headless-modus, og mer robust i møte med asynkrone nettelementer.

##### **Ulemper**:
1. **Begrenset mobiltesting**: Selv om Playwright støtter mobilemulering for nettlesere, mangler det innebygde muligheter for mobiltesting slik Selenium har med integrasjonen med Appium for ekte mobiltesting.
2. **Mindre økosystem**: Playwright er fortsatt nyere og mindre etablert enn Selenium. Selv om det har et raskt voksende miljø og god dokumentasjon, har det kanskje ennå ikke det enorme økosystemet av programtillegg og integrasjoner som Selenium har.
3. **Begrenset nettleserstøtte**: Selv om Playwright dekker de store moderne nettleserne (Chrome, Safari, Firefox), er støtten for eldre nettlesere (for eksempel Internet Explorer) ikke like robust som i Selenium.

#### 5.2 **Selenium**

##### **Fordeler**:
1. **Lengre historie og modenhet**: Selenium har eksistert lenge og har en dokumentert merittliste. Det brukes bredt i mange team og bransjer, noe som har gitt et enormt økosystem av programtillegg, integrasjoner og ressurser.
2. **Støtte for flere nettlesere og plattformer**: Selenium støtter et **bredt utvalg av nettlesere** og versjoner, blant annet **Internet Explorer**, og kan også integreres med ulike verktøy som **Docker**, **Selenium Grid** og **skytjenester** for distribuert testing.
3. **Mobiltesting**: Selenium er, gjennom integrasjonen med **Appium**, mye mer robust for mobiltesting, både for Android- og iOS-applikasjoner. Det gjør det til det bedre valget for prosjekter med mobil som førsteprioritet eller mye mobilfokus.
4. **Testing med flere skjermer**: Selenium gir bedre støtte for scenarioer med **flere skjermer** eller komplekse interaksjoner med flere vinduer.

##### **Ulemper**:
1. **Kompleksitet**: Seleniums API er mer ordrikt og eksplisitt. Selv om dette kan være en fordel i noen tilfeller, betyr det mer kode å skrive og vedlikeholde, noe som kan redusere utviklernes smidighet – særlig viktig i en oppstartsbedrift.
2. **Ytelse**: Selenium kjører generelt tregere enn Playwright, særlig i headless-modus. Det kan påvirke CI/CD-leveranselinjer, spesielt når antallet tester vokser.
3. **Testing av interaktive brukergrensesnitt**: Selenium er ikke like smidig som Playwright når det gjelder å teste moderne, interaktive nettgrensesnitt, særlig med diagrammer og sanntidsoppdateringer av data. Det krever mer oppsett og håndtering for å samhandle pålitelig med dynamisk innhold.

### 6. **Sammenligning i sammendrag**

| Funksjon                          | Playwright                                    | Selenium                                   |
|-----------------------------------|-----------------------------------------------|-------------------------------------------|
| **Brukervennlighet**              | Kortere syntaks, mer intuitivt for moderne brukergrensesnitt | Mer eksplisitt, krever mer standardkode  |
| **Språkstøtte**                   | TypeScript, Python, JavaScript                | TypeScript, Python, Java, Ruby, C#        |
| **Testing av interaktive brukergrensesnitt** | Utmerket for dynamiske brukergrensesnitt i sanntid | Håndterer enkle brukergrensesnitt, men mer ordrikt og komplekst for rike interaksjoner |
| **Testing av filopplasting**      | Smartere API for filopplastinger              | Mer ordrikt, mindre intuitivt API         |
| **CI/CD-integrasjon**             | Enkel integrasjon med GitHub Actions, Jenkins | Sterk integrasjon med mange CI-verktøy    |
| **Mobiltesting**                  | Begrenset, kun emulering                      | Full støtte via Appium                    |
| **Støtte for flere nettlesere**   | Chromium, WebKit, Firefox                     | Full støtte for både store og eldre nettlesere |
| **Ytelse**                        | Raskt, optimalisert for headless-testing      | Tregere, særlig i headless-modus          |
| **Testing med flere skjermer**    | Begrenset                                     | God støtte for oppsett med flere skjermer |
| **Miljø og økosystem**            | Voksende, god dokumentasjon                   | Stort, modent, omfattende økosystem       |

### 7. **Beslutning**

Etter å ha vurdert kravene og avveiningene er **Playwright** det beste valget for våre nåværende behov. Det smartere API-et for testing av opplasting av lokale filer, den konsise syntaksen og den sterke støtten for testing av interaktive brukergrensesnitt gjør det til et ideelt valg for vår smidige utviklingssyklus. At det støtter både **TypeScript** og **Python** er avgjørende for teamet vårt, og rammeverkets moderne tilnærming til testing lar oss skrive ren og vedlikeholdbar kode.

Selv om **Selenium** fortsatt er et flott verktøy, særlig for mobiltesting, støtte for eldre nettlesere og oppsett med flere skjermer, passer det dårligere til våre nåværende behov. Ordrikheten, den tregere ytelsen og den mer komplekse håndteringen av dynamiske brukergrensesnitt som diagrammer gjør det mindre optimalt for vårt bruksområde.

### 8. **Konsekvenser**

- **Umiddelbar handling**: Vi tar i bruk **Playwright** til E2E-testingen vår, med fokus på å teste brukerflyter som innebærer registrering, pålogging, filopplastinger, dashbord og nedlasting av rapporter.
- **Langsiktige hensyn**: Vi følger med på utviklingen av økosystemet rundt Playwright. Hvis behovene våre endrer seg, særlig rundt mobiltesting eller støtte for eldre nettlesere, kan vi vurdere Selenium på nytt.
- **Opplæring og dokumentasjon**: Utviklingsteamene må bli kjent med Playwrights API, særlig for håndtering av dynamiske brukergrensesnitt og filopplastinger.
- **Migrering**: Eksisterende Selenium-tester (hvis noen) migreres gradvis til Playwright.

### 9. **Framtidige hensyn**


