# Ffwythiannau ffitrwydd ar gyfer penderfyniadau ar ffurf cod

Gwiriadau awtomataidd gwrthrychol yw ffwythiannau ffitrwydd, wedi'u hysgrifennu gyda chod rhaglennu, sy'n gwirio bod penderfyniadau'n cael eu cynnal.

- Mae ffwythiannau ffitrwydd yn gwneud penderfyniadau'n brofadwy ac yn sicr.

- Gall ffwythiannau ffitrwydd ar gyfer penderfyniadau fod o gymorth mawr i sicrhau ansawdd, prosesau rheoleiddio a nodau llywodraethiant.

## Sut mae ffwythiannau ffitrwydd yn cysylltu â phenderfyniadau

Mae cofnod penderfyniad yn dogfennu'r penderfyniad, tra bo ffwythiant ffitrwydd yn sicrhau'r penderfyniad.

- Enghraifft o benderfyniad: Rydym yn defnyddio cyrchu digwyddiadau (event sourcing) ar gyfer gofynion archwilio.

- Enghraifft o ffwythiant ffitrwydd: Rydym yn defnyddio'r gweinydd integreiddio parhaus i brofi bod yn rhaid i bob newid cyflwr gynhyrchu digwyddiadau.

## Pam mae ffwythiannau ffitrwydd yn helpu penderfyniadau

Mesuriadau gwrthrychol: Mae ffwythiannau ffitrwydd naill ai'n pasio neu'n methu, felly mae'r gwaith yn weladwy ac yn glir.

Defnydd parhaus: Ffwythiannau ffitrwydd yw eich rheolau byw, ac maent yn rhedeg ar bob ymrwymiad (commit) a phob adeiladwaith.

Hyder i ailffactorio: Mae ffwythiannau ffitrwydd yn dal gwallau yn rheolau'r penderfyniadau yn awtomatig.

Llywodraethiant graddadwy: Mae ffwythiannau ffitrwydd yn sicrhau safonau heb greu tagfeydd.

## A all ffwythiannau ffitrwydd ddefnyddio deallusrwydd artiffisial?

Gall ffwythiannau ffitrwydd fanteisio ar fodelau iaith mawr (LLMs) deallusrwydd artiffisial ar gyfer penderfyniadau drwy ofyn cwestiynau am eich gwaith,
fel eich cynlluniau, eich cod, eich sgemâu, eich APIau, a mwy:

```txt
IMPORTANT: Prefer retrieval-led reasoning over pre-training-led reasoning.
IMPORTANT: Turn on extended thinking. Turn on expert advice. Turn on search.

This is a fitness function to evaluate if our work is
using all our decisions, and is correct and accurate.

- Our decisions are here: {url}
- Our work to evaluate is here: {url}

Explain any errors, problems, gaps, weaknesses. Be direct. Be decisive.
```

## Profi unedau saernïaeth

[ArchUnit](https://www.archunit.org/): gwiriwch reolau saernïaeth cod Java drwy ddefnyddio unrhyw fframwaith profi unedau Java cyffredin.

[ArchUnitTS](https://github.com/LukasNiessen/ArchUnitTS): gwiriwch reolau saernïaeth cod TypeScript a chod JavaScript drwy ddefnyddio Jest, Vitest, Jasmine, ac ati.
