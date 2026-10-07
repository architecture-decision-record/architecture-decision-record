# Mimari Karar Kaydı: REST API için snake_case mi camelCase mi?

Karar: REST API uç noktaları için snake_case adlandırma kuralı kullanılacaktır

Durum: Kabul Edildi

## Bağlam

REST API'leri için adlandırma kurallarında iki popüler biçim vardır: snake_case ve camelCase. snake_case biçiminde addaki her sözcük alt çizgilerle ayrılırken, camelCase biçiminde adın ilk sözcüğü küçük harfle yazılır ve sonraki sözcüklerin ilk harfleri büyük yazılır. Bu karar, bir REST API için hangi adlandırma kuralının kullanılması gerektiğini belirleyecektir.

## Karar Etkenleri

- Projedeki mevcut adlandırma kurallarıyla tutarlılık

- API üzerinde çalışabilecek herkes için okunabilirlik ve açıklık

- REST API adlandırma kuralları için sektördeki en iyi uygulamalarla uyum

- Uygulama ve bakım kolaylığı

## Karar

REST API uç noktaları için snake_case adlandırma kuralı kullanılacaktır. Bu tercih aşağıdaki etkenlere dayanmaktadır:

1. **Tutarlılık**: Proje tüm uç noktalar için zaten snake_case adlandırma kuralını kullanmaktadır ve bu kuralı korumak, tüm proje boyunca tutarlılığı sağlamak açısından yararlı olacaktır.

2. **Okunabilirlik ve açıklık**: snake_case kuralı daha okunabilir ve anlaşılması daha kolaydır. Alt çizgiler sözcükler arasında net bir ayrım sağlar; bu da adın anlamını ayrıştırmayı ve anlamayı kolaylaştırır.

3. **Sektördeki en iyi uygulamalarla uyum**: snake_case kuralı sektörde yaygın olarak kullanılmaktadır ve REST API'leri için en iyi uygulama olarak kabul edilir; bu da onu proje için iyi bir seçim yapar.

4. **Uygulama ve bakım kolaylığı**: Mevcut adlandırma kuralını sürdürmek uygulaması ve bakımı daha kolaydır, çünkü yeni bir kural seçilirse tüm mevcut kodun ve belgelerin güncellenmesi gerekirdi.

## Sonuçlar

Bu kararın olası sonuçları vardır. 

* Projeye katılan yeni ekip üyeleri snake_case adlandırma kuralına aşina değilse, geliştirmede karışıklığa ve hatalara yol açabilir. Ancak snake_case yaygın olarak kullanılan bir kural olduğundan, bu risk asgaridir. 
  
* Projede büyük ölçüde camelCase kuralına dayanan başka araçlar veya çerçeveler kullanılırsa, adlandırma kuralları arasında dönüşüm yapmak ek çaba gerektirebilir. Ancak proje snake_case kuralında standartlaştığı için bu önemli bir endişe değildir. 
 
Genel olarak, REST API uç noktaları için snake_case adlandırma kuralını kullanma kararı; uygulaması ve bakımı kolay olurken tutarlı, okunabilir ve sektör standardı bir yaklaşım sağlar.

<h6>Kredi: Bu sayfa ChatGPT tarafından oluşturulmuş, ardından netlik ve biçim için düzenlenmiştir.</h6>
