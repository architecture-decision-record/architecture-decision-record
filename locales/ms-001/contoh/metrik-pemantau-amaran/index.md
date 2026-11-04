# Metrik, pemantau, amaran

Kandungan:

* [Ringkasan](#ringkasan)
  * [Isu](#isu)
  * [Keputusan](#keputusan)
  * [Status](#status)
* [Butiran](#butiran)
  * [Andaian](#andaian)
  * [Kekangan](#kekangan)
  * [Pendirian](#pendirian)
  * [Hujah](#hujah)
  * [Implikasi](#implikasi)
* [Berkaitan](#berkaitan)
  * [Keputusan berkaitan](#keputusan-berkaitan)
  * [Keperluan berkaitan](#keperluan-berkaitan)
  * [Artifak berkaitan](#artifak-berkaitan)
  * [Prinsip berkaitan](#prinsip-berkaitan)
* [Nota](#nota)
  * [Mesej teks bebas berbanding mesej peristiwa berstruktur](#mesej-teks-bebas-berbanding-mesej-peristiwa-berstruktur)
  * [Graylog lebih mudah](#graylog-lebih-mudah)
  * [Prometheus memerlukan sedikit penalaan](#prometheus-memerlukan-sedikit-penalaan)
  * [Perkhidmatan AWS bercampur-campur](#perkhidmatan-aws-bercampur-campur)
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
  * [Datadog berbanding Site24x7 + StatusCake + PagerDuty + SumoLogic + Slack](#datadog-berbanding-site24x7--statuscake--pagerduty--sumologic--slack)
  * [Prometheus + AlertManager + Grafana + Stackdriver](#prometheus--alertmanager--grafana--stackdriver)
  * [Zabbix](#zabbix-1)


## Ringkasan


### Isu

Kami mahu menggunakan metrik, pemantau dan amaran, kerana kami mahu mengetahui sejauh mana aplikasi kami berfungsi dengan baik, dan mengetahui bila ada masalah.


### Keputusan

Kerja dalam proses (WIP).


### Status

Mengumpul maklumat. Kami bermula dengan hujung spektrum yang munasabah: alat percuma lama yang paling disyorkan (Nagios) dan alat berbayar baharu yang paling disyorkan (New Relic).


## Butiran


### Andaian

Kami mahu mencipta aplikasi web yang moden, pantas, boleh dipercayai, responsif dan sebagainya.

Kami mahu membeli dan bukannya membina.


### Kekangan

Kami mahu perkakasan yang berfungsi dengan baik dengan saluran paip devops kami dan dengan awan penempatan kami.


### Pendirian

Kami sedang menyelidik pendirian sekarang.


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

  
### Hujah

Setakat ini, Nagios dan New Relic ialah hujung spektrum. Nagios ialah alat yang paling lama, paling mudah, percuma dan berdaya maju. New Relic ialah alat yang paling baharu ciri, paling lengkap, berbayar dan berdaya maju. Kami akan bermula dengan penilaian ini. Mengikut keperluan, kami akan berhijrah ke dalam spektrum.  

Setakat ini, Zabbix mempunyai syor terbaik, dan juga menawarkan keupayaan paling lengkap.

Setakat ini, ELK mempunyai populariti bina-berbanding-beli sumber terbuka yang terbaik.

Setakat ini, Prometheus + Graphana mempunyai populariti terbaik.


### Implikasi

UNTUK DILAKUKAN.


## Berkaitan


### Keputusan berkaitan

Pilihan ini akan menjejaskan kebolehujian, telemetri, dan berkemungkinan sistem lain seperti untuk perkhidmatan pelanggan, kejuruteraan kebolehpercayaan tapak dan sebagainya.


### Keperluan berkaitan

UNTUK DILAKUKAN.


### Artifak berkaitan

UNTUK DILAKUKAN.


### Prinsip berkaitan

Mudah diterbalikkan.

Perlukan kelajuan.


## Nota


Timbunan sumber terbuka yang agak baik ialah:

* Prometheus untuk metrik dan amaran berasaskan metrik

* Grafana untuk memaparkan metrik

* Elasticsearch/Logstash/Kibana (ELK) untuk log dan peristiwa berstruktur

* Pushover untuk pemberitahuan mudah alih


### Mesej teks bebas berbanding mesej peristiwa berstruktur

Mesej teks bebas: contohnya, jenis perkara rawak yang anda temui dalam /var/log/messages, dan sesuatu yang dijana dengan sengaja oleh aplikasi. Mesej ini berguna untuk mengenal pasti perkara lain yang berlaku pada mesin seperti kehabisan memori atau ralat perkakasan, tetapi mengandungi banyak sampah. 

Mesej peristiwa berstruktur: dijana oleh aplikasi, dengan set atribut tetap atau dinamik, cth. log permintaan HTTP, log perakaunan, log masuk pengguna.

Secara amnya, adalah baik untuk mencatat butiran tentang setiap permintaan dengan cara yang membolehkan anda menyelidik berdasarkan atribut. Jadi menambah cth. userid atau sessionid pada segala-galanya membolehkan anda menjejak. Penjejakan eksplisit juga bagus, tentulah. Menggunakan ELK untuk ini ialah sejenis versi orang miskin bagi https://www.honeycomb.io/


### Graylog lebih mudah

Graylog lebih mudah untuk dihidupkan berdasarkan pengalaman saya.


### Prometheus memerlukan sedikit penalaan

Saya secara amnya gembira dengan Prometheus untuk metrik. Amaran memerlukan sedikit penalaan, tetapi agak baik. Ia bergantung pada aplikasi anda. Saya fikir adalah terbaik untuk memberi amaran tentang keadaan yang kelihatan kepada pengguna akhir, bukan punca yang mendasari. Contohnya, masa muat halaman adalah baik, bilangan permintaan sesaat tidak. Walaupun sifar permintaan sesaat menunjukkan ada sesuatu yang tidak kena.

Kelebihan perkhidmatan ialah mereka menawarkan kecerdasan tambahan secara siap pakai. Saya secara amnya menyukai Datadog. Perkhidmatan boleh sangat mahal jika anda mempunyai banyak data, dan kadangkala mempunyai model harga yang tidak mesra awan, cth. mengenakan caj setiap tika, apabila tika adalah dinamik. Terdapat juga perbezaan antara perkhidmatan di mana setiap permintaan datang daripada pengguna berbayar dan yang berkaitan dengan pengiklanan, jadi hanya peratusan kecil permintaan yang menjana wang untuk anda. Anda boleh berakhir dengan banyak data dan bajet yang tidak banyak.

Saya bekerja pada beberapa perkhidmatan yang menerima 1B permintaan sehari, jadi masuk akal untuk menghoskan sendiri pemantauan dan pengelogan kami. Jika volum anda lebih rendah, perkhidmatan yang dihoskan lebih mudah.


### Perkhidmatan AWS bercampur-campur

Pengalaman saya dengan perkhidmatan AWS bercampur-campur. Perkhidmatan Elasticsearch mereka tidak stabil, jadi kami menjalankan tika kami sendiri untuk itu. Metrik CloudWatch mahal, jadi kami secara amnya hanya menggunakannya untuk metrik peringkat "infrastruktur" dan bukan aplikasi, iaitu metrik berkaitan kesihatan di mana AWS boleh mengetahui dengan lebih baik apa yang berlaku daripada perisian yang berjalan pada tika. Log CloudWatch boleh lambat dikemas kini dan tidak mempunyai banyak metadata. Menjalankan ELK membantu dalam hal itu. Jika saya benar-benar mahu data masa nyata, menggunakan Kafka sebagai pengangkutan untuk log adalah lebih baik. Itu disokong dengan baik oleh Logstash. Mengurus kluster Kafka bukan untuk yang lemah semangat, bagaimanapun, terdapat banyak paip yang terdedah.


### Kafka

Komen: Kafka boleh sangat rumit kadangkala, atau Kafka boleh sekukuh batu dan anda hampir lupa ia ada di sana mengikat segalanya. 


Komen: Kafka telah stabil, tetapi untuk menjalankannya memerlukan kerja yang mengejutkan banyak. Saya menganggapnya seperti pangkalan data hubungan tetapi anda hanya bekerja pada lapisan "fizikal", cth. ruang jadual, fail dan partition. Terdapat masa-masa awal di mana utiliti pengurusan tidak mencukupi, dan kami terpaksa menulis atur cara untuk cth. menetapkan semula kumpulan pengguna. http://howfuckedismydatabase.com/nosql/

Komen: Kami menggunakan Kafka sebagai "penimbal" untuk mesej log dan tempat di mana kami boleh melakukan pemprosesan strim masa nyata pada data yang datang daripada berbilang pelayan. Jika kami mengalami serangan DDOS, kami memerlukan cara menganalisis data merentasi berbilang tika. Jika kami mengelog terus dari pelayan ke ELK, beban boleh meletupkan kluster Elasticsearch.

Komen: Kafka baik untuk kami kerana jika kami mengalami serangan DDOS, kami memerlukan cara menganalisis data merentasi berbilang tika. Jika kami mengelog terus dari pelayan ke ELK, beban boleh meletupkan kluster Elasticsearch.


Komen: Kafka melakukan kerja yang kurang dan lebih cekap, jadi ia dapat mengendalikan beban dengan lebih baik. Dan kami meratakan kerja Kafka dan mencuba semula. Dan Kafka yang terlebih beban tidak menjejaskan pengguna yang cuba melakukan kerja interaktif dengan Kibana, seperti yang berlaku jika Elasticsearch bergelut.

Komen:  Pemprosesan strim kebanyakannya mencari penyalahgunaan, cth. terlalu banyak trafik daripada satu IP merentasi keseluruhan kluster, dan kemudian berkongsi sekatan merentasi keseluruhan kluster.

Komen: Pemalam logstash-output-kafka agak tidak boleh dipercayai pada masa ini. Saya telah terkena beberapa isu pada halaman isu GitHub-nya, yang nampaknya tidak pernah diperbaiki. Saya mahu berhenti menggunakannya, dan menghantar terus dari aplikasi kami ke Kafka.

Komen: Kami kini menghantar peristiwa berstruktur terus dari aplikasi ke Kafka. Motivasi utama ialah menyentuh data log lebih sedikit kali dan mengelak membaca dan menulis cakera berkali-kali. Dalam sistem volum tinggi, pengelogan boleh memerlukan lebih banyak kerja daripada aplikasi itu sendiri. Saya sedang memikirkan untuk menjadikan journald menghantar log terus juga, daripada atur cara C.


### Loki

Perhatikan Loki dengan teliti. Ia belum bersedia lagi tetapi apabila siap saya menjangkakan ia lebih sesuai dalam timbunan ini. Loki ialah pengagregat log yang dicipta oleh grafana labs, ia menggunakan sintaks mengikis dan teg yang serupa dengan Prometheus.


### Prometheus + alertmanager + Rollbar + Graylog + Grafana

 Prometheus + alertmanager untuk metrik. Saya sayang Prometheus.

Rollbar/Graylog untuk pengelogan/pelaporan ralat (ada pertindihan di sini; perkhidmatan kecil mungkin tidak memerlukan kedua-duanya).

Pada masa ini, amaran hanya pergi ke salah satu saluran Slack yang pihak berminat telah menghidupkan pemberitahuan. Jika kami lebih serius tentang panggilan bertugas, ia akan pergi ke PagerDuty/VictorOps dan sebagainya.

Grafana untuk graf dan papan pemuka. Juga sedang menantikan untuk melihat sama ada kemudahan pengelogan mereka yang akan datang akan menghapuskan keperluan Graylog.


### Thanos

Kami menggunakan Thanos sebagai bahagian hadapan untuk persediaan HA kami. Ia tahu cara menyahduplikat pasangan HA.

Kami pada masa ini menyimpan 6 bulan data Prometheus tempatan. Ini berfungsi dengan agak baik untuk kami. Tetapi saya sedang dalam proses melancarkan storan bucket ke persediaan Thanos kami untuk storan data jangka panjang. Secara teori, storan GCS akan kira-kira 30% lebih murah daripada cakera berterusan standard GCE yang kami gunakan sekarang.

Kami tidak membuat sandaran data Prometheus pada masa ini. Data itu sebenarnya tidak penting kepada kami selain daripada mempunyai cukup untuk amaran. Penempatan armada keseluruhan kami berubah begitu banyak dari tahun ke tahun sehingga data sejarah yang lebih lama daripada beberapa bulan tidak begitu menarik. Mungkin menarik untuk mempunyai beberapa statistik teras dari tahun ke tahun, saya mungkin menyediakan set peraturan rakaman statistik teras dan menyimpannya dengan Federation atau biarkan Thanos mengendalikannya.

EDIT: Penafian kecil, saya seorang pembangun Prometheus.


### Prometheus HA

HA dalam Prometheus dilakukan dengan penduaan; anda menjalankan berbilang pemancar dan ada cara untuk membuat pertanyaan kepada berbilang pemancar dan menyahduplikat data

Penskalaan dilakukan dengan membahagikan rangkaian dan meminta Prometheus berbeza membuat pertanyaan bahagian rangkaian yang berbeza

Storan jangka panjang bukan kekuatan Prometheus tetapi dipindahkan kepada sesuatu seperti influx atau timescaledb (yang secara teknikalnya turut menandakan HA) artikel yang saya baca mengenainya https://blog.timescale.com/prometheus-ha-postgresql-8de68d19b6f5?gi=7df160f10e07

Belum mencuba bahagian jangka panjang kerana saya masih hanya bereksperimen dan menggunakannya untuk graf jangka pendek manakala librenms memantau rangkaian saya untuk jangka panjang


### Datadog + PagerDuty + Threat Stack

Kami menggunakan Datadog (dengan PagerDuty) dan Threat Stack dan tidak boleh lebih gembira. Satu-satunya rungutan saya tentang DD ialah kos storan metrik yang agak tinggi.


### Zabbix

Zabbix dengan skrip tersuai untuk memantau hampir semua perkara. Berfungsi seperti azimat.


### Outlyer

Saya menggunakan Outlyer, tetapi saya mesti menafikan bahawa saya bekerja di sini, dan menggunakan produk sendiri adalah wajib.

Masih memerlukan Graylog, Sentry dan Statuscake untuk menambah baik.

Kedengaran berat sebelah, tetapi setelah dengan gembira menjalankan Nagios dan sistem pemantauan lain secara dalaman, saya akan membeli penyelesaian yang dihoskan dalam mana-mana pekerjaan baharu dan melepaskan kesakitan itu.


### Nagios + Nagiosgraph

Kami menjalankan Nagios untuk semua pemantauan dan amaran. Amaran berlaku melalui e-mel (amaran dan pemberitahuan kritikal) dan pemberitahuan aplikasi yang boleh didengar (untuk amaran kritikal).

Nagiosgraph digunakan untuk visualisasi.

Persediaan ini sangat berkesan dalam memastikan kami dimaklumkan secara menyeluruh tentang apa yang berlaku dalam persekitaran kami. Kami menjalankan dan memantau kira-kira 110 pelayan kritikal misi dan kira-kira 760 titik data, dan telah mempunyai sistem pagi ini selama lebih tujuh tahun.

Saya juga ingin mengagregat log dengan Graylog atau ELk pada satu ketika.


### Prometheus + Grafana + AlertManager

Prometheus + Grafana + AlertManager melalui helm chart Prometheus Operator yang hebat. Log masih pergi ke pelan birch LogDNA kerana kami perasan ELK terlalu berat untuk min 3 maks 5 nod kami yang sederhana pada GKE.


### DataDog + Sentry + PagerDuty.

Dahulu saya menjalankan semua penyelesaian pemantauan saya sendiri menggunakan pelbagai perisian termasuk Nagios, Icinga, Zabbix, ELK, Greylog2, Influx dan banyak alat lain, tetapi hakikatnya terlalu banyak usaha terlibat dalam menjalankan infrastruktur pemantauan sendiri, terutamanya apabila anda boleh membayar orang lain dengan kadar yang begitu rendah untuk melakukannya untuk anda!

Membayar orang lain untuk menjalankan infra pemantauan membebaskan pelanggan saya untuk menumpukan pada menjalankan platform mereka dan bukannya memantau pemantauan, bermakna nilai yang mereka peroleh daripada kestabilan platform mereka jauh melebihi sebarang kos Pemantauan sebagai Perkhidmatan.


### Sensu + Graphite + ELK

Syarikat saya sangat meminati perkara yang dihoskan sendiri.

Sensu -> PagerDuty

Graphite/Grafana

ELK (Elasticsearch, Logstash, Kibana)


### Prometheus + Alertmanager

Prometheus + Alertmanager untuk amaran, pasukan saya percaya pemantauan yang mudah ialah pemantauan yang baik.

Sistem lain seperti pengelogan dan penjejakan akan memberikan konteks yang kaya untuk diagnosis apabila yang bertugas menerima amaran, tetapi kami tidak pernah membina amaran pada ini.


### Sensu + Grafana + Graylog + Kibana + NewRelic.

Sensu, grafana, graylog, kibana, newrelic.


### Prometheus + Circonus

Perkhidmatan berinstrumen Prometheus => analitik dan visualisasi Circonus


### icinga2 + VictorOps + NewRelic + Sentry + Slack

Kami menggunakan perkhidmatan di bawah:

icinga2 untuk pemantauan dan VictorOps untuk amaran

NewRelic untuk pemantauan butiran perkhidmatan

Sentry untuk penjejakan ralat dalam perkhidmatan

Slack/E-mel ialah sebahagian daripada amaran yang dicetuskan daripada NewRelic atau icinga2


### AppDynamics + Papertrail + PagerDuty + Healthchecks.io + Stackdriver

AppDynamics

Papertrail

PagerDuty

Healthchecks.io

Stackdriver


### icinga2 + elasticsearch

icinga2 dengan integrasi elasticsearch untuk analisis dan integrasi graphite+grafana untuk graf.

berkat fleksibiliti peraturan apply dalam icinga2, pembangun hanya dapat melihat perkhidmatan yang mereka terima pemberitahuan untuknya.

dan melalui icinga2 director, pengaturcara boleh dengan mudah mentakrifkan semakan mereka sendiri (yang mereka lakukan, setiap beberapa hari - 100 semakan keluar, 100 semakan lain masuk) pada skala besar tanpa sebarang kesulitan.


### DataDog + New Relic + ELK + EFK + Sentry + Alertmanager + VictorOps

Apa yang kami ada sekarang:

DataDog untuk metrik

New Relic untuk pemantauan aplikasi

ELK (Elastic Search + Logstash + Kibana) untuk log

Sentry (dihoskan sendiri) untuk merekod pengecualian

E-mel + Slack + VictorOps untuk amaran (berdasarkan keterukan)

Apa yang kami mahu ada:

Prometheus untuk metrik (Grafana untuk visualisasi)

New Relic (mungkin Elastic Search APM) untuk pemantauan aplikasi

EFK (elastic search + fluentd + kibana) untuk pengelogan. Mungkin, Loki oleh Grafana akan sedia untuk pengeluaran pada masa kami sampai ke situ

Sentry untuk pengecualian

Alertmanager + e-mel + VictorOps untuk amaran


### Wavefront + Scalyr + PagerDuty + Stackstorm + Slack

Wavefront + Scalyr + PagerDuty + Stackstorm + Slack (Penafian: bekerja di VMware)


### Telegraf + Prometheus + InfluxDB + Grafana

Telegraf untuk metrik pelayan seperti CPU, Cakera, Memori dan Rangkaian. Kami juga menggunakan Telegraf untuk pemantauan SNMP peranti rangkaian kami.

Prometheus untuk metrik aplikasi. Kami mengekodkan semakan kesihatan ke dalam aplikasi kami yang dikikis oleh Prometheus.

InfluxDB untuk storan siri masa. Di sinilah data Telegraf kami dihantar.

Grafana untuk papan pemuka dan amaran. Enjin amaran tidak begitu mantap, tetapi ia menyelesaikan tugas. Kami juga menghantar amaran ke Slack.

Apa yang saya tidak ada sekarang ialah penyelesaian pengelogan berpusat. ELK berkuasa tetapi sukar untuk disediakan dan diurus, dan saya tidak tahu sebarang alternatif percuma yang cukup hampir untuk diteliti.


### Sematext + Logagent + Experience

Sematext untuk metrik, untuk log, untuk jejak, tidak lama lagi untuk pemantauan pengguna sebenar juga. Lebih mudah/murah daripada menggunakan N alat/perkhidmatan berbeza, pada pendapat saya.

Untuk penghantaran log kami dahulu menggunakan rsyslog kemudian kami beralih kepada Logagent.

Untuk pelaporan nahas bahagian hadapan kami menggunakan Sentry, tetapi kami akan beralih kepada Experience tidak lama lagi.

Penafian: Saya seorang Sematextan.


### Azure Monitor/Analytics + OpsGenie

Saya harap Log Analytics mempunyai antara muka yang lebih baik. Kami beralih daripada splunk, yang jauh lebih mudah dinavigasi.


### Prometheus + Alertmanager + Grafana + Splunk + PagerDuty

Prometheus, Alertmanager, Grafana, Splunk, PagerDuty

Anda benar-benar tidak mahu menjalankan sistem pemberitahuan sendiri. Anda boleh menggantikan Splunk dengan ELK melainkan pasukan Keselamatan anda lebih suka Splunk.


### Telegraf + Prometheus + Grafana + Alertmanager

Telegraf sebagai pengumpul, Prometheus + Alertmanager untuk pemantauan dan amaran, disepadukan dengan saluran slack dan pagerduty untuk amaran kritikal. Grafana untuk visualisasi metrik hos.


### Prometheus + Grafana + Cloudwatch + sentry + kibana + elasticsearch

Prometheus untuk metrik + amaran

Grafana untuk papan pemuka Prometheus

Cloudwatch memantau tika Prometheus

sentry untuk penjejakan pengecualian

kibana + elasticsearch

graylog

prometheus Push Gateway untuk kelompok/cronjob

SOP https://github.com/rapidloop/sop untuk „menolak/memajukan“ metrik daripada 1 tika Prometheus ke yang lain

klien sama ada menggunakan klien Prometheus. Kami cuba menggunakan opencensus.io di sebelah klien


### PagerDuty + Monitis

PagerDuty + Monitis. Juga beberapa Azure Functions tersuai untuk menguji kesihatan beberapa perkhidmatan.

Berhasrat memperkenalkan Prometheus dan Grafana tahun ini


### Prometheus + Grafana + Bosun

Prometheus untuk menyimpan data siri masa. Grafana untuk visualisasi. Bosun untuk pengurusan amaran.


### Azure Monitor/Analytics/Insights/Dashboards

Kedai Azure sahaja, Azure Monitor, Log Analytics, App Insights, Azure Dashboards + Pager Duty


### Grafana + Monitis + OpsGenie + Slack

Grafana untuk memantau perkhidmatan kontena dalam Kubernetes melalui Prometheus

Monitis untuk pemantauan perkhidmatan hujung ke hujung terutamanya untuk API web dan aplikasi web

OpsGenie untuk pengurusan amaran

Slack untuk mendapatkan maklumat status daripada sistem kami


### Checkly + AppOptics + Cloudwatch + Heroku + Pagerduty + Papertrail

Jurutera (dev)ops lama di sini. Membesar dengan Nagios. Ingin mendapatkan pendapat tentang SaaS bootstrapped saya https://checklyhq.com. Kami melakukan pemantauan API & pemantauan transaksi tapak dengan amaran yang agak mendalam.

Saya memulakan Checkly kerana pemantauan aktif / sintetik dalam ruang API agak terhad (dan mahal). Pemantauan berasaskan pelayar / berskrip lebih proprietari dan mahal. Kami menggunakan Puppeteer dan mengekalkan harga serendah mungkin.

Timbunan pemantauan kami:

Checkly (menggunakan produk sendiri...)

AppOptics (grafik tersuai)

AWS Cloudwatch & SNS untuk mesej SMS.

amaran Heroku terbina dalam.

Pagerduty

Papertrail


### Instana + Logz.io + slack

Instana memberi amaran kepada kami di slack tentang masalah infrastruktur atau kemerosotan prestasi, dan kami telah mengkonfigurasi logz.io untuk memberi amaran di slack pada jumlah tertentu log peringkat ralat daripada lapisan aplikasi.


### SignalFX + Splunk + PagerDuty + Slack

Pada masa ini menggunakan: SignalFX, Splunk, PagerDuty dan Slack. Saya bukan peminat besar SignalFX walaupun pasukan sokongan mereka sangat mesra dan responsif. Saya suka Splunk (berbaloi jika anda mampu membayarnya), PagerDuty dan Slack.

Dahulu saya menggunakan timbunan TICK di mana kebanyakan C sebenarnya G, iaitu Grafana walaupun saya menggunakan Chronograf sedikit. Itu hebat tetapi menyusahkan untuk diurus. Dilema klasik SaaS berbanding pengehosan sendiri.

Saya telah menggunakan DataDog, New Relic, Graylog, ELK dan BugSnag. Saya sangat suka DataDog dan New Relic, Graylog agak bagus. Saya bukan peminat besar ELK. BugSnag bagus, saya sebenarnya rasa menjejak ralat/pengecualian ialah pengganti yang agak baik untuk pemantauan log penuh, dalam banyak kes.


### ELK + Prometheus + Grafana

Seperti yang lain, kami menggunakan ELK untuk log dan Prometheus+Grafana untuk yang lain.

Menyelenggara persediaan ini mudah jika anda memberi kebenaran kepada diri sendiri untuk sekali-sekala kehilangan data. Contohnya, jika pangkalan data ElasticSearch kami berada dalam masalah (yang berlaku setiap 2-3 bulan untuk kami sayangnya) kami tidak bersusah payah dengan HA dan sebaliknya membuang data dan meneruskan hidup. Jika anda mutlak mesti mempunyai HA atau pengekalan jangka panjang, semoga berjaya.


### Datadog + Prometheus + Grafana

Saya menyediakan Datadog secara bulan ke bulan kerana apabila saya sampai di sini, tiada pemantauan dan tiada amaran. Hanya beberapa tapak kami dipantau setiap 5m untuk masa aktif. Datadog sudah tentu paling mudah untuk disediakan. Apabila saya selesai menangani semua isu lain, saya akan bertukar kepada Prometheus+Grafana. Belum 100% memutuskan tentang pengurusan log.


### Nagios + ELK

Kami mempunyai lebih 100+ produk yang kami sokong.

Untuk on-prem, kebanyakannya Nagios dan ELK. Untuk awan, kami berhijrah daripada DataDog ke NewRelic.


### Datadog berbanding Site24x7 + StatusCake + PagerDuty + SumoLogic + Slack

Dahulu kami menggunakan datadog tetapi mendapati ia terlalu mahal untuk keperluan kami. Jangan salah faham, ia hebat tetapi, ia mempunyai kos yang besar. Kami dapat menyediakan site24x7.com dengan langganan tahunan pada kira-kira 2-3 bulan kos daripada DD.

Timbunan pemantauan kami:

Site24x7 - APM, pemantauan URL luaran, pemantauan aliran mel SMTP, tamat tempoh ssl dan pemantauan proses.

StatusCake - untuk pemantauan dan pengesahan URL - Ia sandaran kami sekiranya site24x7 terlepas sesuatu (ia tidak) tetapi SC lebih fleksibel untuk pemantauan port dan perkhidmatan luaran untuk keperluan kami.

Kedua-dua alat meningkatkan ke PagerDuty, dan kemudian kami mendapat peningkatan kami di slack.

SumoLogic - untuk pemantauan log (ia alat yang hebat tetapi agak rumit untuk keperluan kami)

Dari slack kami boleh mengakui, atau memulihkan amaran.

Kami kemudian mempunyai banyak automasi site24x7 yang kemudian bersambung ke commando.io untuk 'BedOps' seperti yang kami panggil - di mana amaran dicetuskan, kami melancarkan beberapa skrip atau automasi sebagai percubaan untuk memulihkan keadaan (99% daripada masa automasi + skrip kami menjauhkan kami daripada masalah).

Kami mempunyai buku panduan dalaman dalam KB kami untuk apabila automaton gagal atau jika ada sesuatu di luar skop yang perlu diperbaiki.


### Prometheus + AlertManager + Grafana + Stackdriver

Prometheus (Operator) / AlertManager / Grafana untuk metrik dalam kluster GKE dan VM kami.

Google Stackdriver untuk Log (kerana ia disertakan dan aktif secara lalai dan pada masa ini mencukupi untuk keperluan kami).


### Zabbix

Zabbix untuk semuanya. Tiada perisian tambahan diperlukan.
