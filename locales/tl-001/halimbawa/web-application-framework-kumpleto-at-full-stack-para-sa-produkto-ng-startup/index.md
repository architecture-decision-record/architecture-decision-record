# Architecture Decision Record: web application framework, kumpleto, full stack, para sa produkto ng startup

<!-- 

ChatGPT prompt

Long software architecture decision record 
for a web application framework, batteries included, full stack, for a startup product.

Evaluate Python Django, Ruby on Rails, Phoenix Elixir, Rust Loco.

Primary need: web application for paying customers to sign in, upload files, process data, and view reports. 

High importance: 1. Agile development because this is for a startup. 2. Full-stack because we do not want to spend extra time on a separate front-end. 3. Works well with AI/ML tools for data analysis, such as Project Jupyter notebooks.

Low importance: 1. Runtime speed. 2. Scalability. 3. Backwards compatibility.

-->

**Pangunahing Layunin:**  
Bumuo ng web application para sa mga nagbabayad na customer na mag-sign in, mag-upload ng mga file, magproseso ng data, at tumingin ng mga ulat, na nakatuon sa agile na pagbuo, full-stack na functionality, at matibay na compatibility sa mga AI/ML tool, lalo na sa mga Project Jupyter notebook.

### Konteksto at mga Requirement:

1. **Agile na Pagbuo (Mataas na Priyoridad)**: Bilang isang startup, kailangan namin ng mabilis na pag-iterate at flexibility. Susi sa aming siklo ng pagbuo ang mga agile na gawi, tulad ng mabilis na prototyping, iterative na pagbuo, at kakayahang umangkop sa pagbabago.

2. **Full-Stack na Framework (Mataas na Priyoridad)**: Layunin naming bawasan ang overhead sa pamamagitan ng pagpili ng framework na kayang humawak nang mahusay sa parehong backend at frontend, na nagbabawas sa pangangailangan para sa hiwalay na front-end framework.

3. **Compatibility sa mga AI/ML Tool (Mataas na Priyoridad)**: Mahalaga ang kakayahang madaling mag-integrate sa mga data analysis tool tulad ng mga Jupyter notebook at sa data science ecosystem ng Python (NumPy, Pandas, TensorFlow, atbp.). Magpapadali ito sa mahusay na pagproseso ng data at pag-uulat.

4. **Mga Pamantayang Mababa ang Kahalagahan**:
   - **Bilis sa Runtime**: Bagama't may kaugnayan ang performance, hindi ito ang pinakakritikal na salik sa simula dahil mas nababahala kami sa bilis ng pagbuo at pagkakumpleto ng mga feature.
   - **Scalability**: Inaasahan namin ang paglago, ngunit maaaring tugunan sa kalaunan ang mga alalahanin sa scalability, at hindi ito pangunahing requirement sa ngayon.
   - **Backwards Compatibility**: Nakatuon kami sa mga kasalukuyang teknolohiya at hindi gaanong nababahala sa backward compatibility sa mga legacy system.

### Mga Framework na Sinuri:

1. **Django (Python)**  
2. **Ruby on Rails (Ruby)**  
3. **Phoenix (Elixir)**  
4. **Loco (Rust)**

---

### 1. **Django (Python)**

**Pangkalahatang-ideya**:  
Ang Django ay high-level na web framework para sa Python na nagtataguyod ng mabilis na pagbuo at malinis, praktikal na disenyo. Kilala ito sa pilosopiya nitong “batteries included”, na nangangahulugang kasama na rito ang maraming feature tulad ng authentication, routing, ORM, at paghawak ng form agad-agad.

**Mga Lakas**:  
- **Full-Stack**: Ang Django ay komprehensibo at full-stack na framework na kayang humawak sa parehong pangangailangan sa backend at frontend gamit ang mga integrated na feature (hal., templating engine, admin interface).
- **Agile na Pagbuo**: Ang mahusay na natukoy na estruktura at mga kumbensyon ng Django ay nagbibigay-daan sa mabilis na pagbuo at kakayahang umangkop, na kritikal sa kapaligiran ng startup. Kasama sa framework ang napakahusay na dokumentasyon at mayamang ecosystem ng mga third-party na package, na nagpapabilis sa pagbuo.
- **AI/ML Integration**: Walang kapantay ang ecosystem ng Python pagdating sa data science at machine learning. Ang Django, bilang nakabatay sa Python, ay maayos na nag-iintegrate sa mga tool tulad ng mga Jupyter notebook, Pandas, NumPy, TensorFlow, at scikit-learn.
- **Komunidad at Ecosystem**: May malawak na komunidad ang Django, matibay na dokumentasyon, at malawak na hanay ng mga plugin at extension, na malaki ang naitutulong sa pagpapabilis ng pagbuo at pag-troubleshoot.
  
**Mga Kahinaan**:  
- **Bilis sa Runtime**: Karaniwang mas mabagal ang Python kumpara sa mga wikang tulad ng Rust o Elixir. Gayunpaman, para sa gamit na ito, kung saan hindi pangunahing alalahanin ang performance, maaaring hindi ito maging dealbreaker.
- **Scalability**: Bagama't lubhang scalable ang Django, maaaring may mga hamon sa napakataas na sukat kung walang maingat na optimisasyon (hal., kapag humahawak ng mabibigat na sabay-sabay na kahilingan). Gayunpaman, maaari pa ring epektibong i-scale ang Django gamit ang load balancing at mga pamamaraan sa caching.

**Hatol**:  
Mahusay na umaayon ang Django sa mga requirement para sa agile na pagbuo, full-stack na suporta, at compatibility sa AI/ML. Ang integrasyon nito sa Python ay nag-aalok ng tuloy-tuloy na access sa mga data science tool at library na kinakailangan para sa application.

---

### 2. **Ruby on Rails (Ruby)**

**Pangkalahatang-ideya**:  
Ang Ruby on Rails (RoR) ay hinog at full-stack na web application framework na kilala sa pamamaraang convention-over-configuration nito, na nagpapadali sa mabilis na pagbuo.

**Mga Lakas**:  
- **Full-Stack**: Kasama sa RoR ang mga built-in na tool para sa parehong backend at frontend na pagbuo (hal., mga view, template, scaffolding), at ang mayamang library nito ng mga gem ay nagpapahintulot ng mabilis na pagpapatupad ng iba't ibang feature.
- **Agile na Pagbuo**: Partikular na kilala ang Ruby on Rails sa mabibilis na siklo ng iterasyon nito, na kapaki-pakinabang para sa mga startup na gustong mabilis na mag-iterate sa mga feature. Sinusuportahan ng RoR ang test-driven development (TDD) at may matatag na ecosystem para sa mga agile na workflow.
- **Komunidad at Ecosystem**: May matatag at matibay na komunidad ang RoR at malawak na hanay ng mga gem na makapagpapabilis ng pagbuo.
- **Dali ng Paggamit**: May napaka-developer-friendly na syntax ang Rails at kilala sa pagpapabilis at pagpapasimple ng mga gawain tulad ng database migration, arkitekturang model-view-controller (MVC), at paghawak ng route.

**Mga Kahinaan**:  
- **Performance**: Karaniwang mas mabagal ang runtime performance ng Ruby kumpara sa Python o Elixir. Bagama't maaaring mag-scale ang RoR gamit ang tamang infrastructure, maaaring maging bottleneck ang performance ng Ruby para sa mga application na nangangailangan ng mabigat na real-time na pagproseso o mataas na sabay-sabay na trapiko.
- **AI/ML Integration**: Bagama't may ilang machine learning library ang Ruby, hindi ito kasing-lawak na inaampon sa komunidad ng AI/ML gaya ng Python. Hindi kasing-tuloy-tuloy ang integrasyon sa mga tool tulad ng mga Jupyter notebook, na ginagawang mas matibay na pagpipilian ang Python para sa mga application na mabigat sa data.
  
**Hatol**:  
Bagama't mahusay ang Ruby on Rails sa agile na pagbuo at mabilis na prototyping, kulang ito sa compatibility sa AI/ML kumpara sa Python (Django). Isa itong viable na pagpipilian para sa mga startup na inuuna ang mabilis na pag-iterate kaysa sa malalim na integrasyon ng data analysis.

---

### 3. **Phoenix (Elixir)**

**Pangkalahatang-ideya**:  
Ang Phoenix ay web framework na binuo gamit ang Elixir, isang functional programming language na dinisenyo para sa scalability at concurrency. Ginagamit ng Phoenix ang Erlang VM, na kilala sa paghawak ng napakalaking concurrency at mga sistemang fault-tolerant.

**Mga Lakas**:  
- **Scalability at Performance**: Namumukod ang Phoenix sa scalability at paghawak ng mataas na concurrency. Binuo ito sa Erlang VM, na kayang sumuporta sa libu-libo (o milyon-milyon pa nga) na sabay-sabay na koneksyon, kaya malakas itong kandidato para sa mga application na nangangailangan ng real-time na pagproseso ng data o mataas na dami ng trapiko.
- **Full-Stack**: Kasama sa Phoenix ang lahat ng kailangan para buuin ang parehong backend at frontend ng isang application. Sinusuportahan nito ang mga live view para sa mga interactive na pag-update ng UI at may kasamang templating engine.
- **Agile na Pagbuo**: Lubhang modular ang Phoenix, na nagpapahintulot ng mabilis na pag-iterate sa mga feature. Angkop na angkop ito sa mga startup na kailangang kumilos nang mabilis.
- **Compatibility sa AI/ML**: Bagama't may lumilitaw na machine learning library ang Elixir, hindi ito kasing-lawak na sinusuportahan para sa mga gawain sa AI/ML gaya ng Python. Mangangailangan ng mga workaround ang pag-integrate sa mga tool tulad ng mga Jupyter notebook, dahil hindi kasing-hinog ng sa Python ang ecosystem ng Elixir para sa data science.

**Mga Kahinaan**:  
- **AI/ML Ecosystem**: Hindi ang Elixir ang pangunahing wikang ginagamit sa data science o machine learning, at hindi kasing-hinog ng sa Python ang ecosystem. Kaya, magiging mahirap ang integrasyon sa mga tool tulad ng mga Jupyter notebook o mga popular na AI library (TensorFlow, PyTorch).
- **Learning Curve**: Kung hindi pamilyar ang koponan sa functional programming at Elixir, maaaring mas matarik ang learning curve.

**Hatol**:  
Mahusay na pagpipilian ang Phoenix kung pangunahing alalahanin ang scalability at concurrency. Gayunpaman, dahil sa priyoridad sa compatibility sa AI/ML, maaaring hindi ang Phoenix ang pinakaangkop dahil sa limitadong ecosystem ng Elixir sa larangang ito.

---

### 4. **Loco (Rust)**

**Pangkalahatang-ideya**:  
Ang Loco ay web framework na binuo gamit ang Rust, isang systems programming language na kilala sa performance, memory safety, at concurrency. Lalong nagiging popular ang Rust sa pagbuo ng mga application na mataas ang performance.

**Mga Lakas**:  
- **Performance**: Ang pangunahing lakas ng Rust ay ang mataas na performance at memory safety nito, kaya napakahusay na pagpipilian ito para sa mga application na nangangailangan ng low-level na kontrol o napakataas na performance.
- **Concurrency**: Tinitiyak ng ownership system ng Rust ang memory safety habang pinahihintulutan ang ligtas na concurrent programming, kaya mainam ito para sa mga sistemang kailangang mag-scale nang mahusay at humawak ng parallelism.

**Mga Kahinaan**:  
- **Full-Stack na Pagbuo**: Ang Loco, bagama't may pangako, ay hindi kasing-hinog ng ibang framework pagdating sa pagbibigay ng kumpletong full-stack na solusyon. Mas angkop ito sa backend na pagbuo, at umuusbong pa lamang ang front-end ecosystem sa paligid ng Rust.
- **Agile na Pagbuo**: Maaaring mas mabagal ang pagbuo gamit ang Rust kumpara sa mga mas mataas na antas na wika tulad ng Python o Ruby dahil sa mas mababang antas na kalikasan at mas matarik na learning curve nito.
- **AI/ML Ecosystem**: Wala sa Rust ang kasing-lawak na ecosystem para sa AI/ML gaya ng Python. Bagama't may mga lumalaking library sa Rust para sa numerical computing, mas hindi pa hinog ang mga ito kaysa sa mga alok ng Python, tulad ng mga Jupyter notebook o mga machine learning framework.
  
**Hatol**:  
Bagama't nag-aalok ang Rust at ang framework nitong Loco ng pambihirang performance, ang kakulangan ng full-stack na suporta, mga benepisyo ng agile na pagbuo, at AI/ML ecosystem ay ginagawa itong hindi gaanong mainam para sa partikular na gamit na ito. Mas angkop ito sa mga application na kritikal sa performance kaysa sa mabilis na web development na may integrated na data science tool.

---

### Konklusyon

Matapos suriin ang mga opsyon batay sa mga requirement ng proyekto, ang **Django (Python)** ang pinakaangkop na pagpipilian. Nag-aalok ito ng mga sumusunod na bentahe:

- **Mga Kakayahang Full-Stack**: Ang Django ay full-stack na framework na nag-iintegrate ng parehong backend at frontend na pagbuo.
- **Agile na Pagbuo**: Angkop na angkop ang framework sa mabilis na prototyping at iterasyon, na mahalaga sa kapaligiran ng startup.
- **Compatibility sa AI/ML**: Ang Python ang nangungunang wika sa AI/ML, at tinitiyak ng compatibility ng Django sa mga library tulad ng mga Jupyter notebook ang maayos na integrasyon para sa data analysis at pagproseso.
- **Komunidad at Ecosystem**: Ang matibay na suporta ng komunidad at malawak na ecosystem ng library ng Django ay nagbibigay ng maraming tool para pabilisin ang pagbuo.

Bagama't malakas ding kandidato ang **Ruby on Rails** para sa agile na pagbuo, ang limitadong suporta nito sa AI/ML ay ginagawa itong hindi gaanong mainam para sa partikular na gamit na ito. Ang **Phoenix (Elixir)** at **Loco (Rust)**, bagama't mahusay para sa scalability at performance, ay kulang sa AI/ML integration at full-stack na pagbuo. Samakatuwid, ang Django ang inirerekomendang framework para sa proyektong ito.
