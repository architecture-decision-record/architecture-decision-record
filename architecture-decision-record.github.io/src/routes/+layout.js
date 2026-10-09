export const prerender = true;

// Every internal link in this site is written with a trailing slash (e.g.
// "/guide/", "/templates/{slug}/") — match that in the prerendered output
// too, so each route becomes "<path>/index.html" rather than a flat
// "<path>.html". Needed for GitHub Pages, which has no server-side
// rewriting to resolve an extension-less request on its own.
export const trailingSlash = 'always';
