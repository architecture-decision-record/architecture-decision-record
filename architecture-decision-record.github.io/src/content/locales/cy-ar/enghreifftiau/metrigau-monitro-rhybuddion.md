# Metrigau, monitro, rhybuddion

Cynnwys:

* [Crynodeb](#crynodeb)
  * [Mater](#mater)
  * [Penderfyniad](#penderfyniad)
  * [Statws](#statws)
* [Manylion](#manylion)
  * [Rhagdybiaethau](#rhagdybiaethau)
  * [Cyfyngiadau](#cyfyngiadau)
  * [Safbwyntiau](#safbwyntiau)
  * [Dadl](#dadl)
  * [Goblygiadau](#goblygiadau)
* [Cysylltiedig](#cysylltiedig)
  * [Penderfyniadau cysylltiedig](#penderfyniadau-cysylltiedig)
  * [Gofynion cysylltiedig](#gofynion-cysylltiedig)
  * [Arteffactau cysylltiedig](#arteffactau-cysylltiedig)
  * [Egwyddorion cysylltiedig](#egwyddorion-cysylltiedig)
* [Nodiadau](#nodiadau)
  * [Negeseuon testun rhydd yn erbyn negeseuon digwyddiad strwythuredig](#negeseuon-testun-rhydd-yn-erbyn-negeseuon-digwyddiad-strwythuredig)
  * [Mae Graylog yn haws](#mae-graylog-yn-haws)
  * [Mae angen rhywfaint o fireinio ar Prometheus](#mae-angen-rhywfaint-o-fireinio-ar-prometheus)
  * [Mae gwasanaethau AWS yn gymysg](#mae-gwasanaethau-aws-yn-gymysg)
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
  * [Datadog yn erbyn Site24x7 + StatusCake + PagerDuty + SumoLogic + Slack](#datadog-yn-erbyn-site24x7--statuscake--pagerduty--sumologic--slack)
  * [Prometheus + AlertManager + Grafana + Stackdriver](#prometheus--alertmanager--grafana--stackdriver)
  * [Zabbix](#zabbix-1)


## Crynodeb


### Mater

Rydym am ddefnyddio metrigau, monitro a rhybuddion, oherwydd ein bod am wybod pa mor dda y mae ein cymwysiadau'n gweithio, a gwybod pan fydd problem.


### Penderfyniad

Gwaith ar y gweill.


### Statws

Casglu gwybodaeth. Rydym yn dechrau gyda dau ben credadwy'r sbectrwm: yr offeryn rhad ac am ddim hŷn a argymhellir fwyaf (Nagios) a'r offeryn â thâl newyddach a argymhellir fwyaf (New Relic).


## Manylion


### Rhagdybiaethau

Rydym am greu apiau gwe sy'n fodern, yn gyflym, yn ddibynadwy, yn ymatebol, ac ati.

Rydym am brynu yn hytrach nag adeiladu.


### Cyfyngiadau

Rydym am gael offer sy'n gweithio'n dda gyda'n piblinell devops a'n cymylau cyflwyno.


### Safbwyntiau

Rydym yn ymchwilio i safbwyntiau ar hyn o bryd.


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

  
### Dadl

Hyd yma, Nagios a New Relic yw pennau'r sbectrwm. Nagios yw'r offeryn hynaf, symlaf, rhad ac am ddim, dichonadwy. New Relic yw'r offeryn â'r nodweddion mwyaf newydd, y mwyaf cyflawn, â thâl, dichonadwy. Byddwn yn dechrau gyda gwerthusiadau o'r rhain. Yn ôl yr angen, byddwn yn symud i mewn i'r sbectrwm.  

Hyd yma, mae gan Zabbix yr argymhellion gorau, ac mae hefyd yn cynnig y galluoedd mwyaf cyflawn.

Hyd yma, mae gan ELK y boblogrwydd gorau ymhlith dulliau ffynhonnell agored adeiladu-yn-hytrach-na-phrynu.

Hyd yma, mae gan Prometheus + Grafana y boblogrwydd gorau.


### Goblygiadau

I'w wneud.


## Cysylltiedig


### Penderfyniadau cysylltiedig

Bydd y dewisiadau'n effeithio ar brofadwyedd, telemetreg, ac yn ôl pob tebyg systemau eraill fel ar gyfer gwasanaeth cwsmeriaid, peirianneg dibynadwyedd safleoedd, ac ati.


### Gofynion cysylltiedig

I'w wneud.


### Arteffactau cysylltiedig

I'w wneud.


### Egwyddorion cysylltiedig

Hawdd ei wrthdroi.

Angen cyflymder.


## Nodiadau


Pentwr ffynhonnell agored eithaf da yw:

* Prometheus ar gyfer metrigau a rhybuddion yn seiliedig ar fetrigau

* Grafana i arddangos metrigau

* Elasticsearch/Logstash/Kibana (ELK) ar gyfer logiau a digwyddiadau strwythuredig

* Pushover ar gyfer hysbysiadau ar ddyfeisiau symudol


### Negeseuon testun rhydd yn erbyn negeseuon digwyddiad strwythuredig

Negeseuon testun rhydd: er enghraifft, y math o bethau ar hap y byddech yn eu canfod yn /var/log/messages, a rhywbeth a gynhyrchir yn fwriadol gan y cymhwysiad. Mae'r negeseuon yn ddefnyddiol i nodi pethau eraill sy'n digwydd ar y peiriant fel diffyg cof neu wallau caledwedd, ond mae llawer o sbwriel ynddynt. 

Negeseuon digwyddiad strwythuredig: a gynhyrchir gan y cymhwysiad, gyda set sefydlog neu ddeinamig o briodoleddau, e.e. log ceisiadau HTTP, log cyfrifyddu, mewngofnodiad defnyddiwr.

Yn gyffredinol, mae'n braf cofnodi manylion pob cais mewn ffordd sy'n eich galluogi i blymio i lawr ar sail priodoleddau. Felly mae ychwanegu e.e. userid neu sessionid at bopeth yn caniatáu olrhain. Mae olrhain eglur hefyd yn dda, wrth gwrs. Mae defnyddio ELK ar gyfer hyn yn debyg i https://www.honeycomb.io/ y dyn tlawd


### Mae Graylog yn haws

Mae Graylog yn haws i'w gychwyn o'm profiad i.



### Mae angen rhywfaint o fireinio ar Prometheus


Rwy'n fodlon ar y cyfan â Prometheus ar gyfer metrigau. Mae angen rhywfaint o fireinio ar y rhybuddion, ond maent yn eithaf da. Mae'n dibynnu ar eich cymhwysiad. Credaf mai'r peth gorau yw rhoi rhybudd ar gyflyrau y gall defnyddwyr terfynol eu gweld, nid achosion sylfaenol. Er enghraifft, mae amser llwytho tudalen yn dda, nid yw nifer y ceisiadau yr eiliad yn dda. Er bod sero cais yr eiliad yn dangos bod rhywbeth o'i le.

Mantais gwasanaeth yw eu bod yn cynnig deallusrwydd ychwanegol o'r bocs. Yn gyffredinol rwy'n hoffi Datadog. Gall gwasanaethau fod yn ddychrynllyd o ddrud os oes gennych lawer o ddata, ac weithiau mae ganddynt fodelau prisio nad ydynt yn gyfeillgar i'r cwmwl, e.e. codi tâl fesul enghraifft, pan fo enghreifftiau'n ddeinamig. Mae gwahaniaeth hefyd rhwng gwasanaethau lle mae pob cais yn dod gan ddefnyddiwr sy'n talu a rhai sy'n ymwneud â hysbysebu, lle mai dim ond canran fach o'r ceisiadau sy'n gwneud arian i chi. Gallwch orffen gyda llawer o ddata ac nid cymaint â hynny o gyllideb.

Rwy'n gweithio ar rai gwasanaethau sy'n cael 1B cais y dydd, felly mae'n gwneud synnwyr lletya ein monitro a'n logio ein hunain. Os yw eich cyfeintiau'n is, yna mae gwasanaethau a letyir yn haws.


### Mae gwasanaethau AWS yn gymysg

Mae fy mhrofiad o wasanaethau AWS wedi bod yn gymysg. Mae eu gwasanaeth Elasticsearch wedi bod yn ansefydlog, felly rydym yn rhedeg ein henghreifftiau ein hunain ar gyfer hynny. Mae metrigau CloudWatch yn ddrud, felly rydym yn gyffredinol yn eu defnyddio ar gyfer metrigau lefel "seilwaith" yn unig yn hytrach na'r cymhwysiad, h.y. metrigau sy'n gysylltiedig ag iechyd lle mae AWS yn gwybod yn well beth sy'n digwydd na meddalwedd sy'n rhedeg ar yr enghraifft. Gall CloudWatch Logs fod yn araf i ddiweddaru ac nid oes ganddynt gymaint â hynny o fetadata. Mae rhedeg ELK yn helpu gyda hynny. Os wyf eisiau data amser real go iawn, yna mae defnyddio Kafka fel y cludydd ar gyfer logiau yn well. Mae hynny'n cael ei gefnogi'n eithaf da gan Logstash. Nid yw rheoli clwstwr Kafka at ddant y gwangalon, serch hynny, mae llawer o blymwaith agored.


### Kafka

Sylw: Gall Kafka fod yn hynod anodd ar adegau, neu gall Kafka fod yn gadarn fel craig nes eich bod bron yn anghofio ei fod yno'n clymu popeth at ei gilydd. 


Sylw: Mae Kafka wedi bod yn gadarn, ond roedd yn syndod o waith ei gael i redeg. Rwy'n meddwl amdano fel cronfa ddata berthynol ond eich bod ond yn gweithio ar yr haen "ffisegol", e.e. gofodau tabl, ffeiliau a rhaniadau. Roedd adegau'n gynnar lle roedd yr cyfleustodau rheoli'n brin, a bu'n rhaid i ni ysgrifennu rhaglenni i e.e. ailosod grŵp defnyddwyr. http://howfuckedismydatabase.com/nosql/

Sylw: Rydym yn defnyddio Kafka fel "byffer" ar gyfer negeseuon log a lle gallwn wneud prosesu ffrwd amser real ar ddata sy'n dod o sawl gweinydd. Os cawn ymosodiad DDOS, yna mae angen ffordd arnom o ddadansoddi data ar draws sawl enghraifft. Os ydym yn logio'n uniongyrchol o'r gweinyddion i ELK, gall y llwyth chwythu clwstwr Elasticsearch.

Sylw: Mae Kafka yn dda i ni oherwydd os cawn ymosodiad DDOS, yna mae angen ffordd arnom o ddadansoddi data ar draws sawl enghraifft. Os ydym yn logio'n uniongyrchol o'r gweinyddion i ELK, gall y llwyth chwythu clwstwr Elasticsearch.


Sylw: Mae Kafka yn gwneud llai o waith ac mae'n fwy effeithlon, felly gall ymdopi'n well â'r llwyth. Ac rydym yn rhoi gwaith Kafka mewn ciw ac yn ailgeisio. Ac nid yw cael Kafka wedi'i orlwytho yn effeithio ar ddefnyddwyr sy'n ceisio gwneud gwaith rhyngweithiol gyda Kibana, fel y byddai pe bai Elasticsearch yn ei chael hi'n anodd.

Sylw:  Prosesu ffrwd yw chwilio am gamddefnydd yn bennaf, e.e. gormod o draffig o un IP ar draws y clwstwr cyfan, ac yna rhannu'r bloc ar draws y clwstwr cyfan.

Sylw: Mae ategyn logstash-output-kafka yn eithaf annibynadwy ar hyn o bryd serch hynny. Rwyf wedi cael fy mrathu gan sawl un o'r problemau ar ei dudalen materion GitHub, nad ydynt byth yn ymddangos eu bod yn cael eu trwsio. Rwyf eisiau symud i ffwrdd o'i ddefnyddio, i anfon yn uniongyrchol o'n hapiau i Kafka.

Sylw: Rydym bellach yn anfon digwyddiadau strwythuredig yn uniongyrchol o'r ap i Kafka. Y prif gymhelliant oedd cyffwrdd â'r data log lai o weithiau ac osgoi darllen ac ysgrifennu'r ddisg sawl gwaith. Mewn systemau cyfaint uchel, gall logio gymryd mwy o waith na'r ap ei hun. Rwy'n meddwl am wneud i journald anfon logiau'n uniongyrchol hefyd, o raglen C.


### Loki

Cadwch lygad barcud ar Loki. Nid yw'n barod eto ond pan fydd, byddwn yn disgwyl iddo fod yn ffit well yn y pentwr hwn. Cydgrynhoydd logiau a grëwyd gan grafana labs yw Loki, mae'n defnyddio cystrawen sgrapio a thagiau debyg i Prometheus.


### Prometheus + alertmanager + Rollbar + Graylog + Grafana

 Prometheus + alertmanager ar gyfer metrigau. <3 Prometheus.

Rollbar/Graylog ar gyfer logio/adrodd ar wallau (mae rhywfaint o orgyffwrdd yma; mae'n debyg nad oes angen y ddau ar wasanaeth bach).

Ar hyn o bryd, mae rhybuddion yn mynd i un o ychydig o sianeli Slack y mae partïon â diddordeb wedi troi hysbysiadau ymlaen ar eu cyfer. Pe baem yn fwy difrifol am fod ar alwad byddent yn mynd i PagerDuty/VictorOps/ac ati.

Grafana ar gyfer graffiau a dangosfyrddau. Hefyd yn edrych ymlaen yn eiddgar i weld a fydd eu cyfleusterau logio sydd ar ddod yn dileu'r angen am Graylog.


### Thanos

Rydym yn defnyddio Thanos fel pen blaen i'n gosodiad HA. Mae'n gwybod sut i ddad-ddyblygu parau HA.

Ar hyn o bryd rydym yn cadw 6 mis o ddata Prometheus lleol. Mae hyn yn gweithio'n rhesymol dda i ni. Ond rwyf ar ganol cyflwyno storio bwced i'n gosodiad Thanos ar gyfer storio data hirdymor. Mewn theori, bydd storio GCS tua 30% yn rhatach na'r ddisg barhaol safonol GCE a ddefnyddiwn ar hyn o bryd.

Nid ydym yn gwneud copi wrth gefn o ddata Prometheus ar hyn o bryd. Nid yw'r data'n bwysig i ni mewn gwirionedd y tu hwnt i gael digon ar gyfer rhybuddion. Mae ein cyflwyno fflyd cyffredinol yn newid cymaint o flwyddyn i flwyddyn nes nad yw data hanesyddol sy'n hŷn na rhai misoedd o ddiddordeb mawr. Gallai fod yn ddiddorol cael ychydig o ystadegau craidd o flwyddyn i flwyddyn, efallai y gwnaf osod set o reolau cofnodi ystadegau craidd a'u storio gyda Federation neu adael i Thanos ofalu amdano.

GOLYGU: Ymwadiad bach, rwy'n ddatblygwr Prometheus.


### Prometheus HA

Gwneir HA yn Prometheus drwy ddyblygu, rydych yn rhedeg sawl tynnwr ac mae ffyrdd o holi sawl un a dad-ddyblygu'r data.

Gwneir y graddio drwy benderfynu ar y rhwydwaith a chael gwahanol Prometheus yn holi gwahanol rannau o'r rhwydwaith.

Nid storio hirdymor yw pwynt cryf prom ond caiff ei ddadlwytho i rywbeth fel influx neu timescaledb (sydd yn dechnegol hefyd yn rhoi tic wrth HA). Erthygl a ddarllenais arno https://blog.timescale.com/prometheus-ha-postgresql-8de68d19b6f5?gi=7df160f10e07

Nid wyf wedi rhoi cynnig ar y pethau hirdymor eto gan fy mod yn dal i arbrofi ac yn ei ddefnyddio ar gyfer graffiau tymor byr tra bo librenms yn monitro fy rhwydwaith ar gyfer y tymor hir


###  Datadog + PagerDuty + Threat Stack

Rydym yn defnyddio Datadog (gyda PagerDuty) a Threat Stack ac ni allem fod yn hapusach. Fy unig gŵyn am DD yw cost gymharol uchel storio metrigau.


### Zabbix

Zabbix gyda sgriptiau wedi'u teilwra i fonitro bron popeth. Yn gweithio fel breuddwyd.


### Outlyer

Rwy'n defnyddio Outlyer, ond rhaid i mi ymwadu fy mod yn gweithio yma, ac mae bwyta ein bwyd cŵn ein hunain yn rhaid.

Mae dal angen Graylog, Sentry a Statuscake i'w wella.

Yn swnio'n unochrog, ond ar ôl rhedeg Nagios a systemau monitro eraill yn hapus yn fewnol, byddwn yn prynu datrysiad a letyir mewn unrhyw swydd newydd a rhoi'r boen honno i ffwrdd.


### Nagios + Nagiosgraph

Rydym yn rhedeg Nagios ar gyfer yr holl fonitro a rhybuddio. Mae rhybuddion yn digwydd drwy e-bost (rhybuddion a hysbysiadau critigol) a hysbysiadau ap clywadwy (ar gyfer rhybuddion critigol).

Defnyddir Nagiosgraph ar gyfer delweddiadau.

Mae'r gosodiad hwn wedi bod yn effeithiol iawn wrth ein cadw'n hysbys yn gynhwysfawr am yr hyn sy'n digwydd yn ein hamgylchedd. Rydym yn rhedeg ac yn monitro tua 110 o weinyddion sy'n hanfodol i genhadaeth a thua 760 o bwyntiau data, ac wedi cael y system fore hon ar waith ers dros saith mlynedd.

Hoffwn hefyd gydgrynhoi logiau gyda Graylog neu ELK ar ryw adeg.


### Prometheus + Grafana + AlertManager

Prometheus + Grafana + AlertManager drwy siart helm anhygoel Prometheus Operator. Mae'r log yn dal i fynd i gynllun birch LogDNA gan i ni sylwi bod ELK yn rhy drwm i'n GKE diymhongar gydag isafswm o 3 ac uchafswm o 5 nod.


### DataDog + Sentry + PagerDuty.

Roeddwn yn arfer rhedeg fy holl atebion monitro fy hun gan ddefnyddio pob math o feddalwedd gan gynnwys Nagios, Icinga, Zabbix, ELK, Greylog2, Influx, a llawer o offer eraill, ond y gwir yw bod gormod o ymdrech yn gysylltiedig â rhedeg eich seilwaith monitro eich hun, yn enwedig pan allwch dalu cyfraddau mor isel i rywun arall wneud hynny ar eich rhan!

Mae talu i eraill redeg y seilwaith monitro yn rhyddhau fy nghleientiaid i ganolbwyntio ar redeg eu platfformau yn lle monitro'r monitro, sy'n golygu bod y gwerth a gânt o sefydlogrwydd eu platfform yn llawer mwy na chost unrhyw Fonitro fel Gwasanaeth.


### Sensu + Graphite + ELK

Mae fy nghwmni yn hoff iawn o bethau a letyir gennym ein hunain.

Sensu -> PagerDuty

Graphite/Grafana

ELK (Elasticsearch, Logstash, Kibana)


### Prometheus + Alertmanager

Prometheus + Alertmanager ar gyfer rhybuddio, mae fy nhîm yn credu bod monitro syml yn fonitro da.

Bydd systemau eraill fel logio ac olrhain yn darparu cyd-destun cyfoethog ar gyfer diagnosis pan fydd y person ar alwad yn cael rhybudd, ond nid ydym byth yn adeiladu rhybuddio ar y rhain.


### Sensu + Grafana + Graylog + Kibana + NewRelic.

Sensu, grafana, graylog, kibana, newrelic.


### Prometheus + Circonus

Gwasanaethau wedi'u hoffrymu â Prometheus => dadansoddeg a delweddu Circonus


### icinga2 + VictorOps + NewRelic + Sentry + Slack

Rydym yn defnyddio'r gwasanaethau canlynol:

icinga2 ar gyfer monitro a VictorOps ar gyfer rhybuddio

NewRelic ar gyfer monitro manwl y gwasanaeth

Sentry ar gyfer olrhain gwallau yn y gwasanaeth

Slack/E-bost yn rhan o'r rhybuddio sy'n cael ei sbarduno gan NewRelic neu icinga2


### AppDynamics + Papertrail + PagerDuty + Healthchecks.io + Stackdriver

AppDynamics

Papertrail

PagerDuty

Healthchecks.io

Stackdriver


### icinga2 + elasticsearch

icinga2 gydag integreiddio elasticsearch ar gyfer dadansoddi ac integreiddio graphite+grafana ar gyfer graffiau.

diolch i hyblygrwydd rheolau gosod (apply rules) yn icinga2, dim ond y gwasanaethau y maent yn cael hysbysiadau ar eu cyfer y gall y datblygwyr eu gweld.

a thrwy gyfarwyddwr icinga2, gall rhaglenwyr ddiffinio eu gwiriadau eu hunain yn hawdd (sy'n beth maent yn ei wneud, bob ychydig ddyddiau - mae 100 o wiriadau'n mynd allan, 100 o wiriadau eraill yn dod i mewn) ar raddfa fawr heb unrhyw drafferth.


### DataDog + New Relic + ELK + EFK + Sentry + Alertmanager + VictorOps

Beth sydd gennym nawr:

DataDog ar gyfer metrigau

New Relic ar gyfer monitro cymwysiadau

ELK (Elastic Search + Logstash + Kibana) ar gyfer y logiau

Sentry (a letyir gennym ein hunain) ar gyfer logio eithriadau

E-byst + Slack + VictorOps ar gyfer rhybuddio (yn dibynnu ar ddifrifoldeb)

Beth rydym am ei gael:

Prometheus ar gyfer metrigau (Grafana ar gyfer delweddu)

New Relic (Elastic Search APM yn ôl pob tebyg) ar gyfer monitro cymwysiadau

EFK (elastic search + fluentd + kibana) ar gyfer logio. Yn ôl pob tebyg, byddai Loki gan Grafana yn barod ar gyfer cynhyrchu erbyn i ni gyrraedd yma

Sentry ar gyfer yr eithriadau

Alertmanager + e-bost + VictorOps ar gyfer y rhybuddion


### Wavefront + Scalyr + PagerDuty + Stackstorm + Slack

Wavefront + Scalyr + PagerDuty + Stackstorm + Slack (Ymwadiad: yn gweithio yn VMware)


### Telegraf + Prometheus + InfluxDB + Grafana

Telegraf ar gyfer metrigau gweinyddion fel CPU, Disg, Cof a Rhwydwaith. Rydym hefyd yn defnyddio Telegraf ar gyfer monitro SNMP ein dyfeisiau rhwydwaith.

Prometheus ar gyfer metrigau cymwysiadau. Rydym yn codio gwiriadau iechyd i mewn i'n cymhwysiad y mae Prometheus yn eu sgrapio.

InfluxDB ar gyfer storio cyfres amser. Dyma lle mae ein data Telegraf yn cael ei anfon.

Grafana ar gyfer dangosfyrddau a rhybuddion. Nid yw'r peiriant rhybuddio'n gadarn iawn, ond mae'n gwneud y gwaith. Rydym hefyd yn tanio rhybuddion i mewn i Slack.

Yr hyn nad oes gennyf ar hyn o bryd yw datrysiad logio canolog. Mae ELK yn bwerus ond yn anodd ei osod a'i reoli, ac nid wyf yn gwybod am unrhyw ddewisiadau amgen rhad ac am ddim sy'n ddigon agos i edrych arnynt.


### Sematext + Logagent + Experience

Sematext ar gyfer metrigau, ar gyfer logiau, ar gyfer olion, yn fuan ar gyfer monitro defnyddwyr go iawn hefyd. Symlach/rhatach na defnyddio N gwahanol offeryn/gwasanaeth, yn fy marn i.

Ar gyfer cludo logiau roeddem yn arfer defnyddio rsyslog ac yna newidiom i Logagent.

Ar gyfer adrodd ar ddamweiniau pen blaen rydym yn defnyddio Sentry, ond byddwn yn newid i Experience yn fuan.

Ymwadiad: rwy'n Sematextiwr.


### Azure Monitor/Analytics + OpsGenie

Hoffwn pe bai gan Log Analytics ryngwyneb gwell. Rydym yn symud i ffwrdd o splunk, a oedd yn llawer haws llywio drwyddo.


### Prometheus + Alertmanager + Grafana + Splunk + PagerDuty

Prometheus, Alertmanager, Grafana, Splunk, PagerDuty

Nid ydych eisiau rhedeg eich system hysbysu eich hun mewn gwirionedd. Gallwch ddisodli Splunk ag ELK oni bai bod yn well gan eich tîm diogelwch Splunk.


### Telegraf + Prometheus + Grafana + Alertmanager

Telegraf fel casglwr, Prometheus + Alertmanager ar gyfer monitro a rhybuddio, wedi'u hintegreiddio â sianeli slack a pagerduty ar gyfer rhybuddion critigol. Grafana ar gyfer delweddu metrigau cynnal.


### Prometheus + Grafana + Cloudwatch + sentry + kibana + elasticsearch

Prometheus ar gyfer metrigau + rhybuddion

Grafana ar gyfer dangosfyrddau Prometheus

Cloudwatch yn monitro enghreifftiau Prometheus

sentry ar gyfer olrhain eithriadau

kibana + elasticsearch

graylog

prometheus Push Gateway ar gyfer swyddi swp/cron

SOP https://github.com/rapidloop/sop i "wthio/anfon ymlaen" metrigau o un enghraifft Prometheus i'r llall

mae cleientiaid yn defnyddio cleientiaid Prometheus. Rydym yn ceisio defnyddio opencensus.io ar ochr y cleient


### PagerDuty + Monitis

PagerDuty + Monitis. Hefyd rhai Azure Functions pwrpasol i brofi iechyd rhai gwasanaethau.

Yn edrych i gyflwyno Prometheus a Grafana eleni


### Prometheus + Grafana + Bosun

Prometheus ar gyfer storio'r data cyfres amser. Grafana ar gyfer delweddu. Bosun ar gyfer rheoli rhybuddion.


### Azure Monitor/Analytics/Insights/Dashboards

Siop Azure yn unig, Azure Monitor, Log Analytics, App Insights, Azure Dashboards + Pager Duty


### Grafana + Monitis + OpsGenie + Slack

Grafana ar gyfer monitro gwasanaethau cynwysyddion yn Kubernetes drwy Prometheus

Monitis ar gyfer monitro gwasanaethau o'r dechrau i'r diwedd yn bennaf ar gyfer APIau gwe a chymwysiadau gwe

OpsGenie ar gyfer rheoli rhybuddion

Slack ar gyfer cael gwybodaeth statws o'n systemau


### Checkly + AppOptics + Cloudwatch + Heroku + Pagerduty + Papertrail

Peiriannydd (dev)ops ers amser hir yma. Wedi tyfu i fyny ar Nagios. Byddwn wrth fy modd yn cael barn ar fy SaaS hunan-ariannedig https://checklyhq.com. Rydym yn gwneud monitro API a monitro trafodion safleoedd gyda rhybuddio eithaf manwl.

Dechreuais Checkly oherwydd bod monitro gweithredol / synthetig yn y gofod API ychydig yn gyfyngedig (ac yn ddrud). Mae monitro ar sail porwr / wedi'i sgriptio hyd yn oed yn fwy perchnogol a drud. Rydym yn defnyddio Puppeteer ac yn cadw'r prisiau mor isel â phosibl.

Ein pentwr monitro:

Checkly (bwyta ein bwyd cŵn ein hunain...)

AppOptics (graffio wedi'i deilwra)

AWS Cloudwatch & SNS ar gyfer negeseuon SMS.

rhybuddio adeiledig Heroku.

Pagerduty

Papertrail


### Instana + Logz.io + slack

Mae Instana yn ein rhybuddio yn slack am broblemau seilwaith neu waethygu perfformiad, ac rydym wedi ffurfweddu logz.io i roi rhybudd yn slack ar gyfaint penodol o logiau lefel gwall o'r haen gymhwysiad.


### SignalFX + Splunk + PagerDuty + Slack

Yn defnyddio ar hyn o bryd: SignalFX, Splunk, PagerDuty a Slack. Nid wyf yn hoff iawn o SignalFX er bod eu tîm cymorth yn gyfeillgar ac yn ymatebol iawn. Rwy'n hoffi Splunk (yn werth chweil os gallwch ei fforddio), PagerDuty a Slack.

Roeddwn yn arfer defnyddio'r pentwr TICK lle roedd y rhan fwyaf o'r C mewn gwirionedd yn G, hynny yw Grafana er i mi ddefnyddio Chronograf ychydig hefyd. Roedd hynny'n wych ond yn boen i'w reoli. Y cyfyng-gyngor clasurol SaaS yn erbyn lletya eich hun.

Rwyf wedi defnyddio DataDog, New Relic, Graylog, ELK a BugSnag. Rwy'n hoffi DataDog a New Relic yn fawr, mae Graylog yn eithaf da. Nid wyf yn hoff iawn o ELK serch hynny. Mae BugSnag yn braf, mewn gwirionedd teimlaf fod olrhain gwallau/eithriadau yn eilydd eithaf da ar gyfer monitro logiau llawn, mewn llawer o achosion.


### ELK + Prometheus + Grafana

Yn union fel eraill, rydym yn defnyddio ELK ar gyfer logiau a Prometheus+Grafana ar gyfer popeth arall.

Mae cynnal y gosodiad hwn yn hawdd os byddwch yn rhoi caniatâd i chi'ch hun golli data o bryd i'w gilydd. Er enghraifft, os bydd ein cronfa ddata ElasticSearch yn mynd i hwyliau drwg (sy'n digwydd bob 2-3 mis i ni yn anffodus) nid ydym yn poeni am HA ond yn hytrach yn dympio'r data ac yn bwrw ymlaen â'n bywydau. Os oes rhaid i chi gael HA neu gadw hirdymor, pob lwc.


### Datadog + Prometheus + Grafana

Gosodais Datadog fis wrth fis oherwydd pan gyrhaeddais yma, nid oedd unrhyw fonitro na rhybuddio. Dim ond cwpl o'n safleoedd oedd yn cael eu monitro bob 5 munud ar gyfer amser gweithredu. Datadog yw'r hawsaf o bell ffordd i'w osod. Pan fyddaf wedi gorffen mynd i'r afael â'r holl faterion eraill, byddaf yn newid i Prometheus+Grafana. Ddim yn 100% penderfynol ynghylch rheoli logiau eto.

### Nagios + ELK

Mae gennym dros 100 o gynhyrchion rydym yn eu cefnogi.

Ar gyfer ar y safle, Nagios ac ELK yn bennaf yw hi. Ar gyfer y cwmwl, rydym yn mudo o DataDog i NewRelic.


### Datadog yn erbyn Site24x7 + StatusCake + PagerDuty + SumoLogic + Slack

Roeddem yn arfer defnyddio datadog ond canfuom ei fod yn llawer rhy ddrud i'n hanghenion. Peidiwch â'm camddeall, mae'n anhygoel ond mae ganddo gost enfawr. Llwyddasom i osod site24x7.com gyda thanysgrifiad blynyddol am tua 2-3 mis o gost DD.

Ein pentwr monitro:

Site24x7 - APM, monitro URLau allanol, monitro llif post SMTP, dyddiadau dod i ben ssl a monitro prosesau.

StatusCake - ar gyfer monitro a chadarnhau URLau - Dyma ein copi wrth gefn rhag ofn i site24x7 fethu rhywbeth (nid yw'n gwneud hynny) ond mae SC yn fwy hyblyg ar gyfer monitro porthladdoedd a gwasanaethau allanol at ein hanghenion.

Mae'r ddau offeryn yn uwchgyfeirio i PagerDuty, ac yna rydym yn cael ein huwchgyfeiriadau yn slack.

SumoLogic - ar gyfer monitro logiau (mae'n offeryn gwych ond ychydig yn gymhleth i'n hanghenion)

O slack gallwn gydnabod (ack), neu unioni'r rhybudd.

Yna mae gennym lawer o awtomeiddio site24x7 sy'n cysylltu wedyn â commando.io ar gyfer yr hyn a elwir gennym yn 'BedOps' - lle mae rhybudd yn cael ei sbarduno, rydym yn cychwyn ychydig o sgriptiau neu awtomeiddio mewn ymgais i unioni'r sefyllfa (99% o'r amser mae'r awtomeiddio + ein sgriptiau yn ein cadw allan o drafferth).

Mae gennym lawlyfrau gweithredu (runbooks) mewnol yn ein KB ar gyfer pan fo'r awtomeiddio'n methu neu os oes rhywbeth y tu hwnt i'r cwmpas y mae angen ei drwsio.


### Prometheus + AlertManager + Grafana + Stackdriver

Prometheus (Operator) / AlertManager / Grafana ar gyfer metrigau yn ein clystyrau GKE a'n peiriannau rhithwir.

Google Stackdriver ar gyfer Logiau (gan ei fod wedi'i gynnwys ac yn weithredol yn ddiofyn ac ar hyn o bryd yn ddigon ar gyfer ein hanghenion).


### Zabbix

Zabbix ar gyfer popeth. Dim angen meddalwedd ychwanegol.
