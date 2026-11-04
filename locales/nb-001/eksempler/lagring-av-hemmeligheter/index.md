# Lagring av hemmeligheter

Innhold:

* [Sammendrag](#sammendrag)
  * [Problem](#problem)
  * [Beslutning](#beslutning)
  * [Status](#status)
* [Detaljer](#detaljer)
  * [Forutsetninger](#forutsetninger)
  * [Begrensninger](#begrensninger)
  * [Standpunkter](#standpunkter)
  * [Argument](#argument)
  * [Implikasjoner](#implikasjoner)
* [Relatert](#relatert)
  * [Relaterte beslutninger](#relaterte-beslutninger)
  * [Relaterte krav](#relaterte-krav)
  * [Relaterte artefakter](#relaterte-artefakter)
  * [Relaterte prinsipper](#relaterte-prinsipper)
* [Merknader](#merknader)
  * [Vault fra HashiCorp](#vault-fra-hashicorp)
  * [LastPass](#lastpass)
  * [Bitwarden](#bitwarden)
  * [EnvKey](#envkey)
  * [Confidant fra Lyft](#confidant-fra-lyft)
  * [Devolutions Password Server](#devolutions-password-server)
  * [Secret Server fra Thycotic](#secret-server-fra-thycotic)


## Sammendrag


### Problem

Vi må lagre hemmeligheter, som passord, private nøkler, autentiseringstokener og så videre.

Noen av hemmelighetene er brukerorienterte. For eksempel vil utvikleren vår kunne bruke mobiltelefonen til å slå opp et passord til en tjeneste.

Noen av hemmelighetene er systemorienterte. For eksempel må leveranselinjen vår for kontinuerlig levering kunne slå opp påloggingsopplysningene til skyhostingen vår.


### Beslutning

Bitwarden for brukerorienterte hemmeligheter

Vault fra HashiCorp for systemorienterte hemmeligheter.


### Status

Besluttet. Vi er åpne for nye alternativer etter hvert som de dukker opp.


## Detaljer


### Forutsetninger

For dette formålet og i vår nåværende situasjon verdsetter vi brukerorientert bekvemmelighet, som brukbare mobilapper.

  * Vi vil sikre rask og enkel tilgang på farten, for eksempel for en utvikler som har vakt innen driftssikkerhet.

  * Vi vil kunne dele noen hemmeligheter mellom utvalgte personer, for eksempel et team.

Vi prøver ikke å løse dette for én enkelt leverandør, for eksempel ved å lagre alle hemmeligheter utelukkende hos Amazon, Azure eller Google.

Vi vil ikke ha ad hoc-tilnærminger som «husk det» eller «skriv det på en lapp» eller «finn din egen måte å lagre det på».

Vår sikkerhetsmodell for dette formålet er fornøyd med å bruke anerkjente COTS-leverandører, som SaaS-verktøy for passordhåndtering.


### Begrensninger

Akkurat nå vil vi ha noe som er enkelt, det vil si at vi ikke trenger å skrive kode, ikke trenger å installere servere, ikke trenger å forplikte oss til noe stort og ikke trenger å standardisere alle.


### Standpunkter

Vi vurderte:

1. Brukerorienterte passordbehandlere fra hyllen: LastPass, 1Password, Bitwarden, Dashlane, KeePass, pass, GPG og så videre.

2. Systemorienterte COTS-passordbehandlere: AWS KMS, Vault fra HashiCorp, EnvKey, Secret Server fra Thycotic, Devolutions Password Server, Confidant fra Lyft.

3. Delingsorienterte tilnærminger: å bruke et delt Google-dokument, en delt Slack-kanal, en delt nettverksmappe og så videre.

4. Enkle ad hoc-tilnærminger uten teknologi, som å huske det, skrive en lapp eller overlate til hver bruker å finne sin egen tilnærming.


### Argument

Bitwarden, LastPass, 1Password og Dashlane er alle kommersielle ferdigprodukter.

  * Lignende typer funksjoner for brukere, team, organisasjoner og så videre.

  * Funksjonalitet for skrivebord i Windows og Mac, og for mobil i Android og iOS.

  * Nettleserutvidelser for Chrome og Firefox, for automatisk utfylling av skjemaer og så videre.

Bitwarden har to fordeler framfor de andre:

  * Bitwarden har åpen kildekode, noe som betyr at sikkerheten kan fagfellevurderes, og at selskapet er høyt verdsatt av sikkerhetsorienterte utviklere.

  * Anekdoter fra programvarefolk beskriver en tydelig preferanse for Bitwarden framfor de andre.

Et typisk godt eksempel på en omtale: https://jcs.org/2017/11/17/bitwarden

Et typisk nettsted for side-ved-side-avstemning: https://stackshare.io/stackups/bitwarden-vs-dashlane

Vi utsetter KeyPass, pass, GPG og så videre fordi de gir ekstra kompleksitet. Alle disse ser ut som fine løsninger for tekniske brukere. GPG ser særlig bra ut for tekniske brukere som vil ha kommandoorienterte muligheter på tvers av systemer.

Vi utsetter KMS fordi det gir innlåsing hos én leverandør.

Vi velger Vault for systemorienterte behov, fordi omtalene er utrolig positive, og fordi HashiCorp har en utmerket merittliste for programvare og støtte av toppkvalitet.

Vi nedlegger veto mot delingstilnærminger, for eksempel via delte dokumenter, delte kanaler, delte nettverksmapper og så videre. Disse gir ikke sikkerhetskvalitetene vi vil ha.

Vi nedlegger veto mot ad hoc-tilnærminger uten teknologi, fordi vi alle er enige om at det ikke er en langsiktig vei videre.


### Implikasjoner

Utviklere kan måtte holde oversikt over hemmeligheter to steder: Bitwarden for brukerorientert tilgang og Vault for systemorientert tilgang.


## Relatert


### Relaterte beslutninger

Beslutningen om hvilken CI/CD-server vi bruker må omfatte bevis på evne til å få tilgang til hemmeligheter.

Vi må bestemme hvordan hemmelighetene skal håndteres, når det gjelder retningslinjer, rotering, organisasjoner og så videre.


### Relaterte krav

Hemmelighetene vil ha tilhørende krav til etterlevelse, revisjon og onboarding/offboarding i HR.


### Relaterte artefakter

Vi forventer at vi kan eksportere noen hemmeligheter til miljøvariabler.


### Relaterte prinsipper

Lett å omgjøre.

Lett å kjøre parallelt, det vil si at det er enkelt å bruke flere ulike passordbehandlere.

Billig å prøve, det vil si at det finnes en gratis prøveperiode og ingen forpliktelse.


## Merknader

Evalueringsnotater her. Notatene er alle offentlige kommentarer på ulike diskusjonsfora om devops.


### Vault fra HashiCorp

Vault er akkurat det du vil ha her. 

Ikke bare slipp Vault rett ut i produksjon, men sett det opp i et testmiljø først, fordi dokumentasjonen til HashiCorp kan være ganske mangelfull selv om produktene deres er fantastiske.

Veldig bratt læringskurve, og det er ikke trivielt å sette opp. 

Det første oppsettet er litt av en plage. Det er likevel vel verdt det, og miljøet støtter det godt nok til at du klarer deg.

Grusom dokumentasjon, men det finnes mange veiledninger på nett fra folk som har satt det opp, og hvis du setter noen av dem sammen, får du et fungerende oppsett.

Det første oppsettet krevde pilling med helm-chartene deres (vault og consul). Selv om du teknisk sett kan bruke mange andre backender, anbefaler jeg det virkelig, virkelig ikke. Backenden/consul kan være bittesmå hvis du ikke har mye data å lagre.

Bli definitivt komfortabel/kjent med å bruke kommandolinjen, for brukergrensesnittet er mer som en konseptdemo/reklameportal for bedriftsutgaven deres.

At du ikke bare kan «fylle det opp» er en plage. Hvis du for eksempel har 5 felt, må du legge til hvert felt manuelt for hvert element. Det er altså ikke slik at du på forhånd definerer felt for en bestemt kategori og fyller disse feltene for alle elementene i den kategorien, det er mer som at «du lager alt hver eneste gang», noe som (etter min mening) er en pest og plage.

Du bør kanskje også se på goldfish som brukergrensesnitt oppå vault. Det gjør det ganske greit å få teamet ditt med på laget. De har også en demo. 1. Sett opp consul. 2. Sett opp vault som peker til consul. 3. Sett opp goldfish som peker til vault. 3. Sett opp en cron-jobb som kjører consul snapshot for sikkerhetskopier.



### LastPass

LastPass Teams. Vi bruker det, har egendefinerte maler, ACL, ingenting mangler etter min mening.

Jeg implementerte LastPass i organisasjonen min og gir det C+/B-. Det største problemet i det siste er manglende pålitelighet. I løpet av de siste 90 dagene har det vært flere timer der hvelv ble tvunget i frakoblet modus. Dette er ikke ideelt for organisasjonen min, siden vi bokstavelig talt har over 4 000 passord lagret i over 20 delte mapper. Som du kan forestille deg med så mange passord blir minst noen få oppdatert eller lagt til hver dag. Vi har en plan for katastrofegjenoppretting hvis problemer varer mer enn en time eller to: et skript signerer og krypterer hver natt et CSV-uttrekk av hvelvet som kan importeres til keepass.

LastPass har hatt urapporterte glimt av redusert tjeneste: pålogging «fungerer», men henter ikke nettsteder, tilfeldige funksjoner er ødelagt i administrasjonspanelet, og nøkler deles ikke riktig for nye delte mapper på øverste nivå. Jeg har en egen bruker for «nøkkelpush»/sikkerhetskopi som er med i alle grupper. Vanligvis løser det problemer med nøkkeldeling å logge inn som denne brukeren, men ikke når tjenesten er redusert, uansett hva statussiden sier ...

For integrasjon kan det være enkelt hvis du har riktige ACL-er med en modell med minst mulig privilegier, for eksempel at hvis en bruker har lese- og skrivetilgang og bare lesetilgang på en oppføring eller mappe, får vedkommende bare lesetilgang. Dessverre er ikke ACL-ene i organisasjonen min de beste, så jeg endte opp med å bruke JSON-API-et for klargjøring og ~500 linjer Python, fordi avhengighetene mellom de hundrevis av ACL-ene våre ikke passer godt inn i modellen med minst mulig privilegier. Jeg endte opp med å hente alle ACL-er en bruker var med i og gå gjennom avhengighetene på en måte.

Hvis ACL- eller gruppestrukturen din allerede er bygget med en struktur med minst mulig privilegier i tankene, fungerer AD/LDAP-synkroniseringsverktøyet for Windows godt.

Ta kontakt med salgsteamet deres, så kan de ordne en lengre prøveperiode for Enterprise. Sørg for at du forstår begrensningene fullt ut før du bestemmer deg. Vi hadde en god del vokseverk, men bortsett fra driftsstans eller svekket drift på serversiden har det gått utrolig smidig.


### Bitwarden

Bitwarden har fine verktøy rundt seg (nettgrensesnitt, kommandolinje, mobil, skrivebord). Kan selvdriftes og er ganske enkelt å sette opp. Ganske god dokumentasjon, og et verktøy som PrivacyTools anbefaler.


### EnvKey

https://www.envkey.com/ er en SaaS. Veldig enkelt å implementere, integrere og håndtere.

Funksjoner:

  * Beskytt API-nøkler og påloggingsopplysninger.

  * Hold konfigurasjonen synkronisert overalt.

  * Smart, ende-til-ende-kryptert håndtering av konfigurasjon og hemmeligheter. 

  * Forhindre usikker deling og spredning av konfigurasjon. 

  * Integrer på få minutter.

Muligheter:

  * Håndter konfigurasjon og tilgangsnivåer for alle appene, miljøene og teamene dine på ett sted.

  * Konfigurer hvilket som helst utviklings- eller servermiljø med bare én miljøvariabel.

Fordeler:

  * God startside.

  * Tydelig verdiforslag.

  * Visuelt utmerket webapp.

  * Overlegne eksempeldata, for eksempel Algolia, AWS, Datadog, GitHub, Stripe og så videre.

  * Snakket med grunnleggeren i 30 minutter om selskapet, brukergrensesnittet og så videre. Dane virker velinformert, ærlig om fordeler og ulemper og en levedyktig partner.

  * Selskapet er i bunn og grunn et typisk Y Combinator-selskap, med én grunnlegger. Hentet inn 120 000 dollar i 2018-01.

  * Fokuset er på å nå funksjoner for bedrifter, særlig å gå fra skyhosting hos EnvKey til enten lokal drift eller BYOC.

  * En mulig vei videre er å begynne med EnvKey for brukervennligheten, og senere (eller parallelt) legge til Vault. 


### Confidant fra Lyft

https://lyft.github.io/confidant/

Confidant er en tjeneste for håndtering av hemmeligheter med åpen kildekode, som gir brukervennlig lagring av og tilgang til hemmeligheter på en sikker måte, fra utviklerne hos Lyft.

KMS-autentisering: Confidant løser problemet med hønen og egget i autentisering ved å bruke AWS KMS og IAM slik at IAM-roller kan generere sikre autentiseringstokener som Confidant kan verifisere. Confidant håndterer også KMS-tildelinger for IAM-rollene dine, slik at IAM-rollene kan generere tokener som kan brukes til autentisering mellom tjenester eller til å sende krypterte meldinger mellom tjenester.

Kryptering i hvile av versjonerte hemmeligheter: Confidant lagrer hemmeligheter på en måte der det bare legges til, i DynamoDB, og genererer en unik KMS-datanøkkel for hver revisjon av hver hemmelighet, med symmetrisk autentisert kryptografi av typen Fernet.

Et brukervennlig nettgrensesnitt for å håndtere hemmeligheter: Confidant har et nettgrensesnitt i AngularJS som lar sluttbrukere enkelt håndtere hemmeligheter, koblingene mellom hemmeligheter og tjenester og endringshistorikken.


### Devolutions Password Server

https://server.devolutions.net/

Sikre, håndter og overvåk tilgang til privilegerte kontoer og økter.

Et omfattende, høysikret passordhvelv som lar deg kontrollere tilgangen til de privilegerte kontoene dine, og samtidig bedrer den samlede synligheten i nettverket for systemadministratorer og gir en sømløs opplevelse for sluttbrukere.

Funksjoner: sentralt passordhvelv for organisasjonen, privat hvelv for hver bruker, passordbehandler, injeksjon av påloggingsopplysninger,
Active Directory-integrasjon, rollebasert tilgangskontroll, tofaktorautentisering, klar for bedrifter, IP-begrensninger, håndteringsmuligheter, automatisk passordgenerator, tilgang via mobilapp, passordhistorikk, tilgangsrapporter, e-postvarsler.

  * støtter datakryptering

  * støtter flere autentiseringsordninger, blant annet LDAP, O365 og lokale brukere MED støtte for MFA fra flere kilder

  * flere arkiver/hvelv med finkornet tilgangskontroll for flere team

  * moderne nettgrensesnitt

  * private hvelv for påloggingsopplysninger og tilkoblinger til personlig bruk

  * mobilapper for iOS/Android

  * revisjonslogger for hver oppføring, hvem/hva/når, med en valgfri spørsmålsdialog om hvorfor de åpner den

  * egendefinerbare maler (selv om de støtter hundrevis av tilkoblingstyper innebygd)

  * massevis av flere funksjoner og en tung klient for Windows/Mac (Remote Desktop Manager) som du kan synkronisere med og som utvider mulighetene betydelig ... tilkoblinger med ett klikk

  * prisen er ikke så ille – opptil 15 brukere koster 500 dollar i året for passordserveren


### Secret Server fra Thycotic

https://thycotic.com/products/secret-server/

Funksjoner i versjonen for lokal drift: 

  * Full kontroll over sikkerhetssystemene og infrastrukturen din fra ende til ende

  * Ruller ut programvaren i ditt eget lokale datasenter eller i din egen instans av virtuell privat sky

  * Oppfyller juridiske og regulatoriske forpliktelser som krever at alle data og systemer ligger lokalt

Funksjoner i skyversjonen:

  * Modellen programvare som en tjeneste lar deg registrere deg og komme i gang med en gang

  * Elastisk skalerbarhet etter hvert som du vokser

  * Kontroller og redundans levert av Azure med 99,9 % SLA for oppetid

Tilbakemeldinger fra brukere:

  * Vi pleide å bruke det produktet. Det var så lett å omgå, og reglene fungerer bare for smarte folk. Late eller dumme brukere kan lett rote det til i et teamområde. Prisene kan forhandles når du snakker med dem.

  * Du kan kjøre det med SQL Express og en Win 7-boks. 

  * Billig.
