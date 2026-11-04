# Rekod Keputusan Seni Bina: pilihan pengesahan dan kebenaran

<!--

ChatGPT prompt:

Explain web application authentication authorization. 

Describe:  OAuth, OpenID Connect, SAML, WS-Federation, LDAP, Social SSO Providers.

-->

Pengesahan (authentication) dan kebenaran (authorization) aplikasi web ialah dua konsep penting dalam melindungi akses kepada aplikasi dan perkhidmatan. Kedua-duanya berkaitan dengan identiti pengguna dan cara kebenaran diberikan, tetapi menumpukan pada aspek yang berbeza:

- **Pengesahan** ialah proses mengesahkan identiti pengguna atau sistem.
- **Kebenaran** ialah proses menentukan sumber atau tindakan yang boleh diakses oleh pengguna atau sistem yang telah disahkan.

Sekarang, mari kita mendalami protokol dan teknologi khusus yang anda sebutkan, yang biasa digunakan dalam aplikasi web moden untuk mengurus pengesahan dan kebenaran.

### 1. **OAuth (Open Authorization)**

**OAuth** ialah piawaian terbuka untuk kebenaran. Ia membolehkan pengguna memberikan aplikasi pihak ketiga akses terhad kepada sumber mereka tanpa berkongsi bukti kelayakan mereka. Idea utamanya ialah **akses yang diwakilkan**. OAuth sering digunakan dalam situasi di mana pengguna boleh log masuk ke perkhidmatan pihak ketiga (cth., log masuk dengan Google) tanpa memberikan nama pengguna dan kata laluan mereka secara terus kepada pihak ketiga.

- **Aliran**: OAuth biasanya mengikuti aliran **berasaskan token**, di mana pelayan kebenaran mengeluarkan token akses kepada aplikasi pihak ketiga. Token ini mewakili kebenaran pengguna, dan aplikasi menggunakannya untuk mengakses data atau sumber pengguna daripada API.
- **Contoh**: Pengguna log masuk ke aplikasi pihak ketiga menggunakan akaun Google mereka. Google mengesahkan identiti pengguna dan kemudian memberikan token yang membolehkan aplikasi pihak ketiga mengakses sebahagian data Google (cth., Google Calendar).

OAuth **tidak** mengendalikan pengesahan secara langsung; ia mengenai pemberian akses. Untuk pengesahan, OAuth sering dipasangkan dengan protokol lain, seperti **OpenID Connect**.

### 2. **OpenID Connect (OIDC)**

**OpenID Connect (OIDC)** ialah lapisan identiti yang dibina di atas **OAuth 2.0** yang menambah pengesahan kepada keupayaan kebenaran OAuth. Pada asasnya, OpenID Connect melanjutkan OAuth untuk mengendalikan **pengesahan pengguna** dan menyediakan cara berpiawai bagi aplikasi untuk mengesahkan identiti pengguna.

- **Aliran**: Apabila pengguna log masuk menggunakan OpenID Connect, aplikasi pihak ketiga meminta token ID (selain token akses OAuth). Token ID mengandungi maklumat tentang pengguna (seperti nama pengguna, e-mel dan tuntutan lain). Ini membolehkan aplikasi mengetahui siapa pengguna dan sama ada mereka telah disahkan.
- **Contoh**: Log masuk ke perkhidmatan seperti Slack menggunakan akaun Google anda (Google ialah penyedia OpenID Connect) melibatkan pengesahan melalui OpenID Connect, manakala OAuth mengurus akses kepada sumber Google anda.

OIDC memudahkan aplikasi pihak ketiga **mengesahkan pengguna** sambil masih membenarkan kawalan terperinci ke atas sumber yang boleh diakses oleh aplikasi tersebut.

### 3. **SAML (Security Assertion Markup Language)**

**SAML** ialah piawaian lama berasaskan XML yang digunakan untuk bertukar data pengesahan dan kebenaran antara pihak, khususnya dalam senario **Single Sign-On (SSO)**. Ia digunakan terutamanya dalam persekitaran perusahaan untuk membolehkan pengguna mengesahkan sekali dan mengakses berbilang aplikasi tanpa memasukkan semula bukti kelayakan.

- **Aliran**: Pengguna mula-mula mengesahkan dengan penyedia identiti (IdP). IdP menjana **penegasan SAML** bertandatangan yang merangkumi identiti pengguna dan atribut berkaitan. Penegasan itu dihantar kepada penyedia perkhidmatan (SP), yang menggunakannya untuk membenarkan akses kepada aplikasi.
- **Contoh**: Seorang pekerja log masuk ke portal korporat mereka (IdP) dan secara automatik dilog masuk ke sistem lain seperti e-mel, CRM dan sebagainya, tanpa memasukkan semula bukti kelayakan. Proses pengesahan berdasarkan penegasan SAML yang dihantar oleh IdP.

SAML biasa digunakan dalam **penyelesaian SSO perusahaan** dan berfungsi dengan baik untuk aplikasi web dalam persekitaran korporat, tetapi ia kurang mesra mudah alih berbanding OAuth/OIDC.

### 4. **WS-Federation (Web Services Federation)**

**WS-Federation** ialah satu lagi protokol yang digunakan untuk **Single Sign-On (SSO)**, terutamanya dalam persekitaran perusahaan berasaskan Microsoft. Ia sebahagian daripada keluarga spesifikasi **WS-* (Web Services)** dan membolehkan persekutuan identiti merentasi domain keselamatan berbeza (seperti antara organisasi berbeza atau antara perkhidmatan berbeza).

- **Aliran**: WS-Federation membolehkan **penyedia identiti (IdP) yang dipercayai** mengesahkan pengguna dan mengeluarkan token yang boleh digunakan oleh penyedia perkhidmatan untuk kebenaran. Ia serupa dengan SAML tetapi sering digunakan dalam senario yang sangat bergantung pada teknologi Microsoft.
- **Contoh**: Pengguna log masuk ke aplikasi perusahaan yang dihoskan oleh Microsoft Azure Active Directory (AD), dan identiti mereka boleh digunakan untuk mengakses perkhidmatan bersekutu lain, termasuk aplikasi yang dihoskan oleh vendor pihak ketiga.

Walaupun WS-Federation sebahagian besarnya digantikan oleh protokol lebih baharu seperti OAuth2.0 dan OpenID Connect dalam banyak persekitaran web moden, ia masih digunakan dalam sistem warisan, terutamanya dalam perusahaan yang berpusat pada Microsoft.

### 5. **LDAP (Lightweight Directory Access Protocol)**

**LDAP** ialah protokol yang digunakan untuk mengakses dan mengurus perkhidmatan direktori, biasa digunakan untuk **menyimpan bukti kelayakan pengguna** dan mengurus kawalan akses dalam direktori berpusat (sering dipanggil **Perkhidmatan Direktori**). LDAP bukan khusus tentang pengesahan atau kebenaran tetapi digunakan untuk menyimpan dan mendapatkan semula data identiti, yang kemudian digunakan dalam proses tersebut.

- **Pengesahan**: LDAP membolehkan aplikasi mengesahkan pengguna dengan membuat pertanyaan kepada perkhidmatan direktori untuk bukti kelayakan (seperti kata laluan).
- **Kebenaran**: Ia juga mengurus peranan dan kebenaran pengguna, membantu menentukan sama ada pengguna mempunyai akses kepada sumber tertentu.
- **Contoh**: Banyak perusahaan menggunakan direktori berasaskan LDAP (cth., **Active Directory**) untuk pengesahan dan kebenaran, terutamanya dalam persekitaran Windows.

LDAP penting bagi perusahaan untuk mengurus akses pengguna merentasi sistem dalaman, tetapi dalam konteks web moden, LDAP sering disepadukan dengan protokol lain seperti SAML atau OAuth untuk pengurusan identiti yang lebih lengkap.

### 6. **Penyedia SSO Sosial**

Penyedia **Single Sign-On (SSO)** sosial seperti **Facebook**, **Google**, **Twitter**, **GitHub** dan lain-lain membolehkan pengguna mengesahkan ke aplikasi pihak ketiga menggunakan bukti kelayakan media sosial mereka. Ini ialah sejenis **pengesahan berasaskan OAuth** di mana perkhidmatan pihak ketiga (cth., Google) ialah penyedia identiti.

- **Aliran**: Pengguna mengklik "Log masuk dengan Google" (sebagai contoh). Aplikasi mengubah hala ke Google, di mana pengguna log masuk (jika belum log masuk). Google kemudian menyediakan token akses atau token ID kepada aplikasi pihak ketiga, yang boleh digunakan untuk mengesahkan pengguna dan mungkin mengakses data mereka.
- **Contoh**: Banyak aplikasi membolehkan anda log masuk menggunakan bukti kelayakan Google atau Facebook anda. Aplikasi akan menggunakan OAuth atau OpenID Connect di sebalik tabir untuk mengesahkan identiti anda dan, dalam sesetengah kes, mengakses data media sosial tertentu.

SSO Sosial ialah kaedah pengesahan yang mudah dan diterima pakai secara meluas kerana ia mengurangkan geseran untuk pengguna, yang mungkin tidak mahu mencipta satu lagi nama pengguna dan kata laluan.

---

### Ringkasan Perbezaan:

- **OAuth**: Digunakan untuk kebenaran, membolehkan aplikasi pihak ketiga mengakses data pengguna tanpa mendedahkan bukti kelayakan.
- **OpenID Connect**: Melanjutkan OAuth untuk menyediakan pengesahan, membolehkan aplikasi mengesahkan identiti pengguna.
- **SAML**: Protokol berasaskan XML yang digunakan untuk SSO, sering dalam persekitaran perusahaan.
- **WS-Federation**: Protokol khusus Microsoft untuk persekutuan identiti, digunakan dalam sistem warisan.
- **LDAP**: Protokol untuk membuat pertanyaan perkhidmatan direktori bagi mengesahkan pengguna dan mengurus kebenaran.
- **Penyedia SSO Sosial**: Sistem berasaskan OAuth (seperti Google, Facebook) yang membolehkan aplikasi pihak ketiga mengesahkan pengguna menggunakan bukti kelayakan media sosial mereka.

Setiap teknologi ini mempunyai kekuatan dan kes penggunaan tersendiri, dan dalam aplikasi moden, anda mungkin melihat gabungan teknologi ini digunakan untuk aspek keselamatan yang berbeza (cth., OAuth/OIDC untuk akses API, SAML untuk SSO perusahaan).
