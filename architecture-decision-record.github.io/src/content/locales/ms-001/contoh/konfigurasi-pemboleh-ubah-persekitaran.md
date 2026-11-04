# Konfigurasi pemboleh ubah persekitaran

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

Kami mahu aplikasi kami boleh dikonfigurasikan melangkaui artifak/binari/sumber, supaya satu binaan boleh berkelakuan berbeza bergantung pada persekitaran penempatannya.

  * Untuk mencapai ini, kami mahu menggunakan konfigurasi pemboleh ubah persekitaran.

  * Kami mahu mengurus konfigurasi dengan menggunakan fail yang boleh kami kawal versinya.

  * Kami mahu menyediakan beberapa ergonomik pengalaman pembangun, seperti mengetahui apa yang boleh dikonfigurasikan dan sebarang lalai yang relevan.


### Keputusan

Memutuskan fail .env dengan fail lalai berkaitan dan fail skema.


### Status

Diputuskan. Terbuka untuk mempertimbangkan keupayaan baharu apabila ia timbul.


## Butiran


### Andaian

Kami mengutamakan pengasingan kod aplikasi dan kod persekitaran. Kami menganggap aplikasi perlu berfungsi secara berbeza dalam persekitaran berbeza, seperti dalam persekitaran pembangunan, persekitaran ujian, persekitaran demo, persekitaran pengeluaran dan sebagainya.

Kami mengutamakan amalan industri "12 factor app" dan lebih-lebih lagi amalan berkaitan "15 factor app".

Banyak projek kami sebelum ini telah menggunakan konvensyen fail `.env` atau direktori `.env` yang serupa. Terdapat amalan tipikal untuk memastikan ini di luar kawalan versi, dan sebaliknya menggunakan cara lain untuk menempatkan, mengawal versi dan mengurusnya.


### Kekangan

Kami mahu memastikan rahsia di luar sistem kawalan versi (VCS) pengurusan kod sumber (SCM) kami.

Kami mahu menyasarkan keserasian dengan rangka kerja dan pustaka perisian popular. Contohnya, Node mempunyai modul "dotenv" untuk membaca konfigurasi pemboleh ubah persekitaran.


### Pendirian

Kami mempertimbangkan beberapa pendekatan:

  * Menyimpan konfigurasi dalam aplikasi seperti dalam fail `config.js`.

  * Menyimpan konfigurasi dalam persekitaran seperti dalam fail `.env`.

  * Mengambil konfigurasi dari lokasi yang diketahui seperti pelayan lesen.


### Hujah

Kami memilih pendekatan fail .env kerana:

  * Ia popular termasuk dalam kalangan pakar.

  * Ia mengikut corak fail `.env` yang telah berjaya digunakan oleh pasukan kami berkali-kali dalam banyak projek.

  * Ia mudah. Terutamanya, kami bersetuju buat masa ini dengan pertukaran ketara yang kami lihat, seperti kekurangan keupayaan audit berbanding pendekatan pelayan lesen.


### Implikasi

Kami perlu mencari cara untuk memisahkan konfigurasi pemboleh ubah persekitaran yang awam daripada sebarang pengurusan rahsia.


## Berkaitan


### Keputusan berkaitan

Kami menjangkakan semua aplikasi kami menggunakan pendekatan ini.

Kami akan merancang untuk menaik taraf mana-mana aplikasi kami yang menggunakan pendekatan yang kurang berkemampuan, seperti pengekodan keras dalam binari atau dalam kod sumber.

Kami akan mengekalkan seperti sedia ada mana-mana aplikasi kami yang menggunakan pendekatan yang lebih berkemampuan, seperti pelayan pelesenan.


### Keperluan berkaitan

Kami akan menambah keupayaan devops untuk fail, termasuk hook, ujian dan integrasi berterusan.

Kami perlu melatih semua rakan sepasukan pembangun mengenai keputusan ini.



### Artifak berkaitan

Setiap kawasan di mana kami menempatkan akan memerlukan fail .env dan fail berkaitan sendiri.


### Prinsip berkaitan

Mudah diterbalikkan.


## Nota


Contoh fail `.env`:

```env
NAME=Alice Anderson
EMAIL=alice@example.com
```

Contoh fail `.env.defaults`:

```env
NAME=Joe Doe
EMAIL=joe@example.com
```

Contoh fail `.env.schema` dengan kunci sahaja:

```env
NAME
EMAIL
```
