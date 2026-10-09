#!/usr/bin/env node
// Serves build/ and runs axe-core (WCAG 2.2 AA + best-practice rules) in a real
// browser on key pages at desktop and phone width (with the phone search panel
// open), then checks colour contrast on every Lily theme. Exits 1 on any violation.
//   pnpm run build && pnpm run a11y
// Locally, set PW_CHANNEL=chrome to use the installed Chrome instead of Playwright's Chromium.
import { createReadStream, existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { chromium } from 'playwright';

const siteRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const build = path.join(siteRoot, 'build');
if (!existsSync(build)) {
	console.error('build/ not found: run `pnpm run build` first');
	process.exit(1);
}
const axeSource = readFileSync(createRequire(import.meta.url).resolve('axe-core/axe.min.js'), 'utf8');

const TYPES = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.png': 'image/png', '.xml': 'application/xml', '.txt': 'text/plain' };
const server = createServer((req, res) => {
	let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
	let file = path.join(build, p);
	if (existsSync(file) && statSync(file).isDirectory()) file = path.join(file, 'index.html');
	const found = existsSync(file) && statSync(file).isFile();
	if (!found) file = path.join(build, '404.html');
	res.writeHead(found ? 200 : 404, { 'content-type': TYPES[path.extname(file)] ?? 'application/octet-stream' });
	createReadStream(file).pipe(res);
});
await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
const base = `http://127.0.0.1:${server.address().port}`;

const browser = await chromium.launch(process.env.PW_CHANNEL ? { channel: process.env.PW_CHANNEL } : {});
const AXE = { runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'] };
const problems = [];

async function audit(page, label, options = AXE) {
	await page.addScriptTag({ content: axeSource });
	const result = await page.evaluate((o) => axe.run(document, o), options);
	for (const v of result.violations) problems.push(`${label}: ${v.id} (${v.impact}, ${v.nodes.length}) ${v.nodes[0].html.slice(0, 90)}`);
	return result.violations.length;
}

const PAGES = [
	'/',
	'/en-001/',
	'/en-001/documents/how-to-start-using-adrs/',
	'/en-001/documents/how-to-start-using-adrs-with-git/',
	'/en-001/templates/decision-record-template-by-arc42/',
	'/en-001/examples/metrics-monitors-alerts/',
	'/en-001/?template',
	'/ar-001/',
	'/ur-001/',
	'/ja-001/',
	'/tr-001/'
];

let checks = 0;
for (const width of [1200, 390]) {
	const page = await browser.newPage({ viewport: { width, height: 800 } });
	for (const url of PAGES) {
		await page.goto(base + url);
		await page.waitForTimeout(700);
		if (url.includes('?')) await page.waitForSelector('ol.results li', { timeout: 15000 }).catch(() => {});
		await audit(page, `${url} @${width}px`);
		checks++;
	}
	if (width === 390) {
		await page.goto(base + '/en-001/');
		await page.waitForTimeout(700);
		await page.locator('.site-header-controls .search-picker-button').click();
		await page.waitForTimeout(300);
		await audit(page, '/en-001/ @390px (search open)');
		checks++;
	}
	await page.close();
}

// Colour contrast on every theme, for the landing page and a document.
const themes = readdirSync(path.join(build, 'themes')).filter((f) => f.endsWith('.css')).map((f) => f.replace(/\.css$/, ''));
for (const theme of themes) {
	const context = await browser.newContext({ viewport: { width: 1200, height: 900 } });
	await context.addInitScript((t) => localStorage.setItem('adr-theme', t), theme);
	const page = await context.newPage();
	for (const url of ['/en-001/', '/en-001/documents/how-to-start-using-adrs/']) {
		await page.goto(base + url);
		await page.waitForTimeout(400);
		await audit(page, `theme ${theme} ${url}`, { runOnly: ['color-contrast'] });
		checks++;
	}
	await context.close();
}

await browser.close();
server.close();
console.log(`${checks} axe checks (${PAGES.length} pages x 2 widths, search panel, ${themes.length} themes); ${problems.length} violation(s)`);
for (const p of problems.slice(0, 25)) console.log('  ' + p);
process.exit(problems.length ? 1 : 0);
