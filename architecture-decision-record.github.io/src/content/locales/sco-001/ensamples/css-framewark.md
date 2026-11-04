# Architectur Decisioun Record: CSS framewark

Contents:

- [Soummary](#soummary)
  - [Maitter](#maitter)
  - [Decisioun](#decisioun)
  - [Staunin](#staunin)
- [Pairticulars](#pairticulars)
  - [Assumptiouns](#assumptiouns)
  - [Limitatiouns](#limitatiouns)
  - [Positiouns](#positiouns)
  - [Argiment](#argiment)
  - [Implicatiouns](#implicatiouns)
- [Relatit](#relatit)
  - [Relatit decisiouns](#relatit-decisiouns)
  - [Relatit requirements](#relatit-requirements)
  - [Relatit artefacts](#relatit-artefacts)
  - [Relatit principles](#relatit-principles)
- [Jottins](#jottins)


## Soummary


### Maitter

We want tae uise a CSS framewark tae mak oor wab applications:

  * We want user experience tae be fast an reliable, on aw popular browsers an screen sizes.

  * We want rapid iteration on design, layout, UI/UX, etc.

  * We want responsive applications, especially for smaller screens sic as on mobile devices, larger screens sic as on 4K widescreens, an dynamic screens sic as rotatable displays.  


### Decisioun

Decidit on Bulma.


### Staunin

Decidit on Bulma. Open tae new CSS framewark chyces as they arrive.


## Pairticulars


### Assumptiouns

We want tae mak wab apps that are modern, fast, reliable, responsive, etc.

Typical modern wab apps are reducin/eliminatin the uise o jQuery acause o multiple reasons: 

  * Modern JavaScript is phasin in mony capabilities that jQuery haes providit, sae jQuery is less needit, an there are better/faster/smaller modules that provide specific implementatiouns

  * jQuery's braid approach is tae dae direct DOM manipulation, which is an anti-pattern for modern JavaScript frameworks (e.g. React, Vue, Svelte)

  * jQuery interferes wi itsel if it's loadit twice, etc.


### Limitatiouns

If we chuise a CSS framewark that uises jQuery, than we're stuck importin jQuery. For example, Semantic UI uises jQuery, an Tachyons daesna.

If we chuise a CSS framewark that is minimal, than we forgae framewark components that we micht want noo or sune. For example, Semantic UI provides an image carousel, an Tachyons daesna.


### Positiouns

We consideret uisin nae framewark. This still seems viable, especially acause CSS grid provides muckle o whit we need for oor project..

We consideret mony CSS frameworks uisin a quick shortlist triage: Bootstrap, Bulma, Foundation, Materialize, Semantic UI, Tachyons, etc. Oor twa selectiouns for deeper review are Semantic UI (acause it haes the maist-semantic approach) an Bulma (acause it haes the lichtest-wecht approach that provides the components we want noo).

We consideret Semantic UI. This provides mony components, includin anes we want for oor project: tabs, grids, buttons, etc. We did a pilot wi Semantic UI twa weys: uisin typical CDN files, an uisin NPM repos. We achieved success wi Semantic UI in a static HTML page, but didna achieve success within oor timebox tae big a JavaScript SPA (primarily acause o jQuery load issues). We discoverit that ither coders hae been askin the Semantic UI developers tae mak a jQuery-free version, for the same reasons we hae. Ither coders hae been requestin a jQuery-free version for mony years, yet the developers hae said nae, an statit that onie jQuery-free version wud be ower hard tae screive e.g. ~"the Semantic UI project has more than 22,000 touchpoints that use jQuery".

Example wi Semantic:

```html
<div class="ui top attached tabular menu">
  <a class="item">Alpha</a>
  <a class="item">Bravo</a>
</div>
```

We consideret Bulma. Bulma haes mony similar capabilities as Semantic UI, tho no as mony sophisticatit components. Bulma is biggit wi modern techniques, sic as nae jQuery. Bulma haes some third-pairty components, some o which we micht want tae uise.


Example wi Bulma:
```html
<div class="tabs">
  <ul>
    <li><a>Alpha</a></li>
    <li><a>Bravo</a></li>
  </ul>
</div>
```


### Argiment

As abune.

Specifically, Semantic UI seems tae hae a caution flag baith in terms o technology (i.e. sae mony jQuery touchpoints) an an aw in terms o leadership (i.e. jQuery-free wis a hard nae, raither than attemptin a roadmap, or continuous improvement, or donation fundraisin, etc.).


### Implicatiouns

If we find a guid non-jQuery CSS framewark, this is generally helpful an guid owerall.


## Relatit


### Relatit decisiouns

The CSS framewark we chuise micht affect testability.


### Relatit requirements

We want tae ship a purely-modern app fast. 

We dinnae want tae spend time warkin on aulder frameworks (esp. Semantic UI) uisin aulder dependencies (esp. jQuery).


### Relatit artefacts

Affects aw the typical HTML that will uise the CSS.


### Relatit principles

Easily reversible.

Need for speed.


## Jottins

Onie notes here.
