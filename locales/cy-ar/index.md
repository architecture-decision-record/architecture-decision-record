# Cofnod penderfyniad saernïaeth (ADR)

Mae cofnod penderfyniad saernïaeth (ADR) yn ddogfen sy'n cofnodi penderfyniad saernïaeth pwysig a wnaed, ynghyd â'i gyd-destun a'i ganlyniadau.

> [!IMPORTANT]
> Gwnewch eich diwydrwydd dyladwy eich hun ar yr adnoddau hyn cyn eu defnyddio mewn unrhyw systemau hanfodol.

Cynnwys:

- [Beth yw cofnod penderfyniad saernïaeth?](#beth-yw-cofnod-penderfyniad-saernïaeth)
- [Sut i ddechrau defnyddio ADRau](#sut-i-ddechrau-defnyddio-adrau)
- [Sut i ddechrau defnyddio ADRau gydag offer](#sut-i-ddechrau-defnyddio-adrau-gydag-offer)
- [Sut i ddechrau defnyddio ADRau gyda git](#sut-i-ddechrau-defnyddio-adrau-gyda-git)
- [Sgiliau Claude Code ar gyfer ADRau](#sgiliau-claude-code-ar-gyfer-adrau)
- [Confensiynau enwi ffeiliau](#confensiynau-enwi-ffeiliau)
- [Awgrymiadau ar gyfer ysgrifennu ADRau da](#awgrymiadau-ar-gyfer-ysgrifennu-adrau-da)
- [Templedi enghreifftiol ADR](#templedi-enghreifftiol-adr)
- [Cyngor gwaith tîm ar gyfer ADRau](#cyngor-gwaith-tîm-ar-gyfer-adrau)
- [Cwestiynau gwaith tîm ar gyfer ADRau](#cwestiynau-gwaith-tîm-ar-gyfer-adrau)
- [Cysyniadau cam nesaf ar gyfer ADRau](#cysyniadau-cam-nesaf-ar-gyfer-adrau)
- [Diagramau, golygfeydd a safbwyntiau saernïaeth](#diagramau-golygfeydd-a-safbwyntiau-saernïaeth)
- [Ffwythiannau ffitrwydd ar gyfer penderfyniadau ar ffurf cod](#ffwythiannau-ffitrwydd-ar-gyfer-penderfyniadau-ar-ffurf-cod)
- [Canllawiau amddiffynnol penderfyniadau ar gyfer ceisiadau tynnu](#canllawiau-amddiffynnol-penderfyniadau-ar-gyfer-ceisiadau-tynnu)
- [Am ragor o wybodaeth](#am-ragor-o-wybodaeth)

Templedi:

- [Templed cofnod penderfyniad gan Jeff Tyree ac Art Akerman](templedi/templed-cofnod-penderfyniad-gan-jeff-tyree-ac-art-akerman/)
- [Templed cofnod penderfyniad gan Michael Nygard](templedi/templed-cofnod-penderfyniad-gan-michael-nygard/)
- [Templed cofnod penderfyniad gan EdgeX](templedi/templed-cofnod-penderfyniad-gan-edgex/)
- [Templed cofnod penderfyniad gan arc42](templedi/templed-cofnod-penderfyniad-gan-arc42/)
- [Templed cofnod penderfyniad ar gyfer patrwm Alecsandraidd](templedi/templed-cofnod-penderfyniad-ar-gyfer-patrwm-alecsandraidd/)
- [Templed cofnod penderfyniad ar gyfer achos busnes](templedi/templed-cofnod-penderfyniad-ar-gyfer-achos-busnes/)
- [Templed cofnod penderfyniad Prosiect MADR](templedi/templed-cofnod-penderfyniad-prosiect-madr/)
- [Templed cofnod penderfyniad gan ddefnyddio Planguage](templedi/templed-cofnod-penderfyniad-gan-ddefnyddio-planguage/)
- [Templed cofnod penderfyniad gan Paulo Merson](https://github.com/pmerson/ADR-template)
- [Templed cofnod penderfyniad gan Olaf Zimmermann](https://medium.com/olzzio/y-statements-10eb07b5a177)
- [Templed cofnod penderfyniad gan Gareth Morgan](templedi/templed-cofnod-penderfyniad-gan-gareth-morgan/)
- [Templed cofnod penderfyniad gan GIG Cymru](templedi/templed-cofnod-penderfyniad-gan-gig-cymru/)
- [Templed cofnod penderfyniad ar gyfer Penderfyniadau Technegol Pwysig (ITDau) gan Ignacio Larrañaga](templedi/templed-cofnod-penderfyniad-ar-gyfer-penderfyniadau-technegol-pwysig/)

Enghreifftiau:

- [Fframwaith CSS](enghreifftiau/fframwaith-css/)
- [Ffurfweddu newidynnau amgylchedd](enghreifftiau/ffurfweddu-newidynnau-amgylchedd/)
- [Metrigau, monitro, rhybuddion](enghreifftiau/metrigau-monitro-rhybuddion/)
- [Microsoft Azure DevOps](enghreifftiau/microsoft-azure-devops/)
- [Monorepo neu multirepo](enghreifftiau/monorepo-neu-multirepo/)
- [Ieithoedd rhaglennu](enghreifftiau/ieithoedd-rhaglennu/)
- [Storio cyfrinachau](enghreifftiau/storio-cyfrinachau/)
- [Fformat stamp amser](enghreifftiau/fformat-stamp-amser/)
- [Llawer mwy...](enghreifftiau/)

## Beth yw cofnod penderfyniad saernïaeth?

Mae **cofnod penderfyniad saernïaeth** (ADR) yn ddogfen sy'n cofnodi penderfyniad pwysig ynghylch saernïaeth, ynghyd â'i gyd-destun a'i ganlyniadau.

Mae **penderfyniad saernïaeth** (AD) yn ddewis o ran dylunio meddalwedd sy'n mynd i'r afael â gofyniad sylweddol.

Mae **log penderfyniadau saernïaeth** (ADL) yn gasgliad o'r holl ADRau a grëwyd ac a gynhelir ar gyfer prosiect (neu sefydliad) penodol.

Mae **gofyniad sylweddol o ran saernïaeth** (ASR) yn ofyniad sy'n cael effaith fesuradwy ar saernïaeth system feddalwedd.

Mae'r rhain i gyd yn rhan o faes **rheoli gwybodaeth am saernïaeth** (AKM).

Nod y ddogfen hon yw rhoi trosolwg cyflym o ADRau, esbonio sut i'w creu, a nodi ble i chwilio am ragor o wybodaeth.

Talfyriadau:

  * **AD**: penderfyniad saernïaeth

  * **ADL**: log penderfyniadau saernïaeth

  * **ADR**: cofnod penderfyniad saernïaeth

  * **AKM**: rheoli gwybodaeth am saernïaeth

  * **ASR**: gofyniad sylweddol o ran saernïaeth

## Sut i ddechrau defnyddio ADRau

I ddechrau defnyddio ADRau, trafodwch y meysydd hyn gyda'ch cydweithwyr yn y tîm.

Nodi penderfyniadau:

  * Pa mor ddybryd a pha mor bwysig yw'r AD?

  * A oes rhaid ei wneud nawr, neu a all aros nes bod mwy yn hysbys?

  * Gall profiad personol a phrofiad ar y cyd, yn ogystal â dulliau ac arferion dylunio cydnabyddedig, helpu i nodi penderfyniadau.

  * Yn ddelfrydol, cadwch restr o benderfyniadau i'w gwneud sy'n ategu rhestr y cynnyrch o dasgau i'w gwneud.

Gwneud penderfyniadau:

  * Mae nifer o dechnegau gwneud penderfyniadau ar gael, rhai cyffredinol a rhai sy'n benodol i saernïaeth meddalwedd, er enghraifft mapio deialog.

  * Mae gwneud penderfyniadau mewn grŵp yn bwnc ymchwil gweithredol.

Gweithredu a gorfodi penderfyniadau:

  * Defnyddir ADau wrth ddylunio meddalwedd; felly mae'n rhaid eu cyfleu i randdeiliaid y system sy'n ei hariannu, ei datblygu a'i gweithredu, a rhaid i'r rhanddeiliaid hynny eu derbyn.

  * Dwy arfer perthnasol yw arddulliau codio lle mae'r saernïaeth i'w gweld yn amlwg, ac adolygiadau cod sy'n canolbwyntio ar bryderon a phenderfyniadau ynghylch saernïaeth.

  * Mae hefyd angen ailystyried ADau wrth foderneiddio system feddalwedd yn ystod esblygiad meddalwedd.

Rhannu penderfyniadau (dewisol):

  * Mae llawer o ADau yn codi dro ar ôl tro mewn prosiectau gwahanol.

  * Felly, wrth ddefnyddio strategaeth benodol ar gyfer rheoli gwybodaeth, gall profiadau o benderfyniadau yn y gorffennol, rhai da a rhai gwael, fod yn asedau gwerthfawr y gellir eu hailddefnyddio.

Dogfennu penderfyniadau:

  * Mae llawer o dempledi ac offer ar gael ar gyfer cofnodi penderfyniadau.

  * Gweler y cymunedau ystwyth, e.e. ADRau M. Nygard.

  * Gweler y prosesau peirianneg meddalwedd a dylunio saernïaeth traddodiadol, e.e. y cynlluniau tablau a awgrymwyd gan IBM UMF a chan Tyree ac Akerman o CapitalOne.

Rhagor o wybodaeth:

  * Mae'r camau uchod wedi'u mabwysiadu o'r cofnod ar Wicipedia am [Architectural Decision](https://en.wikipedia.org/wiki/Architectural_decision)

## Sut i ddechrau defnyddio ADRau gydag offer

- [MySpec](https://myspec.dev) — Platfform manyleb a phenderfyniadau saernïaeth awtomataidd sy'n strwythuro cyfansoddiad y prosiect, y saernïaeth dechnegol ac ADRau yn Markdown glân a gyflwynir drwy MCP.

Gallwch ddechrau defnyddio ADRau gydag offer mewn unrhyw ffordd a fynnwch.

Er enghraifft:

  * Os ydych yn hoffi defnyddio Google Drive a golygu ar-lein, gallwch greu Google Doc neu Google Sheet.

  * Os ydych yn hoffi defnyddio system rheoli fersiynau ar gyfer cod ffynhonnell, fel git, gallwch greu ffeil ar gyfer pob ADR.

  * Os ydych yn hoffi defnyddio offer cynllunio prosiectau, fel Atlassian Jira, gallwch ddefnyddio traciwr cynllunio'r offeryn.

  * Os ydych yn hoffi defnyddio wicis, fel MediaWiki, gallwch greu wici ADRau.

## Sut i ddechrau defnyddio ADRau gyda git

Os ydych yn hoffi defnyddio system rheoli fersiynau git, dyma sut rydym ni'n hoffi dechrau defnyddio ADRau gyda git ar gyfer prosiect meddalwedd nodweddiadol sydd â chod ffynhonnell.

Crëwch gyfeiriadur ar gyfer ffeiliau ADR:

```sh
$ mkdir adr
```

Ar gyfer pob ADR, crëwch ffeil destun, fel `database.txt`:

```sh
$ vi database.txt
```

Ysgrifennwch beth bynnag a fynnwch yn yr ADR. Gweler y templedi yn yr ystorfa hon am syniadau.

Ymrwymwch (commit) yr ADR i'ch ystorfa git.

## Sgiliau Claude Code ar gyfer ADRau

Mae'r ystorfa hon yn cynnwys dau sgil [Claude Code](https://claude.com/claude-code) o dan [`skills/`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/), fel y gall asiant codio AI ysgrifennu a chynnal ADRau yn y ffordd y mae'r prosiect hwn yn ei hargymell:

- [`architecture-decision-record-skill`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/architecture-decision-record-skill/) — at ddefnydd cyffredinol, i unrhyw un sy'n ysgrifennu ADR mewn unrhyw brosiect. Mae'n helpu i benderfynu a oes angen ADR ar benderfyniad, yn sefydlu cyfeiriadur `adr/` neu `decisions/`, yn enwi'r ffeil, yn dewis templed o'r un ar ddeg sgerbwd sydd wedi'u cynnwys, ac yn ysgrifennu adrannau Cyd-destun/Penderfyniad/Canlyniadau cadarn.

- [`architecture-decision-record-maintainer-skill`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/architecture-decision-record-maintainer-skill/) — ar gyfer cynhalwyr yr ystorfa hon yn benodol. Mae'n dogfennu cynllun yr ystorfa, y confensiwn o adlewyrchu README/locales, a'r camau manwl ar gyfer ychwanegu templed, enghraifft neu ddolen offeryn newydd.

I ddefnyddio sgil, copïwch ei ffolder i `.claude/skills/` yng ngwraidd yr ystorfa rydych yn gweithio ynddi (neu i `~/.claude/skills/` i'w gwneud ar gael ym mhob prosiect), yna gofynnwch i Claude Code ysgrifennu neu adolygu ADR.

## Confensiynau enwi ffeiliau

Os byddwch yn dewis creu eich ADRau gan ddefnyddio ffeiliau testun cyffredin, efallai y byddwch am lunio eich confensiwn enwi ffeiliau ADR eich hun.

Rydym ni'n ffafrio confensiwn enwi ffeiliau sydd â fformat penodol.

Enghreifftiau:

  * choose-database.md

  * format-timestamps.md

  * manage-passwords.md

  * handle-exceptions.md

Ein confensiwn enwi ffeiliau:

  * Mae'r enw yn cynnwys ymadrodd berfol gorchmynnol yn yr amser presennol. Mae hyn yn helpu darllenadwyedd ac yn cyd-fynd â fformat ein negeseuon ymrwymo.

  * Mae'r enw yn defnyddio llythrennau bach a chysylltnodau (yr un fath â'r ystorfa hon). Mae hyn yn gydbwysedd rhwng darllenadwyedd a defnyddioldeb y system.

  * Markdown yw'r estyniad. Gall hyn fod yn ddefnyddiol er mwyn fformatio'n hawdd.

## Awgrymiadau ar gyfer ysgrifennu ADRau da

Nodweddion ADR da:

* Sail resymegol: Eglurwch y rhesymau dros wneud yr AD penodol. Gall hyn gynnwys y cyd-destun (gweler isod), manteision ac anfanteision y dewisiadau posibl, cymariaethau o nodweddion, trafodaethau cost a budd, a mwy.

* Penodol: Dylai pob ADR ymwneud ag un AD, nid sawl AD.

* Stampiau amser: Nodwch pryd yr ysgrifennwyd pob eitem yn yr ADR. Mae hyn yn arbennig o bwysig ar gyfer agweddau a all newid dros amser, fel costau, amserlenni, graddio, ac ati.

* Digyfnewid: Peidiwch â newid gwybodaeth sydd eisoes mewn ADR. Yn hytrach, diwygiwch yr ADR drwy ychwanegu gwybodaeth newydd, neu disodlwch yr ADR drwy greu ADR newydd.

Nodweddion adran "Cyd-destun" dda mewn ADR:

* Eglurwch sefyllfa eich sefydliad a'i flaenoriaethau busnes.

* Cynhwyswch y sail resymegol a'r ystyriaethau sy'n seiliedig ar gyfansoddiad cymdeithasol a sgiliau eich timau.

* Cynhwyswch fanteision ac anfanteision sy'n berthnasol, a disgrifiwch nhw mewn termau sy'n cyd-fynd â'ch anghenion a'ch nodau.

Nodweddion adran "Canlyniadau" dda mewn ADR:

* Eglurwch beth sy'n dilyn o wneud y penderfyniad. Gall hyn gynnwys yr effeithiau, y deilliannau, yr allbynnau, y camau dilynol, a mwy.

* Cynhwyswch wybodaeth am unrhyw ADRau dilynol. Mae'n gymharol gyffredin i un ADR greu'r angen am ragor o ADRau, er enghraifft pan fydd un ADR yn gwneud dewis mawr cyffredinol sydd yn ei dro yn creu'r angen am fwy o benderfyniadau llai.

* Cynhwyswch unrhyw brosesau adolygu ar ôl y weithred. Mae'n arferol i dimau adolygu pob ADR fis yn ddiweddarach, i gymharu gwybodaeth yr ADR â'r hyn sydd wedi digwydd yn ymarferol, er mwyn dysgu a datblygu.

Gall ADR newydd gymryd lle ADR blaenorol:

* Pan wneir AD sy'n disodli neu'n annilysu ADR blaenorol, dylid creu ADR newydd

## Templedi enghreifftiol ADR

Templedi enghreifftiol ADR rydym wedi'u casglu o'r rhyngrwyd:

- [Templed ADR gan Michael Nygard](templedi/templed-cofnod-penderfyniad-gan-michael-nygard/) (syml a phoblogaidd)

- [Templed ADR gan Jeff Tyree ac Art Akerman](templedi/templed-cofnod-penderfyniad-gan-jeff-tyree-ac-art-akerman/) (mwy soffistigedig)

- [Templed ADR ar gyfer patrwm Alexandrian](templedi/templed-cofnod-penderfyniad-ar-gyfer-patrwm-alecsandraidd/) (syml gyda manylion cyd-destun)

- [Templed ADR ar gyfer achos busnes](templedi/templed-cofnod-penderfyniad-ar-gyfer-achos-busnes/) (mwy MBA-ganolog, gyda chostau, SWOT a mwy o farn)

- [Templed ADR prosiect Markdown Any Decision Records (MADR)](templedi/templed-cofnod-penderfyniad-prosiect-madr/) (fersiwn syml a fersiwn fanwl; mae'r olaf yn pwysleisio opsiynau a'u manteision a'u hanfanteision)

- [Templed ADR gan ddefnyddio Planguage](templedi/templed-cofnod-penderfyniad-gan-ddefnyddio-planguage/) (mwy tuag at sicrhau ansawdd)

- [Templed ar gyfer Penderfyniadau Technegol Pwysig (ITDs) gan Ignacio Larrañaga](templedi/templed-cofnod-penderfyniad-ar-gyfer-penderfyniadau-technegol-pwysig/) (main a'r penderfyniad yn gyntaf, wedi'i optimeiddio ar gyfer adolygiad gweithredol cyflym)

## Cyngor gwaith tîm ar gyfer ADRau

Os ydych yn ystyried defnyddio cofnodion penderfyniadau gyda'ch tîm, dyma gyngor rydym wedi'i ddysgu drwy weithio gyda llawer o dimau.

Mae gennych gyfle i arwain eich cydweithwyr drwy drafod y "pam" gyda'ch gilydd, yn hytrach na gorfodi'r "beth". Er enghraifft, mae cofnodion penderfyniadau yn ffordd i dimau feddwl yn gallach a chyfathrebu'n well; nid yw cofnodion penderfyniadau yn werthfawr os ydynt yn ddim ond gofyniad gwaith papur gorfodol a gyflawnir ar ôl y digwydd.

Mae'n well gan rai timau yr enw "penderfyniadau" yn hytrach na'r talfyriad "ADRau". Pan fydd rhai timau yn defnyddio'r enw cyfeiriadur "decisions", mae fel petai bwlb golau yn goleuo, ac mae'r tîm yn dechrau rhoi mwy o wybodaeth yn y cyfeiriadur, fel penderfyniadau ynghylch cyflenwyr, penderfyniadau cynllunio, penderfyniadau amserlennu, ac ati. Gall pob un o'r mathau hyn o wybodaeth ddefnyddio'r un templed. Ein damcaniaeth yw bod pobl yn dysgu'n gyflymach gyda geiriau ("penderfyniadau") nag â thalfyriadau ("ADRau"), bod pobl yn fwy cymhellol i ysgrifennu dogfennau gwaith ar y gweill pan fydd y gair "cofnod" yn cael ei ddileu, a bod rhai datblygwyr a rhai rheolwyr yn casáu'r gair "saernïaeth".

Mewn theori, digyfnewidioldeb yw'r delfryd. Yn ymarferol, mae newidioldeb wedi gweithio'n well i'n timau ni. Rydym yn mewnosod y wybodaeth newydd yn yr ADR presennol, gyda stamp dyddiad a nodyn bod y wybodaeth wedi cyrraedd ar ôl y penderfyniad. Mae'r math hwn o ddull yn arwain at "ddogfen fyw" y gall pob un ohonom ei diweddaru. Fel arfer, byddwn yn diweddaru pan fyddwn yn cael gwybodaeth diolch i aelodau newydd o'r tîm, neu gynigion newydd, neu ganlyniadau gwirioneddol ein defnydd, neu newidiadau gan drydydd parti ar ôl y penderfyniad, fel galluoedd cyflenwyr, cynlluniau prisio, cytundebau trwyddedu, ac ati.

## Cwestiynau gwaith tîm ar gyfer ADRau

### Pwy all greu ADR?

Ystyriwch feysydd fel pobl benodol, neu rolau penodol, neu dimau penodol, neu adrannau penodol; ystyriwch hefyd a oes pobl, neu rolau, neu dimau, neu adrannau a all gomisiynu ADR, hynny yw, gofyn am un a fydd rhywun arall yn ei ysgrifennu. 

Enghraifft o ateb: Gall unrhyw unigolyn yn ein sefydliad sydd wedi darllen tudalen README y cofnod penderfyniad saernïaeth gynnig ADR, hynny yw, gall yr unigolyn ddechrau ei ysgrifennu a'i rannu gyda'r tîm.

### Beth sy'n cyfiawnhau codi ADR?

Ystyriwch feysydd fel ffyrdd o weithio tîm eich sefydliad, strwythur eich system feddalwedd, cydgysylltu rhwng timau, cynaliadwyedd hirdymor, rhyngwynebau allanol, pwy rydych am iddo elwa, ac ati. 

Enghraifft o ateb: Rydym am greu ADR pan fyddwn am i ddatblygwyr y dyfodol ddeall y "pam" y tu ôl i'r hyn a wnawn.

### Beth sy'n cyfiawnhau peidio â chodi ADR?

Ystyriwch feysydd fel penderfyniadau nad ydynt yn ymwneud â saernïaeth, neu sy'n fach iawn, fel rhai risg isel neu hunangynhwysol neu a wneir gan un datblygwr, neu sydd eisoes wedi'u cwmpasu'n llawn mewn man arall, fel gan safonau neu bolisïau neu ddogfennaeth, neu sy'n dros dro, fel atebion dros dro neu brofion o gysyniad neu arbrofion. 

Enghraifft o ateb: Rydym am hepgor ADR pan fo penderfyniad yn gyfyngedig o ran cwmpas ac amser a risg a chost, neu pan fo wedi'i gwmpasu eisoes mewn man arall.

### Beth yw cylch oes ADR?

Ystyriwch feysydd fel y broses greu, y broses ymchwilio, y broses benderfynu, y broses weithredu, a'r broses ddirwyn i ben. Ystyriwch sut i olrhain cylch oes yr ADR dros amser, fel sut i symud yr ADR o un cyflwr i'r cyflwr nesaf, a hefyd sut i gyfleu hyn i randdeiliaid. 

Enghraifft o ateb: Rydym am i ADR gael pum cham yn ei gylch oes: Cychwyn → Ymchwilio → Gwerthuso → Gweithredu → Cynnal → Dirwyn i ben.

### Beth yw'r meini prawf ar gyfer camau cylch oes ADR?

Ystyriwch feysydd fel meini prawf derbyn ar gyfer ADR, hynny yw, sut ydych chi'n gwybod ei fod yn ddigon da i symud ymlaen o un cam yn y cylch oes i'r cam nesaf? A yw'r broblem wedi'i mynegi'n glir? A yw'r dewisiadau amgen wedi'u hystyried? A yw'r cyfaddawdau wedi'u deall a'u dogfennu'n ddigon da?
A yw'r holl gyd-destun perthnasol yn ei le? A yw'r holl randdeiliaid perthnasol yn rhan o'r broses? A yw'r holl adborth wedi'i ymgorffori? 

Enghraifft o ateb: Rydym am i'r rhanddeiliaid bleidleisio ar ADR pan fydd y tîm gweithredol wedi 1) cwblhau eu hymchwil, 2) cwblhau eu gwerthusiad, 3) cyhoeddi cynnig yr ADR i'r rhanddeiliaid gyda chais am sylwadau a therfyn amser o wythnos, 4) ymgorffori a mynd i'r afael â holl sylwadau'r rhanddeiliaid.

### Pa rolau a chyfrifoldebau sy'n rhyngweithio ag ADR?

Ystyriwch rolau fel cynigydd, ymchwilydd, gwerthuswr, adolygydd, cymeradwywr, cynhaliwr, ac ati. Ystyriwch gyfrifoldebau fel cyfathrebu â rhanddeiliaid, sicrhau bod disgwyliadau'n cael eu bodloni, rhannu ar y wefan neu'r fewnrwyd, ac adolygu'r gwaith o bryd i'w gilydd ac yn enwedig pan fydd newidiadau perthnasol yn digwydd.

Enghraifft o ateb: Rydym am i bob ADR gael prif gyswllt, ail gyswllt a thîm atebol bob amser; y rhain sy'n gyfrifol am gyfathrebu, cyhoeddi, cynnal a chadw, adolygu cyfnodol o leiaf unwaith y flwyddyn, a dirwyn i ben yn y pen draw yn ôl yr angen.

### Sut mae llywodraethiant yn rhyngweithio ag ADR?

Ystyriwch feysydd fel ffyrdd o weithio eich sefydliad, unrhyw anghenion cydymffurfedd arbennig, fel agweddau cyfreithiol neu adnoddau dynol, a sut rydych am ymdrin â chonsensws yn erbyn gwrthdaro yn erbyn uwchgyfeirio. A oes meysydd neu bobl neu dimau a all gael mwy o ddylanwad nag eraill ar ADR, fel gallu ei gymeradwyo, neu bleidleisio arno, neu roi feto arno?

Enghraifft o ateb: Llywodraethiant ADR yw hwn yn nhrefn blaenoriaeth: y Prif Swyddog Gweithredol, y Prif Swyddog Technoleg, y Prif Swyddog Cyfreithiol, y tîm sy'n gweithredu ADR, ac arbenigwyr y tîm sydd â'r wybodaeth fwyaf am yr AD. Nid oes gan neb arall lywodraethiant oni bai ei fod wedi'i ddisgrifio yn yr ADR. 

### Pa egwyddorion sy'n rhyngweithio ag ADR?

Ystyriwch feysydd fel ffyrdd o weithio eich sefydliad sy'n cynnwys symud yn gyflym yn erbyn symud yn araf, o ran consensws penderfyniadau yn erbyn gwrthdaro ynghylch penderfyniadau, ac o ran dewisiadau risg yn erbyn dewisiadau diogelwch, trafodaeth gyhoeddus yn erbyn trafodaeth breifat, ac ati.

Enghraifft o ateb: Rydym yn defnyddio'r egwyddorion arweinyddiaeth o ffafrio gweithredu, anghytuno-ac-ymrwymo, bod amcangyfrifon o 70% yn ddigon da ar gyfer penderfyniadau y gellir eu gwrthdroi'n hawdd a'u hynysu'n hawdd, a ffyrdd cyhoeddus o weithio ac eithrio gwybodaeth gyfrinachol fel y'i disgrifir yng nghytundeb cyfrinachedd ein sefydliad.

## Cysyniadau cam nesaf ar gyfer ADRau

Mae [Arc42](https://arc42.org/) yn ateb dau gwestiwn mewn ffordd bragmatig a gellir ei deilwra i'ch anghenion penodol. Beth ddylech chi ei ddogfennu/gyfathrebu am eich saernïaeth? Sut dylech chi ei ddogfennu/gyfathrebu? Mae Arc42 yn cynnwys cofnodion penderfyniadau saernïaeth ynghyd â chanllawiau ar nodau, cyfyngiadau, cyd-destunau, ansawdd, risgiau a mwy.

Mae [model C4](https://c4model.com/) yn ddull hawdd ei ddysgu, sy'n gyfeillgar i ddatblygwyr, o lunio diagramau saernïaeth meddalwedd. Mae C4 yn set o ddiagramau haenedig ar gyfer cyd-destun, cynwysyddion, cydrannau a chod, ynghyd â diagramau ategol ar gyfer tirwedd systemau, dynameg a defnyddio.

## Diagramau, golygfeydd a safbwyntiau saernïaeth

Gelwir diagram saernïaeth yn "olwg saernïaeth".

Mae "golwg saernïaeth" yn enghraifft o "safbwynt saernïaeth".

Mae "safbwynt saernïaeth" yn ystyried cynulleidfa benodol â phryderon penodol.

Enghreifftiau o safbwyntiau saernïaeth, golygfeydd a diagramau:

- Galluoedd busnes

- Prosesau busnes lefel uchel

- [Ffrydiau gwerth](https://en.wikipedia.org/wiki/Value_stream)

- Swyddogaethau meddalwedd wedi'u mapio i gydrannau cymhwysiad

- [C4 Model](https://en.wikipedia.org/wiki/C4_model) Diagram cyd-destun (TO-BE / AS-IS)

- [C4 Model](https://en.wikipedia.org/wiki/C4_model) Diagram cynwysyddion (TO-BE / AS-IS)

- [Diagram endid-perthynas](https://en.wikipedia.org/w/index.php?title=Entity_relationship_diagram) (ERD) i fapio endidau data i gydrannau cymhwysiad

- [Diagramau dilyniant](https://en.wikipedia.org/wiki/Sequence_diagram) i ddisgrifio llifoedd swyddogaethol o fewn systemau ac ar gyfer integreiddiadau

- [Nodiant a Model Prosesau Busnes](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN) diagramau i ddisgrifio llifoedd data ar draws cydrannau cymhwysiad

- [Nodiant a Model Prosesau Busnes](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN) diagramau i ddisgrifio prosesau busnes / senarios defnyddwyr

- [Rheoli Hunaniaeth a Mynediad](https://en.wikipedia.org/wiki/Identity_and_access_management) (IAM) diagramau

- [Rheoli Mynediad ar Sail Rolau](https://en.wikipedia.org/wiki/Role-based_access_control) (RBAC) diagramau â rolau ar gyfer pob cydran cymhwysiad

- [Rheoli Mynediad ar Sail Nodweddion](https://en.wikipedia.org/wiki/Attribute-based_access_control) (ABAC) diagramau â nodweddion ar gyfer pob cydran cymhwysiad

- Diagramau preifatrwydd

Diagramau cysylltiedig:

- Mae Diagram Achosion Defnydd yn dangos achosion defnydd i'r rheolwyr/cwsmeriaid, sy'n dod cyn y gofynion, sy'n dod cyn y saernïaeth meddalwedd.

- Mae Diagram Defnyddio yn dangos y caledwedd/cyfrifiaduron ffisegol y mae'r cydrannau meddalwedd yn cael eu defnyddio arnynt.
- Mae Diagram Llif Data yn dangos sut mae data'n symud drwy'r system ac yn cael ei drawsnewid.
- Defnyddir Diagram Dilyniant i ddangos sut mae protocolau fel HTTP yn gweithio ar echelin amser.

- Mae Diagram Gweithgaredd yn darlunio llif gwaith y gweithgareddau y mae system feddalwedd yn eu cyflawni, fel AI NPC.

## Ffwythiannau ffitrwydd ar gyfer penderfyniadau ar ffurf cod

Gwiriadau awtomataidd gwrthrychol yw ffwythiannau ffitrwydd, wedi'u hysgrifennu gyda chod rhaglennu, sy'n gwirio bod penderfyniadau'n cael eu cynnal.

- Mae ffwythiannau ffitrwydd yn gwneud penderfyniadau'n brofadwy ac yn sicr.

- Gall ffwythiannau ffitrwydd ar gyfer penderfyniadau fod o gymorth mawr i sicrhau ansawdd, prosesau rheoleiddio a nodau llywodraethiant.

### Sut mae ffwythiannau ffitrwydd yn cysylltu â phenderfyniadau

Mae cofnod penderfyniad yn dogfennu'r penderfyniad, tra bo ffwythiant ffitrwydd yn sicrhau'r penderfyniad.

- Enghraifft o benderfyniad: Rydym yn defnyddio cyrchu digwyddiadau (event sourcing) ar gyfer gofynion archwilio.

- Enghraifft o ffwythiant ffitrwydd: Rydym yn defnyddio'r gweinydd integreiddio parhaus i brofi bod yn rhaid i bob newid cyflwr gynhyrchu digwyddiadau.

### Pam mae ffwythiannau ffitrwydd yn helpu penderfyniadau

Mesuriadau gwrthrychol: Mae ffwythiannau ffitrwydd naill ai'n pasio neu'n methu, felly mae'r gwaith yn weladwy ac yn glir.

Defnydd parhaus: Ffwythiannau ffitrwydd yw eich rheolau byw, ac maent yn rhedeg ar bob ymrwymiad (commit) a phob adeiladwaith.

Hyder i ailffactorio: Mae ffwythiannau ffitrwydd yn dal gwallau yn rheolau'r penderfyniadau yn awtomatig.

Llywodraethiant graddadwy: Mae ffwythiannau ffitrwydd yn sicrhau safonau heb greu tagfeydd.

### A all ffwythiannau ffitrwydd ddefnyddio deallusrwydd artiffisial?

Gall ffwythiannau ffitrwydd fanteisio ar fodelau iaith mawr (LLMs) deallusrwydd artiffisial ar gyfer penderfyniadau drwy ofyn cwestiynau am eich gwaith,
fel eich cynlluniau, eich cod, eich sgemâu, eich APIau, a mwy:

```txt
IMPORTANT: Prefer retrieval-led reasoning over pre-training-led reasoning.
IMPORTANT: Turn on extended thinking. Turn on expert advice. Turn on search.

This is a fitness function to evaluate if our work is
using all our decisions, and is correct and accurate.

- Our decisions are here: {url}
- Our work to evaluate is here: {url}

Explain any errors, problems, gaps, weaknesses. Be direct. Be decisive.
```

### Profi unedau saernïaeth

[ArchUnit](https://www.archunit.org/): gwiriwch reolau saernïaeth cod Java drwy ddefnyddio unrhyw fframwaith profi unedau Java cyffredin.

[ArchUnitTS](https://github.com/LukasNiessen/ArchUnitTS): gwiriwch reolau saernïaeth cod TypeScript a chod JavaScript drwy ddefnyddio Jest, Vitest, Jasmine, ac ati.

## Canllawiau amddiffynnol penderfyniadau ar gyfer ceisiadau tynnu

Mae [Decision Guardian](https://github.com/DecispherHQ/decision-guardian)
yn dod â'r cofnodion penderfyniadau cywir i'r golwg yn awtomatig ar yr adeg gywir, sef pan fydd
datblygwr yn addasu'r cod y mae'r penderfyniadau hynny'n ei gwmpasu. Yn lle gobeithio y bydd datblygwyr
yn darllen ffolder dogfennau cyn uno, mae'r cyd-destun perthnasol yn ymddangos yn uniongyrchol ar y cais tynnu.

Mae hyn yn gweithio ar gyfer unrhyw fath o gofnod penderfyniad: penderfyniadau saernïaeth, penderfyniadau data, penderfyniadau cydymffurfedd, penderfyniadau clinigol a meddygol, penderfyniadau diogelwch, a mwy.

Mae'n gweithio gydag unrhyw system CI (GitLab, Jenkins, CircleCI) ac fel bachyn cyn-gomit.
Cod agored. Trwydded MIT.

Mae [ADR Guard](https://github.com/chohan-sarmad-ali/delivery-gates) yn Gweithred GitHub
sy'n methu cais tynnu pan fydd llwybrau cod a wylir yn newid heb ychwanegu neu ddiweddaru cofnod penderfyniad saernïaeth. Mae eithriadau'n eglur: mae llinell
`ADR-Exempt:` â rheswm yn pasio'r giât ac yn cael ei hysgrifennu i grynodeb y gwaith. Ddim yn gysylltiedig â thempled penodol, heb ddibyniaethau. Cod agored. Trwydded MIT.

## Am ragor o wybodaeth

Rhagarweiniad:

- [Architectural decision (wikipedia.org)](https://wikipedia.org/wiki/Architectural_decision)

- [Architecturally significant requirements (wikipedia.org)](https://wikipedia.org/wiki/Architecturally_significant_requirements)

Templedi:

- [Documenting architecture decisions - Michael Nygard (thinkrelevance.com)](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)

- [Markdown Architectural Decision Records (adr.github.io)](https://adr.github.io/madr/)

- [Template for documenting architecture alternatives and decisions (stackoverflow.com)](http://stackoverflow.com/questions/7104735/template-for-documenting-architecture-alternatives-and-decisions)

Yn fanwl:

- [ADMentor XML project (github.com)](https://github.com/IFS-HSR/ADMentor)

- [Architectural Decision Guidance across Projects: Problem Space Modeling, Decision Backlog Management and Cloud Computing Knowledge (ifs.hsr.ch)](https://www.ifs.hsr.ch/fileadmin/user_upload/customers/ifs.hsr.ch/Home/projekte/ADMentor-WICSA2015ubmissionv11nc.pdf)

- [The Decision View's Role in Software Architecture Practice (computer.org)](https://www.computer.org/csdl/mags/so/2009/02/mso2009020036-abs.html)

- [Documenting Software Architectures: Views and Beyond (resources.sei.cmu.edu)](http://resources.sei.cmu.edu/library/asset-view.cfm?assetID=30386)

- [Architecture Decisions: Demystifying Architecture (utdallas.edu)](https://www.utdallas.edu/~chung/SA/zz-Impreso-architecture_decisions-tyree-05.pdf)

- [ThoughtWorks Technology Radar: Lightweight Architecture Decision Records (thoughtworks.com)](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)

- [A Skeptic’s Guide to Software Architecture Decisions (infoq.com)](https://www.infoq.com/articles/architecture-skeptics-guide/)

- [Architectural Decisions — The Making Of](https://ozimmer.ch/practices/2020/04/27/ArchitectureDecisionMaking.html)

- [Architectural Retrospectives: the Key to Getting Better at Architecting](https://www.infoq.com/articles/architectural-retrospectives/)

- [Software Architecture Monday with Mark Richards](https://developertoarchitect.com/lessons/) - gwers saernïaeth meddalwedd fisol am ddim

- [Solution Architecture Decisions - By Gareth Morgan](https://www.linkedin.com/pulse/solution-architecture-decisions-gareth-morgan-0r5xe/)

- ["Keep the Why: Code Becomes Legacy When Nobody Remembers Why"](https://blog.technopathy.club/keep-the-why-code-becomes-legacy-when-nobody-remembers-why)

Offer:

- [Command-line tools for working with Architecture Decision Records](https://github.com/npryce/adr-tools)

- [Command line tools with python - by Victor Sluiter](https://bitbucket.org/tinkerer_/adr-tools-python/src/master/)

- [Architectural Design Decision Support Framework (ADvISE)](https://swa.univie.ac.at/Software_Architecture/research-projects/architectural-design-decision-support-framework-advise/)

- [Decision Guardian](https://github.com/DecispherHQ/decision-guardian)

- [Mneme HQ - ADR enforcement for AI coding agents](https://github.com/TheoV823/mneme)

- [Keep the Why - a repo-native convention and agent skill that continuously captures, or retrospectively recovers, the reasoning behind a codebase](https://github.com/oliver-zehentleitner/keep-the-why)

- [ADR Guard - GitHub Action that fails a pull request changing watched code without an architecture decision record](https://github.com/chohan-sarmad-ali/delivery-gates)

- [kgai - append-only decision log for AI coding agents, a machine-readable companion to ADR files](https://github.com/kgaidev/kgai)

Canllawiau penodol i gwmnïau:

- [Amazon: AWS Prescriptive Guidance: ADR Process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)

- [GitHub: ADR GitHub organization](https://adr.github.io/)

- [RedHat: Why you should use ADRs](https://www.redhat.com/architect/architecture-decision-records)

Enghreifftiau:

- [Repository of Architecture Decision Records made for the Arachne Framework](https://github.com/arachne-framework/architecture)

Fideos:

- [An introduction to arc42 with Savvas Kleanthous](https://www.youtube.com/watch?v=V5clR8c6D7o)

- [The C4 model for visualising software architecture - by Simon Brown](https://www.youtube.com/watch?v=KvoBrUd1-5E)

Podlediadau:

- [Software Architecture Bookclub Podcast](https://www.developertoarchitect.com/bookclub-podcast.html)

Llyfrau:

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

Gweler hefyd:

- REMAP (Representation and Maintenance of Process Knowledge)

- DRL (Decision Representation Language)

- IBIS (Issue-Based Information System)

- QOC (Questions, Options, and Criteria)

- IBM’s e-Business Reference Architecture Framework

- [Decision Reasoning Format (DRF)](https://github.com/reasoning-formats/reasoning-formats) - Fformat YAML/JSON niwtral o ran gwerthwyr, y gall peiriant ei ddarllen, ar gyfer cynrychioli penderfyniadau â rhesymu eglur, rhagdybiaethau, cyflwr gwybyddol a chyfaddawdau. Mae'n ategu ADRau trwy ychwanegu rhesymu strwythuredig, y gellir ei ddilysu, at ddogfennaeth penderfyniadau.
