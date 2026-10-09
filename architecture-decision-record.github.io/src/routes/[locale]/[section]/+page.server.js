import { error } from '@sveltejs/kit';
import { loadLocalePage, localeEntries, sectionsOf } from '#lib/server/locale-pages.js';

export const prerender = true;

export const entries = localeEntries;

export async function load({ params }) {
	const section = sectionsOf(params.locale).find((s) => s.dir === params.section);
	const html = section && (await loadLocalePage(params.locale, params.section));
	if (!section || !html) error(404, 'Page not found');
	return { locale: params.locale, section: { dir: section.dir, title: section.title }, html };
}
