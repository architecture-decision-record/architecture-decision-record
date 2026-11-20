# Storio cyfrinachau

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
  * [Vault by HashiCorp](#vault-by-hashicorp)
  * [LastPass](#lastpass)
  * [Bitwarden](#bitwarden)
  * [EnvKey](#envkey)
  * [Confidant by Lyft](#confidant-by-lyft)
  * [Devolutions Password Server](#devolutions-password-server)
  * [Secret Server by Thycotic](#secret-server-by-thycotic)


## Crynodeb


### Mater

Mae angen i ni storio cyfrinachau, fel cyfrineiriau, allweddi preifat, tocynnau dilysu, ac ati.

Mae rhai o'r cyfrinachau'n canolbwyntio ar y defnyddiwr. Er enghraifft, mae ein datblygwyr am allu defnyddio eu ffôn symudol i chwilio am gyfrinair i wasanaeth.

Mae rhai o'r cyfrinachau'n canolbwyntio ar y system. Er enghraifft, mae angen i'n piblinell cyflenwi parhaus allu chwilio am y manylion mewngofnodi ar gyfer ein lletya cwmwl.


### Penderfyniad

Bitwarden ar gyfer cyfrinachau sy'n canolbwyntio ar y defnyddiwr

Vault by HashiCorp ar gyfer cyfrinachau sy'n canolbwyntio ar y system.


### Statws

Penderfynwyd. Rydym yn agored i ddewisiadau amgen newydd wrth iddynt godi.


## Manylion


### Rhagdybiaethau

At y diben hwn, ac yn ein cyflwr presennol, rydym yn gwerthfawrogi cyfleustra sy'n canolbwyntio ar y defnyddiwr, fel apiau symudol y gellir eu defnyddio.

  * Rydym am sicrhau mynediad cyflym a hawdd wrth fynd, fel ar gyfer datblygwr sy'n gwneud peirianneg dibynadwyedd system ar alwad.

  * Rydym am allu rhannu rhai cyfrinachau ymhlith pobl ddethol, fel tîm.

Nid ydym yn ceisio datrys ar gyfer un darparwr, fel storio'r holl gyfrinachau'n gyfan gwbl ar Amazon neu Azure neu Google.

Nid ydym am gael dulliau ad hoc fel "cofiwch ef" neu "ysgrifennwch ef ar nodyn" neu "darganfyddwch eich ffordd eich hun o'i storio".

Mae ein model diogelwch at y diben hwn yn fodlon â defnyddio cyflenwyr COTS uchel eu parch, fel offer rheoli cyfrineiriau SaaS.


### Cyfyngiadau

Ar hyn o bryd rydym am gael rhywbeth hawdd h.y. dim angen ysgrifennu cod, dim angen gosod gweinyddion, dim angen gwneud ymrwymiad mawr, dim angen safoni pawb.


### Safbwyntiau

Ystyriasom:

1. Rheolwyr cyfrineiriau parod sy'n canolbwyntio ar y defnyddiwr: LastPass, 1Password, Bitwarden, Dashlane, KeePass, pass, GPG, ac ati.

2. Rheolwyr cyfrineiriau COTS sy'n canolbwyntio ar y system: AWS KMS, Vault by HashiCorp, EnvKey, Secret Server by Thycotic, Devolutions Password Server, Confidant by Lyft.

3. Dulliau sy'n canolbwyntio ar rannu: defnyddio dogfen Google a rennir, neu sianel Slack a rennir, neu ffolder rhwydwaith a rennir, ac ati.

4. Dulliau ad hoc technoleg isel, fel cofio, ysgrifennu nodyn, neu ddibynnu ar bob defnyddiwr i ddarganfod ei ddull ei hun.


### Dadl

Mae Bitwarden, LastPass, 1Password a Dashlane i gyd yn gynhyrchion masnachol parod.

  * Mathau tebyg o nodweddion ar gyfer defnyddwyr, timau, sefydliadau, ac ati.

  * Gallu bwrdd gwaith ar gyfer Windows a Mac, a gallu symudol ar gyfer Android ac iOS.

  * Estyniadau porwr ar gyfer Chrome a Firefox, ar gyfer llenwi ffurflenni'n awtomatig, ac ati.

Mae gan Bitwarden ddwy fantais dros y lleill:

  * Mae Bitwarden yn ffynhonnell agored, sy'n golygu y gall cymheiriaid adolygu'r diogelwch a hefyd mae datblygwyr sy'n canolbwyntio ar ddiogelwch yn gwerthfawrogi'r cwmni'n eang.

  * Mae hanesion gan weithwyr meddalwedd yn disgrifio ffafriaeth sylweddol i Bitwarden dros y lleill.

Ysgrifennu da nodweddiadol: https://jcs.org/2017/11/17/bitwarden

Gwefan bleidleisio nodweddiadol ochr yn ochr: https://stackshare.io/stackups/bitwarden-vs-dashlane

Rydym yn gohirio KeePass, pass, GPG, ac ati oherwydd y cymhlethdod ychwanegol. Mae pob un o'r rhain yn edrych fel atebion da i ddefnyddwyr technegol. Mae GPG yn edrych yn arbennig o dda i ddefnyddwyr technegol sydd eisiau galluoedd traws-system sy'n canolbwyntio ar orchmynion.

Rydym yn gohirio KMS oherwydd bod ganddo glo i mewn i un darparwr.

Rydym yn dewis Vault ar gyfer anghenion sy'n canolbwyntio ar y system, oherwydd bod yr adolygiadau'n rhyfeddol o gadarnhaol, a bod gan HashiCorp hanes ardderchog o ran meddalwedd a chefnogaeth o'r radd flaenaf.

Rydym yn rhoi feto ar y dulliau rhannu fel drwy ddogfennau a rennir, sianeli a rennir, ffolderi rhwydwaith a rennir, ac ati. Nid yw'r rhain yn darparu'r rhinweddau diogelwch rydym eu heisiau.

Rydym yn rhoi feto ar y dulliau ad hoc technoleg isel, oherwydd ein bod i gyd yn cytuno nad dyma'r ffordd ymlaen yn y tymor hir.


### Goblygiadau

Efallai y bydd angen i ddatblygwyr olrhain cyfrinachau mewn dau le: Bitwarden ar gyfer mynediad sy'n canolbwyntio ar y defnyddiwr, a Vault ar gyfer mynediad sy'n canolbwyntio ar y system.


## Cysylltiedig


### Penderfyniadau cysylltiedig

Rhaid i'r penderfyniad ynghylch pa weinydd CI/CD gynnwys prawf o'r gallu i gyrchu cyfrinachau.

Bydd angen i ni benderfynu sut i reoli'r cyfrinachau, o ran polisïau, cylchdroi, sefydliadau, ac ati.


### Gofynion cysylltiedig

Bydd gan y cyfrinachau ofynion cysylltiedig ar gyfer cydymffurfedd, archwilio, a chynefino/ymadael adnoddau dynol.


### Arteffactau cysylltiedig

Rydym yn disgwyl y gallem allforio rhai cyfrinachau i newidynnau amgylchedd.


### Egwyddorion cysylltiedig

Hawdd ei wrthdroi.

Hawdd ei redeg yn gyfochrog h.y. mae'n hawdd defnyddio amrywiaeth o reolwyr cyfrineiriau.

Rhad i roi cynnig arno h.y. mae treial am ddim a dim ymrwymiad.


## Nodiadau

Nodiadau gwerthuso yma. Sylwadau cyhoeddus ar amrywiol fyrddau trafod devops yw'r nodiadau i gyd.


### Vault by HashiCorp

Vault yw'n union yr hyn rydych ei eisiau yma. 

Peidiwch â thaflu Vault i gynhyrchu, serch hynny; gosodwch ef mewn amgylchedd profi yn gyntaf, oherwydd gall dogfennaeth HashiCorp fod yn eithaf prin er bod eu cynhyrchion yn wych.

Cromlin ddysgu serth iawn ac nid yw'n ddibwys ei osod.

Mae'r gosodiad cychwynnol yn dipyn o boen. Mae'n werth chweil, serch hynny, a bydd y gymuned yn ei gefnogi'n ddigon da i chi ymdopi.

Dogfennau ofnadwy ond mae llawer o ganllawiau ar-lein gan bobl yn ei osod, ac os rhowch ychydig ohonynt at ei gilydd bydd gennych osodiad sy'n gweithio.

Roedd y gosodiad cychwynnol yn golygu ffidlan gyda'u siartiau helm (vault a consul). Er y gallwch yn dechnegol ddefnyddio llawer o gefnodion eraill, nid wyf yn ei argymell o gwbl. Gall y pen ôl/consul fod yn fach iawn os nad oes gennych lawer o ddata i'w storio.

Ymgyfarwyddwch yn bendant â defnyddio'r CLI, oherwydd mae'r GUI yn debycach i brawf cysyniad/porth hysbysebu ar gyfer eu rhifyn menter.

Mae'r ffaith na allwch "ei lenwi" yn unig yn boen. Er enghraifft, os oes gennych 5 maes, mae'n rhaid i chi ychwanegu pob maes â llaw ar gyfer pob eitem. Felly nid yw fel eich bod yn rhagddiffinio meysydd ar gyfer categori penodol, ac yn llenwi'r meysydd hynny ar gyfer pob eitem yn y categori hwnnw, mae'n debycach i "rydych yn cynhyrchu popeth bob tro", sydd (yn fy meddwl i) yn boen yn y pen ôl.

Efallai yr hoffech edrych ar goldfish hefyd fel rhyngwyneb defnyddiwr ar ben vault. Mae'n ei gwneud hi'n eithaf braf cael eich tîm ar fwrdd. Mae ganddynt arddangosiad hefyd. 1. Gosod consul. 2. Gosod vault yn pwyntio at consul. 3. Gosod goldfish yn pwyntio at vault. 3. Gosod rhyw swydd cron i redeg consul snapshot ar gyfer copïau wrth gefn.



### LastPass

LastPass Teams. Rydym yn ei ddefnyddio, mae ganddo dempledi wedi'u teilwra, ACL, dim byd ar goll yn fy marn i.

Gweithredais LastPass yn fy sefydliad a rhoi C+/B- iddo. Y broblem fwyaf yn ddiweddar yw diffyg dibynadwyedd. Yn y 90 diwrnod diwethaf mae wedi bod sawl awr lle gorfodwyd claddgelloedd i'r modd all-lein. Nid yw hyn yn ddelfrydol i'm sefydliad oherwydd bod gennym, yn llythrennol, dros 4,000 o gyfrineiriau wedi'u storio ar draws dros 20 o ffolderi a rennir. Fel y gallwch ddychmygu gyda chymaint o gyfrineiriau mae o leiaf ychydig yn cael eu diweddaru neu eu hychwanegu bob dydd. Mae gennym gynllun adfer ar ôl trychineb os bydd problemau'n para mwy nag awr neu ddwy: mae sgript yn llofnodi ac yn amgryptio dymp CSV o'r gladdgell bob nos y gellir ei fewnforio i keepass.

Mae LastPass wedi cael cyfnodau o wasanaeth gwanychol heb adrodd amdanynt: mae mewngofnodi'n 'gweithio' ond nid yw'n tynnu gwefannau, mae nodweddion ar hap wedi torri yn y panel gweinyddu, ac nid yw'n rhannu allweddi'n iawn ar gyfer ffolderi newydd a rennir ar y lefel uchaf. Mae gennyf ddefnyddiwr penodol 'gwthio allweddi'/copi wrth gefn sydd ym mhob grŵp. Fel arfer bydd mewngofnodi fel y defnyddiwr hwnnw'n trwsio unrhyw broblemau rhannu allweddi, ond nid pan fo'r gwasanaeth wedi'i wanychu, beth bynnag y mae'r dudalen statws yn ei ddweud...

O ran integreiddio, gall fod yn hawdd os oes gennych ACLau priodol gyda model breintiau lleiaf e.e. os oes gan ddefnyddiwr ganiatâd darllen ac ysgrifennu a darllen yn unig ar gofnod neu ffolder, dim ond caniatâd darllen yn unig a gânt. Yn anffodus nid yw ACLau fy sefydliad ar eu gorau, felly defnyddiais yr API darparu JSON a ~500 llinell o python oherwydd nad yw natur ddibynnol ein cannoedd o ACLau yn mapio'n dda i'r model breintiau lleiaf. Yn y pen draw cefais yr holl ACLau yr oedd defnyddiwr ynddynt a gwneud rhyw fath o daith drwy'r dibyniaethau.

Os yw eich strwythur ACL neu grwpiau eisoes wedi'i adeiladu gyda strwythur breintiau lleiaf mewn golwg, bydd yr offeryn cysoni AD/LDAP ar gyfer Windows yn gweithio'n dda.

Cysylltwch â'u tîm gwerthu a gallant drefnu treial Menter hirach i chi. Gwnewch yn siŵr eich bod yn deall ei gyfyngiadau'n llawn cyn tynnu'r glicied. Cawsom lawer o boenau tyfu ond ar wahân i doriadau neu wanychu ar ochr y gweinydd mae wedi bod yn hynod o esmwyth.


### Bitwarden

Mae gan Bitwarden offer braf o'i gwmpas (rhyngwyneb gwe, CLI, symudol, bwrdd gwaith). Wedi'i letya gennych chi eich hun ac yn eithaf hawdd i'w osod. Dogfennaeth eithaf da ac offeryn a argymhellir gan PrivacyTools.


### EnvKey

Mae https://www.envkey.com/ yn saas. Yn wirioneddol hawdd i'w weithredu, ei integreiddio a'i reoli.

Nodweddion:

  * Diogelu allweddi API a manylion mewngofnodi.

  * Cadw ffurfweddiad wedi'i gysoni ym mhobman.

  * Rheoli ffurfweddiad a chyfrinachau clyfar, wedi'u hamgryptio o'r dechrau i'r diwedd. 

  * Atal rhannu anniogel a gwasgariad ffurfweddiad. 

  * Integreiddio mewn munudau.

Galluoedd:

  * Rheoli ffurfweddiad a lefelau mynediad ar gyfer eich holl apiau, amgylcheddau a thimau mewn un lle.

  * Ffurfweddu unrhyw amgylchedd datblygu neu weinydd gydag un newidyn amgylchedd yn unig.

Manteision:

  * Hafan dda.

  * Cynnig gwerth clir.

  * Ap gwe rhagorol yn weledol.

  * Data enghreifftiol gwych e.e. Algolia, AWS, Datadog, GitHub, Stripe, ac ati.

  * Siaradais â'r sylfaenydd am 30 munud am y cwmni, y rhyngwyneb defnyddiwr, ac ati. Mae Dane'n swnio'n wybodus, yn onest am y manteision/anfanteision, ac yn bartner dichonadwy.

  * Yn y bôn, mae'r cwmni'n gwmni Y Combinator nodweddiadol, gydag 1 sylfaenydd. Cododd $120K ym mis Ionawr 2018.

  * Y ffocws yw cyrraedd nodweddion menter, yn enwedig symud o letya cwmwl EnvKey i naill ai ar y safle neu BYOC.

  * Llwybr posibl ymlaen gan ddechrau gydag EnvKey er mwyn rhwyddineb defnydd, yna'n ddiweddarach (neu'n gyfochrog) ychwanegu Vault. 


### Confidant by Lyft

https://lyft.github.io/confidant/

Gwasanaeth rheoli cyfrinachau ffynhonnell agored yw Confidant sy'n darparu storio a mynediad hawdd i ddefnyddwyr at gyfrinachau mewn modd diogel, gan ddatblygwyr yn Lyft.

Dilysu KMS: Mae Confidant yn datrys y broblem dilysu "iâr ac wy" drwy ddefnyddio AWS KMS ac IAM i ganiatáu i rolau IAM gynhyrchu tocynnau dilysu diogel y gall Confidant eu gwirio. Mae Confidant hefyd yn rheoli grantiau KMS ar gyfer eich rolau IAM, sy'n caniatáu i'r rolau IAM gynhyrchu tocynnau y gellir eu defnyddio ar gyfer dilysu o wasanaeth i wasanaeth, neu i basio negeseuon wedi'u hamgryptio rhwng gwasanaethau.

Amgryptio wrth orffwys cyfrinachau wedi'u fersiynu: Mae Confidant yn storio cyfrinachau mewn ffordd ychwanegu-yn-unig yn DynamoDB, gan gynhyrchu allwedd data KMS unigryw ar gyfer pob adolygiad o bob cyfrinach, gan ddefnyddio cryptograffeg ddilysedig gymesur Fernet.

Rhyngwyneb gwe hawdd ei ddefnyddio i reoli cyfrinachau: Mae Confidant yn darparu rhyngwyneb gwe AngularJS sy'n caniatáu i ddefnyddwyr terfynol reoli cyfrinachau'n hawdd, mapiadau cyfrinachau i wasanaethau a hanes newidiadau.


### Devolutions Password Server

https://server.devolutions.net/

Diogelu, rheoli a monitro mynediad at gyfrifon a sesiynau breintiedig.

Claddgell gyfrineiriau gynhwysfawr, hynod ddiogel sy'n eich galluogi i reoli mynediad at eich cyfrifon breintiedig, gan wella gwelededd cyffredinol y rhwydwaith i weinyddwyr systemau a darparu profiad di-dor i ddefnyddwyr terfynol.

Nodweddion: claddgell gyfrineiriau sefydliad ganolog, claddgell breifat ar gyfer defnyddwyr penodol, rheolwr cyfrineiriau, chwistrellu manylion mewngofnodi,
integreiddio ag Active Directory, rheolaeth mynediad sy'n seiliedig ar rolau, dilysu dau ffactor, yn barod ar gyfer menter, cyfyngiadau IP, galluoedd rheoli, cynhyrchydd cyfrineiriau awtomataidd, mynediad ap symudol, hanes cyfrineiriau, adroddiadau mynediad, rhybuddion e-bost.

  * yn cefnogi amgryptio data

  * yn cefnogi sawl cynllun dilysu gan gynnwys LDAP, O365, a defnyddwyr Lleol GYDA chefnogaeth i MFA o sawl ffynhonnell

  * sawl ystorfa/claddgell gyda rheolaethau mynediad manwl ar gyfer sawl tîm

  * rhyngwyneb gwe modern

  * claddgelloedd manylion mewngofnodi a chysylltiadau preifat ar gyfer manylion/cysylltiadau personol

  * apiau symudol ar gyfer iOS/Android

  * logiau archwilio ar gyfer pob cofnod, pwy/beth/pryd gydag anogwr dewisol ar gyfer pam eu bod yn cyrchu

  * templedi y gellir eu haddasu (er eu bod yn cefnogi cannoedd o fathau o gysylltiadau yn frodorol)

  * llwythi o nodweddion eraill a chleient trwm Windows/Mac (Remote Desktop Manager) y gallwch gysoni ag ef sy'n ehangu'r opsiynau'n fawr...cysylltiadau un clic

  * nid yw'r prisio'n ddrwg o gwbl - hyd at 15 defnyddiwr mae'n $500 y flwyddyn ar gyfer y gweinydd cyfrineiriau


### Secret Server by Thycotic

https://thycotic.com/products/secret-server/

Nodweddion y fersiwn ar y safle: 

  * Rheolaeth lwyr dros eich systemau diogelwch a'ch seilwaith o'r dechrau i'r diwedd

  * Gosod y feddalwedd o fewn eich canolfan ddata ar y safle neu eich enghraifft eich hun o rwydwaith preifat rhithwir

  * Bodloni rhwymedigaethau cyfreithiol a rheoleiddiol sy'n gofyn i'r holl ddata a systemau fod ar y safle

Nodweddion y fersiwn cwmwl:

  * Model meddalwedd fel gwasanaeth sy'n eich galluogi i gofrestru a dechrau ar unwaith

  * Graddadwyedd elastig wrth i chi dyfu

  * Rheolaethau a diswyddiad a ddarperir gan Azure gyda SLA amser gweithredu o 99.9%

Adborth defnyddwyr:

  * Roeddem yn arfer defnyddio'r cynnyrch hwnnw. Roedd mor hawdd ei osgoi a dim ond i bobl glyfar y mae'r rheolau'n gweithio. Gall defnyddwyr diog neu dwp ei gamddefnyddio'n hawdd mewn ardal tîm. Mae prisiau'n agored i drafodaeth pan fyddwch yn siarad â nhw.

  * Gallwch ei redeg gan ddefnyddio SQL express a blwch Win 7. 

  * Rhad.
