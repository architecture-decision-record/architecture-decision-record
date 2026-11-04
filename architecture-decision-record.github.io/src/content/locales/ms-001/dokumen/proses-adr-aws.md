# Proses Rekod Keputusan Seni Bina AWS

https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html

Rekod keputusan seni bina (ADR) ialah dokumen yang menerangkan pilihan yang dibuat oleh pasukan tentang aspek penting seni bina perisian yang mereka rancang untuk bina. Setiap ADR menerangkan keputusan seni bina, konteksnya dan akibatnya. ADR mempunyai keadaan dan oleh itu mengikuti kitaran hayat. Untuk contoh ADR, lihat lampiran.

Proses ADR menghasilkan koleksi rekod keputusan seni bina. Koleksi ini membentuk log keputusan. Log keputusan menyediakan konteks projek serta maklumat terperinci tentang pelaksanaan dan reka bentuk. Ahli projek menyemak tajuk setiap ADR untuk mendapatkan gambaran keseluruhan konteks projek. Mereka membaca ADR untuk mendalami pelaksanaan projek dan pilihan reka bentuk.

Apabila pasukan menerima ADR, ia menjadi tidak boleh diubah. Jika pandangan baharu memerlukan keputusan yang berbeza, pasukan mencadangkan ADR baharu. Apabila pasukan menerima ADR baharu, ia menggantikan ADR sebelumnya.

## Skop proses ADR

Ahli projek perlu mencipta ADR bagi setiap keputusan yang signifikan dari segi seni bina yang menjejaskan projek atau produk perisian, termasuk yang berikut (Richards and Ford 2020):

* Struktur (contohnya, corak seperti perkhidmatan mikro)

* Keperluan bukan fungsian (keselamatan, ketersediaan tinggi dan toleransi kerosakan)

* Kebergantungan (gandingan komponen)

* Antara muka (API dan kontrak yang diterbitkan)

* Teknik pembinaan (pustaka, rangka kerja, alat dan proses)

* Keperluan fungsian dan bukan fungsian ialah input yang paling biasa kepada proses ADR.


## Kandungan ADR

Apabila pasukan mengenal pasti keperluan untuk ADR, seorang ahli pasukan mula menulis ADR berdasarkan templat seluruh projek. (Lihat organisasi ADR di GitHub untuk contoh templat.) Templat memudahkan penciptaan ADR dan memastikan ADR merakam semua maklumat yang berkaitan. Sekurang-kurangnya, setiap ADR perlu mentakrifkan konteks keputusan, keputusan itu sendiri dan akibat keputusan itu kepada projek dan hasil kerjanya. (Untuk contoh bahagian ini, lihat lampiran.) Salah satu aspek paling berkuasa dalam struktur ADR ialah ia menumpukan pada sebab keputusan dan bukan cara pasukan melaksanakannya. Memahami mengapa pasukan membuat keputusan memudahkan ahli pasukan lain menerima keputusan itu, dan menghalang arkitek lain yang tidak terlibat dalam proses membuat keputusan daripada membatalkan keputusan itu pada masa hadapan.


## Proses penerimaan ADR

Setiap ahli pasukan boleh mencipta ADR, tetapi pasukan perlu menetapkan takrifan pemilikan bagi ADR. Setiap penulis yang menjadi pemilik ADR perlu menyelenggara dan menyampaikan kandungan ADR secara aktif. Untuk menjelaskan pemilikan ini, panduan ini merujuk penulis ADR sebagai pemilik ADR dalam bahagian berikut. Ahli pasukan lain sentiasa boleh menyumbang kepada ADR. Jika kandungan ADR berubah sebelum pasukan menerima ADR, pemilik perlu meluluskan perubahan ini.

Selepas pasukan mengenal pasti keputusan seni bina dan pemiliknya, pemilik ADR menyediakan ADR dalam keadaan **Dicadangkan** (Proposed) pada permulaan proses. ADR dalam keadaan Dicadangkan sedia untuk disemak.

Pemilik ADR kemudian memulakan proses semakan untuk ADR. Matlamat proses semakan ADR ialah memutuskan sama ada pasukan menerima ADR, menentukan bahawa ia memerlukan kerja semula, atau menolak ADR. Pasukan projek, termasuk pemilik, menyemak ADR. Mesyuarat semakan perlu bermula dengan slot masa khusus untuk membaca ADR. Secara purata, 10 hingga 15 minit sepatutnya mencukupi. Dalam tempoh ini, setiap ahli pasukan membaca dokumen dan menambah komen serta soalan untuk menandakan topik yang tidak jelas. Selepas fasa semakan, pemilik ADR membacakan dan membincangkan setiap komen dengan pasukan.

Jika pasukan menemui tindakan untuk memperbaik ADR, keadaan ADR kekal **Dicadangkan**. Pemilik ADR merumuskan tindakan itu dan, bersama pasukan, menambah penerima tugasan bagi setiap tindakan. Setiap ahli pasukan boleh menyumbang dan menyelesaikan perkara tindakan. Menjadwalkan semula proses semakan ialah tanggungjawab pemilik ADR.

Pasukan juga boleh memutuskan untuk menolak ADR. Dalam kes ini, pemilik ADR menambah sebab penolakan untuk mengelakkan perbincangan akan datang tentang topik yang sama. Pemilik menukar keadaan ADR kepada **Ditolak** (Rejected).

Jika pasukan meluluskan ADR, pemilik menambah cap masa, versi dan senarai pihak berkepentingan. Pemilik kemudian mengemas kini keadaan kepada **Diterima** (Accepted).

ADR dan log keputusan yang dibentuknya mewakili keputusan yang dibuat oleh pasukan dan menyediakan sejarah semua keputusan. Pasukan menggunakan ADR sebagai rujukan semasa semakan kod dan semakan seni bina jika boleh. Selain melaksanakan semakan kod, tugas reka bentuk dan tugas pelaksanaan, ahli pasukan perlu merujuk ADR untuk keputusan strategik bagi produk.

Sebagai amalan yang baik, setiap perubahan perisian perlu melalui semakan rakan sebaya dan memerlukan sekurang-kurangnya satu kelulusan. Semasa semakan kod, penyemak kod mungkin menemui perubahan yang melanggar satu atau lebih ADR. Dalam kes ini, penyemak meminta penulis perubahan kod mengemas kini kod dan berkongsi pautan ke ADR. Apabila penulis mengemas kini kod, ia diluluskan oleh penyemak rakan sebaya dan digabungkan ke dalam pangkalan kod utama.


## Proses semakan ADR

Pasukan perlu menganggap ADR sebagai dokumen yang tidak boleh diubah selepas pasukan menerima atau menolaknya. Perubahan pada ADR sedia ada memerlukan penciptaan ADR baharu, penetapan proses semakan untuk ADR baharu dan kelulusan ADR itu. Jika pasukan meluluskan ADR baharu, pemilik perlu menukar keadaan ADR lama kepada **Digantikan** (Superseded). 
