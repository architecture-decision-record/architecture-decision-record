# Metrics, monitors, alerts

Contents:

* [Soummary](#soummary)
  * [Maitter](#maitter)
  * [Decisioun](#decisioun)
  * [Staunin](#staunin)
* [Pairticulars](#pairticulars)
  * [Assumptiouns](#assumptiouns)
  * [Limitatiouns](#limitatiouns)
  * [Positiouns](#positiouns)
  * [Argiment](#argiment)
  * [Implicatiouns](#implicatiouns)
* [Relatit](#relatit)
  * [Relatit decisiouns](#relatit-decisiouns)
  * [Relatit requirements](#relatit-requirements)
  * [Relatit artefacts](#relatit-artefacts)
  * [Relatit principles](#relatit-principles)
* [Jottins](#jottins)
  * [Freeform text messages versus structured event messages](#freeform-text-messages-versus-structured-event-messages)
  * [Graylog is eesier](#graylog-is-eesier)
  * [Prometheus taks some tunin](#prometheus-taks-some-tunin)
  * [AWS services are a mixed bag](#aws-services-are-a-mixed-bag)
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
  * [Datadog versus Site24x7 + StatusCake + PagerDuty + SumoLogic + Slack](#datadog-versus-site24x7--statuscake--pagerduty--sumologic--slack)
  * [Prometheus + AlertManager + Grafana + Stackdriver](#prometheus--alertmanager--grafana--stackdriver)
  * [Zabbix](#zabbix-1)


## Soummary


### Maitter

We want tae uise metrics, monitors, an alerts, acause we want tae ken hoo weel oor applications are warkin, an tae ken whan there's a problem.


### Decisioun

WIP.


### Staunin

Gaitherin information. We are stairtin wi the plausible ends o the spectrum: the maist-recommendit aulder free tuil (Nagios) an the maist-recommendit newer paid tuil (New Relic).


## Pairticulars


### Assumptiouns

We want tae mak wab apps that are modern, fast, reliable, responsive, etc.

We want tae buy raither than big.


### Limitatiouns

We want tuilin that warks weel wi oor devops pipeline an wi oor deployment clouds.


### Positiouns

We are researchin positiouns noo.


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

  
### Argiment

Sae faur, Nagios an New Relic are the ends o the spectrum. Nagios is the aulest, simplest, free, viable tuil. New Relic is the newest-featurit, maist-complete, paid, viable tuil. We will stairt wi evaluatiouns o thir. As needit, we will migrate intae the spectrum.  

Sae faur, Zabbix haes the best recommendatiouns, an an aw offers the maist complete capabilities.

Sae faur, ELK haes the best open-source big-ower-buy popularity.

Sae faur, Prometheus + Graphana hae the best popularity.


### Implicatiouns

TODO.


## Relatit


### Relatit decisiouns

The chyces will affect testability, telemetry, an likely ither systems sic as for customer service, site reliability engineerin, etc.


### Relatit requirements

TODO.


### Relatit artefacts

TODO.


### Relatit principles

Easily reversible.

Need for speed.


## Jottins


A pretty guid open source stack is:

* Prometheus for metrics an alertin based on metrics

* Grafana tae display metrics

* Elasticsearch/Logstash/Kibana (ELK) for logs an structurt events

* Pushover for mobile notificatiouns


### Freeform text messages versus structured event messages

Freeform text messages: for example, the kind o random stuff ye wud find in /var/log/messages, an somethin generatit intentionally bi the application. The messages are uiseful for identifyin ither things that are happenin on the box like oot o memory or hardware errors, but hae a lot o junk. 

Structured event messages: generatit bi the application, wi a fixed or dynamic set o attributes, e.g. a HTTP request log, an accountin log, a uiser login.

Generally speakin, it's nice tae log details aboot ilka request in a wey that ye can drill doun based on attributes. Sae addin e.g. a userid or sessionid tae everything lets ye trace. Explicit tracin is an aw guid, o course. Uisin ELK for this is kind o a puir man's https://www.honeycomb.io/


### Graylog is eesier

Graylog is easier tae spin up frae my experience.



### Prometheus taks some tunin


I am generally happy wi Prometheus for metrics. The alertin taks some tunin, but is pretty guid. It depends on yer application. I think it's best tae alert on end-uiser visible conditiouns, no unnerlyin causes. For example, page load time is guid, nummer o requests per second is no. Tho zero requests per second indicates that somethin is wrang.

The advantage o a service is that they offer additional intelligence oot o the box. I generally like Datadog. The services can be frichtenin expensive if ye hae a lot o data, an whiles hae pricin models which arena cloud friendly, e.g. chairgin per instance, whan instances are dynamic. There is an aw a difference atween services whaur every request is frae a paid uiser an anes that are advertisin relatit, sae juist some sma percentage o the requests mak ye money. Ye can end up wi a lot o data an no that much budget.

I wark on some services that get 1B requests a day, sae it maks sense tae host oor ain monitorin an loggin. If yer volumes are lawer, than hostit services are easier.


### AWS services are a mixed bag

My experience wi AWS services haes been mixed. Their Elasticsearch service haes been flaky, sae we rin oor ain instances for that. CloudWatch metrics are expensive, sae we generally juist uise them for "infrastructure" level metrics raither than the application, i.e. health-relatit metrics whaur AWS can ken better whit's gaein on than saftware rinnin on the instance. CloudWatch Logs can be slaw tae update an dinnae hae that much metadata. Rinnin ELK helps wi that. If I really want real time data, than uisin Kafka as the transport for logs is better. That's pretty weel supportit bi Logstash. Managin a Kafka cluster isna for the faint hertit, tho, there is a lot o exposed plumbin.


### Kafka

Comment: Kafka can be super tricky at times, or Kafka can be rock solid an ye almost forget aboot it bein there tyin everything thegither. 


Comment: Kafka haes been solid, but it wis a surprisin amoont o wark gettin it gaein. I think o it like a relational databaise but ye are juist warkin at the "physical" layer, e.g. tablespaces, files an partitiouns. There were some times early on whaur the management utilities were lackin, an we hid tae screive programs tae e.g. reset a consumer group. http://howfuckedismydatabase.com/nosql/

Comment: We uise Kafka as a "buffer" for log messages an a place whaur we can dae real time stream processin on data that is comin frae multiple servers. If we get a DDOS attack, than we need a wey o analysin data athort multiple instances. If we are loggin directly frae the servers tae ELK, the load can blaw up the Elasticsearch cluster.

Comment: Kafka daes less wark an is mair efficient, sae it can haunle the load better. An we queue the Kafka wark an retry. An haein Kafka be owerloadit daesna affect uisers wha are tryin tae dae interactive wark wi Kibana, the wey it wud if Elasticsearch is strugglin.

Comment:  Stream processin is maistly leukin for abuse, e.g. ower much traffic frae a single IP athort the haill cluster, an than share the block athort the haill cluster.

Comment: The logstash-output-kafka plugin is gey unreliable at the moment tho. I've been bit bi several o the issues on its GitHub issues page, that never seem tae get fixed. I want tae muive awa frae uisin it, tae sendin directly frae oor apps tae Kafka.

Comment: We are noo sendin structurt events directly frae the app tae Kafka. The main motivation wis touchin the log data fewer times an avoidin readin an screivin the disk multiple times. In heich volume systems, loggin can tak mair wark than the app itsel. I am thinkin aboot makin journald send logs directly an aw, frae a C program.


### Loki

Keep a close ee on Loki. It’s no ready yet but whan it is I’d expect it tae be a better fit in this stack. Loki is a log aggregator makit bi grafana labs, it uises similar a scrapin an tag syntax as Prometheus.


### Prometheus + alertmanager + Rollbar + Graylog + Grafana

 Prometheus + alertmanager for metrics. <3 Prometheus.

Rollbar/Graylog for loggin/error reportin (there's some owerlap here; a sma service probably daesna need baith).

Currently, alerts juist gae tae ane o a few Slack channels that interestit pairties hae notificatiouns turnt on for. If we were mair serious aboot on-call they wud gae tae PagerDuty/VictorOps/etc.

Grafana for graphs an dashboardin. An aw eagerly leukin forrit tae seein if their upcomin loggin facilities will obviate Graylog.


### Thanos

We uise Thanos as a front-end for oor HA setup. It kens hoo tae de-duplicate HA pairs.

We're currently keepin 6 months o local Prometheus data. This warks reasonably weel for us. But I'm juist in the middle o rollin oot bucket storage tae oor Thanos setup for lang-term data storage. In theory, GCS storage will be aboot 30% cheaper than the GCE staundart persistent disk we uise richt noo.

We dinnae backup Prometheus data richt noo. The data juist isna really important tae us ayont haein eneuch for alertin. Oor owerall fleet deployment chynges sae much year tae year that historical data aulder than a few months juist isna that interestin. It micht be interestin tae hae a few core stats year-ower-year, I micht setup a core-stats set o recordin rules an store thae wi Federation or juist let Thanos tak care o it.

EDIT: Minor disclaimer, I'm a Prometheus developer.


### Prometheus HA

HA in Prometheus is duin bi duplication ye rin multiple poppers there’s weys tae poll multiple an deduplicate the data

The scalin is bi decidin network an haein different Prometheus poll different pairts o the network

Longterm storage isna proms strang pynt but is offloadit tae somethin like influxes or timescaledb (which technically daes the HA checkmark as weel) article I read on it https://blog.timescale.com/prometheus-ha-postgresql-8de68d19b6f5?gi=7df160f10e07

Haven’t tried the longterm stuff yet as I’m still juist experimentin an uisin it for short term graphs while librenms monitors my network for longterm


###  Datadog + PagerDuty + Threat Stack

We uise Datadog (w/ PagerDuty) an Threat Stack an couldna be happier. My only gripe wi DD is the relatively heich cost o metric storage.


### Zabbix

Zabbix wi custom scripts tae monitor almaist everything. Warks like a chairm.


### Outlyer

I'm uisin Outlyer, but than I maun disclaim that I wark here, an dog fooding is a must.

Still need Graylog, Sentry an Statuscake tae enhance.

Soonds biased, but haein happily rin Nagios an ither monitorin systems internally, I wud buy a hostit solution in onie new gig an offload that pain.


### Nagios + Nagiosgraph

We rin Nagios for aw monitorin an alertin. Alerts happen throu e-mail (warnins an critical notificatiouns) an audible app notificatiouns (for critical alerts).

Nagiosgraph is uised for visualisatiouns.

This set-up haes been unco effective in keepin us comprehensively informed on whit's happenin in oor environment. We rin an monitor aboot 110 mission-critical servers an aboot 760 data pynts, an hae hid this mornin system in place for ower seiven years.

I wud like tae an aw aggregate logs wi Graylog or ELk at some pynt.


### Prometheus + Grafana + AlertManager

Prometheus + Grafana + AlertManager via the awesome Prometheus Operator helm chart. Log still gaes tae LogDNA birch plan as we noticed ELK is ower heavyweicht for oor humble min 3 max 5 nodes on GKE.


### DataDog + Sentry + PagerDuty.

I uised tae rin aw my ain monitorin solutiouns uisin aw kinds o saftware includin Nagios, Icinga, Zabbix, ELK, Greylog2, Influx, an mony ither tuils, but the truth is that there's juist ower much effort involved in rinnin yer ain monitorin infrastructur, especially whan ye can pay somebody else sic laich rates for somebody else tae dae it for ye!

Payin ithers tae rin the monitorin infra frees my clients up tae focus on rinnin their platforms instead o monitorin the monitorin, meanin that the value they gain frae the stability o their platform faur outweighs onie costs o Monitoring as a Service.


### Sensu + Graphite + ELK

My company is real big on self-hostit stuff.

Sensu -> PagerDuty

Graphite/Grafana

ELK (Elasticsearch, Logstash, Kibana)


### Prometheus + Alertmanager

Prometheus + Alertmanager for alertin, my team believe that simple monitorin is guid monitorin.

Ither systems like loggin an tracin will provide rich context for diagnosin whan the on-call receive an alert, but we never big alertin on thir.


### Sensu + Grafana + Graylog + Kibana + NewRelic.

Sensu, grafana, graylog, kibana, newrelic.


### Prometheus + Circonus

Prometheus instrumentit services => Circonus analytics an veesualisatioun


### icinga2 + VictorOps + NewRelic + Sentry + Slack

We are uisin ablow services:

icinga2 for monitorin an VictorOps for alertin

NewRelic for details monitorin o the service

Sentry for error trackin in the service

Slack/Email is pairt o alertin which triggers frae NewRelic or icinga2


### AppDynamics + Papertrail + PagerDuty + Healthchecks.io + Stackdriver

AppDynamics

Papertrail

PagerDuty

Healthchecks.io

Stackdriver


### icinga2 + elasticsearch

icinga2 wi elasticsearch integratioun for analysis an graphite+grafana integratioun for graphs.

thanks tae the flexibility o apply rules in icinga2, the developers can juist see services they receive notificatiouns for.

an throu icinga2 director, programmers can easily define their ain checks (which they dae, every few days - 100 checks gae oot, 100 ither checks gae in) on muckle scale wi zero hassle.


### DataDog + New Relic + ELK + EFK + Sentry + Alertmanager + VictorOps

Whit hae we noo:

DataDog for metrics

New Relic for application monitorin

ELK (Elastic Search + Logstash + Kibana) for the logs

Sentry (self-hostit) for loggin exceptions

Emails + Slack + VictorOps for alertin (based on severity)

Whit dae we want tae hae:

Prometheus for metrics (Grafana for veesualisatioun)

New Relic (probably Elastic Search APM) for the application monitorin

EFK (elastic search + fluentd + kibana) for loggin. Probably, Loki bi Grafana wud be prod-ready til the time we get here

Sentry for the exceptions

Alertmanager + email + VictorOps for the alerts


### Wavefront + Scalyr + PagerDuty + Stackstorm + Slack

Wavefront + Scalyr + PagerDuty + Stackstorm + Slack (Disclaimer: warks at VMware)


### Telegraf + Prometheus + InfluxDB + Grafana

Telegraf for server metrics like CPU, Disk, Memory an Network. We an aw uise Telegraf for SNMP monitorin o oor network devices.

Prometheus for application metrics. We code health checks intae oor application that Prometheus scrapes.

InfluxDB for time-series storage. This is whaur oor Telegraf data gets sent.

Grafana for dashboards an alerts. The alertin engine isna unco robust, but it daes the job. We an aw fire alerts intae Slack.

Whit I dinnae hae richt noo is a centralised loggin solution. ELK is pouerfu but difficult tae set up an manage, an I dinnae ken o onie free alternatives that are close eneuch tae leuk intae.


### Sematext + Logagent + Experience

Sematext for metrics, for logs, for traces, sune for real uiser monitorin, tae. Simpler/cheaper than uisin N different tuils/services, IMHO.

For log shippin we uised tae uise rsyslog an than we switcht tae Logagent.

For frontend crash reportin we uise Sentry, but we'll switch tae Experience shortly.

Disclaimer: I'm a Sematextan.


### Azure Monitor/Analytics + OpsGenie

I wish Log Analytics hid a better interface. We’re muivin awa frae splunk, which wis much easier tae navigate.


### Prometheus + Alertmanager + Grafana + Splunk + PagerDuty

Prometheus, Alertmanager, Grafana, Splunk, PagerDuty

Ye really dinnae want tae rin yer ain notificatioun system. Ye can replace Splunk wi ELK unless yer Security team prefers Splunk.


### Telegraf + Prometheus + Grafana + Alertmanager

Telegraf as a collector, Prometheus + Alertmanager for monitorin an alertin, integratit wi slack channels an pagerduty for critical alerts. Grafana for host metrics veesualisatioun.


### Prometheus + Grafana + Cloudwatch + sentry + kibana + elasticsearch

Prometheus for metrics + alerts

Grafana for Prometheus dashboards

Cloudwatch monitorin Prometheus instances

sentry for exception trackin

kibana + elasticsearch

graylog

prometheus Push Gateway for batch/cronjobs

SOP https://github.com/rapidloop/sop tae „push/forward“ metrics frae 1 Prometheus instance tae anither

clients either uise the Prometheus clients . We try tae uise opencensus.io on the client side


### PagerDuty + Monitis

PagerDuty + Monitis. An aw some bespoke Azure Functions for testin the health o some services.

Leukin tae introduce Prometheus an Grafana this year


### Prometheus + Grafana + Bosun

Prometheus for storin the time series data. Grafana for veesualisatioun. Bosun for alert management.


### Azure Monitor/Analytics/Insights/Dashboards

Azure only shop, Azure Monitor, Log Analytics, App Insights, Azure Dashboards + Pager Duty


### Grafana + Monitis + OpsGenie + Slack

Grafana for monitorin container services in Kubernetes via Prometheus

Monitis for end-tae-end service monitorin maistly for wab APIs an wab applications

OpsGenie for alert management

Slack for gettin status information frae oor systems


### Checkly + AppOptics + Cloudwatch + Heroku + Pagerduty + Papertrail

Lang time (dev)ops engineer here. Grew up on Nagios. Wud love tae hae opinions on my bootstrapped SaaS https://checklyhq.com. We dae API monitorin & site transactioun monitorin wi pretty in depth alertin.

I stairtit Checkly acause active / synthetic monitorin in the API space wis a bit limitit (an pricey). Browser based / scriptit monitorin is even mair proprietary an expensive. We uise Puppeteer an keep pricin as laich as possible.

Oor monitorin stack:

Checkly (dog fooding...)

AppOptics (custom graphin)

AWS Cloudwatch & SNS for SMS messages.

biggit-in Heroku alertin.

Pagerduty

Papertrail


### Instana + Logz.io + slack

Instana alerts us in slack aboot infrastructur problems or performance degradatioun, an we’ve configurt logz.io tae alert in slack on a certain volume o error level logs frae the application layer.


### SignalFX + Splunk + PagerDuty + Slack

Currently uisin: SignalFX, Splunk, PagerDuty an Slack. I'm no a muckle fan o SignalFX tho their support team is super friendly an responsive. I like Splunk (worth it if ye can pay for it), PagerDuty an Slack.

I uised tae uise the TICK stack whaur maist o the C wis really a G, that is Grafana tho I did uise Chronograf a wee bit. That wis awesome but it wis a pain tae manage. The classic SaaS vs self-hostin dilemma.

I hae uised DataDog, New Relic, Graylog, ELK an BugSnag. I like DataDog an New Relic a lot, Graylog is pretty guid. I'm no a muckle ELK fan tho. BugSnag is nice, I actually feel like trackin errors/exceptions is a pretty guid standin for full log monitorin, in mony cases.


### ELK + Prometheus + Grafana

Juist like ithers, we uise ELK for logs an Prometheus+Grafana for everything else.

Maintainin this setup is easy if ye gie yersel permissioun tae occasionally lose data. For example, if oor ElasticSearch databaise gets intae a funk (which happens every 2-3 months for us unfortunately) we dinnae bother wi HA an instead dump the data an get on wi oor lives. If ye absolutely maun hae HA or lang term retention, guid luck.


### Datadog + Prometheus + Grafana

I set up Datadog on a month tae month acause whan I got here, there wis nae monitorin an nae alertin. Juist a couple o oor sites were bein monitored every 5m for uptime. Datadog haunds doun is the easiest tae setup. Whan I finish addressin aw the ither issues, I will chynge tae Prometheus+Grafana. No 100% decidit on log management yet.

### Nagios + ELK

We hae ower 100+ products that we support.

For on-prem, it's maistly Nagios an ELK. For the cloud, we're migratin frae DataDog tae NewRelic.


### Datadog versus Site24x7 + StatusCake + PagerDuty + SumoLogic + Slack

We uised tae uise datadog but foond it tae be wey ower expensive for oor needs. Dinnae get me wrang its amazin but, it daes hae a huge cost. We were able tae setup site24x7.com wi an annual subscription for aboot 2-3 months o cost frae DD.

Oor monitorin stack:

Site24x7 - APM, External URL monitorin, SMTP mailflow monitorin, ssl expiratiouns an process monitorin.

StatusCake - for URL monitorin an confirmation - It's oor backup juist in case site24x7 misses somethin (It daesna) but SC is mair flexible for external port an service monitorin for oor needs.

Baith tuils escalate tae PagerDuty, an than we get oor escalatiouns in slack.

SumoLogic - for log monitorin (it’s a great tuil but a wee bit complicatit for oor needs)

Frae slack we can ack, or remedy the alert.

We than hae a lot o site24x7 automatiouns that than connect tae commando.io for 'BedOps' as we cry it - whaur an alert gets triggert, we kick aff a few scripts or automatiouns as an attempt tae remedy the situatioun (99% o the time the automatioun + oor scripts keep us oot o trouble)

We hae internal runbooks in oor KB for whan the automatons fail or if there is somethin oot o the scope that needs tae be fixed.


### Prometheus + AlertManager + Grafana + Stackdriver

Prometheus (Operator) / AlertManager / Grafana for metrics in oor GKE clusters an VMs.

Google Stackdriver for Logs (as it’s includit an active bi default an is currently eneuch for oor needs).


### Zabbix

Zabbix for everything. Nae additional saftware needit.
