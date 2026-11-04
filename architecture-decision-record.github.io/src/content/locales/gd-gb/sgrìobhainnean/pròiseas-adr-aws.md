# Pròiseas chlàran co-dhùnaidh ailtireachd AWS

https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html

Is e sgrìobhainn a th’ ann an clàr co-dhùnaidh ailtireachd (ADR) a mhìnicheas roghainn a nì an sgioba mu thaobh cudromach de dh’ailtireachd a’ bhathar-bhog a tha iad a’ dealbhadh a thogail. Bidh gach ADR a’ toirt cunntas air a’ cho-dhùnadh ailtireachd, a cho-theacsa, agus na builean aige. Tha stàitean aig ADRan agus mar sin leanaidh iad cuairt-beatha. Airson eisimpleir de ADR, faic an tàthchuid.

Bidh am pròiseas ADR a’ toirt a-mach cruinneachadh de chlàran co-dhùnaidh ailtireachd. Bidh an cruinneachadh seo a’ cruthachadh an loga cho-dhùnaidhean. Bheir an loga co-dhùnaidhean co-theacsa a’ phròiseict a bharrachd air fiosrachadh mionaideach mu chur an gnìomh agus dealbhadh. Bidh buill a’ phròiseict a’ coimhead gu luath air prìomh-thiotalan gach ADR airson sealladh coitcheann fhaighinn air co-theacsa a’ phròiseict. Leughaidh iad na ADRan gus dàibheadh domhainn a dhèanamh a-steach do chur an gnìomh agus roghainnean dealbhaidh a’ phròiseict.

Nuair a ghabhas an sgioba ri ADR, bidh e neo-chaochlaideach. Ma dh’iarras lèirsinnean ùra co-dhùnadh eadar-dhealaichte, molaidh an sgioba ADR ùr. Nuair a ghabhas an sgioba ris an ADR ùr, cuiridh e an àite an ADR roimhe.

## Sgòp a’ phròiseis ADR

Bu chòir do bhuill a’ phròiseict ADR a chruthachadh airson gach co-dhùnadh a tha cudromach do dh’ailtireachd a bheir buaidh air a’ phròiseact no toradh bathar-bog, a’ gabhail a-steach na leanas (Richards agus Ford 2020):

* Structar (mar eisimpleir, pàtrain leithid microservices)

* Riatanasan neo-ghnìomhach (tèarainteachd, ruigsinneachd àrd, agus fulang-mhearachd)

* Eisimeileachdan (ceangal cho-phàirtean)

* Eadar-aghaidhean (APIan agus cùmhnantan foillsichte)

* Dòighean togail (leabharlannan, frèamaichean, innealan, agus pròiseasan)

* Is e riatanasan gnìomhach is neo-ghnìomhach na cuir-a-steach as cumanta dhan phròiseas ADR.


## Susbaint ADR

Nuair a chomharraicheas an sgioba feum airson ADR, tòisichidh ball den sgioba air an ADR a sgrìobhadh stèidhichte air teamplaid air feadh a’ phròiseict. (Faic buidheann ADR GitHub airson teamplaidean eisimpleir.) Nì an teamplaid cruthachadh ADR nas sìmplidhe agus dèanaidh i cinnteach gun glac an ADR a h-uile fiosrachadh buntainneach. Aig a’ char as lugha, bu chòir do gach ADR co-theacsa a’ cho-dhùnaidh, an co-dhùnadh fhèin, agus builean a’ cho-dhùnaidh don phròiseact agus na tha ri lìbhrigeadh a mhìneachadh. (Airson eisimpleirean de na h-earrannan sin, faic an tàthchuid.) Is e aon de na taobhan as cumhachdaiche de structar an ADR gu bheil e a’ cuimseachadh air an adhbhar airson a’ cho-dhùnaidh seach mar a chuir an sgioba an gnìomh e. Le bhith a’ tuigsinn carson a rinn an sgioba an co-dhùnadh, tha e nas fhasa do bhuill eile an sgioba gabhail ris a’ cho-dhùnadh, agus bacaidh e ailtirean eile nach robh an sàs ann am pròiseas dèanamh nan co-dhùnaidhean bho bhith ga chur air chùl san àm ri teachd.


## Pròiseas gabhail ri ADR

’S urrainn do gach ball den sgioba ADR a chruthachadh, ach bu chòir don sgioba mìneachadh seilbh a stèidheachadh airson ADR. Bu chòir do gach ùghdar a tha na shealbhadair air ADR susbaint an ADR a chumail suas gu gnìomhach agus a chonaltradh. Gus an t-seilbh seo a shoilleireachadh, tha an stiùireadh seo a’ gairm ùghdaran ADR mar shealbhadairean ADR anns na h-earrannan a leanas. Faodaidh buill eile den sgioba cuideachadh le ADR an-còmhnaidh. Ma dh’atharraicheas susbaint ADR mus gabh an sgioba ris an ADR, bu chòir don t-sealbhadair na h-atharraichean sin aontachadh.

Às dèidh don sgioba co-dhùnadh ailtireachd agus an sealbhadair aige a chomharrachadh, bheir sealbhadair an ADR seachad an ADR san staid **Air a mholadh** aig toiseach a’ phròiseis. Tha ADRan san staid Air a mholadh deiseil airson lèirmheas.

Bidh sealbhadair an ADR an uairsin a’ tòiseachadh air a’ phròiseas lèirmheas airson an ADR. Is e amas pròiseas lèirmheas an ADR co-dhùnadh a bheil an sgioba a’ gabhail ris an ADR, a’ co-dhùnadh gu bheil feum air ath-obair, no a’ diùltadh an ADR. Bidh sgioba a’ phròiseict, a’ gabhail a-steach an sealbhadair, a’ dèanamh lèirmheas air an ADR. Bu chòir don choinneimh lèirmheas tòiseachadh le uinneag ama sònraichte airson an ADR a leughadh. Aig an ìre as àbhaistiche, bu chòir 10 gu 15 mionaidean a bhith gu leòr. Rè na h-ùine seo, leughaidh gach ball den sgioba an sgrìobhainn agus cuiridh iad beachdan is ceistean ris gus cuspairean neo-shoilleir a chomharrachadh. Às dèidh ìre an lèirmheas, leughaidh sealbhadair an ADR a-mach agus bruidhnidh e air gach beachd leis an sgioba.

Ma lorgas an sgioba puingean gnìomha gus an ADR a leasachadh, fuiraichidh staid an ADR **Air a mholadh**. Cuiridh sealbhadair an ADR na gnìomhan an cèill, agus, ann an co-obrachadh leis an sgioba, cuiridh e neach-ainmichte ri gach gnìomh. Faodaidh gach ball den sgioba cur ris agus na puingean gnìomha fhuasgladh. Tha e an urra ri sealbhadair an ADR am pròiseas lèirmheas ath-chlàradh.

Faodaidh an sgioba cuideachd co-dhùnadh an ADR a dhiùltadh. Anns a’ chùis seo, cuiridh sealbhadair an ADR adhbhar airson an diùltaidh ris gus deasbadan san àm ri teachd air an aon chuspair a sheachnadh. Atharraichidh an sealbhadair staid an ADR gu **Air a dhiùltadh**.

Ma dh’aontaicheas an sgioba ris an ADR, cuiridh an sealbhadair stampa-ama, tionndadh, agus liosta de chom-pàirtichean ris. Ùraichidh an sealbhadair an uairsin an staid gu **Air a ghabhail**.

Tha ADRan agus an loga co-dhùnaidhean a chruthaicheas iad a’ riochdachadh cho-dhùnaidhean a rinn an sgioba agus a’ toirt eachdraidh air a h-uile co-dhùnadh. Bidh an sgioba a’ cleachdadh nan ADRan mar iomradh rè lèirmheasan còd agus ailtireachd far a bheil sin comasach. A bharrachd air lèirmheasan còd, saothair dealbhaidh, agus saothair cur an gnìomh a dhèanamh, bu chòir do bhuill an sgioba comhairle a ghabhail air ADRan airson co-dhùnaidhean ro-innleachdail airson an toraidh.

Mar dheagh chleachdadh, bu chòir do gach atharrachadh bathar-bog a dhol tro lèirmheasan co-aoisean agus co-dhiù aon aontachadh iarraidh. Rè lèirmheas an còd, is dòcha gun lorg lèirmheasaiche atharraichean a bhriseas ADR no barrachd. Anns a’ chùis seo, iarraidh an lèirmheasaiche air ùghdar an atharrachaidh còd an còd ùrachadh, agus co-roinnidh e ceangal dhan ADR. Nuair a dh’ùraicheas an t-ùghdar an còd, bidh e air aontachadh le lèirmheasaichean co-aoisean agus air a chur còmhla ris a’ phrìomh bhonn-còd.


## Pròiseas lèirmheas ADR

Bu chòir don sgioba ADRan a làimhseachadh mar sgrìobhainnean neo-chaochlaideach às dèidh don sgioba gabhail riutha no an diùltadh. Feumaidh atharrachaidhean air ADR a tha ann ADR ùr a chruthachadh, pròiseas lèirmheas a stèidheachadh airson an ADR ùir, agus an ADR aontachadh. Ma dh’aontaicheas an sgioba ris an ADR ùr, bu chòir don t-sealbhadair staid an t-seann ADR atharrachadh gu **Air a chur an àite**.
