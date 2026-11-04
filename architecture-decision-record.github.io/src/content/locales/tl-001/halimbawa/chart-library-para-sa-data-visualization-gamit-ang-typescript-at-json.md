# Architecture Decision Record: chart library toolkit para sa data visualization gamit ang TypeScript at JSON

<!--

ChatGPT prompt:

Long software architecture decision record 
chart library toolkit for data visualization using TypeScript and JSON

Evaluate Charts: Apache ECharts, Chart.js, ApexCharts, AG Charts, Highcharts, Carbon Charts, Layer Cake, D3.

Primary need: advanced interactive charts, especially for financial data, scientific data, and government data.

High importance: 1. Agile development because this is for a startup. 2. Doughnut Chart, Radar Chart, Clustering Process
Chart, Area Chart with Time Axis, Candlestick Chart, Nightingale Chart, Geo SVG Map. 3. Free open source.

Low importance: 1. Runtime speed. 2. Scalability. 3. Backwards compatibility.

-->

**Pangunahing Layunin:**  
Pumili ng advanced na charting toolkit para sa paglikha ng mga interactive na visualization, na nakatuon sa financial data, scientific data, at government data gamit ang TypeScript at JSON. Dapat magbigay ang library ng matitibay na feature, flexibility, at open-source. 

### Konteksto at mga Requirement:

1. **Agile na Pagbuo (Mataas na Priyoridad)**: Bilang isang startup, mahalaga ang mabilis na pag-iterate, prototyping, at flexibility sa pagbuo. Dapat payagan ng chart library ang mabilis na mga siklo ng pagbuo.
   
2. **Mga Uri ng Chart (Mataas na Priyoridad)**:
   - **Doughnut Chart**
   - **Radar Chart**
   - **Clustering Process Chart**
   - **Area Chart with Time Axis**
   - **Candlestick Chart**
   - **Nightingale Chart**
   - **Geo SVG Map**
   
   Partikular na mahalaga ang mga uri ng chart na ito para sa pag-visualize ng masalimuot na dataset, tulad ng mga trend sa pananalapi, mga siyentipikong sukatan, at heograpikal na impormasyon.

3. **Libre at Open Source (Mataas na Priyoridad)**: Dapat open-source ang toolkit upang maiwasan ang gastos sa paglilisensya, magbigay ng transparency, at mag-alok ng flexibility para sa customization.

4. **Mga Pamantayang Mababa ang Kahalagahan**:
   - **Bilis sa Runtime**: Bagama't mahalaga ang performance, hindi ito pangunahing priyoridad sa desisyong ito.
   - **Scalability**: Bagama't karaniwang mahalaga ang scalability, ang agarang pangangailangan ay bumuo ng MVP na maaaring lumago sa paglipas ng panahon. Maaaring tugunan sa kalaunan ang mga alalahanin sa scalability.
   - **Backwards Compatibility**: Hindi pangunahing alalahanin para sa unang pagbuo, basta makabago at aktibong pinapanatili ang library.

### Mga Library na Sinuri:

1. **Apache ECharts**
2. **Chart.js**
3. **ApexCharts**
4. **AG Charts**
5. **Highcharts**
6. **Carbon Charts**
7. **Layer Cake**
8. **D3.js**

---

### 1. **Apache ECharts**

**Pangkalahatang-ideya**:  
Ang Apache ECharts ay isang makapangyarihan at flexible na charting library para sa mga interactive at customizable na visualization. Nagbibigay ito ng suporta sa malawak na uri ng chart at partikular na malakas sa masalimuot at dynamic na visualization.

**Mga Lakas**:
- **Advanced na Interactivity**: Mahusay ang ECharts sa pagbibigay ng mga interactive na chart, na nag-aalok ng mga feature tulad ng zooming, panning, at dynamic na pag-update ng data.
- **Doughnut, Radar, Candlestick, Geo SVG Maps**: Sinusuportahan ng ECharts ang marami sa mga kinakailangang uri ng chart, kasama ang doughnut, radar, candlestick, at mga visualization ng heograpikal na mapa.
- **Libre at Open Source**: Ang ECharts ay open-source na library, na akma sa mahigpit na badyet ng isang startup at nagbibigay ng kalayaang baguhin ang code.
- **Flexibility at Extensibility**: Lubhang customizable, na may malawak na suporta para sa mga animation, custom na visualization, at advanced na pamamaraan sa charting.
  
**Mga Kahinaan**:
- **Learning Curve**: Bagama't makapangyarihan, maaaring mas matarik ang learning curve ng ECharts dahil sa flexibility at malawak na API nito.
- **Pagiging Masalimuot ng Dokumentasyon**: Komprehensibo ang dokumentasyon ngunit maaaring nakakalula para sa mga developer na nagsisimula pa lang gumamit nito.

**Hatol**:  
Lubhang angkop ang ECharts sa proyekto dahil sa suporta nito sa mga interactive na chart, kasama ang lahat ng kinakailangang uri tulad ng candlestick chart, radar chart, at geo map. Ang open-source na kalikasan nito ay umaayon sa pangangailangan ng proyekto para sa flexibility at pagiging matipid.

---

### 2. **Chart.js**

**Pangkalahatang-ideya**:  
Ang Chart.js ay isang simple at madaling gamiting charting library para sa pagbuo ng mga karaniwang uri ng chart. Kilala ito sa pagiging simple at kadalian ng integrasyon.

**Mga Lakas**:
- **Dali ng Paggamit**: Napakasimpleng i-set up at gamitin ang Chart.js, na may minimal na learning curve.
- **Open Source**: Libre at open-source ang Chart.js, na kritikal para mabawasan ang gastos.
- **Mga Karaniwang Uri ng Chart**: Sinusuportahan nito ang mga pangunahing chart tulad ng doughnut, area, radar, at line chart, na sumasaklaw sa karamihan ng pangunahing pangangailangan.

**Mga Kahinaan**:
- **Limitadong Advanced na Chart**: Hindi native na sinusuportahan ng Chart.js ang mga masalimuot na uri ng chart tulad ng candlestick chart, geo SVG map, o clustering process chart. Bagama't maaaring idagdag ang mga feature na ito sa pamamagitan ng mga plugin o customization, hindi ito kasing-diretso ng sa ibang library.
- **Interactivity**: Bagama't sinusuportahan ng Chart.js ang pangunahing interactivity (hal., mga tooltip at hover effect), hindi ito nag-aalok ng kasing-advanced na mga feature gaya ng ECharts o D3.js.

**Hatol**:  
Magaling ang Chart.js para sa simple at mabilisang proyekto, ngunit dahil sa kawalan nito ng suporta sa masalimuot na uri ng chart, hindi ito angkop para sa data-heavy na application na may advanced na pangangailangan tulad ng candlestick chart at geo map. Magandang pagpipilian ito para sa prototyping, ngunit para sa mga kinakailangang uri ng chart, inirerekomenda ang mas advanced na mga tool.

---

### 3. **ApexCharts**

**Pangkalahatang-ideya**:  
Ang ApexCharts ay isang makabagong charting library na nagbibigay ng iba't ibang uri ng chart at nakatuon sa mga interactive na visualization na may madaling gamiting API.

**Mga Lakas**:
- **Mga Interactive na Feature**: Nag-aalok ang ApexCharts ng mga interactive na chart na may mga tooltip, zooming, panning, at mga update.
- **Suporta para sa mga Financial at Scientific na Chart**: Sinusuportahan nito ang malawak na uri ng chart, kasama ang candlestick chart, radar chart, at area chart.
- **Dali ng Paggamit**: May diretsong API ito at simpleng i-integrate sa isang proyekto.
- **Libre at Open Source**: Nag-aalok ang ApexCharts ng libreng open-source na bersyon na angkop sa maraming gamit.
  
**Mga Kahinaan**:
- **Masalimuot na Customization**: Bagama't nagbibigay ito ng maraming feature, hindi kasing-flexible ng ECharts o D3.js ang mga opsyon sa customization para sa lubhang masalimuot o custom na pangangailangan sa charting.
- **Mga Geo Map**: Hindi native na sinusuportahan ng ApexCharts ang mga geo map o clustering process chart, na kinakailangan para sa proyektong ito.

**Hatol**:  
Malakas na kandidato ang ApexCharts dahil sa dali ng paggamit at interactivity nito, ngunit kulang ito sa ilang advanced na uri ng chart, partikular ang pangangailangan sa mga geo map at clustering chart. Magandang opsyon ito para sa mas simpleng mga chart ngunit kulang sa ilang kinakailangang feature.

---

### 4. **AG Charts**

**Pangkalahatang-ideya**:  
Ang AG Charts ay isang charting library na antas-komersyal na dinisenyo para sa performance at katumpakan. Lubhang angkop ito para sa paglikha ng mga dashboard sa pananalapi, siyensya, at negosyo.

**Mga Lakas**:
- **Mga Advanced na Uri ng Chart**: Sinusuportahan ng AG Charts ang maraming advanced na uri ng chart, kasama ang candlestick chart, area chart, radar chart, at iba pa. Nag-aalok din ito ng malalim na integrasyon sa iba pang produkto ng AG-Grid.
- **Mataas na Performance**: Nag-aalok ito ng napakahusay na performance, lalo na sa paghawak ng malalaking dataset.
- **Interactivity**: Sinusuportahan ng AG Charts ang iba't ibang interactive na feature tulad ng zooming, mga tooltip, at dynamic na pag-update.

**Mga Kahinaan**:
- **Hindi Ganap na Libre**: Bagama't nag-aalok ang AG Charts ng libreng bersyon, bayad ang bersyong may kumpletong feature, na maaaring maging hadlang para sa mga startup na naghahangad na mabawasan ang gastos.
- **Pagiging Masalimuot**: Bagama't mayaman sa feature ang library, maaaring sobra ito para sa mas simpleng proyekto at maaaring mangailangan ng mas maraming setup at configuration kumpara sa ibang opsyon.

**Hatol**:  
Makapangyarihan at mayaman sa feature ang AG Charts ngunit maaaring hindi ito ang pinakaangkop dahil sa komersyal na kalikasan at istruktura ng gastos nito. Nakasalalay ang kaangkupan nito sa kung kakayanin ng badyet ang mga bayad na bersyon o kung mas gusto ang mga open-source na alternatibo.

---

### 5. **Highcharts**

**Pangkalahatang-ideya**:  
Ang Highcharts ay isang tanyag na charting library na kilala sa malawak nitong hanay ng mga uri ng chart at makapangyarihang opsyon sa customization.

**Mga Lakas**:
- **Komprehensibong Uri ng Chart**: Sinusuportahan ng Highcharts ang malawak na uri ng chart, kasama ang candlestick, radar, area, at geo map.
- **Interactive at Dynamic**: Nagbibigay ang Highcharts ng mayayamang interactive na feature, kasama ang drill-down, zooming, at panning.
- **Dali ng Paggamit**: May user-friendly na API at magandang dokumentasyon ito, kaya madaling magsimula.

**Mga Kahinaan**:
- **Komersyal na Lisensya**: Bagama't nag-aalok ang Highcharts ng libreng bersyon para sa di-komersyal na gamit, mahal ang komersyal na lisensya, na maaaring maging malaking disbentaha para sa mga startup.
- **Learning Curve**: Bagama't hindi kasingtarik ng ECharts, maaari pa ring maging mahirap para sa mga baguhan ang learning curve ng Highcharts.

**Hatol**:  
Mayaman sa feature ang Highcharts, ngunit dahil sa komersyal nitong paglilisensya, hindi ito gaanong angkop sa mga open-source at sensitibo-sa-gastos na proyekto. Plus ang komprehensibong opsyon nito sa charting, ngunit nililimitahan ng isyu sa paglilisensya ang dating nito para sa gamit na ito.

---

### 6. **Carbon Charts**

**Pangkalahatang-ideya**:  
Ang Carbon Charts ay isang charting library na binuo ng IBM, dinisenyo para sa paglikha ng mga chart na kaaya-aya sa paningin at lubhang customizable.

**Mga Lakas**:
- **Customizability**: Pinahihintulutan ng Carbon Charts ang malawak na customization ng hitsura at pag-uugali ng chart.
- **Open Source**: Libre at open-source ito, na umaayon sa requirement ng proyekto para sa mga solusyong abot-kaya.
- **Suporta sa mga Karaniwang Chart**: Sinusuportahan nito ang mga karaniwang uri ng chart tulad ng doughnut, radar, at area chart, bagama't kulang ito ng suporta sa mas advanced na uri tulad ng geo map o candlestick chart.

**Mga Kahinaan**:
- **Limitadong Advanced na Uri ng Chart**: Hindi nito sinusuportahan ang geo map, clustering process chart, o candlestick chart, na mahalaga sa proyekto.
- **Mas Maliit na Ecosystem**: Mas maliit ang komunidad at ecosystem ng Carbon Charts kumpara sa mas malalaking chart library tulad ng ECharts o Highcharts.

**Hatol**:  
Open-source at customizable ang Carbon Charts ngunit kulang ito ng suporta sa mas masalimuot na uri ng chart na kailangan para sa proyektong ito. Mas angkop ito sa mas simpleng pangangailangan sa charting.

---

### 7. **Layer Cake**

**Pangkalahatang-ideya**:  
Ang Layer Cake ay isang data visualization library na dinisenyo para sa paglikha ng flexible at layered na mga visualization.

**Mga Lakas**:
- **Customizable na mga Layer**: Nagbibigay ito ng makapangyarihang opsyon sa layering para sa masalimuot na visualization.
- **Open Source**: Libre at open-source ito, kaya viable na opsyon para sa mga proyektong matipid.

**Mga Kahinaan**:
- **Limitadong Dokumentasyon**: Kulang ang Layer Cake sa malawak na dokumentasyon at suporta ng komunidad, kaya mas mahirap itong gamitin kumpara sa mas matatag na library.
- **Hindi Binuo para sa mga Chart**: Mas angkop ang Layer Cake sa mga visualization na hindi chart, kaya limitado ang mga out-of-the-box na opsyon nito sa charting.

**Hatol**:  
Bagama't kawili-wili para sa mga natatanging visualization, hindi mainam ang Layer Cake para sa mga tradisyonal na requirement sa charting tulad ng candlestick chart o radar chart. Mas angkop ito sa mga custom na visualization sa labas ng saklaw ng mga karaniwang chart.

---

### 8. **D3.js**

**Pangkalahatang-ideya**:  
Ang D3.js ay isang makapangyarihang JavaScript library para sa paglikha ng mga data-driven na visualization sa pamamagitan ng HTML, SVG, at CSS.

**Mga Lakas**:
- **Walang Kapantay na Flexibility**: Pinahihintulutan ng D3.js ang paglikha ng halos anumang uri ng custom na visualization, kaya lubhang makapangyarihan ito para sa mga advanced at interactive na chart.
- **Malawak na mga Feature**: Sinusuportahan nito ang lahat ng kinakailangang uri ng chart, kasama ang geo map, clustering chart, at iba pa.
- **Customizable**: Walang kapantay ang antas ng customization sa D3.js, na nagpapahintulot sa mga developer na bumuo ng lubos na iniangkop na mga visualization.

**Mga Kahinaan**:
- **Matarik na Learning Curve**: Matarik ang learning curve ng D3.js at mas masalimuot itong i-integrate kumpara sa ibang library.
- **Matagal**: Maaaring matagal ang pagbuo ng mga chart sa D3.js, lalo na para sa mga karaniwang chart tulad ng candlestick o doughnut chart.

**Hatol**:  
Hindi kapani-paniwalang makapangyarihan ang D3.js para sa mga advanced at customized na chart ngunit sobra ito para sa maraming karaniwang gamit dahil sa matarik na learning curve at oras ng pagbuo. Pinakamainam ito sa mga sitwasyong hindi nagbibigay ang ibang chart library ng kinakailangang antas ng customization.

---

### Konklusyon

Matapos suriin ang mga library batay sa pangangailangan ng proyekto, ang **Apache ECharts** ang namumukod bilang pinakamahusay na opsyon. Sinusuportahan nito ang buong hanay ng mga kinakailangang chart, kasama ang geo map, candlestick chart, at clustering chart. Open-source, mayaman sa feature, at lubhang interactive ito, na perpektong umaayon sa mga layunin ng proyekto. Bagama't nag-aalok ang **D3.js** ng pinakamalaking flexibility, dahil sa pagiging masalimuot at pamumuhunan sa oras nito, hindi ito gaanong mainam para sa startup na nais mabilis na mag-iterate. Ang **ApexCharts** at **Chart.js** ay magagandang alternatibo para sa mas simpleng proyekto ngunit kulang sa suporta sa mga advanced na uri ng chart.
