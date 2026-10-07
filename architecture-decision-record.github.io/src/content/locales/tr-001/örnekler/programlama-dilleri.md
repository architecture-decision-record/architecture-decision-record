# Programlama dilleri

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


## Özet


### Sorun

Yazılımlarımız için programlama dilleri seçmemiz gerekiyor. İki ana ihtiyacımız var: web uygulamaları için uygun bir ön uç programlama dili ve sunucu uygulamaları için uygun bir arka uç programlama dili.


### Karar

Ön uç için TypeScript'i seçiyoruz.

Arka uç için Rust'ı seçiyoruz.


### Durum

Karar verildi. Ortaya çıkan yeni alternatiflere açığız.


## Ayrıntılar


### Varsayımlar

Ön uç uygulamaları tipiktir:

  * Tipik kullanıcılar ve etkileşimler

  * Tipik tarayıcılar ve sistemler

  * Tipik geliştirmeler ve dağıtımlar

Ön uç uygulamalarının hızla gelişmesi muhtemeldir:

  * Hızlı ve kolay geliştirme, dağıtım, yineleme vb. sağlamak istiyoruz.

  * Tür güvenliği gibi kanıtlanabilirliğe değer veriyoruz ve bunu sağlamak için biraz daha fazla iş yapmaktan çekinmiyoruz.

  * Eski sürümlerle uyumluluğa ihtiyacımız yok.

Arka uç uygulamaları tipikten daha yüksek düzeydedir:

  * Kalite için, özellikle kanıtlanabilirlik, güvenilirlik, güvenlik vb. için tipikten daha yüksek hedefler.

  * Neredeyse gerçek zamanlılık için tipikten daha yüksek hedefler; yani sanal makine çöp toplamasından kaynaklanan duraklamalar istemiyoruz.

  * İşlevsel programlama için, özellikle paralelleştirme, çok çekirdekli işleme ve bellek güvenliği için tipikten daha yüksek hedefler.

Derleme zamanı güvenliği ve çalışma zamanı hızları lehine daha düşük derleme zamanı hızlarını kabul ediyoruz.


### Kısıtlamalar

Amazon Lambda gibi büyük bulut sağlayıcılarının işlev hizmetleriyle kullanılabilen diller konusunda güçlü bir kısıtlamamız var.


### Pozisyonlar

Şu dilleri değerlendirdik:

  * C

  * C++

  * Clojure
  
  * Elixir
  
  * Erlang
  
  * Elm
  
  * Flow
  
  * Go
  
  * Haskell
  
  * Java
  
  * JavaScript
  
  * Kotlin
  
  * Python
  
  * Ruby
  
  * Rust
  
  * TypeScript



### Argüman

Dil başına özet:

  * C: düşük güvenlik nedeniyle reddedildi; Rust hemen hemen her şeyi daha iyi yapabilir.

  * C++: dağınık olduğu için reddedildi; Rust hemen hemen her şeyi daha iyi yapabilir.

  * Clojure: mükemmel modelleme; en iyi Lisp yaklaşımı; JVM üzerinde harika çalışma zamanı.
  
  * Elixir: dağıtılabilirlik ve eşzamanlılık dahil mükemmel çalışma zamanı; mükemmel geliştirici deneyimi; görece küçük ekosistem.

  * Erlang: dağıtılabilirlik ve eşzamanlılık dahil mükemmel çalışma zamanı; zorlu geliştirici deneyimi; görece küçük ekosistem.

  * Elm: çok umut verici görünüyor; IBM iyi sonuçlarla büyük vaka çalışmaları yayımlıyor; daha küçük ekosistem.

  * Flow: JavaScript'e göre ilginç bir iyileştirme; ancak geliştiriciler ondan uzaklaşıyor.

  * Go: mükemmel geliştirici deneyimi; mükemmel eşzamanlılık; ancak dili sakatlayan kötü kararlar geçmişi var.

  * Haskell: en iyi işlevsel dil; daha küçük geliştirici topluluğu; yeterli sayıda yayımlanmış üretim başarısına ulaşmadı.

  * Java: mükemmel çalışma zamanı; mükemmel ekosistem; vasatın altında geliştirici deneyimi.

  * JavaScript: gelmiş geçmiş en popüler dil; en yaygın ekosistem.

  * Kotlin: Java'nın pek çok sorununu giderir; JetBrains'in mükemmel desteği; Java'dan Kotlin'e geçişle ilgili yayımlanmış iyi örnekler.
  
  * Python: sistem yönetimi için en popüler dil; harika analitik araçları; iyi web çerçeveleri; ancak Google tarafından Go lehine terk edildi.

  * Ruby: gelmiş geçmiş en iyi geliştirici deneyimi; en iyi web çerçeveleri; en hoş topluluk; ancak çok yavaş; paketlemesi biraz zor.

  * Rust: en iyi yeni dil; sıfır soyutlama vurgusu; eşzamanlılık vurgusu; ancak görece küçük ekosistem; ve bazı derleyici hızlandırmaları üzerinde kasıtlı sınırlar var; örneğin doğrudan bellek erişiminin açıkça güvensiz (unsafe) olması gerekir.

  * TypeScript: JavaScript'e türler ekler; harika aktarıcı (transpiler); JavaScript'ten TypeScript'e geçişe artan geliştirici vurgusu; Microsoft'un güçlü desteği.

Sanal makinelerin şu anda ihtiyaç duymadığımız bir dizi ödünleşimi olduğuna karar verdik; örneğin çalışma zamanı yetenekleri sağlayan ek karmaşıklık.

Temel kararımızın iki kesişen kaygıdan kaynaklandığına inanıyoruz:

  * En hızlı çalışma zamanı hızı ve en sıkı sistem erişimi için JavaScript ve C'yi seçerdik.

  * En hızlıya yakın çalışma zamanı hızı ve en sıkıya yakın sistem erişimi için TypeScript ve Rust'ı seçiyoruz.

Bir sanal makine dili isteseydik seçeceğimiz sanal makine dilleri ve web çerçeveleri için övgüye değer anmalar:

  * Clojure ve Luminus

  * Java ve Spring

  * Elixir ve Phoenix


### Etkiler

Ön uç geliştiricilerinin TypeScript öğrenmesi gerekecek. Geliştiricinin temel deneyimi JavaScript kullanmaksa, bu muhtemelen kolay bir öğrenme eğrisidir.

Arka uç geliştiricilerinin Rust öğrenmesi gerekecek. Geliştiricinin temel deneyimi C/C++ kullanmaksa bu muhtemelen orta düzeyde, Java, Python, Ruby veya benzeri bellek yönetimli dilleri kullanmaksa zor bir öğrenme eğrisidir. 

TypeScript ve Rust ikisi de görece yenidir. Bu, birçok aracın bu diller için henüz belgelerinin olmadığı anlamına gelir. Örneğin devops hattının bu diller için kurulması gerekecek ve şu ana kadar değerlendirdiğimiz devops araçlarının hiçbirinde bu diller için varsayılan örnekler yok.

TypeScript ve Rust için derleme süreleri oldukça yavaştır. Bunun bir kısmı dillerin yeni olmasından kaynaklanıyor olabilir. İsteğe bağlı derleme, eşzamanlı derleme vb. yoluyla yavaş derleme sürelerini nasıl hafifletebileceğimize bakmak isteyebiliriz.

Bu diller için IDE desteği henüz her yerde mevcut değil ve henüz birinci sınıf değil. Örneğin JetBrains, Python için birinci sınıf destek sunan PyCharm IDE'sini satıyor, ancak Rust için birinci sınıf destek sunan bir IDE satmıyor; bunun yerine JetBrains, Python dil desteğine kıyasla Rust dil desteğinin belki %80'ini sağlayan bir Rust eklentisi kullanabilir.


## Bağlantılı


### Bağlantılı kararlar

Bu dillerle uyumlu ekosistem seçimlerine yöneleceğiz.

Örneğin bu diller için iyi yeteneklere sahip bir IDE seçmek istiyoruz.

Örneğin ön uç web çerçevemiz için, düz JavaScript'e yönelen bir çerçeve (örn. React) yerine TypeScript'e yönelen bir çerçeveye (örn. Vue) karar verme olasılığımız daha yüksektir.


### Bağlantılı gereksinimler

Tüm araç zincirimizin bu dilleri desteklemesi gerekir.


### Bağlantılı eserler

Bazı gizli bilgileri ortam değişkenlerine aktarabileceğimizi bekliyoruz.


### Bağlantılı ilkeler

İki kez ölç, bir kez inşa et. Bir miktar hıza karşı bir miktar güvenliği önceliklendiriyoruz.

Çalışma zamanı, derleme zamanından daha değerlidir. Müşteri kullanımını geliştirici kullanımına tercih ediyoruz.


## Notlar

Notlar buraya.
