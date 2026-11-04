# Rekod Keputusan Seni Bina: kit alat pustaka carta untuk visualisasi data menggunakan TypeScript dan JSON

<!--

ChatGPT prompt:

Long software architecture decision record 
chart library toolkit for data visualization using TypeScript and JSON

Evaluate Charts: Apache ECharts, Chart.js, ApexCharts, AG Charts, Highcharts, Carbon Charts, Layer Cake, D3.

Primary need: advanced interactive charts, especially for financial data, scientific data, and government data.

High importance: 1. Agile development because this is for a startup. 2. Doughnut Chart, Radar Chart, Clustering Process
Chart, Area Chart with Time Axis, Candlestick Chart, Nightingale Chart, Geo SVG Map. 3. Free open source.

Low importance: 1. Runtime speed. 2. Scalability. 3. Backwards compatibility.

-->

**Objektif Utama:**  
Memilih kit alat carta termaju untuk mencipta visualisasi interaktif, dengan tumpuan pada data kewangan, data saintifik dan data kerajaan menggunakan TypeScript dan JSON. Pustaka ini perlu menyediakan ciri yang mantap, fleksibiliti dan bersumber terbuka. 

### Konteks dan Keperluan:

1. **Pembangunan Agile (Keutamaan Tinggi)**: Sebagai startup, lelaran pantas, prototaip dan fleksibiliti dalam pembangunan adalah penting. Pustaka carta mesti membenarkan kitaran pembangunan yang pantas.
   
2. **Jenis Carta (Keutamaan Tinggi)**:
   - **Carta Donat (Doughnut)**
   - **Carta Radar**
   - **Carta Proses Pengelompokan (Clustering Process)**
   - **Carta Kawasan dengan Paksi Masa (Area Chart with Time Axis)**
   - **Carta Candlestick**
   - **Carta Nightingale**
   - **Peta Geo SVG**
   
   Jenis carta ini amat penting untuk memvisualisasikan set data kompleks, seperti arah aliran kewangan, metrik saintifik dan maklumat geografi.

3. **Percuma dan Sumber Terbuka (Keutamaan Tinggi)**: Kit alat perlu bersumber terbuka untuk mengelakkan kos pelesenan, menyediakan ketelusan dan menawarkan fleksibiliti untuk penyesuaian.

4. **Kriteria Kepentingan Rendah**:
   - **Kelajuan Masa Larian**: Walaupun prestasi penting, ia bukan keutamaan teratas untuk keputusan ini.
   - **Kebolehskalaan**: Walaupun kebolehskalaan secara amnya penting, keperluan segera ialah membina MVP yang mungkin berkembang dari semasa ke semasa. Kebimbangan kebolehskalaan boleh ditangani kemudian.
   - **Keserasian ke Belakang**: Bukan kebimbangan utama untuk binaan awal, selagi pustaka itu moden dan diselenggara secara aktif.

### Pustaka yang Dinilai:

1. **Apache ECharts**
2. **Chart.js**
3. **ApexCharts**
4. **AG Charts**
5. **Highcharts**
6. **Carbon Charts**
7. **Layer Cake**
8. **D3.js**

---

### 1. **Apache ECharts**

**Gambaran Keseluruhan**:  
Apache ECharts ialah pustaka carta yang berkuasa dan fleksibel untuk visualisasi interaktif yang boleh disesuaikan. Ia menyediakan sokongan untuk pelbagai jenis carta dan amat kuat dalam visualisasi yang kompleks dan dinamik.

**Kekuatan**:
- **Interaktiviti Termaju**: ECharts cemerlang dalam menyediakan carta interaktif, menawarkan ciri seperti zum, menggeser dan kemas kini data dinamik.
- **Donat, Radar, Candlestick, Peta Geo SVG**: ECharts menyokong banyak jenis carta yang diperlukan, termasuk donat, radar, candlestick dan visualisasi peta geografi.
- **Percuma dan Sumber Terbuka**: ECharts ialah pustaka sumber terbuka, yang sesuai dengan sifat berhemat bajet startup dan memberikan kebebasan mengubah suai kod.
- **Fleksibiliti dan Kebolehlanjutan**: Sangat boleh disesuaikan, dengan sokongan meluas untuk animasi, visualisasi tersuai dan teknik carta termaju.
  
**Kelemahan**:
- **Keluk Pembelajaran**: ECharts, walaupun berkuasa, boleh mempunyai keluk pembelajaran yang lebih curam disebabkan fleksibiliti dan API yang luas.
- **Kerumitan Dokumentasi**: Dokumentasi adalah menyeluruh tetapi boleh membebankan pembangun yang baru bermula menggunakannya.

**Penghakiman**:  
ECharts sangat sesuai untuk projek ini kerana sokongannya untuk carta interaktif, termasuk semua jenis yang diperlukan seperti carta candlestick, carta radar dan peta geo. Sifat sumber terbukanya selaras dengan keperluan projek untuk fleksibiliti dan keberkesanan kos.

---

### 2. **Chart.js**

**Gambaran Keseluruhan**:  
Chart.js ialah pustaka carta yang mudah dan senang digunakan untuk membina jenis carta biasa. Ia terkenal dengan kesederhanaan dan kemudahan integrasinya.

**Kekuatan**:
- **Kemudahan Penggunaan**: Chart.js sangat mudah disediakan dan digunakan, dengan keluk pembelajaran minimum.
- **Sumber Terbuka**: Chart.js percuma dan bersumber terbuka, yang kritikal untuk mengurangkan kos.
- **Jenis Carta Biasa**: Ia menyokong carta asas seperti donat, kawasan, radar dan garis, yang meliputi kebanyakan keperluan utama.

**Kelemahan**:
- **Carta Termaju Terhad**: Chart.js tidak menyokong secara natif jenis carta kompleks seperti carta candlestick, peta geo SVG atau carta proses pengelompokan. Walaupun ciri ini boleh ditambah melalui plugin atau penyesuaian, ia tidak semudah dengan pustaka lain.
- **Interaktiviti**: Walaupun Chart.js menyokong interaktiviti asas (cth., tooltip dan kesan hover), ia tidak menawarkan ciri semaju ECharts atau D3.js.

**Penghakiman**:  
Chart.js sangat bagus untuk projek mudah dan pantas, tetapi kekurangan sokongan untuk jenis carta kompleks menjadikannya tidak sesuai untuk aplikasi berat data dengan keperluan termaju seperti carta candlestick dan peta geo. Ia pilihan yang baik untuk prototaip, tetapi untuk jenis carta yang diperlukan, alat yang lebih termaju disyorkan.

---

### 3. **ApexCharts**

**Gambaran Keseluruhan**:  
ApexCharts ialah pustaka carta moden yang menyediakan pelbagai jenis carta dan menumpukan pada visualisasi interaktif dengan API yang mudah digunakan.

**Kekuatan**:
- **Ciri Interaktif**: ApexCharts menawarkan carta interaktif dengan tooltip, zum, menggeser dan kemas kini.
- **Sokongan untuk Carta Kewangan dan Saintifik**: Ia menyokong pelbagai jenis carta, termasuk carta candlestick, carta radar dan carta kawasan.
- **Kemudahan Penggunaan**: Ia mempunyai API yang mudah dan senang disepadukan ke dalam projek.
- **Percuma dan Sumber Terbuka**: ApexCharts menawarkan versi sumber terbuka percuma yang sesuai untuk banyak kes penggunaan.
  
**Kelemahan**:
- **Penyesuaian Kompleks**: Walaupun ia menyediakan banyak ciri, pilihan penyesuaian tidak sefleksibel ECharts atau D3.js untuk keperluan carta yang sangat kompleks atau tersuai.
- **Peta Geo**: ApexCharts tidak menyokong secara natif peta geo atau carta proses pengelompokan, yang diperlukan untuk projek ini.

**Penghakiman**:  
ApexCharts ialah pesaing yang kuat kerana kemudahan penggunaan dan interaktivitinya, tetapi ia kurang dalam jenis carta termaju tertentu, terutamanya keperluan untuk peta geo dan carta pengelompokan. Ia pilihan yang baik untuk carta yang lebih mudah tetapi kekurangan beberapa ciri yang diperlukan.

---

### 4. **AG Charts**

**Gambaran Keseluruhan**:  
AG Charts ialah pustaka carta gred komersial yang direka untuk prestasi dan ketepatan. Ia sangat sesuai untuk mencipta papan pemuka kewangan, saintifik dan perniagaan.

**Kekuatan**:
- **Jenis Carta Termaju**: AG Charts menyokong banyak jenis carta termaju, termasuk carta candlestick, carta kawasan, carta radar dan banyak lagi. Ia juga menawarkan integrasi mendalam dengan produk AG-Grid yang lain.
- **Prestasi Tinggi**: Ia menawarkan prestasi cemerlang, terutamanya apabila berurusan dengan set data besar.
- **Interaktiviti**: AG Charts menyokong pelbagai ciri interaktif seperti zum, tooltip dan kemas kini dinamik.

**Kelemahan**:
- **Tidak Sepenuhnya Percuma**: Walaupun AG Charts menawarkan versi percuma, versi berciri penuh adalah berbayar, yang boleh menjadi halangan bagi startup yang ingin meminimumkan kos.
- **Kerumitan**: Walaupun pustaka ini kaya ciri, ia mungkin berlebihan untuk projek yang lebih mudah dan boleh memerlukan lebih banyak persediaan dan konfigurasi berbanding pilihan lain.

**Penghakiman**:  
AG Charts berkuasa dan kaya ciri tetapi mungkin bukan padanan terbaik disebabkan sifat komersial dan struktur kosnya. Kesesuaiannya bergantung pada sama ada bajet boleh menampung versi berbayar atau sama ada alternatif sumber terbuka lebih diutamakan.

---

### 5. **Highcharts**

**Gambaran Keseluruhan**:  
Highcharts ialah pustaka carta popular yang terkenal dengan pelbagai jenis carta dan pilihan penyesuaian yang berkuasa.

**Kekuatan**:
- **Jenis Carta Menyeluruh**: Highcharts menyokong pelbagai carta, termasuk candlestick, radar, kawasan dan peta geo.
- **Interaktif dan Dinamik**: Highcharts menyediakan ciri interaktif yang kaya, termasuk drill-down, zum dan menggeser.
- **Kemudahan Penggunaan**: Ia mempunyai API mesra pengguna dan dokumentasi yang baik, menjadikannya mudah untuk bermula.

**Kelemahan**:
- **Lesen Komersial**: Walaupun Highcharts menawarkan versi percuma untuk kegunaan bukan komersial, lesen komersial adalah mahal, yang boleh menjadi kelemahan ketara bagi startup.
- **Keluk Pembelajaran**: Walaupun tidak secuman ECharts, keluk pembelajaran Highcharts masih boleh mencabar bagi pemula.

**Penghakiman**:  
Highcharts ialah pustaka kaya ciri, tetapi pelesenan komersialnya menjadikannya kurang sesuai untuk projek sumber terbuka yang sensitif kos. Pilihan carta yang menyeluruh adalah satu kelebihan, tetapi isu pelesenan mengehadkan tarikannya untuk kes penggunaan ini.

---

### 6. **Carbon Charts**

**Gambaran Keseluruhan**:  
Carbon Charts ialah pustaka carta yang dibangunkan oleh IBM, direka untuk mencipta carta yang menarik secara visual dan sangat boleh disesuaikan.

**Kekuatan**:
- **Kebolehsesuaian**: Carbon Charts membenarkan penyesuaian meluas rupa dan tingkah laku carta.
- **Sumber Terbuka**: Ia percuma dan bersumber terbuka, yang selaras dengan keperluan projek untuk penyelesaian mesra bajet.
- **Sokongan untuk Carta Biasa**: Ia menyokong jenis carta biasa seperti donat, radar dan kawasan, walaupun ia tidak menyokong jenis yang lebih termaju seperti peta geo atau carta candlestick.

**Kelemahan**:
- **Jenis Carta Termaju Terhad**: Ia tidak menyokong peta geo, carta proses pengelompokan atau carta candlestick, yang penting untuk projek.
- **Ekosistem Lebih Kecil**: Carbon Charts mempunyai komuniti dan ekosistem yang lebih kecil berbanding pustaka carta yang lebih besar seperti ECharts atau Highcharts.

**Penghakiman**:  
Carbon Charts bersumber terbuka dan boleh disesuaikan tetapi tidak menyokong jenis carta yang lebih kompleks yang diperlukan untuk projek ini. Ia lebih sesuai untuk keperluan carta yang lebih mudah.

---

### 7. **Layer Cake**

**Gambaran Keseluruhan**:  
Layer Cake ialah pustaka visualisasi data yang direka untuk mencipta visualisasi berlapis yang fleksibel.

**Kekuatan**:
- **Lapisan yang Boleh Disesuaikan**: Ia menyediakan pilihan pelapisan yang berkuasa untuk visualisasi kompleks.
- **Sumber Terbuka**: Ia percuma dan bersumber terbuka, menjadikannya pilihan yang berdaya maju untuk projek yang sedar bajet.

**Kelemahan**:
- **Dokumentasi Terhad**: Layer Cake tidak mempunyai dokumentasi dan sokongan komuniti yang meluas, menjadikannya lebih sukar untuk digunakan berbanding pustaka yang lebih mantap.
- **Tidak Dibina untuk Carta**: Layer Cake lebih sesuai untuk visualisasi bukan carta, jadi pilihan carta siap pakainya adalah terhad.

**Penghakiman**:  
Walaupun menarik untuk visualisasi unik, Layer Cake tidak ideal untuk keperluan carta tradisional seperti carta candlestick atau carta radar. Ia lebih sesuai untuk visualisasi tersuai di luar skop carta standard.

---

### 8. **D3.js**

**Gambaran Keseluruhan**:  
D3.js ialah pustaka JavaScript berkuasa untuk mencipta visualisasi dipacu data melalui HTML, SVG dan CSS.

**Kekuatan**:
- **Fleksibiliti Tiada Tandingan**: D3.js membolehkan penciptaan hampir apa jua jenis visualisasi tersuai, menjadikannya sangat berkuasa untuk carta termaju dan interaktif.
- **Ciri Meluas**: Ia menyokong semua jenis carta yang diperlukan, termasuk peta geo, carta pengelompokan dan banyak lagi.
- **Boleh Disesuaikan**: Tahap penyesuaian dalam D3.js tiada tolok bandingnya, membolehkan pembangun membina visualisasi yang sangat disesuaikan.

**Kelemahan**:
- **Keluk Pembelajaran Curam**: D3.js mempunyai keluk pembelajaran yang curam dan lebih kompleks untuk disepadukan berbanding pustaka lain.
- **Memakan Masa**: Membina carta dalam D3.js boleh memakan masa, terutamanya untuk carta biasa seperti carta candlestick atau donat.

**Penghakiman**:  
D3.js sangat berkuasa untuk carta termaju dan tersuai tetapi berlebihan untuk banyak kes penggunaan tipikal disebabkan keluk pembelajaran yang curam dan masa pembangunan. Ia terbaik untuk situasi di mana pustaka carta lain tidak menyediakan tahap penyesuaian yang diperlukan.

---

### Kesimpulan

Selepas menilai pustaka berdasarkan keperluan projek, **Apache ECharts** menonjol sebagai pilihan terbaik. Ia menyokong julat penuh carta yang diperlukan, termasuk peta geo, carta candlestick dan carta pengelompokan. Ia bersumber terbuka, kaya ciri dan sangat interaktif, yang selaras sempurna dengan matlamat projek. Walaupun **D3.js** menawarkan fleksibiliti paling banyak, kerumitan dan pelaburan masanya menjadikannya kurang ideal untuk startup yang ingin berulang dengan pantas. **ApexCharts** dan **Chart.js** ialah alternatif yang baik untuk projek yang lebih mudah tetapi kekurangan sokongan untuk jenis carta termaju.
