<script>
	import { slugToTag, isRtlSlug } from '#lib/locales.js';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.section.title}</title>
	{#if data.locale.startsWith('en-')}<meta name="robots" content="noindex" />{/if}
</svelte:head>

<a class="back-link" href="/{data.locale}/">&larr; {data.locale}</a>

<div class="prose" lang={slugToTag(data.locale)} dir={isRtlSlug(data.locale) ? 'rtl' : 'ltr'}>
	{@html data.html}
</div>
