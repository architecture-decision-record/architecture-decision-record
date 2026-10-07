<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { englishSiteRedirect } from '#lib/locale-nav.js';

	let { children } = $props();

	// en-001 and the English site are one language. In the browser an en-001
	// page forwards to its /en/ counterpart (keeping ?query on the landing);
	// en-001 pages with no counterpart are served as they are.
	$effect(() => {
		const to = englishSiteRedirect(page.url.pathname);
		if (to) goto(to + (to === '/en/' ? page.url.search : ''), { replaceState: true });
	});
</script>

{@render children()}
