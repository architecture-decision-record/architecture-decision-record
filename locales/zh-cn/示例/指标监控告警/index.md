# 指标、监控、告警

目录:

* [摘要](#摘要)
  * [问题](#问题)
  * [决策](#决策)
  * [状态](#状态)
* [详情](#详情)
  * [假设](#假设)
  * [约束](#约束)
  * [立场](#立场)
  * [论证](#论证)
  * [影响](#影响)
* [相关内容](#相关内容)
  * [相关决策](#相关决策)
  * [相关需求](#相关需求)
  * [相关制品](#相关制品)
  * [相关原则](#相关原则)
* [备注](#备注)
  * [自由格式文本消息与结构化事件消息](#自由格式文本消息与结构化事件消息)
  * [Graylog is easier](#graylog-is-easier)
  * [Prometheus take some tuning](#prometheus-take-some-tuning)
  * [AWS services are mixed](#aws-services-are-mixed)
  * [Kafka](#kafka)
  * [Loki](#loki)
  * [Prometheus + alertmanager + Rollbar + Graylog + Grafana](#prometheus-alertmanager-rollbar-graylog-grafana)
  * [Thanos](#thanos)
  * [Prometheus HA](#prometheus-ha)
  * [Datadog + PagerDuty + Threat Stack](#datadog-pagerduty-threat-stack)
  * [Zabbix](#zabbix)
  * [Outlyer](#outlyer)
  * [Nagios + Nagiosgraph](#nagios-nagiosgraph)
  * [Prometheus + Grafana + AlertManager](#prometheus-grafana-alertmanager)
  * [DataDog + Sentry + PagerDuty.](#datadog-sentry-pagerduty)
  * [Sensu + Graphite + ELK](#sensu-graphite-elk)
  * [Prometheus + Alertmanager](#prometheus-alertmanager)
  * [Sensu + Grafana + Graylog + Kibana + NewRelic.](#sensu-grafana-graylog-kibana-newrelic)
  * [Prometheus + Circonus](#prometheus-circonus)
  * [icinga2 + VictorOps + NewRelic + Sentry + Slack](#icinga2-victorops-newrelic-sentry-slack)
  * [AppDynamics + Papertrail + PagerDuty + Healthchecks.io + Stackdriver](#appdynamics-papertrail-pagerduty-healthchecks-io-stackdriver)
  * [icinga2 + elasticsearch](#icinga2-elasticsearch)
  * [DataDog + New Relic + ELK + EFK + Sentry + Alertmanager + VictorOps](#datadog-new-relic-elk-efk-sentry-alertmanager-victorops)
  * [Wavefront + Scalyr + PagerDuty + Stackstorm + Slack](#wavefront-scalyr-pagerduty-stackstorm-slack)
  * [Telegraf + Prometheus + InfluxDB + Grafana](#telegraf-prometheus-influxdb-grafana)
  * [Sematext + Logagent + Experience](#sematext-logagent-experience)
  * [Azure Monitor/Analytics + OpsGenie](#azure-monitor-analytics-opsgenie)
  * [Prometheus + Alertmanager + Grafana + Splunk + PagerDuty](#prometheus-alertmanager-grafana-splunk-pagerduty)
  * [Telegraf + Prometheus + Grafana + Alertmanager](#telegraf-prometheus-grafana-alertmanager)
  * [Prometheus + Grafana + Cloudwatch + sentry + kibana + elasticsearch](#prometheus-grafana-cloudwatch-sentry-kibana-elasticsearch)
  * [PagerDuty + Monitis](#pagerduty-monitis)
  * [Prometheus + Grafana + Bosun](#prometheus-grafana-bosun)
  * [Azure Monitor/Analytics/Insights/Dashboards](#azure-monitor-analytics-insights-dashboards)
  * [Grafana + Monitis + OpsGenie + Slack](#grafana-monitis-opsgenie-slack)
  * [Checkly + AppOptics + Cloudwatch + Heroku + Pagerduty + Papertrail](#checkly-appoptics-cloudwatch-heroku-pagerduty-papertrail)
  * [Instana + Logz.io + slack](#instana-logz-io-slack)
  * [SignalFX + Splunk + PagerDuty + Slack](#signalfx-splunk-pagerduty-slack)
  * [ELK + Prometheus + Grafana](#elk-prometheus-grafana)
  * [Datadog + Prometheus + Grafana](#datadog-prometheus-grafana)
  * [Nagios + ELK](#nagios-elk)
  * [Datadog vs. Site24x7 + StatusCake + PagerDuty + SumoLogic + Slack](#datadog-vs-site24x7-statuscake-pagerduty-sumologic-slack)
  * [Prometheus + AlertManager + Grafana + Stackdriver](#prometheus-alertmanager-grafana-stackdriver)
  * [Zabbix](#zabbix)


## 摘要


### 问题

我们想使用指标、监控和告警,因为我们想知道应用运行得有多好,并在出现问题时及时知晓。


### 决策

进行中(WIP)。


### 状态

正在收集信息。我们从可行范围的两端开始:最受推荐的较老的免费工具(Nagios)和最受推荐的较新的付费工具(New Relic)。


## 详情


### 假设

我们希望创建现代、快速、可靠、响应式等的 Web 应用。

我们希望购买而不是自建。


### 约束

我们希望工具能够与我们的 DevOps 流水线以及部署所用的云良好协作。


### 立场

我们目前正在调研各种立场。


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

  
### 论证

到目前为止,Nagios 和 New Relic 是可行范围的两端。Nagios 是最古老、最简单、免费且可行的工具。New Relic 是功能最新、最完整、付费且可行的工具。我们将从评估这两者开始。根据需要,我们将在这两端之间推进。 

到目前为止,Zabbix 获得的推荐最好,同时提供最完整的功能。

到目前为止,在开源自建而非购买的方案中,ELK 最受欢迎。

到目前为止,Prometheus + Graphana 的受欢迎程度最高。


### 影响

待办(TODO)。


## 相关内容


### 相关决策

这些选择将影响可测试性、遥测,并可能影响客户服务、站点可靠性工程等其他系统。


### 相关需求

待办(TODO)。


### 相关制品

待办(TODO)。


### 相关原则

易于撤销。

追求速度。


## 备注


一个相当不错的开源技术栈是:

* Prometheus,用于指标以及基于指标的告警

* Grafana,用于展示指标

* Elasticsearch/Logstash/Kibana(ELK),用于日志和结构化事件

* Pushover,用于移动端通知


### 自由格式文本消息与结构化事件消息

自由格式文本消息:例如,你会在 /var/log/messages 中找到的各种随机内容,以及应用有意生成的内容。这些消息有助于发现机器上发生的其他事情,例如内存不足或硬件错误,但含有大量垃圾信息。

结构化事件消息:由应用生成,具有固定或动态的属性集,例如 HTTP 请求日志、记账日志、用户登录。

一般来说,以可以根据属性下钻的方式记录每个请求的详细信息是很好的。因此,在所有内容中添加例如 userid 或 sessionid,可以让你进行追踪。当然,显式的追踪也很好。用 ELK 来做这件事,有点像穷人版的 https://www.honeycomb.io/


### Graylog is easier

根据我的经验,Graylog 更容易启动。



### Prometheus take some tuning


总体上我对用 Prometheus 做指标很满意。告警需要一些调优,但相当不错。这取决于你的应用。我认为最好针对最终用户可见的状况发出告警,而不是针对根本原因。例如,页面加载时间是好的,每秒请求数则不是。不过,每秒零请求表明出了问题。

服务的优势在于,它们开箱即提供额外的智能。我总体上喜欢 Datadog。如果你有大量数据,这些服务可能贵得吓人,并且有时定价模式对云不友好,例如按实例收费,而实例是动态的。此外,还有区别:有些服务的每个请求都来自付费用户,而另一些与广告相关,因此只有一小部分请求能为你赚钱。你最终可能拥有大量数据,而预算却不多。

我负责的一些服务每天有 10 亿次请求,因此自行托管监控和日志是合理的。如果你的量较小,托管服务会更容易。


### AWS services are mixed

我使用 AWS 服务的体验好坏参半。他们的 Elasticsearch 服务一直不太稳定,所以我们自己运行实例。CloudWatch 指标很贵,所以我们通常只将其用于“基础设施”级别的指标,而不是应用,也就是与健康相关的指标,在这方面 AWS 比实例上运行的软件更了解情况。CloudWatch Logs 更新可能很慢,而且元数据不多。运行 ELK 对此有帮助。如果我真的想要实时数据,那么使用 Kafka 作为日志的传输会更好。Logstash 对此支持得相当好。不过,管理 Kafka 集群不适合胆小的人,有很多暴露在外的底层管道。


### Kafka

评论:Kafka 有时可能非常棘手,也可能坚如磐石,让你几乎忘记它的存在,是它把一切联系在一起。


评论:Kafka 一直很稳定,但让它跑起来的工作量出乎意料地大。我把它看作一个关系型数据库,但你只在“物理”层工作,例如表空间、文件和分区。早期有些时候管理工具缺失,我们不得不编写程序来做例如重置消费者组之类的事。http://howfuckedismydatabase.com/nosql/

评论:我们把 Kafka 用作日志消息的“缓冲区”,以及对来自多台服务器的数据进行实时流处理的地方。如果我们遭到 DDOS 攻击,就需要一种跨多个实例分析数据的方式。如果我们直接从服务器记录日志到 ELK,负载可能会冲垮 Elasticsearch 集群。

评论:Kafka 对我们很好,因为如果遭到 DDOS 攻击,我们需要一种跨多个实例分析数据的方式。如果我们直接从服务器记录日志到 ELK,负载可能会冲垮 Elasticsearch 集群。


评论:Kafka 做的工作更少,效率更高,因此可以更好地处理负载。而且我们会把 Kafka 的工作排入队列并重试。而且 Kafka 过载不会影响试图用 Kibana 进行交互式工作的用户,不像 Elasticsearch 吃力时那样。

评论:流处理主要是寻找滥用行为,例如整个集群中来自单个 IP 的流量过多,然后在整个集群中共享封禁。

评论:不过 logstash-output-kafka 插件目前相当不可靠。我被它 GitHub issues 页面上的好几个问题坑过,而那些问题似乎永远不会被修复。我想不再使用它,而是改为从我们的应用直接发送到 Kafka。

评论:我们现在直接从应用向 Kafka 发送结构化事件。主要动机是减少接触日志数据的次数,避免多次读写磁盘。在高容量系统中,记录日志可能比应用本身需要更多的工作。我正在考虑让 journald 也直接发送日志,用 C 程序来实现。


### Loki

密切关注 Loki。它还没有准备好,但等它准备好时,我预计它会更适合这个技术栈。Loki 是 grafana labs 创建的日志聚合器,它使用与 Prometheus 类似的抓取和标签语法。


### Prometheus + alertmanager + Rollbar + Graylog + Grafana

Prometheus + alertmanager 用于指标。热爱 Prometheus。

Rollbar/Graylog 用于日志/错误报告(两者有些重叠;小型服务可能不需要两者都用)。

目前,告警只发送到几个 Slack 频道之一,有关人员在这些频道上开启了通知。如果我们对值班更认真,它们会发送到 PagerDuty/VictorOps 等。

Grafana 用于图表和仪表板。也热切期待看看他们即将推出的日志功能是否会让 Graylog 变得多余。


### Thanos

我们使用 Thanos 作为高可用(HA)设置的前端。它懂得如何对 HA 对进行去重。

我们目前保留 6 个月的本地 Prometheus 数据。这对我们来说效果相当不错。但我正在为我们的 Thanos 设置推出对象存储以进行长期数据存储。理论上,GCS 存储将比我们目前使用的 GCE 标准持久磁盘便宜约 30%。

我们目前不备份 Prometheus 数据。除了够用于告警之外,这些数据对我们来说并不太重要。我们的整体机群部署每年变化很大,几个月以前的历史数据并没有多大意义。如果能有一些逐年对比的核心统计数据,可能会很有意思;我可能会设置一组核心统计的记录规则,并通过联邦(Federation)存储它们,或者干脆让 Thanos 来处理。

编辑:小小的免责声明,我是 Prometheus 的开发者。


### Prometheus HA

Prometheus 中的 HA 是通过复制实现的:你运行多个采集器,有办法轮询多个并对数据去重。

扩展则是通过划分网络,让不同的 Prometheus 轮询网络的不同部分。

长期存储不是 Prometheus 的强项,而是交给 influx 或 timescaledb(技术上也算满足 HA 这一项)之类的东西来承担,我读过一篇相关文章 https://blog.timescale.com/prometheus-ha-postgresql-8de68d19b6f5?gi=7df160f10e07

我还没有尝试过长期存储的部分,因为我仍处于试验阶段,只把它用于短期图表,而由 librenms 监控我的网络以进行长期监控。


###  Datadog + PagerDuty + Threat Stack

我们使用 Datadog(配合 PagerDuty)和 Threat Stack,再满意不过。我对 DD 唯一的抱怨是指标存储的成本相对较高。


### Zabbix

Zabbix 配合自定义脚本几乎可以监控一切。运行得非常好。


### Outlyer

我在使用 Outlyer,但我必须声明我在这里工作,而且“自己吃自己的狗粮”是必须的。

仍然需要 Graylog、Sentry 和 Statuscake 来增强。

听起来有偏见,但在内部愉快地运行过 Nagios 和其他监控系统之后,在任何新工作中我都会购买托管方案,并卸下这份痛苦。


### Nagios + Nagiosgraph

我们用 Nagios 做所有监控和告警。告警通过电子邮件(警告和严重通知)和声音应用通知(用于严重告警)发出。

Nagiosgraph 用于可视化。

这套配置在让我们全面了解环境中发生的情况方面非常有效。我们运行并监控着约 110 台关键任务服务器和约 760 个数据点,并且这套晨间系统已经运行了七年多。

我也想在某个时候用 Graylog 或 ELk 聚合日志。


### Prometheus + Grafana + AlertManager

Prometheus + Grafana + AlertManager,通过出色的 Prometheus Operator helm chart 部署。日志仍然发送到 LogDNA 的 birch 方案,因为我们注意到 ELK 对于我们在 GKE 上最少 3 个、最多 5 个节点的小规模来说太重了。


### DataDog + Sentry + PagerDuty.

我过去使用包括 Nagios、Icinga、Zabbix、ELK、Greylog2、Influx 以及许多其他工具在内的各种软件,自己运行所有监控方案,但事实是,运行自己的监控基础设施需要付出太多精力,尤其是当你可以用如此低的价格让别人替你做这件事时!

付钱让别人运行监控基础设施,使我的客户可以专注于运行他们的平台,而不是去监控监控系统,这意味着他们从平台稳定性中获得的价值远远超过“监控即服务”的任何成本。


### Sensu + Graphite + ELK

我的公司非常偏爱自托管的东西。

Sensu -> PagerDuty

Graphite/Grafana

ELK(Elasticsearch、Logstash、Kibana)


### Prometheus + Alertmanager

Prometheus + Alertmanager 用于告警,我的团队相信简单的监控就是好的监控。

日志和追踪等其他系统会在值班人员收到告警时提供丰富的诊断上下文,但我们从不基于它们构建告警。


### Sensu + Grafana + Graylog + Kibana + NewRelic.

Sensu、grafana、graylog、kibana、newrelic。


### Prometheus + Circonus

Prometheus 埋点的服务 => Circonus 分析与可视化


### icinga2 + VictorOps + NewRelic + Sentry + Slack

我们使用以下服务:

icinga2 用于监控,VictorOps 用于告警

NewRelic 用于服务的详细监控

Sentry 用于服务中的错误追踪

Slack/电子邮件是告警的一部分,由 NewRelic 或 icinga2 触发


### AppDynamics + Papertrail + PagerDuty + Healthchecks.io + Stackdriver

AppDynamics

Papertrail

PagerDuty

Healthchecks.io

Stackdriver


### icinga2 + elasticsearch

icinga2 集成 elasticsearch 用于分析,集成 graphite+grafana 用于绘制图表。

得益于 icinga2 中 apply 规则的灵活性,开发人员只能看到他们会收到通知的服务。

并且通过 icinga2 director,程序员可以轻松定义自己的检查(他们每隔几天就会这样做——100 个检查发出,另外 100 个检查进来),大规模且毫不费力。


### DataDog + New Relic + ELK + EFK + Sentry + Alertmanager + VictorOps

我们现在有什么:

DataDog 用于指标

New Relic 用于应用监控

ELK(Elastic Search + Logstash + Kibana)用于日志

Sentry(自托管)用于记录异常

电子邮件 + Slack + VictorOps 用于告警(根据严重程度)

我们想要有什么:

Prometheus 用于指标(Grafana 用于可视化)

New Relic(可能是 Elastic Search APM)用于应用监控

EFK(elastic search + fluentd + kibana)用于日志。到我们做到这一步时,Grafana 的 Loki 可能已经可用于生产环境

Sentry 用于异常

Alertmanager + 电子邮件 + VictorOps 用于告警


### Wavefront + Scalyr + PagerDuty + Stackstorm + Slack

Wavefront + Scalyr + PagerDuty + Stackstorm + Slack(免责声明:在 VMware 工作)


### Telegraf + Prometheus + InfluxDB + Grafana

Telegraf 用于 CPU、磁盘、内存和网络等服务器指标。我们还用 Telegraf 对网络设备进行 SNMP 监控。

Prometheus 用于应用指标。我们在应用中编写了健康检查,由 Prometheus 抓取。

InfluxDB 用于时间序列存储。我们的 Telegraf 数据就发送到这里。

Grafana 用于仪表板和告警。告警引擎不是特别强大,但能完成任务。我们还会把告警发送到 Slack。

我目前没有的是集中式日志方案。ELK 很强大,但难以搭建和管理,而且我不知道有什么足够接近的免费替代品值得研究。


### Sematext + Logagent + Experience

Sematext 用于指标、日志、追踪,不久也将用于真实用户监控。依我看,比使用 N 种不同的工具/服务更简单/更便宜。

对于日志传输,我们过去使用 rsyslog,后来改用 Logagent。

对于前端崩溃报告,我们使用 Sentry,但很快会改用 Experience。

免责声明:我是 Sematext 的员工。


### Azure Monitor/Analytics + OpsGenie

我希望 Log Analytics 有更好的界面。我们正在从 splunk 迁移出去,splunk 要容易使用得多。


### Prometheus + Alertmanager + Grafana + Splunk + PagerDuty

Prometheus、Alertmanager、Grafana、Splunk、PagerDuty

你真的不想运行自己的通知系统。除非你的安全团队偏好 Splunk,否则可以用 ELK 取代 Splunk。


### Telegraf + Prometheus + Grafana + Alertmanager

Telegraf 作为采集器,Prometheus + Alertmanager 用于监控和告警,并与 slack 频道集成,严重告警则通过 pagerduty。Grafana 用于主机指标可视化。


### Prometheus + Grafana + Cloudwatch + sentry + kibana + elasticsearch

Prometheus 用于指标 + 告警

Grafana 用于 Prometheus 仪表板

Cloudwatch 监控 Prometheus 实例

sentry 用于异常追踪

kibana + elasticsearch

graylog

prometheus Push Gateway 用于批处理/定时任务

SOP https://github.com/rapidloop/sop 用于将指标从一个 Prometheus 实例“推送/转发”到另一个

客户端要么使用 Prometheus 客户端。我们尽量在客户端使用 opencensus.io


### PagerDuty + Monitis

PagerDuty + Monitis。还有一些定制的 Azure Functions,用于测试某些服务的健康状况。

今年打算引入 Prometheus 和 Grafana


### Prometheus + Grafana + Bosun

Prometheus 用于存储时间序列数据。Grafana 用于可视化。Bosun 用于告警管理。


### Azure Monitor/Analytics/Insights/Dashboards

纯 Azure 的团队,Azure Monitor、Log Analytics、App Insights、Azure Dashboards + Pager Duty


### Grafana + Monitis + OpsGenie + Slack

Grafana 通过 Prometheus 监控 Kubernetes 中的容器服务

Monitis 用于端到端服务监控,主要针对 Web API 和 Web 应用

OpsGenie 用于告警管理

Slack 用于获取来自我们系统的状态信息


### Checkly + AppOptics + Cloudwatch + Heroku + Pagerduty + Papertrail

资深(dev)ops 工程师。在 Nagios 上成长起来。很想听听大家对我自筹资金创办的 SaaS https://checklyhq.com 的意见。我们做 API 监控和站点事务监控,并具备相当深入的告警。

我创办 Checkly 是因为 API 领域的主动/合成监控有些局限(而且价格昂贵)。基于浏览器/脚本的监控更加专有且昂贵。我们使用 Puppeteer,并尽可能压低价格。

我们的监控技术栈:

Checkly(自己吃自己的狗粮……)

AppOptics(自定义图表)

AWS Cloudwatch 和 SNS 用于短信。

内置的 Heroku 告警。

Pagerduty

Papertrail


### Instana + Logz.io + slack

Instana 在 slack 中就基础设施问题或性能下降向我们发出告警,而我们已将 logz.io 配置为,当应用层出现一定量的错误级别日志时在 slack 中告警。


### SignalFX + Splunk + PagerDuty + Slack

目前使用:SignalFX、Splunk、PagerDuty 和 Slack。我不太喜欢 SignalFX,尽管他们的支持团队非常友好且响应迅速。我喜欢 Splunk(如果你付得起,值得)、PagerDuty 和 Slack。

我过去使用 TICK 技术栈,其中的 C 实际上是 G,也就是 Grafana,尽管我也稍微用过 Chronograf。那很棒,但管理起来很痛苦。典型的 SaaS 与自托管的两难。

我用过 DataDog、New Relic、Graylog、ELK 和 BugSnag。我非常喜欢 DataDog 和 New Relic,Graylog 相当不错。我不太喜欢 ELK。BugSnag 不错,我实际上觉得在许多情况下,追踪错误/异常是完整日志监控的一个相当不错的替代。


### ELK + Prometheus + Grafana

和其他人一样,我们用 ELK 处理日志,用 Prometheus+Grafana 处理其他一切。

如果你允许自己偶尔丢失数据,维护这套配置就很容易。例如,如果我们的 ElasticSearch 数据库出了状况(不幸的是,我们每 2-3 个月就会出一次),我们就不去搞 HA 了,而是转储数据,继续过我们的日子。如果你绝对必须要有 HA 或长期保留,祝你好运。


### Datadog + Prometheus + Grafana

我按月订阅设置了 Datadog,因为我来到这里时,没有任何监控和告警。只有我们的少数几个站点每 5 分钟监控一次可用性。Datadog 毫无疑问是最容易设置的。等我解决完所有其他问题后,我会改用 Prometheus+Grafana。日志管理还没有 100% 决定。

### Nagios + ELK

我们支持 100 多个产品。

对于本地部署,主要是 Nagios 和 ELK。对于云,我们正在从 DataDog 迁移到 NewRelic。


### Datadog vs. Site24x7 + StatusCake + PagerDuty + SumoLogic + Slack

我们过去使用 datadog,但发现它对我们的需求来说太贵了。别误会,它很棒,但它确实成本很高。我们用相当于 DD 约 2-3 个月费用的年度订阅,就设置好了 site24x7.com。

我们的监控技术栈:

Site24x7 - APM、外部 URL 监控、SMTP 邮件流监控、ssl 到期监控和进程监控。

StatusCake - 用于 URL 监控和确认 - 它是我们的备份,以防 site24x7 漏掉什么(它不会),但 SC 对于我们的外部端口和服务监控需求更灵活。

两个工具都会升级到 PagerDuty,然后我们在 slack 中收到升级通知。

SumoLogic - 用于日志监控(它是个很棒的工具,但对我们的需求来说有点复杂)

在 slack 中我们可以确认或修复告警。

然后我们有很多 site24x7 自动化,连接到 commando.io 来执行我们所谓的“BedOps”——告警被触发时,我们启动一些脚本或自动化来尝试修复情况(99% 的时间里,自动化 + 我们的脚本能让我们免于麻烦)。

当自动化失败,或有超出范围需要修复的问题时,我们在知识库中有内部运行手册。


### Prometheus + AlertManager + Grafana + Stackdriver

Prometheus(Operator)/ AlertManager / Grafana 用于我们 GKE 集群和虚拟机中的指标。

Google Stackdriver 用于日志(因为它包含在内且默认启用,目前足以满足我们的需求)。


### Zabbix

Zabbix 搞定一切。无需额外软件。
