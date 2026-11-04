# Programming languages

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


## Summary


### Issue

We need to choose programming languages for our software. We get two major needs: front-end programming language wey suitable for web applications, and back-end programming language wey suitable for server applications.


### Decision

We dey choose TypeScript for di front-end.

We dey choose Rust for di back-end.


### Status

Decided. We open to new alternatives as dem arise.


## Details


### Wetin We Assume

Di front-end applications na typical:

  * Typical users and interactions

  * Typical browsers and systems

  * Typical developments and deployments

Di front-end applications likely to evolve quick:

  * We want ensure fast easy developments, deployments, iterations, etc.

  * We value provability, like type safety, and we dey fine to do small more work to achieve am.

  * We no need legacy compatibility.

Di back-end applications na higher-than-typical:

  * Higher-than-typical goals for quality, especially provability, reliability, security, etc.

  * Higher-than-typical goals for near-real-time, i.e. we no want pauses because of virtual machine garbage collection.

  * Higher-than-typical goals for functional programming, especially for parallelization, multi-core processing, and memory safety.

We accept lower compile-time speeds for favor of compile-time safety and runtime speeds.


### Wetin Dey Limit Us

We get strong constraint on languages wey usable with major cloud provider services for functions, like Amazon Lambda.


### Positions

We consider dis languages:

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



### Argument

Summary per language:

  * C: we reject am because of low safety; Rust fit do nearly everything better.

  * C++: we reject am because e be mess; Rust fit do nearly everything better.

  * Clojure: excellent modeling; best Lisp approximation; great runtime on di JVM.
  
  * Elixir: excellent runtime including deployability and concurrency; excellent developer experience; relatively small ecosystem.

  * Erlang: excellent runtime including deployability and concurrency; challenging developer experience; relatively small ecosystem.

  * Elm: e look very promising; IBM dey publish major case studies with good results; smaller ecosystem.

  * Flow: interesting improvement over JavaScript; but; developers dey move comot from am.

  * Go: excellent developer experience; excellent concurrency; but e get track record of bad decisions wey cripple di language.

  * Haskell: best functional language; smaller developer community; e never achieve enough published production successes.

  * Java: excellent runtime; excellent ecosystem; sub-par developer experience.

  * JavaScript: most popular language ever; most widespread ecosystem.

  * Kotlin: e fix so much of Java; excellent backing by JetBrains; good published cases of porting from Java go Kotlin.
  
  * Python: most popular language for systems administration; great analytics tooling; good web frameworks; but Google abandon am for favor of Go.

  * Ruby: best developer experience ever; best web frameworks; nicest community; but very slow; somewhat hard to package.

  * Rust: best new language; zero-abstraction emphasis; concurrency emphasis; but relatively small ecosystem; and e get deliberate limits on some kinds of compiler accelerations e.g. direct memory access need to be explicitly unsafe.

  * TypeScript: e add types to JavaScript; great transpiler; growing developer emphasis on porting from JavaScript go TypeScript; strong backing from Microsoft.

We decide say VMs get set of tradeoffs wey we no need right now, like additional complexity wey provide runtime capabilities.

We believe say two cross-cutting concerns drive our core decision:

  * For fastest runtime speed and tightest system access, we go choose JavaScript and C.

  * For close-to-fastest runtime speed and close-to-tightest system access, we choose TypeScript and Rust.

Honorable mentions go to di VM languages and web frameworks wey we go choose if we want VM language:

  * Clojure and Luminus

  * Java and Spring

  * Elixir and Phoenix


### Wetin E Mean

Front-end developers go need to learn TypeScript. Dis one likely easy learning curve if di developer primary experience na to use JavaScript.

Back-end developers go need to learn Rust. Dis one likely moderate learning curve if di developer primary experience na to use C/C++, and hard learning curve if di developer primary experience na to use Java, Python, Ruby, or similar memory-managed languages.

TypeScript and Rust both relatively new. Dis mean say many tools never get documentation for dis languages. For example, dem go need to set up di devops pipeline for dis languages, and so far, none of di devops tools wey we dey evaluate get default examples for dis languages.

Compile times for TypeScript and Rust quite slow. Some of dis fit be because di languages new. We fit want look at how to mitigate slow compile times, like by compile-on-demand, compile-concurrency, etc.

IDE support for dis languages never ubiquitous and never first-class. For example, JetBrains dey sell di PyCharm IDE for first-class support for Python, but e no dey sell IDE with first-class support for Rust; instead, JetBrains fit use Rust plug-in wey provide perhaps 80% of Rust language support vis a vis Python language support.


## Wetin Join


### Decision Dem Wey Join

We go aim toward ecosystem choices wey align with dis languages.

For example, we want choose IDE wey get good capabilities for dis languages.

For example, for our front-end web framework, we more-likley to decide on framework wey tend to aim toward TypeScript (e.g. Vue) pass framework wey tend to aim toward plain JavaScript (e.g. React).


### Requirement Dem Wey Join

Our entire toolchain must support dis languages.


### Artifact Dem Wey Join

We expect say we fit export some secrets go environment variables.


### Principle Dem Wey Join

Measure twice, build once. We dey prioritize some safety over some speed.

Runtime more valuable pass compile time. We dey prioritize customer usage over developer usage.


## Notes

Any notes here.
