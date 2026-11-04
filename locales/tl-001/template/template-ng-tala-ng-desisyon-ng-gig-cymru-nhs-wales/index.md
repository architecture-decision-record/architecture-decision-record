# {Ilagay Dito ang Iyong Pamagat}

!!! info

    **Katayuan**: { Proposed | Under Review | Accepted |  Rejected | Superseded | Deprecated }
    
    **Na-update**: {YYYY-MM-DD}

## Buod

{Ito ang 'executive summary' o 'elevator pitch' para sa iyong ADR. Sa ilang
maigsing pangungusap (karaniwang 2-4), malinaw na sabihin ang pangunahing
problema, tanong, o pagkakataong tinutugunan ng ADR na ito. Magsama ng maikling
pahiwatig tungkol sa desisyong ginawa o sa larangang pinagtutuunan. Layunin
nitong tulungan ang mga mambabasang mabilis na maunawaan kung tungkol saan ang
ADR na ito at magpasya kung may kaugnayan ito sa kanila, nang hindi na kailangang
basahin ang buong dokumento. Isipin ito bilang abstract ng isang teknikal na
papel o napakaikling panimula sa pangunahing paksa.}

## Mga Driver

{Ipinapaliwanag ng seksyong ito **kung bakit** ginagawa ang desisyong ito
**ngayon**. Malinaw na ilahad ang mga pangunahing motibasyon, pangangailangan, o
problemang nagiging dahilan ng desisyong ito sa arkitektura. Isipin ang mga
pinagbabatayang dahilan at presyon.}

* {hal. Bumubuo kami ng bagong feature/kakayahan na nangangailangan ng...}

* {hal. Kailangan naming pagbutihin ang performance, accessibility, alisin ang utang...}

* {hal. Iminumungkahi ng feedback mula sa mga user na...}

* {hal. Ipinapataw ng kasalukuyang pamamaraan ang mga limitasyong ito...}

## Mga Opsyon

{Dito mo inililista ang iba't ibang opsyong isinasaalang-alang mo. Manatili sa
mga katotohanan at iwasan ang mga opinyon, sakop ng susunod na seksyon ang
pagsusuri. Magsama ng maigsing paglalarawan, mga link sa kaugnay na dokumentasyon
o halimbawa.

Isama ang lahat ng makabuluhang alternatibong sinuri mo, kahit hindi sila ang
napili sa huli. Layunin nitong bigyan ang mga mambabasa ng malinaw at walang
kinikilingang pag-unawa sa bawat alternatibo bago ka sumabak sa pagsusuri.}

### {Pamagat ng Opsyon 1}

{Ilarawan ang opsyon, magbigay ng buod, ilista ang mga katotohanan, magbigay ng mga link, atbp.}

### {Pamagat ng Opsyon n}

...

## Pagsusuri ng mga Opsyon

{Dito mo kritikal na sinusuri ang bawat opsyong inilahad sa seksyong *Mga
Opsyon*. Para sa bawat opsyon, magbigay ng balanseng pagtingin sa mga bentahe,
disbentahe, at anumang iba pang kaugnay na konsiderasyon o trade-off. Maging
tiyak at, hangga't maaari, iugnay ang iyong mga punto pabalik sa mga *Driver*.

Isaalang-alang ang mga aspetong tulad ng:

* Gastos (development, operasyon, paglilisensya)

* Pagiging kumplikado (implementasyon, maintenance, learning curve)

* Mga panganib (teknikal, operasyonal, seguridad)

* Pagkakahanay sa mga prinsipyo ng arkitektura o umiiral na pamantayan

* Epekto sa performance, scalability, usability, maintainability,
    seguridad, atbp.

Magsama ng kasing dami ng pahayag na Pro/Con/Other kung kinakailangan.
}

### {Pagtatasa ng Opsyon 1}

* Pro: {Isang tiyak na bentahe o benepisyo ng opsyong ito.}

* Con: {Isang tiyak na disbentahe, panganib, o gastos na kaugnay ng opsyong ito.}

* Other: {Isang kaugnay na punto na hindi mahigpit na pro o con.}

### {Pagtatasa ng Opsyon n}

...

## Rekomendasyon

{Dito mo malinaw na sinasabi ang pinal na desisyon, at tahasang pinangangalanan
ang opsyong napili. Ipaliwanag nang detalyado **kung bakit** napili ang opsyong
ito. Dapat mong malinaw na ilahad kung paano pinakamahusay na tinutugunan ng
napiling opsyon ang mga *Driver* at natutugunan ang mga pangunahing requirement
o nalulutas ang nakasaad na problema.}

### Mga Kahihinatnan

{Opsyonal ang seksyong ito.}

{Ngayong may desisyon na, ano ang mga inaasahang kalalabasan at epekto,
positibo man o negatibo? Anong mga kilalang limitasyon, gastos, o panganib ang
tinatanggap sa paggawa ng desisyong ito? Paano maaapektuhan ng desisyong ito ang
iba't ibang stakeholder, ibang sistema, gawi sa development, mga pamamaraan sa
operasyon, o karanasan ng user?}

* Pro: {Isang tiyak na positibong kalalabasan o benepisyong inaasahan mula sa desisyong ito.}

* Con: {Isang tiyak na tinatanggap na disbentahe, gastos, o panganib na resulta ng
    desisyong ito. }

* Other: {Isang kahihinatnang hindi mahigpit na pro o con.}

### Kumpirmasyon

{Opsyonal ang seksyong ito.}

{Ilatag kung paano mabe-verify ang implementasyon ng desisyong ito at kung paano
titiyakin ang patuloy na pagsunod. Nakatutulong ito para ipakitang hindi lamang
teoretikal ang desisyon kundi aktibong isasagawa at susubaybayan.

Paano mo susuriin na tama ang pagkakapatupad ng desisyon? (hal., mga code
review, mga tiyak na test, mga demonstrasyon, peer review).

Paano mapapanatili ang pagsunod sa desisyong ito sa paglipas ng panahon? (hal.,
mga awtomatikong pagsusuri, pana-panahong audit, mga update sa mga alituntunin ng
koponan, pagsasanay).

Mayroon bang mga tiyak na sukatan o indikador na magpapakitang nakakamit ng
desisyon ang nilalayon nitong positibong kalalabasan? (hal., mga performance
benchmark, antas ng adopsyon, pagbaba ng mga tiyak na error, mga marka ng
feedback ng user).

Sino ang responsable sa pangangasiwa nito, at ano ang mangyayari kung hindi
susundin ang desisyon?}

## Karagdagang Impormasyon

{Opsyonal ang seksyong ito.}

{Gamitin ang seksyong ito para magbigay ng anumang karagdagang impormasyong
sumusuporta sa desisyon, nagdaragdag ng konteksto, o gumagabay sa mga susunod na
aksyon. Maaari ring lumitaw dito ang mga link sa ibang desisyon at resource.

Maaari mong maikling banggitin kung sino ang kasali sa proseso ng pagdedesisyon
at kung/paano narating ang konsensus. Maaari mo ring imungkahi ang takdang
panahon o mga tiyak na pangyayaring maaaring mag-udyok ng muling pagsusuri sa
desisyong ito sa hinaharap.}
