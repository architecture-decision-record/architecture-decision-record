# Arkitekturbeslutningslogg: Valg av databaseteknologi

## Status

Godtatt

## Kontekst

Vi designer en ny applikasjon som må lagre og hente data på en skalerbar og ytelsesdyktig måte. Vi har identifisert tre typer databaseteknologier som er vanlige: relasjonsdatabaser, dokumentdatabaser og hendelsesdatabaser.

Relasjonsdatabaser lagrer data i tabeller med faste skjemaer og håndhever strenge krav til dataintegritet. De passer for applikasjoner som trenger komplekse datarelasjoner og transaksjoner. Eksempler er MySQL, PostgreSQL og Oracle.

Dokumentdatabaser lagrer data i JSON-lignende dokumenter og er skjemaløse. De passer godt for applikasjoner som trenger fleksible datamodeller og horisontal skalering. Eksempler er MongoDB, Couchbase og Amazon DynamoDB.

Hendelsesdatabaser lagrer data som en rekke hendelser og fanger opp hver endring i dataene. De passer for applikasjoner som trenger revisjon, event sourcing og kompleks databehandling. Eksempler er Apache Kafka, Apache Pulsar og AWS Kinesis.
Beslutning

Etter å ha evaluert kravene og begrensningene til applikasjonen vår nøye har vi besluttet å bruke en dokumentdatabase.

## Begrunnelse

Vi har valgt en dokumentdatabase fordi:

1. Applikasjonen vår trenger en fleksibel datamodell som kan utvikle seg over tid. Dokumentdatabaser lar oss lagre data i et skjemaløst format, noe som betyr at vi kan legge til nye felt eller endre strukturen i eksisterende dokumenter uten å måtte endre databaseskjemaet.

2. Applikasjonen vår må skalere horisontalt for å håndtere store datamengder og mye trafikk. Dokumentdatabaser har innebygd støtte for sharding og replikering, noe som lar oss fordele data over flere servere og håndtere høy gjennomstrømning av lesing og skriving.

3. Applikasjonen vår trenger rask og effektiv henting av data. Dokumentdatabaser har kraftige muligheter for indeksering og spørringer som lar oss hente data raskt og effektivt.

4. Applikasjonen vår trenger ikke komplekse transaksjoner eller datarelasjoner. Selv om relasjonsdatabaser er best på å håndheve krav til dataintegritet og håndtere komplekse transaksjoner, har ikke applikasjonen vår slike krav. Dokumentdatabaser kan gi tilstrekkelige garantier for konsistens og varighet for vårt bruksområde.

## Konsekvenser

Ved å velge en dokumentdatabase må vi investere i å lære og forstå den bestemte teknologien vi velger å bruke. I tillegg må vi sørge for at applikasjonens datamodell passer godt til dokumentdatabasens datamodell, for å få mest mulig ytelse og skalerbarhet.

Vi tror likevel at fordelene ved å bruke en dokumentdatabase veier tyngre enn kostnadene, og at den passer best til kravene og begrensningene til applikasjonen vår.
