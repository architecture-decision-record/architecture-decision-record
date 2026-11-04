# Format cap masa

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


## Ringkasan


### Isu

Kami mahu dapat menjejak bila perkara berlaku dengan menggunakan cap masa dan dengan menggunakan format cap masa yang konsisten yang berfungsi dengan baik merentasi semua sistem kami dan sistem pihak ketiga.

Kami berinteraksi dengan sistem yang mempunyai format cap masa berbeza:

* Mesej JSON tidak mempunyai format cap masa natif, jadi kami perlu memilih cara menukar cap masa kepada rentetan, dan menukar rentetan kepada cap masa, iaitu cara menyirikan/menyahsirikan.

* Sesetengah aplikasi ditetapkan untuk menggunakan masa tempatan, dan bukannya masa UTC. Ini boleh mudah untuk projek yang mesti menyesuaikan diri dengan masa tempatan, seperti projek yang mencetuskan peristiwa berdasarkan masa tempatan.

* Sesetengah sistem mempunyai keperluan dan keupayaan ketepatan masa yang berbeza, seperti menggunakan resolusi masa saat berbanding milisaat berbanding nanosaat. Contohnya, arahan `date` sistem pengendalian Linux menggunakan ketepatan masa lalai saat, manakala bursa saham Nasdaq mahukan ketepatan masa lalai nanosaat.


### Keputusan

Kami memilih format piawai cap masa ISO 8601 dengan ketepatan nanosaat, khususnya "YYYY-MM-DDTHH:MM:SS.NNNNNNNNNZ".

Format ini menunjukkan tahun, bulan, hari, jam, minit, saat, nanosaat dan zon waktu Zulu iaitu UTC, GMT.


### Status

Diputuskan.


## Butiran


### Andaian

Kami perlu mengendalikan rentetan teks cap masa ini, untuk menukar daripada cap masa kepada rentetan (iaitu menyirikan) dan menukar daripada rentetan kepada cap masa (iaitu menyahsirikan).

Kami mahu format yang secara amnya mudah digunakan, mudah ditukar dan mudah dibaca oleh manusia.

Kami mahu keserasian dengan pelbagai sistem luaran yang tidak dapat kami kawal, seperti sistem analitik, sistem pangkalan data, sistem kewangan.


### Kekangan

Sesetengah sistem mempunyai had ketepatan masa. Contohnya, arahan `date` sistem pengendalian macOS boleh mencetak ketepatan masa dalam saat, tetapi tidak dalam nanosaat.


### Pendirian

Kami mempertimbangkan pelbagai pilihan:

* Unix epoch iaitu satu nombor yang bertambah.

* Format teks ringkas "YYYYMMDDTHHMMSSNNNNNNNNN".

* Menggunakan zon waktu tempatan berbanding zon waktu UTC.


### Hujah

Untuk kegunaan tipikal, kami menghargai kemudahan dibaca/ditulis oleh manusia, lebih daripada kelajuan/saiz mentah.

Untuk kegunaan tipikal, kami mahu format yang berfungsi dengan baik dalam sistem mesin, dan juga berfungsi dengan baik secara manual, seperti menulis data sampel, membaca output JSON, melakukan grep pada fail log dan sebagainya.

Untuk kegunaan tidak tipikal, seperti pengkomputeran berprestasi tinggi, kami menjangkakan kami akan mahu mengoptimumkan sebarang format teks yang kami pilih dengan menukar teks kepada format yang lebih pantas, seperti jenis objek tarikh terbina dalam bahasa pengaturcaraan. Jadi format teks tidak penting sangat untuk HPC.


### Implikasi

Pelbagai sistem teks dan sistem masa kami akan bertumpu pada format ini.


## Berkaitan


### Keputusan berkaitan

Kami mungkin mahu cara pantas/mudah untuk turut menjejak delta masa iaitu tempoh. Ini mudah dengan cap masa Unix epoch.


### Keperluan berkaitan

Kami mungkin mahu melaraskan keputusan kami cth. jika kami mempunyai keperluan berkaitan untuk jenis cap mesej pengelogan tertentu, seperti untuk Splunk, Sumo, ELK dan sebagainya.


### Artifak berkaitan

Pemformat dan penghurai bahasa:

  * [date-fns: Modern JavaScript date utility library](https://date-fns.org/)
  * [Crono: date and time library for Rust](https://github.com/chronotope/chron)
  
Contoh Rosetta Code:

  * [System time](https://www.rosettacode.org/wiki/System_time)
  * [Data format](https://www.rosettacode.org/wiki/Date_format)
  * [Show the epoch](https://www.rosettacode.org/wiki/Show_the_epoch)

Contoh SixArm:

  * [now_string](https://github.com/SixArm/rosetta_code/tree/master/tasks/now_string)


### Prinsip berkaitan

Mudah diterbalikkan. Kami boleh bertukar dengan mudah kepada format berbeza, seperti Unix epoch.

Tangguhkan pengoptimuman pramatang. Untuk kegunaan tipikal kami tidak begitu peduli tentang segelintir aksara tambahan seperti format yang menggunakan sengkang dan titik bertindih.


## Nota

Tambah nota di sini.
