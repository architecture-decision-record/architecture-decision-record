# Rekod Keputusan Seni Bina: API menggunakan JSON berbanding gRPC

## Status

Diterima

## Konteks

Kami sedang mereka bentuk API untuk perkhidmatan baharu yang akan digunakan oleh berbilang klien. Kami telah mempertimbangkan dua pilihan untuk melaksanakan API: menggunakan JSON melalui HTTP atau menggunakan gRPC.

JSON melalui HTTP ialah pendekatan yang digunakan secara meluas untuk membina API, dan ia disokong oleh banyak bahasa pengaturcaraan dan rangka kerja. Pendekatan ini mudah, ringan dan mudah difahami, menjadikannya pilihan yang baik untuk banyak projek. Namun, ia boleh kurang cekap berbanding pilihan lain, terutamanya apabila mengendalikan data yang banyak.

gRPC, sebaliknya, ialah teknologi yang lebih baharu yang menawarkan cara yang lebih cekap untuk membina API. Ia menggunakan bersiri binari untuk memindahkan data, yang boleh lebih pantas dan lebih padat berbanding menggunakan JSON. gRPC juga menyokong penstriman dua hala, menjadikannya pilihan yang baik untuk aplikasi masa nyata.

## Keputusan

Selepas mempertimbangkan kebaikan dan keburukan kedua-dua pilihan, kami telah memutuskan untuk menggunakan gRPC untuk API kami. Walaupun JSON melalui HTTP ialah pilihan yang lebih mudah, kami percaya bahawa gRPC akan menyediakan penyelesaian yang lebih cekap dan boleh diskalakan untuk perkhidmatan kami. Kami juga menjangka bahawa API kami akan mengendalikan sejumlah besar data, dan bersiri binari gRPC akan lebih cekap untuk kes penggunaan ini.

Selain itu, kami percaya bahawa sokongan gRPC untuk penstriman dua hala akan bermanfaat untuk aplikasi masa nyata yang mungkin kami bangunkan pada masa hadapan.

## Akibat

Dengan memilih gRPC, kami perlu menggunakan set alat dan pustaka yang berbeza untuk membina API kami berbanding menggunakan JSON melalui HTTP. Ini mungkin memerlukan masa dan usaha tambahan untuk mempelajari dan melaksanakan teknologi ini. Selain itu, klien yang mahu menggunakan API kami perlu menggunakan pustaka yang serasi dengan gRPC, yang mungkin tidak disokong seluas pustaka JSON melalui HTTP.

Namun, kami percaya bahawa manfaat menggunakan gRPC melebihi kelemahan yang berpotensi ini, dan kami yakin bahawa keputusan ini akan menghasilkan API yang lebih cekap dan boleh diskalakan.
