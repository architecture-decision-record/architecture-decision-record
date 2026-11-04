# Architecture Decision Record para sa Django Framework ng Python

Petsa ng Desisyon: 2021-07-15

Katayuan: Tinanggap

## Konteksto

Plano ng aming organisasyon na bumuo ng web application na namamahala ng data ng customer. Pinili namin ang Python bilang programming language at isinasaalang-alang ang Django bilang web framework sa pagbuo ng application.

## Desisyon

Nagpasya kaming gamitin ang Django web framework sa pagbuo ng web application. Nagbibigay ang Django ng matibay na hanay ng mga tool at feature para sa mabilis at mahusay na pagbuo ng mga web application. 

## Mga Salik

Ilan sa mga salik na nakaimpluwensya sa aming desisyon ay ang:

1. Object-Relational Mapping (ORM): May built-in na ORM ang Django na nagpapahintulot sa aming makipag-ugnayan sa database nang hindi nagsusulat ng mga SQL query. Pinadadali nito ang pagbuo ng application at pagpapanatili nito sa pangmatagalan.

2. MVC framework: Sinusunod ng Django ang arkitekturang Model-View-Controller (MVC), na nagpapadali sa paghihiwalay ng business logic at presentation layer ng application.

3. Scalability: Kilala ang Django sa mga kakayahan nito sa scalability, kaya napakahusay na pagpipilian ito sa pagbuo ng malalaking application.

4. Seguridad: May built-in na security feature ang Django, tulad ng proteksyon laban sa mga karaniwang web attack gaya ng cross-site scripting (XSS) at SQL injection.

5. Suporta ng Komunidad: May malaki at aktibong komunidad ang Django na nagbibigay ng suporta at nag-aambag sa pagbuo ng framework.

## Mga Alternatibong Isinaalang-alang

Isinaalang-alang namin ang iba pang web framework tulad ng Flask at Pyramid. Gayunpaman, natuklasan naming mas hinog at matatag ang Django na framework na may matibay na hanay ng mga feature.

Tinalakay din namin ang pagbuo ng application nang walang web framework at paggamit ng mga library tulad ng SQLAlchemy at Flask-RESTful. Gayunpaman, natuklasan naming nag-aalok ang Django ng mas malawak na functionality, kaya mas mahusay na pagpipilian ito para sa kumpletong web application.

## Mga Kahihinatnan

Hahantong ang pag-aampon ng Django sa sumusunod na mga kahihinatnan:

1. Mas madaling bumuo at magpanatili ng application dahil sa mga built-in na tool at feature ng Django.

2. Paghihiwalay ng business logic at presentation layer, na humahantong sa mas maayos at mas madaling panatilihing code.

3. Scalability at katatagan ng application.

4. Mga built-in na security feature na tumutulong protektahan ang application laban sa mga karaniwang web attack.

5. Access sa malaki at aktibong komunidad para sa suporta.

Nauunawaan naming mas matarik ang learning curve ng Django kaysa sa ibang framework, ngunit nakikita naming sulit ang puhunan para sa mga pangmatagalang benepisyong ibinibigay nito.

## Konklusyon

Batay sa mga salik na isinaalang-alang, nagpasya kaming gamitin ang Django web framework sa pagbuo ng web application. Naniniwala kaming ang mga feature, suporta ng komunidad, at kakayahan sa scalability ng Django ang gumagawa rito bilang pinakamahusay na pagpipilian sa pagbuo ng kumpletong web application. Sasanayin namin ang aming mga developer sa paggamit ng Django upang matiyak na epektibo at mahusay na magagamit ang framework.
