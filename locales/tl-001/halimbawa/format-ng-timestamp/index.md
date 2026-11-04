# Format ng timestamp

Nilalaman:

* [Buod](#buod)
  * [Isyu](#isyu)
  * [Desisyon](#desisyon)
  * [Katayuan](#katayuan)
* [Mga detalye](#mga-detalye)
  * [Mga palagay](#mga-palagay)
  * [Mga limitasyon](#mga-limitasyon)
  * [Mga posisyon](#mga-posisyon)
  * [Argumento](#argumento)
  * [Mga implikasyon](#mga-implikasyon)
* [Kaugnay](#kaugnay)
  * [Mga kaugnay na desisyon](#mga-kaugnay-na-desisyon)
  * [Mga kaugnay na requirement](#mga-kaugnay-na-requirement)
  * [Mga kaugnay na artifact](#mga-kaugnay-na-artifact)
  * [Mga kaugnay na prinsipyo](#mga-kaugnay-na-prinsipyo)
* [Mga tala](#mga-tala)


## Buod


### Isyu

Gusto naming masubaybayan kung kailan nangyayari ang mga bagay sa pamamagitan ng mga timestamp at paggamit ng pare-parehong format ng timestamp na gumagana nang maayos sa lahat ng aming sistema at third-party na sistema.

Nakikipag-ugnayan kami sa mga sistemang may iba't ibang format ng timestamp:

* Walang native na format ng timestamp ang mga mensaheng JSON, kaya kailangan naming piliin kung paano i-convert ang timestamp sa string, at i-convert ang string sa timestamp, ibig sabihin kung paano mag-serialize/mag-deserialize.

* Ang ilang application ay naka-set na gumamit ng lokal na oras, sa halip na UTC time. Maaari itong maging maginhawa para sa mga proyektong kailangang umayon sa lokal na oras, tulad ng mga proyektong nagti-trigger ng mga event na nakabatay sa lokal na oras.

* May iba't ibang pangangailangan at kakayahan sa precision ng oras ang ilang sistema, tulad ng paggamit ng resolusyon ng oras na segundo kontra millisecond kontra nanosecond. Halimbawa, ang command na `date` ng operating system na Linux ay gumagamit ng default na precision ng oras na segundo, samantalang ang Nasdaq stock exchange ay nais ng default na precision ng oras na nanosecond.


### Desisyon

Pinili namin ang standard na format ng timestamp na ISO 8601 na may precision na nanosecond, partikular ang "YYYY-MM-DDTHH:MM:SS.NNNNNNNNNZ".

Ipinapakita ng format ang taon, buwan, araw, oras, minuto, segundo, nanosecond, at Zulu time zone o tinatawag ding UTC, GMT.


### Katayuan

Napagpasyahan.


## Mga detalye


### Mga palagay

Kailangan naming hawakan ang mga text string ng timestamp na ito, para mag-convert mula timestamp patungong string (tinatawag ding serialize) at mag-convert mula string patungong timestamp (tinatawag ding deserialize).

Gusto namin ng format na karaniwang madaling gamitin, madaling i-convert, at madaling basahin ng tao.

Gusto namin ng compatibility sa malawak na hanay ng mga panlabas na sistemang hindi namin kontrolado, tulad ng mga analytics system, database system, financial system.


### Mga limitasyon

May mga limitasyon sa precision ng oras ang ilang sistema. Halimbawa, ang command na `date` ng operating system na macOS ay makapag-print ng precision ng oras sa segundo, ngunit hindi sa nanosecond.


### Mga posisyon

Isinaalang-alang namin ang hanay ng mga opsyon:

* Unix epoch ibig sabihin isang numerong tumataas.

* Maigsing text format na "YYYYMMDDTHHMMSSNNNNNNNNN".

* Paggamit ng lokal na time zone kontra sa UTC time zone.


### Argumento

Para sa karaniwang gamit, mas pinahahalagahan namin ang dali ng pagbasa/pagsulat ng mga tao kaysa sa raw na bilis/laki.

Para sa karaniwang gamit, gusto namin ng format na gumagana nang maayos sa mga machine system, at gumagana rin nang maayos nang manu-mano, tulad ng pagsulat ng sample data, pagbasa ng JSON output, pag-grep ng log file, atbp.

Para sa hindi karaniwang gamit, tulad ng high performance computing, inaasahan naming gugustuhin naming i-optimize ang anumang text format na pipiliin namin sa pamamagitan ng pag-convert ng text sa mas mabilis na format, tulad ng built-in na uri ng date object ng programming language. Kaya hindi gaanong mahalaga ang text format para sa HPC.


### Mga implikasyon

Magko-converge ang aming iba't ibang text system at time system sa format na ito.


## Kaugnay


### Mga kaugnay na desisyon

Maaaring gusto rin namin ng mabilis/madaling paraan para subaybayan ang mga time delta o tinatawag ding duration. Madali ang mga ito sa mga timestamp ng Unix epoch.


### Mga kaugnay na requirement

Maaaring gusto naming ayusin ang aming desisyon hal. kung may kaugnay kaming requirement para sa partikular na uri ng stamp ng logging message, tulad ng para sa Splunk, Sumo, ELK, atbp.


### Mga kaugnay na artifact

Mga formatter at parser ng wika:

  * [date-fns: Modern JavaScript date utility library](https://date-fns.org/)
  * [Crono: date and time library for Rust](https://github.com/chronotope/chron)
  
Mga halimbawa sa Rosetta Code:

  * [System time](https://www.rosettacode.org/wiki/System_time)
  * [Data format](https://www.rosettacode.org/wiki/Date_format)
  * [Show the epoch](https://www.rosettacode.org/wiki/Show_the_epoch)

Mga halimbawa ng SixArm:

  * [now_string](https://github.com/SixArm/rosetta_code/tree/master/tasks/now_string)


### Mga kaugnay na prinsipyo

Madaling baligtarin. Madali kaming makalilipat sa ibang format, tulad ng Unix epoch.

Ipagpaliban ang maagang optimisasyon. Para sa karaniwang gamit, hindi namin gaanong pinapansin ang ilang dagdag na karakter tulad ng format na gumagamit ng mga gitling at colon.


## Mga tala

Magdagdag ng mga tala dito.
