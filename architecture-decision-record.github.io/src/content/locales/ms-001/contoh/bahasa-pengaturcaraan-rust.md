# Rekod Keputusan Seni Bina: Bahasa pengaturcaraan Rust

Nombor Keputusan: AR-001

Tajuk Keputusan: Penggunaan bahasa pengaturcaraan Rust

Tarikh: 1 Disember 2021

Status: Diterima

### Pernyataan Masalah

Semasa kami terus membangunkan aplikasi perisian, kami perhatikan bahawa semakin mencabar untuk mengurangkan potensi kerentanan keselamatan dan mencegah ralat masa larian. Dengan bahasa pengaturcaraan sedia ada, seperti C dan C++, kami terus mengalami isu seperti limpahan penimbal, kebocoran memori dan tingkah laku tidak ditakrifkan yang membawa kepada nahas aplikasi. Kami memerlukan bahasa pengaturcaraan yang menyediakan jaminan keselamatan memori dan cukup cekap untuk menyokong aplikasi kritikal prestasi.

### Pertimbangan

Beberapa bahasa pengaturcaraan direka untuk menangani masalah sedia ada. Antaranya, bahasa pengaturcaraan Rust telah mendapat perhatian ketara daripada komuniti pembangun disebabkan ciri reka bentuknya yang unik. Pertimbangan termasuk;

1. Keselamatan memori dan keselamatan

2. Prestasi dan kecekapan

3. Sokongan komuniti dan penerimaan

4. Keluk pembelajaran

5. Alat dan ekosistem

6. Keserasian dengan sistem perisian sedia ada.

### Kekangan

Menggunakan bahasa pengaturcaraan baharu memerlukan latihan semula pembangun, yang mengambil masa dan sumber. Mengintegrasikan bahasa ke dalam aliran kerja pembangunan sedia ada mungkin satu cabaran. Kami mesti memastikan keserasian dengan sistem sedia ada dan mengelakkan perubahan yang memecahkan untuk mengekalkan kesinambungan.

### Pelaksanaan

1. Pasukan pembangunan kami akan menjalani latihan untuk mempelajari dan membiasakan diri dengan bahasa pengaturcaraan Rust.

2. Kami akan mencipta projek baharu menggunakan Rust secara percubaan untuk menilai keserasian dan kesesuaiannya untuk tujuan pembangunan kami.

3. Kami akan berhijrah secara beransur-ansur sistem sedia ada yang ditulis dalam C dan C++ ke Rust.

4. Kami akan bekerjasama dengan komuniti Rust untuk meneroka alat dan pustaka yang tersedia yang boleh meningkatkan aliran kerja pembangunan kami.

5. Kami akan memantau prestasi Rust dan membandingkannya dengan prestasi bahasa pengaturcaraan sedia ada secara tetap.

6. Kami akan menerima pakai pendekatan jangka panjang yang mengimbangi kos latihan, integrasi dan faedah berpotensi menggunakan Rust.

### Rasional

Kami telah menggunakan Rust kerana ciri uniknya yang direka untuk menyediakan jaminan keselamatan memori dan keselamatan sambil mengekalkan prestasi dan kecekapan. Sistem jenis Rust yang mantap, penyemak pinjaman (borrow checker) dan konsep keselamatan memori menjadikannya sangat sesuai untuk membangunkan aplikasi kritikal prestasi dan kritikal keselamatan. Lebih-lebih lagi, Rust mempunyai komuniti pembangun yang ketara, membolehkan kami mengakses pelbagai alat, pustaka dan ekosistem yang menyokong aliran kerja pembangunan kami. Walaupun Rust datang dengan keluk pembelajaran, kami percaya faedah menggunakan Rust melebihi kos dan menyediakan peluang cemerlang untuk pertumbuhan dan inovasi berterusan.

### Akibat

1. Penggunaan Rust akan memerlukan pelaburan ketara dalam masa dan sumber untuk melatih pembangun dan mengintegrasikan bahasa ke dalam aliran kerja pembangunan sedia ada.

2. Menggunakan Rust boleh menyebabkan beberapa tahap isu keserasian dengan sistem sedia ada, yang memerlukan refactoring dan pengubahsuaian.

3. Penggunaan Rust mungkin meningkatkan bilangan pembangun yang boleh menyumbang kepada projek kami dengan menarik pembangun Rust yang mahu bekerja pada projek yang menarik.

4. Penggunaan boleh membawa kepada prestasi, kecekapan dan keselamatan yang lebih baik berbanding bahasa sedia ada.

5. Akhir sekali, menggunakan Rust membawa potensi faedah mengurangkan kerentanan keselamatan dalam aplikasi kami.
   
<h6>Kredit: halaman ini dijana oleh ChatGPT, kemudian disunting untuk kejelasan dan format.</h6>
