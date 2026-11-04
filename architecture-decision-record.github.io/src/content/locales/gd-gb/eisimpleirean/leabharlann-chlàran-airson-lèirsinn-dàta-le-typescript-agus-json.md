# Clàr co-dhùnaidh ailtireachd: pasgan innealan leabharlainn chlàran-dealbh airson lèirsinn dàta le TypeScript agus JSON

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

**Prìomh amas:**  
Pasgan innealan clàran-dealbh adhartach a thaghadh airson lèirsinnean eadar-ghnìomhach a chruthachadh, le fòcas air dàta ionmhais, dàta saidheansail, agus dàta riaghaltais a’ cleachdadh TypeScript agus JSON. Bu chòir don leabharlann feartan làidir, sùbailteachd a thoirt seachad, agus a bhith stòr fosgailte. 

### Co-theacsa agus riatanasan:

1. **Leasachadh lùghdaichte (Prìomhachas àrd)**: Mar chompanaidh tòiseachaidh, tha ath-aithris luath, prototypadh, agus sùbailteachd ann an leasachadh riatanach. Feumaidh leabharlann nan clàran-dealbh cuairtean leasachaidh luath a cheadachadh.
   
2. **Seòrsaichean chlàran-dealbh (Prìomhachas àrd)**:
   - **Clàr-dealbh doughnut**
   - **Clàr-dealbh radar**
   - **Clàr-dealbh pròiseas cruinneachaidh (clustering)**
   - **Clàr-dealbh àite le axis ama**
   - **Clàr-dealbh coinnle (candlestick)**
   - **Clàr-dealbh Nightingale**
   - **Mapa SVG cruinn-eòlasach**
   
   Tha na seòrsaichean chlàran-dealbh sin gu sònraichte cudromach airson stòran dàta toinnte a lèirsinneachadh, leithid gluasadan ionmhais, meatrachd saidheansail, agus fiosrachadh cruinn-eòlasach.

3. **Saor agus stòr fosgailte (Prìomhachas àrd)**: Bu chòir don phasgan innealan a bhith stòr fosgailte gus cosgaisean ceadachaidh a sheachnadh, follaiseachd a thoirt seachad, agus sùbailteachd a thabhann airson gnàthachadh.

4. **Slatan-tomhais cudromachd ìosal**:
   - **Astar ùine-ruith**: Ged a tha coileanadh cudromach, chan e prìomhachas as àirde a th’ ann airson a’ cho-dhùnaidh seo.
   - **So-sgèileachd**: Ged a tha so-sgèileachd cudromach san fharsaingeachd, is e am feum sa bhad MVP a thogail a dh’fhaodadh fàs thar ùine. Faodar draghan so-sgèileachd a làimhseachadh nas fhaide air adhart.
   - **Co-chòrdalachd air ais**: Chan e prìomh dhragh airson an togail thòiseachaidh, fhad ’s a tha an leabharlann ùr-nodha agus air a chumail suas gu gnìomhach.

### Leabharlannan a chaidh a mheasadh:

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

**Sealladh coitcheann**:  
Tha Apache ECharts na leabharlann clàran-dealbh cumhachdach, sùbailte airson lèirsinnean eadar-ghnìomhach, gnàthachail. Bheir e taic do raon farsaing de chlàran-dealbh agus tha e gu sònraichte làidir ann an lèirsinnean toinnte, dinamach.

**Neartan**:
- **Eadar-ghnìomhachd adhartach**: Tha ECharts air leth math ann a bhith a’ toirt seachad chlàran-dealbh eadar-ghnìomhach, a’ tabhann fheartan leithid zoomadh, panadh, agus ùrachaidhean dàta dinamach.
- **Doughnut, radar, coinneal, mapaichean SVG cruinn-eòlasach**: Bheir ECharts taic do mhòran de na seòrsaichean chlàran-dealbh a tha a dhìth, a’ gabhail a-steach lèirsinnean doughnut, radar, coinneal, agus mapa cruinn-eòlasach.
- **Saor agus stòr fosgailte**: Tha ECharts na leabharlann stòr fosgailte, a fhreagras air nàdar chunnartach buidseit companaidh tòiseachaidh agus a bheir saorsa an còd atharrachadh.
- **Sùbailteachd agus so-leudachaidh**: Gu math gnàthachail, le taic fharsaing airson beòthachaidhean, lèirsinnean gnàthaichte, agus dòighean clàran-dealbh adhartach.
  
**Laigsean**:
- **Lùb ionnsachaidh**: Faodaidh lùb ionnsachaidh nas cas a bhith aig ECharts, ged a tha e cumhachdach, air sgàth a shùbailteachd agus an API farsaing aige.
- **Iom-fhillteachd sgrìobhainnean**: Tha na sgrìobhainnean farsaing ach faodaidh iad a bhith dùbhlanach do luchd-leasachaidh a tha dìreach a’ tòiseachadh leis.

**Breith**:  
Tha ECharts glè fhreagarrach don phròiseact air sgàth a thaic airson chlàran-dealbh eadar-ghnìomhach, a’ gabhail a-steach a h-uile seòrsa a tha a dhìth leithid clàran-dealbh coinnle, clàran-dealbh radar, agus mapaichean cruinn-eòlasach. Tha a nàdar stòr fosgailte a’ freagairt air feum a’ phròiseict airson sùbailteachd agus cosgais-èifeachdas.

---

### 2. **Chart.js**

**Sealladh coitcheann**:  
Tha Chart.js na leabharlann clàran-dealbh sìmplidh, furasta a chleachdadh airson seòrsaichean chlàran-dealbh cumanta a thogail. Tha e ainmeil airson a shìmplidheachd agus cho furasta ’s a tha e amalachadh.

**Neartan**:
- **Furasta a chleachdadh**: Tha Chart.js glè shìmplidh a shuidheachadh agus a chleachdadh, le lùb ionnsachaidh as lugha.
- **Stòr fosgailte**: Tha Chart.js saor agus stòr fosgailte, a tha èiginneach airson cosgaisean a lùghdachadh.
- **Seòrsaichean chlàran-dealbh cumanta**: Bheir e taic do chlàran-dealbh bunaiteach leithid doughnut, àite, radar, agus loidhne, a chòmhdaicheas a’ mhòr-chuid de na prìomh fheumalachdan.

**Laigsean**:
- **Clàran-dealbh adhartach cuingealaichte**: Chan eil Chart.js a’ toirt taic dùthchasach do sheòrsaichean chlàran-dealbh toinnte leithid clàran-dealbh coinnle, mapaichean SVG cruinn-eòlasach, no clàran-dealbh pròiseas cruinneachaidh. Ged a ghabhas na feartan sin cur ris tro phlugainean no gnàthachadh, chan eil e cho dìreach ri leabharlannan eile.
- **Eadar-ghnìomhachd**: Ged a bheir Chart.js taic do dh’eadar-ghnìomhachd bhunaiteach (m.e., tooltips agus buaidhean hover), chan eil na feartan aige cho adhartach ri ECharts no D3.js.

**Breith**:  
Tha Chart.js math airson pròiseactan sìmplidh, luath, ach tha a dhìth taic airson seòrsaichean chlàran-dealbh toinnte ga dhèanamh mì-fhreagarrach airson aplacaid làn dàta le feumalachdan adhartach leithid clàran-dealbh coinnle agus mapaichean cruinn-eòlasach. Tha e na dheagh roghainn airson prototypadh, ach airson nan seòrsaichean chlàran-dealbh a tha a dhìth, thathar a’ moladh innealan nas adhartaiche.

---

### 3. **ApexCharts**

**Sealladh coitcheann**:  
Tha ApexCharts na leabharlann clàran-dealbh ùr-nodha a bheir measgachadh de sheòrsaichean chlàran-dealbh agus a tha a’ cuimseachadh air lèirsinnean eadar-ghnìomhach le API a tha furasta a chleachdadh.

**Neartan**:
- **Feartan eadar-ghnìomhach**: Bheir ApexCharts clàran-dealbh eadar-ghnìomhach le tooltips, zoomadh, panadh, agus ùrachaidhean.
- **Taic airson chlàran-dealbh ionmhais is saidheansail**: Bheir e taic do raon farsaing de sheòrsaichean chlàran-dealbh, a’ gabhail a-steach clàran-dealbh coinnle, clàran-dealbh radar, agus clàran-dealbh àite.
- **Furasta a chleachdadh**: Tha API dìreach aige agus tha e sìmplidh amalachadh ann am pròiseact.
- **Saor agus stòr fosgailte**: Bheir ApexCharts tionndadh stòr fosgailte saor a tha freagarrach airson mòran chùisean cleachdaidh.
  
**Laigsean**:
- **Gnàthachadh toinnte**: Ged a bheir e mòran fheartan, chan eil na roghainnean gnàthachaidh cho sùbailte ri ECharts no D3.js airson feumalachdan clàran-dealbh glè thoinnte no gnàthaichte.
- **Mapaichean cruinn-eòlasach**: Chan eil ApexCharts a’ toirt taic dùthchasach do mhapaichean cruinn-eòlasach no clàran-dealbh pròiseas cruinneachaidh, a tha a dhìth airson a’ phròiseict seo.

**Breith**:  
Tha ApexCharts na thagraiche làidir air sgàth cho furasta ’s a tha e a chleachdadh agus a eadar-ghnìomhachd, ach tha e a’ tuiteam goirid air cuid de sheòrsaichean chlàran-dealbh adhartach, gu sònraichte am feum airson mapaichean cruinn-eòlasach agus clàran-dealbh cruinneachaidh. Tha e na dheagh roghainn airson chlàran-dealbh nas sìmplidhe ach tha cuid de fheartan a dhìth air.

---

### 4. **AG Charts**

**Sealladh coitcheann**:  
Tha AG Charts na leabharlann clàran-dealbh aig ìre malairteach a chaidh a dhealbhadh airson coileanadh agus mionaideachd. Tha e glè fhreagarrach airson deas-bhùird ionmhais, saidheansail, agus gnìomhachais a chruthachadh.

**Neartan**:
- **Seòrsaichean chlàran-dealbh adhartach**: Bheir AG Charts taic do mhòran sheòrsaichean chlàran-dealbh adhartach, a’ gabhail a-steach clàran-dealbh coinnle, clàran-dealbh àite, clàran-dealbh radar, agus tuilleadh. Bheir e cuideachd amalachadh domhainn le toraidhean AG-Grid eile.
- **Coileanadh àrd**: Bheir e coileanadh sàr-mhath, gu sònraichte nuair a thathar a’ dèiligeadh ri stòran dàta mòra.
- **Eadar-ghnìomhachd**: Bheir AG Charts taic do dh’iomadh feart eadar-ghnìomhach leithid zoomadh, tooltips, agus ùrachaidhean dinamach.

**Laigsean**:
- **Chan eil e gu tur saor**: Ged a bheir AG Charts tionndadh saor, tha an tionndadh làn fheartan air a phàigheadh, a dh’fhaodadh a bhith na bhacadh do chompanaidhean tòiseachaidh a tha airson cosgaisean a lùghdachadh.
- **Iom-fhillteachd**: Ged a tha an leabharlann beairteach ann am feartan, dh’fhaodadh e a bhith barrachd na tha a dhìth airson pròiseactan nas sìmplidhe agus faodaidh e barrachd suidheachaidh is rèiteachaidh a dhìth an coimeas ri roghainnean eile.

**Breith**:  
Tha AG Charts cumhachdach agus beairteach ann am feartan ach is dòcha nach e an roghainn as freagarraiche air sgàth a nàdar malairteach agus structar cosgais. Tha a fhreagarrachd an urra ri an urrainn don bhuidseat tionndaidhean pàighte a ghabhail a-steach no an fheàrr le roghainnean stòr fosgailte.

---

### 5. **Highcharts**

**Sealladh coitcheann**:  
Tha Highcharts na leabharlann clàran-dealbh mòr-chòrdte ainmeil airson a raon farsaing de sheòrsaichean chlàran-dealbh agus roghainnean gnàthachaidh cumhachdach.

**Neartan**:
- **Seòrsaichean chlàran-dealbh farsaing**: Bheir Highcharts taic do raon farsaing de chlàran-dealbh, a’ gabhail a-steach coinneal, radar, àite, agus mapaichean cruinn-eòlasach.
- **Eadar-ghnìomhach agus dinamach**: Bheir Highcharts feartan eadar-ghnìomhach beairteach, a’ gabhail a-steach drill-downs, zoomadh, agus panadh.
- **Furasta a chleachdadh**: Tha API càirdeil do luchd-cleachdaidh agus deagh sgrìobhainnean aige, a’ fàgail e furasta tòiseachadh.

**Laigsean**:
- **Cead malairteach**: Ged a bheir Highcharts tionndadh saor airson cleachdadh neo-mhalairteach, tha an cead malairteach daor, a dh’fhaodadh a bhith na dhrawback susbainteach do chompanaidhean tòiseachaidh.
- **Lùb ionnsachaidh**: Ged nach eil e cho cas ri ECharts, faodaidh an lùb ionnsachaidh airson Highcharts a bhith fhathast dùbhlanach do luchd-tòiseachaidh.

**Breith**:  
Tha Highcharts na leabharlann beairteach ann am feartan, ach tha a cheadachadh malairteach ga dhèanamh nas lugha freagarrach airson pròiseactan stòr fosgailte, cugallach a thaobh cosgais. Tha na roghainnean clàran-dealbh farsaing aige na bhuannachd, ach tha cùis ceadachaidh a’ cuingealachadh a tharraing airson a’ chùis chleachdaidh seo.

---

### 6. **Carbon Charts**

**Sealladh coitcheann**:  
Tha Carbon Charts na leabharlann clàran-dealbh a chaidh a leasachadh le IBM, air a dhealbhadh airson clàran-dealbh tarraingeach agus gu math gnàthachail a chruthachadh.

**Neartan**:
- **Gnàthachalachd**: Leigidh Carbon Charts le gnàthachadh farsaing air coltas agus giùlan clàran-dealbh.
- **Stòr fosgailte**: Tha e saor agus stòr fosgailte, a fhreagras air riatanas a’ phròiseict airson fuasglaidhean cunnartach buidseit.
- **Taic airson chlàran-dealbh cumanta**: Bheir e taic do sheòrsaichean chlàran-dealbh cumanta leithid doughnut, radar, agus àite, ged a tha taic air a dhìth airson sheòrsaichean nas adhartaiche leithid mapaichean cruinn-eòlasach no clàran-dealbh coinnle.

**Laigsean**:
- **Seòrsaichean chlàran-dealbh adhartach cuingealaichte**: Chan eil e a’ toirt taic do mhapaichean cruinn-eòlasach, clàran-dealbh pròiseas cruinneachaidh, no clàran-dealbh coinnle, a tha riatanach don phròiseact.
- **Eag-shiostam nas lugha**: Tha coimhearsnachd agus eag-shiostam nas lugha aig Carbon Charts an coimeas ri leabharlannan clàran-dealbh nas motha leithid ECharts no Highcharts.

**Breith**:  
Tha Carbon Charts stòr fosgailte agus gnàthachail ach tha taic airson nan seòrsaichean chlàran-dealbh nas toinnte a tha a dhìth airson a’ phròiseict seo a dhìth air. Tha e nas freagarraiche airson feumalachdan clàran-dealbh nas sìmplidhe.

---

### 7. **Layer Cake**

**Sealladh coitcheann**:  
Tha Layer Cake na leabharlann lèirsinn dàta a chaidh a dhealbhadh airson lèirsinnean sùbailte, sreathach a chruthachadh.

**Neartan**:
- **Sreathan gnàthachail**: Bheir e roghainnean sreathachaidh cumhachdach airson lèirsinnean toinnte.
- **Stòr fosgailte**: Tha e saor agus stòr fosgailte, ga dhèanamh na roghainn ion-dhèanta airson pròiseactan cunnartach buidseit.

**Laigsean**:
- **Sgrìobhainnean cuingealaichte**: Tha sgrìobhainnean farsaing agus taic coimhearsnachd a dhìth air Layer Cake, ga dhèanamh nas duilghe obrachadh leis an coimeas ri leabharlannan nas stèidhichte.
- **Chan eil e air a thogail airson chlàran-dealbh**: Tha Layer Cake nas freagarraiche airson lèirsinnean nach eil nan clàran-dealbh, agus mar sin tha na roghainnean clàran-dealbh dìreach às a’ bhogsa cuingealaichte.

**Breith**:  
Ged a tha e inntinneach airson lèirsinnean sònraichte, chan eil Layer Cake air leth freagarrach airson riatanasan clàran-dealbh traidiseanta leithid clàran-dealbh coinnle no clàran-dealbh radar. Tha e nas freagarraiche airson lèirsinnean gnàthaichte taobh a-muigh sgòp chlàran-dealbh àbhaisteach.

---

### 8. **D3.js**

**Sealladh coitcheann**:  
Tha D3.js na leabharlann JavaScript cumhachdach airson lèirsinnean stiùirichte le dàta a chruthachadh tro HTML, SVG, agus CSS.

**Neartan**:
- **Sùbailteachd gun choimeas**: Leigidh D3.js le cha mhòr seòrsa sam bith de lèirsinn ghnàthaichte a chruthachadh, ga dhèanamh glè chumhachdach airson chlàran-dealbh adhartach agus eadar-ghnìomhach.
- **Feartan farsaing**: Bheir e taic do gach seòrsa chlàran-dealbh a tha a dhìth, a’ gabhail a-steach mapaichean cruinn-eòlasach, clàran-dealbh cruinneachaidh, agus tuilleadh.
- **Gnàthachail**: Chan eil an ìre gnàthachaidh ann an D3.js coltach ri rud sam bith eile, a’ leigeil le luchd-leasachaidh lèirsinnean gu math freagarrach a thogail.

**Laigsean**:
- **Lùb ionnsachaidh chas**: Tha lùb ionnsachaidh chas aig D3.js agus tha e nas toinnte amalachadh an coimeas ri leabharlannan eile.
- **Ùine-ghlacach**: Faodaidh togail chlàran-dealbh ann an D3.js a bhith ùine-ghlacach, gu sònraichte airson chlàran-dealbh cumanta leithid clàran-dealbh coinnle no doughnut.

**Breith**:  
Tha D3.js air leth cumhachdach airson chlàran-dealbh adhartach, gnàthaichte ach tha e barrachd na tha a dhìth airson mòran chùisean cleachdaidh àbhaisteach air sgàth a lùb ionnsachaidh chas agus ùine leasachaidh. Tha e as fheàrr airson suidheachaidhean far nach eil na leabharlannan clàran-dealbh eile a’ toirt seachad na h-ìre gnàthachaidh a tha a dhìth.

---

### Co-dhùnadh

Às dèidh measadh a dhèanamh air na leabharlannan stèidhichte air feumalachdan a’ phròiseict, tha **Apache ECharts** a’ seasamh a-mach mar an roghainn as fheàrr. Bheir e taic don raon slàn de chlàran-dealbh a tha a dhìth, a’ gabhail a-steach mapaichean cruinn-eòlasach, clàran-dealbh coinnle, agus clàran-dealbh cruinneachaidh. Tha e stòr fosgailte, beairteach ann am feartan, agus gu math eadar-ghnìomhach, a fhreagras gu foirfe air amasan a’ phròiseict. Ged a bheir **D3.js** an sùbailteachd as motha, tha a iom-fhillteachd agus tasgadh ùine ga dhèanamh nas lugha freagarrach airson companaidh tòiseachaidh a tha airson ath-aithris gu luath. Tha **ApexCharts** agus **Chart.js** nan roghainnean math eile airson phròiseactan nas sìmplidhe ach tha taic airson sheòrsaichean chlàran-dealbh adhartach a dhìth orra.
