# Programmeringsspråk

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


## Sammendrag


### Problem

Vi må velge programmeringsspråk for programvaren vår. Vi har to hovedbehov: et programmeringsspråk for frontend som passer for webapplikasjoner, og et programmeringsspråk for backend som passer for serverapplikasjoner.


### Beslutning

Vi velger TypeScript for frontend.

Vi velger Rust for backend.


### Status

Besluttet. Vi er åpne for nye alternativer etter hvert som de dukker opp.


## Detaljer


### Forutsetninger

Frontend-applikasjonene er typiske:

  * Typiske brukere og interaksjoner

  * Typiske nettlesere og systemer

  * Typisk utvikling og utrulling

Frontend-applikasjonene vil sannsynligvis utvikle seg raskt:

  * Vi vil sikre rask og enkel utvikling, utrulling, iterasjon og så videre.

  * Vi verdsetter etterprøvbarhet, for eksempel typesikkerhet, og vi er fine med å gjøre litt mer arbeid for å oppnå den.

  * Vi trenger ikke kompatibilitet med eldre systemer.

Backend-applikasjonene er mer krevende enn typisk:

  * Høyere enn typiske mål for kvalitet, særlig etterprøvbarhet, pålitelighet, sikkerhet og så videre.

  * Høyere enn typiske mål for nær sanntid, det vil si at vi ikke vil ha pauser på grunn av søppelhåndtering i virtuelle maskiner.

  * Høyere enn typiske mål for funksjonell programmering, særlig for parallellisering, flerkjernebehandling og minnesikkerhet.

Vi godtar lavere kompileringshastighet til fordel for sikkerhet ved kompilering og hastighet ved kjøring.


### Begrensninger

Vi har en sterk begrensning på språk som kan brukes med funksjonstjenester fra de store skyleverandørene, som Amazon Lambda.


### Standpunkter

Vi vurderte disse språkene:

  * C

  * C++

  * Clojure
  
  * Elixir
  
  * Erlang
  
  * Elm
  
  * Flow
  
  * Go
  
  * Haskell
  
  * Java
  
  * JavaScript
  
  * Kotlin
  
  * Python
  
  * Ruby
  
  * Rust
  
  * TypeScript



### Argument

Oppsummering per språk:

  * C: avvist på grunn av lav sikkerhet; Rust kan gjøre nesten alt bedre.

  * C++: avvist fordi det er rotete; Rust kan gjøre nesten alt bedre.

  * Clojure: utmerket modellering; den beste tilnærmingen til Lisp; flott kjøretid på JVM.
  
  * Elixir: utmerket kjøretid, inkludert utrullbarhet og samtidighet; utmerket utvikleropplevelse; relativt lite økosystem.

  * Erlang: utmerket kjøretid, inkludert utrullbarhet og samtidighet; krevende utvikleropplevelse; relativt lite økosystem.

  * Elm: ser svært lovende ut; IBM publiserer store casestudier med gode resultater; mindre økosystem.

  * Flow: interessant forbedring av JavaScript; utviklere beveger seg imidlertid bort fra det.

  * Go: utmerket utvikleropplevelse; utmerket samtidighet; men en merittliste med dårlige beslutninger som lammer språket.

  * Haskell: det beste funksjonelle språket; mindre utviklermiljø; har ikke oppnådd nok publiserte suksesser i produksjon.

  * Java: utmerket kjøretid; utmerket økosystem; svak utvikleropplevelse.

  * JavaScript: det mest populære språket noensinne; det mest utbredte økosystemet.

  * Kotlin: retter opp så mye av Java; utmerket støtte fra JetBrains; gode publiserte eksempler på portering fra Java til Kotlin.
  
  * Python: det mest populære språket for systemadministrasjon; flotte verktøy for analyse; gode nettrammeverk; men oppgitt av Google til fordel for Go.

  * Ruby: den beste utvikleropplevelsen noensinne; de beste nettrammeverkene; det hyggeligste miljøet; men veldig tregt; noe vanskelig å pakke.

  * Rust: det beste nye språket; vekt på null abstraksjon; vekt på samtidighet; men et relativt lite økosystem; og har bevisste begrensninger på noen typer kompilatorakselerasjon, for eksempel at direkte minnetilgang eksplisitt må være unsafe.

  * TypeScript: legger til typer i JavaScript; flott transpiler; økende vekt blant utviklere på portering fra JavaScript til TypeScript; sterk støtte fra Microsoft.

Vi bestemte at virtuelle maskiner har et sett med avveininger som vi ikke trenger akkurat nå, for eksempel ekstra kompleksitet som gir muligheter ved kjøring.

Vi tror at kjernebeslutningen vår drives av to gjennomgående hensyn:

  * For raskest mulig kjøretid og tettest mulig systemtilgang ville vi valgt JavaScript og C.

  * For nesten raskest kjøretid og nesten tettest systemtilgang velger vi TypeScript og Rust.

Hederlig omtale går til språkene for virtuelle maskiner og nettrammeverkene som vi ville valgt hvis vi ville ha et språk for virtuell maskin:

  * Clojure og Luminus

  * Java og Spring

  * Elixir og Phoenix


### Implikasjoner

Frontend-utviklere må lære TypeScript. Det er trolig en enkel læringskurve hvis utviklerens hovederfaring er med JavaScript.

Backend-utviklere må lære Rust. Det er trolig en moderat læringskurve hvis utviklerens hovederfaring er med C/C++, og en vanskelig læringskurve hvis utviklerens hovederfaring er med Java, Python, Ruby eller lignende språk med administrert minne. 

TypeScript og Rust er begge relativt nye. Det betyr at mange verktøy ennå ikke har dokumentasjon for disse språkene. Leveranselinjen for devops må for eksempel settes opp for disse språkene, og så langt har ingen av devops-verktøyene vi evaluerer standardeksempler for disse språkene.

Kompileringstidene for TypeScript og Rust er ganske trege. Noe av dette kan skyldes at språkene er nye. Vi kan ønske å se på hvordan vi kan redusere trege kompileringstider, for eksempel med kompilering ved behov, samtidig kompilering og så videre.

IDE-støtten for disse språkene er ennå ikke allestedsnærværende og ennå ikke førsteklasses. JetBrains selger for eksempel IDE-en PyCharm for førsteklasses støtte for Python, men selger ikke en IDE med førsteklasses støtte for Rust. I stedet kan JetBrains bruke et Rust-programtillegg som gir kanskje 80 % av støtten for Rust sammenlignet med støtten for Python.


## Relatert


### Relaterte beslutninger

Vi vil sikte mot valg i økosystemet som stemmer med disse språkene.

Vi vil for eksempel velge en IDE som har gode muligheter for disse språkene.

For eksempel er det mer sannsynlig at vi for nettrammeverket vårt i frontend velger et rammeverk som i hovedsak retter seg mot TypeScript (for eksempel Vue) enn et rammeverk som i hovedsak retter seg mot ren JavaScript (for eksempel React).


### Relaterte krav

Hele verktøykjeden vår må støtte disse språkene.


### Relaterte artefakter

Vi forventer at vi kan eksportere noen hemmeligheter til miljøvariabler.


### Relaterte prinsipper

Mål to ganger, bygg én gang. Vi prioriterer noe sikkerhet framfor noe hastighet.

Kjøretid er mer verdifullt enn kompileringstid. Vi prioriterer kundenes bruk framfor utvikleres bruk.


## Merknader

Eventuelle merknader her.
