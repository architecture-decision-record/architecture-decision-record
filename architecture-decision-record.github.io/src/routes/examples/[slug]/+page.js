import { redirect } from '@sveltejs/kit';
import manifest from '#lib/manifest.json';

export const prerender = true;

export function entries() {
	return manifest.examples.map((p) => ({ slug: p.slug }));
}

// Old URL (before the site moved under /en/): forward to /en/examples/<slug>/.
export function load({ params }) {
	redirect(308, `/en/examples/${params.slug}/`);
}
