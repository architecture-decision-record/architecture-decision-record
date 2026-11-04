# Rekod Keputusan Seni Bina: Rangka kerja CSS

Kandungan:

- [Ringkasan](#ringkasan)
  - [Isu](#isu)
  - [Keputusan](#keputusan)
  - [Status](#status)
- [Butiran](#butiran)
  - [Andaian](#andaian)
  - [Kekangan](#kekangan)
  - [Pendirian](#pendirian)
  - [Hujah](#hujah)
  - [Implikasi](#implikasi)
- [Berkaitan](#berkaitan)
  - [Keputusan berkaitan](#keputusan-berkaitan)
  - [Keperluan berkaitan](#keperluan-berkaitan)
  - [Artifak berkaitan](#artifak-berkaitan)
  - [Prinsip berkaitan](#prinsip-berkaitan)
- [Nota](#nota)


## Ringkasan


### Isu

Kami mahu menggunakan rangka kerja CSS untuk mencipta aplikasi web kami:

  * Kami mahu pengalaman pengguna yang pantas dan boleh dipercayai, pada semua pelayar popular dan saiz skrin.

  * Kami mahu lelaran pantas pada reka bentuk, susun atur, UI/UX dan sebagainya.

  * Kami mahu aplikasi responsif, terutamanya untuk skrin lebih kecil seperti pada peranti mudah alih, skrin lebih besar seperti pada skrin lebar 4K, dan skrin dinamik seperti paparan yang boleh diputar.  


### Keputusan

Memutuskan Bulma.


### Status

Memutuskan Bulma. Terbuka kepada pilihan rangka kerja CSS baharu apabila ia muncul.


## Butiran


### Andaian

Kami mahu mencipta aplikasi web yang moden, pantas, boleh dipercayai, responsif dan sebagainya.

Aplikasi web moden tipikal mengurangkan/menghapuskan penggunaan jQuery kerana pelbagai sebab: 

  * JavaScript moden secara beransur-ansur memperkenalkan banyak keupayaan yang telah disediakan oleh jQuery, jadi jQuery kurang diperlukan, dan terdapat modul yang lebih baik/lebih pantas/lebih kecil yang menyediakan pelaksanaan khusus

  * Pendekatan luas jQuery ialah manipulasi DOM secara langsung, yang merupakan anti-corak untuk rangka kerja JavaScript moden (cth. React, Vue, Svelte)

  * jQuery mengganggu dirinya sendiri jika dimuatkan dua kali dan sebagainya.


### Kekangan

Jika kami memilih rangka kerja CSS yang menggunakan jQuery, kami terpaksa mengimport jQuery. Contohnya, Semantic UI menggunakan jQuery, dan Tachyons tidak.

Jika kami memilih rangka kerja CSS yang minimal, kami melepaskan komponen rangka kerja yang mungkin kami mahu sekarang atau tidak lama lagi. Contohnya, Semantic UI menyediakan karusel imej, dan Tachyons tidak.


### Pendirian

Kami mempertimbangkan untuk tidak menggunakan rangka kerja. Ini masih kelihatan berdaya maju, terutamanya kerana CSS grid menyediakan banyak yang kami perlukan untuk projek kami..

Kami mempertimbangkan banyak rangka kerja CSS menggunakan triaj senarai pendek yang pantas: Bootstrap, Bulma, Foundation, Materialize, Semantic UI, Tachyons dan sebagainya. Dua pilihan kami untuk semakan lebih mendalam ialah Semantic UI (kerana ia mempunyai pendekatan paling semantik) dan Bulma (kerana ia mempunyai pendekatan paling ringan yang menyediakan komponen yang kami mahu sekarang).

Kami mempertimbangkan Semantic UI. Ini menyediakan banyak komponen, termasuk yang kami mahu untuk projek kami: tab, grid, butang dan sebagainya. Kami melakukan perintis dengan Semantic UI dalam dua cara: menggunakan fail CDN tipikal, dan menggunakan repo NPM. Kami mencapai kejayaan dengan Semantic UI dalam halaman HTML statik, tetapi tidak mencapai kejayaan dalam tempoh masa yang ditetapkan untuk membina SPA JavaScript (terutamanya kerana isu pemuatan jQuery). Kami mendapati bahawa pengekod lain telah meminta pembangun Semantic UI untuk mencipta versi bebas jQuery, atas sebab yang sama seperti kami. Pengekod lain telah meminta versi bebas jQuery selama bertahun-tahun, namun pembangun telah mengatakan tidak, dan menyatakan bahawa sebarang versi bebas jQuery akan terlalu sukar untuk ditulis cth. ~"projek Semantic UI mempunyai lebih 22,000 titik sentuh yang menggunakan jQuery".

Contoh dengan Semantic:

```html
<div class="ui top attached tabular menu">
  <a class="item">Alpha</a>
  <a class="item">Bravo</a>
</div>
```

Kami mempertimbangkan Bulma. Bulma mempunyai banyak keupayaan serupa dengan Semantic UI, walaupun tidak sebanyak komponen canggih. Bulma dibina dengan teknik moden, seperti tanpa jQuery. Bulma mempunyai beberapa komponen pihak ketiga, sebahagiannya mungkin kami mahu gunakan.


Contoh dengan Bulma:
```html
<div class="tabs">
  <ul>
    <li><a>Alpha</a></li>
    <li><a>Bravo</a></li>
  </ul>
</div>
```


### Hujah

Seperti di atas.

Secara khusus, Semantic UI nampaknya mempunyai bendera amaran dari segi teknologi (iaitu begitu banyak titik sentuh jQuery) dan juga dari segi kepimpinan (iaitu bebas jQuery ialah penolakan keras, dan bukannya mencuba peta jalan, atau penambahbaikan berterusan, atau pengumpulan dana derma dan sebagainya).


### Implikasi

Jika kami menemui rangka kerja CSS bukan-jQuery yang baik, ini secara amnya membantu dan baik secara keseluruhan.


## Berkaitan


### Keputusan berkaitan

Rangka kerja CSS yang kami pilih mungkin menjejaskan kebolehujian.


### Keperluan berkaitan

Kami mahu menghantar aplikasi yang sepenuhnya moden dengan pantas. 

Kami tidak mahu membazirkan masa bekerja pada rangka kerja lebih lama (terutamanya Semantic UI) yang menggunakan kebergantungan lebih lama (terutamanya jQuery).


### Artifak berkaitan

Menjejaskan semua HTML tipikal yang akan menggunakan CSS.


### Prinsip berkaitan

Mudah diterbalikkan.

Perlukan kelajuan.


## Nota

Sebarang nota di sini.
