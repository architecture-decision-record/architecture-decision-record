# Kod olarak kararlar için uygunluk işlevleri

Uygunluk işlevleri (fitness functions), kararların sürdürüldüğünü doğrulamak için programlama koduyla yazılmış nesnel, otomatik denetimlerdir.

- Uygunluk işlevleri, kararları test edilebilir ve güvence altına alınabilir kılar.

- Kararlar için uygunluk işlevleri; kalite güvencesine, düzenleyici süreçlere ve yönetişim hedeflerine büyük ölçüde yardımcı olabilir.

## Uygunluk işlevleri kararlarla nasıl bağlantılıdır

Bir karar kaydı kararı belgelerken, bir uygunluk işlevi kararı güvence altına alır.

- Örnek karar: Denetim gereksinimleri için olay kaynaklı (event sourcing) yapı kullanıyoruz.

- Örnek uygunluk işlevi: Tüm durum değişikliklerinin olay üretmesi gerektiğini test etmek için sürekli entegrasyon sunucusunu kullanıyoruz.

## Uygunluk işlevleri kararlara neden yardımcı olur

Nesnel ölçümler: Uygunluk işlevleri başarılı ya da başarısız olur; bu nedenle iş görünür ve nettir.

Sürekli kullanım: Uygunluk işlevleri sizin canlı kurallarınızdır; her işleme (commit) ve derlemede çalışır.

Yeniden düzenleme güveni: Uygunluk işlevleri karar kuralı hatalarını otomatik olarak yakalar.

Ölçeklenebilir yönetişim: Uygunluk işlevleri, darboğaz yaratmadan standartları güvence altına alır.

## Uygunluk işlevleri yapay zekâyı kullanabilir mi?

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

## Mimari birim testi

[ArchUnit](https://www.archunit.org/): herhangi bir düz Java birim test çerçevesi kullanarak Java kodunun mimari kurallarını denetleyin.

[ArchUnitTS](https://github.com/LukasNiessen/ArchUnitTS): Jest, Vitest, Jasmine vb. kullanarak TypeScript ve JavaScript kodunun mimari kurallarını denetleyin.
