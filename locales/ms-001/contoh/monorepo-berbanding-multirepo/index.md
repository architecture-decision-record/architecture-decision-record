# Monorepo berbanding multirepo

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

Projek kami melibatkan pembangunan tiga kategori utama perisian:

  * GUI bahagian hadapan
  * Perkhidmatan middleware
  * Pelayan bahagian belakang

Apabila kami membangun, sistem kawalan versi (VCS) pengurusan kod sumber (SCM) kami ialah git.

Kami perlu memilih cara kami menggunakan git untuk mengatur kod kami.

Pilihan peringkat atas ialah mengatur sebagai "monorepo" atau "polyrepo" atau "hibrid":

  * Monorepo bermakna kami meletakkan semua bahagian dalam satu repo besar
  * Polyrepo bermakna kami meletakkan setiap bahagian dalam repo sendiri
  * Hibrid bermakna gabungan monorepo dan polyrepo

Untuk maklumat lanjut sila lihat https://github.com/joelparkerhenderson/monorepo-vs-polyrepo


### Keputusan

Monorepo apabila organisasi/pasukan/projek agak kecil, dan lelaran pantas lebih diutamakan daripada mengekalkan kestabilan.

Polyrepo apabila organisasi/pasukan/projek agak besar, dan mengekalkan kestabilan lebih diutamakan daripada lelaran pantas.


### Status

Diputuskan. Terbuka untuk menilai semula jika/apabila perkakasan baharu tersedia untuk mengurus monorepo dan/atau polyrepo.


## Butiran


### Andaian

Semua kod yang kami bangunkan adalah untuk tawaran satu organisasi, dan bukan untuk orang awam. Iaitu Broker-Dealer tidak bertujuan mempunyai sebarang perkara seperti pembangun sukarela orang awam.


### Kekangan

Kekangan didokumenkan dengan baik di https://github.com/joelparkerhenderson/monorepo-vs-polyrepo


### Pendirian

Kami mempertimbangkan monorepo dalam gaya Google, Facebook dan sebagainya. Kami fikir sebarang isu penskalaan monorepo begitu jauh pada masa hadapan sehingga kami akan dapat memanfaatkan amalan yang sama seperti Google dan Facebook, pada masa kami memerlukannya.

Kami mempertimbangkan polyrepo dalam gaya projek sumber terbuka Git tipikal, seperti Google Android, Facebook React dan sebagainya. Kami fikir ini pilihan terbaik untuk penyertaan orang awam (cth. sesiapa sahaja di dunia boleh bekerja pada kod) dan ketersediaan individu (cth. projek digunakan sendirian, tanpa sebarang bahagian lain).


### Hujah

Apabila organisasi/pasukan/projek agak kecil, kami memilih monorepo, kerana lelaran pantas jauh lebih diutamakan daripada mengekalkan kestabilan

Apabila organisasi/pasukan/projek agak besar, kami memilih polyrepo, kerana mengekalkan kestabilan jauh lebih diutamakan daripada lelaran pantas.


### Implikasi

Jika terdapat saluran paip sedia ada untuk CI+CD, maka kami mungkin perlu menyesuaikannya untuk menguji berbilang projek dalam satu repo.

CI+CD boleh mengambil lebih masa untuk binaan penuh bagi monorepo, kerana CI+CD boleh membina semua projek dalam monorepo.

Jika organisasi/pasukan/projek berkembang, maka monorepo akan mempunyai isu penskalaan.

Isu penskalaan monorepo mungkin menjadikan peralihan kepada polyrepo semakin bernilai.

Peralihan daripada monorepo kepada polyrepo ialah tugas devops yang ketara, dan perlu dirancang, diurus dan diaturcarakan.


## Berkaitan


### Keputusan berkaitan

Kami akan mencipta keputusan untuk perkakasan berkaitan mengurus monorepo (cth. Google Bazel) dan polyrepo (cth. Lyft Refactorator).


### Keperluan berkaitan

Kami perlu membangunkan saluran paip CI+CD supaya berfungsi dengan baik dengan git.


### Artifak berkaitan

Kami menjangkakan organisasi repo mempunyai artifak berkaitan untuk peruntukan, pengurusan konfigurasi, ujian dan bidang devops yang serupa. 


### Prinsip berkaitan

Mudah diterbalikkan. Jika monorepo tidak berfungsi dalam amalan, atau tidak dikehendaki oleh kepimpinan, mudah untuk bertukar kepada polyrepo.

Obsesi Pelanggan. Kami menghargai menyampaikan projek kepada pelanggan, dan kami percaya monorepo boleh membawa kami ke sana lebih pantas daripada polyrepo, dan juga membantu kami berulang lebih pantas.

Fikir besar. Google dan Facebook ialah penyokong yang sangat kuat monorepo berbanding polyrepo, kerana semua tawaran teras boleh dibangunkan/diuji/ditempatkan serentak.


## Nota

Tambah sebarang nota di sini.
