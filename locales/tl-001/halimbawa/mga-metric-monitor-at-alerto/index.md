# Mga metric, monitor, alerto

Nilalaman:

* [Buod](#buod)
  * [Isyu](#isyu)
  * [Desisyon](#desisyon)
  * [Katayuan](#katayuan)
* [Mga detalye](#mga-detalye)
  * [Mga palagay](#mga-palagay)
  * [Mga limitasyon](#mga-limitasyon)
  * [Mga posisyon](#mga-posisyon)
  * [Argumento](#argumento)
  * [Mga implikasyon](#mga-implikasyon)
* [Kaugnay](#kaugnay)
  * [Mga kaugnay na desisyon](#mga-kaugnay-na-desisyon)
  * [Mga kaugnay na requirement](#mga-kaugnay-na-requirement)
  * [Mga kaugnay na artifact](#mga-kaugnay-na-artifact)
  * [Mga kaugnay na prinsipyo](#mga-kaugnay-na-prinsipyo)
* [Mga tala](#mga-tala)
  * [Mga freeform na text message kontra mga structured na event message](#mga-freeform-na-text-message-kontra-mga-structured-na-event-message)
  * [Mas madali ang Graylog](#mas-madali-ang-graylog)
  * [Nangangailangan ng kaunting tuning ang Prometheus](#nangangailangan-ng-kaunting-tuning-ang-prometheus)
  * [Magkahalo ang mga serbisyo ng AWS](#magkahalo-ang-mga-serbisyo-ng-aws)
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
  * [Datadog kontra Site24x7 + StatusCake + PagerDuty + SumoLogic + Slack](#datadog-kontra-site24x7--statuscake--pagerduty--sumologic--slack)
  * [Prometheus + AlertManager + Grafana + Stackdriver](#prometheus--alertmanager--grafana--stackdriver)
  * [Zabbix](#zabbix-1)


## Buod


### Isyu

Gusto naming gumamit ng mga metric, monitor, at alerto, dahil gusto naming malaman kung gaano kahusay gumagana ang aming mga application, at malaman kung kailan may problema.


### Desisyon

WIP.


### Katayuan

Nangangalap ng impormasyon. Nagsisimula kami sa mga makatwirang dulo ng spectrum: ang pinakamadalas na inirerekomendang mas lumang libreng tool (Nagios) at ang pinakamadalas na inirerekomendang mas bagong bayad na tool (New Relic).


## Mga detalye


### Mga palagay

Gusto naming gumawa ng mga web app na makabago, mabilis, maaasahan, responsive, atbp.

Gusto naming bumili kaysa bumuo.


### Mga limitasyon

Gusto namin ng tooling na gumagana nang maayos sa aming devops pipeline at sa aming mga deployment cloud.


### Mga posisyon

Sinasaliksik namin ngayon ang mga posisyon.


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

  
### Argumento

Sa ngayon, ang Nagios at New Relic ang mga dulo ng spectrum. Ang Nagios ang pinakamatanda, pinakasimple, libre, at viable na tool. Ang New Relic ang pinakabago ang mga feature, pinakakumpleto, bayad, at viable na tool. Magsisimula kami sa mga pagsusuri sa mga ito. Kung kinakailangan, lilipat kami papasok sa spectrum.  

Sa ngayon, ang Zabbix ang may pinakamahusay na mga rekomendasyon, at nag-aalok din ng pinakakumpletong kakayahan.

Sa ngayon, ang ELK ang may pinakamahusay na popularidad ng open-source na build-kaysa-bumili.

Sa ngayon, ang Prometheus + Graphana ang may pinakamahusay na popularidad.


### Mga implikasyon

TODO.


## Kaugnay


### Mga kaugnay na desisyon

Makaaapekto ang mga pagpipilian sa testability, telemetry, at malamang sa iba pang sistema tulad ng para sa customer service, site reliability engineering, atbp.


### Mga kaugnay na requirement

TODO.


### Mga kaugnay na artifact

TODO.


### Mga kaugnay na prinsipyo

Madaling baligtarin.

Pangangailangan ng bilis.


## Mga tala


Isang medyo magandang open source stack ay:

* Prometheus para sa mga metric at alerting batay sa mga metric

* Grafana para ipakita ang mga metric

* Elasticsearch/Logstash/Kibana (ELK) para sa mga log at structured na event

* Pushover para sa mga mobile notification


### Mga freeform na text message kontra mga structured na event message

Mga freeform na text message: halimbawa, ang uri ng random na bagay na makikita mo sa /var/log/messages, at isang bagay na sinadyang buuin ng application. Kapaki-pakinabang ang mga mensahe para matukoy ang iba pang nangyayari sa makina tulad ng kakulangan sa memory o mga error sa hardware, ngunit marami itong basura. 

Mga structured na event message: binubuo ng application, na may nakapirmi o dynamic na hanay ng mga attribute, hal. HTTP request log, accounting log, user login.

Sa pangkalahatan, mainam na itala ang mga detalye ng bawat request sa paraang maaari mong himayin batay sa mga attribute. Kaya ang pagdaragdag ng hal. userid o sessionid sa lahat ay nagpapahintulot sa iyong makapag-trace. Mahusay din ang tahasang tracing, siyempre. Ang paggamit ng ELK para dito ay uri ng bersyon ng mahirap ng https://www.honeycomb.io/


### Mas madali ang Graylog

Mas madaling i-spin up ang Graylog ayon sa aking karanasan.


### Nangangailangan ng kaunting tuning ang Prometheus

Karaniwan akong masaya sa Prometheus para sa mga metric. Nangangailangan ng kaunting tuning ang alerting, ngunit medyo maganda. Depende ito sa iyong application. Sa palagay ko, pinakamainam na mag-alerto sa mga kondisyong nakikita ng end-user, hindi sa mga pinagbabatayang sanhi. Halimbawa, mabuti ang oras ng pag-load ng page, hindi ang bilang ng request kada segundo. Bagama't ang zero na request kada segundo ay nagpapahiwatig na may mali.

Ang bentahe ng isang serbisyo ay nag-aalok sila ng karagdagang katalinuhan agad-agad. Karaniwan kong gusto ang Datadog. Ang mga serbisyo ay maaaring nakakatakot ang halaga kung marami kang data, at minsan ay may mga modelo ng pagpepresyo na hindi cloud friendly, hal. paniningil kada instance, kung dynamic ang mga instance. May pagkakaiba rin sa pagitan ng mga serbisyo kung saan ang bawat request ay mula sa nagbabayad na user at yaong may kaugnayan sa advertising, kung saan maliit na porsyento lang ng mga request ang kumikita sa iyo. Maaari kang mauwi sa maraming data at hindi gaanong badyet.

Gumagawa ako sa ilang serbisyong tumatanggap ng 1B request kada araw, kaya makatuwirang i-host ang sarili naming monitoring at logging. Kung mas mababa ang iyong volume, mas madali ang mga hosted na serbisyo.


### Magkahalo ang mga serbisyo ng AWS

Magkahalo ang aking karanasan sa mga serbisyo ng AWS. Hindi maaasahan ang kanilang Elasticsearch service, kaya nagpapatakbo kami ng sarili naming mga instance para doon. Mahal ang mga metric ng CloudWatch, kaya karaniwan lang namin silang ginagamit para sa mga metric na antas ng "infrastructure" kaysa sa application, ibig sabihin mga metric na may kaugnayan sa kalusugan kung saan mas alam ng AWS kung ano ang nangyayari kaysa sa software na tumatakbo sa instance. Maaaring mabagal mag-update ang CloudWatch Logs at hindi gaanong marami ang metadata. Nakatutulong ang pagpapatakbo ng ELK doon. Kung talagang gusto ko ng real time na data, mas mainam ang paggamit ng Kafka bilang transport para sa mga log. Medyo suportado iyon ng Logstash. Hindi para sa mahina ang loob ang pamamahala ng Kafka cluster, gayunpaman, marami itong nakalantad na plumbing.


### Kafka

Komento: Minsan ay maaaring napakahirap ng Kafka, o maaaring matatag na matatag ang Kafka na halos makalimutan mong naroon ito at nagbubuklod sa lahat. 


Komento: Naging matatag ang Kafka, ngunit nakagugulat ang dami ng trabahong kailangan para mapatakbo ito. Para sa akin ay parang relational database ito ngunit sa "pisikal" na layer ka lang gumagawa, hal. mga tablespace, file at partition. May mga pagkakataon noong simula na kulang ang mga management utility, at kinailangan naming magsulat ng mga programa para hal. i-reset ang consumer group. http://howfuckedismydatabase.com/nosql/

Komento: Ginagamit namin ang Kafka bilang "buffer" para sa mga log message at lugar kung saan makagagawa kami ng real time na stream processing sa data na nanggagaling sa maraming server. Kung makaranas kami ng DDOS attack, kailangan namin ng paraan para suriin ang data sa maraming instance. Kung direkta kaming nagla-log mula sa mga server papuntang ELK, maaaring pasabugin ng load ang Elasticsearch cluster.

Komento: Mabuti ang Kafka para sa amin dahil kung makaranas kami ng DDOS attack, kailangan namin ng paraan para suriin ang data sa maraming instance. Kung direkta kaming nagla-log mula sa mga server papuntang ELK, maaaring pasabugin ng load ang Elasticsearch cluster.


Komento: Mas kaunti ang trabaho ng Kafka at mas mahusay, kaya mas mahusay nitong nahahawakan ang load. At ini-queue namin ang trabaho ng Kafka at sinusubukang muli. At ang pagiging overloaded ng Kafka ay hindi nakaaapekto sa mga user na gumagawa ng interactive na trabaho sa Kibana, di tulad kung nahihirapan ang Elasticsearch.

Komento:  Ang stream processing ay kadalasang naghahanap ng pang-aabuso, hal. sobrang trapiko mula sa iisang IP sa buong cluster, at pagkatapos ay ibabahagi ang block sa buong cluster.

Komento: Medyo hindi maaasahan ang logstash-output-kafka plugin sa ngayon gayunpaman. Natamaan na ako ng ilang isyu sa pahina ng GitHub issues nito, na tila hindi kailanman naaayos. Gusto kong lumayo sa paggamit nito, at magpadala na lang nang direkta mula sa aming mga app papuntang Kafka.

Komento: Nagpapadala na kami ngayon ng mga structured na event nang direkta mula sa app papuntang Kafka. Ang pangunahing motibasyon ay ang mas kaunting paghawak sa log data at pag-iwas sa pagbabasa at pagsusulat sa disk nang maraming beses. Sa mga sistemang mataas ang volume, maaaring mas malaki ang trabaho ng logging kaysa sa app mismo. Pinag-iisipan kong gawing direktang magpadala rin ang journald ng mga log, mula sa isang C program.


### Loki

Bantayan nang mabuti ang Loki. Hindi pa ito handa ngunit kapag handa na ito, inaasahan kong mas babagay ito sa stack na ito. Ang Loki ay log aggregator na nilikha ng grafana labs, gumagamit ito ng katulad na scraping at tag syntax gaya ng Prometheus.


### Prometheus + alertmanager + Rollbar + Graylog + Grafana

 Prometheus + alertmanager para sa mga metric. <3 Prometheus.

Rollbar/Graylog para sa logging/error reporting (may ilang pagsasapaw dito; malamang na hindi kailangan ng maliit na serbisyo ang pareho).

Sa ngayon, napupunta lang ang mga alerto sa isa sa ilang Slack channel na may naka-on na notification ang mga interesadong panig. Kung mas seryoso kami sa on-call, mapupunta ang mga ito sa PagerDuty/VictorOps/atbp.

Grafana para sa mga graph at dashboarding. Sabik ding naghihintay na makita kung mapapalitan ng paparating nilang logging facility ang Graylog.


### Thanos

Ginagamit namin ang Thanos bilang front-end para sa aming HA setup. Alam nito kung paano mag-de-duplicate ng mga HA pair.

Kasalukuyan kaming nagtatago ng 6 na buwan ng lokal na data ng Prometheus. Medyo mahusay itong gumagana para sa amin. Ngunit nasa gitna ako ng pag-roll out ng bucket storage sa aming Thanos setup para sa pangmatagalang imbakan ng data. Sa teorya, mga 30% na mas mura ang GCS storage kaysa sa GCE standard persistent disk na ginagamit namin ngayon.

Hindi kami nagba-backup ng data ng Prometheus sa ngayon. Hindi talaga mahalaga sa amin ang data lampas sa pagkakaroon ng sapat para sa alerting. Napakalaki ng pagbabago ng aming kabuuang fleet deployment taon-taon kaya hindi gaanong kawili-wili ang historical data na mas matanda sa ilang buwan. Maaaring kawili-wiling magkaroon ng ilang pangunahing stats taon-sa-taon, maaari akong mag-setup ng core-stats na hanay ng recording rule at iimbak ang mga iyon gamit ang Federation o hayaan na lang ang Thanos na pangasiwaan ito.

EDIT: Maliit na disclaimer, isa akong Prometheus developer.


### Prometheus HA

Ginagawa ang HA sa Prometheus sa pamamagitan ng duplikasyon, nagpapatakbo ka ng maraming poller, may mga paraan para mag-poll ng marami at mag-deduplicate ng data

Ang pag-scale ay sa pamamagitan ng pagpapasya sa network at pagpapa-poll sa iba't ibang Prometheus ng iba't ibang bahagi ng network

Hindi ang pangmatagalang imbakan ang malakas na bahagi ng prom ngunit inililipat ito sa isang bagay tulad ng influx o timescaledb (na teknikal na may HA checkmark din) artikulong nabasa ko tungkol dito https://blog.timescale.com/prometheus-ha-postgresql-8de68d19b6f5?gi=7df160f10e07

Hindi ko pa nasusubukan ang pangmatagalang bahagi dahil nag-eeksperimento pa lang ako at ginagamit ito para sa panandaliang mga graph habang sinusubaybayan ng librenms ang aking network para sa pangmatagalan


### Datadog + PagerDuty + Threat Stack

Ginagamit namin ang Datadog (kasama ang PagerDuty) at Threat Stack at hindi na kami hihingi pa ng mas higit. Ang tanging reklamo ko sa DD ay ang medyo mataas na gastos ng imbakan ng metric.


### Zabbix

Zabbix na may mga custom script para subaybayan ang halos lahat. Gumagana nang kamangha-mangha.


### Outlyer

Gumagamit ako ng Outlyer, ngunit kailangan kong ipaalam na dito ako nagtatrabaho, at dapat gamitin mismo ang sariling produkto.

Kailangan pa rin ng Graylog, Sentry at Statuscake para mapahusay.

Mukhang may kinikilingan, ngunit matapos masayang magpatakbo ng Nagios at iba pang monitoring system sa loob, bibili ako ng hosted na solusyon sa anumang bagong trabaho at ipapasa ang sakit na iyon.


### Nagios + Nagiosgraph

Nagpapatakbo kami ng Nagios para sa lahat ng monitoring at alerting. Nangyayari ang mga alerto sa pamamagitan ng e-mail (mga babala at kritikal na abiso) at naririnig na abiso ng app (para sa mga kritikal na alerto).

Ginagamit ang Nagiosgraph para sa mga visualization.

Napakaepektibo ng setup na ito sa pagpapanatiling lubusan kaming may alam sa nangyayari sa aming environment. Nagpapatakbo at nagmo-monitor kami ng humigit-kumulang 110 mission-critical na server at humigit-kumulang 760 data point, at mahigit pitong taon na naming ginagamit ang sistemang ito.

Gusto ko ring mag-aggregate ng mga log gamit ang Graylog o ELk balang araw.


### Prometheus + Grafana + AlertManager

Prometheus + Grafana + AlertManager sa pamamagitan ng kahanga-hangang Prometheus Operator helm chart. Napupunta pa rin ang log sa LogDNA birch plan dahil napansin naming masyadong mabigat ang ELK para sa aming mapagkumbabang min 3 max 5 na node sa GKE.


### DataDog + Sentry + PagerDuty.

Dati kong pinapatakbo ang lahat ng sarili kong monitoring solution gamit ang lahat ng uri ng software kasama ang Nagios, Icinga, Zabbix, ELK, Greylog2, Influx, at maraming ibang tool, ngunit ang totoo ay masyadong maraming pagsisikap ang kasangkot sa pagpapatakbo ng sarili mong monitoring infrastructure, lalo na kung maaari kang magbayad ng napakababang halaga sa iba para gawin ito para sa iyo!

Ang pagbabayad sa iba para patakbuhin ang monitoring infra ay nagpapalaya sa aking mga kliyente na tumuon sa pagpapatakbo ng kanilang mga platform sa halip na pagmo-monitor sa monitoring, ibig sabihin ang halagang nakukuha nila mula sa katatagan ng kanilang platform ay higit na mas malaki kaysa sa anumang gastos ng Monitoring as a Service.


### Sensu + Graphite + ELK

Malaki ang hilig ng kumpanya ko sa mga self-hosted.

Sensu -> PagerDuty

Graphite/Grafana

ELK (Elasticsearch, Logstash, Kibana)


### Prometheus + Alertmanager

Prometheus + Alertmanager para sa alerting, naniniwala ang aking koponan na ang simpleng monitoring ay mabuting monitoring.

Magbibigay ng mayamang konteksto ang ibang sistema tulad ng logging at tracing para sa pag-diagnose kapag nakatanggap ng alerto ang on-call, ngunit hindi kami kailanman bumubuo ng alerting sa mga ito.


### Sensu + Grafana + Graylog + Kibana + NewRelic.

Sensu, grafana, graylog, kibana, newrelic.


### Prometheus + Circonus

Mga serbisyong may Prometheus instrumentation => Circonus analytics at visualization


### icinga2 + VictorOps + NewRelic + Sentry + Slack

Ginagamit namin ang mga sumusunod na serbisyo:

icinga2 para sa monitoring at VictorOps para sa alerting

NewRelic para sa detalyadong monitoring ng serbisyo

Sentry para sa error tracking sa serbisyo

Bahagi ng alerting ang Slack/Email na nati-trigger mula sa NewRelic o icinga2


### AppDynamics + Papertrail + PagerDuty + Healthchecks.io + Stackdriver

AppDynamics

Papertrail

PagerDuty

Healthchecks.io

Stackdriver


### icinga2 + elasticsearch

icinga2 na may integrasyon ng elasticsearch para sa pagsusuri at integrasyon ng graphite+grafana para sa mga graph.

salamat sa flexibility ng mga apply rule sa icinga2, ang mga developer ay makakakita lang ng mga serbisyong tumatanggap sila ng abiso.

at sa pamamagitan ng icinga2 director, madaling makapagtatakda ang mga programmer ng sarili nilang mga check (na ginagawa nila, tuwing ilang araw - 100 check ang lumalabas, 100 ibang check ang pumapasok) sa malawakang sukat nang walang abala.


### DataDog + New Relic + ELK + EFK + Sentry + Alertmanager + VictorOps

Ano ang mayroon kami ngayon:

DataDog para sa mga metric

New Relic para sa application monitoring

ELK (Elastic Search + Logstash + Kibana) para sa mga log

Sentry (self-hosted) para sa pag-log ng mga exception

Mga Email + Slack + VictorOps para sa alerting (batay sa tindi)

Ano ang gusto naming magkaroon:

Prometheus para sa mga metric (Grafana para sa visualization)

New Relic (marahil Elastic Search APM) para sa application monitoring

EFK (elastic search + fluentd + kibana) para sa logging. Marahil, magiging prod-ready na ang Loki ng Grafana pagdating namin doon

Sentry para sa mga exception

Alertmanager + email + VictorOps para sa mga alerto


### Wavefront + Scalyr + PagerDuty + Stackstorm + Slack

Wavefront + Scalyr + PagerDuty + Stackstorm + Slack (Disclaimer: nagtatrabaho sa VMware)


### Telegraf + Prometheus + InfluxDB + Grafana

Telegraf para sa mga server metric tulad ng CPU, Disk, Memory at Network. Ginagamit din namin ang Telegraf para sa SNMP monitoring ng aming mga network device.

Prometheus para sa mga application metric. Nagko-code kami ng mga health check sa aming application na ini-scrape ng Prometheus.

InfluxDB para sa time-series storage. Dito ipinapadala ang aming data ng Telegraf.

Grafana para sa mga dashboard at alerto. Hindi napakatibay ang alerting engine, ngunit nagagawa nito ang trabaho. Nagpapadala rin kami ng mga alerto sa Slack.

Ang wala ako ngayon ay sentralisadong solusyon sa logging. Makapangyarihan ang ELK ngunit mahirap i-set up at pamahalaan, at wala akong alam na mga libreng alternatibong sapat na malapit para tingnan.


### Sematext + Logagent + Experience

Sematext para sa mga metric, para sa mga log, para sa mga trace, malapit na rin para sa real user monitoring. Mas simple/mas mura kaysa sa paggamit ng N iba't ibang tool/serbisyo, sa aking palagay.

Para sa log shipping dati kaming gumagamit ng rsyslog at pagkatapos ay lumipat kami sa Logagent.

Para sa frontend crash reporting gumagamit kami ng Sentry, ngunit lilipat kami sa Experience sa lalong madaling panahon.

Disclaimer: Isa akong Sematextan.


### Azure Monitor/Analytics + OpsGenie

Sana mas maganda ang interface ng Log Analytics. Lumilipat kami palayo sa splunk, na mas madaling i-navigate.


### Prometheus + Alertmanager + Grafana + Splunk + PagerDuty

Prometheus, Alertmanager, Grafana, Splunk, PagerDuty

Talagang ayaw mong magpatakbo ng sarili mong notification system. Maaari mong palitan ang Splunk ng ELK maliban kung mas gusto ng iyong Security team ang Splunk.


### Telegraf + Prometheus + Grafana + Alertmanager

Telegraf bilang collector, Prometheus + Alertmanager para sa monitoring at alerting, naka-integrate sa mga slack channel at pagerduty para sa mga kritikal na alerto. Grafana para sa host metric visualization.


### Prometheus + Grafana + Cloudwatch + sentry + kibana + elasticsearch

Prometheus para sa mga metric + alerto

Grafana para sa mga dashboard ng Prometheus

Cloudwatch na nagmo-monitor sa mga instance ng Prometheus

sentry para sa exception tracking

kibana + elasticsearch

graylog

prometheus Push Gateway para sa batch/cronjob

SOP https://github.com/rapidloop/sop para mag-„push/forward“ ng mga metric mula sa 1 instance ng Prometheus patungo sa isa pa

ang mga client ay gumagamit ng mga Prometheus client. Sinisikap naming gamitin ang opencensus.io sa panig ng client


### PagerDuty + Monitis

PagerDuty + Monitis. Gayundin ang ilang bespoke na Azure Functions para sa pagsubok ng kalusugan ng ilang serbisyo.

Balak magpakilala ng Prometheus at Grafana ngayong taon


### Prometheus + Grafana + Bosun

Prometheus para sa pag-iimbak ng time series data. Grafana para sa visualization. Bosun para sa pamamahala ng alerto.


### Azure Monitor/Analytics/Insights/Dashboards

Tindahang Azure lamang, Azure Monitor, Log Analytics, App Insights, Azure Dashboards + Pager Duty


### Grafana + Monitis + OpsGenie + Slack

Grafana para sa pagmo-monitor ng mga container service sa Kubernetes sa pamamagitan ng Prometheus

Monitis para sa end-to-end na service monitoring pangunahin para sa mga web API at web application

OpsGenie para sa pamamahala ng alerto

Slack para sa pagkuha ng impormasyon sa katayuan mula sa aming mga sistema


### Checkly + AppOptics + Cloudwatch + Heroku + Pagerduty + Papertrail

Matagal nang (dev)ops engineer dito. Lumaki sa Nagios. Gusto kong marinig ang mga opinyon tungkol sa aking bootstrapped na SaaS https://checklyhq.com. Gumagawa kami ng API monitoring at site transaction monitoring na may medyo malalim na alerting.

Sinimulan ko ang Checkly dahil medyo limitado (at mahal) ang active / synthetic monitoring sa larangan ng API. Mas proprietary at mahal pa ang browser-based / scripted monitoring. Gumagamit kami ng Puppeteer at pinananatiling kasing-baba ng posible ang presyo.

Aming monitoring stack:

Checkly (dog fooding...)

AppOptics (custom graphing)

AWS Cloudwatch at SNS para sa mga SMS message.

built-in na alerting ng Heroku.

Pagerduty

Papertrail


### Instana + Logz.io + slack

Inaalerto kami ng Instana sa slack tungkol sa mga problema sa infrastructure o pagbaba ng performance, at kino-configure namin ang logz.io na mag-alerto sa slack sa isang partikular na volume ng mga log na antas-error mula sa application layer.


### SignalFX + Splunk + PagerDuty + Slack

Kasalukuyang ginagamit: SignalFX, Splunk, PagerDuty at Slack. Hindi ako malaking tagahanga ng SignalFX bagama't napakabait at tumutugon ng kanilang support team. Gusto ko ang Splunk (sulit kung kaya mong bayaran), PagerDuty at Slack.

Dati kong ginagamit ang TICK stack kung saan ang karamihan sa C ay talagang G, ibig sabihin Grafana bagama't ginamit ko nang kaunti ang Chronograf. Napakahusay noon ngunit mahirap pamahalaan. Ang klasikong dilemma ng SaaS kontra self-hosting.

Nagamit ko na ang DataDog, New Relic, Graylog, ELK at BugSnag. Gustong-gusto ko ang DataDog at New Relic, medyo maganda ang Graylog. Hindi ako malaking tagahanga ng ELK gayunpaman. Maganda ang BugSnag, pakiramdam ko ay medyo magandang kapalit ng buong log monitoring ang pagsubaybay sa mga error/exception, sa maraming kaso.


### ELK + Prometheus + Grafana

Tulad ng iba, ginagamit namin ang ELK para sa mga log at Prometheus+Grafana para sa lahat ng iba pa.

Madali ang pagpapanatili ng setup na ito kung bibigyan mo ang sarili mo ng pahintulot na paminsan-minsang mawalan ng data. Halimbawa, kung magkaproblema ang aming ElasticSearch database (na nangyayari kada 2-3 buwan para sa amin sa kasamaang-palad) hindi na kami nag-aabalang mag-HA at sa halip ay itinatapon ang data at nagpapatuloy sa buhay. Kung talagang kailangan mo ng HA o pangmatagalang retention, good luck.


### Datadog + Prometheus + Grafana

Nag-set up ako ng Datadog nang buwan-buwan dahil nang dumating ako rito, walang monitoring at walang alerting. Ilang site lang namin ang minomonitor kada 5m para sa uptime. Walang duda na ang Datadog ang pinakamadaling i-setup. Kapag natapos ko nang tugunan ang lahat ng iba pang isyu, lilipat ako sa Prometheus+Grafana. Hindi pa 100% desidido sa log management.


### Nagios + ELK

Mahigit 100+ produkto ang sinusuportahan namin.

Para sa on-prem, kadalasan ay Nagios at ELK. Para sa cloud, lumilipat kami mula DataDog patungong NewRelic.


### Datadog kontra Site24x7 + StatusCake + PagerDuty + SumoLogic + Slack

Dati kaming gumagamit ng datadog ngunit natuklasan naming masyadong mahal para sa aming pangangailangan. Huwag mo akong mamali, kamangha-mangha ito ngunit napakalaki ng gastos. Nagawa naming i-setup ang site24x7.com sa taunang subscription sa halagang mga 2-3 buwan ng gastos mula sa DD.

Aming monitoring stack:

Site24x7 - APM, External URL monitoring, SMTP mailflow monitoring, ssl expirations at process monitoring.

StatusCake - para sa URL monitoring at kumpirmasyon - Ito ang aming backup kung sakaling may makaligtaan ang site24x7 (hindi nito ginagawa) ngunit mas flexible ang SC para sa external port at service monitoring para sa aming pangangailangan.

Parehong nag-eescalate ang dalawang tool sa PagerDuty, at pagkatapos ay natatanggap namin ang aming mga escalation sa slack.

SumoLogic - para sa log monitoring (mahusay itong tool ngunit medyo masalimuot para sa aming pangangailangan)

Mula sa slack maaari naming i-ack, o lutasin ang alerto.

Mayroon din kaming maraming automation ng site24x7 na kumokonekta sa commando.io para sa 'BedOps' ayon sa tawag namin - kung saan kapag na-trigger ang isang alerto, nagsisimula kami ng ilang script o automation bilang pagtatangkang lutasin ang sitwasyon (99% ng oras, ang automation + ang aming mga script ang nagpapanatili sa amin sa labas ng problema)

Mayroon kaming mga panloob na runbook sa aming KB para sa kapag nabigo ang mga automaton o kung may bagay na wala sa saklaw na kailangang ayusin.


### Prometheus + AlertManager + Grafana + Stackdriver

Prometheus (Operator) / AlertManager / Grafana para sa mga metric sa aming mga GKE cluster at VM.

Google Stackdriver para sa mga Log (dahil kasama ito at aktibo bilang default at sa kasalukuyan ay sapat para sa aming pangangailangan).


### Zabbix

Zabbix para sa lahat. Walang karagdagang software na kailangan.
