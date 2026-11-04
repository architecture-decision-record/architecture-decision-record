# Rekod Keputusan Seni Bina: rangka kerja aplikasi web, lengkap, tindanan penuh, untuk produk startup

<!-- 

ChatGPT prompt

Long software architecture decision record 
for a web application framework, batteries included, full stack, for a startup product.

Evaluate Python Django, Ruby on Rails, Phoenix Elixir, Rust Loco.

Primary need: web application for paying customers to sign in, upload files, process data, and view reports. 

High importance: 1. Agile development because this is for a startup. 2. Full-stack because we do not want to spend extra time on a separate front-end. 3. Works well with AI/ML tools for data analysis, such as Project Jupyter notebooks.

Low importance: 1. Runtime speed. 2. Scalability. 3. Backwards compatibility.

-->

**Objektif Utama:**  
Membina aplikasi web yang membolehkan pelanggan berbayar log masuk, memuat naik fail, memproses data dan melihat laporan, dengan tumpuan pada pembangunan agile, fungsi tindanan penuh dan keserasian kukuh dengan alat AI/ML, terutamanya buku nota Project Jupyter.

### Konteks dan Keperluan:

1. **Pembangunan Agile (Keutamaan Tinggi)**: Sebagai startup, kami memerlukan lelaran pantas dan fleksibiliti. Amalan agile, seperti prototaip pantas, pembangunan berulang dan kebolehsuaian kepada perubahan, adalah kunci kepada kitaran pembangunan kami.

2. **Rangka Kerja Tindanan Penuh (Keutamaan Tinggi)**: Kami bertujuan meminimumkan overhed dengan memilih rangka kerja yang boleh mengendalikan kedua-dua bahagian belakang dan bahagian hadapan dengan cekap, mengurangkan keperluan rangka kerja bahagian hadapan yang berasingan.

3. **Keserasian dengan Alat AI/ML (Keutamaan Tinggi)**: Keupayaan untuk berintegrasi dengan mudah dengan alat analisis data seperti buku nota Jupyter dan ekosistem sains data Python (NumPy, Pandas, TensorFlow dan sebagainya) adalah penting. Ini akan memudahkan pemprosesan data dan pelaporan yang cekap.

4. **Kriteria Kepentingan Rendah**:
   - **Kelajuan Masa Larian**: Walaupun prestasi relevan, ia bukan faktor paling kritikal pada permulaan kerana kami lebih bimbang tentang kelajuan pembangunan dan kelengkapan ciri.
   - **Kebolehskalaan**: Kami menjangkakan pertumbuhan, tetapi kebimbangan kebolehskalaan boleh ditangani kemudian, dan ini bukan keperluan utama sekarang.
   - **Keserasian ke Belakang**: Kami menumpukan pada teknologi semasa dan tidak terlalu bimbang tentang keserasian ke belakang dengan sistem warisan.

### Rangka Kerja yang Dinilai:

1. **Django (Python)**  
2. **Ruby on Rails (Ruby)**  
3. **Phoenix (Elixir)**  
4. **Loco (Rust)**

---

### 1. **Django (Python)**

**Gambaran Keseluruhan**:  
Django ialah rangka kerja web peringkat tinggi untuk Python yang menggalakkan pembangunan pantas dan reka bentuk bersih dan pragmatik. Ia terkenal dengan falsafah “lengkap” (batteries included), bermakna ia merangkumi banyak ciri seperti pengesahan, penghalaan, ORM dan pengendalian borang siap pakai.

**Kekuatan**:  
- **Tindanan Penuh**: Django ialah rangka kerja tindanan penuh yang komprehensif yang boleh mengendalikan keperluan bahagian belakang dan bahagian hadapan dengan ciri bersepadu (cth., enjin templat, antara muka pentadbir).
- **Pembangunan Agile**: Struktur dan konvensyen Django yang ditakrifkan dengan baik membolehkan pembangunan pantas dan kebolehsuaian, yang penting dalam persekitaran startup. Rangka kerja ini datang dengan dokumentasi cemerlang dan ekosistem pakej pihak ketiga yang kaya, yang mempercepat pembangunan.
- **Integrasi AI/ML**: Ekosistem Python tiada tandingan dalam sains data dan pembelajaran mesin. Django, yang berasaskan Python, berintegrasi dengan lancar dengan alat seperti buku nota Jupyter, Pandas, NumPy, TensorFlow dan scikit-learn.
- **Komuniti dan Ekosistem**: Django mempunyai komuniti yang luas, dokumentasi yang mantap dan pelbagai pemalam serta sambungan, yang mempercepat pembangunan dan penyelesaian masalah dengan ketara.
  
**Kelemahan**:  
- **Kelajuan Masa Larian**: Python cenderung lebih perlahan berbanding bahasa seperti Rust atau Elixir. Namun, untuk kes penggunaan ini, di mana prestasi bukan kebimbangan utama, ini mungkin bukan pemutus perjanjian.
- **Kebolehskalaan**: Walaupun Django sangat boleh diskalakan, mungkin terdapat cabaran pada skala yang sangat tinggi tanpa pengoptimuman yang teliti (cth., apabila mengendalikan permintaan serentak yang berat). Namun, Django masih boleh diskalakan dengan berkesan menggunakan teknik pengimbangan beban dan caching.

**Penghakiman**:  
Django sejajar dengan baik dengan keperluan untuk pembangunan agile, sokongan tindanan penuh dan keserasian AI/ML. Integrasi Pythonnya menawarkan akses lancar kepada alat dan pustaka sains data yang diperlukan untuk aplikasi.

---

### 2. **Ruby on Rails (Ruby)**

**Gambaran Keseluruhan**:  
Ruby on Rails (RoR) ialah rangka kerja aplikasi web tindanan penuh yang matang, terkenal dengan pendekatan konvensyen-berbanding-konfigurasi, yang memudahkan pembangunan pantas.

**Kekuatan**:  
- **Tindanan Penuh**: RoR datang dengan alat terbina dalam untuk pembangunan bahagian belakang dan bahagian hadapan (cth., view, templat, scaffolding), dan pustaka gem yang kayanya membolehkan pelaksanaan pantas pelbagai ciri.
- **Pembangunan Agile**: Ruby on Rails terkenal terutamanya dengan kitaran lelaran pantasnya, yang menguntungkan startup yang ingin berulang dengan cepat pada ciri. RoR menyokong pembangunan dipacu ujian (TDD) dan mempunyai ekosistem yang mantap untuk aliran kerja agile.
- **Komuniti dan Ekosistem**: RoR mempunyai komuniti yang mantap dan kukuh serta pelbagai gem yang boleh mempercepat pembangunan.
- **Kemudahan Penggunaan**: Rails mempunyai sintaks yang sangat mesra pembangun dan terkenal kerana menjadikan tugas seperti migrasi pangkalan data, seni bina model-view-controller (MVC) dan pengendalian laluan pantas dan mudah.

**Kelemahan**:  
- **Prestasi**: Ruby cenderung mempunyai prestasi masa larian yang lebih perlahan berbanding Python atau Elixir. Walaupun RoR boleh diskalakan dengan infrastruktur yang betul, prestasi Ruby mungkin menjadi kesesakan untuk aplikasi yang memerlukan pemprosesan masa nyata yang berat atau trafik serentak yang tinggi.
- **Integrasi AI/ML**: Walaupun Ruby mempunyai beberapa pustaka pembelajaran mesin, ia tidak diterima pakai seluas Python dalam komuniti AI/ML. Integrasi dengan alat seperti buku nota Jupyter tidak selancar itu, menjadikan Python pilihan yang lebih kukuh untuk aplikasi berat data.
  
**Penghakiman**:  
Walaupun Ruby on Rails cemerlang dalam pembangunan agile dan prototaip pantas, ia ketinggalan dari segi keserasian AI/ML berbanding Python (Django). Ia pilihan yang berdaya maju untuk startup yang mengutamakan lelaran pantas berbanding integrasi analisis data yang mendalam.

---

### 3. **Phoenix (Elixir)**

**Gambaran Keseluruhan**:  
Phoenix ialah rangka kerja web yang dibina dengan Elixir, bahasa pengaturcaraan fungsian yang direka untuk kebolehskalaan dan keserentakan. Phoenix memanfaatkan VM Erlang, yang terkenal dengan pengendalian keserentakan besar dan sistem toleran kerosakan.

**Kekuatan**:  
- **Kebolehskalaan dan Prestasi**: Phoenix bersinar dalam kebolehskalaan dan pengendalian keserentakan tinggi. Ia dibina di atas VM Erlang, yang boleh menyokong ribuan (atau malah berjuta-juta) sambungan serentak, menjadikannya calon kukuh untuk aplikasi yang memerlukan pemprosesan data masa nyata atau trafik volum tinggi.
- **Tindanan Penuh**: Phoenix merangkumi semua yang diperlukan untuk membina kedua-dua bahagian belakang dan bahagian hadapan aplikasi. Ia menyokong paparan langsung untuk kemas kini UI interaktif dan merangkumi enjin templat.
- **Pembangunan Agile**: Phoenix sangat modular, membolehkan lelaran pantas pada ciri. Ia sangat sesuai untuk startup yang perlu bergerak dengan pantas.
- **Keserasian AI/ML**: Walaupun Elixir mempunyai pustaka pembelajaran mesin yang baru muncul, ia tidak disokong seluas Python untuk tugas AI/ML. Mengintegrasikan dengan alat seperti buku nota Jupyter akan memerlukan penyelesaian sementara, kerana ekosistem Elixir untuk sains data tidak sematang Python.

**Kelemahan**:  
- **Ekosistem AI/ML**: Elixir bukan bahasa utama yang digunakan dalam sains data atau pembelajaran mesin, dan ekosistemnya tidak sematang Python. Oleh itu, integrasi dengan alat seperti buku nota Jupyter atau pustaka AI popular (TensorFlow, PyTorch) akan menyusahkan.
- **Keluk Pembelajaran**: Jika pasukan tidak biasa dengan pengaturcaraan fungsian dan Elixir, mungkin terdapat keluk pembelajaran yang lebih curam.

**Penghakiman**:  
Phoenix ialah pilihan yang sangat baik jika kebolehskalaan dan keserentakan ialah kebimbangan utama. Namun, memandangkan keutamaan pada keserasian AI/ML, Phoenix mungkin bukan padanan terbaik disebabkan ekosistem Elixir yang terhad dalam ruang ini.

---

### 4. **Loco (Rust)**

**Gambaran Keseluruhan**:  
Loco ialah rangka kerja web yang dibina dengan Rust, bahasa pengaturcaraan sistem yang terkenal dengan prestasi, keselamatan memori dan keserentakan. Rust semakin popular untuk membina aplikasi berprestasi tinggi.

**Kekuatan**:  
- **Prestasi**: Kekuatan utama Rust terletak pada prestasi tinggi dan keselamatan memorinya, menjadikannya pilihan yang sangat baik untuk aplikasi yang memerlukan kawalan peringkat rendah atau prestasi yang sangat tinggi.
- **Keserentakan**: Sistem pemilikan Rust memastikan keselamatan memori sambil membenarkan pengaturcaraan serentak yang selamat, menjadikannya ideal untuk sistem yang perlu menskala dengan cekap dan mengendalikan keselarian.

**Kelemahan**:  
- **Pembangunan Tindanan Penuh**: Loco, walaupun menjanjikan, tidak sematang rangka kerja lain dari segi menyediakan penyelesaian tindanan penuh yang lengkap. Ia lebih sesuai untuk pembangunan bahagian belakang, dan ekosistem bahagian hadapan di sekitar Rust masih baru muncul.
- **Pembangunan Agile**: Pembangunan dengan Rust boleh lebih perlahan berbanding bahasa peringkat lebih tinggi seperti Python atau Ruby disebabkan sifatnya yang lebih peringkat rendah dan keluk pembelajaran yang lebih curam.
- **Ekosistem AI/ML**: Rust tidak mempunyai ekosistem yang sama luas untuk AI/ML seperti Python. Walaupun terdapat pustaka yang berkembang dalam Rust untuk pengkomputeran berangka, ia jauh kurang matang berbanding tawaran Python, seperti buku nota Jupyter atau rangka kerja pembelajaran mesin.
  
**Penghakiman**:  
Walaupun Rust dan rangka kerjanya Loco menawarkan prestasi luar biasa, kekurangan sokongan tindanan penuh, faedah pembangunan agile dan ekosistem AI/ML menjadikannya kurang ideal untuk kes penggunaan khusus ini. Ia lebih sesuai untuk aplikasi kritikal prestasi berbanding pembangunan web pantas dengan alat sains data bersepadu.

---

### Kesimpulan

Selepas menilai pilihan berdasarkan keperluan projek, **Django (Python)** ialah pilihan yang paling sesuai. Ia menawarkan kelebihan berikut:

- **Keupayaan Tindanan Penuh**: Django ialah rangka kerja tindanan penuh yang mengintegrasikan pembangunan bahagian belakang dan bahagian hadapan.
- **Pembangunan Agile**: Rangka kerja ini sangat sesuai untuk prototaip dan lelaran pantas, yang penting dalam persekitaran startup.
- **Keserasian AI/ML**: Python ialah bahasa terkemuka dalam AI/ML, dan keserasian Django dengan pustaka seperti buku nota Jupyter memastikan integrasi lancar untuk analisis dan pemprosesan data.
- **Komuniti dan Ekosistem**: Sokongan komuniti yang kukuh dan ekosistem pustaka yang luas Django menyediakan banyak alat untuk mempercepat pembangunan.

Walaupun **Ruby on Rails** juga pesaing kukuh untuk pembangunan agile, sokongan AI/ML yang terhad menjadikannya kurang ideal untuk kes penggunaan khusus ini. **Phoenix (Elixir)** dan **Loco (Rust)**, walaupun cemerlang untuk kebolehskalaan dan prestasi, ketinggalan dari segi integrasi AI/ML dan pembangunan tindanan penuh. Oleh itu, Django ialah rangka kerja yang disyorkan untuk projek ini.
