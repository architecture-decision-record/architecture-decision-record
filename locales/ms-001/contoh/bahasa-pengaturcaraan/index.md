# Bahasa pengaturcaraan

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

Kami perlu memilih bahasa pengaturcaraan untuk perisian kami. Kami mempunyai dua keperluan utama: bahasa pengaturcaraan bahagian hadapan yang sesuai untuk aplikasi web, dan bahasa pengaturcaraan bahagian belakang yang sesuai untuk aplikasi pelayan.


### Keputusan

Kami memilih TypeScript untuk bahagian hadapan.

Kami memilih Rust untuk bahagian belakang.


### Status

Diputuskan. Kami terbuka kepada alternatif baharu apabila ia muncul.


## Butiran


### Andaian

Aplikasi bahagian hadapan adalah tipikal:

  * Pengguna dan interaksi tipikal

  * Pelayar dan sistem tipikal

  * Pembangunan dan penempatan tipikal

Aplikasi bahagian hadapan berkemungkinan berkembang dengan pantas:

  * Kami mahu memastikan pembangunan, penempatan, lelaran dan sebagainya yang pantas dan mudah.

  * Kami menghargai kebolehbuktian, seperti keselamatan jenis, dan kami bersetuju melakukan sedikit lebih kerja untuk mencapainya.

  * Kami tidak memerlukan keserasian warisan.

Aplikasi bahagian belakang lebih tinggi daripada tipikal:

  * Matlamat lebih tinggi daripada tipikal untuk kualiti, terutamanya kebolehbuktian, kebolehpercayaan, keselamatan dan sebagainya.

  * Matlamat lebih tinggi daripada tipikal untuk hampir-masa-nyata, iaitu kami tidak mahu jeda akibat pengumpulan sampah mesin maya.

  * Matlamat lebih tinggi daripada tipikal untuk pengaturcaraan fungsian, terutamanya untuk penyelarian, pemprosesan berbilang teras dan keselamatan memori.

Kami menerima kelajuan masa kompil yang lebih rendah demi keselamatan masa kompil dan kelajuan masa larian.


### Kekangan

Kami mempunyai kekangan kukuh pada bahasa yang boleh digunakan dengan perkhidmatan penyedia awan utama untuk fungsi, seperti Amazon Lambda.


### Pendirian

Kami mempertimbangkan bahasa ini:

  * C

  * C++

  * Clojure
  
  * Elixir
  
  * Erlang
  
  * Elm
  
  * Flow
  
  * Go
  
  * Haskell
  
  * Java
  
  * JavaScript
  
  * Kotlin
  
  * Python
  
  * Ruby
  
  * Rust
  
  * TypeScript



### Hujah

Ringkasan bagi setiap bahasa:

  * C: ditolak kerana keselamatan rendah; Rust boleh melakukan hampir semua perkara dengan lebih baik.

  * C++: ditolak kerana ia kekusutan; Rust boleh melakukan hampir semua perkara dengan lebih baik.

  * Clojure: pemodelan cemerlang; penghampiran Lisp terbaik; masa larian hebat pada JVM.
  
  * Elixir: masa larian cemerlang termasuk kebolehtempatan dan keserentakan; pengalaman pembangun cemerlang; ekosistem agak kecil.

  * Erlang: masa larian cemerlang termasuk kebolehtempatan dan keserentakan; pengalaman pembangun mencabar; ekosistem agak kecil.

  * Elm: kelihatan sangat menjanjikan; IBM menerbitkan kajian kes utama dengan hasil yang baik; ekosistem lebih kecil.

  * Flow: penambahbaikan menarik berbanding JavaScript; namun; pembangun beralih daripadanya.

  * Go: pengalaman pembangun cemerlang; keserentakan cemerlang; tetapi rekod keputusan buruk yang melumpuhkan bahasa itu.

  * Haskell: bahasa fungsian terbaik; komuniti pembangun lebih kecil; belum mencapai cukup kejayaan pengeluaran yang diterbitkan.

  * Java: masa larian cemerlang; ekosistem cemerlang; pengalaman pembangun tidak memuaskan.

  * JavaScript: bahasa paling popular pernah ada; ekosistem paling meluas.

  * Kotlin: membetulkan begitu banyak perkara tentang Java; sokongan cemerlang daripada JetBrains; kes yang diterbitkan baik tentang memindahkan dari Java ke Kotlin.
  
  * Python: bahasa paling popular untuk pentadbiran sistem; perkakasan analitik hebat; rangka kerja web yang baik; tetapi ditinggalkan oleh Google demi Go.

  * Ruby: pengalaman pembangun terbaik pernah ada; rangka kerja web terbaik; komuniti paling menyenangkan; tetapi sangat perlahan; agak sukar dibungkus.

  * Rust: bahasa baharu terbaik; penekanan sifar-abstraksi; penekanan keserentakan; namun ekosistem agak kecil; dan mempunyai had sengaja pada sesetengah jenis pecutan pengkompil cth. akses memori langsung perlu secara eksplisit tidak selamat.

  * TypeScript: menambah jenis kepada JavaScript; transpiler hebat; penekanan pembangun yang semakin meningkat untuk memindahkan dari JavaScript ke TypeScript; sokongan kukuh daripada Microsoft.

Kami memutuskan bahawa VM mempunyai set pertukaran yang kami tidak perlukan sekarang, seperti kerumitan tambahan yang menyediakan keupayaan masa larian.

Kami percaya bahawa keputusan teras kami didorong oleh dua kebimbangan merentas:

  * Untuk kelajuan masa larian terpantas dan akses sistem paling rapat, kami akan memilih JavaScript dan C.

  * Untuk kelajuan masa larian hampir terpantas dan akses sistem hampir paling rapat, kami memilih TypeScript dan Rust.

Sebutan penghormatan diberikan kepada bahasa VM dan rangka kerja web yang akan kami pilih jika kami mahu bahasa VM:

  * Clojure dan Luminus

  * Java dan Spring

  * Elixir dan Phoenix


### Implikasi

Pembangun bahagian hadapan perlu mempelajari TypeScript. Ini berkemungkinan keluk pembelajaran yang mudah jika pengalaman utama pembangun ialah menggunakan JavaScript.

Pembangun bahagian belakang perlu mempelajari Rust. Ini berkemungkinan keluk pembelajaran sederhana jika pengalaman utama pembangun ialah menggunakan C/C++, dan keluk pembelajaran sukar jika pengalaman utama pembangun ialah menggunakan Java, Python, Ruby atau bahasa terurus memori yang serupa. 

TypeScript dan Rust kedua-duanya agak baharu. Ini bermakna banyak alat belum mempunyai dokumentasi untuk bahasa ini. Contohnya, saluran paip devops perlu disediakan untuk bahasa ini, dan setakat ini, tiada satu pun alat devops yang kami nilai mempunyai contoh lalai untuk bahasa ini.

Masa kompil untuk TypeScript dan Rust agak perlahan. Sebahagian daripada ini mungkin disebabkan kebaharuan bahasa. Kami mungkin mahu meneliti cara mengurangkan masa kompil yang perlahan, seperti kompil-atas-permintaan, keserentakan-kompil dan sebagainya.

Sokongan IDE untuk bahasa ini belum meluas dan belum kelas pertama. Contohnya, JetBrains menjual IDE PyCharm untuk sokongan kelas pertama bagi Python, tetapi tidak menjual IDE dengan sokongan kelas pertama untuk Rust; sebaliknya, JetBrains boleh menggunakan pemalam Rust yang menyediakan mungkin 80% sokongan bahasa Rust berbanding sokongan bahasa Python.


## Berkaitan


### Keputusan berkaitan

Kami akan menyasarkan pilihan ekosistem yang sejajar dengan bahasa ini.

Contohnya, kami mahu memilih IDE yang mempunyai keupayaan baik untuk bahasa ini.

Contohnya, untuk rangka kerja web bahagian hadapan kami, kami lebih berkemungkinan memutuskan rangka kerja yang cenderung menyasarkan TypeScript (cth. Vue) berbanding rangka kerja yang cenderung menyasarkan JavaScript biasa (cth. React).


### Keperluan berkaitan

Seluruh rantaian alat kami mesti menyokong bahasa ini.


### Artifak berkaitan

Kami menjangkakan kami mungkin mengeksport beberapa rahsia kepada pemboleh ubah persekitaran.


### Prinsip berkaitan

Ukur dua kali, bina sekali. Kami mengutamakan sedikit keselamatan berbanding sedikit kelajuan.

Masa larian lebih bernilai daripada masa kompil. Kami mengutamakan penggunaan pelanggan berbanding penggunaan pembangun.


## Nota

Sebarang nota di sini.
