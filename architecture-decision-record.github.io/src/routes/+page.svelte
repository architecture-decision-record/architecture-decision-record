<script>
	import manifest from '$lib/manifest.json';
</script>

<svelte:head>
	<title>Architecture Decision Record (ADR)</title>
	<meta
		name="description"
		content="Templates, examples, and a Claude Code skill for writing architecture decision records (ADRs)."
	/>
</svelte:head>

<section class="hero">
	<h1>Architecture decision record (ADR)</h1>
	<p>
		An architecture decision record (ADR) is a document that captures an important architecture
		decision made along with its context and consequences — for software planning, CTO/CIO
		leadership teamwork, and project management documentation.
	</p>
	<div class="button-row">
		<a class="button" href="/guide/">Read the guide</a>
		<a class="button secondary" href="/templates/">Browse templates</a>
		<a class="button secondary" href="/skills/">Claude Code skills</a>
	</div>
</section>

<div class="notice">
	<strong>Important:</strong> do your own due diligence for these resources before using them in any
	critical systems.
</div>

<section>
	<h2>New: Claude Code skills for ADRs</h2>
	<p>
		Two <a href="https://claude.com/claude-code">Claude Code</a> skills ship in the source repository
		so an AI coding agent can write and maintain ADRs the way this project recommends — see the
		<a href="/skills/">skills page</a> for what each one does and how to install it.
	</p>
	<div class="skill-grid">
		<div class="skill-card">
			<h3>architecture-decision-record-skill</h3>
			<p>For anyone writing an ADR in any project: picks a template, names the file, and writes good context/consequences.</p>
		</div>
		<div class="skill-card">
			<h3>architecture-decision-record-maintainer-skill</h3>
			<p>For maintainers of this repository: how to add a template, example, or tool link, and keep README.md and locales/ in sync.</p>
		</div>
	</div>
</section>

<section>
	<h2>Explore</h2>
	<ul class="card-grid">
		<li class="card">
			<a class="card-title" href="/guide/">Guide</a>
			<p class="card-description">{manifest.guide.length} sections — what an ADR is, how to start, naming, teamwork, fitness functions, and tools.</p>
		</li>
		<li class="card">
			<a class="card-title" href="/templates/">Templates</a>
			<p class="card-description">{manifest.templates.length} ADR templates collected from across the industry, from Nygard to arc42.</p>
		</li>
		<li class="card">
			<a class="card-title" href="/examples/">Examples</a>
			<p class="card-description">{manifest.examples.length} worked ADR examples, from choosing a database to a 4-day work week.</p>
		</li>
	</ul>
</section>
