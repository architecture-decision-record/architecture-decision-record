# Architecture Decision Record: chart library toolkit fo data visualization wey use TypeScript and JSON

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
To select advanced charting toolkit to create interactive visualizations, wey focus on financial data, scientific data, and government data with TypeScript and JSON. Di library suppose provide robust features, flexibility, and e suppose be open-source. 

### Context and Requirements:

1. **Agile Development (High Priority)**: As startup, quick iteration, prototyping, and flexibility for development essential. Di chart library must allow fast development cycles.
   
2. **Chart Types (High Priority)**:
   - **Doughnut Chart**
   - **Radar Chart**
   - **Clustering Process Chart**
   - **Area Chart with Time Axis**
   - **Candlestick Chart**
   - **Nightingale Chart**
   - **Geo SVG Map**
   
   Dis chart types specifically important to visualize complex datasets, like financial trends, scientific metrics, and geographical information.

3. **Free and Open Source (High Priority)**: Di toolkit suppose be open-source so we go avoid licensing costs, e go provide transparency, and e go offer flexibility for customization.

4. **Low Importance Criteria**:
   - **Runtime Speed**: Even though performance important, e no be top priority for dis decision.
   - **Scalability**: Even though scalability generally important, di immediate need na to build MVP wey fit grow as time dey go. We fit address scalability concerns later.
   - **Backwards Compatibility**: E no be primary concern for di initial build, as long as di library modern and dem dey actively maintain am.

### Libraries Evaluated:

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
Apache ECharts na powerful, flexible charting library for interactive, customizable visualizations. E provide support for wide variety of charts and e strong particularly for complex, dynamic visualizations.

**Strengths**:
- **Advanced Interactivity**: ECharts excel to provide interactive charts, wey offer features like zooming, panning, and dynamic data updates.
- **Doughnut, Radar, Candlestick, Geo SVG Maps**: ECharts support many of di chart types wey we require, including doughnut, radar, candlestick, and geographical map visualizations.
- **Free and Open Source**: ECharts na open-source library, wey fit di budget-conscious nature of startup and e provide freedom to modify di code.
- **Flexibility and Extensibility**: Highly customizable, with extensive support for animations, custom visualizations, and advanced charting techniques.
  
**Weaknesses**:
- **Learning Curve**: ECharts, even though e powerful, fit get steeper learning curve because of im flexibility and extensive API.
- **Documentation Complexity**: Di documentation comprehensive but e fit overwhelm developers wey just dey start with am.

**Verdict**:  
ECharts highly suitable for di project because of im support for interactive charts, including all di required types like candlestick charts, radar charts, and geo maps. Im open-source nature align with di project need for flexibility and cost-effectiveness.

---

### 2. **Chart.js**

**Overview**:  
Chart.js na simple, easy-to-use charting library to build common chart types. People know am for im simplicity and ease of integration.

**Strengths**:
- **Ease of Use**: Chart.js very simple to set up and use, with minimal learning curve.
- **Open Source**: Chart.js free and open-source, wey critical to reduce costs.
- **Common Chart Types**: E support basic charts like doughnut, area, radar, and line charts, wey cover most of di primary needs.

**Weaknesses**:
- **Limited Advanced Charts**: Chart.js no natively support complex chart types like candlestick charts, geo SVG maps, or clustering process charts. Even though you fit add dis features through plugins or customization, e no straightforward as with other libraries.
- **Interactivity**: Even though Chart.js support basic interactivity (e.g., tooltips and hover effects), e no offer features wey advanced as ECharts or D3.js.

**Verdict**:  
Chart.js great for simple, quick projects, but im lack of support for complex chart types make am unsuitable for data-heavy application wey get advanced needs like candlestick charts and geo maps. E good choice for prototyping, but for di required chart types, dem recommend more advanced tools.

---

### 3. **ApexCharts**

**Overview**:  
ApexCharts na modern charting library wey provide variety of chart types and focus on interactive visualizations with easy-to-use API.

**Strengths**:
- **Interactive Features**: ApexCharts offer interactive charts with tooltips, zooming, panning, and updates.
- **Support for Financial and Scientific Charts**: E support wide variety of chart types, including candlestick charts, radar charts, and area charts.
- **Ease of Use**: E get straightforward API and e simple to integrate into project.
- **Free and Open Source**: ApexCharts offer free open-source version wey suitable for many use cases.
  
**Weaknesses**:
- **Complex Customization**: Even though e provide many features, di customization options no flexible as ECharts or D3.js for highly complex or custom charting needs.
- **Geo Maps**: ApexCharts no natively support geo maps or clustering process charts, wey dem require for dis project.

**Verdict**:  
ApexCharts na strong contender because of im ease of use and interactivity, but e fall short on certain advanced chart types, particularly di need for geo maps and clustering charts. E good option for simpler charts but e lack some required features.

---

### 4. **AG Charts**

**Overview**:  
AG Charts na commercial-grade charting library wey dem design for performance and precision. E highly suitable to create financial, scientific, and business dashboards.

**Strengths**:
- **Advanced Chart Types**: AG Charts support many advanced chart types, including candlestick charts, area charts, radar charts, and more. E also offer deep integration with other AG-Grid products.
- **High Performance**: E offer excellent performance, especially wen e dey deal with large datasets.
- **Interactivity**: AG Charts support variety of interactive features like zooming, tooltips, and dynamic updates.

**Weaknesses**:
- **Not Fully Free**: Even though AG Charts offer free version, di full-featured version na paid, wey fit be barrier for startups wey wan minimize costs.
- **Complexity**: Even though di library feature-rich, e fit be overkill for simpler projects and e fit require more setup and configuration compared to other options.

**Verdict**:  
AG Charts powerful and feature-rich but e fit no be di best fit because of im commercial nature and cost structure. Whether e suitable depend on whether di budget fit accommodate paid versions or whether dem prefer open-source alternatives.

---

### 5. **Highcharts**

**Overview**:  
Highcharts na popular charting library wey people know for im wide range of chart types and powerful customization options.

**Strengths**:
- **Comprehensive Chart Types**: Highcharts support wide variety of charts, including candlestick, radar, area, and geo maps.
- **Interactive and Dynamic**: Highcharts provide rich interactive features, including drill-downs, zooming, and panning.
- **Ease of Use**: E get user-friendly API and good documentation, wey make am easy to get started.

**Weaknesses**:
- **Commercial License**: Even though Highcharts offer free version for non-commercial use, di commercial license expensive, wey fit be significant drawback for startups.
- **Learning Curve**: Even though e no steep as ECharts, di learning curve for Highcharts fit still challenging for beginners.

**Verdict**:  
Highcharts na feature-rich library, but im commercial licensing make am less suitable for open-source, cost-sensitive projects. Im comprehensive charting options na plus, but di licensing issue limit im appeal for dis use case.

---

### 6. **Carbon Charts**

**Overview**:  
Carbon Charts na charting library wey IBM develop, wey dem design to create charts wey visually appealing and highly customizable.

**Strengths**:
- **Customizability**: Carbon Charts allow extensive customization of chart appearance and behavior.
- **Open Source**: E free and open-source, wey align with di project requirement for budget-friendly solutions.
- **Support for Common Charts**: E support common chart types like doughnut, radar, and area charts, even though e lack support for more advanced types like geo maps or candlestick charts.

**Weaknesses**:
- **Limited Advanced Chart Types**: E no support geo maps, clustering process charts, or candlestick charts, wey essential for di project.
- **Smaller Ecosystem**: Carbon Charts get smaller community and ecosystem compared to larger chart libraries like ECharts or Highcharts.

**Verdict**:  
Carbon Charts open-source and customizable but e lack support for di more complex chart types wey dis project need. E more suitable for simpler charting needs.

---

### 7. **Layer Cake**

**Overview**:  
Layer Cake na data visualization library wey dem design to create flexible, layered visualizations.

**Strengths**:
- **Customizable Layers**: E provide powerful layering options for complex visualizations.
- **Open Source**: E free and open-source, wey make am viable option for budget-conscious projects.

**Weaknesses**:
- **Limited Documentation**: Layer Cake lack extensive documentation and community support, wey make am more difficult to work with compared to more established libraries.
- **Not Built for Charts**: Layer Cake better suited for non-chart visualizations, so im out-of-the-box charting options limited.

**Verdict**:  
Even though Layer Cake interesting for unique visualizations, e no ideal for traditional charting requirements like candlestick charts or radar charts. E more suited for custom visualizations wey dey outside di scope of standard charts.

---

### 8. **D3.js**

**Overview**:  
D3.js na powerful JavaScript library to create data-driven visualizations through HTML, SVG, and CSS.

**Strengths**:
- **Unmatched Flexibility**: D3.js allow you create virtually any type of custom visualization, wey make am highly powerful for advanced and interactive charts.
- **Extensive Features**: E support all di chart types wey dem require, including geo maps, clustering charts, and more.
- **Customizable**: Di level of customization for D3.js unparalleled, wey allow developers build highly tailored visualizations.

**Weaknesses**:
- **Steep Learning Curve**: D3.js get steep learning curve and e more complex to integrate compared to other libraries.
- **Time-Consuming**: To build charts for D3.js fit take plenty time, especially for common charts like candlestick or doughnut charts.

**Verdict**:  
D3.js incredibly powerful for advanced, customized charts but e overkill for many typical use cases because of im steep learning curve and development time. E best for situations where di other chart libraries no provide di level of customization wey dem require.

---

### Conclusion

After we evaluate di libraries based on di project needs, **Apache ECharts** stand out as di best option. E support di full range of required charts, including geo maps, candlestick charts, and clustering charts. E open-source, feature-rich, and highly interactive, wey align perfectly with di project goals. Even though **D3.js** offer di most flexibility, im complexity and time investment make am less ideal for startup wey wan iterate quick. **ApexCharts** and **Chart.js** na good alternatives for simpler projects but dem lack support for advanced chart types.
