# Microsoft Azure DevOps

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
  * [Microsoft Devops CI: An Unsatisfying Adventure](#microsoft-devops-ci-an-unsatisfying-adventure)
  * [Mga tampok mula sa talakayan sa Hacker News](#mga-tampok-mula-sa-talakayan-sa-hacker-news)
  * [Windows Development MVP](#windows-development-mvp)
  * [Buod ni Edward Thomson (Azure PM)](#buod-ni-edward-thomson-azure-pm)


## Buod


### Isyu

Gusto naming gumamit ng devops para mag-build, mag-integrate, mag-deploy, at mag-host ng aming mga proyekto. Isinasaalang-alang namin ang Microsoft Azure DevOps.

  * Gusto naming mabilis at maaasahan ang developer experience, para sa setup ng devops hal. pag-configure pati na rin sa patuloy na paggamit hal. mabilis na oras ng build.
  
  * Gusto naming isaalang-alang ang paggamit ng Microsoft Azure sa kabuuan, para sa pagho-host ng mga app ng proyekto, database, atbp.


### Desisyon

Nagpasya laban sa Microsoft Azure DevOps.


### Katayuan

Napagpasyahan. Bukas sa muling pagsasaalang-alang kung/kapag dumating ang bagong makabuluhang impormasyon.


## Mga detalye


### Mga palagay

Ang lahat ng karaniwang palagay sa devops, tulad ng sa aklat na Accelerate.

  * Malaking tulong ang mabibilis na build. Pinabibilis nito ang mga feedback loop.

  * Maaari kaming magpalit-palit ng mga piraso mula sa ibang vendor ibig sabihin maaari naming dalhin ang sarili naming mas mabilis na build server, o gamitin ang sarili naming pagpili ng version control system, o makipag-ugnayan sa self-hosted na continuous integration server.
  
  * Malaking tulong ang pinasimpleng usability, para sa developer experience, at kaugnay nito sa mga banayad na larangan tulad ng pagkakapare-pareho, kalinawan, seguridad, at dali ng learning curve.

  * Kapag may sira o problematiko, gusto namin ng epektibong paraan para iulat ang isyu. Lalo itong mahalaga para sa anumang isyung may kinalaman sa seguridad.


### Mga limitasyon

Walang kilala. May nailathalang pangako ang Azure na makisama nang maayos sa mga panlabas na tool.


### Mga posisyon

Isinaalang-alang namin ang paggamit ng Microsoft Azure Devops kontra AWS na siyang kasalukuyang ginagamit.

Nag-eksperimento kami sa Azure DevOps, Azure Pipelines, Azure Repo, at pag-spin up ng Azure ng bagong server sa pamamagitan ng Terraform.

Nag-eksperimento kami sa pagkuha ng suporta mula sa mga kinatawan ng Microsoft.

Nangalap kami ng impormasyon mula sa mga kapwa propesyonal sa mga blog at Hacker News.


### Argumento

Nag-a-advertise ang Azure DevOps ng mahusay na hanay ng mga alok, ngunit hindi sila tumatagal, hindi sila gumagana nang maayos nang magkakasama, at mahina ang suporta.

Ang aming sariling karanasan:

  * Magulo ang setup ng Azure na maraming UI, na ang ilan ay nagsasapawan sa mga Microsoft account, ang iba ay hindi. Hal. may Azure sign in, Microsoft.com sign in, Live.com sign in, atbp. at lahat ay sabay-sabay na umiiral.

  * Nakatagpo kami ng maliit na isyu sa seguridad habang nagse-set up, at walang nakitang solusyon. Sinubukan namin ang maraming paraan para iulat ito, sa maraming kinatawan ng Microsoft, nang walang tagumpay. Matagumpay naming naiulat ito sa Microsoft security, na sumagot ng won't fix.

  * Madalas na mali o luma na ang dokumentasyon. Ang ilan nito ay dahil sa mahinang search engine ng Microsoft, at ang ilan ay dahil sa di-gaanong SEO.
  
  * Mahusay na nadokumento ang setup ng Terraform, at gumagana ito. Gayunpaman, mahina ang suporta sa Terraform kumpara sa AWS dahil bumubuo ang Microsoft ng mga ugnayan sa negosyo sa mga vendor para gumawa ng chain-through na halimbawa ng setup ng Terraform.

Ang karanasan ng aming mga kapwa propesyonal:

  * Matapos ang sarili naming blind assessment, naghanap kami ng karanasan ng mga kapwa propesyonal. Kinumpirma ng nakita namin ang aming mga karanasan.

  * Nag-ulat ang mga kapwa propesyonal ng karagdagang problema sa oras ng build, at problema sa bring-your-own-build server. Mas malala nang malaki ang mga problemang ito kaysa sa mga problema sa UI, dahil ang paggawa ng build ang pangunahing layunin ng build pipeline, at inaasahan naming marami ang gagawin kada araw.

  * Nakakita kami ng mahusay na pakikilahok ng mga kasamahang taga-Azure sa mga lugar ng talakayan. Papuri sa Microsoft para dito. Lalo kaming humanga kay Edward Thomson, Azure PM at coder, dahil sa kanyang pakikilahok, pagiging prangka, at mga teknikal na paliwanag.


### Mga implikasyon

Mukhang mas magiging magastos (~3x) sa oras at gastos ang pagpili sa Microsoft Azure DevOps kaysa sa hindi pagpili sa Azure.


## Kaugnay


### Mga kaugnay na desisyon

Kung pipiliin namin ang Azure DevOps, maraming kaugnay na alok, kasama ang Azure Repo, Azure Pipeline, atbp. Naniniwala kaming kung pipiliin namin ang Azure Devops, maaaring mas madali nitong gawing gamitin ang mas maraming kakayahan ng Azure, o maaaring mas mahirap gamitin ang mga kakayahan ng ibang vendor.

Naniniwala kaming gumagawa ng malalaking hakbang ang Microsoft sa developer experience, at nakikita naming gumagawa ang Microsoft ng malalaking acquisition ng mga developer tool (hal. GitHub) at dependency (hal. Citus).

Kung pipiliin namin ang Azure DevOps, maaaring gusto naming bigyang-diin ang pagpili sa mga alok na galing sa acquisition ng Microsoft, at maaari rin naming lapitan ang mga alok na galing sa acquisition nang may mas maraming pag-iingat/pagtatasa dahil sa posibleng tissue-rejection hal. panganib ng turnover ng mga tauhan.


### Mga kaugnay na requirement

Gusto naming napakabilis ng oras ng build. Tinatanggap naming magbayad ng mataas na premium para dito. Ito ay dahil gusto naming mag-iterate nang napakabilis.

Gusto naming napakataas ng pagiging maaasahan. Tinatanggap naming magbayad ng mataas na premium para dito. Ito ay dahil sinusubukan namin ang mga use case na mataas ang halaga, kasama ang mga transaksyong pinansyal, kumpidensyal na transaksyon, atbp.

Kabilang sa aming nangungunang 4 na devops KPI ang mean time to recovery, na nangangailangan ng mabibilis na build at mataas na pagiging maaasahan.


### Mga kaugnay na artifact

Gusto naming maglabas ang build system ng mga artifact na angkop gamitin sa ibang sistema, tulad ng Artifactory.


### Mga kaugnay na prinsipyo

Madaling baligtarin. Maaari naming suriin ang Azure DevOps nang kasabay ng kasalukuyang AWS.


## Mga tala


### Microsoft Devops CI: An Unsatisfying Adventure

https://toxicbakery.github.io/vsts-devops/microsoft-devops-ci/

Blog post.

"Bilang software developer, alam kong mismo kung gaano kahirap bumuo ng mga de-kalidad na produkto nang mabilis at mura. Isa itong sining na minsan ay nagagawa naming tama, at sa ibang pagkakataon ay bumabagsak sa isang bagay na katulad ng government healthcare site noong panahon ni Obama. Nag-iiba ang antas ng aming kontrol sa resultang produkto, at ang sisi sa kabiguan ay kadalasang napupunta sa maling mga tao sa hierarkiya ng pagdedesisyon. Ang Azure DevOps ng Microsoft (dating kilala bilang Visual Studio Team Services), sa kabila ng malinaw na mabubuting intensyon, ay isang perpektong unos ng masasamang desisyon at mahinang pagpapatupad."


### Mga tampok mula sa talakayan sa Hacker News

https://news.ycombinator.com/item?id=18983586

"Malawakan naming ginagamit ang Azure DevOps sa trabaho ko at, matapos gumamit ng GitHub, Gitlab, mga self-hosted na solusyon, Jenkins, TeamCity... pinakahuli talaga ang Azure DevOps."

"Napakagulo ng UI sa lahat ng dako. Ang pinakamasama para sa akin ay ang mga pull request. Napakahirap makipagtrabaho sa mga tao sa isang pull request. Hindi ko man lang maituro sa iyo ang "isang" partikular na problema - para sa amin, sira ito sa lahat ng dako."

"Ang Azure Devops ay isang bagay na gusto kong mahalin. Patuloy na nagbabago ang UI, ngunit hindi inaayos ang mga pinagbabatayang bug na matagal nang naririyan."

"Hindi maayos na naka-integrate ang mga tool, talagang mabagal ang UI, walang dashboard view ng mga aktibong pull request, build, release, atbp. para sa mga paborito kong repo. Hindi kapani-paniwalang mabagal ang oras ng Build/Deploy."

"Sinubukan din naming gamitin ang Azure Boards (Work Items, Boards, Backlogs, atbp.). Aray. Kumpletong gulo ito ng UI na may magkakahiwalay na ideya. Sa halip na ipatupad nang mahusay ang isang bagay, dalawang dosenang bagay ang ipinatupad nila nang masama."


### Windows Development MVP

Windows Development MVP dito. Pakiramdam ko ay dapat kong akuin ang bahagi ng responsibilidad dito dahil hindi ako mas malakas na nagsalita tungkol sa mga isyung ito. Ngunit kailangan kong sabihin, nadismaya akong marinig na "nagulat" kayo sa mga isyu sa UX. Sinasabi ko na sa inyong mga tauhan na kakila-kilabot ang UX (hal. mula pa bago ang paglulunsad) at paulit-ulit kong naririnig na "alam namin, inaayos namin". Sisimulan kong gawing pormal ang feedback at ipapasa ito sa mga tamang daluyan, abangan ninyo. Lokal din ako (Bellevue), gusto kong pumunta at subukang i-pipeline ang medyo simple naming oss .net/wpf/uwp app. Pinaghihinalaan kong magiging nakabubukas-ng-mata ito para sa ating dalawa.

Some examples:

* Hindi ka makagagawa ng pipeline gamit ang git repo na may mga submodule

* Natuklasan kong imposibleng i-edit ang PATH para sa ilang custom na tooling

* Hindi gaanong makabuluhan ang karanasan sa New Pipeline, ang mga bagong user na nagki-click-click ay mapupunta sa maling Docs.


### Buod ni Edward Thomson (Azure PM)

Ako ang sumulat ng code na nagme-merge ng iyong mga pull request. Program Manager sa Microsoft para sa Azure DevOps; dating software engineer sa mga version control tool sa GitHub, Microsoft, SourceGear.

https://www.edwardthomson.com/

Co-maintainer ng libgit2. https://libgit2.github.io

Co-host ng All Things Git, ang Podcast tungkol sa Git. https://www.allthingsgit.com/

Curator ng Developer Tools Weekly, isang newsletter tungkol sa mga development tool. https://developertoolsweekly.com/
