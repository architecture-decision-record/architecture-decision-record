// mdsvex compiles each src/content/**/*.md file into a Svelte component
// module. Declare the shape so TypeScript accepts the dynamic imports in the
// [slug]/+page.js load functions.
declare module '*.md' {
	import type { Component } from 'svelte';
	const component: Component;
	export default component;
}
