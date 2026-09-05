import { error } from '@sveltejs/kit';
import manifest from '$lib/manifest.json';

export const prerender = true;

export function entries() {
	return manifest.templates.map((t) => ({ slug: t.slug }));
}

export async function load({ params }) {
	const template = manifest.templates.find((t) => t.slug === params.slug);
	if (!template) error(404, 'Template not found');

	const mod = await import(`../../../content/templates/${params.slug}.md`);

	return { template, content: mod.default };
}
