# Clàr co-dhùnaidh ailtireachd (ADR) airson co-phàirtean Svelte

<!--

Prompt:

Architecture decision record for Svelte components.

Compare options: SVAR, Carbon, Flowbite, SkeletonUI, MeltUI, SvelteUI, shadcn-svelte

The goal is full features for table, charts, lists, grids, gantt, 

-->

## Co-theacsa

Tha sinn a’ taghadh leabharlann cho-phàirtean UI Svelte gus làn fheartan a thoirt seachad airson:
- **Clàran**
- **Clàran-dealbh (charts)**
- **Liostaichean**
- **Cliathan (grids)**
- **Clàran-dealbh Gantt**

Is e an t-amas leabharlann a thaghadh a chothromaicheas furasta amalachaidh, làn thaic airson fheartan, coileanadh, agus so-chumail fad-ùine. Is iad na roghainnean a thathar a’ beachdachadh:

1. **SVAR**
2. **Carbon**
3. **Flowbite**
4. **SkeletonUI**
5. **MeltUI**
6. **SvelteUI**
7. **shadcn-svelte**

## Mion-sgrùdadh roghainnean

### 1. **SVAR**
- **Sealladh coitcheann**: Tha SVAR na leabharlann cho-phàirtean ùr-nodha, làn fheartan airson Svelte, le fòcas air siostaman dealbhaidh agus co-phàirtean deiseil airson iomairt.
- **Buannachdan**:
  - Co-phàirtean làn fheartan, a’ gabhail a-steach clàran, foirmean, agus clàran-dealbh.
  - Roghainnean gnàthachaidh àrda le taic ùrlair togte a-staigh.
  - Taic togte a-staigh airson ruigsinneachd agus freagairteachd.
  - Sgrìobhainnean math le cur-ris bhon choimhearsnachd.
- **Eas-bhuannachdan**:
  - Dh’fhaodadh e a bhith nas truime an coimeas ri leabharlannan nas sìmplidhe eile.
  - Taic cuingealaichte airson co-phàirtean sònraichte leithid clàran-dealbh Gantt agus cliathan adhartach.
- **As fheàrr airson**: Aplacaidean aig ìre iomairt far a bheil siostam dealbhaidh làn fheartan riatanach.
- **Taic clàr/clàr-dealbh**: Meadhanach gu math.
- **Taic cliath/Gantt**: Glè bheag.

### 2. **Carbon**
- **Sealladh coitcheann**: Tha Carbon Design System na shiostam dealbhaidh stòr fosgailte bho IBM, a’ tabhann seata làidir de cho-phàirtean UI.
- **Buannachdan**:
  - Dealbhadh àrd-chàileachd, snasail le sgrìobhainnean farsaing.
  - Glè ruigsinneach agus freagarrach.
  - Leabharlann mhòr cho-phàirtean, a’ gabhail a-steach cliathan, clàran, agus smachdan fhoirmean.
- **Eas-bhuannachdan**:
  - Chan eil fòcas air Svelte, agus mar sin faodaidh amalachadh a bhith trom.
  - Dh’fhaodadh gun cuir e feum air gnàthachadh a bharrachd airson làn cho-chòrdalachd Svelte.
  - Gun taic dhìreach airson co-phàirtean adhartach leithid clàran-dealbh Gantt no clàran-dealbh toinnte.
- **As fheàrr airson**: Pròiseactan mòr-sgèile a dh’fheumas UI cunbhalach, snasail.
- **Taic clàr/clàr-dealbh**: Math (le amalachaidhean leabharlann chlàran-dealbh).
- **Taic cliath/Gantt**: Math (taic cliath ri fhaighinn, ach gun chlàran-dealbh Gantt).

### 3. **Flowbite**
- **Sealladh coitcheann**: Tha Flowbite na leabharlann cho-phàirtean a tha air a thogail le Tailwind CSS, a’ tabhann diofar cho-phàirtean agus eileamaidean UI.
- **Buannachdan**:
  - Stèidhichte air Tailwind CSS, a tha ga dhèanamh furasta a ghnàthachadh.
  - Furasta amalachadh agus cleachdadh le Svelte.
  - Bheir e co-phàirtean beairteach leithid clàran, clàran-dealbh, agus smachdan UI.
- **Eas-bhuannachdan**:
  - Gun fheartan adhartach (m.e. clàran-dealbh Gantt no cliathan toinnte).
  - Chan eil co-phàirtean clàr-dealbh dùthchasach aige; tha e an eisimeil leabharlannan taobh a-muigh.
- **As fheàrr airson**: Pròiseactan a dh’fheumas leasachadh luath le fòcas air amalachadh Tailwind CSS.
- **Taic clàr/clàr-dealbh**: Math (feumaidh amalachadh le leabharlannan chlàran-dealbh treas-phàrtaidh).
- **Taic cliath/Gantt**: Glè bheag.

### 4. **SkeletonUI**
- **Sealladh coitcheann**: Tha SkeletonUI na leabharlann cho-phàirtean aotrom airson Svelte, le fòcas air sìmplidheachd agus as lugha.
- **Buannachdan**:
  - Gu math aotrom agus luath.
  - API sìmplidh, so-thuigsinn.
  - Math do phròiseactan beaga no far a bheil coileanadh èiginneach.
- **Eas-bhuannachdan**:
  - Glè bheag de cho-phàirtean air an gabhail a-steach, agus mar sin chan eil e beairteach ann am feartan.
  - Gun cho-phàirtean adhartach clàr/cliath/clàr-dealbh/Gantt.
  - Taic coimhearsnachd cuingealaichte agus sgrìobhainnean nach eil cho farsaing.
- **As fheàrr airson**: Pròiseactan a dh’fheumas co-phàirtean aotrom le glè bheag de chostas.
- **Taic clàr/clàr-dealbh**: Glè bheag.
- **Taic cliath/Gantt**: Glè bheag.

### 5. **MeltUI**
- **Sealladh coitcheann**: Tha MeltUI na chruinneachadh de cho-phàirtean UI ruigsinneach airson Svelte, le fòcas air sìmplidheachd agus so-chur-ri-chèile.
- **Buannachdan**:
  - Aotrom agus làn ghnàthachail.
  - Deagh fheartan ruigsinneachd dìreach às a’ bhogsa.
  - Dealbhadh ùr-nodha agus as lugha.
- **Eas-bhuannachdan**:
  - Nas lugha de fheartan an coimeas ri leabharlannan eile.
  - Gun cho-phàirtean cliath is clàr adhartach.
  - Gun chlàran-dealbh Gantt no roghainnean chlàran-dealbh toinnte.
- **As fheàrr airson**: Dealbhaidhean as lugha a chuireas ruigsinneachd agus coileanadh air thoiseach.
- **Taic clàr/clàr-dealbh**: Glè bheag.
- **Taic cliath/Gantt**: Glè bheag.

### 6. **SvelteUI**
- **Sealladh coitcheann**: Tha SvelteUI na leabharlann cho-phàirtean UI farsaing, ghnàthachail airson Svelte, air a dhealbhadh airson aplacaidean-lìn ùr-nodha a thogail le UI eireachdail.
- **Buannachdan**:
  - Seata farsaing de cho-phàirtean, a’ gabhail a-steach clàran, cliathan, clàran-dealbh, agus foirmean.
  - Bheir e taic modhan sholais is dorcha.
  - Gu math gnàthachail agus furasta a leudachadh.
  - Amalachaidhean togte a-staigh airson leabharlannan chlàran-dealbh leithid `chart.js` no `d3.js`.
- **Eas-bhuannachdan**:
  - Faodaidh e a bhith nas truime na leabharlannan cho-phàirtean nas sìmplidhe.
  - Feumaidh beagan suidheachaidh gus leabharlannan taobh a-muigh amalachadh airson feartan nas toinnte leithid clàran-dealbh Gantt.
- **As fheàrr airson**: Pròiseactan a dh’fheumas seata farsaing, gnàthachail de cho-phàirtean.
- **Taic clàr/clàr-dealbh**: Sàr-mhath (leabharlannan chlàran-dealbh air an taicinn).
- **Taic cliath/Gantt**: Math (co-phàirtean cliath ri fhaighinn; feumaidh Gantt amalachadh taobh a-muigh).

### 7. **shadcn-svelte**
- **Sealladh coitcheann**: Tionndadh Svelte de ShadCN, a tha a’ cuimseachadh air dealbhadh utility-first agus a bheir co-phàirtean ùr-nodha, stoidhlichte.
- **Buannachdan**:
  - Dealbhadh utility-first, air a thogail air bonn Tailwind CSS, a tha ga dhèanamh furasta a ghnàthachadh.
  - Seata beairteach de cho-phàirtean agus làn stoidhlichte dìreach às a’ bhogsa.
  - Furasta amalachadh le leabharlannan eile.
- **Eas-bhuannachdan**:
  - Chan eil e cho làn fheartan ri cuid eile a thaobh eileamaidean UI adhartach.
  - Gun taic togte a-staigh airson clàran, clàran-dealbh, no cliathan.
  - Gun taic dhìreach airson clàran-dealbh Gantt.
- **As fheàrr airson**: Pròiseactan beaga gu meadhanach a dh’fheumas dòigh-obrach utility-first, ghnàthachail.
- **Taic clàr/clàr-dealbh**: Glè bheag.
- **Taic cliath/Gantt**: Glè bheag.

## Co-dhùnadh

### An roghainn a thathar a’ moladh: **SvelteUI**

- **Reusanachadh**: Bheir SvelteUI cruinneachadh cothromaichte, farsaing de cho-phàirtean a fhreagras air an fheum airson clàran, clàran-dealbh, cliathan, agus foirmean. Tha e gu math gnàthachail, ag amalachadh gu math le leabharlannan chlàran-dealbh eile (leithid `chart.js` agus `d3.js`), agus tha cothromachadh math aige eadar coileanadh aotrom agus pailteas fheartan. Ged is dòcha nach toir e taic dhìreach airson clàran-dealbh Gantt, faodar a leudachadh gu furasta le amalachaidhean treas-phàrtaidh, a’ fàgail e air leth freagarrach airson fuasgladh làn fheartan, so-sgèilidh.
  
  - **Buannachdan**:
    - Taic sàr-mhath airson clàran is clàran-dealbh.
    - Co-phàirtean cliath agus cruth-tarraing iomlan.
    - Gnàthachail agus ag amalachadh gu math le leabharlannan chlàran-dealbh taobh a-muigh.
    - Deagh choimhearsnachd agus sgrìobhainnean.
  
  - **Eas-bhuannachdan**:
    - Nas truime na cuid de leabharlannan as lugha eile.
    - Feumaidh amalachadh taobh a-muigh airson clàran-dealbh toinnte leithid clàran-dealbh Gantt.
  
### Roghainn eile: **Flowbite** no **Carbon** (airson pròiseactan iomairt nas motha)
- Ma tha feum air siostam dealbhaidh snasail, stèidhichte air Tailwind, no nas cunbhalaiche, dh’fhaodadh **Flowbite** (le Tailwind CSS) no **Carbon** (airson fuasglaidhean aig ìre iomairt) a bhith freagarrach mar roghainnean eile. Ach, dh’fhaodadh gum feum iad oidhirp a bharrachd airson amalachaidhean le clàran-dealbh agus co-phàirtean nas toinnte.

## Co-dhùnadh

Is e **SvelteUI** an roghainn as freagarraiche airson ur riatanasan (làn fheartan airson chlàran, chlàran-dealbh, liostaichean, chliathan, Gantt), agus **Flowbite** agus **Carbon** an dèidh sin a-rèir feumalachdan a’ phròiseict agus roghainnean dealbhaidh.
