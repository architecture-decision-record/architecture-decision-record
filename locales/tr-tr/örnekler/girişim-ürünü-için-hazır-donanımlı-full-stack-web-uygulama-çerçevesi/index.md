# Mimari Karar Kaydı: girişim ürünü için hazır donanımlı, full stack web uygulama çerçevesi

<!-- 

ChatGPT prompt

Long software architecture decision record 
for a web application framework, batteries included, full stack, for a startup product.

Evaluate Python Django, Ruby on Rails, Phoenix Elixir, Rust Loco.

Primary need: web application for paying customers to sign in, upload files, process data, and view reports. 

High importance: 1. Agile development because this is for a startup. 2. Full-stack because we do not want to spend extra time on a separate front-end. 3. Works well with AI/ML tools for data analysis, such as Project Jupyter notebooks.

Low importance: 1. Runtime speed. 2. Scalability. 3. Backwards compatibility.

-->

**Temel Hedef:**  
Ödeme yapan müşterilerin oturum açabildiği, dosya yükleyebildiği, veri işleyebildiği ve rapor görüntüleyebildiği bir web uygulaması oluşturmak; çevik geliştirmeye, full stack işlevselliğe ve özellikle Project Jupyter not defterleri olmak üzere yapay zekâ/makine öğrenmesi araçlarıyla güçlü uyumluluğa odaklanmak.

### Bağlam ve Gereksinimler:

1. **Çevik Geliştirme (Yüksek Öncelik)**: Bir girişim olarak hızlı yinelemeye ve esnekliğe ihtiyacımız var. Hızlı prototipleme, yinelemeli geliştirme ve değişime uyum sağlama gibi çevik uygulamalar, geliştirme döngümüzün anahtarıdır.

2. **Full Stack Çerçeve (Yüksek Öncelik)**: Hem arka ucu hem ön ucu verimli biçimde ele alabilen bir çerçeve seçerek ek yükü en aza indirmeyi, ayrı ön uç çerçevelerine olan ihtiyacı azaltmayı hedefliyoruz.

3. **Yapay Zekâ/Makine Öğrenmesi Araçlarıyla Uyumluluk (Yüksek Öncelik)**: Jupyter not defterleri ve Python'un veri bilimi ekosistemi (NumPy, Pandas, TensorFlow vb.) gibi veri analizi araçlarıyla kolayca bütünleşebilmek şarttır. Bu, verimli veri işlemeyi ve raporlamayı kolaylaştıracaktır.

4. **Düşük Önemli Ölçütler**:
   - **Çalışma Zamanı Hızı**: Performans önemli olsa da, geliştirme hızı ve özellik bütünlüğü konusunda daha fazla endişe duyduğumuz için başlangıçta en kritik etken değildir.
   - **Ölçeklenebilirlik**: Büyüme öngörüyoruz, ancak ölçeklenebilirlik kaygıları daha sonra ele alınabilir ve şu anda birincil bir gereksinim değildir.
   - **Geriye Dönük Uyumluluk**: Güncel teknolojilere odaklanıyoruz ve eski sistemlerle geriye dönük uyumluluk konusunda çok endişeli değiliz.

### Değerlendirilen Çerçeveler:

1. **Django (Python)**  
2. **Ruby on Rails (Ruby)**  
3. **Phoenix (Elixir)**  
4. **Loco (Rust)**

---

### 1. **Django (Python)**

**Genel Bakış**:  
Django, hızlı geliştirmeyi ve temiz, pragmatik tasarımı teşvik eden, Python için üst düzey bir web çerçevesidir. Kimlik doğrulama, yönlendirme, ORM ve form işleme gibi birçok özelliği kutudan çıktığı gibi içeren "hazır donanımlı" felsefesiyle bilinir.

**Güçlü Yönler**:  
- **Full Stack**: Django, entegre özelliklerle (örn. şablon motoru, yönetici arayüzü) hem arka uç hem ön uç ihtiyaçlarını karşılayabilen kapsamlı, full stack bir çerçevedir.
- **Çevik Geliştirme**: Django'nun iyi tanımlanmış yapısı ve gelenekleri, bir girişim ortamı için çok önemli olan hızlı geliştirmeye ve uyum sağlamaya olanak tanır. Çerçeve, mükemmel belgelerle ve geliştirmeyi hızlandıran zengin bir üçüncü taraf paket ekosistemiyle gelir.
- **Yapay Zekâ/Makine Öğrenmesi Entegrasyonu**: Veri bilimi ve makine öğrenmesi söz konusu olduğunda Python'un ekosistemi rakipsizdir. Python tabanlı olan Django; Jupyter not defterleri, Pandas, NumPy, TensorFlow ve scikit-learn gibi araçlarla sorunsuz bütünleşir.
- **Topluluk ve Ekosistem**: Django'nun geniş bir topluluğu, sağlam belgeleri ve çok çeşitli eklenti ve uzantıları vardır; bu da geliştirmeyi ve sorun gidermeyi önemli ölçüde hızlandırır.
  
**Zayıf Yönler**:  
- **Çalışma Zamanı Hızı**: Python, Rust veya Elixir gibi dillere kıyasla daha yavaş olma eğilimindedir. Ancak performansın birincil kaygı olmadığı bu kullanım durumunda bu, engelleyici olmayabilir.
- **Ölçeklenebilirlik**: Django son derece ölçeklenebilir olsa da, dikkatli optimizasyon olmadan çok yüksek ölçekte zorluklar olabilir (örn. yoğun eşzamanlı istekleri işlerken). Yine de Django, yük dengeleme ve önbellekleme teknikleriyle etkili biçimde ölçeklenebilir.

**Hüküm**:  
Django; çevik geliştirme, full stack destek ve yapay zekâ/makine öğrenmesi uyumluluğu gereksinimleriyle iyi örtüşür. Python entegrasyonu, uygulama için gerekli veri bilimi araçlarına ve kütüphanelerine sorunsuz erişim sunar.

---

### 2. **Ruby on Rails (Ruby)**

**Genel Bakış**:  
Ruby on Rails (RoR), hızlı geliştirmeyi kolaylaştıran, yapılandırma yerine gelenek yaklaşımıyla bilinen olgun, full stack bir web uygulaması çerçevesidir.

**Güçlü Yönler**:  
- **Full Stack**: RoR hem arka uç hem ön uç geliştirme için yerleşik araçlarla (örn. görünümler, şablonlar, iskele oluşturma) gelir ve zengin gem kütüphanesi çeşitli özelliklerin hızlı uygulanmasına olanak tanır.
- **Çevik Geliştirme**: Ruby on Rails, özellikle hızlı yineleme döngüleriyle bilinir; bu da özelliklerini hızla yinelemek isteyen girişimler için avantajlıdır. RoR, test güdümlü geliştirmeyi (TDD) destekler ve çevik iş akışları için yerleşik bir ekosisteme sahiptir.
- **Topluluk ve Ekosistem**: RoR'un köklü, güçlü bir topluluğu ve geliştirmeyi hızlandırabilecek çok çeşitli gem'leri vardır.
- **Kullanım Kolaylığı**: Rails'in çok geliştirici dostu bir sözdizimi vardır ve veritabanı geçişleri, Model-Görünüm-Denetleyici (MVC) mimarisi ve yol işleme gibi görevleri hızlı ve basit hale getirmesiyle bilinir.

**Zayıf Yönler**:  
- **Performans**: Ruby, Python veya Elixir'e kıyasla daha yavaş çalışma zamanı performansına sahip olma eğilimindedir. RoR doğru altyapıyla ölçeklenebilse de, Ruby'nin performansı yoğun gerçek zamanlı işleme veya yüksek eşzamanlı trafik gerektiren uygulamalar için bir darboğaz haline gelebilir.
- **Yapay Zekâ/Makine Öğrenmesi Entegrasyonu**: Ruby'nin bazı makine öğrenmesi kütüphaneleri olsa da yapay zekâ/makine öğrenmesi topluluğunda Python kadar yaygın olarak benimsenmemiştir. Jupyter not defterleri gibi araçlarla entegrasyon o kadar sorunsuz değildir; bu da Python'u veri yoğun uygulamalar için daha güçlü bir seçim yapar.
  
**Hüküm**:  
Ruby on Rails çevik geliştirmede ve hızlı prototiplemede mükemmel olsa da, yapay zekâ/makine öğrenmesi uyumluluğu açısından Python'a (Django) kıyasla yetersiz kalır. Derin veri analizi entegrasyonundan çok hızlı yinelemeye öncelik veren girişimler için uygulanabilir bir seçimdir.

---

### 3. **Phoenix (Elixir)**

**Genel Bakış**:  
Phoenix, ölçeklenebilirlik ve eşzamanlılık için tasarlanmış işlevsel bir programlama dili olan Elixir ile oluşturulmuş bir web çerçevesidir. Phoenix, devasa eşzamanlılığı ve hataya dayanıklı sistemleri işlemesiyle bilinen Erlang VM'den yararlanır.

**Güçlü Yönler**:  
- **Ölçeklenebilirlik ve Performans**: Phoenix ölçeklenebilirlikte ve yüksek eşzamanlılığı işlemede öne çıkar. Binlerce (hatta milyonlarca) eşzamanlı bağlantıyı destekleyebilen Erlang VM üzerine kuruludur; bu da onu gerçek zamanlı veri işleme veya yüksek hacimli trafik gerektiren uygulamalar için güçlü bir aday yapar.
- **Full Stack**: Phoenix, bir uygulamanın hem arka ucunu hem ön ucunu oluşturmak için gereken her şeyi içerir. Etkileşimli kullanıcı arayüzü güncellemeleri için canlı görünümleri (live views) destekler ve bir şablon motoru içerir.
- **Çevik Geliştirme**: Phoenix son derece modülerdir ve özellikler üzerinde hızlı yinelemeye olanak tanır. Hızlı hareket etmesi gereken girişimler için çok uygundur.
- **Yapay Zekâ/Makine Öğrenmesi Uyumluluğu**: Elixir'in gelişmekte olan makine öğrenmesi kütüphaneleri olsa da, yapay zekâ/makine öğrenmesi görevleri için Python kadar yaygın biçimde desteklenmez. Jupyter not defterleri gibi araçlarla entegrasyon geçici çözümler gerektirir, çünkü Elixir'in veri bilimi ekosistemi Python'unki kadar olgun değildir.

**Zayıf Yönler**:  
- **Yapay Zekâ/Makine Öğrenmesi Ekosistemi**: Elixir, veri biliminde veya makine öğrenmesinde kullanılan birincil dil değildir ve ekosistemi Python'unki kadar olgun değildir. Bu nedenle Jupyter not defterleri veya popüler yapay zekâ kütüphaneleriyle (TensorFlow, PyTorch) entegrasyon zahmetli olacaktır.
- **Öğrenme Eğrisi**: Ekip işlevsel programlamaya ve Elixir'e aşina değilse, daha dik bir öğrenme eğrisi olabilir.

**Hüküm**:  
Ölçeklenebilirlik ve eşzamanlılık birincil kaygıysa Phoenix mükemmel bir seçimdir. Ancak yapay zekâ/makine öğrenmesi uyumluluğuna verilen öncelik göz önüne alındığında, Elixir'in bu alandaki sınırlı ekosistemi nedeniyle Phoenix en iyi seçim olmayabilir.

---

### 4. **Loco (Rust)**

**Genel Bakış**:  
Loco, performansı, bellek güvenliği ve eşzamanlılığıyla bilinen bir sistem programlama dili olan Rust ile oluşturulmuş bir web çerçevesidir. Rust, yüksek performanslı uygulamalar geliştirmek için giderek daha popüler hale gelmektedir.

**Güçlü Yönler**:  
- **Performans**: Rust'ın birincil gücü yüksek performansında ve bellek güvenliğindedir; bu da onu düşük düzeyli denetim veya son derece yüksek performans gerektiren uygulamalar için mükemmel bir seçim yapar.
- **Eşzamanlılık**: Rust'ın sahiplik sistemi bellek güvenliğini sağlarken güvenli eşzamanlı programlamaya izin verir; bu da onu verimli ölçeklenmesi ve paralelliği ele alması gereken sistemler için ideal kılar.

**Zayıf Yönler**:  
- **Full Stack Geliştirme**: Loco umut verici olsa da, eksiksiz bir full stack çözüm sunma açısından diğer çerçeveler kadar olgun değildir. Arka uç geliştirme için daha uygundur ve Rust çevresindeki ön uç ekosistemi hâlâ gelişmektedir.
- **Çevik Geliştirme**: Rust ile geliştirme, daha düşük düzeyli doğası ve daha dik öğrenme eğrisi nedeniyle Python veya Ruby gibi üst düzey dillere kıyasla daha yavaş olabilir.
- **Yapay Zekâ/Makine Öğrenmesi Ekosistemi**: Rust'ın yapay zekâ/makine öğrenmesi için Python kadar kapsamlı bir ekosistemi yoktur. Rust'ta sayısal hesaplama için büyüyen kütüphaneler olsa da, Jupyter not defterleri veya makine öğrenmesi çerçeveleri gibi Python'un sunduklarından çok daha az olgundurlar.
  
**Hüküm**:  
Rust ve çerçevesi Loco olağanüstü performans sunsa da, full stack desteğinin, çevik geliştirme faydalarının ve yapay zekâ/makine öğrenmesi ekosisteminin eksikliği onu bu özel kullanım durumu için daha az ideal yapar. Entegre veri bilimi araçlarıyla hızlı web geliştirmeden çok, performans açısından kritik uygulamalar için daha uygundur.

---

### Sonuç

Seçenekleri projenin gereksinimlerine göre değerlendirdikten sonra, **Django (Python)** en uygun seçimdir. Aşağıdaki avantajları sunar:

- **Full Stack Yetenekleri**: Django, hem arka uç hem ön uç geliştirmeyi bütünleştiren full stack bir çerçevedir.
- **Çevik Geliştirme**: Çerçeve, bir girişim ortamı için şart olan hızlı prototiplemeye ve yinelemeye çok uygundur.
- **Yapay Zekâ/Makine Öğrenmesi Uyumluluğu**: Python yapay zekâ/makine öğrenmesinde önde gelen dildir ve Django'nun Jupyter not defterleri gibi kütüphanelerle uyumluluğu veri analizi ve işleme için sorunsuz entegrasyon sağlar.
- **Topluluk ve Ekosistem**: Django'nun güçlü topluluk desteği ve geniş kütüphane ekosistemi, geliştirmeyi hızlandırmak için çok sayıda araç sağlar.

**Ruby on Rails** da çevik geliştirme için güçlü bir aday olsa da, sınırlı yapay zekâ/makine öğrenmesi desteği onu bu özel kullanım durumu için daha az ideal yapar. **Phoenix (Elixir)** ve **Loco (Rust)** ölçeklenebilirlik ve performans için mükemmel olsalar da, yapay zekâ/makine öğrenmesi entegrasyonu ve full stack geliştirme açısından yetersiz kalırlar. Bu nedenle bu proje için önerilen çerçeve Django'dur.
