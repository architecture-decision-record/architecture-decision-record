# मेट्रिक्स, मॉनिटर, अलर्ट

विषय-सूची:

* [सारांश](#सारांश)
  * [मुद्दा](#मुद्दा)
  * [निर्णय](#निर्णय)
  * [अवस्था](#अवस्था)
* [विवरण](#विवरण)
  * [मान्यताएँ](#मान्यताएँ)
  * [बाधाएँ](#बाधाएँ)
  * [रुख](#रुख)
  * [तर्क](#तर्क)
  * [निहितार्थ](#निहितार्थ)
* [संबंधित](#संबंधित)
  * [संबंधित निर्णय](#संबंधित-निर्णय)
  * [संबंधित आवश्यकताएँ](#संबंधित-आवश्यकताएँ)
  * [संबंधित कलाकृतियाँ](#संबंधित-कलाकृतियाँ)
  * [संबंधित सिद्धांत](#संबंधित-सिद्धांत)
* [टिप्पणियाँ](#टिप्पणियाँ)
  * [फ़्रीफ़ॉर्म टेक्स्ट संदेश बनाम संरचित इवेंट संदेश](#फ़्रीफ़ॉर्म-टेक्स्ट-संदेश-बनाम-संरचित-इवेंट-संदेश)
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


## सारांश


### मुद्दा

हम मेट्रिक्स, मॉनिटर और अलर्ट का उपयोग करना चाहते हैं, क्योंकि हम जानना चाहते हैं कि हमारे एप्लिकेशन कितनी अच्छी तरह काम कर रहे हैं, और यह जानना चाहते हैं कि कब कोई समस्या है।


### निर्णय

कार्य प्रगति पर (WIP)।


### अवस्था

जानकारी जुटाई जा रही है। हम स्पेक्ट्रम के संभावित छोरों से शुरू कर रहे हैं: सबसे अधिक अनुशंसित पुराना मुफ़्त उपकरण (Nagios) और सबसे अधिक अनुशंसित नया भुगतान वाला उपकरण (New Relic)।


## विवरण


### मान्यताएँ

हम आधुनिक, तेज़, भरोसेमंद, रिस्पॉन्सिव आदि वेब ऐप बनाना चाहते हैं।

हम बनाने के बजाय खरीदना चाहते हैं।


### बाधाएँ

हम ऐसे उपकरण चाहते हैं जो हमारी devops पाइपलाइन और हमारे तैनाती क्लाउड के साथ अच्छी तरह काम करें।


### रुख

हम अभी रुखों पर शोध कर रहे हैं।


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

  
### तर्क

अब तक, Nagios और New Relic स्पेक्ट्रम के दो छोर हैं। Nagios सबसे पुराना, सबसे सरल, मुफ़्त, व्यवहार्य उपकरण है। New Relic सबसे नई सुविधाओं वाला, सबसे संपूर्ण, भुगतान वाला, व्यवहार्य उपकरण है। हम इनके मूल्यांकन से शुरुआत करेंगे। आवश्यकता पड़ने पर, हम स्पेक्ट्रम के भीतर जाएँगे। 

अब तक, Zabbix की सबसे अच्छी अनुशंसाएँ हैं, और वह सबसे संपूर्ण क्षमताएँ भी देता है।

अब तक, ELK की ओपन-सोर्स बनाम-खरीद लोकप्रियता सबसे अच्छी है।

अब तक, Prometheus + Graphana की लोकप्रियता सबसे अच्छी है।


### निहितार्थ

करना बाकी (TODO)।


## संबंधित


### संबंधित निर्णय

ये चुनाव परीक्षण योग्यता, टेलीमेट्री, और संभवतः ग्राहक सेवा, साइट विश्वसनीयता इंजीनियरिंग आदि जैसी अन्य प्रणालियों को प्रभावित करेंगे।


### संबंधित आवश्यकताएँ

करना बाकी (TODO)।


### संबंधित कलाकृतियाँ

करना बाकी (TODO)।


### संबंधित सिद्धांत

आसानी से पलटा जा सकने वाला।

गति की आवश्यकता।


## टिप्पणियाँ


एक काफ़ी अच्छा ओपन सोर्स स्टैक है:

* Prometheus, मेट्रिक्स और मेट्रिक्स-आधारित अलर्टिंग के लिए

* Grafana, मेट्रिक्स दिखाने के लिए

* Elasticsearch/Logstash/Kibana (ELK), लॉग और संरचित इवेंट के लिए

* Pushover, मोबाइल सूचनाओं के लिए


### फ़्रीफ़ॉर्म टेक्स्ट संदेश बनाम संरचित इवेंट संदेश

फ़्रीफ़ॉर्म टेक्स्ट संदेश: उदाहरण के लिए, /var/log/messages में मिलने वाली तरह-तरह की सामग्री, और एप्लिकेशन द्वारा जानबूझकर उत्पन्न की गई सामग्री। संदेश मशीन पर घट रही अन्य चीज़ों, जैसे मेमोरी की कमी या हार्डवेयर त्रुटियों, की पहचान करने के लिए उपयोगी हैं, लेकिन उनमें बहुत कचरा होता है। 

संरचित इवेंट संदेश: एप्लिकेशन द्वारा उत्पन्न, निश्चित या गतिशील विशेषताओं के समूह के साथ, जैसे HTTP अनुरोध लॉग, लेखा लॉग, उपयोगकर्ता लॉगिन।

सामान्यतः, हर अनुरोध का विवरण इस तरह लॉग करना अच्छा रहता है कि आप विशेषताओं के आधार पर ड्रिल-डाउन कर सकें। इसलिए हर चीज़ में जैसे userid या sessionid जोड़ने से आप ट्रेस कर सकते हैं। निश्चित रूप से, स्पष्ट ट्रेसिंग भी अच्छी है। इसके लिए ELK का उपयोग https://www.honeycomb.io/ का गरीब आदमी वाला रूप है


### Graylog is easier

मेरे अनुभव में Graylog को खड़ा करना आसान है।



### Prometheus take some tuning


मैं सामान्यतः मेट्रिक्स के लिए Prometheus से खुश हूँ। अलर्टिंग को कुछ ट्यूनिंग की ज़रूरत होती है, लेकिन काफ़ी अच्छी है। यह आपके एप्लिकेशन पर निर्भर करता है। मुझे लगता है कि अंतर्निहित कारणों के बजाय अंतिम-उपयोगकर्ता को दिखने वाली स्थितियों पर अलर्ट करना सबसे अच्छा है। उदाहरण के लिए, पेज लोड समय अच्छा है, प्रति सेकंड अनुरोधों की संख्या नहीं। हालाँकि शून्य अनुरोध प्रति सेकंड संकेत देता है कि कुछ गड़बड़ है।

सेवा का फ़ायदा यह है कि वे तुरंत अतिरिक्त बुद्धिमत्ता देती हैं। मुझे सामान्यतः Datadog पसंद है। यदि आपके पास बहुत डेटा है तो सेवाएँ डरावने स्तर तक महँगी हो सकती हैं, और कभी-कभी उनके मूल्य मॉडल क्लाउड-अनुकूल नहीं होते, जैसे प्रति इंस्टेंस शुल्क, जबकि इंस्टेंस गतिशील होते हैं। उन सेवाओं में भी अंतर है जहाँ हर अनुरोध भुगतान करने वाले उपयोगकर्ता का है और उनमें जो विज्ञापन से संबंधित हैं, इसलिए अनुरोधों का केवल थोड़ा-सा प्रतिशत ही आपको कमाई देता है। आप बहुत सारे डेटा के साथ पर बहुत बजट के बिना रह सकते हैं।

मैं कुछ ऐसी सेवाओं पर काम करता हूँ जिन्हें प्रतिदिन 1B अनुरोध मिलते हैं, इसलिए अपनी मॉनिटरिंग और लॉगिंग स्वयं होस्ट करना समझदारी है। यदि आपकी मात्रा कम है, तो होस्टेड सेवाएँ आसान हैं।


### AWS services are mixed

AWS सेवाओं का मेरा अनुभव मिला-जुला रहा है। उनकी Elasticsearch सेवा अस्थिर रही है, इसलिए हम इसके लिए अपने इंस्टेंस चलाते हैं। CloudWatch मेट्रिक्स महँगे हैं, इसलिए हम उनका उपयोग सामान्यतः एप्लिकेशन के बजाय केवल "अवसंरचना" स्तर के मेट्रिक्स के लिए करते हैं, यानी स्वास्थ्य-संबंधी मेट्रिक्स जहाँ AWS इंस्टेंस पर चल रहे सॉफ़्टवेयर से बेहतर जान सकता है कि क्या हो रहा है। CloudWatch Logs के अपडेट होने में देर हो सकती है और उनमें उतना मेटाडेटा नहीं होता। ELK चलाने से इसमें मदद मिलती है। यदि मुझे वास्तव में रीयल-टाइम डेटा चाहिए, तो लॉग के परिवहन के रूप में Kafka का उपयोग करना बेहतर है। Logstash इसे काफ़ी अच्छी तरह समर्थित करता है। हालाँकि, Kafka क्लस्टर का प्रबंधन कमज़ोर दिल वालों के लिए नहीं है, बहुत सारी खुली प्लंबिंग है।


### Kafka

टिप्पणी: Kafka कभी-कभी बेहद पेचीदा हो सकता है, या Kafka चट्टान जैसा मज़बूत हो सकता है और आप लगभग भूल जाते हैं कि वह हर चीज़ को आपस में बाँधकर वहाँ मौजूद है। 


टिप्पणी: Kafka मज़बूत रहा है, लेकिन उसे चालू करने में आश्चर्यजनक रूप से बहुत काम लगा। मैं इसे रिलेशनल डेटाबेस की तरह समझता हूँ लेकिन आप केवल "भौतिक" परत पर काम कर रहे होते हैं, जैसे टेबलस्पेस, फ़ाइलें और पार्टिशन। शुरुआत में कुछ समय ऐसे थे जब प्रबंधन उपयोगिताओं की कमी थी, और हमें जैसे कंज्यूमर ग्रुप रीसेट करने के लिए प्रोग्राम लिखने पड़े। http://howfuckedismydatabase.com/nosql/

टिप्पणी: हम Kafka को लॉग संदेशों के लिए "बफ़र" के रूप में और ऐसी जगह के रूप में उपयोग करते हैं जहाँ हम कई सर्वरों से आ रहे डेटा पर रीयल-टाइम स्ट्रीम प्रोसेसिंग कर सकें। यदि हम पर DDOS हमला हो, तो हमें कई इंस्टेंस में डेटा का विश्लेषण करने का तरीका चाहिए। यदि हम सर्वर से सीधे ELK में लॉग कर रहे हों, तो भार Elasticsearch क्लस्टर को उड़ा सकता है।

टिप्पणी: Kafka हमारे लिए अच्छा है क्योंकि यदि हम पर DDOS हमला हो, तो हमें कई इंस्टेंस में डेटा का विश्लेषण करने का तरीका चाहिए। यदि हम सर्वर से सीधे ELK में लॉग कर रहे हों, तो भार Elasticsearch क्लस्टर को उड़ा सकता है।


टिप्पणी: Kafka कम काम करता है और अधिक कुशल है, इसलिए वह भार को बेहतर ढंग से संभाल सकता है। और हम Kafka का काम कतार में लगाते हैं और पुनः प्रयास करते हैं। और Kafka पर अतिभार पड़ने से उन उपयोगकर्ताओं पर कोई असर नहीं पड़ता जो Kibana के साथ इंटरैक्टिव काम करने की कोशिश कर रहे हैं, जैसा तब होता जब Elasticsearch संघर्ष कर रहा होता।

टिप्पणी: स्ट्रीम प्रोसेसिंग में मुख्यतः दुरुपयोग की तलाश होती है, जैसे पूरे क्लस्टर में एक ही IP से बहुत अधिक ट्रैफ़िक, और फिर पूरे क्लस्टर में ब्लॉक साझा करना।

टिप्पणी: logstash-output-kafka प्लगइन फ़िलहाल काफ़ी अविश्वसनीय है। मुझे इसके GitHub issues पेज की कई समस्याओं ने काटा है, जो कभी ठीक होती नहीं दिखतीं। मैं इसका उपयोग छोड़कर अपने ऐप्स से सीधे Kafka को भेजना चाहता हूँ।

टिप्पणी: हम अब ऐप से सीधे Kafka को संरचित इवेंट भेज रहे हैं। मुख्य प्रेरणा लॉग डेटा को कम बार छूना और डिस्क को कई बार पढ़ने-लिखने से बचना थी। उच्च-मात्रा वाली प्रणालियों में, लॉगिंग में एप्लिकेशन से ज़्यादा काम लग सकता है। मैं journald से भी C प्रोग्राम से सीधे लॉग भिजवाने के बारे में सोच रहा हूँ।


### Loki

Loki पर कड़ी नज़र रखें। यह अभी तैयार नहीं है, लेकिन जब होगा तब मैं उम्मीद करता हूँ कि यह इस स्टैक में बेहतर फ़िट होगा। Loki, grafana labs द्वारा बनाया गया लॉग एग्रीगेटर है, यह Prometheus जैसी स्क्रैपिंग और टैग सिंटैक्स का उपयोग करता है।


### Prometheus + alertmanager + Rollbar + Graylog + Grafana

 मेट्रिक्स के लिए Prometheus + alertmanager। Prometheus से प्यार है।

लॉगिंग/त्रुटि रिपोर्टिंग के लिए Rollbar/Graylog (इसमें कुछ ओवरलैप है; छोटी सेवा को संभवतः दोनों की ज़रूरत नहीं)।

फ़िलहाल, अलर्ट कुछ Slack चैनलों में से एक में जाते हैं जिन पर इच्छुक पक्षों ने सूचनाएँ चालू कर रखी हैं। यदि हम ऑन-कॉल को लेकर अधिक गंभीर होते, तो वे PagerDuty/VictorOps/आदि में जाते।

ग्राफ़ और डैशबोर्डिंग के लिए Grafana। यह देखने के लिए भी उत्सुक हूँ कि उनकी आगामी लॉगिंग सुविधाएँ Graylog को अनावश्यक कर देंगी या नहीं।


### Thanos

हम अपने HA सेटअप के फ्रंट-एंड के रूप में Thanos का उपयोग करते हैं। यह जानता है कि HA जोड़ियों को डी-डुप्लिकेट कैसे करें।

हम फ़िलहाल 6 माह का स्थानीय Prometheus डेटा रखते हैं। यह हमारे लिए काफ़ी अच्छा काम करता है। लेकिन मैं अभी दीर्घकालिक डेटा भंडारण के लिए अपने Thanos सेटअप में बकेट स्टोरेज लागू करने के बीच में हूँ। सिद्धांत रूप में, GCS स्टोरेज उस GCE मानक पर्सिस्टेंट डिस्क से लगभग 30% सस्ता होगा जो हम अभी उपयोग करते हैं।

हम फ़िलहाल Prometheus डेटा का बैकअप नहीं लेते। अलर्टिंग के लिए पर्याप्त डेटा होने से परे यह डेटा हमारे लिए वास्तव में महत्वपूर्ण नहीं है। हमारी समग्र फ़्लीट तैनाती साल-दर-साल इतनी बदलती है कि कुछ महीनों से पुराना ऐतिहासिक डेटा बहुत दिलचस्प नहीं है। साल-दर-साल कुछ मुख्य आँकड़े रखना दिलचस्प हो सकता है, मैं मुख्य-आँकड़ों के रिकॉर्डिंग नियमों का समूह सेट कर सकता हूँ और उन्हें Federation से संग्रहीत कर सकता हूँ या बस Thanos को संभालने दे सकता हूँ।

संपादन: छोटा-सा अस्वीकरण, मैं Prometheus डेवलपर हूँ।


### Prometheus HA

Prometheus में HA दोहराव (duplication) से किया जाता है: आप कई कलेक्टर चलाते हैं, कई को पोल करने और डेटा को डी-डुप्लिकेट करने के तरीके हैं।

स्केलिंग नेटवर्क तय करके और अलग-अलग Prometheus को नेटवर्क के अलग-अलग हिस्से पोल करवाकर की जाती है।

दीर्घकालिक भंडारण Prom की मज़बूती नहीं है बल्कि influx या timescaledb (जो तकनीकी रूप से HA का बॉक्स भी चेक करता है) जैसी किसी चीज़ को सौंपा जाता है, इस पर पढ़ा गया लेख https://blog.timescale.com/prometheus-ha-postgresql-8de68d19b6f5?gi=7df160f10e07

दीर्घकालिक चीज़ें अभी आज़माई नहीं हैं क्योंकि मैं अब भी प्रयोग कर रहा हूँ और इसे केवल अल्पकालिक ग्राफ़ के लिए उपयोग कर रहा हूँ, जबकि librenms दीर्घकालिक के लिए मेरे नेटवर्क की निगरानी करता है।


###  Datadog + PagerDuty + Threat Stack

हम Datadog (PagerDuty के साथ) और Threat Stack का उपयोग करते हैं और इससे अधिक खुश नहीं हो सकते। DD से मेरी एकमात्र शिकायत मेट्रिक भंडारण की अपेक्षाकृत ऊँची लागत है।


### Zabbix

लगभग हर चीज़ की निगरानी के लिए कस्टम स्क्रिप्ट के साथ Zabbix। जादू की तरह काम करता है।


### Outlyer

मैं Outlyer का उपयोग कर रहा हूँ, लेकिन मुझे घोषणा करनी होगी कि मैं यहीं काम करता हूँ, और अपना ही उत्पाद उपयोग करना ज़रूरी है।

बढ़ाने के लिए अब भी Graylog, Sentry और Statuscake की ज़रूरत है।

पक्षपाती लगेगा, लेकिन आंतरिक रूप से Nagios और अन्य मॉनिटरिंग प्रणालियाँ खुशी-खुशी चलाने के बाद, किसी भी नई नौकरी में मैं होस्टेड समाधान खरीदूँगा और उस दर्द से मुक्ति पाऊँगा।


### Nagios + Nagiosgraph

हम सारी निगरानी और अलर्टिंग के लिए Nagios चलाते हैं। अलर्ट ईमेल (चेतावनी और गंभीर सूचनाएँ) और श्रव्य ऐप सूचनाओं (गंभीर अलर्ट के लिए) के माध्यम से होते हैं।

विज़ुअलाइज़ेशन के लिए Nagiosgraph का उपयोग होता है।

यह सेट-अप हमें अपने परिवेश में क्या हो रहा है, इसकी व्यापक जानकारी देते रहने में बहुत प्रभावी रहा है। हम लगभग 110 मिशन-क्रिटिकल सर्वर और लगभग 760 डेटा बिंदु चलाते और मॉनिटर करते हैं, और यह प्रातःकालीन प्रणाली सात वर्षों से अधिक समय से चल रही है।

मैं कभी Graylog या ELk के साथ लॉग भी एकत्र करना चाहूँगा।


### Prometheus + Grafana + AlertManager

शानदार Prometheus Operator helm chart के माध्यम से Prometheus + Grafana + AlertManager। लॉग अब भी LogDNA birch प्लान में जाते हैं क्योंकि हमने देखा कि GKE पर हमारे विनम्र न्यूनतम 3 अधिकतम 5 नोड्स के लिए ELK बहुत भारी है।


### DataDog + Sentry + PagerDuty.

मैं अपने सभी मॉनिटरिंग समाधान स्वयं चलाता था, जिनमें Nagios, Icinga, Zabbix, ELK, Greylog2, Influx और कई अन्य उपकरणों सहित हर तरह के सॉफ़्टवेयर का उपयोग करता था, लेकिन सच यह है कि अपनी मॉनिटरिंग अवसंरचना चलाने में बहुत अधिक प्रयास लगता है, खासकर तब जब आप किसी और को इतनी कम दरों पर वह काम करने के लिए भुगतान कर सकते हैं!

मॉनिटरिंग अवसंरचना चलाने के लिए दूसरों को भुगतान करना मेरे ग्राहकों को मुक्त करता है कि वे मॉनिटरिंग की निगरानी करने के बजाय अपने प्लेटफ़ॉर्म चलाने पर ध्यान दें, यानी अपने प्लेटफ़ॉर्म की स्थिरता से उन्हें जो मूल्य मिलता है वह "सेवा के रूप में मॉनिटरिंग" की किसी भी लागत से कहीं अधिक है।


### Sensu + Graphite + ELK

मेरी कंपनी स्व-होस्टेड चीज़ों पर बहुत ज़ोर देती है।

Sensu -> PagerDuty

Graphite/Grafana

ELK (Elasticsearch, Logstash, Kibana)


### Prometheus + Alertmanager

अलर्टिंग के लिए Prometheus + Alertmanager, मेरी टीम मानती है कि सरल मॉनिटरिंग अच्छी मॉनिटरिंग है।

लॉगिंग और ट्रेसिंग जैसी अन्य प्रणालियाँ तब निदान के लिए समृद्ध संदर्भ देंगी जब ऑन-कॉल को कोई अलर्ट मिले, लेकिन हम इन पर अलर्टिंग कभी नहीं बनाते।


### Sensu + Grafana + Graylog + Kibana + NewRelic.

Sensu, grafana, graylog, kibana, newrelic।


### Prometheus + Circonus

Prometheus इंस्ट्रूमेंटेड सेवाएँ => Circonus एनालिटिक्स और विज़ुअलाइज़ेशन


### icinga2 + VictorOps + NewRelic + Sentry + Slack

हम नीचे दी गई सेवाओं का उपयोग कर रहे हैं:

निगरानी के लिए icinga2 और अलर्टिंग के लिए VictorOps

सेवा की विस्तृत निगरानी के लिए NewRelic

सेवा में त्रुटि ट्रैकिंग के लिए Sentry

Slack/ईमेल अलर्टिंग का हिस्सा हैं जो NewRelic या icinga2 से ट्रिगर होते हैं


### AppDynamics + Papertrail + PagerDuty + Healthchecks.io + Stackdriver

AppDynamics

Papertrail

PagerDuty

Healthchecks.io

Stackdriver


### icinga2 + elasticsearch

विश्लेषण के लिए elasticsearch एकीकरण और ग्राफ़ के लिए graphite+grafana एकीकरण के साथ icinga2।

icinga2 में apply नियमों की लचीलेपन के कारण, डेवलपर केवल वही सेवाएँ देख सकते हैं जिनकी सूचनाएँ उन्हें मिलती हैं।

और icinga2 director के माध्यम से, प्रोग्रामर बड़े पैमाने पर बिना किसी झंझट के आसानी से अपनी जाँचें परिभाषित कर सकते हैं (जो वे हर कुछ दिनों में करते हैं - 100 जाँचें बाहर जाती हैं, 100 अन्य जाँचें अंदर आती हैं)।


### DataDog + New Relic + ELK + EFK + Sentry + Alertmanager + VictorOps

अभी हमारे पास क्या है:

मेट्रिक्स के लिए DataDog

एप्लिकेशन निगरानी के लिए New Relic

लॉग के लिए ELK (Elastic Search + Logstash + Kibana)

अपवादों को लॉग करने के लिए Sentry (स्व-होस्टेड)

अलर्टिंग के लिए ईमेल + Slack + VictorOps (गंभीरता के आधार पर)

हम क्या चाहते हैं:

मेट्रिक्स के लिए Prometheus (विज़ुअलाइज़ेशन के लिए Grafana)

एप्लिकेशन निगरानी के लिए New Relic (संभवतः Elastic Search APM)

लॉगिंग के लिए EFK (elastic search + fluentd + kibana)। संभवतः, जब तक हम यहाँ पहुँचेंगे तब तक Grafana का Loki उत्पादन के लिए तैयार होगा

अपवादों के लिए Sentry

अलर्ट के लिए Alertmanager + ईमेल + VictorOps


### Wavefront + Scalyr + PagerDuty + Stackstorm + Slack

Wavefront + Scalyr + PagerDuty + Stackstorm + Slack (अस्वीकरण: VMware में काम करता हूँ)


### Telegraf + Prometheus + InfluxDB + Grafana

CPU, डिस्क, मेमोरी और नेटवर्क जैसे सर्वर मेट्रिक्स के लिए Telegraf। हम अपने नेटवर्क उपकरणों की SNMP निगरानी के लिए भी Telegraf का उपयोग करते हैं।

एप्लिकेशन मेट्रिक्स के लिए Prometheus। हम अपने एप्लिकेशन में स्वास्थ्य जाँचें कोड करते हैं जिन्हें Prometheus स्क्रैप करता है।

टाइम-सीरीज़ भंडारण के लिए InfluxDB। हमारा Telegraf डेटा यहीं भेजा जाता है।

डैशबोर्ड और अलर्ट के लिए Grafana। अलर्टिंग इंजन बहुत मज़बूत नहीं है, लेकिन काम चल जाता है। हम अलर्ट Slack में भी भेजते हैं।

जो मेरे पास अभी नहीं है वह केंद्रीकृत लॉगिंग समाधान है। ELK शक्तिशाली है लेकिन सेट अप और प्रबंधित करना कठिन है, और मैं ऐसे किसी मुफ़्त विकल्प के बारे में नहीं जानता जो देखने लायक पर्याप्त करीब हो।


### Sematext + Logagent + Experience

मेट्रिक्स, लॉग, ट्रेस के लिए Sematext, जल्द ही वास्तविक उपयोगकर्ता निगरानी के लिए भी। मेरी राय में, N अलग-अलग उपकरणों/सेवाओं का उपयोग करने की तुलना में सरल/सस्ता।

लॉग शिपिंग के लिए हम rsyslog का उपयोग करते थे और फिर Logagent पर चले गए।

फ्रंटएंड क्रैश रिपोर्टिंग के लिए हम Sentry का उपयोग करते हैं, लेकिन जल्द ही Experience पर चले जाएँगे।

अस्वीकरण: मैं Sematext कर्मचारी हूँ।


### Azure Monitor/Analytics + OpsGenie

काश Log Analytics का इंटरफ़ेस बेहतर होता। हम splunk से दूर जा रहे हैं, जिसमें नेविगेट करना कहीं आसान था।


### Prometheus + Alertmanager + Grafana + Splunk + PagerDuty

Prometheus, Alertmanager, Grafana, Splunk, PagerDuty

आप वास्तव में अपनी सूचना प्रणाली खुद चलाना नहीं चाहते। जब तक आपकी सुरक्षा टीम Splunk को पसंद न करे, आप Splunk को ELK से बदल सकते हैं।


### Telegraf + Prometheus + Grafana + Alertmanager

कलेक्टर के रूप में Telegraf, निगरानी और अलर्टिंग के लिए Prometheus + Alertmanager, slack चैनलों और गंभीर अलर्ट के लिए pagerduty के साथ एकीकृत। होस्ट मेट्रिक्स के विज़ुअलाइज़ेशन के लिए Grafana।


### Prometheus + Grafana + Cloudwatch + sentry + kibana + elasticsearch

मेट्रिक्स + अलर्ट के लिए Prometheus

Prometheus डैशबोर्ड के लिए Grafana

Prometheus इंस्टेंस की निगरानी करने वाला Cloudwatch

अपवाद ट्रैकिंग के लिए sentry

kibana + elasticsearch

graylog

बैच/क्रॉनजॉब के लिए prometheus Push Gateway

मेट्रिक्स को एक Prometheus इंस्टेंस से दूसरे में “पुश/फ़ॉरवर्ड” करने के लिए SOP https://github.com/rapidloop/sop

क्लाइंट या तो Prometheus क्लाइंट का उपयोग करते हैं। हम क्लाइंट की ओर opencensus.io का उपयोग करने की कोशिश करते हैं


### PagerDuty + Monitis

PagerDuty + Monitis। साथ ही कुछ सेवाओं का स्वास्थ्य परखने के लिए कुछ अनुकूलित Azure Functions।

इस वर्ष Prometheus और Grafana लाने पर विचार कर रहा हूँ


### Prometheus + Grafana + Bosun

टाइम सीरीज़ डेटा संग्रहीत करने के लिए Prometheus। विज़ुअलाइज़ेशन के लिए Grafana। अलर्ट प्रबंधन के लिए Bosun।


### Azure Monitor/Analytics/Insights/Dashboards

केवल-Azure वाली दुकान, Azure Monitor, Log Analytics, App Insights, Azure Dashboards + Pager Duty


### Grafana + Monitis + OpsGenie + Slack

Prometheus के माध्यम से Kubernetes में कंटेनर सेवाओं की निगरानी के लिए Grafana

मुख्यतः वेब API और वेब एप्लिकेशन के लिए एंड-टू-एंड सेवा निगरानी के लिए Monitis

अलर्ट प्रबंधन के लिए OpsGenie

हमारी प्रणालियों से स्थिति की जानकारी पाने के लिए Slack


### Checkly + AppOptics + Cloudwatch + Heroku + Pagerduty + Papertrail

लंबे समय से (dev)ops इंजीनियर। Nagios पर बड़ा हुआ। अपने स्वयं-वित्तपोषित SaaS https://checklyhq.com पर राय सुनना पसंद करूँगा। हम काफ़ी गहन अलर्टिंग के साथ API निगरानी और साइट लेन-देन निगरानी करते हैं।

मैंने Checkly इसलिए शुरू किया क्योंकि API क्षेत्र में सक्रिय / सिंथेटिक निगरानी कुछ सीमित (और महँगी) थी। ब्राउज़र-आधारित / स्क्रिप्टेड निगरानी और भी अधिक मालिकाना और महँगी है। हम Puppeteer का उपयोग करते हैं और कीमत यथासंभव कम रखते हैं।

हमारा मॉनिटरिंग स्टैक:

Checkly (अपना ही उत्पाद उपयोग करते हुए...)

AppOptics (कस्टम ग्राफ़िंग)

SMS संदेशों के लिए AWS Cloudwatch और SNS।

अंतर्निहित Heroku अलर्टिंग।

Pagerduty

Papertrail


### Instana + Logz.io + slack

Instana हमें अवसंरचना की समस्याओं या प्रदर्शन में गिरावट के बारे में slack में अलर्ट करता है, और हमने logz.io को इस तरह कॉन्फ़िगर किया है कि एप्लिकेशन परत से त्रुटि-स्तर के लॉग की एक निश्चित मात्रा पर slack में अलर्ट करे।


### SignalFX + Splunk + PagerDuty + Slack

वर्तमान में उपयोग में: SignalFX, Splunk, PagerDuty और Slack। मैं SignalFX का बड़ा प्रशंसक नहीं हूँ, हालाँकि उनकी सहायता टीम बेहद मिलनसार और जवाब देने वाली है। मुझे Splunk (अगर आप भुगतान कर सकें तो सार्थक), PagerDuty और Slack पसंद हैं।

मैं TICK स्टैक का उपयोग करता था जहाँ अधिकांश C वास्तव में G था, यानी Grafana, हालाँकि मैंने Chronograf का थोड़ा उपयोग किया। वह शानदार था लेकिन प्रबंधित करना सिरदर्द था। क्लासिक SaaS बनाम स्व-होस्टिंग की दुविधा।

मैंने DataDog, New Relic, Graylog, ELK और BugSnag का उपयोग किया है। मुझे DataDog और New Relic बहुत पसंद हैं, Graylog काफ़ी अच्छा है। मैं ELK का बड़ा प्रशंसक नहीं हूँ। BugSnag अच्छा है, मुझे वास्तव में लगता है कि कई मामलों में त्रुटियों/अपवादों को ट्रैक करना पूर्ण लॉग निगरानी का काफ़ी अच्छा विकल्प है।


### ELK + Prometheus + Grafana

दूसरों की तरह, हम लॉग के लिए ELK और बाकी सब कुछ के लिए Prometheus+Grafana का उपयोग करते हैं।

यदि आप खुद को कभी-कभार डेटा खोने की अनुमति देते हैं, तो इस सेटअप को बनाए रखना आसान है। उदाहरण के लिए, यदि हमारा ElasticSearch डेटाबेस गड़बड़ हो जाता है (जो दुर्भाग्य से हमारे साथ हर 2-3 माह में होता है), तो हम HA की परवाह नहीं करते और इसके बजाय डेटा फेंककर अपने जीवन में आगे बढ़ जाते हैं। यदि आपको हर हाल में HA या दीर्घकालिक प्रतिधारण चाहिए, तो शुभकामनाएँ।


### Datadog + Prometheus + Grafana

मैंने Datadog को माह-दर-माह पर सेट किया क्योंकि जब मैं यहाँ आया, कोई निगरानी और कोई अलर्टिंग नहीं थी। हमारी केवल कुछ साइटें अपटाइम के लिए हर 5 मिनट पर मॉनिटर हो रही थीं। Datadog बिना किसी संदेह के सेट अप करने में सबसे आसान है। जब मैं अन्य सभी समस्याओं को सुलझा लूँगा, तब मैं Prometheus+Grafana पर बदलूँगा। लॉग प्रबंधन पर अभी 100% निर्णय नहीं हुआ है।

### Nagios + ELK

हम 100+ से अधिक उत्पादों का समर्थन करते हैं।

ऑन-प्रिम के लिए, मुख्यतः Nagios और ELK। क्लाउड के लिए, हम DataDog से NewRelic पर जा रहे हैं।


### Datadog vs. Site24x7 + StatusCake + PagerDuty + SumoLogic + Slack

हम datadog का उपयोग करते थे लेकिन पाया कि हमारी ज़रूरतों के लिए यह बहुत महँगा है। गलत मत समझिए, यह अद्भुत है, लेकिन इसकी लागत बहुत अधिक है। हम DD की लागत के लगभग 2-3 महीनों के बराबर वार्षिक सदस्यता के साथ site24x7.com सेट अप करने में सक्षम थे।

हमारा मॉनिटरिंग स्टैक:

Site24x7 - APM, बाहरी URL निगरानी, SMTP मेलफ़्लो निगरानी, ssl समाप्ति और प्रक्रिया निगरानी।

StatusCake - URL निगरानी और पुष्टि के लिए - यह हमारा बैकअप है, यदि site24x7 कुछ चूक जाए (वह नहीं चूकता) लेकिन हमारी ज़रूरतों के लिए बाहरी पोर्ट और सेवा निगरानी के लिए SC अधिक लचीला है।

दोनों उपकरण PagerDuty में एस्केलेट करते हैं, और फिर हमें अपने एस्केलेशन slack में मिलते हैं।

SumoLogic - लॉग निगरानी के लिए (यह बढ़िया उपकरण है लेकिन हमारी ज़रूरतों के लिए थोड़ा जटिल)

slack से हम अलर्ट को स्वीकार (ack) कर सकते हैं, या उसका निवारण कर सकते हैं।

फिर हमारे पास बहुत सारे site24x7 स्वचालन हैं जो फिर 'BedOps' (जैसा हम इसे कहते हैं) के लिए commando.io से जुड़ते हैं - जहाँ कोई अलर्ट ट्रिगर होता है, हम स्थिति सुधारने की कोशिश के रूप में कुछ स्क्रिप्ट या स्वचालन शुरू करते हैं (99% समय स्वचालन + हमारी स्क्रिप्ट हमें मुसीबत से बाहर रखती हैं)।

जब स्वचालन विफल हो या जब कोई ऐसी चीज़ हो जो दायरे से बाहर हो और जिसे ठीक करना हो, तो उसके लिए हमारे KB में आंतरिक रनबुक हैं।


### Prometheus + AlertManager + Grafana + Stackdriver

हमारे GKE क्लस्टर और VM में मेट्रिक्स के लिए Prometheus (Operator) / AlertManager / Grafana।

लॉग के लिए Google Stackdriver (क्योंकि यह शामिल है और डिफ़ॉल्ट रूप से सक्रिय है और फ़िलहाल हमारी ज़रूरतों के लिए पर्याप्त है)।


### Zabbix

हर चीज़ के लिए Zabbix। किसी अतिरिक्त सॉफ़्टवेयर की आवश्यकता नहीं।
