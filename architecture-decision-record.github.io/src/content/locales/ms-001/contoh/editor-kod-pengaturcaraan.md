# Rekod Keputusan Seni Bina: Editor Kod Pengaturcaraan

## Konteks

Editor kod pengaturcaraan ialah alat penting untuk pembangun menulis dan mengedit kod. Terdapat banyak editor kod, masing-masing dengan set ciri, kelebihan dan kekurangan tersendiri. Tujuan ADR ini ialah mendokumenkan keputusan seni bina yang dibuat untuk editor kod pengaturcaraan.

## Keutamaan

Seni bina untuk editor kod pengaturcaraan perlu mengutamakan perkara berikut:

* **Kemodularan**: Editor kod perlu direka secara modular, membolehkan pembangun menyesuaikan dan melanjutkannya mengikut keperluan. Ini membolehkan seni bina fleksibel yang boleh menyesuaikan diri dengan keperluan pembangun dan pasukan yang berbeza.

* **Prestasi**: Editor kod perlu berprestasi dan responsif, membolehkan pembangun bekerja dengan cekap tanpa diperlahankan oleh alat yang mereka gunakan.

* **Antara Muka Pengguna**: Antara muka pengguna perlu intuitif dan mudah digunakan, membolehkan pembangun menumpukan pada kod mereka dan bukannya bergelut dengan editor.

* **Kebolehlanjutan**: Editor kod perlu direka untuk membolehkan lanjutan mudah dengan pemalam dan integrasi pihak ketiga.

* **Keserasian**: Editor kod perlu serasi dengan pelbagai bahasa pengaturcaraan dan teknologi, menjadikannya alat yang berguna untuk pelbagai pembangun.

## Keputusan

Berdasarkan keutamaan ini, seni bina untuk editor kod pengaturcaraan perlu direka dengan komponen berikut:

* **Teras**: Komponen ini menyediakan fungsi asas editor kod, seperti penyerlahan sintaks, pengeditan teks dan pengurusan fail.

* **UI**: Komponen ini menyediakan antara muka pengguna untuk editor kod, termasuk menu, bar alat dan pintasan papan kekunci.

* **Pemalam**: Komponen ini membolehkan pembangun melanjutkan fungsi editor kod dengan memasang pemalam pihak ketiga. Pemalam boleh menyediakan ciri tambahan, seperti penyiapan kod, linting atau penyahpepijatan.

* **Integrasi**: Komponen ini membolehkan editor kod berintegrasi dengan alat dan teknologi lain, seperti sistem kawalan versi, sistem binaan atau alat penyahpepijatan.

## Rasional

Kemodularan editor kod membolehkan pembangun menyesuaikan dan melanjutkannya mengikut keperluan. Ini penting kerana pembangun dan pasukan berbeza mempunyai keperluan dan aliran kerja berbeza, dan seni bina fleksibel boleh menampung perbezaan ini.

* **Prestasi**: kritikal kerana pembangun perlu dapat bekerja dengan cekap tanpa diperlahankan oleh alat mereka. Editor kod yang berprestasi adalah penting untuk produktiviti dan boleh membantu pembangun mengekalkan tumpuan dan konsentrasi mereka.

* **UI**: penting kerana ia membolehkan pembangun menumpukan pada kod mereka dan bukannya bergelut dengan editor. Ini boleh membawa kepada produktiviti yang lebih baik dan kurang kekecewaan bagi pembangun.

* **Kebolehlanjutan**: berkuasa kerana ia membolehkan editor kod disesuaikan dengan keperluan dan aliran kerja berbeza. Pemalam dan integrasi pihak ketiga boleh menyediakan ciri dan keupayaan tambahan yang tidak termasuk dalam editor teras.

* **Keserasian**: bernilai kerana ia membolehkan editor kod digunakan dengan pelbagai bahasa pengaturcaraan dan teknologi. Ini menjadikan editor alat yang lebih berguna untuk pelbagai pembangun.

Komponen teras, pemalam, integrasi dan UI menyediakan pengasingan kebimbangan yang jelas dan membolehkan seni bina modular yang boleh dilanjutkan dan disesuaikan dengan mudah. Seni bina ini fleksibel, berprestasi dan serasi dengan pelbagai bahasa pengaturcaraan dan teknologi, menjadikannya alat yang berguna untuk pembangun.
