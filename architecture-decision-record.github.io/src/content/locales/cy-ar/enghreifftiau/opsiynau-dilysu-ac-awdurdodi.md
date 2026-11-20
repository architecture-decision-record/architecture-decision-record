# Cofnod penderfyniad saernïaeth: opsiynau dilysu ac awdurdodi

<!--

Anogwr ChatGPT:

Explain web application authentication authorization. 

Describe:  OAuth, OpenID Connect, SAML, WS-Federation, LDAP, Social SSO Providers.

-->

Mae dilysu ac awdurdodi cymwysiadau gwe yn ddau gysyniad hanfodol wrth ddiogelu mynediad at gymwysiadau a gwasanaethau. Mae'r ddau yn ymwneud â hunaniaeth defnyddwyr a sut y rhoddir caniatâd, ond maent yn canolbwyntio ar wahanol agweddau:

- **Dilysu** yw'r broses o wirio hunaniaeth defnyddiwr neu system.
- **Awdurdodi** yw'r broses o benderfynu pa adnoddau neu gamau gweithredu y gall y defnyddiwr neu'r system a ddilyswyd eu cyrchu.

Nawr, gadewch i ni blymio i'r protocolau a'r technolegau penodol a grybwyllwyd gennych, sy'n cael eu defnyddio'n gyffredin mewn cymwysiadau gwe modern i reoli dilysu ac awdurdodi.

### 1. **OAuth (Open Authorization)**

Safon agored ar gyfer awdurdodi yw **OAuth**. Mae'n caniatáu i ddefnyddiwr roi mynediad cyfyngedig i gymhwysiad trydydd parti at ei adnoddau heb rannu ei fanylion mewngofnodi. Y syniad allweddol yw **mynediad dirprwyedig**. Defnyddir OAuth yn aml mewn sefyllfaoedd lle gall defnyddwyr fewngofnodi i wasanaeth trydydd parti (e.e., mewngofnodi gyda Google) heb ddarparu eu henw defnyddiwr a'u cyfrinair yn uniongyrchol i'r trydydd parti.

- **Llif**: Fel arfer mae OAuth yn dilyn llif **sy'n seiliedig ar docynnau**, lle mae gweinydd awdurdodi yn cyhoeddi tocyn mynediad i'r cymhwysiad trydydd parti. Mae'r tocyn hwn yn cynrychioli caniatâd y defnyddiwr, ac mae'r cymhwysiad yn ei ddefnyddio i gyrchu data neu adnoddau'r defnyddiwr o API.
- **Enghraifft**: Mae defnyddiwr yn mewngofnodi i ap trydydd parti gan ddefnyddio ei gyfrif Google. Mae Google yn gwirio hunaniaeth y defnyddiwr ac yna'n rhoi tocyn sy'n caniatáu i'r ap trydydd parti gyrchu rhywfaint o ddata Google (e.e., Google Calendar).

Nid yw OAuth **yn** ymdrin â dilysu'n uniongyrchol; mae'n ymwneud â rhoi mynediad. Ar gyfer dilysu, caiff OAuth ei baru'n aml â phrotocolau eraill, fel **OpenID Connect**.

### 2. **OpenID Connect (OIDC)**

Haen hunaniaeth wedi'i hadeiladu ar ben **OAuth 2.0** yw **OpenID Connect (OIDC)** sy'n ychwanegu dilysu at alluoedd awdurdodi OAuth. Yn y bôn, mae OpenID Connect yn ymestyn OAuth i ymdrin â **dilysu defnyddwyr** ac yn rhoi ffordd safonol i gymwysiadau wirio hunaniaeth defnyddiwr.

- **Llif**: Pan fydd defnyddiwr yn mewngofnodi gan ddefnyddio OpenID Connect, mae'r cymhwysiad trydydd parti yn gofyn am docyn ID (yn ychwanegol at docyn mynediad OAuth). Mae'r tocyn ID yn cynnwys gwybodaeth am y defnyddiwr (fel ei enw defnyddiwr, ei e-bost, a hawliadau eraill). Mae hyn yn caniatáu i'r cymhwysiad wybod pwy yw'r defnyddiwr ac a yw wedi'i ddilysu.
- **Enghraifft**: Mae mewngofnodi i wasanaeth fel Slack gan ddefnyddio eich cyfrif Google (Google yw'r darparwr OpenID Connect) yn golygu dilysu drwy OpenID Connect, tra bo OAuth yn rheoli'r mynediad at eich adnoddau Google.

Mae OIDC yn ei gwneud hi'n haws i apiau trydydd parti **ddilysu defnyddwyr** gan ganiatáu rheolaeth fanwl o hyd dros ba adnoddau y gall yr apiau hynny eu cyrchu.

### 3. **SAML (Security Assertion Markup Language)**

Safon hŷn, sy'n seiliedig ar XML, yw **SAML** a ddefnyddir i gyfnewid data dilysu ac awdurdodi rhwng partïon, yn enwedig mewn sefyllfaoedd **Mewngofnodi Unigol (SSO)**. Fe'i defnyddir yn bennaf mewn amgylcheddau menter i alluogi defnyddwyr i ddilysu unwaith a chyrchu sawl cymhwysiad heb roi eu manylion mewngofnodi eto.

- **Llif**: Mae'r defnyddiwr yn dilysu yn gyntaf gyda darparwr hunaniaeth (IdP). Mae'r IdP yn cynhyrchu **haeriad SAML** wedi'i lofnodi sy'n cynnwys hunaniaeth y defnyddiwr a phriodoleddau cysylltiedig. Anfonir yr haeriad at y darparwr gwasanaeth (SP), sy'n ei ddefnyddio i awdurdodi mynediad at y cymhwysiad.
- **Enghraifft**: Mae gweithiwr yn mewngofnodi i borth ei gorfforaeth (yr IdP) ac yn cael ei fewngofnodi'n awtomatig i systemau eraill fel e-bost, CRM, ac ati, heb roi ei fanylion mewngofnodi eto. Mae'r broses ddilysu yn seiliedig ar yr haeriad SAML a anfonir gan yr IdP.

Defnyddir SAML yn gyffredin mewn **atebion SSO menter** ac mae'n gweithio'n dda ar gyfer cymwysiadau gwe mewn amgylcheddau corfforaethol, ond mae'n llai cyfeillgar i ddyfeisiau symudol o'i gymharu ag OAuth/OIDC.

### 4. **WS-Federation (Web Services Federation)**

Protocol arall a ddefnyddir ar gyfer **Mewngofnodi Unigol (SSO)** yw **WS-Federation**, yn enwedig mewn amgylcheddau menter sy'n seiliedig ar Microsoft. Mae'n rhan o deulu manylebau **WS-* (Web Services)** ac mae'n caniatáu ffederasiwn hunaniaeth ar draws gwahanol barthau diogelwch (fel rhwng gwahanol sefydliadau neu rhwng gwahanol wasanaethau).

- **Llif**: Mae WS-Federation yn caniatáu i **ddarparwr hunaniaeth y ceir ymddiriedaeth ynddo (IdP)** ddilysu defnyddwyr a chyhoeddi tocynnau y gall y darparwr gwasanaeth eu defnyddio ar gyfer awdurdodi. Mae'n debyg i SAML ond fe'i defnyddir yn aml mewn sefyllfaoedd sy'n dibynnu'n drwm ar dechnolegau Microsoft.
- **Enghraifft**: Mae defnyddiwr yn mewngofnodi i gymhwysiad menter a letyir gan Microsoft Azure Active Directory (AD), a gellir defnyddio ei hunaniaeth i gyrchu gwasanaethau ffederal eraill, gan gynnwys cymwysiadau a letyir gan gyflenwyr trydydd parti.

Er bod protocolau mwy newydd fel OAuth2.0 ac OpenID Connect wedi disodli WS-Federation i raddau helaeth mewn llawer o amgylcheddau gwe modern, mae'n dal i gael ei ddefnyddio mewn systemau etifeddol, yn enwedig mewn mentrau sy'n canolbwyntio ar Microsoft.

### 5. **LDAP (Lightweight Directory Access Protocol)**

Protocol a ddefnyddir i gyrchu a rheoli gwasanaethau cyfeiriadur yw **LDAP**, a ddefnyddir yn gyffredin ar gyfer **storio manylion mewngofnodi defnyddwyr** a rheoli rheolaeth mynediad mewn cyfeiriadur canolog (a elwir yn aml yn **Wasanaeth Cyfeiriadur**). Nid yw LDAP yn ymwneud yn benodol â dilysu nac awdurdodi, ond fe'i defnyddir i storio ac adfer data hunaniaeth, a ddefnyddir wedyn yn y prosesau hynny.

- **Dilysu**: Mae LDAP yn caniatáu i gymhwysiad ddilysu defnyddwyr drwy holi'r gwasanaeth cyfeiriadur am fanylion mewngofnodi (fel cyfrineiriau).
- **Awdurdodi**: Mae hefyd yn rheoli rolau a chaniatâd defnyddwyr, gan helpu i benderfynu a oes gan ddefnyddiwr fynediad at adnoddau penodol.
- **Enghraifft**: Mae llawer o fentrau'n defnyddio cyfeiriaduron sy'n seiliedig ar LDAP (e.e., **Active Directory**) ar gyfer dilysu ac awdurdodi, yn enwedig mewn amgylcheddau Windows.

Mae LDAP yn hanfodol i fentrau reoli mynediad defnyddwyr ar draws systemau mewnol, ond mewn cyd-destun gwe modern, caiff LDAP ei integreiddio'n aml â phrotocolau eraill fel SAML neu OAuth i reoli hunaniaeth yn fwy cyflawn.

### 6. **Darparwyr SSO Cymdeithasol**

Mae darparwyr **Mewngofnodi Unigol (SSO)** cymdeithasol fel **Facebook**, **Google**, **Twitter**, **GitHub**, ac eraill yn caniatáu i ddefnyddwyr ddilysu i gymwysiadau trydydd parti gan ddefnyddio eu manylion mewngofnodi cyfryngau cymdeithasol. Mae hwn yn fath o **ddilysu sy'n seiliedig ar OAuth** lle'r gwasanaeth trydydd parti (e.e., Google) yw'r darparwr hunaniaeth.

- **Llif**: Mae'r defnyddiwr yn clicio "Mewngofnodi gyda Google" (er enghraifft). Mae'r ap yn ailgyfeirio i Google, lle mae'r defnyddiwr yn mewngofnodi (os nad yw wedi mewngofnodi eisoes). Yna mae Google yn darparu tocyn mynediad neu docyn ID i'r ap trydydd parti, y gellir ei ddefnyddio i ddilysu'r defnyddiwr ac o bosibl cyrchu ei ddata.
- **Enghraifft**: Mae llawer o gymwysiadau yn caniatáu i chi fewngofnodi gan ddefnyddio eich manylion Google neu Facebook. Bydd yr ap yn defnyddio OAuth neu OpenID Connect y tu ôl i'r llenni i wirio eich hunaniaeth ac, mewn rhai achosion, cyrchu rhywfaint o ddata cyfryngau cymdeithasol.

Mae SSO cymdeithasol yn ddull cyfleus a fabwysiedir yn eang ar gyfer dilysu am ei fod yn lleihau rhwystrau i ddefnyddwyr, na fyddant am greu enw defnyddiwr a chyfrinair arall efallai.

---

### Crynodeb o'r gwahaniaethau:

- **OAuth**: Fe'i defnyddir ar gyfer awdurdodi, ac mae'n caniatáu i apiau trydydd parti gyrchu data defnyddwyr heb ddatgelu manylion mewngofnodi.
- **OpenID Connect**: Yn ymestyn OAuth i ddarparu dilysu, gan alluogi apiau i wirio hunaniaeth defnyddwyr.
- **SAML**: Protocol sy'n seiliedig ar XML a ddefnyddir ar gyfer SSO, yn aml mewn amgylcheddau menter.
- **WS-Federation**: Protocol sy'n benodol i Microsoft ar gyfer ffederasiwn hunaniaeth, a ddefnyddir mewn systemau etifeddol.
- **LDAP**: Protocol ar gyfer holi gwasanaethau cyfeiriadur i ddilysu defnyddwyr a rheoli awdurdodi.
- **Darparwyr SSO Cymdeithasol**: Systemau sy'n seiliedig ar OAuth (fel Google, Facebook) sy'n caniatáu i apiau trydydd parti ddilysu defnyddwyr gan ddefnyddio eu manylion mewngofnodi cyfryngau cymdeithasol.

Mae gan bob un o'r technolegau hyn ei chryfderau a'i hachosion defnydd ei hun, ac mewn cymwysiadau modern, efallai y gwelwch gyfuniad ohonynt yn cael eu defnyddio ar gyfer gwahanol agweddau ar ddiogelwch (e.e., OAuth/OIDC ar gyfer mynediad at APIau, SAML ar gyfer SSO menter).
