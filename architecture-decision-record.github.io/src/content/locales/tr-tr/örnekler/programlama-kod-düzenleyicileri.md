# Mimari Karar Kaydı: Programlama Kod Düzenleyicileri

## Bağlam

Programlama kod düzenleyicileri, geliştiricilerin kod yazması ve düzenlemesi için vazgeçilmez bir araçtır. Her birinin kendi özellikleri, avantajları ve dezavantajları olan çok sayıda kod düzenleyici mevcuttur. Bu MKK'nin amacı, programlama kod düzenleyicileri için alınan mimari kararları belgelemektir.

## Öncelikler

Programlama kod düzenleyicilerinin mimarisi aşağıdakilere öncelik vermelidir:

* **Modülerlik**: Kod düzenleyici modüler bir biçimde tasarlanmalı ve geliştiricilerin onu gerektiği gibi özelleştirmesine ve genişletmesine olanak tanımalıdır. Bu, farklı geliştiricilerin ve ekiplerin ihtiyaçlarına uyum sağlayabilen esnek bir mimariyi mümkün kılar.

* **Performans**: Kod düzenleyici performanslı ve duyarlı olmalı; geliştiricilerin kullandıkları araç yüzünden yavaşlamadan verimli çalışmasına olanak tanımalıdır.

* **Kullanıcı arayüzü**: Kullanıcı arayüzü sezgisel ve kullanımı kolay olmalı; geliştiricilerin düzenleyiciyle uğraşmak yerine koduna odaklanmasına olanak tanımalıdır.

* **Genişletilebilirlik**: Kod düzenleyici, üçüncü taraf eklentiler ve entegrasyonlarla kolayca genişletilebilecek şekilde tasarlanmalıdır.

* **Uyumluluk**: Kod düzenleyici, çok çeşitli programlama dilleri ve teknolojilerle uyumlu olmalı; bu da onu geniş bir geliştirici kitlesi için yararlı bir araç haline getirmelidir.

## Karar

Bu önceliklere dayanarak, programlama kod düzenleyicilerinin mimarisi aşağıdaki bileşenlerle tasarlanmalıdır:

* **Çekirdek**: Bu bileşen, sözdizimi vurgulama, metin düzenleme ve dosya yönetimi gibi kod düzenleyicinin temel işlevselliğini sağlar.

* **Kullanıcı arayüzü**: Bu bileşen, menüler, araç çubukları ve klavye kısayolları dahil kod düzenleyicinin kullanıcı arayüzünü sağlar.

* **Eklentiler**: Bu bileşen, geliştiricilerin üçüncü taraf eklentiler kurarak kod düzenleyicinin işlevselliğini genişletmesine olanak tanır. Eklentiler; kod tamamlama, kod denetimi (linting) veya hata ayıklama gibi ek özellikler sağlayabilir.

* **Entegrasyonlar**: Bu bileşen, kod düzenleyicinin sürüm denetim sistemleri, derleme sistemleri veya hata ayıklama araçları gibi diğer araç ve teknolojilerle bütünleşmesine olanak tanır.

## Gerekçe

Kod düzenleyicinin modülerliği, geliştiricilerin onu gerektiği gibi özelleştirmesine ve genişletmesine olanak tanır. Bu önemlidir, çünkü farklı geliştiricilerin ve ekiplerin farklı ihtiyaçları ve iş akışları vardır ve esnek bir mimari bu farklılıkları karşılayabilir.

* **Performans**: çok önemlidir, çünkü geliştiricilerin araçları yüzünden yavaşlamadan verimli çalışabilmesi gerekir. Performanslı bir kod düzenleyici verimlilik için şarttır ve geliştiricilerin odaklarını ve dikkatlerini korumalarına yardımcı olabilir.

* **Kullanıcı arayüzü**: önemlidir, çünkü geliştiricilerin düzenleyiciyle uğraşmak yerine koduna odaklanmasına olanak tanır. Bu, geliştiriciler için daha iyi verimliliğe ve daha az hayal kırıklığına yol açabilir.

* **Genişletilebilirlik**: güçlüdür, çünkü kod düzenleyicinin farklı ihtiyaçlara ve iş akışlarına uyarlanmasına olanak tanır. Üçüncü taraf eklentiler ve entegrasyonlar, çekirdek düzenleyicide bulunmayan ek özellikler ve yetenekler sağlayabilir.

* **Uyumluluk**: değerlidir, çünkü kod düzenleyicinin çok çeşitli programlama dilleri ve teknolojilerle kullanılmasına olanak tanır. Bu, düzenleyiciyi geniş bir geliştirici kitlesi için daha yararlı bir araç haline getirir.

Çekirdek, eklentiler, entegrasyonlar ve kullanıcı arayüzü bileşenleri, ilgilerin net biçimde ayrılmasını sağlar ve kolayca genişletilebilen ve özelleştirilebilen modüler bir mimariye olanak tanır. Bu mimari esnektir, performanslıdır ve çok çeşitli programlama dilleri ve teknolojilerle uyumludur; bu da onu geliştiriciler için yararlı bir araç haline getirir.
