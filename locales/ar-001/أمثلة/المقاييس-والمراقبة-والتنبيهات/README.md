# المقاييس والمراقبة والتنبيهات

المحتويات:

* [الملخص](#الملخص)
  * [المسألة](#المسألة)
  * [القرار](#القرار)
  * [الحالة](#الحالة)
* [التفاصيل](#التفاصيل)
  * [الافتراضات](#الافتراضات)
  * [القيود](#القيود)
  * [المواقف](#المواقف)
  * [الحجة](#الحجة)
  * [التبعات](#التبعات)
* [ذو صلة](#ذو-صلة)
  * [قرارات ذات صلة](#قرارات-ذات-صلة)
  * [متطلبات ذات صلة](#متطلبات-ذات-صلة)
  * [نواتج ذات صلة](#نواتج-ذات-صلة)
  * [مبادئ ذات صلة](#مبادئ-ذات-صلة)
* [ملاحظات](#ملاحظات)
  * [رسائل النص الحر مقابل رسائل الأحداث المنظَّمة](#رسائل-النص-الحر-مقابل-رسائل-الأحداث-المنظَّمة)
  * [Graylog أسهل](#graylog-أسهل)
  * [Prometheus يحتاج إلى بعض الضبط](#prometheus-يحتاج-إلى-بعض-الضبط)
  * [خدمات AWS متباينة](#خدمات-aws-متباينة)
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
  * [Datadog مقابل Site24x7 + StatusCake + PagerDuty + SumoLogic + Slack](#datadog-مقابل-site24x7--statuscake--pagerduty--sumologic--slack)
  * [Prometheus + AlertManager + Grafana + Stackdriver](#prometheus--alertmanager--grafana--stackdriver)
  * [Zabbix](#zabbix-1)


## الملخص


### المسألة

نريد استخدام المقاييس والمراقبة والتنبيهات، لأننا نريد أن نعرف مدى جودة عمل تطبيقاتنا، وأن نعرف متى توجد مشكلة.


### القرار

قيد العمل.


### الحالة

نجمع المعلومات. نبدأ بطرفي الطيف المعقولين: أكثر الأدوات المجانية القديمة توصيةً (Nagios) وأكثر الأدوات المدفوعة الأحدث توصيةً (New Relic).


## التفاصيل


### الافتراضات

نريد إنشاء تطبيقات ويب حديثة وسريعة وموثوقة وسريعة الاستجابة وما إلى ذلك.

نريد الشراء بدلًا من البناء.


### القيود

نريد أدوات تعمل جيدًا مع خط devops لدينا ومع سحب النشر لدينا.


### المواقف

نبحث في المواقف الآن.


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

  
### الحجة

حتى الآن، Nagios وNew Relic هما طرفا الطيف. Nagios هو الأقدم والأبسط والمجاني والقابل للتطبيق. أما New Relic فهو الأحدث ميزاتٍ والأكثر اكتمالًا والمدفوع والقابل للتطبيق. وسنبدأ بتقييم هاتين الأداتين. وعند الحاجة سننتقل إلى نقاط أخرى في الطيف.  

حتى الآن، حظي Zabbix بأفضل التوصيات، ويقدم أيضًا أكمل القدرات.

حتى الآن، يتمتع ELK بأفضل شعبية في خيار البناء بدلًا من الشراء مفتوح المصدر.

حتى الآن، يتمتع Prometheus + Grafana بأفضل شعبية.


### التبعات

مطلوب إكمالها.


## ذو صلة


### قرارات ذات صلة

ستؤثر الخيارات في قابلية الاختبار والقياس عن بُعد، وغالبًا في أنظمة أخرى مثل خدمة العملاء وهندسة موثوقية المواقع وغيرها.


### متطلبات ذات صلة

مطلوب إكمالها.


### نواتج ذات صلة

مطلوب إكمالها.


### مبادئ ذات صلة

سهل التراجع عنه.

الحاجة إلى السرعة.


## ملاحظات


حزمة مفتوحة المصدر جيدة إلى حد كبير هي:

* Prometheus للمقاييس والتنبيهات المبنية على المقاييس

* Grafana لعرض المقاييس

* Elasticsearch/Logstash/Kibana (ELK) للسجلات والأحداث المنظَّمة

* Pushover لإشعارات الجوّال


### رسائل النص الحر مقابل رسائل الأحداث المنظَّمة

رسائل النص الحر: مثلًا ذلك النوع من المحتوى العشوائي الذي تجده في /var/log/messages، وما يولّده التطبيق عمدًا. هذه الرسائل مفيدة لتحديد أمور أخرى تحدث على الجهاز مثل نفاد الذاكرة أو أعطال العتاد، لكن فيها كثيرًا من الحشو. 

رسائل الأحداث المنظَّمة: يولّدها التطبيق، بمجموعة سمات ثابتة أو ديناميكية، مثل سجل طلبات HTTP أو سجل محاسبي أو تسجيل دخول مستخدم.

عمومًا، من الجيد تسجيل تفاصيل كل طلب بطريقة تتيح التعمق بحسب السمات. فإضافة معرّف مستخدم أو معرّف جلسة إلى كل شيء تتيح التتبّع. والتتبّع الصريح جيد أيضًا بالطبع. واستخدام ELK لهذا الغرض أشبه بنسخة الفقير من https://www.honeycomb.io/


### Graylog أسهل

Graylog أسهل في التشغيل بحسب تجربتي.



### Prometheus يحتاج إلى بعض الضبط


أنا راضٍ عمومًا عن Prometheus للمقاييس. التنبيهات تحتاج إلى بعض الضبط لكنها جيدة إلى حد كبير. يعتمد ذلك على تطبيقك. وأعتقد أن الأفضل التنبيه على الحالات التي يراها المستخدم النهائي لا على الأسباب الكامنة. فمثلًا زمن تحميل الصفحة مقياس جيد، أما عدد الطلبات في الثانية فليس كذلك. مع أن صفر طلب في الثانية يشير إلى وجود خلل ما.

ميزة الخدمة أنها تقدم ذكاءً إضافيًا جاهزًا. وأنا أحب Datadog عمومًا. قد تكون الخدمات باهظة التكلفة بشكل مخيف إذا كان لديك كثير من البيانات، وأحيانًا لها نماذج تسعير غير ملائمة للسحابة، كالمحاسبة لكل نسخة بينما النسخ ديناميكية. وهناك أيضًا فرق بين الخدمات التي يكون كل طلب فيها من مستخدم يدفع، وتلك المرتبطة بالإعلانات حيث نسبة صغيرة فقط من الطلبات تدر المال. وقد ينتهي بك الأمر بكثير من البيانات وميزانية ليست بالكبيرة.

أعمل على بعض الخدمات التي تتلقى مليار طلب يوميًا، لذا من المنطقي أن نستضيف المراقبة والتسجيل بأنفسنا. أما إذا كانت أحجامك أقل، فالخدمات المستضافة أسهل.


### خدمات AWS متباينة

كانت تجربتي مع خدمات AWS متباينة. خدمة Elasticsearch لديهم كانت غير مستقرة، لذا نشغّل نسخنا الخاصة. مقاييس CloudWatch باهظة، لذا نستخدمها عمومًا لمقاييس مستوى «البنية التحتية» فقط لا التطبيق، أي المقاييس المتعلقة بالصحة حيث تعرف AWS أفضل مما يعرف البرنامج العامل على النسخة ما يجري. وقد يكون تحديث CloudWatch Logs بطيئًا وبيانات وصفه قليلة. وتشغيل ELK يساعد في ذلك. وإذا كنت أريد بيانات فورية حقًا، فإن استخدام Kafka ناقلًا للسجلات أفضل. وهذا مدعوم جيدًا في Logstash. غير أن إدارة عنقود Kafka ليست لضعاف القلوب، ففيها كثير من السباكة المكشوفة.


### Kafka

تعليق: قد يكون Kafka شديد الصعوبة أحيانًا، وقد يكون صلبًا كالصخر حتى تكاد تنسى أنه موجود يربط كل شيء معًا. 


تعليق: كان Kafka صلبًا، لكن تشغيله تطلب جهدًا مفاجئًا. أفكر فيه كقاعدة بيانات علاقاتية لكنك تعمل فقط على الطبقة «الفيزيائية»، أي مساحات الجداول والملفات والأقسام. وكانت هناك أوقات في البداية افتقرت فيها أدوات الإدارة إلى ما نحتاج، واضطررنا إلى كتابة برامج لأمور مثل إعادة ضبط مجموعة مستهلكين. http://howfuckedismydatabase.com/nosql/

تعليق: نستخدم Kafka «مخزنًا مؤقتًا» لرسائل السجلات ومكانًا نجري فيه معالجة تدفق فورية للبيانات الواردة من خوادم متعددة. فإذا تعرضنا لهجوم DDOS، نحتاج إلى وسيلة لتحليل البيانات عبر نسخ متعددة. وإذا سجّلنا مباشرة من الخوادم إلى ELK، فقد ينفجر الحمل على عنقود Elasticsearch.

تعليق: Kafka جيد لنا لأننا إذا تعرضنا لهجوم DDOS، نحتاج إلى وسيلة لتحليل البيانات عبر نسخ متعددة. وإذا سجّلنا مباشرة من الخوادم إلى ELK، فقد ينفجر الحمل على عنقود Elasticsearch.


تعليق: يبذل Kafka عملًا أقل وهو أكثر كفاءة، لذا يتحمل الحمل بشكل أفضل. ونحن نضع عمل Kafka في طابور ونعيد المحاولة. وإثقال Kafka لا يؤثر في المستخدمين الذين يعملون تفاعليًا مع Kibana، كما كان سيحدث لو كان Elasticsearch يعاني.

تعليق: معالجة التدفق تبحث في الغالب عن الإساءة، مثل حركة مرور مفرطة من عنوان IP واحد عبر العنقود كله، ثم تشارك الحظر عبر العنقود كله.

تعليق: إضافة logstash-output-kafka غير موثوقة تمامًا في الوقت الحالي. فقد تعرضت لعدة مشكلات من صفحة المشكلات على GitHub لا يبدو أنها تُصلَح أبدًا. أريد الابتعاد عن استخدامها والإرسال مباشرة من تطبيقاتنا إلى Kafka.

تعليق: نرسل الآن أحداثًا منظَّمة مباشرة من التطبيق إلى Kafka. كان الدافع الرئيسي هو لمس بيانات السجل مرات أقل وتجنب قراءة القرص وكتابته مرات متعددة. ففي الأنظمة عالية الحجم قد يتطلب التسجيل عملًا أكثر من التطبيق نفسه. وأفكر في جعل journald يرسل السجلات مباشرة أيضًا، من برنامج بلغة C.


### Loki

راقب Loki عن كثب. إنه غير جاهز بعد، لكن عندما يصبح جاهزًا أتوقع أن يكون أنسب لهذه الحزمة. Loki مجمّع سجلات من Grafana Labs، ويستخدم أسلوب جمع ووسوم مشابهًا لـPrometheus.


### Prometheus + alertmanager + Rollbar + Graylog + Grafana

 Prometheus + alertmanager للمقاييس. أحب Prometheus.

Rollbar/Graylog للتسجيل والإبلاغ عن الأخطاء (هناك بعض التداخل هنا؛ والخدمة الصغيرة ربما لا تحتاج إلى كليهما).

حاليًا تذهب التنبيهات إلى إحدى قنوات Slack القليلة التي فعّل فيها المهتمون الإشعارات. ولو كنا أكثر جدية بشأن المناوبة لذهبت إلى PagerDuty/VictorOps/ما شابه.

Grafana للرسوم البيانية ولوحات المعلومات. وأتطلع بشغف لرؤية ما إذا كانت إمكانات التسجيل القادمة لديهم ستغني عن Graylog.


### Thanos

نستخدم Thanos واجهةً أمامية لإعداد التوافر العالي (HA) لدينا. وهو يعرف كيف يزيل التكرار من أزواج HA.

نحتفظ حاليًا بـ6 أشهر من بيانات Prometheus المحلية. وهذا يعمل بشكل معقول لنا. لكنني في منتصف نشر تخزين الدلاء (bucket storage) في إعداد Thanos لدينا للتخزين طويل الأمد. ومن الناحية النظرية سيكون تخزين GCS أرخص بنحو 30% من القرص الدائم القياسي في GCE الذي نستخدمه الآن.

لا نأخذ نسخًا احتياطية من بيانات Prometheus حاليًا. فالبيانات ببساطة ليست مهمة لنا فيما يتجاوز ما يكفي للتنبيه. وتتغير عمليات نشر أسطولنا الإجمالية كثيرًا من سنة إلى أخرى، لذا فإن البيانات التاريخية الأقدم من بضعة أشهر ليست مثيرة للاهتمام. قد يكون من المفيد الاحتفاظ ببعض الإحصاءات الأساسية سنة بعد سنة، وربما أعدّ مجموعة قواعد تسجيل للإحصاءات الأساسية وأخزنها بالاتحاد (Federation) أو أترك Thanos يتولى الأمر.

تعديل: إخلاء مسؤولية بسيط، أنا مطوّر Prometheus.


### Prometheus HA

يتحقق HA في Prometheus بالتكرار: تشغّل عدة نسخ جامعة، وهناك طرق لجمع بيانات متعددة وإزالة التكرار منها.

يتم التوسع بتقسيم الشبكة وجعل نسخ Prometheus مختلفة تجمع أجزاء مختلفة من الشبكة.

التخزين طويل الأمد ليس نقطة قوة Prometheus، بل يُفرَّغ إلى شيء مثل InfluxDB أو TimescaleDB (الذي يحقق أيضًا خاصية HA من الناحية التقنية). مقال قرأته عن ذلك: https://blog.timescale.com/prometheus-ha-postgresql-8de68d19b6f5?gi=7df160f10e07

لم أجرب جزء الأمد الطويل بعد لأنني ما زلت أجرّب فقط وأستخدمه لرسوم بيانية قصيرة الأمد بينما يراقب librenms شبكتي للأمد الطويل.


###  Datadog + PagerDuty + Threat Stack

نستخدم Datadog (مع PagerDuty) وThreat Stack ولا يمكن أن نكون أسعد. شكواي الوحيدة من DD هي التكلفة المرتفعة نسبيًا لتخزين المقاييس.


### Zabbix

Zabbix مع نصوص برمجية مخصصة لمراقبة كل شيء تقريبًا. يعمل كالسحر.


### Outlyer

أستخدم Outlyer، لكن يجب أن أعلن أنني أعمل هنا، واستخدام منتجنا بأنفسنا أمر لا بد منه.

ما زلت أحتاج إلى Graylog وSentry وStatuscake للتعزيز.

قد يبدو ذلك منحازًا، لكنني بعد أن شغّلت Nagios وأنظمة مراقبة أخرى داخليًا بسعادة، كنت سأشتري حلًّا مستضافًا في أي وظيفة جديدة وأتخلص من ذلك العناء.


### Nagios + Nagiosgraph

نشغّل Nagios لكل المراقبة والتنبيه. تحدث التنبيهات عبر البريد الإلكتروني (إشعارات التحذير والحرجة) وإشعارات التطبيق المسموعة (للتنبيهات الحرجة).

يُستخدم Nagiosgraph للتصويرات.

كان هذا الإعداد فعالًا جدًا في إبقائنا مطّلعين بشكل شامل على ما يحدث في بيئتنا. نشغّل ونراقب نحو 110 خوادم حرجة للمهمة ونحو 760 نقطة بيانات، ولدينا هذا النظام الصباحي منذ أكثر من سبع سنوات.

وأود أيضًا في وقت ما تجميع السجلات بـGraylog أو ELK.


### Prometheus + Grafana + AlertManager

Prometheus + Grafana + AlertManager عبر مخطط helm الرائع Prometheus Operator. ما زالت السجلات تذهب إلى خطة LogDNA birch لأننا لاحظنا أن ELK ثقيل جدًا لعنقودنا المتواضع من 3 إلى 5 عقد على GKE.


### DataDog + Sentry + PagerDuty.

كنت أشغّل كل حلول المراقبة بنفسي باستخدام شتى أنواع البرمجيات، منها Nagios وIcinga وZabbix وELK وGreylog2 وInflux وأدوات كثيرة أخرى، لكن الحقيقة أن تشغيل بنية المراقبة التحتية بنفسك يتطلب جهدًا كبيرًا جدًا، خصوصًا حين يمكنك أن تدفع لغيرك أسعارًا زهيدة ليقوم بذلك عنك!

دفع المال للآخرين لتشغيل بنية المراقبة التحتية يحرر عملائي ليركزوا على تشغيل منصاتهم بدلًا من مراقبة المراقبة، أي أن القيمة التي يكسبونها من استقرار منصتهم تفوق بكثير أي تكاليف للمراقبة بوصفها خدمة.


### Sensu + Graphite + ELK

شركتي شديدة الميل إلى الاستضافة الذاتية.

Sensu -> PagerDuty

Graphite/Grafana

ELK (Elasticsearch وLogstash وKibana)


### Prometheus + Alertmanager

Prometheus + Alertmanager للتنبيه، ويؤمن فريقي بأن المراقبة البسيطة مراقبة جيدة.

أنظمة أخرى مثل التسجيل والتتبّع ستوفر سياقًا غنيًا للتشخيص عندما يتلقى المناوب تنبيهًا، لكننا لا نبني تنبيهات عليها أبدًا.


### Sensu + Grafana + Graylog + Kibana + NewRelic.

Sensu وgrafana وgraylog وkibana وnewrelic.


### Prometheus + Circonus

خدمات مزودة بأدوات Prometheus => تحليلات وتصوير Circonus


### icinga2 + VictorOps + NewRelic + Sentry + Slack

نستخدم الخدمات التالية:

icinga2 للمراقبة وVictorOps للتنبيه

NewRelic لمراقبة تفصيلية للخدمة

Sentry لتتبّع الأخطاء في الخدمة

Slack/البريد الإلكتروني جزء من التنبيه ويُطلَق من NewRelic أو icinga2


### AppDynamics + Papertrail + PagerDuty + Healthchecks.io + Stackdriver

AppDynamics

Papertrail

PagerDuty

Healthchecks.io

Stackdriver


### icinga2 + elasticsearch

icinga2 مع تكامل elasticsearch للتحليل وتكامل graphite+grafana للرسوم البيانية.

بفضل مرونة قواعد التطبيق (apply rules) في icinga2، لا يرى المطورون إلا الخدمات التي يتلقون إشعارات عنها.

وعبر icinga2 director يستطيع المبرمجون بسهولة تعريف فحوصاتهم الخاصة (وهم يفعلون ذلك كل بضعة أيام - تخرج 100 فحص ويدخل 100 فحص آخر) على نطاق واسع دون أي عناء.


### DataDog + New Relic + ELK + EFK + Sentry + Alertmanager + VictorOps

ما لدينا الآن:

DataDog للمقاييس

New Relic لمراقبة التطبيقات

ELK (Elastic Search + Logstash + Kibana) للسجلات

Sentry (مستضاف ذاتيًا) لتسجيل الاستثناءات

البريد الإلكتروني + Slack + VictorOps للتنبيه (بحسب الخطورة)

ما نريد أن يكون لدينا:

Prometheus للمقاييس (Grafana للتصوير)

New Relic (ربما Elastic Search APM) لمراقبة التطبيقات

EFK (elastic search + fluentd + kibana) للتسجيل. وربما يكون Loki من Grafana جاهزًا للإنتاج حين نصل إلى ذلك

Sentry للاستثناءات

Alertmanager + البريد الإلكتروني + VictorOps للتنبيهات


### Wavefront + Scalyr + PagerDuty + Stackstorm + Slack

Wavefront + Scalyr + PagerDuty + Stackstorm + Slack (إخلاء مسؤولية: أعمل في VMware)


### Telegraf + Prometheus + InfluxDB + Grafana

Telegraf لمقاييس الخادم مثل المعالج والقرص والذاكرة والشبكة. ونستخدم Telegraf أيضًا لمراقبة SNMP لأجهزة شبكتنا.

Prometheus لمقاييس التطبيق. نكتب فحوصات الصحة داخل تطبيقنا ويجمعها Prometheus.

InfluxDB لتخزين السلاسل الزمنية. هنا تُرسَل بيانات Telegraf.

Grafana للوحات المعلومات والتنبيهات. محرك التنبيه ليس قويًا جدًا لكنه يؤدي الغرض. ونرسل التنبيهات أيضًا إلى Slack.

ما لا أملكه الآن هو حل تسجيل مركزي. ELK قوي لكن إعداده وإدارته صعبان، ولا أعرف بدائل مجانية قريبة بما يكفي لأنظر فيها.


### Sematext + Logagent + Experience

Sematext للمقاييس وللسجلات وللتتبّع، وقريبًا لمراقبة المستخدم الحقيقي أيضًا. أبسط وأرخص من استخدام N أدوات/خدمات مختلفة، في رأيي المتواضع.

لشحن السجلات كنا نستخدم rsyslog ثم انتقلنا إلى Logagent.

للإبلاغ عن أعطال الواجهة الأمامية نستخدم Sentry، لكننا سننتقل إلى Experience قريبًا.

إخلاء مسؤولية: أنا من فريق Sematext.


### Azure Monitor/Analytics + OpsGenie

أتمنى لو كانت واجهة Log Analytics أفضل. نحن نبتعد عن splunk الذي كان أسهل بكثير في التنقل.


### Prometheus + Alertmanager + Grafana + Splunk + PagerDuty

Prometheus وAlertmanager وGrafana وSplunk وPagerDuty

لا تريد حقًا تشغيل نظام الإشعارات بنفسك. ويمكنك استبدال Splunk بـELK ما لم يفضّل فريق الأمان Splunk.


### Telegraf + Prometheus + Grafana + Alertmanager

Telegraf جامعًا، وPrometheus + Alertmanager للمراقبة والتنبيه، متكاملة مع قنوات slack وpagerduty للتنبيهات الحرجة. وGrafana لتصوير مقاييس المضيف.


### Prometheus + Grafana + Cloudwatch + sentry + kibana + elasticsearch

Prometheus للمقاييس + التنبيهات

Grafana للوحات معلومات Prometheus

Cloudwatch يراقب نسخ Prometheus

sentry لتتبّع الاستثناءات

kibana + elasticsearch

graylog

Prometheus Push Gateway للمهام الدفعية/cronjobs

SOP https://github.com/rapidloop/sop لـ«دفع/إعادة توجيه» المقاييس من نسخة Prometheus إلى أخرى

العملاء إما يستخدمون عملاء Prometheus. ونحاول استخدام opencensus.io من جهة العميل


### PagerDuty + Monitis

PagerDuty + Monitis. وأيضًا بعض دوال Azure Functions المصممة خصيصًا لاختبار صحة بعض الخدمات.

نتطلع إلى إدخال Prometheus وGrafana هذا العام


### Prometheus + Grafana + Bosun

Prometheus لتخزين بيانات السلاسل الزمنية. Grafana للتصوير. Bosun لإدارة التنبيهات.


### Azure Monitor/Analytics/Insights/Dashboards

متجر Azure فقط: Azure Monitor وLog Analytics وApp Insights وAzure Dashboards + Pager Duty


### Grafana + Monitis + OpsGenie + Slack

Grafana لمراقبة خدمات الحاويات في Kubernetes عبر Prometheus

Monitis لمراقبة الخدمة من طرف إلى طرف، وخصوصًا لواجهات الويب البرمجية وتطبيقات الويب

OpsGenie لإدارة التنبيهات

Slack للحصول على معلومات الحالة من أنظمتنا


### Checkly + AppOptics + Cloudwatch + Heroku + Pagerduty + Papertrail

مهندس (dev)ops منذ زمن طويل. نشأت على Nagios. أحب أن أسمع آراءكم في خدمة SaaS التي بنيتها بتمويل ذاتي https://checklyhq.com. نقدم مراقبة الواجهات البرمجية ومراقبة معاملات المواقع مع تنبيهات متعمقة جدًا.

بدأت Checkly لأن المراقبة النشطة/الاصطناعية في مجال الواجهات البرمجية كانت محدودة نوعًا ما (وغالية). والمراقبة المعتمدة على المتصفح/المبرمجة أكثر احتكارية وأغلى. نستخدم Puppeteer ونبقي الأسعار أدنى ما يمكن.

حزمة المراقبة لدينا:

Checkly (نستخدم منتجنا بأنفسنا...)

AppOptics (رسوم بيانية مخصصة)

AWS Cloudwatch وSNS لرسائل SMS.

تنبيهات Heroku المدمجة.

Pagerduty

Papertrail


### Instana + Logz.io + slack

ينبهنا Instana في slack إلى مشكلات البنية التحتية أو تراجع الأداء، وقد ضبطنا logz.io لينبّه في slack عند حجم معين من سجلات مستوى الخطأ من طبقة التطبيق.


### SignalFX + Splunk + PagerDuty + Slack

أستخدم حاليًا: SignalFX وSplunk وPagerDuty وSlack. لست من كبار المعجبين بـSignalFX رغم أن فريق دعمهم ودود جدًا وسريع الاستجابة. أحب Splunk (يستحق إن كنت تستطيع دفع ثمنه) وPagerDuty وSlack.

كنت أستخدم حزمة TICK حيث كان الحرف C في الواقع G، أي Grafana، مع أنني استخدمت Chronograf قليلًا. كان ذلك رائعًا لكن إدارته مؤلمة. إنها معضلة SaaS مقابل الاستضافة الذاتية الكلاسيكية.

استخدمت DataDog وNew Relic وGraylog وELK وBugSnag. أحب DataDog وNew Relic كثيرًا، وGraylog جيد إلى حد كبير. لست من المعجبين الكبار بـELK. BugSnag لطيف، وأشعر فعلًا بأن تتبّع الأخطاء/الاستثناءات بديل جيد جدًا لمراقبة السجلات الكاملة في حالات كثيرة.


### ELK + Prometheus + Grafana

مثل غيرنا، نستخدم ELK للسجلات وPrometheus+Grafana لكل شيء آخر.

صيانة هذا الإعداد سهلة إن سمحت لنفسك بفقدان البيانات أحيانًا. فمثلًا إذا دخلت قاعدة بيانات ElasticSearch لدينا في حالة تعطل (وهذا يحدث كل 2-3 أشهر لدينا للأسف) فلا نكترث لـHA، بل نتخلص من البيانات ونمضي في حياتنا. وإن كنت تحتاج حقًا إلى HA أو احتفاظ طويل الأمد، فحظًا موفقًا.


### Datadog + Prometheus + Grafana

أعددت Datadog بنظام شهر بشهر لأنه حين وصلت إلى هنا لم تكن هناك مراقبة ولا تنبيهات. لم يكن يُراقَب سوى موقعين من مواقعنا كل 5 دقائق للتحقق من التوافر. Datadog هو بلا منازع الأسهل إعدادًا. وحين أنتهي من معالجة جميع المشكلات الأخرى سأنتقل إلى Prometheus+Grafana. لم أحسم أمر إدارة السجلات بنسبة 100% بعد.

### Nagios + ELK

لدينا أكثر من 100 منتج ندعمه.

للبيئات المحلية (on-prem) هو في الغالب Nagios وELK. أما للسحابة فننتقل من DataDog إلى NewRelic.


### Datadog مقابل Site24x7 + StatusCake + PagerDuty + SumoLogic + Slack

كنا نستخدم datadog لكننا وجدناه باهظ التكلفة جدًا لاحتياجاتنا. لا تفهمني خطأ، إنه مذهل لكن له تكلفة ضخمة. استطعنا إعداد site24x7.com باشتراك سنوي يعادل نحو 2-3 أشهر من تكلفة DD.

حزمة المراقبة لدينا:

Site24x7 - APM ومراقبة عناوين URL الخارجية ومراقبة تدفق بريد SMTP وانتهاء صلاحية SSL ومراقبة العمليات.

StatusCake - لمراقبة عناوين URL وتأكيدها - هو نسختنا الاحتياطية تحسبًا لأن يفوّت site24x7 شيئًا (وهو لا يفعل) لكن SC أكثر مرونة لمراقبة المنافذ والخدمات الخارجية بحسب احتياجاتنا.

كلتا الأداتين تصعّدان إلى PagerDuty، ثم نتلقى التصعيدات في slack.

SumoLogic - لمراقبة السجلات (أداة رائعة لكنها معقدة قليلًا لاحتياجاتنا)

ومن slack نستطيع الإقرار بالتنبيه أو معالجته.

ولدينا بعد ذلك كثير من أتمتة site24x7 التي تتصل بـcommando.io لما نسميه «BedOps»، حيث عند إطلاق تنبيه نشغّل بضعة نصوص برمجية أو أتمتات في محاولة لمعالجة الموقف (في 99% من الأحيان تبقينا الأتمتة مع نصوصنا بعيدين عن المتاعب).

ولدينا كتيبات تشغيل داخلية في قاعدة معارفنا للحالات التي تفشل فيها الأتمتات أو عندما يكون هناك أمر خارج النطاق يحتاج إلى إصلاح.


### Prometheus + AlertManager + Grafana + Stackdriver

Prometheus (Operator) / AlertManager / Grafana للمقاييس في عناقيد GKE وأجهزتنا الافتراضية.

Google Stackdriver للسجلات (لأنه مضمَّن ومفعَّل افتراضيًا وهو كافٍ لاحتياجاتنا حاليًا).


### Zabbix

Zabbix لكل شيء. لا حاجة إلى برمجيات إضافية.
