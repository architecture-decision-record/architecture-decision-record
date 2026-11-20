## Cofnod penderfyniad saernïaeth: fframwaith awtomeiddio porwr ar gyfer profi E2E (Playwright neu Selenium)

### 1. **Cyd-destun**

Rydym wrthi'n dewis fframwaith awtomeiddio porwr ar gyfer ein piblinell profi o'r dechrau i'r diwedd (E2E). Bydd y fframwaith hwn yn rhan annatod o'n prosesau CI/CD, gan redeg profion sy'n efelychu rhyngweithiadau defnyddwyr go iawn ar ein platfform. Yn benodol, bydd y profion yn cwmpasu senarios fel cofrestru/mewngofnodi defnyddwyr, uwchlwytho ffeiliau, rhyngweithiadau â'r dangosfwrdd, a lawrlwytho adroddiadau.

Fel **cwmni newydd**, mae ein ffocws ar **ddatblygu ystwyth**, gyda'r angen i ailadrodd ac esblygu'n gyflym. Mae ein tîm yn gweithio'n bennaf gyda **TypeScript** a **Python**, ac mae'r gallu i ysgrifennu profion yn yr ieithoedd hyn yn hanfodol. Yn ogystal, mae'r platfform yn cynnwys **siartiau a dangosfyrddau rhyngweithiol**, sy'n ei gwneud hi'n hollbwysig bod yr offeryn awtomeiddio yn cefnogi rhyngwynebau cyfoethog, deinamig yn dda.

Y ddau ymgeisydd ar gyfer y dasg hon yw **Playwright** a **Selenium**, ac mae gan bob un ei gryfderau a'i gyfaddawdau. Mae angen i ni werthuso'r fframweithiau hyn ar sail y nodweddion a'r gofynion a amlinellir isod.

### 2. **Dewisiadau a ystyriwyd**

- **Playwright** (gan Microsoft)
- **Selenium** (gan Brosiect Selenium)

### 3. **Ysgogwyr y penderfyniad**

Y ffactorau sy'n dylanwadu ar ein penderfyniad yw:

1. **Datblygu ystwyth**: Rhaid i'r offeryn a ddewisir alluogi cylchoedd datblygu cyflym a hyblyg.
2. **Cefnogaeth i ieithoedd**: Mae ein tîm angen cefnogaeth i **TypeScript** a **Python**.
3. **Profi rhyngwyneb defnyddiwr rhyngweithiol**: Mae'r gallu i brofi siartiau rhyngweithiol, dangosfyrddau ac elfennau deinamig yn ddibynadwy yn hanfodol.
4. **Cyflymder amser rhedeg**: Er nad yw'n brif bryder, mae perfformiad mewn piblinellau CI/CD yn ystyriaeth.
5. **Graddadwyedd**: Nid ydym yn cynllunio ar gyfer graddio enfawr yn y dyfodol agos, ond rydym am sicrhau y gall yr ateb ymdopi â thwf yn y dyfodol.
6. **Cydweddoldeb tuag yn ôl**: Nid yw systemau etifeddol na chydweddoldeb â phorwyr hŷn yn hanfodol i'n prosiect ar hyn o bryd.
7. **Profi ar ddyfeisiau symudol**: Er nad yw'n ffocws uniongyrchol, dylai'r fframwaith allu profi nodweddion sy'n ymateb i ddyfeisiau symudol neu fod yn estynadwy ar gyfer achosion defnydd o'r fath.
8. **Profi aml-fonitor**: Mae cefnogaeth i gyfluniadau aml-fonitor yn ofyniad eilaidd, yn enwedig os byddwn yn graddio yn y dyfodol i brofi llifoedd gwaith defnyddwyr mwy cymhleth.
9. **Profi uwchlwytho ffeiliau**: Rhaid i'r fframwaith ymdrin ag uwchlwytho ffeiliau'n effeithlon, sy'n ofyniad craidd i'n hanghenion profi.

### 4. **Meini prawf gwerthuso**

- **Rhwyddineb defnydd**: Pa mor hawdd yw ysgrifennu a chynnal profion?
- **Cefnogaeth i ieithoedd**: A yw'r fframwaith yn cefnogi TypeScript a Python, y ddwy iaith y mae ein tîm yn eu defnyddio amlaf?
- **Profi rhyngwyneb defnyddiwr rhyngweithiol**: Pa mor dda y mae'r fframwaith yn ymdrin â rhyngwynebau defnyddiwr rhyngweithiol cymhleth fel siartiau, uwchlwytho ffeiliau a data deinamig?
- **Integreiddio â CI/CD**: Pa mor dda y mae'r fframwaith yn integreiddio ag offer a gwasanaethau CI/CD cyffredin?
- **Cefnogaeth traws-borwr**: Pa borwyr a gefnogir a pha mor dda y maent yn perfformio?
- **Perfformiad a chyflymder**: Pa mor gyflym y mae profion yn rhedeg, yn enwedig mewn piblinell CI/CD?
- **Graddadwyedd**: Pa mor dda y gall y fframwaith raddio os ychwanegir mwy o brofion neu senarios mwy cymhleth?
- **Cymuned ac ecosystem**: Pa mor weithgar yw cymuned y fframwaith? A oes digon o integreiddiadau ac estyniadau ar gael?

### 5. **Ystyriaethau**

#### 5.1 **Playwright**

##### **Manteision**:
1. **API clyfrach ar gyfer uwchlwytho ffeiliau lleol**: Mae API Playwright ar gyfer rhyngweithio â ffeiliau lleol a chyflawni uwchlwytho ffeiliau yn symlach ac yn fwy greddfol. Byddai hyn yn ei gwneud hi'n haws gweithredu a chynnal profion uwchlwytho ffeiliau.
2. **Cystrawen a chynhyrchu cod**: Mae gan Playwright gystrawen fyrrach a mwy cryno. Mae hyn yn arwain at lai o god safonol, sy'n gwella cynaliadwyedd ac effeithlonrwydd datblygwyr. Yn ogystal, mae'r gystrawen fyrrach hon yn gwella ansawdd cynhyrchu cod OpenAI, gan ei gwneud hi'n haws cynhyrchu sgriptiau prawf yn awtomatig.
3. **Profi rhyngwyneb defnyddiwr rhyngweithiol**: Mae Playwright yn rhagori ar brofi cymwysiadau gwe deinamig, rhyngweithiol, fel y rhai â siartiau cyfoethog, rhyngweithiadau defnyddwyr cymhleth, a diweddariadau amser real. Mae'n ymdrin yn effeithiol iawn â WebSockets, WebRTC, DOMau cysgodol, a thechnolegau gwe modern eraill.
4. **Cefnogaeth traws-borwr**: Mae Playwright yn cefnogi **Chromium**, **WebKit**, a **Firefox**. Mae ganddo berfformiad cyson ar draws y porwyr hyn, a ddylai gwmpasu'r rhan fwyaf o'n hanghenion profi.
5. **Integreiddio â CI/CD**: Mae Playwright yn integreiddio'n ddi-dor â llwyfannau CI/CD modern (GitHub Actions, Jenkins, ac ati). Gall redeg profion yn gyfochrog ar draws gwahanol borwyr, gan optimeiddio amseroedd rhedeg profion a'i wneud yn addas ar gyfer datblygu cyflym.
6. **Cyflym a dibynadwy**: Mae Playwright yn gyflymach na Selenium yn gyffredinol, yn enwedig yn y modd di-ben (headless), ac yn fwy gwydn wrth ymdrin ag elfennau gwe anghydamserol.

##### **Anfanteision**:
1. **Profi cyfyngedig ar ddyfeisiau symudol**: Er bod Playwright yn cefnogi efelychu dyfeisiau symudol ar gyfer porwyr, nid oes ganddo alluoedd profi symudol brodorol fel integreiddio Selenium ag Appium ar gyfer profi symudol go iawn.
2. **Ecosystem lai**: Mae Playwright yn dal yn newyddach ac yn llai sefydledig na Selenium. Er bod ganddo gymuned sy'n tyfu'n gyflym a dogfennaeth dda, efallai nad oes ganddo eto'r ecosystem enfawr o ategion ac integreiddiadau y mae Selenium yn eu cynnig.
3. **Cefnogaeth gyfyngedig i borwyr**: Er bod Playwright yn cwmpasu'r prif borwyr modern (Chrome, Safari, Firefox), nid yw ei gefnogaeth i borwyr etifeddol (e.e., Internet Explorer) mor gadarn â chefnogaeth Selenium.

#### 5.2 **Selenium**

##### **Manteision**:
1. **Hanes hirach ac aeddfedrwydd**: Mae Selenium wedi bodoli ers amser maith ac mae ganddo hanes profedig. Fe'i defnyddir yn eang gan lawer o dimau a diwydiannau, sydd wedi arwain at ecosystem enfawr o ategion, integreiddiadau ac adnoddau.
2. **Cefnogaeth traws-borwr a thraws-lwyfan**: Mae Selenium yn cefnogi **amrywiaeth eang o borwyr** a fersiynau, gan gynnwys **Internet Explorer**, a gellir ei integreiddio hefyd ag offer amrywiol fel **Docker**, **Selenium Grid**, a **gwasanaethau cwmwl** ar gyfer profi dosbarthedig.
3. **Profi ar ddyfeisiau symudol**: Mae Selenium, drwy ei integreiddio ag **Appium**, yn llawer mwy cadarn ar gyfer profi symudol, gan gynnwys cymwysiadau Android ac iOS. Mae hyn yn ei wneud y dewis gwell ar gyfer prosiectau sy'n canolbwyntio ar ddyfeisiau symudol yn gyntaf neu'n drwm.
4. **Profi aml-fonitor**: Mae Selenium yn darparu gwell cefnogaeth ar gyfer senarios sy'n cynnwys **monitorau lluosog** neu ryngweithiadau aml-ffenestr cymhleth.

##### **Anfanteision**:
1. **Cymhlethdod**: Mae API Selenium yn fwy geiriog ac eglur. Er y gall hyn fod yn fantais mewn rhai achosion, mae'n golygu mwy o god i'w ysgrifennu a'i gynnal, a all leihau ystwythder datblygwyr—sy'n arbennig o bwysig mewn amgylchedd cwmni newydd.
2. **Perfformiad**: Yn gyffredinol mae Selenium yn rhedeg yn arafach na Playwright, yn enwedig yn y modd di-ben. Gallai hyn effeithio ar biblinellau CI/CD, yn enwedig wrth i nifer y profion dyfu.
3. **Profi rhyngwyneb defnyddiwr rhyngweithiol**: Nid yw Selenium mor llyfn â Playwright wrth brofi rhyngwynebau defnyddiwr gwe modern, rhyngweithiol, yn enwedig gyda siartiau a diweddariadau data amser real. Mae angen mwy o osod a thrin i ryngweithio'n ddibynadwy â chynnwys deinamig.

### 6. **Crynodeb o'r gymhariaeth**

| Nodwedd                          | Playwright                                    | Selenium                                   |
|-----------------------------------|-----------------------------------------------|-------------------------------------------|
| **Rhwyddineb defnydd**            | Cystrawen fyrrach, mwy greddfol ar gyfer rhyngwynebau defnyddiwr modern | Mwy eglur, angen mwy o god safonol  |
| **Cefnogaeth i ieithoedd**        | TypeScript, Python, JavaScript                | TypeScript, Python, Java, Ruby, C#        |
| **Profi rhyngwyneb defnyddiwr rhyngweithiol** | Rhagorol ar gyfer rhyngwynebau deinamig, amser real | Yn ymdrin â rhyngwynebau sylfaenol, ond yn fwy geiriog a chymhleth ar gyfer rhyngweithiadau cyfoethog |
| **Profi uwchlwytho ffeiliau**     | API clyfrach ar gyfer uwchlwytho ffeiliau     | API mwy geiriog, llai greddfol         |
| **Integreiddio â CI/CD**          | Integreiddio hawdd â GitHub Actions, Jenkins  | Integreiddio cryf â llawer o offer CI    |
| **Profi ar ddyfeisiau symudol**   | Cyfyngedig, efelychu yn unig                  | Cefnogaeth lawn drwy Appium               |
| **Cefnogaeth traws-borwr**        | Chromium, WebKit, Firefox                     | Cefnogaeth lawn ar draws y prif borwyr a rhai etifeddol |
| **Perfformiad**                   | Cyflym, wedi'i optimeiddio ar gyfer profi di-ben | Arafach, yn enwedig yn y modd di-ben   |
| **Profi aml-fonitor**             | Cyfyngedig                                    | Cefnogaeth dda i drefniadau aml-fonitor  |
| **Cymuned ac ecosystem**          | Yn tyfu, dogfennaeth dda                      | Mawr, aeddfed, ecosystem eang            |

### 7. **Penderfyniad**

Ar ôl ystyried y gofynion a'r cyfaddawdau, **Playwright** yw'r dewis gwell ar gyfer ein hanghenion presennol. Mae ei API clyfrach ar gyfer profi uwchlwytho ffeiliau lleol, ei gystrawen gryno, a'i gefnogaeth gref i brofi rhyngwynebau defnyddiwr rhyngweithiol yn ei wneud yn ffit delfrydol ar gyfer ein cylch datblygu ystwyth. Mae'r ffaith ei fod yn cefnogi **TypeScript** a **Python** yn hanfodol i'n tîm, a bydd dull modern y fframwaith o brofi yn ein galluogi i ysgrifennu cod glân, cynaliadwy.

Er bod **Selenium** yn parhau i fod yn offeryn gwych, yn enwedig ar gyfer profi symudol, cefnogaeth i borwyr etifeddol, a threfniadau aml-fonitor, mae'n llai addas i'n hanghenion presennol. Mae ei eiriogrwydd, ei berfformiad arafach, a'i ffordd fwy cymhleth o drin rhyngwynebau defnyddiwr deinamig fel siartiau yn ei wneud yn llai optimaidd ar gyfer ein hachos defnydd.

### 8. **Canlyniadau**

- **Gweithred ar unwaith**: Byddwn yn mabwysiadu **Playwright** ar gyfer ein profion E2E, gan ganolbwyntio ar brofi llifoedd defnyddwyr sy'n ymwneud â chofrestru, mewngofnodi, uwchlwytho ffeiliau, dangosfyrddau, a lawrlwytho adroddiadau.
- **Ystyriaethau hirdymor**: Byddwn yn cadw llygad ar ecosystem Playwright sy'n esblygu. Os bydd ein hanghenion yn newid, yn enwedig o ran profi symudol neu gefnogaeth i borwyr etifeddol, efallai y byddwn yn ailystyried Selenium.
- **Hyfforddiant a dogfennaeth**: Bydd angen i'r timau datblygu ymgyfarwyddo ag API Playwright, yn enwedig ar gyfer trin rhyngwynebau defnyddiwr deinamig ac uwchlwytho ffeiliau.
- **Mudo**: Bydd profion Selenium presennol (os oes rhai) yn cael eu mudo'n raddol i Playwright.

### 9. **Ystyriaethau ar gyfer y dyfodol**
