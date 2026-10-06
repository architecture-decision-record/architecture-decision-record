import { error } from '@sveltejs/kit';
import { loadLocalePage, pageEntries, sectionsOf } from '#lib/server/locale-pages.js';

export const prerender = true;

export const entries = pageEntries;

export async function load({ params }) {
	const section = sectionsOf(params.locale).find((s) => s.dir === params.section);
	const page = section?.pages.find((p) => p.dir === params.dir);
	const html = page && (await loadLocalePage(params.locale, params.section, params.dir));
	if (!section || !page || !html) error(404, 'Page not found');
	return {
		locale: params.locale,
		section: { dir: section.dir, title: section.title, hasIndex: section.hasIndex },
		title: page.title,
		html
	};
}
