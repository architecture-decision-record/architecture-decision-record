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
	import { LOCALES, DEFAULT_LOCALE, localeToSlug } from '#lib/locales.js';

	const THEME_STORAGE_KEY = 'adr-theme';
	const LOCALE_STORAGE_KEY = 'adr-locale';
	const TEXT_SIZE_STORAGE_KEY = 'adr-text-size';
	const DEFAULT_TEXT_SIZE = 'normal';

	const themeSlugs = themes.map((t) => t.id);
	const themeLabels = Object.fromEntries(themes.map((t) => [t.id, t.label]));

	// Lily's own 7-step scale — theme.css maps each of these
	// data-text-size values to a --user-font-scale.
	const TEXT_SIZES = DEFAULT_SIZES;

	// Locales translated under ../locales/ live in #lib/locales.js. The site
	// itself still renders English content only: selecting a locale here sets
	// lang/dir on <html> and persists the choice, but does not yet route to
	// translated pages. Search is locale specific: it goes to /<locale>/?<query>.
	let locale = $state(DEFAULT_LOCALE);

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
			<a class="brand" href="/">
				<img class="brand-icon" src="/icon.png" alt="" width="28" height="28" />
				<strong>Architecture Decision Record</strong>
			</a>
			<nav class="site-nav" aria-label="Primary">
				<a href="/guide/">Guide</a>
				<a href="/templates/">Templates</a>
				<a href="/examples/">Examples</a>
				<a href="/skills/">Skills</a>
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
						onChange: (value: string) => (locale = value),
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
