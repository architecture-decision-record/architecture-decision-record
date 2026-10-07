<script lang="ts">
	// Header — the site's picker controls come from Lily's picker-bar
	// helper, which composes theme, locale, text-size, and share pickers
	// into one row. Each picker still persists its own slug to
	// localStorage (see the storageKey below and app.html, which applies
	// the stored theme/text-size before first paint to avoid a flash).
	import { ContainerWithFixedWidth, Header } from '@lilydesignsystem/svelte-headless';
	import PickerBar, { DEFAULT_SIZES } from '@lilydesignsystem/svelte-picker-bar';
	import type { ShareTarget } from '@lilydesignsystem/svelte-share-picker';
	import { themes, DEFAULT_THEME_ID } from '#lib/data/themes.js';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { LOCALES, LOCALE_SLUGS, DEFAULT_LOCALE, localeToSlug } from '#lib/locales.js';
	import { pathForLocale } from '#lib/locale-nav.js';

	const THEME_STORAGE_KEY = 'adr-theme';
	const LOCALE_STORAGE_KEY = 'adr-locale';
	const TEXT_SIZE_STORAGE_KEY = 'adr-text-size';
	const DEFAULT_TEXT_SIZE = 'normal';

	const themeSlugs = themes.map((t) => t.id);
	const themeLabels = Object.fromEntries(themes.map((t) => [t.id, t.label]));

	// Lily's own 7-step scale — theme.css maps each of these
	// data-text-size values to a --user-font-scale.
	const TEXT_SIZES = DEFAULT_SIZES;

	// Locales translated under ../locales/ live in #lib/locales.js. Selecting a
	// locale sets lang/dir on <html>, persists the choice, and navigates to the
	// same page in that locale. Search is locale specific: it goes to
	// /<locale>/?<query>.
	let locale = $state(DEFAULT_LOCALE);

	// The picker shows the language of the page being viewed: the locale in the
	// path on a locale route (/de-001/...), so a shared link shows (and persists)
	// that locale, and English on every English-site page. Choosing a locale
	// navigates, which changes the URL, which keeps the picker in step.
	const urlLocale = $derived.by(() => {
		let segment = page.url.pathname.split('/')[1] ?? '';
		try {
			segment = decodeURIComponent(segment);
		} catch {
			// keep the raw segment
		}
		return (LOCALE_SLUGS.includes(segment) && LOCALES.find((l) => localeToSlug(l) === segment)) || DEFAULT_LOCALE;
	});

	// The picker calls onChange once when it initialises (restoring the stored
	// choice) and again on every user selection. Only a selection navigates:
	// to the same page in the chosen locale, or to that locale's contents page.
	let pickerReady = false;
	async function onLocaleChange(value: string) {
		const changed = value !== locale;
		locale = value;
		if (!pickerReady) {
			pickerReady = true;
			return;
		}
		// A value that matches the URL's own locale came from the URL, not a click.
		if (changed && value !== urlLocale) await goto(await pathForLocale(page.url.pathname, value));
	}

	// Locale labels: the endonym with any parenthesised region turned into
	// a dash, e.g. "English (United States)" -> "English - United States".
	// *_001 (world) locales drop the region: "English (world)" -> "English".
	// The first letter of each part is capitalised: "español" -> "Español".
	// The GB locales say "Great Britain" (Welsh: "Prydain Fawr") rather than
	// "United Kingdom" (Welsh: "Y Deyrnas Unedig").
	const REGION_OVERRIDES: Record<string, string> = { en_GB: 'Great Britain', cy_GB: 'Prydain Fawr' };
	// Browsers lack Welsh display-name data and shorten Indonesian to "Indonesia".
	const LANGUAGE_OVERRIDES: Record<string, string> = { cy: 'Cymraeg', id: 'Bahasa Indonesia' };
	const LOCALE_LABELS = Object.fromEntries(
		LOCALES.map((l) => {
			const tag = l.replace('_', '-');
			const name = new Intl.DisplayNames([tag], { type: 'language', languageDisplay: 'standard' }).of(tag) ?? l;
			const label = l.endsWith('_001')
				? name.replace(/\s*[(（][^)）]*[)）]\s*$/, '')
				: name.replace(/\s*[(（]([^)）]*)[)）]\s*$/, ' - $1');
			const [language, ...rest] = (l in REGION_OVERRIDES ? label.replace(/ - .*$/, ` - ${REGION_OVERRIDES[l]}`) : label).split(' - ');
			const named = [LANGUAGE_OVERRIDES[l.split('_')[0]] ?? language, ...rest].join(' - ');
			return [l, named.replace(/(^| - )(\S)/g, (_, sep, c) => sep + c.toLocaleUpperCase(tag))];
		})
	);

	const shareTargets: ShareTarget[] = [
		{
			id: 'email',
			label: 'Email Link',
			href: (url, title) => `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
			newTab: false
		},
		{
			id: 'linkedin',
			label: 'Share on LinkedIn',
			href: (url) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
		},
		{
			id: 'reddit',
			label: 'Share on Reddit',
			href: (url, title) => `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`
		},
		{
			id: 'bluesky',
			label: 'Share on Bluesky',
			href: (url, title) => `https://bsky.app/intent/compose?text=${encodeURIComponent(`${title} ${url}`)}`
		},
		{
			id: 'mastodon',
			label: 'Share on Mastodon',
			href: (url, title) => `https://mastodonshare.com/?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
		}
	];

	// The closed theme control is one glyph, so nothing else on the page
	// states the active theme. Tracked here (via themeProps.onChange) only
	// to feed the visually-hidden status paragraph below.
	let activeTheme = $state(DEFAULT_THEME_ID);
</script>

<Header label="Site header">
	<ContainerWithFixedWidth maxWidth="64rem">
		<div class="site-header-bar">
			<a class="brand" href="/en/">
				<img class="brand-icon" src="/icon.png" alt="" width="28" height="28" />
				<strong>Architecture Decision Record</strong>
			</a>
			<nav class="site-nav" aria-label="Primary">
				<a href="/en/guide/">Guide</a>
				<a href="/en/templates/">Templates</a>
				<a href="/en/examples/">Examples</a>
				<a href="/en/skills/">Skills</a>
				<a href="https://github.com/architecture-decision-record/architecture-decision-record">
					GitHub
				</a>
			</nav>
			<div class="site-header-controls">
				<PickerBar
					labels={{
						search: 'Search this site',
						searchInput: 'Search terms',
						searchSubmit: 'Search',
						theme: 'Colour theme — all Lily Design System themes',
						locale: 'Language',
						textSize: 'Text size',
						share: 'Share Picker'
					}}
					searchProps={{ action: `/${localeToSlug(locale)}/` }}
					themesUrl="/themes/"
					themes={themeSlugs}
					themeProps={{
						themeLabels,
						storageKey: THEME_STORAGE_KEY,
						defaultValue: DEFAULT_THEME_ID,
						name: 'theme',
						onChange: (theme: string) => (activeTheme = theme)
					}}
					locales={LOCALES}
					localeProps={{
						storageKey: LOCALE_STORAGE_KEY,
						defaultValue: 'en',
						name: 'locale',
						value: urlLocale,
						onChange: onLocaleChange,
						localeLabels: LOCALE_LABELS
					}}
					sizes={TEXT_SIZES}
					textSizeProps={{
						storageKey: TEXT_SIZE_STORAGE_KEY,
						defaultValue: DEFAULT_TEXT_SIZE,
						name: 'text-size'
					}}
					{shareTargets}
					shareProps={{
						title: 'Architecture Decision Record (ADR)',
						copyLabel: 'Copy link',
						copiedLabel: 'Link copied to clipboard',
						copyFailedLabel: 'Could not copy — copy it from the address bar'
					}}
				/>
			</div>
		</div>
	</ContainerWithFixedWidth>
</Header>
<!-- Visually hidden — the header stays icon-only — but present for
     assistive technology, and aria-live announces only on change, so it
     stays silent at first paint. -->
<p class="theme-picker-status visually-hidden" aria-live="polite">
	Active theme: {themeLabels[activeTheme] ?? activeTheme}
</p>
