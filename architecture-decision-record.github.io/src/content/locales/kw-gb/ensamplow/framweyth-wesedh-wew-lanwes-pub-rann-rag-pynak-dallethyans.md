# Kovskrif dyberth arkitektoryeth: framweyth aplikasyon wew, lanwes, pub rann, rag produkt dallethyans

<!-- 

ChatGPT prompt

Long software architecture decision record 
for a web application framework, batteries included, full stack, for a startup product.

Evaluate Python Django, Ruby on Rails, Phoenix Elixir, Rust Loco.

Primary need: web application for paying customers to sign in, upload files, process data, and view reports. 

High importance: 1. Agile development because this is for a startup. 2. Full-stack because we do not want to spend extra time on a separate front-end. 3. Works well with AI/ML tools for data analysis, such as Project Jupyter notebooks.

Low importance: 1. Runtime speed. 2. Scalability. 3. Backwards compatibility.

-->

**Mynnans pennys:**  
Drehevel aplikasyon wew rag kerysyow a dal omlogya, ughelhe fayls, dre-dhelya data, ha gweles derivasow, ow fokusya war displegyans skav, nodhow pub rann, ha kesstowans krev gans toulys AI/ML, arbennik notebooks Project Jupyter.

### Kettesten ha othommow:

1. **Displegyans skav (priorita uhel)**: Avel dallethyans, ni a res ailtreyans skon ha fexibilita. Usadow skav, avel prototypya skon, displegyans ynbosek, ha omdhegesans orth chanj, yw alhwedh dh'agan bywnans displegyans.

2. **Framweyth pub rann (priorita uhel)**: Ni a vynn lehe an ankombrans dre dhewis framweyth a hyll rewlya an diwedh-tu ha'n kynsa-tu yn effeythus, ow lehe an othom a framweythow kynsa-tu dyberthys.

3. **Kesstowans gans toulys AI/ML (priorita uhel)**: An gallos dhe junya yn es gans toulys dasdhesk data avel notebooks Jupyter ha ekosystem skians data Python (NumPy, Pandas, TensorFlow, hag yn.) yw poesek. Hemma a esya dre-dhelyans data ha derivasow effeythus.

4. **Kriteryow poester izel**:
   - **Skavder gweythrys**: Kyn fo gwrians ledhwas, nyns yw an faktor moyha kritek orth an dallethyans awos ni a vydh moy bryderys a-dro dhe skonder displegyans ha kowlwirder nodhow.
   - **Skalyadewder**: Ni a rakwel tevyans, mes konsiderasyons skalyadewder a hyll bos gorthybys wosa, ha nyns yw othom kresek lemmyn.
   - **Kesstowans a-dhelergh**: Ni yw ow fokusya war teknologiow lemmyn ha nyns yn bryderys meur a-dro dhe gesstowans a-dhelergh gans systemow hen.

### Framweythow jydjys:

1. **Django (Python)**  
2. **Ruby on Rails (Ruby)**  
3. **Phoenix (Elixir)**  
4. **Loco (Rust)**

---

### 1. **Django (Python)**

**Dre-wel**:  
Django yw framweyth gwew live uhel rag Python a bew war displegyans skon ha disinyans glan, usadow. Ev yw aswonnys awos y fylosofieth "lanwes" (batteries included), hen yw ev a dhalghen lies nodh avel gwiryans, ledyans, ORM, ha rewlya furvyow yn tien parys.

**Nerthow**:  
- **Pub rann**: Django yw framweyth kowlwir, pub rann a hyll rewlya othommow diwedh-tu ha kynsa-tu gans nodhow junys (rag ensampel, ynjin skantlyn, ynterfas gweythlu).
- **Displegyans skav**: Strokturyeth ha kustomow splann Django a gonsent displegyans skon hag omdhegesans, kritek rag kerghynnedh dallethyans. An framweyth a dheu gans dogvennans ragorek hag ekosystem rych a bakkys trydhes-parti, a skonha displegyans.
- **Junyans AI/ML**: Ekosystem Python yw heb kesstrif pan dhe dhe skians data ha desk maskin. Django, ow bos selys war Python, a junn heb ankombrans gans toulys avel notebooks Jupyter, Pandas, NumPy, TensorFlow, ha scikit-learn.
- **Kemeneth ha ekosystem**: Django a'n jeves kemeneth ystynnys, dogvennans krev, hag ystynnans ledan a bluginys hag ystynnansow, a skonha displegyans ha dyskudha gwallow meur.
  
**Gwannow**:  
- **Skavder gweythrys**: Python a dhe dhe vos moy hweg erbynn yethow avel Rust po Elixir. Byttele, rag an kas usadow ma, may nyns yw gwrians an kynsa pyskes, hemma martesen nyns yw tra dhe dorr an ambos.
- **Skalyadewder**: Kyn fo Django pur-skalyek, martesen y fydh chalenjys orth skala pur-uhel heb gwellheans yn ewn (rag ensampel, pan rewlir govynnow kesstrifus pos). Byttele, Django a hyll hwath bos skalyes yn effeythus dre usya teknegow kesswerth karg ha cachya.

**Jydjyans**:  
Django a gesson da gans an othommow rag displegyans skav, skoodh pub rann, ha kesstowans AI/ML. Y junyans Python a re hedhes heb ankombrans dhe'n toulys ha lyvervaow skians data res rag an aplikasyon.

---

### 2. **Ruby on Rails (Ruby)**

**Dre-wel**:  
Ruby on Rails (RoR) yw framweyth aplikasyon wew prederys, pub rann, aswonnys awos y fordh kustom-a-ugh-kefrysyans, a esya displegyans skon.

**Nerthow**:  
- **Pub rann**: RoR a dheu gans toulys genesek rag displegyans diwedh-tu ha kynsa-tu (rag ensampel, gwelheansow, skantlynyow, scaffolding), ha'y lyverva rych a gems a gonsent gweythrys skon a lies nodh.
- **Displegyans skav**: Ruby on Rails yw aswonnys arbennik awos y gylghow ailtreyans skon, a yw prowus rag dallethyansow a vynn ailtrei nodhow skon. RoR a skoodh displegyans ledhys gans previans (TDD) ha'n jeves ekosystem selys rag fluvyow-ober skav.
- **Kemeneth ha ekosystem**: RoR a'n jeves kemeneth selys da, krev ha lies gems a hyll skonha displegyans.
- **Es dhe usya**: Rails a'n jeves syntaks pur-gar dhe zisplegyor ha yw aswonnys awos gul taklow avel treylyansow selva ros, arkitektoryeth model-view-controller (MVC), ha rewlya ledyans skon ha sempel.

**Gwannow**:  
- **Gwrians**: Ruby a dhe dhe'n jeves gwrians gweythrys moy hweg erbynn Python po Elixir. Kyn hyll RoR skalyi gans infrastruktur ewn, gwrians Ruby a hyll bos strithenn rag aplikasyons a res dre-dhelyans real-termyn pos po trafyk kesstrifus uhel.
- **Junyans AI/ML**: Kyn fo nebes lyvervaow desk maskin yn Ruby, nyns yw mar ledan degemmerys yn kemeneth AI/ML avel Python. Junyans gans toulys avel notebooks Jupyter nyns yw mar slyk, ow wul Python dewis krevach rag aplikasyons data-pos.
  
**Jydjyans**:  
Kyn hyll Ruby on Rails ragora orth displegyans skav ha prototypya skon, ev a fyll yn termyn kesstowans AI/ML erbynn Python (Django). Ev yw dewis gallus rag dallethyansow a brys ailtreyans skon a-ugh junyans dasdhesk data downha.

---

### 3. **Phoenix (Elixir)**

**Dre-wel**:  
Phoenix yw framweyth gwew drehevys gans Elixir, yeth towlennans gweythresek disinyes rag skalyadewder ha kesoberans. Phoenix a usya VM Erlang, aswonnys rag rewlya kesoberans meur ha systemow fyllel-godhevus.

**Nerthow**:  
- **Skalyadewder ha gwrians**: Phoenix a lenn yn skalyadewder ha rewlya kesoberans uhel. Ev yw drehevys war VM Erlang, a hyll skoodhya mylyow (po hogen milyons) a junyansow kesstrifus, ow wul ev ymgeslywyor krev rag aplikasyons a res dre-dhelyans data real-termyn po trafyk bonn-uhel.
- **Pub rann**: Phoenix a dhalghen pub tra res rag drehevel diwedh-tu ha kynsa-tu aplikasyon. Ev a skoodh gwelheansow bewek rag nowydhyansow UI ynterweythek hag a dhalghen ynjin skantlyn.
- **Displegyans skav**: Phoenix yw pur-vodulek, ow konsentya ailtreyans skon war nodhow. Ev yw gwiw da rag dallethyansow a res mos skon.
- **Kesstowans AI/ML**: Kyn fo gans Elixir lyvervaow desk maskin ow tos, ev nyns yw mar ledan skoodhys rag taskow AI/ML avel Python. Junya gans toulys avel notebooks Jupyter a res fordhow-dyvres, awos ekosystem Elixir rag skians data nyns yw mar brederys avel an re Python.

**Gwannow**:  
- **Ekosystem AI/ML**: Elixir nyns yw an yeth kresek usys yn skians data po desk maskin, ha'n ekosystem nyns yw mar brederys avel an re Python. Rakhenna, junyans gans toulys avel notebooks Jupyter po lyvervaow AI poblek (TensorFlow, PyTorch) a vydh pos.
- **Kromm dyskans**: Mar nyns yw an tim aswonnys gans towlennans gweythresek ha Elixir, martesen y fydh kromm dyskans moy serth.

**Jydjyans**:  
Phoenix yw dewis ragorek mar pe skalyadewder ha kesoberans penn-bris. Byttele, ow kemeres yn kyfrif an priorita war gesstowans AI/ML, martesen nyns yw Phoenix an gwella junyans awos ekosystem kyfyngys Elixir y'n spas ma.

---

### 4. **Loco (Rust)**

**Dre-wel**:  
Loco yw framweyth gwew drehevys gans Rust, yeth towlennans systemow aswonnys rag y wrians, sawder kov, ha kesoberans. Rust yw moy ha moy poblek rag drehevel aplikasyons gwrians uhel.

**Nerthow**:  
- **Gwrians**: Nerth kresek Rust yw y wrians uhel ha sawder kov, ow wul ev dewis ragorek rag aplikasyons a res kontrol live izel po gwrians pur-uhel.
- **Kesoberans**: Systemow perghennedh Rust a surha sawder kov ha konsentya towlennans kesstrifus sawell, ow wul ev ideal rag systemow a res skalyi yn effeythus ha rewlya kesstrif.

**Gwannow**:  
- **Displegyans pub rann**: Loco, kyn fo gwaytys, nyns yw mar brederys avel an framweythow erell yn termyn ri solusyon pub rann kowlwir. Ev yw moy gwiw rag displegyans diwedh-tu, ha'n ekosystem kynsa-tu a-dro dhe Rust yw hwath ow tos.
- **Displegyans skav**: Displegya gans Rust a hyll bos moy hweg erbynn yethow live uhelha avel Python po Ruby awos y natur live izelha ha kromm dyskans moy serth.
- **Ekosystem AI/ML**: Rust nyns eus dhodho an keth ekosystem ledan rag AI/ML avel Python. Kyn fo lyvervaow ow tevi yn Rust rag kompoterya niverek, i yw meur le prederys es profyow Python, avel notebooks Jupyter po framweythow desk maskin.
  
**Jydjyans**:  
Kyn re Rust ha'y framweyth Loco gwrians ragorek, an diffyth a skoodh pub rann, prow displegyans skav, hag ekosystem AI/ML a wra ev le ideal rag an kas usadow ma. Ev yw moy gwiw rag aplikasyons gwrians-kritek es displegyans gwew skon gans toulys skians data junys.

---

### Diwedhyans

Wosa jydja an dewisyow herwydh othommow an towl, **Django (Python)** yw an dewis moyha gwiw. Ev a re an a-dhesk a sew:

- **Gallusow pub rann**: Django yw framweyth pub rann a junn displegyans diwedh-tu ha kynsa-tu.
- **Displegyans skav**: An framweyth yw gwiw da rag prototypya ha ailtreyans skon, poesek rag kerghynnedh dallethyans.
- **Kesstowans AI/ML**: Python yw an yeth ledhek yn AI/ML, ha kesstowans Django gans lyvervaow avel notebooks Jupyter a surha junyans slyk rag dasdhesk ha dre-dhelyans data.
- **Kemeneth ha ekosystem**: Skoodh kemeneth krev Django ha'y ekosystem lyvervaow ystynnys a re lies toul dhe skonha displegyans.

Kyn fo **Ruby on Rails** ymgeslywyor krev ynwedh rag displegyans skav, y skoodh AI/ML kyfyngys a wra ev le ideal rag an kas usadow ma. **Phoenix (Elixir)** ha **Loco (Rust)**, kyn fons ragorek rag skalyadewder ha gwrians, a fyll yn termyn junyans AI/ML ha displegyans pub rann. Rakhenna, Django yw an framweyth kusulys rag an towl ma.
