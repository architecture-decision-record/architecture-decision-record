# Metric, monitor, alert

Wetin Dey Inside:

* [Summary](#summary)
  * [Issue](#issue)
  * [Decision](#decision)
  * [Status](#status)
* [Details](#details)
  * [Wetin We Assume](#wetin-we-assume)
  * [Wetin Dey Limit Us](#wetin-dey-limit-us)
  * [Positions](#positions)
  * [Argument](#argument)
  * [Wetin E Mean](#wetin-e-mean)
* [Wetin Join](#wetin-join)
  * [Decision Dem Wey Join](#decision-dem-wey-join)
  * [Requirement Dem Wey Join](#requirement-dem-wey-join)
  * [Artifact Dem Wey Join](#artifact-dem-wey-join)
  * [Principle Dem Wey Join](#principle-dem-wey-join)
* [Notes](#notes)
  * [Freeform text message dem vs structured event message dem](#freeform-text-message-dem-vs-structured-event-message-dem)
  * [Graylog easier](#graylog-easier)
  * [Prometheus need small tuning](#prometheus-need-small-tuning)
  * [AWS services mix-mix](#aws-services-mix-mix)
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
  * [Datadog vs. Site24x7 + StatusCake + PagerDuty + SumoLogic + Slack](#datadog-vs-site24x7--statuscake--pagerduty--sumologic--slack)
  * [Prometheus + AlertManager + Grafana + Stackdriver](#prometheus--alertmanager--grafana--stackdriver)
  * [Zabbix](#zabbix-1)


## Summary


### Issue

We want use metrics, monitors, and alerts, because we want know how well our applications dey work, and to know wen problem dey.


### Decision

WIP.


### Status

We dey gather information. We dey start with di plausible ends of di spectrum: di most-recommended older free tool (Nagios) and di most-recommended newer paid tool (New Relic).


## Details


### Wetin We Assume

We want create web apps wey modern, fast, reliable, responsive, etc.

We want buy instead of build.


### Wetin Dey Limit Us

We want tooling wey work well with our devops pipeline and with our deployment clouds.


### Positions

We dey research positions now.


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

So far, Nagios and New Relic na di ends of di spectrum. Nagios na di oldest, simplest, free, viable tool. New Relic na di newest-featured, most-complete, paid, viable tool. We go start with evaluations of dem. As need dey, we go migrate into di spectrum.

So far, Zabbix get di best recommendations, and e also offer di most complete capabilities.

So far, ELK get di best open-source build-over-buy popularity.

So far, Prometheus + Graphana get di best popularity.


### Wetin E Mean

TODO.


## Wetin Join


### Decision Dem Wey Join

Di choices go affect testability, telemetry, and likely other systems like for customer service, site reliability engineering, etc.


### Requirement Dem Wey Join

TODO.


### Artifact Dem Wey Join

TODO.


### Principle Dem Wey Join

Easily reversible.

Need for speed.


## Notes


A pretty good open source stack na:

* Prometheus for metrics and alerting based on metrics

* Grafana to display metrics

* Elasticsearch/Logstash/Kibana (ELK) for logs and structured events

* Pushover for mobile notifications


### Freeform text message dem vs structured event message dem

Freeform text messages: for example, di kind random stuff wey you go find for /var/log/messages, and something wey di application generate on purpose. Di messages useful to identify other things wey dey happen for di box like out of memory or hardware errors, but dem get plenty junk.

Structured event messages: di application generate dem, with fixed or dynamic set of attributes, e.g. HTTP request log, accounting log, user login.

Generally speaking, e nice to log details about every request for way wey you fit drill down based on attributes. So if you add e.g. userid or sessionid to everything, e go let you trace. Explicit tracing also good, of course. To use ELK for dis na kind of poor man https://www.honeycomb.io/


### Graylog easier

Graylog easier to spin up from my experience.



### Prometheus need small tuning


I generally happy with Prometheus for metrics. Di alerting need some tuning, but e pretty good. E depend on your application. I think say e best to alert on end-user visible conditions, no be underlying causes. For example, page load time good, number of requests per second no good. Though zero requests per second show say something wrong.

Di advantage of service na say dem offer additional intelligence out of di box. I generally like Datadog. Di services fit frighteningly expensive if you get plenty data, and sometimes dem get pricing models wey no cloud friendly, e.g. to charge per instance, when instances dynamic. Difference also dey between services where every request come from paid user and ones wey advertising related, so only some small percentage of di requests dey make you money. You fit end up with plenty data and not that much budget.

I work on some services wey dey get 1B requests a day, so e make sense to host our own monitoring and logging. If your volumes lower, then hosted services easier.


### AWS services mix-mix

My experience with AWS services don mix. Their Elasticsearch service don flaky, so we run our own instances for that. CloudWatch metrics expensive, so we generally only use dem for "infrastructure" level metrics instead of di application, i.e. health-related metrics where AWS fit know better wetin dey happen pass software wey dey run on di instance. CloudWatch Logs fit slow to update and dem no get that much metadata. To run ELK dey help with that. If I really want real time data, then to use Kafka as di transport for logs better. Logstash support that pretty well. To manage Kafka cluster no be for people wey get weak heart, though, plenty exposed plumbing dey.


### Kafka

Comment: Kafka fit super tricky at times, or Kafka fit rock solid and you almost forget say e dey there tie everything together.


Comment: Kafka don solid, but e take surprising amount of work to get am going. I think of am like relational database but you dey only work for di "physical" layer, e.g. tablespaces, files and partitions. Some times dey early on where di management utilities lack, and we need to write programs to e.g. reset consumer group. http://howfuckedismydatabase.com/nosql/

Comment: We dey use Kafka as "buffer" for log messages and place where we fit do real time stream processing on data wey dey come from multiple servers. If we get DDOS attack, then we need way to analyze data across multiple instances. If we dey log direct from di servers go ELK, di load fit blow up di Elasticsearch cluster.

Comment: Kafka good for us because if we get DDOS attack, then we need way to analyze data across multiple instances. If we dey log direct from di servers go ELK, di load fit blow up di Elasticsearch cluster.


Comment: Kafka dey do less work and e more efficient, so e fit handle di load better. And we dey queue di Kafka work and retry. And if Kafka overload e no dey affect users wey dey try do interactive work with Kibana, di way e go affect dem if Elasticsearch dey struggle.

Comment:  Stream processing mostly dey look for abuse, e.g. too much traffic from single IP across di whole cluster, and then share di block across di whole cluster.

Comment: Di logstash-output-kafka plugin quite unreliable for now though. Several of di issues wey dey its GitHub issues page don bite me, wey never seem to get fixed. I want move away from to use am, go send direct from our apps go Kafka.

Comment: We dey send structured events direct from di app go Kafka now. Di main motivation na to touch di log data fewer times and avoid to read and write di disk multiple times. For high volume systems, logging fit take more work than di app itself. I dey think about to make journald send logs direct as well, from C program.


### Loki

Keep close eye on Loki. E never ready yet but wen e ready I go expect say e go be better fit for dis stack. Loki na log aggregator wey grafana labs create, e dey use similar scraping and tag syntax as Prometheus.


### Prometheus + alertmanager + Rollbar + Graylog + Grafana

 Prometheus + alertmanager for metrics. <3 Prometheus.

Rollbar/Graylog for logging/error reporting (some overlap dey here; small service probably no need both).

Currently, alerts just dey go one of few Slack channels wey interested parties don turn on notifications for. If we serious more about on-call dem go go PagerDuty/VictorOps/etc.

Grafana for graphs and dashboarding. I also dey eagerly look forward to see whether their upcoming logging facilities go obviate Graylog.


### Thanos

We dey use Thanos as front-end for our HA setup. E know how to de-duplicate HA pairs.

We dey currently keep 6 months of local Prometheus data. Dis one dey work reasonably well for us. But I dey just in di middle of rolling out bucket storage to our Thanos setup for long-term data storage. For theory, GCS storage go be about 30% cheaper than di GCE standard persistent disk wey we dey use right now.

We no dey backup Prometheus data right now. Di data no really important to us beyond to have enough for alerting. Our overall fleet deployment dey change so much year to year that historical data wey older than few months no really interesting. E fit interesting to have few core stats year-over-year, I fit setup core-stats set of recording rules and store those with Federation or just let Thanos take care of am.

EDIT: Minor disclaimer, I be Prometheus developer.


### Prometheus HA

HA for Prometheus dem dey do am by duplication you run multiple poppers there’s ways to poll multiple and deduplicate di data

Di scaling na by deciding network and to have different Prometheus poll different parts of di network

Longterm storage no be proms strong point but dem offload am to something like influxes or timescaledb (wey technically do di HA checkmark as well) article wey I read on am https://blog.timescale.com/prometheus-ha-postgresql-8de68d19b6f5?gi=7df160f10e07

I never try di longterm stuff yet because I still dey only experiment and use am for short term graphs while librenms monitor my network for longterm


### Datadog + PagerDuty + Threat Stack

We dey use Datadog (w/ PagerDuty) and Threat Stack and we no fit happier. My only gripe with DD na di relatively high cost of metric storage.


### Zabbix

Zabbix with custom scripts to monitor almost everything. E dey work like charm.


### Outlyer

I dey use Outlyer, but then I must disclaim say I work here, and dog fooding na must.

I still need Graylog, Sentry and Statuscake to enhance.

E fit sound biased, but since I don happily run Nagios and other monitoring systems internally, I go buy hosted solution for any new gig and offload that pain.


### Nagios + Nagiosgraph

We run Nagios for all monitoring and alerting. Alerts dey happen through e-mail (warnings and critical notifications) and audible app notifications (for critical alerts).

Dem use Nagiosgraph for visualisations.

Dis set-up don very effective to keep us comprehensively informed on wetin dey happen for our environment. We run and monitor about 110 mission-critical servers and about 760 data points, and we don get dis morning system for place for over seven years.

I go like also aggregate logs with Graylog or ELk at some point.


### Prometheus + Grafana + AlertManager

Prometheus + Grafana + AlertManager through di awesome Prometheus Operator helm chart. Log still dey go LogDNA birch plan because we notice say ELK too heavyweight for our humble min 3 max 5 nodes on GKE.


### DataDog + Sentry + PagerDuty.

I before dey run all my own monitoring solutions with all kinds of software including Nagios, Icinga, Zabbix, ELK, Greylog2, Influx, and many other tools, but di truth na say too much effort dey involved to run your own monitoring infrastructure, especially wen you fit pay another person such low rates for another person to do am for you!

To pay others to run di monitoring infra free my clients up to focus on to run their platforms instead of to monitor di monitoring, wey mean say di value wey dem gain from di stability of their platform far outweigh any costs of Monitoring as a Service.


### Sensu + Graphite + ELK

My company really big on self-hosted stuff.

Sensu -> PagerDuty

Graphite/Grafana

ELK (Elasticsearch, Logstash, Kibana)


### Prometheus + Alertmanager

Prometheus + Alertmanager for alerting, my team believe say simple monitoring na good monitoring.

Other systems like logging and tracing go provide rich context to diagnose wen di on-call receive alert, but we never build alerting on these.


### Sensu + Grafana + Graylog + Kibana + NewRelic.

Sensu, grafana, graylog, kibana, newrelic.


### Prometheus + Circonus

Prometheus instrumented services => Circonus analytics and visualization


### icinga2 + VictorOps + NewRelic + Sentry + Slack

We dey use di services below:

icinga2 for monitoring and VictorOps for alerting

NewRelic for details monitoring of di service

Sentry for error tracking for di service

Slack/Email na part of alerting wey dey trigger from NewRelic or icinga2


### AppDynamics + Papertrail + PagerDuty + Healthchecks.io + Stackdriver

AppDynamics

Papertrail

PagerDuty

Healthchecks.io

Stackdriver


### icinga2 + elasticsearch

icinga2 with elasticsearch integration for analysis and graphite+grafana integration for graphs.

thanks to di flexibility of apply rules for icinga2, di developers fit only see services wey dem receive notifications for.

and through icinga2 director, programmers fit easily define their own checks (wey dem dey do, every few days - 100 checks go out, 100 other checks come in) for big scale with zero hassle.


### DataDog + New Relic + ELK + EFK + Sentry + Alertmanager + VictorOps

Wetin we get now:

DataDog for metrics

New Relic for application monitoring

ELK (Elastic Search + Logstash + Kibana) for di logs

Sentry (self-hosted) to log exceptions

Emails + Slack + VictorOps for alerting (based on severity)

Wetin we want get:

Prometheus for metrics (Grafana for visualization)

New Relic (probably Elastic Search APM) for di application monitoring

EFK (elastic search + fluentd + kibana) for logging. Probably, Loki by Grafana go be prod-ready by di time we reach here

Sentry for di exceptions

Alertmanager + email + VictorOps for di alerts


### Wavefront + Scalyr + PagerDuty + Stackstorm + Slack

Wavefront + Scalyr + PagerDuty + Stackstorm + Slack (Disclaimer: e work for VMware)


### Telegraf + Prometheus + InfluxDB + Grafana

Telegraf for server metrics like CPU, Disk, Memory and Network. We also dey use Telegraf for SNMP monitoring of our network devices.

Prometheus for application metrics. We code health checks inside our application wey Prometheus dey scrape.

InfluxDB for time-series storage. Na here our Telegraf data dey go.

Grafana for dashboards and alerts. Di alerting engine no super robust, but e dey do di job. We also dey fire alerts go Slack.

Wetin I no get right now na centralized logging solution. ELK powerful but e difficult to set up and manage, and I no know any free alternatives wey close enough to look into.


### Sematext + Logagent + Experience

Sematext for metrics, for logs, for traces, soon for real user monitoring, too. Simpler/cheaper than to use N different tools/services, IMHO.

For log shipping we before dey use rsyslog and then we switch go Logagent.

For frontend crash reporting we dey use Sentry, but we go switch go Experience shortly.

Disclaimer: I be Sematextan.


### Azure Monitor/Analytics + OpsGenie

I wish say Log Analytics get better interface. We dey move away from splunk, wey much easier to navigate.


### Prometheus + Alertmanager + Grafana + Splunk + PagerDuty

Prometheus, Alertmanager, Grafana, Splunk, PagerDuty

You really no go want run your own notification system. You fit replace Splunk with ELK unless your Security team prefer Splunk.


### Telegraf + Prometheus + Grafana + Alertmanager

Telegraf as collector, Prometheus + Alertmanager for monitoring and alerting, wey integrate with slack channels and pagerduty for critical alerts. Grafana for host metrics visualization.


### Prometheus + Grafana + Cloudwatch + sentry + kibana + elasticsearch

Prometheus for metrics + alerts

Grafana for Prometheus dashboards

Cloudwatch monitoring Prometheus instances

sentry for exception tracking

kibana + elasticsearch

graylog

prometheus Push Gateway for batch/cronjobs

SOP https://github.com/rapidloop/sop to „push/forward“ metrics from 1 Prometheus instance go another

clients either dey use di Prometheus clients . We try to use opencensus.io for di client side


### PagerDuty + Monitis

PagerDuty + Monitis. Also some bespoke Azure Functions to test di health of some services.

I dey look to introduce Prometheus and Grafana dis year


### Prometheus + Grafana + Bosun

Prometheus to store di time series data. Grafana for visualization. Bosun for alert management.


### Azure Monitor/Analytics/Insights/Dashboards

Azure only shop, Azure Monitor, Log Analytics, App Insights, Azure Dashboards + Pager Duty


### Grafana + Monitis + OpsGenie + Slack

Grafana to monitor container services for Kubernetes through Prometheus

Monitis for end-to-end service monitoring mainly for web APIs and web applications

OpsGenie for alert management

Slack to get status information from our systems


### Checkly + AppOptics + Cloudwatch + Heroku + Pagerduty + Papertrail

Long time (dev)ops engineer dey here. I grow up on Nagios. I go love to get opinions on my bootstrapped SaaS https://checklyhq.com. We dey do API monitoring & site transaction monitoring with pretty in depth alerting.

I start Checkly because active / synthetic monitoring for di API space don small limited (and pricey). Browser based / scripted monitoring even more proprietary and expensive. We dey use Puppeteer and we keep pricing as low as possible.

Our monitoring stack:

Checkly (dog fooding...)

AppOptics (custom graphing)

AWS Cloudwatch & SNS for SMS messages.

built-in Heroku alerting.

Pagerduty

Papertrail


### Instana + Logz.io + slack

Instana dey alert us for slack about infrastructure problems or performance degradation, and we don configure logz.io to alert for slack on certain volume of error level logs from di application layer.


### SignalFX + Splunk + PagerDuty + Slack

Currently dey use: SignalFX, Splunk, PagerDuty and Slack. I no be huge fan of SignalFX although their support team super friendly and responsive. I like Splunk (e worth am if you fit pay for am), PagerDuty and Slack.

I before dey use di TICK stack where most of di C really be G, wey be Grafana although I use Chronograf small. Dat one awesome but e be pain to manage. Di classic SaaS vs self-hosting dilemma.

I don use DataDog, New Relic, Graylog, ELK and BugSnag. I like DataDog and New Relic plenty, Graylog pretty good. I no be big ELK fan though. BugSnag nice, I actually feel say to track errors/exceptions na pretty good standin for full log monitoring, for many cases.


### ELK + Prometheus + Grafana

Just like others, we dey use ELK for logs and Prometheus+Grafana for everything else.

To maintain dis setup easy if you give yourself permission to occasionally lose data. For example, if our ElasticSearch database enter funk (wey dey happen every 2-3 months for us unfortunately) we no dey bother with HA and instead we dey dump di data and continue with our lives. If you absolutely must get HA or long term retention, good luck.


### Datadog + Prometheus + Grafana

I set up Datadog on month to month because wen I reach here, no monitoring and no alerting dey. Only couple of our sites dey monitored every 5m for uptime. Datadog hands down na di easiest to setup. Wen I finish to address all di other issues, I go change go Prometheus+Grafana. I never 100% decide on log management yet.

### Nagios + ELK

We get over 100+ products wey we support.

For on-prem, na mostly Nagios and ELK. For di cloud, we dey migrate from DataDog go NewRelic.


### Datadog vs. Site24x7 + StatusCake + PagerDuty + SumoLogic + Slack

We before dey use datadog but we find say e way too expensive for our needs. No get me wrong e amazing but, e get huge cost. We fit setup site24x7.com with annual subscription for about 2-3 months of cost from DD.

Our monitoring stack:

Site24x7 - APM, External URL monitoring, SMTP mailflow monitoring, ssl expirations and process monitoring.

StatusCake - for URL monitoring and confirmation - Na our backup just in case site24x7 miss something (E no dey miss) but SC more flexible for external port and service monitoring for our needs.

Both tools dey escalate to PagerDuty, and then we dey get our escalations for slack.

SumoLogic - for log monitoring (e be great tool but small complicated for our needs)

From slack we fit ack, or remedy di alert.

We then get plenty site24x7 automations wey then connect to commando.io for 'BedOps' as we dey call am - where alert get triggered, we kick off few scripts or automations as attempt to remedy di situation (99% of di time di automation + our scripts dey keep us out of trouble)

We get internal runbooks for our KB for wen di automatons fail or if something dey out of scope wey need to be fixed.


### Prometheus + AlertManager + Grafana + Stackdriver

Prometheus (Operator) / AlertManager / Grafana for metrics for our GKE clusters and VMs.

Google Stackdriver for Logs (because e dey included and active by default and e currently enough for our needs).


### Zabbix

Zabbix for everything. No additional software need.
