# 指标、监控、告警

目录：

* [摘要](#摘要)
  * [问题](#问题)
  * [决策](#决策)
  * [状态](#状态)
* [详情](#详情)
  * [假设](#假设)
  * [限制](#限制)
  * [立场](#立场)
  * [论据](#论据)
  * [影响](#影响)
* [相关](#相关)
  * [相关决策](#相关决策)
  * [相关需求](#相关需求)
  * [相关工件](#相关工件)
  * [相关原则](#相关原则)
* [备注](#备注)
  * [自由文本消息对结构化事件消息](#自由文本消息对结构化事件消息)
  * [Graylog 更加容易](#graylog-更加容易)
  * [Prometheus 需要调一调](#prometheus-需要调一调)
  * [AWS 服务有好有坏](#aws-服务有好有坏)
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
  * [Datadog 对 Site24x7 + StatusCake + PagerDuty + SumoLogic + Slack](#datadog-对-site24x7--statuscake--pagerduty--sumologic--slack)
  * [Prometheus + AlertManager + Grafana + Stackdriver](#prometheus--alertmanager--grafana--stackdriver)
  * [Zabbix](#zabbix-1)


## 摘要


### 问题

阿拉想用指标、监控搭告警，因为阿拉想晓得阿拉个应用运行得有多好，也想晓得有问题个辰光。


### 决策

进行中。


### 状态

正辣收集信息。阿拉从看起来合理个两端开始：最被推荐个老个免费工具（Nagios），还有最被推荐个新个付费工具（New Relic）。


## 详情


### 假设

阿拉想创建现代、快速、可靠、响应式等等个 Web 应用。

阿拉想买而勿是造。


### 限制

阿拉想要搭阿拉个 devops 流水线，还有阿拉部署用个云配合得好个工具。


### 立场

阿拉现在辣调研各种立场。


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


### 论据

到现在为止，Nagios 搭 New Relic 是两端。Nagios 是最老、最简单、免费、可行个工具。New Relic 是功能最新、最完整、付费、可行个工具。阿拉会从评估迭两个开始。根据需要，阿拉会迁移到中间。

到现在为止，Zabbix 个推荐最好，提供个能力也最完整。

到现在为止，ELK 辣开源“自建胜过购买”方面最受欢迎。

到现在为止，Prometheus + Graphana 最受欢迎。


### 影响

待办。


## 相关


### 相关决策

迭眼选择会影响可测试性、遥测，还可能影响其他系统，比方客户服务、站点可靠性工程等等。


### 相关需求

待办。


### 相关工件

待办。


### 相关原则

容易撤销。

需要速度。


## 备注


一个蛮好个开源栈是：

* Prometheus 做指标，并且根据指标告警

* Grafana 显示指标

* Elasticsearch/Logstash/Kibana（ELK）做日志搭结构化事件

* Pushover 做移动端通知


### 自由文本消息对结构化事件消息

自由文本消息：比方，/var/log/messages 里向会碰着个那种随意个东西，还有应用有意生成个东西。迭眼消息对识别机器上发生个其他事体（比方内存勿够或者硬件错误）有用，勿过有许多垃圾。

结构化事件消息：由应用生成，带一组固定或者动态个属性，比方 HTTP 请求日志、记账日志、用户登录。

一般来讲，最好用可以根据属性往下钻个方式，记录每个请求个细节。所以辣所有东西上加比方 userid 或者 sessionid，就让侬可以追踪。当然，显式追踪也是好个。用 ELK 做迭个，有点像穷人版个 https://www.honeycomb.io/


### Graylog 更加容易

根据我个经验，Graylog 更加容易搭起来。


### Prometheus 需要调一调

我对 Prometheus 做指标总体上蛮满意。告警需要调一调，勿过蛮好。伊取决于侬个应用。我觉得最好是对最终用户看得到个情况告警，而勿是对底层原因告警。比方，页面加载辰光是好个，每秒请求数勿好。勿过每秒呒没请求，表明有啥地方出问题哉。

服务个好处是，伊拉开箱即用就提供额外个智能。我总体上欢喜 Datadog。要是侬有许多数据，服务可能贵得吓人，有辰光定价模式勿适合云，比方按实例收费，而实例是动态个。还有，每个请求侪来自付费用户个服务，搭广告相关个服务是勿一样个，后者只有一小部分请求赚钞票。侬可能最后数据一大堆，预算却勿多。

我做个有眼服务每日有 10 亿个请求，所以自家托管监控搭日志蛮合理。要是侬个量比较小，托管服务更加容易。


### AWS 服务有好有坏

我用 AWS 服务个经验有好有坏。伊拉个 Elasticsearch 服务勿大稳，所以阿拉自家跑实例。CloudWatch 指标价钿贵，所以阿拉一般只拿伊用辣“基础设施”层面个指标，而勿是应用，也就是搭健康有关个指标，对迭种指标 AWS 比跑辣实例上个软件更加晓得发生了啥。CloudWatch Logs 更新可能慢，而且元数据勿多。跑 ELK 对迭个有帮助。要是我真个想要实时数据，拿 Kafka 当日志个传输更加好。Logstash 对迭个支持蛮好。勿过，管理 Kafka 集群勿是胆小个人干得了个，有许多暴露出来个管道。


### Kafka

评论：Kafka 有辰光可能超级棘手，或者 Kafka 可能稳如磐石，侬几乎忘记伊辣迭搭拿所有东西连起来。


评论：Kafka 一直蛮稳，勿过让伊跑起来个工作量大得出乎意料。我拿伊想成关系型数据库，只勿过侬只辣“物理”层工作，比方表空间、文件搭分区。早期有几趟，管理工具欠缺，阿拉只好写程序来做比方重置消费者组个事体。http://howfuckedismydatabase.com/nosql/

评论：阿拉拿 Kafka 当日志消息个“缓冲”，还当作一个地方，可以对来自多台服务器个数据做实时流处理。要是阿拉碰着 DDOS 攻击，阿拉需要一个办法跨多个实例分析数据。要是直接从服务器记日志到 ELK，负载可能会弄垮 Elasticsearch 集群。

评论：Kafka 对阿拉好，因为要是阿拉碰着 DDOS 攻击，阿拉需要一个办法跨多个实例分析数据。要是直接从服务器记日志到 ELK，负载可能会弄垮 Elasticsearch 集群。


评论：Kafka 做个事体更加少，更加高效，所以可以更加好地处理负载。而且阿拉拿 Kafka 个工作排队，再重试。Kafka 过载勿会影响辣 Kibana 上做交互式工作个用户，勿像 Elasticsearch 吃力个辰光那能。

评论：流处理主要是找滥用，比方整个集群里单个 IP 个流量太大，然后辣整个集群里分享封禁。

评论：勿过 logstash-output-kafka 插件现在相当勿可靠。我被伊 GitHub issues 页面上好几个问题坑过，那眼问题好像从来勿会修复。我想勿再用伊，改成直接从阿拉个应用发送到 Kafka。

评论：阿拉现在直接从应用发送结构化事件到 Kafka。主要动机是少碰日志数据几趟，避免多趟读写磁盘。辣高流量个系统里，记日志可能比应用本身个工作更加多。我辣考虑让 journald 也直接发送日志，用一个 C 程序。


### Loki

密切关注 Loki。伊现在还勿成熟，勿过等伊成熟了，我预期伊会更加适合迭个栈。Loki 是 grafana labs 创建个日志聚合器，伊用搭 Prometheus 类似个抓取搭标签语法。


### Prometheus + alertmanager + Rollbar + Graylog + Grafana

 Prometheus + alertmanager 做指标。<3 Prometheus。

Rollbar/Graylog 做日志／错误报告（这里有眼重叠；小服务可能勿需要两个都要）。

现在，告警只是发到几个 Slack 频道之一，有兴趣个人打开了通知。要是阿拉对待命更加认真，会发到 PagerDuty/VictorOps 等等。

Grafana 做图表搭仪表盘。也急切地期待看伊们即将推出个日志功能会勿会让 Graylog 变得勿必要。


### Thanos

阿拉用 Thanos 作为 HA 设置个前端。伊晓得哪能对 HA 对进行去重。

阿拉现在保留 6 个月个本地 Prometheus 数据。迭个对阿拉蛮管用。勿过我正好辣拿存储桶存储推广到阿拉个 Thanos 设置里，做长期数据存储。理论上，GCS 存储会比阿拉现在用个 GCE 标准持久磁盘便宜大约 30%。

阿拉现在勿备份 Prometheus 数据。除了够用来告警，迭眼数据对阿拉并勿真个重要。阿拉整个机群个部署每年变化很大，所以超过几个月个历史数据勿大有意思。逐年对比一眼核心统计数据可能蛮有意思，我可能会设置一套核心统计个记录规则，用联邦存储，或者让 Thanos 来处理。

编辑：一个小小个声明，我是 Prometheus 开发者。


### Prometheus HA

Prometheus 个 HA 是通过复制做个，侬跑多个采集器，有办法轮询多个，再对数据去重

扩展是通过划分网络，让勿同个 Prometheus 轮询网络个勿同部分

长期存储勿是 Prometheus 个强项，而是卸给 influx 或者 timescaledb 迭类（技术上也满足 HA 迭一项）我读过个一篇文章 https://blog.timescale.com/prometheus-ha-postgresql-8de68d19b6f5?gi=7df160f10e07

还呒没试过长期存储个东西，因为我还只是辣试验，拿伊用来做短期图表，librenms 监控我个网络做长期


### Datadog + PagerDuty + Threat Stack

阿拉用 Datadog（配 PagerDuty）搭 Threat Stack，再满意勿过。我对 DD 唯一个抱怨是指标存储成本相对比较高。


### Zabbix

Zabbix 配自定义脚本，监控几乎所有东西。像魔法一样管用。


### Outlyer

我辣用 Outlyer，勿过我必须声明我辣迭搭工作，自己吃自己个狗粮是必须个。

还是需要 Graylog、Sentry 搭 Statuscake 来增强。

听起来有偏见，勿过辣内部愉快地跑过 Nagios 搭其他监控系统之后，辣任何新工作里，我会买托管方案，拿迭个痛苦卸掉。


### Nagios + Nagiosgraph

阿拉用 Nagios 做所有监控搭告警。告警通过电子邮件（警告搭严重通知）搭可听见个应用通知（严重告警）发出。

Nagiosgraph 用来做可视化。

迭套设置非常有效地让阿拉全面晓得阿拉环境里发生个事体。阿拉运行并且监控大约 110 台关键任务服务器搭大约 760 个数据点，迭套早上监控系统已经有七年多了。

我也想辣某个辰光用 Graylog 或者 ELk 聚合日志。


### Prometheus + Grafana + AlertManager

Prometheus + Grafana + AlertManager，通过很棒个 Prometheus Operator helm chart。日志仍旧发到 LogDNA birch 套餐，因为阿拉发现 ELK 对阿拉辣 GKE 上最少 3 个最多 5 个节点个小规模来讲太重量级。


### DataDog + Sentry + PagerDuty.

我以前自家跑所有个监控方案，用各种各样个软件，包括 Nagios、Icinga、Zabbix、ELK、Greylog2、Influx，还有许多其他工具，勿过老实讲，自己运行监控基础设施花个精力实辣太多，尤其是侬可以用迭能低个价钿付钞票，让别人替侬做！

付钞票让别人运行监控基础设施，让我个客户可以专心运行伊拉个平台，而勿是监控监控，意味着伊拉从平台稳定性得到个价值，远远超过监控即服务个任何成本。


### Sensu + Graphite + ELK

我公司非常看重自托管个东西。

Sensu -> PagerDuty

Graphite/Grafana

ELK（Elasticsearch、Logstash、Kibana）


### Prometheus + Alertmanager

Prometheus + Alertmanager 做告警，我个团队相信简单个监控就是好个监控。

日志搭追踪迭类其他系统，会辣待命人员收到告警个辰光，为诊断提供丰富个背景，勿过阿拉从来勿拿告警建立辣迭眼上头。


### Sensu + Grafana + Graylog + Kibana + NewRelic.

Sensu、grafana、graylog、kibana、newrelic。


### Prometheus + Circonus

Prometheus 插桩个服务 => Circonus 分析搭可视化


### icinga2 + VictorOps + NewRelic + Sentry + Slack

阿拉辣用下底几个服务：

icinga2 做监控，VictorOps 做告警

NewRelic 做服务个详细监控

Sentry 做服务里个错误跟踪

Slack/电子邮件是告警个一部分，由 NewRelic 或者 icinga2 触发


### AppDynamics + Papertrail + PagerDuty + Healthchecks.io + Stackdriver

AppDynamics

Papertrail

PagerDuty

Healthchecks.io

Stackdriver


### icinga2 + elasticsearch

icinga2 配 elasticsearch 集成做分析，配 graphite+grafana 集成做图表。

多亏 icinga2 里应用规则个灵活性，开发者只看得到伊拉会收到通知个服务。

而且通过 icinga2 director，程序员可以辣大规模上毫勿费力地容易定义自家个检查（伊拉真个辣做，每隔几日——100 个检查出去，100 个其他检查进来）。


### DataDog + New Relic + ELK + EFK + Sentry + Alertmanager + VictorOps

阿拉现在有啥：

DataDog 做指标

New Relic 做应用监控

ELK（Elastic Search + Logstash + Kibana）做日志

Sentry（自托管）做记录异常

电子邮件 + Slack + VictorOps 做告警（根据严重程度）

阿拉想要有啥：

Prometheus 做指标（Grafana 做可视化）

New Relic（可能是 Elastic Search APM）做应用监控

EFK（elastic search + fluentd + kibana）做日志。可能到阿拉做到迭一步个辰光，Grafana 个 Loki 已经可以用于生产

Sentry 做异常

Alertmanager + 电子邮件 + VictorOps 做告警


### Wavefront + Scalyr + PagerDuty + Stackstorm + Slack

Wavefront + Scalyr + PagerDuty + Stackstorm + Slack（声明：辣 VMware 工作）


### Telegraf + Prometheus + InfluxDB + Grafana

Telegraf 做 CPU、磁盘、内存搭网络迭类服务器指标。阿拉还用 Telegraf 对阿拉个网络设备做 SNMP 监控。

Prometheus 做应用指标。阿拉辣应用里写进健康检查，Prometheus 去抓取。

InfluxDB 做时序存储。阿拉个 Telegraf 数据发到迭搭。

Grafana 做仪表盘搭告警。告警引擎勿算超级稳固，勿过能完成任务。阿拉也拿告警发进 Slack。

我现在呒没个是集中式个日志方案。ELK 强大，勿过难设置、难管理，我也勿晓得有啥免费个替代品够接近，值得去看。


### Sematext + Logagent + Experience

Sematext 做指标、做日志、做追踪，不久也会做真实用户监控。依我看，比用 N 个勿同个工具／服务更加简单／更加便宜。

做日志传送，阿拉以前用 rsyslog，后来换成 Logagent。

前端崩溃报告阿拉用 Sentry，勿过阿拉马上会换成 Experience。

声明：我是 Sematext 个人。


### Azure Monitor/Analytics + OpsGenie

我希望 Log Analytics 有更加好个界面。阿拉辣离开 splunk，伊导航起来容易得多。


### Prometheus + Alertmanager + Grafana + Splunk + PagerDuty

Prometheus、Alertmanager、Grafana、Splunk、PagerDuty

侬真个勿想自家运行通知系统。除非侬个安全团队更加欢喜 Splunk，侬可以拿 Splunk 换成 ELK。


### Telegraf + Prometheus + Grafana + Alertmanager

Telegraf 做采集器，Prometheus + Alertmanager 做监控搭告警，集成 slack 频道，严重告警集成 pagerduty。Grafana 做主机指标可视化。


### Prometheus + Grafana + Cloudwatch + sentry + kibana + elasticsearch

Prometheus 做指标 + 告警

Grafana 做 Prometheus 仪表盘

Cloudwatch 监控 Prometheus 实例

sentry 做异常跟踪

kibana + elasticsearch

graylog

prometheus Push Gateway 做批处理／定时任务

SOP https://github.com/rapidloop/sop 用来从一个 Prometheus 实例向另外一个“推送／转发”指标

客户端要么用 Prometheus 客户端。阿拉试着辣客户端用 opencensus.io


### PagerDuty + Monitis

PagerDuty + Monitis。还有一眼定制个 Azure Functions，用来测试某眼服务个健康状况。

打算今年引入 Prometheus 搭 Grafana


### Prometheus + Grafana + Bosun

Prometheus 存储时序数据。Grafana 做可视化。Bosun 做告警管理。


### Azure Monitor/Analytics/Insights/Dashboards

只用 Azure 个公司，Azure Monitor、Log Analytics、App Insights、Azure Dashboards + Pager Duty


### Grafana + Monitis + OpsGenie + Slack

Grafana 通过 Prometheus 监控 Kubernetes 里个容器服务

Monitis 做端到端服务监控，主要针对 Web API 搭 Web 应用

OpsGenie 做告警管理

Slack 用来从阿拉个系统获取状态信息


### Checkly + AppOptics + Cloudwatch + Heroku + Pagerduty + Papertrail

我是个老牌（dev）ops 工程师。伴随 Nagios 长大。很想听听对我自力更生做起来个 SaaS https://checklyhq.com 个意见。阿拉做 API 监控搭站点事务监控，告警相当深入。

我创办 Checkly，是因为 API 领域里个主动／合成监控有点有限（而且价钿贵）。基于浏览器／脚本个监控更加专有、更加贵。阿拉用 Puppeteer，把价钿保持得尽量低。

阿拉个监控栈：

Checkly（吃自己个狗粮……）

AppOptics（自定义图表）

AWS Cloudwatch 搭 SNS 发短信。

内置个 Heroku 告警。

Pagerduty

Papertrail


### Instana + Logz.io + slack

Instana 辣 slack 里向通知阿拉基础设施问题或者性能下降，阿拉还配置了 logz.io，当应用层错误级别日志达到一定数量个辰光，辣 slack 里告警。


### SignalFX + Splunk + PagerDuty + Slack

现在用个是：SignalFX、Splunk、PagerDuty 搭 Slack。我勿大欢喜 SignalFX，虽然伊拉个支持团队超级友好，响应也快。我欢喜 Splunk（要是付得起，值得）、PagerDuty 搭 Slack。

我以前用过 TICK 栈，其中大部分个 C 其实是 G，也就是 Grafana，勿过我也用过一点 Chronograf。那个很棒，勿过管理起来是个痛苦。经典个 SaaS 对自托管个两难。

我用过 DataDog、New Relic、Graylog、ELK 搭 BugSnag。我蛮欢喜 DataDog 搭 New Relic，Graylog 蛮好。勿过我勿大是 ELK 个粉丝。BugSnag 勿错，我实际上觉得，辣许多情况下，跟踪错误／异常是完整日志监控个一个蛮好个替身。


### ELK + Prometheus + Grafana

搭其他人一样，阿拉用 ELK 做日志，用 Prometheus+Grafana 做其他所有东西。

要是侬允许自家偶尔丢一眼数据，维护迭套设置是容易个。比方，要是阿拉个 ElasticSearch 数据库出毛病（勿幸个是对阿拉每 2-3 个月一趟），阿拉勿去弄 HA，而是拿数据倒掉，继续过日脚。要是侬绝对必须有 HA 或者长期保留，祝侬好运。


### Datadog + Prometheus + Grafana

我按月订阅了 Datadog，因为我到迭搭个辰光，呒没监控，也呒没告警。阿拉只有几个站点每 5 分钟监控一趟是否正常运行。Datadog 毫无疑问是最容易设置个。等我处理完所有其他问题，我会改成 Prometheus+Grafana。日志管理还呒没百分之百决定。


### Nagios + ELK

阿拉支持 100 多个产品。

本地部署个，主要是 Nagios 搭 ELK。云上个，阿拉辣从 DataDog 迁移到 NewRelic。


### Datadog 对 Site24x7 + StatusCake + PagerDuty + SumoLogic + Slack

阿拉以前用 datadog，勿过发现对阿拉个需要来讲伊太贵哉。勿要误会，伊很棒，勿过成本确实巨大。阿拉用年度订阅设置了 site24x7.com，价钿大约是 DD 两三个月个成本。

阿拉个监控栈：

Site24x7 - APM、外部 URL 监控、SMTP 邮件流监控、ssl 到期搭进程监控。

StatusCake - 做 URL 监控搭确认——伊是阿拉个备份，万一 site24x7 漏掉啥（伊勿会），勿过 SC 对阿拉个需要来讲，做外部端口搭服务监控更加灵活。

两个工具侪升级到 PagerDuty，然后阿拉辣 slack 里收到升级。

SumoLogic - 做日志监控（伊是个很棒个工具，勿过对阿拉个需要来讲有点复杂）

从 slack 里向，阿拉可以确认或者补救告警。

然后阿拉有许多 site24x7 自动化，连接到 commando.io，做阿拉叫个“BedOps”——告警触发个辰光，阿拉启动几个脚本或者自动化，尝试补救情况（99% 个辰光，自动化 + 阿拉个脚本让阿拉勿惹麻烦）。

自动化失败，或者有啥超出范围个事体需要修复个辰光，阿拉有放辣 KB 里个内部运行手册。


### Prometheus + AlertManager + Grafana + Stackdriver

Prometheus（Operator）/ AlertManager / Grafana 做阿拉 GKE 集群搭虚拟机里个指标。

Google Stackdriver 做日志（因为伊内置、默认启用，现在对阿拉个需要够用）。


### Zabbix

Zabbix 搞定一切。勿需要额外软件。
