# Cofnod penderfyniad saernïaeth (ADR) ar gyfer cydrannau Svelte

<!--

Prompt:

Architecture decision record for Svelte components.

Compare options: SVAR, Carbon, Flowbite, SkeletonUI, MeltUI, SvelteUI, shadcn-svelte

The goal is full features for table, charts, lists, grids, gantt, 

-->

## Cyd-destun

Rydym yn dewis llyfrgell cydrannau rhyngwyneb defnyddiwr Svelte i ddarparu nodweddion llawn ar gyfer:
- **Tablau**
- **Siartiau**
- **Rhestrau**
- **Gridiau**
- **Siartiau Gantt**

Y nod yw dewis llyfrgell sy'n cydbwyso rhwyddineb integreiddio, cefnogaeth i bob nodwedd, perfformiad, a chynaliadwyedd hirdymor. Y dewisiadau dan ystyriaeth yw:

1. **SVAR**
2. **Carbon**
3. **Flowbite**
4. **SkeletonUI**
5. **MeltUI**
6. **SvelteUI**
7. **shadcn-svelte**

## Dadansoddiad o'r dewisiadau

### 1. **SVAR**
- **Trosolwg**: Llyfrgell cydrannau fodern, gyfoethog o ran nodweddion, ar gyfer Svelte yw SVAR, gyda ffocws ar systemau dylunio a chydrannau sy'n barod ar gyfer mentrau.
- **Manteision**:
  - Cydrannau llawn nodweddion, gan gynnwys tablau, ffurflenni a siartiau.
  - Opsiynau addasu uchel gyda chefnogaeth thema adeiledig.
  - Cefnogaeth adeiledig ar gyfer hygyrchedd ac ymatebolrwydd.
  - Wedi'i ddogfennu'n dda gyda chyfraniadau gan y gymuned.
- **Anfanteision**:
  - Gallai fod yn drymach o'i gymharu â llyfrgelloedd symlach eraill.
  - Cefnogaeth gyfyngedig ar gyfer cydrannau penodol fel siartiau Gantt a gridiau uwch.
- **Gorau ar gyfer**: Cymwysiadau lefel menter lle mae angen system ddylunio lawn nodweddion.
- **Cefnogaeth tablau/siartiau**: Cymedrol i dda.
- **Cefnogaeth gridiau/Gantt**: Isel iawn.

### 2. **Carbon**
- **Trosolwg**: System Ddylunio Carbon yw system ddylunio ffynhonnell agored gan IBM, sy'n cynnig set gadarn o gydrannau rhyngwyneb defnyddiwr.
- **Manteision**:
  - Dyluniad o ansawdd uchel a chaboledig gyda dogfennaeth helaeth.
  - Hygyrch ac ymatebol iawn.
  - Llyfrgell gydrannau fawr, gan gynnwys gridiau, tablau a rheolyddion ffurflenni.
- **Anfanteision**:
  - Heb ffocws ar Svelte, felly gall integreiddio fod yn feichus.
  - Gallai fod angen addasu ychwanegol i sicrhau cydweddoldeb llawn â Svelte.
  - Dim cefnogaeth barod ar gyfer cydrannau uwch fel siartiau Gantt neu siartiau cymhleth.
- **Gorau ar gyfer**: Prosiectau ar raddfa fawr sydd angen rhyngwyneb defnyddiwr cyson a chaboledig.
- **Cefnogaeth tablau/siartiau**: Da (gydag integreiddiadau llyfrgelloedd siartiau).
- **Cefnogaeth gridiau/Gantt**: Da (mae cefnogaeth i gridiau ar gael, ond dim siartiau Gantt).

### 3. **Flowbite**
- **Trosolwg**: Llyfrgell cydrannau yw Flowbite sydd wedi'i hadeiladu â Tailwind CSS, gan gynnig amrywiol gydrannau ac elfennau rhyngwyneb defnyddiwr.
- **Manteision**:
  - Yn seiliedig ar Tailwind CSS, sy'n ei gwneud hi'n hawdd ei addasu.
  - Hawdd ei integreiddio a'i ddefnyddio gyda Svelte.
  - Yn darparu cydrannau cyfoethog fel tablau, siartiau a rheolyddion rhyngwyneb defnyddiwr.
- **Anfanteision**:
  - Heb nodweddion uwch (e.e., siartiau Gantt neu gridiau cymhleth).
  - Nid oes ganddo gydrannau siartio brodorol; mae'n dibynnu ar lyfrgelloedd allanol.
- **Gorau ar gyfer**: Prosiectau sydd angen datblygu cyflym gyda ffocws ar integreiddio â Tailwind CSS.
- **Cefnogaeth tablau/siartiau**: Da (mae angen integreiddio â llyfrgelloedd siartiau trydydd parti).
- **Cefnogaeth gridiau/Gantt**: Isel iawn.

### 4. **SkeletonUI**
- **Trosolwg**: Llyfrgell cydrannau ysgafn ar gyfer Svelte yw SkeletonUI, gyda ffocws ar symlrwydd a minimaliaeth.
- **Manteision**:
  - Hynod o ysgafn a chyflym.
  - API syml a greddfol.
  - Da ar gyfer prosiectau bach neu lle mae perfformiad yn hanfodol.
- **Anfanteision**:
  - Ychydig iawn o gydrannau sydd wedi'u cynnwys, felly nid yw'n gyfoethog o ran nodweddion.
  - Heb gydrannau uwch ar gyfer tablau/gridiau/siartiau/Gantt.
  - Cefnogaeth gymunedol gyfyngedig a dogfennaeth lai cynhwysfawr.
- **Gorau ar gyfer**: Prosiectau sydd angen cydrannau ysgafn heb fawr o orbenion.
- **Cefnogaeth tablau/siartiau**: Isel iawn.
- **Cefnogaeth gridiau/Gantt**: Isel iawn.

### 5. **MeltUI**
- **Trosolwg**: Casgliad o gydrannau rhyngwyneb defnyddiwr hygyrch ar gyfer Svelte yw MeltUI, gyda ffocws ar symlrwydd a'r gallu i'w cyfansoddi.
- **Manteision**:
  - Ysgafn ac yn gwbl addasadwy.
  - Nodweddion hygyrchedd da o'r cychwyn.
  - Dyluniad modern a minimalaidd.
- **Anfanteision**:
  - Llai cyfoethog o ran nodweddion o'i gymharu â llyfrgelloedd eraill.
  - Heb gydrannau gridiau a thablau uwch.
  - Dim siartiau Gantt na dewisiadau siartio cymhleth.
- **Gorau ar gyfer**: Dyluniadau minimalaidd sy'n rhoi blaenoriaeth i hygyrchedd a pherfformiad.
- **Cefnogaeth tablau/siartiau**: Isel iawn.
- **Cefnogaeth gridiau/Gantt**: Isel iawn.

### 6. **SvelteUI**
- **Trosolwg**: Llyfrgell cydrannau rhyngwyneb defnyddiwr gynhwysfawr ac addasadwy ar gyfer Svelte yw SvelteUI, a gynlluniwyd i adeiladu apiau gwe modern gyda rhyngwyneb defnyddiwr cain.
- **Manteision**:
  - Set gynhwysfawr o gydrannau, gan gynnwys tablau, gridiau, siartiau a ffurflenni.
  - Yn darparu cefnogaeth i'r modd golau a'r modd tywyll.
  - Yn hynod addasadwy ac yn hawdd ei ymestyn.
  - Integreiddiadau adeiledig ar gyfer llyfrgelloedd siartio fel `chart.js` neu `d3.js`.
- **Anfanteision**:
  - Gall fod yn drymach na llyfrgelloedd cydrannau symlach.
  - Mae angen rhywfaint o osod i integreiddio llyfrgelloedd allanol ar gyfer nodweddion mwy cymhleth fel siartiau Gantt.
- **Gorau ar gyfer**: Prosiectau sydd angen set gynhwysfawr ac addasadwy o gydrannau.
- **Cefnogaeth tablau/siartiau**: Ardderchog (cefnogir llyfrgelloedd siartio).
- **Cefnogaeth gridiau/Gantt**: Da (mae cydrannau gridiau ar gael; mae Gantt angen integreiddio allanol).

### 7. **shadcn-svelte**
- **Trosolwg**: Fersiwn Svelte o ShadCN, sy'n canolbwyntio ar ddyluniad sy'n rhoi blaenoriaeth i gyfleustodau (utility-first) ac yn darparu cydrannau modern ac arddulliedig.
- **Manteision**:
  - Dyluniad sy'n rhoi blaenoriaeth i gyfleustodau, wedi'i adeiladu ar ben Tailwind CSS, sy'n ei gwneud hi'n hawdd ei addasu.
  - Set gyfoethog o gydrannau sydd wedi'u harddullio'n llawn o'r cychwyn.
  - Hawdd ei integreiddio â llyfrgelloedd eraill.
- **Anfanteision**:
  - Heb fod mor gyflawn o ran nodweddion â rhai eraill o ran elfennau rhyngwyneb defnyddiwr uwch.
  - Heb gefnogaeth adeiledig ar gyfer tablau, siartiau na gridiau.
  - Dim cefnogaeth barod ar gyfer siartiau Gantt.
- **Gorau ar gyfer**: Prosiectau bach i ganolig sydd angen dull addasadwy sy'n rhoi blaenoriaeth i gyfleustodau.
- **Cefnogaeth tablau/siartiau**: Isel iawn.
- **Cefnogaeth gridiau/Gantt**: Isel iawn.

## Penderfyniad

### Y dewis a argymhellir: **SvelteUI**

- **Sail resymegol**: Mae SvelteUI yn cynnig cyfres gyflawn a chynhwysfawr o gydrannau sy'n diwallu'r angen am dablau, siartiau, gridiau a ffurflenni. Mae'n hynod addasadwy, yn integreiddio'n dda â llyfrgelloedd siartio eraill (fel `chart.js` a `d3.js`), ac mae ganddo gydbwysedd da rhwng perfformiad ysgafn a chyfoeth o nodweddion. Er efallai nad yw'n darparu cefnogaeth barod i siartiau Gantt, gellir ei ymestyn yn hawdd gydag integreiddiadau trydydd parti, sy'n ei wneud yn ddelfrydol ar gyfer ateb llawn nodweddion a graddadwy.
  
  - **Manteision**:
    - Cefnogaeth ardderchog i dablau a siartiau.
    - Cydrannau gridiau a chynlluniau llawn.
    - Addasadwy ac yn integreiddio'n dda â llyfrgelloedd siartio allanol.
    - Cymuned a dogfennaeth dda.
  
  - **Anfanteision**:
    - Trymach na rhai llyfrgelloedd minimalaidd eraill.
    - Angen integreiddio allanol ar gyfer siartiau cymhleth fel siartiau Gantt.
  
### Dewis arall: **Flowbite** neu **Carbon** (ar gyfer prosiectau menter mwy)
- Os oes angen system ddylunio gaboledig, sy'n seiliedig ar Tailwind, neu fwy cyson, gall **Flowbite** (gyda Tailwind CSS) neu **Carbon** (ar gyfer atebion gradd menter) fod yn ddewisiadau amgen addas. Fodd bynnag, gallent fod angen ymdrech ychwanegol i'w hintegreiddio â siartiau a chydrannau mwy cymhleth.

## Casgliad

Y ffit orau ar gyfer eich gofynion (nodweddion llawn ar gyfer tablau, siartiau, rhestrau, gridiau, Gantt) yw **SvelteUI**, ac yna **Flowbite** a **Carbon** yn dibynnu ar anghenion y prosiect a dewisiadau dylunio.
