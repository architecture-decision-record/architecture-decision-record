# Proseso ng Architectural Decision Record ng AWS

https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html

Ang architectural decision record (ADR) ay isang dokumentong naglalarawan ng pagpiling ginagawa ng koponan tungkol sa isang mahalagang aspeto ng software architecture na plano nilang buuin. Inilalarawan ng bawat ADR ang desisyon sa arkitektura, ang konteksto nito, at ang mga kahihinatnan nito. May mga estado ang mga ADR kaya sumusunod ang mga ito sa isang lifecycle. Para sa halimbawa ng ADR, tingnan ang appendix.

Ang proseso ng ADR ay naglalabas ng koleksyon ng mga architectural decision record. Ang koleksyong ito ang bumubuo sa decision log. Ibinibigay ng decision log ang konteksto ng proyekto pati na rin ang detalyadong impormasyon sa implementasyon at disenyo. Binabasa lang ng mga miyembro ng proyekto ang mga headline ng bawat ADR para magkaroon ng pangkalahatang larawan ng konteksto ng proyekto. Binabasa nila ang mga ADR para sumisid nang malalim sa mga implementasyon at pagpili sa disenyo ng proyekto.

Kapag tinanggap ng koponan ang isang ADR, hindi na ito mababago. Kung ang mga bagong natuklasan ay nangangailangan ng ibang desisyon, magmumungkahi ang koponan ng bagong ADR. Kapag tinanggap ng koponan ang bagong ADR, papalitan nito ang naunang ADR.

## Saklaw ng proseso ng ADR

Dapat gumawa ang mga miyembro ng proyekto ng ADR para sa bawat desisyong may malaking epekto sa arkitektura at nakaaapekto sa software project o produkto, kasama ang mga sumusunod (Richards at Ford 2020):

* Estruktura (halimbawa, mga pattern tulad ng microservices)

* Mga non-functional requirement (seguridad, mataas na availability, at fault tolerance)

* Mga dependency (pagkakabit ng mga component)

* Mga interface (mga API at nailathalang kontrata)

* Mga pamamaraan sa pagbuo (mga library, framework, tool, at proseso)

* Ang mga functional at non-functional requirement ang pinakakaraniwang input sa proseso ng ADR.


## Nilalaman ng ADR

Kapag natukoy ng koponan na kailangan ng ADR, magsisimulang sumulat ng ADR ang isang miyembro ng koponan batay sa template na ginagamit sa buong proyekto. (Tingnan ang ADR GitHub organization para sa mga halimbawang template.) Pinapadali ng template ang paggawa ng ADR at tinitiyak na nakukuha ng ADR ang lahat ng kaugnay na impormasyon. Sa pinakamababa, dapat tukuyin ng bawat ADR ang konteksto ng desisyon, ang mismong desisyon, at ang mga kahihinatnan ng desisyon sa proyekto at sa mga deliverable nito. (Para sa mga halimbawa ng mga seksyong ito, tingnan ang appendix.) Isa sa pinakamakapangyarihang aspeto ng istruktura ng ADR ay nakatuon ito sa dahilan ng desisyon sa halip na sa kung paano ito ipinatupad ng koponan. Kapag naunawaan kung bakit ginawa ng koponan ang desisyon, mas madali itong tanggapin ng ibang miyembro ng koponan, at napipigilan nito ang ibang arkitektong hindi kasali sa proseso ng pagdedesisyon na baligtarin ang desisyong iyon sa hinaharap.


## Proseso ng pag-aampon ng ADR

Maaaring gumawa ng ADR ang bawat miyembro ng koponan, ngunit dapat magtakda ang koponan ng kahulugan ng pagmamay-ari para sa isang ADR. Dapat aktibong panatilihin at ipaalam ng bawat may-akda na may-ari ng isang ADR ang nilalaman ng ADR. Para linawin ang pagmamay-aring ito, tinutukoy ng gabay na ito ang mga may-akda ng ADR bilang mga may-ari ng ADR sa mga sumusunod na seksyon. Palaging makapag-aambag ang ibang miyembro ng koponan sa isang ADR. Kung magbago ang nilalaman ng ADR bago ito tanggapin ng koponan, dapat aprubahan ng may-ari ang mga pagbabagong ito.

Matapos matukoy ng koponan ang isang desisyon sa arkitektura at ang may-ari nito, ibibigay ng may-ari ng ADR ang ADR sa estadong **Proposed** (Iminungkahi) sa simula ng proseso. Handa nang repasuhin ang mga ADR na nasa estadong Proposed.

Pagkatapos ay sisimulan ng may-ari ng ADR ang proseso ng pagrepaso para sa ADR. Ang layunin ng proseso ng pagrepaso ng ADR ay magpasya kung tatanggapin ng koponan ang ADR, ituturing na kailangan itong baguhin, o tatanggihan ang ADR. Nirerepaso ng pangkat ng proyekto, kasama ang may-ari, ang ADR. Dapat magsimula ang pulong ng pagrepaso sa nakalaang oras para basahin ang ADR. Sa karaniwan, sapat na ang 10 hanggang 15 minuto. Sa panahong ito, binabasa ng bawat miyembro ng koponan ang dokumento at nagdaragdag ng mga komento at tanong para markahan ang mga paksang hindi malinaw. Pagkatapos ng yugto ng pagrepaso, babasahin at tatalakayin ng may-ari ng ADR ang bawat komento kasama ang koponan.

Kung makakita ang koponan ng mga action point para mapabuti ang ADR, mananatiling **Proposed** ang estado ng ADR. Bubuuin ng may-ari ng ADR ang mga aksyon at, katuwang ang koponan, magtatalaga ng gagawa sa bawat aksyon. Makapag-aambag at makalulutas ang bawat miyembro ng koponan sa mga action point. Responsibilidad ng may-ari ng ADR na muling iiskedyul ang proseso ng pagrepaso.

Maaari ring magpasya ang koponan na tanggihan ang ADR. Sa kasong ito, magdaragdag ang may-ari ng ADR ng dahilan ng pagtanggi para maiwasan ang mga talakayan sa hinaharap tungkol sa parehong paksa. Papalitan ng may-ari ang estado ng ADR sa **Rejected** (Tinanggihan).

Kung aprubahan ng koponan ang ADR, magdaragdag ang may-ari ng timestamp, bersyon, at listahan ng mga stakeholder. Pagkatapos ay isusulong ng may-ari ang estado sa **Accepted** (Tinanggap).

Kinakatawan ng mga ADR at ng decision log na nabubuo ng mga ito ang mga desisyong ginawa ng koponan at nagbibigay ng kasaysayan ng lahat ng desisyon. Ginagamit ng koponan ang mga ADR bilang sanggunian sa mga code review at architectural review kung maaari. Bukod sa pagsasagawa ng mga code review, mga gawain sa disenyo, at mga gawain sa implementasyon, dapat sumangguni ang mga miyembro ng koponan sa mga ADR para sa mga estratehikong desisyon para sa produkto.

Bilang mabuting gawi, dapat dumaan sa peer review ang bawat pagbabago sa software at mangailangan ng kahit isang pag-apruba. Sa code review, maaaring makakita ang code reviewer ng mga pagbabagong lumalabag sa isa o higit pang ADR. Sa kasong ito, hihilingin ng reviewer sa may-akda ng pagbabago sa code na i-update ang code, at magbabahagi ng link sa ADR. Kapag in-update ng may-akda ang code, aaprubahan ito ng mga peer reviewer at isasama sa pangunahing code base.


## Proseso ng pagrepaso ng ADR

Dapat ituring ng koponan ang mga ADR bilang mga dokumentong hindi na mababago matapos itong tanggapin o tanggihan ng koponan. Ang mga pagbabago sa umiiral na ADR ay nangangailangan ng paggawa ng bagong ADR, pagtatatag ng proseso ng pagrepaso para sa bagong ADR, at pag-apruba sa ADR. Kung aprubahan ng koponan ang bagong ADR, dapat palitan ng may-ari ang estado ng lumang ADR sa **Superseded** (Napalitan). 
