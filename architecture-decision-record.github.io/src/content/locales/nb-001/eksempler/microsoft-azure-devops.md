# Microsoft Azure DevOps

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
  * [Microsoft Devops CI: Et skuffende eventyr](#microsoft-devops-ci-et-skuffende-eventyr)
  * [Høydepunkter fra diskusjonen på Hacker News](#høydepunkter-fra-diskusjonen-på-hacker-news)
  * [MVP for Windows-utvikling](#mvp-for-windows-utvikling)
  * [Oppsummering av Edward Thomson (produktleder for Azure)](#oppsummering-av-edward-thomson-produktleder-for-azure)


## Sammendrag


### Problem

Vi vil bruke devops til å bygge, integrere, rulle ut og hoste prosjektene våre. Vi vurderer Microsoft Azure DevOps.

  * Vi vil at utvikleropplevelsen skal være rask og pålitelig, både for oppsettet av devops, for eksempel konfigurasjon, og for den løpende bruken, for eksempel raske byggetider.
  
  * Vi vil vurdere å bruke Microsoft Azure som helhet, til å hoste prosjektenes apper, databaser og så videre.


### Beslutning

Vi har bestemt oss mot Microsoft Azure DevOps.


### Status

Besluttet. Åpen for å vurdere på nytt hvis/når det kommer vesentlig ny informasjon.


## Detaljer


### Forutsetninger

Alle de vanlige forutsetningene for devops, for eksempel i boken Accelerate.

  * Raske bygg er en betydelig hjelp. Det gjør tilbakemeldingssløyfene raskere.

  * Vi kan bytte deler inn og ut med alternativer fra andre leverandører, det vil si at vi kanskje vil ta med våre egne byggeservere med høyere hastighet, bruke vårt eget valg av system for versjonskontroll eller samordne med en selvdriftet server for kontinuerlig integrasjon.
  
  * Strømlinjeformet brukervennlighet er en betydelig hjelp for utvikleropplevelsen, og dermed for subtile områder som konsistens, tydelighet, sikkerhet og en lett læringskurve.

  * Når noe er ødelagt eller problematisk, vil vi ha en effektiv måte å rapportere problemet på. Dette er særlig viktig for alle sikkerhetsrelaterte problemer.


### Begrensninger

Ingen kjente. Azure har en publisert forpliktelse til å fungere godt sammen med eksterne verktøy.


### Standpunkter

Vi vurderte å bruke Microsoft Azure Devops i stedet for AWS, som er den etablerte løsningen.

Vi eksperimenterte med Azure DevOps, Azure Pipelines, Azure Repo og oppstart av en ny server i Azure via Terraform.

Vi eksperimenterte med å få støtte fra Microsoft-representanter.

Vi samlet informasjon fra fagfeller i blogger og på Hacker News.


### Argument

Azure DevOps markedsfører et utmerket sett med tilbud, men de holder ikke mål, de fungerer ikke godt sammen, og støtten er dårlig.

Vår egen førstehåndserfaring:

  * Oppsettet av Azure er et virrvarr av brukergrensesnitt, hvorav noen overlapper med Microsoft-kontoer og noen ikke gjør det. Det finnes for eksempel en Azure-pålogging, en Microsoft.com-pålogging, en Live.com-pålogging og så videre, og alle er i spill samtidig.

  * Vi støtte på et mindre sikkerhetsproblem under oppsettet og fant ingen løsning. Vi prøvde mange måter å rapportere det på, til mange Microsoft-representanter, uten hell. Vi rapporterte det til slutt til Microsoft Security, som svarte at det ikke blir rettet.

  * Dokumentasjonen er ofte enten feil eller utdatert. I det minste noe av dette skyldes Microsofts dårlige søkemotor, og noe skyldes svak SEO.
  
  * Oppsettet av Terraform er godt dokumentert og fungerer. Støtten for Terraform er imidlertid svak sammenlignet med AWS, fordi Microsoft bygger forretningsforhold med leverandører for å lage eksempler på oppsett gjennom Terraform i kjede.

Erfaringene til fagfeller:

  * Etter at vi gjorde vår egen blindvurdering, lette vi etter erfaringer fra fagfeller. Det vi fant, bekreftet erfaringene våre.

  * Fagfeller rapporterte flere problemer med byggetider og problemer med bring-your-own-build-server. Disse problemene er betydelig mer alvorlige enn problemene med brukergrensesnittet, fordi det å kjøre bygg er hovedformålet med en byggelinje, og vi forventer å kjøre mange per dag.

  * Vi fant at Azure-ansatte deltar utmerket i diskusjonsfora. Ros til Microsoft for dette. Vi er særlig imponert over Edward Thomson, produktleder og utvikler for Azure, på grunn av engasjementet, direktheten og de tekniske forklaringene hans.


### Implikasjoner

Det ser ut til at valget av Microsoft Azure DevOps vil bli dyrere (~3 ganger) i tid og kostnad enn å ikke velge Azure.


## Relatert


### Relaterte beslutninger

Hvis vi velger Azure DevOps, finnes det mange tilhørende tilbud, blant annet Azure Repo, Azure Pipeline og så videre. Vi tror at hvis vi velger Azure Devops, kan det gjøre det enklere å bruke flere Azure-muligheter, eller det kan gjøre det vanskeligere å bruke andre leverandørers muligheter.

Vi tror at Microsoft gjør store framskritt innen utvikleropplevelse, og vi ser at Microsoft gjør store oppkjøp av utviklerverktøy (for eksempel GitHub) og avhengigheter (for eksempel Citus).

Hvis vi velger Azure DevOps, kan vi ønske å legge vekt på å velge tilbudene fra Microsofts oppkjøp, og vi kan også ønske å nærme oss disse tilbudene med mer omtanke/vurdering på grunn av mulig vevsavstøtning, for eksempel risiko for utskifting av ansatte.


### Relaterte krav

Vi vil at byggetidene skal være svært raske. Vi godtar å betale en høy merpris for dette. Det er fordi vi vil iterere veldig raskt.

Vi vil at påliteligheten skal være svært høy. Vi godtar å betale en høy merpris for dette. Det er fordi vi tester bruksområder med høy verdi, blant annet finansielle transaksjoner, konfidensielle transaksjoner og så videre.

Våre fire viktigste KPI-er for devops omfatter gjennomsnittlig tid til gjenoppretting, noe som krever raske bygg og høy pålitelighet.


### Relaterte artefakter

Vi vil at byggesystemet skal gi ut artefakter som egner seg til bruk i andre systemer, som Artifactory.


### Relaterte prinsipper

Lett å omgjøre. Vi kan evaluere Azure DevOps parallelt med AWS, som er den etablerte løsningen.


## Merknader


### Microsoft Devops CI: Et skuffende eventyr

https://toxicbakery.github.io/vsts-devops/microsoft-devops-ci/

Blogginnlegg.

«Som programvareutvikler vet jeg av egen erfaring hvor vanskelig det er å bygge produkter av høy kvalitet raskt og billig. Det er en kunstform som vi noen ganger får til, og andre ganger ender det i noe som ligner det statlige helsenettstedet fra Obama-tiden. Hvor mye kontroll vi har over det ferdige produktet varierer, og skylden for en fiasko havner ofte på feil personer i beslutningshierarkiet. Microsofts Azure DevOps (tidligere kjent som Visual Studio Team Services) er, til tross for tydelig gode intensjoner, en perfekt storm av dårlige beslutninger og svak gjennomføring.»


### Høydepunkter fra diskusjonen på Hacker News

https://news.ycombinator.com/item?id=18983586

«Vi bruker Azure DevOps mye på jobben min, og etter å ha brukt GitHub, Gitlab, selvdriftede løsninger, Jenkins og TeamCity … kommer Azure DevOps helt sist.»

«Brukergrensesnittet er forferdelig klumpete overalt. Det verste for meg er pull requests. Utrolig tungt å jobbe sammen med folk på en pull request. Jeg kan ikke engang peke på «ett» bestemt problem – for oss er det ødelagt overalt.»

«Azure Devops er noe jeg vil elske. Brukergrensesnittet endrer seg hele tiden, men løser ikke de underliggende feilene som har vært der i evigheter.»

«Verktøyene er ikke godt integrert, brukergrensesnittet er veldig tregt, og det finnes ingen dashbordvisning av aktive pull requests, bygg, utgivelser og så videre for favorittarkivene mine. Bygge- og utrullingstidene er sinnssykt trege.»

«Vi prøvde også å bruke Azure Boards (arbeidsoppgaver, tavler, backlogger og så videre). Au. Det er et fullstendig virrvarr av usammenhengende ideer i brukergrensesnittet. I stedet for å implementere én ting godt, implementerte de to dusin ting dårlig.»


### MVP for Windows-utvikling

MVP for Windows-utvikling her. Jeg føler at jeg må ta på meg noe av ansvaret her for at jeg ikke har vært høyere i stemmen om disse problemene. Men jeg må si at jeg er skuffet over å høre at dere er «overrasket» over problemene med brukeropplevelsen. Jeg har sagt til folkene deres at brukeropplevelsen er forferdelig (for eksempel helt tilbake før lanseringen), og har stadig fått høre «vi vet det, vi jobber med å rette det». Jeg begynner å formalisere tilbakemeldingen og skyve den gjennom rørene, følg med. Jeg er også lokal (Bellevue), og vil gjerne komme innom og prøve å sette opp en leveranselinje for den relativt enkle åpen kildekode-appen vår i .net/wpf/uwp. Jeg mistenker at det blir en øyeåpner for oss begge.

Noen eksempler:

* Du kan ikke bygge en leveranselinje med et git-arkiv som inneholder submoduler

* Jeg fant det umulig å redigere PATH for noen egendefinerte verktøy

* Opplevelsen med New Pipeline gir bare ikke mye mening, og nye brukere som klikker rundt vil til slutt havne i feil dokumentasjon.


### Oppsummering av Edward Thomson (produktleder for Azure)

Jeg skrev koden som slår sammen pull requestene dine. Programleder (Program Manager) hos Microsoft for Azure DevOps. Tidligere programvareutvikler på verktøy for versjonskontroll hos GitHub, Microsoft og SourceGear.

https://www.edwardthomson.com/

Medvedlikeholder av libgit2. https://libgit2.github.io

Medvert for All Things Git, podkasten om Git. https://www.allthingsgit.com/

Redaktør av Developer Tools Weekly, et nyhetsbrev om utviklingsverktøy. https://developertoolsweekly.com/
