# Proses cofnodion penderfyniadau saernïaeth AWS

https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html

Dogfen sy'n disgrifio dewis y mae'r tîm yn ei wneud ynghylch agwedd arwyddocaol ar y saernïaeth feddalwedd y maent yn bwriadu ei hadeiladu yw cofnod penderfyniad saernïaeth (ADR). Mae pob ADR yn disgrifio'r penderfyniad ynghylch saernïaeth, ei gyd-destun a'i ganlyniadau. Mae gan ADRau gyflyrau ac felly maent yn dilyn cylch oes. I gael enghraifft o ADR, gweler yr atodiad.

Mae proses yr ADR yn cynhyrchu casgliad o gofnodion penderfyniadau saernïaeth. Mae'r casgliad hwn yn creu'r log penderfyniadau. Mae'r log penderfyniadau yn rhoi cyd-destun y prosiect yn ogystal â gwybodaeth fanwl am weithredu a dylunio. Mae aelodau'r prosiect yn pori trwy benawdau pob ADR i gael trosolwg o gyd-destun y prosiect. Maent yn darllen yr ADRau i ymchwilio'n ddwfn i weithrediadau a dewisiadau dylunio'r prosiect.

Pan fydd y tîm yn derbyn ADR, mae'n dod yn ddigyfnewid. Os bydd mewnwelediadau newydd yn galw am benderfyniad gwahanol, mae'r tîm yn cynnig ADR newydd. Pan fydd y tîm yn derbyn yr ADR newydd, mae'n disodli'r ADR blaenorol.

## Cwmpas proses yr ADR

Dylai aelodau'r prosiect greu ADR ar gyfer pob penderfyniad sylweddol o ran saernïaeth sy'n effeithio ar y prosiect neu'r cynnyrch meddalwedd, gan gynnwys y canlynol (Richards a Ford 2020):

* Strwythur (er enghraifft, patrymau fel microwasanaethau)

* Gofynion anweithredol (diogelwch, argaeledd uchel a goddefgarwch diffygion)

* Dibyniaethau (cypledd cydrannau)

* Rhyngwynebau (APIau a chontractau cyhoeddedig)

* Technegau adeiladu (llyfrgelloedd, fframweithiau, offer a phrosesau)

* Gofynion gweithredol ac anweithredol yw mewnbynnau mwyaf cyffredin proses yr ADR.


## Cynnwys ADR

Pan fydd y tîm yn nodi bod angen ADR, mae aelod o'r tîm yn dechrau ysgrifennu'r ADR ar sail templed ar gyfer y prosiect cyfan. (Gweler sefydliad ADR ar GitHub am dempledi enghreifftiol.) Mae'r templed yn symleiddio'r gwaith o greu ADR ac yn sicrhau bod yr ADR yn cofnodi'r holl wybodaeth berthnasol. O leiaf, dylai pob ADR ddiffinio cyd-destun y penderfyniad, y penderfyniad ei hun, a chanlyniadau'r penderfyniad i'r prosiect a'i gynhyrchion. (I gael enghreifftiau o'r adrannau hyn, gweler yr atodiad.) Un o agweddau mwyaf grymus strwythur yr ADR yw ei fod yn canolbwyntio ar y rheswm dros y penderfyniad yn hytrach na sut y gweithredodd y tîm ef. Mae deall pam y gwnaeth y tîm y penderfyniad yn ei gwneud hi'n haws i aelodau eraill o'r tîm ei fabwysiadu, ac yn atal penseiri eraill nad oeddent yn rhan o'r broses benderfynu rhag gwrthdroi'r penderfyniad hwnnw yn y dyfodol.


## Proses fabwysiadu ADR

Gall pob aelod o'r tîm greu ADR, ond dylai'r tîm sefydlu diffiniad o berchnogaeth ar gyfer ADR. Dylai pob awdur sy'n berchen ar ADR gynnal a chyfleu cynnwys yr ADR yn weithredol. I egluro'r berchnogaeth hon, mae'r canllaw hwn yn cyfeirio at awduron ADR fel perchnogion ADR yn yr adrannau canlynol. Gall aelodau eraill o'r tîm gyfrannu at ADR bob amser. Os bydd cynnwys ADR yn newid cyn i'r tîm dderbyn yr ADR, dylai'r perchennog gymeradwyo'r newidiadau hyn.

Ar ôl i'r tîm nodi penderfyniad ynghylch saernïaeth a'i berchennog, mae perchennog yr ADR yn darparu'r ADR yn y cyflwr **Arfaethedig** ar ddechrau'r broses. Mae ADRau yn y cyflwr Arfaethedig yn barod i'w hadolygu.

Yna mae perchennog yr ADR yn cychwyn y broses adolygu ar gyfer yr ADR. Nod proses adolygu'r ADR yw penderfynu a yw'r tîm yn derbyn yr ADR, yn penderfynu bod angen ei ailwampio, neu'n ei wrthod. Mae tîm y prosiect, gan gynnwys y perchennog, yn adolygu'r ADR. Dylai'r cyfarfod adolygu ddechrau gyda slot amser penodedig i ddarllen yr ADR. Ar gyfartaledd, dylai 10 i 15 munud fod yn ddigon. Yn ystod yr amser hwn, mae pob aelod o'r tîm yn darllen y ddogfen ac yn ychwanegu sylwadau a chwestiynau i nodi pynciau aneglur. Ar ôl y cyfnod adolygu, mae perchennog yr ADR yn darllen pob sylw yn uchel ac yn ei drafod gyda'r tîm.

Os bydd y tîm yn canfod pwyntiau gweithredu i wella'r ADR, mae cyflwr yr ADR yn aros yn **Arfaethedig**. Mae perchennog yr ADR yn llunio'r camau gweithredu ac, ar y cyd â'r tîm, yn ychwanegu unigolyn sy'n gyfrifol at bob cam gweithredu. Gall pob aelod o'r tîm gyfrannu at y pwyntiau gweithredu a'u datrys. Perchennog yr ADR sy'n gyfrifol am aildrefnu'r broses adolygu.

Gall y tîm hefyd benderfynu gwrthod yr ADR. Yn yr achos hwn, mae perchennog yr ADR yn ychwanegu rheswm dros y gwrthod i atal trafodaethau pellach ar yr un pwnc. Mae'r perchennog yn newid cyflwr yr ADR i **Wedi'i wrthod**.

Os bydd y tîm yn cymeradwyo'r ADR, mae'r perchennog yn ychwanegu stamp amser, fersiwn a rhestr o randdeiliaid. Yna mae'r perchennog yn diweddaru'r cyflwr i **Wedi'i dderbyn**.

Mae ADRau a'r log penderfyniadau y maent yn ei greu yn cynrychioli penderfyniadau a wnaed gan y tîm ac yn rhoi hanes o'r holl benderfyniadau. Mae'r tîm yn defnyddio'r ADRau fel cyfeirnod yn ystod adolygiadau cod a saernïaeth lle bo modd. Yn ogystal â chynnal adolygiadau cod, a chyflawni tasgau dylunio a gweithredu, dylai aelodau'r tîm ymgynghori ag ADRau ar gyfer penderfyniadau strategol ar gyfer y cynnyrch.

Fel arfer da, dylai pob newid meddalwedd fynd drwy adolygiadau gan gymheiriaid a bod angen o leiaf un cymeradwyaeth. Yn ystod yr adolygiad cod, efallai y bydd adolygydd cod yn canfod newidiadau sy'n torri un ADR neu fwy. Yn yr achos hwn, mae'r adolygydd yn gofyn i awdur y newid cod ddiweddaru'r cod, ac yn rhannu dolen i'r ADR. Pan fydd yr awdur yn diweddaru'r cod, caiff ei gymeradwyo gan adolygwyr cymheiriaid a'i uno â'r prif sylfaen cod.


## Proses adolygu ADR

Dylai'r tîm drin ADRau fel dogfennau digyfnewid ar ôl i'r tîm eu derbyn neu eu gwrthod. Mae newidiadau i ADR sy'n bodoli eisoes yn golygu creu ADR newydd, sefydlu proses adolygu ar gyfer yr ADR newydd, a chymeradwyo'r ADR. Os bydd y tîm yn cymeradwyo'r ADR newydd, dylai'r perchennog newid cyflwr yr hen ADR i **Wedi'i ddisodli**.
