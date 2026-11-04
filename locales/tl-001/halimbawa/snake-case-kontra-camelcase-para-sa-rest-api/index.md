# Architecture Decision Record: snake_case kontra camelCase para sa REST API?

Desisyon: Gagamitin ang kumbensyon sa pagpapangalang snake_case para sa mga endpoint ng REST API

Katayuan: Tinanggap

## Konteksto

Sa mga kumbensyon sa pagpapangalan para sa mga REST API, may dalawang popular na format: snake_case at camelCase. Sa snake_case, pinaghihiwalay ng underscore ang bawat salita sa pangalan, samantalang sa camelCase, nasa maliit na titik ang unang salita ng pangalan, at ang mga sumusunod na salita ay may malaking unang titik. Tutukuyin ng desisyong ito kung aling kumbensyon sa pagpapangalan ang dapat gamitin para sa isang REST API.

## Mga Driver ng Desisyon

- Pagkakapare-pareho sa mga umiiral na kumbensyon sa pagpapangalan sa proyekto

- Pagiging madaling basahin at kalinawan para sa sinumang maaaring gumagawa sa API

- Pagkakahanay sa mga best practice ng industriya para sa mga kumbensyon sa pagpapangalan ng REST API

- Dali ng implementasyon at maintenance

## Desisyon

Gagamitin ang kumbensyon sa pagpapangalang snake_case para sa mga endpoint ng REST API. Ang pagpiling ito ay udyok ng mga sumusunod na salik:

1. **Pagkakapare-pareho**: Ginagamit na ng proyekto ang kumbensyon sa pagpapangalang snake_case para sa lahat ng endpoint, at makabubuting panatilihin ang kumbensyong ito upang matiyak ang pagkakapare-pareho sa buong proyekto.

2. **Pagiging madaling basahin at kalinawan**: Mas madaling basahin at unawain ang kumbensyong snake_case. Nagbibigay ang mga underscore ng malinaw na paghihiwalay sa pagitan ng mga salita, na nagpapadali sa pag-parse at pag-unawa sa kahulugan ng pangalan.

3. **Pagkakahanay sa mga best practice ng industriya**: Malawakang ginagamit sa industriya ang kumbensyong snake_case at itinuturing na best practice para sa mga REST API, kaya mahusay na pagpipilian ito para sa proyekto.

4. **Dali ng implementasyon at maintenance**: Mas madaling ipatupad at panatilihin ang pananatili sa umiiral na kumbensyon sa pagpapangalan dahil kailangang i-update ang lahat ng umiiral na code at dokumentasyon kung may bagong kumbensyong pipiliin.

## Mga Kahihinatnan

May mga posibleng kahihinatnan ang desisyong ito. 

* Kung may bagong miyembro ng koponang sasali sa proyekto na hindi pamilyar sa kumbensyon sa pagpapangalang snake_case, maaari itong humantong sa kalituhan at pagkakamali sa pagbuo. Gayunpaman, dahil malawakang ginagamit na kumbensyon ang snake_case, minimal ang gayong panganib. 
  
* Kung may ginagamit na ibang tool o framework sa proyekto na lubos na nakabatay sa kumbensyong camelCase, maaaring mangailangan ito ng dagdag na pagsisikap para mag-convert sa pagitan ng mga kumbensyon sa pagpapangalan. Gayunpaman, hindi ito malaking alalahanin dahil na-standardize na ng proyekto ang kumbensyong snake_case. 
 
Sa kabuuan, ang desisyong gamitin ang kumbensyon sa pagpapangalang snake_case para sa mga endpoint ng REST API ay nagreresulta sa pare-pareho, madaling basahin, at pamantayan-ng-industriya na pamamaraan habang madaling ipatupad at panatilihin.

<h6>Kredito: ang pahinang ito ay binuo ng ChatGPT, pagkatapos ay inedit para sa kalinawan at format.</h6>
