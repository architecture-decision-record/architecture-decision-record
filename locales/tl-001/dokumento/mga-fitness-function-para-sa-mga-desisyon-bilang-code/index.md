# Mga fitness function para sa mga desisyon bilang code

Ang mga fitness function ay mga layunin at awtomatikong pagsusuri, na isinulat gamit ang programming code, na nagpapatunay na napapanatili ang mga desisyon.

- Ginagawang masusubok at matitiyak ng mga fitness function ang mga desisyon.

- Malaki ang naitutulong ng mga fitness function para sa mga desisyon sa quality assurance, mga proseso ng regulasyon, at mga layunin sa governance.

## Paano nauugnay ang mga fitness function sa mga desisyon

Dinodokumento ng decision record ang desisyon, habang tinitiyak ng fitness function ang desisyon.

- Halimbawang desisyon: Gumagamit kami ng event sourcing para sa mga requirement sa audit.

- Halimbawang fitness function: Ginagamit namin ang continuous integration server para subukin na dapat lumikha ng mga event ang lahat ng pagbabago ng estado.

## Bakit nakatutulong ang mga fitness function sa mga desisyon

Mga layuning sukatan: Pumapasa o bumabagsak ang mga fitness function, kaya nakikita at malinaw ang gawain.

Tuloy-tuloy na paggamit: Ang mga fitness function ang iyong mga buháy na tuntunin, pinapatakbo sa bawat commit at build.

Kumpiyansang mag-refactor: Awtomatikong nahuhuli ng mga fitness function ang mga pagkakamali sa tuntunin ng desisyon.

Nasusukat na governance: Tinitiyak ng mga fitness function ang mga pamantayan nang hindi lumilikha ng mga bottleneck.

## Magagamit ba ng mga fitness function ang AI?

Magagamit ng mga fitness function ang mga AI LLM para sa mga desisyon sa pamamagitan ng pagtatanong tungkol sa iyong gawain,
tulad ng iyong mga plano, code, schema, API, at iba pa:

```txt
IMPORTANT: Prefer retrieval-led reasoning over pre-training-led reasoning.
IMPORTANT: Turn on extended thinking. Turn on expert advice. Turn on search.

This is a fitness function to evaluate if our work is
using all our decisions, and is correct and accurate.

- Our decisions are here: {url}
- Our work to evaluate is here: {url}

Explain any errors, problems, gaps, weaknesses. Be direct. Be decisive.
```

## Architecture unit testing

[ArchUnit](https://www.archunit.org/): suriin ang mga tuntunin sa arkitektura ng Java code gamit ang anumang payak na Java unit test framework.

[ArchUnitTS](https://github.com/LukasNiessen/ArchUnitTS): suriin ang mga tuntunin sa arkitektura ng TypeScript code at JavaScript code gamit ang Jest, Vitest, Jasmine, atbp.
