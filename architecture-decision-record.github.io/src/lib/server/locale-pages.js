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
