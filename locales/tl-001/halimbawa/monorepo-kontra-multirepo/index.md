# Monorepo kontra multirepo

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


## Buod


### Isyu

Kasangkot sa aming proyekto ang pagbuo ng tatlong pangunahing kategorya ng software:

  * Front-end GUI
  * Mga middleware service
  * Mga back-end server

Kapag nagde-develop kami, git ang aming source code management (SCM) version control system (VCS).

Kailangan naming piliin kung paano namin gagamitin ang git para ayusin ang aming code.

Ang pinakamataas na antas na pagpili ay ayusin bilang "monorepo" o "polyrepo" o "hybrid":

  * Ang monorepo ay nangangahulugang ilalagay namin ang lahat ng piraso sa isang malaking repo
  * Ang polyrepo ay nangangahulugang ilalagay namin ang bawat piraso sa sarili nitong repo
  * Ang hybrid ay nangangahulugang ilang halo ng monorepo at polyrepo

Para sa karagdagang impormasyon, pakitingnan ang https://github.com/joelparkerhenderson/monorepo-vs-polyrepo


### Desisyon

Monorepo kapag medyo maliit ang organisasyon/koponan/proyekto, at mas mataas ang priyoridad ng mabilis na pag-iterate kaysa sa pagpapanatili ng katatagan.

Polyrepo kapag medyo malaki ang organisasyon/koponan/proyekto, at mas mataas ang priyoridad ng pagpapanatili ng katatagan kaysa sa mabilis na pag-iterate.


### Katayuan

Napagpasyahan. Bukas sa muling pagsasaalang-alang kung/kapag may bagong tooling para sa pamamahala ng mga monorepo at/o polyrepo.


## Mga detalye


### Mga palagay

Ang lahat ng code na dine-develop namin ay para sa mga alok ng isang organisasyon, at hindi para sa pangkalahatang publiko. Ibig sabihin, hindi nilalayon ng Broker-Dealer na magkaroon ng anumang katulad ng mga boluntaryong developer mula sa pangkalahatang publiko.


### Mga limitasyon

Mahusay na nadokumento ang mga limitasyon sa https://github.com/joelparkerhenderson/monorepo-vs-polyrepo


### Mga posisyon

Isinaalang-alang namin ang mga monorepo sa istilo ng Google, Facebook, atbp. Sa palagay namin, napakalayo pa sa hinaharap ang anumang isyu sa pag-scale ng monorepo kaya magagamit namin ang parehong mga gawi ng Google at Facebook pagdating ng panahong kailanganin namin ang mga ito.

Isinaalang-alang namin ang mga polyrepo sa istilo ng karaniwang open source na proyekto ng Git, tulad ng Google Android, Facebook React, atbp. Sa palagay namin, ito ang pinakamahusay na pagpipilian para sa pakikilahok ng pangkalahatang publiko (hal. sinuman sa mundo ay maaaring gumawa sa code) at indibidwal na availability (hal. ginagamit ang proyekto nang mag-isa, nang walang ibang piraso).


### Argumento

Kapag medyo maliit ang organisasyon/koponan/proyekto, pinipili namin ang monorepo, dahil mas mataas nang malaki ang priyoridad ng mabilis na pag-iterate kaysa sa pagpapanatili ng katatagan

Kapag medyo malaki ang organisasyon/koponan/proyekto, pinipili namin ang polyrepo, dahil mas mataas nang malaki ang priyoridad ng pagpapanatili ng katatagan kaysa sa mabilis na pag-iterate.


### Mga implikasyon

Kung may umiiral na pipeline para sa CI+CD, maaaring kailanganin naming ayusin ito para sa pagsubok ng maraming proyekto sa loob ng isang repo.

Maaaring mas matagal ang CI+CD para sa buong build ng monorepo, dahil maaaring i-build ng CI+CD ang lahat ng proyekto sa monorepo.

Kung lalaki ang organisasyon/koponan/proyekto, magkakaroon ng mga isyu sa pag-scale ang monorepo.

Maaaring maging lalong mahalaga ang paglipat sa polyrepo dahil sa mga isyu sa pag-scale ng monorepo.

Ang paglipat mula monorepo patungong polyrepo ay isang malaking gawain sa devops, at kakailanganing planuhin, pamahalaan, at i-program.


## Kaugnay


### Mga kaugnay na desisyon

Gagawa kami ng mga desisyon para sa kaugnay na tooling sa pamamahala ng mga monorepo (hal. Google Bazel) at mga polyrepo (hal. Lyft Refactorator).


### Mga kaugnay na requirement

Kailangan naming buuin ang CI+CD pipeline para gumana nang maayos sa git.


### Mga kaugnay na artifact

Inaasahan naming magkakaroon ang organisasyon ng repo ng mga kaugnay na artifact para sa provisioning, configuration management, testing, at katulad na larangan ng devops. 


### Mga kaugnay na prinsipyo

Madaling baligtarin. Kung hindi gumana sa praktika ang monorepo, o hindi ito gusto ng pamunuan, simpleng magpalit sa polyrepo.

Pagkahumaling sa Customer. Pinahahalagahan namin ang pagkakaroon ng proyekto sa kamay ng mga customer, at naniniwala kaming mas mabilis kaming dadalhin ng monorepo roon kaysa sa polyrepo, at makatutulong din itong mas mabilis kaming mag-iterate.

Mag-isip nang malaki. Napakalakas na tagapagtaguyod ng mga monorepo kaysa sa mga polyrepo ang Google at Facebook, dahil maaaring sabay-sabay na mabuo/masubukan/ma-deploy ang lahat ng pangunahing alok.


## Mga tala

Magdagdag ng anumang tala dito.
