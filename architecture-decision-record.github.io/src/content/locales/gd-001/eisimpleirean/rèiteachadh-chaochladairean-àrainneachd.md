# Rèiteachadh chaochladairean àrainneachd

Susbaint:

* [Geàrr-chunntas](#geàrr-chunntas)
  * [Cùis](#cùis)
  * [Co-dhùnadh](#co-dhùnadh)
  * [Staid](#staid)
* [Mion-fhiosrachadh](#mion-fhiosrachadh)
  * [Barailean](#barailean)
  * [Cuingeadan](#cuingeadan)
  * [Seasamhan](#seasamhan)
  * [Argamaid](#argamaid)
  * [Builean](#builean)
* [Co-cheangailte](#co-cheangailte)
  * [Co-dhùnaidhean co-cheangailte](#co-dhùnaidhean-co-cheangailte)
  * [Riatanasan co-cheangailte](#riatanasan-co-cheangailte)
  * [Ealain-chruthan co-cheangailte](#ealain-chruthan-co-cheangailte)
  * [Prionnsabalan co-cheangailte](#prionnsabalan-co-cheangailte)
* [Notaichean](#notaichean)


## Geàrr-chunntas


### Cùis

Tha sinn airson gum bi ar n-aplacaidean rèiteachail seach ealain-chruthan/binaries/tùs, gus an urrainn do aon togail giùlan eadar-dhealaichte a-rèir na h-àrainneachd cur-gu-gnìomh aige.

  * Gus seo a choileanadh, tha sinn airson rèiteachadh chaochladairean àrainneachd a chleachdadh.

  * Tha sinn airson an rèiteachadh a riaghladh le bhith a’ cleachdadh fhaidhlichean as urrainn dhuinn a chumail fo smachd tionndaidh.

  * Tha sinn airson beagan ergonomaigs eòlas leasaiche a thoirt seachad, leithid fios a bhith againn dè as urrainn a rèiteachadh agus bunaitean buntainneach sam bith.


### Co-dhùnadh

Chaidh co-dhùnadh air faidhlichean .env le faidhle bunaiteach co-cheangailte agus faidhle sgeama.


### Staid

Air co-dhùnadh. Fosgailte do bheachdachadh air comasan ùra mar a thig iad am bàrr.


## Mion-fhiosrachadh


### Barailean

Is fheàrr leinn còd na h-aplacaid agus còd na h-àrainneachd a sgaradh. Tha sinn a’ gabhail ris gum feum an aplacaid obrachadh ann an dòigh eadar-dhealaichte ann an diofar àrainneachdan, leithid àrainneachd leasachaidh, àrainneachd deuchainn, àrainneachd taisbeanaidh, àrainneachd cinneasachaidh, msaa.

Is fheàrr leinn cleachdadh a’ ghnìomhachais “12 factor app” agus tuilleadh fhathast an cleachdadh co-cheangailte “15 factor app”.

Tha mòran de na pròiseactan a bh’ againn roimhe air gnàthas fhaidhle `.env` no pasgan `.env` coltach ris a chleachdadh. Tha cleachdadh àbhaisteach ann gam cumail a-mach à smachd tionndaidh, agus an àite sin dòigh eile a chleachdadh airson an cur gu gnìomh, an tionndadh, agus an riaghladh.


### Cuingeadan

Tha sinn airson dìomhaireachdan a chumail a-mach à siostam smachd tionndaidh (VCS) riaghlaidh còd-tùs (SCM) againn.

Tha sinn airson ag amas air co-chòrdalachd le frèamaichean agus leabharlannan bathar-bog mòr-chòrdte. Mar eisimpleir, tha modal “dotenv” aig Node airson rèiteachadh chaochladairean àrainneachd a leughadh.


### Seasamhan

Bheachdaich sinn air beagan dhòighean-obrach:

  * Stòradh rèiteachaidh san aplacaid leithid ann am faidhle `config.js`.

  * Stòradh rèiteachaidh san àrainneachd leithid ann am faidhle `.env`.

  * Faighinn rèiteachaidh bho àite aithnichte leithid frithealaiche cead.


### Argamaid

Thagh sinn an dòigh-obrach faidhle .env air sgàth:

  * Tha e mòr-chòrdte, a’ gabhail a-steach am measg eòlaichean.

  * Tha e a’ leantainn pàtran fhaidhlichean `.env` a tha ar sgiobaidhean air a chleachdadh gu soirbheachail iomadh uair air mòran phròiseactan.

  * Tha e sìmplidh. Gu sònraichte, tha sinn ceart gu leòr an-dràsta leis na h-eadar-dhealachaidhean susbainteach a chì sinn, leithid dìth comasan sgrùdaidh an coimeas ri dòigh-obrach frithealaiche cead.


### Builean

Feumaidh sinn dòigh a lorg air rèiteachadh chaochladairean àrainneachd a tha poblach a sgaradh bho riaghladh dìomhaireachdan sam bith.


## Co-cheangailte


### Co-dhùnaidhean co-cheangailte

Tha sinn an dùil gun cleachd ar n-aplacaidean gu lèir an dòigh-obrach seo.

Bidh sinn a’ dealbhadh ùrachadh a dhèanamh air aplacaid sam bith dhe ar n-aplacaidean a chleachdas dòigh-obrach nach eil cho comasach, leithid hardcoding ann am binary no ann an còd-tùs.

Cumaidh sinn mar a tha aplacaid sam bith dhe ar n-aplacaidean a chleachdas dòigh-obrach nas comasaiche, leithid frithealaiche ceadachaidh.


### Riatanasan co-cheangailte

Cuiridh sinn comasan devops ris airson na faidhlichean, a’ gabhail a-steach hooks, deuchainnean, agus amalachadh leantainneach.

Feumaidh sinn gach companach sgioba leasachaidh a thrèanadh air a’ cho-dhùnadh seo.



### Ealain-chruthan co-cheangailte

Feumaidh faidhle .env fhèin agus faidhlichean co-cheangailte a bhith aig gach raon far an cuir sinn gu gnìomh.


### Prionnsabalan co-cheangailte

Furasta a thilleadh.


## Notaichean


Eisimpleir de fhaidhle `.env`:

```env
NAME=Alice Anderson
EMAIL=alice@example.com
```

Eisimpleir de fhaidhle `.env.defaults`:

```env
NAME=Joe Doe
EMAIL=joe@example.com
```

Eisimpleir de fhaidhle `.env.schema` leis na h-iuchraichean a-mhàin:

```env
NAME
EMAIL
```
