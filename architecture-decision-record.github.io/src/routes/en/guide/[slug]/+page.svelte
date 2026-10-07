<script>
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.section.title} — Architecture Decision Record Guide</title>
</svelte:head>

<a class="back-link" href="/en/guide/">&larr; Guide</a>

<data.content />

<nav class="button-row" aria-label="Guide pager">
	{#if data.prev}
		<a class="button secondary" href="/en/guide/{data.prev.slug}/">&larr; {data.prev.title}</a>
	{/if}
	{#if data.next}
		<a class="button secondary" href="/en/guide/{data.next.slug}/">{data.next.title} &rarr;</a>
	{/if}
</nav>
