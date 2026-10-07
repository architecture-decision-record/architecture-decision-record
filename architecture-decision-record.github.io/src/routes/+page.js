import { redirect } from '@sveltejs/kit';

export const prerender = true;

// The English site lives under /en/ (see spec/website.md); "/" forwards there.
export function load() {
	redirect(308, '/en/');
}
