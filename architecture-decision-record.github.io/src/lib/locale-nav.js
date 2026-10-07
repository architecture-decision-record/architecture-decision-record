// Where the language picker goes when a locale is chosen: the same page in
// the new locale, found through the pages' shared .locale-peer-id values
// (src/lib/locale-peers.json). Falls back to the locale's contents page.
import { localeToSlug, LOCALE_SLUGS } from './locales.js';

/** @param {string} pathname */
function decode(pathname) {
	try {
		return decodeURI(pathname);
	} catch {
		return pathname;
	}
}

/**
 * Page key ("<section>/<dir>" or "<section>/") in a locale, from a pathname.
 * @param {string} pathname
 * @returns {{slug: string, key: string} | null}
 */
function parseLocalePath(pathname) {
	const parts = decode(pathname).split('/').filter(Boolean);
	if (parts.length < 2 || parts.length > 3 || !LOCALE_SLUGS.includes(parts[0])) return null;
	return { slug: parts[0], key: parts.length === 2 ? `${parts[1]}/` : `${parts[1]}/${parts[2]}` };
}

/**
 * @param {string} pathname current path
 * @param {string} toValue picker locale value being chosen (e.g. "de_001", "en")
 * @returns {Promise<string>} path to navigate to
 */
export async function pathForLocale(pathname, toValue) {
	const toSlug = localeToSlug(toValue);
	const peers = /** @type {Record<string, Record<string, string>>} */ ((await import('./locale-peers.json')).default);

	const here = parseLocalePath(pathname);
	const sourcePeer = here ? peers[here.slug]?.[here.key] : '';

	if (!sourcePeer) return `/${toSlug}/`;
	const target = Object.entries(peers[toSlug] ?? {}).find(([, id]) => id === sourcePeer)?.[0];
	if (!target) return `/${toSlug}/`;
	return `/${toSlug}/${target}`;
}
