# ຕົວຊີ້ວັດ, ການຕິດຕາມ, ການແຈ້ງເຕືອນ

ສາລະບານ:

* [ບົດສະຫຼຸບ](#ບົດສະຫຼຸບ)
  * [ບັນຫາ](#ບັນຫາ)
  * [ການຕັດສິນໃຈ](#ການຕັດສິນໃຈ)
  * [ສະຖານະ](#ສະຖານະ)
* [ລາຍລະອຽດ](#ລາຍລະອຽດ)
  * [ສົມມຸດຕິຖານ](#ສົມມຸດຕິຖານ)
  * [ຂໍ້ຈຳກັດ](#ຂໍ້ຈຳກັດ)
  * [ຈຸດຢືນ](#ຈຸດຢືນ)
  * [ຂໍ້ໂຕ້ແຍ້ງ](#ຂໍ້ໂຕ້ແຍ້ງ)
  * [ຜົນໄດ້ຮັບ](#ຜົນໄດ້ຮັບ)
* [ທີ່ກ່ຽວຂ້ອງ](#ທີ່ກ່ຽວຂ້ອງ)
  * [ການຕັດສິນໃຈທີ່ກ່ຽວຂ້ອງ](#ການຕັດສິນໃຈທີ່ກ່ຽວຂ້ອງ)
  * [ຄວາມຕ້ອງການທີ່ກ່ຽວຂ້ອງ](#ຄວາມຕ້ອງການທີ່ກ່ຽວຂ້ອງ)
  * [ຜະລິດຕະພັນທີ່ກ່ຽວຂ້ອງ](#ຜະລິດຕະພັນທີ່ກ່ຽວຂ້ອງ)
  * [ຫຼັກການທີ່ກ່ຽວຂ້ອງ](#ຫຼັກການທີ່ກ່ຽວຂ້ອງ)
* [ໝາຍເຫດ](#ໝາຍເຫດ)
  * [ຂໍ້ຄວາມຟຣີຟອມ ທຽບກັບ ຂໍ້ຄວາມເຫດການທີ່ມີໂຄງສ້າງ](#ຂໍ້ຄວາມຟຣີຟອມ-ທຽບກັບ-ຂໍ້ຄວາມເຫດການທີ່ມີໂຄງສ້າງ)
  * [Graylog ງ່າຍກວ່າ](#graylog-ງ່າຍກວ່າ)
  * [Prometheus ຕ້ອງການການປັບແຕ່ງ](#prometheus-ຕ້ອງການການປັບແຕ່ງ)
  * [ບໍລິການ AWS ມີຜົນປະສົມ](#ບໍລິການ-aws-ມີຜົນປະສົມ)
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


## ບົດສະຫຼຸບ


### ບັນຫາ

ພວກເຮົາຢາກໃຊ້ຕົວຊີ້ວັດ, ການຕິດຕາມ ແລະ ການແຈ້ງເຕືອນ ເພາະພວກເຮົາຢາກຮູ້ວ່າແອັບພລິເຄຊັນຂອງພວກເຮົາເຮັດວຽກໄດ້ດີປານໃດ ແລະ ຮູ້ເມື່ອມີບັນຫາ.


### ການຕັດສິນໃຈ

ກຳລັງດຳເນີນການ (WIP).


### ສະຖານະ

ກຳລັງລວບລວມຂໍ້ມູນ. ພວກເຮົາເລີ່ມຈາກສອງປາຍສຸດທີ່ເປັນໄປໄດ້ຂອງຂອບເຂດ: ເຄື່ອງມືຟຣີເກົ່າກວ່າທີ່ຖືກແນະນຳຫຼາຍທີ່ສຸດ (Nagios) ແລະ ເຄື່ອງມືທີ່ເສຍເງິນໃໝ່ກວ່າທີ່ຖືກແນະນຳຫຼາຍທີ່ສຸດ (New Relic).


## ລາຍລະອຽດ


### ສົມມຸດຕິຖານ

ພວກເຮົາຢາກສ້າງເວັບແອັບທີ່ທັນສະໄໝ, ໄວ, ເຊື່ອຖືໄດ້, ຕອບສະໜອງຕາມຂະໜາດໜ້າຈໍ ແລະ ອື່ນໆ.

ພວກເຮົາຢາກຊື້ ແທນທີ່ຈະສ້າງເອງ.


### ຂໍ້ຈຳກັດ

ພວກເຮົາຕ້ອງການເຄື່ອງມືທີ່ເຮັດວຽກໄດ້ດີກັບທໍ່ devops ຂອງພວກເຮົາ ແລະ ກັບຄລາວທີ່ພວກເຮົາຕິດຕັ້ງ.


### ຈຸດຢືນ

ພວກເຮົາກຳລັງຄົ້ນຄວ້າຈຸດຢືນຢູ່ໃນຕອນນີ້.


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

  
### ຂໍ້ໂຕ້ແຍ້ງ

ມາຮອດຕອນນີ້ Nagios ແລະ New Relic ແມ່ນສອງປາຍສຸດຂອງຂອບເຂດ. Nagios ເປັນເຄື່ອງມືທີ່ເກົ່າທີ່ສຸດ, ງ່າຍທີ່ສຸດ, ຟຣີ ແລະ ໃຊ້ໄດ້. New Relic ເປັນເຄື່ອງມືທີ່ມີຄຸນສົມບັດໃໝ່ທີ່ສຸດ, ຄົບຖ້ວນທີ່ສຸດ, ເສຍເງິນ ແລະ ໃຊ້ໄດ້. ພວກເຮົາຈະເລີ່ມດ້ວຍການປະເມີນສອງອັນນີ້. ຕາມຄວາມຈຳເປັນ ພວກເຮົາຈະຍ້າຍເຂົ້າໄປໃນຂອບເຂດ.  

ມາຮອດຕອນນີ້ Zabbix ມີຄຳແນະນຳທີ່ດີທີ່ສຸດ ແລະ ຍັງສະເໜີຄວາມສາມາດຄົບຖ້ວນທີ່ສຸດ.

ມາຮອດຕອນນີ້ ELK ມີຄວາມນິຍົມແບບສ້າງເອງແທນຊື້ທີ່ເປັນຊອດເປີດທີ່ດີທີ່ສຸດ.

ມາຮອດຕອນນີ້ Prometheus + Graphana ມີຄວາມນິຍົມທີ່ດີທີ່ສຸດ.


### ຜົນໄດ້ຮັບ

ຕ້ອງເຮັດ (TODO).


## ທີ່ກ່ຽວຂ້ອງ


### ການຕັດສິນໃຈທີ່ກ່ຽວຂ້ອງ

ທາງເລືອກຈະມີຜົນຕໍ່ຄວາມສາມາດໃນການທົດສອບ, ການວັດແທກທາງໄກ ແລະ ອາດມີຜົນຕໍ່ລະບົບອື່ນ ເຊັ່ນ ສຳລັບການບໍລິການລູກຄ້າ, ວິສະວະກຳຄວາມເຊື່ອຖືຂອງໄຊ ແລະ ອື່ນໆ.


### ຄວາມຕ້ອງການທີ່ກ່ຽວຂ້ອງ

ຕ້ອງເຮັດ (TODO).


### ຜະລິດຕະພັນທີ່ກ່ຽວຂ້ອງ

ຕ້ອງເຮັດ (TODO).


### ຫຼັກການທີ່ກ່ຽວຂ້ອງ

ຍ້ອນກັບໄດ້ງ່າຍ.

ຕ້ອງການຄວາມໄວ.


## ໝາຍເຫດ


ຊຸດຊອດເປີດທີ່ດີພໍສົມຄວນແມ່ນ:

* Prometheus ສຳລັບຕົວຊີ້ວັດ ແລະ ການແຈ້ງເຕືອນທີ່ອີງໃສ່ຕົວຊີ້ວັດ

* Grafana ເພື່ອສະແດງຕົວຊີ້ວັດ

* Elasticsearch/Logstash/Kibana (ELK) ສຳລັບ log ແລະ ເຫດການທີ່ມີໂຄງສ້າງ

* Pushover ສຳລັບການແຈ້ງເຕືອນເທິງມືຖື


### ຂໍ້ຄວາມຟຣີຟອມ ທຽບກັບ ຂໍ້ຄວາມເຫດການທີ່ມີໂຄງສ້າງ

ຂໍ້ຄວາມຟຣີຟອມ: ຕົວຢ່າງ ສິ່ງແບບສຸ່ມທີ່ທ່ານຈະພົບໃນ /var/log/messages ແລະ ສິ່ງທີ່ແອັບພລິເຄຊັນສ້າງຂຶ້ນໂດຍຕັ້ງໃຈ. ຂໍ້ຄວາມເຫຼົ່ານີ້ມີປະໂຫຍດໃນການລະບຸສິ່ງອື່ນທີ່ກຳລັງເກີດຂຶ້ນເທິງເຄື່ອງ ເຊັ່ນ ໜ່ວຍຄວາມຈຳບໍ່ພໍ ຫຼື ຂໍ້ຜິດພາດຮາດແວ ແຕ່ມີຂີ້ເຫຍື້ອຫຼາຍ. 

ຂໍ້ຄວາມເຫດການທີ່ມີໂຄງສ້າງ: ສ້າງໂດຍແອັບພລິເຄຊັນ ດ້ວຍຊຸດຄຸນລັກສະນະທີ່ຄົງທີ່ ຫຼື ເຄື່ອນໄຫວ ເຊັ່ນ log ຄຳຮ້ອງຂໍ HTTP, log ການບັນຊີ, ການເຂົ້າສູ່ລະບົບຂອງຜູ້ໃຊ້.

ໂດຍທົ່ວໄປ ມັນດີທີ່ຈະບັນທຶກລາຍລະອຽດຂອງທຸກຄຳຮ້ອງຂໍໃນແບບທີ່ທ່ານສາມາດເຈາະເລິກໂດຍອີງໃສ່ຄຸນລັກສະນະ. ສະນັ້ນການເພີ່ມ userid ຫຼື sessionid ໃສ່ທຸກຢ່າງຊ່ວຍໃຫ້ທ່ານຕິດຕາມໄດ້. ແນ່ນອນ ການຕິດຕາມແບບຊັດເຈນກໍດີເຊັ່ນກັນ. ການໃຊ້ ELK ສຳລັບສິ່ງນີ້ເປັນຄືກັບ https://www.honeycomb.io/ ຂອງຄົນຈົນ


### Graylog ງ່າຍກວ່າ

Graylog ຕັ້ງຄ່າໄດ້ງ່າຍກວ່າຈາກປະສົບການຂອງຂ້ອຍ.



### Prometheus ຕ້ອງການການປັບແຕ່ງ


ໂດຍທົ່ວໄປຂ້ອຍພໍໃຈກັບ Prometheus ສຳລັບຕົວຊີ້ວັດ. ການແຈ້ງເຕືອນຕ້ອງການການປັບແຕ່ງບາງຢ່າງ ແຕ່ດີພໍສົມຄວນ. ມັນຂຶ້ນກັບແອັບພລິເຄຊັນຂອງທ່ານ. ຂ້ອຍຄິດວ່າດີທີ່ສຸດທີ່ຈະແຈ້ງເຕືອນກ່ຽວກັບເງື່ອນໄຂທີ່ຜູ້ໃຊ້ປາຍທາງເຫັນໄດ້ ບໍ່ແມ່ນສາເຫດພື້ນຖານ. ຕົວຢ່າງ ເວລາໂຫຼດໜ້າດີ ແຕ່ຈຳນວນຄຳຮ້ອງຂໍຕໍ່ວິນາທີບໍ່ດີ. ເຖິງແມ່ນຄຳຮ້ອງຂໍສູນຕໍ່ວິນາທີຊີ້ວ່າມີບາງຢ່າງຜິດປົກກະຕິ.

ຂໍ້ໄດ້ປຽບຂອງບໍລິການແມ່ນພວກເຂົາສະເໜີຄວາມສະຫຼາດເພີ່ມເຕີມອອກຈາກກ່ອງ. ໂດຍທົ່ວໄປຂ້ອຍມັກ Datadog. ບໍລິການສາມາດແພງຢ່າງໜ້າຢ້ານຖ້າທ່ານມີຂໍ້ມູນຫຼາຍ ແລະ ບາງຄັ້ງມີຮູບແບບລາຄາທີ່ບໍ່ເປັນມິດກັບຄລາວ ເຊັ່ນ ຄິດຄ່າຕໍ່ອິນສະແຕນ ເມື່ອອິນສະແຕນເປັນແບບເຄື່ອນໄຫວ. ຍັງມີຄວາມແຕກຕ່າງລະຫວ່າງບໍລິການທີ່ທຸກຄຳຮ້ອງຂໍມາຈາກຜູ້ໃຊ້ທີ່ຈ່າຍເງິນ ແລະ ບໍລິການທີ່ກ່ຽວຂ້ອງກັບການໂຄສະນາ ເຊິ່ງມີພຽງສ່ວນນ້ອຍຂອງຄຳຮ້ອງຂໍທີ່ສ້າງລາຍໄດ້. ທ່ານອາດຈົບລົງດ້ວຍຂໍ້ມູນຫຼາຍແຕ່ງົບປະມານບໍ່ຫຼາຍ.

ຂ້ອຍເຮັດວຽກກັບບາງບໍລິການທີ່ໄດ້ຮັບ 1B ຄຳຮ້ອງຂໍຕໍ່ມື້ ສະນັ້ນຈຶ່ງສົມເຫດສົມຜົນທີ່ຈະໂຮດການຕິດຕາມ ແລະ logging ເອງ. ຖ້າປະລິມານຂອງທ່ານຕ່ຳກວ່າ ບໍລິການທີ່ໂຮດໃຫ້ກໍງ່າຍກວ່າ.


### ບໍລິການ AWS ມີຜົນປະສົມ

ປະສົບການຂອງຂ້ອຍກັບບໍລິການ AWS ມີຜົນປະສົມ. ບໍລິການ Elasticsearch ຂອງພວກເຂົາບໍ່ໝັ້ນຄົງ ສະນັ້ນພວກເຮົາດຳເນີນອິນສະແຕນຂອງພວກເຮົາເອງສຳລັບເລື່ອງນັ້ນ. ຕົວຊີ້ວັດ CloudWatch ແພງ ສະນັ້ນໂດຍທົ່ວໄປພວກເຮົາໃຊ້ມັນສະເພາະສຳລັບຕົວຊີ້ວັດລະດັບ "ໂຄງລ່າງພື້ນຖານ" ແທນທີ່ຈະເປັນແອັບພລິເຄຊັນ ນັ້ນຄື ຕົວຊີ້ວັດທີ່ກ່ຽວຂ້ອງກັບສຸຂະພາບ ເຊິ່ງ AWS ສາມາດຮູ້ໄດ້ດີກວ່າວ່າກຳລັງເກີດຫຍັງຂຶ້ນ ກວ່າຊອບແວທີ່ເຮັດວຽກເທິງອິນສະແຕນ. CloudWatch Logs ອາດອັບເດດຊ້າ ແລະ ບໍ່ມີຂໍ້ມູນ metadata ຫຼາຍ. ການດຳເນີນ ELK ຊ່ວຍເລື່ອງນັ້ນ. ຖ້າຂ້ອຍຕ້ອງການຂໍ້ມູນເວລາຈິງແທ້ໆ ການໃຊ້ Kafka ເປັນການຂົນສົ່ງສຳລັບ log ແມ່ນດີກວ່າ. ສິ່ງນັ້ນຖືກຮອງຮັບໄດ້ດີໂດຍ Logstash. ແນວໃດກໍຕາມ ການຈັດການຄລັດສະເຕີ Kafka ບໍ່ແມ່ນສຳລັບຄົນໃຈອ່ອນ ມີທໍ່ນ້ຳເປີດເຜີຍຫຼາຍ.


### Kafka

ຄຳເຫັນ: Kafka ສາມາດຍຸ້ງຍາກຫຼາຍໃນບາງເວລາ ຫຼື Kafka ສາມາດໝັ້ນຄົງຄືຫີນຈົນເກືອບລືມວ່າມັນຢູ່ທີ່ນັ້ນເຊື່ອມທຸກຢ່າງເຂົ້າກັນ. 


ຄຳເຫັນ: Kafka ໝັ້ນຄົງ ແຕ່ການເຮັດໃຫ້ມັນເຮັດວຽກໃຊ້ວຽກຫຼາຍກວ່າທີ່ຄາດ. ຂ້ອຍຄິດວ່າມັນຄືຖານຂໍ້ມູນສຳພັນ ແຕ່ທ່ານເຮັດວຽກສະເພາະຊັ້ນ "ກາຍະພາບ" ເຊັ່ນ tablespaces, ໄຟລ໌ ແລະ partitions. ມີບາງເວລາໃນຕອນຕົ້ນທີ່ຍັງຂາດເຄື່ອງມືຈັດການ ແລະ ພວກເຮົາຕ້ອງຂຽນໂປຣແກຣມເພື່ອ ເຊັ່ນ ຣີເຊັດ consumer group. http://howfuckedismydatabase.com/nosql/

ຄຳເຫັນ: ພວກເຮົາໃຊ້ Kafka ເປັນ "ບັບເຟີ" ສຳລັບຂໍ້ຄວາມ log ແລະ ບ່ອນທີ່ພວກເຮົາສາມາດປະມວນຜົນສະຕຣີມແບບເວລາຈິງກັບຂໍ້ມູນທີ່ມາຈາກຫຼາຍເຊີບເວີ. ຖ້າພວກເຮົາຖືກໂຈມຕີ DDOS ພວກເຮົາຕ້ອງການວິທີວິເຄາະຂໍ້ມູນຂ້າມຫຼາຍອິນສະແຕນ. ຖ້າພວກເຮົາບັນທຶກ log ຈາກເຊີບເວີໄປ ELK ໂດຍກົງ ພາລະສາມາດທຳລາຍຄລັດສະເຕີ Elasticsearch.

ຄຳເຫັນ: Kafka ດີສຳລັບພວກເຮົາເພາະຖ້າພວກເຮົາຖືກໂຈມຕີ DDOS ພວກເຮົາຕ້ອງການວິທີວິເຄາະຂໍ້ມູນຂ້າມຫຼາຍອິນສະແຕນ. ຖ້າພວກເຮົາບັນທຶກ log ຈາກເຊີບເວີໄປ ELK ໂດຍກົງ ພາລະສາມາດທຳລາຍຄລັດສະເຕີ Elasticsearch.


ຄຳເຫັນ: Kafka ເຮັດວຽກໜ້ອຍກວ່າ ແລະ ມີປະສິດທິພາບກວ່າ ສະນັ້ນຈຶ່ງຮັບພາລະໄດ້ດີກວ່າ. ແລະ ພວກເຮົາຈັດຄິວວຽກ Kafka ແລະ ລອງໃໝ່. ແລະ ການທີ່ Kafka ເກີນພາລະບໍ່ກະທົບຜູ້ໃຊ້ທີ່ກຳລັງເຮັດວຽກແບບໂຕ້ຕອບກັບ Kibana ຄືກັບທີ່ຈະເປັນຖ້າ Elasticsearch ກຳລັງຍາກລຳບາກ.

ຄຳເຫັນ:  ການປະມວນຜົນສະຕຣີມສ່ວນຫຼາຍແມ່ນຊອກຫາການລ່ວງລະເມີດ ເຊັ່ນ ທຣາບຟິກຫຼາຍເກີນໄປຈາກ IP ດຽວທົ່ວຄລັດສະເຕີ ແລ້ວແບ່ງປັນການບລັອກທົ່ວຄລັດສະເຕີ.

ຄຳເຫັນ: ປລັກອິນ logstash-output-kafka ບໍ່ເຊື່ອຖືໄດ້ຫຼາຍໃນຕອນນີ້. ຂ້ອຍຖືກຜົນກະທົບຈາກຫຼາຍບັນຫາໃນໜ້າ GitHub issues ຂອງມັນ ທີ່ເບິ່ງຄືບໍ່ເຄີຍຖືກແກ້ໄຂ. ຂ້ອຍຢາກເລີກໃຊ້ມັນ ແລ້ວສົ່ງໂດຍກົງຈາກແອັບຂອງພວກເຮົາໄປ Kafka.

ຄຳເຫັນ: ຕອນນີ້ພວກເຮົາສົ່ງເຫດການທີ່ມີໂຄງສ້າງໂດຍກົງຈາກແອັບໄປ Kafka. ແຮງຈູງໃຈຫຼັກແມ່ນການແຕະຂໍ້ມູນ log ໃຫ້ໜ້ອຍຄັ້ງລົງ ແລະ ຫຼີກເວັ້ນການອ່ານ ແລະ ຂຽນດິສຫຼາຍຄັ້ງ. ໃນລະບົບປະລິມານສູງ ການບັນທຶກ log ສາມາດໃຊ້ວຽກຫຼາຍກວ່າແອັບເອງ. ຂ້ອຍກຳລັງຄິດເຖິງການເຮັດໃຫ້ journald ສົ່ງ log ໂດຍກົງເຊັ່ນກັນ ຈາກໂປຣແກຣມ C.


### Loki

ຕິດຕາມ Loki ຢ່າງໃກ້ຊິດ. ມັນຍັງບໍ່ພ້ອມ ແຕ່ເມື່ອພ້ອມແລ້ວຂ້ອຍຄາດວ່າມັນຈະເໝາະສົມກວ່າໃນຊຸດນີ້. Loki ເປັນຕົວລວບລວມ log ທີ່ສ້າງໂດຍ grafana labs ມັນໃຊ້ໄວຍະກອນການ scrape ແລະ tag ຄ້າຍກັບ Prometheus.


### Prometheus + alertmanager + Rollbar + Graylog + Grafana

 Prometheus + alertmanager ສຳລັບຕົວຊີ້ວັດ. <3 Prometheus.

Rollbar/Graylog ສຳລັບ logging/ການລາຍງານຂໍ້ຜິດພາດ (ມີການທັບຊ້ອນບາງຢ່າງ; ບໍລິການນ້ອຍອາດບໍ່ຕ້ອງການທັງສອງ).

ໃນຕອນນີ້ ການແຈ້ງເຕືອນໄປຫາຊ່ອງ Slack ໜຶ່ງໃນບໍ່ກີ່ຊ່ອງທີ່ຜູ້ສົນໃຈເປີດການແຈ້ງເຕືອນໄວ້. ຖ້າພວກເຮົາຈິງຈັງກັບການເຝົ້າເວນຫຼາຍກວ່ານີ້ ພວກມັນຈະໄປຫາ PagerDuty/VictorOps/ແລະອື່ນໆ.

Grafana ສຳລັບກຣາຟ ແລະ ແດຊບອດ. ຍັງລໍຖ້າຢ່າງກະຕືລືລົ້ນທີ່ຈະເຫັນວ່າຄວາມສາມາດ logging ທີ່ຈະມາເຖິງຂອງພວກເຂົາຈະເຮັດໃຫ້ Graylog ບໍ່ຈຳເປັນຫຼືບໍ່.


### Thanos

ພວກເຮົາໃຊ້ Thanos ເປັນ front-end ສຳລັບການຕັ້ງຄ່າ HA ຂອງພວກເຮົາ. ມັນຮູ້ວິທີລົບຂໍ້ມູນຊ້ຳຂອງຄູ່ HA.

ໃນຕອນນີ້ພວກເຮົາເກັບຂໍ້ມູນ Prometheus ທ້ອງຖິ່ນ 6 ເດືອນ. ສິ່ງນີ້ໃຊ້ໄດ້ຄ່ອນຂ້າງດີສຳລັບພວກເຮົາ. ແຕ່ຂ້ອຍກຳລັງຢູ່ໃນລະຫວ່າງການນຳໃຊ້ bucket storage ກັບການຕັ້ງຄ່າ Thanos ຂອງພວກເຮົາສຳລັບການເກັບຂໍ້ມູນໄລຍະຍາວ. ໃນທິດສະດີ ການເກັບຂໍ້ມູນ GCS ຈະຖືກກວ່າດິສຖາວອນມາດຕະຖານ GCE ທີ່ພວກເຮົາໃຊ້ຕອນນີ້ປະມານ 30%.

ພວກເຮົາບໍ່ສຳຮອງຂໍ້ມູນ Prometheus ໃນຕອນນີ້. ຂໍ້ມູນບໍ່ສຳຄັນຕໍ່ພວກເຮົາແທ້ໆນອກຈາກການມີພຽງພໍສຳລັບການແຈ້ງເຕືອນ. ການຕິດຕັ້ງ fleet ໂດຍລວມຂອງພວກເຮົາປ່ຽນແປງຫຼາຍແຕ່ປີຕໍ່ປີ ຈົນຂໍ້ມູນປະຫວັດທີ່ເກົ່າກວ່າສອງສາມເດືອນບໍ່ໜ້າສົນໃຈແທ້ໆ. ມັນອາດໜ້າສົນໃຈທີ່ຈະມີສະຖິຕິຫຼັກບໍ່ກີ່ຢ່າງແບບປີຕໍ່ປີ ຂ້ອຍອາດຕັ້ງຊຸດກົດບັນທຶກສະຖິຕິຫຼັກ ແລ້ວເກັບດ້ວຍ Federation ຫຼື ປ່ອຍໃຫ້ Thanos ຈັດການ.

ແກ້ໄຂ: ຄຳປະຕິເສດຄວາມຮັບຜິດຊອບເລັກນ້ອຍ ຂ້ອຍເປັນນັກພັດທະນາ Prometheus.


### Prometheus HA

HA ໃນ Prometheus ເຮັດໂດຍການຊ້ຳ ທ່ານດຳເນີນຫຼາຍ poppers ມີວິທີ poll ຫຼາຍອັນ ແລະ ລົບຂໍ້ມູນຊ້ຳ

ການຂະຫຍາຍເຮັດໂດຍການຕັດສິນໃຈເຄືອຂ່າຍ ແລະ ໃຫ້ Prometheus ທີ່ແຕກຕ່າງກັນ poll ສ່ວນຕ່າງໆຂອງເຄືອຂ່າຍ

ການເກັບຂໍ້ມູນໄລຍະຍາວບໍ່ແມ່ນຈຸດແຂງຂອງ prom ແຕ່ຖືກໂອນໄປຍັງສິ່ງເຊັ່ນ influxes ຫຼື timescaledb (ເຊິ່ງທາງເທັກນິກກໍເຊັກ HA ເຊັ່ນກັນ) ບົດຄວາມທີ່ຂ້ອຍອ່ານກ່ຽວກັບມັນ https://blog.timescale.com/prometheus-ha-postgresql-8de68d19b6f5?gi=7df160f10e07

ຍັງບໍ່ໄດ້ລອງສິ່ງໄລຍະຍາວ ເພາະຂ້ອຍຍັງຢູ່ໃນຂັ້ນທົດລອງ ແລະ ໃຊ້ມັນສຳລັບກຣາຟໄລຍະສັ້ນ ໃນຂະນະທີ່ librenms ຕິດຕາມເຄືອຂ່າຍຂອງຂ້ອຍສຳລັບໄລຍະຍາວ


###  Datadog + PagerDuty + Threat Stack

ພວກເຮົາໃຊ້ Datadog (ກັບ PagerDuty) ແລະ Threat Stack ແລະ ບໍ່ສາມາດມີຄວາມສຸກກວ່ານີ້. ຂໍ້ຮ້ອງທຸກດຽວຂອງຂ້ອຍກັບ DD ແມ່ນຄ່າເກັບຕົວຊີ້ວັດທີ່ຄ່ອນຂ້າງສູງ.


### Zabbix

Zabbix ກັບສະຄຣິບກຳນົດເອງເພື່ອຕິດຕາມເກືອບທຸກຢ່າງ. ເຮັດວຽກຄືເວດມົນ.


### Outlyer

ຂ້ອຍໃຊ້ Outlyer ແຕ່ຂ້ອຍຕ້ອງປະຕິເສດຄວາມຮັບຜິດຊອບວ່າຂ້ອຍເຮັດວຽກຢູ່ນີ້ ແລະ dog fooding ເປັນສິ່ງຈຳເປັນ.

ຍັງຕ້ອງການ Graylog, Sentry ແລະ Statuscake ເພື່ອເສີມ.

ຟັງຄືມີອະຄະຕິ ແຕ່ຫຼັງຈາກດຳເນີນ Nagios ແລະ ລະບົບຕິດຕາມອື່ນພາຍໃນຢ່າງມີຄວາມສຸກແລ້ວ ຂ້ອຍຈະຊື້ວິທີແກ້ໄຂທີ່ໂຮດໃຫ້ໃນວຽກໃໝ່ໃດໆ ແລະ ໂອນຄວາມເຈັບປວດນັ້ນອອກໄປ.


### Nagios + Nagiosgraph

ພວກເຮົາດຳເນີນ Nagios ສຳລັບການຕິດຕາມ ແລະ ການແຈ້ງເຕືອນທັງໝົດ. ການແຈ້ງເຕືອນເກີດຂຶ້ນຜ່ານອີເມວ (ການເຕືອນ ແລະ ການແຈ້ງເຕືອນວິກິດ) ແລະ ການແຈ້ງເຕືອນແອັບແບບໄດ້ຍິນ (ສຳລັບການແຈ້ງເຕືອນວິກິດ).

Nagiosgraph ຖືກໃຊ້ສຳລັບການສະແດງພາບ.

ການຕັ້ງຄ່ານີ້ມີປະສິດທິຜົນຫຼາຍໃນການຮັກສາໃຫ້ພວກເຮົາໄດ້ຮັບຮູ້ຢ່າງຄົບຖ້ວນວ່າມີຫຍັງເກີດຂຶ້ນໃນສະພາບແວດລ້ອມຂອງພວກເຮົາ. ພວກເຮົາດຳເນີນ ແລະ ຕິດຕາມເຊີບເວີທີ່ສຳຄັນຕໍ່ພາລະກິດປະມານ 110 ເຄື່ອງ ແລະ ຈຸດຂໍ້ມູນປະມານ 760 ຈຸດ ແລະ ມີລະບົບຕອນເຊົ້ານີ້ມາຫຼາຍກວ່າເຈັດປີ.

ຂ້ອຍຢາກລວບລວມ log ດ້ວຍ Graylog ຫຼື ELk ໃນບາງເວລາເຊັ່ນກັນ.


### Prometheus + Grafana + AlertManager

Prometheus + Grafana + AlertManager ຜ່ານ helm chart ທີ່ດີເລີດຂອງ Prometheus Operator. Log ຍັງໄປ LogDNA birch plan ເພາະພວກເຮົາສັງເກດວ່າ ELK ໜັກເກີນໄປສຳລັບ 3 ຫາ 5 ໂນດນ້ອຍໆຂອງພວກເຮົາເທິງ GKE.


### DataDog + Sentry + PagerDuty.

ຂ້ອຍເຄີຍດຳເນີນວິທີແກ້ໄຂການຕິດຕາມທັງໝົດເອງໂດຍໃຊ້ຊອບແວທຸກປະເພດ ລວມທັງ Nagios, Icinga, Zabbix, ELK, Greylog2, Influx ແລະ ເຄື່ອງມືອື່ນໆຫຼາຍຢ່າງ ແຕ່ຄວາມຈິງແມ່ນຕ້ອງໃຊ້ຄວາມພະຍາຍາມຫຼາຍເກີນໄປໃນການດຳເນີນໂຄງລ່າງພື້ນຖານການຕິດຕາມຂອງຕົນເອງ ໂດຍສະເພາະເມື່ອທ່ານສາມາດຈ່າຍຄ່າຕ່ຳຫຼາຍໃຫ້ຄົນອື່ນເຮັດແທນ!

ການຈ່າຍໃຫ້ຄົນອື່ນດຳເນີນໂຄງລ່າງພື້ນຖານການຕິດຕາມເຮັດໃຫ້ລູກຄ້າຂອງຂ້ອຍມີອິດສະຫຼະສຸມໃສ່ການດຳເນີນແພລດຟອມຂອງພວກເຂົາ ແທນທີ່ຈະຕິດຕາມການຕິດຕາມ ໝາຍຄວາມວ່າຄຸນຄ່າທີ່ພວກເຂົາໄດ້ຮັບຈາກຄວາມໝັ້ນຄົງຂອງແພລດຟອມມີນ້ຳໜັກຫຼາຍກວ່າຄ່າໃຊ້ຈ່າຍໃດໆຂອງການຕິດຕາມເປັນບໍລິການ.


### Sensu + Graphite + ELK

ບໍລິສັດຂອງຂ້ອຍເນັ້ນສິ່ງທີ່ໂຮດເອງຫຼາຍ.

Sensu -> PagerDuty

Graphite/Grafana

ELK (Elasticsearch, Logstash, Kibana)


### Prometheus + Alertmanager

Prometheus + Alertmanager ສຳລັບການແຈ້ງເຕືອນ ທີມຂອງຂ້ອຍເຊື່ອວ່າການຕິດຕາມທີ່ງ່າຍແມ່ນການຕິດຕາມທີ່ດີ.

ລະບົບອື່ນເຊັ່ນ logging ແລະ tracing ຈະໃຫ້ບໍລິບົດທີ່ອຸດົມສົມບູນສຳລັບການວິນິດໄສເມື່ອຜູ້ເຝົ້າເວນໄດ້ຮັບການແຈ້ງເຕືອນ ແຕ່ພວກເຮົາບໍ່ເຄີຍສ້າງການແຈ້ງເຕືອນໃສ່ສິ່ງເຫຼົ່ານີ້.


### Sensu + Grafana + Graylog + Kibana + NewRelic.

Sensu, grafana, graylog, kibana, newrelic.


### Prometheus + Circonus

ບໍລິການທີ່ຕິດ instrument ກັບ Prometheus => ການວິເຄາະ ແລະ ການສະແດງພາບຂອງ Circonus


### icinga2 + VictorOps + NewRelic + Sentry + Slack

ພວກເຮົາກຳລັງໃຊ້ບໍລິການຂ້າງລຸ່ມນີ້:

icinga2 ສຳລັບການຕິດຕາມ ແລະ VictorOps ສຳລັບການແຈ້ງເຕືອນ

NewRelic ສຳລັບການຕິດຕາມລາຍລະອຽດຂອງບໍລິການ

Sentry ສຳລັບການຕິດຕາມຂໍ້ຜິດພາດໃນບໍລິການ

Slack/ອີເມວເປັນສ່ວນໜຶ່ງຂອງການແຈ້ງເຕືອນທີ່ຖືກກະຕຸ້ນຈາກ NewRelic ຫຼື icinga2


### AppDynamics + Papertrail + PagerDuty + Healthchecks.io + Stackdriver

AppDynamics

Papertrail

PagerDuty

Healthchecks.io

Stackdriver


### icinga2 + elasticsearch

icinga2 ກັບການລວມ elasticsearch ສຳລັບການວິເຄາະ ແລະ ການລວມ graphite+grafana ສຳລັບກຣາຟ.

ຍ້ອນຄວາມຢືດຢຸ່ນຂອງກົດ apply ໃນ icinga2 ນັກພັດທະນາສາມາດເຫັນສະເພາະບໍລິການທີ່ພວກເຂົາໄດ້ຮັບການແຈ້ງເຕືອນ.

ແລະ ຜ່ານ icinga2 director ນັກຂຽນໂປຣແກຣມສາມາດກຳນົດການກວດສອບຂອງຕົນເອງໄດ້ງ່າຍ (ເຊິ່ງພວກເຂົາເຮັດທຸກສອງສາມມື້ - 100 ການກວດສອບອອກໄປ, 100 ການກວດສອບອື່ນເຂົ້າມາ) ໃນລະດັບໃຫຍ່ໂດຍບໍ່ມີຄວາມຫຍຸ້ງຍາກເລີຍ.


### DataDog + New Relic + ELK + EFK + Sentry + Alertmanager + VictorOps

ສິ່ງທີ່ພວກເຮົາມີໃນຕອນນີ້:

DataDog ສຳລັບຕົວຊີ້ວັດ

New Relic ສຳລັບການຕິດຕາມແອັບພລິເຄຊັນ

ELK (Elastic Search + Logstash + Kibana) ສຳລັບ log

Sentry (ໂຮດເອງ) ສຳລັບບັນທຶກຂໍ້ຍົກເວັ້ນ

ອີເມວ + Slack + VictorOps ສຳລັບການແຈ້ງເຕືອນ (ຕາມລະດັບຄວາມຮ້າຍແຮງ)

ສິ່ງທີ່ພວກເຮົາຢາກມີ:

Prometheus ສຳລັບຕົວຊີ້ວັດ (Grafana ສຳລັບການສະແດງພາບ)

New Relic (ອາດເປັນ Elastic Search APM) ສຳລັບການຕິດຕາມແອັບພລິເຄຊັນ

EFK (elastic search + fluentd + kibana) ສຳລັບ logging. ອາດເປັນ Loki ໂດຍ Grafana ຈະພ້ອມໃຊ້ງານຈິງເມື່ອເຖິງເວລາທີ່ພວກເຮົາໄປຮອດຕອນນັ້ນ

Sentry ສຳລັບຂໍ້ຍົກເວັ້ນ

Alertmanager + ອີເມວ + VictorOps ສຳລັບການແຈ້ງເຕືອນ


### Wavefront + Scalyr + PagerDuty + Stackstorm + Slack

Wavefront + Scalyr + PagerDuty + Stackstorm + Slack (ຄຳປະຕິເສດຄວາມຮັບຜິດຊອບ: ເຮັດວຽກຢູ່ VMware)


### Telegraf + Prometheus + InfluxDB + Grafana

Telegraf ສຳລັບຕົວຊີ້ວັດເຊີບເວີເຊັ່ນ CPU, ດິດສ໌, ໜ່ວຍຄວາມຈຳ ແລະ ເຄືອຂ່າຍ. ພວກເຮົາຍັງໃຊ້ Telegraf ສຳລັບການຕິດຕາມ SNMP ຂອງອຸປະກອນເຄືອຂ່າຍຂອງພວກເຮົາ.

Prometheus ສຳລັບຕົວຊີ້ວັດແອັບພລິເຄຊັນ. ພວກເຮົາຂຽນການກວດສຸຂະພາບໃສ່ໃນແອັບພລິເຄຊັນຂອງພວກເຮົາ ທີ່ Prometheus scrape.

InfluxDB ສຳລັບການເກັບຂໍ້ມູນຊຸດເວລາ. ນີ້ແມ່ນບ່ອນທີ່ຂໍ້ມູນ Telegraf ຂອງພວກເຮົາຖືກສົ່ງໄປ.

Grafana ສຳລັບແດຊບອດ ແລະ ການແຈ້ງເຕືອນ. ເອັນຈິນການແຈ້ງເຕືອນບໍ່ແຂງແກ່ນຫຼາຍ ແຕ່ເຮັດວຽກໄດ້. ພວກເຮົາຍັງສົ່ງການແຈ້ງເຕືອນເຂົ້າ Slack.

ສິ່ງທີ່ຂ້ອຍບໍ່ມີໃນຕອນນີ້ແມ່ນວິທີແກ້ໄຂ logging ສູນກາງ. ELK ມີພະລັງແຕ່ຍາກທີ່ຈະຕັ້ງ ແລະ ຈັດການ ແລະ ຂ້ອຍບໍ່ຮູ້ຈັກທາງເລືອກຟຣີໃດທີ່ໃກ້ເຄຽງພໍທີ່ຈະເບິ່ງ.


### Sematext + Logagent + Experience

Sematext ສຳລັບຕົວຊີ້ວັດ, ສຳລັບ log, ສຳລັບ trace ແລະ ໃນໄວໆນີ້ສຳລັບການຕິດຕາມຜູ້ໃຊ້ຈິງດ້ວຍ. ງ່າຍກວ່າ/ຖືກກວ່າການໃຊ້ N ເຄື່ອງມື/ບໍລິການທີ່ແຕກຕ່າງກັນ ໃນຄວາມເຫັນຂອງຂ້ອຍ.

ສຳລັບການສົ່ງ log ພວກເຮົາເຄີຍໃຊ້ rsyslog ແລ້ວປ່ຽນໄປ Logagent.

ສຳລັບການລາຍງານການຄາຂອງຝັ່ງໜ້າພວກເຮົາໃຊ້ Sentry ແຕ່ພວກເຮົາຈະປ່ຽນໄປ Experience ໃນໄວໆນີ້.

ຄຳປະຕິເສດຄວາມຮັບຜິດຊອບ: ຂ້ອຍເປັນ Sematextan.


### Azure Monitor/Analytics + OpsGenie

ຂ້ອຍຢາກໃຫ້ Log Analytics ມີສ່ວນຕໍ່ປະສານທີ່ດີກວ່າ. ພວກເຮົາກຳລັງຍ້າຍອອກຈາກ splunk ເຊິ່ງນຳທາງໄດ້ງ່າຍກວ່າຫຼາຍ.


### Prometheus + Alertmanager + Grafana + Splunk + PagerDuty

Prometheus, Alertmanager, Grafana, Splunk, PagerDuty

ທ່ານບໍ່ຢາກດຳເນີນລະບົບແຈ້ງເຕືອນຂອງຕົນເອງແທ້ໆ. ທ່ານສາມາດປ່ຽນ Splunk ດ້ວຍ ELK ເວັ້ນເສຍແຕ່ທີມຄວາມປອດໄພຂອງທ່ານມັກ Splunk.


### Telegraf + Prometheus + Grafana + Alertmanager

Telegraf ເປັນຕົວເກັບ, Prometheus + Alertmanager ສຳລັບການຕິດຕາມ ແລະ ການແຈ້ງເຕືອນ, ລວມກັບຊ່ອງ slack ແລະ pagerduty ສຳລັບການແຈ້ງເຕືອນວິກິດ. Grafana ສຳລັບການສະແດງພາບຕົວຊີ້ວັດໂຮສ.


### Prometheus + Grafana + Cloudwatch + sentry + kibana + elasticsearch

Prometheus ສຳລັບຕົວຊີ້ວັດ + ການແຈ້ງເຕືອນ

Grafana ສຳລັບແດຊບອດ Prometheus

Cloudwatch ຕິດຕາມອິນສະແຕນ Prometheus

sentry ສຳລັບການຕິດຕາມຂໍ້ຍົກເວັ້ນ

kibana + elasticsearch

graylog

prometheus Push Gateway ສຳລັບ batch/cronjobs

SOP https://github.com/rapidloop/sop ເພື່ອ „push/forward“ ຕົວຊີ້ວັດຈາກອິນສະແຕນ Prometheus ໜຶ່ງໄປອີກອັນ

ລູກຂ່າຍໃຊ້ໄລບຣາຣີ Prometheus. ພວກເຮົາພະຍາຍາມໃຊ້ opencensus.io ຝັ່ງລູກຂ່າຍ


### PagerDuty + Monitis

PagerDuty + Monitis. ພ້ອມທັງ Azure Functions ທີ່ຂຽນເອງບາງຢ່າງສຳລັບການທົດສອບສຸຂະພາບຂອງບາງບໍລິການ.

ຫວັງຈະນຳ Prometheus ແລະ Grafana ມາໃຊ້ໃນປີນີ້


### Prometheus + Grafana + Bosun

Prometheus ສຳລັບເກັບຂໍ້ມູນຊຸດເວລາ. Grafana ສຳລັບການສະແດງພາບ. Bosun ສຳລັບການຈັດການການແຈ້ງເຕືອນ.


### Azure Monitor/Analytics/Insights/Dashboards

ຮ້ານທີ່ໃຊ້ Azure ເທົ່ານັ້ນ, Azure Monitor, Log Analytics, App Insights, Azure Dashboards + Pager Duty


### Grafana + Monitis + OpsGenie + Slack

Grafana ສຳລັບຕິດຕາມບໍລິການຄອນເທນເນີໃນ Kubernetes ຜ່ານ Prometheus

Monitis ສຳລັບການຕິດຕາມບໍລິການແບບ end-to-end ສ່ວນໃຫຍ່ສຳລັບ API ເວັບ ແລະ ເວັບແອັບພລິເຄຊັນ

OpsGenie ສຳລັບການຈັດການການແຈ້ງເຕືອນ

Slack ສຳລັບຮັບຂໍ້ມູນສະຖານະຈາກລະບົບຂອງພວກເຮົາ


### Checkly + AppOptics + Cloudwatch + Heroku + Pagerduty + Papertrail

ວິສະວະກອນ (dev)ops ມາດົນນານຢູ່ນີ້. ເຕີບໃຫຍ່ມາກັບ Nagios. ຢາກໄດ້ຄວາມເຫັນກ່ຽວກັບ SaaS ທີ່ບູດສະແຕຣບຂອງຂ້ອຍ https://checklyhq.com. ພວກເຮົາເຮັດການຕິດຕາມ API ແລະ ການຕິດຕາມທຸລະກຳໄຊດ້ວຍການແຈ້ງເຕືອນທີ່ເລິກພໍສົມຄວນ.

ຂ້ອຍເລີ່ມ Checkly ເພາະການຕິດຕາມແບບ active / synthetic ໃນພື້ນທີ່ API ຄ່ອນຂ້າງຈຳກັດ (ແລະ ແພງ). ການຕິດຕາມທີ່ອີງໃສ່ບຣາວເຊີ / ຂຽນສະຄຣິບຍິ່ງເປັນກຳມະສິດ ແລະ ແພງກວ່າ. ພວກເຮົາໃຊ້ Puppeteer ແລະ ຮັກສາລາຄາໃຫ້ຕ່ຳທີ່ສຸດເທົ່າທີ່ເປັນໄປໄດ້.

ຊຸດການຕິດຕາມຂອງພວກເຮົາ:

Checkly (dog fooding...)

AppOptics (ກຣາຟກຳນົດເອງ)

AWS Cloudwatch ແລະ SNS ສຳລັບຂໍ້ຄວາມ SMS.

ການແຈ້ງເຕືອນໃນຕົວຂອງ Heroku.

Pagerduty

Papertrail


### Instana + Logz.io + slack

Instana ແຈ້ງເຕືອນພວກເຮົາໃນ slack ກ່ຽວກັບບັນຫາໂຄງລ່າງພື້ນຖານ ຫຼື ປະສິດທິພາບຖົດຖອຍ ແລະ ພວກເຮົາໄດ້ຕັ້ງຄ່າ logz.io ໃຫ້ແຈ້ງເຕືອນໃນ slack ເມື່ອມີ log ລະດັບຂໍ້ຜິດພາດຈາກຊັ້ນແອັບພລິເຄຊັນໃນປະລິມານໃດໜຶ່ງ.


### SignalFX + Splunk + PagerDuty + Slack

ປັດຈຸບັນໃຊ້: SignalFX, Splunk, PagerDuty ແລະ Slack. ຂ້ອຍບໍ່ແມ່ນແຟນໃຫຍ່ຂອງ SignalFX ເຖິງແມ່ນທີມສະໜັບສະໜູນຂອງພວກເຂົາເປັນມິດ ແລະ ຕອບສະໜອງໄວຫຼາຍ. ຂ້ອຍມັກ Splunk (ຄຸ້ມຖ້າທ່ານຈ່າຍໄດ້), PagerDuty ແລະ Slack.

ຂ້ອຍເຄີຍໃຊ້ຊຸດ TICK ທີ່ສ່ວນໃຫຍ່ຂອງ C ຕົວຈິງແມ່ນ G ນັ້ນຄື Grafana ເຖິງແມ່ນຂ້ອຍໃຊ້ Chronograf ເລັກນ້ອຍ. ມັນດີເລີດແຕ່ຍາກທີ່ຈະຈັດການ. ຄວາມຂັດແຍ້ງຄລາສສິກຂອງ SaaS ທຽບກັບການໂຮດເອງ.

ຂ້ອຍເຄີຍໃຊ້ DataDog, New Relic, Graylog, ELK ແລະ BugSnag. ຂ້ອຍມັກ DataDog ແລະ New Relic ຫຼາຍ, Graylog ດີພໍສົມຄວນ. ແຕ່ຂ້ອຍບໍ່ແມ່ນແຟນໃຫຍ່ຂອງ ELK. BugSnag ດີ ຂ້ອຍຮູ້ສຶກວ່າການຕິດຕາມຂໍ້ຜິດພາດ/ຂໍ້ຍົກເວັ້ນເປັນຕົວແທນທີ່ດີພໍສົມຄວນຂອງການຕິດຕາມ log ເຕັມຮູບແບບ ໃນຫຼາຍກໍລະນີ.


### ELK + Prometheus + Grafana

ຄືກັບຄົນອື່ນ ພວກເຮົາໃຊ້ ELK ສຳລັບ log ແລະ Prometheus+Grafana ສຳລັບທຸກຢ່າງອື່ນ.

ການບຳລຸງຮັກສາການຕັ້ງຄ່ານີ້ງ່າຍຖ້າທ່ານອະນຸຍາດໃຫ້ຕົນເອງສູນເສຍຂໍ້ມູນເປັນບາງຄັ້ງ. ຕົວຢ່າງ ຖ້າຖານຂໍ້ມູນ ElasticSearch ຂອງພວກເຮົາເຂົ້າສູ່ສະພາວະຊຶມເສົ້າ (ເຊິ່ງເກີດຂຶ້ນທຸກ 2-3 ເດືອນສຳລັບພວກເຮົາ ໂຊກບໍ່ດີ) ພວກເຮົາບໍ່ເສຍເວລາກັບ HA ແລະ ແທນທີ່ຈະທິ້ງຂໍ້ມູນ ແລ້ວດຳເນີນຊີວິດຕໍ່ໄປ. ຖ້າທ່ານຕ້ອງການ HA ຫຼື ການເກັບຮັກສາໄລຍະຍາວຢ່າງແນ່ນອນ ໂຊກດີ.


### Datadog + Prometheus + Grafana

ຂ້ອຍຕັ້ງ Datadog ແບບເດືອນຕໍ່ເດືອນ ເພາະເມື່ອຂ້ອຍມາຮອດບໍ່ມີການຕິດຕາມ ແລະ ບໍ່ມີການແຈ້ງເຕືອນ. ມີພຽງສອງສາມໄຊຂອງພວກເຮົາທີ່ຖືກຕິດຕາມທຸກ 5 ນາທີສຳລັບເວລາເຮັດວຽກ. Datadog ງ່າຍທີ່ສຸດໃນການຕັ້ງຄ່າຢ່າງແນ່ນອນ. ເມື່ອຂ້ອຍແກ້ໄຂບັນຫາອື່ນໆທັງໝົດແລ້ວ ຂ້ອຍຈະປ່ຽນເປັນ Prometheus+Grafana. ຍັງບໍ່ແນ່ໃຈ 100% ກ່ຽວກັບການຈັດການ log.

### Nagios + ELK

ພວກເຮົາສະໜັບສະໜູນຜະລິດຕະພັນຫຼາຍກວ່າ 100+ ຢ່າງ.

ສຳລັບ on-prem ສ່ວນໃຫຍ່ແມ່ນ Nagios ແລະ ELK. ສຳລັບຄລາວ ພວກເຮົາກຳລັງຍ້າຍຈາກ DataDog ໄປ NewRelic.


### Datadog vs. Site24x7 + StatusCake + PagerDuty + SumoLogic + Slack

ພວກເຮົາເຄີຍໃຊ້ datadog ແຕ່ພົບວ່າມັນແພງເກີນໄປສຳລັບຄວາມຕ້ອງການຂອງພວກເຮົາ. ຢ່າເຂົ້າໃຈຜິດ ມັນດີເລີດ ແຕ່ມັນມີຕົ້ນທຶນມະຫາສານ. ພວກເຮົາສາມາດຕັ້ງ site24x7.com ດ້ວຍການສະໝັກສະມາຊິກລາຍປີໃນຣາຄາປະມານ 2-3 ເດືອນຂອງ DD.

ຊຸດການຕິດຕາມຂອງພວກເຮົາ:

Site24x7 - APM, ການຕິດຕາມ URL ພາຍນອກ, ການຕິດຕາມການໄຫຼຂອງເມລ SMTP, ການໝົດອາຍຸຂອງ ssl ແລະ ການຕິດຕາມໂປຣເຊດ.

StatusCake - ສຳລັບການຕິດຕາມ URL ແລະ ການຢືນຢັນ - ມັນເປັນສຳຮອງຂອງພວກເຮົາໃນກໍລະນີທີ່ site24x7 ພາດບາງຢ່າງ (ມັນບໍ່ພາດ) ແຕ່ SC ຢືດຢຸ່ນກວ່າສຳລັບການຕິດຕາມພອດ ແລະ ບໍລິການພາຍນອກຕາມຄວາມຕ້ອງການຂອງພວກເຮົາ.

ທັງສອງເຄື່ອງມືສົ່ງຕໍ່ຂຶ້ນໄປ PagerDuty ແລ້ວພວກເຮົາໄດ້ຮັບການສົ່ງຕໍ່ຂອງພວກເຮົາໃນ slack.

SumoLogic - ສຳລັບການຕິດຕາມ log (ມັນເປັນເຄື່ອງມືທີ່ດີແຕ່ຊັບຊ້ອນເລັກນ້ອຍສຳລັບຄວາມຕ້ອງການຂອງພວກເຮົາ)

ຈາກ slack ພວກເຮົາສາມາດຢືນຢັນຮັບຮູ້ ຫຼື ແກ້ໄຂການແຈ້ງເຕືອນໄດ້.

ຈາກນັ້ນພວກເຮົາມີອັດຕະໂນມັດຂອງ site24x7 ຫຼາຍຢ່າງທີ່ເຊື່ອມຕໍ່ກັບ commando.io ສຳລັບ 'BedOps' ດັ່ງທີ່ພວກເຮົາເອີ້ນ - ບ່ອນທີ່ການແຈ້ງເຕືອນຖືກກະຕຸ້ນ ພວກເຮົາເລີ່ມສະຄຣິບ ຫຼື ອັດຕະໂນມັດບໍ່ກີ່ຢ່າງເພື່ອພະຍາຍາມແກ້ສະຖານະການ (99% ຂອງເວລາ ອັດຕະໂນມັດ + ສະຄຣິບຂອງພວກເຮົາຮັກສາພວກເຮົາໃຫ້ພົ້ນຈາກບັນຫາ)

ພວກເຮົາມີ runbooks ພາຍໃນໃນ KB ຂອງພວກເຮົາສຳລັບເວລາທີ່ອັດຕະໂນມັດລົ້ມເຫຼວ ຫຼື ຖ້າມີສິ່ງທີ່ຢູ່ນອກຂອບເຂດທີ່ຕ້ອງແກ້ໄຂ.


### Prometheus + AlertManager + Grafana + Stackdriver

Prometheus (Operator) / AlertManager / Grafana ສຳລັບຕົວຊີ້ວັດໃນຄລັດສະເຕີ GKE ແລະ VM ຂອງພວກເຮົາ.

Google Stackdriver ສຳລັບ Logs (ເພາະມັນລວມຢູ່ແລ້ວ ແລະ ເປີດໃຊ້ໂດຍຄ່າເລີ່ມຕົ້ນ ແລະ ໃນຕອນນີ້ພຽງພໍສຳລັບຄວາມຕ້ອງການຂອງພວກເຮົາ).


### Zabbix

Zabbix ສຳລັບທຸກຢ່າງ. ບໍ່ຕ້ອງການຊອບແວເພີ່ມເຕີມ.
