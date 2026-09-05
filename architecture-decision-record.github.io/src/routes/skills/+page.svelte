<svelte:head>
	<title>Claude Code skills — Architecture Decision Record</title>
	<meta
		name="description"
		content="Two Claude Code skills for writing and maintaining architecture decision records (ADRs), and how to install them."
	/>
</svelte:head>

<a class="back-link" href="/">&larr; Home</a>

<article class="prose">
	<h1>Claude Code skills for ADRs</h1>
	<p>
		The <a href="https://github.com/architecture-decision-record/architecture-decision-record">architecture-decision-record</a>
		repository ships two <a href="https://claude.com/claude-code">Claude Code</a> skills under
		<code>skills/</code>. A skill is a packaged set of instructions Claude Code loads for a
		particular kind of task — here, writing an ADR, or maintaining this project.
	</p>

	<h2>architecture-decision-record-skill</h2>
	<p>General purpose — for anyone writing an ADR in <em>any</em> project, not just this one.</p>
	<p>
		Given a decision to document, it helps decide whether the decision even needs an ADR, finds or
		sets up an <code>adr/</code> or <code>decisions/</code> directory, names the file using the
		present-tense-imperative convention (<code>choose-database.md</code>), picks a template from
		the eleven bundled skeletons (Nygard, MADR, Tyree &amp; Akerman, ITD, business case, Alexandrian,
		Planguage, EdgeX, arc42, Gareth Morgan, GIG Cymru NHS Wales — see <a href="/templates/">Templates</a>),
		and writes solid Context/Decision/Consequences sections. It also covers superseding an old ADR
		and pointers to PR guardrail tools.
	</p>
	<p>
		<a href="https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/architecture-decision-record-skill"
			>View the skill's source</a
		>
	</p>

	<h2>architecture-decision-record-maintainer-skill</h2>
	<p>For maintainers of <em>this</em> repository specifically — not for writing an ADR elsewhere.</p>
	<p>
		Documents the repo's layout (<code>README.md</code>, <code>locales/&lt;lang&gt;/{`{documents,examples,templates}`}</code>),
		the <code>&lt;div class="include"&gt;</code> mirroring pattern between README.md sections and
		<code>locales/en/documents/</code>, and the exact steps for adding a new template, example, or
		tool/guardrail link — including which files need to change together, based on how past
		contributions (like the ADR Guard addition) actually shipped. It also gives a PR-review
		checklist.
	</p>
	<p>
		<a href="https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/architecture-decision-record-maintainer-skill"
			>View the skill's source</a
		>
	</p>

	<h2>Installing a skill</h2>
	<p>Claude Code discovers skills under a <code>skills/</code> directory. Copy the one you want:</p>
	<ul>
		<li>
			<strong>Just this project:</strong> copy the skill folder into <code>.claude/skills/</code>
			at the root of the repository you're working in.
		</li>
		<li>
			<strong>Every project:</strong> copy it into <code>~/.claude/skills/</code> in your home
			directory instead.
		</li>
	</ul>
	<pre><code
			>git clone https://github.com/architecture-decision-record/architecture-decision-record
mkdir -p .claude/skills
cp -r architecture-decision-record/skills/architecture-decision-record-skill .claude/skills/</code
		></pre>
	<p>
		Then ask Claude Code to write or review an ADR — it loads the skill automatically when the
		request matches.
	</p>
</article>
