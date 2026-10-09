# Ffurfweddu newidynnau amgylchedd

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

Rydym am i'n cymwysiadau fod yn ffurfweddadwy y tu hwnt i arteffactau/deuaidd/ffynhonnell, fel y gall un adeiladwaith ymddwyn yn wahanol yn dibynnu ar ei amgylchedd cyflwyno.

  * I gyflawni hyn, rydym am ddefnyddio ffurfweddiad newidynnau amgylchedd.

  * Rydym am reoli'r ffurfweddiad drwy ddefnyddio ffeiliau y gallwn eu rheoli fersiynau.

  * Rydym am ddarparu rhywfaint o ergonomeg profiad datblygwyr, fel gwybod beth y gellir ei ffurfweddu ac unrhyw ragosodiadau perthnasol.


### Penderfyniad

Penderfynwyd ar ffeiliau .env gyda ffeil ragosodiadau a ffeil sgema gysylltiedig.


### Statws

Penderfynwyd. Rydym yn agored i ystyried galluoedd newydd wrth iddynt godi.


## Manylion


### Rhagdybiaethau

Rydym yn ffafrio gwahanu cod y cymhwysiad a chod yr amgylchedd. Rydym yn rhagdybio bod angen i'r ap weithio'n wahanol mewn gwahanol amgylcheddau, fel amgylchedd datblygu, amgylchedd profi, amgylchedd arddangos, amgylchedd cynhyrchu, ac ati.

Rydym yn ffafrio arfer y diwydiant "ap 12 ffactor" a hyd yn oed yn fwy yr arfer cysylltiedig "ap 15 ffactor".

Mae llawer o'n prosiectau blaenorol wedi defnyddio'r confensiwn o ffeil `.env` neu gyfeiriadur `.env` tebyg. Mae arfer nodweddiadol o gadw'r rhain allan o'r system rheoli fersiynau, a defnyddio ffordd arall i'w cyflwyno, eu fersiynu a'u rheoli.


### Cyfyngiadau

Rydym am gadw cyfrinachau allan o'n system rheoli fersiynau (VCS) ar gyfer rheoli cod ffynhonnell (SCM).

Rydym am anelu at gydnawsedd â fframweithiau a llyfrgelloedd meddalwedd poblogaidd. Er enghraifft, mae gan Node fodiwl "dotenv" ar gyfer darllen ffurfweddiad newidynnau amgylchedd.


### Safbwyntiau

Ystyriasom ychydig o ddulliau:

  * Storio ffurfweddiad yn yr ap, fel mewn ffeil `config.js`.

  * Storio ffurfweddiad yn yr amgylchedd, fel mewn ffeil `.env`.

  * Nôl ffurfweddiad o leoliad hysbys fel gweinydd trwyddedau.


### Dadl

Dewisasom y dull o ffeil .env oherwydd:

  * Mae'n boblogaidd, gan gynnwys ymhlith arbenigwyr.

  * Mae'n dilyn patrwm ffeiliau `.env` y mae ein timau wedi'u defnyddio'n llwyddiannus lawer gwaith ar lawer o brosiectau.

  * Mae'n syml. Yn arbennig, rydym yn fodlon am y tro â'r cyfaddawdau sylweddol a welwn, fel diffyg galluoedd archwilio o'i gymharu â dull gweinydd trwyddedau.


### Goblygiadau

Mae angen i ni ddod o hyd i ffordd o wahanu ffurfweddiad newidynnau amgylchedd sy'n gyhoeddus oddi wrth unrhyw reoli cyfrinachau.


## Cysylltiedig


### Penderfyniadau cysylltiedig

Rydym yn disgwyl i'n holl gymwysiadau ddefnyddio'r dull hwn.

Byddwn yn cynllunio i uwchraddio unrhyw un o'n cymwysiadau sy'n defnyddio dull llai galluog, fel ei godio'n galed mewn deuaidd neu mewn cod ffynhonnell.

Byddwn yn cadw fel y mae unrhyw un o'n cymwysiadau sy'n defnyddio dull mwy galluog, fel gweinydd trwyddedu.


### Gofynion cysylltiedig

Byddwn yn ychwanegu galluoedd devops ar gyfer y ffeiliau, gan gynnwys bachau, profion ac integreiddio parhaus.

Mae angen i ni hyfforddi pob cydweithiwr datblygu ar y penderfyniad hwn.



### Arteffactau cysylltiedig

Bydd angen ffeil .env a ffeiliau cysylltiedig ar gyfer pob ardal lle rydym yn cyflwyno.


### Egwyddorion cysylltiedig

Hawdd ei wrthdroi.


## Nodiadau


Enghraifft o ffeil `.env`:

```env
NAME=Alice Anderson
EMAIL=alice@example.com
```

Enghraifft o ffeil `.env.defaults`:

```env
NAME=Joe Doe
EMAIL=joe@example.com
```

Enghraifft o ffeil `.env.schema` gyda'r allweddi yn unig:

```env
NAME
EMAIL
```
