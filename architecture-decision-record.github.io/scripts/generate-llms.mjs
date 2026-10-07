#!/usr/bin/env node
// Writes static/llms.txt and static/llms.json from src/lib/manifest.json,
// src/content/templates.meta.json, and the LOCALES array in src/lib/locales.js,
// so the page lists and counts never drift from the site. Reads only files
// inside this directory (it also runs in the standalone published repo).
//   pnpm run llms
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://architecture-decision-record.github.io';
const REPO = 'https://github.com/architecture-decision-record/architecture-decision-record';
const TITLE = 'Architecture Decision Record (ADR)';
const SUMMARY =
  'A guide to architecture decision records: what they are, how to start using them, and a curated set of decision record templates and real-world examples.';

const manifest = JSON.parse(readFileSync(path.join(root, 'src/lib/manifest.json'), 'utf8'));
const metaFile = path.join(root, 'src/content/templates.meta.json');
const meta = existsSync(metaFile) ? JSON.parse(readFileSync(metaFile, 'utf8')) : {};

const localesSource = readFileSync(path.join(root, 'src/lib/locales.js'), 'utf8');
const localeMatch = /export const LOCALES = \[([^\]]*)\]/.exec(localesSource);
const locales = localeMatch ? [...localeMatch[1].matchAll(/'([^']+)'/g)].map((m) => m[1]) : [];

const pages = (section) =>
  manifest[section].map((p) => ({
    title: section === 'templates' ? (meta[p.slug]?.title ?? p.title) : p.title,
    url: `${SITE}/en/${section}/${p.slug}/`,
    ...(section === 'templates' && meta[p.slug]?.description ? { description: meta[p.slug].description } : {})
  }));

const sections = {
  guide: pages('guide'),
  templates: pages('templates'),
  examples: pages('examples')
};

const line = (p) => `- [${p.title}](${p.url})${p.description ? `: ${p.description}` : ''}`;
const txt = [
  `# ${TITLE}`,
  '',
  `> ${SUMMARY} Source: ${REPO}`,
  '',
  '## Guide',
  '',
  ...sections.guide.map(line),
  '',
  '## Templates',
  '',
  ...sections.templates.map(line),
  '',
  '## Examples',
  '',
  ...sections.examples.map(line),
  '',
  '## Optional',
  '',
  `- [Skills](${SITE}/en/skills/): Claude Code skills for writing and maintaining ADRs`,
  `- [Translations](${REPO}/tree/main/locales): ${locales.length} language picker entries; translated documents, examples, and templates`,
  `- [Source repository](${REPO}): README, specification (spec/), agent guides (AGENTS.md, AGENTS/)`,
  ''
].join('\n');

const json = {
  name: TITLE,
  summary: SUMMARY,
  site: SITE,
  repository: REPO,
  counts: {
    guide: sections.guide.length,
    templates: sections.templates.length,
    examples: sections.examples.length,
    locales: locales.length
  },
  sections,
  skills: `${SITE}/en/skills/`,
  locales,
  translations: `${REPO}/tree/main/locales`
};

writeFileSync(path.join(root, 'static/llms.txt'), txt);
writeFileSync(path.join(root, 'static/llms.json'), JSON.stringify(json, null, 2) + '\n');
console.log(`Wrote static/llms.txt and static/llms.json (${json.counts.guide} guide, ${json.counts.templates} templates, ${json.counts.examples} examples, ${json.counts.locales} locales).`);
