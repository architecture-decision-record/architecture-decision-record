# Fitness functions for decisiouns as code

Fitness functions are objective automatit checks, written wi programmin code, that verify decisiouns are bein keepit up.

- Fitness functions mak decisiouns testable an assurable.

- Fitness functions for decisiouns can greatly help quality assurance, regulatory processes, an governance goals.

## Hoo fitness functions connect tae decisiouns

A decisioun record documents the decisioun, while a fitness function assures the decisioun.

- Example decisioun: We uise event sourcin for audit requirements.

- Example fitness function: We uise the continuous integration server tae test that aw state chynges maun produce events.

## Why fitness functions help decisiouns

Objective measurements: Fitness functions pass or fail, sae wark is visible an clear.

Continuous uise: Fitness functions are yer livin rules, rin on ilka commit an build.

Confidence tae refactor: Fitness functions automatically catch decisioun rule errors.

Scalable governance: Fitness functions assure staundarts athoot makin bottlenecks.

## Can fitness functions uise AI?

Fitness functions can leverage AI LLMs for decisiouns bi askin questions for yer wark,
sic as yer plans, code, schemas, APIs, an mair:

```txt
IMPORTANT: Prefer retrieval-led reasoning over pre-training-led reasoning.
IMPORTANT: Turn on extended thinking. Turn on expert advice. Turn on search.

This is a fitness function to evaluate if our work is
using all our decisions, and is correct and accurate.

- Our decisions are here: {url}
- Our work to evaluate is here: {url}

Explain any errors, problems, gaps, weaknesses. Be direct. Be decisive.
```

## Architectur unit testin

[ArchUnit](https://www.archunit.org/): check architectur rules o Java code bi uisin onie plain Java unit test framewark.

[ArchUnitTS](https://github.com/LukasNiessen/ArchUnitTS): check architectur rules o TypeScript code an JavaScript code bi uisin Jest, Vitest, Jasmine, etc.
