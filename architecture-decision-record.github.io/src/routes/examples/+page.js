import { redirect } from '@sveltejs/kit';

export const prerender = true;

// Old URL (before the site moved under /en/): forward to /en/examples/.
export function load() {
	redirect(308, '/en/examples/');
}
