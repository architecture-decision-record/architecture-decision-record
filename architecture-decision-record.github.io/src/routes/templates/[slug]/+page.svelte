<script>
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.template.title} — Architecture Decision Record Templates</title>
</svelte:head>

<a class="back-link" href="/templates/">&larr; Templates</a>

<data.content />
