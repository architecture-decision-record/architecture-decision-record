#!/usr/bin/env node
// Writes static/llms.txt and static/llms.json from the en-001 pages in
// src/lib/locale-pages.json, the en-001 template index and root README under
// src/content/locales/en-001/, and the LOCALES array in src/lib/locales.js,
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

const tree = JSON.parse(readFileSync(path.join(root, 'src/lib/locale-pages.json'), 'utf8'));
const english = tree['en-001'] ?? [];
// Template titles come from the en-001 templates index; short descriptions
// ("simple and popular") from the "ADR example templates" list in the en-001 root README.
const enRoot = path.join(root, 'src/content/locales/en-001');
const read = (f) => (existsSync(f) ? readFileSync(f, 'utf8') : '');
const dirOf = (href) => href.replace(/\/$/, '').split('/').pop();
const meta = {};
for (const m of read(path.join(enRoot, 'templates/index.md')).matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)) {
  meta[dirOf(m[2])] = { title: m[1].trim() };
}
for (const m of read(path.join(enRoot, 'index.md')).matchAll(/^- \[[^\]]+\]\(templates\/([^/)]+)\/?\) \(([^)]+)\)\s*$/gm)) {
  if (meta[m[1]]) meta[m[1]].description = m[2];
}

const localesSource = readFileSync(path.join(root, 'src/lib/locales.js'), 'utf8');
const localeMatch = /export const LOCALES = \[([^\]]*)\]/.exec(localesSource);
const locales = localeMatch ? [...localeMatch[1].matchAll(/'([^']+)'/g)].map((m) => m[1]) : [];

const pages = (section) =>
  (english.find((s) => s.dir === section)?.pages ?? []).map((p) => ({
    title: section === 'templates' ? (meta[p.dir]?.title ?? p.title) : p.title,
    url: `${SITE}/en-001/${section}/${p.dir}/`,
    ...(section === 'templates' && meta[p.dir]?.description ? { description: meta[p.dir].description } : {})
  }));

const sections = {
  documents: pages('documents'),
  templates: pages('templates'),
  examples: pages('examples')
};

const line = (p) => `- [${p.title}](${p.url})${p.description ? `: ${p.description}` : ''}`;
const txt = [
  `# ${TITLE}`,
  '',
  `> ${SUMMARY} Source: ${REPO}`,
  '',
  '## Documents',
  '',
  ...sections.documents.map(line),
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
  `- [Skills](${REPO}/tree/main/skills): Claude Code skills for writing and maintaining ADRs`,
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
    documents: sections.documents.length,
    templates: sections.templates.length,
    examples: sections.examples.length,
    locales: locales.length
  },
  sections,
  skills: `${REPO}/tree/main/skills`,
  locales,
  translations: `${REPO}/tree/main/locales`
};

writeFileSync(path.join(root, 'static/llms.txt'), txt);
writeFileSync(path.join(root, 'static/llms.json'), JSON.stringify(json, null, 2) + '\n');
console.log(`Wrote static/llms.txt and static/llms.json (${json.counts.documents} documents, ${json.counts.templates} templates, ${json.counts.examples} examples, ${json.counts.locales} locales).`);
