# Cofnod penderfyniad saernïaeth: fframwaith CSS

Cynnwys:

- [Crynodeb](#crynodeb)
  - [Mater](#mater)
  - [Penderfyniad](#penderfyniad)
  - [Statws](#statws)
- [Manylion](#manylion)
  - [Rhagdybiaethau](#rhagdybiaethau)
  - [Cyfyngiadau](#cyfyngiadau)
  - [Safbwyntiau](#safbwyntiau)
  - [Dadl](#dadl)
  - [Goblygiadau](#goblygiadau)
- [Cysylltiedig](#cysylltiedig)
  - [Penderfyniadau cysylltiedig](#penderfyniadau-cysylltiedig)
  - [Gofynion cysylltiedig](#gofynion-cysylltiedig)
  - [Arteffactau cysylltiedig](#arteffactau-cysylltiedig)
  - [Egwyddorion cysylltiedig](#egwyddorion-cysylltiedig)
- [Nodiadau](#nodiadau)


## Crynodeb


### Mater

Rydym am ddefnyddio fframwaith CSS i greu ein cymwysiadau gwe:

  * Rydym am i'r profiad defnyddiwr fod yn gyflym ac yn ddibynadwy, ar bob porwr poblogaidd a maint sgrin.

  * Rydym am gael ailadrodd cyflym ar ddylunio, cynllun, UI/UX, ac ati.

  * Rydym am gael cymwysiadau ymatebol, yn enwedig ar gyfer sgriniau llai fel ar ddyfeisiau symudol, sgriniau mwy fel sgriniau llydan 4K, a sgriniau deinamig fel arddangosfeydd cylchdroadwy.  


### Penderfyniad

Penderfynwyd ar Bulma.


### Statws

Penderfynwyd ar Bulma. Rydym yn agored i ddewisiadau fframwaith CSS newydd wrth iddynt ddod i'r golwg.


## Manylion


### Rhagdybiaethau

Rydym am greu apiau gwe sy'n fodern, yn gyflym, yn ddibynadwy, yn ymatebol, ac ati.

Mae apiau gwe modern nodweddiadol yn lleihau/dileu'r defnydd o jQuery am sawl rheswm: 

  * Mae JavaScript modern yn cyflwyno llawer o'r galluoedd y mae jQuery wedi'u darparu'n raddol, felly mae angen jQuery yn llai, ac mae modiwlau gwell/cyflymach/llai sy'n darparu gweithrediadau penodol

  * Dull eang jQuery yw trin y DOM yn uniongyrchol, sy'n wrth-batrwm ar gyfer fframweithiau JavaScript modern (e.e. React, Vue, Svelte)

  * Mae jQuery yn ymyrryd â'i hun os caiff ei lwytho ddwywaith, ac ati.


### Cyfyngiadau

Os dewiswn fframwaith CSS sy'n defnyddio jQuery, yna rydym yn sownd yn mewnforio jQuery. Er enghraifft, mae Semantic UI yn defnyddio jQuery, ac nid yw Tachyons yn gwneud hynny.

Os dewiswn fframwaith CSS sy'n finimol, yna rydym yn mynd hebddo gydrannau'r fframwaith y gallem eu dymuno nawr neu'n fuan. Er enghraifft, mae Semantic UI yn darparu carwsél delweddau, ac nid yw Tachyons yn gwneud hynny.


### Safbwyntiau

Ystyriasom beidio â defnyddio fframwaith. Mae hyn yn ymddangos yn ddichonadwy o hyd, yn enwedig oherwydd bod grid CSS yn darparu llawer o'r hyn sydd ei angen arnom ar gyfer ein prosiect..

Ystyriasom lawer o fframweithiau CSS gan ddefnyddio rhestr fer gyflym ar gyfer didoli: Bootstrap, Bulma, Foundation, Materialize, Semantic UI, Tachyons, ac ati. Ein dau ddewis ar gyfer adolygiad dyfnach yw Semantic UI (oherwydd bod ganddo'r dull mwyaf semantig) a Bulma (oherwydd bod ganddo'r dull ysgafnaf sy'n darparu'r cydrannau rydym eu heisiau nawr).

Ystyriasom Semantic UI. Mae hwn yn darparu llawer o gydrannau, gan gynnwys rhai rydym eu heisiau ar gyfer ein prosiect: tabiau, gridiau, botymau, ac ati. Gwnaethom brosiect peilot gyda Semantic UI mewn dwy ffordd: gan ddefnyddio ffeiliau CDN nodweddiadol, a defnyddio ystorfeydd NPM. Cawsom lwyddiant gyda Semantic UI mewn tudalen HTML statig, ond ni chawsom lwyddiant o fewn ein terfyn amser i adeiladu SPA JavaScript (yn bennaf oherwydd problemau llwytho jQuery). Canfuom fod codwyr eraill wedi bod yn gofyn i ddatblygwyr Semantic UI greu fersiwn heb jQuery, am yr un rhesymau â ni. Mae codwyr eraill wedi bod yn gofyn am fersiwn heb jQuery ers blynyddoedd lawer, ond mae'r datblygwyr wedi dweud na, ac wedi datgan y byddai unrhyw fersiwn heb jQuery yn rhy anodd i'w hysgrifennu e.e. ~"mae gan brosiect Semantic UI fwy na 22,000 o bwyntiau cyffwrdd sy'n defnyddio jQuery".

Enghraifft gyda Semantic:

```html
<div class="ui top attached tabular menu">
  <a class="item">Alpha</a>
  <a class="item">Bravo</a>
</div>
```

Ystyriasom Bulma. Mae gan Bulma lawer o'r un galluoedd â Semantic UI, er nad cymaint o gydrannau soffistigedig. Mae Bulma wedi'i adeiladu â thechnegau modern, fel dim jQuery. Mae gan Bulma rai cydrannau trydydd parti, ac efallai y byddwn am ddefnyddio rhai ohonynt.


Enghraifft gyda Bulma:
```html
<div class="tabs">
  <ul>
    <li><a>Alpha</a></li>
    <li><a>Bravo</a></li>
  </ul>
</div>
```


### Dadl

Fel uchod.

Yn benodol, mae'n ymddangos bod gan Semantic UI faner rybudd o ran technoleg (h.y. cymaint o bwyntiau cyffwrdd jQuery) a hefyd o ran arweinyddiaeth (h.y. roedd heb-jQuery yn "na" pendant, yn hytrach na cheisio map trywydd, neu welliant parhaus, neu godi arian drwy roddion, ac ati).


### Goblygiadau

Os cawn hyd i fframwaith CSS da heb jQuery, mae hyn yn gyffredinol yn ddefnyddiol ac yn dda yn gyffredinol.


## Cysylltiedig


### Penderfyniadau cysylltiedig

Gall y fframwaith CSS a ddewiswn effeithio ar brofadwyedd.


### Gofynion cysylltiedig

Rydym am gyflwyno ap hollol fodern yn gyflym. 

Nid ydym am dreulio amser yn gweithio ar fframweithiau hŷn (yn enwedig Semantic UI) sy'n defnyddio dibyniaethau hŷn (yn enwedig jQuery).


### Arteffactau cysylltiedig

Mae'n effeithio ar yr holl HTML nodweddiadol a fydd yn defnyddio'r CSS.


### Egwyddorion cysylltiedig

Hawdd ei wrthdroi.

Angen cyflymder.


## Nodiadau

Unrhyw nodiadau yma.
