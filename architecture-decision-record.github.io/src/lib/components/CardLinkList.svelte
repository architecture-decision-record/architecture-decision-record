<script lang="ts">
	// Shared card-grid used by the guide, templates, and examples index
	// pages. `items` needs only `slug` and `title`; `description` is
	// optional (only the templates index currently has one, sourced from
	// README.md's own parentheticals — see generate-manifest.mjs).
	let {
		items,
		base
	}: { items: { slug: string; title: string; description?: string }[]; base: string } = $props();
</script>

<ul class="card-grid">
	{#each items as item (item.slug)}
		<li class="card">
			<a class="card-title" href="{base}/{item.slug}/">{item.title}</a>
			{#if item.description}
				<p class="card-description">{item.description}</p>
			{/if}
		</li>
	{/each}
</ul>
