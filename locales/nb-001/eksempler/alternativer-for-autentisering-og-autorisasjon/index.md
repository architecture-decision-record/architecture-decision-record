# Arkitekturbeslutningslogg: alternativer for autentisering og autorisasjon

<!--

ChatGPT prompt:

Explain web application authentication authorization. 

Describe:  OAuth, OpenID Connect, SAML, WS-Federation, LDAP, Social SSO Providers.

-->

Autentisering og autorisasjon i webapplikasjoner er to avgjørende begreper for å sikre tilgangen til applikasjoner og tjenester. Begge handler om brukeres identitet og hvordan tillatelser gis, men de fokuserer på ulike sider:

- **Autentisering** er prosessen med å verifisere identiteten til en bruker eller et system.
- **Autorisasjon** er prosessen med å avgjøre hvilke ressurser eller handlinger den autentiserte brukeren eller systemet har tilgang til.

La oss nå gå nærmere inn på de bestemte protokollene og teknologiene du har nevnt, som ofte brukes i moderne webapplikasjoner for å håndtere autentisering og autorisasjon.

### 1. **OAuth (Open Authorization)**

**OAuth** er en åpen standard for autorisasjon. Den lar en bruker gi en tredjepartsapplikasjon begrenset tilgang til ressursene sine uten å dele påloggingsopplysningene sine. Nøkkelideen er **delegert tilgang**. OAuth brukes ofte i situasjoner der brukere kan logge inn på en tredjepartstjeneste (for eksempel ved å logge inn med Google) uten å oppgi brukernavn og passord direkte til tredjeparten.

- **Flyt**: OAuth følger vanligvis en **tokenbasert** flyt, der en autorisasjonsserver utsteder et tilgangstoken til tredjepartsapplikasjonen. Dette tokenet representerer brukerens tillatelser, og applikasjonen bruker det til å hente brukerens data eller ressurser fra et API.
- **Eksempel**: En bruker logger inn på en tredjepartsapp med Google-kontoen sin. Google verifiserer brukerens identitet og gir deretter et token som lar tredjepartsappen få tilgang til noen Google-data (for eksempel Google Kalender).

OAuth **håndterer ikke** autentisering direkte; det handler om å gi tilgang. For autentisering kombineres OAuth ofte med andre protokoller, som **OpenID Connect**.

### 2. **OpenID Connect (OIDC)**

**OpenID Connect (OIDC)** er et identitetslag bygget oppå **OAuth 2.0** som legger autentisering til OAuths muligheter for autorisasjon. OpenID Connect utvider i bunn og grunn OAuth til å håndtere **autentisering av brukere** og gir en standardisert måte for applikasjoner å verifisere identiteten til en bruker.

- **Flyt**: Når en bruker logger inn med OpenID Connect, ber tredjepartsapplikasjonen om et ID-token (i tillegg til OAuth-tilgangstokenet). ID-tokenet inneholder informasjon om brukeren (som brukernavn, e-post og andre påstander, såkalte claims). Dette lar applikasjonen vite hvem brukeren er og om vedkommende er autentisert.
- **Eksempel**: Å logge inn på en tjeneste som Slack med Google-kontoen din (der Google er OpenID Connect-leverandøren) innebærer autentisering via OpenID Connect, mens OAuth håndterer tilgangen til Google-ressursene dine.

OIDC gjør det enklere for tredjepartsapper å **autentisere brukere** og gir samtidig finkornet kontroll over hvilke ressurser disse appene kan få tilgang til.

### 3. **SAML (Security Assertion Markup Language)**

**SAML** er en eldre, XML-basert standard som brukes til å utveksle data om autentisering og autorisasjon mellom parter, særlig i scenarioer med **enkel pålogging (Single Sign-On, SSO)**. Den brukes hovedsakelig i bedriftsmiljøer for å la brukere autentisere seg én gang og få tilgang til flere applikasjoner uten å oppgi påloggingsopplysningene på nytt.

- **Flyt**: Brukeren autentiserer seg først hos en identitetsleverandør (IdP). IdP-en genererer en signert **SAML-påstand (assertion)** som inneholder brukerens identitet og tilhørende attributter. Påstanden sendes til tjenesteleverandøren (SP), som bruker den til å gi tilgang til applikasjonen.
- **Eksempel**: En ansatt logger inn på bedriftsportalen sin (IdP-en) og blir automatisk logget inn i andre systemer som e-post, CRM og så videre, uten å oppgi påloggingsopplysningene på nytt. Autentiseringsprosessen bygger på SAML-påstanden som IdP-en sender.

SAML brukes ofte i **SSO-løsninger for bedrifter** og fungerer godt for webapplikasjoner i bedriftsmiljøer, men er mindre mobilvennlig enn OAuth/OIDC.

### 4. **WS-Federation (Web Services Federation)**

**WS-Federation** er en annen protokoll som brukes til **enkel pålogging (SSO)**, særlig i bedriftsmiljøer basert på Microsoft. Den er en del av familien av spesifikasjoner **WS-* (Web Services)** og gjør det mulig å føderere identiteter på tvers av ulike sikkerhetsdomener (for eksempel mellom ulike organisasjoner eller mellom ulike tjenester).

- **Flyt**: WS-Federation lar en **pålitelig identitetsleverandør (IdP)** autentisere brukere og utstede tokener som tjenesteleverandøren kan bruke til autorisasjon. Den ligner på SAML, men brukes ofte i scenarioer som i stor grad bygger på Microsoft-teknologi.
- **Eksempel**: En bruker logger inn på en bedriftsapplikasjon som hostes av Microsoft Azure Active Directory (AD), og identiteten kan brukes til å få tilgang til andre føderte tjenester, blant annet applikasjoner som hostes av tredjepartsleverandører.

Selv om WS-Federation i stor grad er erstattet av nyere protokoller som OAuth2.0 og OpenID Connect i mange moderne nettmiljøer, brukes den fortsatt i eldre systemer, særlig i virksomheter med Microsoft i sentrum.

### 5. **LDAP (Lightweight Directory Access Protocol)**

**LDAP** er en protokoll som brukes til å få tilgang til og håndtere katalogtjenester, ofte brukt til å **lagre brukeres påloggingsopplysninger** og styre tilgang i en sentralisert katalog (ofte kalt en **katalogtjeneste**). LDAP handler ikke spesifikt om autentisering eller autorisasjon, men brukes til å lagre og hente identitetsdata, som deretter brukes i disse prosessene.

- **Autentisering**: LDAP lar en applikasjon autentisere brukere ved å spørre katalogtjenesten om påloggingsopplysninger (som passord).
- **Autorisasjon**: Den håndterer også brukerroller og tillatelser og hjelper til med å avgjøre om en bruker har tilgang til bestemte ressurser.
- **Eksempel**: Mange virksomheter bruker LDAP-baserte kataloger (for eksempel **Active Directory**) til autentisering og autorisasjon, særlig i Windows-miljøer.

LDAP er avgjørende for at virksomheter skal kunne håndtere brukertilgang på tvers av interne systemer, men i en moderne nettkontekst integreres LDAP ofte med andre protokoller som SAML eller OAuth for mer komplett identitetshåndtering.

### 6. **Leverandører av sosial SSO**

Leverandører av sosial **enkel pålogging (SSO)**, som **Facebook**, **Google**, **Twitter**, **GitHub** og andre, lar brukere autentisere seg i tredjepartsapplikasjoner med påloggingsopplysningene sine fra sosiale medier. Dette er en type **OAuth-basert autentisering** der tredjepartstjenesten (for eksempel Google) er identitetsleverandøren.

- **Flyt**: Brukeren klikker «Logg inn med Google» (for eksempel). Appen sender brukeren videre til Google, der brukeren logger inn (hvis vedkommende ikke allerede er logget inn). Google gir deretter et tilgangstoken eller ID-token til tredjepartsappen, som kan brukes til å autentisere brukeren og eventuelt få tilgang til dataene vedkommende har.
- **Eksempel**: Mange applikasjoner lar deg logge inn med Google- eller Facebook-kontoen din. Appen bruker OAuth eller OpenID Connect i bakgrunnen for å verifisere identiteten din og i noen tilfeller få tilgang til visse data fra sosiale medier.

Sosial SSO er en praktisk og mye brukt metode for autentisering fordi den reduserer friksjon for brukere, som kanskje ikke vil lage enda et brukernavn og passord.

---

### Oppsummering av forskjellene:

- **OAuth**: Brukes til autorisasjon, lar tredjepartsapper få tilgang til brukerdata uten å avsløre påloggingsopplysninger.
- **OpenID Connect**: Utvider OAuth til å gi autentisering, slik at apper kan verifisere brukerens identitet.
- **SAML**: XML-basert protokoll som brukes til SSO, ofte i bedriftsmiljøer.
- **WS-Federation**: En Microsoft-spesifikk protokoll for identitetsføderering, brukt i eldre systemer.
- **LDAP**: En protokoll for å spørre katalogtjenester for å autentisere brukere og håndtere autorisasjon.
- **Leverandører av sosial SSO**: OAuth-baserte systemer (som Google og Facebook) som lar tredjepartsapper autentisere brukere med påloggingsopplysningene deres fra sosiale medier.

Hver av disse teknologiene har sine egne styrker og bruksområder, og i moderne applikasjoner kan du se en kombinasjon av dem brukt til ulike sider av sikkerheten (for eksempel OAuth/OIDC for API-tilgang, SAML for SSO i bedrifter).
