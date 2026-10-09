#!/usr/bin/env node
// Crawls the prerendered site in build/ and fails (exit 1) on any broken internal
// link or in-page anchor. The one allowed exception is the MADR template's own
// illustrative "[ADR-0005](0005-example.md)" sample link, which is not navigable.
//   pnpm run build && pnpm run verify
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'build');
if (!existsSync(root)) {
	console.error('build/ not found: run `pnpm run build` first');
	process.exit(1);
}

const pages = [];
(function walk(dir) {
	for (const e of readdirSync(dir)) {
		const p = path.join(dir, e);
		if (statSync(p).isDirectory()) walk(p);
		else if (e === 'index.html') pages.push(p);
	}
})(root);

const idCache = new Map();
const idsOf = (file) => {
	if (!idCache.has(file)) idCache.set(file, new Set([...readFileSync(file, 'utf8').matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
	return idCache.get(file);
};
const decode = (s) => {
	try {
		return decodeURIComponent(s);
	} catch {
		return s;
	}
};

const problems = [];
for (const page of pages) {
	const html = readFileSync(page, 'utf8');
	for (const m of html.matchAll(/<a\s[^>]*href="([^"]+)"/g)) {
		const href = m[1].replace(/&amp;/g, '&');
		if (/^(https?:|mailto:|\/\/|data:)/.test(href)) continue;
		if (href.startsWith('#')) {
			if (!idsOf(page).has(decode(href.slice(1)))) problems.push(`bad anchor ${href} in ${path.relative(root, page)}`);
			continue;
		}
		if (!href.startsWith('/')) {
			if (!href.endsWith('0005-example.md')) problems.push(`relative link ${href} in ${path.relative(root, page)}`);
			continue;
		}
		const [rawPath, frag = ''] = href.split('#');
		let target = path.join(root, decode(rawPath));
		if (existsSync(target) && statSync(target).isDirectory()) target = path.join(target, 'index.html');
		if (!existsSync(target)) problems.push(`broken link ${href} in ${path.relative(root, page)}`);
		else if (frag && target.endsWith('.html') && !idsOf(target).has(decode(frag))) problems.push(`bad anchor ${href} in ${path.relative(root, page)}`);
	}
}
console.log(`${pages.length} pages checked; ${problems.length} problem(s)`);
for (const p of problems.slice(0, 20)) console.log('  ' + p);
process.exit(problems.length ? 1 : 0);
