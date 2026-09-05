#!/usr/bin/env node
// Scans src/content/ and writes src/lib/manifest.json: the ordered lists of
// guide sections, templates, and examples that drive navigation and the
// dynamic [slug] routes. Regenerate after `pnpm run content`, or whenever
// src/content/ changes:
//   pnpm run manifest
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const repoRoot = path.resolve(root, '..');
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
// a description of the template itself — so title the template from
// README.md's own "Templates:" list instead, e.g.
// "[Decision record template by Michael Nygard](locales/en/templates/decision-record-template-by-michael-nygard/)".
const readme = readFileSync(path.join(repoRoot, 'README.md'), 'utf-8');
const templateTitles = new Map();
const templateLinkRe = /\[([^\]]+)\]\(locales\/en\/templates\/([a-z0-9-]+)\/?\)/g;
let titleMatch;
while ((titleMatch = templateLinkRe.exec(readme))) {
  templateTitles.set(titleMatch[2], titleMatch[1].trim());
}
for (const template of templates) {
  const title = templateTitles.get(template.slug);
  if (title) template.title = title;
}
templates.sort((a, b) => a.title.localeCompare(b.title));

// Pull each template's short parenthetical description out of the guide's
// own "ADR example templates" section, e.g.
// "[Decision record template by Michael Nygard](locales/en/templates/decision-record-template-by-michael-nygard/) (simple and popular)"
const templateDescriptions = new Map();
const templatesGuideDoc = guide.find((g) => g.slug === 'adr-example-templates');
if (templatesGuideDoc) {
  const text = readFileSync(path.join(contentDir, 'guide', `${templatesGuideDoc.slug}.md`), 'utf-8');
  const linkRe = /\[([^\]]+)\]\(locales\/en\/templates\/([a-z0-9-]+)\/?\)(?:\s*\(([^)]+)\))?/g;
  let match;
  while ((match = linkRe.exec(text))) {
    const [, , slug, description] = match;
    if (description) templateDescriptions.set(slug, description);
  }
}
for (const template of templates) {
  const description = templateDescriptions.get(template.slug);
  if (description) template.description = description;
}

const manifest = { guide, templates, examples };
writeFileSync(outFile, JSON.stringify(manifest, null, 2) + '\n');
console.log(
  `Wrote manifest: ${guide.length} guide section(s), ${templates.length} template(s), ${examples.length} example(s).`
);
