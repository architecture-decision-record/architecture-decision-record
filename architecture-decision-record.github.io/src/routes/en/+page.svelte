<script>
	import manifest from '#lib/manifest.json';
	import { page } from '$app/state';
	import { queryFromSearch } from '#lib/search.js';
	import SearchResults from '#lib/components/SearchResults.svelte';

	// "/en/?<query>" is English search (the picker's search form posts here).
	// location.search exists only in the browser; prerendering shows the contents.
	let query = $state('');
	$effect(() => {
		query = queryFromSearch(page.url.search);
	});
</script>

<svelte:head>
	<title>Architecture Decision Record (ADR)</title>
	<meta
		name="description"
		content="Templates, examples, and a Claude Code skill for writing architecture decision records (ADRs)."
	/>
</svelte:head>

{#if query}
	<section class="locale-search" lang="en" dir="ltr">
		<h1>{query}</h1>
		<p class="locale-label">en</p>
		<SearchResults slug="en-001" />
	</section>
{:else}

<section class="intro">
	<h1>Architecture decision record (ADR)</h1>
	<p>
		An architecture decision record (ADR) is a document that captures an important architecture
		decision made along with its context and consequences — for software planning, CTO/CIO
		leadership teamwork, and project management documentation.
	</p>
	<div class="button-row">
		<a class="button" href="/en/guide/">Read the guide</a>
		<a class="button secondary" href="/en/templates/">Browse templates</a>
		<a class="button secondary" href="/en/skills/">AI skills</a>
	</div>
</section>

<section>
	<h2>New: AI skills for ADRs</h2>
	<p>
		Two <a href="https://claude.com/claude-code">Claude Code</a> skills ship in the source repository
		so an AI coding agent can write and maintain ADRs the way this project recommends — see the
		<a href="/en/skills/">skills page</a> for what each one does and how to install it.
	</p>
	<ul class="link-list">
		<li class="link-list-item">
			<strong class="link-list-title">architecture-decision-record-skill</strong>
			<p class="link-list-description">For anyone writing an ADR in any project: picks a template, names the file, and writes good context/consequences.</p>
		</li>
		<li class="link-list-item">
			<strong class="link-list-title">architecture-decision-record-maintainer-skill</strong>
			<p class="link-list-description">For maintainers of this repository: how to add a template, example, or tool link, and keep README.md and locales/ in sync.</p>
		</li>
	</ul>
</section>

<section>
	<h2>Explore</h2>
	<ul class="link-list">
		<li class="link-list-item">
			<a class="link-list-title" href="/en/guide/">Guide</a>
			<p class="link-list-description">{manifest.guide.length} sections — what an ADR is, how to start, naming, teamwork, fitness functions, and tools.</p>
		</li>
		<li class="link-list-item">
			<a class="link-list-title" href="/en/templates/">Templates</a>
			<p class="link-list-description">{manifest.templates.length} ADR templates collected from across the industry, from Nygard to arc42.</p>
		</li>
		<li class="link-list-item">
			<a class="link-list-title" href="/en/examples/">Examples</a>
			<p class="link-list-description">{manifest.examples.length} worked ADR examples, from choosing a database to a 4-day work week.</p>
		</li>
	</ul>
</section>
{/if}
