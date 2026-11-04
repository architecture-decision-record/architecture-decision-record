# Kovskrif dyberth arkitektoryeth: dewisyow gwiryans ha gordhyans

<!--

ChatGPT prompt:

Explain web application authentication authorization. 

Describe:  OAuth, OpenID Connect, SAML, WS-Federation, LDAP, Social SSO Providers.

-->

Gwiryans ha gordhyans aplikasyon wew yw dew dybyans poesek rag sawya hedhes dhe aplikasyons ha gwassanethow. An dhew a dhelir gans hunyth an usyoryon ha fatel yw rydhys kummyas, mes i a fok war arbennigow dyffrans:

- **Gwiryans** yw an argerdh a wiriha hunyth usyer po system.
- **Gordhyans** yw an argerdh a dhybarth pyth gwaytyansow po oberow a hyll an usyer po system gwiryes hedhi.

Lemmyn, deun ni downha y'n protokolow ha teknologiow arbennik a dhynnerthsowgh, usys yn ollgemmyn yn aplikasyons gwew nowydhek rag rewlya gwiryans ha gordhyans.

### 1. **OAuth (Open Authorization)**

**OAuth** yw savon ygor rag gordhyans. Ev a gonsent dhe usyer ri dhe aplikasyon trydhes-parti hedhes kevyngyes dh'y wayteryow heb rannas y dhetholow. An tybyans alhwedh yw **hedhes delegys**. OAuth yw usys yn fenowgh yn studhow may hyll usyoryon omlogya dhe wassanath trydhes-parti (rag ensampel, omlogya gans Google) heb ri yn uskis aga hanow-usyer ha ger-tremena dhe'n trydhes-parti.

- **Fluv**: OAuth a holya yn ollgemmyn fluv **selys war tokyn**, may hwra servyer gordhyans dyllo tokyn hedhes dhe'n aplikasyon trydhes-parti. An tokyn ma a dhiskwedh kummyasow an usyer, hag an aplikasyon a'n usya rag hedhes data po gwayteryow an usyer dhyworth API.
- **Ensampel**: Usyer a omlog yn aplikasyon trydhes-parti gans y gwiryans Google. Google a wiryh hunyth an usyer ha wosa a re tokyn a gonsent dhe'n aplikasyon trydhes-parti hedhes nebes data Google (rag ensampel, Google Calendar).

OAuth **ny wra** rewlya gwiryans yn rakt; ev yw a-dro dhe ri hedhes. Rag gwiryans, OAuth yw junys yn fenowgh gans protokolow erell, avel **OpenID Connect**.

### 2. **OpenID Connect (OIDC)**

**OpenID Connect (OIDC)** yw gwiskas hunyth drehevys a-ugh **OAuth 2.0** a ystyn gwiryans dhe skiansow gordhyans OAuth. Yn bryntyn, OpenID Connect a ystyn OAuth rag rewlya **gwiryans usyer** ha re fordh savonys rag aplikasyons dhe wiriha hunyth usyer.

- **Fluv**: Pan omlog usyer ow usya OpenID Connect, an aplikasyon trydhes-parti a wovyn tokyn ID (ouryen dhe'n tokyn hedhes OAuth). An tokyn ID a dhalghen kedhlow a-dro dhe'n usyer (avel y hanow-usyer, e-bost, ha hawlyow erell). Hemma a gonsent dhe'n aplikasyon godhvos piw yw an usyer ha mar yw gwiryes.
- **Ensampel**: Omlogya dhe wassanath avel Slack gans agas gwiryans Google (Google ow bos an profyer OpenID Connect) a dhalghen gwiryans dre OpenID Connect, hag OAuth a rewl an hedhes dhe'gas gwayteryow Google.

OIDC a wra es dhe aplikasyons trydhes-parti **wiriha usyoryon** hag a gonsent hwath kontrol mar vanylys war pyth gwayteryow a hyll an aplikasyons ma hedhes.

### 3. **SAML (Security Assertion Markup Language)**

**SAML** yw savon koth, selys war XML, usys rag chanjya data gwiryans ha gordhyans ynter perghennow, arbennik yn senaryos **Single Sign-On (SSO)**. Ev yw usys dhe-gresek yn kerghynnedhow kowethasek may hyllo usyoryon omwiriha unnweyth ha hedhes lies aplikasyon heb dhasdhalleth an dhetholow.

- **Fluv**: An usyer a omwiryh kynsa gans profyer hunyth (IdP). An IdP a re **assertyon SAML** sinys a dhalghen hunyth an usyer ha'y atributs kelmys. An assertyon yw danvonys dhe'n profyer gwassanath (SP), a'n usya rag gordhya hedhes dhe'n aplikasyon.
- **Ensampel**: Gwethoryer a omlog yn y borth kowethasek (an IdP) ha yw omlogys yn awtomatek yn systemow erell avel e-bost, CRM, hag yn, heb dhasdhalleth an dhetholow. An argerdh gwiryans yw selys war an assertyon SAML danvonys gans an IdP.

SAML yw usys yn ollgemmyn yn **solusyons SSO kowethasek** hag a oberi da rag aplikasyons gwew yn kerghynnedhow kowethasek, mes yw le hegar dhe symudek erbynn OAuth/OIDC.

### 4. **WS-Federation (Web Services Federation)**

**WS-Federation** yw protokol aral usys rag **Single Sign-On (SSO)**, arbennik yn kerghynnedhow kowethasek selys war Microsoft. Ev yw rann a deylu spesyfyansow **WS-* (Web Services)** hag a gonsent kesunyans hunyth a-dreus tiryow sawder dyffrans (avel ynter kowethasow dyffrans po ynter gwassanethow dyffrans).

- **Fluv**: WS-Federation a gonsent dhe **brofyer hunyth fydhys (IdP)** gwiriha usyoryon ha dyllo tokynnow a hyll an profyer gwassanath usya rag gordhyans. Ev yw haval dhe SAML mes yw usys yn fenowgh yn senaryos a bleg meur war deknologiow Microsoft.
- **Ensampel**: Usyer a omlog dhe aplikasyon kowethasek ow tiskwedhes gans Microsoft Azure Active Directory (AD), ha'y hunyth a hyll bos usys rag hedhes gwassanethow kesunys erell, ow keworra aplikasyons ow tiskwedhes gans gwerthoryon trydhes-parti.

Kyn fo WS-Federation le gorrys yn le gans protokolow nowydh avel OAuth2.0 ha OpenID Connect yn lies kerghynnedh gwew nowydhek, ev yw usys hwath yn systemow hen, arbennik yn kowethasow selys war Microsoft.

### 5. **LDAP (Lightweight Directory Access Protocol)**

**LDAP** yw protokol usys rag hedhes ha rewlya gwassanethow kuntlas, usys yn ollgemmyn rag **gwitha detholow usyoryon** ha rewlya kontrol hedhes yn kuntlas kresek (a elwir yn fenowgh **Gwassanath Kuntlas**). LDAP nyns yw arbennik a-dro dhe wiryans po gordhyans mes yw usys rag gwitha ha dre-dhelya data hunyth, usys wosa y'n argerdhow na.

- **Gwiryans**: LDAP a gonsent dhe aplikasyon gwiriha usyoryon dre wovyn orth an gwassanath kuntlas rag dethol (avel ger-tremena).
- **Gordhyans**: Ev a rewl ynwedh rollow usyoryon ha kummyasow, ow kweres dybarth mar kevyk usyer hedhes dhe wayteryow arbennik.
- **Ensampel**: Lies kowethas a usya kuntlasow selys war LDAP (rag ensampel, **Active Directory**) rag gwiryans ha gordhyans, arbennik y'n kerghynnedhow Windows.

LDAP yw kritek rag kowethasow rewlya hedhes usyoryon a-dreus systemow ynwedh, mes yn kettesten gwew nowydhek, LDAP yw junys yn fenowgh gans protokolow erell avel SAML po OAuth rag rewlyans hunyth moy kowlwir.

### 6. **Profyoryon SSO sokyel**

Profyoryon **Single Sign-On (SSO)** sokyel avel **Facebook**, **Google**, **Twitter**, **GitHub**, ha re erell a gonsent dhe usyoryon omwiriha yn aplikasyons trydhes-parti ow usya aga dethol media sokyel. Hemma yw sort a **wiryans selys war OAuth** may fo an gwassanath trydhes-parti (rag ensampel, Google) an profyer hunyth.

- **Fluv**: An usyer a glik "Log in with Google" (rag ensampel). An aplikasyon a dhrehedh dhe Google, le may hwra an usyer omlogya (mar nyns yw omlogys kyns). Google a re wosa tokyn hedhes po tokyn ID dhe'n aplikasyon trydhes-parti, a hyll bos usys rag gwiriha an usyer ha martesen hedhes y ddata.
- **Ensampel**: Lies aplikasyon a gonsent dhywgh omlogya gans agas dethol Google po Facebook. An aplikasyon a usya OAuth po OpenID Connect a-dhelergh rag gwiriha agas hunyth ha, yn nebes kasow, hedhes nebes data media sokyel.

SSO sokyel yw fordh hegar ha degemmerys yn ledan rag gwiryans awos may lehe an ankombrus rag usyoryon, na vynn martesen gwul hanow-usyer ha ger-tremena aral.

---

### Berrskrif an dyffransow:

- **OAuth**: Usys rag gordhyans, a gonsent dhe aplikasyons trydhes-parti hedhes data usyer heb diskwedha detholow.
- **OpenID Connect**: A ystyn OAuth dhe ri gwiryans, ow konsentya dhe aplikasyons gwiriha hunyth usyer.
- **SAML**: Protokol selys war XML usys rag SSO, yn fenowgh yn kerghynnedhow kowethasek.
- **WS-Federation**: Protokol arbennik dhe Microsoft rag kesunyans hunyth, usys yn systemow hen.
- **LDAP**: Protokol rag govyn orth gwassanethow kuntlas rag gwiriha usyoryon ha rewlya gordhyans.
- **Profyoryon SSO sokyel**: Systemow selys war OAuth (avel Google, Facebook) a gonsent dhe aplikasyons trydhes-parti gwiriha usyoryon ow usya aga dethol media sokyel.

Pub unn a'n teknologiow ma a'n jeves y nerthow ha'y gasow usadow y honan, ha yn aplikasyons nowydhek, hwi a hyll gweles junyans anodhans usys rag arbennigow dyffrans a sawder (rag ensampel, OAuth/OIDC rag hedhes API, SAML rag SSO kowethasek).
