<script>
	import manifest from '$lib/manifest.json';
	import CardLinkList from '$lib/components/CardLinkList.svelte';
</script>

<svelte:head>
	<title>Examples — Architecture Decision Record</title>
	<meta name="description" content="Worked ADR examples: choosing a database, CSS frameworks, monorepo vs multirepo, and more." />
</svelte:head>

<a class="back-link" href="/">&larr; Home</a>

<h1>ADR examples</h1>
<p>{manifest.examples.length} worked examples.</p>

<CardLinkList items={manifest.examples} base="/examples" />
