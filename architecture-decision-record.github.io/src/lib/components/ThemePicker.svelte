<script lang="ts">
	// ThemePicker — lets a visitor pick any of Lily's 45 ready-made themes.
	// Each theme is a standalone stylesheet (static/themes/<id>.css) that
	// styles every Lily component hook. Uses Lily's own theme-picker helper
	// (an icon button that opens a WAI-ARIA APG listbox) rather than a
	// native <select>. The helper manages its own
	// `<link data-lily-theme-picker="theme">`, finding and reusing the one
	// declared in app.html (which also carries id="lily-theme" for the
	// pre-paint flash-avoidance script there). Choice persists to
	// localStorage under the same "adr-theme" key app.html already reads
	// before first paint.
	import ThemePicker from 'lily-design-system-svelte-theme-picker';
	import { themes, DEFAULT_THEME_ID } from '$lib/data/themes';

	const STORAGE_KEY = 'adr-theme';
	const themeSlugs = themes.map((t) => t.id);
	const themeLabels = Object.fromEntries(themes.map((t) => [t.id, t.label]));

	let value = $state(DEFAULT_THEME_ID);
</script>

<ThemePicker
	label="Colour theme — all 45 Lily Design System themes"
	themesUrl="/themes/"
	themes={themeSlugs}
	{themeLabels}
	storageKey={STORAGE_KEY}
	defaultValue={DEFAULT_THEME_ID}
	name="theme"
	bind:value
/>
<!-- The closed control is one glyph, so nothing else on the page states
     the active theme. Visually hidden — the header stays icon-only — but
     present for assistive technology, and aria-live announces only on
     change, so it stays silent at first paint. -->
<p class="theme-picker-status visually-hidden" aria-live="polite">
	Active theme: {themeLabels[value] ?? value}
</p>
