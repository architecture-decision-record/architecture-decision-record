// Client-side search over one locale's index (static/search/<slug>.json).
// See spec/locale-specific-search-picker/index.md.
import { slugToTag } from './locales.js';

/** @param {string} s */
const normalize = (s) => s.normalize('NFKC').toLocaleLowerCase();

/**
 * Word tokens of `text` for a locale slug; works for languages without spaces.
 * @param {string} text
 * @param {string} slug
 * @returns {string[]}
 */
export function tokenize(text, slug) {
	const norm = normalize(text);
	if (typeof Intl !== 'undefined' && Intl.Segmenter) {
		let segmenter;
		try {
			segmenter = new Intl.Segmenter(slugToTag(slug), { granularity: 'word' });
		} catch {
			segmenter = new Intl.Segmenter('en', { granularity: 'word' });
		}
		return [...segmenter.segment(norm)].filter((s) => s.isWordLike).map((s) => s.segment);
	}
	return norm.split(/[^\p{L}\p{M}\p{N}]+/u).filter(Boolean);
}

/** Decode the part of location.search after "?"; never throws. @param {string} search */
export function queryFromSearch(search) {
	const raw = search.startsWith('?') ? search.slice(1) : search;
	try {
		return decodeURIComponent(raw).trim();
	} catch {
		return raw.trim();
	}
}

/** @param {string} queryToken @param {string[]} tokens */
function tokenMatches(queryToken, tokens) {
	// Substring matches only for tokens of 3+ characters; shorter ones must be prefixes.
	return tokens.some((t) => t.startsWith(queryToken) || (queryToken.length >= 3 && t.includes(queryToken)));
}

/** @type {Record<string, number>} */
const SECTION_ORDER = { documents: 0, templates: 1, examples: 2 };

/**
 * @param {{records: any[]}} index one locale's index
 * @param {string} query
 * @param {string} slug locale slug (tokenizer language)
 */
export function search(index, query, slug) {
	const queryTokens = tokenize(query, slug);
	if (queryTokens.length === 0) return [];
	const results = [];
	for (const record of index.records) {
		const title = tokenize(record.title, slug);
		const headings = tokenize(record.headings.join(' '), slug);
		const body = tokenize(record.text, slug);
		let score = 0;
		let all = true;
		for (const q of queryTokens) {
			if (tokenMatches(q, title)) score += 100;
			else if (tokenMatches(q, headings)) score += 10;
			else if (tokenMatches(q, body)) score += 1;
			else {
				all = false;
				break;
			}
		}
		if (all) results.push({ record, score });
	}
	results.sort(
		(a, b) =>
			b.score - a.score ||
			(SECTION_ORDER[a.record.kind] ?? 9) - (SECTION_ORDER[b.record.kind] ?? 9) ||
			a.record.title.localeCompare(b.record.title, slugToTag(slug))
	);
	return results.map((r) => ({ ...r.record, score: r.score, snippet: snippet(r.record.text, queryTokens, slug) }));
}

/**
 * Text around the first body occurrence of any query token.
 * @param {string} text
 * @param {string[]} queryTokens
 * @param {string} slug
 * @param {number} [width]
 */
export function snippet(text, queryTokens, slug, width = 160) {
	const lower = normalize(text);
	let at = -1;
	for (const q of queryTokens) {
		const i = lower.indexOf(q);
		if (i !== -1 && (at === -1 || i < at)) at = i;
	}
	if (at === -1) return text.slice(0, width);
	const start = Math.max(0, at - Math.floor(width / 3));
	const end = Math.min(text.length, start + width);
	return `${start > 0 ? '…' : ''}${text.slice(start, end)}${end < text.length ? '…' : ''}`;
}
