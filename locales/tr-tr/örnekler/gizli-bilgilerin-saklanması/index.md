# Gizli bilgilerin saklanması

İçindekiler:

- [Özet](#özet)
  - [Sorun](#sorun)
  - [Karar](#karar)
  - [Durum](#durum)
- [Ayrıntılar](#ayrıntılar)
  - [Varsayımlar](#varsayımlar)
  - [Kısıtlamalar](#kısıtlamalar)
  - [Pozisyonlar](#pozisyonlar)
  - [Argüman](#argüman)
  - [Etkiler](#etkiler)
- [Bağlantılı](#bağlantılı)
  - [Bağlantılı kararlar](#bağlantılı-kararlar)
  - [Bağlantılı gereksinimler](#bağlantılı-gereksinimler)
  - [Bağlantılı eserler](#bağlantılı-eserler)
  - [Bağlantılı ilkeler](#bağlantılı-ilkeler)
- [Notlar](#notlar)
  - [Vault by HashiCorp](#vault-by-hashicorp)
  - [LastPass](#lastpass)
  - [Bitwarden](#bitwarden)
  - [EnvKey](#envkey)
  - [Confidant by Lyft](#confidant-by-lyft)
  - [Devolutions Password Server](#devolutions-password-server)
  - [Secret Server by Thycotic](#secret-server-by-thycotic)


## Özet


### Sorun

Parolalar, özel anahtarlar, kimlik doğrulama belirteçleri vb. gizli bilgileri saklamamız gerekiyor.

Gizli bilgilerin bir kısmı kullanıcı odaklıdır. Örneğin geliştiricimiz, bir hizmetin parolasına bakmak için cep telefonunu kullanabilmek ister.

Gizli bilgilerin bir kısmı sistem odaklıdır. Örneğin sürekli teslim hattımızın, bulut barındırma kimlik bilgilerimize bakabilmesi gerekir.


### Karar

Kullanıcı odaklı gizli bilgiler için Bitwarden

Sistem odaklı gizli bilgiler için Vault by HashiCorp.


### Durum

Karar verildi. Ortaya çıkan yeni alternatiflere açığız.


## Ayrıntılar


### Varsayımlar

Bu amaç ve mevcut durumumuz için, kullanılabilir mobil uygulamalar gibi kullanıcı odaklı kolaylığa değer veriyoruz.

  * Örneğin nöbetçi sistem güvenilirliği mühendisliği yapan bir geliştirici gibi, hareket halindeyken hızlı ve kolay erişim sağlamak istiyoruz.

  * Bazı gizli bilgileri bir ekip gibi seçilmiş kişiler arasında paylaşabilmek istiyoruz.

Tek sağlayıcıya yönelik bir çözüm aramıyoruz; örneğin tüm gizli bilgileri yalnızca Amazon, Azure veya Google üzerinde saklamak gibi.

"Aklında tut", "bir nota yaz" veya "kendi saklama yolunu bul" gibi geçici yaklaşımlar istemiyoruz.

Bu amaç için güvenlik modelimiz, SaaS parola yönetim araçları gibi saygın hazır ticari (COTS) satıcıları kullanmaya uygundur.


### Kısıtlamalar

Şu anda kolay bir şey istiyoruz; yani kod yazmaya gerek yok, sunucu kurmaya gerek yok, büyük bir taahhüde gerek yok, herkesi standartlaştırmaya gerek yok.


### Pozisyonlar

Şunları değerlendirdik:

1. Kullanıcı odaklı hazır parola yöneticileri: LastPass, 1Password, Bitwarden, Dashlane, KeePass, pass, GPG vb.

2. Sistem odaklı COTS parola yöneticileri: AWS KMS, Vault by HashiCorp, EnvKey, Secret Server by Thycotic, Devolutions Password Server, Confidant by Lyft.

3. Paylaşım odaklı yaklaşımlar: paylaşılan bir Google belgesi, paylaşılan bir Slack kanalı veya paylaşılan bir ağ klasörü vb. kullanmak.

4. Hatırlamak, not yazmak ya da her kullanıcının kendi yaklaşımını bulmasına güvenmek gibi düşük teknolojili geçici yaklaşımlar.


### Argüman

Bitwarden, LastPass, 1Password ve Dashlane'in hepsi hazır ticari ürünlerdir.

  * Kullanıcılar, ekipler, kuruluşlar vb. için benzer türde özellikler.

  * Windows ve Mac için masaüstü yeteneği, Android ve iOS için mobil yetenek.

  * Otomatik form doldurma vb. için Chrome ve Firefox tarayıcı uzantıları.

Bitwarden'ın diğerlerine göre iki avantajı vardır:

  * Bitwarden açık kaynaklıdır; bu, güvenliğinin akran incelemesinden geçebileceği ve şirketin güvenlik odaklı geliştiriciler tarafından yaygın olarak takdir edildiği anlamına gelir.

  * Yazılım çalışanlarının anekdotları, Bitwarden'a diğerlerine kıyasla belirgin bir tercih olduğunu anlatıyor.

Tipik iyi bir örnek yazı: https://jcs.org/2017/11/17/bitwarden

Tipik bir yan yana oylama sitesi: https://stackshare.io/stackups/bitwarden-vs-dashlane

KeyPass, pass, GPG vb. seçeneklerini erteliyoruz, çünkü ek karmaşıklık var. Bunların hepsi teknik kullanıcılar için iyi çözümler gibi görünüyor. GPG, sistemler arası komut odaklı yetenekler isteyen teknik kullanıcılar için özellikle iyi görünüyor.

KMS'yi erteliyoruz, çünkü tek sağlayıcıya bağımlılık (lock-in) var.

Sistem odaklı ihtiyaçlar için Vault'u seçiyoruz, çünkü incelemeler şaşırtıcı derecede olumlu ve HashiCorp'un üst düzey yazılım ve destek konusunda mükemmel bir sicili var.

Paylaşılan belgeler, paylaşılan kanallar, paylaşılan ağ klasörleri vb. aracılığıyla paylaşma yaklaşımlarını veto ediyoruz. Bunlar istediğimiz güvenlik niteliklerini sağlamıyor.

Düşük teknolojili geçici yaklaşımları veto ediyoruz, çünkü bunun uzun vadeli bir yol olmadığı konusunda hepimiz hemfikiriz.


### Etkiler

Geliştiricilerin gizli bilgileri iki yerde izlemesi gerekebilir: kullanıcı odaklı erişim için Bitwarden ve sistem odaklı erişim için Vault.


## Bağlantılı


### Bağlantılı kararlar

Hangi CI/CD sunucusunun kullanılacağı kararı, gizli bilgilere erişme yeteneğinin kanıtını içermelidir.

Gizli bilgilerin politikalar, rotasyonlar, kuruluşlar vb. açısından nasıl yönetileceğine karar vermemiz gerekecek.


### Bağlantılı gereksinimler

Gizli bilgilerin uyumluluk, denetim ve İK işe alım/ayrılış süreçleri için ilgili gereksinimleri olacaktır.


### Bağlantılı eserler

Bazı gizli bilgileri ortam değişkenlerine aktarabileceğimizi bekliyoruz.


### Bağlantılı ilkeler

Kolayca geri alınabilir.

Kolayca paralel; yani çeşitli parola yöneticilerini kullanmak kolaydır.

Denemesi ucuz; yani ücretsiz deneme var ve taahhüt gerekmiyor.


## Notlar

Değerlendirme notları burada. Notların hepsi çeşitli devops tartışma panolarındaki herkese açık yorumlardır.


### Vault by HashiCorp

Burada istediğiniz tam olarak Vault'tur. 

Yine de Vault'u doğrudan üretime atmayın; önce bir test ortamında kurun, çünkü ürünleri harika olsa da HashiCorp'un belgeleri oldukça yetersiz olabiliyor.

Çok dik bir öğrenme eğrisi var ve kurulumu basit değil. 

İlk kurulum biraz zahmetli. Yine de buna değer ve topluluk, idare etmeniz için onu yeterince destekler.

Belgeler berbat ama insanların kurulumunu anlattığı çok sayıda çevrimiçi rehber var; birkaçını bir araya getirirseniz çalışan bir kurulumunuz olur.

İlk kurulum, helm şemalarıyla (vault ve consul) uğraşmayı gerektirdi. Teknik olarak birçok başka arka uç kullanabilirsiniz, ama gerçekten, gerçekten önermiyorum. Saklayacak çok veriniz yoksa arka uç/consul minicik olabilir.

CLI'yi kullanmaya kesinlikle alışın/aşina olun, çünkü grafik arayüz, kurumsal sürümleri için bir kavram kanıtı/reklam portalı gibidir.

Onu "doldurup bırakamıyor" olmanız can sıkıcı. Örneğin 5 alanınız varsa, her öğe için her alanı elle eklemeniz gerekir. Yani belirli bir kategori için alanları önceden tanımlayıp o kategorideki tüm öğeler için bu alanları doldurmuyorsunuz; daha çok "her seferinde her şeyi sıfırdan üretiyorsunuz", bu da (bence) çok can sıkıcı.

Vault'un üzerinde bir arayüz olarak goldfish'e de bakmak isteyebilirsiniz. Ekibinizi bu işe ikna etmeyi oldukça güzel hale getiriyor. Bir de demoları var. 1. Consul'ü kurun. 2. Consul'e bakan Vault'u kurun. 3. Vault'a bakan goldfish'i kurun. 3. Yedekler için consul snapshot çalıştıracak bir cron işi kurun.



### LastPass

LastPass Teams. Biz kullanıyoruz; özel şablonları, ACL'si var, bence eksik bir şey yok.

LastPass'i kuruluşumda uyguladım ve ona C+/B- veriyorum. Son zamanlarda en büyük sorun güvenilirlik eksikliği. Son 90 günde kasaların çevrimdışı moda zorlandığı birden çok saat oldu. Kuruluşum 20'den fazla paylaşılan klasörde kelimenin tam anlamıyla 4.000'den fazla parola sakladığı için bu pek ideal değil. Bu kadar çok parolayla, en az birkaçının her gün güncellendiğini veya eklendiğini tahmin edebilirsiniz. Sorunlar bir iki saatten uzun sürerse bir felaket kurtarma planımız var: bir betik, her gece kasanın bir CSV dökümünü imzalayıp şifreler ve bu döküm keepass'e aktarılabilir.

LastPass'in bildirilmeyen hizmet kalitesi düşüşleri oldu: oturum açma 'çalışıyor' ama siteleri çekmiyor, yönetici panelinde rastgele özellikler bozuk ve yeni üst düzey paylaşılan klasörler için anahtarlar düzgün paylaşılmıyor. Her grupta bulunan özel bir 'anahtar gönderme'/yedekleme kullanıcım var. Genellikle bu kullanıcı olarak oturum açmak anahtar paylaşımı sorunlarını giderir, ancak durum sayfası ne derse desin hizmet düşük kalitedeyken işe yaramaz...

Entegrasyon, en az ayrıcalık modeliyle düzgün ACL'leriniz varsa kolay olabilir; örneğin bir kullanıcının bir girdi veya klasör üzerinde hem okuma-yazma hem salt okuma yetkisi varsa yalnızca salt okuma izni alır. Ne yazık ki kuruluşumun ACL'leri pek iyi değil; bu yüzden yüzlerce ACL'mizin bağımlı yapısı en az ayrıcalık modeline iyi oturmadığı için JSON sağlama API'sini ve yaklaşık 500 satırlık python'u kullanmak zorunda kaldım. Bir kullanıcının bulunduğu tüm ACL'leri alıp bir tür bağımlılık yürüyüşü yaptım.

ACL veya grup yapınız zaten en az ayrıcalık yapısı gözetilerek kurulmuşsa, Windows için AD/LDAP eşitleme aracı iyi çalışır.

Satış ekipleriyle iletişime geçin; size daha uzun bir Enterprise denemesi ayarlayabilirler. Karar vermeden önce sınırlamalarını tam olarak anladığınızdan emin olun. Epey büyüme sancısı yaşadık, ancak sunucu tarafındaki kesintiler veya aksamalar dışında inanılmaz derecede sorunsuz oldu.


### Bitwarden

Bitwarden'ın etrafında güzel bir araç seti var (web arayüzü, CLI, mobil, masaüstü). Kendi sunucunuzda barındırılabilir ve kurulumu oldukça kolaydır. Oldukça iyi belgeleri var ve PrivacyTools tarafından önerilen bir araçtır.


### EnvKey

https://www.envkey.com/ bir SaaS'tır. Uygulaması, entegre edilmesi ve yönetilmesi gerçekten kolaydır.

Özellikler:

  * API anahtarlarını ve kimlik bilgilerini korur.

  * Yapılandırmayı her yerde eşitlenmiş tutar.

  * Akıllı, uçtan uca şifreli yapılandırma ve gizli bilgi yönetimi. 

  * Güvensiz paylaşımı ve yapılandırma dağınıklığını önler. 

  * Dakikalar içinde entegre edilir.

Yetenekler:

  * Tüm uygulamalarınızın, ortamlarınızın ve ekiplerinizin yapılandırmasını ve erişim düzeylerini tek bir yerden yönetin.

  * Herhangi bir geliştirme veya sunucu ortamını tek bir ortam değişkeniyle yapılandırın.

Artılar:

  * İyi bir ana sayfa.

  * Açık değer önerisi.

  * Görsel olarak mükemmel web uygulaması.

  * Üstün örnek veriler, örn. Algolia, AWS, Datadog, GitHub, Stripe vb.

  * Kurucuyla şirket, arayüz vb. hakkında 30 dakika konuştum. Dane iyi bilgilendirilmiş, artıları/eksileri konusunda dürüst ve uygulanabilir bir ortak gibi görünüyor.

  * Şirket, esasen tek kurucuya sahip tipik bir Y Combinator şirketi. 2018-01'de 120 bin dolar yatırım aldı.

  * Odak, kurumsal özelliklere ulaşmak, özellikle EnvKey bulut barındırmasından şirket içine (on-prem) ya da BYOC'ye geçmek.

  * Olası bir yol: önce kullanım kolaylığı için EnvKey ile başlamak, sonra (ya da paralel olarak) Vault'u eklemek. 


### Confidant by Lyft

https://lyft.github.io/confidant/

Confidant, Lyft'teki geliştiricilerden gelen, gizli bilgilere kullanıcı dostu depolama ve güvenli erişim sağlayan açık kaynaklı bir gizli bilgi yönetim hizmetidir.

KMS Kimlik Doğrulaması: Confidant, kimlik doğrulama için tavuk-yumurta sorununu AWS KMS ve IAM kullanarak çözer; IAM rollerinin Confidant tarafından doğrulanabilen güvenli kimlik doğrulama belirteçleri üretmesine izin verir. Confidant ayrıca IAM rolleriniz için KMS izinlerini (grants) yönetir; bu da IAM rollerinin hizmetten hizmete kimlik doğrulaması için ya da hizmetler arasında şifreli ileti iletmek için kullanılabilecek belirteçler üretmesine olanak tanır.

Sürümlü gizli bilgilerin beklemede şifrelenmesi: Confidant, gizli bilgileri DynamoDB'de yalnızca eklemeli bir biçimde saklar; Fernet simetrik kimlik doğrulamalı kriptografi kullanarak her gizli bilginin her revizyonu için benzersiz bir KMS veri anahtarı üretir.

Gizli bilgileri yönetmek için kullanıcı dostu bir web arayüzü: Confidant, son kullanıcıların gizli bilgileri, gizli bilgilerin hizmetlerle eşlemelerini ve değişiklik geçmişini kolayca yönetmesine olanak tanıyan bir AngularJS web arayüzü sağlar.


### Devolutions Password Server

https://server.devolutions.net/

Ayrıcalıklı hesaplara ve oturumlara erişimi güvenceye alın, yönetin ve izleyin.

Ayrıcalıklı hesaplarınıza erişimi denetlemenizi sağlarken sistem yöneticileri için genel ağ görünürlüğünü de iyileştiren ve son kullanıcılar için sorunsuz bir deneyim sunan kapsamlı, yüksek güvenlikli bir parola kasası.

Özellikler: merkezi kuruluş parola kasası, kullanıcıya özel özel kasa, parola yöneticisi, kimlik bilgisi enjeksiyonu,
Active Directory entegrasyonu, rol tabanlı erişim denetimi, iki faktörlü kimlik doğrulama, kurumsal kullanıma hazır, IP kısıtlamaları, yönetim yetenekleri, otomatik parola üretici, mobil uygulama erişimi, parola geçmişi, erişim raporları, e-posta uyarıları.

  * veri şifrelemeyi destekler

  * birden çok kaynaktan MFA desteğiyle LDAP, O365 ve yerel kullanıcılar dahil birden çok kimlik doğrulama şemasını destekler

  * birden çok ekip için ayrıntılı erişim denetimlerine sahip birden çok depo/kasa

  * modern web arayüzü

  * kişisel kimlik bilgileri/bağlantılar için özel kimlik bilgisi ve bağlantı kasaları

  * iOS/Android için mobil uygulamalar

  * her girdi için kim/ne/ne zaman bilgisini içeren ve isteğe bağlı olarak erişim nedenini soran denetim günlükleri

  * özelleştirilebilir şablonlar (yüzlerce bağlantı türünü yerel olarak desteklemelerine rağmen)

  * çok daha fazla özellik ve eşitleyebileceğiniz bir Windows/Mac kalın istemcisi (Remote Desktop Manager); seçenekleri büyük ölçüde genişletir... tek tıkla bağlantılar

  * fiyatlandırma o kadar da kötü değil - parola sunucusu için 15 kullanıcıya kadar yılda 500 dolar


### Secret Server by Thycotic

https://thycotic.com/products/secret-server/

Şirket içi (on-premise) sürüm özellikleri: 

  * Uçtan uca güvenlik sistemleriniz ve altyapınız üzerinde tam denetim

  * Yazılımı şirket içi veri merkezinizde veya kendi sanal özel bulut örneğinizde dağıtın

  * Tüm veri ve sistemlerin şirket içinde bulunmasını gerektiren yasal ve düzenleyici yükümlülükleri karşılayın

Bulut sürümü özellikleri:

  * Hizmet olarak yazılım modeli, kaydolup hemen başlamanızı sağlar

  * Büyüdükçe esnek ölçeklenebilirlik

  * Azure tarafından sunulan, %99,9 çalışma süresi SLA'sı ile denetimler ve yedeklilik

Kullanıcı geri bildirimi:

  * Eskiden bu ürünü kullanırdık. Çok kolay atlatılıyordu ve kurallar yalnızca akıllı insanlar için işliyor. Tembel ya da aptal kullanıcılar bir ekip alanında onu kolayca bozabiliyor. Fiyatlar onlarla konuştuğunuzda pazarlığa açık.

  * SQL express ve bir Win 7 kutusuyla çalıştırabilirsiniz. 

  * Ucuz.
