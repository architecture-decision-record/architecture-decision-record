# Kovskrif dyberth arkitektoryeth: framweyth CSS

Kenwyns:

- [Berrskrif](#berrskrif)
  - [Kudyn](#kudyn)
  - [Dyberth](#dyberth)
  - [Studh](#studh)
- [Manylyow](#manylyow)
  - [Tybyansow](#tybyansow)
  - [Lettyansow](#lettyansow)
  - [Savyow](#savyow)
  - [Argument](#argument)
  - [Sewyansow](#sewyansow)
- [Kelmys](#kelmys)
  - [Dybyrthow kelmys](#dybyrthow-kelmys)
  - [Othommow kelmys](#othommow-kelmys)
  - [Arteffaktys kelmys](#arteffaktys-kelmys)
  - [Prensiplys kelmys](#prensiplys-kelmys)
- [Notennow](#notennow)


## Berrskrif


### Kudyn

Ni a vynn usya framweyth CSS dhe wul agan aplikasyons gwew:

  * Ni a vynn may fo skav ha fydhek an skians usyer, war oll an peurellow poblek ha meynsyow skrin.

  * Ni a vynn ailtreyans skon yn disinyans, gorholyans, UI/UX, hag yn.

  * Ni a vynn aplikasyons gorthybus, arbennik rag skrinys byghan avel war dhefednow symudek, skrinys brassa avel war widescreens 4K, ha skrinys dynamek avel displays trelyadow.  


### Dyberth

Dewisys Bulma.


### Studh

Dewisys Bulma. Ygor dhe dhewisyow framweyth CSS nowydh pan dheuns.


## Manylyow


### Tybyansow

Ni a vynn gwul aplikasyons gwew nowydhek, skav, fydhek, gorthybus, hag yn.

Aplikasyons gwew nowydhek ollgemmyn a lehe/dileh usadow jQuery awos lies skila: 

  * JavaScript nowydhek a dhre lies gallus a dhelivrys jQuery, ytho res yw jQuery le, ha moduls gwell/skavva/byghnana a re gweythrysow arbennik

  * Fordh ledan jQuery yw gul manipulation DOM yn rakt, yw anti-patron rag framweythow JavaScript nowydhek (rag ensampel React, Vue, Svelte)

  * jQuery a lett orth y honan mar kargh dywweyth, hag yn.


### Lettyansow

Mar tewisyn framweyth CSS a usya jQuery, ytho ni a vydh kevyngys dhe dhry jQuery. Rag ensampel, Semantic UI a usya jQuery, ha Tachyons ny wra.

Mar tewisyn framweyth CSS minimalek, ytho ni a gelli komponennow framweyth a vynn martesen lemmyn po skon. Rag ensampel, Semantic UI a re karrusel skeusennow, ha Tachyons ny wra.


### Savyow

Ni a gemeras yn kyfrif na usya framweyth vyth. Hemma a seem hwath possybyl, arbennik awos may re CSS grid meur a'n pyth a res dhe'gan towl..

Ni a gemeras yn kyfrif lies framweyth CSS dre driage berr: Bootstrap, Bulma, Foundation, Materialize, Semantic UI, Tachyons, hag yn. Agan dhew dhewis rag dehwelans downha yw Semantic UI (awos y fordh moy semantek) ha Bulma (awos y fordh skavha a re an komponennow a vynnyn lemmyn).

Ni a gemeras Semantic UI yn kyfrif. Hemma a re lies komponenn, ow keworra an re a vynnyn rag agan towl: tabs, grids, buttons, hag yn. Ni a wrug previans gans Semantic UI yn dhew fordh: ow usya fayls CDN ollgemmyn, hag ow usya gwithvaow NPM. Ni a gafas sewena gans Semantic UI yn folen HTML estaticek, mes ny gafsyn sewena y'gan termynlen rag drehevel SPA JavaScript (yn radh awos ishuyow karga jQuery). Ni a dhiskudhas may feu kodyoryon erell ow pesi displegyoryon Semantic UI dhe wul gwersyon heb jQuery, rag an keth skila a'gan re. Kodyoryon erell re beu ow pesi gwersyon heb jQuery rag lies bledhen, byttele an displegyoryon re leveris nagh, ha derivas may fo kales re skrifa gwersyon heb jQuery vyth, rag ensampel ~"an towl Semantic UI a'n jeves moy es 22,000 poynt kevrys a usya jQuery".

Ensampel gans Semantic:

```html
<div class="ui top attached tabular menu">
  <a class="item">Alpha</a>
  <a class="item">Bravo</a>
</div>
```

Ni a gemeras Bulma yn kyfrif. Bulma a'n jeves lies gallus haval dhe Semantic UI, kyn na vo mar lies komponenn avonsys. Bulma yw drehevys gans teknegow nowydhek, avel heb jQuery. Bulma a'n jeves nebes komponennow trydhes-parti, nebes anodhans a hyll bos gwiw.


Ensampel gans Bulma:
```html
<div class="tabs">
  <ul>
    <li><a>Alpha</a></li>
    <li><a>Bravo</a></li>
  </ul>
</div>
```


### Argument

Avel a-ugh.

Arbennik, Semantic UI a seem kavos baner gwarnyans yn teknologieth (hen yw, kebmys poynt kevrys jQuery) hag ynwedh yn ledyans (hen yw, heb jQuery o nagh kales, y'n le a assaya mappa-fordh, po gwellhe pesys, po kuntelles arghans, hag yn).


### Sewyansow

Mar kevyn framweyth CSS da heb jQuery, hemma yw gweres ha da yn ollgemmyn.


## Kelmys


### Dybyrthow kelmys

An framweyth CSS a dhewisyn a hyll drehedha previadewder.


### Othommow kelmys

Ni a vynn dyllo aplikasyon pur-nowydhek skon. 

Ny vynnyn ni dremena termyn ow oberi gans framweythow koth (arbennik Semantic UI) gans dyffendyansow koth (arbennik jQuery).


### Arteffaktys kelmys

A drehedh oll an HTML ollgemmyn a vydh usyes an CSS.


### Prensiplys kelmys

Es dhe dasfyna.

Othom a fistenys.


## Notennow

Pynag notennow omma.
