# Architectur Decisioun Record: authenticatioun authorisatioun options

<!--

ChatGPT prompt:

Explain web application authentication authorization. 

Describe:  OAuth, OpenID Connect, SAML, WS-Federation, LDAP, Social SSO Providers.

-->

Wab application authenticatioun an authorisatioun are twa crucial concepts in securin access tae applications an services. Baith deal wi the identity o uisers an hoo permissiouns are grantit, but they focus on different aspects:

- **Authentication** is the process o verifyin the identity o a uiser or system.
- **Authorization** is the process o determinin whit resources or actiouns the authenticatit uiser or system can access.

Noo, let's dive intae the specific protocols an technologies ye've mentioned, which are commonly uised in modern wab applications for managin authenticatioun an authorisatioun.

### 1. **OAuth (Open Authorization)**

**OAuth** is an open staundart for authorisatioun. It lets a uiser grant a third-pairty application limitit access tae their resources athoot sharin their credentials. The key idea is **delegated access**. OAuth is aften uised in situatiouns whaur uisers can log in tae a third-pairty service (e.g., signin in wi Google) athoot directly providin their uisername an passwird tae the third-pairty.

- **Flow**: OAuth typically follaes a **token-based** flow, whaur an authorisatioun server issues an access token tae the third-pairty application. This token represents the uiser's permissiouns, an the application uises it tae access the uiser's data or resources frae an API.
- **Example**: A uiser signs intae a third-pairty app uisin their Google account. Google verifies the uiser's identity an than grants a token that lets the third-pairty app access some Google data (e.g., Google Calendar).

OAuth **does not** haunle authenticatioun directly; it’s aboot grantin access. For authenticatioun, OAuth is aften pairit wi ither protocols, like **OpenID Connect**.

### 2. **OpenID Connect (OIDC)**

**OpenID Connect (OIDC)** is an identity layer biggit on tap o **OAuth 2.0** that adds authenticatioun tae OAuth’s authorisatioun capabilities. Essentially, OpenID Connect extends OAuth tae haunle **user authentication** an provides a staundartised wey for applications tae verify the identity o a uiser.

- **Flow**: Whan a uiser logs in uisin OpenID Connect, the third-pairty application requests an ID token (in addition tae the OAuth access token). The ID token contains information aboot the uiser (sic as their uisername, email, an ither claims). This lets the application ken wha the uiser is an whether they are authenticatit.
- **Example**: Loggin intae a service like Slack uisin yer Google account (Google bein the OpenID Connect provider) involves authenticatioun via OpenID Connect, while OAuth manages the access tae yer Google resources.

OIDC maks it easier for third-pairty apps tae **authenticate users** while still allouin fine-grained control ower whit resources thae apps can access.

### 3. **SAML (Security Assertion Markup Language)**

**SAML** is an aulder, XML-based staundart uised for exchangin authenticatioun an authorisatioun data atween pairties, particularly in **Single Sign-On (SSO)** scenarios. It's primarily uised in enterprise environments tae let uisers authenticate ance an access multiple applications athoot re-enterin credentials.

- **Flow**: The uiser first authenticates wi an identity provider (IdP). The IdP generates a signed **SAML assertion** that includes the uiser's identity an relatit attributes. The assertion is sent tae the service provider (SP), which uises it tae authorise access tae the application.
- **Example**: An employee logs intae their corporate portal (the IdP) an is automatically loggit intae ither systems like email, CRM, etc., athoot re-enterin credentials. The authenticatioun process is based on the SAML assertion sent bi the IdP.

SAML is commonly uised in **enterprise SSO solutions** an warks weel for wab applications in corporate environments, but it’s less mobile-friendly compared tae OAuth/OIDC.

### 4. **WS-Federation (Web Services Federation)**

**WS-Federation** is anither protocol uised for **Single Sign-On (SSO)**, especially in Microsoft-based enterprise environments. It's pairt o the **WS-* (Web Services)** faimily o specificatiouns an allous for identity federation athort different security domains (sic as atween different organisatiouns or atween different services).

- **Flow**: WS-Federation lets a **trusted identity provider (IdP)** authenticate uisers an issue tokens that the service provider can uise for authorisatioun. It’s similar tae SAML but is aften uised in scenarios that rely heavily on Microsoft technologies.
- **Example**: A uiser logs intae an enterprise application hostit bi Microsoft Azure Active Directory (AD), an their identity can be uised tae access ither federatit services, includin applications hostit bi third-pairty vendors.

Tho WS-Federation is largely replacit bi newer protocols like OAuth2.0 an OpenID Connect in mony modern wab environments, it’s still uised in legacy systems, especially in Microsoft-centric enterprises.

### 5. **LDAP (Lightweight Directory Access Protocol)**

**LDAP** is a protocol uised tae access an manage directory services, commonly uised for **storing user credentials** an managin access control in a centralised directory (aften cried a **Directory Service**). LDAP isna specifically aboot authenticatioun or authorisatioun but is uised tae store an retrieve identity data, which is than uised in thae processes.

- **Authentication**: LDAP lets an application authenticate uisers bi queryin the directory service for credentials (like passwirds).
- **Authorization**: It an aw manages uiser roles an permissiouns, helpin determine whether a uiser haes access tae certain resources.
- **Example**: Mony enterprises uise LDAP-based directories (e.g., **Active Directory**) for authenticatioun an authorisatioun, especially within Windows environments.

LDAP is crucial for enterprises tae manage uiser access athort internal systems, but in a modern wab context, LDAP is aften integratit wi ither protocols like SAML or OAuth for mair complete identity management.

### 6. **Social SSO Providers**

Social **Single Sign-On (SSO)** providers like **Facebook**, **Google**, **Twitter**, **GitHub**, an ithers allou uisers tae authenticate intae third-pairty applications uisin their social media credentials. This is a type o **OAuth-based authentication** whaur the third-pairty service (e.g., Google) is the identity provider.

- **Flow**: The uiser clicks "Log in with Google" (for example). The app redirects tae Google, whaur the uiser logs in (if no awready loggit in). Google than provides an access token or ID token tae the third-pairty app, which can be uised tae authenticate the uiser an possibly access their data.
- **Example**: Mony applications let ye log in uisin yer Google or Facebook credentials. The app will uise OAuth or OpenID Connect ahint the scenes tae verify yer identity an, in some cases, access certain social media data.

Social SSO is a convenient an widely adoptit method for authenticatioun acause it reduces friction for uisers, wha micht no want tae mak yet anither uisername an passwird.

---

### Summary o Differences:

- **OAuth**: Uised for authorisatioun, lets third-pairty apps access uiser data athoot exposin credentials.
- **OpenID Connect**: Extends OAuth tae provide authenticatioun, lettin apps verify uiser identity.
- **SAML**: XML-based protocol uised for SSO, aften in enterprise environments.
- **WS-Federation**: A Microsoft-specific protocol for identity federation, uised in legacy systems.
- **LDAP**: A protocol for queryin directory services tae authenticate uisers an manage authorisatioun.
- **Social SSO Providers**: OAuth-based systems (like Google, Facebook) that let third-pairty apps authenticate uisers uisin their social media credentials.

Each o thir technologies haes its ain strengths an uise cases, an in modern applications, ye micht see a combination o them bein uised for different aspects o security (e.g., OAuth/OIDC for API access, SAML for enterprise SSO).
