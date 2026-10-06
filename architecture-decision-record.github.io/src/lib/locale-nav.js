// Where the language picker goes when a locale is chosen: the same page in
// the new locale, found through the pages' shared .locale-peer-id values
// (src/lib/locale-peers.json). Falls back to the locale's contents page.
import manifest from './manifest.json';
import { localeToSlug, LOCALE_SLUGS } from './locales.js';

const SOURCE = 'en-001';
/** @type {Record<string, string>} */
const ENGLISH_ROUTES = { guide: 'documents', templates: 'templates', examples: 'examples' };

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

/** Page key in en-001 for a page of the English site, or null. @param {string} pathname */
function parseEnglishPath(pathname) {
	const m = /^\/(guide|templates|examples)\/([^/]+)\/$/.exec(decode(pathname));
	return m ? { key: `${ENGLISH_ROUTES[m[1]]}/${m[2]}` } : null;
}

/** English-site path for an en-001 page key, if the English site has that page. @param {string} key */
function englishSitePath(key) {
	const [section, dir] = key.split('/');
	if (!dir) return '/';
	const route = Object.entries(ENGLISH_ROUTES).find(([, s]) => s === section)?.[0];
	const list = /** @type {{slug: string}[] | undefined} */ (route && /** @type {any} */ (manifest)[route]);
	return list?.some((p) => p.slug === dir) ? `/${route}/${dir}/` : '/';
}

/**
 * @param {string} pathname current path
 * @param {string} toValue picker locale value being chosen (e.g. "de_001", "en")
 * @returns {Promise<string>} path to navigate to
 */
export async function pathForLocale(pathname, toValue) {
	const toSlug = localeToSlug(toValue);
	const toEnglishSite = toValue === 'en';
	const peers = /** @type {Record<string, Record<string, string>>} */ ((await import('./locale-peers.json')).default);

	const here = parseLocalePath(pathname);
	const english = here ? null : parseEnglishPath(pathname);
	const sourcePeer = here ? peers[here.slug]?.[here.key] : english ? peers[SOURCE]?.[english.key] : '';

	if (toEnglishSite) {
		const enKey = sourcePeer && Object.entries(peers[SOURCE] ?? {}).find(([, id]) => id === sourcePeer)?.[0];
		return enKey ? englishSitePath(enKey) : '/';
	}
	if (!sourcePeer) return `/${toSlug}/`;
	const target = Object.entries(peers[toSlug] ?? {}).find(([, id]) => id === sourcePeer)?.[0];
	if (!target) return `/${toSlug}/`;
	return `/${toSlug}/${target}`;
}
