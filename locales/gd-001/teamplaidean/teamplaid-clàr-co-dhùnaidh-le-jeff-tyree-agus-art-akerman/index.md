# Teamplaid clàr co-dhùnaidh le Jeff Tyree agus Art Akerman

Seo an teamplaid tuairisgeul co-dhùnaidh ailtireachd a chaidh fhoillseachadh ann an ["Architecture Decisions: Demystifying Architecture" le Jeff Tyree agus Art Akerman, Capital One Financial](https://www.utdallas.edu/~chung/SA/zz-Impreso-architecture_decisions-tyree-05.pdf).

* **Cùis**: Mìnich a’ chùis dealbhaidh ailtireachd a tha thu a’ làimhseachadh, gun fhàgail ceist sam bith mu carson a tha thu a’ làimhseachadh na cùise seo a-nis. A’ leantainn dòigh as lugha, dèiligeadh ri agus sgrìobh sìos dìreach na cùisean a dh’fheumas làimhseachadh aig diofar phuingean sa chuairt-beatha.

* **Co-dhùnadh**: Aithris gu soilleir stiùir na h-ailtireachd—is e sin, an seasamh a thagh thu.

* **Staid**: Staid a’ cho-dhùnaidh, leithid ri thighinn, air co-dhùnadh, no air aontachadh.

* **Buidheann**: ’S urrainn dhut buidhneachadh sìmplidh a chleachdadh—leithid amalachadh, taisbeanadh, dàta, agus mar sin air adhart—gus cuideachadh le bhith a’ cur seata nan co-dhùnaidhean air dòigh. Dh’fhaodadh tu cuideachd ontology ailtireachd nas toinnte a chleachdadh, leithid fear John Kyaruzi agus Jan van Katwijk, a tha a’ gabhail a-steach roinnean nas eas-chruthaichte leithid tachartas, mìosachan, agus àite. Mar eisimpleir, le bhith a’ cleachdadh an ontology seo, bhiodh tu a’ buidhneachadh co-dhùnaidhean a bhios a’ dèiligeadh ri tachartasan far a bheil an siostam a’ feumachdainn fiosrachadh fo thachartas.

* **Barailean**: Mìnich gu soilleir na barailean bunaiteach san àrainneachd anns a bheil thu a’ dèanamh a’ cho-dhùnaidh—cosgais, clàr-ama, teicneolas, agus mar sin air adhart. Thoir an aire gum faod cuingeadan àrainneachd (leithid inbhean teicneolais a tha air an gabhail, ailtireachd iomairt, pàtrain a thathas a’ cleachdadh gu cumanta, agus mar sin air adhart) na roghainnean a bheachdaicheas tu orra a chuingealachadh.

* **Cuingeadan**: Glac cuingeadan a bharrachd sam bith air an àrainneachd a dh’fhaodadh an roghainn thaghte (an co-dhùnadh) a chur.

* **Seasamhan**: Liostaich na seasamhan (roghainnean no roghainnean eile ion-dhèanta) a bheachdaich thu orra. Gu tric feumaidh iad mìneachaidhean fada, uaireannan fiù ’s modailean is diagraman. Chan eil seo na liosta shlàn. Ach, chan eil thu airson a’ cheist “An do smaoinich thu air...?” a chluinntinn rè lèirmheas deireannach; bidh seo a’ leantainn gu call creideis agus ceasnachadh co-dhùnaidhean ailtireachd eile. Cuidichidh an earrann seo cuideachd le bhith a’ dèanamh cinnteach gun cuala tu beachdan dhaoine eile; le bhith ag aithris beachdan eile gu soilleir bidh an luchd-taic aca air an toirt a-steach sa cho-dhùnadh agad.

* **Argamaid**: Dèan geàrr-chunntas air carson a thagh thu seasamh, a’ gabhail a-steach nithean leithid cosgais cur an gnìomh, cosgais iomlan seilbh, ùine gu margadh, agus ruigsinneachd air na goireasan leasachaidh a tha a dhìth. Tha seo coltach cho cudromach ris a’ cho-dhùnadh fhèin.

* **Builean**: Tha mòran bhuilean ann an co-dhùnadh, mar a tha am meta-mhodail REMAP a’ comharrachadh. Mar eisimpleir, dh’fhaodadh co-dhùnadh feum air co-dhùnaidhean eile a thoirt a-steach, riatanasan ùra a chruthachadh, no riatanasan a tha ann atharrachadh; cuingeadan a bharrachd a chur air an àrainneachd; feum a chur air ath-rèiteachadh sgòp no clàr-ama le teachdaichean; no trèanadh a bharrachd luchd-obrach iarraidh. Faodaidh tuigse shoilleir air builean do cho-dhùnaidh agus an cur an cèill a bhith gu math èifeachdach airson taic fhaighinn agus mapa-rathaid a chruthachadh airson coileanadh ailtireachd.

* **Co-dhùnaidhean co-cheangailte**: Tha e follaiseach gu bheil mòran cho-dhùnaidhean co-cheangailte; faodaidh tu an liostadh an seo. Ach, lorg sinn ann an cleachdadh gu bheil matrix lorgaidh, craobhan co-dhùnaidh, no meta-mhodailean nas fheumaile. Tha meta-mhodailean feumail airson dàimhean toinnte a shealltainn ann an dealbh (leithid modailean Rose).

* **Riatanasan co-cheangailte**: Bu chòir co-dhùnaidhean a bhith air an stiùireadh le gnìomhachas. Gus cunntachalachd a shealltainn, mapa do cho-dhùnaidhean gu soilleir chun nan amasan no nan riatanasan. ’S urrainn dhut na riatanasan co-cheangailte sin a chunntadh an seo, ach lorg sinn gu bheil e nas goireasaiche iomradh a thoirt air matrix lorgaidh. ’S urrainn dhut cuideachd measadh a dhèanamh air mar a chuidicheas gach co-dhùnadh ailtireachd le bhith a’ coinneachadh ri gach riatanas, agus an uairsin measadh a dhèanamh air cho math ’s a tha an riatanas air a choinneachadh thar a h-uile co-dhùnadh. Mura cuidich co-dhùnadh le bhith a’ coinneachadh ri riatanas, na dèan an co-dhùnadh sin.

* **Ealain-chruthan co-cheangailte**: Liostaich na sgrìobhainnean ailtireachd, dealbhaidh, no sgòp co-cheangailte air a bheil buaidh aig a’ cho-dhùnadh seo.

* **Prionnsabalan co-cheangailte**: Ma tha seata prionnsabalan aontaichte aig an iomairt, dèan cinnteach gu bheil an co-dhùnadh co-chòrdail ri co-dhiù aon dhiubh. Cuidichidh seo le bhith a’ dèanamh cinnteach à co-thaobhadh thar raointean no shiostaman.

* **Notaichean**: Seach gum faod am pròiseas dèanamh cho-dhùnaidhean seachdainean a thoirt, lorg sinn gu bheil e feumail notaichean agus cùisean a ghlacadh a dh’fhuiling an sgioba rè a’ phròiseis shòisealachaidh.
