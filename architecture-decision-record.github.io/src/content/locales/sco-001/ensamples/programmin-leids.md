# Programmin leids

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


## Soummary


### Maitter

We need tae chuise programmin leids for oor saftware. We hae twa major needs: a front-end programmin leid suitable for wab applications, an a back-end programmin leid suitable for server applications.


### Decisioun

We are chuisin TypeScript for the front-end.

We are chuisin Rust for the back-end.


### Staunin

Decidit. We are open tae new alternatives as they arise.


## Pairticulars


### Assumptiouns

The front-end applications are typical:

  * Typical uisers an interactiouns

  * Typical browsers an systems

  * Typical develapments an deployments

The front-end applications is likely tae evolve quickly:

  * We want tae ensure fast easy develapments, deployments, iteratiouns, etc.

  * We value provability, sic as type safety, an we are fine daein a bit mair wark tae achieve it.

  * We dinnae need legacy compatibility.

The back-end applications are heicher-than-typical:

  * Heicher-than-typical goals for quality, especially provability, reliability, security, etc.

  * Heicher-than-typical goals for near-real-time, i.e. we dinnae want pauses due tae virtual machine garbage collection.

  * Heicher-than-typical goals for functional programmin, especially for parallelisation, multi-core processin, an memory safety.

We accept lawer compile-time speeds in favour o compile-time safety an runtime speeds.


### Limitatiouns

We hae a strang constraint on leids that are uisable wi major cloud provider services for functions, sic as Amazon Lambda.


### Positiouns

We consideret thir leids:

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



### Argiment

Summary per leid:

  * C: rejectit acause o laich safety; Rust can dae nearly everything better.

  * C++: rejectit acause it's a mess; Rust can dae nearly everything better.

  * Clojure: excellent modellin; best Lisp approximation; great runtime on the JVM.
  
  * Elixir: excellent runtime includin deployability an concurrency; excellent developer experience; relatively sma ecosystem.

  * Erlang: excellent runtime includin deployability an concurrency; challengin developer experience; relatively sma ecosystem.

  * Elm: leuks unco promisin; IBM is publishin major case studies wi guid results; smaller ecosystem.

  * Flow: interestin improvement ower JavaScript; but; developers are muivin awa frae it.

  * Go: excellent developer experience; excellent concurrency; but a track record o bad decisiouns that cripple the leid.

  * Haskell: best functional leid; smaller developer community; hasna achieved eneuch publisht production successes.

  * Java: excellent runtime; excellent ecosystem; sub-par developer experience.

  * JavaScript: maist popular leid ever; maist widespread ecosystem.

  * Kotlin: fixes sae much o Java; excellent backin bi JetBrains; guid publisht cases o portin frae Java tae Kotlin.
  
  * Python: maist popular leid for systems administration; great analytics tuilin; guid wab frameworks; but abandonit bi Google in favour o Go.

  * Ruby: best developer experience ever; best wab frameworks; nicest community; but unco slaw; somewhit hard tae package.

  * Rust: best new leid; zero-abstraction emphasis; concurrency emphasis; but relatively sma ecosystem; an haes deliberate limits on some kinds o compiler accelerations e.g. direct memory access needs tae be explicitly unsafe.

  * TypeScript: adds types tae JavaScript; great transpiler; growin developer emphasis on portin frae JavaScript tae TypeScript; strang backin frae Microsoft.

We decidit that VMs hae a set o tradeoffs that we dinnae need richt noo, sic as additional complexity that provides runtime capabilities.

We believe that oor core decisioun is driven bi twa cross-cuttin concerns:

  * For fastest runtime speed an tichtest system access, we wud chuise JavaScript an C.

  * For close-tae-fastest runtime speed an close-tae-tichtest system access, we chuise TypeScript an Rust.

Honourable mentiouns gae tae the VM leids an wab frameworks that we wud chuise if we wantit a VM leid:

  * Clojure an Luminus

  * Java an Spring

  * Elixir an Phoenix


### Implicatiouns

Front-end developers will need tae lairn TypeScript. This is likely an easy learnin curve if the developer's primary experience is uisin JavaScript.

Back-end developers will need tae lairn Rust. This is likely a moderate learnin curve if the developer's primary experience is uisin  C/C++, an a hard learnin curve if the developer's primary experience is uisin Java, Python, Ruby, or similar memory-managed leids. 

TypeScript an Rust are baith relatively new. This means that mony tuils dinnae yet hae documentation for thir leids. For example, the devops pipeline will need tae be set up for thir leids, an sae faur, nane o the devops tuils that we are evaluatin hae default examples for thir leids.

Compile times for TypeScript an Rust are gey slaw. Some o this micht be due tae the newness o the leids. We micht want tae leuk at hoo tae mitigate slaw compile times, sic as bi compile-on-demand, compile-concurrency, etc.

IDE support for thir leids isna yet ubiquitous an no yet first-class. For example, JetBrains sells the PyCharm IDE for first-class support for Python, but daesna sell an IDE wi first-class support for Rust; instead, JetBrains can uise a Rust plug-in that provides perhaps 80% o Rust leid support vis a vis Python leid support.


## Relatit


### Relatit decisiouns

We will aim toward ecosystem chyces that align wi thir leids.

For example, we want tae chuise an IDE that haes guid capabilities for thir leids.

For example, for oor front-end wab framewark, we are mair-likley tae decide on a framewark that tends tae aim toward TypeScript (e.g. Vue) than a framewark that tends tae aim toward plain JavaScript (e.g. React).


### Relatit requirements

Oor entire toolchain maun support thir leids.


### Relatit artefacts

We expect we micht export some secrets tae environment variables.


### Relatit principles

Measure twice, big ance. We are prioritisin some safety ower some speed.

Runtime is mair valuable than compile time. We are prioritisin customer uisage ower developer uisage.


## Jottins

Onie notes here.
