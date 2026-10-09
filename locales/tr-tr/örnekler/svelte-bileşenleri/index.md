# Svelte Bileşenleri için Mimari Karar Kaydı (MKK)

<!--

Prompt:

Architecture decision record for Svelte components.

Compare options: SVAR, Carbon, Flowbite, SkeletonUI, MeltUI, SvelteUI, shadcn-svelte

The goal is full features for table, charts, lists, grids, gantt, 

-->

## Bağlam

Aşağıdakiler için tam özellikler sağlayacak bir Svelte kullanıcı arayüzü bileşen kütüphanesi seçiyoruz:
- **Tablolar**
- **Grafikler**
- **Listeler**
- **Izgaralar**
- **Gantt şemaları**

Amaç; entegrasyon kolaylığı, tam özellik desteği, performans ve uzun vadeli sürdürülebilirlik arasında denge kuran bir kütüphane seçmektir. Değerlendirilen seçenekler şunlardır:

1. **SVAR**
2. **Carbon**
3. **Flowbite**
4. **SkeletonUI**
5. **MeltUI**
6. **SvelteUI**
7. **shadcn-svelte**

## Seçeneklerin Analizi

### 1. **SVAR**
- **Genel bakış**: SVAR, tasarım sistemlerine ve kurumsal kullanıma hazır bileşenlere odaklanan, Svelte için modern ve özellik açısından zengin bir bileşen kütüphanesidir.
- **Artılar**:
  - Tablolar, formlar ve grafikler dahil tam özellikli bileşenler.
  - Yerleşik tema desteğiyle yüksek özelleştirme seçenekleri.
  - Erişilebilirlik ve duyarlılık için yerleşik destek.
  - Topluluk katkılarıyla iyi belgelenmiş.
- **Eksiler**:
  - Diğer daha basit kütüphanelere kıyasla daha ağır olabilir.
  - Gantt şemaları ve gelişmiş ızgaralar gibi belirli bileşenler için sınırlı destek.
- **En uygun olduğu durum**: Tam özellikli bir tasarım sisteminin gerekli olduğu kurumsal düzeydeki uygulamalar.
- **Tablo/Grafik desteği**: Orta ila iyi.
- **Izgara/Gantt desteği**: Asgari.

### 2. **Carbon**
- **Genel bakış**: Carbon Design System, IBM'in sağlam bir kullanıcı arayüzü bileşenleri kümesi sunan açık kaynaklı bir tasarım sistemidir.
- **Artılar**:
  - Kapsamlı belgelerle yüksek kaliteli, cilalı tasarım.
  - Çok erişilebilir ve duyarlı.
  - Izgaralar, tablolar ve form denetimleri dahil geniş bir bileşen kütüphanesi.
- **Eksiler**:
  - Svelte'e odaklanmamıştır; bu nedenle entegrasyon zahmetli olabilir.
  - Tam Svelte uyumluluğu için ek özelleştirme gerektirebilir.
  - Gantt şemaları veya karmaşık grafikler gibi gelişmiş bileşenler için kutudan çıktığı gibi destek yok.
- **En uygun olduğu durum**: Tutarlı, cilalı bir kullanıcı arayüzü gerektiren büyük ölçekli projeler.
- **Tablo/Grafik desteği**: İyi (grafik kütüphanesi entegrasyonlarıyla).
- **Izgara/Gantt desteği**: İyi (Izgara desteği mevcut, ancak Gantt şeması yok).

### 3. **Flowbite**
- **Genel bakış**: Flowbite, Tailwind CSS ile oluşturulmuş, çeşitli bileşenler ve kullanıcı arayüzü öğeleri sunan bir bileşen kütüphanesidir.
- **Artılar**:
  - Tailwind CSS tabanlıdır; bu da özelleştirmeyi kolaylaştırır.
  - Svelte ile entegre etmesi ve kullanması kolaydır.
  - Tablolar, grafikler ve arayüz denetimleri gibi zengin bileşenler sağlar.
- **Eksiler**:
  - Gelişmiş özelliklerden (örn. Gantt şemaları veya karmaşık ızgaralar) yoksundur.
  - Yerel grafik bileşenleri yoktur; harici kütüphanelere dayanır.
- **En uygun olduğu durum**: Tailwind CSS entegrasyonuna odaklanan hızlı geliştirme gerektiren projeler.
- **Tablo/Grafik desteği**: İyi (üçüncü taraf grafik kütüphaneleriyle entegrasyon gerektirir).
- **Izgara/Gantt desteği**: Asgari.

### 4. **SkeletonUI**
- **Genel bakış**: SkeletonUI, basitliğe ve minimalizme odaklanan, Svelte için hafif bir bileşen kütüphanesidir.
- **Artılar**:
  - Son derece hafif ve hızlı.
  - Basit ve sezgisel API.
  - Küçük projeler için ya da performansın kritik olduğu durumlar için iyi.
- **Eksiler**:
  - Çok az bileşen içerir; bu nedenle özellik açısından zengin değildir.
  - Gelişmiş tablo/ızgara/grafik/Gantt bileşenlerinden yoksundur.
  - Sınırlı topluluk desteği ve daha az kapsamlı belgeler.
- **En uygun olduğu durum**: Asgari ek yüke sahip hafif bileşenler gerektiren projeler.
- **Tablo/Grafik desteği**: Asgari.
- **Izgara/Gantt desteği**: Asgari.

### 5. **MeltUI**
- **Genel bakış**: MeltUI, basitliğe ve bir araya getirilebilirliğe odaklanan, Svelte için erişilebilir kullanıcı arayüzü bileşenleri koleksiyonudur.
- **Artılar**:
  - Hafif ve tamamen özelleştirilebilir.
  - Kutudan çıktığı gibi iyi erişilebilirlik özellikleri.
  - Modern ve minimalist tasarım.
- **Eksiler**:
  - Diğer kütüphanelere kıyasla özellik açısından daha az zengin.
  - Gelişmiş ızgara ve tablo bileşenlerinden yoksun.
  - Gantt şemaları veya karmaşık grafik seçenekleri yok.
- **En uygun olduğu durum**: Erişilebilirliğe ve performansa öncelik veren minimalist tasarımlar.
- **Tablo/Grafik desteği**: Asgari.
- **Izgara/Gantt desteği**: Asgari.

### 6. **SvelteUI**
- **Genel bakış**: SvelteUI, zarif kullanıcı arayüzüne sahip modern web uygulamaları oluşturmak için tasarlanmış, Svelte için kapsamlı ve özelleştirilebilir bir kullanıcı arayüzü bileşen kütüphanesidir.
- **Artılar**:
  - Tablolar, ızgaralar, grafikler ve formlar dahil kapsamlı bir bileşen kümesi.
  - Hem açık hem koyu mod desteği sağlar.
  - Son derece özelleştirilebilir ve genişletmesi kolay.
  - `chart.js` veya `d3.js` gibi grafik kütüphaneleri için yerleşik entegrasyonlar.
- **Eksiler**:
  - Daha basit bileşen kütüphanelerinden daha ağır olabilir.
  - Gantt şemaları gibi daha karmaşık özellikler için harici kütüphaneleri entegre etmek biraz kurulum gerektirir.
- **En uygun olduğu durum**: Kapsamlı, özelleştirilebilir bir bileşen kümesine ihtiyaç duyan projeler.
- **Tablo/Grafik desteği**: Mükemmel (grafik kütüphaneleri desteklenir).
- **Izgara/Gantt desteği**: İyi (Izgara bileşenleri mevcut; Gantt için harici entegrasyon gerekir).

### 7. **shadcn-svelte**
- **Genel bakış**: Yardımcı sınıf öncelikli tasarıma odaklanan ve modern, stillendirilmiş bileşenler sağlayan ShadCN'in Svelte sürümü.
- **Artılar**:
  - Tailwind CSS üzerine kurulu, yardımcı sınıf öncelikli tasarım; özelleştirmeyi kolaylaştırır.
  - Zengin bir bileşen kümesi ve kutudan çıktığı gibi tamamen stillendirilmiş.
  - Diğer kütüphanelerle entegre etmesi kolay.
- **Eksiler**:
  - Gelişmiş kullanıcı arayüzü öğeleri açısından bazı diğerleri kadar özellik açısından tam değil.
  - Tablolar, grafikler veya ızgaralar için yerleşik destekten yoksun.
  - Gantt şemaları için kutudan çıktığı gibi destek yok.
- **En uygun olduğu durum**: Yardımcı sınıf öncelikli, özelleştirilebilir bir yaklaşım gerektiren küçük ve orta ölçekli projeler.
- **Tablo/Grafik desteği**: Asgari.
- **Izgara/Gantt desteği**: Asgari.

## Karar

### Önerilen Seçenek: **SvelteUI**

- **Gerekçe**: SvelteUI; tablolar, grafikler, ızgaralar ve formlar ihtiyacını karşılayan, dengeli ve kapsamlı bir bileşen paketi sunar. Son derece özelleştirilebilir, diğer grafik kütüphaneleriyle (`chart.js` ve `d3.js` gibi) iyi bütünleşir ve hafif performans ile özellik zenginliği arasında iyi bir denge kurar. Kutudan çıktığı gibi Gantt şeması desteği sağlamasa da üçüncü taraf entegrasyonlarla kolayca genişletilebilir; bu da onu tam özellikli, ölçeklenebilir bir çözüm için ideal kılar.
  
  - **Artılar**:
    - Mükemmel tablo ve grafik desteği.
    - Tam ızgara ve yerleşim bileşenleri.
    - Özelleştirilebilir ve harici grafik kütüphaneleriyle iyi bütünleşir.
    - İyi topluluk ve belgeler.
  
  - **Eksiler**:
    - Diğer bazı minimalist kütüphanelerden daha ağır.
    - Gantt şemaları gibi karmaşık grafikler için harici entegrasyon gerekir.
  
### Alternatif: **Flowbite** veya **Carbon** (daha büyük kurumsal projeler için)
- Cilalı, Tailwind tabanlı ya da daha tutarlı bir tasarım sistemi gerekiyorsa, **Flowbite** (Tailwind CSS ile) veya **Carbon** (kurumsal düzey çözümler için) uygun alternatifler olabilir. Ancak daha karmaşık grafikler ve bileşenlerle entegrasyon için ek çaba gerektirebilirler.

## Sonuç

Gereksinimlerinize (tablolar, grafikler, listeler, ızgaralar, Gantt için tam özellikler) en uygun seçenek **SvelteUI**'dır; ardından proje ihtiyaçlarına ve tasarım tercihlerine bağlı olarak **Flowbite** ve **Carbon** gelir.
