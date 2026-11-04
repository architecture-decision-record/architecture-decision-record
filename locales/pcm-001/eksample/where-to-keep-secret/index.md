# Where to keep secret

Wetin Dey Inside:

* [Summary](#summary)
  * [Issue](#issue)
  * [Decision](#decision)
  * [Status](#status)
* [Details](#details)
  * [Wetin We Assume](#wetin-we-assume)
  * [Wetin Dey Limit Us](#wetin-dey-limit-us)
  * [Positions](#positions)
  * [Argument](#argument)
  * [Wetin E Mean](#wetin-e-mean)
* [Wetin Join](#wetin-join)
  * [Decision Dem Wey Join](#decision-dem-wey-join)
  * [Requirement Dem Wey Join](#requirement-dem-wey-join)
  * [Artifact Dem Wey Join](#artifact-dem-wey-join)
  * [Principle Dem Wey Join](#principle-dem-wey-join)
* [Notes](#notes)
  * [Vault wey HashiCorp mek](#vault-wey-hashicorp-mek)
  * [LastPass](#lastpass)
  * [Bitwarden](#bitwarden)
  * [EnvKey](#envkey)
  * [Confidant wey Lyft mek](#confidant-wey-lyft-mek)
  * [Devolutions Password Server](#devolutions-password-server)
  * [Secret Server wey Thycotic mek](#secret-server-wey-thycotic-mek)


## Summary


### Issue

We need to store secrets, like passwords, private keys, authentication tokens, etc.

Some of di secrets na user-oriented. For example, our developer want fit use their mobile phone to look up password to service.

Some of di secrets na system-oriented. For example, our continuous delivery pipeline need fit look up di credentials for our cloud hosting.


### Decision

Bitwarden for user-oriented secrets

Vault by HashiCorp for system-oriented secrets.


### Status

Decided. We open to new alternatives as dem arise.


## Details


### Wetin We Assume

For dis purpose, and our current state, we value user-oriented convenience, like mobile apps wey usable.

  * We want ensure fast easy access on di go, like for developer wey dey do on-call system reliability engineering.

  * We want fit share some secrets among selected people, like team.

We no dey try solve for single-provider, like to store all secrets exclusively on Amazon or Azure or Google.

We no want ad-hoc approaches like "remember am" or "write am on note" or "figure out your own way to store am".

Our security model for dis purpose dey fine with to use well-respected COTS vendors, like SaaS password management tools.


### Wetin Dey Limit Us

Right now we want something wey easy i.e. no need to write code, no need to install servers, no need to make major commitment, no need to standardize everybody.


### Positions

We consider:

1. User-oriented off-the-self password managers: LastPass, 1Password, Bitwarden, Dashlane, KeePass, pass, GPG, etc.

2. System-oriented COTS password managers: AWS KMS, Vault by HashiCorp, EnvKy, Secret Server by Thycotic, Devolutions Password Server, Confidant by Lyft.

3. Sharing-oriented approaches: to use shared Google document, or shared Slack channel, or shared network folder, etc.

4. Low-tech ad-hoc approaches, like to remember, to write note, or to rely on each user to figure out their own approach.


### Argument

Bitwarden, LastPass, 1Password, and Dashlane all na commercial off-the-shelf products.

  * Similar kinds of features for users, teams, organizations, etc.

  * Desktop capability for Windows and Mac, and mobile capability for Android and iOS.

  * Browser extensions for Chrome and Firefox, for automatic form fill in, etc.

Bitwarden get two advantages over di others:

  * Bitwarden na open source, wey mean say peers fit review di security and also security-oriented developers widely appreciate di company.

  * Anecdotes by software workers describe significant preference for Bitwarden over di others.

Typical good example writeup: https://jcs.org/2017/11/17/bitwarden

Typical side-by-side voting site: https://stackshare.io/stackups/bitwarden-vs-dashlane

We defer KeyPass, pass, GPG, etc. because additional complexity dey. All of dem look like fine solutions for technical users. GPG look especially good for technical users wey want cross-system command-oriented capabilities.

We defer KMS because e get single-provider lock-in.

We choose Vault for system-oriented needs, because di reviews amazingly positive, and because HashiCorp get excellent track record fup top-quality software and support.

We veto di approaches of sharing approaches like through shared documents, shared channels, shared network folders, etc. Dem no provide di security qualities wey we want.

We veto di ad-hoc low-tech approaches, because all of us agree say e no be long-term path forward.


### Wetin E Mean

Developers fit need to track secrets for two places: Bitwarden for user-oriented access, and Vault for system-oriented access.


## Wetin Join


### Decision Dem Wey Join

Di decision of which CI/CD server must include proof of capability to access secrets.

We go need to decide how to managea di secrets, for terms of policies, rotations, organizations, etc.


### Requirement Dem Wey Join

Di secrets go get related requirements for compliance, auditing, and HR onboarding/offboarding.


### Artifact Dem Wey Join

We expect say we fit export some secrets go environment variables.


### Principle Dem Wey Join

Easily reversible.

Easily parallel i.e. e easy to use variety of password managers.

Cheap to try i.e. free trial dey and no commitment.


## Notes

Evaluation notes here. Di notes all na public comments on various devops discussion boards.


### Vault wey HashiCorp mek

Vault na exactly wetin you want here.

No just throw Vault go production though, stand am up for test environment first, because HashiCorp documentation fit lack plenty even if their products amazing.

Very steep learning curve and e no trivial to stand up.

Di initial setup na small pain. E worth am well though, and di community go support am well enough for you to get by.

Horrid docs but plenty guides dey online of people wey set am up and if you put few of dem together you go get working setup.

Initial setup take fiddling with their helm charts (vault and consul). While technically you fit use plenty other back-ends, I really really no recommend am. Di back-end/consul fit be teeny tiny if you no get ton of data to store.

Definitely get comfortable/familiar with how to use di CLI, because di GUI na more like proof-of-concept/advertisement portal for their enterprise edition.

Di fact say you no fit just "fill am up" na pain. For example if you get 5 fields you need to manually add each field for each item. So e no be like say you pre-define fields for specific category, and fill those fields for all di items for dat category, e more like "you generate everything every time", wey (for my mind) na pain for di ass.

You fit want also look at goldfish as UI for on top of vault. E make am rather nice to get your team on board with am. Dem get demo too. 1. Set up consul. 2. Set up vault wey point to consul. 3. Set up goldfish wey point to vault. 3. Setup some cron job to run consul snapshot for backups.



### LastPass

LastPass Teams. We dey use am, e get custom templates, ACL, nothing missing IMO.

I implement LastPass for my org and I give am C+/B-. Di biggest issue lately na lack of reliability. For di past 90 days multiple hours don dey wey dem force vaults go offline mode. Dis no ideal for my org because we get, literally, 4,000+ passwords wey dem store across 20+ shared folders. As you fit imagine with that many passwords at least few dey get updated or added daily. We get DR plan if issues last more than hour or two: script dey sign and encrypt CSV dump of vault every night wey fit import into keepass.

LastPass don get unreported blips of degraded service: login 'works' but e no pull sites, random features broken for di admin panel, and e no share keys properly for new top level shared folders. I get specific 'key push'/backup user wey dey every group. Usually if you log in as dat user e go fix any key sharing issues but no wen di service degraded even though wetin di status page talk...

For integration e fit easy if you get proper ACLs with least privileged model e.g. if user get read & write and read only on entry or folder dem go only get read only permissions. Unfortunately my org ACLs no too good so I end up use di JSON provisioning API and ~500 lines of python because di dependent nature of our hundreds of ACLs no map well to di least privileged model. I end up get all ACLs wey user dey inside and do dependency walk of sorts.

If your ACL or group structure don already build with least privileged structure for mind, di AD/LDAP sync tool for Windows go work well.

Reach out to their sales team and dem fit hook you up with longer Enterprise trial. Make sure say you fully understand im limitations before you pull di trigger. We get good number of growing pains but apart from outages or impairments for di server side e don dey incredibly smooth.


### Bitwarden

Bitwarden get nice tooling around am (WebUI, CLI, Mobile, Desktop). Self-hosted and fairly easy to setup. Fairly good documentation and PrivacyTools recommend di tool.


### EnvKey

https://www.envkey.com/ Na saas. Really easy to implement, integrate and manage.

Features:

  * Protect API keys and credentials.

  * Keep configuration in sync everywhere.

  * Smart, end-to-end encrypted configuration and secrets management.

  * Prevent insecure sharing and config sprawl.

  * Integrate in minutes.

Capabilities:

  * Manage configuration and access levels for all your apps, environments, and teams for one place.

  * Configure any development or server environment with just single environment variable.

Pros:

  * Good home page.

  * Clear value prop.

  * Visually excellent web app.

  * Superior example data e.g. Algolia, AWS, Datadog, GitHub, Stripe, etc.

  * I speak with di founder for 30m about di company, UI, etc. Dane sound well-informed, honest about di pros/cons, and viable partner.

  * Di company na essentially typical Y Combinator company, with 1 founder. Dem raise $120K for 2018-01.

  * Focus na to get to enterprise features, esp. to move from EnvKey cloud-hosting go either on-prem or BYOC.

  * Potential path forward wey start with EnvKey for ease of use, then later (or for parallel) add Vault.


### Confidant wey Lyft mek

https://lyft.github.io/confidant/

Confidant na open source secret management service wey provide user-friendly storage and access to secrets for secure way, from di developers for Lyft.

KMS Authentication: Confidant solve di authentication chicken and egg problem by to use AWS KMS and IAM to allow IAM roles generate secure authentication tokens wey Confidant fit verify. Confidant also manage KMS grants for your IAM roles, wey allow di IAM roles generate tokens wey dem fit use for service-to-service authentication, or to pass encrypted messages between services.

At-rest encryption of versioned secrets: Confidant dey store secrets for append-only way for DynamoDB, e dey generate unique KMS data key for every revision of every secret, with Fernet symmetric authenticated cryptography.

User-friendly web interface to manage secrets: Confidant provide AngularJS web interface wey allow end-users easily manage secrets, di mappings of secrets to services and di history of changes.


### Devolutions Password Server

https://server.devolutions.net/

Secure, manage, and monitor access to privileged accounts and sessions.

Comprehensive, highly-secured password vault wey let you control access to your privileged accounts, while e also improve overall network visibility for sysadmins and provide seamless experience for end users.

Features: centralized organization password vault, user-specific private vault, password manager, credential injection,
Active Directory integration, role-based access control, two-factor authentication, enterprise ready, IP restrictions, management capabilities, automated password generator, mobile app access, password history, access reports, email alerts.

  * e support data encryption

  * e support multiple Authentication schemes including LDAP, O365, and Local users WITH support for MFA from multiple sources

  * multiple repositories/vaults with fine-grained access controls for multiple teams

  * modern Web UI

  * private credential and connection vaults for personal creds/connections

  * mobile apps for IOS/Android

  * audit logs for each entry, who/what/when with optional prompt for why dem dey access am

  * customizable templates (though dem support hundreds of connection types natively)

  * tons more features and Windows/Mac thick client (Remote Desktop Manager) wey you fit sync to wey greatly expand di options...one-click connections

  * pricing no too bad - up to 15 users na $500 a year for di password server


### Secret Server wey Thycotic mek

https://thycotic.com/products/secret-server/

On-premise version features:

  * Total control over your end-to-end security systems and infrastructure

  * Deploy software inside your on-premise data center or your own virtual private cloud instance

  * Meet legal and regulatory obligations wey require all data and systems to reside on premise

Cloud version features:

  * Software-as-a-service model let you sign up and start right away

  * Elastic scalability as you grow

  * Controls and redundancy wey Azure deliver with 99.9% uptime SLA

User feedback:

  * We dey use that product before. Dem easily bypass am and di rules only work for smart people. Lazy or dumb users fit easily screw am up for team area. Prices dey negotiable wen you talk to dem.

  * You fit run am with SQL express and Win 7box.

  * Cheap.
