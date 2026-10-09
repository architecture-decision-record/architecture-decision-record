<script>
	import { slugToTag, isRtlSlug } from '#lib/locales.js';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.title}</title>
	{#if ['en-gb', 'en-us'].includes(data.locale)}<meta name="robots" content="noindex" />{/if}
</svelte:head>

<a class="back-link" href={data.section.hasIndex ? `/${data.locale}/${data.section.dir}/` : `/${data.locale}/`}>
	&larr; {data.section.title}
</a>

<div class="prose" lang={slugToTag(data.locale)} dir={isRtlSlug(data.locale) ? 'rtl' : 'ltr'}>
	{@html data.html}
</div>
