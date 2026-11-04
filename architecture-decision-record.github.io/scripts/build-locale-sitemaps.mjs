// Split the site's sitemap.xml into one sitemap per locale: build/<locale>/sitemap.xml.
// Run after the build has written build/sitemap.xml. Usage: node scripts/build-locale-sitemaps.mjs [build-dir]
// A locale directory with no entries in the site sitemap (such as a redirect to another locale)
// gets a sitemap that lists its own home page.
import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = process.argv[2] ?? 'build';
const rootFile = join(dir, 'sitemap.xml');
if (!existsSync(rootFile)) {
	console.error(`locale sitemaps: ${rootFile} not found`);
	process.exit(1);
}

const LOCALE = /^[a-z]{2,3}-([a-z]{2}|\d{3})(-[a-z]+)?$/;
const xml = readFileSync(rootFile, 'utf8');
const header = xml.slice(0, xml.indexOf('<urlset')) + xml.match(/<urlset[^>]*>/)[0] + '\n';
const origin = xml.match(/<loc>(https?:\/\/[^/<]+)\//)[1];

const byLocale = new Map();
for (const name of readdirSync(dir)) {
	if (LOCALE.test(name) && existsSync(join(dir, name, 'index.html'))) byLocale.set(name, []);
}
for (const [entry] of xml.matchAll(/<url>[\s\S]*?<\/url>/g)) {
	const path = entry.match(/<loc>https?:\/\/[^/]+\/([^<]*)<\/loc>/)?.[1];
	const locale = path?.split('/')[0];
	if (locale && byLocale.has(locale) && statSync(join(dir, locale)).isDirectory()) byLocale.get(locale).push(entry);
}

for (const [locale, entries] of byLocale) {
	if (entries.length === 0) entries.push(`<url><loc>${origin}/${locale}/</loc></url>`);
	writeFileSync(join(dir, locale, 'sitemap.xml'), header + entries.map((e) => `  ${e}\n`).join('') + '</urlset>\n');
}
console.log(`locale sitemaps: ${byLocale.size} locales`);
