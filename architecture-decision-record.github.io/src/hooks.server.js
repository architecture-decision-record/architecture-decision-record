// Prerendered pages must carry the right `lang` and `dir` in their HTML, not
// only after the locale picker runs: search engines, screen readers and
// right-to-left layout all read them before any JavaScript.

const RTL_LANGUAGES = new Set(['ar', 'ur', 'he', 'fa', 'ps', 'sd', 'yi']);

/** BCP 47 tag for a locale code such as 'zh-cn' or 'ar-001'. @param {string} code */
function htmlLang(code) {
	const [language, region] = code.split('-');
	// '001' is the UN M.49 code for "world": the language alone is the tag.
	// 'en-gb-oxendict' is not a valid region; keep the language and region.
	return !region || /^\d{3}$/.test(region) ? language : `${language}-${region.toUpperCase()}`;
}

export async function handle({ event, resolve }) {
	const code = event.params.locale;
	if (!code) return resolve(event);
	const lang = htmlLang(code);
	const dir = RTL_LANGUAGES.has(lang.split('-')[0]) ? 'rtl' : 'ltr';
	return resolve(event, {
		transformPageChunk: ({ html }) =>
			html.replace('<html lang="en" data-theme="light">', `<html lang="${lang}" dir="${dir}" data-theme="light">`)
	});
}
