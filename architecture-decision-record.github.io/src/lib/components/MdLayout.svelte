<script>
	// mdsvex layout applied to every compiled src/content/**/*.md file (see
	// svelte.config.js). Just supplies the `.prose` typography hook —
	// page-level chrome (breadcrumb, title, pager) is added by each
	// [slug]/+page.svelte instead, since only it knows the section context.
	let { children } = $props();
</script>

<div class="prose">
	{@render children?.()}
</div>
