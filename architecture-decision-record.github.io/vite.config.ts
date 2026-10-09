import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			adapter: adapter({
				pages: 'build',
				assets: 'build',
				fallback: '404.html',
				strict: true
			}),

			prerender: {
				// Some ported ADR template content contains illustrative, non-navigable
				// example links (the MADR template's own "[ADR-0005](0005-example.md)"
				// sample) that the crawler still visits: warn on those instead of
				// failing the whole build.
				handleHttpError: 'warn',

				// Hand-written in-page anchors in translated pages do not always match
				// their heading's slug exactly: warn rather than fail the build.
				handleMissingId: 'warn'
			}
		})
	]
});
