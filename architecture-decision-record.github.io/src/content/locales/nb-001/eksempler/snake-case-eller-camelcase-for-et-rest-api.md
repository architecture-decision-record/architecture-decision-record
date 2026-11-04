# Arkitekturbeslutningslogg: snake_case eller camelCase for et REST-API?

Beslutning: Navnekonvensjonen snake_case brukes for endepunkter i REST-API-et

Status: Godtatt

## Kontekst

For navnekonvensjoner i REST-API-er er det to populære formater: snake_case og camelCase. I snake_case er hvert ord i navnet skilt med understreker, mens i camelCase står det første ordet i navnet med små bokstaver og de påfølgende ordene har stor forbokstav. Denne beslutningen avgjør hvilken navnekonvensjon som skal brukes for et REST-API.

## Beslutningsdrivere

- Konsistens med eksisterende navnekonvensjoner i prosjektet

- Lesbarhet og tydelighet for alle som kan komme til å arbeide med API-et

- Samsvar med bransjens beste praksis for navnekonvensjoner i REST-API-er

- Enkel implementering og enkelt vedlikehold

## Beslutning

Navnekonvensjonen snake_case brukes for endepunkter i REST-API-et. Dette valget er drevet av følgende faktorer:

1. **Konsistens**: Prosjektet bruker allerede navnekonvensjonen snake_case for alle endepunkter, og det er en fordel å beholde denne konvensjonen for å sikre konsistens i hele prosjektet.

2. **Lesbarhet og tydelighet**: Konvensjonen snake_case er mer lesbar og lettere å forstå. Understrekene gir et tydelig skille mellom ordene, noe som gjør det enklere å tolke og forstå betydningen av navnet.

3. **Samsvar med bransjens beste praksis**: Konvensjonen snake_case er mye brukt i bransjen og regnes som beste praksis for REST-API-er, noe som gjør den til et godt valg for prosjektet.

4. **Enkel implementering og enkelt vedlikehold**: Å holde seg til den eksisterende navnekonvensjonen er enklere å implementere og vedlikeholde, siden all eksisterende kode og dokumentasjon måtte oppdateres hvis en ny konvensjon ble valgt.

## Konsekvenser

Denne beslutningen har noen mulige konsekvenser. 

* Hvis nye teammedlemmer som kommer til prosjektet ikke kjenner navnekonvensjonen snake_case, kan det føre til forvirring og feil i utviklingen. Siden snake_case er en mye brukt konvensjon, er en slik risiko imidlertid minimal. 
  
* Hvis det brukes andre verktøy eller rammeverk i prosjektet som i stor grad bygger på konvensjonen camelCase, kan det kreve ekstra innsats å konvertere mellom navnekonvensjoner. Det er imidlertid ikke en stor bekymring siden prosjektet har standardisert på konvensjonen snake_case. 
 
Samlet sett gir beslutningen om å bruke navnekonvensjonen snake_case for endepunkter i REST-API-et en konsistent, lesbar tilnærming som er standard i bransjen, samtidig som den er enkel å implementere og vedlikeholde.

<h6>Kreditering: denne siden er generert av ChatGPT og deretter redigert for klarhet og format.</h6>
