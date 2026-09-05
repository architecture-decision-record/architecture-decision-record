<script>
	import manifest from '$lib/manifest.json';
	import CardLinkList from '$lib/components/CardLinkList.svelte';
</script>

<svelte:head>
	<title>Guide — Architecture Decision Record</title>
	<meta name="description" content="How to start using ADRs, naming conventions, teamwork advice, fitness functions, and tools." />
</svelte:head>

<a class="back-link" href="/">&larr; Home</a>

<h1>Guide</h1>
<p>Everything from the project's README, one section per page — in reading order.</p>

<CardLinkList items={manifest.guide} base="/guide" />
