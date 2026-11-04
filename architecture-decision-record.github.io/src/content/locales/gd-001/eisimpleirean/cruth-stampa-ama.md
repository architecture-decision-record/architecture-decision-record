# Cruth stampa ama

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

Tha sinn airson a bhith comasach air lorg cuin a thachras rudan le bhith a’ cleachdadh stampaichean-ama agus le bhith a’ cleachdadh cruth stampa-ama cunbhalach a tha ag obair gu math thar ar siostaman gu lèir agus siostaman treas-phàrtaidh.

Bidh sinn ag eadar-obrachadh le siostaman aig a bheil diofar chruthan stampa-ama:

* Chan eil cruth stampa-ama dùthchasach aig teachdaireachdan JSON, agus mar sin feumaidh sinn taghadh ciamar a thionndaidheas sinn stampa-ama gu sreang, agus sreang gu stampa-ama, is e sin ciamar a nì sinn serialize/deserialize.

* Tha cuid de dh’aplacaidean air an suidheachadh gus ùine ionadail a chleachdadh, seach ùine UTC. Faodaidh seo a bhith goireasach do phròiseactan a dh’fheumas atharrachadh gu ùine ionadail, leithid pròiseactan a bhrosnaicheas tachartasan stèidhichte air ùine ionadail.

* Tha feumalachdan is comasan mionaideachd ùine eadar-dhealaichte aig cuid de shiostaman, leithid a’ cleachdadh rùn ùine de dhiogan an aghaidh milediogan an aghaidh nanodiogan. Mar eisimpleir, bidh an àithne `date` den t-siostam obrachaidh Linux a’ cleachdadh mionaideachd ùine bhunaiteach de dhiogan, ach tha iomlaid stoc Nasdaq ag iarraidh mionaideachd ùine bhunaiteach de nanodiogan.


### Co-dhùnadh

Tha sinn a’ taghadh cruth inbhe stampa-ama ISO 8601 le mionaideachd nanodiogan, gu sònraichte “YYYY-MM-DDTHH:MM:SS.NNNNNNNNNZ”.

Seallaidh an cruth a’ bhliadhna, mìos, latha, uair, mionaid, diog, nanodiogan, agus sòn-ama Zulu a.k.a. UTC, GMT.


### Staid

Air co-dhùnadh.


## Mion-fhiosrachadh


### Barailean

Feumaidh sinn na sreangan teacsa stampa-ama sin a làimhseachadh, gus tionndadh bho stampa-ama gu sreang (a.k.a. serialize) agus tionndadh bho shreang gu stampa-ama (a.k.a. deserialize).

Tha sinn ag iarraidh cruth a tha mar as trice furasta a chleachdadh, furasta a thionndadh, agus furasta do dhuine a leughadh.

Tha sinn ag iarraidh co-chòrdalachd le raon farsaing de shiostaman taobh a-muigh nach urrainn dhuinn smachd a chumail orra, leithid siostaman mion-sgrùdaidh, siostaman stòir dàta, siostaman ionmhais.


### Cuingeadan

Tha cuingeadan mionaideachd ùine aig cuid de shiostaman. Mar eisimpleir, faodaidh an àithne `date` den t-siostam obrachaidh macOS mionaideachd ùine a chlò-bhualadh ann an diogan, ach chan ann ann an nanodiogan.


### Seasamhan

Bheachdaich sinn air raon de roghainnean:

* Unix epoch i.e. aon àireamh a tha a’ dol am meud.

* Cruth teacsa cuimir “YYYYMMDDTHHMMSSNNNNNNNNN”.

* A’ cleachdadh sòn-ama ionadail an aghaidh sòn-ama UTC.


### Argamaid

Airson cleachdadh àbhaisteach, tha sinn a’ cur luach air furasta a leughadh/sgrìobhadh le daoine, barrachd na astar/meud amh.

Airson cleachdadh àbhaisteach, tha sinn ag iarraidh cruth a dh’obraicheas gu math ann an siostaman inneal, agus a dh’obraicheas gu math cuideachd le làimh, leithid sgrìobhadh dàta sampaill, leughadh toraidh JSON, grepping faidhle loga, msaa.

Airson cleachdadh neo-àbhaisteach, leithid coimpiutaireachd coileanaidh àrd, tha sinn an dùil gum bi sinn airson cruth teacsa sam bith a thaghas sinn a bharrachadh le bhith a’ tionndadh an teacsa gu cruth nas luaithe, leithid seòrsa oibseict ceann-latha togte a-staigh cànain prògramachaidh. Mar sin chan eil cruth an teacsa a’ cur mòran airson HPC.


### Builean

Bidh na diofar shiostaman teacsa agus siostaman ama againn a’ tighinn còmhla air a’ chruth seo.


## Co-cheangailte


### Co-dhùnaidhean co-cheangailte

Dh’fhaodadh sinn a bhith ag iarraidh dòigh luath/fhurasta cuideachd air delta ama a.k.a. fadan a lorg. Tha iad sin furasta le stampaichean-ama Unix epoch.


### Riatanasan co-cheangailte

Dh’fhaodadh sinn a bhith ag iarraidh ar co-dhùnadh atharrachadh m.e. ma tha riatanas co-cheangailte againn airson seòrsa sònraichte de stampa teachdaireachd loga, leithid airson Splunk, Sumo, ELK, msaa.


### Ealain-chruthan co-cheangailte

Cruthadairean agus parsers cànain:

  * [date-fns: Modern JavaScript date utility library](https://date-fns.org/)
  * [Crono: date and time library for Rust](https://github.com/chronotope/chron)
  
Eisimpleirean Rosetta Code:

  * [System time](https://www.rosettacode.org/wiki/System_time)
  * [Data format](https://www.rosettacode.org/wiki/Date_format)
  * [Show the epoch](https://www.rosettacode.org/wiki/Show_the_epoch)

Eisimpleirean SixArm:

  * [now_string](https://github.com/SixArm/rosetta_code/tree/master/tasks/now_string)


### Prionnsabalan co-cheangailte

Furasta a thilleadh. Is urrainn dhuinn atharrachadh gu furasta gu cruth eadar-dhealaichte, leithid Unix epoch.

Dàil a chur air optimachadh ro-thràth. Airson cleachdadh àbhaisteach cha bhi sinn a’ gabhail cùram mòr mu bheagan charactaran a bharrachd leithid cruth a chleachdas daisean agus dà-phuingean.


## Notaichean

Cuir notaichean ris an seo.
