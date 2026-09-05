#!/usr/bin/env node
// Copies content from the sibling directories of this monorepo into
// src/content/ here: guide sections are parsed out of the repo's own
// README.md, templates and examples are copied from locales/en/. The
// copied files are committed — this script exists to regenerate them
// after README.md or locales/en/ change. Never hand-edit files under
// src/content/; edit the source files and re-run `pnpm run content`
// instead.
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = path.resolve(here, '..');
const repoRoot = path.resolve(siteRoot, '..');
const contentRoot = path.resolve(siteRoot, 'src/content');

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

// mdsvex compiles every file into a Svelte component, and Svelte's HTML
// parser is strict about a few things ordinary Markdown/HTML renderers
// tolerate. Fix known cases here rather than editing the source content
// (which is otherwise copied verbatim) — e.g. the Gareth Morgan template's
// raw HTML table closes a void element ("</br>"), which every browser
// silently ignores but Svelte's compiler rejects outright.
function sanitizeForSvelte(markdown) {
  return markdown.replace(/<br\s*>\s*<\/br>/gi, '<br />').replace(/<\/br>/gi, '<br />');
}

// README.md wraps several sections in `<div class="include" data-path="...">`
// markers used by the maintainer's own translation-sync tooling — some are
// left unclosed by that tooling (see AGENTS.md), which would otherwise
// produce unbalanced HTML on a per-section page. Strip the marker lines
// entirely; they carry no content of their own.
function stripIncludeDivs(markdown) {
  return markdown
    .split('\n')
    .filter((line) => {
      const trimmed = line.trim();
      return !trimmed.startsWith('<div class="include"') && trimmed !== '</div>';
    })
    .join('\n');
}

// --- Guide: one file per top-level `## Heading` section of README.md ---
function syncGuide(readme) {
  const cleaned = stripIncludeDivs(readme);
  const lines = cleaned.split('\n');

  const sections = [];
  let current = null;
  for (const line of lines) {
    const heading = /^## (.+)$/.exec(line);
    if (heading) {
      if (current) sections.push(current);
      current = { title: heading[1].trim(), body: [] };
    } else if (current) {
      current.body.push(line);
    }
  }
  if (current) sections.push(current);

  const outDir = path.join(contentRoot, 'guide');
  rmSync(outDir, { recursive: true, force: true });
  mkdirSync(outDir, { recursive: true });

  for (const section of sections) {
    const slug = slugify(section.title);
    const body = section.body.join('\n').trim();
    writeFileSync(path.join(outDir, `${slug}.md`), `# ${section.title}\n\n${body}\n`);
  }
  console.log(`Synced ${sections.length} guide section(s) into src/content/guide/`);
}

// --- Template metadata sidecar ---
// Each template's own H1 is a fill-in-the-blank placeholder for the ADRs
// people will write with it (e.g. "[000] Title", "{Your Title Here}"), not
// a description of the template itself — so title it from README.md's own
// "Templates:" list instead, e.g. "[Decision record template by Michael
// Nygard](locales/en/templates/decision-record-template-by-michael-nygard/)",
// optionally overridden by the more polished text some templates also get
// in the "## ADR example templates" section further down (which sometimes
// also carries a short parenthetical description). This has to run here,
// against the monorepo's own README.md, and be committed as a sidecar
// (rather than read directly by generate-manifest.mjs) because that script
// also runs standalone in the published architecture-decision-record.github.io
// repo, which has no README.md of its own.
function syncTemplateMetadata(readme) {
  const meta = {};
  const linkRe = /\[([^\]]+)\]\(locales\/en\/templates\/([a-z0-9-]+)\/?\)(?:\s*\(([^)]+)\))?/g;
  let match;
  while ((match = linkRe.exec(readme))) {
    const [, title, slug, description] = match;
    meta[slug] = { title: title.trim(), ...(description ? { description } : {}) };
  }
  writeFileSync(path.join(contentRoot, 'templates.meta.json'), JSON.stringify(meta, null, 2) + '\n');
  console.log(`Wrote metadata for ${Object.keys(meta).length} template(s) into src/content/templates.meta.json`);
}

// --- Templates and examples: copy locales/en/<section>/<slug>/index.md ---
function syncLocaleSection(section) {
  const sourceDir = path.join(repoRoot, 'locales', 'en', section);
  const outDir = path.join(contentRoot, section);
  rmSync(outDir, { recursive: true, force: true });
  mkdirSync(outDir, { recursive: true });

  if (!existsSync(sourceDir)) {
    console.warn(`Skipping missing source section: locales/en/${section}`);
    return;
  }

  const slugs = readdirSync(sourceDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();

  let count = 0;
  for (const slug of slugs) {
    const from = path.join(sourceDir, slug, 'index.md');
    if (!existsSync(from)) continue;
    writeFileSync(path.join(outDir, `${slug}.md`), sanitizeForSvelte(readFileSync(from, 'utf8')));
    count += 1;
  }
  console.log(`Synced ${count} ${section} file(s) into src/content/${section}/`);
}

const readme = readFileSync(path.join(repoRoot, 'README.md'), 'utf8');
syncGuide(readme);
syncTemplateMetadata(readme);
syncLocaleSection('templates');
syncLocaleSection('examples');

console.log('Content sync complete. Run `pnpm run manifest` (or `pnpm run content` next time) to rebuild the navigation manifest.');
