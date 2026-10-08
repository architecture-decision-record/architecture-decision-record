#!/usr/bin/env node
// Copies every locale's pages from ../locales/<slug>/<section>/<dir>/index.md
// (and each section's own index.md, and the locale's own index.md) into src/content/locales/<slug>/..., and
// writes src/lib/locale-pages.json, the per-locale tree that drives the
// /<locale>/, /<locale>/<section>/ and /<locale>/<section>/<page>/ routes.
// Reads the parent monorepo, so it runs with `pnpm run content`; the copied
// files are committed. Never hand-edit src/content/locales/.
//   pnpm run locales
// See spec/locale-specific-search-picker/index.md.
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync, copyFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = path.resolve(here, '..');
const localesRoot = path.resolve(siteRoot, '..', 'locales');
const outRoot = path.join(siteRoot, 'src/content/locales');
const SOURCE = 'en-001';
const KINDS = ['documents', 'templates', 'examples'];

const subdirs = (dir) =>
	readdirSync(dir, { withFileTypes: true })
		.filter((e) => e.isDirectory())
		.map((e) => e.name)
		.sort();
const peerId = (dir) => {
	const f = path.join(dir, '.locale-peer-id');
	return existsSync(f) ? readFileSync(f, 'utf8').trim() : '';
};
const titleOf = (file, fallback) => {
	const m = /^#\s+(.+)$/m.exec(readFileSync(file, 'utf8'));
	return m ? m[1].replace(/\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/[`*_]/g, '').trim() : fallback;
};

const kindByPeer = new Map(KINDS.map((k) => [peerId(path.join(localesRoot, SOURCE, k)), k]));

rmSync(outRoot, { recursive: true, force: true });
const tree = {};
// slug -> { templates: "<dir>", examples: "<dir>" }: where a locale's section indexes live,
// small enough to ship to every page (the header's link picker uses it).
const sectionDirs = {};
// slug -> { "<section>/": peerId, "<section>/<dir>": peerId }: lets the language
// picker find the same page in another locale.
const peers = {};
let pages = 0;

const slugs = readdirSync(localesRoot, { withFileTypes: true })
	.filter((e) => e.isDirectory() && /^[a-z]{2,3}-[a-z0-9]{2,3}$/.test(e.name))
	.map((e) => e.name)
	.sort();

for (const slug of slugs) {
	const localeDir = path.join(localesRoot, slug);
	const sections = [];
	peers[slug] = {};
	// The locale's own index.md is its landing page: the translated README.
	const rootIndex = path.join(localeDir, 'index.md');
	if (existsSync(rootIndex)) {
		mkdirSync(path.join(outRoot, slug), { recursive: true });
		copyFileSync(rootIndex, path.join(outRoot, slug, 'index.md'));
	}
	for (const sectionDir of subdirs(localeDir)) {
		const sectionPath = path.join(localeDir, sectionDir);
		const kind = kindByPeer.get(peerId(sectionPath));
		if (!kind) continue;
		peers[slug][`${sectionDir}/`] = peerId(sectionPath);
		const outSection = path.join(outRoot, slug, sectionDir);
		mkdirSync(outSection, { recursive: true });
		const sectionIndex = path.join(sectionPath, 'index.md');
		let title = sectionDir;
		if (existsSync(sectionIndex)) {
			copyFileSync(sectionIndex, path.join(outSection, 'index.md'));
			title = titleOf(sectionIndex, sectionDir);
		}
		const sectionPages = [];
		for (const dir of subdirs(sectionPath)) {
			const file = path.join(sectionPath, dir, 'index.md');
			if (!existsSync(file) || !statSync(file).isFile()) continue;
			copyFileSync(file, path.join(outSection, `${dir}.md`));
			sectionPages.push({ dir, title: titleOf(file, dir) });
			peers[slug][`${sectionDir}/${dir}`] = peerId(path.join(sectionPath, dir));
			pages += 1;
		}
		sections.push({ dir: sectionDir, kind, title, hasIndex: existsSync(sectionIndex), pages: sectionPages });
	}
	sections.sort((a, b) => KINDS.indexOf(a.kind) - KINDS.indexOf(b.kind));
	tree[slug] = sections;
	sectionDirs[slug] = Object.fromEntries(sections.filter((s) => s.hasIndex).map((s) => [s.kind, s.dir]));
}

writeFileSync(path.join(siteRoot, 'src/lib/locale-pages.json'), JSON.stringify(tree));
writeFileSync(path.join(siteRoot, 'src/lib/locale-peers.json'), JSON.stringify(peers));
writeFileSync(path.join(siteRoot, 'src/lib/locale-sections.json'), JSON.stringify(sectionDirs));
console.log(`Synced ${pages} locale page(s) for ${slugs.length} locale(s) into src/content/locales/ and src/lib/locale-pages.json`);
