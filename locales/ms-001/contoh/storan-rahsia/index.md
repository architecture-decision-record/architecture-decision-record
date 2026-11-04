# Storan rahsia

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
  * [Vault oleh HashiCorp](#vault-oleh-hashicorp)
  * [LastPass](#lastpass)
  * [Bitwarden](#bitwarden)
  * [EnvKey](#envkey)
  * [Confidant oleh Lyft](#confidant-oleh-lyft)
  * [Devolutions Password Server](#devolutions-password-server)
  * [Secret Server oleh Thycotic](#secret-server-oleh-thycotic)


## Ringkasan


### Isu

Kami perlu menyimpan rahsia, seperti kata laluan, kunci peribadi, token pengesahan dan sebagainya.

Sebahagian rahsia berorientasikan pengguna. Contohnya, pembangun kami mahu dapat menggunakan telefon bimbit mereka untuk mencari kata laluan kepada sesuatu perkhidmatan.

Sebahagian rahsia berorientasikan sistem. Contohnya, saluran paip penyampaian berterusan kami perlu dapat mencari bukti kelayakan untuk pengehosan awan kami.


### Keputusan

Bitwarden untuk rahsia berorientasikan pengguna

Vault oleh HashiCorp untuk rahsia berorientasikan sistem.


### Status

Diputuskan. Kami terbuka kepada alternatif baharu apabila ia muncul.


## Butiran


### Andaian

Untuk tujuan ini, dan keadaan semasa kami, kami menghargai kemudahan berorientasikan pengguna, seperti aplikasi mudah alih yang boleh digunakan.

  * Kami mahu memastikan akses pantas dan mudah semasa bergerak, seperti untuk pembangun yang melakukan kejuruteraan kebolehpercayaan sistem semasa bertugas.

  * Kami mahu dapat berkongsi beberapa rahsia dalam kalangan orang terpilih, seperti pasukan.

Kami tidak cuba menyelesaikan untuk penyedia tunggal, seperti menyimpan semua rahsia secara eksklusif di Amazon atau Azure atau Google.

Kami tidak mahu pendekatan ad-hoc seperti "ingat sahaja" atau "tulis pada nota" atau "cari cara anda sendiri untuk menyimpannya".

Model keselamatan kami untuk tujuan ini bersetuju dengan menggunakan vendor COTS yang dihormati, seperti alat pengurusan kata laluan SaaS.


### Kekangan

Sekarang kami mahu sesuatu yang mudah iaitu tidak perlu menulis kod, tidak perlu memasang pelayan, tidak perlu membuat komitmen besar, tidak perlu menyeragamkan semua orang.


### Pendirian

Kami mempertimbangkan:

1. Pengurus kata laluan siap pakai berorientasikan pengguna: LastPass, 1Password, Bitwarden, Dashlane, KeePass, pass, GPG dan sebagainya.

2. Pengurus kata laluan COTS berorientasikan sistem: AWS KMS, Vault oleh HashiCorp, EnvKy, Secret Server oleh Thycotic, Devolutions Password Server, Confidant oleh Lyft.

3. Pendekatan berorientasikan perkongsian: menggunakan dokumen Google dikongsi, atau saluran Slack dikongsi, atau folder rangkaian dikongsi dan sebagainya.

4. Pendekatan ad-hoc teknologi rendah, seperti mengingati, menulis nota atau bergantung pada setiap pengguna untuk mencari pendekatan mereka sendiri.


### Hujah

Bitwarden, LastPass, 1Password dan Dashlane semuanya produk komersial siap pakai.

  * Jenis ciri yang serupa untuk pengguna, pasukan, organisasi dan sebagainya.

  * Keupayaan desktop untuk Windows dan Mac, dan keupayaan mudah alih untuk Android dan iOS.

  * Sambungan pelayar untuk Chrome dan Firefox, untuk pengisian borang automatik dan sebagainya.

Bitwarden mempunyai dua kelebihan berbanding yang lain:

  * Bitwarden ialah sumber terbuka, bermakna keselamatan boleh disemak rakan sebaya dan syarikat itu juga dihargai secara meluas oleh pembangun yang berorientasikan keselamatan.

  * Anekdot oleh pekerja perisian menerangkan keutamaan ketara untuk Bitwarden berbanding yang lain.

Tulisan contoh baik yang tipikal: https://jcs.org/2017/11/17/bitwarden

Tapak pengundian bersebelahan yang tipikal: https://stackshare.io/stackups/bitwarden-vs-dashlane

Kami menangguhkan KeyPass, pass, GPG dan sebagainya kerana terdapat kerumitan tambahan. Semua ini kelihatan seperti penyelesaian yang baik untuk pengguna teknikal. GPG kelihatan amat baik untuk pengguna teknikal yang mahukan keupayaan berorientasikan arahan merentas sistem.

Kami menangguhkan KMS kerana ia mempunyai kekunci penyedia tunggal.

Kami memilih Vault untuk keperluan berorientasikan sistem, kerana ulasannya sangat positif, dan kerana HashiCorp mempunyai rekod prestasi yang cemerlang untuk perisian dan sokongan berkualiti tertinggi.

Kami memveto pendekatan perkongsian seperti melalui dokumen dikongsi, saluran dikongsi, folder rangkaian dikongsi dan sebagainya. Ini tidak menyediakan kualiti keselamatan yang kami mahu.

Kami memveto pendekatan ad-hoc teknologi rendah, kerana kami semua bersetuju ia bukan laluan ke hadapan jangka panjang.


### Implikasi

Pembangun mungkin perlu menjejak rahsia di dua tempat: Bitwarden untuk akses berorientasikan pengguna, dan Vault untuk akses berorientasikan sistem.


## Berkaitan


### Keputusan berkaitan

Keputusan pelayan CI/CD yang mana mesti termasuk bukti keupayaan untuk mengakses rahsia.

Kami perlu memutuskan cara mengurus rahsia, dari segi dasar, putaran, organisasi dan sebagainya.


### Keperluan berkaitan

Rahsia akan mempunyai keperluan berkaitan untuk pematuhan, pengauditan dan orientasi/pelepasan HR.


### Artifak berkaitan

Kami menjangkakan kami mungkin mengeksport beberapa rahsia kepada pemboleh ubah persekitaran.


### Prinsip berkaitan

Mudah diterbalikkan.

Mudah selari iaitu mudah menggunakan pelbagai pengurus kata laluan.

Murah untuk dicuba iaitu terdapat percubaan percuma dan tiada komitmen.


## Nota

Nota penilaian di sini. Nota-nota ini semuanya komen awam di pelbagai papan perbincangan devops.


### Vault oleh HashiCorp

Vault betul-betul apa yang anda mahu di sini. 

Namun jangan hanya campak Vault ke pengeluaran, sediakan dalam persekitaran ujian dahulu, kerana dokumentasi HashiCorp boleh agak kurang walaupun produk mereka menakjubkan.

Keluk pembelajaran sangat curam dan tidak remeh untuk disediakan. 

Persediaan awal agak menyakitkan. Namun ia berbaloi sepenuhnya, dan komuniti akan menyokongnya dengan cukup untuk anda meneruskan.

Dokumen teruk tetapi terdapat banyak panduan dalam talian oleh orang yang menyediakannya dan jika anda gabungkan beberapa daripadanya anda akan mempunyai persediaan yang berfungsi.

Persediaan awal memerlukan bermain-main dengan helm chart mereka (vault dan consul). Walaupun secara teknikal anda boleh menggunakan banyak bahagian belakang lain, saya benar-benar tidak mengesyorkannya. Bahagian belakang/consul boleh sangat kecil jika anda tidak mempunyai banyak data untuk disimpan.

Pastinya selesakan diri/biasakan diri menggunakan CLI, kerana GUI lebih seperti bukti-konsep/portal pengiklanan untuk edisi perusahaan mereka.

Hakikat bahawa anda tidak boleh sekadar "mengisinya" menyakitkan. Contohnya jika anda mempunyai 5 medan anda perlu menambah setiap medan secara manual untuk setiap item. Jadi bukan seperti anda mentakrifkan medan lebih awal untuk kategori tertentu, dan mengisi medan tersebut untuk semua item dalam kategori itu, ia lebih seperti "anda menjana semuanya setiap kali", yang (pada pandangan saya) menyakitkan.

Anda mungkin juga mahu melihat goldfish sebagai UI di atas vault. Menjadikannya agak baik untuk membawa pasukan anda bersama. Mereka juga mempunyai demo. 1. Sediakan consul. 2. Sediakan vault yang menunjuk ke consul. 3. Sediakan goldfish yang menunjuk ke vault. 3. Sediakan beberapa kerja cron untuk menjalankan consul snapshot untuk sandaran.



### LastPass

LastPass Teams. Kami menggunakannya, ada templat tersuai, ACL, tiada yang hilang pada pandangan saya.

Saya melaksanakan LastPass di organisasi saya dan memberinya C+/B-. Isu terbesar kebelakangan ini ialah kekurangan kebolehpercayaan. Dalam 90 hari lalu terdapat berbilang jam di mana peti besi dipaksa ke mod luar talian. Ini tidak ideal untuk organisasi saya kerana mempunyai, secara literal, 4,000+ kata laluan disimpan merentasi 20+ folder dikongsi. Seperti yang anda boleh bayangkan dengan begitu banyak kata laluan sekurang-kurangnya beberapa dikemas kini atau ditambah setiap hari. Kami mempunyai pelan DR jika isu berlarutan lebih sejam atau dua: skrip menandatangani dan menyulitkan longgokan CSV peti besi setiap malam yang boleh diimport ke keepass.

LastPass pernah mengalami gangguan perkhidmatan merosot yang tidak dilaporkan: log masuk 'berfungsi' tetapi tidak menarik tapak, ciri rawak dalam panel pentadbir rosak, dan tidak berkongsi kunci dengan betul untuk folder dikongsi peringkat atas yang baharu. Saya mempunyai pengguna 'tolak kunci'/sandaran khusus yang berada dalam setiap kumpulan. Biasanya log masuk sebagai pengguna itu akan membetulkan sebarang isu perkongsian kunci tetapi tidak apabila perkhidmatan merosot walaupun apa yang halaman status katakan...

Untuk integrasi ia boleh mudah jika anda mempunyai ACL yang betul dengan model keistimewaan terkecil cth. jika pengguna mempunyai baca & tulis dan baca sahaja pada entri atau folder mereka hanya mendapat kebenaran baca sahaja. Malangnya ACL organisasi saya bukan yang terbaik jadi saya akhirnya menggunakan API peruntukan JSON dan ~500 baris python kerana sifat bergantungan ratusan ACL kami tidak dipetakan dengan baik ke model keistimewaan terkecil. Saya akhirnya mendapatkan semua ACL yang disertai pengguna dan melakukan jalan kebergantungan.

Jika struktur ACL atau kumpulan anda sudah dibina dengan struktur keistimewaan terkecil dalam fikiran, alat penyegerakan AD/LDAP untuk Windows akan berfungsi dengan baik.

Hubungi pasukan jualan mereka dan mereka boleh menghubungkan anda dengan percubaan Enterprise yang lebih lama. Pastikan anda memahami sepenuhnya batasannya sebelum membuat keputusan. Kami mengalami banyak kesakitan pertumbuhan tetapi selain daripada gangguan atau kerosakan di bahagian pelayan ia sangat lancar.


### Bitwarden

Bitwarden mempunyai perkakasan yang bagus di sekelilingnya (WebUI, CLI, Mudah Alih, Desktop). Dihoskan sendiri dan agak mudah disediakan. Dokumentasi agak baik dan alat yang disyorkan oleh PrivacyTools.


### EnvKey

https://www.envkey.com/ ialah saas. Sangat mudah dilaksanakan, diintegrasikan dan diurus.

Ciri:

  * Lindungi kunci API dan bukti kelayakan.

  * Pastikan konfigurasi disegerakkan di mana-mana.

  * Pengurusan konfigurasi dan rahsia yang pintar, disulitkan hujung ke hujung. 

  * Cegah perkongsian tidak selamat dan pertumbuhan konfigurasi tidak terkawal. 

  * Integrasi dalam beberapa minit.

Keupayaan:

  * Urus konfigurasi dan tahap akses untuk semua aplikasi, persekitaran dan pasukan anda di satu tempat.

  * Konfigurasikan mana-mana persekitaran pembangunan atau pelayan dengan hanya satu pemboleh ubah persekitaran.

Kebaikan:

  * Halaman utama yang baik.

  * Cadangan nilai yang jelas.

  * Aplikasi web yang cemerlang secara visual.

  * Data contoh unggul cth. Algolia, AWS, Datadog, GitHub, Stripe dan sebagainya.

  * Bercakap dengan pengasas selama 30 minit tentang syarikat, UI dan sebagainya. Dane kedengaran berpengetahuan, jujur tentang kebaikan/keburukan, dan rakan kongsi yang berdaya maju.

  * Syarikat ini pada dasarnya syarikat Y Combinator tipikal, dengan 1 pengasas. Mengumpul $120K pada 2018-01.

  * Tumpuan adalah untuk mencapai ciri perusahaan, terutamanya beralih daripada pengehosan awan EnvKey kepada sama ada on-prem atau BYOC.

  * Laluan ke hadapan yang berpotensi bermula dengan EnvKey untuk kemudahan penggunaan, kemudian kemudian (atau selari) menambah Vault. 


### Confidant oleh Lyft

https://lyft.github.io/confidant/

Confidant ialah perkhidmatan pengurusan rahsia sumber terbuka yang menyediakan storan dan akses mesra pengguna kepada rahsia dengan cara yang selamat, daripada pembangun di Lyft.

Pengesahan KMS: Confidant menyelesaikan masalah ayam dan telur pengesahan dengan menggunakan AWS KMS dan IAM untuk membenarkan peranan IAM menjana token pengesahan selamat yang boleh disahkan oleh Confidant. Confidant juga mengurus geran KMS untuk peranan IAM anda, yang membolehkan peranan IAM menjana token yang boleh digunakan untuk pengesahan perkhidmatan-ke-perkhidmatan, atau untuk menghantar mesej disulitkan antara perkhidmatan.

Penyulitan rahsia berversi semasa rehat: Confidant menyimpan rahsia dengan cara tambah-sahaja dalam DynamoDB, menjana kunci data KMS unik untuk setiap semakan setiap rahsia, menggunakan kriptografi disahkan simetri Fernet.

Antara muka web mesra pengguna untuk mengurus rahsia: Confidant menyediakan antara muka web AngularJS yang membolehkan pengguna akhir mengurus dengan mudah rahsia, pemetaan rahsia kepada perkhidmatan dan sejarah perubahan.


### Devolutions Password Server

https://server.devolutions.net/

Lindungi, urus dan pantau akses kepada akaun dan sesi istimewa.

Peti besi kata laluan yang komprehensif dan sangat selamat yang membolehkan anda mengawal akses kepada akaun istimewa anda, di samping meningkatkan keterlihatan rangkaian keseluruhan untuk pentadbir sistem dan menyediakan pengalaman lancar untuk pengguna akhir.

Ciri: peti besi kata laluan organisasi berpusat, peti besi peribadi khusus pengguna, pengurus kata laluan, suntikan bukti kelayakan,
integrasi Active Directory, kawalan akses berasaskan peranan, pengesahan dua faktor, sedia perusahaan, sekatan IP, keupayaan pengurusan, penjana kata laluan automatik, akses aplikasi mudah alih, sejarah kata laluan, laporan akses, amaran e-mel.

  * menyokong penyulitan data

  * menyokong pelbagai skema Pengesahan termasuk LDAP, O365 dan pengguna Tempatan DENGAN sokongan MFA daripada berbilang sumber

  * berbilang repositori/peti besi dengan kawalan akses terperinci untuk berbilang pasukan

  * UI Web moden

  * peti besi bukti kelayakan dan sambungan peribadi untuk bukti kelayakan/sambungan peribadi

  * aplikasi mudah alih untuk IOS/Android

  * log audit untuk setiap entri, siapa/apa/bila dengan gesaan pilihan untuk mengapa mereka mengakses

  * templat boleh disesuaikan (walaupun mereka menyokong ratusan jenis sambungan secara natif)

  * banyak lagi ciri dan klien tebal Windows/Mac (Remote Desktop Manager) yang boleh anda segerakkan yang meluaskan pilihan dengan hebat...sambungan satu klik

  * harga tidaklah begitu buruk - sehingga 15 pengguna ialah $500 setahun untuk pelayan kata laluan


### Secret Server oleh Thycotic

https://thycotic.com/products/secret-server/

Ciri versi di premis: 

  * Kawalan penuh ke atas sistem dan infrastruktur keselamatan hujung ke hujung anda

  * Tempatkan perisian dalam pusat data di premis anda atau tika awan peribadi maya anda sendiri

  * Memenuhi kewajipan undang-undang dan kawal selia yang memerlukan semua data dan sistem berada di premis

Ciri versi awan:

  * Model perisian-sebagai-perkhidmatan membolehkan anda mendaftar dan bermula serta-merta

  * Kebolehskalaan anjal apabila anda berkembang

  * Kawalan dan lebihan yang disampaikan oleh Azure dengan SLA masa aktif 99.9%

Maklum balas pengguna:

  * Kami dahulu menggunakan produk itu. Ia begitu mudah dipintas dan peraturan hanya berfungsi untuk orang pintar. Pengguna malas atau bodoh boleh dengan mudah merosakkannya dalam kawasan pasukan. Harga boleh dirunding apabila anda bercakap dengan mereka.

  * Anda boleh menjalankannya menggunakan SQL express dan kotak Win 7. 

  * Murah.
