# Architecture Decision Record: mga opsyon sa authentication at authorization

<!--

ChatGPT prompt:

Explain web application authentication authorization. 

Describe:  OAuth, OpenID Connect, SAML, WS-Federation, LDAP, Social SSO Providers.

-->

Ang authentication at authorization ng web application ay dalawang mahalagang konsepto sa pag-secure ng access sa mga application at serbisyo. Parehong tumatalakay ang dalawa sa pagkakakilanlan ng mga user at kung paano ibinibigay ang mga pahintulot, ngunit nakatuon sila sa magkaibang aspeto:

- Ang **Authentication** ay ang proseso ng pag-verify sa pagkakakilanlan ng isang user o sistema.
- Ang **Authorization** ay ang proseso ng pagtukoy kung anong mga resource o aksyon ang maaaring ma-access ng na-authenticate na user o sistema.

Ngayon, sumisid tayo sa mga partikular na protocol at teknolohiyang binanggit mo, na karaniwang ginagamit sa mga makabagong web application para sa pamamahala ng authentication at authorization.

### 1. **OAuth (Open Authorization)**

Ang **OAuth** ay isang bukas na pamantayan para sa authorization. Pinahihintulutan nito ang isang user na bigyan ang third-party na application ng limitadong access sa kanyang mga resource nang hindi ibinabahagi ang kanyang mga kredensyal. Ang pangunahing ideya ay ang **delegated access**. Madalas na ginagamit ang OAuth sa mga sitwasyon kung saan maaaring mag-log in ang mga user sa third-party na serbisyo (hal., pag-sign in gamit ang Google) nang hindi direktang ibinibigay ang kanilang username at password sa third party.

- **Daloy**: Karaniwang sumusunod ang OAuth sa **token-based** na daloy, kung saan nag-iisyu ang isang authorization server ng access token sa third-party na application. Kumakatawan ang token na ito sa mga pahintulot ng user, at ginagamit ito ng application para ma-access ang data o mga resource ng user mula sa isang API.
- **Halimbawa**: Nagsa-sign in ang isang user sa third-party na app gamit ang kanyang Google account. Bine-verify ng Google ang pagkakakilanlan ng user at pagkatapos ay nagbibigay ng token na nagpapahintulot sa third-party na app na ma-access ang ilang data ng Google (hal., Google Calendar).

**Hindi** direktang hinahawakan ng OAuth ang authentication; tungkol ito sa pagbibigay ng access. Para sa authentication, madalas na ipinapares ang OAuth sa ibang protocol, tulad ng **OpenID Connect**.

### 2. **OpenID Connect (OIDC)**

Ang **OpenID Connect (OIDC)** ay isang identity layer na binuo sa ibabaw ng **OAuth 2.0** na nagdaragdag ng authentication sa mga kakayahan ng OAuth sa authorization. Sa esensya, pinalalawak ng OpenID Connect ang OAuth para hawakan ang **user authentication** at nagbibigay ng standardized na paraan para ma-verify ng mga application ang pagkakakilanlan ng isang user.

- **Daloy**: Kapag nag-log in ang user gamit ang OpenID Connect, humihiling ang third-party na application ng ID token (bukod sa OAuth access token). Naglalaman ang ID token ng impormasyon tungkol sa user (tulad ng kanyang username, email, at iba pang claim). Nagbibigay-daan ito sa application na malaman kung sino ang user at kung na-authenticate ba siya.
- **Halimbawa**: Ang pag-log in sa serbisyo tulad ng Slack gamit ang iyong Google account (ang Google ang OpenID Connect provider) ay may kasamang authentication sa pamamagitan ng OpenID Connect, habang pinamamahalaan naman ng OAuth ang access sa iyong mga resource sa Google.

Pinadadali ng OIDC para sa mga third-party na app ang **pag-authenticate ng mga user** habang pinahihintulutan pa rin ang pinong kontrol sa kung anong mga resource ang maaaring ma-access ng mga app na iyon.

### 3. **SAML (Security Assertion Markup Language)**

Ang **SAML** ay isang mas lumang pamantayang nakabatay sa XML na ginagamit para sa pagpapalitan ng data ng authentication at authorization sa pagitan ng mga panig, lalo na sa mga senaryo ng **Single Sign-On (SSO)**. Pangunahin itong ginagamit sa mga enterprise environment para payagan ang mga user na mag-authenticate nang minsan at ma-access ang maraming application nang hindi muling inilalagay ang mga kredensyal.

- **Daloy**: Unang nag-authenticate ang user sa isang identity provider (IdP). Bumubuo ang IdP ng nilagdaang **SAML assertion** na naglalaman ng pagkakakilanlan ng user at mga kaugnay na attribute. Ipinapadala ang assertion sa service provider (SP), na gumagamit nito para i-authorize ang access sa application.
- **Halimbawa**: Nag-log in ang isang empleyado sa kanyang corporate portal (ang IdP) at awtomatikong naka-log in sa iba pang sistema tulad ng email, CRM, atbp., nang hindi muling inilalagay ang mga kredensyal. Nakabatay ang proseso ng authentication sa SAML assertion na ipinadala ng IdP.

Karaniwang ginagamit ang SAML sa mga **enterprise SSO solution** at mahusay itong gumagana para sa mga web application sa mga corporate environment, ngunit hindi ito gaanong mobile-friendly kumpara sa OAuth/OIDC.

### 4. **WS-Federation (Web Services Federation)**

Ang **WS-Federation** ay isa pang protocol na ginagamit para sa **Single Sign-On (SSO)**, lalo na sa mga enterprise environment na nakabatay sa Microsoft. Bahagi ito ng pamilya ng mga espesipikasyong **WS-* (Web Services)** at nagpapahintulot ng identity federation sa iba't ibang security domain (tulad ng sa pagitan ng iba't ibang organisasyon o iba't ibang serbisyo).

- **Daloy**: Pinahihintulutan ng WS-Federation ang isang **pinagkakatiwalaang identity provider (IdP)** na mag-authenticate ng mga user at mag-isyu ng mga token na magagamit ng service provider para sa authorization. Katulad ito ng SAML ngunit madalas na ginagamit sa mga senaryong lubos na umaasa sa mga teknolohiya ng Microsoft.
- **Halimbawa**: Nag-log in ang user sa enterprise application na naka-host sa Microsoft Azure Active Directory (AD), at magagamit ang kanyang pagkakakilanlan para ma-access ang iba pang federated na serbisyo, kasama ang mga application na naka-host ng mga third-party na vendor.

Bagama't malaking bahagi na itong napalitan ng mas bagong protocol tulad ng OAuth2.0 at OpenID Connect sa maraming makabagong web environment, ginagamit pa rin ang WS-Federation sa mga legacy system, lalo na sa mga enterprise na nakasentro sa Microsoft.

### 5. **LDAP (Lightweight Directory Access Protocol)**

Ang **LDAP** ay isang protocol na ginagamit para ma-access at mapamahalaan ang mga directory service, karaniwang ginagamit para sa **pag-iimbak ng mga kredensyal ng user** at pamamahala ng access control sa sentralisadong direktoryo (madalas na tinatawag na **Directory Service**). Hindi partikular na tungkol sa authentication o authorization ang LDAP ngunit ginagamit ito para mag-imbak at kumuha ng identity data, na ginagamit naman sa mga prosesong iyon.

- **Authentication**: Pinahihintulutan ng LDAP ang isang application na mag-authenticate ng mga user sa pamamagitan ng pag-query sa directory service para sa mga kredensyal (tulad ng mga password).
- **Authorization**: Pinamamahalaan din nito ang mga tungkulin at pahintulot ng user, na tumutulong matukoy kung may access ang isang user sa ilang resource.
- **Halimbawa**: Maraming enterprise ang gumagamit ng mga directory na nakabatay sa LDAP (hal., **Active Directory**) para sa authentication at authorization, lalo na sa loob ng mga Windows environment.

Mahalaga ang LDAP para sa mga enterprise sa pamamahala ng access ng user sa mga panloob na sistema, ngunit sa makabagong konteksto ng web, madalas na isinasama ang LDAP sa ibang protocol tulad ng SAML o OAuth para sa mas kumpletong identity management.

### 6. **Mga Social SSO Provider**

Ang mga **Single Sign-On (SSO)** provider na pang-social tulad ng **Facebook**, **Google**, **Twitter**, **GitHub**, at iba pa ay nagpapahintulot sa mga user na mag-authenticate sa mga third-party na application gamit ang kanilang mga kredensyal sa social media. Ito ay isang uri ng **OAuth-based authentication** kung saan ang third-party na serbisyo (hal., Google) ang identity provider.

- **Daloy**: Kini-click ng user ang "Mag-log in gamit ang Google" (halimbawa). Nire-redirect ng app ang user sa Google, kung saan nagla-log in ang user (kung hindi pa naka-log in). Pagkatapos ay nagbibigay ang Google ng access token o ID token sa third-party na app, na maaaring gamitin para i-authenticate ang user at posibleng ma-access ang kanyang data.
- **Halimbawa**: Pinahihintulutan ka ng maraming application na mag-log in gamit ang iyong mga kredensyal sa Google o Facebook. Gagamit ang app ng OAuth o OpenID Connect sa likod ng mga eksena para i-verify ang iyong pagkakakilanlan at, sa ilang kaso, i-access ang ilang data sa social media.

Ang Social SSO ay maginhawa at malawakang ginagamit na paraan para sa authentication dahil binabawasan nito ang hadlang para sa mga user na maaaring ayaw gumawa ng isa pang username at password.

---

### Buod ng mga Pagkakaiba:

- **OAuth**: Ginagamit para sa authorization, pinahihintulutan ang mga third-party na app na ma-access ang data ng user nang hindi inilalantad ang mga kredensyal.
- **OpenID Connect**: Pinalalawak ang OAuth para magbigay ng authentication, na nagbibigay-daan sa mga app na i-verify ang pagkakakilanlan ng user.
- **SAML**: Protocol na nakabatay sa XML na ginagamit para sa SSO, madalas sa mga enterprise environment.
- **WS-Federation**: Protocol na espesipiko sa Microsoft para sa identity federation, ginagamit sa mga legacy system.
- **LDAP**: Protocol para sa pag-query ng mga directory service para i-authenticate ang mga user at pamahalaan ang authorization.
- **Mga Social SSO Provider**: Mga sistemang nakabatay sa OAuth (tulad ng Google, Facebook) na nagpapahintulot sa mga third-party na app na i-authenticate ang mga user gamit ang kanilang mga kredensyal sa social media.

May sarili itong mga lakas at gamit ang bawat isa sa mga teknolohiyang ito, at sa mga makabagong application, maaaring makita mong ginagamit ang kombinasyon ng mga ito para sa iba't ibang aspeto ng seguridad (hal., OAuth/OIDC para sa API access, SAML para sa enterprise SSO).
