## Rekod keputusan seni bina: rangka kerja automasi pelayar untuk ujian E2E (Playwright berbanding Selenium)

### 1. **Konteks**

Kami sedang memilih rangka kerja automasi pelayar untuk saluran paip ujian hujung ke hujung (E2E) kami. Rangka kerja ini akan menjadi sebahagian penting daripada proses CI/CD kami, menjalankan ujian yang mensimulasikan interaksi pengguna sebenar pada platform kami. Secara khusus, ujian akan meliputi senario seperti pendaftaran/log masuk pengguna, muat naik fail, interaksi papan pemuka dan muat turun laporan.

Sebagai **startup**, fokus kami ialah **pembangunan agile**, dengan keperluan untuk berulang dan berkembang dengan pantas. Pasukan kami kebanyakannya bekerja dengan **TypeScript** dan **Python**, dan keupayaan menulis ujian dalam bahasa ini adalah penting. Selain itu, platform ini mengandungi **carta dan papan pemuka interaktif**, yang menjadikan ia kritikal bahawa alat automasi menyokong UI yang kaya dan dinamik dengan baik.

Dua pesaing untuk tugas ini ialah **Playwright** dan **Selenium**, masing-masing dengan kekuatan dan pertukaran tersendiri. Kami perlu menilai rangka kerja ini berdasarkan ciri dan keperluan yang digariskan di bawah.

### 2. **Pilihan yang Dipertimbangkan**

- **Playwright** (oleh Microsoft)
- **Selenium** (oleh Projek Selenium)

### 3. **Pemacu Keputusan**

Faktor yang mempengaruhi keputusan kami adalah seperti berikut:

1. **Pembangunan Agile**: Alat yang dipilih mesti membolehkan kitaran pembangunan yang pantas dan fleksibel.
2. **Sokongan Bahasa**: Pasukan kami memerlukan sokongan untuk **TypeScript** dan **Python**.
3. **Ujian UI Interaktif**: Keupayaan menguji carta, papan pemuka dan elemen dinamik dengan boleh dipercayai adalah penting.
4. **Kelajuan Masa Larian**: Walaupun bukan kebimbangan utama, prestasi dalam saluran paip CI/CD ialah pertimbangan.
5. **Kebolehskalaan**: Kami tidak merancang penskalaan besar-besaran dalam masa terdekat, tetapi kami mahu memastikan penyelesaian dapat mengendalikan pertumbuhan masa hadapan.
6. **Keserasian ke Belakang**: Sistem warisan dan keserasian dengan pelayar lama tidak kritikal untuk projek kami pada masa ini.
7. **Ujian Mudah Alih**: Walaupun bukan fokus segera, rangka kerja perlu mampu menguji ciri responsif mudah alih atau boleh dilanjutkan untuk kes penggunaan sedemikian.
8. **Ujian Berbilang Monitor**: Sokongan untuk konfigurasi berbilang monitor ialah keperluan sekunder, terutamanya jika kami pernah menskalakan untuk menguji aliran kerja pengguna yang lebih kompleks.
9. **Ujian Muat Naik Fail**: Rangka kerja mesti mengendalikan muat naik fail dengan cekap, keperluan teras dalam keperluan ujian kami.

### 4. **Kriteria Penilaian**

- **Kemudahan Penggunaan**: Sejauh mana mudahnya menulis dan menyelenggara ujian?
- **Sokongan Bahasa**: Adakah rangka kerja menyokong TypeScript dan Python, dua bahasa yang paling kerap digunakan oleh pasukan kami?
- **Ujian UI Interaktif**: Sejauh mana rangka kerja mengendalikan antara muka pengguna yang kompleks dan interaktif seperti carta, muat naik fail dan data dinamik?
- **Integrasi CI/CD**: Sejauh mana rangka kerja disepadukan ke dalam alat dan perkhidmatan CI/CD biasa?
- **Sokongan Merentas Pelayar**: Pelayar apa yang disokong dan sejauh mana prestasinya?
- **Prestasi dan Kelajuan**: Sepantas mana ujian dijalankan, terutamanya dalam saluran paip CI/CD?
- **Kebolehskalaan**: Sejauh mana rangka kerja boleh diskalakan jika lebih banyak ujian atau senario yang lebih kompleks ditambah?
- **Komuniti dan Ekosistem**: Sejauh mana aktifnya komuniti rangka kerja? Adakah terdapat banyak integrasi dan sambungan tersedia?

### 5. **Pertimbangan**

#### 5.1 **Playwright**

##### **Kebaikan**:
1. **API Lebih Pintar untuk Muat Naik Fail Tempatan**: API Playwright untuk berinteraksi dengan fail tempatan dan melakukan muat naik fail lebih mudah dan lebih intuitif. Ini akan menjadikan ujian muat naik fail lebih mudah dilaksanakan dan diselenggara.
2. **Sintaks dan Penjanaan Kod**: Playwright mempunyai sintaks yang lebih pendek dan ringkas. Ini menghasilkan kurang kod boilerplate, yang meningkatkan kebolehselenggaraan dan kecekapan pembangun. Selain itu, sintaks yang lebih pendek ini meningkatkan kualiti penjanaan kod OpenAI, memudahkan penjanaan skrip ujian secara automatik.
3. **Ujian UI Interaktif**: Playwright cemerlang dalam menguji aplikasi web dinamik dan interaktif, seperti yang mempunyai carta kaya, interaksi pengguna kompleks dan kemas kini masa nyata. Ia mengendalikan WebSockets, WebRTC, shadow DOM dan teknologi web moden lain dengan sangat berkesan.
4. **Sokongan Merentas Pelayar**: Playwright menyokong **Chromium**, **WebKit** dan **Firefox**. Ia mempunyai prestasi yang konsisten merentasi pelayar ini, yang sepatutnya meliputi kebanyakan keperluan ujian kami.
5. **Integrasi CI/CD**: Playwright disepadukan dengan lancar dengan platform CI/CD moden (GitHub Actions, Jenkins dan sebagainya). Ia boleh menjalankan ujian secara selari merentasi pelayar berbeza, mengoptimumkan masa larian ujian dan menjadikannya sesuai untuk pembangunan pantas.
6. **Pantas dan Boleh Dipercayai**: Playwright lebih pantas daripada Selenium secara amnya, terutamanya dalam mod headless, dan lebih tahan apabila berurusan dengan elemen web tak segerak.

##### **Keburukan**:
1. **Ujian Mudah Alih Terhad**: Walaupun Playwright menyokong emulasi mudah alih untuk pelayar, ia tidak mempunyai keupayaan ujian mudah alih natif seperti integrasi Selenium dengan Appium untuk ujian mudah alih sebenar.
2. **Ekosistem Lebih Kecil**: Playwright masih lebih baharu dan kurang mantap berbanding Selenium. Walaupun ia mempunyai komuniti yang berkembang pesat dan dokumentasi yang baik, ia mungkin belum mempunyai ekosistem plugin dan integrasi yang luas seperti yang ditawarkan Selenium.
3. **Sokongan Pelayar Terhad**: Walaupun Playwright meliputi pelayar moden utama (Chrome, Safari, Firefox), sokongannya untuk pelayar warisan (cth., Internet Explorer) tidak sekukuh Selenium.

#### 5.2 **Selenium**

##### **Kebaikan**:
1. **Sejarah Lebih Panjang dan Kematangan**: Selenium telah wujud sejak sekian lama dan mempunyai rekod terbukti. Ia digunakan secara meluas merentasi banyak pasukan dan industri, yang membawa kepada ekosistem plugin, integrasi dan sumber yang luas.
2. **Sokongan Merentas Pelayar dan Merentas Platform**: Selenium menyokong **pelbagai pelayar** dan versi, termasuk **Internet Explorer**, dan juga boleh disepadukan dengan pelbagai alat seperti **Docker**, **Selenium Grid** dan **perkhidmatan awan** untuk ujian teragih.
3. **Ujian Mudah Alih**: Selenium, melalui integrasinya dengan **Appium**, jauh lebih mantap untuk ujian mudah alih, termasuk aplikasi Android dan iOS. Ini menjadikannya pilihan yang lebih baik untuk projek dengan fokus mudah alih-dahulu atau berat mudah alih.
4. **Ujian Berbilang Monitor**: Selenium menyediakan sokongan yang lebih baik untuk senario yang melibatkan **berbilang monitor** atau interaksi berbilang tetingkap yang kompleks.

##### **Keburukan**:
1. **Kerumitan**: API Selenium lebih panjang lebar dan eksplisit. Walaupun ini boleh menjadi kelebihan dalam sesetengah kes, ia bermakna lebih banyak kod untuk ditulis dan diselenggara, yang boleh mengurangkan ketangkasan pembangun—terutamanya penting dalam persekitaran startup.
2. **Prestasi**: Selenium secara amnya berjalan lebih perlahan daripada Playwright, terutamanya dalam mod headless. Ini boleh menjejaskan saluran paip CI/CD, terutamanya apabila bilangan ujian bertambah.
3. **Ujian UI Interaktif**: Selenium tidak selancar Playwright apabila menguji UI web moden yang interaktif, terutamanya dengan carta dan kemas kini data masa nyata. Ia memerlukan lebih banyak persediaan dan pengendalian untuk berinteraksi dengan kandungan dinamik secara boleh dipercayai.

### 6. **Ringkasan Perbandingan**

| Ciri                          | Playwright                                    | Selenium                                   |
|-----------------------------------|-----------------------------------------------|-------------------------------------------|
| **Kemudahan Penggunaan**                   | Sintaks lebih pendek, lebih intuitif untuk UI moden | Lebih eksplisit, memerlukan lebih banyak boilerplate  |
| **Sokongan Bahasa**              | TypeScript, Python, JavaScript                | TypeScript, Python, Java, Ruby, C#        |
| **Ujian UI Interaktif**        | Cemerlang untuk UI dinamik masa nyata          | Mengendalikan UI asas, tetapi lebih panjang lebar dan kompleks untuk interaksi kaya |
| **Ujian Muat Naik Fail**           | API lebih pintar untuk muat naik fail                  | API lebih panjang lebar, kurang intuitif         |
| **Integrasi CI/CD**             | Integrasi mudah dengan GitHub Actions, Jenkins | Integrasi kukuh dengan banyak alat CI    |
| **Ujian Mudah Alih**                | Terhad, emulasi sahaja                       | Sokongan penuh melalui Appium               |
| **Sokongan Merentas Pelayar**         | Chromium, WebKit, Firefox                     | Sokongan penuh merentasi pelayar utama dan warisan |
| **Prestasi**                   | Pantas, dioptimumkan untuk ujian headless          | Lebih perlahan, terutamanya dalam mod headless       |
| **Ujian Berbilang Monitor**         | Terhad                                       | Sokongan baik untuk persediaan berbilang monitor    |
| **Komuniti dan Ekosistem**       | Berkembang, dokumentasi baik                   | Besar, matang, ekosistem luas       |

### 7. **Keputusan**

Selepas mempertimbangkan keperluan dan pertukaran, **Playwright** ialah pilihan yang lebih baik untuk keperluan semasa kami. API yang lebih pintar untuk ujian muat naik fail tempatan, sintaks ringkas dan sokongan kukuh untuk ujian UI interaktif menjadikannya sesuai dengan kitaran pembangunan agile kami. Hakikat bahawa ia menyokong kedua-dua **TypeScript** dan **Python** adalah kritikal untuk pasukan kami, dan pendekatan moden rangka kerja ini terhadap ujian akan membolehkan kami menulis kod yang bersih dan mudah diselenggara.

Walaupun **Selenium** kekal sebagai alat yang hebat, terutamanya untuk ujian mudah alih, sokongan pelayar warisan dan persediaan berbilang monitor, ia kurang sesuai untuk keperluan semasa kami. Sifat panjang lebarnya, prestasi lebih perlahan dan pengendalian UI dinamik yang lebih kompleks seperti carta menjadikannya kurang optimum untuk kes penggunaan kami.

### 8. **Akibat**

- **Tindakan Segera**: Kami akan menggunakan **Playwright** untuk ujian E2E kami, dengan fokus menguji aliran pengguna yang melibatkan pendaftaran, log masuk, muat naik fail, papan pemuka dan muat turun laporan.
- **Pertimbangan Jangka Panjang**: Kami akan memerhatikan ekosistem Playwright yang berkembang. Jika keperluan kami berubah, terutamanya berkenaan ujian mudah alih atau sokongan untuk pelayar warisan, kami mungkin menilai semula Selenium.
- **Latihan dan Dokumentasi**: Pasukan pembangunan perlu membiasakan diri dengan API Playwright, terutamanya untuk mengendalikan UI dinamik dan muat naik fail.
- **Migrasi**: Ujian Selenium sedia ada (jika ada) akan dimigrasikan secara beransur-ansur ke Playwright.

### 9. **Pertimbangan Masa Hadapan**
