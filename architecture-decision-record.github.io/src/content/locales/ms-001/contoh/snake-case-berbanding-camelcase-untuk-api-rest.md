# Rekod Keputusan Seni Bina: snake_case berbanding camelCase untuk API REST?

Keputusan: Konvensyen penamaan snake_case akan digunakan untuk titik akhir API REST

Status: Diterima

## Konteks

Dalam konvensyen penamaan untuk API REST, terdapat dua format popular: snake_case dan camelCase. Format snake_case ialah di mana setiap perkataan dalam nama dipisahkan oleh garis bawah, manakala camelCase ialah di mana perkataan pertama nama berada dalam huruf kecil, dan perkataan seterusnya mempunyai huruf pertama dibesarkan. Keputusan ini akan menentukan konvensyen penamaan mana yang perlu digunakan untuk API REST.

## Pemacu Keputusan

- Konsistensi dengan konvensyen penamaan sedia ada dalam projek

- Kebolehbacaan dan kejelasan untuk sesiapa yang mungkin bekerja pada API

- Penjajaran dengan amalan terbaik industri untuk konvensyen penamaan API REST

- Kemudahan pelaksanaan dan penyelenggaraan

## Keputusan

Konvensyen penamaan snake_case akan digunakan untuk titik akhir API REST. Pilihan ini didorong oleh faktor berikut:

1. **Konsistensi**: Projek sudah menggunakan konvensyen penamaan snake_case untuk semua titik akhir, dan adalah bermanfaat untuk mengekalkan konvensyen ini bagi memastikan konsistensi merentasi seluruh projek.

2. **Kebolehbacaan dan kejelasan**: Konvensyen snake_case lebih mudah dibaca dan lebih mudah difahami. Garis bawah menyediakan pemisahan yang jelas antara perkataan, memudahkan penghuraian dan pemahaman maksud nama.

3. **Penjajaran dengan amalan terbaik industri**: Konvensyen snake_case digunakan secara meluas dalam industri dan dianggap sebagai amalan terbaik untuk API REST, menjadikannya pilihan yang baik untuk projek.

4. **Kemudahan pelaksanaan dan penyelenggaraan**: Meneruskan konvensyen penamaan sedia ada lebih mudah dilaksanakan dan diselenggara kerana semua kod dan dokumentasi sedia ada perlu dikemas kini jika konvensyen baharu dipilih.

## Akibat

Terdapat akibat berpotensi daripada keputusan ini. 

* Jika ahli pasukan baharu yang menyertai projek tidak biasa dengan konvensyen penamaan snake_case, ia boleh membawa kepada kekeliruan dan kesilapan dalam pembangunan. Namun, memandangkan snake_case ialah konvensyen yang digunakan secara meluas, risiko sedemikian adalah minimum. 
  
* Jika alat atau rangka kerja lain digunakan dalam projek yang sangat berasaskan konvensyen camelCase, ia mungkin memerlukan usaha tambahan untuk menukar antara konvensyen penamaan. Namun, ia bukan kebimbangan ketara kerana projek telah menyeragamkan pada konvensyen snake_case. 
 
Secara keseluruhan, keputusan untuk menggunakan konvensyen penamaan snake_case untuk titik akhir API REST menghasilkan pendekatan yang konsisten, mudah dibaca dan berpiawaian industri sambil mudah dilaksanakan dan diselenggara.

<h6>Kredit: halaman ini dijana oleh ChatGPT, kemudian disunting untuk kejelasan dan format.</h6>
