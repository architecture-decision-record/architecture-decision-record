# מדדים, ניטור והתראות

תוכן העניינים:

* [סיכום](#סיכום)
  * [בעיה](#בעיה)
  * [החלטה](#החלטה)
  * [מצב](#מצב)
* [פרטים](#פרטים)
  * [הנחות](#הנחות)
  * [אילוצים](#אילוצים)
  * [עמדות](#עמדות)
  * [טיעון](#טיעון)
  * [השלכות](#השלכות)
* [נושאים קשורים](#נושאים-קשורים)
  * [החלטות קשורות](#החלטות-קשורות)
  * [דרישות קשורות](#דרישות-קשורות)
  * [תוצרים קשורים](#תוצרים-קשורים)
  * [עקרונות קשורים](#עקרונות-קשורים)
* [הערות](#הערות)
  * [הודעות טקסט חופשיות לעומת הודעות אירוע מובנות](#הודעות-טקסט-חופשיות-לעומת-הודעות-אירוע-מובנות)
  * [Graylog קל יותר](#graylog-קל-יותר)
  * [Prometheus דורש קצת כוונון](#prometheus-דורש-קצת-כוונון)
  * [שירותי AWS מעורבים](#שירותי-aws-מעורבים)
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
  * [Datadog לעומת Site24x7 + StatusCake + PagerDuty + SumoLogic + Slack](#datadog-לעומת-site24x7--statuscake--pagerduty--sumologic--slack)
  * [Prometheus + AlertManager + Grafana + Stackdriver](#prometheus--alertmanager--grafana--stackdriver)
  * [Zabbix](#zabbix-1)


## סיכום


### בעיה

אנו רוצים להשתמש במדדים, בניטור ובהתראות, כי אנו רוצים לדעת עד כמה היישומים שלנו עובדים היטב, ולדעת מתי יש בעיה.


### החלטה

עבודה בתהליך.


### מצב

אוספים מידע. אנו מתחילים בקצוות הסבירים של הספקטרום: הכלי החינמי הישן שהכי מומלץ (Nagios) והכלי בתשלום החדש שהכי מומלץ (New Relic).


## פרטים


### הנחות

אנו רוצים ליצור יישומי ווב מודרניים, מהירים, אמינים, רספונסיביים וכדומה.

אנו רוצים לקנות ולא לבנות.


### אילוצים

אנו רוצים כלים שעובדים היטב עם צינור ה-devops שלנו ועם ענני הפריסה שלנו.


### עמדות

אנו חוקרים כעת עמדות.


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

  
### טיעון

עד כה, Nagios ו-New Relic הם קצוות הספקטרום. Nagios הוא הכלי הישן ביותר, הפשוט ביותר, החינמי וברת הקיימא. New Relic הוא הכלי החדש ביותר מבחינת יכולות, השלם ביותר, בתשלום וברת הקיימא. נתחיל בהערכות של אלה. לפי הצורך, נעבור אל תוך הספקטרום.  

עד כה, ל-Zabbix יש את ההמלצות הטובות ביותר, והוא גם מציע את היכולות השלמות ביותר.

עד כה, ל-ELK יש את הפופולריות הטובה ביותר של בנייה במקום קנייה בקוד פתוח.

עד כה, ל-Prometheus + Graphana יש את הפופולריות הטובה ביותר.


### השלכות

לעשות.


## נושאים קשורים


### החלטות קשורות

הבחירות ישפיעו על יכולת הבדיקה, על טלמטריה וכנראה על מערכות אחרות כמו שירות לקוחות, הנדסת אמינות אתרים וכדומה.


### דרישות קשורות

לעשות.


### תוצרים קשורים

לעשות.


### עקרונות קשורים

הפיך בקלות.

צורך במהירות.


## הערות


ערימת קוד פתוח די טובה היא:

* Prometheus למדדים והתראות מבוססות מדדים

* Grafana להצגת מדדים

* Elasticsearch/Logstash/Kibana (ELK) ליומנים ואירועים מובנים

* Pushover להתראות לנייד


### הודעות טקסט חופשיות לעומת הודעות אירוע מובנות

הודעות טקסט חופשיות: למשל, מהסוג של דברים אקראיים שתמצאו ב-/var/log/messages, ודבר שנוצר בכוונה על ידי היישום. ההודעות שימושיות לזיהוי דברים אחרים שקורים במכונה כמו חוסר זיכרון או שגיאות חומרה, אבל יש בהן הרבה זבל. 

הודעות אירוע מובנות: נוצרות על ידי היישום, עם קבוצה קבועה או דינמית של מאפיינים, למשל יומן בקשות HTTP, יומן הנהלת חשבונות, התחברות משתמש.

באופן כללי, נחמד לתעד פרטים על כל בקשה בצורה שמאפשרת להתעמק לפי מאפיינים. לכן הוספת userid או sessionid, למשל, לכל דבר מאפשרת מעקב. גם מעקב מפורש (tracing) הוא כמובן טוב. שימוש ב-ELK לשם כך הוא מעין גרסת עני של https://www.honeycomb.io/


### Graylog קל יותר

Graylog קל יותר להקמה מניסיוני.


### Prometheus דורש קצת כוונון

אני בדרך כלל מרוצה מ-Prometheus למדדים. ההתראות דורשות קצת כוונון, אבל הן די טובות. זה תלוי ביישום שלכם. אני חושב שהכי טוב להתריע על מצבים שגלויים למשתמש הקצה, לא על סיבות בסיסיות. לדוגמה, זמן טעינת דף הוא טוב, מספר בקשות בשנייה אינו. אף ש-אפס בקשות בשנייה מצביע על כך שמשהו לא בסדר.

היתרון של שירות הוא שהם מציעים אינטליגנציה נוספת מהקופסה. אני בדרך כלל אוהב את Datadog. השירותים יכולים להיות יקרים להפחיד אם יש לכם הרבה נתונים, ולפעמים יש להם מודלי תמחור שאינם ידידותיים לענן, למשל חיוב לפי מופע, כשהמופעים דינמיים. יש גם הבדל בין שירותים שבהם כל בקשה היא ממשתמש משלם לבין כאלה הקשורים לפרסום, שבהם רק אחוז קטן מהבקשות מכניס כסף. אפשר להגיע להרבה נתונים ולא הרבה תקציב.

אני עובד על כמה שירותים שמקבלים מיליארד בקשות ביום, ולכן הגיוני לארח בעצמנו את הניטור והרישום. אם הנפחים שלכם נמוכים יותר, שירותים מתארחים קלים יותר.


### שירותי AWS מעורבים

הניסיון שלי עם שירותי AWS מעורב. שירות ה-Elasticsearch שלהם היה לא יציב, ולכן אנו מריצים מופעים משלנו עבורו. מדדי CloudWatch יקרים, ולכן בדרך כלל אנו משתמשים בהם רק למדדים ברמת "תשתית" ולא ברמת היישום, כלומר מדדים הקשורים לבריאות, שבהם AWS יכולה לדעת טוב יותר מה קורה מאשר תוכנה שרצה על המופע. CloudWatch Logs יכול להתעדכן לאט ואין בו הרבה מטא-נתונים. הרצת ELK עוזרת בכך. אם אני באמת רוצה נתונים בזמן אמת, עדיף להשתמש ב-Kafka כאמצעי ההובלה של יומנים. זה נתמך די טוב על ידי Logstash. ניהול אשכול Kafka אינו לבעלי לב חלש, אבל, יש הרבה צנרת חשופה.


### Kafka

תגובה: Kafka יכול להיות מסובך מאוד לפעמים, או ש-Kafka יכול להיות יציב כסלע ואתם כמעט שוכחים שהוא שם וקושר הכול יחד. 


תגובה: Kafka היה יציב, אבל הרצתו דרשה כמות מפתיעה של עבודה. אני חושב עליו כמו על מסד נתונים יחסי שבו עובדים רק בשכבה ה"פיזית", למשל tablespaces, קבצים ומחיצות. היו זמנים בתחילת הדרך שבהם כלי הניהול היו חסרים, והיינו צריכים לכתוב תוכניות כדי, למשל, לאפס קבוצת צרכנים. http://howfuckedismydatabase.com/nosql/

תגובה: אנו משתמשים ב-Kafka כ"חוצץ" להודעות יומן ובתור מקום שבו אפשר לבצע עיבוד זרמים בזמן אמת על נתונים שמגיעים ממספר שרתים. אם אנו חווים מתקפת DDOS, אנו צריכים דרך לנתח נתונים על פני מספר מופעים. אם אנו רושמים ישירות מהשרתים ל-ELK, העומס יכול לפוצץ את אשכול ה-Elasticsearch.

תגובה: Kafka טוב לנו כי אם אנו חווים מתקפת DDOS, אנו צריכים דרך לנתח נתונים על פני מספר מופעים. אם אנו רושמים ישירות מהשרתים ל-ELK, העומס יכול לפוצץ את אשכול ה-Elasticsearch.


תגובה: Kafka עושה פחות עבודה ויעיל יותר, ולכן הוא יכול לטפל בעומס טוב יותר. ואנו מעמידים בתור את עבודת Kafka ומנסים שוב. וכשKafka עמוס יתר על המידה זה לא משפיע על משתמשים שמנסים לעבוד באופן אינטראקטיבי עם Kibana, כפי שהיה קורה אם Elasticsearch היה מתקשה.

תגובה:  עיבוד הזרמים מחפש בעיקר ניצול לרעה, למשל יותר מדי תעבורה מכתובת IP אחת על פני כל האשכול, ואז משתפים את החסימה בכל האשכול.

תגובה: התוסף logstash-output-kafka אינו אמין למדי כרגע. נפגעתי מכמה מהבעיות בדף ה-issues שלו ב-GitHub, שנראה שאף פעם לא מתוקנות. אני רוצה להפסיק להשתמש בו ולשלוח ישירות מהיישומים שלנו ל-Kafka.

תגובה: אנו שולחים עכשיו אירועים מובנים ישירות מהיישום ל-Kafka. המניע העיקרי היה לגעת בנתוני היומן פחות פעמים ולהימנע מקריאה וכתיבה של הדיסק פעמים רבות. במערכות בנפח גבוה, רישום יכול לדרוש יותר עבודה מהיישום עצמו. אני שוקל לגרום ל-journald לשלוח גם יומנים ישירות, מתוכנית C.


### Loki

עקבו מקרוב אחרי Loki. הוא עדיין לא מוכן, אבל כשיהיה אצפה שיתאים יותר לערימה הזו. Loki הוא מאגד יומנים שיצרו grafana labs, והוא משתמש בתחביר גריפה ותגיות דומה ל-Prometheus.


### Prometheus + alertmanager + Rollbar + Graylog + Grafana

 Prometheus + alertmanager למדדים. אני אוהב את Prometheus.

Rollbar/Graylog לרישום/דיווח שגיאות (יש כאן כפילות מסוימת; שירות קטן כנראה אינו צריך את שניהם).

כרגע התראות פשוט הולכות לאחד מכמה ערוצי Slack שלגורמים מעוניינים יש בהם התראות מופעלות. אם היינו רציניים יותר לגבי כוננות, הן היו הולכות ל-PagerDuty/VictorOps וכדומה.

Grafana לגרפים וללוחות מחוונים. אני גם מצפה בכיליון עיניים לראות אם יכולות הרישום הקרובות שלהם יבטלו את הצורך ב-Graylog.


### Thanos

אנו משתמשים ב-Thanos כחזית להתקנת ה-HA שלנו. הוא יודע לבטל כפילויות של זוגות HA.

כרגע אנו שומרים 6 חודשים של נתוני Prometheus מקומיים. זה עובד די טוב עבורנו. אבל אני בדיוק באמצע פריסה של אחסון bucket להתקנת ה-Thanos שלנו לאחסון נתונים לטווח ארוך. בתיאוריה, אחסון GCS יהיה זול בכ-30% מהדיסק הקבוע הסטנדרטי של GCE שבו אנו משתמשים כרגע.

אנו לא מגבים כרגע נתוני Prometheus. הנתונים פשוט לא באמת חשובים לנו מעבר לכך שיש מספיק להתראות. הפריסה הכוללת של הצי שלנו משתנה כל כך משנה לשנה, שנתונים היסטוריים ישנים יותר מכמה חודשים פשוט לא מעניינים במיוחד. יכול להיות מעניין לקבל כמה סטטיסטיקות ליבה משנה לשנה; ייתכן שאקים קבוצת כללי הקלטה של סטטיסטיקות ליבה ואשמור אותם עם Federation או פשוט אניח ל-Thanos לטפל בזה.

עריכה: הצהרה קטנה, אני מפתח של Prometheus.


### Prometheus HA

HA ב-Prometheus נעשה על ידי שכפול; מריצים כמה פולטים (poppers) ויש דרכים לבצע שאילתה במספר מהם ולבטל כפילויות בנתונים

ההרחבה נעשית על ידי חלוקת הרשת ושיבוץ Prometheus שונים לשאול חלקים שונים של הרשת

אחסון לטווח ארוך אינו הצד החזק של Prometheus, אבל מועבר למשהו כמו influx או timescaledb (שגם הוא טכנית מסמן וי ב-HA) מאמר שקראתי על כך https://blog.timescale.com/prometheus-ha-postgresql-8de68d19b6f5?gi=7df160f10e07

עוד לא ניסיתי את החלק של הטווח הארוך כי אני עדיין רק מנסה ומשתמש בו לגרפים לטווח קצר בעוד librenms מנטר את הרשת שלי לטווח ארוך


### Datadog + PagerDuty + Threat Stack

אנו משתמשים ב-Datadog (עם PagerDuty) וב-Threat Stack ולא יכולים להיות מרוצים יותר. התלונה היחידה שלי על DD היא העלות הגבוהה יחסית של אחסון מדדים.


### Zabbix

Zabbix עם סקריפטים מותאמים לניטור כמעט הכול. עובד כמו קסם.


### Outlyer

אני משתמש ב-Outlyer, אבל אז אני חייב להצהיר שאני עובד כאן, ושימוש במוצר של עצמנו הוא חובה.

עדיין צריך את Graylog, Sentry ו-Statuscake כדי לשפר.

נשמע מוטה, אבל לאחר שהרצתי בשמחה את Nagios ומערכות ניטור אחרות באופן פנימי, הייתי קונה פתרון מתארח בכל תפקיד חדש ומוריד מעצמי את הכאב הזה.


### Nagios + Nagiosgraph

אנו מריצים את Nagios לכל הניטור וההתראות. התראות מתרחשות דרך דוא"ל (אזהרות והתראות קריטיות) והתראות קוליות ביישום (להתראות קריטיות).

Nagiosgraph משמש להצגות חזותיות.

ההתקנה הזו הייתה יעילה מאוד בהחזקתנו מעודכנים באופן מקיף במה שקורה בסביבה שלנו. אנו מריצים ומנטרים כ-110 שרתים קריטיים למשימה וכ-760 נקודות נתונים, ויש לנו את מערכת הבוקר הזו במקום יותר משבע שנים.

הייתי רוצה גם לאגד יומנים עם Graylog או ELk מתישהו.


### Prometheus + Grafana + AlertManager

Prometheus + Grafana + AlertManager באמצעות ה-helm chart המצוין של Prometheus Operator. היומן עדיין הולך לתוכנית birch של LogDNA כי שמנו לב ש-ELK כבד מדי לאשכול הצנוע שלנו של מינימום 3 ומקסימום 5 צמתים ב-GKE.


### DataDog + Sentry + PagerDuty.

פעם הרצתי את כל פתרונות הניטור שלי בעצמי באמצעות כל מיני תוכנות כולל Nagios, Icinga, Zabbix, ELK, Greylog2, Influx וכלים רבים אחרים, אבל האמת היא שיש יותר מדי מאמץ בהרצת תשתית ניטור משלכם, במיוחד כשאפשר לשלם למישהו אחר בתעריפים כל כך נמוכים שיעשה זאת בשבילכם!

תשלום לאחרים להריץ את תשתית הניטור משחרר את הלקוחות שלי להתמקד בהרצת הפלטפורמות שלהם במקום בניטור הניטור, כלומר הערך שהם מקבלים מיציבות הפלטפורמה שלהם עולה בהרבה על כל עלויות של ניטור כשירות.


### Sensu + Graphite + ELK

החברה שלי מאוד מתמקדת בדברים באירוח עצמי.

Sensu -> PagerDuty

Graphite/Grafana

ELK (Elasticsearch, Logstash, Kibana)


### Prometheus + Alertmanager

Prometheus + Alertmanager להתראות; הצוות שלי מאמין שניטור פשוט הוא ניטור טוב.

מערכות אחרות כמו רישום ומעקב יספקו הקשר עשיר לאבחון כשהכונן מקבל התראה, אבל אנחנו אף פעם לא בונים התראות על אלה.


### Sensu + Grafana + Graylog + Kibana + NewRelic.

Sensu, grafana, graylog, kibana, newrelic.


### Prometheus + Circonus

שירותים מצוידים ב-Prometheus => ניתוח והצגה חזותית של Circonus


### icinga2 + VictorOps + NewRelic + Sentry + Slack

אנו משתמשים בשירותים הבאים:

icinga2 לניטור ו-VictorOps להתראות

NewRelic לניטור מפורט של השירות

Sentry למעקב שגיאות בשירות

Slack/דוא"ל הם חלק מההתראות שמופעלות מ-NewRelic או מ-icinga2


### AppDynamics + Papertrail + PagerDuty + Healthchecks.io + Stackdriver

AppDynamics

Papertrail

PagerDuty

Healthchecks.io

Stackdriver


### icinga2 + elasticsearch

icinga2 עם שילוב elasticsearch לניתוח ושילוב graphite+grafana לגרפים.

הודות לגמישות של כללי apply ב-icinga2, המפתחים רואים רק שירותים שעליהם הם מקבלים התראות.

ודרך icinga2 director, מתכנתים יכולים בקלות להגדיר בדיקות משלהם (מה שהם עושים, כל כמה ימים - 100 בדיקות יוצאות, 100 בדיקות אחרות נכנסות) בקנה מידה גדול בלי שום טרחה.


### DataDog + New Relic + ELK + EFK + Sentry + Alertmanager + VictorOps

מה יש לנו עכשיו:

DataDog למדדים

New Relic לניטור יישומים

ELK (Elastic Search + Logstash + Kibana) ליומנים

Sentry (באירוח עצמי) לרישום חריגים

דוא"ל + Slack + VictorOps להתראות (לפי חומרה)

מה אנחנו רוצים שיהיה לנו:

Prometheus למדדים (Grafana להצגה חזותית)

New Relic (כנראה Elastic Search APM) לניטור היישומים

EFK (elastic search + fluentd + kibana) לרישום. כנראה ש-Loki של Grafana יהיה מוכן לייצור עד שנגיע לשם

Sentry לחריגים

Alertmanager + דוא"ל + VictorOps להתראות


### Wavefront + Scalyr + PagerDuty + Stackstorm + Slack

Wavefront + Scalyr + PagerDuty + Stackstorm + Slack (הצהרה: עובד ב-VMware)


### Telegraf + Prometheus + InfluxDB + Grafana

Telegraf למדדי שרת כמו CPU, דיסק, זיכרון ורשת. אנו משתמשים ב-Telegraf גם לניטור SNMP של התקני הרשת שלנו.

Prometheus למדדי יישום. אנו מקודדים בדיקות בריאות ביישום שלנו ש-Prometheus גורף.

InfluxDB לאחסון סדרות עתיות. לשם נשלחים נתוני ה-Telegraf שלנו.

Grafana ללוחות מחוונים והתראות. מנוע ההתראות אינו חזק במיוחד, אבל הוא עושה את העבודה. אנו גם שולחים התראות ל-Slack.

מה שאין לי כרגע הוא פתרון רישום מרכזי. ELK עוצמתי אבל קשה להקמה ולניהול, ואני לא מכיר חלופות חינמיות קרובות מספיק כדי לבדוק.


### Sematext + Logagent + Experience

Sematext למדדים, ליומנים, למעקבים, בקרוב גם לניטור משתמשים אמיתיים. פשוט/זול יותר משימוש ב-N כלים/שירותים שונים, לדעתי.

למשלוח יומנים השתמשנו ב-rsyslog ואז עברנו ל-Logagent.

לדיווח קריסות בצד לקוח אנו משתמשים ב-Sentry, אבל נעבור בקרוב ל-Experience.

הצהרה: אני עובד ב-Sematext.


### Azure Monitor/Analytics + OpsGenie

הלוואי ש-Log Analytics היה עם ממשק טוב יותר. אנחנו עוזבים את splunk, שהיה קל הרבה יותר לניווט.


### Prometheus + Alertmanager + Grafana + Splunk + PagerDuty

Prometheus, Alertmanager, Grafana, Splunk, PagerDuty

אתם ממש לא רוצים להריץ מערכת התראות משלכם. אפשר להחליף את Splunk ב-ELK אלא אם צוות האבטחה שלכם מעדיף Splunk.


### Telegraf + Prometheus + Grafana + Alertmanager

Telegraf כאוסף, Prometheus + Alertmanager לניטור והתראות, משולבים עם ערוצי slack ו-pagerduty להתראות קריטיות. Grafana להצגה חזותית של מדדי מארחים.


### Prometheus + Grafana + Cloudwatch + sentry + kibana + elasticsearch

Prometheus למדדים + התראות

Grafana ללוחות מחוונים של Prometheus

Cloudwatch מנטר מופעי Prometheus

sentry למעקב חריגים

kibana + elasticsearch

graylog

prometheus Push Gateway למשימות אצווה/cronjobs

SOP https://github.com/rapidloop/sop כדי "לדחוף/להעביר" מדדים ממופע Prometheus אחד לאחר

הלקוחות משתמשים בלקוחות של Prometheus. אנו מנסים להשתמש ב-opencensus.io בצד הלקוח


### PagerDuty + Monitis

PagerDuty + Monitis. וגם כמה Azure Functions מותאמות לבדיקת בריאות של שירותים מסוימים.

מתכננים להכניס את Prometheus ו-Grafana השנה


### Prometheus + Grafana + Bosun

Prometheus לאחסון נתוני סדרות עתיות. Grafana להצגה חזותית. Bosun לניהול התראות.


### Azure Monitor/Analytics/Insights/Dashboards

חנות Azure בלבד, Azure Monitor, Log Analytics, App Insights, Azure Dashboards + Pager Duty


### Grafana + Monitis + OpsGenie + Slack

Grafana לניטור שירותי קונטיינרים ב-Kubernetes דרך Prometheus

Monitis לניטור שירות מקצה לקצה בעיקר עבור ממשקי API ויישומי ווב

OpsGenie לניהול התראות

Slack לקבלת מידע על מצב המערכות שלנו


### Checkly + AppOptics + Cloudwatch + Heroku + Pagerduty + Papertrail

מהנדס (dev)ops ותיק כאן. גדלתי על Nagios. אשמח לקבל דעות על ה-SaaS שלי שהוקם בכוחות עצמי https://checklyhq.com. אנו עושים ניטור API וניטור טרנזקציות באתר עם התראות די מעמיקות.

התחלתי את Checkly כי ניטור אקטיבי / סינתטי בתחום ה-API היה מוגבל משהו (ויקר). ניטור מבוסס דפדפן / סקריפטים הוא אפילו יותר קנייני ויקר. אנו משתמשים ב-Puppeteer ושומרים על תמחור נמוך ככל האפשר.

ערימת הניטור שלנו:

Checkly (שימוש במוצר של עצמנו...)

AppOptics (גרפים מותאמים)

AWS Cloudwatch ו-SNS להודעות SMS.

התראות מובנות של Heroku.

Pagerduty

Papertrail


### Instana + Logz.io + slack

Instana מתריעה בפנינו ב-slack על בעיות תשתית או על ירידה בביצועים, והגדרנו את logz.io להתריע ב-slack על נפח מסוים של יומני רמת שגיאה משכבת היישום.


### SignalFX + Splunk + PagerDuty + Slack

כרגע משתמשים ב: SignalFX, Splunk, PagerDuty ו-Slack. אני לא מעריץ גדול של SignalFX אף שצוות התמיכה שלהם ידידותי וזריז מאוד. אני אוהב את Splunk (שווה אם אפשר לשלם עליו), את PagerDuty ואת Slack.

פעם השתמשתי בערימת TICK שבה ה-C היה בעצם G, כלומר Grafana, אף שהשתמשתי קצת ב-Chronograf. זה היה מדהים אבל כאב לנהל. הדילמה הקלאסית של SaaS מול אירוח עצמי.

השתמשתי ב-DataDog, ב-New Relic, ב-Graylog, ב-ELK וב-BugSnag. אני אוהב מאוד את DataDog ואת New Relic, Graylog די טוב. אני לא מעריץ גדול של ELK. BugSnag נחמד, אני בעצם מרגיש שמעקב אחר שגיאות/חריגים הוא תחליף די טוב לניטור יומנים מלא, במקרים רבים.


### ELK + Prometheus + Grafana

כמו אחרים, אנו משתמשים ב-ELK ליומנים וב-Prometheus+Grafana לכל השאר.

תחזוקת ההתקנה הזו קלה אם נותנים לעצמכם רשות לאבד נתונים מדי פעם. לדוגמה, אם מסד הנתונים ElasticSearch שלנו נכנס למשבר (מה שקורה אצלנו, לצערנו, כל 2-3 חודשים) אנחנו לא טורחים עם HA ובמקום זאת זורקים את הנתונים וממשיכים בחיינו. אם אתם חייבים בהחלט HA או שמירה לטווח ארוך, בהצלחה.


### Datadog + Prometheus + Grafana

הקמתי את Datadog על בסיס חודש-לחודש כי כשהגעתי לכאן לא היו ניטור והתראות. רק כמה מהאתרים שלנו נוטרו כל 5 דקות לזמינות. Datadog ללא ספק הקל ביותר להקמה. כשאסיים לטפל בכל הבעיות האחרות, אעבור ל-Prometheus+Grafana. עדיין לא החלטתי 100% לגבי ניהול יומנים.


### Nagios + ELK

יש לנו יותר מ-100 מוצרים שאנחנו תומכים בהם.

ב-on-prem, זה בעיקר Nagios ו-ELK. בענן, אנחנו עוברים מ-DataDog ל-NewRelic.


### Datadog לעומת Site24x7 + StatusCake + PagerDuty + SumoLogic + Slack

פעם השתמשנו ב-datadog אבל מצאנו שהוא יקר מדי לצרכינו. אל תבינו אותי לא נכון, הוא מדהים, אבל יש לו עלות עצומה. הצלחנו להקים את site24x7.com עם מנוי שנתי בעלות של כ-2-3 חודשים של DD.

ערימת הניטור שלנו:

Site24x7 - APM, ניטור כתובות URL חיצוניות, ניטור זרימת דואר SMTP, תפוגת ssl וניטור תהליכים.

StatusCake - לניטור ואישור כתובות URL - זה הגיבוי שלנו למקרה ש-site24x7 מפספס משהו (הוא לא) אבל SC גמיש יותר לניטור פורטים ושירותים חיצוניים לצרכינו.

שני הכלים מסלימים ל-PagerDuty, ואז אנו מקבלים את ההסלמות שלנו ב-slack.

SumoLogic - לניטור יומנים (כלי מצוין אבל מורכב קצת לצרכינו)

מתוך slack אפשר לאשר (ack) או לתקן את ההתראה.

יש לנו אז הרבה אוטומציות של site24x7 שמתחברות ל-commando.io ל-'BedOps' כפי שאנו קוראים לזה - כשהתראה מופעלת, אנו מפעילים כמה סקריפטים או אוטומציות כניסיון לתקן את המצב (ב-99% מהמקרים האוטומציה + הסקריפטים שלנו מרחיקים אותנו מצרות).

יש לנו מדריכי הפעלה פנימיים (runbooks) ב-KB שלנו למקרה שהאוטומטים נכשלים או שיש משהו מחוץ להיקף שצריך לתקן.


### Prometheus + AlertManager + Grafana + Stackdriver

Prometheus (Operator) / AlertManager / Grafana למדדים באשכולות GKE ובמכונות הווירטואליות שלנו.

Google Stackdriver ליומנים (כי הוא כלול ופעיל כברירת מחדל וכרגע מספיק לצרכינו).


### Zabbix

Zabbix לכל דבר. אין צורך בתוכנה נוספת.
