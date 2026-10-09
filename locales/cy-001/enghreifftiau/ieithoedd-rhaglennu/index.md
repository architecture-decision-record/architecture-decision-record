# Ieithoedd rhaglennu

Cynnwys:

* [Crynodeb](#crynodeb)
  * [Mater](#mater)
  * [Penderfyniad](#penderfyniad)
  * [Statws](#statws)
* [Manylion](#manylion)
  * [Rhagdybiaethau](#rhagdybiaethau)
  * [Cyfyngiadau](#cyfyngiadau)
  * [Safbwyntiau](#safbwyntiau)
  * [Dadl](#dadl)
  * [Goblygiadau](#goblygiadau)
* [Cysylltiedig](#cysylltiedig)
  * [Penderfyniadau cysylltiedig](#penderfyniadau-cysylltiedig)
  * [Gofynion cysylltiedig](#gofynion-cysylltiedig)
  * [Arteffactau cysylltiedig](#arteffactau-cysylltiedig)
  * [Egwyddorion cysylltiedig](#egwyddorion-cysylltiedig)
* [Nodiadau](#nodiadau)


## Crynodeb


### Mater

Mae angen i ni ddewis ieithoedd rhaglennu ar gyfer ein meddalwedd. Mae gennym ddau brif angen: iaith raglennu pen blaen sy'n addas ar gyfer cymwysiadau gwe, ac iaith raglennu pen ôl sy'n addas ar gyfer cymwysiadau gweinydd.


### Penderfyniad

Rydym yn dewis TypeScript ar gyfer y pen blaen.

Rydym yn dewis Rust ar gyfer y pen ôl.


### Statws

Penderfynwyd. Rydym yn agored i ddewisiadau amgen newydd wrth iddynt godi.


## Manylion


### Rhagdybiaethau

Mae'r cymwysiadau pen blaen yn nodweddiadol:

  * Defnyddwyr a rhyngweithiadau nodweddiadol

  * Porwyr a systemau nodweddiadol

  * Datblygiadau a chyflwyniadau nodweddiadol

Mae'r cymwysiadau pen blaen yn debygol o esblygu'n gyflym:

  * Rydym am sicrhau datblygiadau, cyflwyniadau, ailadroddiadau, ac ati cyflym a hawdd.

  * Rydym yn gwerthfawrogi profadwyedd, fel diogelwch mathau, ac rydym yn fodlon gwneud ychydig mwy o waith i'w gyflawni.

  * Nid oes angen cydweddoldeb etifeddol arnom.

Mae'r cymwysiadau pen ôl yn uwch na'r arfer:

  * Nodau uwch na'r arfer ar gyfer ansawdd, yn enwedig profadwyedd, dibynadwyedd, diogelwch, ac ati.

  * Nodau uwch na'r arfer ar gyfer bron amser real, h.y. nid ydym am gael seibiannau oherwydd casglu sbwriel peiriant rhithwir.

  * Nodau uwch na'r arfer ar gyfer rhaglennu swyddogaethol, yn enwedig ar gyfer cyfochri, prosesu aml-graidd, a diogelwch cof.

Rydym yn derbyn cyflymderau amser crynhoi is o blaid diogelwch amser crynhoi a chyflymderau amser rhedeg.


### Cyfyngiadau

Mae gennym gyfyngiad cryf ar ieithoedd y gellir eu defnyddio gyda gwasanaethau mawr darparwyr cwmwl ar gyfer swyddogaethau, fel Amazon Lambda.


### Safbwyntiau

Ystyriasom yr ieithoedd hyn:

  * C

  * C++

  * Clojure
  
  * Elixir
  
  * Erlang
  
  * Elm
  
  * Flow
  
  * Go
  
  * Haskell
  
  * Java
  
  * JavaScript
  
  * Kotlin
  
  * Python
  
  * Ruby
  
  * Rust
  
  * TypeScript



### Dadl

Crynodeb fesul iaith:

  * C: wedi'i wrthod oherwydd diogelwch isel; gall Rust wneud bron popeth yn well.

  * C++: wedi'i wrthod oherwydd ei fod yn llanast; gall Rust wneud bron popeth yn well.

  * Clojure: modelu rhagorol; yr amcangyfrif gorau o Lisp; amser rhedeg gwych ar y JVM.
  
  * Elixir: amser rhedeg rhagorol gan gynnwys y gallu i'w gyflwyno a chydredeg; profiad datblygwr rhagorol; ecosystem gymharol fach.

  * Erlang: amser rhedeg rhagorol gan gynnwys y gallu i'w gyflwyno a chydredeg; profiad datblygwr heriol; ecosystem gymharol fach.

  * Elm: yn edrych yn addawol iawn; mae IBM yn cyhoeddi astudiaethau achos mawr gyda chanlyniadau da; ecosystem lai.

  * Flow: gwelliant diddorol ar JavaScript; fodd bynnag; mae datblygwyr yn symud i ffwrdd oddi wrtho.

  * Go: profiad datblygwr rhagorol; cydredeg rhagorol; ond hanes o benderfyniadau gwael sy'n llesteirio'r iaith.

  * Haskell: yr iaith swyddogaethol orau; cymuned ddatblygwyr lai; nid yw wedi cyflawni digon o lwyddiannau cynhyrchu cyhoeddedig.

  * Java: amser rhedeg rhagorol; ecosystem ardderchog; profiad datblygwr is na'r cyffredin.

  * JavaScript: yr iaith fwyaf poblogaidd erioed; yr ecosystem fwyaf eang.

  * Kotlin: yn trwsio cymaint o Java; cefnogaeth ardderchog gan JetBrains; achosion cyhoeddedig da o mudo o Java i Kotlin.
  
  * Python: yr iaith fwyaf poblogaidd ar gyfer gweinyddu systemau; offer dadansoddeg gwych; fframweithiau gwe da; ond wedi'i gadael gan Google o blaid Go.

  * Ruby: y profiad datblygwr gorau erioed; y fframweithiau gwe gorau; y gymuned fwyaf dymunol; ond araf iawn; braidd yn anodd ei phecynnu.

  * Rust: yr iaith newydd orau; pwyslais ar sero haniaethu; pwyslais ar gydredeg; fodd bynnag ecosystem gymharol fach; ac mae ganddi derfynau bwriadol ar rai mathau o gyflymiadau crynhoydd e.e. mae angen i fynediad uniongyrchol at gof fod yn anniogel yn benodol.

  * TypeScript: yn ychwanegu mathau at JavaScript; trawsgrynhoydd gwych; pwyslais cynyddol gan ddatblygwyr ar mudo o JavaScript i TypeScript; cefnogaeth gref gan Microsoft.

Penderfynasom fod gan beiriannau rhithwir set o gyfaddawdau nad oes eu hangen arnom ar hyn o bryd, fel cymhlethdod ychwanegol sy'n darparu galluoedd amser rhedeg.

Credwn fod ein penderfyniad craidd yn cael ei yrru gan ddau bryder trawsbynciol:

  * Ar gyfer y cyflymder amser rhedeg cyflymaf a'r mynediad tynnaf at y system, byddem yn dewis JavaScript a C.

  * Ar gyfer cyflymder amser rhedeg agos at y cyflymaf a mynediad agos at y tynnaf at y system, rydym yn dewis TypeScript a Rust.

Mae crybwylliadau anrhydeddus yn mynd i'r ieithoedd peiriannau rhithwir a'r fframweithiau gwe y byddem yn eu dewis pe baem eisiau iaith peiriant rhithwir:

  * Clojure a Luminus

  * Java a Spring

  * Elixir a Phoenix


### Goblygiadau

Bydd angen i ddatblygwyr pen blaen ddysgu TypeScript. Mae hyn yn debygol o fod yn gromlin ddysgu hawdd os mai defnyddio JavaScript yw prif brofiad y datblygwr.

Bydd angen i ddatblygwyr pen ôl ddysgu Rust. Mae hyn yn debygol o fod yn gromlin ddysgu gymedrol os mai defnyddio C/C++ yw prif brofiad y datblygwr, ac yn gromlin ddysgu anodd os mai defnyddio Java, Python, Ruby, neu ieithoedd tebyg sy'n rheoli cof yw prif brofiad y datblygwr. 

Mae TypeScript a Rust ill dau yn gymharol newydd. Mae hyn yn golygu nad oes gan lawer o offer ddogfennaeth ar gyfer yr ieithoedd hyn eto. Er enghraifft, bydd angen sefydlu'r biblinell devops ar gyfer yr ieithoedd hyn, ac hyd yma, nid oes gan yr un o'r offer devops rydym yn eu gwerthuso enghreifftiau rhagosodedig ar gyfer yr ieithoedd hyn.

Mae amseroedd crynhoi TypeScript a Rust yn eithaf araf. Gall rhywfaint o hyn fod oherwydd newydd-deb yr ieithoedd. Efallai y byddwn am edrych ar sut i liniaru amseroedd crynhoi araf, fel drwy grynhoi ar alw, cydredeg wrth grynhoi, ac ati.

Nid yw cefnogaeth IDE ar gyfer yr ieithoedd hyn yn gyffredin eto ac nid yw'n radd gyntaf eto. Er enghraifft, mae JetBrains yn gwerthu'r IDE PyCharm ar gyfer cefnogaeth gradd gyntaf i Python, ond nid yw'n gwerthu IDE â chefnogaeth gradd gyntaf i Rust; yn hytrach, gall JetBrains ddefnyddio ategyn Rust sy'n darparu efallai 80% o gefnogaeth iaith Rust o'i gymharu â chefnogaeth iaith Python.


## Cysylltiedig


### Penderfyniadau cysylltiedig

Byddwn yn anelu at ddewisiadau ecosystem sy'n cyd-fynd â'r ieithoedd hyn.

Er enghraifft, rydym am ddewis IDE sydd â galluoedd da ar gyfer yr ieithoedd hyn.

Er enghraifft, ar gyfer ein fframwaith gwe pen blaen, rydym yn fwy tebygol o benderfynu ar fframwaith sy'n tueddu i anelu at TypeScript (e.e. Vue) na fframwaith sy'n tueddu i anelu at JavaScript plaen (e.e. React).


### Gofynion cysylltiedig

Rhaid i'n cadwyn offer gyfan gefnogi'r ieithoedd hyn.


### Arteffactau cysylltiedig

Rydym yn disgwyl y gallem allforio rhai cyfrinachau i newidynnau amgylchedd.


### Egwyddorion cysylltiedig

Mesur ddwywaith, adeiladu unwaith. Rydym yn blaenoriaethu rhywfaint o ddiogelwch dros rywfaint o gyflymder.

Mae amser rhedeg yn fwy gwerthfawr nag amser crynhoi. Rydym yn blaenoriaethu defnydd cwsmeriaid dros ddefnydd datblygwyr.


## Nodiadau

Unrhyw nodiadau yma.
