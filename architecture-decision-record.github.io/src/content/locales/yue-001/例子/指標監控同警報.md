# 指標、監控、警報

內容：

* [摘要](#摘要)
  * [問題](#問題)
  * [決策](#決策)
  * [狀態](#狀態)
* [詳情](#詳情)
  * [假設](#假設)
  * [限制](#限制)
  * [立場](#立場)
  * [論據](#論據)
  * [影響](#影響)
* [相關](#相關)
  * [相關決策](#相關決策)
  * [相關需求](#相關需求)
  * [相關工件](#相關工件)
  * [相關原則](#相關原則)
* [備註](#備註)
  * [自由格式文字訊息對結構化事件訊息](#自由格式文字訊息對結構化事件訊息)
  * [Graylog 較容易](#graylog-較容易)
  * [Prometheus 需要啲調校](#prometheus-需要啲調校)
  * [AWS 服務好壞參半](#aws-服務好壞參半)
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
  * [Datadog 對 Site24x7 + StatusCake + PagerDuty + SumoLogic + Slack](#datadog-對-site24x7--statuscake--pagerduty--sumologic--slack)
  * [Prometheus + AlertManager + Grafana + Stackdriver](#prometheus--alertmanager--grafana--stackdriver)
  * [Zabbix](#zabbix-1)


## 摘要


### 問題

我哋想用指標、監控同警報，因為我哋想知道我哋嘅應用程式運作得幾好，以及幾時出現問題。


### 決策

進行中。


### 狀態

收集資料中。我哋由光譜上合理嘅兩端開始：最多人推薦嘅較舊免費工具（Nagios），同最多人推薦嘅較新付費工具（New Relic）。


## 詳情


### 假設

我哋想建立現代、快速、可靠、響應式等嘅網頁應用程式。

我哋想買而唔係自己建。


### 限制

我哋想要同我哋嘅 devops 管線同部署雲端運作良好嘅工具。


### 立場

我哋而家正研究各種立場。


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

  
### 論據

到目前為止，Nagios 同 New Relic 係光譜嘅兩端。Nagios 係最舊、最簡單、免費、可行嘅工具。New Relic 係功能最新、最完整、付費、可行嘅工具。我哋會由評估呢兩個開始。有需要時，我哋會遷移到光譜之間。  

到目前為止，Zabbix 獲得最好嘅推薦，亦提供最完整嘅功能。

到目前為止，ELK 喺開源「自建勝過購買」之中最受歡迎。

到目前為止，Prometheus + Graphana 最受歡迎。


### 影響

待辦。


## 相關


### 相關決策

呢啲選擇會影響可測試性、遙測，以及可能影響其他系統，例如客戶服務、網站可靠性工程等。


### 相關需求

待辦。


### 相關工件

待辦。


### 相關原則

容易回復。

需要速度。


## 備註


一個相當不錯嘅開源技術棧係：

* Prometheus 做指標，並基於指標發出警報

* Grafana 顯示指標

* Elasticsearch/Logstash/Kibana（ELK）做日誌同結構化事件

* Pushover 做流動裝置通知


### 自由格式文字訊息對結構化事件訊息

自由格式文字訊息：例如你喺 /var/log/messages 搵到嘅隨機內容，以及應用程式刻意產生嘅東西。呢類訊息有助識別機器上發生嘅其他事情（例如記憶體不足或者硬件錯誤），不過有好多雜訊。 

結構化事件訊息：由應用程式產生，帶有固定或者動態嘅屬性集，例如 HTTP 請求日誌、會計日誌、用戶登入。

一般嚟講，最好記錄每個請求嘅詳細資料，方式要令你可以按屬性向下鑽取。所以喺所有嘢加上例如 userid 或者 sessionid，就可以追蹤。當然，明確嘅追蹤（tracing）亦都好。用 ELK 做呢樣嘢，算係窮人版嘅 https://www.honeycomb.io/


### Graylog 較容易

以我嘅經驗，Graylog 較容易起動。


### Prometheus 需要啲調校

我對 Prometheus 做指標一般都滿意。警報需要啲調校，不過相當好。視乎你嘅應用程式而定。我認為最好針對終端用戶睇得到嘅狀況發出警報，而唔係針對底層原因。例如，頁面載入時間係好嘅指標，每秒請求數就唔係。不過，每秒零個請求就表示有問題。

服務嘅好處係佢哋開箱即用已經提供額外嘅智能。我一般鍾意 Datadog。如果你有好多數據，呢啲服務可以貴得嚇人，而且有時定價模式對雲端不友善，例如按實例收費，但實例係動態嘅。另外，每個請求都嚟自付費用戶嘅服務，同廣告相關嘅服務亦有分別，因為後者只有一小部分請求為你賺錢。你可能最終有大量數據，但預算唔多。

我負責嘅一些服務每日有 10 億個請求，所以自己託管監控同日誌係合理嘅。如果你嘅流量較低，咁託管服務會更容易。


### AWS 服務好壞參半

我對 AWS 服務嘅經驗好壞參半。佢哋嘅 Elasticsearch 服務一直唔穩定，所以我哋自己運行實例。CloudWatch 指標好貴，所以我哋一般只用佢嚟處理「基礎設施」層面嘅指標，而唔係應用程式層面，即係同健康相關嘅指標，AWS 比實例上運行嘅軟件更清楚發生咩事。CloudWatch Logs 更新可能好慢，而且元數據唔多。運行 ELK 就可以解決呢個問題。如果我真係想要即時數據，咁用 Kafka 嚟傳輸日誌會更好。Logstash 對此支援得相當好。不過，管理 Kafka 集群並非膽小者之事，因為有好多外露嘅底層管道。


### Kafka

評論：Kafka 有時可以非常棘手，又或者 Kafka 可以穩如磐石，穩到你幾乎忘記咗佢喺度將所有嘢連繫埋一齊。


評論：Kafka 一直好穩定，不過搞到佢運作要花驚人嘅工夫。我當佢係關聯式資料庫，只不過你只係喺「物理」層面工作，例如表空間、檔案同分區。早期有幾次管理工具不足，我哋要寫程式去做例如重設消費者群組嘅事。http://howfuckedismydatabase.com/nosql/

評論：我哋用 Kafka 做日誌訊息嘅「緩衝」，亦係一個可以對嚟自多部伺服器嘅數據做即時串流處理嘅地方。如果我哋遇到 DDOS 攻擊，就需要一個方法跨多個實例分析數據。如果我哋直接由伺服器記錄到 ELK，負載可能會令 Elasticsearch 集群爆煲。

評論：Kafka 對我哋有好處，因為如果我哋遇到 DDOS 攻擊，就需要一個方法跨多個實例分析數據。如果我哋直接由伺服器記錄到 ELK，負載可能會令 Elasticsearch 集群爆煲。


評論：Kafka 做嘅工作較少，效率更高，所以可以更好咁應付負載。而且我哋會將 Kafka 嘅工作排隊並重試。而 Kafka 超載，唔會像 Elasticsearch 吃力時咁影響緊用 Kibana 做互動工作嘅用戶。

評論：串流處理主要係尋找濫用情況，例如成個集群入面單一 IP 嘅流量過多，然後喺成個集群共享封鎖。

評論：不過，logstash-output-kafka 外掛目前相當不可靠。我被佢 GitHub issues 頁面上好幾個問題搞到，而且嗰啲問題似乎永遠都唔會修復。我想不再用佢，改為由我哋嘅應用程式直接傳送去 Kafka。

評論：我哋而家直接由應用程式向 Kafka 傳送結構化事件。主要動機係減少接觸日誌數據嘅次數，避免多次讀寫磁碟。喺高流量系統入面，記錄日誌可能比應用程式本身需要更多工作。我考慮過用 C 程式令 journald 都直接傳送日誌。


### Loki

密切留意 Loki。佢仍未準備好，不過到佢準備好嗰陣，我預期佢會更適合呢個技術棧。Loki 係 grafana labs 創建嘅日誌聚合器，用同 Prometheus 類似嘅抓取同標籤語法。


### Prometheus + alertmanager + Rollbar + Graylog + Grafana

 Prometheus + alertmanager 做指標。<3 Prometheus。

Rollbar/Graylog 做日誌／錯誤報告（兩者有些重疊；細型服務大概唔需要兩樣都用）。

目前，警報只會去到幾個 Slack 頻道其中之一，有興趣嘅人已經開咗通知。如果我哋對值班更認真，警報就會去 PagerDuty/VictorOps 等。

Grafana 做圖表同儀表板。我亦熱切期待，睇下佢哋即將推出嘅日誌功能會否令 Graylog 變得不再需要。


### Thanos

我哋用 Thanos 做 HA 設置嘅前端。佢知道點樣對 HA 配對進行去重複。

我哋目前保留 6 個月嘅本地 Prometheus 數據。呢個做法對我哋相當有效。不過，我正喺我哋嘅 Thanos 設置入面推出 bucket 儲存，作長期數據儲存。理論上，GCS 儲存會比我哋現時用嘅 GCE 標準持久磁碟平大約 30%。

我哋目前冇備份 Prometheus 數據。除咗足夠做警報之外，呢啲數據對我哋其實唔太重要。我哋整體機群部署逐年變化好大，所以幾個月前嘅歷史數據真係冇咩意思。逐年比較少量核心統計數字或者有用，我可能會設置一組核心統計嘅記錄規則，並用 Federation 儲存，或者乾脆交畀 Thanos 處理。

編輯：小小聲明，我係 Prometheus 開發者。


### Prometheus HA

Prometheus 嘅 HA 係靠複製達成，你運行多個抓取器，有方法輪詢多個並對數據去重複。

擴展係靠劃分網絡，由不同嘅 Prometheus 輪詢網絡嘅不同部分。

長期儲存並非 Prometheus 嘅強項，而係交由 influx 或者 timescaledb 之類處理（技術上亦符合 HA 嘅要求）。我讀過嘅相關文章：https://blog.timescale.com/prometheus-ha-postgresql-8de68d19b6f5?gi=7df160f10e07

長期儲存嗰部分我仍未試過，因為我仍然只係喺試驗階段，用佢做短期圖表，而 librenms 就負責長期監控我嘅網絡。


### Datadog + PagerDuty + Threat Stack

我哋用 Datadog（配合 PagerDuty）同 Threat Stack，再滿意不過。我對 DD 唯一嘅不滿，係指標儲存嘅成本相對較高。


### Zabbix

Zabbix 配合自訂腳本監控幾乎所有嘢。運作如神。


### Outlyer

我用緊 Outlyer，不過我必須聲明我喺度做嘢，而且自己用自己嘅產品（dog fooding）係必須嘅。

仍然需要 Graylog、Sentry 同 Statuscake 嚟加強。

聽落好似有偏見，不過我喺內部愉快咁運行過 Nagios 同其他監控系統之後，如果去新公司，我會買託管方案，免卻呢種麻煩。


### Nagios + Nagiosgraph

我哋用 Nagios 做所有監控同警報。警報透過電郵（警告同嚴重通知）同可聽見嘅應用程式通知（嚴重警報）發出。

Nagiosgraph 用於視覺化。

呢個設置非常有效，令我哋全面掌握環境入面發生咩事。我哋運行同監控大約 110 部關鍵任務伺服器同大約 760 個數據點，而且呢套監控系統已經運作超過七年。

我想喺某個時間點，亦用 Graylog 或者 ELK 聚合日誌。


### Prometheus + Grafana + AlertManager

透過出色嘅 Prometheus Operator helm chart 用 Prometheus + Grafana + AlertManager。日誌仍然去 LogDNA birch 計劃，因為我哋發覺 ELK 對於我哋 GKE 上最少 3 個、最多 5 個節點嘅細規模嚟講太重量級。


### DataDog + Sentry + PagerDuty.

我以前會用各式各樣嘅軟件（包括 Nagios、Icinga、Zabbix、ELK、Greylog2、Influx 同許多其他工具）自己運行所有監控方案，但事實係，運行自己嘅監控基礎設施需要太多心力，尤其係你可以用咁低嘅費用請其他人替你做！

付費畀其他人運行監控基礎設施，令我嘅客戶可以專注運行佢哋嘅平台，而唔使去監控監控系統，意味住佢哋從平台穩定性獲得嘅價值，遠遠超過「監控即服務」嘅任何成本。


### Sensu + Graphite + ELK

我公司非常注重自行託管。

Sensu -> PagerDuty

Graphite/Grafana

ELK（Elasticsearch、Logstash、Kibana）


### Prometheus + Alertmanager

Prometheus + Alertmanager 做警報，我嘅團隊相信簡單嘅監控就係好嘅監控。

日誌同追蹤等其他系統，會喺值班人員收到警報嗰陣，為診斷提供豐富嘅背景，不過我哋從來唔會基於呢啲系統建立警報。


### Sensu + Grafana + Graylog + Kibana + NewRelic.

Sensu、grafana、graylog、kibana、newrelic。


### Prometheus + Circonus

裝有 Prometheus 儀表嘅服務 => Circonus 分析同視覺化


### icinga2 + VictorOps + NewRelic + Sentry + Slack

我哋用緊以下服務：

icinga2 做監控，VictorOps 做警報

NewRelic 用於服務嘅詳細監控

Sentry 用於服務嘅錯誤追蹤

Slack／電郵屬於警報嘅一部分，由 NewRelic 或者 icinga2 觸發


### AppDynamics + Papertrail + PagerDuty + Healthchecks.io + Stackdriver

AppDynamics

Papertrail

PagerDuty

Healthchecks.io

Stackdriver


### icinga2 + elasticsearch

icinga2 配合 elasticsearch 整合做分析，同 graphite+grafana 整合做圖表。

多得 icinga2 套用規則嘅靈活性，開發人員只會見到佢哋收到通知嘅服務。

而透過 icinga2 director，程式設計師可以輕鬆定義自己嘅檢查（佢哋確實每隔幾日就做一次——100 個檢查出，100 個其他檢查入），大規模進行而毫無麻煩。


### DataDog + New Relic + ELK + EFK + Sentry + Alertmanager + VictorOps

我哋現在有咩：

DataDog 做指標

New Relic 做應用程式監控

ELK（Elastic Search + Logstash + Kibana）做日誌

Sentry（自行託管）記錄例外

電郵 + Slack + VictorOps 做警報（按嚴重程度）

我哋想有咩：

Prometheus 做指標（Grafana 做視覺化）

New Relic（可能係 Elastic Search APM）做應用程式監控

EFK（elastic search + fluentd + kibana）做日誌。到我哋做到嗰陣，Grafana 嘅 Loki 可能已經可以用於生產環境

Sentry 做例外

Alertmanager + 電郵 + VictorOps 做警報


### Wavefront + Scalyr + PagerDuty + Stackstorm + Slack

Wavefront + Scalyr + PagerDuty + Stackstorm + Slack（聲明：任職於 VMware）


### Telegraf + Prometheus + InfluxDB + Grafana

Telegraf 做 CPU、磁碟、記憶體同網絡等伺服器指標。我哋亦用 Telegraf 對網絡裝置做 SNMP 監控。

Prometheus 做應用程式指標。我哋喺應用程式入面寫入健康檢查，由 Prometheus 抓取。

InfluxDB 做時間序列儲存。我哋嘅 Telegraf 數據就傳送到呢度。

Grafana 做儀表板同警報。警報引擎唔算好穩健，不過可以應付。我哋亦將警報推送到 Slack。

我目前冇嘅係集中式日誌方案。ELK 功能強大，但難以設置同管理，而我又唔知道有任何夠接近而值得研究嘅免費替代品。


### Sematext + Logagent + Experience

Sematext 做指標、日誌、追蹤，不久之後亦會做真實用戶監控。恕我直言，比用 N 種唔同工具／服務更簡單／更平。

日誌傳送方面，我哋以前用 rsyslog，之後轉用 Logagent。

前端崩潰報告我哋用 Sentry，不過我哋好快會轉用 Experience。

聲明：我係 Sematext 嘅員工。


### Azure Monitor/Analytics + OpsGenie

我希望 Log Analytics 有更好嘅介面。我哋正遠離 splunk，splunk 容易瀏覽得多。


### Prometheus + Alertmanager + Grafana + Splunk + PagerDuty

Prometheus、Alertmanager、Grafana、Splunk、PagerDuty

你真係唔想運行自己嘅通知系統。除非你嘅保安團隊偏好 Splunk，否則你可以用 ELK 取代 Splunk。


### Telegraf + Prometheus + Grafana + Alertmanager

Telegraf 做收集器，Prometheus + Alertmanager 做監控同警報，嚴重警報整合到 slack 頻道同 pagerduty。Grafana 做主機指標視覺化。


### Prometheus + Grafana + Cloudwatch + sentry + kibana + elasticsearch

Prometheus 做指標 + 警報

Grafana 做 Prometheus 儀表板

Cloudwatch 監控 Prometheus 實例

sentry 做例外追蹤

kibana + elasticsearch

graylog

prometheus Push Gateway 用於批次／cronjob

SOP https://github.com/rapidloop/sop 用嚟將指標由一個 Prometheus 實例「推送／轉發」去另一個

客戶端要麼用 Prometheus 客戶端。我哋嘗試喺客戶端用 opencensus.io


### PagerDuty + Monitis

PagerDuty + Monitis。另外仲有一些度身訂造嘅 Azure Functions，用嚟測試部分服務嘅健康狀況。

打算今年引入 Prometheus 同 Grafana


### Prometheus + Grafana + Bosun

Prometheus 儲存時間序列數據。Grafana 做視覺化。Bosun 做警報管理。


### Azure Monitor/Analytics/Insights/Dashboards

純 Azure 公司，Azure Monitor、Log Analytics、App Insights、Azure Dashboards + Pager Duty


### Grafana + Monitis + OpsGenie + Slack

Grafana 透過 Prometheus 監控 Kubernetes 入面嘅容器服務

Monitis 用於端對端服務監控，主要針對網頁 API 同網頁應用程式

OpsGenie 做警報管理

Slack 用於接收我哋系統嘅狀態資訊


### Checkly + AppOptics + Cloudwatch + Heroku + Pagerduty + Papertrail

我係資深 (dev)ops 工程師，喺 Nagios 年代成長。好想聽下大家對我自力創業嘅 SaaS https://checklyhq.com 嘅意見。我哋做 API 監控同網站交易監控，警報相當深入。

我創辦 Checkly，係因為 API 領域嘅主動／合成監控有啲局限（而且貴）。基於瀏覽器／腳本式嘅監控更加封閉同昂貴。我哋用 Puppeteer，並將價格壓到最低。

我哋嘅監控技術棧：

Checkly（自己用自己嘅產品……）

AppOptics（自訂圖表）

AWS Cloudwatch 同 SNS 發送 SMS 訊息。

內置 Heroku 警報。

Pagerduty

Papertrail


### Instana + Logz.io + slack

Instana 會喺 slack 通知我哋基礎設施問題或者效能下降，而我哋已經配置 logz.io，當應用程式層出現一定數量嘅錯誤級別日誌，就喺 slack 發出警報。


### SignalFX + Splunk + PagerDuty + Slack

目前用緊：SignalFX、Splunk、PagerDuty 同 Slack。我唔太鍾意 SignalFX，雖然佢哋嘅支援團隊非常友善同反應迅速。我鍾意 Splunk（如果你負擔得起就值得）、PagerDuty 同 Slack。

我以前用過 TICK stack，其中大部分嘅 C 其實係 G，即係 Grafana，不過我都有用少少 Chronograf。嗰套好正，不過管理起上嚟好麻煩。經典嘅 SaaS 對自行託管兩難。

我用過 DataDog、New Relic、Graylog、ELK 同 BugSnag。我好鍾意 DataDog 同 New Relic，Graylog 都幾好。我就唔係太鍾意 ELK。BugSnag 幾好，我實在覺得追蹤錯誤／例外，喺好多情況下可以好好咁代替完整嘅日誌監控。


### ELK + Prometheus + Grafana

同其他人一樣，我哋用 ELK 做日誌，其他所有嘢就用 Prometheus+Grafana。

如果你容許自己偶爾丟失數據，維護呢個設置就好容易。例如，如果我哋嘅 ElasticSearch 資料庫出問題（可惜我哋每 2-3 個月就會發生一次），我哋唔會理會 HA，而係直接傾倒數據，然後繼續過日子。如果你絕對需要 HA 或者長期保留，祝你好運。


### Datadog + Prometheus + Grafana

我用按月計費嘅方式設置咗 Datadog，因為我嚟到嗰陣，冇任何監控，亦冇任何警報。只有幾個網站每 5 分鐘被監控一次正常運行時間。Datadog 絕對係最容易設置嘅。當我處理完所有其他問題之後，我會改用 Prometheus+Grafana。日誌管理方面仲未百分之百決定。


### Nagios + ELK

我哋支援超過 100 個產品。

對於本地部署，主要係 Nagios 同 ELK。對於雲端，我哋正由 DataDog 遷移到 NewRelic。


### Datadog 對 Site24x7 + StatusCake + PagerDuty + SumoLogic + Slack

我哋以前用 datadog，但發覺對我哋嘅需要嚟講太貴。唔好誤會，佢好正，不過成本好高。我哋設置咗 site24x7.com 嘅年度訂閱，費用大約只係 DD 嘅 2-3 個月。

我哋嘅監控技術棧：

Site24x7 - APM、外部 URL 監控、SMTP 郵件流監控、ssl 到期同程序監控。

StatusCake - 用於 URL 監控同確認 - 係我哋嘅後備，以防 site24x7 漏咗啲嘢（佢唔會），不過 SC 對外部連接埠同服務監控更靈活，配合我哋嘅需要。

兩個工具都會升級到 PagerDuty，然後我哋喺 slack 收到升級通知。

SumoLogic - 用於日誌監控（係好工具，不過對我哋嘅需要有啲複雜）

喺 slack 我哋可以確認或者補救警報。

之後我哋有好多 site24x7 自動化，連接到 commando.io 做我哋所謂嘅「BedOps」——警報觸發嗰陣，我哋會啟動幾個腳本或者自動化，嘗試補救情況（99% 嘅時間，自動化 + 我哋嘅腳本都令我哋免於麻煩）。

我哋嘅知識庫有內部運行手冊，用於自動化失敗，或者有超出範圍、需要修復嘅嘢嗰陣。


### Prometheus + AlertManager + Grafana + Stackdriver

Prometheus（Operator）／AlertManager／Grafana 用於我哋 GKE 集群同虛擬機嘅指標。

Google Stackdriver 用於日誌（因為佢已包含並預設啟用，而目前足以滿足我哋嘅需要）。


### Zabbix

Zabbix 搞掂所有嘢。唔需要額外軟件。
