# Cofnod penderfyniad saernïaeth: pecyn llyfrgell siartiau ar gyfer delweddu data gan ddefnyddio TypeScript a JSON

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

**Prif amcan:**  
Dewis pecyn siartiau uwch ar gyfer creu delweddiadau rhyngweithiol, gan ganolbwyntio ar ddata ariannol, data gwyddonol a data'r llywodraeth gan ddefnyddio TypeScript a JSON. Dylai'r llyfrgell ddarparu nodweddion cadarn, hyblygrwydd, a bod yn ffynhonnell agored. 

### Cyd-destun a gofynion:

1. **Datblygu ystwyth (blaenoriaeth uchel)**: Fel cwmni newydd, mae ailadrodd cyflym, creu prototeipiau a hyblygrwydd wrth ddatblygu yn hanfodol. Rhaid i'r llyfrgell siartiau ganiatáu cylchoedd datblygu cyflym.
   
2. **Mathau o siartiau (blaenoriaeth uchel)**:
   - **Siart Toesen (Doughnut)**
   - **Siart Radar**
   - **Siart Proses Clystyru**
   - **Siart Ardal gydag Echelin Amser**
   - **Siart Canhwyllbren**
   - **Siart Nightingale**
   - **Map SVG Daearyddol**
   
   Mae'r mathau hyn o siartiau yn arbennig o bwysig ar gyfer delweddu setiau data cymhleth, fel tueddiadau ariannol, metrigau gwyddonol, a gwybodaeth ddaearyddol.

3. **Rhad ac am ddim a ffynhonnell agored (blaenoriaeth uchel)**: Dylai'r pecyn fod yn ffynhonnell agored i osgoi costau trwyddedu, darparu tryloywder, a chynnig hyblygrwydd i'w addasu.

4. **Meini prawf o bwys isel**:
   - **Cyflymder amser rhedeg**: Er bod perfformiad yn bwysig, nid yw'n flaenoriaeth uchaf ar gyfer y penderfyniad hwn.
   - **Graddadwyedd**: Er bod graddadwyedd yn bwysig yn gyffredinol, yr angen uniongyrchol yw adeiladu MVP a all dyfu dros amser. Gellir mynd i'r afael â phryderon graddadwyedd yn ddiweddarach.
   - **Cydweddoldeb tuag yn ôl**: Nid yw'n bryder cynradd ar gyfer yr adeiladwaith cychwynnol, cyn belled â bod y llyfrgell yn fodern ac yn cael ei chynnal yn weithredol.

### Llyfrgelloedd a werthuswyd:

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

**Trosolwg**:  
Llyfrgell siartiau bwerus a hyblyg yw Apache ECharts ar gyfer delweddiadau rhyngweithiol y gellir eu haddasu. Mae'n cefnogi ystod eang o siartiau ac mae'n arbennig o gryf ar gyfer delweddiadau cymhleth, deinamig.

**Cryfderau**:
- **Rhyngweithedd uwch**: Mae ECharts yn rhagori ar ddarparu siartiau rhyngweithiol, gan gynnig nodweddion fel chwyddo, panio a diweddariadau data deinamig.
- **Toesen, Radar, Canhwyllbren, Mapiau SVG Daearyddol**: Mae ECharts yn cefnogi llawer o'r mathau o siartiau sydd eu hangen, gan gynnwys delweddiadau toesen, radar, canhwyllbren a mapiau daearyddol.
- **Rhad ac am ddim a ffynhonnell agored**: Llyfrgell ffynhonnell agored yw ECharts, sy'n cyd-fynd â natur ymwybodol o'r gyllideb cwmni newydd ac yn rhoi rhyddid i addasu'r cod.
- **Hyblygrwydd ac estynadwyedd**: Yn hynod addasadwy, gyda chefnogaeth helaeth i animeiddiadau, delweddiadau wedi'u teilwra, a thechnegau siartio uwch.
  
**Gwendidau**:
- **Cromlin ddysgu**: Er ei fod yn bwerus, gall ECharts fod â chromlin ddysgu fwy serth oherwydd ei hyblygrwydd a'i API helaeth.
- **Cymhlethdod y ddogfennaeth**: Mae'r ddogfennaeth yn gynhwysfawr ond gall fod yn llethol i ddatblygwyr sydd newydd ddechrau ei defnyddio.

**Dyfarniad**:  
Mae ECharts yn addas iawn ar gyfer y prosiect oherwydd ei gefnogaeth i siartiau rhyngweithiol, gan gynnwys yr holl fathau sydd eu hangen fel siartiau canhwyllbren, siartiau radar a mapiau daearyddol. Mae ei natur ffynhonnell agored yn cyd-fynd ag angen y prosiect am hyblygrwydd a chost-effeithiolrwydd.

---

### 2. **Chart.js**

**Trosolwg**:  
Llyfrgell siartiau syml, hawdd ei defnyddio ar gyfer adeiladu mathau cyffredin o siartiau yw Chart.js. Mae'n adnabyddus am ei symlrwydd a'i rwyddineb integreiddio.

**Cryfderau**:
- **Rhwyddineb defnydd**: Mae Chart.js yn syml iawn i'w osod a'i ddefnyddio, gydag ychydig iawn o gromlin ddysgu.
- **Ffynhonnell agored**: Mae Chart.js yn rhad ac am ddim ac yn ffynhonnell agored, sy'n hanfodol ar gyfer lleihau costau.
- **Mathau cyffredin o siartiau**: Mae'n cefnogi siartiau sylfaenol fel siartiau toesen, ardal, radar a llinell, sy'n cwmpasu'r rhan fwyaf o'r prif anghenion.

**Gwendidau**:
- **Siartiau uwch cyfyngedig**: Nid yw Chart.js yn cefnogi mathau cymhleth o siartiau'n frodorol fel siartiau canhwyllbren, mapiau SVG daearyddol, na siartiau proses clystyru. Er y gellir ychwanegu'r nodweddion hyn drwy ategion neu addasu, nid yw mor syml ag y mae gyda llyfrgelloedd eraill.
- **Rhyngweithedd**: Er bod Chart.js yn cefnogi rhyngweithedd sylfaenol (e.e., cynghorion offer ac effeithiau hofran), nid yw'n cynnig nodweddion mor uwch ag ECharts neu D3.js.

**Dyfarniad**:  
Mae Chart.js yn wych ar gyfer prosiectau syml, cyflym, ond mae ei ddiffyg cefnogaeth i fathau cymhleth o siartiau yn ei wneud yn anaddas ar gyfer cymhwysiad data-trwm gydag anghenion uwch fel siartiau canhwyllbren a mapiau daearyddol. Mae'n ddewis da ar gyfer creu prototeipiau, ond ar gyfer y mathau o siartiau sydd eu hangen, argymhellir offer mwy datblygedig.

---

### 3. **ApexCharts**

**Trosolwg**:  
Llyfrgell siartiau fodern yw ApexCharts sy'n darparu amrywiaeth o fathau o siartiau ac yn canolbwyntio ar ddelweddiadau rhyngweithiol gydag API hawdd ei ddefnyddio.

**Cryfderau**:
- **Nodweddion rhyngweithiol**: Mae ApexCharts yn cynnig siartiau rhyngweithiol gyda chynghorion offer, chwyddo, panio a diweddariadau.
- **Cefnogaeth i siartiau ariannol a gwyddonol**: Mae'n cefnogi amrywiaeth eang o fathau o siartiau, gan gynnwys siartiau canhwyllbren, siartiau radar a siartiau ardal.
- **Rhwyddineb defnydd**: Mae ganddo API syml ac mae'n hawdd ei integreiddio i brosiect.
- **Rhad ac am ddim a ffynhonnell agored**: Mae ApexCharts yn cynnig fersiwn ffynhonnell agored am ddim sy'n addas ar gyfer llawer o achosion defnydd.
  
**Gwendidau**:
- **Addasu cymhleth**: Er ei fod yn darparu llawer o nodweddion, nid yw'r opsiynau addasu mor hyblyg ag ECharts neu D3.js ar gyfer anghenion siartio cymhleth iawn neu wedi'u teilwra.
- **Mapiau daearyddol**: Nid yw ApexCharts yn cefnogi mapiau daearyddol na siartiau proses clystyru'n frodorol, y mae eu hangen ar gyfer y prosiect hwn.

**Dyfarniad**:  
Mae ApexCharts yn gystadleuydd cryf oherwydd ei rwyddineb defnydd a'i ryngweithedd, ond mae'n methu o ran rhai mathau uwch o siartiau, yn enwedig yr angen am fapiau daearyddol a siartiau clystyru. Mae'n ddewis da ar gyfer siartiau symlach ond yn brin o rai nodweddion angenrheidiol.

---

### 4. **AG Charts**

**Trosolwg**:  
Llyfrgell siartiau gradd fasnachol yw AG Charts a gynlluniwyd ar gyfer perfformiad a manylder. Mae'n addas iawn ar gyfer creu dangosfyrddau ariannol, gwyddonol a busnes.

**Cryfderau**:
- **Mathau uwch o siartiau**: Mae AG Charts yn cefnogi llawer o fathau uwch o siartiau, gan gynnwys siartiau canhwyllbren, siartiau ardal, siartiau radar, a mwy. Mae hefyd yn cynnig integreiddio dwfn â chynhyrchion AG-Grid eraill.
- **Perfformiad uchel**: Mae'n cynnig perfformiad rhagorol, yn enwedig wrth ymdrin â setiau data mawr.
- **Rhyngweithedd**: Mae AG Charts yn cefnogi amrywiaeth o nodweddion rhyngweithiol fel chwyddo, cynghorion offer, a diweddariadau deinamig.

**Gwendidau**:
- **Ddim yn hollol rhad ac am ddim**: Er bod AG Charts yn cynnig fersiwn am ddim, telir am y fersiwn llawn nodweddion, a all fod yn rhwystr i gwmnïau newydd sy'n ceisio lleihau costau.
- **Cymhlethdod**: Er bod y llyfrgell yn gyfoethog o ran nodweddion, gall fod yn ormod ar gyfer prosiectau symlach a gall fod angen mwy o osod a ffurfweddu o'i chymharu â dewisiadau eraill.

**Dyfarniad**:  
Mae AG Charts yn bwerus ac yn gyfoethog o ran nodweddion ond efallai nad dyma'r ffit orau oherwydd ei natur fasnachol a'i strwythur costau. Mae ei addasrwydd yn dibynnu ar a all y gyllideb ddarparu ar gyfer fersiynau â thâl neu a yw'n well gan y tîm ddewisiadau amgen ffynhonnell agored.

---

### 5. **Highcharts**

**Trosolwg**:  
Llyfrgell siartiau boblogaidd yw Highcharts sy'n adnabyddus am ei hystod eang o fathau o siartiau a'i opsiynau addasu grymus.

**Cryfderau**:
- **Mathau cynhwysfawr o siartiau**: Mae Highcharts yn cefnogi amrywiaeth eang o siartiau, gan gynnwys canhwyllbren, radar, ardal, a mapiau daearyddol.
- **Rhyngweithiol a deinamig**: Mae Highcharts yn darparu nodweddion rhyngweithiol cyfoethog, gan gynnwys plymio i lawr (drill-down), chwyddo a phanio.
- **Rhwyddineb defnydd**: Mae ganddo API cyfeillgar a dogfennaeth dda, sy'n ei gwneud hi'n hawdd dechrau.

**Gwendidau**:
- **Trwydded fasnachol**: Er bod Highcharts yn cynnig fersiwn am ddim ar gyfer defnydd anfasnachol, mae'r drwydded fasnachol yn ddrud, a all fod yn anfantais sylweddol i gwmnïau newydd.
- **Cromlin ddysgu**: Er nad yw mor serth ag ECharts, gall cromlin ddysgu Highcharts fod yn heriol o hyd i ddechreuwyr.

**Dyfarniad**:  
Mae Highcharts yn llyfrgell gyfoethog o ran nodweddion, ond mae ei thrwyddedu masnachol yn ei gwneud yn llai addas ar gyfer prosiectau ffynhonnell agored sy'n sensitif i gostau. Mae ei opsiynau siartio cynhwysfawr yn fantais, ond mae'r mater trwyddedu yn cyfyngu ar ei apêl ar gyfer yr achos defnydd hwn.

---

### 6. **Carbon Charts**

**Trosolwg**:  
Llyfrgell siartiau a ddatblygwyd gan IBM yw Carbon Charts, a gynlluniwyd ar gyfer creu siartiau deniadol yn weledol ac yn hynod addasadwy.

**Cryfderau**:
- **Addasadwyedd**: Mae Carbon Charts yn caniatáu addasu ymddangosiad ac ymddygiad siartiau'n helaeth.
- **Ffynhonnell agored**: Mae'n rhad ac am ddim ac yn ffynhonnell agored, sy'n cyd-fynd â gofyniad y prosiect am atebion sy'n ystyriol o'r gyllideb.
- **Cefnogaeth i siartiau cyffredin**: Mae'n cefnogi mathau cyffredin o siartiau fel siartiau toesen, radar ac ardal, er ei fod yn brin o gefnogaeth i fathau mwy datblygedig fel mapiau daearyddol neu siartiau canhwyllbren.

**Gwendidau**:
- **Mathau uwch o siartiau cyfyngedig**: Nid yw'n cefnogi mapiau daearyddol, siartiau proses clystyru, na siartiau canhwyllbren, sy'n hanfodol i'r prosiect.
- **Ecosystem lai**: Mae gan Carbon Charts gymuned ac ecosystem lai o'i chymharu â llyfrgelloedd siartiau mwy fel ECharts neu Highcharts.

**Dyfarniad**:  
Mae Carbon Charts yn ffynhonnell agored ac yn addasadwy ond mae'n brin o gefnogaeth i'r mathau mwy cymhleth o siartiau sydd eu hangen ar gyfer y prosiect hwn. Mae'n fwy addas ar gyfer anghenion siartio symlach.

---

### 7. **Layer Cake**

**Trosolwg**:  
Llyfrgell delweddu data yw Layer Cake a gynlluniwyd ar gyfer creu delweddiadau haenog hyblyg.

**Cryfderau**:
- **Haenau addasadwy**: Mae'n darparu opsiynau haenu grymus ar gyfer delweddiadau cymhleth.
- **Ffynhonnell agored**: Mae'n rhad ac am ddim ac yn ffynhonnell agored, sy'n ei wneud yn ddewis dichonadwy ar gyfer prosiectau sy'n ystyriol o'r gyllideb.

**Gwendidau**:
- **Dogfennaeth gyfyngedig**: Nid oes gan Layer Cake ddogfennaeth helaeth na chefnogaeth gymunedol, sy'n ei gwneud hi'n anoddach gweithio gydag ef o'i gymharu â llyfrgelloedd mwy sefydledig.
- **Heb ei adeiladu ar gyfer siartiau**: Mae Layer Cake yn fwy addas ar gyfer delweddiadau nad ydynt yn siartiau, felly mae ei opsiynau siartio parod yn gyfyngedig.

**Dyfarniad**:  
Er ei fod yn ddiddorol ar gyfer delweddiadau unigryw, nid yw Layer Cake yn ddelfrydol ar gyfer gofynion siartio traddodiadol fel siartiau canhwyllbren neu siartiau radar. Mae'n fwy addas ar gyfer delweddiadau wedi'u teilwra y tu allan i gwmpas siartiau safonol.

---

### 8. **D3.js**

**Trosolwg**:  
Llyfrgell JavaScript bwerus yw D3.js ar gyfer creu delweddiadau a yrrir gan ddata drwy HTML, SVG a CSS.

**Cryfderau**:
- **Hyblygrwydd digyffelyb**: Mae D3.js yn caniatáu creu bron unrhyw fath o ddelweddiad wedi'i deilwra, sy'n ei wneud yn hynod bwerus ar gyfer siartiau uwch a rhyngweithiol.
- **Nodweddion helaeth**: Mae'n cefnogi'r holl fathau o siartiau sydd eu hangen, gan gynnwys mapiau daearyddol, siartiau clystyru, a mwy.
- **Addasadwy**: Mae lefel yr addasu yn D3.js yn ddigyffelyb, gan ganiatáu i ddatblygwyr adeiladu delweddiadau wedi'u teilwra'n fanwl iawn.

**Gwendidau**:
- **Cromlin ddysgu serth**: Mae gan D3.js gromlin ddysgu serth ac mae'n fwy cymhleth i'w integreiddio o'i gymharu â llyfrgelloedd eraill.
- **Yn cymryd llawer o amser**: Gall adeiladu siartiau yn D3.js gymryd llawer o amser, yn enwedig ar gyfer siartiau cyffredin fel siartiau canhwyllbren neu siartiau toesen.

**Dyfarniad**:  
Mae D3.js yn hynod bwerus ar gyfer siartiau uwch, wedi'u teilwra ond mae'n ormod ar gyfer llawer o achosion defnydd nodweddiadol oherwydd ei gromlin ddysgu serth a'r amser datblygu. Mae orau ar gyfer sefyllfaoedd lle nad yw'r llyfrgelloedd siartiau eraill yn darparu'r lefel angenrheidiol o addasu.

---

### Casgliad

Ar ôl gwerthuso'r llyfrgelloedd ar sail anghenion y prosiect, **Apache ECharts** sy'n sefyll allan fel y dewis gorau. Mae'n cefnogi'r ystod lawn o siartiau sydd eu hangen, gan gynnwys mapiau daearyddol, siartiau canhwyllbren, a siartiau clystyru. Mae'n ffynhonnell agored, yn gyfoethog o ran nodweddion, ac yn hynod ryngweithiol, sy'n cyd-fynd yn berffaith â nodau'r prosiect. Er bod **D3.js** yn cynnig y mwyaf o hyblygrwydd, mae ei gymhlethdod a'r buddsoddiad amser yn ei wneud yn llai delfrydol i gwmni newydd sy'n ceisio ailadrodd yn gyflym. Mae **ApexCharts** a **Chart.js** yn ddewisiadau amgen da ar gyfer prosiectau symlach ond yn brin o gefnogaeth i fathau uwch o siartiau.
