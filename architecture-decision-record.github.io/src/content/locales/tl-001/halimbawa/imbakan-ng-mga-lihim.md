# Imbakan ng mga lihim

Nilalaman:

* [Buod](#buod)
  * [Isyu](#isyu)
  * [Desisyon](#desisyon)
  * [Katayuan](#katayuan)
* [Mga detalye](#mga-detalye)
  * [Mga palagay](#mga-palagay)
  * [Mga limitasyon](#mga-limitasyon)
  * [Mga posisyon](#mga-posisyon)
  * [Argumento](#argumento)
  * [Mga implikasyon](#mga-implikasyon)
* [Kaugnay](#kaugnay)
  * [Mga kaugnay na desisyon](#mga-kaugnay-na-desisyon)
  * [Mga kaugnay na requirement](#mga-kaugnay-na-requirement)
  * [Mga kaugnay na artifact](#mga-kaugnay-na-artifact)
  * [Mga kaugnay na prinsipyo](#mga-kaugnay-na-prinsipyo)
* [Mga tala](#mga-tala)
  * [Vault ng HashiCorp](#vault-ng-hashicorp)
  * [LastPass](#lastpass)
  * [Bitwarden](#bitwarden)
  * [EnvKey](#envkey)
  * [Confidant ng Lyft](#confidant-ng-lyft)
  * [Devolutions Password Server](#devolutions-password-server)
  * [Secret Server ng Thycotic](#secret-server-ng-thycotic)


## Buod


### Isyu

Kailangan naming mag-imbak ng mga lihim, tulad ng mga password, private key, authentication token, atbp.

Ang ilan sa mga lihim ay nakatuon sa user. Halimbawa, gusto ng aming developer na magamit ang kanyang mobile phone para hanapin ang password sa isang serbisyo.

Ang ilan sa mga lihim ay nakatuon sa sistema. Halimbawa, kailangang mahanap ng aming continuous delivery pipeline ang mga kredensyal para sa aming cloud hosting.


### Desisyon

Bitwarden para sa mga lihim na nakatuon sa user

Vault ng HashiCorp para sa mga lihim na nakatuon sa sistema.


### Katayuan

Napagpasyahan. Bukas kami sa mga bagong alternatibo habang lumilitaw ang mga ito.


## Mga detalye


### Mga palagay

Para sa layuning ito, at sa aming kasalukuyang kalagayan, pinahahalagahan namin ang kaginhawahang nakatuon sa user, tulad ng mga magagamit na mobile app.

  * Gusto naming matiyak ang mabilis at madaling access kahit saan, tulad ng para sa developer na gumagawa ng on-call system reliability engineering.

  * Gusto naming maibahagi ang ilang lihim sa mga piling tao, tulad ng isang koponan.

Hindi namin sinisikap na lutasin para sa iisang provider, tulad ng pag-iimbak ng lahat ng lihim nang eksklusibo sa Amazon o Azure o Google.

Ayaw namin ng mga ad-hoc na pamamaraan tulad ng "tandaan mo na lang" o "isulat mo sa tala" o "humanap ka ng sarili mong paraan para iimbak ito".

Ayos sa aming security model para sa layuning ito ang paggamit ng mga lubos na iginagalang na COTS vendor, tulad ng mga SaaS na tool sa pamamahala ng password.


### Mga limitasyon

Sa ngayon gusto namin ng isang bagay na madali ibig sabihin hindi na kailangang magsulat ng code, hindi na kailangang mag-install ng mga server, hindi na kailangang gumawa ng malaking pangako, hindi na kailangang i-standardize ang lahat.


### Mga posisyon

Isinaalang-alang namin ang:

1. Mga off-the-shelf na password manager na nakatuon sa user: LastPass, 1Password, Bitwarden, Dashlane, KeePass, pass, GPG, atbp.

2. Mga COTS na password manager na nakatuon sa sistema: AWS KMS, Vault ng HashiCorp, EnvKy, Secret Server ng Thycotic, Devolutions Password Server, Confidant ng Lyft.

3. Mga pamamaraang nakatuon sa pagbabahagi: paggamit ng nakabahaging Google document, o nakabahaging Slack channel, o nakabahaging network folder, atbp.

4. Mga ad-hoc na pamamaraang mababa ang teknolohiya, tulad ng pag-alala, pagsulat ng tala, o pag-asa sa bawat user na humanap ng sarili niyang paraan.


### Argumento

Ang Bitwarden, LastPass, 1Password, at Dashlane ay pawang mga commercial off-the-shelf na produkto.

  * Magkakatulad na uri ng mga feature para sa mga user, koponan, organisasyon, atbp.

  * Kakayahan sa desktop para sa Windows at Mac, at kakayahan sa mobile para sa Android at iOS.

  * Mga browser extension para sa Chrome at Firefox, para sa awtomatikong pagpuno ng form, atbp.

Dalawa ang bentahe ng Bitwarden kaysa sa iba:

  * Open source ang Bitwarden, na nangangahulugang maaaring suriin ng mga kapwa eksperto ang seguridad at lubos ding pinahahalagahan ang kumpanya ng mga developer na nakatuon sa seguridad.

  * Inilalarawan ng mga anekdota ng mga software worker ang malaking kagustuhan sa Bitwarden kaysa sa iba.

Isang karaniwang magandang halimbawang sulatin: https://jcs.org/2017/11/17/bitwarden

Isang karaniwang side-by-side na voting site: https://stackshare.io/stackups/bitwarden-vs-dashlane

Ipinagpaliban namin ang KeyPass, pass, GPG, atbp. dahil may karagdagang pagiging masalimuot. Mukhang mahuhusay na solusyon ang lahat ng ito para sa mga teknikal na user. Mukhang lalong mahusay ang GPG para sa mga teknikal na user na gusto ng cross-system na kakayahang nakatuon sa command.

Ipinagpaliban namin ang KMS dahil may single-provider lock-in ito.

Pinipili namin ang Vault para sa mga pangangailangang nakatuon sa sistema, dahil kamangha-manghang positibo ang mga review, at dahil may mahusay na rekord ang HashiCorp ng pinakamataas na kalidad na software at suporta.

Binabawalan namin ang mga pamamaraan ng pagbabahagi tulad ng sa pamamagitan ng nakabahaging dokumento, nakabahaging channel, nakabahaging network folder, atbp. Hindi nagbibigay ang mga ito ng mga katangian ng seguridad na gusto namin.

Binabawalan namin ang mga ad-hoc na pamamaraang mababa ang teknolohiya, dahil sumasang-ayon kaming lahat na hindi ito pangmatagalang landas pasulong.


### Mga implikasyon

Maaaring kailanganing subaybayan ng mga developer ang mga lihim sa dalawang lugar: Bitwarden para sa access na nakatuon sa user, at Vault para sa access na nakatuon sa sistema.


## Kaugnay


### Mga kaugnay na desisyon

Dapat isama sa desisyon kung aling CI/CD server ang patunay ng kakayahan para sa pag-access ng mga lihim.

Kakailanganin naming magpasya kung paano pamamahalaan ang mga lihim, sa usapin ng mga patakaran, rotasyon, organisasyon, atbp.


### Mga kaugnay na requirement

Magkakaroon ang mga lihim ng mga kaugnay na requirement para sa compliance, auditing, at HR onboarding/offboarding.


### Mga kaugnay na artifact

Inaasahan naming maaari kaming mag-export ng ilang lihim sa mga environment variable.


### Mga kaugnay na prinsipyo

Madaling baligtarin.

Madaling paralelo ibig sabihin madaling gumamit ng iba't ibang password manager.

Mura subukan ibig sabihin may libreng trial at walang pangako.


## Mga tala

Mga tala sa pagsusuri dito. Ang lahat ng tala ay mga pampublikong komento sa iba't ibang devops discussion board.


### Vault ng HashiCorp

Ang Vault ang eksaktong kailangan mo dito. 

Huwag lang basta ihagis ang Vault sa production, i-set up muna ito sa test environment, dahil maaaring medyo kulang ang dokumentasyon ng HashiCorp kahit kamangha-mangha ang kanilang mga produkto.

Napakatarik ng learning curve at hindi simple i-set up. 

Medyo nakakainis ang unang setup. Sulit na sulit naman ito, at sapat ang suporta ng komunidad para makaraos ka.

Kakila-kilabot ang mga doc ngunit maraming gabay online ng mga taong nagse-set up nito at kung pagsasamahin mo ang ilan sa mga ito ay magkakaroon ka ng gumaganang setup.

Kinailangan ng pagkalikot sa kanilang mga helm chart (vault at consul) ang unang setup. Bagama't teknikal na maaari kang gumamit ng maraming ibang back-end, talagang hindi ko ito inirerekomenda. Maaaring napakaliit lang ang back-end/consul kung wala kang maraming data na iimbak.

Tiyak na maging komportable/pamilyar sa paggamit ng CLI, dahil mas parang proof-of-concept/advertisement portal para sa kanilang enterprise edition ang GUI.

Nakakainis ang katotohanang hindi mo basta "mapupunan" ito. Halimbawa kung may 5 field ka, kailangan mong manu-manong idagdag ang bawat field para sa bawat item. Kaya hindi ito tulad ng paunang pagtukoy ng mga field para sa isang partikular na kategorya, at pagpuno sa mga field na iyon para sa lahat ng item sa kategoryang iyon, mas parang "ginagawa mo ang lahat sa bawat pagkakataon", na (sa isip ko) ay nakakairita.

Maaari mo ring tingnan ang goldfish bilang UI sa ibabaw ng vault. Ginagawa nitong medyo maganda ang pagpapasali sa iyong koponan dito. May demo rin sila. 1. I-set up ang consul. 2. I-set up ang vault na nakaturo sa consul. 3. I-set up ang goldfish na nakaturo sa vault. 3. Mag-set up ng cron job para patakbuhin ang consul snapshot para sa mga backup.



### LastPass

LastPass Teams. Ginagamit namin ito, may mga custom na template, ACL, walang kulang sa palagay ko.

Ipinatupad ko ang LastPass sa organisasyon ko at binibigyan ko ito ng C+/B-. Ang pinakamalaking isyu kamakailan ay ang kakulangan ng pagiging maaasahan. Sa nakalipas na 90 araw, ilang oras nang maraming beses na napilitang mag-offline mode ang mga vault. Hindi ito mainam para sa organisasyon ko dahil literal na mahigit 4,000 password ang nakaimbak sa mahigit 20 nakabahaging folder. Gaya ng maiisip mo sa dami ng password na iyon, kahit ilan ay na-u-update o nadaragdag araw-araw. May DR plan kami kung tumagal ang mga isyu nang higit sa isa o dalawang oras: nagpipirma at nag-e-encrypt ang isang script ng CSV dump ng vault gabi-gabi na maaaring i-import sa keepass.

May mga hindi naiulat na pagbaba ng kalidad ng serbisyo ang LastPass: "gumagana" ang login ngunit hindi kumukuha ng mga site, may mga random na feature na sira sa admin panel, at hindi wastong nagbabahagi ng mga key para sa mga bagong top level na nakabahaging folder. May partikular akong 'key push'/backup user na nasa bawat grupo. Karaniwang naaayos ng pag-log in bilang user na iyon ang anumang isyu sa pagbabahagi ng key ngunit hindi kapag bumaba ang kalidad ng serbisyo sa kabila ng sinasabi ng status page...

Para sa integrasyon, maaaring maging madali kung may wastong mga ACL ka na may least privileged na modelo hal. kung ang isang user ay may read & write at read only sa isang entry o folder, read only na pahintulot lang ang makukuha niya. Sa kasamaang-palad, hindi pinakamaganda ang mga ACL ng organisasyon ko kaya napunta ako sa paggamit ng JSON provisioning API at ~500 linya ng python dahil hindi maayos na nagma-map sa least privileged na modelo ang magkakaugnay na kalikasan ng aming daan-daang ACL. Napunta ako sa pagkuha ng lahat ng ACL na kinabibilangan ng isang user at paggawa ng uri ng dependency walk.

Kung ang istruktura ng iyong ACL o grupo ay nabuo na nang may least privileged na istruktura sa isip, gagana nang maayos ang AD/LDAP sync tool para sa Windows.

Makipag-ugnayan sa kanilang sales team at maaari ka nilang bigyan ng mas mahabang Enterprise trial. Tiyaking lubos mong nauunawaan ang mga limitasyon nito bago ka magpasya. Marami kaming naranasang paghihirap ng paglago ngunit maliban sa mga outage o pagbaba ng serbisyo sa panig ng server, napakakinis nito.


### Bitwarden

May magandang tooling sa paligid ng Bitwarden (WebUI, CLI, Mobile, Desktop). Self-hosted at medyo madaling i-set up. Medyo magandang dokumentasyon at inirerekomendang tool ng PrivacyTools.


### EnvKey

https://www.envkey.com/ Ay isang saas. Talagang madaling ipatupad, i-integrate at pamahalaan.

Mga Feature:

  * Protektahan ang mga API key at kredensyal.

  * Panatilihing naka-sync ang configuration sa lahat ng dako.

  * Matalino, end-to-end na naka-encrypt na pamamahala ng configuration at mga lihim. 

  * Pigilan ang di-ligtas na pagbabahagi at pagkalat ng config. 

  * Mag-integrate sa loob ng ilang minuto.

Mga Kakayahan:

  * Pamahalaan ang configuration at antas ng access para sa lahat ng iyong app, environment, at koponan sa iisang lugar.

  * I-configure ang anumang development o server environment gamit lamang ang isang environment variable.

Mga Pakinabang:

  * Magandang home page.

  * Malinaw na value prop.

  * Biswal na napakahusay na web app.

  * Superyor na halimbawang data hal. Algolia, AWS, Datadog, GitHub, Stripe, atbp.

  * Nakipag-usap sa tagapagtatag nang 30 minuto tungkol sa kumpanya, UI, atbp. Mukhang maalam si Dane, tapat tungkol sa mga pakinabang/disbentaha, at isang viable na kasosyo.

  * Karaniwang kumpanya ng Y Combinator ang kumpanya, na may 1 tagapagtatag. Nakalikom ng $120K noong 2018-01.

  * Nakatuon ang pokus sa pagdating sa mga enterprise feature, lalo na ang paglipat mula sa cloud-hosting ng EnvKey patungo sa on-prem o BYOC.

  * Posibleng landas pasulong na magsisimula sa EnvKey para sa dali ng paggamit, at pagkatapos (o kasabay) ay pagdaragdag ng Vault. 


### Confidant ng Lyft

https://lyft.github.io/confidant/

Ang Confidant ay isang open source na serbisyo sa pamamahala ng lihim na nagbibigay ng user-friendly na imbakan at access sa mga lihim sa ligtas na paraan, mula sa mga developer sa Lyft.

KMS Authentication: Nilulutas ng Confidant ang problemang chicken-and-egg ng authentication sa pamamagitan ng paggamit ng AWS KMS at IAM upang payagan ang mga IAM role na bumuo ng ligtas na authentication token na maaaring i-verify ng Confidant. Pinamamahalaan din ng Confidant ang mga KMS grant para sa iyong mga IAM role, na nagpapahintulot sa mga IAM role na bumuo ng mga token na magagamit para sa service-to-service authentication, o para magpasa ng mga naka-encrypt na mensahe sa pagitan ng mga serbisyo.

At-rest encryption ng mga lihim na may bersyon: Nag-iimbak ang Confidant ng mga lihim sa paraang append-only sa DynamoDB, na bumubuo ng natatanging KMS data key para sa bawat rebisyon ng bawat lihim, gamit ang Fernet symmetric authenticated cryptography.

Isang user-friendly na web interface para sa pamamahala ng mga lihim: Nagbibigay ang Confidant ng AngularJS web interface na nagpapahintulot sa mga end-user na madaling pamahalaan ang mga lihim, ang mga mapping ng mga lihim sa mga serbisyo, at ang kasaysayan ng mga pagbabago.


### Devolutions Password Server

https://server.devolutions.net/

I-secure, pamahalaan, at subaybayan ang access sa mga privileged na account at session.

Isang komprehensibo at lubos na secured na password vault na nagpapahintulot sa iyong kontrolin ang access sa iyong mga privileged na account, habang pinabubuti rin ang pangkalahatang network visibility para sa mga sysadmin at nagbibigay ng tuloy-tuloy na karanasan para sa mga end user.

Mga feature: centralized na organization password vault, vault na pribado para sa partikular na user, password manager, credential injection,
Active Directory integration, role-based access control, two-factor authentication, handa para sa enterprise, mga IP restriction, mga kakayahan sa pamamahala, awtomatikong password generator, access sa mobile app, kasaysayan ng password, mga ulat sa access, mga alerto sa email.

  * sumusuporta sa data encryption

  * sumusuporta sa maraming Authentication scheme kabilang ang LDAP, O365, at mga Local user NA may suporta para sa MFA mula sa maraming pinagmulan

  * maraming repository/vault na may pinong access control para sa maraming koponan

  * makabagong Web UI

  * mga pribadong vault ng kredensyal at koneksyon para sa mga personal na kredensyal/koneksyon

  * mga mobile app para sa IOS/Android

  * mga audit log para sa bawat entry, sino/ano/kailan na may opsyonal na prompt kung bakit sila nag-a-access

  * mga customizable na template (bagama't native nilang sinusuportahan ang daan-daang uri ng koneksyon)

  * napakaraming dagdag na feature at isang Windows/Mac thick client (Remote Desktop Manager) na maaari mong i-sync na lubhang nagpapalawak ng mga opsyon...one-click na mga koneksyon

  * hindi naman masama ang presyo - hanggang 15 user ay $500 kada taon para sa password server


### Secret Server ng Thycotic

https://thycotic.com/products/secret-server/

Mga feature ng on-premise na bersyon: 

  * Kabuuang kontrol sa iyong end-to-end na mga sistema at infrastructure ng seguridad

  * I-deploy ang software sa loob ng iyong on-premise na data center o sa sarili mong virtual private cloud instance

  * Tuparin ang mga legal at regulatoryong obligasyon na nangangailangang manatili sa on premise ang lahat ng data at sistema

Mga feature ng cloud na bersyon:

  * Hinahayaan ka ng software-as-a-service na modelo na mag-sign up at magsimula agad

  * Elastic na scalability habang lumalaki ka

  * Mga kontrol at redundancy na inihahatid ng Azure na may 99.9% uptime SLA

Feedback ng user:

  * Ginagamit namin dati ang produktong iyon. Napakadaling lampasan at gumagana lang ang mga tuntunin para sa matatalinong tao. Madaling masira ng tamad o mangmang na user sa isang team area. Maaaring pag-usapan ang mga presyo kapag nakipag-usap ka sa kanila.

  * Maaari mo itong patakbuhin gamit ang SQL express at isang Win 7box. 

  * Mura.
