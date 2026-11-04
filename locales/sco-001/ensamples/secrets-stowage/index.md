# Secrets stowage

Contents:

* [Soummary](#soummary)
  * [Maitter](#maitter)
  * [Decisioun](#decisioun)
  * [Staunin](#staunin)
* [Pairticulars](#pairticulars)
  * [Assumptiouns](#assumptiouns)
  * [Limitatiouns](#limitatiouns)
  * [Positiouns](#positiouns)
  * [Argiment](#argiment)
  * [Implicatiouns](#implicatiouns)
* [Relatit](#relatit)
  * [Relatit decisiouns](#relatit-decisiouns)
  * [Relatit requirements](#relatit-requirements)
  * [Relatit artefacts](#relatit-artefacts)
  * [Relatit principles](#relatit-principles)
* [Jottins](#jottins)
  * [Vault bi HashiCorp](#vault-bi-hashicorp)
  * [LastPass](#lastpass)
  * [Bitwarden](#bitwarden)
  * [EnvKey](#envkey)
  * [Confidant bi Lyft](#confidant-bi-lyft)
  * [Devolutions Password Server](#devolutions-password-server)
  * [Secret Server bi Thycotic](#secret-server-bi-thycotic)


## Soummary


### Maitter

We need tae store secrets, sic as passwirds, private keys, authentication tokens, etc.

Some o the secrets are user-oriented. For example, oor developer wants tae be able tae uise their mobile phone tae leuk up a passwird tae a service.

Some o the secrets are system-oriented. For example, oor continuous delivery pipeline needs tae be able tae leuk up the credentials for oor cloud hostin.


### Decisioun

Bitwarden for user-oriented secrets

Vault bi HashiCorp for system-oriented secrets.


### Staunin

Decidit. We are open tae new alternatives as they arise.


## Pairticulars


### Assumptiouns

For this purpose, an oor current state, we value user-oriented convenience, sic as uisable mobile apps.

  * We want tae ensure fast easy access on the gae, sic as for a developer daein on-call system reliability engineerin.

  * We want tae be able tae share some secrets amang selectit fowk, sic as a team.

We are no tryin tae solve for single-provider, sic as storin aw secrets exclusively on Amazon or Azure or Google.

We dinnae want ad-hoc approaches sic as "remember it" or "write it on a note" or "figure out your own way to store it".

Oor security model for this purpose is fine wi uisin weel-respectit COTS vendors, sic as SaaS passwird management tuils.


### Limitatiouns

Richt noo we want somethin that is easy i.e. nae need tae screive code, nae need tae install servers, nae need tae mak a major commitment, nae need tae staundartise everyone.


### Positiouns

We consideret:

1. User-oriented aff-the-shelf passwird managers: LastPass, 1Password, Bitwarden, Dashlane, KeePass, pass, GPG, etc.

2. System-oriented COTS passwird managers: AWS KMS, Vault bi HashiCorp, EnvKy, Secret Server bi Thycotic, Devolutions Password Server, Confidant bi Lyft.

3. Sharing-oriented approaches: uisin a shared Google document, or shared Slack channel, or shared network folder, etc.

4. Laich-tech ad-hoc approaches, sic as rememberin, screivin a note, or relyin on each uiser tae figure oot their ain approach.


### Argiment

Bitwarden, LastPass, 1Password, an Dashlane aw are commercial aff-the-shelf products.

  * Similar kinds o features for uisers, teams, organisatiouns, etc.

  * Desktop capability for Windows an Mac, an mobile capability for Android an iOS.

  * Browser extensions for Chrome an Firefox, for automatic form fill in, etc.

Bitwarden haes twa advantages ower the ithers:

  * Bitwarden is open source, which means the security can be peer reviewed an an aw the company is widely-appreciatit bi security-oriented developers.

  * Anecdotes bi saftware warkers describe a significant preference for Bitwarden ower the ithers.

A typical guid example writeup: https://jcs.org/2017/11/17/bitwarden

A typical side-bi-side votin site: https://stackshare.io/stackups/bitwarden-vs-dashlane

We defer KeyPass, pass, GPG, etc. acause there's additional complexity. Aw o thir leuk like fine solutiouns for technical uisers. GPG leuks especially guid for technical uisers wha want cross-system command-oriented capabilities.

We defer KMS acause it haes single-provider lock-in.

We chuise Vault for system-oriented needs, acause the reviews are amazingly positive, an acause HashiCorp haes an excellent track record fup tap-quality saftware an support.

We veto the approaches o sharin approaches sic as via shared documents, shared channels, shared network folders, etc. Thir dinnae provide the security qualities that we want.

We veto the ad-hoc laich-tech approaches, acause we aw agree it's no a lang-term path forrit.


### Implicatiouns

Developers micht need tae track secrets in twa places: Bitwarden for user-oriented access, an Vault for system-oriented access.


## Relatit


### Relatit decisiouns

The decisioun o which CI/CD server maun include proof o capability for accessin secrets.

We will need tae decide hoo tae managea the secrets, in terms o policies, rotatiouns, organisatiouns, etc.


### Relatit requirements

The secrets will hae relatit requirements for compliance, auditin, an HR onboardin/offboardin.


### Relatit artefacts

We expect we micht export some secrets tae environment variables.


### Relatit principles

Easily reversible.

Easily parallel i.e. it's easy tae uise a variety o passwird managers.

Cheap tae try i.e. there's a free trial an nae commitment.


## Jottins

Evaluation notes here. The notes are aw public comments on various devops discussion boards.


### Vault bi HashiCorp

Vault is exactly whit ye want here. 

Dinnae juist thraw Vault intae production tho, stand it up in a test environment first, acause HashiCorp's documentation can be pretty lackin even if their products are amazin.

Unco steep learnin curve an is no trivial tae stand up. 

The initial setup is a bit o a pain. It's weel worth it tho, an the community will support it weel eneuch for ye tae get by.

Horrid docs but there are lots o guides online o fowk settin it up an if ye pit a few o them thegither ye will hae a warkin setup.

Initial setup tuik fiddlin wi their helm chairts (vault an consul). While technically ye can uise lots o ither back-ends, I really really dinnae recommend it. The back-end/consul can be teeny tiny if ye dinnae hae a ton o data tae store.

Definitely get comfortable/familiar wi uisin the CLI, acause the GUI is mair like a proof-o-concept/advertisement portal for their enterprise edition.

The fact that ye canna juist "fill it up" is a pain. For example if ye hae 5 fields ye need tae manually add each field for each item. Sae it's no like ye pre-define fields for a specific category, an fill thae fields for aw the items in that category, it's mair like "you generate everything every time", which (in my mind) is a pain in the erse.

Ye micht want tae an aw leuk at goldfish as a UI for on tap o vault. Maks it rather nice tae get yer team on board wi it. They an aw hae a demo. 1. Set up consul. 2. Set up vault pointin tae consul. 3. Set up goldfish pointin tae vault. 3. Setup some cron job tae rin consul snapshot for backups.



### LastPass

LastPass Teams. We uise it, haes custom templates, ACL, naethin missin IMO.

I implementit LastPass at my org an gie it a C+/B-. The biggest issue lately is a lack o reliability. In the past 90 days there hae been multiple oors whaur vaults were forced intae offline mode. This isna ideal for my org due tae havin, literally, 4,000+ passwirds storit athort 20+ shared folders. As ye can imagine wi that mony passwirds at least a few get updatit or addit daily. We hae a DR plan if issues last mair than an oor or twa: a script signs an encrypts a CSV dump o vault ilka nicht that can be importit intae keepass.

LastPass haes hid unreportit blips o degradit service: login 'works' but daesna pull sites, random features broken in the admin panel, an no properly sharin keys for new tap level shared folders. I hae a specific 'key push'/backup uiser that is in ilka group. Usually loggin in as that uiser will fix onie key sharin issues but no whan the service is degradit despite whit the status page says...

For integratioun it can be easy if ye hae proper ACLs wi a least privilegit model e.g. if a uiser haes read & write an read only on an entry or folder they juist get read only permissiouns. Unfortunately my org's ACLs arena the best sae I endit up uisin the JSON provisionin API an ~500 lines o python due tae the dependent nature o oor hunders o ACLs no mappin weel tae the least privilegit model. I endit up gettin aw ACLs a uiser wis in an dae a dependency walk o sorts.

If yer ACL or group structur is awready biggit wi a least privilegit structur in mind the AD/LDAP sync tuil for Windows will wark weel.

Reach oot tae their sales team an they can hook ye up wi a langer Enterprise trial. Be siccar ye fully unnerstaun its limitatiouns afore pullin the trigger. We hid a guid nummer o growin pains but aside frae outages or impairments on the server side it's been incredibly smooth.


### Bitwarden

Bitwarden haes a nice tuilin roun it (WebUI, CLI, Mobile, Desktop). Self-hostit an fairly easy tae setup. Fairly guid documentation an recommendit tuil bi PrivacyTools.


### EnvKey

https://www.envkey.com/ Is a saas. Really easy tae implement, integrate an manage.

Features:

  * Protect API keys an credentials.

  * Keep configuratioun in sync everywhaur.

  * Smart, end-tae-end encryptit configuratioun an secrets management. 

  * Prevent insecure sharin an config sprawl. 

  * Integrate in minutes.

Capabilities:

  * Manage configuratioun an access levels for aw yer apps, environments, an teams in ae place.

  * Configure onie develapment or server environment wi juist a single environment variable.

Pros:

  * Guid hame page.

  * Clear value prop.

  * Visually excellent wab app.

  * Superior example data e.g. Algolia, AWS, Datadog, GitHub, Stripe, etc.

  * Spoke wi the founder for 30m aboot the company, UI, etc. Dane soonds weel-informed, honest aboot the pros/cons, an a viable pairtner.

  * The company is essentially a typical Y Combinator company, wi 1 founder. Raised $120K in 2018-01.

  * Focus is on gettin tae enterprise features, esp. muivin frae EnvKey cloud-hostin tae either on-prem or BYOC.

  * Potential path forrit stairtin wi EnvKey for ease o uise, than efter (or in parallel) addin Vault. 


### Confidant bi Lyft

https://lyft.github.io/confidant/

Confidant is a open source secret management service that provides user-friendly storage an access tae secrets in a secure wey, frae the developers at Lyft.

KMS Authentication: Confidant solves the authentication chicken an egg problem bi uisin AWS KMS an IAM tae allou IAM roles tae generate secure authentication tokens that can be verifiet bi Confidant. Confidant an aw manages KMS grants for yer IAM roles, which lets the IAM roles generate tokens that can be uised for service-tae-service authentication, or tae pass encryptit messages atween services.

At-rest encryption of versioned secrets: Confidant stores secrets in an append-only wey in DynamoDB, generatin a unique KMS data key for ilka revision o ilka secret, uisin Fernet symmetric authenticatit cryptography.

A user-friendly wab interface for managin secrets: Confidant provides an AngularJS wab interface that lets end-uisers easily manage secrets, the mappins o secrets tae services an the history o chynges.


### Devolutions Password Server

https://server.devolutions.net/

Secure, manage, an monitor access tae privilegit accounts an sessions.

A comprehensive, heichly-securit passwird vault that lets ye control access tae yer privilegit accounts, while an aw improvin owerall network visibility for sysadmins an providin a seamless experience for end uisers.

Features: centralised organisation passwird vault, user-specific private vault, passwird manager, credential injection,
Active Directory integratioun, role-based access control, twa-factor authentication, enterprise ready, IP restrictions, management capabilities, automatit passwird generator, mobile app access, passwird history, access reports, email alerts.

  * supports data encryption

  * supports multiple Authentication schemes includin LDAP, O365, an Local uisers WITH support for MFA frae multiple sources

  * multiple repositories/vaults wi fine-grained access controls for multiple teams

  * modern Web UI

  * private credential an connection vaults for personal creds/connections

  * mobile apps for IOS/Android

  * audit logs for each entry, wha/whit/whan wi an optional prompt for why they're accessin

  * customisable templates (tho they support hunders o connection types natively)

  * tons mair features an a Windows/Mac thick client (Remote Desktop Manager) that ye can sync tae that greatly expands the options...ae-click connectiouns

  * pricin isna aw that bad - up tae 15 uisers is $500 a year for the passwird server


### Secret Server bi Thycotic

https://thycotic.com/products/secret-server/

On-premise version features: 

  * Total control ower yer end-tae-end security systems an infrastructur

  * Deploy saftware within yer on-premise data centre or yer ain virtual private cloud instance

  * Meet legal an regulatory obligatiouns that require aw data an systems tae bide on premise

Cloud version features:

  * Saftware-as-a-service model lets ye sign up an stairt richt awa

  * Elastic scalability as ye growe

  * Controls an redundancy deliverit bi Azure wi 99.9% uptime SLA

User feedback:

  * We uised tae uise that product. It wis sae easily bypassed an the rules juist wark for smairt fowk. Lazy or dumb uisers can easily screw it up in a team area. Prices are negotiable whan ye talk tae them.

  * Ye can rin it uisin SQL express an a Win 7box. 

  * Cheap.
