# Clàr co-dhùnaidh ailtireachd: Frèam CSS

Susbaint:

- [Geàrr-chunntas](#geàrr-chunntas)
  - [Cùis](#cùis)
  - [Co-dhùnadh](#co-dhùnadh)
  - [Staid](#staid)
- [Mion-fhiosrachadh](#mion-fhiosrachadh)
  - [Barailean](#barailean)
  - [Cuingeadan](#cuingeadan)
  - [Seasamhan](#seasamhan)
  - [Argamaid](#argamaid)
  - [Builean](#builean)
- [Co-cheangailte](#co-cheangailte)
  - [Co-dhùnaidhean co-cheangailte](#co-dhùnaidhean-co-cheangailte)
  - [Riatanasan co-cheangailte](#riatanasan-co-cheangailte)
  - [Ealain-chruthan co-cheangailte](#ealain-chruthan-co-cheangailte)
  - [Prionnsabalan co-cheangailte](#prionnsabalan-co-cheangailte)
- [Notaichean](#notaichean)


## Geàrr-chunntas


### Cùis

Tha sinn airson frèam CSS a chleachdadh gus ar n-aplacaidean-lìn a chruthachadh:

  * Tha sinn airson gum bi an t-eòlas cleachdaiche luath agus earbsach, air a h-uile brabhsair mòr-chòrdte agus meud sgrìn.

  * Tha sinn airson ath-aithris luath air dealbhadh, cruth-tarraing, UI/UX, msaa.

  * Tha sinn airson aplacaidean freagarrach, gu sònraichte airson sgrìnean nas lugha leithid air uidheaman gluasadach, sgrìnean nas motha leithid air sgrìnean farsaing 4K, agus sgrìnean dinamach leithid taisbeanaidhean a ghabhas tionndadh.  


### Co-dhùnadh

Chaidh co-dhùnadh air Bulma.


### Staid

Chaidh co-dhùnadh air Bulma. Fosgailte do roghainnean frèam CSS ùra mar a thig iad.


## Mion-fhiosrachadh


### Barailean

Tha sinn airson aplacaidean-lìn a chruthachadh a tha ùr-nodha, luath, earbsach, freagarrach, msaa.

Tha aplacaidean-lìn ùr-nodha àbhaisteach a’ lùghdachadh/a’ cur às do chleachdadh jQuery air grunn adhbharan: 

  * Tha JavaScript ùr-nodha a’ cur an gnìomh mòran chomasan a thug jQuery seachad, agus mar sin chan eil uiread de dh’fheum air jQuery, agus tha modalan nas fheàrr/nas luaithe/nas lugha ann a bheir cur-an-gnìomh sònraichte

  * Is e dòigh-obrach fharsaing jQuery làimhseachadh dìreach air an DOM, a tha na fhrith-phàtran airson frèamaichean JavaScript ùr-nodha (m.e. React, Vue, Svelte)

  * Bidh jQuery a’ cur bacadh air fhèin ma tha e air a luchdadh dà uair, msaa.


### Cuingeadan

Ma thaghas sinn frèam CSS a chleachdas jQuery, tha sinn glaiste a’ toirt a-steach jQuery. Mar eisimpleir, bidh Semantic UI a’ cleachdadh jQuery, agus chan eil Tachyons.

Ma thaghas sinn frèam CSS a tha as lugha, tha sinn a’ dol às aonais cho-phàirtean frèam a dh’fhaodadh sinn a bhith ag iarraidh a-nis no a dh’aithghearr. Mar eisimpleir, bheir Semantic UI cuairt-chàrn dhealbhan, agus chan eil Tachyons.


### Seasamhan

Bheachdaich sinn air gun frèam a chleachdadh. Tha seo fhathast coltach ri bhith ion-dhèanta, gu sònraichte air sgàth gu bheil CSS grid a’ toirt seachad mòran den a tha a dhìth oirnn airson ar pròiseact..

Bheachdaich sinn air mòran fhrèamaichean CSS a’ cleachdadh triage liosta ghoirid luath: Bootstrap, Bulma, Foundation, Materialize, Semantic UI, Tachyons, msaa. Is iad an dà thaghadh againn airson lèirmheas nas doimhne Semantic UI (air sgàth gu bheil an dòigh-obrach as semantaiche aige) agus Bulma (air sgàth gu bheil an dòigh-obrach as aotroime aige a bheir na co-phàirtean a tha sinn ag iarraidh a-nis).

Bheachdaich sinn air Semantic UI. Bheir seo mòran cho-phàirtean, a’ gabhail a-steach feadhainn a tha sinn ag iarraidh airson ar pròiseact: tabaichean, cliathan, putanan, msaa. Rinn sinn pìleat le Semantic UI an dà dhòigh: a’ cleachdadh faidhlichean CDN àbhaisteach, agus a’ cleachdadh ionadan tasgaidh NPM. Choilean sinn soirbheachas le Semantic UI ann an duilleag HTML statach, ach cha do choilean sinn soirbheachas taobh a-staigh ar crìoch-ama gus SPA JavaScript a thogail (sa chiad àite air sgàth cùisean luchdaidh jQuery). Lorg sinn gu bheil luchd-còdaidh eile air a bhith ag iarraidh air luchd-leasachaidh Semantic UI tionndadh gun jQuery a chruthachadh, airson na h-aon adhbharan ’s a tha againne. Tha luchd-còdaidh eile air a bhith ag iarraidh tionndadh gun jQuery airson mòran bhliadhnaichean, ach tha luchd-leasachaidh air ràdh nach dèan, agus air a ràdh gum biodh tionndadh gun jQuery sam bith ro dhuilich a sgrìobhadh m.e. ~“tha còrr air 22,000 puing-conaltraidh aig pròiseact Semantic UI a chleachdas jQuery”.

Eisimpleir le Semantic:

```html
<div class="ui top attached tabular menu">
  <a class="item">Alpha</a>
  <a class="item">Bravo</a>
</div>
```

Bheachdaich sinn air Bulma. Tha mòran chomasan coltach ri Semantic UI aig Bulma, ged nach eil uiread de cho-phàirtean sòlaimte. Tha Bulma air a thogail le dòighean ùr-nodha, leithid gun jQuery. Tha cuid de cho-phàirtean treas-phàrtaidh aig Bulma, agus dh’fhaodadh sinn cuid dhiubh a bhith ag iarraidh a chleachdadh.


Eisimpleir le Bulma:
```html
<div class="tabs">
  <ul>
    <li><a>Alpha</a></li>
    <li><a>Bravo</a></li>
  </ul>
</div>
```


### Argamaid

Mar gu h-àrd.

Gu sònraichte, tha coltas air Semantic UI bratach rabhaidh a bhith aige an dà chuid a thaobh teicneolais (is e sin uiread de phuingean-conaltraidh jQuery) agus cuideachd a thaobh ceannardas (is e sin gun robh gun jQuery na ‘chan eil’ cruaidh, seach a bhith a’ feuchainn ri mapa-rathaid, no leasachadh leantainneach, no togail airgid tro thabhartasan, msaa.).


### Builean

Ma lorgas sinn deagh fhrèam CSS gun jQuery, tha seo mar as trice cuideachail agus math san fharsaingeachd.


## Co-cheangailte


### Co-dhùnaidhean co-cheangailte

Dh’fhaodadh am frèam CSS a thaghas sinn buaidh a thoirt air so-dheuchainn.


### Riatanasan co-cheangailte

Tha sinn airson aplacaid dìreach ùr-nodha a chur a-mach gu luath. 

Chan eil sinn airson ùine a chaitheamh ag obair air frèamaichean nas sine (gu h-àraidh Semantic UI) a’ cleachdadh eisimeileachdan nas sine (gu h-àraidh jQuery).


### Ealain-chruthan co-cheangailte

A’ toirt buaidh air a’ HTML àbhaisteach gu lèir a chleachdas an CSS.


### Prionnsabalan co-cheangailte

Furasta a thilleadh.

Feum air astar.


## Notaichean

Notaichean sam bith an seo.
