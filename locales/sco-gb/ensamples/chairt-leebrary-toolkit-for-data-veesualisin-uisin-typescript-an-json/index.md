# Architectur Decisioun Record: chairt leebrary toolkit for data veesualisin uisin TypeScript an JSON

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

**Primary Objective:**  
Tae select an advanced chairtin toolkit for makin interactive veesualisatiouns, focusin on financial data, scientific data, an government data uisin TypeScript an JSON. The leebrary sud provide robust features, flexibility, an be open-source. 

### Context an Requirements:

1. **Agile Development (High Priority)**: As a startup, quick iteration, prototypin, an flexibility in develapment are essential. The chairt leebrary maun allou for fast develapment cycles.
   
2. **Chart Types (High Priority)**:
   - **Doughnut Chairt**
   - **Radar Chairt**
   - **Clustering Process Chairt**
   - **Area Chairt wi Time Axis**
   - **Candlestick Chairt**
   - **Nightingale Chairt**
   - **Geo SVG Map**
   
   Thir chairt types are specifically important for veesualisin complex datasets, sic as financial trends, scientific metrics, an geographical information.

3. **Free and Open Source (High Priority)**: The toolkit sud be open-source tae avoid licensin costs, provide transparency, an offer flexibility for customisation.

4. **Low Importance Criteria**:
   - **Runtime Speed**: While performance is important, it isna a tap priority for this decisioun.
   - **Scalability**: Tho scalability is generally important, the immediate need is tae big an MVP that micht growe ower time. Scalability concerns can be addressed efter.
   - **Backwards Compatibility**: No a primary concern for the initial build, sae lang as the leebrary is modern an actively keepit up.

### Leebraries Evaluatit:

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

**Overview**:  
Apache ECharts is a pouerfu, flexible chairtin leebrary for interactive, customisable veesualisatiouns. It provides support for a braid variety o chairts an is particularly strang in complex, dynamic veesualisatiouns.

**Strengths**:
- **Advanced Interactivity**: ECharts excels in providin interactive chairts, offerin features like zoomin, pannin, an dynamic data updates.
- **Doughnut, Radar, Candlestick, Geo SVG Maps**: ECharts supports mony o the required chairt types, includin doughnut, radar, candlestick, an geographical map veesualisatiouns.
- **Free and Open Source**: ECharts is an open-source leebrary, which fits the budget-conscious nature o a startup an provides freedom tae modify the code.
- **Flexibility and Extensibility**: Heichly customisable, wi extensive support for animatiouns, custom veesualisatiouns, an advanced chairtin techniques.
  
**Weaknesses**:
- **Learning Curve**: ECharts, while pouerfu, can hae a steeper learnin curve due tae its flexibility an extensive API.
- **Documentation Complexity**: The documentation is comprehensive but can be owerwhelmin for developers juist stairtin oot wi it.

**Verdict**:  
ECharts is heichly suitable for the project due tae its support for interactive chairts, includin aw the required types like candlestick chairts, radar chairts, an geo maps. Its open-source nature aligns wi the project's need for flexibility an cost-effectiveness.

---

### 2. **Chart.js**

**Overview**:  
Chart.js is a simple, easy-tae-uise chairtin leebrary for biggin common chairt types. It’s kent for its simplicity an ease o integratioun.

**Strengths**:
- **Ease of Use**: Chart.js is unco simple tae set up an uise, wi a minimal learnin curve.
- **Open Source**: Chart.js is free an open-source, which is critical for reducin costs.
- **Common Chart Types**: It supports basic chairts like doughnut, area, radar, an line chairts, which cover maist o the primary needs.

**Weaknesses**:
- **Limited Advanced Charts**: Chart.js daesna natively support complex chairt types like candlestick chairts, geo SVG maps, or clusterin process chairts. While thir features can be addit throu plugins or customisation, it isna as straichtforrit as wi ither leebraries.
- **Interactivity**: Tho Chart.js supports basic interactivity (e.g., tooltips an hover effects), it daesna offer as advanced features as ECharts or D3.js.

**Verdict**:  
Chart.js is great for simple, quick projects, but its lack o support for complex chairt types maks it unsuitable for a data-heavy application wi advanced needs like candlestick chairts an geo maps. It’s a guid chyce for prototypin, but for the required chairt types, mair advanced tuils are recommendit.

---

### 3. **ApexCharts**

**Overview**:  
ApexCharts is a modern chairtin leebrary that provides a variety o chairt types an focuses on interactive veesualisatiouns wi an easy-tae-uise API.

**Strengths**:
- **Interactive Features**: ApexCharts offers interactive chairts wi tooltips, zoomin, pannin, an updates.
- **Support for Financial and Scientific Charts**: It supports a braid variety o chairt types, includin candlestick chairts, radar chairts, an area chairts.
- **Ease of Use**: It haes a straichtforrit API an is simple tae integrate intae a project.
- **Free and Open Source**: ApexCharts offers a free open-source version that is suitable for mony uise cases.
  
**Weaknesses**:
- **Complex Customization**: While it provides mony features, the customisation options arena as flexible as ECharts or D3.js for heichly complex or custom chairtin needs.
- **Geo Maps**: ApexCharts daesna natively support geo maps or clusterin process chairts, which are required for this project.

**Verdict**:  
ApexCharts is a strang contender due tae its ease o uise an interactivity, but it fa's short on certain advanced chairt types, particularly the need for geo maps an clusterin chairts. It’s a guid option for simpler chairts but lacks some required features.

---

### 4. **AG Charts**

**Overview**:  
AG Charts is a commercial-grade chairtin leebrary designed for performance an precision. It is heichly suitable for makin financial, scientific, an business dashboards.

**Strengths**:
- **Advanced Chart Types**: AG Charts supports mony advanced chairt types, includin candlestick chairts, area chairts, radar chairts, an mair. It an aw offers deep integratioun wi ither AG-Grid products.
- **High Performance**: It offers excellent performance, especially whan dealin wi lairge datasets.
- **Interactivity**: AG Charts supports a variety o interactive features like zoomin, tooltips, an dynamic updates.

**Weaknesses**:
- **Not Fully Free**: While AG Charts offers a free version, the full-featurit version is paid, which could be a barrier for startups leukin tae minimise costs.
- **Complexity**: While the leebrary is feature-rich, it micht be owerkill for simpler projects an can require mair setup an configuratioun compared tae ither options.

**Verdict**:  
AG Charts is pouerfu an feature-rich but micht no be the best fit due tae its commercial nature an cost structur. Its suitability depends on whether the budget can accommodate paid versiouns or if open-source alternatives are preferred.

---

### 5. **Highcharts**

**Overview**:  
Highcharts is a popular chairtin leebrary kent for its braid range o chairt types an pouerfu customisation options.

**Strengths**:
- **Comprehensive Chart Types**: Highcharts supports a braid variety o chairts, includin candlestick, radar, area, an geo maps.
- **Interactive and Dynamic**: Highcharts provides rich interactive features, includin drill-doons, zoomin, an pannin.
- **Ease of Use**: It haes a user-friendly API an guid documentation, makin it easy tae get stairtit.

**Weaknesses**:
- **Commercial License**: While Highcharts offers a free version for non-commercial uise, the commercial licence is expensive, which could be a significant drawback for startups.
- **Learning Curve**: Tho no as steep as ECharts, the learnin curve for Highcharts can still be challengin for beginners.

**Verdict**:  
Highcharts is a feature-rich leebrary, but its commercial licensin maks it less suitable for open-source, cost-sensitive projects. Its comprehensive chairtin options are a plus, but the licensin issue limits its appeal for this uise case.

---

### 6. **Carbon Charts**

**Overview**:  
Carbon Charts is a chairtin leebrary developit bi IBM, designed for makin visually appealin an heichly customisable chairts.

**Strengths**:
- **Customizability**: Carbon Charts allous for extensive customisation o chairt appearance an behaviour.
- **Open Source**: It is free an open-source, which aligns wi the project’s requirement for budget-friendly solutiouns.
- **Support for Common Charts**: It supports common chairt types like doughnut, radar, an area chairts, tho it lacks support for mair advanced types like geo maps or candlestick chairts.

**Weaknesses**:
- **Limited Advanced Chart Types**: It daesna support geo maps, clusterin process chairts, or candlestick chairts, which are essential for the project.
- **Smaller Ecosystem**: Carbon Charts haes a smaller community an ecosystem compared tae lairger chairt leebraries like ECharts or Highcharts.

**Verdict**:  
Carbon Charts is open-source an customisable but lacks support for the mair complex chairt types needit for this project. It is mair suitable for simpler chairtin needs.

---

### 7. **Layer Cake**

**Overview**:  
Layer Cake is a data veesualisatioun leebrary designed for makin flexible, layered veesualisatiouns.

**Strengths**:
- **Customizable Layers**: It provides pouerfu layerin options for complex veesualisatiouns.
- **Open Source**: It’s free an open-source, makin it a viable option for budget-conscious projects.

**Weaknesses**:
- **Limited Documentation**: Layer Cake lacks extensive documentation an community support, makin it mair difficult tae wark wi compared tae mair establisht leebraries.
- **Not Built for Charts**: Layer Cake is better suitit tae non-chairt veesualisatiouns, sae its oot-o-the-box chairtin options are limitit.

**Verdict**:  
While interestin for unique veesualisatiouns, Layer Cake isna ideal for traditional chairtin requirements like candlestick chairts or radar chairts. It’s mair suitit tae custom veesualisatiouns ootside the scope o staundart chairts.

---

### 8. **D3.js**

**Overview**:  
D3.js is a pouerfu JavaScript leebrary for makin data-driven veesualisatiouns throu HTML, SVG, an CSS.

**Strengths**:
- **Unmatched Flexibility**: D3.js lets ye mak virtually onie type o custom veesualisatioun, makin it heichly pouerfu for advanced an interactive chairts.
- **Extensive Features**: It supports aw chairt types required, includin geo maps, clusterin chairts, an mair.
- **Customizable**: The level o customisation in D3.js is unparalleled, lettin developers big heichly tailored veesualisatiouns.

**Weaknesses**:
- **Steep Learning Curve**: D3.js haes a steep learnin curve an is mair complex tae integrate compared tae ither leebraries.
- **Time-Consuming**: Biggin chairts in D3.js can be time-consumin, especially for common chairts like candlestick or doughnut chairts.

**Verdict**:  
D3.js is incredibly pouerfu for advanced, customisit chairts but is owerkill for mony typical uise cases due tae its steep learnin curve an develapment time. It’s best for situatiouns whaur the ither chairt leebraries dinnae provide the required level o customisation.

---

### Conclusion

Efter evaluatin the leebraries based on the project’s needs, **Apache ECharts** staunds oot as the best option. It supports the full range o required chairts, includin geo maps, candlestick chairts, an clusterin chairts. It’s open-source, feature-rich, an heichly interactive, which aligns perfectly wi the project's goals. While **D3.js** offers the maist flexibility, its complexity an time investment mak it less ideal for a startup leukin tae iterate quickly. **ApexCharts** an **Chart.js** are guid alternatives for simpler projects but lack support for advanced chairt types.
