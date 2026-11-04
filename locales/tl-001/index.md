# Tala ng desisyon sa arkitektura (ADR)

Ang tala ng desisyon sa arkitektura (ADR) ay isang dokumentong nagtatala ng mahalagang desisyon sa arkitektura kasama ang konteksto at mga kahihinatnan nito.

> [!IMPORTANT]
> Gawin ang sarili mong due diligence sa mga resource na ito bago gamitin ang mga ito sa anumang kritikal na sistema.

Nilalaman:

- [Ano ang tala ng desisyon sa arkitektura?](#ano-ang-tala-ng-desisyon-sa-arkitektura)
- [Paano magsimulang gumamit ng mga ADR](#paano-magsimulang-gumamit-ng-mga-adr)
- [Paano magsimulang gumamit ng mga ADR gamit ang mga tool](#paano-magsimulang-gumamit-ng-mga-adr-gamit-ang-mga-tool)
- [Paano magsimulang gumamit ng mga ADR gamit ang git](#paano-magsimulang-gumamit-ng-mga-adr-gamit-ang-git)
- [Mga Claude Code skill para sa mga ADR](#mga-claude-code-skill-para-sa-mga-adr)
- [Kumbensyon sa pangalan ng file para sa mga ADR](#kumbensyon-sa-pangalan-ng-file-para-sa-mga-adr)
- [Mga mungkahi sa pagsulat ng mahusay na ADR](#mga-mungkahi-sa-pagsulat-ng-mahusay-na-adr)
- [Mga halimbawang template ng ADR](#mga-halimbawang-template-ng-adr)
- [Payo sa pagtutulungan para sa mga ADR](#payo-sa-pagtutulungan-para-sa-mga-adr)
- [Mga tanong sa pagtutulungan para sa mga ADR](#mga-tanong-sa-pagtutulungan-para-sa-mga-adr)
- [Mga konseptong susunod na hakbang para sa mga ADR](#mga-konseptong-susunod-na-hakbang-para-sa-mga-adr)
- [Mga architecture diagram, view, at viewpoint](#mga-architecture-diagram-view-at-viewpoint)
- [Mga fitness function para sa mga desisyon bilang code](#mga-fitness-function-para-sa-mga-desisyon-bilang-code)
- [Mga guardrail ng desisyon para sa mga pull request](#mga-guardrail-ng-desisyon-para-sa-mga-pull-request)
- [Karagdagang impormasyon](#karagdagang-impormasyon)

Mga template:

- [Template ng tala ng desisyon nina Jeff Tyree at Art Akerman](template/template-ng-tala-ng-desisyon-nina-jeff-tyree-at-art-akerman/)
- [Template ng tala ng desisyon ni Michael Nygard](template/template-ng-tala-ng-desisyon-ni-michael-nygard/)
- [Template ng tala ng desisyon ng EdgeX](template/template-ng-tala-ng-desisyon-ng-edgex/)
- [Template ng tala ng desisyon ng arc42](template/template-ng-tala-ng-desisyon-ng-arc42/)
- [Template ng tala ng desisyon para sa Alexandrian pattern](template/template-ng-tala-ng-desisyon-para-sa-alexandrian-pattern/)
- [Template ng tala ng desisyon para sa business case](template/template-ng-tala-ng-desisyon-para-sa-business-case/)
- [Template ng tala ng desisyon ng proyektong MADR](template/template-ng-tala-ng-desisyon-ng-proyektong-madr/)
- [Template ng tala ng desisyon gamit ang Planguage](template/template-ng-tala-ng-desisyon-gamit-ang-planguage/)
- [Template ng tala ng desisyon ni Paulo Merson](https://github.com/pmerson/ADR-template)
- [Template ng tala ng desisyon ni Olaf Zimmermann](https://medium.com/olzzio/y-statements-10eb07b5a177)
- [Template ng tala ng desisyon ni Gareth Morgan](template/template-ng-tala-ng-desisyon-ni-gareth-morgan/)
- [Template ng tala ng desisyon ng GIG Cymru NHS Wales](template/template-ng-tala-ng-desisyon-ng-gig-cymru-nhs-wales/)
- [Template ng tala ng desisyon para sa Important Technical Decisions (ITD) ni Ignacio Larrañaga](template/template-ng-tala-ng-desisyon-para-sa-mahahalagang-teknikal-na-desisyon/)

Mga halimbawa:

- [CSS framework](halimbawa/framework-ng-css/)
- [Configuration ng environment variable](halimbawa/configuration-ng-environment-variable/)
- [Mga metric, monitor, alerto](halimbawa/mga-metric-monitor-at-alerto/)
- [Microsoft Azure DevOps](halimbawa/microsoft-azure-devops/)
- [Monorepo kontra multirepo](halimbawa/monorepo-kontra-multirepo/)
- [Mga programming language](halimbawa/mga-programming-language/)
- [Imbakan ng mga lihim](halimbawa/imbakan-ng-mga-lihim/)
- [Format ng timestamp](halimbawa/format-ng-timestamp/)
- [Marami pang iba...](halimbawa/)

## Ano ang tala ng desisyon sa arkitektura?

Ang **tala ng desisyon sa arkitektura** (architecture decision record, ADR) ay isang dokumentong nagtatala ng isang mahalagang desisyon sa arkitektura kasama ang konteksto at mga kahihinatnan nito.

Ang **desisyon sa arkitektura** (architecture decision, AD) ay isang pagpili sa disenyo ng software na tumutugon sa isang mahalagang requirement.

Ang **log ng desisyon sa arkitektura** (architecture decision log, ADL) ay ang koleksyon ng lahat ng ADR na nilikha at pinapanatili para sa isang partikular na proyekto (o organisasyon).

Ang **architecturally-significant requirement** (ASR) ay isang requirement na may nasusukat na epekto sa arkitektura ng isang software system.

Ang lahat ng ito ay nasa paksa ng **architecture knowledge management** (AKM).

Layunin ng dokumentong ito na magbigay ng mabilis na pangkalahatang-ideya tungkol sa mga ADR, kung paano gumawa ng mga ito, at kung saan hahanap ng karagdagang impormasyon.

Mga pagpapaikli:

  * **AD**: architecture decision (desisyon sa arkitektura)

  * **ADL**: architecture decision log (log ng desisyon sa arkitektura)

  * **ADR**: architecture decision record (tala ng desisyon sa arkitektura)

  * **AKM**: architecture knowledge management

  * **ASR**: architecturally-significant requirement

## Paano magsimulang gumamit ng mga ADR

Para magsimulang gumamit ng mga ADR, makipag-usap sa iyong mga kasamahan sa koponan tungkol sa mga sumusunod na larangan.

Pagtukoy ng desisyon:

  * Gaano kaapurahan at gaano kahalaga ang AD?

  * Kailangan ba itong gawin ngayon, o maaari bang maghintay hanggang mas marami nang nalalaman?

  * Parehong makatutulong sa pagtukoy ng desisyon ang personal at sama-samang karanasan, pati ang mga kinikilalang pamamaraan at gawi sa disenyo.

  * Mainam na magpanatili ng decision todo list na kumukumpleto sa product todo list.

Paggawa ng desisyon:

  * Maraming pamamaraan sa paggawa ng desisyon, mga pangkalahatan man at mga tiyak sa software architecture, halimbawa, ang dialogue mapping.

  * Ang sama-samang paggawa ng desisyon ay isang aktibong paksa ng pananaliksik.

Pagpapatupad at pagpapatibay ng desisyon:

  * Ginagamit ang mga AD sa disenyo ng software; kaya kailangan itong ipaalam sa, at tanggapin ng, mga stakeholder ng sistemang nagpopondo, bumubuo, at nagpapatakbo nito.

  * Ang architecturally evident na istilo ng pag-code at ang mga code review na nakatuon sa mga alalahanin at desisyon sa arkitektura ay dalawang magkaugnay na gawi.

  * Kailangan ding (muling) isaalang-alang ang mga AD kapag nire-modernize ang isang software system sa software evolution.

Pagbabahagi ng desisyon (opsyonal):

  * Maraming AD ang umuulit sa iba't ibang proyekto.

  * Kaya, ang mga karanasan sa mga nakaraang desisyon, mabuti man o masama, ay maaaring maging mahahalagang magagamit-muling asset kapag gumagamit ng tahasang estratehiya sa knowledge management.

Dokumentasyon ng desisyon:

  * Maraming template at tool para sa pagtatala ng desisyon.

  * Tingnan ang mga agile community, hal. ang mga ADR ni M. Nygard.

  * Tingnan ang tradisyonal na software engineering at mga proseso sa disenyo ng arkitektura, hal. ang mga layout ng talahanayang iminungkahi ng IBM UMF at nina Tyree at Akerman ng CapitalOne.

Para sa karagdagang impormasyon:

  * Ang mga hakbang sa itaas ay hango sa entry ng Wikipedia tungkol sa [Architectural Decision](https://en.wikipedia.org/wiki/Architectural_decision)

## Paano magsimulang gumamit ng mga ADR gamit ang mga tool

- [MySpec](https://myspec.dev) — Awtomatikong specification at architectural decision platform na nagsasaayos ng project constitution, technical architecture, at mga ADR sa malinis na Markdown na inihahain sa pamamagitan ng MCP.

Maaari kang magsimulang gumamit ng mga ADR gamit ang mga tool sa anumang paraang gusto mo.

Halimbawa:

  * Kung gusto mong gumamit ng Google Drive at online na pag-edit, maaari kang gumawa ng Google Doc, o Google Sheet.

  * Kung gusto mong gumamit ng source code version control, tulad ng git, maaari kang gumawa ng file para sa bawat ADR.

  * Kung gusto mong gumamit ng mga project planning tool, tulad ng Atlassian Jira, maaari mong gamitin ang planning tracker ng tool.

  * Kung gusto mong gumamit ng mga wiki, tulad ng MediaWiki, maaari kang gumawa ng ADR wiki.

## Paano magsimulang gumamit ng mga ADR gamit ang git

Kung gusto mong gumamit ng git version control, narito kung paano kami nagsisimulang gumamit ng mga ADR gamit ang git para sa karaniwang software project na may source code.

Gumawa ng direktoryo para sa mga ADR file:

```sh
$ mkdir adr
```

Para sa bawat ADR, gumawa ng text file, tulad ng `choose-database.md`:

```sh
$ vi choose-database.md
```

Isulat sa ADR ang anumang gusto mo. Tingnan ang mga template sa repository na ito para sa mga ideya.

I-commit ang ADR sa iyong git repo.

## Mga Claude Code skill para sa mga ADR

Naglalaman ang repository na ito ng dalawang [Claude Code](https://claude.com/claude-code) skill sa ilalim ng [`skills/`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/), upang makapagsulat at makapagpanatili ng mga ADR ang isang AI coding agent sa paraang inirerekomenda ng proyektong ito:

- [`architecture-decision-record-skill`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/architecture-decision-record-skill/) — pangkalahatang gamit, para sa sinumang sumusulat ng ADR sa anumang proyekto. Tumutulong magpasya kung kailangan ng ADR ang isang desisyon, nagse-set up ng direktoryong `adr/` o `decisions/`, nagpapangalan sa file, pumipili ng template mula sa labing-isang kasamang balangkas, at sumusulat ng matitibay na seksyong Konteksto/Desisyon/Mga Kahihinatnan.

- [`architecture-decision-record-maintainer-skill`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/architecture-decision-record-maintainer-skill/) — para sa mga maintainer ng repository na ito partikular. Dinodokumento ang layout ng repo, ang kumbensyon sa pag-mirror ng README/locales, at ang eksaktong mga hakbang sa pagdaragdag ng bagong template, halimbawa, o link ng tool.

Para gumamit ng skill, kopyahin ang folder nito sa `.claude/skills/` sa ugat ng repository na ginagawaan mo (o sa `~/.claude/skills/` para magamit ito sa bawat proyekto), pagkatapos ay hilingin sa Claude Code na magsulat o magrepaso ng ADR.

## Kumbensyon sa pangalan ng file para sa mga ADR

Kung pinili mong gumawa ng mga ADR gamit ang karaniwang text file, maaaring gusto mong bumuo ng sarili mong kumbensyon sa pangalan ng file ng ADR.

Mas gusto naming gumamit ng kumbensyon sa pangalan ng file na may tiyak na format.

Mga halimbawa:

  * choose-database.md

  * format-timestamps.md

  * manage-passwords.md

  * handle-exceptions.md

Ang aming kumbensyon sa pangalan ng file:

  * May pariralang pandiwa sa anyong pautos sa kasalukuyang panahunan ang pangalan. Nakatutulong ito sa pagiging madaling basahin at tugma ito sa format ng aming commit message.

  * Gumagamit ang pangalan ng maliliit na titik at gitling (tulad ng repo na ito). Ito ay balanse ng pagiging madaling basahin at kakayahang magamit sa sistema.

  * Markdown ang extension. Maaari itong maging kapaki-pakinabang para sa madaling pag-format.

## Mga mungkahi sa pagsulat ng mahusay na ADR

Mga katangian ng mahusay na ADR:

* Rasyonal: Ipaliwanag ang mga dahilan sa paggawa ng partikular na AD. Maaari itong magsama ng konteksto (tingnan sa ibaba), mga pakinabang at disbentaha ng iba't ibang posibleng pagpipilian, paghahambing ng mga feature, talakayan ng gastos/benepisyo, at iba pa.

* Tiyak: Dapat tungkol sa isang AD lamang ang bawat ADR, hindi sa maraming AD.

* Mga timestamp: Tukuyin kung kailan isinulat ang bawat bagay sa ADR. Lalo itong mahalaga para sa mga aspetong maaaring magbago sa paglipas ng panahon, tulad ng mga gastos, iskedyul, pag-scale, at iba pang katulad.

* Hindi nababago: Huwag baguhin ang umiiral na impormasyon sa isang ADR. Sa halip, susugan ang ADR sa pamamagitan ng pagdaragdag ng bagong impormasyon, o palitan ang ADR sa pamamagitan ng paggawa ng bagong ADR.

Mga katangian ng mahusay na seksyong "Konteksto" sa isang ADR:

* Ipaliwanag ang sitwasyon ng iyong organisasyon at ang mga prayoridad sa negosyo.

* Isama ang rasyonal at mga konsiderasyong batay sa panlipunang pagkakabuo at mga kasanayan ng iyong mga koponan.

* Isama ang mga pakinabang at disbentaheng may kaugnayan, at ilarawan ang mga ito sa mga terminong umaayon sa iyong mga pangangailangan at layunin.

Mga katangian ng mahusay na seksyong "Mga Kahihinatnan" sa isang ADR:

* Ipaliwanag kung ano ang kasunod ng paggawa ng desisyon. Maaari itong magsama ng mga epekto, kalalabasan, output, follow-up, at iba pa.

* Isama ang impormasyon tungkol sa anumang kasunod na mga ADR. Medyo karaniwan na nagiging dahilan ang isang ADR para kailanganin ang mas maraming ADR, tulad ng kapag gumawa ang isang ADR ng malaking pangkalahatang pagpili, na lumilikha naman ng pangangailangan para sa mas maraming mas maliliit na desisyon.

* Isama ang anumang proseso ng after-action review. Karaniwan sa mga koponan na repasuhin ang bawat ADR pagkalipas ng isang buwan, para ihambing ang impormasyon sa ADR sa nangyari sa aktwal na pagsasanay, upang matuto at umunlad.

Maaaring pumalit ang bagong ADR sa naunang ADR:

* Kapag may ginawang AD na pumapalit o nagpapawalang-bisa sa naunang ADR, dapat gumawa ng bagong ADR

## Mga halimbawang template ng ADR

Mga halimbawang template ng ADR na nakolekta namin sa net:

- [Template ng ADR ni Michael Nygard](template/template-ng-tala-ng-desisyon-ni-michael-nygard/) (simple at popular)

- [Template ng ADR nina Jeff Tyree at Art Akerman](template/template-ng-tala-ng-desisyon-nina-jeff-tyree-at-art-akerman/) (mas sopistikado)

- [Template ng ADR para sa Alexandrian pattern](template/template-ng-tala-ng-desisyon-para-sa-alexandrian-pattern/) (simple na may mga detalye ng konteksto)

- [Template ng ADR para sa business case](template/template-ng-tala-ng-desisyon-para-sa-business-case/) (mas nakatuon sa MBA, na may mga gastos, SWOT, at mas maraming opinyon)

- [Template ng ADR ng proyektong Markdown Any Decision Records (MADR)](template/template-ng-tala-ng-desisyon-ng-proyektong-madr/) (parehong simple at detalyadong bersyon; ang huli ay nagbibigay-diin sa mga opsyon at sa kanilang mga pakinabang at disbentaha)

- [Template ng ADR gamit ang Planguage](template/template-ng-tala-ng-desisyon-gamit-ang-planguage/) (mas nakatuon sa quality assurance)

- [Template para sa Important Technical Decisions (ITD) ni Ignacio Larrañaga](template/template-ng-tala-ng-desisyon-para-sa-mahahalagang-teknikal-na-desisyon/) (payat at inuuna ang desisyon, na-optimize para sa mabilis na pagrepaso ng mga executive)

## Payo sa pagtutulungan para sa mga ADR

Kung isinasaalang-alang mong gumamit ng mga decision record kasama ang iyong koponan, narito ang ilang payong natutunan namin sa pakikipagtrabaho sa maraming koponan.

May pagkakataon kang pangunahan ang iyong mga kasamahan sa koponan, sa pamamagitan ng sama-samang pag-uusap tungkol sa "bakit", sa halip na ipag-utos ang "ano". Halimbawa, ang mga decision record ay paraan para mas matalinong mag-isip at mas mahusay na makipag-ugnayan ang mga koponan; walang halaga ang mga decision record kung ang mga ito ay sapilitang papeles lamang na ginagawa pagkatapos ng katotohanan.

Mas gusto ng ilang koponan ang pangalang "decisions" kaysa sa pagpapaikli na "ADR". Kapag gumagamit ang ilang koponan ng pangalan ng direktoryo na "decisions", para bang may bumubukas na ilaw sa isip, at nagsisimulang maglagay ang koponan ng mas maraming impormasyon sa direktoryo, tulad ng mga desisyon sa vendor, mga desisyon sa pagpaplano, mga desisyon sa pag-iiskedyul, atbp. Magagamit ng lahat ng ganitong uri ng impormasyon ang parehong template. Hinuhulaan namin na mas mabilis matuto ang mga tao sa mga salita ("decisions") kaysa sa mga pagpapaikli ("ADR"), at mas ganado ang mga tao na magsulat ng mga work-in-progress na dokumento kapag inalis ang salitang "record", at ayaw din ng ilang developer at ilang manager ang salitang "architecture".

Sa teorya, mainam ang hindi nababago. Sa praktika, mas gumana ang pagiging nababago para sa aming mga koponan. Isinisingit namin ang bagong impormasyon sa umiiral na ADR, na may date stamp, at tala na dumating ang impormasyon pagkatapos ng desisyon. Humahantong ang ganitong pamamaraan sa isang "buháy na dokumento" na maaari naming i-update nang lahat. Karaniwang mga pag-update ay kapag nakakuha kami ng impormasyon salamat sa mga bagong kasamahan, o bagong alok, o aktwal na resulta ng paggamit namin, o mga pagbabago ng third party pagkatapos ng katotohanan tulad ng mga kakayahan ng vendor, mga plano sa presyo, mga kasunduan sa lisensya, atbp.

## Mga tanong sa pagtutulungan para sa mga ADR

### Sino ang maaaring gumawa ng ADR?

Isaalang-alang ang mga larangan tulad ng mga partikular na tao, o partikular na tungkulin, o partikular na koponan, o partikular na departamento; isaalang-alang din kung may mga tao, o tungkulin, o koponan, o departamentong maaaring mag-atas ng ADR, ibig sabihin ay humihiling sila ng isang ADR na isusulat ng ibang tao. 

Halimbawang sagot: Sinumang tao sa aming organisasyon na nakabasa ng README page ng architecture decision record ay maaaring magmungkahi ng ADR, ibig sabihin ay maaari niyang simulang isulat ito, at ibahagi ito sa koponan.

### Ano ang nagbibigay-katwiran sa paggawa ng ADR?

Isaalang-alang ang mga larangan tulad ng mga paraan ng pagtatrabaho ng koponan ng iyong organisasyon, estruktura ng iyong software system, koordinasyon sa pagitan ng mga koponan, pangmatagalang maintainability, mga panlabas na interface, kung sino ang gusto mong makinabang, at mga katulad nito. 

Halimbawang sagot: Gusto naming gumawa ng ADR kapag gusto naming maunawaan ng mga susunod na developer ang "bakit" ng ginagawa namin.

### Ano ang nagbibigay-katwiran sa hindi paggawa ng ADR?

Isaalang-alang ang mga larangan tulad ng mga desisyong hindi tungkol sa arkitektura, o napakaliit tulad ng minimal ang panganib o self-contained o isang developer lang ang sangkot, o ganap nang sakop sa ibang lugar tulad ng mga pamantayan o patakaran o dokumentasyon, o pansamantala tulad ng mga workaround o proof of concept o eksperimento. 

Halimbawang sagot: Gusto naming laktawan ang ADR kapag limitado ang saklaw, oras, panganib, at gastos ng desisyon, o sakop na ito sa ibang lugar.

### Ano ang lifecycle ng isang ADR?

Isaalang-alang ang mga larangan tulad ng proseso ng paglikha, proseso ng pananaliksik, proseso ng pagdedesisyon, proseso ng implementasyon, at proseso ng pagreretiro. Isaalang-alang kung paano susubaybayan ang lifecycle ng ADR sa paglipas ng panahon, tulad ng kung paano ililipat ang ADR mula sa isang estado patungo sa susunod na estado, at kung paano ito ipapaalam sa mga stakeholder. 

Halimbawang sagot: Gusto naming magkaroon ang isang ADR ng limang yugto ng lifecycle: Initiating → Researching → Evaluating → Implementing → Maintaining → Sunsetting.

### Ano ang mga pamantayan para sa mga hakbang ng lifecycle ng isang ADR?

Isaalang-alang ang mga larangan tulad ng mga pamantayan sa pagtanggap para sa isang ADR, ibig sabihin, paano mo malalamang sapat na ito para umusad mula sa isang hakbang ng lifecycle patungo sa susunod? Malinaw ba ang pagkakasabi ng problema? Naisaalang-alang ba ang mga alternatibo? Sapat bang nauunawaan at nadokumento ang mga trade-off?
Nasa lugar na ba ang lahat ng kaugnay na konteksto? Kasali na ba ang lahat ng kaugnay na stakeholder? Naisama na ba ang lahat ng feedback? 

Halimbawang sagot: Gusto naming ibotohan ng mga stakeholder ang isang ADR kapag ang aktibong koponan ay 1) natapos na ang kanilang pananaliksik, 2) natapos na ang kanilang pagsusuri, 3) nailathala na ang panukalang ADR sa mga stakeholder na may kahilingan para sa mga komento at timebox na isang linggo, 4) naisama at natugunan na ang lahat ng komento ng mga stakeholder.

### Anong mga tungkulin at responsibilidad ang nakikipag-ugnayan sa isang ADR?

Isaalang-alang ang mga tungkulin tulad ng proposer, researcher, evaluator, reviewer, approver, maintainer, at mga katulad nito. Isaalang-alang ang mga responsibilidad tulad ng komunikasyon sa mga stakeholder, pagtiyak na natutugunan ang mga inaasahan, pagbabahagi sa website o intranet, at pana-panahong pagrepaso sa gawain lalo na kapag may nangyayaring kaugnay na pagbabago.

Halimbawang sagot: Gusto naming laging may pangunahing contact person, pangalawang contact person, at accountable na koponan ang bawat ADR; sila ang responsable sa komunikasyon, publikasyon, maintenance, pana-panahong pagrepaso kahit minsan kada taon, at sa kalaunan ay pagreretiro kung kinakailangan.

### Paano nakikipag-ugnayan ang governance sa isang ADR?

Isaalang-alang ang mga larangan tulad ng mga paraan ng pagtatrabaho ng iyong organisasyon, anumang espesyal na pangangailangan sa compliance tulad ng sa mga aspetong legal o human resource, kung paano mo gustong pangasiwaan ang consensus kontra conflict kontra escalation. May mga larangan ba o tao o koponan na maaaring magkaroon ng mas malaking impluwensya kaysa sa iba tungkol sa isang ADR, tulad ng kakayahang aprubahan ito, o ibotohan ito, o i-veto ito?

Halimbawang sagot: Ang governance ng isang ADR ay sa sumusunod na pagkakasunod-sunod ng priyoridad: ang CEO, ang CTO, ang CLO, ang koponang nagpapatupad ng ADR, ang mga eksperto sa koponan na pinakamaalam tungkol sa AD. Walang ibang may governance maliban kung inilarawan sa ADR. 

### Anong mga prinsipyo ang nakikipag-ugnayan sa isang ADR?

Isaalang-alang ang mga larangan tulad ng mga paraan ng pagtatrabaho ng iyong organisasyon na kinabibilangan ng mabilis kontra mabagal na pagkilos, para sa consensus kontra conflict sa desisyon, at para sa mga kagustuhan sa panganib kontra mga kagustuhan sa kaligtasan, pampublikong talakayan kontra pribadong talakayan, at mga katulad nito.

Halimbawang sagot: Ginagamit namin ang mga prinsipyo sa pamumuno na bias for action, disagree-and-commit, sapat na ang 70% na pagtatantiya para sa madaling baligtarin at madaling ihiwalay na mga desisyon, at pampublikong paraan ng pagtatrabaho maliban sa kumpidensyal na impormasyon ayon sa paglalarawan sa kasunduan sa pagiging kumpidensyal ng aming organisasyon.

## Mga konseptong susunod na hakbang para sa mga ADR

Sinasagot ng [Arc42](https://arc42.org/) ang dalawang tanong sa praktikal na paraan at maaaring iangkop sa iyong mga partikular na pangangailangan. Ano ang dapat mong idokumento/ipaalam tungkol sa iyong arkitektura? Paano mo ito dapat idokumento/ipaalam? Kasama sa Arc42 ang mga architecture decision record at gabay tungkol sa mga layunin, limitasyon, konteksto, kalidad, panganib, at iba pa.

Ang [C4 model](https://c4model.com/) ay madaling matutunan at developer-friendly na pamamaraan sa pagdidiagram ng software architecture. Ang C4 ay hanay ng mga hierarchical na diagram para sa konteksto, container, component, code, kasama ang mga sumusuportang diagram para sa system landscape, dynamic, at deployment.

## Mga architecture diagram, view, at viewpoint

Ang architecture diagram ay tinatawag na "architecture view".

Ang "architecture view" ay isang instance ng "architecture viewpoint".

Ang "architecture viewpoint" ay may partikular na audience na may partikular na mga alalahanin sa isip.

Mga halimbawa ng architecture viewpoint, mga halimbawa ng view, at mga halimbawa ng diagram:

- Mga Business Capability

- Mga Mataas na Antas na Proseso ng Negosyo

- [Mga Value Stream](https://en.wikipedia.org/wiki/Value_stream)

- Mga Function ng Software na imina-map sa mga application component

- [C4 Model](https://en.wikipedia.org/wiki/C4_model) Context Diagram (TO-BE / AS-IS)

- [C4 Model](https://en.wikipedia.org/wiki/C4_model) Container Diagram (TO-BE / AS-IS)

- [Entity-relationship Diagram](https://en.wikipedia.org/w/index.php?title=Entity_relationship_diagram) (ERD) para i-map ang mga data entity sa mga application component

- [Mga Sequence Diagram](https://en.wikipedia.org/wiki/Sequence_diagram) para ilarawan ang mga functional flow sa loob ng mga sistema at para sa mga integrasyon

- Mga diagram ng [Business Process Model and Notation](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN) para ilarawan ang mga data flow sa mga application component

- Mga diagram ng [Business Process Model and Notation](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN) para ilarawan ang mga proseso ng negosyo / mga senaryo ng user

- Mga diagram ng [Identity and Access Management](https://en.wikipedia.org/wiki/Identity_and_access_management) (IAM)

- Mga diagram ng [Role-Based Access Control](https://en.wikipedia.org/wiki/Role-based_access_control) (RBAC) na may mga tungkulin bawat application component

- Mga diagram ng [Attribute-Based Access Control](https://en.wikipedia.org/wiki/Attribute-based_access_control) (ABAC) na may mga attribute bawat application component

- Mga diagram ng privacy

Mga kaugnay na diagram:

- Ang Use Case Diagram ay nagpapakita ng mga use case sa pamunuan/mga customer, na nauuna sa mga requirement, na nauuna sa software architecture.

- Ang Deployment Diagram ay nagpapakita ng pisikal na hardware/mga computer kung saan idine-deploy ang mga software component.
- Ang Data Flow Diagram ay nagpapakita kung paano gumagalaw ang data sa sistema at binabago.
- Ang Sequence Diagram ay ginagamit para ipakita kung paano gumagana ang mga protocol tulad ng HTTP sa isang time axis.

- Ang Activity Diagram ay naglalarawan ng workflow ng mga aktibidad na isinasagawa ng isang software system, tulad ng AI ng NPC.

## Mga fitness function para sa mga desisyon bilang code

Ang mga fitness function ay mga layunin at awtomatikong pagsusuri, na isinulat gamit ang programming code, na nagpapatunay na napapanatili ang mga desisyon.

- Ginagawang masusubok at matitiyak ng mga fitness function ang mga desisyon.

- Malaki ang naitutulong ng mga fitness function para sa mga desisyon sa quality assurance, mga proseso ng regulasyon, at mga layunin sa governance.

### Paano nauugnay ang mga fitness function sa mga desisyon

Dinodokumento ng decision record ang desisyon, habang tinitiyak ng fitness function ang desisyon.

- Halimbawang desisyon: Gumagamit kami ng event sourcing para sa mga requirement sa audit.

- Halimbawang fitness function: Ginagamit namin ang continuous integration server para subukin na dapat lumikha ng mga event ang lahat ng pagbabago ng estado.

### Bakit nakatutulong ang mga fitness function sa mga desisyon

Mga layuning sukatan: Pumapasa o bumabagsak ang mga fitness function, kaya nakikita at malinaw ang gawain.

Tuloy-tuloy na paggamit: Ang mga fitness function ang iyong mga buháy na tuntunin, pinapatakbo sa bawat commit at build.

Kumpiyansang mag-refactor: Awtomatikong nahuhuli ng mga fitness function ang mga pagkakamali sa tuntunin ng desisyon.

Nasusukat na governance: Tinitiyak ng mga fitness function ang mga pamantayan nang hindi lumilikha ng mga bottleneck.

### Magagamit ba ng mga fitness function ang AI?

Magagamit ng mga fitness function ang mga AI LLM para sa mga desisyon sa pamamagitan ng pagtatanong tungkol sa iyong gawain,
tulad ng iyong mga plano, code, schema, API, at iba pa:

```txt
IMPORTANT: Prefer retrieval-led reasoning over pre-training-led reasoning.
IMPORTANT: Turn on extended thinking. Turn on expert advice. Turn on search.

This is a fitness function to evaluate if our work is
using all our decisions, and is correct and accurate.

- Our decisions are here: {url}
- Our work to evaluate is here: {url}

Explain any errors, problems, gaps, weaknesses. Be direct. Be decisive.
```

### Architecture unit testing

[ArchUnit](https://www.archunit.org/): suriin ang mga tuntunin sa arkitektura ng Java code gamit ang anumang payak na Java unit test framework.

[ArchUnitTS](https://github.com/LukasNiessen/ArchUnitTS): suriin ang mga tuntunin sa arkitektura ng TypeScript code at JavaScript code gamit ang Jest, Vitest, Jasmine, atbp.

## Mga guardrail ng desisyon para sa mga pull request

Awtomatikong inilalabas ng [Decision Guardian](https://github.com/DecispherHQ/decision-guardian)
ang tamang mga decision record sa tamang sandali — kapag aktibong binabago ng
developer ang code na sakop ng mga desisyong iyon. Sa halip na umasa na
babasahin ng mga developer ang isang docs folder bago mag-merge, lumilitaw
nang direkta sa pull request ang kaugnay na konteksto.

Gumagana ito para sa anumang uri ng decision record: mga desisyon sa arkitektura,
mga desisyon sa data, mga desisyon sa compliance, mga desisyong klinikal at medikal,
mga desisyon sa seguridad, at iba pa.

Gumagana sa anumang CI system (GitLab, Jenkins, CircleCI) at bilang pre-commit hook.
Open source. Lisensya ng MIT.

Ang [ADR Guard](https://github.com/chohan-sarmad-ali/delivery-gates) ay isang GitHub
Action na pinabibigo ang pull request kapag nagbago ang mga binabantayang code path nang walang
architecture decision record na idinagdag o na-update. Tahasan ang mga waiver: isang
linyang `ADR-Exempt:` na may dahilan ang nagpapasa sa gate at isinusulat sa buod
ng job. Hindi nakatali sa template, walang dependency. Open source. Lisensya ng MIT.

## Karagdagang impormasyon

Panimula:

- [Architectural decision (wikipedia.org)](https://wikipedia.org/wiki/Architectural_decision)

- [Architecturally significant requirements (wikipedia.org)](https://wikipedia.org/wiki/Architecturally_significant_requirements)

Mga template:

- [Documenting architecture decisions - Michael Nygard (thinkrelevance.com)](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)

- [Markdown Architectural Decision Records (adr.github.io)](https://adr.github.io/madr/)

- [Template for documenting architecture alternatives and decisions (stackoverflow.com)](http://stackoverflow.com/questions/7104735/template-for-documenting-architecture-alternatives-and-decisions)

Malalimang babasahin:

- [ADMentor XML project (github.com)](https://github.com/IFS-HSR/ADMentor)

- [Architectural Decision Guidance across Projects: Problem Space Modeling, Decision Backlog Management and Cloud Computing Knowledge (ifs.hsr.ch)](https://www.ifs.hsr.ch/fileadmin/user_upload/customers/ifs.hsr.ch/Home/projekte/ADMentor-WICSA2015ubmissionv11nc.pdf)

- [The Decision View's Role in Software Architecture Practice (computer.org)](https://www.computer.org/csdl/mags/so/2009/02/mso2009020036-abs.html)

- [Documenting Software Architectures: Views and Beyond (resources.sei.cmu.edu)](http://resources.sei.cmu.edu/library/asset-view.cfm?assetID=30386)

- [Architecture Decisions: Demystifying Architecture (utdallas.edu)](https://www.utdallas.edu/~chung/SA/zz-Impreso-architecture_decisions-tyree-05.pdf)

- [ThoughtWorks Technology Radar: Lightweight Architecture Decision Records (thoughtworks.com)](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)

- [A Skeptic’s Guide to Software Architecture Decisions (infoq.com)](https://www.infoq.com/articles/architecture-skeptics-guide/)

- [Architectural Decisions — The Making Of](https://ozimmer.ch/practices/2020/04/27/ArchitectureDecisionMaking.html)

- [Architectural Retrospectives: the Key to Getting Better at Architecting](https://www.infoq.com/articles/architectural-retrospectives/)

- [Software Architecture Monday with Mark Richards](https://developertoarchitect.com/lessons/) — libreng buwanang aralin sa software architecture

- [Solution Architecture Decisions - By Gareth Morgan](https://www.linkedin.com/pulse/solution-architecture-decisions-gareth-morgan-0r5xe/)

- ["Keep the Why: Code Becomes Legacy When Nobody Remembers Why"](https://blog.technopathy.club/keep-the-why-code-becomes-legacy-when-nobody-remembers-why)

Mga tool:

- [Command-line tools for working with Architecture Decision Records](https://github.com/npryce/adr-tools)

- [Command line tools with python - by Victor Sluiter](https://bitbucket.org/tinkerer_/adr-tools-python/src/master/)

- [Architectural Design Decision Support Framework (ADvISE)](https://swa.univie.ac.at/Software_Architecture/research-projects/architectural-design-decision-support-framework-advise/)

- [Decision Guardian](https://github.com/DecispherHQ/decision-guardian)

- [Mneme HQ - ADR enforcement for AI coding agents](https://github.com/TheoV823/mneme)

- [Keep the Why - a repo-native convention and agent skill that continuously captures, or retrospectively recovers, the reasoning behind a codebase](https://github.com/oliver-zehentleitner/keep-the-why)

- [ADR Guard - GitHub Action that fails a pull request changing watched code without an architecture decision record](https://github.com/chohan-sarmad-ali/delivery-gates)

- [kgai - append-only decision log for AI coding agents, a machine-readable companion to ADR files](https://github.com/kgaidev/kgai)

Gabay na Tiyak sa Kumpanya:

- [Amazon: AWS Prescriptive Guidance: ADR Process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)

- [GitHub: ADR GitHub organization](https://adr.github.io/)

- [RedHat: Why you should use ADRs](https://www.redhat.com/architect/architecture-decision-records)

Mga halimbawa:

- [Repository of Architecture Decision Records made for the Arachne Framework](https://github.com/arachne-framework/architecture)

Mga video:

- [An introduction to arc42 with Savvas Kleanthous](https://www.youtube.com/watch?v=V5clR8c6D7o)

- [The C4 model for visualising software architecture - by Simon Brown](https://www.youtube.com/watch?v=KvoBrUd1-5E)

Mga podcast:

- [Software Architecture Bookclub Podcast](https://www.developertoarchitect.com/bookclub-podcast.html)

Mga aklat:

- [Software Architecture Metrics: Case Studies to Improve the Quality of Your Architecture - by Christian Ciceri, Dave Farley, Neal Ford, Andrew Harmel-Law, Michael Keeling and Carola Lilienthal](https://www.amazon.com/Software-Architecture-Metrics-Christian-Ciceri-ebook/dp/B0B1NZ8Z5V)

- [Software Systems Architecture: Working With Stakeholders Using Viewpoints and Perspectives - by Nick Rozanski and Eoin Woods](https://www.amazon.com/Software-Systems-Architecture-Stakeholders-Perspectives/dp/032171833X)

- [Software Architecture in Practice (SEI Series in Software Engineering)](https://www.amazon.com/Software-Architecture-Practice-SEI-Engineering-ebook/dp/B094CPJ96B)

- [Documenting Software Architectures: Views and Beyond (SEI Series in Software Engineering)](https://www.amazon.com/Documenting-Software-Architectures-Beyond-Engineering-ebook/dp/B0046XS3RO)

- [The Software Architect Elevator: Redefining the Architect's Role in the Digital Enterprise](https://www.amazon.com/Software-Architect-Elevator-Redefining-Architects-ebook/dp/B086WQ9XL1)

- [Fundamentals of Software Architecture: An Engineering Approach - by Mark Richards and Neal Ford](https://www.amazon.com/Fundamentals-Software-Architecture-Engineering-Approach-ebook/dp/B0849MPK73)

- [Building Evolutionary Architectures - by Neal Ford, Rebecca Parsons, Patrick Kua, Pramod Sadalage](https://www.amazon.com/Building-Evolutionary-Architectures-Neal-Ford-ebook/dp/B0BN4T1P27?crid=37FA31IFLAS0Z)

- [Foundations of Decision Analysis by Ronald Howard and Ali Abbas](https://www.amazon.com/Foundations-Decision-Analysis-Ronald-Howard-ebook/dp/B00SZECJTI?crid=14BK5SDP76UN6)

- [Head First Software Architecture - by Raju Gandhi, Neal Ford and Mark Richards](https://www.amazon.com/Head-First-Software-Architecture-Architectural-ebook/dp/B0CW1JMNF2)

- [Communication Patterns: A Guide for Developers and Architects - by Jacqui Read](https://www.amazon.com/Communication-Patterns-Guide-Developers-Architects/dp/1098140540)

Tingnan din:

- REMAP (Representation and Maintenance of Process Knowledge)

- DRL (Decision Representation Language)

- IBIS (Issue-Based Information System)

- QOC (Questions, Options, and Criteria)

- IBM’s e-Business Reference Architecture Framework

- [Decision Reasoning Format (DRF)](https://github.com/reasoning-formats/reasoning-formats) — isang vendor-neutral at machine-readable na YAML/JSON format para kumatawan sa mga desisyon na may tahasang pangangatwiran, palagay, cognitive state, at trade-off. Kinukumpleto ang mga ADR sa pamamagitan ng pagdaragdag ng estrukturado at mapapatunayang pangangatwiran sa dokumentasyon ng desisyon.
