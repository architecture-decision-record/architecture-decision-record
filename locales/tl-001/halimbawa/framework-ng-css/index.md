# Architecture Decision Record: CSS framework

Nilalaman:

- [Buod](#buod)
  - [Isyu](#isyu)
  - [Desisyon](#desisyon)
  - [Katayuan](#katayuan)
- [Mga detalye](#mga-detalye)
  - [Mga palagay](#mga-palagay)
  - [Mga limitasyon](#mga-limitasyon)
  - [Mga posisyon](#mga-posisyon)
  - [Argumento](#argumento)
  - [Mga implikasyon](#mga-implikasyon)
- [Kaugnay](#kaugnay)
  - [Mga kaugnay na desisyon](#mga-kaugnay-na-desisyon)
  - [Mga kaugnay na requirement](#mga-kaugnay-na-requirement)
  - [Mga kaugnay na artifact](#mga-kaugnay-na-artifact)
  - [Mga kaugnay na prinsipyo](#mga-kaugnay-na-prinsipyo)
- [Mga tala](#mga-tala)


## Buod


### Isyu

Gusto naming gumamit ng CSS framework para buuin ang aming mga web application:

  * Gusto naming mabilis at maaasahan ang karanasan ng user, sa lahat ng popular na browser at laki ng screen.

  * Gusto namin ng mabilis na pag-iterate sa disenyo, layout, UI/UX, atbp.

  * Gusto namin ng mga responsive na application, lalo na para sa mas maliliit na screen tulad ng sa mga mobile device, mas malalaking screen tulad ng sa 4K widescreen, at mga dynamic na screen tulad ng mga display na naiikot.  


### Desisyon

Nagpasya sa Bulma.


### Katayuan

Nagpasya sa Bulma. Bukas sa mga bagong pagpipilian ng CSS framework habang dumarating ang mga ito.


## Mga detalye


### Mga palagay

Gusto naming gumawa ng mga web app na makabago, mabilis, maaasahan, responsive, atbp.

Binabawasan/inaalis ng mga karaniwang makabagong web app ang paggamit ng jQuery dahil sa maraming dahilan: 

  * Unti-unting isinasama ng makabagong JavaScript ang maraming kakayahang ibinigay ng jQuery, kaya hindi na gaanong kailangan ang jQuery, at may mas mahusay/mas mabilis/mas maliliit na module na nagbibigay ng mga partikular na implementasyon

  * Ang malawak na pamamaraan ng jQuery ay direktang pagmamanipula ng DOM, na isang anti-pattern para sa mga makabagong JavaScript framework (hal. React, Vue, Svelte)

  * Nakakasagabal ang jQuery sa sarili nito kapag dalawang beses itong na-load, atbp.


### Mga limitasyon

Kung pipili kami ng CSS framework na gumagamit ng jQuery, napipilitan kaming mag-import ng jQuery. Halimbawa, gumagamit ng jQuery ang Semantic UI, at hindi ang Tachyons.

Kung pipili kami ng CSS framework na minimal, mawawala sa amin ang mga component ng framework na maaaring kailangan namin ngayon o sa lalong madaling panahon. Halimbawa, nagbibigay ang Semantic UI ng image carousel, at hindi ang Tachyons.


### Mga posisyon

Isinaalang-alang namin ang paggamit ng walang framework. Mukha pa rin itong viable, lalo na dahil ibinibigay ng CSS grid ang karamihan ng kailangan ng aming proyekto..

Isinaalang-alang namin ang maraming CSS framework gamit ang mabilis na shortlist triage: Bootstrap, Bulma, Foundation, Materialize, Semantic UI, Tachyons, atbp. Ang aming dalawang napili para sa mas malalim na pagrepaso ay ang Semantic UI (dahil ito ang may pinaka-semantic na pamamaraan) at ang Bulma (dahil ito ang may pinakamagaan na pamamaraan na nagbibigay ng mga component na kailangan namin ngayon).

Isinaalang-alang namin ang Semantic UI. Nagbibigay ito ng maraming component, kasama ang mga gusto namin para sa aming proyekto: mga tab, grid, button, atbp. Nagsagawa kami ng pilot sa Semantic UI sa dalawang paraan: gamit ang karaniwang mga CDN file, at gamit ang mga NPM repo. Nagtagumpay kami sa Semantic UI sa isang static na HTML page, ngunit hindi kami nagtagumpay sa loob ng aming timebox sa pagbuo ng JavaScript SPA (pangunahin dahil sa mga isyu sa pag-load ng jQuery). Natuklasan naming humihiling din ang ibang coder sa mga developer ng Semantic UI na gumawa ng bersyong walang jQuery, sa parehong mga dahilan namin. Matagal nang humihiling ang ibang coder ng bersyong walang jQuery, ngunit tumanggi ang mga developer, at sinabing masyadong mahirap isulat ang anumang bersyong walang jQuery hal. ~"mahigit 22,000 touchpoint ang proyektong Semantic UI na gumagamit ng jQuery".

Halimbawa sa Semantic:

```html
<div class="ui top attached tabular menu">
  <a class="item">Alpha</a>
  <a class="item">Bravo</a>
</div>
```

Isinaalang-alang namin ang Bulma. May maraming katulad na kakayahan ang Bulma sa Semantic UI, bagama't hindi kasing-dami ng sopistikadong component. Binuo ang Bulma gamit ang makabagong pamamaraan, tulad ng walang jQuery. May ilang third-party na component ang Bulma, na ang ilan ay maaaring gusto naming gamitin.


Halimbawa sa Bulma:
```html
<div class="tabs">
  <ul>
    <li><a>Alpha</a></li>
    <li><a>Bravo</a></li>
  </ul>
</div>
```


### Argumento

Tulad ng nasa itaas.

Partikular, mukhang may babalang bandila ang Semantic UI kapwa sa teknolohiya (ibig sabihin napakaraming touchpoint ng jQuery) at sa pamumuno (ibig sabihin ang walang-jQuery ay matigas na hindi, sa halip na subukan ang roadmap, tuloy-tuloy na pagpapabuti, o pangangalap ng donasyon, atbp.).


### Mga implikasyon

Kung makakita kami ng mahusay na CSS framework na walang jQuery, karaniwang nakatutulong at mabuti ito sa kabuuan.


## Kaugnay


### Mga kaugnay na desisyon

Maaaring makaapekto sa testability ang CSS framework na pipiliin namin.


### Mga kaugnay na requirement

Gusto naming mabilis na mailabas ang puro-makabagong app. 

Ayaw naming gumugol ng oras sa paggawa sa mas lumang mga framework (lalo na ang Semantic UI) na gumagamit ng mas lumang mga dependency (lalo na ang jQuery).


### Mga kaugnay na artifact

Naaapektuhan nito ang lahat ng karaniwang HTML na gagamit ng CSS.


### Mga kaugnay na prinsipyo

Madaling baligtarin.

Pangangailangan ng bilis.


## Mga tala

Anumang tala dito.
