# Cofnod penderfyniad saernïaeth: fframwaith cymwysiadau gwe, popeth wedi'i gynnwys (batteries included), pentwr llawn, ar gyfer cynnyrch cwmni newydd

<!-- 

ChatGPT prompt

Long software architecture decision record 
for a web application framework, batteries included, full stack, for a startup product.

Evaluate Python Django, Ruby on Rails, Phoenix Elixir, Rust Loco.

Primary need: web application for paying customers to sign in, upload files, process data, and view reports. 

High importance: 1. Agile development because this is for a startup. 2. Full-stack because we do not want to spend extra time on a separate front-end. 3. Works well with AI/ML tools for data analysis, such as Project Jupyter notebooks.

Low importance: 1. Runtime speed. 2. Scalability. 3. Backwards compatibility.

-->

**Prif amcan:**  
Adeiladu cymhwysiad gwe i gwsmeriaid sy'n talu allu mewngofnodi, uwchlwytho ffeiliau, prosesu data, a gweld adroddiadau, gan ganolbwyntio ar ddatblygu ystwyth, swyddogaeth pentwr llawn, a chydweddoldeb cryf ag offer deallusrwydd artiffisial/dysgu peirianyddol, yn enwedig llyfrau nodiadau Project Jupyter.

### Cyd-destun a gofynion:

1. **Datblygu ystwyth (blaenoriaeth uchel)**: Fel cwmni newydd, mae angen ailadrodd cyflym a hyblygrwydd arnom. Mae arferion ystwyth, fel creu prototeipiau cyflym, datblygu ailadroddol, a'r gallu i addasu i newid, yn allweddol i'n cylch datblygu.

2. **Fframwaith pentwr llawn (blaenoriaeth uchel)**: Rydym yn anelu at leihau gorbenion drwy ddewis fframwaith a all ymdrin â'r pen ôl a'r pen blaen yn effeithlon, gan leihau'r angen am fframweithiau pen blaen ar wahân.

3. **Cydweddoldeb ag offer deallusrwydd artiffisial/dysgu peirianyddol (blaenoriaeth uchel)**: Mae'r gallu i integreiddio'n hawdd ag offer dadansoddi data fel llyfrau nodiadau Jupyter ac ecosystem gwyddor data Python (NumPy, Pandas, TensorFlow, ac ati) yn hanfodol. Byddai hyn yn hwyluso prosesu data ac adrodd effeithlon.

4. **Meini prawf o bwys isel**:
   - **Cyflymder amser rhedeg**: Er bod perfformiad yn berthnasol, nid dyma'r ffactor pwysicaf ar y dechrau gan ein bod yn poeni mwy am gyflymder datblygu a chyflawnrwydd nodweddion.
   - **Graddadwyedd**: Rydym yn rhagweld twf, ond gellir mynd i'r afael â phryderon graddadwyedd yn ddiweddarach, ac nid yw hwn yn ofyniad cynradd ar hyn o bryd.
   - **Cydweddoldeb tuag yn ôl**: Rydym yn canolbwyntio ar dechnolegau cyfredol ac nid ydym yn poeni llawer am gydweddoldeb tuag yn ôl â systemau etifeddol.

### Fframweithiau a werthuswyd:

1. **Django (Python)**  
2. **Ruby on Rails (Ruby)**  
3. **Phoenix (Elixir)**  
4. **Loco (Rust)**

---

### 1. **Django (Python)**

**Trosolwg**:  
Fframwaith gwe lefel uchel ar gyfer Python yw Django sy'n hyrwyddo datblygu cyflym a dyluniad glân, ymarferol. Mae'n adnabyddus am ei athroniaeth "batteries included", sy'n golygu ei fod yn cynnwys llawer o nodweddion fel dilysu, llwybro, ORM, a thrin ffurflenni yn syth o'r bocs.

**Cryfderau**:  
- **Pentwr llawn**: Mae Django yn fframwaith pentwr llawn cynhwysfawr a all ymdrin ag anghenion pen ôl a phen blaen gyda nodweddion integredig (e.e., peiriant templedi, rhyngwyneb gweinyddu).
- **Datblygu ystwyth**: Mae strwythur a chonfensiynau wedi'u diffinio'n dda Django yn caniatáu datblygu cyflym ac addasrwydd, sy'n hanfodol i amgylchedd cwmni newydd. Daw'r fframwaith gyda dogfennaeth ragorol ac ecosystem gyfoethog o becynnau trydydd parti, sy'n cyflymu datblygu.
- **Integreiddio â deallusrwydd artiffisial/dysgu peirianyddol**: Mae ecosystem Python yn ddigyffelyb o ran gwyddor data a dysgu peirianyddol. Mae Django, gan ei fod yn seiliedig ar Python, yn integreiddio'n ddi-dor ag offer fel llyfrau nodiadau Jupyter, Pandas, NumPy, TensorFlow a scikit-learn.
- **Cymuned ac ecosystem**: Mae gan Django gymuned helaeth, dogfennaeth gadarn, ac ystod eang o ategion ac estyniadau, sy'n cyflymu datblygu a datrys problemau yn sylweddol.
  
**Gwendidau**:  
- **Cyflymder amser rhedeg**: Mae Python yn tueddu i fod yn arafach o'i gymharu ag ieithoedd fel Rust neu Elixir. Fodd bynnag, ar gyfer yr achos defnydd hwn, lle nad perfformiad yw'r prif bryder, efallai nad yw hyn yn torri'r fargen.
- **Graddadwyedd**: Er bod Django yn hynod raddadwy, efallai y bydd heriau ar raddfa uchel iawn heb optimeiddio gofalus (e.e., wrth ymdrin â cheisiadau cydredol trwm). Fodd bynnag, gellir dal i raddio Django yn effeithiol gan ddefnyddio technegau cydbwyso llwyth a storio dros dro (caching).

**Dyfarniad**:  
Mae Django yn cyd-fynd yn dda â'r gofynion ar gyfer datblygu ystwyth, cefnogaeth pentwr llawn, a chydweddoldeb â deallusrwydd artiffisial/dysgu peirianyddol. Mae ei integreiddio â Python yn cynnig mynediad di-dor at yr offer a'r llyfrgelloedd gwyddor data sy'n angenrheidiol ar gyfer y cymhwysiad.

---

### 2. **Ruby on Rails (Ruby)**

**Trosolwg**:  
Fframwaith cymwysiadau gwe pentwr llawn aeddfed yw Ruby on Rails (RoR), sy'n adnabyddus am ei ddull confensiwn-dros-ffurfweddu, sy'n hwyluso datblygu cyflym.

**Cryfderau**:  
- **Pentwr llawn**: Daw RoR ag offer adeiledig ar gyfer datblygu pen ôl a phen blaen (e.e., golygon, templedi, sgaffaldiau), ac mae ei lyfrgell gyfoethog o gemau (gems) yn caniatáu gweithredu amrywiol nodweddion yn gyflym.
- **Datblygu ystwyth**: Mae Ruby on Rails yn arbennig o adnabyddus am ei gylchoedd ailadrodd cyflym, sy'n fanteisiol i gwmnïau newydd sy'n awyddus i ailadrodd nodweddion yn gyflym. Mae RoR yn cefnogi datblygu a yrrir gan brofion (TDD) ac mae ganddo ecosystem sefydledig ar gyfer llifoedd gwaith ystwyth.
- **Cymuned ac ecosystem**: Mae gan RoR gymuned gref, sefydledig iawn ac amrywiaeth eang o gemau a all gyflymu datblygu.
- **Rhwyddineb defnydd**: Mae gan Rails gystrawen gyfeillgar iawn i ddatblygwyr ac mae'n adnabyddus am wneud tasgau fel mudo cronfeydd data, saernïaeth model-view-controller (MVC), a thrin llwybrau yn gyflym ac yn syml.

**Gwendidau**:  
- **Perfformiad**: Mae Ruby yn tueddu i fod â pherfformiad amser rhedeg arafach o'i gymharu â Python neu Elixir. Er y gall RoR raddio gyda'r seilwaith cywir, gallai perfformiad Ruby ddod yn dagfa i gymwysiadau sydd angen prosesu amser real trwm neu draffig cydredol uchel.
- **Integreiddio â deallusrwydd artiffisial/dysgu peirianyddol**: Er bod gan Ruby rai llyfrgelloedd dysgu peirianyddol, nid yw wedi'i fabwysiadu mor eang yn y gymuned deallusrwydd artiffisial/dysgu peirianyddol â Python. Nid yw integreiddio ag offer fel llyfrau nodiadau Jupyter mor ddi-dor, sy'n gwneud Python yn ddewis cryfach ar gyfer cymwysiadau data-trwm.
  
**Dyfarniad**:  
Er bod Ruby on Rails yn rhagori ar ddatblygu ystwyth a chreu prototeipiau cyflym, mae'n brin o ran cydweddoldeb â deallusrwydd artiffisial/dysgu peirianyddol o'i gymharu â Python (Django). Mae'n ddewis dichonadwy i gwmnïau newydd sy'n rhoi blaenoriaeth i ailadrodd cyflym dros integreiddio dadansoddi data dwfn.

---

### 3. **Phoenix (Elixir)**

**Trosolwg**:  
Fframwaith gwe wedi'i adeiladu ag Elixir yw Phoenix, iaith raglennu swyddogaethol a gynlluniwyd ar gyfer graddadwyedd a chydredeg. Mae Phoenix yn manteisio ar beiriant rhithwir Erlang, sy'n adnabyddus am ymdrin â chydredeg enfawr a systemau sy'n goddef diffygion.

**Cryfderau**:  
- **Graddadwyedd a pherfformiad**: Mae Phoenix yn disgleirio o ran graddadwyedd ac ymdrin â chydredeg uchel. Mae wedi'i adeiladu ar beiriant rhithwir Erlang, a all gefnogi miloedd (neu hyd yn oed filiynau) o gysylltiadau cydredol, sy'n ei wneud yn ymgeisydd cryf ar gyfer cymwysiadau sydd angen prosesu data amser real neu draffig cyfaint uchel.
- **Pentwr llawn**: Mae Phoenix yn cynnwys popeth sydd ei angen i adeiladu pen ôl a phen blaen cymhwysiad. Mae'n cefnogi golygon byw (live views) ar gyfer diweddariadau rhyngwyneb defnyddiwr rhyngweithiol ac yn cynnwys peiriant templedi.
- **Datblygu ystwyth**: Mae Phoenix yn hynod fodiwlaidd, sy'n caniatáu ailadrodd cyflym ar nodweddion. Mae'n addas iawn i gwmnïau newydd sydd angen symud yn gyflym.
- **Cydweddoldeb â deallusrwydd artiffisial/dysgu peirianyddol**: Er bod gan Elixir lyfrgelloedd dysgu peirianyddol sy'n dod i'r amlwg, nid yw'n cael ei gefnogi mor eang ar gyfer tasgau deallusrwydd artiffisial/dysgu peirianyddol â Python. Byddai integreiddio ag offer fel llyfrau nodiadau Jupyter yn galw am atebion dros dro, gan nad yw ecosystem Elixir ar gyfer gwyddor data mor aeddfed ag un Python.

**Gwendidau**:  
- **Ecosystem deallusrwydd artiffisial/dysgu peirianyddol**: Nid Elixir yw'r brif iaith a ddefnyddir mewn gwyddor data na dysgu peirianyddol, ac nid yw'r ecosystem mor aeddfed ag un Python. Felly, bydd integreiddio ag offer fel llyfrau nodiadau Jupyter neu lyfrgelloedd deallusrwydd artiffisial poblogaidd (TensorFlow, PyTorch) yn feichus.
- **Cromlin ddysgu**: Os nad yw'r tîm yn gyfarwydd â rhaglennu swyddogaethol ac Elixir, efallai y bydd cromlin ddysgu fwy serth.

**Dyfarniad**:  
Mae Phoenix yn ddewis ardderchog os mai graddadwyedd a chydredeg yw'r prif bryder. Fodd bynnag, o ystyried y flaenoriaeth ar gydweddoldeb â deallusrwydd artiffisial/dysgu peirianyddol, efallai nad Phoenix yw'r ffit orau oherwydd ecosystem gyfyngedig Elixir yn y maes hwn.

---

### 4. **Loco (Rust)**

**Trosolwg**:  
Fframwaith gwe wedi'i adeiladu â Rust yw Loco, iaith raglennu systemau sy'n adnabyddus am ei pherfformiad, ei diogelwch cof, a'i chydredeg. Mae Rust yn fwyfwy poblogaidd ar gyfer adeiladu cymwysiadau perfformiad uchel.

**Cryfderau**:  
- **Perfformiad**: Mae prif gryfder Rust yn gorwedd yn ei pherfformiad uchel a'i diogelwch cof, sy'n ei gwneud yn ddewis ardderchog ar gyfer cymwysiadau sydd angen rheolaeth lefel isel neu berfformiad uchel iawn.
- **Cydredeg**: Mae system berchnogaeth Rust yn sicrhau diogelwch cof gan ganiatáu rhaglennu cydredol diogel, sy'n ei gwneud yn ddelfrydol ar gyfer systemau sydd angen graddio'n effeithlon ac ymdrin â chyfochri.

**Gwendidau**:  
- **Datblygu pentwr llawn**: Nid yw Loco, er ei fod yn addawol, mor aeddfed â'r fframweithiau eraill o ran darparu ateb pentwr llawn cyflawn. Mae'n fwy addas ar gyfer datblygu pen ôl, ac mae'r ecosystem pen blaen o amgylch Rust yn dal i ddod i'r amlwg.
- **Datblygu ystwyth**: Gall datblygu gyda Rust fod yn arafach o'i gymharu ag ieithoedd lefel uwch fel Python neu Ruby oherwydd ei natur lefel is a'i gromlin ddysgu fwy serth.
- **Ecosystem deallusrwydd artiffisial/dysgu peirianyddol**: Nid oes gan Rust yr un ecosystem helaeth ar gyfer deallusrwydd artiffisial/dysgu peirianyddol â Python. Er bod llyfrgelloedd cynyddol yn Rust ar gyfer cyfrifiadura rhifol, maent yn llawer llai aeddfed na'r hyn y mae Python yn ei gynnig, fel llyfrau nodiadau Jupyter neu fframweithiau dysgu peirianyddol.
  
**Dyfarniad**:  
Er bod Rust a'i fframwaith Loco yn cynnig perfformiad eithriadol, mae'r diffyg cefnogaeth pentwr llawn, manteision datblygu ystwyth, ac ecosystem deallusrwydd artiffisial/dysgu peirianyddol yn ei wneud yn llai delfrydol ar gyfer yr achos defnydd penodol hwn. Mae'n fwy addas ar gyfer cymwysiadau lle mae perfformiad yn hanfodol yn hytrach na datblygu gwe cyflym gydag offer gwyddor data integredig.

---

### Casgliad

Ar ôl gwerthuso'r dewisiadau ar sail gofynion y prosiect, **Django (Python)** yw'r dewis mwyaf addas. Mae'n cynnig y manteision canlynol:

- **Galluoedd pentwr llawn**: Mae Django yn fframwaith pentwr llawn sy'n integreiddio datblygu pen ôl a phen blaen.
- **Datblygu ystwyth**: Mae'r fframwaith yn addas iawn ar gyfer creu prototeipiau ac ailadrodd cyflym, sy'n hanfodol i amgylchedd cwmni newydd.
- **Cydweddoldeb â deallusrwydd artiffisial/dysgu peirianyddol**: Python yw'r iaith flaenllaw mewn deallusrwydd artiffisial/dysgu peirianyddol, ac mae cydweddoldeb Django â llyfrgelloedd fel llyfrau nodiadau Jupyter yn sicrhau integreiddio llyfn ar gyfer dadansoddi a phrosesu data.
- **Cymuned ac ecosystem**: Mae cefnogaeth gref y gymuned a'r ecosystem helaeth o lyfrgelloedd Django yn darparu nifer o offer i gyflymu datblygu.

Er bod **Ruby on Rails** hefyd yn ymgeisydd cryf ar gyfer datblygu ystwyth, mae ei gefnogaeth gyfyngedig i ddeallusrwydd artiffisial/dysgu peirianyddol yn ei wneud yn llai delfrydol ar gyfer yr achos defnydd penodol hwn. Mae **Phoenix (Elixir)** a **Loco (Rust)**, er eu bod yn ardderchog o ran graddadwyedd a pherfformiad, yn brin o ran integreiddio â deallusrwydd artiffisial/dysgu peirianyddol a datblygu pentwr llawn. Felly, Django yw'r fframwaith a argymhellir ar gyfer y prosiect hwn.
