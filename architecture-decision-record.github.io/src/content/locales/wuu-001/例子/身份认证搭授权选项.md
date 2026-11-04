# 架构决策记录：身份认证搭授权选项

<!--

ChatGPT prompt:

Explain web application authentication authorization.

Describe:  OAuth, OpenID Connect, SAML, WS-Federation, LDAP, Social SSO Providers.

-->

Web 应用个身份认证搭授权，是保护应用搭服务访问个两个关键概念。两者侪搭用户个身份、权限哪能授予有关，勿过关注个方面勿同：

- **身份认证**（Authentication）是验证用户或者系统身份个过程。
- **授权**（Authorization）是确定已经认证个用户或者系统可以访问啥资源或者做啥操作个过程。

现在来深入看侬提到个具体协议搭技术，伊拉辣现代 Web 应用里向常用来管理身份认证搭授权。

### 1. **OAuth（Open Authorization）**

**OAuth** 是授权个开放标准。伊让用户可以授权第三方应用有限地访问自家个资源，而勿需要分享自家个凭据。关键思想是**委托访问**。OAuth 常用辣用户可以登录第三方服务（比方用 Google 登录）、而勿需要直接拿用户名搭密码给第三方个情形。

- **流程**：OAuth 一般遵循**基于令牌**个流程，由授权服务器给第三方应用签发一个访问令牌。迭个令牌代表用户个权限，应用用伊从 API 访问用户个数据或者资源。
- **例子**：用户用自家个 Google 账户登录一个第三方应用。Google 验证用户个身份，然后授予一个令牌，让第三方应用可以访问一眼 Google 数据（比方 Google 日历）。

OAuth **勿会**直接处理身份认证；伊讲个是授予访问权。要做身份认证，OAuth 常常搭其他协议配合，比方 **OpenID Connect**。

### 2. **OpenID Connect（OIDC）**

**OpenID Connect（OIDC）** 是建立辣 **OAuth 2.0** 之上个身份层，辣 OAuth 个授权能力之上加了身份认证。本质上，OpenID Connect 扩展 OAuth 来处理**用户身份认证**，并且为应用提供一种标准化个办法来验证用户个身份。

- **流程**：用户用 OpenID Connect 登录个辰光，第三方应用请求一个 ID 令牌（除了 OAuth 访问令牌之外）。ID 令牌里向有用户个信息（比方用户名、电子邮件，还有其他声明）。迭能应用就晓得用户是啥人，有勿有通过认证。
- **例子**：用自家个 Google 账户登录 Slack 迭类服务（Google 是 OpenID Connect 提供者），身份认证是通过 OpenID Connect 做个，而 OAuth 管理对侬 Google 资源个访问。

OIDC 让第三方应用更加容易**认证用户**，同时仍旧可以细粒度地控制迭眼应用可以访问啥资源。

### 3. **SAML（Security Assertion Markup Language）**

**SAML** 是一种比较老个、基于 XML 个标准，用来辣各方之间交换身份认证搭授权数据，特别是辣**单点登录（SSO）**场景里。伊主要用辣企业环境，让用户只要认证一次，就可以访问多个应用，勿需要重新输入凭据。

- **流程**：用户先向身份提供者（IdP）认证。IdP 生成一个签名个 **SAML 断言**，里向包括用户个身份搭相关属性。断言发给服务提供者（SP），SP 用伊来授权访问应用。
- **例子**：员工登录公司个门户（IdP），就自动登录邮件、CRM 等其他系统，勿需要重新输入凭据。认证过程根据 IdP 发送个 SAML 断言。

SAML 常用辣**企业 SSO 解决方案**，适合公司环境里个 Web 应用，勿过搭 OAuth/OIDC 比起来，对移动端勿大友好。

### 4. **WS-Federation（Web Services Federation）**

**WS-Federation** 是另外一种用于**单点登录（SSO）**个协议，特别是辣基于 Microsoft 个企业环境里。伊是 **WS-*（Web Services）**系列规范个一部分，允许辣勿同个安全域之间（比方勿同个组织之间，或者勿同个服务之间）做身份联合。

- **流程**：WS-Federation 允许**受信任个身份提供者（IdP）**认证用户，并且签发令牌，服务提供者可以用来授权。伊搭 SAML 类似，勿过常用辣严重依赖 Microsoft 技术个场景。
- **例子**：用户登录一个托管辣 Microsoft Azure Active Directory（AD）上个企业应用，伊个身份可以用来访问其他联合个服务，包括第三方供应商托管个应用。

虽然辣许多现代 Web 环境里，WS-Federation 已经大部分被 OAuth2.0 搭 OpenID Connect 迭眼更加新个协议取代，勿过辣遗留系统里仍旧辣用，特别是辣以 Microsoft 为中心个企业里。

### 5. **LDAP（Lightweight Directory Access Protocol）**

**LDAP** 是用来访问搭管理目录服务个协议，常用来辣集中个目录（常常叫**目录服务**）里**存储用户凭据**，管理访问控制。LDAP 本身勿是专门讲身份认证或者授权，而是用来存储搭检索身份数据，迭眼数据再用辣迭眼过程里。

- **身份认证**：LDAP 允许应用通过向目录服务查询凭据（比方密码）来认证用户。
- **授权**：伊也管理用户角色搭权限，帮助判断用户有勿有权限访问某眼资源。
- **例子**：许多企业用基于 LDAP 个目录（比方 **Active Directory**）做身份认证搭授权，特别是辣 Windows 环境里。

LDAP 对企业管理内部系统个用户访问至关重要，勿过辣现代 Web 环境里，LDAP 常常搭 SAML 或者 OAuth 迭类其他协议集成，来做更加完整个身份管理。

### 6. **社交 SSO 提供者**

**Facebook**、**Google**、**Twitter**、**GitHub** 等社交**单点登录（SSO）**提供者，允许用户用自家个社交媒体凭据认证登录第三方应用。迭是一种**基于 OAuth 个身份认证**，第三方服务（比方 Google）是身份提供者。

- **流程**：用户点“用 Google 登录”（比方）。应用重定向到 Google，用户辣迭里登录（要是还呒没登录）。然后 Google 给第三方应用提供一个访问令牌或者 ID 令牌，可以用来认证用户，也可能用来访问伊个数据。
- **例子**：许多应用允许侬用 Google 或者 Facebook 个凭据登录。应用辣背后用 OAuth 或者 OpenID Connect 来验证侬个身份，有辰光还访问某眼社交媒体数据。

社交 SSO 是一种方便、被广泛采用个身份认证办法，因为伊减少了用户个麻烦，用户可能勿想再建一个用户名搭密码。

---

### 差异小结：

- **OAuth**：用于授权，允许第三方应用访问用户数据，而勿暴露凭据。
- **OpenID Connect**：扩展 OAuth 来提供身份认证，让应用可以验证用户身份。
- **SAML**：基于 XML 个协议，用于 SSO，常辣企业环境里。
- **WS-Federation**：Microsoft 专用个身份联合协议，辣遗留系统里使用。
- **LDAP**：查询目录服务来认证用户、管理授权个协议。
- **社交 SSO 提供者**：基于 OAuth 个系统（比方 Google、Facebook），允许第三方应用用用户个社交媒体凭据来认证用户。

迭眼技术各有各个长处搭用例，辣现代应用里，侬可能看到伊拉组合起来用辣安全个勿同方面（比方 OAuth/OIDC 用于 API 访问，SAML 用于企业 SSO）。
