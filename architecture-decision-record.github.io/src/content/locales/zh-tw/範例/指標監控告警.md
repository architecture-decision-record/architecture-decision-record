# 指標、監控、告警

目錄:

* [摘要](#摘要)
  * [問題](#問題)
  * [決策](#決策)
  * [狀態](#狀態)
* [詳情](#詳情)
  * [假設](#假設)
  * [約束](#約束)
  * [立場](#立場)
  * [論證](#論證)
  * [影響](#影響)
* [相關內容](#相關內容)
  * [相關決策](#相關決策)
  * [相關需求](#相關需求)
  * [相關製品](#相關製品)
  * [相關原則](#相關原則)
* [備註](#備註)
  * [自由格式文字訊息與結構化事件訊息](#自由格式文字訊息與結構化事件訊息)
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


### 問題

我們想使用指標、監控和告警,因為我們想知道應用執行得有多好,並在出現問題時及時知曉。


### 決策

進行中(WIP)。


### 狀態

正在收集資訊。我們從可行範圍的兩端開始:最受推薦的較老的免費工具(Nagios)和最受推薦的較新的付費工具(New Relic)。


## 詳情


### 假設

我們希望建立現代、快速、可靠、響應式等的 Web 應用。

我們希望購買而不是自建。


### 約束

我們希望工具能夠與我們的 DevOps 流水線以及部署所用的雲良好協作。


### 立場

我們目前正在調研各種立場。


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

  
### 論證

到目前為止,Nagios 和 New Relic 是可行範圍的兩端。Nagios 是最古老、最簡單、免費且可行的工具。New Relic 是功能最新、最完整、付費且可行的工具。我們將從評估這兩者開始。根據需要,我們將在這兩端之間推進。 

到目前為止,Zabbix 獲得的推薦最好,同時提供最完整的功能。

到目前為止,在開源自建而非購買的方案中,ELK 最受歡迎。

到目前為止,Prometheus + Graphana 的受歡迎程度最高。


### 影響

待辦(TODO)。


## 相關內容


### 相關決策

這些選擇將影響可測試性、遙測,並可能影響客戶服務、站點可靠性工程等其他系統。


### 相關需求

待辦(TODO)。


### 相關製品

待辦(TODO)。


### 相關原則

易於撤銷。

追求速度。


## 備註


一個相當不錯的開源技術棧是:

* Prometheus,用於指標以及基於指標的告警

* Grafana,用於展示指標

* Elasticsearch/Logstash/Kibana(ELK),用於日誌和結構化事件

* Pushover,用於移動端通知


### 自由格式文字訊息與結構化事件訊息

自由格式文字訊息:例如,你會在 /var/log/messages 中找到的各種隨機內容,以及應用有意生成的內容。這些訊息有助於發現機器上發生的其他事情,例如記憶體不足或硬體錯誤,但含有大量垃圾資訊。

結構化事件訊息:由應用生成,具有固定或動態的屬性集,例如 HTTP 請求日誌、記賬日誌、使用者登入。

一般來說,以可以根據屬性下鑽的方式記錄每個請求的詳細資訊是很好的。因此,在所有內容中新增例如 userid 或 sessionid,可以讓你進行追蹤。當然,顯式的追蹤也很好。用 ELK 來做這件事,有點像窮人版的 https://www.honeycomb.io/


### Graylog is easier

根據我的經驗,Graylog 更容易啟動。



### Prometheus take some tuning


總體上我對用 Prometheus 做指標很滿意。告警需要一些調優,但相當不錯。這取決於你的應用。我認為最好針對終端使用者可見的狀況發出告警,而不是針對根本原因。例如,頁面載入時間是好的,每秒請求數則不是。不過,每秒零請求表明出了問題。

服務的優勢在於,它們開箱即提供額外的智慧。我總體上喜歡 Datadog。如果你有大量資料,這些服務可能貴得嚇人,並且有時定價模式對雲不友好,例如按例項收費,而例項是動態的。此外,還有區別:有些服務的每個請求都來自付費使用者,而另一些與廣告相關,因此只有一小部分請求能為你賺錢。你最終可能擁有大量資料,而預算卻不多。

我負責的一些服務每天有 10 億次請求,因此自行託管監控和日誌是合理的。如果你的量較小,託管服務會更容易。


### AWS services are mixed

我使用 AWS 服務的體驗好壞參半。他們的 Elasticsearch 服務一直不太穩定,所以我們自己執行例項。CloudWatch 指標很貴,所以我們通常只將其用於「基礎設施」級別的指標,而不是應用,也就是與健康相關的指標,在這方面 AWS 比例項上執行的軟體更瞭解情況。CloudWatch Logs 更新可能很慢,而且後設資料不多。執行 ELK 對此有幫助。如果我真的想要實時資料,那麼使用 Kafka 作為日誌的傳輸會更好。Logstash 對此支援得相當好。不過,管理 Kafka 叢集不適合膽小的人,有很多暴露在外的底層管道。


### Kafka

評論:Kafka 有時可能非常棘手,也可能堅如磐石,讓你幾乎忘記它的存在,是它把一切聯絡在一起。


評論:Kafka 一直很穩定,但讓它跑起來的工作量出乎意料地大。我把它看作一個關係型資料庫,但你只在「物理」層工作,例如表空間、檔案和分割槽。早期有些時候管理工具缺失,我們不得不編寫程式來做例如重置消費者組之類的事。http://howfuckedismydatabase.com/nosql/

評論:我們把 Kafka 用作日誌訊息的「緩衝區」,以及對來自多臺伺服器的資料進行實時流處理的地方。如果我們遭到 DDOS 攻擊,就需要一種跨多個例項分析資料的方式。如果我們直接從伺服器記錄日誌到 ELK,負載可能會沖垮 Elasticsearch 叢集。

評論:Kafka 對我們很好,因為如果遭到 DDOS 攻擊,我們需要一種跨多個例項分析資料的方式。如果我們直接從伺服器記錄日誌到 ELK,負載可能會沖垮 Elasticsearch 叢集。


評論:Kafka 做的工作更少,效率更高,因此可以更好地處理負載。而且我們會把 Kafka 的工作排入佇列並重試。而且 Kafka 過載不會影響試圖用 Kibana 進行互動式工作的使用者,不像 Elasticsearch 吃力時那樣。

評論:流處理主要是尋找濫用行為,例如整個叢集中來自單個 IP 的流量過多,然後在整個叢集中共享封禁。

評論:不過 logstash-output-kafka 外掛目前相當不可靠。我被它 GitHub issues 頁面上的好幾個問題坑過,而那些問題似乎永遠不會被修復。我想不再使用它,而是改為從我們的應用直接傳送到 Kafka。

評論:我們現在直接從應用向 Kafka 傳送結構化事件。主要動機是減少接觸日誌資料的次數,避免多次讀寫磁碟。在高容量系統中,記錄日誌可能比應用本身需要更多的工作。我正在考慮讓 journald 也直接傳送日誌,用 C 程式來實現。


### Loki

密切關注 Loki。它還沒有準備好,但等它準備好時,我預計它會更適合這個技術棧。Loki 是 grafana labs 建立的日誌聚合器,它使用與 Prometheus 類似的抓取和標籤語法。


### Prometheus + alertmanager + Rollbar + Graylog + Grafana

Prometheus + alertmanager 用於指標。熱愛 Prometheus。

Rollbar/Graylog 用於日誌/錯誤報告(兩者有些重疊;小型服務可能不需要兩者都用)。

目前,告警只傳送到幾個 Slack 頻道之一,有關人員在這些頻道上開啟了通知。如果我們對值班更認真,它們會傳送到 PagerDuty/VictorOps 等。

Grafana 用於圖表和儀表板。也熱切期待看看他們即將推出的日誌功能是否會讓 Graylog 變得多餘。


### Thanos

我們使用 Thanos 作為高可用(HA)設定的前端。它懂得如何對 HA 對進行去重。

我們目前保留 6 個月的本地 Prometheus 資料。這對我們來說效果相當不錯。但我正在為我們的 Thanos 設定推出物件儲存以進行長期資料儲存。理論上,GCS 儲存將比我們目前使用的 GCE 標準持久磁碟便宜約 30%。

我們目前不備份 Prometheus 資料。除了夠用於告警之外,這些資料對我們來說並不太重要。我們的整體機群部署每年變化很大,幾個月以前的歷史資料並沒有多大意義。如果能有一些逐年對比的核心統計資料,可能會很有意思;我可能會設定一組核心統計的記錄規則,並透過聯邦(Federation)儲存它們,或者乾脆讓 Thanos 來處理。

編輯:小小的免責宣告,我是 Prometheus 的開發者。


### Prometheus HA

Prometheus 中的 HA 是透過複製實現的:你執行多個採集器,有辦法輪詢多個並對資料去重。

擴充套件則是透過劃分網路,讓不同的 Prometheus 輪詢網路的不同部分。

長期儲存不是 Prometheus 的強項,而是交給 influx 或 timescaledb(技術上也算滿足 HA 這一項)之類的東西來承擔,我讀過一篇相關文章 https://blog.timescale.com/prometheus-ha-postgresql-8de68d19b6f5?gi=7df160f10e07

我還沒有嘗試過長期儲存的部分,因為我仍處於試驗階段,只把它用於短期圖表,而由 librenms 監控我的網路以進行長期監控。


###  Datadog + PagerDuty + Threat Stack

我們使用 Datadog(配合 PagerDuty)和 Threat Stack,再滿意不過。我對 DD 唯一的抱怨是指標儲存的成本相對較高。


### Zabbix

Zabbix 配合自定義指令碼幾乎可以監控一切。執行得非常好。


### Outlyer

我在使用 Outlyer,但我必須宣告我在這裡工作,而且「自己吃自己的狗糧」是必須的。

仍然需要 Graylog、Sentry 和 Statuscake 來增強。

聽起來有偏見,但在內部愉快地執行過 Nagios 和其他監控系統之後,在任何新工作中我都會購買託管方案,並卸下這份痛苦。


### Nagios + Nagiosgraph

我們用 Nagios 做所有監控和告警。告警透過電子郵件(警告和嚴重通知)和聲音應用通知(用於嚴重告警)發出。

Nagiosgraph 用於視覺化。

這套配置在讓我們全面瞭解環境中發生的情況方面非常有效。我們執行並監控著約 110 臺關鍵任務伺服器和約 760 個資料點,並且這套晨間系統已經執行了七年多。

我也想在某個時候用 Graylog 或 ELk 聚合日誌。


### Prometheus + Grafana + AlertManager

Prometheus + Grafana + AlertManager,透過出色的 Prometheus Operator helm chart 部署。日誌仍然傳送到 LogDNA 的 birch 方案,因為我們注意到 ELK 對於我們在 GKE 上最少 3 個、最多 5 個節點的小規模來說太重了。


### DataDog + Sentry + PagerDuty.

我過去使用包括 Nagios、Icinga、Zabbix、ELK、Greylog2、Influx 以及許多其他工具在內的各種軟體,自己執行所有監控方案,但事實是,執行自己的監控基礎設施需要付出太多精力,尤其是當你可以用如此低的價格讓別人替你做這件事時!

付錢讓別人執行監控基礎設施,使我的客戶可以專注於執行他們的平臺,而不是去監控監控系統,這意味著他們從平臺穩定性中獲得的價值遠遠超過「監控即服務」的任何成本。


### Sensu + Graphite + ELK

我的公司非常偏愛自託管的東西。

Sensu -> PagerDuty

Graphite/Grafana

ELK(Elasticsearch、Logstash、Kibana)


### Prometheus + Alertmanager

Prometheus + Alertmanager 用於告警,我的團隊相信簡單的監控就是好的監控。

日誌和追蹤等其他系統會在值班人員收到告警時提供豐富的診斷上下文,但我們從不基於它們構建告警。


### Sensu + Grafana + Graylog + Kibana + NewRelic.

Sensu、grafana、graylog、kibana、newrelic。


### Prometheus + Circonus

Prometheus 埋點的服務 => Circonus 分析與視覺化


### icinga2 + VictorOps + NewRelic + Sentry + Slack

我們使用以下服務:

icinga2 用於監控,VictorOps 用於告警

NewRelic 用於服務的詳細監控

Sentry 用於服務中的錯誤追蹤

Slack/電子郵件是告警的一部分,由 NewRelic 或 icinga2 觸發


### AppDynamics + Papertrail + PagerDuty + Healthchecks.io + Stackdriver

AppDynamics

Papertrail

PagerDuty

Healthchecks.io

Stackdriver


### icinga2 + elasticsearch

icinga2 整合 elasticsearch 用於分析,整合 graphite+grafana 用於繪製圖表。

得益於 icinga2 中 apply 規則的靈活性,開發人員只能看到他們會收到通知的服務。

並且透過 icinga2 director,程式設計師可以輕鬆定義自己的檢查(他們每隔幾天就會這樣做——100 個檢查發出,另外 100 個檢查進來),大規模且毫不費力。


### DataDog + New Relic + ELK + EFK + Sentry + Alertmanager + VictorOps

我們現在有什麼:

DataDog 用於指標

New Relic 用於應用監控

ELK(Elastic Search + Logstash + Kibana)用於日誌

Sentry(自託管)用於記錄異常

電子郵件 + Slack + VictorOps 用於告警(根據嚴重程度)

我們想要有什麼:

Prometheus 用於指標(Grafana 用於視覺化)

New Relic(可能是 Elastic Search APM)用於應用監控

EFK(elastic search + fluentd + kibana)用於日誌。到我們做到這一步時,Grafana 的 Loki 可能已經可用於生產環境

Sentry 用於異常

Alertmanager + 電子郵件 + VictorOps 用於告警


### Wavefront + Scalyr + PagerDuty + Stackstorm + Slack

Wavefront + Scalyr + PagerDuty + Stackstorm + Slack(免責宣告:在 VMware 工作)


### Telegraf + Prometheus + InfluxDB + Grafana

Telegraf 用於 CPU、磁碟、記憶體和網路等伺服器指標。我們還用 Telegraf 對網路裝置進行 SNMP 監控。

Prometheus 用於應用指標。我們在應用中編寫了健康檢查,由 Prometheus 抓取。

InfluxDB 用於時間序列儲存。我們的 Telegraf 資料就傳送到這裡。

Grafana 用於儀表板和告警。告警引擎不是特別強大,但能完成任務。我們還會把告警傳送到 Slack。

我目前沒有的是集中式日誌方案。ELK 很強大,但難以搭建和管理,而且我不知道有什麼足夠接近的免費替代品值得研究。


### Sematext + Logagent + Experience

Sematext 用於指標、日誌、追蹤,不久也將用於真實使用者監控。依我看,比使用 N 種不同的工具/服務更簡單/更便宜。

對於日誌傳輸,我們過去使用 rsyslog,後來改用 Logagent。

對於前端崩潰報告,我們使用 Sentry,但很快會改用 Experience。

免責宣告:我是 Sematext 的員工。


### Azure Monitor/Analytics + OpsGenie

我希望 Log Analytics 有更好的介面。我們正在從 splunk 遷移出去,splunk 要容易使用得多。


### Prometheus + Alertmanager + Grafana + Splunk + PagerDuty

Prometheus、Alertmanager、Grafana、Splunk、PagerDuty

你真的不想執行自己的通知系統。除非你的安全團隊偏好 Splunk,否則可以用 ELK 取代 Splunk。


### Telegraf + Prometheus + Grafana + Alertmanager

Telegraf 作為採集器,Prometheus + Alertmanager 用於監控和告警,並與 slack 頻道整合,嚴重告警則透過 pagerduty。Grafana 用於主機指標視覺化。


### Prometheus + Grafana + Cloudwatch + sentry + kibana + elasticsearch

Prometheus 用於指標 + 告警

Grafana 用於 Prometheus 儀表板

Cloudwatch 監控 Prometheus 例項

sentry 用於異常追蹤

kibana + elasticsearch

graylog

prometheus Push Gateway 用於批處理/定時任務

SOP https://github.com/rapidloop/sop 用於將指標從一個 Prometheus 例項「推送/轉發」到另一個

客戶端要麼使用 Prometheus 客戶端。我們儘量在客戶端使用 opencensus.io


### PagerDuty + Monitis

PagerDuty + Monitis。還有一些定製的 Azure Functions,用於測試某些服務的健康狀況。

今年打算引入 Prometheus 和 Grafana


### Prometheus + Grafana + Bosun

Prometheus 用於儲存時間序列資料。Grafana 用於視覺化。Bosun 用於告警管理。


### Azure Monitor/Analytics/Insights/Dashboards

純 Azure 的團隊,Azure Monitor、Log Analytics、App Insights、Azure Dashboards + Pager Duty


### Grafana + Monitis + OpsGenie + Slack

Grafana 透過 Prometheus 監控 Kubernetes 中的容器服務

Monitis 用於端到端服務監控,主要針對 Web API 和 Web 應用

OpsGenie 用於告警管理

Slack 用於獲取來自我們系統的狀態資訊


### Checkly + AppOptics + Cloudwatch + Heroku + Pagerduty + Papertrail

資深(dev)ops 工程師。在 Nagios 上成長起來。很想聽聽大家對我自籌資金創辦的 SaaS https://checklyhq.com 的意見。我們做 API 監控和站點事務監控,並具備相當深入的告警。

我創辦 Checkly 是因為 API 領域的主動/合成監控有些侷限(而且價格昂貴)。基於瀏覽器/指令碼的監控更加專有且昂貴。我們使用 Puppeteer,並儘可能壓低價格。

我們的監控技術棧:

Checkly(自己吃自己的狗糧……)

AppOptics(自定義圖表)

AWS Cloudwatch 和 SNS 用於簡訊。

內建的 Heroku 告警。

Pagerduty

Papertrail


### Instana + Logz.io + slack

Instana 在 slack 中就基礎設施問題或效能下降向我們發出告警,而我們已將 logz.io 配置為,當應用層出現一定量的錯誤級別日誌時在 slack 中告警。


### SignalFX + Splunk + PagerDuty + Slack

目前使用:SignalFX、Splunk、PagerDuty 和 Slack。我不太喜歡 SignalFX,儘管他們的支援團隊非常友好且響應迅速。我喜歡 Splunk(如果你付得起,值得)、PagerDuty 和 Slack。

我過去使用 TICK 技術棧,其中的 C 實際上是 G,也就是 Grafana,儘管我也稍微用過 Chronograf。那很棒,但管理起來很痛苦。典型的 SaaS 與自託管的兩難。

我用過 DataDog、New Relic、Graylog、ELK 和 BugSnag。我非常喜歡 DataDog 和 New Relic,Graylog 相當不錯。我不太喜歡 ELK。BugSnag 不錯,我實際上覺得在許多情況下,追蹤錯誤/異常是完整日誌監控的一個相當不錯的替代。


### ELK + Prometheus + Grafana

和其他人一樣,我們用 ELK 處理日誌,用 Prometheus+Grafana 處理其他一切。

如果你允許自己偶爾丟失資料,維護這套配置就很容易。例如,如果我們的 ElasticSearch 資料庫出了狀況(不幸的是,我們每 2-3 個月就會出一次),我們就不去搞 HA 了,而是轉儲資料,繼續過我們的日子。如果你絕對必須要有 HA 或長期保留,祝你好運。


### Datadog + Prometheus + Grafana

我按月訂閱設定了 Datadog,因為我來到這裡時,沒有任何監控和告警。只有我們的少數幾個站點每 5 分鐘監控一次可用性。Datadog 毫無疑問是最容易設定的。等我解決完所有其他問題後,我會改用 Prometheus+Grafana。日誌管理還沒有 100% 決定。

### Nagios + ELK

我們支援 100 多個產品。

對於本地部署,主要是 Nagios 和 ELK。對於雲,我們正在從 DataDog 遷移到 NewRelic。


### Datadog vs. Site24x7 + StatusCake + PagerDuty + SumoLogic + Slack

我們過去使用 datadog,但發現它對我們的需求來說太貴了。別誤會,它很棒,但它確實成本很高。我們用相當於 DD 約 2-3 個月費用的年度訂閱,就設定好了 site24x7.com。

我們的監控技術棧:

Site24x7 - APM、外部 URL 監控、SMTP 郵件流監控、ssl 到期監控和程式監控。

StatusCake - 用於 URL 監控和確認 - 它是我們的備份,以防 site24x7 漏掉什麼(它不會),但 SC 對於我們的外部埠和服務監控需求更靈活。

兩個工具都會升級到 PagerDuty,然後我們在 slack 中收到升級通知。

SumoLogic - 用於日誌監控(它是個很棒的工具,但對我們的需求來說有點複雜)

在 slack 中我們可以確認或修復告警。

然後我們有很多 site24x7 自動化,連線到 commando.io 來執行我們所謂的“BedOps”——告警被觸發時,我們啟動一些指令碼或自動化來嘗試修復情況(99% 的時間裡,自動化 + 我們的指令碼能讓我們免於麻煩)。

當自動化失敗,或有超出範圍需要修復的問題時,我們在知識庫中有內部執行手冊。


### Prometheus + AlertManager + Grafana + Stackdriver

Prometheus(Operator)/ AlertManager / Grafana 用於我們 GKE 叢集和虛擬機器中的指標。

Google Stackdriver 用於日誌(因為它包含在內且預設啟用,目前足以滿足我們的需求)。


### Zabbix

Zabbix 搞定一切。無需額外軟體。
