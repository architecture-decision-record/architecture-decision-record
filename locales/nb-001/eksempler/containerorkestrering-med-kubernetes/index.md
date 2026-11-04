# Arkitekturbeslutningslogg: Containerorkestrering med Kubernetes

## Problemstilling 

Vi må velge en plattform for containerorkestrering for den voksende porteføljen vår av skybaserte applikasjoner. Utrullingen på dagens eldre plattform er for treg og ikke smidig nok til å holde følge med behovene våre som vokser. Vi leter etter et system som lar oss skalere tjenestene våre på mest mulig effektiv måte uten å gå på bekostning av smidighet eller brukervennlighet.

## Vurderte alternativer

1. Docker Swarm

2. Kubernetes

3. Apache Mesos

## Tatt beslutning

Etter en grundig analyse av hver plattform for containerorkestrering har vi besluttet å ta i bruk Kubernetes som det beste alternativet for behovene i virksomheten vår. Våre grunner til å velge Kubernetes er følgende:

1. **Skalerbarhet:**  Kubernetes sin unike utforming er perfekt for å skalere applikasjoner, og etter hvert som kravene våre til skalerbarhet utvikler seg over tid, har Kubernetes innebygd evne til å møte disse endringene uten problemer.

2. **Desentralisert arkitektur:**  Kubernetes sin master-worker-topologi gir en desentralisert arkitektur, som sikrer at det ikke finnes noe enkeltpunkt for feil.

3. **Støtte fra miljøet:**  Kubernetes har det største og mest aktive miljøet med åpen kildekode, noe som betyr at det har mange bidragsytere, utviklere og leverandører, og gjør det enklere for oss å få hjelp og finne ressurser.

4. **Støtte i økosystemet:**  Kubernetes har et voksende økosystem med en rekke verktøy fra tredjeparter, integrasjoner med containerregistre, CI/CD-leveranselinjer, datalagring og mer.

Derfor har vi besluttet å ta i bruk Kubernetes som plattform for containerorkestrering nå og i nær framtid.

<h6>Kreditering: denne siden er generert av ChatGPT og deretter redigert for klarhet og format.</h6>
