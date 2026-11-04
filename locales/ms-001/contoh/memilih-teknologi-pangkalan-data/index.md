# Rekod Keputusan Seni Bina: Memilih Teknologi Pangkalan Data

## Status

Diterima

## Konteks

Kami sedang mereka bentuk aplikasi baharu yang memerlukan penyimpanan dan pendapatan semula data dengan cara yang boleh diskalakan dan berprestasi. Kami telah mengenal pasti tiga jenis teknologi pangkalan data yang biasa digunakan: pangkalan data hubungan, pangkalan data dokumen dan pangkalan data peristiwa.

Pangkalan data hubungan menyimpan data dalam jadual dengan skema tetap dan menguatkuasakan kekangan integriti data yang ketat. Ia sesuai untuk aplikasi yang memerlukan hubungan data kompleks dan transaksi. Contohnya termasuk MySQL, PostgreSQL dan Oracle.

Pangkalan data dokumen menyimpan data dalam dokumen seperti JSON dan tanpa skema. Ia sangat sesuai untuk aplikasi yang memerlukan model data fleksibel dan penskalaan mendatar. Contohnya termasuk MongoDB, Couchbase dan Amazon DynamoDB.

Pangkalan data peristiwa menyimpan data sebagai siri peristiwa, merakam setiap perubahan pada data. Ia sesuai untuk aplikasi yang memerlukan pengauditan, event sourcing dan pemprosesan data kompleks. Contohnya termasuk Apache Kafka, Apache Pulsar dan AWS Kinesis.

## Keputusan

Selepas menilai dengan teliti keperluan dan kekangan aplikasi kami, kami telah memutuskan untuk menggunakan pangkalan data dokumen.

## Rasional

Kami memilih pangkalan data dokumen kerana:

1. Aplikasi kami memerlukan model data fleksibel yang boleh berkembang dari semasa ke semasa. Pangkalan data dokumen membolehkan kami menyimpan data dalam format tanpa skema, bermakna kami boleh menambah medan baharu atau menukar struktur dokumen sedia ada tanpa mengubah skema pangkalan data.

2. Aplikasi kami perlu menskala secara mendatar untuk mengendalikan jumlah data dan trafik yang besar. Pangkalan data dokumen menyediakan sokongan terbina dalam untuk sharding dan replikasi, yang membolehkan kami mengagihkan data merentasi berbilang pelayan dan mengendalikan daya pemprosesan baca dan tulis yang tinggi.

3. Aplikasi kami memerlukan pendapatan semula data yang pantas dan cekap. Pangkalan data dokumen menyediakan keupayaan pengindeksan dan pertanyaan yang berkuasa yang membolehkan kami mendapatkan semula data dengan pantas dan cekap.

4. Aplikasi kami tidak memerlukan transaksi kompleks atau hubungan data. Walaupun pangkalan data hubungan cemerlang dalam menguatkuasakan kekangan integriti data dan mengendalikan transaksi kompleks, aplikasi kami tidak mempunyai keperluan sedemikian. Pangkalan data dokumen boleh menyediakan jaminan konsistensi dan ketahanan yang mencukupi untuk kes penggunaan kami.

## Akibat

Dengan memilih pangkalan data dokumen, kami perlu melabur dalam mempelajari dan memahami teknologi khusus yang kami pilih untuk digunakan. Selain itu, kami perlu memastikan model data aplikasi kami sesuai dengan model data pangkalan data dokumen untuk memaksimumkan prestasi dan kebolehskalaan.

Namun, kami percaya bahawa faedah menggunakan pangkalan data dokumen melebihi kosnya, dan ia merupakan padanan terbaik untuk keperluan dan kekangan aplikasi kami.
