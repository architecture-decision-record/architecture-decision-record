<script lang="ts">
	import { ContainerWithFixedWidth } from '@lilydesignsystem/svelte-headless';
	import { page } from '$app/state';
	import { LOCALE_SLUGS } from '#lib/locales.js';
	import { ui } from '#lib/i18n.js';
	import { HERO } from '#lib/data/hero.js';

	const slug = $derived(page.params.locale && LOCALE_SLUGS.includes(page.params.locale) ? page.params.locale : 'en-001');
	const t = $derived(ui(slug));
	const tagline = $derived((HERO as Record<string, { tagline: string }>)[slug]?.tagline);
</script>

<footer class="site-footer">
	<ContainerWithFixedWidth maxWidth="64rem">
		<p>
			<a href="https://github.com/architecture-decision-record/architecture-decision-record">architecture-decision-record</a>
			{#if tagline}— {tagline} ·{/if}
			<a href="https://joelparkerhenderson.com">Joel Parker Henderson</a>
		</p>
		<p class="site-footer-notice">{t.footerNote}</p>
	</ContainerWithFixedWidth>
</footer>
