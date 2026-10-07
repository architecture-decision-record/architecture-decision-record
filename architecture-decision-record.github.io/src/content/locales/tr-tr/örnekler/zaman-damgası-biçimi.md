# Zaman damgası biçimi

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

Zaman damgaları kullanarak ve tüm sistemlerimizde ve üçüncü taraf sistemlerde iyi çalışan tutarlı bir zaman damgası biçimi kullanarak olayların ne zaman gerçekleştiğini izleyebilmek istiyoruz.

Farklı zaman damgası biçimlerine sahip sistemlerle etkileşim kuruyoruz:

* JSON iletilerinin yerel bir zaman damgası biçimi yoktur; bu nedenle bir zaman damgasını bir dizgeye nasıl dönüştüreceğimizi ve bir dizgeyi zaman damgasına nasıl çevireceğimizi, yani nasıl serileştirip seriden çıkaracağımızı seçmemiz gerekir.

* Bazı uygulamalar UTC saati yerine yerel saati kullanacak şekilde ayarlanmıştır. Bu, yerel saate uyum sağlaması gereken projeler için, örneğin yerel saate dayalı olayları tetikleyen projeler için kullanışlı olabilir.

* Bazı sistemlerin zaman duyarlılığı ihtiyaçları ve yetenekleri farklıdır; örneğin saniye, milisaniye ve nanosaniye çözünürlüğü gibi. Örneğin Linux işletim sisteminin `date` komutu varsayılan olarak saniye duyarlılığını kullanırken, Nasdaq borsası varsayılan olarak nanosaniye duyarlılığı ister.


### Karar

Nanosaniye duyarlılığına sahip ISO 8601 standart zaman damgası biçimini, özellikle "YYYY-MM-DDTHH:MM:SS.NNNNNNNNNZ" biçimini seçiyoruz.

Biçim; yılı, ayı, günü, saati, dakikayı, saniyeyi, nanosaniyeyi ve Zulu saat dilimini, yani UTC'yi, GMT'yi gösterir.


### Durum

Karar verildi.


## Ayrıntılar


### Varsayımlar

Bu zaman damgası metin dizgelerini işlememiz gerekir: bir zaman damgasını dizgeye dönüştürmek (yani serileştirmek) ve bir dizgeyi zaman damgasına dönüştürmek (yani seriden çıkarmak).

Genel olarak kullanımı kolay, dönüştürmesi kolay ve bir insanın okuması kolay bir biçim istiyoruz.

Kontrol edemediğimiz geniş bir dış sistem yelpazesiyle, örneğin analitik sistemleri, veritabanı sistemleri ve finansal sistemlerle uyumluluk istiyoruz.


### Kısıtlamalar

Bazı sistemlerin zaman duyarlılığı sınırlamaları vardır. Örneğin macOS işletim sisteminin `date` komutu zaman duyarlılığını saniye olarak yazdırabilir, ancak nanosaniye olarak yazdıramaz.


### Pozisyonlar

Bir dizi seçeneği değerlendirdik:

* Unix çağı (epoch), yani artan tek bir sayı.

* Kısa metin biçimi "YYYYMMDDTHHMMSSNNNNNNNNN".

* Yerel saat dilimi ile UTC saat dilimini karşılaştırma.


### Argüman

Tipik kullanımda, insanlar tarafından okunmasının ve yazılmasının kolay olmasına, ham hız ve boyuttan daha fazla değer veriyoruz.

Tipik kullanımda, makine sistemlerinde iyi çalışan, aynı zamanda örnek veri yazmak, JSON çıktısını okumak, bir günlük dosyasında grep ile aramak gibi elle yapılan işlerde de iyi çalışan bir biçim istiyoruz.

Yüksek performanslı hesaplama gibi tipik olmayan kullanımlarda, seçtiğimiz herhangi bir metin biçimini, metni bir programlama dilinin yerleşik tarih nesnesi türü gibi daha hızlı bir biçime dönüştürerek optimize etmek isteyeceğimizi bekliyoruz. Dolayısıyla YPH için metin biçimi pek önemli değildir.


### Etkiler

Çeşitli metin sistemlerimiz ve zaman sistemlerimiz bu biçimde birleşecektir.


## Bağlantılı


### Bağlantılı kararlar

Zaman farklarını, yani süreleri izlemek için de hızlı/kolay bir yol isteyebiliriz. Bunlar Unix çağı zaman damgalarıyla kolaydır.


### Bağlantılı gereksinimler

Örneğin Splunk, Sumo, ELK vb. için belirli bir tür günlük iletisi damgasıyla ilgili bir gereksinimimiz varsa kararımızı ayarlamak isteyebiliriz.


### Bağlantılı eserler

Dil biçimlendiricileri ve ayrıştırıcıları:

  * [date-fns: Modern JavaScript date utility library](https://date-fns.org/)
  * [Crono: date and time library for Rust](https://github.com/chronotope/chron)
  
Rosetta Code örnekleri:

  * [System time](https://www.rosettacode.org/wiki/System_time)
  * [Data format](https://www.rosettacode.org/wiki/Date_format)
  * [Show the epoch](https://www.rosettacode.org/wiki/Show_the_epoch)

SixArm örnekleri:

  * [now_string](https://github.com/SixArm/rosetta_code/tree/master/tasks/now_string)


### Bağlantılı ilkeler

Kolayca geri alınabilir. Unix çağı gibi farklı bir biçime oldukça kolay geçebiliriz.

Erken optimizasyonu ertele. Tipik kullanımda, tire ve iki nokta üst üste kullanan bir biçim gibi bir avuç ek karakter bizim için pek önemli değildir.


## Notlar

Notları buraya ekleyin.
