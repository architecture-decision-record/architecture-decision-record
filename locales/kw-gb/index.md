# Kovskrif dyberth arkitektoryeth (ADR)

Kovskrif dyberth arkitektoryeth (ADR) yw dokument a dhalghen dyberth arkitektoryeth poesek, war-barth gans y gettesten ha'y sewyansow.

> [!IMPORTANT]
> Gwrewgh agas dyligens dyledhys agas honan rag an fentennow ma kyns aga usya yn pynag system kritek.

Kenwyns:

- [Pyth yw kovskrif dyberth arkitektoryeth?](#pyth-yw-kovskrif-dyberth-arkitektoryeth)
- [Fatel dhalleth usya ADR](#fatel-dhalleth-usya-adr)
- [Fatel dhalleth usya ADR gans toulys](#fatel-dhalleth-usya-adr-gans-toulys)
- [Fatel dhalleth usya ADR gans git](#fatel-dhalleth-usya-adr-gans-git)
- [Skillow Claude Code rag ADR](#skillow-claude-code-rag-adr)
- [Kustomow hanow fayl rag ADR](#kustomow-hanow-fayl-rag-adr)
- [Kusul rag skrifa ADR da](#kusul-rag-skrifa-adr-da)
- [Skantlynyow ensampel ADR](#skantlynyow-ensampel-adr)
- [Kusul obereth tim rag ADR](#kusul-obereth-tim-rag-adr)
- [Govynnow obereth tim rag ADR](#govynnow-obereth-tim-rag-adr)
- [Komprehensyons nessa rag ADR](#komprehensyons-nessa-rag-adr)
- [Diagramow arkitektoryeth ha gwelyow ha gwel-poyntys](#diagramow-arkitektoryeth-ha-gwelyow-ha-gwel-poyntys)
- [Oberow gwiwder rag dybyrthow avel kod](#oberow-gwiwder-rag-dybyrthow-avel-kod)
- [Gwarnyow dyberth rag pull requests](#gwarnyow-dyberth-rag-pull-requests)
- [Moy a wybodh](#moy-a-wybodh)

Skantlynyow:

- [Skantlyn kovskrif dyberth gans Jeff Tyree ha Art Akerman](skantlynyow/skantlyn-kovskrif-dyberth-gans-jeff-tyree-ha-art-akerman/)
- [Skantlyn kovskrif dyberth gans Michael Nygard](skantlynyow/skantlyn-kovskrif-dyberth-gans-michael-nygard/)
- [Skantlyn kovskrif dyberth gans EdgeX](skantlynyow/skantlyn-kovskrif-dyberth-gans-edgex/)
- [Skantlyn kovskrif dyberth gans arc42](skantlynyow/skantlyn-kovskrif-dyberth-gans-arc42/)
- [Skantlyn kovskrif dyberth rag patron Alexandrian](skantlynyow/skantlyn-kovskrif-dyberth-rag-patron-alexandrian/)
- [Skantlyn kovskrif dyberth rag kas negys](skantlynyow/skantlyn-kovskrif-dyberth-rag-kas-negys/)
- [Skantlyn kovskrif dyberth an towl MADR](skantlynyow/skantlyn-kovskrif-dyberth-an-towl-madr/)
- [Skantlyn kovskrif dyberth ow usya Planguage](skantlynyow/skantlyn-kovskrif-dyberth-ow-usya-planguage/)
- [Skantlyn kovskrif dyberth gans Paulo Merson](https://github.com/pmerson/ADR-template)
- [Skantlyn kovskrif dyberth gans Olaf Zimmermann](https://medium.com/olzzio/y-statements-10eb07b5a177)
- [Skantlyn kovskrif dyberth gans Gareth Morgan](skantlynyow/skantlyn-kovskrif-dyberth-gans-gareth-morgan/)
- [Skantlyn kovskrif dyberth gans GIG Cymru NHS Wales](skantlynyow/skantlyn-kovskrif-dyberth-gans-gig-cymru-nhs-wales/)
- [Skantlyn kovskrif dyberth rag Dybyrthow Teknegek Poesek (ITDs) gans Ignacio Larrañaga](skantlynyow/skantlyn-kovskrif-dyberth-rag-dybyrthow-teknegek-poesek/)

Ensamplow:

- [Framweyth CSS](ensamplow/framweyth-css/)
- [Kefrysyans chanjyadow kerghynnedh](ensamplow/kefrysyans-chanjyadow-kerghynnedh/)
- [Musurow, gwithysi, alarmow](ensamplow/musurow-gwithysi-alarmow/)
- [Microsoft Azure DevOps](ensamplow/microsoft-azure-devops/)
- [Unyek-gwithva erbynn liesgwithva](ensamplow/unyek-gwithva-erbynn-liesgwithva/)
- [Yethow towlennans](ensamplow/yethow-towlennans/)
- [Gwithva kevrinyow](ensamplow/gwithva-kevrinyow/)
- [Furv merkyer prys](ensamplow/furv-merkyer-prys/)
- [Lies moy...](ensamplow/)

## Pyth yw kovskrif dyberth arkitektoryeth?

**Kovskrif dyberth arkitektoryeth** (ADR) yw dokument a dhalghen dyberth arkitektoryeth posek, war-barth gans y gettesten ha'y sewyansow.

**Dyberth arkitektoryeth** (AD) yw dewis a ragdres medhelweyth a worthyp dhe othom pwysek.

**Lyver dybyrthow arkitektoryeth** (ADL) yw kuntelles a oll an ADRyow gwrys ha gwithys rag towl (po rann) arbennik.

**Othom arkitektoryethel poesek** (ASR) yw othom a'n jeves effeyth musurys war arkitektoryeth system medhelweyth.

Oll an re ma a sew dhe'n tebel **rewl godhvos arkitektoryeth** (AKM).

Amanyn an dokument ma yw ri dre-wel verr a ADRyow, fatel hyllir aga gwruthyl, ha ple hyllir hwilas moy a wybodh.

Berrheansow:

  * **AD**: dyberth arkitektoryeth

  * **ADL**: lyver dybyrthow arkitektoryeth

  * **ADR**: kovskrif dyberth arkitektoryeth

  * **AKM**: rewl godhvos arkitektoryeth

  * **ASR**: othom arkitektoryethel poesek

## Fatel dhalleth usya ADR

Rag dalleth usya ADR, kewsewgh gans agas kesoberoryon a-dro dhe'n tiryow ma.

Aswonnyans dyberth:

  * Pygemmys yw an AD dhe vos gwrys skon, ha pygemmys yw poesek?

  * A res y wul lemmyn, po a hyll hi gortos erna vo godhvedhys moy?

  * Yeunadow personek ha kesvyes, ha'n fordhow ha'n usadow towl aswonnys, a hyll gweres gans aswonnyans dyberth.

  * Yn ideal, gwithewgh rol-ober dybyrthow a dhefry rol-ober an produkt.

Gwul dyberth:

  * Yma niver a deknegow gwul dyberth, an re ollgemmyn ha'n re arbennik dhe arkitektoryeth medhelweyth, avel skrifa kows-mappa.

  * Gwul dyberth kuntellek yw tebel hwilas bywek.

Gweythrys ha gorfednans dyberth:

  * Usys yw ADyow yn towl medhelweyth; rakhenna res yw aga dyski dhe'n gerensyon a'n system a re ow tevri, ow displegya hag ow gweythi, ha rag aga bos degemmerys ganjans.

  * Stylow kodya hewel yn arkitektoryeth ha dehwelyansow kod a dhoer dhe geredh ha dybyrthow arkitektoryeth yw dew usadow kelmys.

  * Res yw ynwedh (dhe-ves) ADyow dhe vos remembrys pan vo medhelweyth nowydhhes dre dhisplegyans medhelweyth.

Kevrenna dyberth (dhe-ves):

  * Lies AD a dhasdheu a-dreus towlow.

  * Rakhenna, aswonnow a dhybyrthow tremenys, da ha drog, a hyll bos gwiw dhe worthyans arta pan usir towl rewl godhvos aprest.

Dogvennans dyberth:

  * Yma lies skantlyn ha toul rag talghen dybyrthow.

  * Gwelewgh kemenethow skav, avel ADyow M. Nygard.

  * Gwelewgh argerdhow kefrysyans medhelweyth hag arkitektoryeth hen, avel gorholyow tebel styrys gans IBM UMF ha gans Tyree hag Akerman a CapitalOne.

Rag moy:

  * An gammow a-ugh yw kemerys a'n dyllans Wikipedia dhe [Architectural Decision](https://en.wikipedia.org/wiki/Architectural_decision)

## Fatel dhalleth usya ADR gans toulys

- [MySpec](https://myspec.dev) — Savla awtomatek spesyfikasyon ha dyberth arkitektoryeth a ordhenn bunans an towl, arkitektoryeth teknegek, hag ADRyow yn Markdown glan, servys dre MCP.

Hwi a hyll dalleth usya ADR gans toulys dre pynag fordh a vynnewgh.

Rag ensampel:

  * Mar kar why usya Google Drive ha golowyans a-lyn, hwi a hyll gwul Google Doc, po Google Sheet.

  * Mar kar why usya gwithyans gwersyon fenten-kod, avel git, hwi a hyll gwul fayl rag pub ADR.

  * Mar kar why usya toulys towlennans, avel Atlassian Jira, hwi a hyll usya trakyer towlennans an tool.

  * Mar kar why usya wikis, avel MediaWiki, hwi a hyll gwul wiki ADR.

## Fatel dhalleth usya ADR gans git

Mar kar why usya gwithyans gwersyon git, ottomma fatel dhallethyn ni usya ADR gans git rag towl medhelweyth ollgemmyn gans fenten-kod.

Gwrewgh kuntlas rag fayls ADR:

```sh
$ mkdir adr
```

Rag pub ADR, gwrewgh fayl tekst, avel `choose-database.md`:

```sh
$ vi choose-database.md
```

Skrifewgh pypynag tra a vynnewgh y'n ADR. Gwelewgh an skantlynyow y'n gwithva ma rag tybyansow.

Ymrewgh an ADR dhe'ga gwithva git.

## Skillow Claude Code rag ADR

An gwithva ma a dhelivr dew skill [Claude Code](https://claude.com/claude-code) yn [`skills/`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/), may hyllo agent kodya AI skrifa ha gwitha ADR herwydh fordh an towl ma:

- [`architecture-decision-record-skill`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/architecture-decision-record-skill/) — ollgemmyn, rag pubonan ow skrifa ADR yn pynag towl. A weres dybarth mar tal dyberth ADR, a sett kuntlas `adr/` po `decisions/`, a re hanow dhe'n fayl, a dhewis skantlyn dhyworth an unnek skeleton rag-drehevys, ha skrif rannow Kettesten/Dyberth/Sewyansow krev.

- [`architecture-decision-record-maintainer-skill`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/architecture-decision-record-maintainer-skill/) — rag gwithyoryon an gwithva ma arbennik. A dhogvenn ordenans an gwithva, an kustom a ranna README/locales, ha'n kammow ewn rag ouryen skantlyn, ensampel, po kelm toul nowydh.

Rag usya skill, kopyewgh y gevuntlas dhe `.claude/skills/` orth gwreydhen an gwithva may hwrewgh oberi (po dhe `~/.claude/skills/` dhe wul ev kevyk yn pub towl), ha wosa govynnewgh orth Claude Code skrifa po dehwel ADR.

## Kustomow hanow fayl rag ADR

Mar ty a dhewis gwul dha ADRyow gans fayls tekst ollgemmyn, ty a hyll hwilas dha gustom hanow fayl dha honan.

Ny a bref usya kustom hanow fayl may hedh furv arbennik dhodho.

Ensamplow:

  * choose-database.md

  * format-timestamps.md

  * manage-passwords.md

  * handle-exceptions.md

Agan kustom hanow fayl:

  * An hanow a'n jeves frasenn verb gorhemmynnadow a dermyn dhiwedhes. Hemma a weres redyadewder ha dhe gedmeres furv agan messajys ymrewgh.

  * An hanow a usya lytherennow byghan ha tonnow-stryp (kepar ha'n gwithva ma). Hemma yw kesstowans a redyadewder ha usadewder system.

  * An astel yw markdown. Hemma a hyll bos gwiw rag furvyans es.

## Kusul rag skrifa ADR da

Nodhow ADR da:

* Rason: Displegewgh an ressons rag gwul an AD arbennik. Hemma a hyll yn kemeres an gettesten (gwelewgh a-woles), a-dhesk ha drog an dewisyow kepar, keshepyansow nodhow, kows a'n kost ha'n prow, ha moy.

* Arbennik: Pub ADR a dal bos a-dro dhe unn AD, nag AD lies.

* Merkyer prys: Merkewgh pan veu skrifys pub tra y'n ADR. Hemma yw arbennik pwysek rag poyntys a hyll chanjya dre an termyn, avel kostow, towlennow-prys, skeulya, ha'n par na.

* Heb chanj: Na chanjewgh godhvos a-vewnans y'n ADR. Yn le henna, gwellewgh an ADR dre ystynna godhvos nowydh, po gorroewgh ADR nowydh dre wul ADR nowydh.

Nodhow rann "Kettesten" da y'n ADR:

* Displegewgh studh agas kowethas ha gwella agas negys.

* Gorrewgh ressons ha konsiderasyons a dhrehedh dhe gesmesk sokyel ha skyllow agas tiom.

* Gorrewgh an a-dhesk ha'n drog a vo kelmys, ha displegewgh i yn ger a vo a-dhia agas othommow ha mynnansow.

Nodhow rann "Sewyansow" da y'n ADR:

* Displegewgh pyth a sew a wul an dyberth. Hemma a hyll kemeres an effeythyow, an sewyansow, an dhiwedh, an sewyansow-pella, ha moy.

* Gorrewgh godhvos a-dro dhe ADRyow a sew. Hemma yw ollgemmyn y'n yethva y kyllo unn ADR dhe dhedhweth othom a ADRyow moy, avel pan wra unn ADR dewis bras a-ugh, hag y'n tor ynwedh dhe wul othommow rag dybyrthow byghan moy.

* Gorrewgh pub argerdh dehwelyans wosa-ober. Ollgemmyn yw rag tiommow dehwelans pub ADR unn mis wosa, rag keheveli godhvos an ADR gans an pyth a hapyas yn usadow wir, dhe dhesk ha tevi.

ADR nowydh a hyll kemeres le ADR kyns:

* Pan wrer AD a worr yn le po a dhisgwir ADR kyns, ADR nowydh a dal bos gwrys

## Skantlynyow ensampel ADR

Skantlynyow ensampel ADR a gevunsyn ni war an gwiasva:

- [Skantlyn ADR gans Michael Nygard](skantlynyow/skantlyn-kovskrif-dyberth-gans-michael-nygard/) (sempel ha poblek)

- [Skantlyn ADR gans Jeff Tyree ha Art Akerman](skantlynyow/skantlyn-kovskrif-dyberth-gans-jeff-tyree-ha-art-akerman/) (moy sofistikys)

- [Skantlyn ADR rag patron Alexandrian](skantlynyow/skantlyn-kovskrif-dyberth-rag-patron-alexandrian/) (sempel gans manylyow kettesten)

- [Skantlyn ADR rag kas negys](skantlynyow/skantlyn-kovskrif-dyberth-rag-kas-negys/) (moy MBA-ledhys, gans kostow, SWOT, ha moy tybyansow)

- [Skantlyn ADR an towl Markdown Any Decision Records (MADR)](skantlynyow/skantlyn-kovskrif-dyberth-an-towl-madr/) (gwersyon sempel ha gwersyon displegys; an diwettha a fok war dewisyow ha'ga a-dhesk ha drog)

- [Skantlyn ADR ow usya Planguage](skantlynyow/skantlyn-kovskrif-dyberth-ow-usya-planguage/) (moy surhe-ansawdh-ledhys)

- [Skantlyn rag Dybyrthow Teknegek Poesek (ITDs) gans Ignacio Larrañaga](skantlynyow/skantlyn-kovskrif-dyberth-rag-dybyrthow-teknegek-poesek/) (skav ha dyberth-kynsa, gwellhes rag dehwelans skon a bennys)

## Kusul obereth tim rag ADR

Mar kreys why usya kovskrifow dyberth gans agas tim, ottomma nebes kusul a dhyskas ni dre obereth gans lies tim.

Hwi a'n jeves chons dhe arwodha agas kesoberoryon, dre gewsel warbarth a-dro dhe'n "perag", yn le gorhemmynna an "pyth". Rag ensampel, kovskrifow dyberth yw fordh rag timyow dhe dybi yn furv ha kesklapa yn gwell; ny'n jeves kovskrifow dyberth valew mar nyns yns marnas ervirans pabrys a-wosa.

Nebes timyow a gar meur moy an hanow "dybyrthow" a-ugh an berrheans "ADRyow". Pan wra nebes timyow usya hanow kuntlas "decisions", yth yw kepar ha pan wrella golow ow tarthans, ha'n tim a dhalleth gorra moy godhvos y'n kuntlas, avel dybyrthow gwerther, dybyrthow towlennans, dybyrthow towlennow-prys, hag yn. Oll an sortow ma a godhvos a hyll usya an keth skantlyn. Ny a dybi ow tesk tus herwydh geryow ("dybyrthow") a-ugh berrheansow ("ADRyow"), ha tus yw moy styrys dhe skrifa dokumentys oberow-yn-rann pan vo an ger "kovskrif" tennys, ha nebes displegysi ha nebes rewloryon na gar an ger "arkitektoryeth".

Yn teori, heb chanj yw ideal. Yn usadow, chanjyadewder a weythas gwell rag agan timyow. Ny a worr an godhvos nowydh y'n ADR a vo, gans merkyer dydhyans, ha nota may teuth an godhvos wosa an dyberth. An par ma a fordh a dhel dhe "dokument bew" may hyllir pubonan y nowydhhe. Nowydhyansow ollgemmyn yw pan dhrehedhwn godhvos dre gowetha nowydh, po profyow nowydh, po sewyansow bys-wir a'gan usadow, po chanjyow tresek wosa-ober avel gallosow gwerther, towlow-prys, ambosow lisans, hag yn.

## Govynnow obereth tim rag ADR

### Piw a hyll gwul ADR?

Kemerewgh tiryow avel tus arbennik, po rannow arbennik, po timyow arbennik, po radnow arbennik; ynwedh kemerewgh kerensa mar pe tus, po rannow, po timyow, po radnow a hyll ordena ADR, hen yw, i a wovyn unn y vo skrifys gans nebonan aral.

Gorthyp ensampel: Pynag den y'gan kowethas a wrug redya folen README an kovskrif dyberth arkitektoryeth a hyll profya ADR, hen yw, an den a hyll dalleth y skrifa, ha'y rannas gans an tim.

### Pyth a ver rag drehevel ADR?

Kemerewgh tiryow avel fordhow oberi tim agas kowethas, ford agas system medhelweyth, kesordena a-dreus timyow, trelyes hirdermyn, ynterfasow a-ves, piw a vynnewgh dhe gavos prow, ha'n par na.

Gorthyp ensampel: Ni a vynn gwul ADR pan vynnyn ni may hyllo displegyoryon a dheu konvedhes an "perag" a'n pyth a wren.

### Pyth a ver rag na dhrehevel ADR?

Kemerewgh tiryow avel dybyrthow nag yns a-dro dhe arkitektoryeth, po yw munys avel ristyans izel po unn-warnys po unn-displegyor, po yw kuver yn tien yn le aral avel dre savonow po polici po dogvennans, po yw dres-termyn avel fordhow-dyvres po previansow-konsept po arbrofow.

Gorthyp ensampel: Ni a vynn hedhi ADR pan vo dyberth kyrghys yn skope ha termyn ha ristyans ha kost, po pan vo kuver yn le aral.

### Pyth yw bywnans ADR?

Kemerewgh tiryow avel an argerdh gwruthyl, an argerdh hwilas, an argerdh dybarth, an argerdh gweythrys, hag an argerdh dehweth. Kemerewgh fatel hyllir treckya bywnans an ADR dre an termyn, avel fatel symudhir an ADR dhyworth unn studh dhe'n studh nessa, hag ynwedh fatel gesklapyr hemma dhe'n gerensyon.

Gorthyp ensampel: Ni a vynn may fo dhe ADR pymp gradh bywnans: Dalleth → Hwilas → Jydja → Gweythi → Gwitha → Dehweth.

### Pyth yw kriteryow rag kammow bywnans ADR?

Kemerewgh tiryow avel kriteryow degemmeryans rag ADR, hen yw, fatel wodhesta bos da lowr rag progresya dhyworth unn gam bywnans dhe'n nessa? A yw an kudyn displegys yn splann? A veu an dewisyow kemerys yn kyfrif? A yw an stokyow-trelyes konvedhys ha dogvennys yn da lowr? A yw oll an gettesten gwrys yn plas? A yw oll an gerensyon ledhwas rannys? A veu oll an hwarvos kemerys yn ben?

Gorthyp ensampel: Ni a vynn may fo ADR votys gans an gerensyon pan wrug an tim bewek 1) gorfedna aga hwilas, 2) gorfedna aga jydjyans, 3) dyllo an profyans ADR dhe'n gerensyon gans govyn a skoryow ha termyn a unn seythen, 4) oll skoryow an gerensyon bos kemerys ha gorthybys.

### Pyth rollow ha dyghtyansow a ynterwri gans ADR?

Kemerewgh rollow avel profyer, hwilas, jydjyor, dehwelor, gwarthyer, gwithyer, ha'n par na. Kemerewgh dyghtyansow avel kesklapas gans an gerensyon, surhe may fo omdhegys an gwarnyow, rannas war an gwiasva po intranet, ha dehwelans an ober ynterwel hag arbennik pan dheu chanjyow ledhwas.

Gorthyp ensampel: Ni a vynn may fo dhe bub ADR pup-prys den kevrenn kynsa, den kevrenn nessa, ha tim answerys; an re ma yw dyghtys rag kesklapasow, dyllansow, gwithyans, dehwelans ynterwel unn-kans pub bledhen, ha dehweth wosa moy mar pe othom.

### Fatel ynterwri rewlyans gans ADR?

Kemerewgh tiryow avel fordhow oberi agas kowethas, pynag othom ensynnek arbennik avel rag tiryow lagh po tiryow adhesow-den, fatel vynnewgh dyghtya kesvynnyans erbynn kynsys erbynn ystynnans. A yw tiryow po tus po timyow a hyll kavos moy a nerth ages erell a-dro dhe ADR, avel bos abyl dh'y wul posek, po votya orto, po y wardhya?

Gorthyp ensampel: Rewlyans ADR yw yn ordenn an priorita ma: an Pennrewler, an Penn Teknek, an Penn Lagh, an tim a wra ADR, ha'n arbennigyon yn tim a'n godhvos moyha a-dro dhe'n AD. Nyns eus rewlyans dhe nagonan aral marnas pan vo displegys y'n ADR.

### Pyth prensiplys a ynterwri gans ADR?

Kemerewgh tiryow avel fordhow oberi agas kowethas a gemer an bos skav erbynn bos haval, rag kesvynnyans dyberth erbynn kedrynn dyberth, ha rag dewisyow ristyans erbynn dewisyow sawder, kows poblek erbynn kows privedh, ha'n par na.

Gorthyp ensampel: Ni a usya prensiplys ledhyans a bias rag ober, disagree-and-commit, amcanow 70% yw da lowr rag dybyrthow es dh'aga dasfyna ha dh'aga gwahan, ha fordhow oberi poblek marnas aswonnvos kevrinek herwydh ambos kevrinyeth agan kowethas.

## Komprehensyons nessa rag ADR

[Arc42](https://arc42.org/) a worthyp dhe dhew govyn yn fordh usadow ha hyll bos hewelys dhe'gas othommow arbennik. Pyth a dal why dogvenna/kesklapa a-dro dhe'gas arkitektoryeth? Fatel a dal why dogvenna/kesklapa? Arc42 a dhalghen kovskrifow dyberth arkitektoryeth ha gidyans a-dro dhe vynnansow, lettyansow, kettestenyow, ansawdh, ristyansow, ha moy.

[An model C4](https://c4model.com/) yw fordh es dhe dhyski, hegar dhe zisplegyoryon, dhe dresya arkitektoryeth medhelweyth. C4 yw set a ddiagramow herwydh-ardh rag kettesten, kenyow, komponennow, kod, ha diagramow skoodh rag gwel-tiredh system, dynamek, ha displegyans.

## Diagramow arkitektoryeth ha gwelyow ha gwel-poyntys

Diagram arkitektoryeth a elwir "gwel arkitektoryeth".

"Gwel arkitektoryeth" yw enstans a "wel-poynt arkitektoryeth".

"Gwel-poynt arkitektoryeth" a'n jeves goslowyer arbennik gans bywnansow arbennik yn tybyans.

Ensamplow gwel-poynt arkitektoryeth, ensamplow gwel, ha ensamplow diagram:

- Gallusow negys

- Argerdhow negys live uhel

- [Fluvyow valew](https://en.wikipedia.org/wiki/Value_stream)

- Oberow medhelweyth mappys dhe gomponennow aplikasyon

- Diagram Kettesten [Model C4](https://en.wikipedia.org/wiki/C4_model) (TO-BE / AS-IS)

- Diagram Kenyow [Model C4](https://en.wikipedia.org/wiki/C4_model) (TO-BE / AS-IS)

- [Diagram Unnik-Kelmyans](https://en.wikipedia.org/w/index.php?title=Entity_relationship_diagram) (ERD) rag mapya unnikow data dhe gomponennow aplikasyon

- [Diagramow Kesstroeg](https://en.wikipedia.org/wiki/Sequence_diagram) rag displegya fluvyow gweythresek y'n systemow ha rag junyansow

- Diagramow [Business Process Model and Notation](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN) rag displegya fluvyow data a-dreus komponennow aplikasyon

- Diagramow [Business Process Model and Notation](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN) rag displegya argerdhow negys / senaryos usyer

- Diagramow [Rewlyans Hunyth ha Hedhes](https://en.wikipedia.org/wiki/Identity_and_access_management) (IAM)

- Diagramow [Kontrol Hedhes selys war Rol](https://en.wikipedia.org/wiki/Role-based_access_control) (RBAC) gans rollow pub komponenn aplikasyon

- Diagramow [Kontrol Hedhes selys war Atribut](https://en.wikipedia.org/wiki/Attribute-based_access_control) (ABAC) gans atributs pub komponenn aplikasyon

- Diagramow privedhter

Diagramow kelmys:

- Diagram Kas Usadow a dhiskwedh kasow usadow dhe rewlyoryon/kerysyow, a ledh othommow, a ledh arkitektoryeth medhelweyth.

- Diagram Displegyans a dhiskwedh an hardware/kompoterow fisek may fo komponennow medhelweyth displegys dhedha.
- Diagram Fluv Data a dhiskwedh fatel symud data dres an system ha fatel yw treylys.
- Diagram Kesstroeg yw usys rag diskwedha fatel wra protokolow avel HTTP oberi war ax termyn.

- Diagram Gweythlu a dhelin fluv-ober an gweythlu a wra system medhelweyth, avel NPC AI.

## Oberow gwiwder rag dybyrthow avel kod

Oberow gwiwder yw jekyansow awtomatek gwiryon, skrifys gans kod towlennans, a wiras bos dybyrthow gwithys.

- Oberow gwiwder a wra dybyrthow previadow ha surhes.

- Oberow gwiwder rag dybyrthow a hyll gweres meur dhe surhe ansawdh, argerdhow reyth, ha mynnansow rewlyans.

### Fatel gelmons oberow gwiwder dhe dhybyrthow

Kovskrif dyberth a dhogvenn an dyberth, hag ober gwiwder a surha an dyberth.

- Ensampel dyberth: Ni a usya fenten-wydhyow rag othommow awdyt.

- Ensampel ober gwiwder: Ni a usya servyer integrans pesys rag previ may res dhe bub chanj studh dhe dhry wydhyow.

### Perag y hyll oberow gwiwder gweres dybyrthow

Musurans gwiryon: Oberow gwiwder a dremen po a fyll, rakhenna an ober yw gwelus ha splann.

Usadow pesys: Oberow gwiwder yw agas rewlys bew, gweythys war bub ymrians ha gwruthyl.

Fydhyans dhe ail-fatherni: Oberow gwiwder a gach yn awtomatek gwallow rewl dyberth.

Rewlyans skalyadow: Oberow gwiwder a surha savonow heb gwul lettyansow.

### A hyll oberow gwiwder usya AI?

Oberow gwiwder a hyll usya AI LLMs rag dybyrthow dre wovyn govynnow a-dro dhe'gas ober,
avel agas towlow, kod, skemas, APIs, ha moy:

```txt
IMPORTANT: Prefer retrieval-led reasoning over pre-training-led reasoning.
IMPORTANT: Turn on extended thinking. Turn on expert advice. Turn on search.

This is a fitness function to evaluate if our work is
using all our decisions, and is correct and accurate.

- Our decisions are here: {url}
- Our work to evaluate is here: {url}

Explain any errors, problems, gaps, weaknesses. Be direct. Be decisive.
```

### Previansow unnik arkitektoryeth

[ArchUnit](https://www.archunit.org/): jekyewgh rewlys arkitektoryeth kod Java dre usya pynag framweyth previans unnik Java sempel.

[ArchUnitTS](https://github.com/LukasNiessen/ArchUnitTS): jekyewgh rewlys arkitektoryeth kod TypeScript ha kod JavaScript dre usya Jest, Vitest, Jasmine, hag yn.

## Gwarnyow dyberth rag pull requests

[Decision Guardian](https://github.com/DecispherHQ/decision-guardian)
a dhiskwedh yn awtomatek an kovskrifow dyberth ewn orth an prys ewn — pan
vo displegyor ow chanjya yn bewek an kod a dhalghen an dybyrthow na. Yn le
gwaytya may hwrella displegyoryon redya kuntlas dogvennans kyns junya, an
kettesten ledhwas a dheu yn rakt war an pull request.

Hemma a oberi rag pynag sort a govskrif dyberth: dybyrthow arkitektoryeth,
dybyrthow data, dybyrthow kesstowans, dybyrthow klinikal ha medhegek, dybyrthow
sawder, ha moy.

A oberi gans pynag system CI (GitLab, Jenkins, CircleCI) hag avel hook pre-commit.
Ygor-fenten. Lisans MIT.

[ADR Guard](https://github.com/chohan-sarmad-ali/delivery-gates) yw Gweythrys
GitHub a wra pull request fyllel pan chanj kodhlevow gwithys heb ADR bos ouryes po nowydhhes.
Kes yw splann: lynenn `ADR-Exempt:` gans skil a dremen an yet ha yw skrifys y'n
berrskrif ober. Heb skantlyn, heb dyffendyans. Ygor-fenten. Lisans MIT.

## Moy a wybodh

Tallath:

- [Architectural decision (wikipedia.org)](https://wikipedia.org/wiki/Architectural_decision)

- [Architecturally significant requirements (wikipedia.org)](https://wikipedia.org/wiki/Architecturally_significant_requirements)

Skantlynyow:

- [Documenting architecture decisions - Michael Nygard (thinkrelevance.com)](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)

- [Markdown Architectural Decision Records (adr.github.io)](https://adr.github.io/madr/)

- [Template for documenting architecture alternatives and decisions (stackoverflow.com)](http://stackoverflow.com/questions/7104735/template-for-documenting-architecture-alternatives-and-decisions)

Yn downder:

- [ADMentor XML project (github.com)](https://github.com/IFS-HSR/ADMentor)

- [Architectural Decision Guidance across Projects: Problem Space Modeling, Decision Backlog Management and Cloud Computing Knowledge (ifs.hsr.ch)](https://www.ifs.hsr.ch/fileadmin/user_upload/customers/ifs.hsr.ch/Home/projekte/ADMentor-WICSA2015ubmissionv11nc.pdf)

- [The Decision View's Role in Software Architecture Practice (computer.org)](https://www.computer.org/csdl/mags/so/2009/02/mso2009020036-abs.html)

- [Documenting Software Architectures: Views and Beyond (resources.sei.cmu.edu)](http://resources.sei.cmu.edu/library/asset-view.cfm?assetID=30386)

- [Architecture Decisions: Demystifying Architecture (utdallas.edu)](https://www.utdallas.edu/~chung/SA/zz-Impreso-architecture_decisions-tyree-05.pdf)

- [ThoughtWorks Technology Radar: Lightweight Architecture Decision Records (thoughtworks.com)](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)

- [A Skeptic’s Guide to Software Architecture Decisions (infoq.com)](https://www.infoq.com/articles/architecture-skeptics-guide/)

- [Architectural Decisions — The Making Of](https://ozimmer.ch/practices/2020/04/27/ArchitectureDecisionMaking.html)

- [Architectural Retrospectives: the Key to Getting Better at Architecting](https://www.infoq.com/articles/architectural-retrospectives/)

- [Software Architecture Monday with Mark Richards](https://developertoarchitect.com/lessons/) — dyskans arkitektoryeth medhelweyth rydh pub mis

- [Solution Architecture Decisions - By Gareth Morgan](https://www.linkedin.com/pulse/solution-architecture-decisions-gareth-morgan-0r5xe/)

- ["Keep the Why: Code Becomes Legacy When Nobody Remembers Why"](https://blog.technopathy.club/keep-the-why-code-becomes-legacy-when-nobody-remembers-why)

Toulys:

- [Command-line tools for working with Architecture Decision Records](https://github.com/npryce/adr-tools)

- [Command line tools with python - by Victor Sluiter](https://bitbucket.org/tinkerer_/adr-tools-python/src/master/)

- [Architectural Design Decision Support Framework (ADvISE)](https://swa.univie.ac.at/Software_Architecture/research-projects/architectural-design-decision-support-framework-advise/)

- [Decision Guardian](https://github.com/DecispherHQ/decision-guardian)

- [Mneme HQ - ADR enforcement for AI coding agents](https://github.com/TheoV823/mneme)

- [Keep the Why - a repo-native convention and agent skill that continuously captures, or retrospectively recovers, the reasoning behind a codebase](https://github.com/oliver-zehentleitner/keep-the-why)

- [ADR Guard - GitHub Action that fails a pull request changing watched code without an architecture decision record](https://github.com/chohan-sarmad-ali/delivery-gates)

- [kgai - append-only decision log for AI coding agents, a machine-readable companion to ADR files](https://github.com/kgaidev/kgai)

Gidyans arbennik dhe gowethas:

- [Amazon: AWS Prescriptive Guidance: ADR Process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)

- [GitHub: ADR GitHub organization](https://adr.github.io/)

- [RedHat: Why you should use ADRs](https://www.redhat.com/architect/architecture-decision-records)

Ensamplow:

- [Repository of Architecture Decision Records made for the Arachne Framework](https://github.com/arachne-framework/architecture)

Fylmow:

- [An introduction to arc42 with Savvas Kleanthous](https://www.youtube.com/watch?v=V5clR8c6D7o)

- [The C4 model for visualising software architecture - by Simon Brown](https://www.youtube.com/watch?v=KvoBrUd1-5E)

Podcasts:

- [Software Architecture Bookclub Podcast](https://www.developertoarchitect.com/bookclub-podcast.html)

Lyvrow:

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

Gwelewgh ynwedh:

- REMAP (Representation and Maintenance of Process Knowledge)

- DRL (Decision Representation Language)

- IBIS (Issue-Based Information System)

- QOC (Questions, Options, and Criteria)

- IBM’s e-Business Reference Architecture Framework

- [Decision Reasoning Format (DRF)](https://github.com/reasoning-formats/reasoning-formats) — Furv YAML/JSON heb tu gwerther, redyadow gans maskin, rag derivas dybyrthow gans ressons splann, tybyansow, studh godhvos, ha stokyow-trelyes. A gowlwira ADRyow dre ouryen ressons strokturys, gwiryadow dhe dhogvennans dyberth.
