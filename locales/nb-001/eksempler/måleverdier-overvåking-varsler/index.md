# Måleverdier, overvåking, varsler

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
  * [Fritekstmeldinger mot strukturerte hendelsesmeldinger](#fritekstmeldinger-mot-strukturerte-hendelsesmeldinger)
  * [Graylog er enklere](#graylog-er-enklere)
  * [Prometheus krever litt justering](#prometheus-krever-litt-justering)
  * [AWS-tjenester er blandet](#aws-tjenester-er-blandet)
  * [Kafka](#kafka)
  * [Loki](#loki)
  * [Prometheus + alertmanager + Rollbar + Graylog + Grafana](#prometheus--alertmanager--rollbar--graylog--grafana)
  * [Thanos](#thanos)
  * [Prometheus HA](#prometheus-ha)
  * [Datadog + PagerDuty + Threat Stack](#datadog--pagerduty--threat-stack)
  * [Zabbix](#zabbix)
  * [Outlyer](#outlyer)
  * [Nagios + Nagiosgraph](#nagios--nagiosgraph)
  * [Prometheus + Grafana + AlertManager](#prometheus--grafana--alertmanager)
  * [DataDog + Sentry + PagerDuty.](#datadog--sentry--pagerduty)
  * [Sensu + Graphite + ELK](#sensu--graphite--elk)
  * [Prometheus + Alertmanager](#prometheus--alertmanager)
  * [Sensu + Grafana + Graylog + Kibana + NewRelic.](#sensu--grafana--graylog--kibana--newrelic)
  * [Prometheus + Circonus](#prometheus--circonus)
  * [icinga2 + VictorOps + NewRelic + Sentry + Slack](#icinga2--victorops--newrelic--sentry--slack)
  * [AppDynamics + Papertrail + PagerDuty + Healthchecks.io + Stackdriver](#appdynamics--papertrail--pagerduty--healthchecksio--stackdriver)
  * [icinga2 + elasticsearch](#icinga2--elasticsearch)
  * [DataDog + New Relic + ELK + EFK + Sentry + Alertmanager + VictorOps](#datadog--new-relic--elk--efk--sentry--alertmanager--victorops)
  * [Wavefront + Scalyr + PagerDuty + Stackstorm + Slack](#wavefront--scalyr--pagerduty--stackstorm--slack)
  * [Telegraf + Prometheus + InfluxDB + Grafana](#telegraf--prometheus--influxdb--grafana)
  * [Sematext + Logagent + Experience](#sematext--logagent--experience)
  * [Azure Monitor/Analytics + OpsGenie](#azure-monitoranalytics--opsgenie)
  * [Prometheus + Alertmanager + Grafana + Splunk + PagerDuty](#prometheus--alertmanager--grafana--splunk--pagerduty)
  * [Telegraf + Prometheus + Grafana + Alertmanager](#telegraf--prometheus--grafana--alertmanager)
  * [Prometheus + Grafana + Cloudwatch + sentry + kibana + elasticsearch](#prometheus--grafana--cloudwatch--sentry--kibana--elasticsearch)
  * [PagerDuty + Monitis](#pagerduty--monitis)
  * [Prometheus + Grafana + Bosun](#prometheus--grafana--bosun)
  * [Azure Monitor/Analytics/Insights/Dashboards](#azure-monitoranalyticsinsightsdashboards)
  * [Grafana + Monitis + OpsGenie + Slack](#grafana--monitis--opsgenie--slack)
  * [Checkly + AppOptics + Cloudwatch + Heroku + Pagerduty + Papertrail](#checkly--appoptics--cloudwatch--heroku--pagerduty--papertrail)
  * [Instana + Logz.io + slack](#instana--logzio--slack)
  * [SignalFX + Splunk + PagerDuty + Slack](#signalfx--splunk--pagerduty--slack)
  * [ELK + Prometheus + Grafana](#elk--prometheus--grafana)
  * [Datadog + Prometheus + Grafana](#datadog--prometheus--grafana)
  * [Nagios + ELK](#nagios--elk)
  * [Datadog mot Site24x7 + StatusCake + PagerDuty + SumoLogic + Slack](#datadog-mot-site24x7--statuscake--pagerduty--sumologic--slack)
  * [Prometheus + AlertManager + Grafana + Stackdriver](#prometheus--alertmanager--grafana--stackdriver)
  * [Zabbix](#zabbix-1)


## Sammendrag


### Problem

Vi vil bruke måleverdier, overvåking og varsler, fordi vi vil vite hvor godt applikasjonene våre fungerer, og vite når det er et problem.


### Beslutning

Arbeid pågår.


### Status

Samler informasjon. Vi starter med de tenkelige endene av spekteret: det mest anbefalte eldre gratisverktøyet (Nagios) og det mest anbefalte nyere betalte verktøyet (New Relic).


## Detaljer


### Forutsetninger

Vi vil lage webapper som er moderne, raske, pålitelige, responsive og så videre.

Vi vil kjøpe heller enn å bygge.


### Begrensninger

Vi vil ha verktøy som fungerer godt med leveranselinjen vår for devops og med skyene vi ruller ut i.


### Standpunkter

Vi undersøker standpunkter nå.


  * AlertManager

  * AppDynamics

  * AppOptics

  * Azure Monitor/Analytics/Insights/Dashboards

  * Bosun

  * Checkly

  * Circonus

  * Cloudwatch

  * EFK

  * ELK

  * Grafana

  * Grafana

  * Graphite

  * Graylog

  * Healthchecks.io

  * Heroku

  * icinga2

  * InfluxDB

  * Instana

  * Kafka

  * Logagent

  * Logz.io

  * Loki

  * Monitis

  * Nagios

  * Nagios

  * Nagiosgraph

  * NewRelic

  * OpsGenie

  * Outlyer

  * PagerDuty

  * Pagerduty

  * PagerDuty

  * Papertrail

  * Prometheus

  * Rollbar

  * Scalyr

  * Sematext Metrics, Logs, Experience, Tracing

  * Sensu

  * SignalFX

  * Slack

  * Splunk

  * Stackdriver

  * Stackstorm

  * Telegraf

  * Telegraf

  * Thanos

  * VictorOps

  * Wavefront

  * Zabbix

  
### Argument

Så langt er Nagios og New Relic endene av spekteret. Nagios er det eldste, enkleste, gratis og brukbare verktøyet. New Relic er det nyeste, mest komplette betalte og brukbare verktøyet med flest funksjoner. Vi starter med evalueringer av disse. Etter behov flytter vi oss inn i spekteret.  

Så langt har Zabbix de beste anbefalingene, og tilbyr også de mest komplette mulighetene.

Så langt har ELK den beste populariteten blant løsninger med åpen kildekode som bygges selv heller enn kjøpes.

Så langt har Prometheus + Graphana den beste populariteten.


### Implikasjoner

Gjenstår.


## Relatert


### Relaterte beslutninger

Valgene vil påvirke testbarhet, telemetri og trolig andre systemer, for eksempel for kundeservice, driftssikkerhet (site reliability engineering) og så videre.


### Relaterte krav

Gjenstår.


### Relaterte artefakter

Gjenstår.


### Relaterte prinsipper

Lett å omgjøre.

Behov for fart.


## Merknader


En ganske god stakk med åpen kildekode er:

* Prometheus for måleverdier og varsling basert på måleverdier

* Grafana for å vise måleverdier

* Elasticsearch/Logstash/Kibana (ELK) for logger og strukturerte hendelser

* Pushover for varsler på mobil


### Fritekstmeldinger mot strukturerte hendelsesmeldinger

Fritekstmeldinger: for eksempel den typen tilfeldig innhold du finner i /var/log/messages, og noe som applikasjonen genererer med vilje. Meldingene er nyttige for å identifisere andre ting som skjer på maskinen, som tom for minne eller maskinvarefeil, men inneholder mye rot. 

Strukturerte hendelsesmeldinger: generert av applikasjonen, med et fast eller dynamisk sett med attributter, for eksempel en logg over HTTP-forespørsler, en regnskapslogg eller en brukerpålogging.

Generelt sett er det fint å logge detaljer om hver forespørsel på en måte som lar deg bore ned basert på attributter. Å legge til for eksempel en brukerid eller en sesjonsid i alt lar deg spore. Eksplisitt sporing er selvfølgelig også bra. Å bruke ELK til dette er en slags fattigmanns-versjon av https://www.honeycomb.io/


### Graylog er enklere

Graylog er enklere å sette i gang etter min erfaring.



### Prometheus krever litt justering


Jeg er generelt fornøyd med Prometheus for måleverdier. Varslingen krever litt justering, men er ganske bra. Det avhenger av applikasjonen din. Jeg tror det er best å varsle om tilstander som er synlige for sluttbrukeren, ikke underliggende årsaker. For eksempel er lastetid for siden bra, men antall forespørsler per sekund er det ikke. Selv om null forespørsler per sekund tyder på at noe er galt.

Fordelen med en tjeneste er at den tilbyr ekstra intelligens rett ut av boksen. Jeg liker generelt Datadog. Tjenestene kan være skremmende dyre hvis du har mye data, og har noen ganger prismodeller som ikke er skyvennlige, for eksempel betaling per instans når instansene er dynamiske. Det er også forskjell på tjenester der hver forespørsel kommer fra en betalende bruker og tjenester som er knyttet til reklame, der bare en liten andel av forespørslene gir deg inntekter. Du kan ende opp med mye data og ikke så mye budsjett.

Jeg jobber med noen tjenester som får 1 milliard forespørsler om dagen, så det gir mening å drifte egen overvåking og logging. Hvis volumene dine er lavere, er tjenester med hosting enklere.


### AWS-tjenester er blandet

Erfaringene mine med AWS-tjenester har vært blandede. Elasticsearch-tjenesten deres har vært ustabil, så vi kjører våre egne instanser for det. CloudWatch-måleverdier er dyre, så vi bruker dem vanligvis bare for måleverdier på «infrastruktur»-nivå i stedet for applikasjonen, det vil si helserelaterte måleverdier der AWS kan vite bedre hva som skjer enn programvare som kjører på instansen. CloudWatch Logs kan være trege med å oppdatere og har ikke så mye metadata. Å kjøre ELK hjelper på det. Hvis jeg virkelig vil ha sanntidsdata, er det bedre å bruke Kafka som transport for logger. Det er ganske godt støttet av Logstash. Å drifte en Kafka-klynge er ikke for pyser, derimot, det er mye synlig rørlegging.


### Kafka

Kommentar: Kafka kan være superknotete noen ganger, eller Kafka kan være steinsolid, så du nesten glemmer at det er der og binder alt sammen. 


Kommentar: Kafka har vært solid, men det var overraskende mye arbeid å få det i gang. Jeg tenker på det som en relasjonsdatabase der du bare jobber på «fysisk» nivå, for eksempel tabellrom, filer og partisjoner. Tidlig var det noen ganger mangel på administrasjonsverktøy, og vi måtte skrive programmer for for eksempel å tilbakestille en forbrukergruppe. http://howfuckedismydatabase.com/nosql/

Kommentar: Vi bruker Kafka som en «buffer» for loggmeldinger og et sted der vi kan gjøre strømprosessering i sanntid av data som kommer fra flere servere. Hvis vi får et DDOS-angrep, trenger vi en måte å analysere data på tvers av flere instanser. Hvis vi logger direkte fra serverne til ELK, kan belastningen sprenge Elasticsearch-klyngen.

Kommentar: Kafka er bra for oss fordi vi, hvis vi får et DDOS-angrep, trenger en måte å analysere data på tvers av flere instanser. Hvis vi logger direkte fra serverne til ELK, kan belastningen sprenge Elasticsearch-klyngen.


Kommentar: Kafka gjør mindre arbeid og er mer effektivt, så det kan håndtere belastningen bedre. Og vi legger Kafka-arbeidet i kø og prøver på nytt. Og at Kafka er overbelastet påvirker ikke brukere som prøver å jobbe interaktivt med Kibana, slik det ville gjort hvis Elasticsearch sliter.

Kommentar:  Strømprosessering handler mest om å se etter misbruk, for eksempel for mye trafikk fra én enkelt IP-adresse på tvers av hele klyngen, og så dele blokkeringen på tvers av hele klyngen.

Kommentar: Pluginen logstash-output-kafka er ganske upålitelig for øyeblikket, derimot. Jeg har blitt bitt av flere av problemene på siden med GitHub-saker, som aldri ser ut til å bli rettet. Jeg vil gå bort fra å bruke den og i stedet sende direkte fra appene våre til Kafka.

Kommentar: Vi sender nå strukturerte hendelser direkte fra appen til Kafka. Hovedmotivasjonen var å røre loggdataene færre ganger og unngå å lese og skrive til disken flere ganger. I systemer med stort volum kan logging kreve mer arbeid enn selve appen. Jeg vurderer å la journald også sende logger direkte, fra et C-program.


### Loki

Hold et øye med Loki. Det er ikke klart ennå, men når det er det, forventer jeg at det passer bedre i denne stakken. Loki er en loggaggregator laget av grafana labs, og bruker en lignende syntaks for skraping og tagger som Prometheus.


### Prometheus + alertmanager + Rollbar + Graylog + Grafana

 Prometheus + alertmanager for måleverdier. <3 Prometheus.

Rollbar/Graylog for logging/feilrapportering (det er noe overlapp her; en liten tjeneste trenger trolig ikke begge).

For øyeblikket går varsler bare til en av noen få Slack-kanaler som interesserte parter har slått på varsler for. Hvis vi var mer seriøse om vakt, ville de gått til PagerDuty/VictorOps og lignende.

Grafana for grafer og dashbord. Ser også ivrig fram til å se om de kommende loggfunksjonene deres gjør Graylog overflødig.


### Thanos

Vi bruker Thanos som frontend for HA-oppsettet vårt. Det vet hvordan HA-par skal dedupliseres.

Vi beholder for øyeblikket 6 måneder med lokale Prometheus-data. Dette fungerer rimelig godt for oss. Men jeg er midt i å rulle ut bucket-lagring til Thanos-oppsettet vårt for langtidslagring av data. I teorien blir GCS-lagring omtrent 30 % billigere enn den standard GCE-persistente disken vi bruker nå.

Vi tar ikke sikkerhetskopi av Prometheus-data akkurat nå. Dataene er egentlig ikke viktige for oss utover å ha nok til varsling. Den samlede utrullingen vår endrer seg så mye fra år til år at historiske data eldre enn noen måneder rett og slett ikke er så interessante. Det kan være interessant å ha noen få nøkkeltall år for år, og jeg kan sette opp et sett med opptaksregler for nøkkeltall og lagre dem med Federation, eller bare la Thanos ta seg av det.

REDIGERT: En liten ansvarsfraskrivelse, jeg er Prometheus-utvikler.


### Prometheus HA

HA i Prometheus gjøres ved duplisering. Du kjører flere poppers, og det finnes måter å polle flere og deduplisere dataene

Skaleringen skjer ved å bestemme nettverket og la ulike Prometheus polle ulike deler av nettverket

Langtidslagring er ikke Prometheus sin sterke side, men avlastes til noe som influx eller timescaledb (som teknisk sett også krysser av for HA) en artikkel jeg leste om det https://blog.timescale.com/prometheus-ha-postgresql-8de68d19b6f5?gi=7df160f10e07

Har ikke prøvd langtidsdelene ennå, siden jeg fortsatt bare eksperimenterer og bruker det til grafer på kort sikt mens librenms overvåker nettverket mitt på lang sikt


###  Datadog + PagerDuty + Threat Stack

Vi bruker Datadog (med PagerDuty) og Threat Stack og kunne ikke vært mer fornøyde. Det eneste jeg har å pirke på ved DD er den relativt høye kostnaden for lagring av måleverdier.


### Zabbix

Zabbix med egendefinerte skript for å overvåke nesten alt. Fungerer som en drøm.


### Outlyer

Jeg bruker Outlyer, men jeg må si fra at jeg jobber her, og å spise sin egen hundemat er et must.

Trenger fortsatt Graylog, Sentry og Statuscake for å supplere.

Det høres partisk ut, men etter å ha kjørt Nagios og andre overvåkingssystemer internt med glede, ville jeg kjøpt en løsning med hosting i enhver ny jobb og kvittet meg med den smerten.


### Nagios + Nagiosgraph

Vi kjører Nagios for all overvåking og varsling. Varsler skjer gjennom e-post (advarsler og kritiske varsler) og hørbare appvarsler (for kritiske varsler).

Nagiosgraph brukes til visualiseringer.

Dette oppsettet har vært svært effektivt for å holde oss grundig informert om hva som skjer i miljøet vårt. Vi kjører og overvåker omtrent 110 oppdragskritiske servere og omtrent 760 datapunkter, og har hatt dette morgensystemet på plass i over sju år.

Jeg vil også gjerne aggregere logger med Graylog eller ELK på et tidspunkt.


### Prometheus + Grafana + AlertManager

Prometheus + Grafana + AlertManager via det fantastiske helm-chartet Prometheus Operator. Logger går fortsatt til LogDNA birch-planen, siden vi la merke til at ELK er for tungt for våre beskjedne 3 til 5 noder på GKE.


### DataDog + Sentry + PagerDuty.

Før kjørte jeg alle overvåkingsløsningene mine selv med alle slags programvare, blant annet Nagios, Icinga, Zabbix, ELK, Greylog2, Influx og mange andre verktøy, men sannheten er at det er altfor mye arbeid å drifte din egen infrastruktur for overvåking, særlig når du kan betale en annen så lave priser for at noen andre skal gjøre det for deg!

Å betale andre for å drifte overvåkingsinfrastrukturen frigjør kundene mine til å fokusere på å drifte plattformene sine i stedet for å overvåke overvåkingen, noe som betyr at verdien de får av stabiliteten på plattformen langt overstiger alle kostnader for overvåking som en tjeneste.


### Sensu + Graphite + ELK

Selskapet mitt er veldig opptatt av selvdriftede ting.

Sensu -> PagerDuty

Graphite/Grafana

ELK (Elasticsearch, Logstash, Kibana)


### Prometheus + Alertmanager

Prometheus + Alertmanager for varsling, teamet mitt mener at enkel overvåking er god overvåking.

Andre systemer som logging og sporing gir rik kontekst for diagnose når vaktpersonen får et varsel, men vi bygger aldri varsling på disse.


### Sensu + Grafana + Graylog + Kibana + NewRelic.

Sensu, grafana, graylog, kibana, newrelic.


### Prometheus + Circonus

Tjenester instrumentert med Prometheus => analyse og visualisering i Circonus


### icinga2 + VictorOps + NewRelic + Sentry + Slack

Vi bruker følgende tjenester:

icinga2 til overvåking og VictorOps til varsling

NewRelic til detaljert overvåking av tjenesten

Sentry til feilsporing i tjenesten

Slack/e-post er en del av varslingen som utløses fra NewRelic eller icinga2


### AppDynamics + Papertrail + PagerDuty + Healthchecks.io + Stackdriver

AppDynamics

Papertrail

PagerDuty

Healthchecks.io

Stackdriver


### icinga2 + elasticsearch

icinga2 med elasticsearch-integrasjon for analyse og graphite+grafana-integrasjon for grafer.

takket være fleksibiliteten i apply-reglene i icinga2 kan utviklerne bare se tjenester de får varsler for.

og gjennom icinga2 director kan programmerere enkelt definere sine egne sjekker (noe de gjør hver få dager – 100 sjekker går ut, 100 andre sjekker kommer inn) i stor skala uten bry.


### DataDog + New Relic + ELK + EFK + Sentry + Alertmanager + VictorOps

Det vi har nå:

DataDog for måleverdier

New Relic for overvåking av applikasjoner

ELK (Elastic Search + Logstash + Kibana) for loggene

Sentry (selvdriftet) for logging av unntak

E-post + Slack + VictorOps for varsling (basert på alvorlighetsgrad)

Det vi vil ha:

Prometheus for måleverdier (Grafana for visualisering)

New Relic (trolig Elastic Search APM) for overvåking av applikasjonene

EFK (elastic search + fluentd + kibana) for logging. Kanskje Loki fra Grafana er klart for produksjon innen vi kommer dit

Sentry for unntakene

Alertmanager + e-post + VictorOps for varslene


### Wavefront + Scalyr + PagerDuty + Stackstorm + Slack

Wavefront + Scalyr + PagerDuty + Stackstorm + Slack (Ansvarsfraskrivelse: jobber hos VMware)


### Telegraf + Prometheus + InfluxDB + Grafana

Telegraf for servermåleverdier som CPU, disk, minne og nettverk. Vi bruker også Telegraf til SNMP-overvåking av nettverksenhetene våre.

Prometheus for applikasjonsmåleverdier. Vi koder helsesjekker inn i applikasjonen som Prometheus skraper.

InfluxDB for lagring av tidsserier. Dit sendes Telegraf-dataene våre.

Grafana for dashbord og varsler. Varslingsmotoren er ikke superrobust, men den gjør jobben. Vi sender også varsler til Slack.

Det jeg ikke har akkurat nå, er en sentralisert loggløsning. ELK er kraftig, men vanskelig å sette opp og drifte, og jeg kjenner ikke til noen gratis alternativer som er nær nok til at jeg kan se på dem.


### Sematext + Logagent + Experience

Sematext for måleverdier, for logger, for spor, snart også for overvåking av ekte brukere. Enklere/billigere enn å bruke N ulike verktøy/tjenester, etter min mening.

Til videresending av logger pleide vi å bruke rsyslog, og så byttet vi til Logagent.

Til krasjrapportering i frontend bruker vi Sentry, men vi bytter snart til Experience.

Ansvarsfraskrivelse: jeg er en Sematextan.


### Azure Monitor/Analytics + OpsGenie

Jeg skulle ønske at Log Analytics hadde et bedre grensesnitt. Vi går bort fra splunk, som var mye enklere å navigere i.


### Prometheus + Alertmanager + Grafana + Splunk + PagerDuty

Prometheus, Alertmanager, Grafana, Splunk, PagerDuty

Du vil virkelig ikke drifte ditt eget varslingssystem. Du kan erstatte Splunk med ELK med mindre sikkerhetsteamet ditt foretrekker Splunk.


### Telegraf + Prometheus + Grafana + Alertmanager

Telegraf som innsamler, Prometheus + Alertmanager for overvåking og varsling, integrert med slack-kanaler og pagerduty for kritiske varsler. Grafana for visualisering av vertsmåleverdier.


### Prometheus + Grafana + Cloudwatch + sentry + kibana + elasticsearch

Prometheus for måleverdier + varsler

Grafana for Prometheus-dashbord

Cloudwatch som overvåker Prometheus-instanser

sentry for sporing av unntak

kibana + elasticsearch

graylog

prometheus Push Gateway for batch/cron-jobber

SOP https://github.com/rapidloop/sop for å „push/forward“-e måleverdier fra én Prometheus-instans til en annen

klienter bruker enten Prometheus-klientene. Vi prøver å bruke opencensus.io på klientsiden


### PagerDuty + Monitis

PagerDuty + Monitis. Også noen skreddersydde Azure Functions for å teste helsen til noen tjenester.

Ser på å innføre Prometheus og Grafana i år


### Prometheus + Grafana + Bosun

Prometheus til å lagre tidsseriedataene. Grafana til visualisering. Bosun til håndtering av varsler.


### Azure Monitor/Analytics/Insights/Dashboards

Rent Azure-miljø, Azure Monitor, Log Analytics, App Insights, Azure Dashboards + Pager Duty


### Grafana + Monitis + OpsGenie + Slack

Grafana til å overvåke containertjenester i Kubernetes via Prometheus

Monitis til ende-til-ende-overvåking av tjenester, hovedsakelig for web-API-er og webapplikasjoner

OpsGenie til håndtering av varsler

Slack for å få statusinformasjon fra systemene våre


### Checkly + AppOptics + Cloudwatch + Heroku + Pagerduty + Papertrail

(Dev)ops-ingeniør i lang tid her. Vokste opp med Nagios. Ville gjerne hatt meninger om min egenfinansierte SaaS https://checklyhq.com. Vi gjør API-overvåking og overvåking av transaksjoner på nettsteder, med ganske dyptgående varsling.

Jeg startet Checkly fordi aktiv / syntetisk overvåking innen API-er var litt begrenset (og dyr). Nettleserbasert / skriptstyrt overvåking er enda mer proprietær og dyr. Vi bruker Puppeteer og holder prisene så lave som mulig.

Vår overvåkingsstakk:

Checkly (spiser vår egen hundemat ...)

AppOptics (egendefinerte grafer)

AWS Cloudwatch & SNS for SMS-meldinger.

innebygd varsling i Heroku.

Pagerduty

Papertrail


### Instana + Logz.io + slack

Instana varsler oss i slack om infrastrukturproblemer eller redusert ytelse, og vi har konfigurert logz.io til å varsle i slack ved et visst volum av logger på feilnivå fra applikasjonslaget.


### SignalFX + Splunk + PagerDuty + Slack

Bruker for øyeblikket: SignalFX, Splunk, PagerDuty og Slack. Jeg er ingen stor fan av SignalFX, selv om støtteteamet deres er superhyggelig og responsivt. Jeg liker Splunk (verdt det hvis du har råd), PagerDuty og Slack.

Jeg pleide å bruke TICK-stakken der det meste av C-en egentlig var en G, altså Grafana, selv om jeg brukte Chronograf litt. Det var fantastisk, men en plage å drifte. Det klassiske dilemmaet SaaS mot selvdrift.

Jeg har brukt DataDog, New Relic, Graylog, ELK og BugSnag. Jeg liker DataDog og New Relic veldig godt, Graylog er ganske bra. Jeg er ikke noen stor fan av ELK, derimot. BugSnag er fint, jeg føler faktisk at sporing av feil/unntak i mange tilfeller er en ganske god erstatning for full loggovervåking.


### ELK + Prometheus + Grafana

Som andre bruker vi ELK til logger og Prometheus+Grafana til alt annet.

Det er enkelt å vedlikeholde dette oppsettet hvis du gir deg selv lov til av og til å miste data. Hvis for eksempel ElasticSearch-databasen vår får et anfall (noe som dessverre skjer hver 2.–3. måned for oss), gidder vi ikke HA, men dumper dataene og går videre med livet. Hvis du absolutt må ha HA eller langtidslagring, lykke til.


### Datadog + Prometheus + Grafana

Jeg satte opp Datadog på månedsbasis, fordi det da jeg kom hit ikke fantes noen overvåking og ingen varsling. Bare et par av nettstedene våre ble overvåket hvert 5. minutt for oppetid. Datadog er uten tvil enklest å sette opp. Når jeg er ferdig med å ta tak i alle de andre problemene, bytter jeg til Prometheus+Grafana. Ikke 100 % bestemt på loggadministrasjon ennå.

### Nagios + ELK

Vi støtter over 100 produkter.

For lokal drift er det for det meste Nagios og ELK. For skyen går vi fra DataDog til NewRelic.


### Datadog mot Site24x7 + StatusCake + PagerDuty + SumoLogic + Slack

Vi pleide å bruke datadog, men fant ut at det var altfor dyrt for våre behov. Misforstå meg rett, det er fantastisk, men det har en enorm kostnad. Vi klarte å sette opp site24x7.com med et årsabonnement for omtrent 2–3 måneders kostnad hos DD.

Vår overvåkingsstakk:

Site24x7 - APM, overvåking av eksterne URL-er, overvåking av SMTP-epostflyt, utløp av ssl og prosessovervåking.

StatusCake - til overvåking og bekreftelse av URL-er - Det er vår reserve i tilfelle site24x7 går glipp av noe (det gjør det ikke), men SC er mer fleksibelt for overvåking av eksterne porter og tjenester for våre behov.

Begge verktøyene eskalerer til PagerDuty, og så får vi eskaleringene våre i slack.

SumoLogic - til loggovervåking (det er et flott verktøy, men litt komplisert for våre behov)

Fra slack kan vi kvittere for eller utbedre varselet.

Vi har så mange automatiseringer i site24x7 som kobler til commando.io for det vi kaller «BedOps» – der et varsel utløses, setter vi i gang noen skript eller automatiseringer som et forsøk på å rette opp situasjonen (99 % av tiden holder automatiseringen + skriptene våre oss unna problemer)

Vi har interne driftshåndbøker i kunnskapsbasen vår for når automatiseringene svikter eller hvis det er noe utenfor omfanget som må rettes.


### Prometheus + AlertManager + Grafana + Stackdriver

Prometheus (Operator) / AlertManager / Grafana for måleverdier i GKE-klyngene og de virtuelle maskinene våre.

Google Stackdriver for logger (siden det er inkludert og aktivt som standard og foreløpig er nok for våre behov).


### Zabbix

Zabbix til alt. Ingen ekstra programvare nødvendig.
