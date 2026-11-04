# Architecture Decision Record: ways fo do authentication and authorization

<!--

ChatGPT prompt:

Explain web application authentication authorization. 

Describe:  OAuth, OpenID Connect, SAML, WS-Federation, LDAP, Social SSO Providers.

-->

Web application authentication and authorization na two crucial concepts to secure access to applications and services. Both deal with di identity of users and how dem dey grant permissions, but dem focus on different aspects:

- **Authentication** na di process to verify di identity of user or system.
- **Authorization** na di process to determine which resources or actions di authenticated user or system fit access.

Now, make we enter di specific protocols and technologies wey you mention, wey dem commonly use for modern web applications to manage authentication and authorization.

### 1. **OAuth (Open Authorization)**

**OAuth** na open standard for authorization. E allow user to grant third-party application limited access to their resources without to share their credentials. Di key idea na **delegated access**. Dem often use OAuth for situations where users fit log in to third-party service (e.g., to sign in with Google) without to give their username and password direct to di third-party.

- **Flow**: OAuth typically follow **token-based** flow, where authorization server issue access token to di third-party application. Dis token represent di user permissions, and di application dey use am to access di user data or resources from API.
- **Example**: User sign into third-party app with their Google account. Google verify di user identity and then grant token wey allow di third-party app to access some Google data (e.g., Google Calendar).

OAuth **no dey** handle authentication direct; na about to grant access. For authentication, dem often pair OAuth with other protocols, like **OpenID Connect**.

### 2. **OpenID Connect (OIDC)**

**OpenID Connect (OIDC)** na identity layer wey dem build on top of **OAuth 2.0** wey add authentication to OAuth authorization capabilities. Essentially, OpenID Connect extend OAuth to handle **user authentication** and e give standardized way for applications to verify di identity of user.

- **Flow**: Wen user log in with OpenID Connect, di third-party application request ID token (plus di OAuth access token). Di ID token contain information about di user (like their username, email, and other claims). Dis one allow di application to know who di user be and whether dem authenticated.
- **Example**: To log into service like Slack with your Google account (Google na di OpenID Connect provider) involve authentication through OpenID Connect, while OAuth manage di access to your Google resources.

OIDC make am easier for third-party apps to **authenticate users** while e still allow fine-grained control over which resources dose apps fit access.

### 3. **SAML (Security Assertion Markup Language)**

**SAML** na older, XML-based standard wey dem use to exchange authentication and authorization data between parties, particularly for **Single Sign-On (SSO)** scenarios. Dem primarily use am for enterprise environments to enable users to authenticate once and access multiple applications without to enter credentials again.

- **Flow**: Di user first authenticate with identity provider (IdP). Di IdP generate signed **SAML assertion** wey include di user identity and related attributes. Dem send di assertion to di service provider (SP), wey use am to authorize access to di application.
- **Example**: Employee log into their corporate portal (di IdP) and dem automatically log am into other systems like email, CRM, etc., without to enter credentials again. Di authentication process base on di SAML assertion wey di IdP send.

Dem commonly use SAML for **enterprise SSO solutions** and e work well for web applications for corporate environments, but e less mobile-friendly compared to OAuth/OIDC.

### 4. **WS-Federation (Web Services Federation)**

**WS-Federation** na another protocol wey dem use for **Single Sign-On (SSO)**, especially for Microsoft-based enterprise environments. E dey part of di **WS-* (Web Services)** family of specifications and e allow identity federation across different security domains (like between different organizations or between different services).

- **Flow**: WS-Federation allow **trusted identity provider (IdP)** to authenticate users and issue tokens wey di service provider fit use for authorization. E similar to SAML but dem often use am for scenarios wey depend plenty on Microsoft technologies.
- **Example**: User log into enterprise application wey Microsoft Azure Active Directory (AD) host, and dem fit use their identity to access other federated services, including applications wey third-party vendors host.

Even though newer protocols like OAuth2.0 and OpenID Connect largely replace WS-Federation for many modern web environments, dem still dey use am for legacy systems, especially for Microsoft-centric enterprises.

### 5. **LDAP (Lightweight Directory Access Protocol)**

**LDAP** na protocol wey dem use to access and manage directory services, commonly use to **store user credentials** and to manage access control for centralized directory (wey dem often call **Directory Service**). LDAP no be specifically about authentication or authorization but dem use am to store and retrieve identity data, wey dem then use for dose processes.

- **Authentication**: LDAP allow application to authenticate users by to query di directory service for credentials (like passwords).
- **Authorization**: E also manage user roles and permissions, wey help determine whether user get access to certain resources.
- **Example**: Many enterprises dey use LDAP-based directories (e.g., **Active Directory**) for authentication and authorization, especially inside Windows environments.

LDAP crucial for enterprises to manage user access across internal systems, but for modern web context, dem often integrate LDAP with other protocols like SAML or OAuth for more complete identity management.

### 6. **Social SSO Providers**

Social **Single Sign-On (SSO)** providers like **Facebook**, **Google**, **Twitter**, **GitHub**, and others allow users to authenticate into third-party applications with their social media credentials. Dis na one type of **OAuth-based authentication** where di third-party service (e.g., Google) na di identity provider.

- **Flow**: Di user click "Log in with Google" (for example). Di app redirect go Google, where di user log in (if e never log in already). Google then give access token or ID token to di third-party app, wey dem fit use to authenticate di user and possibly access their data.
- **Example**: Many applications allow you to log in with your Google or Facebook credentials. Di app go use OAuth or OpenID Connect for background to verify your identity and, for some cases, access certain social media data.

Social SSO na convenient and widely adopted method for authentication because e reduce friction for users, wey fit no want create another username and password again.

---

### Summary of Differences:

- **OAuth**: Dem use am for authorization, e allow third-party apps to access user data without to expose credentials.
- **OpenID Connect**: E extend OAuth to provide authentication, so apps fit verify user identity.
- **SAML**: XML-based protocol wey dem use for SSO, often for enterprise environments.
- **WS-Federation**: Microsoft-specific protocol for identity federation, wey dem use for legacy systems.
- **LDAP**: Protocol to query directory services to authenticate users and manage authorization.
- **Social SSO Providers**: OAuth-based systems (like Google, Facebook) wey allow third-party apps to authenticate users with their social media credentials.

Each of dis technologies get im own strengths and use cases, and for modern applications, you fit see combination of dem wey dem dey use for different aspects of security (e.g., OAuth/OIDC for API access, SAML for enterprise SSO).
