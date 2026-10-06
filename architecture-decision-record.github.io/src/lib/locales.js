// Picker locale values (sorted by code). A value is "ll_RR" (or bare "en");
// its URL slug and source directory under ../locales/ is the lowercase form
// with "_" replaced by "-" ("de_001" -> "de-001"). The bare "en" has no
// directory of its own and maps to the source-of-truth locale "en-001" (so
// "en_001" is not listed separately: it would be a duplicate "English").
// See spec/locale-specific-search-picker/index.md.
export const LOCALES = [
	'ar_001', 'bn_001', 'cy_001', 'cy_GB', 'da_001', 'de_001', 'en', 'en_GB', 'en_US',
	'es_001', 'et_001', 'fi_001', 'fr_001', 'hi_001', 'id_001', 'it_001', 'ja_001', 'ko_001', 'nl_001',
	'pt_001', 'ru_001', 'sv_001', 'th_001', 'ur_001', 'vi_001', 'zh_001', 'zh_CN', 'zh_TW'
];

export const DEFAULT_LOCALE = 'en';

/** @param {string} value picker locale value @returns {string} URL slug */
export function localeToSlug(value) {
	if (!value || value === 'en') return 'en-001';
	return value.toLowerCase().replace(/_/g, '-');
}

/** Every URL slug that has a locale route, deduplicated. */
export const LOCALE_SLUGS = [...new Set(LOCALES.map(localeToSlug))];

/** BCP 47 tag for a slug ("zh-tw" -> "zh-TW", "de-001" -> "de-001"). @param {string} slug */
export function slugToTag(slug) {
	const [lang, region] = slug.split('-');
	return region ? `${lang}-${region.length === 2 ? region.toUpperCase() : region}` : lang;
}

const RTL = new Set(['ar', 'ur', 'he', 'fa']);
/** @param {string} slug */
export function isRtlSlug(slug) {
	return RTL.has(slug.split('-')[0]);
}
