# Mga programming language

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

Kailangan naming pumili ng mga programming language para sa aming software. May dalawa kaming pangunahing pangangailangan: isang front-end programming language na angkop para sa mga web application, at isang back-end programming language na angkop para sa mga server application.


### Desisyon

Pinipili namin ang TypeScript para sa front-end.

Pinipili namin ang Rust para sa back-end.


### Katayuan

Napagpasyahan. Bukas kami sa mga bagong alternatibo habang lumilitaw ang mga ito.


## Mga detalye


### Mga palagay

Karaniwan ang mga front-end application:

  * Karaniwang mga user at interaksyon

  * Karaniwang mga browser at sistema

  * Karaniwang mga pagbuo at deployment

Malamang na mabilis na uunlad ang mga front-end application:

  * Gusto naming matiyak ang mabilis at madaling pagbuo, deployment, iterasyon, atbp.

  * Pinahahalagahan namin ang provability, tulad ng type safety, at ayos lang sa amin ang kaunting dagdag na trabaho para makamit ito.

  * Hindi namin kailangan ang legacy compatibility.

Higit sa karaniwan ang mga back-end application:

  * Mas mataas kaysa karaniwang mga layunin sa kalidad, lalo na sa provability, pagiging maaasahan, seguridad, atbp.

  * Mas mataas kaysa karaniwang mga layunin sa near-real-time, ibig sabihin ayaw naming magkaroon ng mga pag-pause dahil sa garbage collection ng virtual machine.

  * Mas mataas kaysa karaniwang mga layunin sa functional programming, lalo na para sa parallelization, multi-core processing, at memory safety.

Tinatanggap namin ang mas mababang bilis ng compile-time kapalit ng compile-time safety at mga bilis sa runtime.


### Mga limitasyon

May matinding limitasyon kami sa mga wikang magagamit sa mga serbisyo ng malalaking cloud provider para sa mga function, tulad ng Amazon Lambda.


### Mga posisyon

Isinaalang-alang namin ang mga wikang ito:

  * C

  * C++

  * Clojure
  
  * Elixir
  
  * Erlang
  
  * Elm
  
  * Flow
  
  * Go
  
  * Haskell
  
  * Java
  
  * JavaScript
  
  * Kotlin
  
  * Python
  
  * Ruby
  
  * Rust
  
  * TypeScript



### Argumento

Buod bawat wika:

  * C: tinanggihan dahil sa mababang kaligtasan; kayang gawin ng Rust nang mas mahusay ang halos lahat.

  * C++: tinanggihan dahil magulo ito; kayang gawin ng Rust nang mas mahusay ang halos lahat.

  * Clojure: napakahusay na modeling; pinakamahusay na aproksimasyon ng Lisp; mahusay na runtime sa JVM.
  
  * Elixir: napakahusay na runtime kasama ang deployability at concurrency; napakahusay na developer experience; medyo maliit na ecosystem.

  * Erlang: napakahusay na runtime kasama ang deployability at concurrency; mahirap na developer experience; medyo maliit na ecosystem.

  * Elm: mukhang napakapangako; naglalathala ang IBM ng mga pangunahing case study na may magagandang resulta; mas maliit na ecosystem.

  * Flow: kawili-wiling pagpapabuti sa JavaScript; gayunpaman; lumalayo na rito ang mga developer.

  * Go: napakahusay na developer experience; napakahusay na concurrency; ngunit may rekord ng masasamang desisyon na pumipilay sa wika.

  * Haskell: pinakamahusay na functional na wika; mas maliit na komunidad ng mga developer; hindi pa nakakamit ang sapat na nailathalang tagumpay sa production.

  * Java: napakahusay na runtime; napakahusay na ecosystem; di-gaanong developer experience.

  * JavaScript: pinakapopular na wika kailanman; pinakamalawak na ecosystem.

  * Kotlin: inaayos ang napakarami sa Java; mahusay na suporta ng JetBrains; magagandang nailathalang kaso ng pag-port mula Java patungong Kotlin.
  
  * Python: pinakapopular na wika para sa systems administration; mahusay na analytics tooling; magagandang web framework; ngunit inabandona ng Google pabor sa Go.

  * Ruby: pinakamahusay na developer experience kailanman; pinakamahusay na web framework; pinakamabait na komunidad; ngunit napakabagal; medyo mahirap i-package.

  * Rust: pinakamahusay na bagong wika; diin sa zero-abstraction; diin sa concurrency; gayunpaman medyo maliit na ecosystem; at may sinadyang mga limitasyon sa ilang uri ng compiler acceleration hal. kailangang tahasang unsafe ang direktang memory access.

  * TypeScript: nagdaragdag ng mga type sa JavaScript; mahusay na transpiler; lumalaking diin ng mga developer sa pag-port mula JavaScript patungong TypeScript; matibay na suporta ng Microsoft.

Napagpasyahan naming may hanay ng mga trade-off ang mga VM na hindi namin kailangan sa ngayon, tulad ng dagdag na pagiging masalimuot na nagbibigay ng mga kakayahan sa runtime.

Naniniwala kaming dalawang cross-cutting na alalahanin ang nagtutulak sa aming pangunahing desisyon:

  * Para sa pinakamabilis na bilis ng runtime at pinakamahigpit na access sa sistema, pipiliin namin ang JavaScript at C.

  * Para sa halos-pinakamabilis na bilis ng runtime at halos-pinakamahigpit na access sa sistema, pinipili namin ang TypeScript at Rust.

Mga karapat-dapat banggitin ang mga VM na wika at web framework na pipiliin namin kung gusto namin ng VM na wika:

  * Clojure at Luminus

  * Java at Spring

  * Elixir at Phoenix


### Mga implikasyon

Kailangang matutunan ng mga front-end developer ang TypeScript. Malamang na madali ang learning curve kung ang pangunahing karanasan ng developer ay sa paggamit ng JavaScript.

Kailangang matutunan ng mga back-end developer ang Rust. Malamang na katamtaman ang learning curve kung ang pangunahing karanasan ng developer ay sa paggamit ng C/C++, at mahirap na learning curve kung ang pangunahing karanasan ng developer ay sa paggamit ng Java, Python, Ruby, o katulad na mga memory-managed na wika. 

Parehong medyo bago ang TypeScript at Rust. Nangangahulugan ito na maraming tool ang wala pang dokumentasyon para sa mga wikang ito. Halimbawa, kakailanganing i-set up ang devops pipeline para sa mga wikang ito, at sa ngayon, wala sa mga devops tool na sinusuri namin ang may default na halimbawa para sa mga wikang ito.

Medyo mabagal ang mga compile time ng TypeScript at Rust. Maaaring bahagi nito ay dahil sa pagiging bago ng mga wika. Maaaring gusto naming tingnan kung paano pagagaanin ang mabagal na compile time, tulad ng compile-on-demand, compile-concurrency, atbp.

Hindi pa laganap at hindi pa first-class ang suporta ng IDE para sa mga wikang ito. Halimbawa, nagbebenta ang JetBrains ng PyCharm IDE para sa first-class na suporta sa Python, ngunit hindi nagbebenta ng IDE na may first-class na suporta sa Rust; sa halip, maaaring gumamit ang JetBrains ng Rust plug-in na nagbibigay ng marahil 80% ng suporta sa wikang Rust kumpara sa suporta sa wikang Python.


## Kaugnay


### Mga kaugnay na desisyon

Layunin naming pumili ng mga ecosystem na umaayon sa mga wikang ito.

Halimbawa, gusto naming pumili ng IDE na may mahusay na kakayahan para sa mga wikang ito.

Halimbawa, para sa aming front-end web framework, mas malamang na magpasya kami sa framework na kadalasang nakatuon sa TypeScript (hal. Vue) kaysa sa framework na kadalasang nakatuon sa payak na JavaScript (hal. React).


### Mga kaugnay na requirement

Dapat suportahan ng buong toolchain namin ang mga wikang ito.


### Mga kaugnay na artifact

Inaasahan naming maaari kaming mag-export ng ilang lihim sa mga environment variable.


### Mga kaugnay na prinsipyo

Sukatin nang dalawang beses, buuin nang isang beses. Inuuna namin ang ilang kaligtasan kaysa sa ilang bilis.

Mas mahalaga ang runtime kaysa compile time. Inuuna namin ang paggamit ng customer kaysa paggamit ng developer.


## Mga tala

Anumang tala dito.
