# میٹرکس، مانیٹرز، الرٹس

فہرست:

* [خلاصہ](#خلاصہ)
  * [مسئلہ](#مسئلہ)
  * [فیصلہ](#فیصلہ)
  * [حالت](#حالت)
* [تفصیلات](#تفصیلات)
  * [مفروضات](#مفروضات)
  * [پابندیاں](#پابندیاں)
  * [مؤقف](#مؤقف)
  * [دلیل](#دلیل)
  * [مضمرات](#مضمرات)
* [متعلقہ](#متعلقہ)
  * [متعلقہ فیصلے](#متعلقہ-فیصلے)
  * [متعلقہ تقاضے](#متعلقہ-تقاضے)
  * [متعلقہ آرٹیفیکٹس](#متعلقہ-آرٹیفیکٹس)
  * [متعلقہ اصول](#متعلقہ-اصول)
* [نوٹس](#نوٹس)
  * [آزاد متنی پیغامات بمقابلہ ساختہ واقعاتی پیغامات](#آزاد-متنی-پیغامات-بمقابلہ-ساختہ-واقعاتی-پیغامات)
  * [Graylog آسان ہے](#graylog-آسان-ہے)
  * [Prometheus کو کچھ ٹیوننگ چاہیے](#prometheus-کو-کچھ-ٹیوننگ-چاہیے)
  * [AWS کی خدمات ملی جلی ہیں](#aws-کی-خدمات-ملی-جلی-ہیں)
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
  * [Datadog بمقابلہ Site24x7 + StatusCake + PagerDuty + SumoLogic + Slack](#datadog-بمقابلہ-site24x7--statuscake--pagerduty--sumologic--slack)
  * [Prometheus + AlertManager + Grafana + Stackdriver](#prometheus--alertmanager--grafana--stackdriver)
  * [Zabbix](#zabbix-1)


## خلاصہ


### مسئلہ

ہم میٹرکس، مانیٹرز اور الرٹس استعمال کرنا چاہتے ہیں، کیونکہ ہم جاننا چاہتے ہیں کہ ہماری ایپلیکیشنز کتنی اچھی کام کر رہی ہیں، اور یہ کہ کب کوئی مسئلہ ہے۔


### فیصلہ

کام جاری ہے (WIP)۔


### حالت

معلومات جمع کی جا رہی ہیں۔ ہم قابلِ فہم سرحدوں سے آغاز کر رہے ہیں: سب سے زیادہ سفارش کردہ پرانا مفت ٹول (Nagios) اور سب سے زیادہ سفارش کردہ نیا ادائیگی شدہ ٹول (New Relic)۔


## تفصیلات


### مفروضات

ہم جدید، تیز، قابلِ اعتماد، ریسپانسیو وغیرہ ویب ایپس بنانا چاہتے ہیں۔

ہم بنانے کی بجائے خریدنا چاہتے ہیں۔


### پابندیاں

ہم ایسی ٹولنگ چاہتے ہیں جو ہماری devops پائپ لائن اور ہمارے ڈپلائمنٹ کلاؤڈز کے ساتھ اچھی طرح کام کرے۔


### مؤقف

ہم اس وقت مؤقف پر تحقیق کر رہے ہیں۔


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

  
### دلیل

اب تک Nagios اور New Relic دو سرحدیں ہیں۔ Nagios سب سے پرانا، سادہ ترین، مفت، قابلِ عمل ٹول ہے۔ New Relic سب سے نئی خصوصیات والا، سب سے مکمل، ادائیگی شدہ، قابلِ عمل ٹول ہے۔ ہم ان کے جائزوں سے آغاز کریں گے۔ ضرورت کے مطابق ہم درمیانی حصے میں منتقل ہوں گے۔  

اب تک Zabbix کی بہترین سفارشات ہیں، اور وہ سب سے مکمل صلاحیتیں بھی پیش کرتا ہے۔

اب تک ELK کی اوپن سورس خود بنانے بمقابلہ خریدنے میں بہترین مقبولیت ہے۔

اب تک Prometheus + Grafana کی بہترین مقبولیت ہے۔


### مضمرات

کرنا باقی ہے (TODO)۔


## متعلقہ


### متعلقہ فیصلے

انتخاب قابلِ جانچ ہونے، ٹیلی میٹری اور غالباً دیگر سسٹمز، جیسے کسٹمر سروس، سائٹ کی قابلِ اعتمادی انجینئرنگ وغیرہ، کو متاثر کریں گے۔


### متعلقہ تقاضے

کرنا باقی ہے (TODO)۔


### متعلقہ آرٹیفیکٹس

کرنا باقی ہے (TODO)۔


### متعلقہ اصول

آسانی سے واپس لیا جا سکتا ہے۔

رفتار کی ضرورت۔


## نوٹس


ایک کافی اچھا اوپن سورس اسٹیک یہ ہے:

* میٹرکس اور میٹرکس پر مبنی الرٹنگ کے لیے Prometheus

* میٹرکس دکھانے کے لیے Grafana

* لاگز اور ساختہ واقعات کے لیے Elasticsearch/Logstash/Kibana (ELK)

* موبائل اطلاعات کے لیے Pushover


### آزاد متنی پیغامات بمقابلہ ساختہ واقعاتی پیغامات

آزاد متنی پیغامات: مثلاً وہ بے ترتیب چیزیں جو آپ کو /var/log/messages میں ملیں گی، اور وہ جو ایپلیکیشن دانستہ طور پر بناتی ہے۔ یہ پیغامات مشین پر ہونے والی دوسری چیزوں، جیسے میموری ختم ہونا یا ہارڈ ویئر کی غلطیاں، کی نشاندہی کے لیے مفید ہیں، لیکن ان میں بہت کچرا ہوتا ہے۔ 

ساختہ واقعاتی پیغامات: ایپلیکیشن کے بنائے ہوئے، اوصاف کے مقررہ یا متحرک سیٹ کے ساتھ، مثلاً HTTP درخواست کا لاگ، حسابی لاگ، صارف کا لاگ اِن۔

عمومی طور پر ہر درخواست کی تفصیلات کو اس طرح لاگ کرنا اچھا ہے کہ آپ اوصاف کی بنیاد پر گہرائی میں جا سکیں۔ لہٰذا ہر چیز میں مثلاً userid یا sessionid شامل کرنے سے آپ سراغ لگا سکتے ہیں۔ صریح ٹریسنگ بھی ظاہر ہے اچھی ہے۔ اس کے لیے ELK استعمال کرنا کچھ غریب آدمی کا https://www.honeycomb.io/ ہے۔


### Graylog آسان ہے

میرے تجربے میں Graylog کھڑا کرنا آسان ہے۔



### Prometheus کو کچھ ٹیوننگ چاہیے


میں میٹرکس کے لیے عموماً Prometheus سے مطمئن ہوں۔ الرٹنگ کو کچھ ٹیوننگ چاہیے، لیکن کافی اچھی ہے۔ یہ آپ کی ایپلیکیشن پر منحصر ہے۔ میرا خیال ہے کہ بنیادی وجوہات کی بجائے حتمی صارف کو نظر آنے والی حالتوں پر الرٹ کرنا بہتر ہے۔ مثلاً صفحہ لوڈ ہونے کا وقت اچھا ہے، فی سیکنڈ درخواستوں کی تعداد نہیں۔ اگرچہ فی سیکنڈ صفر درخواستیں اشارہ دیتی ہیں کہ کچھ غلط ہے۔

سروس کا فائدہ یہ ہے کہ وہ فوری استعمال کے لیے اضافی ذہانت پیش کرتی ہیں۔ مجھے عموماً Datadog پسند ہے۔ اگر آپ کے پاس بہت ڈیٹا ہو تو سروسز خوفناک حد تک مہنگی ہو سکتی ہیں، اور بعض اوقات ان کے قیمتوں کے ماڈل کلاؤڈ دوست نہیں ہوتے، مثلاً فی انسٹینس چارج کرنا جبکہ انسٹینسز متحرک ہیں۔ ان سروسز کے درمیان بھی فرق ہے جہاں ہر درخواست ادائیگی کرنے والے صارف کی طرف سے آتی ہے اور وہ جو اشتہارات سے متعلق ہیں، جس کی وجہ سے درخواستوں کا صرف چھوٹا فیصد آپ کو رقم دیتا ہے۔ آپ کے پاس بہت ڈیٹا اور بہت زیادہ بجٹ نہ ہونے کی صورت ہو سکتی ہے۔

میں کچھ ایسی سروسز پر کام کرتا ہوں جنہیں روزانہ 1 ارب درخواستیں ملتی ہیں، اس لیے اپنی مانیٹرنگ اور لاگنگ ہوسٹ کرنا معنی رکھتا ہے۔ اگر آپ کے حجم کم ہیں تو ہوسٹ کردہ سروسز آسان ہیں۔


### AWS کی خدمات ملی جلی ہیں

AWS خدمات کے ساتھ میرا تجربہ ملا جلا رہا ہے۔ ان کی Elasticsearch سروس ناپائیدار رہی ہے، اس لیے ہم اس کے لیے اپنے انسٹینسز چلاتے ہیں۔ CloudWatch میٹرکس مہنگے ہیں، اس لیے ہم عموماً انہیں ایپلیکیشن کی بجائے صرف “انفراسٹرکچر” سطح کے میٹرکس کے لیے استعمال کرتے ہیں، یعنی صحت سے متعلق میٹرکس جہاں AWS انسٹینس پر چلنے والے سافٹ ویئر سے بہتر جان سکتا ہے کہ کیا ہو رہا ہے۔ CloudWatch Logs کی اپ ڈیٹ سست ہو سکتی ہے اور ان میں اتنا زیادہ میٹا ڈیٹا نہیں ہوتا۔ ELK چلانا اس میں مدد کرتا ہے۔ اگر مجھے واقعی ریئل ٹائم ڈیٹا چاہیے ہو تو لاگز کے لیے Kafka کو ٹرانسپورٹ کے طور پر استعمال کرنا بہتر ہے۔ یہ Logstash میں کافی اچھی طرح سپورٹڈ ہے۔ Kafka کلسٹر کا انتظام البتہ کمزور دل والوں کے لیے نہیں، بہت ساری بے نقاب پلمبنگ ہے۔


### Kafka

تبصرہ: Kafka کبھی کبھی بہت پیچیدہ ہو سکتا ہے، یا Kafka چٹان کی طرح ٹھوس ہو سکتا ہے کہ آپ تقریباً بھول جاتے ہیں کہ وہ وہاں سب کچھ باندھ رہا ہے۔ 


تبصرہ: Kafka ٹھوس رہا ہے، لیکن اسے چالو کرنے میں حیران کن حد تک کام لگا۔ میں اسے ریلیشنل ڈیٹا بیس کی طرح سمجھتا ہوں لیکن آپ صرف “طبعی” تہہ پر کام کر رہے ہوتے ہیں، مثلاً ٹیبل اسپیسز، فائلیں اور پارٹیشنز۔ ابتدا میں کچھ ایسے اوقات تھے جب انتظامی افادیتوں کی کمی تھی، اور ہمیں مثلاً کنزیومر گروپ ری سیٹ کرنے کے لیے پروگرام لکھنے پڑے۔ http://howfuckedismydatabase.com/nosql/

تبصرہ: ہم Kafka کو لاگ پیغامات کے “بفر” اور ایسی جگہ کے طور پر استعمال کرتے ہیں جہاں ہم متعدد سرورز سے آنے والے ڈیٹا پر ریئل ٹائم اسٹریم پروسیسنگ کر سکیں۔ اگر ہم پر DDOS حملہ ہو تو ہمیں متعدد انسٹینسز میں ڈیٹا کے تجزیے کا طریقہ چاہیے۔ اگر ہم سرورز سے براہِ راست ELK میں لاگ کر رہے ہوں تو لوڈ Elasticsearch کلسٹر کو اڑا سکتا ہے۔

تبصرہ: Kafka ہمارے لیے اچھا ہے کیونکہ اگر ہم پر DDOS حملہ ہو تو ہمیں متعدد انسٹینسز میں ڈیٹا کے تجزیے کا طریقہ چاہیے۔ اگر ہم سرورز سے براہِ راست ELK میں لاگ کر رہے ہوں تو لوڈ Elasticsearch کلسٹر کو اڑا سکتا ہے۔


تبصرہ: Kafka کم کام کرتا ہے اور زیادہ مؤثر ہے، اس لیے لوڈ کو بہتر طور پر سنبھال سکتا ہے۔ اور ہم Kafka کے کام کو قطار میں لگاتے اور دوبارہ کوشش کرتے ہیں۔ اور Kafka پر زیادہ بوجھ ان صارفین کو متاثر نہیں کرتا جو Kibana کے ساتھ انٹرایکٹو کام کرنے کی کوشش کر رہے ہوں، جیسا کہ Elasticsearch کے مشکل میں ہونے پر ہوتا۔

تبصرہ: اسٹریم پروسیسنگ زیادہ تر بدسلوکی تلاش کرتی ہے، مثلاً پورے کلسٹر میں ایک ہی IP سے ضرورت سے زیادہ ٹریفک، اور پھر پورے کلسٹر میں بلاک شیئر کرنا۔

تبصرہ: logstash-output-kafka پلگ اِن البتہ اس وقت کافی ناقابلِ اعتماد ہے۔ میں اس کے GitHub issues صفحے پر کئی مسائل سے متاثر ہوا ہوں، جو لگتا ہے کبھی ٹھیک نہیں ہوتے۔ میں اس کے استعمال سے ہٹ کر اپنی ایپس سے براہِ راست Kafka کو بھیجنا چاہتا ہوں۔

تبصرہ: ہم اب ایپ سے براہِ راست Kafka کو ساختہ واقعات بھیج رہے ہیں۔ بنیادی محرک لاگ ڈیٹا کو کم بار چھونا اور ڈسک کو متعدد بار پڑھنے اور لکھنے سے بچنا تھا۔ زیادہ حجم والے سسٹمز میں لاگنگ ایپ سے بھی زیادہ کام لے سکتی ہے۔ میں journald کو بھی C پروگرام سے براہِ راست لاگز بھیجنے کے قابل بنانے پر سوچ رہا ہوں۔


### Loki

Loki پر نظر رکھیں۔ یہ ابھی تیار نہیں، لیکن جب تیار ہوگا تو مجھے توقع ہے کہ یہ اس اسٹیک میں بہتر فٹ ہوگا۔ Loki، grafana labs کا بنایا ہوا لاگ ایگریگیٹر ہے، جو Prometheus جیسی ہی اسکریپنگ اور ٹیگ نحو استعمال کرتا ہے۔


### Prometheus + alertmanager + Rollbar + Graylog + Grafana

 میٹرکس کے لیے Prometheus + alertmanager۔ مجھے Prometheus بہت پسند ہے۔

لاگنگ/غلطیوں کی رپورٹنگ کے لیے Rollbar/Graylog (یہاں کچھ اوورلیپ ہے؛ چھوٹی سروس کو غالباً دونوں کی ضرورت نہیں)۔

فی الحال الرٹس صرف چند Slack چینلز میں سے ایک میں جاتے ہیں جہاں دلچسپی رکھنے والے فریقوں نے اطلاعات آن رکھی ہیں۔ اگر ہم آن کال کے بارے میں زیادہ سنجیدہ ہوتے تو وہ PagerDuty/VictorOps/وغیرہ کو جاتے۔

گراف اور ڈیش بورڈنگ کے لیے Grafana۔ یہ دیکھنے کا بھی بے صبری سے منتظر ہوں کہ ان کی آنے والی لاگنگ سہولیات Graylog کو غیر ضروری بنائیں گی یا نہیں۔


### Thanos

ہم Thanos کو اپنے HA سیٹ اپ کے فرنٹ اینڈ کے طور پر استعمال کرتے ہیں۔ یہ HA جوڑوں کی تکرار ہٹانا جانتا ہے۔

ہم فی الحال 6 ماہ کا مقامی Prometheus ڈیٹا رکھ رہے ہیں۔ یہ ہمارے لیے معقول حد تک اچھا کام کرتا ہے۔ لیکن میں ابھی اپنے Thanos سیٹ اپ میں طویل مدتی ڈیٹا اسٹوریج کے لیے بکٹ اسٹوریج متعارف کرانے کے بیچ میں ہوں۔ نظریاتی طور پر GCS اسٹوریج اس GCE اسٹینڈرڈ پرسسٹنٹ ڈسک سے تقریباً 30% سستا ہوگا جو ہم ابھی استعمال کرتے ہیں۔

ہم ابھی Prometheus ڈیٹا کا بیک اپ نہیں لیتے۔ ڈیٹا الرٹنگ کے لیے کافی ہونے سے آگے ہمارے لیے واقعی اہم نہیں۔ ہمارے مجموعی فلیٹ کی ڈپلائمنٹ سال بہ سال اتنی بدلتی ہے کہ چند ماہ سے پرانا تاریخی ڈیٹا بس اتنا دلچسپ نہیں۔ سال بہ سال کچھ بنیادی اعداد و شمار رکھنا دلچسپ ہو سکتا ہے، میں بنیادی اعداد و شمار کے ریکارڈنگ اصولوں کا سیٹ بنا کر انہیں فیڈریشن کے ساتھ محفوظ کر سکتا ہوں یا بس Thanos کو سنبھالنے دے سکتا ہوں۔

ترمیم: ایک معمولی اعلان، میں Prometheus کا ڈویلپر ہوں۔


### Prometheus HA

Prometheus میں HA نقل کے ذریعے کیا جاتا ہے: آپ متعدد جمع کنندگان چلاتے ہیں، اور متعدد سے جمع کر کے ڈیٹا کی تکرار ہٹانے کے طریقے ہیں۔

وسعت نیٹ ورک کی تقسیم اور مختلف Prometheus سے نیٹ ورک کے مختلف حصے پول کروا کر کی جاتی ہے۔

طویل مدتی اسٹوریج Prometheus کی مضبوطی نہیں، لیکن اسے influx یا timescaledb جیسی کسی چیز پر منتقل کیا جاتا ہے (جو تکنیکی طور پر HA کا خانہ بھی بھرتی ہے)۔ اس کے بارے میں ایک مضمون جو میں نے پڑھا: https://blog.timescale.com/prometheus-ha-postgresql-8de68d19b6f5?gi=7df160f10e07

میں نے طویل مدتی حصہ ابھی آزمایا نہیں کیونکہ میں ابھی صرف تجربہ کر رہا ہوں اور اسے مختصر مدتی گرافس کے لیے استعمال کر رہا ہوں جبکہ librenms طویل مدت کے لیے میرا نیٹ ورک مانیٹر کرتا ہے۔


###  Datadog + PagerDuty + Threat Stack

ہم Datadog (PagerDuty کے ساتھ) اور Threat Stack استعمال کرتے ہیں اور اس سے زیادہ خوش نہیں ہو سکتے۔ DD سے میری واحد شکایت میٹرکس اسٹوریج کی نسبتاً بلند لاگت ہے۔


### Zabbix

تقریباً ہر چیز کی مانیٹرنگ کے لیے حسبِ ضرورت اسکرپٹس کے ساتھ Zabbix۔ جادو کی طرح کام کرتا ہے۔


### Outlyer

میں Outlyer استعمال کر رہا ہوں، لیکن مجھے اعلان کرنا چاہیے کہ میں یہاں کام کرتا ہوں، اور اپنی ہی مصنوعات استعمال کرنا لازمی ہے۔

بہتری کے لیے اب بھی Graylog، Sentry اور Statuscake چاہیے۔

جانبدار لگ سکتا ہے، لیکن Nagios اور دیگر مانیٹرنگ سسٹمز خوشی سے اندرونی طور پر چلانے کے بعد، میں کسی بھی نئی نوکری میں ہوسٹ کردہ حل خریدتا اور وہ تکلیف دوسرے کے سپرد کر دیتا۔


### Nagios + Nagiosgraph

ہم تمام مانیٹرنگ اور الرٹنگ کے لیے Nagios چلاتے ہیں۔ الرٹس ای میل (انتباہات اور اہم اطلاعات) اور سنائی دینے والی ایپ اطلاعات (اہم الرٹس کے لیے) کے ذریعے ہوتے ہیں۔

بصری کاری کے لیے Nagiosgraph استعمال ہوتا ہے۔

یہ سیٹ اپ ہمیں اپنے ماحول میں جو ہو رہا ہے اس کے بارے میں جامع طور پر باخبر رکھنے میں بہت مؤثر رہا ہے۔ ہم تقریباً 110 مشن کریٹیکل سرورز اور تقریباً 760 ڈیٹا پوائنٹس چلاتے اور مانیٹر کرتے ہیں، اور سات سال سے زیادہ سے یہ صبح کا نظام قائم ہے۔

میں کسی وقت Graylog یا ELK کے ساتھ لاگز بھی جمع کرنا چاہوں گا۔


### Prometheus + Grafana + AlertManager

شاندار Prometheus Operator helm chart کے ذریعے Prometheus + Grafana + AlertManager۔ لاگ اب بھی LogDNA birch پلان کو جاتا ہے کیونکہ ہم نے دیکھا کہ GKE پر ہمارے معمولی کم از کم 3 زیادہ سے زیادہ 5 نوڈز کے لیے ELK بہت بھاری ہے۔


### DataDog + Sentry + PagerDuty.

میں اپنے تمام مانیٹرنگ حل خود چلاتا تھا، Nagios، Icinga، Zabbix، ELK، Greylog2، Influx اور بہت سے دوسرے ٹولز سمیت ہر قسم کا سافٹ ویئر استعمال کرتے ہوئے، لیکن سچ یہ ہے کہ اپنا مانیٹرنگ انفراسٹرکچر چلانے میں بہت زیادہ کوشش لگتی ہے، خاص طور پر جب آپ کسی اور کو اتنی کم شرحوں پر یہ کام آپ کے لیے کرنے کی ادائیگی کر سکتے ہوں!

دوسروں کو مانیٹرنگ انفراسٹرکچر چلانے کی ادائیگی کرنا میرے کلائنٹس کو مانیٹرنگ کی مانیٹرنگ کی بجائے اپنے پلیٹ فارمز چلانے پر توجہ دینے کے لیے آزاد کرتا ہے، یعنی اپنے پلیٹ فارم کے استحکام سے انہیں جو قدر ملتی ہے وہ بطور سروس مانیٹرنگ کی کسی بھی لاگت سے کہیں بڑھ کر ہے۔


### Sensu + Graphite + ELK

میری کمپنی خود ہوسٹ کردہ چیزوں کی بڑی حامی ہے۔

Sensu -> PagerDuty

Graphite/Grafana

ELK (Elasticsearch, Logstash, Kibana)


### Prometheus + Alertmanager

الرٹنگ کے لیے Prometheus + Alertmanager، میری ٹیم کا ماننا ہے کہ سادہ مانیٹرنگ اچھی مانیٹرنگ ہے۔

لاگنگ اور ٹریسنگ جیسے دوسرے سسٹمز تشخیص کے لیے بھرپور سیاق و سباق دیں گے جب آن کال شخص کو الرٹ ملے، لیکن ہم ان پر الرٹنگ کبھی نہیں بناتے۔


### Sensu + Grafana + Graylog + Kibana + NewRelic.

Sensu، grafana، graylog، kibana، newrelic۔


### Prometheus + Circonus

Prometheus سے لیس سروسز => Circonus تجزیات اور بصری کاری


### icinga2 + VictorOps + NewRelic + Sentry + Slack

ہم درج ذیل خدمات استعمال کر رہے ہیں:

مانیٹرنگ کے لیے icinga2 اور الرٹنگ کے لیے VictorOps

سروس کی تفصیلی مانیٹرنگ کے لیے NewRelic

سروس میں غلطیوں کے سراغ کے لیے Sentry

Slack/ای میل الرٹنگ کا حصہ ہے جو NewRelic یا icinga2 سے متحرک ہوتا ہے


### AppDynamics + Papertrail + PagerDuty + Healthchecks.io + Stackdriver

AppDynamics

Papertrail

PagerDuty

Healthchecks.io

Stackdriver


### icinga2 + elasticsearch

تجزیے کے لیے elasticsearch انضمام اور گرافس کے لیے graphite+grafana انضمام کے ساتھ icinga2۔

icinga2 میں اطلاق کے اصولوں کی لچک کی بدولت، ڈویلپرز صرف وہی سروسز دیکھ سکتے ہیں جن کی اطلاعات انہیں ملتی ہیں۔

اور icinga2 director کے ذریعے پروگرامرز آسانی سے اپنی جانچیں متعین کر سکتے ہیں (جو وہ کرتے ہیں، ہر چند دن بعد - 100 جانچیں نکلتی ہیں، 100 دوسری جانچیں آتی ہیں) بڑے پیمانے پر بغیر کسی جھنجھٹ کے۔


### DataDog + New Relic + ELK + EFK + Sentry + Alertmanager + VictorOps

ہمارے پاس اب کیا ہے:

میٹرکس کے لیے DataDog

ایپلیکیشن مانیٹرنگ کے لیے New Relic

لاگز کے لیے ELK (Elastic Search + Logstash + Kibana)

استثنا لاگ کرنے کے لیے Sentry (خود ہوسٹ کردہ)

الرٹنگ کے لیے ای میلز + Slack + VictorOps (شدت کی بنیاد پر)

ہم کیا چاہتے ہیں:

میٹرکس کے لیے Prometheus (بصری کاری کے لیے Grafana)

ایپلیکیشن مانیٹرنگ کے لیے New Relic (غالباً Elastic Search APM)

لاگنگ کے لیے EFK (elastic search + fluentd + kibana)۔ غالباً جب تک ہم وہاں پہنچیں Grafana کا Loki پروڈکشن کے لیے تیار ہو جائے گا

استثناؤں کے لیے Sentry

الرٹس کے لیے Alertmanager + ای میل + VictorOps


### Wavefront + Scalyr + PagerDuty + Stackstorm + Slack

Wavefront + Scalyr + PagerDuty + Stackstorm + Slack (اعلان: VMware میں کام کرتا ہوں)


### Telegraf + Prometheus + InfluxDB + Grafana

سرور میٹرکس جیسے CPU، ڈسک، میموری اور نیٹ ورک کے لیے Telegraf۔ ہم اپنے نیٹ ورک آلات کی SNMP مانیٹرنگ کے لیے بھی Telegraf استعمال کرتے ہیں۔

ایپلیکیشن میٹرکس کے لیے Prometheus۔ ہم اپنی ایپلیکیشن میں صحت کی جانچیں کوڈ کرتے ہیں جنہیں Prometheus اسکریپ کرتا ہے۔

ٹائم سیریز اسٹوریج کے لیے InfluxDB۔ ہمارا Telegraf ڈیٹا یہاں بھیجا جاتا ہے۔

ڈیش بورڈز اور الرٹس کے لیے Grafana۔ الرٹنگ انجن بہت مضبوط نہیں، لیکن کام چلا لیتا ہے۔ ہم الرٹس Slack میں بھی بھیجتے ہیں۔

جو میرے پاس ابھی نہیں وہ مرکزی لاگنگ حل ہے۔ ELK طاقتور ہے لیکن سیٹ اپ اور انتظام مشکل ہے، اور میں ایسے مفت متبادل نہیں جانتا جو دیکھنے کے لیے کافی قریب ہوں۔


### Sematext + Logagent + Experience

میٹرکس، لاگز، ٹریسز کے لیے، جلد ہی حقیقی صارف کی مانیٹرنگ کے لیے بھی Sematext۔ میری ناقص رائے میں N مختلف ٹولز/خدمات استعمال کرنے سے سادہ/سستا۔

لاگز بھیجنے کے لیے ہم rsyslog استعمال کرتے تھے، پھر Logagent پر آ گئے۔

فرنٹ اینڈ کریش رپورٹنگ کے لیے ہم Sentry استعمال کرتے ہیں، لیکن جلد Experience پر منتقل ہوں گے۔

اعلان: میں Sematextan ہوں۔


### Azure Monitor/Analytics + OpsGenie

کاش Log Analytics کا انٹرفیس بہتر ہوتا۔ ہم splunk سے ہٹ رہے ہیں، جس میں گھومنا بہت آسان تھا۔


### Prometheus + Alertmanager + Grafana + Splunk + PagerDuty

Prometheus، Alertmanager، Grafana، Splunk، PagerDuty

آپ واقعی اپنا اطلاعاتی نظام چلانا نہیں چاہتے۔ آپ Splunk کو ELK سے بدل سکتے ہیں جب تک آپ کی سیکیورٹی ٹیم Splunk کو ترجیح نہ دے۔


### Telegraf + Prometheus + Grafana + Alertmanager

جمع کنندہ کے طور پر Telegraf، مانیٹرنگ اور الرٹنگ کے لیے Prometheus + Alertmanager، اہم الرٹس کے لیے slack چینلز اور pagerduty کے ساتھ ضم۔ ہوسٹ میٹرکس کی بصری کاری کے لیے Grafana۔


### Prometheus + Grafana + Cloudwatch + sentry + kibana + elasticsearch

میٹرکس + الرٹس کے لیے Prometheus

Prometheus ڈیش بورڈز کے لیے Grafana

Prometheus انسٹینسز کی مانیٹرنگ کرتا Cloudwatch

استثنا کے سراغ کے لیے sentry

kibana + elasticsearch

graylog

بیچ/cronjobs کے لیے prometheus Push Gateway

ایک Prometheus انسٹینس سے دوسرے میں میٹرکس “پش/فارورڈ” کرنے کے لیے SOP https://github.com/rapidloop/sop

کلائنٹس یا تو Prometheus کلائنٹس استعمال کرتے ہیں۔ ہم کلائنٹ کی طرف opencensus.io استعمال کرنے کی کوشش کرتے ہیں


### PagerDuty + Monitis

PagerDuty + Monitis۔ نیز کچھ سروسز کی صحت جانچنے کے لیے کچھ حسبِ ضرورت Azure Functions۔

اس سال Prometheus اور Grafana متعارف کرانے کی امید


### Prometheus + Grafana + Bosun

ٹائم سیریز ڈیٹا کے ذخیرے کے لیے Prometheus۔ بصری کاری کے لیے Grafana۔ الرٹ مینجمنٹ کے لیے Bosun۔


### Azure Monitor/Analytics/Insights/Dashboards

صرف Azure کی دکان: Azure Monitor، Log Analytics، App Insights، Azure Dashboards + Pager Duty


### Grafana + Monitis + OpsGenie + Slack

Prometheus کے ذریعے Kubernetes میں کنٹینر سروسز کی مانیٹرنگ کے لیے Grafana

بنیادی طور پر ویب APIs اور ویب ایپلیکیشنز کی اینڈ ٹو اینڈ سروس مانیٹرنگ کے لیے Monitis

الرٹ مینجمنٹ کے لیے OpsGenie

اپنے سسٹمز سے حالت کی معلومات حاصل کرنے کے لیے Slack


### Checkly + AppOptics + Cloudwatch + Heroku + Pagerduty + Papertrail

طویل عرصے کا (dev)ops انجینئر یہاں۔ Nagios پر پلا بڑھا۔ اپنے خود مالی معاونت والے SaaS https://checklyhq.com کے بارے میں آراء سن کر خوشی ہوگی۔ ہم کافی گہری الرٹنگ کے ساتھ API مانیٹرنگ اور سائٹ ٹرانزیکشن مانیٹرنگ کرتے ہیں۔

میں نے Checkly اس لیے شروع کیا کیونکہ API کے شعبے میں فعال / مصنوعی مانیٹرنگ کچھ محدود (اور مہنگی) تھی۔ براؤزر پر مبنی / اسکرپٹ شدہ مانیٹرنگ اور بھی زیادہ ملکیتی اور مہنگی ہے۔ ہم Puppeteer استعمال کرتے ہیں اور قیمتیں جتنی ہو سکے کم رکھتے ہیں۔

ہمارا مانیٹرنگ اسٹیک:

Checkly (اپنا کھانا خود کھاتے ہوئے...)

AppOptics (حسبِ ضرورت گرافنگ)

SMS پیغامات کے لیے AWS Cloudwatch اور SNS۔

اندرونی Heroku الرٹنگ۔

Pagerduty

Papertrail


### Instana + Logz.io + slack

Instana ہمیں انفراسٹرکچر کے مسائل یا کارکردگی کے بگاڑ کے بارے میں slack میں الرٹ کرتا ہے، اور ہم نے logz.io کو اس طرح ترتیب دیا ہے کہ ایپلیکیشن کی تہہ سے غلطی کی سطح کے لاگز کے ایک خاص حجم پر slack میں الرٹ کرے۔


### SignalFX + Splunk + PagerDuty + Slack

فی الحال استعمال کر رہے ہیں: SignalFX، Splunk، PagerDuty اور Slack۔ میں SignalFX کا بڑا مداح نہیں اگرچہ ان کی سپورٹ ٹیم بہت دوستانہ اور فوری جواب دینے والی ہے۔ مجھے Splunk (اگر آپ ادا کر سکیں تو قابلِ قدر)، PagerDuty اور Slack پسند ہیں۔

میں TICK اسٹیک استعمال کرتا تھا جہاں C دراصل G تھا، یعنی Grafana، اگرچہ میں نے Chronograf تھوڑا استعمال کیا۔ وہ شاندار تھا لیکن اس کا انتظام تکلیف دہ تھا۔ کلاسک SaaS بمقابلہ خود ہوسٹنگ کی کشمکش۔

میں نے DataDog، New Relic، Graylog، ELK اور BugSnag استعمال کیے ہیں۔ مجھے DataDog اور New Relic بہت پسند ہیں، Graylog کافی اچھا ہے۔ میں ELK کا بڑا مداح نہیں۔ BugSnag اچھا ہے، مجھے دراصل لگتا ہے کہ غلطیوں/استثناؤں کا سراغ بہت سی صورتوں میں مکمل لاگ مانیٹرنگ کا اچھا نعم البدل ہے۔


### ELK + Prometheus + Grafana

دوسروں کی طرح، ہم لاگز کے لیے ELK اور باقی ہر چیز کے لیے Prometheus+Grafana استعمال کرتے ہیں۔

اس سیٹ اپ کی دیکھ بھال آسان ہے اگر آپ خود کو کبھی کبھار ڈیٹا کھونے کی اجازت دیں۔ مثلاً اگر ہمارا ElasticSearch ڈیٹا بیس بگڑ جائے (جو بدقسمتی سے ہمارے ساتھ ہر 2-3 ماہ بعد ہوتا ہے) تو ہم HA کی پروا نہیں کرتے اور اس کی بجائے ڈیٹا پھینک کر اپنی زندگی میں آگے بڑھ جاتے ہیں۔ اگر آپ کو لازماً HA یا طویل مدتی برقراری چاہیے تو خوش قسمتی۔


### Datadog + Prometheus + Grafana

میں نے Datadog ماہ بہ ماہ بنیاد پر سیٹ اپ کیا کیونکہ جب میں یہاں آیا تو کوئی مانیٹرنگ اور الرٹنگ نہیں تھی۔ ہماری صرف چند سائٹس ہر 5 منٹ بعد اپ ٹائم کے لیے مانیٹر ہو رہی تھیں۔ Datadog بلا شبہ سیٹ اپ کرنے میں سب سے آسان ہے۔ جب میں باقی تمام مسائل حل کر لوں گا تو Prometheus+Grafana پر چلا جاؤں گا۔ لاگ مینجمنٹ پر ابھی 100% فیصلہ نہیں ہوا۔

### Nagios + ELK

ہم 100+ مصنوعات کو سپورٹ کرتے ہیں۔

آن پریم (on-prem) کے لیے زیادہ تر Nagios اور ELK ہے۔ کلاؤڈ کے لیے ہم DataDog سے NewRelic پر منتقل ہو رہے ہیں۔


### Datadog بمقابلہ Site24x7 + StatusCake + PagerDuty + SumoLogic + Slack

ہم datadog استعمال کرتے تھے لیکن اسے اپنی ضروریات کے لیے بہت مہنگا پایا۔ مجھے غلط نہ سمجھیں، یہ شاندار ہے لیکن اس کی بہت بڑی لاگت ہے۔ ہم DD کی 2-3 ماہ کی لاگت کے برابر سالانہ سبسکرپشن کے ساتھ site24x7.com سیٹ اپ کرنے میں کامیاب رہے۔

ہمارا مانیٹرنگ اسٹیک:

Site24x7 - APM، بیرونی URL مانیٹرنگ، SMTP میل فلو مانیٹرنگ، ssl کی میعاد ختم ہونا اور پراسس مانیٹرنگ۔

StatusCake - URL مانیٹرنگ اور تصدیق کے لیے - یہ ہمارا بیک اپ ہے اگر site24x7 کچھ چھوڑ دے (وہ نہیں چھوڑتا) لیکن SC ہماری ضروریات کے لیے بیرونی پورٹ اور سروس مانیٹرنگ کے لیے زیادہ لچکدار ہے۔

دونوں ٹولز PagerDuty پر اوپر بھیجتے ہیں، اور پھر ہمیں اپنی ایسکلیشنز slack میں ملتی ہیں۔

SumoLogic - لاگ مانیٹرنگ کے لیے (یہ شاندار ٹول ہے لیکن ہماری ضروریات کے لیے کچھ پیچیدہ)

slack سے ہم الرٹ کو تسلیم (ack) یا درست کر سکتے ہیں۔

پھر ہمارے پاس بہت سی site24x7 خودکاریاں ہیں جو commando.io سے جڑتی ہیں اس کے لیے جسے ہم ‘BedOps’ کہتے ہیں - جہاں الرٹ متحرک ہونے پر ہم صورتحال کے ازالے کی کوشش میں چند اسکرپٹس یا خودکاریاں چلاتے ہیں (99% وقت خودکاری + ہمارے اسکرپٹس ہمیں مصیبت سے دور رکھتے ہیں)۔

ہمارے پاس اپنے KB میں اندرونی رن بُکس ہیں جب خودکاریاں ناکام ہوں یا کوئی ایسی چیز ہو جو دائرے سے باہر ہو اور ٹھیک کرنی ہو۔


### Prometheus + AlertManager + Grafana + Stackdriver

ہمارے GKE کلسٹرز اور VMs میں میٹرکس کے لیے Prometheus (Operator) / AlertManager / Grafana۔

لاگز کے لیے Google Stackdriver (کیونکہ یہ شامل اور ڈیفالٹ طور پر فعال ہے اور فی الحال ہماری ضروریات کے لیے کافی ہے)۔


### Zabbix

ہر چیز کے لیے Zabbix۔ کسی اضافی سافٹ ویئر کی ضرورت نہیں۔
