# Clàr co-dhùnaidh ailtireachd (ADR)

Is e sgrìobhainn a th’ ann an clàr co-dhùnaidh ailtireachd (ADR) a ghlacas co-dhùnadh cudromach ailtireachd a chaidh a dhèanamh còmhla ris a’ cho-theacsa agus na builean aige.

> [!IMPORTANT]
> Dèan do dhìcheall fhèin air na goireasan seo mus cleachd thu iad ann an siostaman èiginneach sam bith.

Susbaint:

- [Dè th’ ann an clàr co-dhùnaidh ailtireachd?](#dè-th-ann-an-clàr-co-dhùnaidh-ailtireachd)
- [Ciamar a thòisicheas tu air ADR a chleachdadh](#ciamar-a-thòisicheas-tu-air-adr-a-chleachdadh)
- [Ciamar a thòisicheas tu air ADR a chleachdadh le innealan](#ciamar-a-thòisicheas-tu-air-adr-a-chleachdadh-le-innealan)
- [Ciamar a thòisicheas tu air ADR a chleachdadh le git](#ciamar-a-thòisicheas-tu-air-adr-a-chleachdadh-le-git)
- [Sgilean Claude Code airson ADRan](#sgilean-claude-code-airson-adran)
- [Gnàthasan ainmeachaidh faidhle airson ADR](#gnàthasan-ainmeachaidh-faidhle-airson-adr)
- [Molaidhean airson ADR mhath a sgrìobhadh](#molaidhean-airson-adr-mhath-a-sgrìobhadh)
- [Teamplaidean eisimpleir airson ADRan](#teamplaidean-eisimpleir-airson-adran)
- [Comhairle obair-sgioba airson ADR](#comhairle-obair-sgioba-airson-adr)
- [Ceistean obair-sgioba airson ADRan](#ceistean-obair-sgioba-airson-adran)
- [Bun-bheachdan ath-cheum airson ADRan](#bun-bheachdan-ath-cheum-airson-adran)
- [Diagraman, seallaidhean agus sealladh-bheachdan ailtireachd](#diagraman-seallaidhean-agus-sealladh-bheachdan-ailtireachd)
- [Gnìomhan freagarrachd airson co-dhùnaidhean mar chòd](#gnìomhan-freagarrachd-airson-co-dhùnaidhean-mar-chòd)
- [Rèilichean-dìon co-dhùnaidh airson pull requests](#rèilichean-dìon-co-dhùnaidh-airson-pull-requests)
- [Tuilleadh fiosrachaidh](#tuilleadh-fiosrachaidh)

Teamplaidean:

- [Teamplaid clàr co-dhùnaidh le Jeff Tyree agus Art Akerman](teamplaidean/teamplaid-clàr-co-dhùnaidh-le-jeff-tyree-agus-art-akerman/)
- [Teamplaid clàr co-dhùnaidh le Michael Nygard](teamplaidean/teamplaid-clàr-co-dhùnaidh-le-michael-nygard/)
- [Teamplaid clàr co-dhùnaidh le EdgeX](teamplaidean/teamplaid-clàr-co-dhùnaidh-le-edgex/)
- [Teamplaid clàr co-dhùnaidh le arc42](teamplaidean/teamplaid-clàr-co-dhùnaidh-le-arc42/)
- [Teamplaid clàr co-dhùnaidh airson pàtran Alexandrian](teamplaidean/teamplaid-clàr-co-dhùnaidh-airson-pàtran-alexandrian/)
- [Teamplaid clàr co-dhùnaidh airson cùis gnìomhachais](teamplaidean/teamplaid-clàr-co-dhùnaidh-airson-cùis-gnìomhachais/)
- [Teamplaid clàr co-dhùnaidh pròiseact MADR](teamplaidean/teamplaid-clàr-co-dhùnaidh-pròiseact-madr/)
- [Teamplaid clàr co-dhùnaidh le Planguage](teamplaidean/teamplaid-clàr-co-dhùnaidh-le-planguage/)
- [Teamplaid clàr co-dhùnaidh le Paulo Merson](https://github.com/pmerson/ADR-template)
- [Teamplaid clàr co-dhùnaidh le Olaf Zimmermann](https://medium.com/olzzio/y-statements-10eb07b5a177)
- [Teamplaid clàr co-dhùnaidh le Gareth Morgan](teamplaidean/teamplaid-clàr-co-dhùnaidh-le-gareth-morgan/)
- [Teamplaid clàr co-dhùnaidh le GIG Cymru NHS Wales](teamplaidean/teamplaid-clàr-co-dhùnaidh-le-gig-cymru-nhs-wales/)
- [Teamplaid clàr co-dhùnaidh airson co-dhùnaidhean teicnigeach cudromach (ITDan) le Ignacio Larrañaga](teamplaidean/teamplaid-clàr-co-dhùnaidh-airson-co-dhùnaidhean-teicnigeach-cudromach/)

Eisimpleirean:

- [Frèam CSS](eisimpleirean/frèam-css/)
- [Rèiteachadh chaochladairean àrainneachd](eisimpleirean/rèiteachadh-chaochladairean-àrainneachd/)
- [Meadrachd, sgrùdairean, rabhaidhean](eisimpleirean/meadrachd-sgrùdairean-rabhaidhean/)
- [Microsoft Azure DevOps](eisimpleirean/microsoft-azure-devops/)
- [Monorepo an aghaidh multirepo](eisimpleirean/monorepo-an-aghaidh-multirepo/)
- [Cànanan prògramachaidh](eisimpleirean/cànanan-prògramachaidh/)
- [Stòras dhìomhaireachdan](eisimpleirean/stòras-dhìomhaireachdan/)
- [Cruth stampa ama](eisimpleirean/cruth-stampa-ama/)
- [Mòran a bharrachd ...](eisimpleirean/)

## Dè th’ ann an clàr co-dhùnaidh ailtireachd?

Is e sgrìobhainn a th’ ann an **clàr co-dhùnaidh ailtireachd** (ADR) a ghlacas co-dhùnadh cudromach ailtireachd a chaidh a dhèanamh còmhla ris a’ cho-theacsa agus na builean aige.

Is e roghainn dealbhaidh bathar-bog a th’ ann an **co-dhùnadh ailtireachd** (AD) a fhreagras air riatanas cudromach.

Is e **loga co-dhùnaidhean ailtireachd** (ADL) an cruinneachadh de gach ADR a chaidh a chruthachadh agus a chumail suas airson pròiseact (no buidheann) sònraichte.

Is e **riatanas cudromach do dh’ailtireachd** (ASR) riatanas aig a bheil buaidh thomhaiseach air ailtireachd siostam bathar-bog.

Tha iad sin uile taobh a-staigh cuspair **riaghladh eòlais ailtireachd** (AKM).

Is e amas na sgrìobhainn seo sealladh luath a thoirt air ADR, mar a chruthaicheas tu iad, agus càite am faigh thu tuilleadh fiosrachaidh.

Giorrachaidhean:

  * **AD**: co-dhùnadh ailtireachd

  * **ADL**: loga co-dhùnaidhean ailtireachd

  * **ADR**: clàr co-dhùnaidh ailtireachd

  * **AKM**: riaghladh eòlais ailtireachd

  * **ASR**: riatanas cudromach do dh’ailtireachd

## Ciamar a thòisicheas tu air ADR a chleachdadh

Airson tòiseachadh air ADR a chleachdadh, bruidhinn ri do chompanaich sgioba mu na raointean seo.

Comharrachadh co-dhùnaidhean:

  * Dè cho èiginneach agus dè cho cudromach ’s a tha an AD?

  * A bheil agad ri a dhèanamh a-nis, no an urrainn dha feitheamh gus am bi tuilleadh aithnichte?

  * Faodaidh an dà chuid eòlas pearsanta agus co-roinnte, a bharrachd air dòighean agus cleachdaidhean dealbhaidh aithnichte, cuideachadh le comharrachadh co-dhùnaidhean.

  * Gu h-ideal, cùm liosta de cho-dhùnaidhean ri dhèanamh a tha a’ tighinn còmhla ri liosta nan rudan ri dhèanamh airson an toraidh.

Dèanamh co-dhùnaidhean:

  * Tha grunn dhòighean ann airson co-dhùnaidhean a dhèanamh, an dà chuid cuid choitcheann agus cuid a tha sònraichte do ailtireachd bathar-bog, mar eisimpleir mapadh deasbaid.

  * Tha co-dhùnadh buidhne na chuspair rannsachaidh gnìomhach.

Cur an gnìomh agus èigneachadh co-dhùnaidhean:

  * Bidh ADan air an cleachdadh ann an dealbhadh bathar-bog; mar sin feumaidh iad a bhith air an conaltradh dha na com-pàirtichean aig an t-siostam a bhios a’ maoineachadh, a’ leasachadh agus ag obrachadh, agus air an gabhail leotha.

  * Tha stoidhlichean còdaidh a tha follaiseach a thaobh ailtireachd agus lèirmheasan còd a tha a’ cuimseachadh air cùisean agus co-dhùnaidhean ailtireachd nan dà chleachdadh co-cheangailte.

  * Feumaidh ADan cuideachd a bhith air an (ath-)bheachdachadh nuair a thèid siostam bathar-bog a ùrachadh ann an mean-fhàs bathar-bog.

Co-roinneadh co-dhùnaidhean (roghainneil):

  * Bidh mòran ADan a’ nochdadh a-rithist thar phròiseactan.

  * Mar sin, faodaidh eòlas air co-dhùnaidhean a chaidh a dhèanamh roimhe, math is dona, a bhith nan stuthan luachmhor ath-chleachdadh nuair a thathar a’ cleachdadh ro-innleachd shoilleir airson riaghladh eòlais.

Sgrìobhadh co-dhùnaidhean sìos:

  * Tha mòran theamplaidean agus innealan ann airson co-dhùnaidhean a ghlacadh.

  * Faic coimhearsnachdan lùghdaichte (agile), m.e. ADRan M. Nygard.

  * Faic pròiseasan traidiseanta innleadaireachd bathar-bog agus dealbhadh ailtireachd, m.e. cruthan clàir a mhol IBM UMF agus Tyree agus Akerman bho CapitalOne.

Airson tuilleadh:

  * Chaidh na ceumannan gu h-àrd a ghabhail bhon inntrigeadh Wikipedia air [Architectural Decision](https://en.wikipedia.org/wiki/Architectural_decision)

## Ciamar a thòisicheas tu air ADR a chleachdadh le innealan

- [MySpec](https://myspec.dev) — Àrd-ùrlar fèin-obrachail airson mion-chomharrachadh agus co-dhùnaidhean ailtireachd a bheir structar air bun-reachd a’ phròiseict, ailtireachd theicnigeach agus ADRan ann am Markdown glan a thèid a lìbhrigeadh tro MCP.

’S urrainn dhut tòiseachadh air ADR a chleachdadh le innealan ge brith dè an dòigh a thaogas tu.

Mar eisimpleir:

  * Ma thaitneas Google Drive agus deasachadh air-loidhne riut, faodaidh tu Google Doc, no Google Sheet, a chruthachadh.

  * Ma thaitneas smachd tionndaidh còd-tùs riut, leithid git, faodaidh tu faidhle a chruthachadh airson gach ADR.

  * Ma thaitneas innealan planaidh phròiseactan riut, leithid Atlassian Jira, faodaidh tu lorgaire planaidh an inneil a chleachdadh.

  * Ma thaitneas uicidhean riut, leithid MediaWiki, faodaidh tu uicidh ADR a chruthachadh.

## Ciamar a thòisicheas tu air ADR a chleachdadh le git

Ma thaitneas smachd tionndaidh git riut, seo mar as toil leinn tòiseachadh air ADR a chleachdadh le git airson pròiseact bathar-bog àbhaisteach le còd-tùs.

Cruthaich pasgan airson faidhlichean ADR:

```sh
$ mkdir adr
```

Airson gach ADR, cruthaich faidhle teacsa, leithid `choose-database.md`:

```sh
$ vi choose-database.md
```

Sgrìobh rud sam bith a thogras tu san ADR. Faic na teamplaidean san ionad-tasgaidh seo airson bheachdan.

Thoir an ADR a-steach (commit) dhan ionad-tasgaidh git agad.

## Sgilean Claude Code airson ADRan

Tha an t-ionad-tasgaidh seo a’ solarachadh dà sgil [Claude Code](https://claude.com/claude-code) fo [`skills/`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/), gus an urrainn do àidseant còdaidh AI ADRan a sgrìobhadh agus a chumail suas san dòigh a tha am pròiseact seo a’ moladh:

- [`architecture-decision-record-skill`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/architecture-decision-record-skill/) — airson cleachdadh coitcheann, do dhuine sam bith a tha a’ sgrìobhadh ADR ann am pròiseact sam bith. Bidh e a’ cuideachadh le bhith a’ co-dhùnadh a bheil feum aig co-dhùnadh air ADR, a’ stèidheachadh pasgan `adr/` no `decisions/`, a’ ainmeachadh an fhaidhle, a’ taghadh teamplaid às na h-aon fhraing-chnàimh deug a tha ann, agus a’ sgrìobhadh earrannan làidir Co-theacsa/Co-dhùnadh/Builean.

- [`architecture-decision-record-maintainer-skill`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/architecture-decision-record-maintainer-skill/) — airson luchd-cumail suas an ionaid-tasgaidh seo gu sònraichte. Bidh e a’ clàradh cruth an ionaid-tasgaidh, gnàthas sgàthanachaidh README/locales, agus na ceumannan mionaideach airson teamplaid, eisimpleir, no ceangal inneal ùr a chur ris.

Gus sgil a chleachdadh, dèan lethbhric den phasgan aice gu `.claude/skills/` aig bun an ionaid-tasgaidh anns a bheil thu ag obair (no gu `~/.claude/skills/` gus a dhèanamh ri fhaighinn anns a h-uile pròiseact), agus an uairsin iarr air Claude Code ADR a sgrìobhadh no ath-sgrùdadh.

## Gnàthasan ainmeachaidh faidhle airson ADR

Ma roghnaicheas tu na ADRan agad a chruthachadh le faidhlichean teacsa àbhaisteach, is dòcha gum bi thu airson gnàthas ainmeachaidh faidhle ADR fhèin a dhealbhadh.

Is fheàrr leinn gnàthas ainmeachaidh faidhle aig a bheil cruth sònraichte.

Eisimpleirean:

  * choose-database.md

  * format-timestamps.md

  * manage-passwords.md

  * handle-exceptions.md

An gnàthas ainmeachaidh faidhle againn:

  * Tha abairt gnìomhaireil òrduigh san ùine làithreach san ainm. Cuidichidh seo leis an leughachd agus freagraidh e air cruth ar teachdaireachdan commit.

  * Bidh an t-ainm a’ cleachdadh litrichean beaga agus daisean (mar an t-ionad-tasgaidh seo). Tha seo na chothromachadh eadar leughachd agus cleachdadh an t-siostaim.

  * Is e markdown an leudachan. Faodaidh seo a bhith feumail airson fòrmatadh sìmplidh.

## Molaidhean airson ADR mhath a sgrìobhadh

Feartan ADR mhath:

* Reusanachadh: Mìnich na h-adhbharan airson an AD sònraichte a dhèanamh. Faodaidh seo a’ cho-theacsa a ghabhail a-steach (faic gu h-ìosal), buannachdan is eas-bhuannachdan grunn roghainnean comasach, coimeasan fheartan, deasbadan cosgais/buannachd, agus tuilleadh.

* Sònraichte: Bu chòir gach ADR a bhith mu aon AD, chan ann mu ghrunn ADan.

* Stampaichean-ama: Comharraich cuin a chaidh gach nì san ADR a sgrìobhadh. Tha seo gu sònraichte cudromach airson taobhan a dh’fhaodas atharrachadh thar ùine, leithid cosgaisean, clàran-ama, sgèileadh, agus an leithid.

* Neo-chaochlaideach: Na atharraich fiosrachadh a tha ann mar-thà ann an ADR. An àite sin, atharraich an ADR le bhith a’ cur fiosrachadh ùr ris, no cuir ADR ùr na àite le bhith a’ cruthachadh ADR ùir.

Feartan earrann “Co-theacsa” mhath ann an ADR:

* Mìnich suidheachadh na buidhne agad agus prìomhachasan gnìomhachais.

* Gabh a-steach reusanachadh agus beachdachaidhean stèidhichte air cumadh sòisealta is sgilean nan sgiobaidhean agad.

* Gabh a-steach buannachdan is eas-bhuannachdan a tha buntainneach, agus mìnich iad ann an cumhachan a tha a’ freagairt ris na feumalachdan is na h-amasan agad.

Feartan earrann “Builean” mhath ann an ADR:

* Mìnich na thig às a bhith a’ dèanamh a’ cho-dhùnaidh. Faodaidh seo buaidhean, toraidhean, às-chuiridhean, leantainnean, agus tuilleadh a ghabhail a-steach.

* Gabh a-steach fiosrachadh mu ADRan às dèidh sin. Tha e gu math cumanta gun cuir aon ADR feum air tuilleadh ADRan, leithid nuair a nì aon ADR roghainn mhòr thar-ghabhalach, a chruthaicheas feumalachdan airson tuilleadh cho-dhùnaidhean nas lugha.

* Gabh a-steach pròiseasan lèirmheas às dèidh gnìomha sam bith. Tha e àbhaisteach do sgiobaidhean gach ADR ath-sgrùdadh mìos às dèidh sin, gus am fiosrachadh san ADR a choimeas ris na thachair ann an cleachdadh fìor, gus ionnsachadh agus fàs.

Faodaidh ADR ùr àite ADR roimhe a ghabhail:

* Nuair a thèid AD a dhèanamh a chuireas an àite no a chuireas an neo-dhligheachd ADR roimhe, bu chòir ADR ùr a chruthachadh

## Teamplaidean eisimpleir airson ADRan

Teamplaidean eisimpleir airson ADRan a chruinnich sinn air an lìon:

- [Teamplaid ADR le Michael Nygard](teamplaidean/teamplaid-clàr-co-dhùnaidh-le-michael-nygard/) (sìmplidh agus mòr-chòrdte)

- [Teamplaid ADR le Jeff Tyree agus Art Akerman](teamplaidean/teamplaid-clàr-co-dhùnaidh-le-jeff-tyree-agus-art-akerman/) (nas sòlaimte)

- [Teamplaid ADR airson pàtran Alexandrian](teamplaidean/teamplaid-clàr-co-dhùnaidh-airson-pàtran-alexandrian/) (sìmplidh le mion-fhiosrachadh co-theacsa)

- [Teamplaid ADR airson cùis gnìomhachais](teamplaidean/teamplaid-clàr-co-dhùnaidh-airson-cùis-gnìomhachais/) (nas MBA-stèidhichte, le cosgaisean, SWOT, agus barrachd bheachdan)

- [Teamplaid ADR de phròiseact Markdown Any Decision Records (MADR)](teamplaidean/teamplaid-clàr-co-dhùnaidh-pròiseact-madr/) (an dà chuid tionndadh sìmplidh is mionaideach; tha am fear mu dheireadh a’ cur cuideam air roghainnean agus am buannachdan is eas-bhuannachdan)

- [Teamplaid ADR le Planguage](teamplaidean/teamplaid-clàr-co-dhùnaidh-le-planguage/) (nas stèidhichte air dearbhadh càileachd)

- [Teamplaid airson Co-dhùnaidhean Teicnigeach Cudromach (ITDan) le Ignacio Larrañaga](teamplaidean/teamplaid-clàr-co-dhùnaidh-airson-co-dhùnaidhean-teicnigeach-cudromach/) (caol agus co-dhùnadh an toiseach, air a bharrachadh airson lèirmheas luath gnìomh-stiùiridh)

## Comhairle obair-sgioba airson ADR

Ma tha thu a’ beachdachadh air clàran co-dhùnaidh a chleachdadh leis an sgioba agad, seo comhairle a dh’ionnsaich sinn le bhith ag obair le mòran sgiobaidhean.

Tha cothrom agad do chompanaich sgioba a threòrachadh, le bhith a’ bruidhinn còmhla mun “carson”, seach a bhith ag òrdachadh an “dè”. Mar eisimpleir, tha clàran co-dhùnaidh nan dòigh dha sgiobaidhean smaoineachadh nas ciallaiche agus conaltradh nas fheàrr; chan eil clàran co-dhùnaidh luachmhor ma tha iad dìreach nan riatanas pàipearachd èigneachte às dèidh làimhe.

Is fheàrr le cuid de sgiobaidhean an t-ainm “co-dhùnaidhean” seach an giorrachadh “ADRan”. Nuair a chleachdas cuid de sgiobaidhean ainm a’ phasgain “decisions”, tha e mar gun tèid bulb solais air, agus tòisichidh an sgioba air barrachd fiosrachaidh a chur dhan phasgan, leithid co-dhùnaidhean reiceadair, co-dhùnaidhean planaidh, co-dhùnaidhean clàr-ama, msaa. Faodaidh na seòrsaichean fiosrachaidh sin uile an aon teamplaid a chleachdadh. Tha sinn a’ cur an cèill gun ionnsaich daoine nas luaithe le faclan (“co-dhùnaidhean”) seach giorrachaidhean (“ADRan”), agus gu bheil daoine nas togarraiche sgrìobhainnean obair-fo-làimh a sgrìobhadh nuair a thèid am facal “clàr” a thoirt air falbh, agus cuideachd nach toil le cuid de luchd-leasachaidh is manaidsearan am facal “ailtireachd”.

Ann an teòiridh, tha neo-chaochlaideachd air leth math. Ann an cleachdadh, dh’obraich caochlaideachd nas fheàrr dha na sgiobaidhean againn. Cuiridh sinn am fiosrachadh ùr a-steach san ADR a th’ ann, le stampa-latha, agus nòta gun tàinig am fiosrachadh às dèidh a’ cho-dhùnaidh. Treòraichidh an seòrsa dòigh seo gu “sgrìobhainn bheò” as urrainn dhuinn uile ùrachadh. Bidh ùrachaidhean àbhaisteach ann nuair a gheibh sinn fiosrachadh a thaing do chompanaich sgioba ùra, no tairgsean ùra, no toraidhean fìor-shaoghalta bho na cleachdaidhean againn, no às dèidh atharrachaidhean treas-phàrtaidh leithid comasan reiceadair, planaichean prìsean, aonta-cead, msaa.

## Ceistean obair-sgioba airson ADRan

### Cò as urrainn ADR a chruthachadh?

Beachdaich air raointean leithid daoine sònraichte, no dreuchdan sònraichte, no sgiobaidhean sònraichte, no roinnean sònraichte; beachdaich cuideachd a bheil daoine, no dreuchdan, no sgiobaidhean, no roinnean ann as urrainn ADR a choimiseanadh, is e sin gun iarr iad fear a sgrìobhas cuideigin eile. 

Eisimpleir de fhreagairt: Faodaidh neach sam bith san eagrachadh againn a leugh duilleag README a’ chlàir co-dhùnaidh ailtireachd ADR a mholadh, is e sin gun urrainn don neach tòiseachadh air a sgrìobhadh, agus a cho-roinn leis an sgioba.

### Dè a dhearbhas ADR a thogail?

Beachdaich air raointean leithid dòighean-obrach sgioba na buidhne agad, structar an t-siostaim bhathar-bog agad, co-òrdanachadh thar sgiobaidhean, cumail suas fad-ùine, eadar-aghaidhean taobh a-muigh, cò dha a tha thu airson buannachd a thoirt, agus an leithid. 

Eisimpleir de fhreagairt: Tha sinn airson ADR a chruthachadh nuair a tha sinn airson gun tuig luchd-leasachaidh san àm ri teachd an “carson” air na tha sinn a’ dèanamh.

### Dè a dhearbhas gun a bhith a’ togail ADR?

Beachdaich air raointean leithid co-dhùnaidhean nach eil mu ailtireachd, no a tha glè bheag leithid cunnart as lugha no fèin-chumhaichte no aon-leasaiche, no a tha air an còmhdach gu tur an àite eile mar eisimpleir le inbhean no poileasaidhean no sgrìobhainnean, no a tha sealach leithid fuasglaidhean sealach no dearbhaidhean bun-bheachd no deuchainnean. 

Eisimpleir de fhreagairt: Tha sinn airson ADR a leigeil seachad nuair a tha co-dhùnadh cuingealaichte ann an sgòp agus ùine agus cunnart agus cosgais, no ma tha e air a chòmhdach an àite eile mar-thà.

### Dè an cuairt-beatha a th’ aig ADR?

Beachdaich air raointean leithid pròiseas cruthachaidh, pròiseas rannsachaidh, pròiseas dèanamh cho-dhùnaidhean, pròiseas cur an gnìomh, agus pròiseas crìochnachaidh. Beachdaich ciamar a lorgas tu cuairt-beatha an ADR thar ùine, leithid ciamar a ghluaiseas tu an ADR bho aon staid chun na staid ath-dhàrna, agus cuideachd ciamar a chuireas tu seo an cèill do na com-pàirtichean. 

Eisimpleir de fhreagairt: Tha sinn airson gum bi còig ìrean cuairt-beatha aig ADR: A’ tòiseachadh → A’ rannsachadh → A’ measadh → A’ cur an gnìomh → A’ cumail suas → A’ crìochnachadh.

### Dè na slatan-tomhais airson ceumannan cuairt-beatha ADR?

Beachdaich air raointean leithid slatan-tomhais gabhail ri ADR, is e sin ciamar a tha fios agad gu bheil e math gu leòr airson gluasad bho aon cheum cuairt-beatha chun an ath fhear? A bheil an duilgheadas air a chur an cèill gu soilleir? A bheil na roghainnean eile air am beachdachadh? A bheil na h-eadar-dhealachaidhean air an tuigsinn agus air an sgrìobhadh sìos gu leòr?
A bheil a h-uile co-theacsa buntainneach an sin? A bheil a h-uile com-pàirtiche buntainneach an sàs? A bheil a h-uile fios-air-ais air a ghabhail a-steach? 

Eisimpleir de fhreagairt: Tha sinn airson gum bi ADR air a bhòtadh leis na com-pàirtichean nuair a tha an sgioba ghnìomhach 1) air an rannsachadh a chrìochnachadh, 2) air am measadh a chrìochnachadh, 3) air moladh an ADR fhoillseachadh dha na com-pàirtichean le iarrtas airson beachdan agus crìoch-ama aon sheachdain, 4) gu bheil a h-uile beachd bho na com-pàirtichean air a ghabhail a-steach agus air fhreagairt.

### Dè na dreuchdan agus na dleastanasan a tha ag eadar-ghnìomhachadh le ADR?

Beachdaich air dreuchdan leithid moltair, rannsachair, measadair, lèirmheasaiche, aontaiche, neach-cumail-suas, agus an leithid. Beachdaich air dleastanasan leithid conaltradh leis na com-pàirtichean, dèanamh cinnteach gu bheilear a’ coileanadh an dùilean, co-roinneadh air an làrach-lìn no an eadar-lìon a-staigh, agus ath-sgrùdadh na h-obrach o àm gu àm agus gu sònraichte nuair a thachras atharrachaidhean buntainneach.

Eisimpleir de fhreagairt: Tha sinn airson gum bi prìomh neach-conaltraidh, dàrna neach-conaltraidh, agus sgioba cunntachail aig gach ADR an-còmhnaidh; tha iad sin an urra ri conaltradh, foillseachaidhean, cumail suas, ath-sgrùdadh bho àm gu àm co-dhiù aon uair sa bhliadhna, agus crìochnachadh aig a’ cheann thall ma tha sin a dhìth.

### Ciamar a tha riaghlachd ag eadar-ghnìomhachadh le ADR?

Beachdaich air raointean leithid dòighean-obrach na buidhne agad, feumalachdan gèillidh sònraichte sam bith leithid airson taobhan laghail no taobhan goireasan daonna, ciamar a tha thu airson co-aontachd a làimhseachadh an aghaidh còmhstri an aghaidh àrdachadh. A bheil raointean no daoine no sgiobaidhean ann as urrainn barrachd buaidh a bhith aca na feadhainn eile a thaobh ADR, leithid a bhith comasach air aontachadh ris, no bhòtadh air, no veto a chur air?

Eisimpleir de fhreagairt: Tha riaghlachd ADR san òrdugh prìomhachais seo: an Ceannard (CEO), an CTO, an CLO, an sgioba a chuireas ADR an gnìomh, na eòlaichean air an sgioba as eòlaiche air an AD. Chan eil riaghlachd aig duine sam bith eile mura h-eilear ga mhìneachadh san ADR. 

### Dè na prionnsabalan a tha ag eadar-ghnìomhachadh le ADR?

Beachdaich air raointean leithid dòighean-obrach na buidhne agad a tha a’ gabhail a-steach gluasad gu luath an aghaidh gluasad gu slaodach, airson co-aontachd cho-dhùnaidhean an aghaidh còmhstri cho-dhùnaidhean, agus airson roghainnean cunnairt an aghaidh roghainnean sàbhailteachd, deasbad poblach an aghaidh deasbad prìobhaideach, agus an leithid.

Eisimpleir de fhreagairt: Bidh sinn a’ cleachdadh nam prionnsabalan ceannas de bhiàs airson gnìomh, eas-aontachadh-is-geallaidh, tha tuairmsean 70% math gu leòr airson co-dhùnaidhean a ghabhas an tilleadh gu furasta agus an iomallachadh gu furasta, agus dòighean-obrach poblach ach a-mhàin fiosrachadh dìomhair mar a tha air a mhìneachadh ann an aonta dìomhaireachd na buidhne againn.

## Bun-bheachdan ath-cheum airson ADRan

Bidh [Arc42](https://arc42.org/) a’ freagairt dà cheist ann an dòigh practaigeach agus faodar a ghnàthachadh a rèir do dhuilgheadasan sònraichte. Dè bu chòir dhut a sgrìobhadh sìos/a chonaltradh mun ailtireachd agad? Ciamar a bu chòir dhut a sgrìobhadh sìos/a chonaltradh? Tha Arc42 a’ gabhail a-steach clàran co-dhùnaidh ailtireachd a bharrachd air stiùireadh air amasan, cuingeadan, co-theacsan, càileachd, cunnartan, agus tuilleadh.

Tha [modail C4](https://c4model.com/) na dhòigh-obrach furasta ionnsachadh, càirdeil do luchd-leasachaidh airson diagraman ailtireachd bathar-bog. Tha C4 na sheata de dhiagraman rangachail airson co-theacsa, containers, co-phàirtean, còd, a bharrachd air diagraman taice airson cruinneachadh shiostaman, dinamaigs, agus cur-gu-gnìomh.

## Diagraman, seallaidhean agus sealladh-bheachdan ailtireachd

Canar “sealladh ailtireachd” ri diagram ailtireachd.

Tha “sealladh ailtireachd” na eisimpleir de “sealladh-beachd ailtireachd”.

Tha luchd-èisteachd sònraichte aig “sealladh-beachd ailtireachd” le draghan sònraichte nan inntinn.

Eisimpleirean de shealladh-bheachdan, sheallaidhean, agus dhiagraman ailtireachd:

- Comasan gnìomhachais

- Pròiseasan gnìomhachais àrd-ìre

- [Sruthan luach](https://en.wikipedia.org/wiki/Value_stream)

- Gnìomhan bathar-bog air am mapadh gu co-phàirtean aplacaid

- Diagram co-theacsa [Modail C4](https://en.wikipedia.org/wiki/C4_model) (TO-BE / AS-IS)

- Diagram container [Modail C4](https://en.wikipedia.org/wiki/C4_model) (TO-BE / AS-IS)

- [Diagram eintiteas-dàimh](https://en.wikipedia.org/w/index.php?title=Entity_relationship_diagram) (ERD) gus eintiteasan dàta a mhapadh gu co-phàirtean aplacaid

- [Diagraman sreath](https://en.wikipedia.org/wiki/Sequence_diagram) gus sruthan gnìomhach a mhìneachadh taobh a-staigh shiostaman agus airson amalachaidhean

- Diagraman [Business Process Model and Notation](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN) gus sruthan dàta a mhìneachadh thar cho-phàirtean aplacaid

- Diagraman [Business Process Model and Notation](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN) gus pròiseasan gnìomhachais / suidheachaidhean luchd-cleachdaidh a mhìneachadh

- Diagraman [Riaghladh Dearbh-aithne is Ruigsinneachd](https://en.wikipedia.org/wiki/Identity_and_access_management) (IAM)

- Diagraman [Smachd Ruigsinneachd stèidhichte air Dreuchd](https://en.wikipedia.org/wiki/Role-based_access_control) (RBAC) le dreuchdan airson gach co-phàirt aplacaid

- Diagraman [Smachd Ruigsinneachd stèidhichte air Buadhan](https://en.wikipedia.org/wiki/Attribute-based_access_control) (ABAC) le buadhan airson gach co-phàirt aplacaid

- Diagraman prìobhaideachd

Diagraman co-cheangailte:

- Seallaidh Diagram Cùise Cleachdaidh cùisean cleachdaidh don riaghladh/theachdaichean, a thig ro riatanasan, a thig ron ailtireachd bathar-bog.

- Seallaidh Diagram Cur-gu-gnìomh am bathar-cruaidh/na coimpiutairean fiosaigeach dhan tèid na co-phàirtean bathar-bog a chur gu gnìomh.
- Seallaidh Diagram Sruth Dàta mar a ghluaiseas dàta tron t-siostam agus mar a tha e air a thionndadh.
- Thathar a’ cleachdadh Diagram Sreath gus sealltainn mar a dh’obraicheas pròtacalan leithid HTTP air axis ama.

- Bidh Diagram Gnìomhachd a’ sealltainn sruth-obrach nan gnìomhachdan a nì siostam bathar-bog, mar AI NPC.

## Gnìomhan freagarrachd airson co-dhùnaidhean mar chòd

Is e sgrùdaidhean fèin-obrachail cuspaireach a th’ ann an gnìomhan freagarrachd, sgrìobhte le còd prògramachaidh, a dhearbhas gu bheil co-dhùnaidhean gan cumail suas.

- Bidh gnìomhan freagarrachd a’ fàgail co-dhùnaidhean so-dheuchainn agus so-dhearbhte.

- Faodaidh gnìomhan freagarrachd airson co-dhùnaidhean cuideachadh mòr a thoirt do dhearbhadh càileachd, pròiseasan riaghlaidh agus amasan riaghlachd.

### Mar a tha gnìomhan freagarrachd co-cheangailte ri co-dhùnaidhean

Bidh clàr co-dhùnaidh a’ sgrìobhadh sìos a’ cho-dhùnaidh, fhad ’s a bhios gnìomh freagarrachd a’ dearbhadh a’ cho-dhùnaidh.

- Eisimpleir de cho-dhùnadh: Bidh sinn a’ cleachdadh event sourcing airson riatanasan sgrùdaidh.

- Eisimpleir de ghnìomh freagarrachd: Bidh sinn a’ cleachdadh an fhrithealaiche amalachaidh leantainnich gus deuchainn a dhèanamh gum feum a h-uile atharrachadh staid tachartasan a thoirt gu buil.

### Carson a chuidicheas gnìomhan freagarrachd co-dhùnaidhean

Tomhasan cuspaireach: Bidh gnìomhan freagarrachd a’ pasgadh no a’ fàiligeadh, agus mar sin tha an obair follaiseach is soilleir.

Cleachdadh leantainneach: Is e gnìomhan freagarrachd na riaghailtean beò agad, air an ruith air gach commit agus togail.

Misneachd airson ath-fhactaradh: Bidh gnìomhan freagarrachd a’ glacadh mhearachdan ann an riaghailtean co-dhùnaidh gu fèin-obrachail.

Riaghladh so-sgèileadh: Bidh gnìomhan freagarrachd a’ dearbhadh inbhean gun chaolain a chruthachadh.

### An urrainn do ghnìomhan freagarrachd AI a chleachdadh?

’S urrainn do ghnìomhan freagarrachd LLMan AI a chleachdadh airson co-dhùnaidhean le bhith a’ faighneachd cheistean mun obair agad,
leithid na planaichean, an còd, na sgeamaichean, na APIan agad, agus tuilleadh:

```txt
IMPORTANT: Prefer retrieval-led reasoning over pre-training-led reasoning.
IMPORTANT: Turn on extended thinking. Turn on expert advice. Turn on search.

This is a fitness function to evaluate if our work is
using all our decisions, and is correct and accurate.

- Our decisions are here: {url}
- Our work to evaluate is here: {url}

Explain any errors, problems, gaps, weaknesses. Be direct. Be decisive.
```

### Deuchainn aonad ailtireachd

[ArchUnit](https://www.archunit.org/): thoir sùil air riaghailtean ailtireachd còd Java le bhith a’ cleachdadh frèam deuchainn aonaid Java sìmplidh sam bith.

[ArchUnitTS](https://github.com/LukasNiessen/ArchUnitTS): thoir sùil air riaghailtean ailtireachd còd TypeScript agus còd JavaScript le bhith a’ cleachdadh Jest, Vitest, Jasmine, msaa.

## Rèilichean-dìon co-dhùnaidh airson pull requests

Bidh [Decision Guardian](https://github.com/DecispherHQ/decision-guardian)
a’ cur na clàran co-dhùnaidh ceart an cèill gu fèin-obrachail aig an àm cheart – nuair a tha
leasaiche gu gnìomhach ag atharrachadh a’ chòd a tha na co-dhùnaidhean sin a’ còmhdach. An àite
a bhith an dòchas gun leugh luchd-leasachaidh pasgan sgrìobhainnean mus cuir iad còmhla, tha an
co-theacsa buntainneach a’ nochdadh dìreach air a’ pull request.

Tha seo ag obair airson gach seòrsa de chlàr co-dhùnaidh: co-dhùnaidhean ailtireachd, co-dhùnaidhean dàta,
co-dhùnaidhean gèillidh, co-dhùnaidhean clionaigeach is meidigeach, co-dhùnaidhean tèarainteachd,
agus tuilleadh.

Ag obair le siostam CI sam bith (GitLab, Jenkins, CircleCI) agus mar hook ro-commit.
Stòr fosgailte. Cead MIT.

Is e GitHub Action a th’ ann an [ADR Guard](https://github.com/chohan-sarmad-ali/delivery-gates)
a bheir air pull request fàiligeadh nuair a dh’atharraicheas slighean còd fo sgrùdadh gun
chlàr co-dhùnaidh ailtireachd a bhith air a chur ris no ùrachadh. Tha cuibhreannan soilleir: loidhne
`ADR-Exempt:` le adhbhar a bheir cead seachad air a’ gheata agus a thèid a sgrìobhadh dhan gheàrr-chunntas
obrach. Neo-eisimeileach air teamplaid, gun eisimeileachdan. Stòr fosgailte. Cead MIT.

## Tuilleadh fiosrachaidh

Ro-ràdh:

- [Architectural decision (wikipedia.org)](https://wikipedia.org/wiki/Architectural_decision)

- [Architecturally significant requirements (wikipedia.org)](https://wikipedia.org/wiki/Architecturally_significant_requirements)

Teamplaidean:

- [Documenting architecture decisions - Michael Nygard (thinkrelevance.com)](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)

- [Markdown Architectural Decision Records (adr.github.io)](https://adr.github.io/madr/)

- [Template for documenting architecture alternatives and decisions (stackoverflow.com)](http://stackoverflow.com/questions/7104735/template-for-documenting-architecture-alternatives-and-decisions)

Mion-sgrùdadh:

- [ADMentor XML project (github.com)](https://github.com/IFS-HSR/ADMentor)

- [Architectural Decision Guidance across Projects: Problem Space Modeling, Decision Backlog Management and Cloud Computing Knowledge (ifs.hsr.ch)](https://www.ifs.hsr.ch/fileadmin/user_upload/customers/ifs.hsr.ch/Home/projekte/ADMentor-WICSA2015ubmissionv11nc.pdf)

- [The Decision View's Role in Software Architecture Practice (computer.org)](https://www.computer.org/csdl/mags/so/2009/02/mso2009020036-abs.html)

- [Documenting Software Architectures: Views and Beyond (resources.sei.cmu.edu)](http://resources.sei.cmu.edu/library/asset-view.cfm?assetID=30386)

- [Architecture Decisions: Demystifying Architecture (utdallas.edu)](https://www.utdallas.edu/~chung/SA/zz-Impreso-architecture_decisions-tyree-05.pdf)

- [ThoughtWorks Technology Radar: Lightweight Architecture Decision Records (thoughtworks.com)](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)

- [A Skeptic’s Guide to Software Architecture Decisions (infoq.com)](https://www.infoq.com/articles/architecture-skeptics-guide/)

- [Architectural Decisions — The Making Of](https://ozimmer.ch/practices/2020/04/27/ArchitectureDecisionMaking.html)

- [Architectural Retrospectives: the Key to Getting Better at Architecting](https://www.infoq.com/articles/architectural-retrospectives/)

- [Software Architecture Monday with Mark Richards](https://developertoarchitect.com/lessons/) - leasan mìosail an-asgaidh ann an ailtireachd bathar-bog

- [Solution Architecture Decisions - By Gareth Morgan](https://www.linkedin.com/pulse/solution-architecture-decisions-gareth-morgan-0r5xe/)

- ["Keep the Why: Code Becomes Legacy When Nobody Remembers Why"](https://blog.technopathy.club/keep-the-why-code-becomes-legacy-when-nobody-remembers-why)

Innealan:

- [Command-line tools for working with Architecture Decision Records](https://github.com/npryce/adr-tools)

- [Command line tools with python - by Victor Sluiter](https://bitbucket.org/tinkerer_/adr-tools-python/src/master/)

- [Architectural Design Decision Support Framework (ADvISE)](https://swa.univie.ac.at/Software_Architecture/research-projects/architectural-design-decision-support-framework-advise/)

- [Decision Guardian](https://github.com/DecispherHQ/decision-guardian)

- [Mneme HQ - ADR enforcement for AI coding agents](https://github.com/TheoV823/mneme)

- [Keep the Why - a repo-native convention and agent skill that continuously captures, or retrospectively recovers, the reasoning behind a codebase](https://github.com/oliver-zehentleitner/keep-the-why)

- [ADR Guard - GitHub Action that fails a pull request changing watched code without an architecture decision record](https://github.com/chohan-sarmad-ali/delivery-gates)

- [kgai - append-only decision log for AI coding agents, a machine-readable companion to ADR files](https://github.com/kgaidev/kgai)

Stiùireadh sònraichte do chompanaidhean:

- [Amazon: AWS Prescriptive Guidance: ADR Process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)

- [GitHub: ADR GitHub organization](https://adr.github.io/)

- [RedHat: Why you should use ADRs](https://www.redhat.com/architect/architecture-decision-records)

Eisimpleirean:

- [Repository of Architecture Decision Records made for the Arachne Framework](https://github.com/arachne-framework/architecture)

Bhideothan:

- [An introduction to arc42 with Savvas Kleanthous](https://www.youtube.com/watch?v=V5clR8c6D7o)

- [The C4 model for visualising software architecture - by Simon Brown](https://www.youtube.com/watch?v=KvoBrUd1-5E)

Podcastaichean:

- [Software Architecture Bookclub Podcast](https://www.developertoarchitect.com/bookclub-podcast.html)

Leabhraichean:

- [Software Architecture Metrics: Case Studies to Improve the Quality of Your Architecture - by Christian Ciceri, Dave Farley, Neal Ford, Andrew Harmel-Law, Michael Keeling and Carola Lilienthal](https://www.amazon.com/Software-Architecture-Metrics-Christian-Ciceri-ebook/dp/B0B1NZ8Z5V)

- [Software Systems Architecture: Working With Stakeholders Using Viewpoints and Perspectives - by Nick Rozanski and Eoin Woods](https://www.amazon.com/Software-Systems-Architecture-Stakeholders-Perspectives/dp/032171833X)

- [Software Architecture in Practice (SEI Series in Software Engineering)](https://www.amazon.com/Software-Architecture-Practice-SEI-Engineering-ebook/dp/B094CPJ96B)

- [Documenting Software Architectures: Views and Beyond (SEI Series in Software Engineering)](https://www.amazon.com/Documenting-Software-Architectures-Beyond-Engineering-ebook/dp/B0046XS3RO)

- [The Software Architect Elevator: Redefining the Architect's Role in the Digital Enterprise](https://www.amazon.com/Software-Architect-Elevator-Redefining-Architects-ebook/dp/B086WQ9XL1)

- [Fundamentals of Software Architecture: An Engineering Approach - by Mark Richards and Neal Ford](https://www.amazon.com/Fundamentals-Software-Architecture-Engineering-Approach-ebook/dp/B0849MPK73)

- [Building Evolutionary Architectures - by Neal Ford, Rebecca Parsons, Patrick Kua, Pramod Sadalage](https://www.amazon.com/Building-Evolutionary-Architectures-Neal-Ford-ebook/dp/B0BN4T1P27?crid=37FA31IFLAS0Z)

- [Foundations of Decision Analysis by Ronald Howard and Ali Abbas](https://www.amazon.com/Foundations-Decision-Analysis-Ronald-Howard-ebook/dp/B00SZECJTI?crid=14BK5SDP76UN6)

- [Head First Software Architecture - by Raju Gandhi, Neal Ford and Mark Richards](https://www.amazon.com/Head-First-Software-Architecture-Architectural-ebook/dp/B0CW1JMNF2)

- [Communication Patterns: A Guide for Developers and Architects - by Jacqui Read](https://www.amazon.com/Communication-Patterns-Guide-Developers-Architects/dp/1098140540)

Faic cuideachd:

- REMAP (Representation and Maintenance of Process Knowledge)

- DRL (Decision Representation Language)

- IBIS (Issue-Based Information System)

- QOC (Questions, Options, and Criteria)

- IBM’s e-Business Reference Architecture Framework

- [Decision Reasoning Format (DRF)](https://github.com/reasoning-formats/reasoning-formats) - Cruth YAML/JSON neo-eisimeileach air reiceadair, so-leughte le inneal, airson co-dhùnaidhean a riochdachadh le reusanachadh soilleir, barailean, staid inntinneil, agus eadar-dhealachaidhean. Bidh e a’ cur ri ADRan le bhith a’ cur reusanachadh structaraichte, so-dhearbhte ri sgrìobhadh nan co-dhùnaidhean.
