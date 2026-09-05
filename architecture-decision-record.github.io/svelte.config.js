import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { fileURLToPath } from 'node:url';
import rehypeSlug from 'rehype-slug';
import { remarkEscapeCurlyBraces } from './scripts/remark-escape-curly-braces.mjs';
import { remarkEscapeStrayLt } from './scripts/remark-escape-stray-lt.mjs';
import { remarkResolveContentLinks } from './scripts/remark-resolve-content-links.mjs';

// mdsvex resolves a relative `layout` path against each Markdown file's own
// directory, not the project root — since src/content/ has several
// directories (guide, templates, examples), use an absolute path instead.
const mdLayoutPath = fileURLToPath(new URL('./src/lib/components/MdLayout.svelte', import.meta.url));

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
  extensions: ['.md'],
  remarkPlugins: [remarkResolveContentLinks, remarkEscapeStrayLt, remarkEscapeCurlyBraces],
  // Gives every heading an id, matching GitHub's own anchor convention
  // closely enough that the content's in-page TOC links (e.g. "[Summary](#summary)"
  // in several examples) resolve to a real element instead of just being
  // suppressed by handleMissingId below.
  rehypePlugins: [rehypeSlug],
  layout: {
    _: mdLayoutPath
  }
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
      strict: true
    }),
    prerender: {
      // Real internal navigation links resolve via remark-resolve-content-links.mjs.
      // Some ported ADR template content also contains illustrative,
      // non-navigable example links (e.g. the MADR template's own
      // "[ADR-0005](0005-example.md)" sample) that the crawler still visits
      // — warn on those instead of failing the whole build.
      handleHttpError: 'warn',
      // rehype-slug (above) covers most in-page TOC anchors in the ported
      // content, but a hand-written anchor's text doesn't always match its
      // heading's slug exactly — warn rather than fail the build over it.
      handleMissingId: 'warn'
    }
  }
};

export default config;
