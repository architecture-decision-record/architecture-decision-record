import { error } from '@sveltejs/kit';
import { LOCALE_SLUGS } from '#lib/locales.js';

export const prerender = true;

export function entries() {
	return LOCALE_SLUGS.map((locale) => ({ locale }));
}

export function load({ params }) {
	if (!LOCALE_SLUGS.includes(params.locale)) error(404, 'Locale not found');
	return { locale: params.locale };
}
