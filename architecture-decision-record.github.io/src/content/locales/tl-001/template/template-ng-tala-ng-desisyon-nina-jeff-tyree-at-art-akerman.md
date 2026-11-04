# Template ng tala ng desisyon nina Jeff Tyree at Art Akerman

Ito ang template ng paglalarawan ng desisyon sa arkitektura na nailathala sa ["Architecture Decisions: Demystifying Architecture" nina Jeff Tyree at Art Akerman, Capital One Financial](https://www.utdallas.edu/~chung/SA/zz-Impreso-architecture_decisions-tyree-05.pdf).

* **Isyu**: Ilarawan ang isyu sa disenyo ng arkitektura na tinutugunan mo, nang walang iniiwang tanong kung bakit mo ito tinutugunan ngayon. Sa pamamagitan ng minimalistang pamamaraan, tugunan at idokumento lamang ang mga isyung kailangang tugunan sa iba't ibang yugto ng life cycle.

* **Desisyon**: Malinaw na sabihin ang direksyon ng arkitektura—ibig sabihin, ang posisyong napili mo.

* **Katayuan**: Ang katayuan ng desisyon, tulad ng pending, decided, o approved.

* **Grupo**: Maaari kang gumamit ng simpleng pagpapangkat—tulad ng integration, presentation, data, at iba pa—para tumulong sa pag-aayos ng hanay ng mga desisyon. Maaari ka ring gumamit ng mas sopistikadong architecture ontology, tulad ng kina John Kyaruzi at Jan van Katwijk, na may mas abstraktong mga kategorya tulad ng event, calendar, at location. Halimbawa, gamit ang ontology na ito, ipapangkat mo sa event ang mga desisyong tumatalakay sa mga pangyayaring nangangailangan ng impormasyon ang sistema.

* **Mga palagay**: Malinaw na ilarawan ang pinagbabatayang mga palagay sa kapaligirang pinagdedesisyunan mo—gastos, iskedyul, teknolohiya, at iba pa. Tandaan na ang mga limitasyon ng kapaligiran (tulad ng tinatanggap na mga pamantayan sa teknolohiya, enterprise architecture, karaniwang ginagamit na mga pattern, at iba pa) ay maaaring maglimita sa mga alternatibong isinasaalang-alang mo.

* **Mga limitasyon**: Itala ang anumang karagdagang limitasyon sa kapaligiran na maaaring ipataw ng napiling alternatibo (ang desisyon).

* **Mga posisyon**: Ilista ang mga posisyon (mga viable na opsyon o alternatibo) na isinaalang-alang mo. Madalas na nangangailangan ang mga ito ng mahahabang paliwanag, minsan pati mga model at diagram. Hindi ito kumpletong listahan. Gayunpaman, ayaw mong marinig ang tanong na "Naisip mo ba ang...?" sa huling pagrepaso; humahantong ito sa pagkawala ng kredibilidad at pagtatanong sa iba pang desisyon sa arkitektura. Nakatutulong din ang seksyong ito para matiyak na narinig mo ang mga opinyon ng iba; ang tahasang pagsasabi ng ibang opinyon ay tumutulong na isali ang kanilang mga tagapagtaguyod sa iyong desisyon.

* **Argumento**: Ilahad kung bakit mo pinili ang isang posisyon, kasama ang mga bagay tulad ng gastos sa implementasyon, kabuuang gastos ng pagmamay-ari, time to market, at availability ng kinakailangang resources sa development. Marahil ay kasinghalaga ito ng mismong desisyon.

* **Mga implikasyon**: May kasamang maraming implikasyon ang isang desisyon, ayon sa REMAP metamodel. Halimbawa, maaaring magdulot ang isang desisyon ng pangangailangang gumawa ng iba pang desisyon, lumikha ng mga bagong requirement, o baguhin ang mga umiiral na requirement; magpataw ng karagdagang limitasyon sa kapaligiran; mangailangan ng muling pakikipagnegosasyon ng saklaw o iskedyul sa mga customer; o mangailangan ng karagdagang pagsasanay sa mga tauhan. Ang malinaw na pag-unawa at pagsasabi ng mga implikasyon ng iyong desisyon ay maaaring maging napakaepektibo sa pagkuha ng buy-in at paglikha ng roadmap para sa pagsasagawa ng arkitektura.

* **Mga kaugnay na desisyon**: Halata na maraming desisyon ang magkakaugnay; maaari mo silang ilista dito. Gayunpaman, natuklasan naming sa praktika, mas kapaki-pakinabang ang traceability matrix, mga decision tree, o mga metamodel. Kapaki-pakinabang ang mga metamodel para ipakita nang diagramatiko ang masalimuot na ugnayan (tulad ng mga Rose model).

* **Mga kaugnay na requirement**: Dapat batay sa negosyo ang mga desisyon. Para ipakita ang pananagutan, tahasang itugma ang iyong mga desisyon sa mga layunin o requirement. Maaari mong ilista ang mga kaugnay na requirement na ito dito, ngunit natuklasan naming mas maginhawang sumangguni sa traceability matrix. Maaari mong suriin ang kontribusyon ng bawat desisyon sa arkitektura sa pagtugon sa bawat requirement, at pagkatapos ay suriin kung gaano kahusay natutugunan ang requirement sa lahat ng desisyon. Kung walang naiaambag ang isang desisyon sa pagtugon sa isang requirement, huwag gawin ang desisyong iyon.

* **Mga kaugnay na artifact**: Ilista ang mga kaugnay na dokumento ng arkitektura, disenyo, o saklaw na naaapektuhan ng desisyong ito.

* **Mga kaugnay na prinsipyo**: Kung may napagkasunduang hanay ng mga prinsipyo ang enterprise, tiyaking naaayon ang desisyon sa isa o higit pa sa mga ito. Nakatutulong ito para matiyak ang pagkakahanay sa mga domain o sistema.

* **Mga tala**: Dahil maaaring umabot ng mga linggo ang proseso ng pagdedesisyon, natuklasan naming kapaki-pakinabang na itala ang mga tala at isyung tinalakay ng koponan sa panahon ng proseso ng socialization.
