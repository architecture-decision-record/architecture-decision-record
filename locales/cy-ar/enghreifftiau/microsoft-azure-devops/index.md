# Microsoft Azure DevOps

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
  * [Microsoft Devops CI: Antur anfoddhaol](#microsoft-devops-ci-antur-anfoddhaol)
  * [Uchafbwyntiau o'r drafodaeth ar Hacker News](#uchafbwyntiau-or-drafodaeth-ar-hacker-news)
  * [MVP Datblygu Windows](#mvp-datblygu-windows)
  * [Crynodeb gan Edward Thomson (Rheolwr Rhaglen Azure)](#crynodeb-gan-edward-thomson-rheolwr-rhaglen-azure)


## Crynodeb


### Mater

Rydym am ddefnyddio devops i adeiladu, integreiddio, cyflwyno a lletya ein prosiectau. Rydym yn ystyried Microsoft Azure DevOps.

  * Rydym am i brofiad y datblygwr fod yn gyflym ac yn ddibynadwy, ar gyfer gosod devops e.e. ffurfweddu, a'r defnydd parhaus e.e. amseroedd adeiladu cyflym.
  
  * Rydym am ystyried defnyddio Microsoft Azure yn ei gyfanrwydd, ar gyfer lletya apiau'r prosiect, cronfeydd data, ac ati.


### Penderfyniad

Penderfynwyd yn erbyn Microsoft Azure DevOps.


### Statws

Penderfynwyd. Rydym yn agored i ailystyried os/pan ddaw gwybodaeth newydd sylweddol i law.


## Manylion


### Rhagdybiaethau

Yr holl ragdybiaethau devops arferol, fel yn y llyfr Accelerate.

  * Mae adeiladwaith cyflym yn gymorth sylweddol. Mae hyn yn cyflymu'r dolenni adborth.

  * Gallwn gyfnewid darnau i mewn/allan gan gyflenwyr amgen h.y. efallai y byddwn am ddod â'n gweinyddion adeiladu cyflymach ein hunain, neu ddefnyddio ein dewis ni o system rheoli fersiynau, neu gydgysylltu â gweinydd integreiddio parhaus a letyir gennym ein hunain.
  
  * Mae defnyddioldeb symlach yn gymorth sylweddol, ar gyfer profiad y datblygwr, ac yn ei dro ar gyfer meysydd cynnil fel cysondeb, eglurder, diogelwch, a rhwyddineb y gromlin ddysgu.

  * Pan fydd unrhyw beth wedi torri neu'n broblemus, rydym am gael ffordd effeithiol o adrodd am y mater. Mae hyn yn arbennig o bwysig ar gyfer unrhyw faterion sy'n ymwneud â diogelwch.


### Cyfyngiadau

Dim yn hysbys. Mae gan Azure ymrwymiad cyhoeddedig i chwarae'n dda ag offer allanol.


### Safbwyntiau

Ystyriasom ddefnyddio Microsoft Azure Devops o'i gymharu ag AWS, sef y darparwr presennol.

Arbrofasom ag Azure DevOps, Azure Pipelines, Azure Repo, ac Azure yn cychwyn gweinydd newydd drwy Terraform.

Arbrofasom â chael cymorth gan gynrychiolwyr Microsoft.

Casglasom wybodaeth gan gymheiriaid ar flogiau a Hacker News.


### Dadl

Mae Azure DevOps yn hysbysebu set ragorol o gynigion, ond nid ydynt yn cyflawni, nid ydynt yn gweithio'n dda gyda'i gilydd, ac mae'r cymorth yn wael.

Ein profiad uniongyrchol:

  * Mae gosod Azure yn llanast o ryngwynebau defnyddiwr, ac mae rhai yn gorgyffwrdd â chyfrifon Microsoft, ac eraill ddim. E.e. mae mewngofnodi Azure, mewngofnodi Microsoft.com, mewngofnodi Live.com, ac ati, ac mae pob un ohonynt yn weithredol ar yr un pryd.

  * Daethom ar draws mater diogelwch bach wrth osod, ac ni chawsom unrhyw ddatrysiad. Ceisiasom lawer o ffyrdd i adrodd amdano, i lawer o gynrychiolwyr Microsoft, heb lwyddiant. Llwyddasom i adrodd amdano i adran ddiogelwch Microsoft, a atebodd na fyddai'n cael ei drwsio (won't fix).

  * Mae'r ddogfennaeth yn aml naill ai'n anghywir neu wedi dyddio. Mae o leiaf rywfaint o hyn oherwydd peiriant chwilio gwael Microsoft, a rhywfaint oherwydd SEO is na'r safon.
  
  * Mae gosod Terraform wedi'i ddogfennu'n dda, ac yn gweithio. Fodd bynnag, mae cefnogaeth Terraform yn wan o'i chymharu ag AWS oherwydd bod Microsoft yn adeiladu perthnasoedd busnes â chyflenwyr i wneud enghreifftiau gosod Terraform drwy gadwyn.

Profiadau ein cymheiriaid:

  * Ar ôl i ni wneud ein hasesiad dall ein hunain, aethom ati i chwilio am brofiadau cymheiriaid. Roedd yr hyn a ganfuom yn cadarnhau ein profiadau.

  * Adroddodd cymheiriaid am broblemau ychwanegol gydag amseroedd adeiladu, a phroblemau gyda dod â'ch gweinydd adeiladu eich hun. Mae'r problemau hyn yn sylweddol fwy difrifol na phroblemau rhyngwyneb defnyddiwr, oherwydd mai gwneud adeiladwaith yw prif ddiben piblinell adeiladu, ac rydym yn disgwyl gwneud llawer bob dydd.

  * Canfuom gyfranogiad rhagorol gan gydweithwyr Azure yn y mannau trafod. Mawr yw ein clod i Microsoft am hyn. Mae Edward Thomson, Rheolwr Rhaglen a chodwr Azure, wedi creu argraff arbennig arnom oherwydd ei gyfranogiad, ei uniongyrchedd, a'i esboniadau technegol.


### Goblygiadau

Mae'n ymddangos y bydd dewis Microsoft Azure DevOps yn ddrutach (~3 gwaith) o ran amser a chost na pheidio â dewis Azure.


## Cysylltiedig


### Penderfyniadau cysylltiedig

Os dewiswn Azure DevOps, mae llawer o gynigion cysylltiedig, gan gynnwys Azure Repo, Azure Pipeline, ac ati. Credwn, os dewiswn Azure Devops, y gallai hyn ei gwneud hi'n haws defnyddio mwy o alluoedd Azure, neu ei gwneud hi'n anoddach defnyddio galluoedd cyflenwyr eraill.

Credwn fod Microsoft yn gwneud camau breision o ran profiad datblygwyr, ac rydym yn gweld Microsoft yn prynu offer datblygwyr (e.e. GitHub) a dibyniaethau (e.e. Citus) mewn symiau mawr.

Os dewiswn Azure DevOps, efallai y byddwn am bwysleisio dewis cynigion caffael Microsoft, ac efallai y byddwn hefyd am fynd at y cynigion a gaffaelwyd gyda mwy o ofal/asesu oherwydd gwrthod meinwe posibl e.e. risg trosiant staff.


### Gofynion cysylltiedig

Rydym am i amseroedd adeiladu fod yn gyflym iawn. Rydym yn derbyn talu premiwm uchel am hyn. Mae hyn oherwydd ein bod am ailadrodd yn gyflym iawn.

Rydym am i ddibynadwyedd fod yn uchel iawn. Rydym yn derbyn talu premiwm uchel am hyn. Mae hyn oherwydd ein bod yn profi achosion defnydd gwerth uchel, gan gynnwys trafodion ariannol, trafodion cyfrinachol, ac ati.

Mae ein 4 prif ddangosydd perfformiad allweddol devops yn cynnwys yr amser cymedrig i adfer, sy'n galw am adeiladwaith cyflym a dibynadwyedd uchel.


### Arteffactau cysylltiedig

Rydym am i'r system adeiladu allbynnu arteffactau sy'n addas i'w defnyddio mewn systemau eraill, fel Artifactory.


### Egwyddorion cysylltiedig

Hawdd ei wrthdroi. Gallwn werthuso Azure DevOps ochr yn ochr ag AWS, y darparwr presennol.


## Nodiadau


### Microsoft Devops CI: Antur anfoddhaol

https://toxicbakery.github.io/vsts-devops/microsoft-devops-ci/

Neges blog.

"Fel datblygwr meddalwedd, rwy'n gwybod o brofiad uniongyrchol pa mor anodd yw adeiladu cynhyrchion o safon yn gyflym ac yn rhad. Mae'n ffurf ar gelfyddyd rydym weithiau'n ei chael yn iawn, ac ar adegau eraill yn dirywio'n rhywbeth tebyg i wefan iechyd llywodraeth cyfnod Obama. Mae ein lefel o reolaeth dros y cynnyrch canlyniadol yn amrywio, ac mae'r bai am fethiant yn aml yn disgyn ar y bobl anghywir yn yr hierarchaeth gwneud penderfyniadau. Mae Azure DevOps Microsoft (a elwid gynt yn Visual Studio Team Services), er gwaethaf bwriadau da amlwg, yn storm berffaith o benderfyniadau gwael a gweithredu gwael."


### Uchafbwyntiau o'r drafodaeth ar Hacker News

https://news.ycombinator.com/item?id=18983586

"Rydym yn defnyddio Azure DevOps yn helaeth yn fy ngwaith ac, ar ôl defnyddio GitHub, Gitlab, atebion a letyir gennym ein hunain, Jenkins, TeamCity... mae Azure DevOps yn y safle olaf un."

"Mae'r rhyngwyneb defnyddiwr yn drwsgl ofnadwy ym mhobman. Y gwaethaf i mi yw ceisiadau tynnu (pull requests). Hynod o anodd gweithio gyda phobl ar gais tynnu. Ni allaf hyd yn oed dynnu sylw at "un" broblem benodol - i ni mae wedi torri ym mhobman."

"Mae Azure Devops yn rhywbeth rwyf am ei garu. Mae'r rhyngwyneb defnyddiwr yn newid o hyd, ond nid yw'n trwsio namau sylfaenol sydd wedi bodoli ers oesoedd."

"Nid yw'r offer wedi'u hintegreiddio'n dda, mae'r rhyngwyneb defnyddiwr yn araf iawn, nid oes golwg dangosfwrdd o geisiadau tynnu gweithredol, adeiladwaith, rhyddhadau, ac ati ar gyfer fy hoff ystorfeydd. Mae amseroedd adeiladu/cyflwyno'n hurt o araf."

"Rydym wedi ceisio defnyddio Azure Boards hefyd (Eitemau Gwaith, Byrddau, Ôl-groniadau, ac ati). Aw. Mae'n llanast llwyr o ryngwyneb defnyddiwr o syniadau digyswllt. Yn hytrach na gweithredu un peth yn dda, fe wnaethon nhw weithredu dwsin a hanner o bethau'n ofnadwy."


### MVP Datblygu Windows

MVP Datblygu Windows yma. Teimlaf fod yn rhaid i mi ysgwyddo rhywfaint o'r cyfrifoldeb am beidio â bod yn uwch fy llais am y materion hyn. Ond rhaid dweud fy mod yn siomedig o glywed eich bod "wedi synnu" at y problemau profiad defnyddiwr. Rwyf wedi bod yn dweud wrth eich pobl bod y profiad defnyddiwr yn ofnadwy (e.e. mor bell yn ôl â chyn y lansiad) ac wedi cael yr ateb "rydym yn gwybod, rydym yn ei drwsio" dro ar ôl tro. Byddaf yn dechrau ffurfioli'r adborth a'i wthio drwy'r pibellau, cadwch lygad ar y gofod. Rwyf hefyd yn lleol (Bellevue), a byddwn wrth fy modd yn dod i mewn a cheisio rhoi ein ap oss .net/wpf/uwp cymharol syml drwy'r biblinell. Rwy'n amau y bydd yn agoriad llygad i'r ddau ohonom.

Rhai enghreifftiau:

* Ni allwch adeiladu piblinell gydag ystorfa git sy'n cynnwys is-fodiwlau

* Cefais fod golygu'r PATH ar gyfer rhai offer wedi'u teilwra yn amhosibl

* Nid yw profiad y Biblinell Newydd yn gwneud llawer o synnwyr, bydd defnyddwyr newydd sy'n clicio o gwmpas yn y pen draw yn dod i'r Dogfennau anghywir.


### Crynodeb gan Edward Thomson (Rheolwr Rhaglen Azure)

Fi a ysgrifennodd y cod sy'n uno eich ceisiadau tynnu. Rheolwr Rhaglen yn Microsoft ar gyfer Azure DevOps; cyn hynny'n beiriannydd meddalwedd ar offer rheoli fersiynau yn GitHub, Microsoft, SourceGear.

https://www.edwardthomson.com/

Cyd-gynhaliwr libgit2. https://libgit2.github.io

Cyd-gyflwynydd All Things Git, y Podlediad am Git. https://www.allthingsgit.com/

Curadur Developer Tools Weekly, cylchlythyr am offer datblygu. https://developertoolsweekly.com/
