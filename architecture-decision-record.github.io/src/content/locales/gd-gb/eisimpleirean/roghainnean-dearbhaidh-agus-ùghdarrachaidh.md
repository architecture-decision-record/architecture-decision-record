# Clàr co-dhùnaidh ailtireachd: roghainnean dearbhaidh agus ùghdarrachaidh

<!--

ChatGPT prompt:

Explain web application authentication authorization. 

Describe:  OAuth, OpenID Connect, SAML, WS-Federation, LDAP, Social SSO Providers.

-->

Tha dearbhadh agus ùghdarrachadh aplacaid-lìn nan dà bhun-bheachd èiginneach ann a bhith a’ dìon ruigsinneachd air aplacaidean is seirbheisean. Tha an dà chuid a’ dèiligeadh ri dearbh-aithne luchd-cleachdaidh agus mar a thèid ceadan a thoirt seachad, ach tha iad a’ cuimseachadh air taobhan eadar-dhealaichte:

- **Dearbhadh (Authentication)** na phròiseas gus dearbh-aithne neach-cleachdaidh no siostaim a dhearbhadh.
- **Ùghdarrachadh (Authorization)** na phròiseas gus dearbhadh dè na goireasan no gnìomhan as urrainn don neach-cleachdaidh no siostam dearbhte ruigsinn.

A-nis, rachamaid a-steach do na pròtacalan agus teicneolasan sònraichte a thug thu an cèill, a thathas a’ cleachdadh gu cumanta ann an aplacaidean-lìn ùr-nodha airson dearbhadh agus ùghdarrachadh a riaghladh.

### 1. **OAuth (Open Authorization)**

Tha **OAuth** na inbhe fhosgailte airson ùghdarrachadh. Leigidh e le neach-cleachdaidh ruigsinneachd cuingealaichte air na goireasan aca a thoirt do aplacaid treas-phàrtaidh gun a bhith a’ co-roinn an teisteanasan. Is e am prìomh bheachd **ruigsinneachd dhèanta**. Bidh OAuth gu tric air a chleachdadh ann an suidheachaidhean far am faod luchd-cleachdaidh clàradh a-steach gu seirbheis treas-phàrtaidh (m.e., clàradh a-steach le Google) gun an ainm-cleachdaiche agus facal-faire a thoirt dìreach don treas-phàrtaidh.

- **Sruth**: Mar as trice bidh OAuth a’ leantainn sruth **stèidhichte air tòcan**, far am bi frithealaiche ùghdarrachaidh a’ cur a-mach tòcan ruigsinneachd don aplacaid treas-phàrtaidh. Tha an tòcan seo a’ riochdachadh ceadan an neach-cleachdaidh, agus bidh an aplacaid ga chleachdadh gus ruigsinneachd fhaighinn air dàta no goireasan an neach-cleachdaidh o API.
- **Eisimpleir**: Bidh neach-cleachdaidh a’ clàradh a-steach gu aplacaid treas-phàrtaidh le cunntas Google aca. Bidh Google a’ dearbhadh dearbh-aithne an neach-cleachdaidh agus an uairsin a’ toirt tòcan a leigeas leis an aplacaid treas-phàrtaidh cothrom fhaighinn air cuid de dhàta Google (m.e., Google Calendar).

Chan eil OAuth **a’ làimhseachadh** dearbhaidh gu dìreach; tha e mu bhith a’ toirt ruigsinneachd. Airson dearbhadh, bidh OAuth gu tric air a phaidhreachadh le pròtacalan eile, leithid **OpenID Connect**.

### 2. **OpenID Connect (OIDC)**

Tha **OpenID Connect (OIDC)** na shreath dearbh-aithne a tha air a thogail air bàrr **OAuth 2.0** a chuireas dearbhadh ri comasan ùghdarrachaidh OAuth. San aon dòigh, bidh OpenID Connect a’ leudachadh OAuth gus **dearbhadh luchd-cleachdaidh** a làimhseachadh agus a’ toirt seachad dòigh àbhaisteach dha aplacaidean dearbh-aithne neach-cleachdaidh a dhearbhadh.

- **Sruth**: Nuair a chlàraicheas neach-cleachdaidh a-steach le OpenID Connect, bidh an aplacaid treas-phàrtaidh ag iarraidh tòcan ID (a bharrachd air an tòcan ruigsinneachd OAuth). Tha am fiosrachadh mun neach-cleachdaidh (leithid an ainm-cleachdaiche, post-d, agus tagraidhean eile) anns an tòcan ID. Leigidh seo leis an aplacaid fios a bhith aice cò th’ anns an neach-cleachdaidh agus a bheil iad dearbhte.
- **Eisimpleir**: Tha clàradh a-steach gu seirbheis leithid Slack le do chunntas Google (Google mar an solaraiche OpenID Connect) a’ gabhail a-steach dearbhadh tro OpenID Connect, fhad ’s a bhios OAuth a’ riaghladh ruigsinneachd air do ghoireasan Google.

Bidh OIDC a’ fàgail e nas fhasa do aplacaidean treas-phàrtaidh **luchd-cleachdaidh a dhearbhadh** fhad ’s a tha e fhathast a’ leigeil smachd mionaideach air dè na goireasan as urrainn dhan aplacaidean sin ruigsinn.

### 3. **SAML (Security Assertion Markup Language)**

Tha **SAML** na inbhe nas sine, stèidhichte air XML a thathas a’ cleachdadh airson dàta dearbhaidh is ùghdarrachaidh iomlaid eadar pàrtaidhean, gu sònraichte ann an suidheachaidhean **Single Sign-On (SSO)**. Tha e air a chleachdadh sa chiad àite ann an àrainneachdan iomairt gus leigeil le luchd-cleachdaidh dearbhadh aon turas agus aplacaidean iomadach ruigsinn gun a bhith ag ath-chur a-steach teisteanasan.

- **Sruth**: Bidh an neach-cleachdaidh an toiseach ga dhearbhadh le solaraiche dearbh-aithne (IdP). Bidh an IdP a’ gineadh **dearbhadh SAML** soidhnichte a tha a’ gabhail a-steach dearbh-aithne an neach-cleachdaidh agus buadhan co-cheangailte. Tha an dearbhadh air a chur chun an t-solaraiche seirbheis (SP), a bhios ga chleachdadh gus ruigsinneachd chun na h-aplacaid ùghdarrachadh.
- **Eisimpleir**: Bidh neach-obrach a’ clàradh a-steach dhan phortal chorporra aca (an IdP) agus tha iad air an clàradh a-steach gu fèin-obrachail do shiostaman eile leithid post-d, CRM, msaa, gun a bhith ag ath-chur a-steach teisteanasan. Tha am pròiseas dearbhaidh stèidhichte air an dearbhadh SAML a chuireas an IdP.

Bithear a’ cleachdadh SAML gu cumanta ann am **fuasglaidhean SSO iomairt** agus tha e ag obair gu math airson aplacaidean-lìn ann an àrainneachdan corporra, ach chan eil e cho càirdeil do ghuthan gluasadach an coimeas ri OAuth/OIDC.

### 4. **WS-Federation (Web Services Federation)**

Tha **WS-Federation** na phròtacal eile a thathas a’ cleachdadh airson **Single Sign-On (SSO)**, gu sònraichte ann an àrainneachdan iomairt stèidhichte air Microsoft. Tha e na phàirt den teaghlach mhìneachaidhean **WS-* (Web Services)** agus a’ leigeil le co-chaidreabhas dearbh-aithne thar diofar raointean tèarainteachd (leithid eadar diofar bhuidhnean no eadar diofar sheirbheisean).

- **Sruth**: Leigidh WS-Federation le **solaraiche dearbh-aithne earbsach (IdP)** luchd-cleachdaidh a dhearbhadh agus tòcanan a thoirt a-mach as urrainn don t-solaraiche seirbheis a chleachdadh airson ùghdarrachadh. Tha e coltach ri SAML ach thathas ga chleachdadh gu tric ann an suidheachaidhean a tha an urra gu mòr ri teicneolasan Microsoft.
- **Eisimpleir**: Bidh neach-cleachdaidh a’ clàradh a-steach gu aplacaid iomairt air a h-òstadh le Microsoft Azure Active Directory (AD), agus faodar an dearbh-aithne aca a chleachdadh gus seirbheisean co-chaidreach eile a ruigsinn, a’ gabhail a-steach aplacaidean air an òstadh le reiceadairean treas-phàrtaidh.

Ged a tha WS-Federation air a chur an àite gu mòr le pròtacalan nas ùire leithid OAuth2.0 agus OpenID Connect ann am mòran àrainneachdan-lìn ùr-nodha, thathar fhathast ga chleachdadh ann an siostaman dìleabach, gu sònraichte ann an iomairtean stèidhichte air Microsoft.

### 5. **LDAP (Lightweight Directory Access Protocol)**

Tha **LDAP** na phròtacal a thathas a’ cleachdadh gus seirbheisean eòlaire a ruigsinn agus a riaghladh, air a chleachdadh gu cumanta airson **teisteanasan luchd-cleachdaidh a stòradh** agus smachd ruigsinneachd a riaghladh ann an eòlaire meadhanaichte (ris an canar gu tric **Seirbheis Eòlaire**). Chan eil LDAP gu sònraichte mu dhearbhadh no ùghdarrachadh ach thathar ga chleachdadh gus dàta dearbh-aithne a stòradh agus fhaighinn air ais, a thathas an uairsin a’ cleachdadh sna pròiseasan sin.

- **Dearbhadh**: Leigidh LDAP le aplacaid luchd-cleachdaidh a dhearbhadh le bhith a’ ceasnachadh na seirbheis eòlaire airson teisteanasan (leithid faclan-faire).
- **Ùghdarrachadh**: Bidh e cuideachd a’ riaghladh dhreuchdan agus cheadan luchd-cleachdaidh, a’ cuideachadh le bhith a’ dearbhadh a bheil ruigsinneachd aig neach-cleachdaidh air cuid de ghoireasan.
- **Eisimpleir**: Bidh mòran iomairtean a’ cleachdadh eòlairean stèidhichte air LDAP (m.e., **Active Directory**) airson dearbhadh agus ùghdarrachadh, gu sònraichte taobh a-staigh àrainneachdan Windows.

Tha LDAP èiginneach do dh’iomairtean gus ruigsinneachd luchd-cleachdaidh a riaghladh thar shiostaman a-staigh, ach ann an co-theacsa-lìn ùr-nodha, bidh LDAP gu tric air a amalachadh le pròtacalan eile leithid SAML no OAuth airson riaghladh dearbh-aithne nas iomlaine.

### 6. **Solaraichean Social SSO**

Bidh solaraichean **Single Sign-On (SSO)** sòisealta leithid **Facebook**, **Google**, **Twitter**, **GitHub**, agus feadhainn eile a’ leigeil le luchd-cleachdaidh dearbhadh gu aplacaidean treas-phàrtaidh le teisteanasan na meadhanan sòisealta aca. Tha seo na sheòrsa de **dhearbhadh stèidhichte air OAuth** far a bheil an t-seirbheis treas-phàrtaidh (m.e., Google) mar an solaraiche dearbh-aithne.

- **Sruth**: Bidh an neach-cleachdaidh a’ briogadh “Log in with Google” (mar eisimpleir). Bidh an aplacaid ag ath-stiùireadh gu Google, far am bi an neach-cleachdaidh a’ clàradh a-steach (mura h-eil iad air an clàradh a-steach mar-thà). Bidh Google an uairsin a’ toirt tòcan ruigsinneachd no tòcan ID don aplacaid treas-phàrtaidh, a ghabhas cleachdadh gus an neach-cleachdaidh a dhearbhadh agus is dòcha an dàta aca a ruigsinn.
- **Eisimpleir**: Leigidh mòran aplacaidean leat clàradh a-steach le do theisteanasan Google no Facebook. Cleachdaidh an aplacaid OAuth no OpenID Connect air cùl na sealladh gus do dhearbh-aithne a dhearbhadh agus, ann an cuid de chùisean, cuid de dhàta meadhanan sòisealta a ruigsinn.

Tha Social SSO na dhòigh goireasach agus air a gabhail gu farsaing airson dearbhadh oir lùghdaichidh e frithealadh do luchd-cleachdaidh, nach eil ag iarraidh ainm-cleachdaiche is facal-faire eile a chruthachadh.

---

### Geàrr-chunntas air na h-eadar-dhealachaidhean:

- **OAuth**: Air a chleachdadh airson ùghdarrachadh, a’ leigeil le aplacaidean treas-phàrtaidh dàta luchd-cleachdaidh a ruigsinn gun a bhith a’ nochdadh teisteanasan.
- **OpenID Connect**: A’ leudachadh OAuth gus dearbhadh a thoirt seachad, a’ leigeil le aplacaidean dearbh-aithne neach-cleachdaidh a dhearbhadh.
- **SAML**: Pròtacal stèidhichte air XML air a chleachdadh airson SSO, gu tric ann an àrainneachdan iomairt.
- **WS-Federation**: Pròtacal sònraichte do Microsoft airson co-chaidreachas dearbh-aithne, air a chleachdadh ann an siostaman dìleabach.
- **LDAP**: Pròtacal airson seirbheisean eòlaire a cheasnachadh gus luchd-cleachdaidh a dhearbhadh agus ùghdarrachadh a riaghladh.
- **Solaraichean Social SSO**: Siostaman stèidhichte air OAuth (leithid Google, Facebook) a leigeas le aplacaidean treas-phàrtaidh luchd-cleachdaidh a dhearbhadh le teisteanasan nam meadhanan sòisealta aca.

Tha neartan agus cùisean cleachdaidh fhèin aig gach aon de na teicneolasan sin, agus ann an aplacaidean ùr-nodha, is dòcha gum faic thu measgachadh dhiubh gan cleachdadh airson diofar thaobhan de thèarainteachd (m.e., OAuth/OIDC airson ruigsinneachd API, SAML airson SSO iomairt).
