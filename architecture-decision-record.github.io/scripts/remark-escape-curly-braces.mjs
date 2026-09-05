// Some ADR templates use literal "{Placeholder text}" as fill-in-the-blank
// markup (e.g. the GIG Cymru NHS Wales template), which is perfectly valid
// Markdown prose. But mdsvex compiles each file into a Svelte component, and
// Svelte's template syntax treats any bare "{"/"}" as the start of an
// expression, which throws a hard parse error outside of code spans/blocks
// (those are already escaped correctly by mdsvex itself, and are left
// untouched here by only walking 'text' nodes, not 'code'/'inlineCode').
export function remarkEscapeCurlyBraces() {
	return (tree) => {
		walk(tree);
	};
}

function walk(node) {
	if (node.type === 'text' && typeof node.value === 'string' && /[{}]/.test(node.value)) {
		node.value = node.value.replace(/\{/g, '&lbrace;').replace(/\}/g, '&rbrace;');
	}
	if (Array.isArray(node.children)) {
		for (const child of node.children) walk(child);
	}
}
