# Template ng tala ng desisyon ng arc42

<https://arc42.org/overview>

## 1. Panimula at mga Layunin

Maikling paglalarawan ng mga requirement, mga puwersang nagtutulak, katas (o abstract) ng mga requirement. Ang nangungunang tatlo (hanggang lima) na layunin sa kalidad para sa arkitektura na may pinakamataas na priyoridad para sa mga pangunahing stakeholder. Isang talahanayan ng mahahalagang stakeholder at ang kanilang inaasahan tungkol sa arkitektura.

## 1.1 Pangkalahatang-ideya ng mga Requirement

### Nilalaman

Maikling paglalarawan ng mga functional requirement, mga puwersang nagtutulak, katas (o abstract) ng mga requirement. Mga link sa (sana ay umiiral na) mga dokumento ng requirement, na may impormasyon kung saan ito matatagpuan. 

### Motibasyon

Sa pananaw ng mga end user, ang isang sistema ay nililikha o binabago para pagbutihin ang suporta sa isang aktibidad ng negosyo at/o pagbutihin ang kalidad. 

### Anyo

Maikling tekstuwal na paglalarawan, marahil sa tabular na format ng use case. Kung may mga dokumento ng requirement, dapat tumukoy sa mga dokumentong ito ang pangkalahatang-ideyang ito.

Panatilihing kasing-ikli hangga't maaari ang mga katas na ito. Balansehin ang pagiging madaling basahin ng dokumentong ito at ang posibleng redundancy kaugnay ng mga dokumento ng requirement. 

## 1.2 Mga layunin sa kalidad

### Nilalaman

Ang nangungunang tatlo (hanggang lima) na layunin sa kalidad para sa arkitektura na ang pagtupad ay may pinakamataas na kahalagahan sa mga pangunahing stakeholder. Ang ibig naming sabihin ay mga layunin sa kalidad para sa arkitektura. Huwag silang ikalito sa mga layunin ng proyekto. Hindi sila kinakailangang magkapareho. Nagbibigay ang pamantayang ISO 25010 ng magandang pangkalahatang-ideya ng mga posibleng paksang kawili-wili.

### Motibasyon

Dapat mong malaman ang mga layunin sa kalidad ng iyong pinakamahahalagang stakeholder, dahil makakaimpluwensya ang mga ito sa mga pundamental na desisyon sa arkitektura. Tiyaking maging napakakongkreto tungkol sa mga kalidad na ito, iwasan ang mga buzzword. Kung hindi mo, bilang arkitekto, alam kung paano huhusgahan ang kalidad ng iyong gawa …

### Anyo

Isang talahanayan ng pinakamahahalagang layunin sa kalidad at kongkretong mga senaryo, nakaayos ayon sa priyoridad.

## 1.3 Stakeholder

### Nilalaman

Tahasang pangkalahatang-ideya ng mga stakeholder ng sistema, ibig sabihin lahat ng tao, tungkulin o organisasyong

- dapat makaalam ng arkitektura

- kailangang makumbinsi sa arkitektura

- kailangang gumamit ng arkitektura o ng code

- nangangailangan ng dokumentasyon ng arkitektura para sa kanilang trabaho

- kailangang magpasya tungkol sa sistema o sa development nito

### Motibasyon

Dapat mong malaman ang lahat ng panig na kasali sa development ng sistema o naaapektuhan ng sistema. Kung hindi, maaari kang makatanggap ng mga hindi magandang sorpresa sa kalaunan ng proseso ng development. Tinutukoy ng mga stakeholder na ito ang lawak at antas ng detalye ng iyong gawa at ng mga resulta nito.

### Anyo

Talahanayan na may mga pangalan ng tungkulin, mga pangalan ng tao, at kanilang mga inaasahan kaugnay ng arkitektura at ng dokumentasyon nito.

## 2. Mga Limitasyon

Anumang naglilimita sa mga koponan sa mga desisyon sa disenyo at implementasyon o sa mga desisyon tungkol sa mga kaugnay na proseso. Maaaring minsang lumampas sa mga indibidwal na sistema at may bisa sa buong organisasyon at kumpanya.

### Nilalaman

Anumang requirement na naglilimita sa mga software architect sa kanilang kalayaan sa mga desisyon sa disenyo at implementasyon o sa desisyon tungkol sa proseso ng development. Ang mga limitasyong ito ay minsang lumalampas sa mga indibidwal na sistema at may bisa sa buong organisasyon at kumpanya.

### Motibasyon

Dapat alam na alam ng mga arkitekto kung saan sila malaya sa kanilang mga desisyon sa disenyo at kung saan nila kailangang sumunod sa mga limitasyon. Palaging kailangang harapin ang mga limitasyon; maaaring mapag-usapan ang mga ito, gayunpaman.

### Anyo

Mga simpleng talahanayan ng mga limitasyon na may mga paliwanag. Kung kinakailangan, maaari mo silang hatiin sa mga teknikal na limitasyon, mga limitasyong organisasyonal at pulitikal, at mga kumbensyon (hal. mga alituntunin sa programming o versioning, mga kumbensyon sa dokumentasyon o pagpapangalan)

## 3. Konteksto at Saklaw

Nililimitahan ang iyong sistema mula sa (panlabas) nitong mga kapareha sa komunikasyon (mga karatig na sistema at user). Tinutukoy ang mga panlabas na interface. Ipinapakita mula sa pananaw ng negosyo/domain (palagi) o teknikal na pananaw (opsyonal)

### Nilalaman

Ang saklaw at konteksto ng sistema - gaya ng ipinahihiwatig ng pangalan - ay naglilimita sa iyong sistema (ibig sabihin ang iyong saklaw) mula sa lahat ng kapareha nito sa komunikasyon (mga karatig na sistema at user, ibig sabihin ang konteksto ng iyong sistema). Sa gayon, tinutukoy nito ang mga panlabas na interface.

Kung kinakailangan, ibahin ang konteksto ng negosyo (mga input at output na tiyak sa domain) sa teknikal na konteksto (mga channel, protocol, hardware).

### Motibasyon

Ang mga interface ng domain at mga teknikal na interface sa mga kapareha sa komunikasyon ay kabilang sa pinakakritikal na aspeto ng iyong sistema. Tiyaking lubos mo silang nauunawaan.

### Anyo

- Iba't ibang context diagram

- Mga listahan ng mga kapareha sa komunikasyon at ng kanilang mga interface.

## 3.1 Konteksto ng negosyo

### Nilalaman

Pagtutukoy ng lahat ng kapareha sa komunikasyon (mga user, IT system, …) na may mga paliwanag ng mga input at output o interface na tiyak sa domain. Opsyonal, maaari kang magdagdag ng mga format na tiyak sa domain o mga protocol sa komunikasyon.

### Motibasyon

Dapat maunawaan ng lahat ng stakeholder kung anong data ang ipinagpapalit sa kapaligiran ng sistema.

### Anyo

Lahat ng uri ng diagram na nagpapakita ng sistema bilang black box at tumutukoy sa mga interface ng domain sa mga kapareha sa komunikasyon.

Bilang alternatibo (o dagdag), maaari kang gumamit ng talahanayan. Ang pamagat ng talahanayan ay ang pangalan ng iyong sistema, ang tatlong hanay ay naglalaman ng pangalan ng kapareha sa komunikasyon, ang mga input, at ang mga output.

## 3.2 Teknikal na konteksto

### Nilalaman

Mga teknikal na interface (mga channel at transmission medium) na nag-uugnay sa iyong sistema sa kapaligiran nito. Bukod pa rito, isang mapping ng mga input/output na tiyak sa domain sa mga channel, ibig sabihin isang paliwanag kung aling channel ang ginagamit ng aling I/O.

### Motibasyon

Maraming stakeholder ang gumagawa ng desisyon sa arkitektura batay sa mga teknikal na interface sa pagitan ng sistema at ng konteksto nito. Lalo na ang mga tagadisenyo ng infrastructure o hardware ang nagpapasya sa mga teknikal na interface na ito.

### Anyo

Hal. UML deployment diagram na naglalarawan ng mga channel patungo sa mga karatig na sistema, kasama ang mapping table na nagpapakita ng ugnayan sa pagitan ng mga channel at input/output.

## 4. Estratehiya ng Solusyon

Buod ng mga pundamental na desisyon at estratehiya ng solusyon na humuhubog sa arkitektura. Maaaring magsama ng teknolohiya, decomposition sa pinakamataas na antas, mga pamamaraan para makamit ang mga pangunahing layunin sa kalidad at kaugnay na mga desisyong organisasyonal.

### Nilalaman

Isang maikling buod at paliwanag ng mga pundamental na desisyon at estratehiya ng solusyon na humuhubog sa arkitektura ng sistema. Kabilang dito ang

- mga desisyon sa teknolohiya

- mga desisyon tungkol sa decomposition ng sistema sa pinakamataas na antas, hal. paggamit ng architectural pattern o design pattern

- mga desisyon kung paano makakamit ang mga pangunahing layunin sa kalidad

- kaugnay na mga desisyong organisasyonal, hal. pagpili ng proseso ng development o pagtatalaga ng ilang gawain sa mga third party.

### Motibasyon

Ang mga desisyong ito ang bumubuo sa mga pundasyon ng iyong arkitektura. Ang mga ito ang batayan ng maraming iba pang detalyadong desisyon o tuntunin sa implementasyon.

### Anyo

Panatilihing maikli ang paliwanag sa mga pangunahing desisyong ito.

Ipaliwanag ang motibasyon kung ano ang napagdesisyunan mo at bakit ganoon ang iyong napagdesisyunan, batay sa iyong pahayag ng problema, mga layunin sa kalidad, at mga pangunahing limitasyon. Sumangguni sa mga detalye sa mga sumusunod na seksyon (seksyon 5 para sa mga estruktural na detalye, seksyon 8 para sa mga crosscutting concept).

Maaari kang gumamit ng listahan ng mga pamamaraan sa solusyon o talahanayan.

## 5. Building Block View

Static decomposition ng sistema, mga abstraksyon ng source code, ipinapakita bilang hierarchy ng mga white box (na naglalaman ng mga black box), hanggang sa angkop na antas ng detalye.

### Nilalaman

Ipinapakita ng building block view ang static decomposition ng sistema sa mga building block (mga module, component, subsystem, class, interface, package, library, framework, layer, partition, tier, function, macro, operation, data structure, …) pati na rin ang kanilang mga dependency (mga ugnayan, asosasyon, …)

Mandatory ang view na ito para sa bawat dokumentasyon ng arkitektura. Sa pagkakatulad sa isang bahay, ito ang floor plan.

### Motibasyon

Panatilihin ang pangkalahatang-ideya ng iyong source code sa pamamagitan ng pagpapaunawa sa estruktura nito sa pamamagitan ng abstraksyon.

Pinahihintulutan ka nitong makipag-ugnayan sa iyong stakeholder sa abstraktong antas nang hindi ibinubunyag ang mga detalye ng implementasyon.

### Anyo

Ang building block view ay hierarchical na koleksyon ng mga black box at white box (tingnan ang figure sa ibaba) at ng kanilang mga paglalarawan.

## 5.1 Whitebox ng Buong Sistema

Dito mo inilalarawan ang decomposition ng buong sistema gamit ang sumusunod na white box template. Naglalaman ito ng

- isang overview diagram

- isang motibasyon para sa decomposition

- mga paglalarawan ng black box ng mga nakapaloob na building block. Para dito, nag-aalok kami sa iyo ng mga alternatibo:

  - gumamit ng isang talahanayan para sa maikli at praktikal na pangkalahatang-ideya ng lahat ng nakapaloob na building block at ng kanilang mga interface

  - gumamit ng listahan ng mga paglalarawan ng black box ng mga building block ayon sa black box template (tingnan sa ibaba). Depende sa pinili mong tool, maaaring maging sub-chapter (sa mga text file), sub-page (sa Wiki) o nested element (sa modelling tool) ang listahang ito.

  - (opsyonal:) mahahalagang interface na hindi ipinaliwanag sa black box template ng isang building block, ngunit napakahalaga para maunawaan ang white box.

Dahil napakaraming paraan para tukuyin ang mga interface, hindi kami nagbibigay ng tiyak na template para sa mga ito.

Sa pinakamainam na kaso, sapat na ang mga halimbawa o simpleng signature.

## 5.2 Antas 2

Dito mo matutukoy ang panloob na estruktura ng (ilang) building block mula sa antas 1 bilang mga white box.

Kailangan mong magpasya kung aling mga building block ng iyong sistema ang sapat na mahalaga para bigyang-katwiran ang ganoong detalyadong paglalarawan. Mas piliin ang kaugnayan kaysa sa pagiging kumpleto. Tukuyin ang mahalaga, nakagugulat, mapanganib, masalimuot o pabagu-bagong mga building block. Iwanan ang mga normal, simple, nakakabagot o standardized na bahagi ng iyong sistema

### 5.2.1 White Box para sa building block 1

Tinutukoy ang panloob na estruktura ng building block 1.

Gamitin ang white box template (tingnan sa itaas).

## 6. Runtime View

Pag-uugali ng mga building block bilang mga senaryo, na sumasaklaw sa mahahalagang use case o feature, mga interaksyon sa mga kritikal na panlabas na interface, operasyon at administrasyon pati na rin ang pag-uugali sa error at exception.

### Nilalaman

Inilalarawan ng runtime view ang kongkretong pag-uugali at mga interaksyon ng mga building block ng sistema sa anyo ng mga senaryo mula sa mga sumusunod na larangan:

- mahahalagang use case o feature: paano isinasagawa ng mga building block ang mga ito?

- mga interaksyon sa mga kritikal na panlabas na interface: paano nakikipagtulungan ang mga building block sa mga user at karatig na sistema?

- operasyon at administrasyon: launch, start-up, stop

- mga senaryo ng error at exception

Paalala: Ang pangunahing pamantayan sa pagpili ng mga posibleng senaryo (mga sequence, workflow) ay ang kaugnayan nila sa arkitektura. Hindi mahalagang ilarawan ang maraming senaryo. Mas mabuting idokumento ang kinatawang pagpili.

### Motibasyon

Dapat mong maunawaan kung paano ginagawa ng (mga instance ng) building block ng iyong sistema ang kanilang trabaho at nakikipag-ugnayan sa runtime. Pangunahin mong itatala ang mga senaryo sa iyong dokumentasyon para maipaalam ang iyong arkitektura sa mga stakeholder na hindi gaanong handa o kayang basahin at unawain ang mga static model (building block view, deployment view).

### Anyo

Maraming notasyon para ilarawan ang mga senaryo, hal.


- may-numerong listahan ng mga hakbang (sa natural na wika)

- activity diagram o flow chart

- sequence diagram

- BPMN o EPC (event process chain)

- state machine

- atbp.

## 6.n Senaryo sa Runtime n (1, 2, 3, atbp.)

Maglagay ng runtime diagram o tekstuwal na paglalarawan ng senaryo.

Maglagay ng paglalarawan ng mga kapansin-pansing aspeto ng mga interaksyon sa pagitan ng mga instance ng building block na inilalarawan sa diagram na ito.

## 7. Deployment View

Teknikal na infrastructure na may mga environment, computer, processor, topology. Mapping ng (software) building block sa mga elemento ng infrastructure.

### Nilalaman

Inilalarawan ng deployment view ang:

- ang teknikal na infrastructure na ginagamit para patakbuhin ang iyong sistema, na may mga elemento ng infrastructure tulad ng mga heograpikal na lokasyon, environment, computer, processor, channel at net topology pati na rin ang iba pang elemento ng infrastructure at

- ang mapping ng (software) building block sa mga elemento ng infrastructure na iyon.

Madalas na pinapatakbo ang mga sistema sa iba't ibang environment, hal. development environment, test environment, production environment. Sa ganitong mga kaso, dapat mong idokumento ang lahat ng kaugnay na environment.

Lalo na idokumento ang deployment view kapag pinapatakbo ang iyong software bilang distributed system na may higit sa isang computer, processor, server o container o kapag nagdidisenyo at gumagawa ka ng sarili mong hardware processor at chip.

Sa pananaw ng software, sapat nang itala ang mga elemento ng infrastructure na kailangan para ipakita ang deployment ng iyong mga building block. Maaaring lumampas dito ang mga hardware architect at ilarawan ang infrastructure sa anumang antas ng detalyeng kailangan nilang itala. 

### Motibasyon

Hindi tumatakbo ang software kung walang hardware. Maaari at makakaimpluwensya ang pinagbabatayang infrastructure na ito sa iyong sistema at/o ilang cross-cutting concept. Samakatuwid, kailangan mong malaman ang infrastructure.

### Anyo

Marahil ay nasa seksyon 3.2 na ang deployment diagram sa pinakamataas na antas bilang teknikal na konteksto na may sarili mong infrastructure bilang ISANG black box. Sa seksyong ito, magzu-zoom ka sa black box na ito gamit ang karagdagang deployment diagram.

- Nag-aalok ang UML ng mga deployment diagram para ipahayag ang view na iyon. Gamitin ito, marahil na may mga nested diagram, kapag mas masalimuot ang iyong infrastructure.

- Kapag mas gusto ng iyong (hardware) stakeholder ang ibang uri ng diagram kaysa sa UML deployment diagram, hayaan silang gumamit ng anumang uri na kayang magpakita ng mga node at channel ng infrastructure.

## 7.1 Infrastructure Antas 1

Ilarawan (karaniwan sa kombinasyon ng mga diagram, talahanayan, at teksto):

- ang distribusyon ng iyong sistema sa maraming lokasyon, environment, computer, processor, .. pati na rin ang mga pisikal na koneksyon sa pagitan nila

- mahalagang katwiran o motibasyon para sa estrukturang deployment na ito

- mga katangian ng kalidad at/o performance ng infrastructure

- ang mapping ng mga software artifact (building block) sa mga elemento ng infrastructure

Para sa maraming environment o alternatibong deployment, kopyahin ang seksyong iyon ng arc42 para sa lahat ng kaugnay na environment. **

## 7.2 Infrastructure Antas 2

Dito mo maisasama ang panloob na estruktura ng (ilang) elemento ng infrastructure mula sa infrastructure antas 1.

Pakikopya ang estruktura mula sa antas 1 para sa bawat napiling elemento.

## 8. Mga Crosscutting Concept

Pangkalahatan, mga pangunahing regulasyon at pamamaraan sa solusyon na kaugnay sa maraming bahagi (→ cross-cutting) ng sistema. Madalas na nauugnay ang mga concept sa maraming building block. Magsama ng iba't ibang paksa tulad ng mga domain model, architecture pattern at -style, mga tuntunin sa paggamit ng tiyak na teknolohiya at mga tuntunin sa implementasyon.

### Nilalaman

Inilalarawan ng seksyong ito ang mga crosscutting concept (mga gawi, pattern, regulasyon o ideya sa solusyon). Madalas na nauugnay ang gayong mga concept sa maraming building block. Maaari silang magsama ng maraming iba't ibang paksa.

### Motibasyon

Ang mga concept ang bumubuo sa batayan ng conceptual integrity (pagkakapare-pareho, homogeneity) ng arkitektura. Kaya, mahalagang ambag ang mga ito para makamit ang mga panloob na kalidad ng iyong sistema.

Ito ang lugar sa template na ibinigay namin para sa magkakaugnay na pagtutukoy ng gayong mga concept.

Marami sa mga concept na ito ay nauugnay o nakakaimpluwensya sa ilan sa iyong mga building block.

### Anyo

Maaaring mag-iba ang anyo:

- mga concept paper na may anumang uri ng estruktura

- mga halimbawang implementasyon, lalo na para sa mga teknikal na concept

- mga cross-cutting model excerpt o senaryo gamit ang mga notasyon ng mga architecture view

### Estruktura ng seksyong ito

Piliin lamang ang mga pinakakailangang paksa para sa iyong sistema at magtalaga sa bawat isa ng level-2 heading sa seksyong ito (hal. 8.1, 8.2 atbp).

- HUWAG SUBUKANG saklawin ang lahat ng paksa ng nabanggit na diagram.

### Background

Ang ilang paksa sa loob ng mga sistema ay madalas na may kinalaman sa maraming building block, elemento ng hardware o proseso ng development. Maaaring mas madaling ipaalam o idokumento ang gayong mga cross-cutting na paksa sa sentral na lokasyon, sa halip na ulitin ang mga ito sa paglalarawan ng mga kinauukulang building block, elemento ng hardware o proseso ng development.

Ang ilang concept ay maaaring may kinalaman sa lahat ng elemento ng isang sistema, ang iba ay maaaring may kaugnayan lamang sa iilan.

## 9. Mga Desisyon sa Arkitektura

Mahalaga, magastos, kritikal, malakihan o mapanganib na mga desisyon sa arkitektura kasama ang mga katwiran.

### Nilalaman

Mahalaga, magastos, malakihan o mapanganib na mga desisyon sa arkitektura kasama ang mga katwiran. Ang ibig naming sabihin sa “mga desisyon” ay ang pagpili ng isang alternatibo batay sa mga ibinigay na pamantayan.

Pakigamit ang iyong paghuhusga para magpasya kung dapat idokumento ang isang desisyon sa arkitektura dito sa sentral na seksyong ito o mas mabuting idokumento ito nang lokal (hal. sa loob ng white box template ng isang building block). Iwasan ang redundant na teksto. Sumangguni sa seksyon 4, kung saan naitala mo na ang pinakamahahalagang desisyon ng iyong arkitektura.

### Motibasyon

Dapat maunawaan at masundan ng mga stakeholder ng iyong sistema ang iyong mga desisyon.

### Anyo

- ADR (architecture decision record) para sa bawat mahalagang desisyon

- listahan o talahanayan, nakaayos ayon sa kahalagahan at mga kahihinatnan o

- mas detalyado sa anyo ng magkakahiwalay na seksyon bawat desisyon

### Background (tungkol sa mga ADR)

Mas madaling basahin, likhain at panatilihin ang mas maliliit na piraso ng dokumentasyon. Pagdating sa mga desisyon sa arkitektura, madalas na ang mga development team ay:

- alam ang desisyon, dahil nakikita ito hal. sa source code, ngunit

- hindi alam ang motibasyon sa likod ng desisyong iyon (tingnan ang Nygard 2011)

Kaya dapat mong idokumento ang ilang mahahalagang desisyon kasama ang kanilang motibasyon, pangangatwiran

### Ang aming panukala tungkol sa mga desisyon

Magpanatili ng koleksyon ng mga desisyong mahalaga sa arkitektura, ang mga desisyong nakaaapekto sa estruktura, mga katangian ng kalidad, mahahalagang (lalo na panlabas) na dependency at interface, o mga pamamaraan sa pagbuo (salamat kay Michael Nygard para sa panukalang ito).

## 10. Mga Requirement sa Kalidad

Mga requirement sa kalidad bilang mga senaryo, na may quality tree para magbigay ng mataas na antas na pangkalahatang-ideya. Dapat ay nailarawan na ang pinakamahahalagang layunin sa kalidad sa seksyon 1.2. (mga layunin sa kalidad).

### Nilalaman

Naglalaman ang seksyong ito ng lahat ng kaugnay na requirement sa kalidad.

Ang pinakamahahalaga sa mga requirement na ito ay nailarawan na sa seksyon 1.2. (mga layunin sa kalidad), kaya dapat banggitin lamang ang mga ito rito. Sa seksyon 10 na ito, dapat mo ring itala ang mga requirement sa kalidad na may mas mababang kahalagahan, na hindi lilikha ng malalaking panganib kapag hindi ganap na nakamit (ngunit magandang magkaroon).

### Motibasyon

Dahil malaki ang magiging impluwensya ng mga requirement sa kalidad sa mga desisyon sa arkitektura, dapat mong malaman kung anong mga kalidad ang tunay na mahalaga sa iyong mga stakeholder, sa tiyak at nasusukat na paraan.

### Karagdagang Impormasyon

Tingnan ang malawak na Q42 quality model sa https://quality.arc42.org.

## 10.1 Pangkalahatang-ideya ng mga Requirement sa Kalidad

### Nilalaman

Isang pangkalahatang-ideya o buod ng mga requirement sa kalidad.

### Motibasyon

Madalas kaming nakakatagpo ng dose-dosenang (o daan-daang) detalyadong requirement sa kalidad. Sa seksyong pangkalahatang-ideyang ito, dapat mong subukang lagumin, hal. sa pamamagitan ng paglalarawan ng mga kategorya o paksa (ayon sa mungkahi ng ISO 25010:2023 o Q42

Kung sapat nang tumpak, tiyak, at nasusukat ang mga buod na paglalarawang ito, maaari mong laktawan ang seksyon 10.2.

### Anyo

Gumamit ng simpleng talahanayan kung saan ang bawat linya ay naglalaman ng kategorya o paksa at maikling paglalarawan ng requirement sa kalidad. Bilang alternatibo, maaari kang gumamit ng mindmap para estrukturahin ang mga requirement sa kalidad na ito.

Sa panitikan, inilarawan din ang ideya ng quality attribute tree, na inilalagay ang pangkalahatang terminong “kalidad” bilang ugat at gumagamit ng parang-punong repinasyon ng terminong “kalidad”. Ipinakilala ng [Bass+21] ang terminong “Quality Attribute Utility Tree” para sa layuning ito.

## 10.2 Mga Senaryo sa Kalidad

### Nilalaman

Ginagawang kongkreto ng mga senaryo sa kalidad ang mga requirement sa kalidad at pinahihintulutang magpasya kung natutupad ang mga ito (sa diwa ng mga acceptance criteria). Tiyaking tiyak at nasusukat ang iyong mga senaryo.

Dalawang uri ng senaryo ang lalong kapaki-pakinabang:

- Inilalarawan ng mga usage scenario (tinatawag ding application scenario o use case scenario) ang reaksyon ng sistema sa runtime sa isang tiyak na stimulus. Kabilang din dito ang mga senaryong naglalarawan ng efficiency o performance ng sistema. Halimbawa: Tumutugon ang sistema sa kahilingan ng user sa loob ng isang segundo.

- Inilalarawan ng mga change scenario ang nais na epekto ng pagbabago o extension ng sistema o ng agarang kapaligiran nito. Halimbawa: Ipinapatupad ang karagdagang functionality o nagbabago ang mga requirement para sa isang quality attribute, at sinusukat ang pagsisikap o tagal ng pagbabago.

### Anyo

Kabilang sa karaniwang impormasyon para sa mga detalyadong senaryo ang mga sumusunod:

Sa maikling anyo (mas pinipili sa Q42 model):

- Konteksto/Background: Anong uri ng sistema o component, ano ang environment o sitwasyon?

- Pinagmulan/Stimulus: Sino o ano ang nagsisimula o nag-uudyok ng isang pag-uugali, reaksyon o aksyon.

- Sukatan/Acceptance Criteria: Isang tugon na may kasamang sukat o sukatan

Mas detalyado ang mahabang anyo ng mga senaryo (mas pinipili ng SEI at [Bass+21]) at kinabibilangan ng sumusunod na impormasyon:

- Scenario ID: Isang natatanging identifier para sa senaryo.

- Pangalan ng Senaryo: Isang maikli at naglalarawang pangalan para sa senaryo.

- Pinagmulan: Ang entidad (user, sistema, o pangyayari) na nagsisimula ng senaryo.

- Stimulus: Ang nag-uudyok na pangyayari o kondisyong dapat tugunan ng sistema.

- Environment: Ang operasyonal na konteksto o kondisyon kung saan nararanasan ng sistema ang stimulus.

- Artifact: Ang mga building block o iba pang elemento ng sistema na naaapektuhan ng stimulus.

- Tugon: Ang kalalabasan o pag-uugaling ipinapakita ng sistema bilang reaksyon sa stimulus.

- Sukatan ng Tugon: Ang pamantayan o sukatan kung saan sinusuri ang tugon ng sistema.

### Tingnan din

Mula noong Enero 2023, nagbibigay ang arc42 ng praktikal na quality model, na nagmumungkahing lagyan ng label ang mga requirement sa kalidad, gamit ang mga hashtag o label tulad ng #flexible, #efficient, #usable, #operable, #testable, #secure, #safe, #reliable.

## 11. Mga Panganib at Technical Debt

Mga kilalang teknikal na panganib o technical debt. Anong mga posibleng problema ang umiiral sa loob o paligid ng sistema? Ano ang ikinadidismaya ng development team?

### Nilalaman

Isang listahan ng natukoy na mga teknikal na panganib o technical debt, nakaayos ayon sa priyoridad

### Motibasyon

“Ang risk management ay project management para sa mga nasa hustong gulang” (Tim Lister, Atlantic Systems Guild.)

Ito dapat ang iyong motto para sa sistematikong pagtuklas at pagsusuri ng mga panganib at technical debt sa arkitektura, na kakailanganin ng mga management stakeholder (hal. project manager, product owner) bilang bahagi ng pangkalahatang risk analysis at measurement planning.

### Anyo

Listahan ng mga panganib at/o technical debt, marahil kasama ang mga iminungkahing hakbang para mabawasan, mapagaan o maiwasan ang mga panganib o mabawasan ang technical debt.
