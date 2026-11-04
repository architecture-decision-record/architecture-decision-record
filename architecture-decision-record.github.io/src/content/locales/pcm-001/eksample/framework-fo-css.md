# Architecture Decision Record: CSS framework

Wetin Dey Inside:

- [Summary](#summary)
  - [Issue](#issue)
  - [Decision](#decision)
  - [Status](#status)
- [Details](#details)
  - [Wetin We Assume](#wetin-we-assume)
  - [Wetin Dey Limit Us](#wetin-dey-limit-us)
  - [Positions](#positions)
  - [Argument](#argument)
  - [Wetin E Mean](#wetin-e-mean)
- [Wetin Join](#wetin-join)
  - [Decision Dem Wey Join](#decision-dem-wey-join)
  - [Requirement Dem Wey Join](#requirement-dem-wey-join)
  - [Artifact Dem Wey Join](#artifact-dem-wey-join)
  - [Principle Dem Wey Join](#principle-dem-wey-join)
- [Notes](#notes)


## Summary


### Issue

We want use CSS framework to create our web applications:

  * We want make user experience fast and reliable, for all popular browsers and screen sizes.

  * We want rapid iteration on design, layout, UI/UX, etc.

  * We want responsive applications, especially for smaller screens like mobile devices, larger screens like 4K widescreens, and dynamic screens like rotatable displays.


### Decision

Decided on Bulma.


### Status

Decided on Bulma. We open to new CSS framework choices as dem arrive.


## Details


### Wetin We Assume

We want create web apps wey modern, fast, reliable, responsive, etc.

Typical modern web apps dey reduce/eliminate di use of jQuery for multiple reasons:

  * Modern JavaScript dey phase in many capabilities wey jQuery don provide, so dem need jQuery less, and better/faster/smaller modules dey wey provide specific implementations

  * jQuery broad approach na to do direct DOM manipulation, wey be anti-pattern for modern JavaScript frameworks (e.g. React, Vue, Svelte)

  * jQuery dey interfere with itself if dem load am twice, etc.


### Wetin Dey Limit Us

If we choose CSS framework wey use jQuery, then we stuck to import jQuery. For example, Semantic UI use jQuery, and Tachyons no use am.

If we choose CSS framework wey minimal, then we go forego framework components wey we fit want now or soon. For example, Semantic UI provide image carousel, and Tachyons no provide am.


### Positions

We consider to use no framework. Dis one still seem viable, especially because CSS grid provide much of wetin we need for our project..

We consider many CSS frameworks with quick shortlist triage: Bootstrap, Bulma, Foundation, Materialize, Semantic UI, Tachyons, etc. Our two selections for deeper review na Semantic UI (because e get di most-semantic approach) and Bulma (because e get di lightest-weight approach wey provide di components wey we want now).

We consider Semantic UI. Dis one provide many components, including ones wey we want for our project: tabs, grids, buttons, etc. We do pilot with Semantic UI two ways: with typical CDN files, and with NPM repos. We achieve success with Semantic UI for static HTML page, but we no achieve success inside our timebox to build JavaScript SPA (primarily because of jQuery load issues). We discover say other coders don dey ask di Semantic UI developers to create jQuery-free version, for di same reasons wey we get. Other coders don dey request jQuery-free version for many years, yet di developers say no, and state say any jQuery-free version go too hard to write e.g. ~"the Semantic UI project has more than 22,000 touchpoints that use jQuery".

Example with Semantic:

```html
<div class="ui top attached tabular menu">
  <a class="item">Alpha</a>
  <a class="item">Bravo</a>
</div>
```

We consider Bulma. Bulma get many similar capabilities as Semantic UI, even though e no get as many sophisticated components. Dem build Bulma with modern techniques, like no jQuery. Bulma get some third-party components, wey we fit want use some of dem.


Example with Bulma:
```html
<div class="tabs">
  <ul>
    <li><a>Alpha</a></li>
    <li><a>Bravo</a></li>
  </ul>
</div>
```


### Argument

As above.

Specifically, Semantic UI seem to get caution flag both for technology (i.e. so many jQuery touchpoints) and also for leadership (i.e. jQuery-free na hard no, instead of to attempt roadmap, or continuous improvement, or donation fundraising, etc.).


### Wetin E Mean

If we find good non-jQuery CSS framework, dis one generally helpful and good overall.


## Wetin Join


### Decision Dem Wey Join

Di CSS framework wey we choose fit affect testability.


### Requirement Dem Wey Join

We want ship purely-modern app fast.

We no want spend time to work on older frameworks (esp. Semantic UI) wey use older dependencies (esp. jQuery).


### Artifact Dem Wey Join

E affect all di typical HTML wey go use di CSS.


### Principle Dem Wey Join

Easily reversible.

Need for speed.


## Notes

Any notes here.
