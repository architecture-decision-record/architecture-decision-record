<script>
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.example.title} — Architecture Decision Record Examples</title>
</svelte:head>

<a class="back-link" href="/en/examples/">&larr; Examples</a>

<data.content />
