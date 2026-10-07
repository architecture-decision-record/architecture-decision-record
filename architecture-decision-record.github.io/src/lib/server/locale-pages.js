// Server-only: loads and renders a locale's Markdown pages at build time.
// Used by src/routes/[locale]/**/+page.server.js. Sources are the copies in
// src/content/locales/<slug>/<section>/<dir>.md (see scripts/sync-locales.mjs).
import { Marked } from 'marked';
import localePages from '#lib/locale-pages.json';

/** @typedef {{dir: string, title: string}} Page */
/** @typedef {{dir: string, kind: string, title: string, hasIndex: boolean, pages: Page[]}} Section */
/** @type {Record<string, Section[]>} */
const tree = localePages;

const files = import.meta.glob('/src/content/locales/**/*.md', { query: '?raw', import: 'default' });

/** Heading slug: letters, marks, numbers, "-" and "_" kept; spaces become "-". @param {string} text */
export function slugify(text) {
	return text
		.trim()
		.toLowerCase()
		.replace(/<[^>]+>/g, '')
		.replace(/&#39;|&apos;/g, "'")
		.replace(/&quot;/g, '"')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&amp;/g, '&')
		.replace(/[^\p{L}\p{M}\p{N}\-_ ]/gu, '')
		.replace(/ /g, '-');
}

/** @param {string} slug @returns {Section[]} */
export const sectionsOf = (slug) => tree[slug] ?? [];

export function localeEntries() {
	/** @type {{locale: string, section: string}[]} */
	const out = [];
	for (const [locale, sections] of Object.entries(tree)) {
		for (const s of sections) {
			if (s.hasIndex) out.push({ locale, section: s.dir });
		}
	}
	return out;
}

export function pageEntries() {
	/** @type {{locale: string, section: string, dir: string}[]} */
	const out = [];
	for (const [locale, sections] of Object.entries(tree)) {
		for (const s of sections) for (const p of s.pages) out.push({ locale, section: s.dir, dir: p.dir });
	}
	return out;
}

/**
 * Resolve a relative Markdown link, written for the GitHub directory layout,
 * to a site URL. `base` is the page's own path inside the locale
 * ("<section>/<dir>/" or "<section>/"). Returns null if it is not a known page.
 * @param {string} slug @param {string} base @param {string} href
 */
function resolveLink(slug, base, href) {
	const [target, fragment = ''] = href.split('#');
	if (!target) return null;
	let path;
	try {
		path = decodeURI(new URL(decodeURI(target), `http://x/${base}`).pathname);
	} catch {
		return null;
	}
	const parts = path
		.split('/')
		.filter(Boolean)
		.filter((p, i, a) => !(i === a.length - 1 && /^(index|README)\.md$/.test(p)));
	if (parts.length === 0 || parts.length > 2) return null;
	const section = sectionsOf(slug).find((s) => s.dir === parts[0]);
	if (!section) return null;
	if (parts.length === 1) return section.hasIndex ? `/${slug}/${section.dir}/${fragment && '#' + fragment}` : null;
	if (!section.pages.some((p) => p.dir === parts[1])) return null;
	return `/${slug}/${section.dir}/${parts[1]}/${fragment && '#' + fragment}`;
}

/**
 * Render markdown to HTML with stable heading ids and site-resolved links.
 * @param {string} markdown @param {string} slug @param {string} base
 */
function render(markdown, slug, base) {
	const marked = new Marked({ gfm: true });
	const seen = new Map();
	marked.use({
		renderer: {
			heading({ tokens, depth }) {
				const inner = this.parser.parseInline(tokens);
				let id = slugify(inner);
				const n = seen.get(id);
				seen.set(id, (n ?? -1) + 1);
				if (n !== undefined) id = `${id}-${n + 1}`;
				// Some tables of contents write "a + b" as "a-b" and "x.io" as "x-io";
				// keep those forms linkable too.
				const forms = new Set([id.replace(/-{2,}/g, '-'), slugify(inner.replace(/[./]/g, ' ')).replace(/-{2,}/g, '-')]);
				forms.delete(id);
				const alias = [...forms].map((f) => `<span id="${f}"></span>`).join('');
				return `${alias}<h${depth} id="${id}">${inner}</h${depth}>\n`;
			}
		},
		walkTokens(token) {
			if (token.type !== 'link' || /^([a-z][a-z0-9+.-]*:|\/\/|#)/i.test(token.href)) return;
			const resolved = resolveLink(slug, base, token.href);
			if (resolved) token.href = resolved;
		}
	});
	return marked.parse(markdown, { async: false });
}

/**
 * Load one page (`dir` omitted for a section index).
 * @param {string} slug @param {string} sectionDir @param {string} [dir]
 */
export async function loadLocalePage(slug, sectionDir, dir) {
	const key = `/src/content/locales/${slug}/${sectionDir}/${dir ?? 'index'}.md`;
	const load = files[key];
	if (!load) return null;
	const markdown = await load();
	const base = dir ? `${sectionDir}/${dir}/` : `${sectionDir}/`;
	return render(markdown, slug, base);
}

/** Plain text of Markdown inline syntax. @param {string} s */
function plain(s) {
	return s
		.replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
		.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
		.replace(/<[^>]+>/g, '')
		.replace(/[*_`]+/g, '')
		.replace(/\s+/g, ' ')
		.trim();
}

/** @param {string} s @param {number} max characters (code points), cut at a word break when there is one */
function clip(s, max) {
	const chars = Array.from(s);
	if (chars.length <= max) return s;
	const cut = chars.slice(0, max).join('');
	const space = cut.lastIndexOf(' ');
	return (space > max * 0.6 ? cut.slice(0, space) : cut).replace(/[\s,.;:、，。]+$/, '') + '…';
}

/**
 * The first prose paragraph of a page (skipping headings, lists, tables, HTML,
 * code, and contents lists), as plain text clipped to `max` characters. A page
 * with no prose paragraph yields its first list item instead.
 * @param {string} markdown @param {number} [max]
 */
export function firstParagraph(markdown, max = 170) {
	let fence = false;
	let firstItem = '';
	/** @type {string[]} */
	let para = [];
	const done = () => {
		const text = plain(para.join(' '));
		para = [];
		return text.length >= 20 && !/[:：]$/.test(text) ? clip(text, max) : '';
	};
	for (const raw of markdown.split('\n')) {
		const line = raw.trim();
		if (line.startsWith('```')) {
			fence = !fence;
			continue;
		}
		if (fence) continue;
		if (!line) {
			const text = done();
			if (text) return text;
			continue;
		}
		if (/^(#|[-*+]\s|\d+[.)]\s|\||<|>|!\[|---)/.test(line)) {
			para = [];
			const item = /^([-*+]|\d+[.)])\s+(.*)$/.exec(line);
			if (item && !firstItem) {
				const text = plain(item[2]);
				if (text.length >= 20) firstItem = clip(text, max);
			}
			continue;
		}
		para.push(line);
	}
	return done() || firstItem;
}

/** @type {Record<string, Record<string, string>>} */
const peerIds = (await import('#lib/locale-peers.json')).default;

/** The page of `slug` that is the translation of the en-001 page `enKey` ("<section>/<dir>"). @param {string} slug @param {string} enKey */
function peerKey(slug, enKey) {
	const id = peerIds['en-001']?.[enKey];
	return id ? Object.entries(peerIds[slug] ?? {}).find(([, v]) => v === id)?.[0] : undefined;
}

/** English (en-001) pages shown as cards on every locale landing page, in order. */
const CARD_PAGES = [
	'documents/how-to-start-using-adrs',
	'documents/how-to-start-using-adrs-with-git',
	'documents/suggestions-for-writing-good-adrs',
	'documents/file-name-conventions-for-adrs'
];
const HERO_PAGE = 'documents/what-is-an-architecture-decision-record';

/** @param {string} slug @param {string} key "<section>/<dir>" in that locale */
async function pageInfo(slug, key) {
	const [sectionDir, dir] = key.split('/');
	const page = sectionsOf(slug).find((s) => s.dir === sectionDir)?.pages.find((p) => p.dir === dir);
	if (!page) return null;
	const load = files[`/src/content/locales/${slug}/${sectionDir}/${dir}.md`];
	const markdown = load ? await load() : '';
	// Some pages open with "##" rather than "#", and the index then falls back to the directory name.
	const heading = /^#{1,6}\s+(.+?)\s*#*\s*$/m.exec(markdown)?.[1];
	return { title: heading ? plain(heading) : page.title, text: firstParagraph(markdown), href: `/${slug}/${sectionDir}/${dir}/` };
}

/**
 * The hero and six cards at the top of a locale landing page: the locale's own
 * translated titles and first paragraphs, so nothing here needs translating
 * separately. The hero is the "What is an architecture decision record?" page;
 * the cards are four guide documents plus the Templates and Examples sections.
 * @param {string} slug
 */
export async function landingOf(slug) {
	const heroKey = peerKey(slug, HERO_PAGE);
	const hero = heroKey ? await pageInfo(slug, heroKey) : null;
	/** @type {{title: string, text: string, href: string}[]} */
	const cards = [];
	for (const enKey of CARD_PAGES) {
		const key = peerKey(slug, enKey);
		const info = key && (await pageInfo(slug, key));
		if (info) cards.push(info);
	}
	for (const kind of ['templates', 'examples']) {
		const section = sectionsOf(slug).find((s) => s.kind === kind);
		if (!section?.hasIndex) continue;
		// The section's own index lists its pages as links; show the count and the first names.
		const load = files[`/src/content/locales/${slug}/${section.dir}/index.md`];
		const names = load ? [...(await load()).matchAll(/^\s*[*-]\s+\[([^\]]+)\]\(/gm)].map((m) => plain(m[1])) : [];
		const shown = (names.length ? names : section.pages.map((p) => p.title)).slice(0, 3);
		cards.push({
			title: section.title,
			text: `${section.pages.length} · ${shown.join(' · ')} …`,
			href: `/${slug}/${section.dir}/`
		});
	}
	return { hero, cards };
}
