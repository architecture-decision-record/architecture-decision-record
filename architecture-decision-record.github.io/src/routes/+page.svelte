<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { routeForLanguages } from '#lib/locales.js';

	// "/" picks the visitor's language: the first browser language preference
	// that has a locale route here wins (see routeForLanguages), otherwise
	// English (en-001). The page is static, so it is prerendered with links for
	// visitors without JavaScript and for crawlers.
	onMount(() => {
		const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
		goto(routeForLanguages(languages), { replaceState: true });
	});
</script>

<svelte:head>
	<title>Architecture Decision Record (ADR)</title>
	<link rel="canonical" href="https://architecture-decision-record.github.io/en-001/" />
</svelte:head>

<p>Redirecting to your language… <a href="/en-001/">Continue in English</a></p>
