# Mimari karar kaydı (ADR)

Mimari karar kaydı (ADR), alınan önemli bir mimari kararı bağlamı ve sonuçlarıyla birlikte kaydeden bir belgedir.

> [!IMPORTANT]
> Bu kaynakları kritik sistemlerde kullanmadan önce kendi gerekli özeni göstererek inceleyin.

İçindekiler:

- [Mimari karar kaydı nedir?](#mimari-karar-kaydı-nedir)
- [ADR'leri kullanmaya nasıl başlanır?](#adrleri-kullanmaya-nasıl-başlanır)
- [Araçlarla ADR kullanmaya nasıl başlanır?](#araçlarla-adr-kullanmaya-nasıl-başlanır)
- [ADR'leri git ile kullanmaya nasıl başlanır?](#adrleri-git-ile-kullanmaya-nasıl-başlanır)
- [ADR'ler için Claude Code becerileri](#adrler-için-claude-code-becerileri)
- [Dosya adı kuralları](#dosya-adı-kuralları)
- [İyi ADR'ler yazmak için öneriler](#i̇yi-adrler-yazmak-için-öneriler)
- [ADR örnek şablonları](#adr-örnek-şablonları)
- [ADR'ler için ekip çalışması tavsiyesi](#adrler-için-ekip-çalışması-tavsiyesi)
- [ADR'ler için ekip çalışması soruları](#adrler-için-ekip-çalışması-soruları)
- [ADR'ler için sonraki adım kavramları](#adrler-için-sonraki-adım-kavramları)
- [Mimari diyagramlar, görünümler ve bakış açıları](#mimari-diyagramlar-görünümler-ve-bakış-açıları)
- [Kod olarak kararlar için uygunluk işlevleri](#kod-olarak-kararlar-için-uygunluk-işlevleri)
- [Çekme istekleri için karar korkulukları](#çekme-istekleri-için-karar-korkulukları)
- [Daha fazla bilgi için](#daha-fazla-bilgi-için)

Şablonlar:

- [Jeff Tyree ve Art Akerman tarafından karar kaydı şablonu](şablonlar/jeff-tyree-ve-art-akerman-karar-kaydı-şablonu/)
- [Michael Nygard tarafından karar kaydı şablonu](şablonlar/michael-nygard-karar-kaydı-şablonu/)
- [EdgeX tarafından karar kaydı şablonu](şablonlar/edgex-karar-kaydı-şablonu/)
- [arc42 tarafından karar kaydı şablonu](şablonlar/arc42-karar-kaydı-şablonu/)
- [Aleksandriyen desen için karar kaydı şablonu](şablonlar/alexandrian-deseni-karar-kaydı-şablonu/)
- [İş durumu için karar kaydı şablonu](şablonlar/iş-vakası-karar-kaydı-şablonu/)
- [MADR Projesi karar kaydı şablonu](şablonlar/madr-projesi-karar-kaydı-şablonu/)
- [Planguage kullanan karar kaydı şablonu](şablonlar/planguage-ile-karar-kaydı-şablonu/)
- [Paulo Merson tarafından karar kaydı şablonu](https://github.com/pmerson/ADR-template)
- [Olaf Zimmermann tarafından karar kaydı şablonu](https://medium.com/olzzio/y-statements-10eb07b5a177)
- [Gareth Morgan tarafından karar kaydı şablonu](şablonlar/gareth-morgan-karar-kaydı-şablonu/)
- [GIG Cymru NHS Wales tarafından karar kaydı şablonu](şablonlar/gig-cymru-nhs-wales-karar-kaydı-şablonu/)
- [Ignacio Larrañaga tarafından Önemli Teknik Kararlar (ITD'ler) için karar kaydı şablonu](şablonlar/önemli-teknik-kararlar-karar-kaydı-şablonu/)

Örnekler:

- [CSS çerçevesi](örnekler/css-çerçevesi/)
- [Ortam değişkeni yapılandırması](örnekler/ortam-değişkeni-yapılandırması/)
- [Metrikler, monitörler, uyarılar](örnekler/metrikler-monitörler-uyarılar/)
- [Microsoft Azure DevOps](örnekler/microsoft-azure-devops/)
- [Monorepo ve multirepo karşılaştırması](örnekler/monorepo-ve-multirepo-karşılaştırması/)
- [Programlama dilleri](örnekler/programlama-dilleri/)
- [Gizli bilgi depolama](örnekler/gizli-bilgilerin-saklanması/)
- [Zaman damgası biçimi](örnekler/zaman-damgası-biçimi/)
- [Çok daha fazlası...](örnekler/)

## Mimari karar kaydı nedir?

**Mimari karar kaydı** (ADR), bağlamı ve sonuçlarıyla birlikte alınan önemli bir mimari kararı yakalayan bir belgedir.

**Mimari karar** (AD), önemli bir gereksinimi karşılayan bir yazılım tasarım seçimidir.

**Mimari karar günlüğü** (ADL), belirli bir proje (veya kuruluş) için oluşturulan ve sürdürülen tüm ADR'lerin koleksiyonudur.

**Mimari açıdan önemli bir gereksinim** (ASR), bir yazılım sisteminin mimarisi üzerinde ölçülebilir bir etkiye sahip olan bir gereksinimdir.

Bunların hepsi **mimari bilgi yönetimi** (AKM) konusundadır.

Bu belgenin amacı, ADR'lere hızlı bir genel bakış, nasıl oluşturulacakları ve daha fazla bilgi için nereye bakılacağı sağlamaktır.

Kısaltmalar:

  * **AD**: mimari karar

  * **ADL**: mimari karar günlüğü

  * **ADR**: mimari karar kaydı

  * **AKM**: mimari bilgi yönetimi

  * **ASR**: mimari açıdan önemli gereksinim

## ADR'leri kullanmaya nasıl başlanır?

ADR'leri kullanmaya başlamak için ekip arkadaşlarınızla bu alanlar hakkında konuşun.

Karar tespiti:

  * AD ne kadar acil ve ne kadar önemli?

  * Şimdi mi yapılmalı, yoksa daha fazlası bilinene kadar bekleyebilir mi?

  * Kişisel ve kolektif deneyimin yanı sıra tanınmış tasarım yöntemleri ve uygulamaları, karar tespitine yardımcı olabilir.

  * İdeal olarak, ürün yapılacaklar listesini tamamlayan bir karar yapılacaklar listesi tutun.

Karar verme:

  * Genel olanlar ve yazılım mimarisine özgü olanlar olmak üzere bir dizi karar verme tekniği mevcuttur, örneğin diyalog haritalama.

  * Grup kararı verme aktif bir araştırma konusudur.

Karar alma ve uygulama:

  * AD'ler yazılım tasarımında kullanılır; bu nedenle, onu finanse eden, geliştiren ve işleten sistemin paydaşlarına iletilmeli ve onlar tarafından kabul edilmelidir.

  * Mimari olarak belirgin kodlama stilleri ve mimari kaygılara ve kararlara odaklanan kod incelemeleri iki ilgili uygulamadır.

  * Yazılım evriminde bir yazılım sistemini modernleştirirken AD'ler de (yeniden) dikkate alınmalıdır.

Karar paylaşımı (isteğe bağlı):

  * Birçok AD, projeler arasında tekrarlanır.

  * Bu nedenle, geçmişteki iyi ve kötü kararlarla ilgili deneyimler, açık bir bilgi yönetimi stratejisi uygularken değerli yeniden kullanılabilir varlıklar olabilir.

Karar belgeleri:

  * Karar yakalamak için birçok şablon ve araç mevcuttur.

  * Çevik topluluklara bakın, örneğin M. Nygard'ın ADR'leri.

  * Geleneksel yazılım mühendisliği ve mimari tasarım süreçlerine bakın, örneğin IBM UMF ve CapitalOne'dan Tyree ve Akerman tarafından önerilen tablo düzenleri.

Daha fazlası için:

  * Yukarıdaki adımlar [Mimari Karar](https://en.wikipedia.org/wiki/Architectural_decision) hakkındaki Wikipedia girişinden uyarlanmıştır.

## Araçlarla ADR kullanmaya nasıl başlanır?

- [MySpec](https://myspec.dev) — Proje anayasasını, teknik mimariyi ve ADR'leri MCP üzerinden sunulan temiz Markdown'a dönüştüren otomatik belirtim ve mimari karar platformu.

İstediğiniz şekilde araçlarla ADR'leri kullanmaya başlayabilirsiniz.

Örneğin:

  * Google Drive ve çevrimiçi düzenlemeyi kullanmayı seviyorsanız, bir Google Dokümanı veya Google E-Tablosu oluşturabilirsiniz.

  * Git gibi kaynak kodu sürüm kontrolünü kullanmayı seviyorsanız, her ADR için bir dosya oluşturabilirsiniz.

  * Atlassian Jira gibi proje planlama araçlarını kullanmayı seviyorsanız, aracın planlama izleyicisini kullanabilirsiniz.

  * MediaWiki gibi wikileri kullanmayı seviyorsanız, bir ADR wikisi oluşturabilirsiniz.

## ADR'leri git ile kullanmaya nasıl başlanır?

Eğer git sürüm kontrolü kullanmayı seviyorsanız, burada kaynak kodlu tipik bir yazılım projesi için ADR'leri git ile kullanmaya nasıl başlayacağımızı anlatıyoruz.

ADR dosyaları için bir dizin oluşturun:

```sh
$ mkdir adr
```

Her ADR için, `database.txt` gibi bir metin dosyası oluşturun:

```sh
$ vi database.txt
```

ADR'de istediğiniz her şeyi yazın. Fikirler için bu depodaki şablonlara bakın.

ADR'yi git reponuza kaydedin.

## ADR'ler için Claude Code becerileri

Bu depo, bir yapay zekâ kodlama ajanının ADR'leri bu projenin önerdiği biçimde yazıp sürdürebilmesi için [`skills/`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/) altında iki [Claude Code](https://claude.com/claude-code) becerisi (skill) sunar:

- [`architecture-decision-record-skill`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/architecture-decision-record-skill/) — genel amaçlıdır; herhangi bir projede ADR yazan herkes içindir. Bir kararın ADR gerektirip gerektirmediğine karar vermeye, bir `adr/` veya `decisions/` dizini oluşturmaya, dosyayı adlandırmaya, birlikte gelen on bir iskeletten bir şablon seçmeye ve sağlam Bağlam/Karar/Sonuçlar bölümleri yazmaya yardımcı olur.

- [`architecture-decision-record-maintainer-skill`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/architecture-decision-record-maintainer-skill/) — özellikle bu deponun bakımcıları içindir. Deponun yapısını, README/locales yansıtma geleneğini ve yeni bir şablon, örnek veya araç bağlantısı eklemenin kesin adımlarını belgeler.

Bir beceriyi kullanmak için klasörünü üzerinde çalıştığınız deponun kökündeki `.claude/skills/` içine (ya da her projede kullanılabilmesi için ana dizininizdeki `~/.claude/skills/` içine) kopyalayın, ardından Claude Code'dan bir ADR yazmasını veya gözden geçirmesini isteyin.

## Dosya adı kuralları

ADR'lerinizi tipik metin dosyaları kullanarak oluşturmayı seçerseniz, kendi ADR dosya adı kuralınızı bulmak isteyebilirsiniz.

Belirli bir biçime sahip bir dosya adı kuralı kullanmayı tercih ediyoruz.

Örnekler:

  * veritabani-sec.md

  * zaman-damgalarini-bicimlendir.md

  * parolalari-yonet.md

  * istisnalari-ele-al.md

Dosya adı kuralımız:

  * Ad, şimdiki zamanda bir zorunluluk fiil cümlesine sahiptir. Bu, okunabilirliğe yardımcı olur ve taahhüt mesajı biçimimizle eşleşir.

  * Ad, küçük harf ve kısa çizgi kullanır (bu depo ile aynı). Bu, okunabilirlik ve sistem kullanılabilirliğinin bir dengesidir.

  * Uzantı markdown'dır. Bu, kolay biçimlendirme için yararlı olabilir.

## İyi ADR'ler yazmak için öneriler

İyi bir ADR'nin özellikleri:

* Gerekçe: Belirli bir AD'yi yapmanın nedenlerini açıklayın. Bu, bağlamı (aşağıya bakın), çeşitli potansiyel seçeneklerin artılarını ve eksilerini, özellik karşılaştırmalarını, maliyet/fayda tartışmalarını ve daha fazlasını içerebilir.

* Özel: Her ADR, birden çok AD değil, bir AD ile ilgili olmalıdır.

* Zaman damgaları: ADR'deki her bir öğenin ne zaman yazıldığını belirtin. Bu, maliyetler, programlar, ölçeklendirme ve benzerleri gibi zamanla değişebilecek yönler için özellikle önemlidir.

* Değişmez: Bir ADR'deki mevcut bilgileri değiştirmeyin. Bunun yerine, yeni bilgiler ekleyerek ADR'yi değiştirin veya yeni bir ADR oluşturarak ADR'nin yerine geçin.

Bir ADR'de iyi bir "Bağlam" bölümünün özellikleri:

* Kuruluşunuzun durumunu ve iş önceliklerini açıklayın.

* Ekiplerinizin sosyal ve beceri yapılarına dayalı gerekçeleri ve değerlendirmeleri ekleyin.

* İlgili artıları ve eksileri ekleyin ve bunları ihtiyaç ve hedeflerinize uygun terimlerle açıklayın.

Bir ADR'de iyi bir "Sonuçlar" bölümünün özellikleri:

* Karar vermekten neyin kaynaklandığını açıklayın. Bu, etkileri, sonuçları, çıktıları, takiplerini ve daha fazlasını içerebilir.

* Sonraki ADR'ler hakkında bilgi ekleyin. Bir ADR'nin daha fazla ADR'ye ihtiyaç duyması nispeten yaygındır, örneğin bir ADR büyük bir kapsayıcı seçim yaptığında, bu da daha küçük kararlar için ihtiyaçlar yaratır.

* Herhangi bir işlem sonrası inceleme sürecini dahil edin. Ekiplerin, öğrenmek ve büyümek için ADR bilgilerini gerçekte olanlarla karşılaştırmak için bir ay sonra her ADR'yi incelemesi tipiktir.

Yeni bir ADR, önceki bir ADR'nin yerini alabilir:

* Önceki bir ADR'yi değiştiren veya geçersiz kılan bir AD yapıldığında, yeni bir ADR oluşturulmalıdır.

## ADR örnek şablonları

Ağda topladığımız ADR örnek şablonları:

- [Michael Nygard tarafından ADR şablonu](şablonlar/michael-nygard-karar-kaydı-şablonu/) (basit ve popüler)

- [Jeff Tyree ve Art Akerman tarafından ADR şablonu](şablonlar/jeff-tyree-ve-art-akerman-karar-kaydı-şablonu/) (daha gelişmiş)

- [Aleksandriyen desen için ADR şablonu](şablonlar/alexandrian-deseni-karar-kaydı-şablonu/) (bağlam ayrıntılarıyla basit)

- [İş vakası için ADR şablonu](şablonlar/iş-vakası-karar-kaydı-şablonu/) (daha MBA odaklı; maliyetler, SWOT ve daha fazla görüş içerir)

- [Markdown Any Decision Records (MADR) projesinin ADR şablonu](şablonlar/madr-projesi-karar-kaydı-şablonu/) (hem basit hem ayrıntılı sürüm; ikincisi seçenekleri ve artı-eksilerini vurgular)

- [Planguage kullanan ADR şablonu](şablonlar/planguage-ile-karar-kaydı-şablonu/) (daha kalite güvencesi odaklı)

- [Ignacio Larrañaga tarafından Önemli Teknik Kararlar (ITD'ler) için şablon](şablonlar/önemli-teknik-kararlar-karar-kaydı-şablonu/) (yalın ve karar öncelikli, hızlı yönetici incelemesi için optimize edilmiş)

## ADR'ler için ekip çalışması tavsiyesi

Ekibinizle karar kayıtlarını kullanmayı düşünüyorsanız, burada birçok ekiple çalışarak öğrendiğimiz bazı tavsiyeler var.

"Ne"yi zorunlu kılmak yerine "neden" hakkında birlikte konuşarak takım arkadaşlarınıza liderlik etme fırsatınız var. Örneğin, karar kayıtları ekiplerin daha akıllı düşünmeleri ve daha iyi iletişim kurmaları için bir yoldur; karar kayıtları, yalnızca sonradan zorunlu bir evrak gereksinimi ise değerli değildir.

Bazı ekipler "ADR'ler" kısaltması yerine "kararlar" adını çok daha fazla tercih eder. Bazı ekipler "kararlar" dizin adını kullandığında, bir ampul yanar ve ekip, satıcı kararları, planlama kararları, zamanlama kararları vb. gibi daha fazla bilgiyi dizine koymaya başlar. Tüm bu tür bilgiler aynı şablonu kullanabilir. İnsanların kısaltmalar ("ADR'ler") yerine kelimelerle ("kararlar") daha hızlı öğrendiklerini ve "kayıt" kelimesi kaldırıldığında insanların devam eden çalışma belgeleri yazmaya daha motive olduklarını ve ayrıca bazı geliştiricilerin ve bazı yöneticilerin "mimari" kelimesini sevmediğini varsayıyoruz.

Teoride, değişmezlik idealdir. Pratikte, değişkenlik ekiplerimiz için daha iyi çalıştı. Karardan sonra bilgilerin geldiğine dair bir not ve tarih damgasıyla mevcut ADR'ye yeni bilgileri ekliyoruz. Bu tür bir yaklaşım, hepimizin güncelleyebileceği "yaşayan bir belgeye" yol açar. Tipik güncellemeler, yeni takım arkadaşları, yeni teklifler veya kullanımlarımızın gerçek dünya sonuçları veya satıcı yetenekleri, fiyatlandırma planları, lisans sözleşmeleri vb. gibi sonradan yapılan üçüncü taraf değişiklikleri sayesinde bilgi edindiğimizde yapılır.

## ADR'ler için ekip çalışması soruları

### ADR'yi kim oluşturabilir?

Belirli kişiler, belirli roller, belirli ekipler veya belirli departmanlar gibi alanları göz önünde bulundurun; ayrıca bir ADR'yi görevlendirebilecek, yani başka birinin yazacağı bir tane talep eden kişiler, roller, ekipler veya departman olup olmadığını da göz önünde bulundurun.

Örnek cevap: Kuruluşumuzda mimari karar kaydı README sayfasını okuyan herhangi bir kişi bir ADR önerebilir, yani kişi onu yazmaya başlayabilir ve ekiple paylaşabilir.

### ADR'yi gündeme getirmeyi ne haklı çıkarır?

Kuruluşunuzun ekip çalışma şekilleri, yazılım sistem yapınız, ekipler arası koordinasyon, uzun vadeli sürdürülebilirlik, harici arayüzler, kimden faydalanmak istediğiniz ve benzeri alanları göz önünde bulundurun.

Örnek cevap: Gelecekteki geliştiricilerin yaptıklarımızın “nedenini” anlamasını istediğimizde bir ADR oluşturmak istiyoruz.

### ADR'yi yükseltmemeyi ne haklı çıkarır?

Mimari ile ilgili olmayan veya minimum riskli veya kendi kendine yeten veya tek geliştirici gibi küçük olan veya standartlar veya politikalar veya belgeler gibi başka bir yerde zaten tamamen kapsanan veya geçici çözümler veya kavram kanıtları veya deneyler gibi geçici olan kararlar gibi alanları göz önünde bulundurun.

Örnek cevap: Bir kararın kapsam, zaman, risk ve maliyet açısından sınırlı olduğu veya başka bir yerde zaten kapsandığı durumlarda bir ADR'yi atlamak istiyoruz.

### ADR'nin yaşam döngüsü nedir?

Oluşturma süreci, araştırma süreci, karar verme süreci, uygulama süreci ve kullanımdan kaldırma süreci gibi alanları göz önünde bulundurun. ADR'yi bir durumdan diğerine nasıl taşıyacağınız ve bunu paydaşlara nasıl ileteceğiniz gibi ADR yaşam döngüsünü zaman içinde nasıl izleyeceğinizi düşünün.

Örnek cevap: Bir ADR'nin beş yaşam döngüsü aşamasına sahip olmasını istiyoruz: Başlatma → Araştırma → Değerlendirme → Uygulama → Sürdürme → Kullanımdan Kaldırma.

### ADR'nin yaşam döngüsü adımları için kriterler nelerdir?

Bir ADR için kabul kriterleri gibi alanları göz önünde bulundurun, yani bir yaşam döngüsü adımından diğerine geçmek için yeterince iyi olduğunu nasıl anlarsınız? Sorun açıkça ifade edilmiş mi? Alternatifler düşünüldü mü? Ödünleşimler yeterince anlaşılıp belgelendi mi?
Tüm ilgili bağlam yerinde mi? İlgili tüm paydaşlar dahil mi? Tüm geri bildirimler dahil edildi mi?

Örnek cevap: Aktif ekip 1) araştırmalarını tamamladığında, 2) değerlendirmelerini tamamladığında, 3) ADR teklifini yorum talebi ve bir haftalık bir zaman kutusu ile paydaşlara yayınladığında, 4) tüm paydaş yorumları dahil edilip ele alındığında paydaşlar tarafından bir ADR'ye oy verilmesini istiyoruz.

### Hangi roller ve sorumluluklar bir ADR ile etkileşime girer?

Teklif sahibi, araştırmacı, değerlendirici, gözden geçiren, onaylayan, sürdüren ve benzeri rolleri göz önünde bulundurun. Paydaşlarla iletişim, beklentilerin karşılandığından emin olma, web sitesinde veya intranette paylaşma, çalışmayı periyodik olarak ve özellikle ilgili değişiklikler olduğunda gözden geçirme gibi sorumlulukları göz önünde bulundurun.

Örnek cevap: Her ADR'nin her zaman bir birincil irtibat kişisi, ikincil irtibat kişisi ve sorumlu ekibe sahip olmasını istiyoruz; bunlar iletişim, yayınlar, bakım, yılda en az bir kez periyodik inceleme ve gerektiğinde nihai kullanımdan kaldırmadan sorumludur.

### Yönetişim bir ADR ile nasıl etkileşime girer?

Kuruluşunuzun çalışma şekilleri, yasal yönler veya insan kaynakları yönleri gibi özel uyumluluk ihtiyaçları, fikir birliği, çatışma ve tırmanmayı nasıl ele almak istediğiniz gibi alanları göz önünde bulundurun. Bir ADR ile ilgili olarak, onu onaylayabilme, oy kullanabilme veya veto edebilme gibi diğerlerinden daha fazla etkiye sahip olabilecek alanlar, kişiler veya ekipler var mı?

Örnek cevap: Bir ADR'nin yönetişimi şu öncelik sırasındadır: CEO, CTO, CLO, bir ADR'yi uygulayan ekip, ADD hakkında en bilgili olan ekipteki uzmanlar. ADR'de açıklanmadığı sürece başka hiç kimsenin yönetişimi yoktur.

### Hangi ilkeler bir ADR ile etkileşime girer?

Kuruluşunuzun hızlı hareket etme ve yavaş hareket etme, karar birliği ve karar çatışması, risk tercihleri ve güvenlik tercihleri, halka açık tartışma ve özel tartışma ve benzerlerini içeren çalışma şekilleri gibi alanları göz önünde bulundurun.

Örnek cevap: Eylem için önyargı, aynı fikirde olmama ve taahhüt etme, kolayca geri döndürülebilir, kolayca izole edilebilir kararlar için %70 tahminlerin yeterince iyi olduğu ve kuruluşumuzun gizlilik sözleşmesinde açıklanan gizli bilgiler haricinde halka açık çalışma şekilleri gibi liderlik ilkelerini kullanıyoruz.

## ADR'ler için sonraki adım kavramları

[Arc42](https://arc42.org/) iki soruyu pragmatik biçimde yanıtlar ve özel ihtiyaçlarınıza göre uyarlanabilir. Mimariniz hakkında neyi belgelemeli/iletmelisiniz? Nasıl belgelemeli/iletmelisiniz? Arc42, mimari karar kayıtlarının yanı sıra hedefler, kısıtlar, bağlamlar, kalite, riskler ve daha fazlası hakkında rehberlik içerir.

[C4 modeli](https://c4model.com/), yazılım mimarisini diyagramlamak için öğrenmesi kolay, geliştirici dostu bir yaklaşımdır. C4; bağlam, kapsayıcılar, bileşenler ve kod için hiyerarşik diyagramlardan, ayrıca sistem manzarası, dinamik ve dağıtım için destekleyici diyagramlardan oluşur.

## Mimari diyagramlar, görünümler ve bakış açıları

Bir mimari diyagrama "mimari görünüm" denir.

Bir "mimari görünüm", bir "mimari bakış açısının" örneğidir.

Bir "mimari bakış açısı", belirli kaygıları olan belirli bir hedef kitleyi göz önünde bulundurur.

Mimari bakış açısı örnekleri, görünüm örnekleri ve diyagram örnekleri:

- İş yetenekleri

- Üst düzey iş süreçleri

- [Değer akışları](https://en.wikipedia.org/wiki/Value_stream)

- Uygulama bileşenlerine eşlenen yazılım işlevleri

- [C4 Model](https://en.wikipedia.org/wiki/C4_model) Bağlam diyagramı (TO-BE / AS-IS)

- [C4 Model](https://en.wikipedia.org/wiki/C4_model) Kapsayıcı diyagramı (TO-BE / AS-IS)

- [Varlık-ilişki diyagramı](https://en.wikipedia.org/w/index.php?title=Entity_relationship_diagram) (ERD) veri varlıklarını uygulama bileşenlerine eşlemek için

- [Sıra diyagramları](https://en.wikipedia.org/wiki/Sequence_diagram) sistemler içindeki ve entegrasyonlardaki işlevsel akışları betimlemek için

- [İş Süreci Modelleme Notasyonu](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN) uygulama bileşenleri arasındaki veri akışlarını betimleyen diyagramlar

- [İş Süreci Modelleme Notasyonu](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN) iş süreçlerini / kullanıcı senaryolarını betimleyen diyagramlar

- [Kimlik ve Erişim Yönetimi](https://en.wikipedia.org/wiki/Identity_and_access_management) (IAM) diyagramları

- [Rol Tabanlı Erişim Denetimi](https://en.wikipedia.org/wiki/Role-based_access_control) (RBAC) uygulama bileşeni başına rolleri gösteren diyagramlar

- [Öznitelik Tabanlı Erişim Denetimi](https://en.wikipedia.org/wiki/Attribute-based_access_control) (ABAC) uygulama bileşeni başına öznitelikleri gösteren diyagramlar

- Gizlilik diyagramları

İlgili diyagramlar:

- Kullanım senaryosu diyagramı, yönetime/müşterilere kullanım senaryolarını gösterir; bunlar gereksinimlerden, gereksinimler de yazılım mimarisinden önce gelir.

- Dağıtım diyagramı, yazılım bileşenlerinin dağıtıldığı fiziksel donanımı/bilgisayarları gösterir.
- Veri akış diyagramı, verinin sistem içinde nasıl hareket ettiğini ve dönüştürüldüğünü gösterir.
- Sıra diyagramı, HTTP gibi protokollerin zaman ekseninde nasıl çalıştığını göstermek için kullanılır.

- Etkinlik diyagramı, bir yazılım sisteminin üstlendiği etkinliklerin iş akışını, örneğin bir NPC yapay zekâsı gibi, betimler.

## Kod olarak kararlar için uygunluk işlevleri

Uygunluk işlevleri (fitness functions), kararların sürdürüldüğünü doğrulamak için programlama koduyla yazılmış nesnel, otomatik denetimlerdir.

- Uygunluk işlevleri, kararları test edilebilir ve güvence altına alınabilir kılar.

- Kararlar için uygunluk işlevleri; kalite güvencesine, düzenleyici süreçlere ve yönetişim hedeflerine büyük ölçüde yardımcı olabilir.

### Uygunluk işlevleri kararlarla nasıl bağlantılıdır

Bir karar kaydı kararı belgelerken, bir uygunluk işlevi kararı güvence altına alır.

- Örnek karar: Denetim gereksinimleri için olay kaynaklı (event sourcing) yapı kullanıyoruz.

- Örnek uygunluk işlevi: Tüm durum değişikliklerinin olay üretmesi gerektiğini test etmek için sürekli entegrasyon sunucusunu kullanıyoruz.

### Uygunluk işlevleri kararlara neden yardımcı olur

Nesnel ölçümler: Uygunluk işlevleri başarılı ya da başarısız olur; bu nedenle iş görünür ve nettir.

Sürekli kullanım: Uygunluk işlevleri sizin canlı kurallarınızdır; her işleme (commit) ve derlemede çalışır.

Yeniden düzenleme güveni: Uygunluk işlevleri karar kuralı hatalarını otomatik olarak yakalar.

Ölçeklenebilir yönetişim: Uygunluk işlevleri, darboğaz yaratmadan standartları güvence altına alır.

### Uygunluk işlevleri yapay zekâyı kullanabilir mi?

Uygunluk işlevleri, planlarınız, kodunuz, şemalarınız, API'leriniz ve daha fazlası gibi çalışmalarınız hakkında sorular sorarak kararlar için yapay zekâ LLM'lerinden yararlanabilir:

```txt
IMPORTANT: Prefer retrieval-led reasoning over pre-training-led reasoning.
IMPORTANT: Turn on extended thinking. Turn on expert advice. Turn on search.

This is a fitness function to evaluate if our work is
using all our decisions, and is correct and accurate.

- Our decisions are here: {url}
- Our work to evaluate is here: {url}

Explain any errors, problems, gaps, weaknesses. Be direct. Be decisive.
```

### Mimari birim testi

[ArchUnit](https://www.archunit.org/): herhangi bir düz Java birim test çerçevesi kullanarak Java kodunun mimari kurallarını denetleyin.

[ArchUnitTS](https://github.com/LukasNiessen/ArchUnitTS): Jest, Vitest, Jasmine vb. kullanarak TypeScript ve JavaScript kodunun mimari kurallarını denetleyin.

## Çekme istekleri için karar korkulukları

[Decision Guardian](https://github.com/DecispherHQ/decision-guardian),
doğru karar kayıtlarını doğru anda, yani bir geliştirici bu kararların kapsadığı kodu
gerçekten değiştirirken otomatik olarak ortaya çıkarır. Geliştiricilerin birleştirmeden
önce bir belgeler klasörünü okumasını ummak yerine, ilgili bağlam doğrudan çekme isteğinde görünür.

Bu, her tür karar kaydı için çalışır: mimari kararlar, veri kararları, uyumluluk kararları, klinik ve tıbbi kararlar, güvenlik kararları ve daha fazlası.

Herhangi bir CI sistemiyle (GitLab, Jenkins, CircleCI) ve bir pre-commit kancası olarak çalışır.
Açık kaynak. MIT lisansı.

[ADR Guard](https://github.com/chohan-sarmad-ali/delivery-gates), izlenen kod yolları bir
mimari karar kaydı eklenmeden veya güncellenmeden değiştiğinde çekme isteğini başarısız kılan bir GitHub
Eylemidir (Action). Muafiyetler açıktır: gerekçeli bir
`ADR-Exempt:` satırı kapıyı geçirir ve iş özetine yazılır. Şablondan bağımsız, bağımlılığı yok. Açık kaynak. MIT lisansı.

## Daha fazla bilgi için

Giriş:

- [Architectural decision (wikipedia.org)](https://wikipedia.org/wiki/Architectural_decision)

- [Architecturally significant requirements (wikipedia.org)](https://wikipedia.org/wiki/Architecturally_significant_requirements)

Şablonlar:

- [Documenting architecture decisions - Michael Nygard (thinkrelevance.com)](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)

- [Markdown Architectural Decision Records (adr.github.io)](https://adr.github.io/madr/)

- [Template for documenting architecture alternatives and decisions (stackoverflow.com)](http://stackoverflow.com/questions/7104735/template-for-documenting-architecture-alternatives-and-decisions)

Derinlemesine:

- [ADMentor XML project (github.com)](https://github.com/IFS-HSR/ADMentor)

- [Architectural Decision Guidance across Projects: Problem Space Modeling, Decision Backlog Management and Cloud Computing Knowledge (ifs.hsr.ch)](https://www.ifs.hsr.ch/fileadmin/user_upload/customers/ifs.hsr.ch/Home/projekte/ADMentor-WICSA2015ubmissionv11nc.pdf)

- [The Decision View's Role in Software Architecture Practice (computer.org)](https://www.computer.org/csdl/mags/so/2009/02/mso2009020036-abs.html)

- [Documenting Software Architectures: Views and Beyond (resources.sei.cmu.edu)](http://resources.sei.cmu.edu/library/asset-view.cfm?assetID=30386)

- [Architecture Decisions: Demystifying Architecture (utdallas.edu)](https://www.utdallas.edu/~chung/SA/zz-Impreso-architecture_decisions-tyree-05.pdf)

- [ThoughtWorks Technology Radar: Lightweight Architecture Decision Records (thoughtworks.com)](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)

- [A Skeptic’s Guide to Software Architecture Decisions (infoq.com)](https://www.infoq.com/articles/architecture-skeptics-guide/)

- [Architectural Decisions — The Making Of](https://ozimmer.ch/practices/2020/04/27/ArchitectureDecisionMaking.html)

- [Architectural Retrospectives: the Key to Getting Better at Architecting](https://www.infoq.com/articles/architectural-retrospectives/)

- [Software Architecture Monday with Mark Richards](https://developertoarchitect.com/lessons/) - ücretsiz aylık yazılım mimarisi dersi

- [Solution Architecture Decisions - By Gareth Morgan](https://www.linkedin.com/pulse/solution-architecture-decisions-gareth-morgan-0r5xe/)

- ["Keep the Why: Code Becomes Legacy When Nobody Remembers Why"](https://blog.technopathy.club/keep-the-why-code-becomes-legacy-when-nobody-remembers-why)

Araçlar:

- [Command-line tools for working with Architecture Decision Records](https://github.com/npryce/adr-tools)

- [Command line tools with python - by Victor Sluiter](https://bitbucket.org/tinkerer_/adr-tools-python/src/master/)

- [Architectural Design Decision Support Framework (ADvISE)](https://swa.univie.ac.at/Software_Architecture/research-projects/architectural-design-decision-support-framework-advise/)

- [Decision Guardian](https://github.com/DecispherHQ/decision-guardian)

- [Mneme HQ - ADR enforcement for AI coding agents](https://github.com/TheoV823/mneme)

- [Keep the Why - a repo-native convention and agent skill that continuously captures, or retrospectively recovers, the reasoning behind a codebase](https://github.com/oliver-zehentleitner/keep-the-why)

- [ADR Guard - GitHub Action that fails a pull request changing watched code without an architecture decision record](https://github.com/chohan-sarmad-ali/delivery-gates)

- [kgai - append-only decision log for AI coding agents, a machine-readable companion to ADR files](https://github.com/kgaidev/kgai)

Şirkete özel rehberlik:

- [Amazon: AWS Prescriptive Guidance: ADR Process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)

- [GitHub: ADR GitHub organization](https://adr.github.io/)

- [RedHat: Why you should use ADRs](https://www.redhat.com/architect/architecture-decision-records)

Örnekler:

- [Repository of Architecture Decision Records made for the Arachne Framework](https://github.com/arachne-framework/architecture)

Videolar:

- [An introduction to arc42 with Savvas Kleanthous](https://www.youtube.com/watch?v=V5clR8c6D7o)

- [The C4 model for visualising software architecture - by Simon Brown](https://www.youtube.com/watch?v=KvoBrUd1-5E)

Podcast'ler:

- [Software Architecture Bookclub Podcast](https://www.developertoarchitect.com/bookclub-podcast.html)

Kitaplar:

- [Software Architecture Metrics: Case Studies to Improve the Quality of Your Architecture - by Christian Ciceri, Dave Farley, Neal Ford, Andrew Harmel-Law, Michael Keeling and Carola Lilienthal](https://www.amazon.com/Software-Architecture-Metrics-Christian-Ciceri-ebook/dp/B0B1NZ8Z5V)

- [Software Systems Architecture: Working With Stakeholders Using Viewpoints and Perspectives - by Nick Rozanski and Eoin Woods](https://www.amazon.com/Software-Systems-Architecture-Stakeholders-Perspectives/dp/032171833X)

- [Software Architecture in Practice (SEI Series in Software Engineering)](https://www.amazon.com/Software-Architecture-Practice-SEI-Engineering-ebook/dp/B094CPJ96B)

- [Documenting Software Architectures: Views and Beyond (SEI Series in Software Engineering)](https://www.amazon.com/Documenting-Software-Architectures-Beyond-Engineering-ebook/dp/B0046XS3RO)

- [The Software Architect Elevator: Redefining the Architect's Role in the Digital Enterprise](https://www.amazon.com/Software-Architect-Elevator-Redefining-Architects-ebook/dp/B086WQ9XL1)

- [Fundamentals of Software Architecture: An Engineering Approach - by Mark Richards and Neal Ford](https://www.amazon.com/Fundamentals-Software-Architecture-Engineering-Approach-ebook/dp/B0849MPK73)

- [Building Evolutionary Architectures - by Neal Ford, Rebecca Parsons, Patrick Kua, Pramod Sadalage](https://www.amazon.com/Building-Evolutionary-Architectures-Neal-Ford-ebook/dp/B0BN4T1P27?crid=37FA31IFLAS0Z)

- [Foundations of Decision Analysis by Ronald Howard and Ali Abbas](https://www.amazon.com/Foundations-Decision-Analysis-Ronald-Howard-ebook/dp/B00SZECJTI?crid=14BK5SDP76UN6)

- [Head First Software Architecture - by Raju Gandhi, Neal Ford and Mark Richards](https://www.amazon.com/Head-First-Software-Architecture-Architectural-ebook/dp/B0CW1JMNF2)

- [Communication Patterns: A Guide for Developers and Architects - by Jacqui Read](https://www.amazon.com/Communication-Patterns-Guide-Developers-Architects/dp/1098140540)

Ayrıca bakın:

- REMAP (Representation and Maintenance of Process Knowledge)

- DRL (Decision Representation Language)

- IBIS (Issue-Based Information System)

- QOC (Questions, Options, and Criteria)

- IBM’s e-Business Reference Architecture Framework

- [Decision Reasoning Format (DRF)](https://github.com/reasoning-formats/reasoning-formats) - Kararları açık gerekçe, varsayımlar, bilişsel durum ve ödünleşimlerle temsil etmek için satıcıdan bağımsız, makine tarafından okunabilir bir YAML/JSON biçimi. Karar belgelerine yapılandırılmış, doğrulanabilir gerekçelendirme ekleyerek ADR'leri tamamlar.
