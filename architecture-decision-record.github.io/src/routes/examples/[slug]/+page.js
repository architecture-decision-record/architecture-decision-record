import { error } from '@sveltejs/kit';
import manifest from '$lib/manifest.json';

export const prerender = true;

export function entries() {
	return manifest.examples.map((e) => ({ slug: e.slug }));
}

export async function load({ params }) {
	const example = manifest.examples.find((e) => e.slug === params.slug);
	if (!example) error(404, 'Example not found');

	const mod = await import(`../../../content/examples/${params.slug}.md`);

	return { example, content: mod.default };
}
