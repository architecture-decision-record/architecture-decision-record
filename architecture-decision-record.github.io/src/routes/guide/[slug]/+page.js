import { redirect } from '@sveltejs/kit';
import manifest from '#lib/manifest.json';

export const prerender = true;

export function entries() {
	return manifest.guide.map((p) => ({ slug: p.slug }));
}

// Old URL (before the site moved under /en/): forward to /en/guide/<slug>/.
export function load({ params }) {
	redirect(308, `/en/guide/${params.slug}/`);
}
