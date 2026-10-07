# Monorepo ve multirepo karşılaştırması

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

Projemiz üç ana yazılım kategorisinin geliştirilmesini kapsamaktadır:

  * Ön uç grafik kullanıcı arayüzleri
  * Ara katman hizmetleri
  * Arka uç sunucuları

Geliştirme yaparken kaynak kodu yönetimi (SCM) sürüm denetim sistemimiz (VCS) git'tir.

Kodumuzu düzenlemek için git'i nasıl kullanacağımıza karar vermemiz gerekiyor.

Üst düzey seçim, "monorepo", "polyrepo" veya "melez" olarak düzenlemektir:

  * Monorepo, tüm parçaları tek bir büyük depoya koymak demektir
  * Polyrepo, her parçayı kendi deposuna koymak demektir
  * Melez, monorepo ve polyrepo'nun bir karışımı demektir

Daha fazlası için lütfen https://github.com/joelparkerhenderson/monorepo-vs-polyrepo adresine bakın


### Karar

Bir kuruluş/ekip/proje görece küçük olduğunda ve hızlı yineleme, istikrarı sürdürmekten daha yüksek öncelikliyse monorepo.

Bir kuruluş/ekip/proje görece büyük olduğunda ve istikrarı sürdürmek, hızlı yinelemeden daha yüksek öncelikliyse polyrepo.


### Durum

Karar verildi. Monorepo ve/veya polyrepo yönetimi için yeni araçlar kullanıma sunulduğunda yeniden ele alınmaya açıktır.


## Ayrıntılar


### Varsayımlar

Geliştirdiğimiz tüm kod, genel kamuya değil, tek bir kuruluşun ürünleri içindir. Yani Aracı Kurum, genel kamudan gönüllü geliştiricilere benzer bir şey hedeflememektedir.


### Kısıtlamalar

Kısıtlamalar https://github.com/joelparkerhenderson/monorepo-vs-polyrepo adresinde iyi belgelenmiştir.


### Pozisyonlar

Google, Facebook vb. tarzında monorepo'ları değerlendirdik. Monorepo ölçekleme sorunlarının o kadar uzak bir gelecekte olduğunu düşünüyoruz ki, onlara ihtiyaç duyduğumuzda Google ve Facebook ile aynı uygulamalardan yararlanabileceğiz.

Google Android, Facebook React vb. gibi tipik Git açık kaynak projeleri tarzında polyrepo'ları değerlendirdik. Bunların genel kamu katılımı (örneğin dünyadaki herkes kod üzerinde çalışabilir) ve bireysel erişilebilirlik (örneğin proje başka hiçbir parça olmadan kendi başına kullanılır) için en iyi seçim olduğunu düşünüyoruz.


### Argüman

Bir kuruluş/ekip/proje görece küçük olduğunda, monorepo'yu seçiyoruz, çünkü hızlı yineleme, istikrarı sürdürmekten önemli ölçüde daha yüksek önceliklidir.

Bir kuruluş/ekip/proje görece büyük olduğunda, polyrepo'yu seçiyoruz, çünkü istikrarı sürdürmek, hızlı yinelemeden önemli ölçüde daha yüksek önceliklidir.


### Etkiler

Mevcut bir CI+CD hattı varsa, tek bir depo içindeki birden fazla projeyi test etmek için onu ayarlamamız gerekebilir.

CI+CD, monorepo için tam bir derlemede daha fazla zaman alabilir, çünkü CI+CD monorepo'daki tüm projeleri derleyebilir.

Bir kuruluş/ekip/proje büyürse, monorepo'nun ölçekleme sorunları olacaktır.

Monorepo ölçekleme sorunları, bir polyrepo'ya geçişi giderek daha değerli hale getirebilir.

Monorepo'dan polyrepo'ya geçiş önemli bir devops görevidir ve planlanması, yönetilmesi ve programlanması gerekecektir.


## Bağlantılı


### Bağlantılı kararlar

Monorepo'ları (örneğin Google Bazel) ve polyrepo'ları (örneğin Lyft Refactorator) yönetmeye yönelik ilgili araçlar için kararlar oluşturacağız.


### Bağlantılı gereksinimler

CI+CD hattını git ile iyi çalışacak şekilde geliştirmemiz gerekiyor.


### Bağlantılı eserler

Depo organizasyonunun; sağlama, yapılandırma yönetimi, test ve benzeri devops alanları için ilgili eserlere sahip olmasını bekliyoruz. 


### Bağlantılı ilkeler

Kolayca geri alınabilir. Monorepo pratikte işe yaramazsa ya da yönetim tarafından istenmezse, polyrepo'ya geçmek basittir.

Müşteri Takıntısı. Projeyi müşterilerin eline ulaştırmaya değer veriyoruz ve bir monorepo'nun bizi oraya bir polyrepo'dan daha hızlı ulaştırabileceğine ve ayrıca daha hızlı yineleme yapmamıza yardımcı olabileceğine inanıyoruz.

Büyük düşün. Google ve Facebook, tüm temel ürünler birlikte geliştirilebildiği/test edilebildiği/dağıtılabildiği için monorepo'ların polyrepo'lara karşı çok güçlü savunucularıdır.


## Notlar

Notları buraya ekleyin.
