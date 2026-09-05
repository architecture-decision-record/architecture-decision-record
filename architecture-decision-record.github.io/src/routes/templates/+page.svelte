<script>
	import manifest from '$lib/manifest.json';
	import CardLinkList from '$lib/components/CardLinkList.svelte';
</script>

<svelte:head>
	<title>Templates — Architecture Decision Record</title>
	<meta name="description" content="ADR templates collected from across the industry: Nygard, MADR, Tyree & Akerman, arc42, and more." />
</svelte:head>

<a class="back-link" href="/">&larr; Home</a>

<h1>ADR templates</h1>
<p>{manifest.templates.length} templates that we have collected on the net.</p>

<CardLinkList items={manifest.templates} base="/templates" />
