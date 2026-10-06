<script>
	import { untrack } from 'svelte';
	import { page } from '$app/state';
	import { search, queryFromSearch } from '#lib/search.js';
	import { isRtlSlug, slugToTag } from '#lib/locales.js';

	let { data } = $props();

	// The query is the whole location.search ("/de-001/?foo"), read in the
	// browser only. The index fetched is always the one for the URL's locale.
	let query = $state('');
	let status = $state('idle'); // idle | loading | ready | unavailable
	/** @type {any[]} */
	let results = $state([]);

	const slug = $derived(data.locale);
	const rtl = $derived(isRtlSlug(slug));

	async function run() {
		query = queryFromSearch(page.url.search);
		results = [];
		if (!query) {
			status = 'idle';
			return;
		}
		status = 'loading';
		let index;
		try {
			const response = await fetch(`/search/${slug}.json`);
			if (!response.ok) throw new Error(String(response.status));
			index = await response.json();
		} catch {
			status = 'unavailable';
			return;
		}
		results = search(index, query, slug);
		status = 'ready';
	}

	$effect(() => {
		// Runs on mount and whenever the URL's query or locale changes.
		page.url.search;
		slug;
		untrack(run);
	});
</script>

<svelte:head>
	<title>Search · {slug}</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="locale-search" lang={slugToTag(slug)} dir={rtl ? 'rtl' : 'ltr'}>
	<h1>{slug}</h1>

	{#if status === 'idle'}
		<p>Use the search control in the header to search this locale.</p>
	{:else if status === 'loading'}
		<p aria-live="polite">Searching…</p>
	{:else if status === 'unavailable'}
		<p>Search is unavailable for this locale.</p>
	{:else}
		<p aria-live="polite">{results.length} result{results.length === 1 ? '' : 's'} for <q>{query}</q></p>
		<ol class="results">
			{#each results as result (result.id)}
				<li>
					<a href={result.url}>{result.title}</a>
					<small>{result.section}</small>
					<p>{result.snippet}</p>
				</li>
			{/each}
		</ol>
	{/if}
</section>
