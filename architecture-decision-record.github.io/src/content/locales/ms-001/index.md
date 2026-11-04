# Rekod keputusan seni bina (ADR)

Rekod keputusan seni bina (ADR) ialah dokumen yang merakam keputusan seni bina penting yang dibuat bersama konteks dan akibatnya.

> [!IMPORTANT]
> Lakukan usaha wajar anda sendiri terhadap sumber ini sebelum menggunakannya dalam sebarang sistem kritikal.

Kandungan:

- [Apakah rekod keputusan seni bina?](#apakah-rekod-keputusan-seni-bina)
- [Cara mula menggunakan ADR](#cara-mula-menggunakan-adr)
- [Cara mula menggunakan ADR dengan alat](#cara-mula-menggunakan-adr-dengan-alat)
- [Cara mula menggunakan ADR dengan git](#cara-mula-menggunakan-adr-dengan-git)
- [Kemahiran Claude Code untuk ADR](#kemahiran-claude-code-untuk-adr)
- [Konvensyen nama fail untuk ADR](#konvensyen-nama-fail-untuk-adr)
- [Cadangan untuk menulis ADR yang baik](#cadangan-untuk-menulis-adr-yang-baik)
- [Templat contoh ADR](#templat-contoh-adr)
- [Nasihat kerja berpasukan untuk ADR](#nasihat-kerja-berpasukan-untuk-adr)
- [Soalan kerja berpasukan untuk ADR](#soalan-kerja-berpasukan-untuk-adr)
- [Konsep langkah seterusnya untuk ADR](#konsep-langkah-seterusnya-untuk-adr)
- [Gambar rajah seni bina, paparan dan sudut pandang](#gambar-rajah-seni-bina-paparan-dan-sudut-pandang)
- [Fungsi kesesuaian untuk keputusan sebagai kod](#fungsi-kesesuaian-untuk-keputusan-sebagai-kod)
- [Pengawal keputusan untuk pull request](#pengawal-keputusan-untuk-pull-request)
- [Maklumat lanjut](#maklumat-lanjut)

Templat:

- [Templat rekod keputusan oleh Jeff Tyree dan Art Akerman](templat/templat-rekod-keputusan-oleh-jeff-tyree-dan-art-akerman/)
- [Templat rekod keputusan oleh Michael Nygard](templat/templat-rekod-keputusan-oleh-michael-nygard/)
- [Templat rekod keputusan oleh EdgeX](templat/templat-rekod-keputusan-oleh-edgex/)
- [Templat rekod keputusan oleh arc42](templat/templat-rekod-keputusan-oleh-arc42/)
- [Templat rekod keputusan untuk corak Alexandrian](templat/templat-rekod-keputusan-untuk-corak-alexandrian/)
- [Templat rekod keputusan untuk kes perniagaan](templat/templat-rekod-keputusan-untuk-kes-perniagaan/)
- [Templat rekod keputusan projek MADR](templat/templat-rekod-keputusan-projek-madr/)
- [Templat rekod keputusan menggunakan Planguage](templat/templat-rekod-keputusan-menggunakan-planguage/)
- [Templat rekod keputusan oleh Paulo Merson](https://github.com/pmerson/ADR-template)
- [Templat rekod keputusan oleh Olaf Zimmermann](https://medium.com/olzzio/y-statements-10eb07b5a177)
- [Templat rekod keputusan oleh Gareth Morgan](templat/templat-rekod-keputusan-oleh-gareth-morgan/)
- [Templat rekod keputusan oleh GIG Cymru NHS Wales](templat/templat-rekod-keputusan-oleh-gig-cymru-nhs-wales/)
- [Templat rekod keputusan untuk Keputusan Teknikal Penting (ITD) oleh Ignacio Larrañaga](templat/templat-rekod-keputusan-untuk-keputusan-teknikal-penting/)

Contoh:

- [Rangka kerja CSS](contoh/rangka-kerja-css/)
- [Konfigurasi pemboleh ubah persekitaran](contoh/konfigurasi-pemboleh-ubah-persekitaran/)
- [Metrik, pemantau, amaran](contoh/metrik-pemantau-amaran/)
- [Microsoft Azure DevOps](contoh/microsoft-azure-devops/)
- [Monorepo berbanding multirepo](contoh/monorepo-berbanding-multirepo/)
- [Bahasa pengaturcaraan](contoh/bahasa-pengaturcaraan/)
- [Storan rahsia](contoh/storan-rahsia/)
- [Format cap masa](contoh/format-cap-masa/)
- [Banyak lagi...](contoh/)

## Apakah rekod keputusan seni bina?

**Rekod keputusan seni bina** (architecture decision record, ADR) ialah dokumen yang merakam keputusan seni bina penting yang dibuat bersama konteks dan akibatnya.

**Keputusan seni bina** (architecture decision, AD) ialah pilihan reka bentuk perisian yang menangani keperluan yang signifikan.

**Log keputusan seni bina** (architecture decision log, ADL) ialah koleksi semua ADR yang dicipta dan diselenggara untuk projek (atau organisasi) tertentu.

**Keperluan yang signifikan dari segi seni bina** (architecturally-significant requirement, ASR) ialah keperluan yang mempunyai kesan yang boleh diukur pada seni bina sistem perisian.

Semua ini berada dalam topik **pengurusan pengetahuan seni bina** (architecture knowledge management, AKM).

Matlamat dokumen ini ialah menyediakan gambaran keseluruhan pantas tentang ADR, cara mencipta ADR, dan di mana untuk mencari maklumat lanjut.

Singkatan:

  * **AD**: keputusan seni bina (architecture decision)

  * **ADL**: log keputusan seni bina (architecture decision log)

  * **ADR**: rekod keputusan seni bina (architecture decision record)

  * **AKM**: pengurusan pengetahuan seni bina (architecture knowledge management)

  * **ASR**: keperluan yang signifikan dari segi seni bina (architecturally-significant requirement)

## Cara mula menggunakan ADR

Untuk mula menggunakan ADR, berbincanglah dengan rakan sepasukan anda tentang bidang-bidang ini.

Pengenalpastian keputusan:

  * Setakat mana AD itu mendesak dan setakat mana ia penting?

  * Adakah ia perlu dibuat sekarang, atau boleh menunggu sehingga lebih banyak diketahui?

  * Pengalaman peribadi dan kolektif, serta kaedah dan amalan reka bentuk yang diiktiraf, boleh membantu pengenalpastian keputusan.

  * Sebaik-baiknya selenggara senarai tugasan keputusan yang melengkapi senarai tugasan produk.

Pembuatan keputusan:

  * Terdapat beberapa teknik membuat keputusan, kedua-dua yang umum dan yang khusus untuk seni bina perisian, contohnya pemetaan dialog (dialogue mapping).

  * Pembuatan keputusan berkumpulan ialah topik penyelidikan yang aktif.

Pelaksanaan dan penguatkuasaan keputusan:

  * AD digunakan dalam reka bentuk perisian; oleh itu ia mesti disampaikan kepada, dan diterima oleh, pihak berkepentingan sistem yang membiayai, membangunkan dan mengendalikannya.

  * Gaya pengekodan yang jelas dari segi seni bina dan semakan kod yang menumpukan pada kebimbangan dan keputusan seni bina ialah dua amalan yang berkaitan.

  * AD juga mesti dipertimbangkan (semula) apabila memodenkan sistem perisian dalam evolusi perisian.

Perkongsian keputusan (pilihan):

  * Banyak AD berulang merentasi projek.

  * Oleh itu, pengalaman dengan keputusan lalu, baik dan buruk, boleh menjadi aset boleh guna semula yang bernilai apabila menggunakan strategi pengurusan pengetahuan yang jelas.

Dokumentasi keputusan:

  * Terdapat banyak templat dan alat untuk merakam keputusan.

  * Lihat komuniti agile, contohnya ADR oleh M. Nygard.

  * Lihat proses kejuruteraan perisian dan reka bentuk seni bina tradisional, contohnya susun atur jadual yang dicadangkan oleh IBM UMF dan oleh Tyree dan Akerman dari CapitalOne.

Untuk maklumat lanjut:

  * Langkah di atas diadaptasi daripada entri Wikipedia tentang [Architectural Decision](https://en.wikipedia.org/wiki/Architectural_decision)

## Cara mula menggunakan ADR dengan alat

- [MySpec](https://myspec.dev) — Platform spesifikasi dan keputusan seni bina automatik yang menstrukturkan perlembagaan projek, seni bina teknikal dan ADR ke dalam Markdown yang bersih dan disampaikan melalui MCP.

Anda boleh mula menggunakan ADR dengan alat mengikut cara yang anda mahu.

Contohnya:

  * Jika anda suka menggunakan Google Drive dan pengeditan dalam talian, anda boleh mencipta Google Doc atau Google Sheet.

  * Jika anda suka menggunakan kawalan versi kod sumber, seperti git, anda boleh mencipta satu fail untuk setiap ADR.

  * Jika anda suka menggunakan alat perancangan projek, seperti Atlassian Jira, anda boleh menggunakan penjejak perancangan alat itu.

  * Jika anda suka menggunakan wiki, seperti MediaWiki, anda boleh mencipta wiki ADR.

## Cara mula menggunakan ADR dengan git

Jika anda suka menggunakan kawalan versi git, inilah cara kami suka memulakan penggunaan ADR dengan git untuk projek perisian biasa yang mempunyai kod sumber.

Cipta direktori untuk fail ADR:

```sh
$ mkdir adr
```

Untuk setiap ADR, cipta fail teks, seperti `choose-database.md`:

```sh
$ vi choose-database.md
```

Tulis apa sahaja yang anda mahu dalam ADR. Lihat templat dalam repositori ini untuk idea.

Commit ADR ke repositori git anda.

## Kemahiran Claude Code untuk ADR

Repositori ini menyediakan dua kemahiran (skills) [Claude Code](https://claude.com/claude-code) di bawah [`skills/`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/), supaya ejen pengekodan AI boleh menulis dan menyelenggara ADR seperti yang disyorkan oleh projek ini:

- [`architecture-decision-record-skill`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/architecture-decision-record-skill/) — kegunaan am, untuk sesiapa yang menulis ADR dalam mana-mana projek. Membantu memutuskan sama ada keputusan memerlukan ADR, menyediakan direktori `adr/` atau `decisions/`, menamakan fail, memilih templat daripada sebelas rangka yang disertakan, dan menulis bahagian Konteks/Keputusan/Akibat yang mantap.

- [`architecture-decision-record-maintainer-skill`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/architecture-decision-record-maintainer-skill/) — khusus untuk penyelenggara repositori ini. Mendokumenkan susun atur repositori, konvensyen pencerminan README/locales, dan langkah tepat untuk menambah templat, contoh atau pautan alat baharu.

Untuk menggunakan kemahiran, salin folder kemahiran itu ke dalam `.claude/skills/` di akar repositori tempat anda bekerja (atau ke dalam `~/.claude/skills/` untuk menjadikannya tersedia dalam setiap projek), kemudian minta Claude Code menulis atau menyemak ADR.

## Konvensyen nama fail untuk ADR

Jika anda memilih untuk mencipta ADR menggunakan fail teks biasa, anda mungkin mahu mencipta konvensyen nama fail ADR anda sendiri.

Kami lebih suka menggunakan konvensyen nama fail yang mempunyai format tertentu.

Contoh:

  * choose-database.md

  * format-timestamps.md

  * manage-passwords.md

  * handle-exceptions.md

Konvensyen nama fail kami:

  * Nama mengandungi frasa kata kerja imperatif kala kini. Ini membantu kebolehbacaan dan sepadan dengan format mesej commit kami.

  * Nama menggunakan huruf kecil dan sengkang (sama seperti repositori ini). Ini ialah keseimbangan antara kebolehbacaan dan kebolehgunaan sistem.

  * Sambungan ialah markdown. Ini boleh berguna untuk pemformatan yang mudah.

## Cadangan untuk menulis ADR yang baik

Ciri-ciri ADR yang baik:

* Rasional (Rationale): Terangkan sebab melakukan AD tertentu. Ini boleh termasuk konteks (lihat di bawah), kebaikan dan keburukan pelbagai pilihan yang mungkin, perbandingan ciri, perbincangan kos/faedah dan banyak lagi.

* Khusus (Specific): Setiap ADR perlu tentang satu AD, bukan berbilang AD.

* Cap masa (Timestamps): Kenal pasti bila setiap item dalam ADR ditulis. Ini amat penting untuk aspek yang mungkin berubah dari semasa ke semasa, seperti kos, jadual, penskalaan dan seumpamanya.

* Tidak boleh diubah (Immutable): Jangan ubah maklumat sedia ada dalam ADR. Sebaliknya, pinda ADR dengan menambah maklumat baharu, atau gantikan ADR dengan mencipta ADR baharu.

Ciri-ciri bahagian "Konteks" (Context) yang baik dalam ADR:

* Terangkan situasi organisasi anda dan keutamaan perniagaan.

* Sertakan rasional dan pertimbangan berdasarkan komposisi sosial dan kemahiran pasukan anda.

* Sertakan kebaikan dan keburukan yang relevan, dan huraikannya dalam istilah yang sejajar dengan keperluan dan matlamat anda.

Ciri-ciri bahagian "Akibat" (Consequences) yang baik dalam ADR:

* Terangkan apa yang menyusul daripada membuat keputusan itu. Ini boleh termasuk kesan, hasil, output, susulan dan banyak lagi.

* Sertakan maklumat tentang sebarang ADR berikutnya. Agak biasa satu ADR mencetuskan keperluan untuk lebih banyak ADR, seperti apabila satu ADR membuat pilihan besar yang menyeluruh, yang seterusnya mewujudkan keperluan untuk lebih banyak keputusan yang lebih kecil.

* Sertakan sebarang proses semakan selepas tindakan. Lazimnya pasukan menyemak setiap ADR sebulan kemudian, untuk membandingkan maklumat ADR dengan apa yang telah berlaku dalam amalan sebenar, supaya dapat belajar dan berkembang.

ADR baharu boleh menggantikan tempat ADR sebelumnya:

* Apabila AD dibuat yang menggantikan atau membatalkan ADR sebelumnya, ADR baharu perlu dicipta

## Templat contoh ADR

Templat contoh ADR yang kami kumpulkan di internet:

- [Templat ADR oleh Michael Nygard](templat/templat-rekod-keputusan-oleh-michael-nygard/) (mudah dan popular)

- [Templat ADR oleh Jeff Tyree dan Art Akerman](templat/templat-rekod-keputusan-oleh-jeff-tyree-dan-art-akerman/) (lebih canggih)

- [Templat ADR untuk corak Alexandrian](templat/templat-rekod-keputusan-untuk-corak-alexandrian/) (mudah dengan butiran konteks)

- [Templat ADR untuk kes perniagaan](templat/templat-rekod-keputusan-untuk-kes-perniagaan/) (lebih berorientasikan MBA, dengan kos, SWOT dan lebih banyak pendapat)

- [Templat ADR projek Markdown Any Decision Records (MADR)](templat/templat-rekod-keputusan-projek-madr/) (kedua-dua versi mudah dan terperinci; yang kemudian menekankan pilihan dan kebaikan serta keburukannya)

- [Templat ADR menggunakan Planguage](templat/templat-rekod-keputusan-menggunakan-planguage/) (lebih berorientasikan jaminan kualiti)

- [Templat untuk Keputusan Teknikal Penting (ITD) oleh Ignacio Larrañaga](templat/templat-rekod-keputusan-untuk-keputusan-teknikal-penting/) (ramping dan mengutamakan keputusan, dioptimumkan untuk semakan eksekutif yang pantas)

## Nasihat kerja berpasukan untuk ADR

Jika anda mempertimbangkan untuk menggunakan rekod keputusan bersama pasukan anda, berikut ialah beberapa nasihat yang kami pelajari daripada bekerja dengan banyak pasukan.

Anda berpeluang memimpin rakan sepasukan anda, dengan berbincang bersama tentang "mengapa", dan bukannya mewajibkan "apa". Contohnya, rekod keputusan ialah cara untuk pasukan berfikir dengan lebih bijak dan berkomunikasi dengan lebih baik; rekod keputusan tidak bernilai jika ia hanya keperluan kerja kertas yang dipaksakan selepas kejadian.

Sesetengah pasukan lebih suka nama "keputusan" berbanding singkatan "ADR". Apabila sesetengah pasukan menggunakan nama direktori "decisions", ia seolah-olah mentol menyala, dan pasukan mula memasukkan lebih banyak maklumat ke dalam direktori itu, seperti keputusan vendor, keputusan perancangan, keputusan penjadualan dan sebagainya. Semua jenis maklumat ini boleh menggunakan templat yang sama. Kami berhipotesis bahawa orang belajar lebih cepat dengan perkataan ("keputusan") berbanding singkatan ("ADR"), dan orang lebih bermotivasi untuk menulis dokumen kerja dalam proses apabila perkataan "rekod" dibuang, dan juga sesetengah pembangun dan sesetengah pengurus tidak menyukai perkataan "seni bina".

Dalam teori, ketidakbolehubahan adalah ideal. Dalam amalan, kebolehubahan lebih berkesan untuk pasukan kami. Kami memasukkan maklumat baharu ke dalam ADR sedia ada, dengan cap tarikh, dan nota bahawa maklumat itu tiba selepas keputusan. Pendekatan sebegini membawa kepada "dokumen hidup" yang boleh kami semua kemas kini. Kemas kini biasa berlaku apabila kami mendapat maklumat berkat rakan sepasukan baharu, atau tawaran baharu, atau hasil dunia sebenar daripada penggunaan kami, atau perubahan pihak ketiga selepas kejadian seperti keupayaan vendor, pelan harga, perjanjian lesen dan sebagainya.

## Soalan kerja berpasukan untuk ADR

### Siapa yang boleh mencipta ADR?

Pertimbangkan bidang seperti orang tertentu, atau peranan tertentu, atau pasukan tertentu, atau jabatan tertentu; pertimbangkan juga sama ada terdapat orang, atau peranan, atau pasukan, atau jabatan yang boleh menugaskan ADR, bermaksud mereka meminta satu yang akan ditulis oleh orang lain. 

Contoh jawapan: Mana-mana orang dalam organisasi kami yang telah membaca halaman README rekod keputusan seni bina boleh mencadangkan ADR, bermaksud orang itu boleh mula menulisnya, dan berkongsinya dengan pasukan.

### Apakah yang membenarkan pengemukaan ADR?

Pertimbangkan bidang seperti cara kerja pasukan organisasi anda, struktur sistem perisian anda, penyelarasan antara pasukan, kebolehselenggaraan jangka panjang, antara muka luaran, siapa yang anda mahu beri manfaat, dan seumpamanya. 

Contoh jawapan: Kami mahu mencipta ADR apabila kami mahu pembangun masa hadapan memahami "mengapa" tentang apa yang kami lakukan.

### Apakah yang membenarkan tidak mengemukakan ADR?

Pertimbangkan bidang seperti keputusan yang bukan tentang seni bina, atau yang kecil seperti risiko minimum atau terkandung sendiri atau seorang pembangun, atau yang sudah diliputi sepenuhnya di tempat lain seperti oleh piawaian atau dasar atau dokumentasi, atau yang sementara seperti penyelesaian sementara atau bukti konsep atau eksperimen. 

Contoh jawapan: Kami mahu melangkau ADR apabila keputusan terhad dalam skop dan masa dan risiko dan kos, atau sudah diliputi di tempat lain.

### Apakah kitaran hayat ADR?

Pertimbangkan bidang seperti proses penciptaan, proses penyelidikan, proses membuat keputusan, proses pelaksanaan dan proses penamatan. Pertimbangkan bagaimana menjejak kitaran hayat ADR dari semasa ke semasa, seperti cara menggerakkan ADR dari satu keadaan ke keadaan seterusnya, dan juga cara menyampaikan ini kepada pihak berkepentingan. 

Contoh jawapan: Kami mahu ADR mempunyai enam peringkat kitaran hayat: Memulakan → Menyelidik → Menilai → Melaksana → Menyelenggara → Menamatkan.

### Apakah kriteria untuk langkah kitaran hayat ADR?

Pertimbangkan bidang seperti kriteria penerimaan untuk ADR, bermaksud bagaimana anda tahu ia cukup baik untuk bergerak dari satu langkah kitaran hayat ke yang seterusnya? Adakah masalah dinyatakan dengan jelas? Adakah alternatif telah dipertimbangkan? Adakah pertukaran difahami dan didokumenkan dengan cukup baik?
Adakah semua konteks yang relevan ada? Adakah semua pihak berkepentingan yang relevan terlibat? Adakah semua maklum balas telah dimasukkan? 

Contoh jawapan: Kami mahu ADR diundi oleh pihak berkepentingan apabila pasukan aktif telah 1) melengkapkan penyelidikan mereka, 2) melengkapkan penilaian mereka, 3) menerbitkan cadangan ADR kepada pihak berkepentingan dengan permintaan komen dan tempoh masa seminggu, 4) semua komen pihak berkepentingan telah dimasukkan dan ditangani.

### Apakah peranan dan tanggungjawab yang berinteraksi dengan ADR?

Pertimbangkan peranan seperti pencadang, penyelidik, penilai, penyemak, pelulus, penyelenggara, dan seumpamanya. Pertimbangkan tanggungjawab seperti komunikasi dengan pihak berkepentingan, memastikan jangkaan dipenuhi, perkongsian di laman web atau intranet, dan menyemak kerja secara berkala dan terutamanya apabila perubahan yang relevan berlaku.

Contoh jawapan: Kami mahu setiap ADR sentiasa mempunyai orang hubungan utama, orang hubungan kedua dan pasukan bertanggungjawab; mereka bertanggungjawab ke atas komunikasi, penerbitan, penyelenggaraan, semakan berkala sekurang-kurangnya sekali setahun, dan penamatan akhirnya mengikut keperluan.

### Bagaimana tadbir urus berinteraksi dengan ADR?

Pertimbangkan bidang seperti cara kerja organisasi anda, sebarang keperluan pematuhan khas seperti untuk aspek undang-undang atau aspek sumber manusia, bagaimana anda mahu mengendalikan konsensus berbanding konflik berbanding peningkatan ke peringkat atas. Adakah terdapat bidang atau orang atau pasukan yang boleh mempunyai pengaruh lebih daripada yang lain berkenaan ADR, seperti boleh meluluskannya, atau mengundi padanya, atau memveto?

Contoh jawapan: Tadbir urus ADR adalah dalam susunan keutamaan ini: CEO, CTO, CLO, pasukan yang melaksanakan ADR, pakar dalam pasukan yang paling berpengetahuan tentang AD. Tiada orang lain mempunyai tadbir urus melainkan diterangkan dalam ADR. 

### Apakah prinsip yang berinteraksi dengan ADR?

Pertimbangkan bidang seperti cara kerja organisasi anda yang merangkumi bergerak pantas berbanding bergerak perlahan, untuk konsensus keputusan berbanding konflik keputusan, dan untuk keutamaan risiko berbanding keutamaan keselamatan, perbincangan awam berbanding perbincangan peribadi, dan seumpamanya.

Contoh jawapan: Kami menggunakan prinsip kepimpinan berat sebelah kepada tindakan, tidak bersetuju-dan-komited (disagree-and-commit), anggaran 70% sudah memadai untuk keputusan yang mudah diterbalikkan dan mudah diasingkan, dan cara kerja awam kecuali maklumat sulit seperti yang diterangkan dalam perjanjian kerahsiaan organisasi kami.

## Konsep langkah seterusnya untuk ADR

[Arc42](https://arc42.org/) menjawab dua soalan dengan cara pragmatik dan boleh disesuaikan dengan keperluan khusus anda. Apakah yang perlu anda dokumenkan/sampaikan tentang seni bina anda? Bagaimana anda perlu mendokumenkan/menyampaikannya? Arc42 merangkumi rekod keputusan seni bina serta panduan tentang matlamat, kekangan, konteks, kualiti, risiko dan banyak lagi.

[Model C4](https://c4model.com/) ialah pendekatan yang mudah dipelajari dan mesra pembangun untuk gambar rajah seni bina perisian. C4 ialah set gambar rajah hierarki untuk konteks, kontena, komponen, kod, serta gambar rajah sokongan untuk landskap sistem, dinamik dan penempatan.

## Gambar rajah seni bina, paparan dan sudut pandang

Gambar rajah seni bina dipanggil "paparan seni bina" (architecture view).

"Paparan seni bina" ialah contoh bagi "sudut pandang seni bina" (architecture viewpoint).

"Sudut pandang seni bina" mempunyai khalayak tertentu dengan kebimbangan tertentu dalam fikiran.

Contoh sudut pandang seni bina, contoh paparan dan contoh gambar rajah:

- Keupayaan Perniagaan

- Proses Perniagaan Peringkat Tinggi

- [Aliran Nilai](https://en.wikipedia.org/wiki/Value_stream)

- Fungsi Perisian dipetakan kepada komponen aplikasi

- Gambar Rajah Konteks [Model C4](https://en.wikipedia.org/wiki/C4_model) (TO-BE / AS-IS)

- Gambar Rajah Kontena [Model C4](https://en.wikipedia.org/wiki/C4_model) (TO-BE / AS-IS)

- [Gambar Rajah Hubungan Entiti](https://en.wikipedia.org/w/index.php?title=Entity_relationship_diagram) (ERD) untuk memetakan entiti data kepada komponen aplikasi

- [Gambar Rajah Jujukan](https://en.wikipedia.org/wiki/Sequence_diagram) untuk menerangkan aliran fungsian dalam sistem dan untuk integrasi

- Gambar rajah [Business Process Model and Notation](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN) untuk menerangkan aliran data merentasi komponen aplikasi

- Gambar rajah [Business Process Model and Notation](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN) untuk menerangkan proses perniagaan / senario pengguna

- Gambar rajah [Pengurusan Identiti dan Akses](https://en.wikipedia.org/wiki/Identity_and_access_management) (IAM)

- Gambar rajah [Kawalan Akses Berasaskan Peranan](https://en.wikipedia.org/wiki/Role-based_access_control) (RBAC) dengan peranan bagi setiap komponen aplikasi

- Gambar rajah [Kawalan Akses Berasaskan Atribut](https://en.wikipedia.org/wiki/Attribute-based_access_control) (ABAC) dengan atribut bagi setiap komponen aplikasi

- Gambar rajah privasi

Gambar rajah berkaitan:

- Gambar Rajah Kes Penggunaan menunjukkan kes penggunaan kepada pengurusan/pelanggan, yang mendahului keperluan, yang mendahului seni bina perisian.

- Gambar Rajah Penempatan menunjukkan perkakasan fizikal/komputer tempat komponen perisian ditempatkan.
- Gambar Rajah Aliran Data menunjukkan bagaimana data bergerak melalui sistem dan diubah.
- Gambar Rajah Jujukan digunakan untuk menunjukkan bagaimana protokol seperti HTTP berfungsi pada paksi masa.

- Gambar Rajah Aktiviti menggambarkan aliran kerja aktiviti yang dilakukan oleh sistem perisian, seperti AI NPC.

## Fungsi kesesuaian untuk keputusan sebagai kod

Fungsi kesesuaian (fitness functions) ialah semakan automatik yang objektif, ditulis dengan kod pengaturcaraan, yang mengesahkan bahawa keputusan sedang dikekalkan.

- Fungsi kesesuaian menjadikan keputusan boleh diuji dan boleh dijamin.

- Fungsi kesesuaian untuk keputusan boleh membantu jaminan kualiti, proses kawal selia dan matlamat tadbir urus dengan banyak.

### Bagaimana fungsi kesesuaian berkaitan dengan keputusan

Rekod keputusan mendokumenkan keputusan, manakala fungsi kesesuaian menjamin keputusan itu.

- Contoh keputusan: Kami menggunakan event sourcing untuk keperluan audit.

- Contoh fungsi kesesuaian: Kami menggunakan pelayan integrasi berterusan untuk menguji bahawa semua perubahan keadaan mesti menghasilkan peristiwa.

### Mengapa fungsi kesesuaian membantu keputusan

Ukuran objektif: Fungsi kesesuaian lulus atau gagal, jadi kerja kelihatan dan jelas.

Penggunaan berterusan: Fungsi kesesuaian ialah peraturan hidup anda, dijalankan pada setiap commit dan build.

Keyakinan untuk melakukan refactor: Fungsi kesesuaian menangkap ralat peraturan keputusan secara automatik.

Tadbir urus yang boleh diskalakan: Fungsi kesesuaian menjamin piawaian tanpa mewujudkan kesesakan.

### Bolehkah fungsi kesesuaian menggunakan AI?

Fungsi kesesuaian boleh memanfaatkan LLM AI untuk keputusan dengan mengemukakan soalan tentang kerja anda,
seperti pelan, kod, skema, API anda dan banyak lagi:

```txt
IMPORTANT: Prefer retrieval-led reasoning over pre-training-led reasoning.
IMPORTANT: Turn on extended thinking. Turn on expert advice. Turn on search.

This is a fitness function to evaluate if our work is
using all our decisions, and is correct and accurate.

- Our decisions are here: {url}
- Our work to evaluate is here: {url}

Explain any errors, problems, gaps, weaknesses. Be direct. Be decisive.
```

### Ujian unit seni bina

[ArchUnit](https://www.archunit.org/): semak peraturan seni bina kod Java dengan menggunakan mana-mana rangka kerja ujian unit Java biasa.

[ArchUnitTS](https://github.com/LukasNiessen/ArchUnitTS): semak peraturan seni bina kod TypeScript dan kod JavaScript dengan menggunakan Jest, Vitest, Jasmine dan sebagainya.

## Pengawal keputusan untuk pull request

[Decision Guardian](https://github.com/DecispherHQ/decision-guardian)
secara automatik memaparkan rekod keputusan yang betul pada saat yang betul — apabila
pembangun sedang aktif mengubah kod yang dilindungi oleh keputusan tersebut. Daripada
berharap pembangun membaca folder dokumen sebelum menggabungkan, konteks yang
relevan muncul terus pada pull request.

Ini berfungsi untuk apa-apa jenis rekod keputusan: keputusan seni bina, keputusan
data, keputusan pematuhan, keputusan klinikal dan perubatan, keputusan keselamatan,
dan banyak lagi.

Berfungsi dengan mana-mana sistem CI (GitLab, Jenkins, CircleCI) dan sebagai hook pre-commit.
Sumber terbuka. Lesen MIT.

[ADR Guard](https://github.com/chohan-sarmad-ali/delivery-gates) ialah GitHub
Action yang menggagalkan pull request apabila laluan kod yang dipantau berubah tanpa
rekod keputusan seni bina ditambah atau dikemas kini. Pengecualian adalah eksplisit: baris
`ADR-Exempt:` dengan sebab meluluskan pintu dan ditulis ke dalam ringkasan
kerja. Neutral templat, tiada kebergantungan. Sumber terbuka. Lesen MIT.

## Maklumat lanjut

Pengenalan:

- [Architectural decision (wikipedia.org)](https://wikipedia.org/wiki/Architectural_decision)

- [Architecturally significant requirements (wikipedia.org)](https://wikipedia.org/wiki/Architecturally_significant_requirements)

Templat:

- [Documenting architecture decisions - Michael Nygard (thinkrelevance.com)](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)

- [Markdown Architectural Decision Records (adr.github.io)](https://adr.github.io/madr/)

- [Template for documenting architecture alternatives and decisions (stackoverflow.com)](http://stackoverflow.com/questions/7104735/template-for-documenting-architecture-alternatives-and-decisions)

Mendalam:

- [ADMentor XML project (github.com)](https://github.com/IFS-HSR/ADMentor)

- [Architectural Decision Guidance across Projects: Problem Space Modeling, Decision Backlog Management and Cloud Computing Knowledge (ifs.hsr.ch)](https://www.ifs.hsr.ch/fileadmin/user_upload/customers/ifs.hsr.ch/Home/projekte/ADMentor-WICSA2015ubmissionv11nc.pdf)

- [The Decision View's Role in Software Architecture Practice (computer.org)](https://www.computer.org/csdl/mags/so/2009/02/mso2009020036-abs.html)

- [Documenting Software Architectures: Views and Beyond (resources.sei.cmu.edu)](http://resources.sei.cmu.edu/library/asset-view.cfm?assetID=30386)

- [Architecture Decisions: Demystifying Architecture (utdallas.edu)](https://www.utdallas.edu/~chung/SA/zz-Impreso-architecture_decisions-tyree-05.pdf)

- [ThoughtWorks Technology Radar: Lightweight Architecture Decision Records (thoughtworks.com)](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)

- [A Skeptic’s Guide to Software Architecture Decisions (infoq.com)](https://www.infoq.com/articles/architecture-skeptics-guide/)

- [Architectural Decisions — The Making Of](https://ozimmer.ch/practices/2020/04/27/ArchitectureDecisionMaking.html)

- [Architectural Retrospectives: the Key to Getting Better at Architecting](https://www.infoq.com/articles/architectural-retrospectives/)

- [Software Architecture Monday with Mark Richards](https://developertoarchitect.com/lessons/) — pelajaran seni bina perisian bulanan percuma

- [Solution Architecture Decisions - By Gareth Morgan](https://www.linkedin.com/pulse/solution-architecture-decisions-gareth-morgan-0r5xe/)

- ["Keep the Why: Code Becomes Legacy When Nobody Remembers Why"](https://blog.technopathy.club/keep-the-why-code-becomes-legacy-when-nobody-remembers-why)

Alat:

- [Command-line tools for working with Architecture Decision Records](https://github.com/npryce/adr-tools)

- [Command line tools with python - by Victor Sluiter](https://bitbucket.org/tinkerer_/adr-tools-python/src/master/)

- [Architectural Design Decision Support Framework (ADvISE)](https://swa.univie.ac.at/Software_Architecture/research-projects/architectural-design-decision-support-framework-advise/)

- [Decision Guardian](https://github.com/DecispherHQ/decision-guardian)

- [Mneme HQ - ADR enforcement for AI coding agents](https://github.com/TheoV823/mneme)

- [Keep the Why - a repo-native convention and agent skill that continuously captures, or retrospectively recovers, the reasoning behind a codebase](https://github.com/oliver-zehentleitner/keep-the-why)

- [ADR Guard - GitHub Action that fails a pull request changing watched code without an architecture decision record](https://github.com/chohan-sarmad-ali/delivery-gates)

- [kgai - append-only decision log for AI coding agents, a machine-readable companion to ADR files](https://github.com/kgaidev/kgai)

Panduan Khusus Syarikat:

- [Amazon: AWS Prescriptive Guidance: ADR Process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)

- [GitHub: ADR GitHub organization](https://adr.github.io/)

- [RedHat: Why you should use ADRs](https://www.redhat.com/architect/architecture-decision-records)

Contoh:

- [Repository of Architecture Decision Records made for the Arachne Framework](https://github.com/arachne-framework/architecture)

Video:

- [An introduction to arc42 with Savvas Kleanthous](https://www.youtube.com/watch?v=V5clR8c6D7o)

- [The C4 model for visualising software architecture - by Simon Brown](https://www.youtube.com/watch?v=KvoBrUd1-5E)

Podcast:

- [Software Architecture Bookclub Podcast](https://www.developertoarchitect.com/bookclub-podcast.html)

Buku:

- [Software Architecture Metrics: Case Studies to Improve the Quality of Your Architecture - by Christian Ciceri, Dave Farley, Neal Ford, Andrew Harmel-Law, Michael Keeling and Carola Lilienthal](https://www.amazon.com/Software-Architecture-Metrics-Christian-Ciceri-ebook/dp/B0B1NZ8Z5V)

- [Software Systems Architecture: Working With Stakeholders Using Viewpoints and Perspectives - by Nick Rozanski and Eoin Woods](https://www.amazon.com/Software-Systems-Architecture-Stakeholders-Perspectives/dp/032171833X)

- [Software Architecture in Practice (SEI Series in Software Engineering)](https://www.amazon.com/Software-Architecture-Practice-SEI-Engineering-ebook/dp/B094CPJ96B)

- [Documenting Software Architectures: Views and Beyond (SEI Series in Software Engineering)](https://www.amazon.com/Documenting-Software-Architectures-Beyond-Engineering-ebook/dp/B0046XS3RO)

- [The Software Architect Elevator: Redefining the Architect's Role in the Digital Enterprise](https://www.amazon.com/Software-Architect-Elevator-Redefining-Architects-ebook/dp/B086WQ9XL1)

- [Fundamentals of Software Architecture: An Engineering Approach - by Mark Richards and Neal Ford](https://www.amazon.com/Fundamentals-Software-Architecture-Engineering-Approach-ebook/dp/B0849MPK73)

- [Building Evolutionary Architectures - by Neal Ford, Rebecca Parsons, Patrick Kua, Pramod Sadalage](https://www.amazon.com/Building-Evolutionary-Architectures-Neal-Ford-ebook/dp/B0BN4T1P27?crid=37FA31IFLAS0Z)

- [Foundations of Decision Analysis by Ronald Howard and Ali Abbas](https://www.amazon.com/Foundations-Decision-Analysis-Ronald-Howard-ebook/dp/B00SZECJTI?crid=14BK5SDP76UN6)

- [Head First Software Architecture - by Raju Gandhi, Neal Ford and Mark Richards](https://www.amazon.com/Head-First-Software-Architecture-Architectural-ebook/dp/B0CW1JMNF2)

- [Communication Patterns: A Guide for Developers and Architects - by Jacqui Read](https://www.amazon.com/Communication-Patterns-Guide-Developers-Architects/dp/1098140540)

Lihat juga:

- REMAP (Representation and Maintenance of Process Knowledge)

- DRL (Decision Representation Language)

- IBIS (Issue-Based Information System)

- QOC (Questions, Options, and Criteria)

- IBM’s e-Business Reference Architecture Framework

- [Decision Reasoning Format (DRF)](https://github.com/reasoning-formats/reasoning-formats) — format YAML/JSON neutral vendor yang boleh dibaca mesin untuk mewakili keputusan dengan penaakulan eksplisit, andaian, keadaan kognitif dan pertukaran. Melengkapkan ADR dengan menambah penaakulan berstruktur yang boleh disahkan kepada dokumentasi keputusan.
