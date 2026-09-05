import { error } from '@sveltejs/kit';
import manifest from '$lib/manifest.json';

export const prerender = true;

export function entries() {
	return manifest.guide.map((g) => ({ slug: g.slug }));
}

export async function load({ params }) {
	const section = manifest.guide.find((g) => g.slug === params.slug);
	if (!section) error(404, 'Guide section not found');

	const index = manifest.guide.findIndex((g) => g.slug === params.slug);
	const prev = index > 0 ? manifest.guide[index - 1] : null;
	const next = index < manifest.guide.length - 1 ? manifest.guide[index + 1] : null;

	// A universal load function may return non-serializable values (like a
	// Svelte component constructor) because it re-runs in the browser on
	// client-side navigation rather than being passed across the network.
	const mod = await import(`../../../content/guide/${params.slug}.md`);

	return { section, prev, next, content: mod.default };
}
