#!/usr/bin/env node
// Writes static/search/<slug>.json, one search index per locale, from
// ../locales/<slug>/<section>/<dir>/index.md. A locale's file contains only
// that locale's pages, which is what keeps /<slug>/?<query> from ever
// matching another locale. Reads the parent monorepo, so it runs with
// `pnpm run content` (not `build`); the generated files are committed.
//   pnpm run search-index
// See spec/locale-specific-search-picker/index.md.
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = path.resolve(here, '..');
const localesRoot = path.resolve(siteRoot, '..', 'locales');
const outDir = path.join(siteRoot, 'static/search');
const REPO_TREE = 'https://github.com/architecture-decision-record/architecture-decision-record/tree/main/locales';
const SOURCE = 'en-001';
const BUDGET = 1_000_000; // bytes per locale file (spec)
const SNIPPET_TEXT = 500;

const manifest = JSON.parse(readFileSync(path.join(siteRoot, 'src/lib/manifest.json'), 'utf8'));
const siteSlugs = {
	documents: new Set(manifest.guide.map((p) => p.slug)),
	templates: new Set(manifest.templates.map((p) => p.slug)),
	examples: new Set(manifest.examples.map((p) => p.slug))
};
const siteSection = { documents: 'guide', templates: 'templates', examples: 'examples' };

const subdirs = (dir) =>
	readdirSync(dir, { withFileTypes: true })
		.filter((e) => e.isDirectory())
		.map((e) => e.name)
		.sort();
const peerId = (dir) => {
	const f = path.join(dir, '.locale-peer-id');
	return existsSync(f) ? readFileSync(f, 'utf8').trim() : '';
};

// English section/dir for each peer id, so a translated page can link to its
// English twin while translated pages are not routed.
const english = new Map();
const englishSections = ['documents', 'templates', 'examples'];
for (const section of englishSections) {
	for (const dir of subdirs(path.join(localesRoot, SOURCE, section))) {
		english.set(peerId(path.join(localesRoot, SOURCE, section, dir)), { section, dir });
	}
}
const englishSectionByPeer = new Map(
	englishSections.map((s) => [peerId(path.join(localesRoot, SOURCE, s)), s])
);

function plainText(md) {
	return md
		.replace(/<!--[\s\S]*?-->/g, ' ')
		.replace(/```[^\n]*\n/g, '\n')
		.replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
		.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
		.replace(/<[^>]+>/g, ' ')
		.replace(/^\s{0,3}#{1,6}\s+/gm, '')
		.replace(/^\s*[-*+>]\s+/gm, '')
		.replace(/^\s*\d+\.\s+/gm, '')
		.replace(/[|`*_~]/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();
}

function headingsOf(md) {
	let fence = false;
	const out = [];
	for (const line of md.split('\n')) {
		if (line.startsWith('```')) fence = !fence;
		const m = !fence && /^#{1,6}\s+(.+?)\s*#*$/.exec(line);
		if (m) out.push(plainText(m[1]));
	}
	return out;
}

function recordUrl(slug, sectionDir, dir, peer) {
	const en = english.get(peer);
	if (en && siteSlugs[en.section].has(en.dir)) return `/${siteSection[en.section]}/${en.dir}/`;
	return `${REPO_TREE}/${slug}/${sectionDir}/${dir}/`;
}

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

const slugs = readdirSync(localesRoot, { withFileTypes: true })
	.filter((e) => e.isDirectory() && /^[a-z]{2,3}-[a-z0-9]{2,3}$/.test(e.name))
	.map((e) => e.name)
	.sort();

for (const slug of slugs) {
	const localeDir = path.join(localesRoot, slug);
	const records = [];
	for (const sectionDir of subdirs(localeDir)) {
		const sectionPath = path.join(localeDir, sectionDir);
		const sectionPeer = peerId(sectionPath);
		const section = englishSectionByPeer.get(sectionPeer);
		for (const dir of subdirs(sectionPath)) {
			const file = path.join(sectionPath, dir, 'index.md');
			if (!existsSync(file) || !statSync(file).isFile()) continue;
			const md = readFileSync(file, 'utf8');
			const title = plainText((/^#\s+(.+)$/m.exec(md) ?? [, dir])[1]);
			const peer = peerId(path.join(sectionPath, dir));
			records.push({
				id: `${sectionDir}/${dir}`,
				title,
				section: sectionDir,
				kind: section ?? englishSectionByPeer.get(peerId(sectionPath)) ?? '',
				url: recordUrl(slug, sectionDir, dir, peer),
				headings: headingsOf(md),
				text: plainText(md)
			});
		}
	}
	let json = JSON.stringify({ locale: slug, records });
	if (Buffer.byteLength(json) > BUDGET) {
		// Over budget: titles, headings, and the start of the body only.
		for (const r of records) r.text = r.text.slice(0, SNIPPET_TEXT);
		json = JSON.stringify({ locale: slug, records, truncated: true });
	}
	writeFileSync(path.join(outDir, `${slug}.json`), json);
	console.log(`${slug}: ${records.length} records, ${(Buffer.byteLength(json) / 1024).toFixed(0)} KB`);
}
