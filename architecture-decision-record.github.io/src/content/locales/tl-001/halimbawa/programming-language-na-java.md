# Architecture Decision Record: Programming language na Java

Pamagat: Pagpili sa Programming Language na Java para sa Proyekto

Desisyon: Matapos suriin ang maraming programming language, nagpasya kaming gamitin ang Java para sa aming proyekto.

### Background

Balak naming bumuo ng web-based na application na maaaring tumakbo sa maraming operating system. Nangangailangan ang aming proyekto ng wikang makapagbibigay ng matitibay na security feature, makakahawak ng concurrency, susuporta sa malalaking code base, at sapat na maraming gamit para matugunan ang aming mga requirement sa paglago sa hinaharap. Sinuri namin ang ilang wika, isinaalang-alang ang kanilang mga lakas at limitasyon, bago magpasya sa Java.

### Mga Konsiderasyon

1. **Seguridad:**  Nagbibigay ang Java ng napakahusay na security feature sa pamamagitan ng mahusay na natukoy nitong mga patakaran sa seguridad at access control. Isinasama rin nito ang mga feature tulad ng bytecode verification, na tumutulong pigilan ang pagtakbo ng malisyosong software sa isang sistema.

2. **Concurrency:**  May built-in na suporta ang Java sa multithreading, na nagpapahintulot sa mga application na magsagawa ng ilang gawain nang sabay-sabay. Ginagawa ng feature na ito ang Java na napakahusay na pagpipilian sa pagbuo ng malalaki at masalimuot na application na may maraming feature at functionality.

3. **Malalaking codebase:**  Sinusuportahan ng Java ang object-oriented programming, kaya angkop itong pagpipilian sa pagbuo ng malalaking codebase. Lalo pang nagpapagaan sa proseso ng pagbuo ng software ang modular na kalikasan nito at ang paggamit ng mga pattern ng encapsulation at abstraction.

4. **Versatility:**  Maraming gamit ang Java at nagbibigay ng kakayahang gumamit ng malawak na hanay ng mga library at framework, kaya napakahusay na pagpipilian ito para sa parehong web-based at enterprise-level na application.

### Kinalabasan ng Desisyon

Nagpasya kaming gamitin ang programming language na Java para sa aming proyekto, isinasaalang-alang ang mga security feature nito, suporta sa concurrency, kakayahang humawak ng malalaking codebase, at versatility. Umaayon ang desisyong ito sa mga requirement ng aming proyekto, at naniniwala kaming titiyakin ng pagpili sa Java ang tagumpay nito. 

### Mga Kahihinatnan

1. Kakailanganin namin ng mga developer na may karanasan sa Java at mahusay itong magagamit.

2. Anumang code na isinulat sa wika ay dapat compatible sa Java Virtual Machine (JVM).

3. Maaaring magdulot ng ilang hamon ang pagsasama ng mga bagong feature, functionality, o framework.

4. Ang malalaki at masalimuot na proyekto sa Java ay maaaring mangailangan ng mas maraming oras at resource para mabuo.

<h6>Kredito: ang pahinang ito ay binuo ng ChatGPT, pagkatapos ay inedit para sa kalinawan at format.</h6>
