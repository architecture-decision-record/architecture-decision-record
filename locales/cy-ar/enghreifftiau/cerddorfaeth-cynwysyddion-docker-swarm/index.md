# Cofnod penderfyniad saernïaeth: cerddorfaeth cynwysyddion Docker Swarm

Rhif y penderfyniad: 001

Y penderfynwr: [Eich enw neu eich swydd]

Dyddiad: [Dyddiad y penderfyniad]

## Cyd-destun

Rydym yn ystyried gwahanol offer cerddorfaeth cynwysyddion i reoli ein saernïaeth sy'n seiliedig ar ficrowasanaethau. Rydym wedi gwerthuso gwahanol atebion fel Kubernetes, Docker Swarm a Mesosphere DC/OS. Fodd bynnag, rydym wedi penderfynu canolbwyntio ar Docker Swarm oherwydd ei symlrwydd, ei integreiddio â Docker, a'i gydbwyso llwyth adeiledig.

## Penderfyniad

Rydym wedi penderfynu defnyddio Docker Swarm fel ein hofferyn cerddorfaeth cynwysyddion. Mae Docker Swarm yn darparu ffordd syml a greddfol o reoli cymwysiadau mewn cynwysyddion ar draws clwstwr o nodau. Mae hefyd yn caniatáu i ni fanteisio ar ein llifoedd gwaith a'n seilwaith presennol sy'n seiliedig ar Docker. Gyda Docker Swarm, gallwn gyflwyno, graddio a rheoli ein cymwysiadau'n hawdd, gan fanteisio ar gydbwyso llwyth adeiledig ar yr un pryd.

## Manteision

- **Symlrwydd:**  Mae Docker Swarm yn dilyn yr un egwyddorion â Docker, felly nid oes angen dysgu technoleg newydd. Mae'r gromlin ddysgu yn gymharol fas i ddatblygwyr sy'n gyfarwydd â Docker.

- **Integreiddio:**  Mae Docker Swarm yn integreiddio'n ddi-dor ag offer Docker, fel Docker Compose, sy'n ei gwneud hi'n haws rheoli ein holl gynwysyddion a gwasanaethau o un lle.

- **Cydbwyso llwyth:**  Mae Docker Swarm yn darparu cydbwyso llwyth adeiledig, gan sicrhau bod ein cymwysiadau ar gael bob amser a'u bod wedi'u dosbarthu'n gyfartal ar draws y clwstwr.

- **Graddadwyedd:**  Mae Docker Swarm yn ei gwneud hi'n hawdd graddio ein cymwysiadau'n llorweddol drwy ychwanegu neu ddileu nodau o'r clwstwr.

- **Argaeledd uchel:**  Mae Docker Swarm yn dosbarthu ein gwasanaethau ar draws nodau yn awtomatig, gan ddarparu argaeledd uchel os bydd nod yn methu.

## Risgiau

- **Ymarferoldeb cyfyngedig:**  Efallai y bydd Docker Swarm yn brin o rai o'r nodweddion uwch a geir yn Kubernetes neu Mesosphere DC/OS, fel graddio awtomatig neu hunan-iacháu.

- **Canolbwyntio ar Docker:**  Mae Docker Swarm wedi'i gysylltu'n dynn â Docker, a all gyfyngu ar ein hyblygrwydd os bydd angen i ni symud i ffwrdd o atebion sy'n seiliedig ar Docker.

- **Anaeddfedrwydd:**  Mae Docker Swarm yn dechnoleg gymharol newydd o hyd, ac efallai y bydd rhai problemau sefydlogrwydd neu fylchau yn y ddogfennaeth.

## Dewisiadau amgen

- **Kubernetes:**  Kubernetes yw'r platfform cerddorfaeth cynwysyddion a ddefnyddir fwyaf eang ac mae'n darparu nodweddion uwch ac ecosystem fwy aeddfed. Fodd bynnag, mae ganddo gromlin ddysgu fwy serth ac efallai ei fod yn ormod ar gyfer ein hanghenion.

- **Mesosphere DC/OS:**  Mae Mesosphere DC/OS yn offeryn grymus sy'n darparu nodweddion uwch fel cefnogaeth aml-gwmwl a galluoedd platfform data mawr a deallusrwydd artiffisial brodorol. Fodd bynnag, mae angen arbenigedd sylweddol i'w weithredu ac efallai ei fod yn rhy gymhleth ar gyfer ein gofynion.

## Casgliad

Ar ôl ystyried yn ofalus, rydym wedi penderfynu defnyddio Docker Swarm fel ein hofferyn cerddorfaeth cynwysyddion. Mae Docker Swarm yn darparu'r symlrwydd, yr integreiddio a'r cydbwyso llwyth adeiledig sydd eu hangen arnom i reoli ein cymwysiadau mewn cynwysyddion. Er y gallai fod yn brin o rai nodweddion uwch, credwn fod manteision Docker Swarm yn drech na'i risgiau ar gyfer ein gofynion presennol.

<h6>Cydnabyddiaeth: cynhyrchwyd y dudalen hon gan ChatGPT, yna fe'i golygwyd er eglurder a fformat.</h6>
