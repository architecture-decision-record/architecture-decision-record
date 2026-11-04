# Kovskrif dyberth arkitektoryeth: toulva lyverva chartys rag gwelheans data ow usya TypeScript ha JSON

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

**Mynnans pennys:**  
Dewis toulva chartys avonsys rag gwul gwelheansow ynterweythek, ow fokusya war data arghansek, data skiansek, ha data governans ow usya TypeScript ha JSON. An lyverva a dal ri nodhow krev, fexibilita, ha bos ygor-fenten. 

### Kettesten ha othommow:

1. **Displegyans skav (priorita uhel)**: Avel dallethyans, ailtreyans skon, prototyp, ha fexibilita yn displegyans yw poesek. An lyverva chartys a dal konsentya bywnansow displegyans skav.
   
2. **Sortow chart (priorita uhel)**:
   - **Chart doughnut**
   - **Chart radar**
   - **Chart argerdh kuntellans**
   - **Chart area gans ax termyn**
   - **Chart candlestick**
   - **Chart Nightingale**
   - **Mappa SVG geo**
   
   An sortow chart ma yw arbennik poesek rag gwelheans setys data kompleks, avel tuedhow arghansek, musurow skiansek, ha kedhlow dhaeroresek.

3. **Rydh ha ygor-fenten (priorita uhel)**: An toulva a dal bos ygor-fenten rag gochewgh kostow lisansa, ri tryloyes, ha profya fexibilita rag usadow arbennik.

4. **Kriteryow poester isel**:
   - **Skavder gweythrys**: Kyn fo gwrians poesek, nyns yw an kynsa priorita rag an dyberth ma.
   - **Skalyadewder**: Kyn fo skalyadewder poesek yn ollgemmyn, an othom skon yw drehevel MVP a hyll tevi dre an termyn. Konsiderasyons skalyadewder a hyll bos gorthybys wosa.
   - **Kesstowans a-dhelergh**: Nyns yw penn-bris rag an drehevel kynsa, mar pe an lyverva nowydhek ha gwithys yn bewek.

### Lyvervaow jydjys:

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

**Dre-wel**:  
Apache ECharts yw lyverva chartys nerthek, fexibl rag gwelheansow ynterweythek, hewelus. Ev a skoodh lies sort a gharts ha yw arbennik krev yn gwelheansow kompleks, dynamek.

**Nerthow**:
- **Ynterweythadewder avonsys**: ECharts a ra yn ragorek orth ri chartys ynterweythek, ow profya nodhow avel zoomya, panya, ha nowydhyansow data dynamek.
- **Doughnut, Radar, Candlestick, Mappys SVG Geo**: ECharts a skoodh lies a'n sortow chart res, ow keworra gwelheansow doughnut, radar, candlestick, ha mappa dhaeroresek.
- **Rydh ha ygor-fenten**: ECharts yw lyverva ygor-fenten, a gesson gans kodh budjet-skoodhek dallethyans ha re rydhses dhe jenjya an kod.
- **Fexibilita ha ystynnadewder**: Pur hewelus, gans skoodh ledan rag bywhansow, gwelheansow hewelus, ha teknegow chartys avonsys.
  
**Gwannow**:
- **Kromm dyskans**: ECharts, kyn fo nerthek, a hyll kavos kromm dyskans moy serth awos y fexibilita ha'y API ledan.
- **Kompleksyta dogvennans**: An dogvennans yw kowlwir mes a hyll bos re rag displegyoryon a dhalleth anodho.

**Jydjyans**:  
ECharts yw pur-wiw rag an towl awos y skoodh rag chartys ynterweythek, ow keworra oll an sortow res avel chartys candlestick, chartys radar, ha mappys geo. Y nodh ygor-fenten a gesson gans othom an towl rag fexibilita ha kostow isel.

---

### 2. **Chart.js**

**Dre-wel**:  
Chart.js yw lyverva chartys sempel, es dhe usya rag drehevel sortow chart ollgemmyn. Ev yw aswonnys awos y sempelder ha'y es junyans.

**Nerthow**:
- **Es dhe usya**: Chart.js yw pur es dhe settya ha usya, gans kromm dyskans izel.
- **Ygor-fenten**: Chart.js yw rydh hag ygor-fenten, kritek rag lehe kostow.
- **Sortow chart ollgemmyn**: Ev a skoodh chartys sempel avel doughnut, area, radar, ha line, a dhelirh an moyha a'n othommow pennys.

**Gwannow**:
- **Chartys avonsys kyfyngys**: Chart.js ny skoodh yn genesek sortow chart kompleks avel chartys candlestick, mappys SVG geo, po chartys argerdh kuntellans. Kyn hyll an nodhow ma bos ouryes dre bluginys po hewelans, nyns yw mar es avel gans lyvervaow erell.
- **Ynterweythadewder**: Kyn skoodhi Chart.js ynterweythadewder sempel (rag ensampel, gwarnyow ha effeythyow hover), ny re nodhow mar avonsys avel ECharts po D3.js.

**Jydjyans**:  
Chart.js yw bras rag towlow sempel, skav, mes y ankoth a skoodh rag sortow chart kompleks a wra ev anwiw rag aplikasyon data-poesek gans othommow avonsys avel chartys candlestick ha mappys geo. Dewis da yw rag prototyp, mes rag an sortow chart res, toulys moy avonsys yw kusulys.

---

### 3. **ApexCharts**

**Dre-wel**:  
ApexCharts yw lyverva chartys nowydhek a re lies sort chart ha fok a ra war wartheansow ynterweythek gans API es dhe usya.

**Nerthow**:
- **Nodhow ynterweythek**: ApexCharts a re chartys ynterweythek gans gwarnyow, zoomya, panya, ha nowydhyansow.
- **Skoodh rag chartys arghansek ha skiansek**: Ev a skoodh lies sort chart, ow keworra chartys candlestick, chartys radar, ha chartys area.
- **Es dhe usya**: Ev a'n jeves API plos ha yw sempel dhe junya yn towl.
- **Rydh ha ygor-fenten**: ApexCharts a re gwersyon ygor-fenten rydh gwiw rag lies kas usadow.
  
**Gwannow**:
- **Hewelans kompleks**: Kyn re ev lies nodh, an dewisyow hewelans nyns yns mar fexibl avel ECharts po D3.js rag othommow chartys pur-gompleks po hewelus.
- **Mappys geo**: ApexCharts ny skoodh yn genesek mappys geo na chartys argerdh kuntellans, res rag an towl ma.

**Jydjyans**:  
ApexCharts yw ymgeslywyor krev awos y es usadow ha'y ynterweythadewder, mes ev a fyll orth nebes sortow chart avonsys, arbennik an othom a vappys geo ha chartys kuntellans. Dewis da yw rag chartys moy sempel mes y'n jeves nebes nodhow res a-ves.

---

### 4. **AG Charts**

**Dre-wel**:  
AG Charts yw lyverva chartys a live kenwerthek disinyes rag gwrians ha kewar. Ev yw pur-wiw rag gwul dashboards arghansek, skiansek, ha negys.

**Nerthow**:
- **Sortow chart avonsys**: AG Charts a skoodh lies sort chart avonsys, ow keworra chartys candlestick, chartys area, chartys radar, ha moy. Ev a re ynwedh junyans downha gans produktys AG-Grid erell.
- **Gwrians uhel**: Ev a re gwrians ragorek, arbennik pan rewlir setys data bras.
- **Ynterweythadewder**: AG Charts a skoodh lies nodh ynterweythek avel zoomya, gwarnyow, ha nowydhyansow dynamek.

**Gwannow**:
- **Nyns yw yn tien rydh**: Kyn re AG Charts gwersyon rydh, an gwersyon leun-nodhek yw tal, a hyll bos lett dhe dhallethyansow a vynn lehe kostow.
- **Kompleksyta**: Kyn fo an lyverva rych yn nodhow, ev a hyll bos re rag towlow moy sempel ha res moy selyans ha kefrysyans erbynn dewisyow erell.

**Jydjyans**:  
AG Charts yw nerthek ha rych yn nodhow mes martesen nyns yw an junyans gwella awos y natur kenwerthek ha'y strokturyeth kost. Y wiwder a bleg orth mar hyll an budjet kemeres gwersyons tal po mar kerhir dewisyow ygor-fenten.

---

### 5. **Highcharts**

**Dre-wel**:  
Highcharts yw lyverva chartys poblek aswonnys awos y ystynnans ledan a sortow chart ha dewisyow hewelans nerthek.

**Nerthow**:
- **Sortow chart kowlwir**: Highcharts a skoodh ystynnans ledan a chartys, ow keworra candlestick, radar, area, ha mappys geo.
- **Ynterweythek ha dynamek**: Highcharts a re nodhow ynterweythek rych, ow keworra drill-downs, zoomya, ha panya.
- **Es dhe usya**: Ev a'n jeves API hegar dhe usyer ha dogvennans da, a wra es dhe dhalleth.

**Gwannow**:
- **Lisans kenwerthek**: Kyn re Highcharts gwersyon rydh rag usadow nag yw kenwerthek, an lisans kenwerthek yw kostus, a hyll bos dyskoweth meur rag dallethyansow.
- **Kromm dyskans**: Kyn na vo mar serth avel ECharts, kromm dyskans Highcharts a hyll bos kales hwath rag dallethoryon.

**Jydjyans**:  
Highcharts yw lyverva rych yn nodhow, mes y lisansa kenwerthek a wra ev le gwiw rag towlow ygor-fenten, tender orth kost. Y ddewisyow chartys kowlwir yw prow, mes an ishu lisansa a lehe y dhrehedhyans rag an kas usadow ma.

---

### 6. **Carbon Charts**

**Dre-wel**:  
Carbon Charts yw lyverva chartys displegys gans IBM, disinyes rag gwul chartys plesont dhe'n lagas ha pur-hewelus.

**Nerthow**:
- **Hewelusrwydd**: Carbon Charts a gonsent hewelans ledan a bryns ha kemeres an chartys.
- **Ygor-fenten**: Ev yw rydh hag ygor-fenten, a gesson gans othom an towl rag solusyons tender orth budjet.
- **Skoodh rag chartys ollgemmyn**: Ev a skoodh sortow chart ollgemmyn avel doughnut, radar, ha chartys area, kyn fo skoodh rag sortow moy avonsys avel mappys geo po chartys candlestick ow kelli.

**Gwannow**:
- **Sortow chart avonsys kyfyngys**: Ev ny skoodh mappys geo, chartys argerdh kuntellans, na chartys candlestick, poesek rag an towl.
- **Ekosystem byghan**: Carbon Charts a'n jeves kemeneth hag ekosystem le erbynn lyvervaow chartys brassa avel ECharts po Highcharts.

**Jydjyans**:  
Carbon Charts yw ygor-fenten ha hewelus mes ny skoodh an sortow chart moy kompleks res rag an towl ma. Ev yw moy gwiw rag othommow chartys moy sempel.

---

### 7. **Layer Cake**

**Dre-wel**:  
Layer Cake yw lyverva gwelheans data disinyes rag gwul gwelheansow fexibl, gwiskys.

**Nerthow**:
- **Gwiskow hewelus**: Ev a re dewisyow gwiskow nerthek rag gwelheansow kompleks.
- **Ygor-fenten**: Ev yw rydh hag ygor-fenten, ow wul ev dewis gallus rag towlow tender orth budjet.

**Gwannow**:
- **Dogvennans kyfyngys**: Layer Cake a ngel dogvennans ledan ha skoodh kemeneth, ow wul ev moy kales dhe oberi gans erbynn lyvervaow moy selys.
- **Nyns yw drehevys rag chartys**: Layer Cake yw moy gwiw rag gwelheansow nag yns chartys, ytho y dhewisyow chartys parys yw kyfyngys.

**Jydjyans**:  
Kyn fo hwek rag gwelheansow unnik, Layer Cake nyns yw ideal rag othommow chartys hengovek avel chartys candlestick po chartys radar. Ev yw moy gwiw rag gwelheansow hewelus a-ves skope chartys savonys.

---

### 8. **D3.js**

**Dre-wel**:  
D3.js yw lyverva JavaScript nerthek rag gwul gwelheansow data-ledhys dre HTML, SVG, ha CSS.

**Nerthow**:
- **Fexibilita heb kesstrif**: D3.js a gonsent gwul pub sort a wherdhans hewelus mar chons, ow wul ev pur-nerthek rag chartys avonsys ha ynterweythek.
- **Nodhow ledan**: Ev a skoodh oll an sortow chart res, ow keworra mappys geo, chartys kuntellans, ha moy.
- **Hewelus**: Live an hewelans yn D3.js yw heb kesstrif, ow konsentya dhe displegyoryon drehevel gwelheansow pur-gesys.

**Gwannow**:
- **Kromm dyskans serth**: D3.js a'n jeves kromm dyskans serth ha yw moy kompleks dhe junya erbynn lyvervaow erell.
- **Kemeres termyn**: Drehevel chartys yn D3.js a hyll kemeres termyn, arbennik rag chartys ollgemmyn avel chartys candlestick po doughnut.

**Jydjyans**:  
D3.js yw hag a-ugh nerthek rag chartys avonsys, hewelus mes yw re rag lies kas usadow ollgemmyn awos y gromm dyskans serth ha'y dermyn displegyans. Ev yw gwella rag studhow may na re lyvervaow chartys erell an live hewelans res.

---

### Diwedhyans

Wosa jydja an lyvervaow herwydh othommow an towl, **Apache ECharts** a saf dhe-ves avel an gwella dewis. Ev a skoodh an ystynnans leun a gharts res, ow keworra mappys geo, chartys candlestick, ha chartys kuntellans. Ev yw ygor-fenten, rych yn nodhow, ha pur-ynterweythek, a gesson yn perfydh gans mynnansow an towl. Kyn re **D3.js** an moyha fexibilita, y gompleksyta ha'y dermyn invesys a wra ev le ideal rag dallethyans a vynn ailtrei skon. **ApexCharts** ha **Chart.js** yw ymgeslywyoryon da rag towlow moy sempel mes a ngel skoodh rag sortow chart avonsys.
