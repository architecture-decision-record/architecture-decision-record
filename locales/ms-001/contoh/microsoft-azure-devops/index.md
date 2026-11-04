# Microsoft Azure DevOps

Kandungan:

* [Ringkasan](#ringkasan)
  * [Isu](#isu)
  * [Keputusan](#keputusan)
  * [Status](#status)
* [Butiran](#butiran)
  * [Andaian](#andaian)
  * [Kekangan](#kekangan)
  * [Pendirian](#pendirian)
  * [Hujah](#hujah)
  * [Implikasi](#implikasi)
* [Berkaitan](#berkaitan)
  * [Keputusan berkaitan](#keputusan-berkaitan)
  * [Keperluan berkaitan](#keperluan-berkaitan)
  * [Artifak berkaitan](#artifak-berkaitan)
  * [Prinsip berkaitan](#prinsip-berkaitan)
* [Nota](#nota)
  * [Microsoft Devops CI: An Unsatisfying Adventure](#microsoft-devops-ci-an-unsatisfying-adventure)
  * [Sorotan perbincangan Hacker News](#sorotan-perbincangan-hacker-news)
  * [Windows Development MVP](#windows-development-mvp)
  * [Ringkasan Edward Thomson (PM Azure)](#ringkasan-edward-thomson-pm-azure)


## Ringkasan


### Isu

Kami mahu menggunakan devops untuk membina, mengintegrasi, menempatkan dan menghoskan projek kami. Kami mempertimbangkan Microsoft Azure DevOps.

  * Kami mahu pengalaman pembangun yang pantas dan boleh dipercayai, untuk persediaan devops cth. konfigurasi serta penggunaan berterusan cth. masa binaan yang pantas.
  
  * Kami mahu mempertimbangkan penggunaan Microsoft Azure secara keseluruhan, untuk menghoskan aplikasi projek, pangkalan data dan sebagainya.


### Keputusan

Diputuskan tidak menggunakan Microsoft Azure DevOps.


### Status

Diputuskan. Terbuka untuk menilai semula jika/apabila maklumat penting baharu tiba.


## Butiran


### Andaian

Semua andaian devops biasa, seperti dalam buku Accelerate.

  * Binaan pantas ialah bantuan yang ketara. Ini mempercepat gelung maklum balas.

  * Kami boleh menukar masuk/keluar bahagian daripada vendor alternatif iaitu kami mungkin mahu membawa pelayan binaan berkelajuan lebih tinggi kami sendiri, atau menggunakan sistem kawalan versi pilihan kami sendiri, atau menyelaraskan dengan pelayan integrasi berterusan yang dihoskan sendiri.
  
  * Kebolehgunaan yang diperkemas ialah bantuan yang ketara, untuk pengalaman pembangun, dan seterusnya untuk bidang halus seperti konsistensi, kejelasan, keselamatan dan kemudahan keluk pembelajaran.

  * Apabila sesuatu rosak atau bermasalah, kami mahu cara yang berkesan untuk melaporkan isu itu. Ini amat penting untuk sebarang isu berkaitan keselamatan.


### Kekangan

Tiada yang diketahui. Azure mempunyai komitmen yang diterbitkan untuk bekerjasama dengan baik dengan alat luaran.


### Pendirian

Kami mempertimbangkan menggunakan Microsoft Azure Devops berbanding AWS yang sedia ada.

Kami bereksperimen dengan Azure DevOps, Azure Pipelines, Azure Repo dan pemutaran pelayan baharu Azure melalui Terraform.

Kami bereksperimen dengan mendapatkan sokongan daripada wakil Microsoft.

Kami mengumpul maklumat daripada rakan sebaya di blog dan Hacker News.


### Hujah

Azure DevOps mengiklankan set tawaran yang cemerlang, tetapi ia tidak menepati, ia tidak berfungsi dengan baik bersama, dan sokongan lemah.

Pengalaman langsung kami:

  * Persediaan Azure ialah kekusutan UI, sebahagiannya bertindih dengan akaun Microsoft, sebahagiannya tidak. Cth. terdapat log masuk Azure, log masuk Microsoft.com, log masuk Live.com dan sebagainya dan semuanya digunakan serentak.

  * Kami menemui isu keselamatan kecil semasa persediaan, dan tidak menemui penyelesaian. Kami mencuba banyak cara untuk melaporkannya, kepada ramai wakil Microsoft, tanpa kejayaan. Kami berjaya melaporkannya kepada keselamatan Microsoft, yang membalas dengan tidak akan diperbaiki.

  * Dokumentasi sering salah atau lapuk. Sekurang-kurangnya sebahagian daripada ini disebabkan enjin carian Microsoft yang lemah, dan sebahagiannya disebabkan SEO yang tidak memuaskan.
  
  * Persediaan Terraform didokumenkan dengan baik, dan berfungsi. Namun, sokongan Terraform lemah berbanding AWS kerana Microsoft sedang membina hubungan perniagaan dengan vendor untuk melakukan contoh persediaan berantai melalui Terraform.

Pengalaman rakan sebaya kami:

  * Selepas kami melakukan penilaian buta kami sendiri, kami mencari pengalaman rakan sebaya. Apa yang kami temui mengesahkan pengalaman kami.

  * Rakan sebaya melaporkan masalah tambahan dengan masa binaan, dan masalah dengan pelayan bawa-binaan-sendiri. Masalah ini jauh lebih teruk daripada masalah UI, kerana melakukan binaan ialah tujuan teras saluran paip binaan, dan kami menjangkakan melakukan banyak sehari.

  * Kami mendapati penyertaan yang cemerlang oleh rakan sepasukan Azure di kawasan perbincangan. Syabas kepada Microsoft untuk ini. Kami amat kagum dengan Edward Thomson, PM dan pengekod Azure, kerana penyertaannya, keterusterangannya dan penjelasan teknikalnya.


### Implikasi

Memilih Microsoft Azure DevOps kelihatan berkemungkinan lebih mahal (~3x) dari segi masa dan kos berbanding tidak memilih Azure.


## Berkaitan


### Keputusan berkaitan

Jika kami memilih Azure DevOps, terdapat banyak tawaran berkaitan, termasuk Azure Repo, Azure Pipeline dan sebagainya. Kami percaya bahawa jika kami memilih Azure Devops, ini mungkin memudahkan penggunaan lebih banyak keupayaan Azure, atau mungkin menyukarkan penggunaan keupayaan vendor lain.

Kami percaya bahawa Microsoft membuat kemajuan besar dalam pengalaman pembangun, dan kami melihat Microsoft membuat pemerolehan besar alat pembangun (cth. GitHub) dan kebergantungan (cth. Citus).

Jika kami memilih Azure DevOps, maka kami mungkin mahu menekankan memilih tawaran pemerolehan Microsoft, dan kami juga mungkin mahu mendekati tawaran pemerolehan dengan lebih berhati-hati/penilaian kerana kemungkinan penolakan tisu cth. risiko pusing ganti kakitangan.


### Keperluan berkaitan

Kami mahu masa binaan sangat pantas. Kami menerima membayar premium tinggi untuk ini. Ini kerana kami mahu berulang dengan sangat pantas.

Kami mahu kebolehpercayaan sangat tinggi. Kami menerima membayar premium tinggi untuk ini. Ini kerana kami sedang menguji kes penggunaan bernilai tinggi, termasuk transaksi kewangan, transaksi sulit dan sebagainya.

4 KPI devops teratas kami termasuk masa purata untuk pemulihan, yang memerlukan binaan pantas dan kebolehpercayaan tinggi.


### Artifak berkaitan

Kami mahu sistem binaan mengeluarkan artifak yang sesuai untuk digunakan dalam sistem lain, seperti Artifactory.


### Prinsip berkaitan

Mudah diterbalikkan. Kami boleh menilai Azure DevOps selari dengan AWS yang sedia ada.


## Nota


### Microsoft Devops CI: An Unsatisfying Adventure

https://toxicbakery.github.io/vsts-devops/microsoft-devops-ci/

Catatan blog.

"Sebagai pembangun perisian, saya tahu secara langsung betapa sukarnya membina produk berkualiti dengan cepat dan murah. Ia satu bentuk seni yang kadangkala kami berjaya, dan kadangkala merosot menjadi sesuatu seperti tapak web kerajaan penjagaan kesihatan era Obama. Tahap kawalan kami ke atas produk yang terhasil berbeza-beza, dan kesalahan atas kegagalan sering jatuh kepada orang yang salah dalam hierarki membuat keputusan. Azure DevOps Microsoft (dahulunya dikenali sebagai Visual Studio Team Services), walaupun niat yang jelas baik, ialah ribut sempurna keputusan buruk dan pelaksanaan yang lemah."


### Sorotan perbincangan Hacker News

https://news.ycombinator.com/item?id=18983586

"Kami menggunakan Azure DevOps secara meluas di tempat kerja saya dan, setelah menggunakan GitHub, Gitlab, penyelesaian dihoskan sendiri, Jenkins, TeamCity... Azure DevOps menduduki tempat paling akhir."

"UI sangat kekok di mana-mana. Yang paling teruk bagi saya ialah pull request. Sangat sukar untuk bekerja dengan orang pada pull request. Saya malah tidak dapat menunjuk kepada satu masalah tertentu - bagi kami ia rosak di mana-mana."

"Azure Devops ialah sesuatu yang saya mahu sukai. UI terus berubah, tetapi tidak membetulkan pepijat asas yang telah wujud sekian lama."

"Alat tidak disepadukan dengan baik, UI sangat perlahan, tiada paparan papan pemuka pull request aktif, binaan, keluaran dan sebagainya untuk repo kegemaran saya. Masa Binaan/Penempatan sangat perlahan secara tidak masuk akal."

"Kami cuba menggunakan Azure Boards juga (Work Items, Boards, Backlogs dan sebagainya). Aduh. Ia kekusutan UI yang lengkap dengan idea yang terpisah. Daripada melaksanakan satu perkara dengan baik, mereka melaksanakan dua dozen perkara dengan teruk."


### Windows Development MVP

Windows Development MVP di sini. Saya rasa saya mesti memikul sebahagian tanggungjawab di sini kerana tidak lebih lantang tentang isu ini. Tetapi mesti katakan, saya kecewa mendengar anda "terkejut" tentang isu UX. Saya telah memberitahu orang anda bahawa UX sangat teruk (cth. sejak sebelum pelancaran) dan terus mendengar "kami tahu, kami sedang membetulkannya". Saya akan mula memformalkan maklum balas dan menolaknya melalui paip, nantikan. Saya juga setempat (Bellevue), ingin datang dan cuba menyalurkan aplikasi oss .net/wpf/uwp kami yang agak mudah. Saya mengesyaki ia akan membuka mata kita berdua.

Beberapa contoh:

* Anda tidak boleh membina saluran paip dengan repo git yang mengandungi submodule

* Mendapati mustahil untuk mengedit PATH untuk beberapa alat tersuai

* Pengalaman Saluran Paip Baharu tidak begitu masuk akal, pengguna baharu yang mengklik sekeliling akhirnya akan sampai ke Docs yang salah.


### Ringkasan Edward Thomson (PM Azure)

Saya menulis kod yang menggabungkan pull request anda. Pengurus Program di Microsoft untuk Azure DevOps; dahulu jurutera perisian pada alat kawalan versi di GitHub, Microsoft, SourceGear.

https://www.edwardthomson.com/

Penyelenggara bersama libgit2. https://libgit2.github.io

Hos bersama All Things Git, Podcast tentang Git. https://www.allthingsgit.com/

Kurator Developer Tools Weekly, surat berita tentang alat pembangunan. https://developertoolsweekly.com/
