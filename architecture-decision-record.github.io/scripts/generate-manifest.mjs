#!/usr/bin/env node
// Scans src/content/ and writes src/lib/manifest.json: the ordered lists of
// guide sections, templates, and examples that drive navigation and the
// dynamic [slug] routes. Regenerate after `pnpm run content`, or whenever
// src/content/ changes:
//   pnpm run manifest
//
// Reads only from src/content/ (never from the parent monorepo, e.g. no
// "../README.md") because this script also runs as part of `pnpm run build`
// in the standalone architecture-decision-record.github.io repo this
// directory is published to via git subtree — there is no "../" there.
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const contentDir = path.resolve(root, 'src/content');
const outFile = path.resolve(root, 'src/lib/manifest.json');

function firstH1Title(text) {
  const line = text.split('\n').find((l) => l.startsWith('# '));
  return line ? line.slice(2).trim() : '';
}

function readSection(section) {
  const dir = path.join(contentDir, section);
  let names;
  try {
    names = readdirSync(dir).filter((f) => f.endsWith('.md'));
  } catch {
    return [];
  }
  return names
    .sort()
    .map((file) => {
      const text = readFileSync(path.join(dir, file), 'utf-8');
      return {
        slug: file.replace(/\.md$/, ''),
        title: firstH1Title(text) || file.replace(/\.md$/, '')
      };
    });
}

// Guide order follows README.md's own heading order, not alphabetical —
// read it straight off the filenames' original position by re-deriving the
// same order sync-content.mjs wrote them in (mtime is unreliable across
// checkouts, so instead keep a fixed, hand-maintained order here and fall
// back to alphabetical for anything unrecognized, e.g. a newly added
// README section this list hasn't been updated for yet).
const GUIDE_ORDER = [
  'what-is-an-architecture-decision-record',
  'how-to-start-using-adrs',
  'how-to-start-using-adrs-with-tools',
  'how-to-start-using-adrs-with-git',
  'claude-code-skills-for-adrs',
  'file-name-conventions-for-adrs',
  'suggestions-for-writing-good-adrs',
  'adr-example-templates',
  'teamwork-advice-for-adrs',
  'teamwork-questions-for-adrs',
  'next-step-concepts-for-adrs',
  'architecture-diagrams-and-views-and-viewpoints',
  'fitness-functions-for-decisions-as-code',
  'decision-guardrails-for-pull-requests',
  'for-more-information'
];

function orderBy(items, order) {
  const bySlug = new Map(items.map((item) => [item.slug, item]));
  const ordered = order.filter((slug) => bySlug.has(slug)).map((slug) => bySlug.get(slug));
  const rest = items.filter((item) => !order.includes(item.slug)).sort((a, b) => a.slug.localeCompare(b.slug));
  return [...ordered, ...rest];
}

const guide = orderBy(readSection('guide'), GUIDE_ORDER);
const templates = readSection('templates');
const examples = readSection('examples').sort((a, b) => a.title.localeCompare(b.title));

// Each template's own H1 is a fill-in-the-blank placeholder for the ADRs
// people will write with it (e.g. "[000] Title", "{Your Title Here}"), not
// a description of the template itself — so override title (and
// description, where README.md's own "ADR example templates" section gives
// one) from the sidecar sync-content.mjs generates against README.md. See
// that script's own comment for why this can't just read README.md here.
const metaFile = path.join(contentDir, 'templates.meta.json');
if (existsSync(metaFile)) {
  const meta = JSON.parse(readFileSync(metaFile, 'utf-8'));
  for (const template of templates) {
    const entry = meta[template.slug];
    if (entry?.title) template.title = entry.title;
    if (entry?.description) template.description = entry.description;
  }
}
templates.sort((a, b) => a.title.localeCompare(b.title));

const manifest = { guide, templates, examples };
writeFileSync(outFile, JSON.stringify(manifest, null, 2) + '\n');
console.log(
  `Wrote manifest: ${guide.length} guide section(s), ${templates.length} template(s), ${examples.length} example(s).`
);
