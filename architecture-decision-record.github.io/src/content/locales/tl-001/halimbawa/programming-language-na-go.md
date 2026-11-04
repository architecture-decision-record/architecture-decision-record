# Architecture Decision Record: Programming language na Go

Pamagat: Pag-aampon ng Programming Language na Go

Katayuan: Tinanggap

## Konteksto

Pangunahing ginagamit ng aming organisasyon ang programming language na Java sa pagbuo ng mga web application. Gayunpaman, nakararanas kami ng ilang hamon dahil sa pagiging verbose ng Java at sa pagiging masalimuot ng ilang framework. Bukod pa rito, nagpakita ng interes ang aming koponan sa paggalugad ng mga makabagong programming language para sa mas mahusay at matatag na pagbuo. Matapos magsaliksik, natukoy namin ang Go bilang posibleng solusyon sa mga problemang kinakaharap namin sa Java.

## Desisyon

Aampunin namin ang programming language na Go sa pagbuo ng mga web application mula ngayon.

## Rasyonal

1. **Pagiging simple at madaling basahin:** Kilala ang Go sa pagiging simple at maigsing syntax nito. Ginagawa nitong madaling basahin at isulat ang code, na nagpapabawas sa pagiging masalimuot ng aming proseso ng pagbuo.

2. **Mataas na performance at scalability:** Kino-compile ang Go sa machine code na tumatakbo nang native sa server. Nagreresulta ito sa mas mabilis na oras ng pagpapatupad at mas mahusay na performance kumpara sa mga interpreted na wika tulad ng Java. Bukod pa rito, hinahawakan ng concurrency model ng Go ang maraming kahilingan nang sabay-sabay, kaya lubhang scalable ito.

3. **Matibay na suporta ng komunidad:** May masiglang komunidad ng mga developer ang Go na nag-ambag sa paglago nito sa paglipas ng mga taon. Nangangahulugan ito na maraming resource, library, at framework para tulungan kaming magsimula at bumuo ng matatag na mga application.

4. **Flexibility:** Magagamit ang Go sa parehong frontend at backend na pagbuo. Nangangahulugan ito na mapakikinabangan namin ang mga bentahe nito sa parehong larangan para sa aming mga proyekto sa pagbuo.

## Mga Implikasyon

1. **Pagsasanay:** Kailangang sumailalim sa pagsasanay ang aming mga developer para matutunan ang programming language na Go at ang mga detalye nito.

2. **Karanasan:**  Maaari kaming makaharap ng ilang hamon habang lumilipat mula Java patungong Go. Maaaring tumagal bago maging bihasa ang aming mga developer sa bagong wika.

3. **Tooling:**  Kailangan naming mag-ampon ng mga bagong tool at framework na espesipiko sa Go. Gayunpaman, magagamit namin ang umiiral na infrastructure para mabawasan ang epekto ng pagbabagong ito.

4. **Vendor lock-in:**  Ang Go ay open-source na programming language, at hindi kami magiging nakatali sa anumang vendor o service provider.

## Konklusyon

Makatutulong ang pag-aampon ng programming language na Go na pagbutihin ang aming proseso ng pagbuo at makabuo ng matatag na mga application. Kakailanganin naming maglaan ng resources sa pagsasanay at mga tool para suportahan ang paglipat na ito, ngunit naniniwala kaming mas matimbang ang mga benepisyo ng desisyong ito kaysa sa mga gastos.

<h6>Kredito: ang pahinang ito ay binuo ng ChatGPT, pagkatapos ay inedit para sa kalinawan at format.</h6>
