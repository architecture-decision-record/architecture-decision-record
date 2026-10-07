<script>
	import { page } from '$app/state';
	import { queryFromSearch } from '#lib/search.js';
	import { isRtlSlug, slugToTag } from '#lib/locales.js';
	import SearchResults from '#lib/components/SearchResults.svelte';

	let { data } = $props();

	const slug = $derived(data.locale);
	const rtl = $derived(isRtlSlug(slug));
	// location.search exists only in the browser; prerendering shows the contents.
	let query = $state('');
	$effect(() => {
		query = queryFromSearch(page.url.search);
	});
</script>

<svelte:head>
	<title>{query ? `${query} · ${slug}` : slug}</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="locale-search" lang={slugToTag(slug)} dir={rtl ? 'rtl' : 'ltr'}>
	<h1>{query || slug}</h1>
	{#if query}<p class="locale-label">{slug}</p>{/if}

	{#if !query}
		{#each data.sections as section (section.dir)}
			<h2>
				{#if section.hasIndex}<a href="/{slug}/{section.dir}/">{section.title}</a>{:else}{section.title}{/if}
			</h2>
			<ul>
				{#each section.pages as page (page.dir)}
					<li><a href="/{slug}/{section.dir}/{page.dir}/">{page.title}</a></li>
				{/each}
			</ul>
		{/each}
	{:else}
		<SearchResults {slug} />
	{/if}
</section>
