// Some content uses a literal "<" as a mathematical/informal symbol (e.g.
// "<3 Prometheus"). CommonMark's inline-HTML grammar correctly leaves these
// as plain text (a "<" not immediately followed by a letter, "/", "!", or
// "?" is not a tag start), so remark keeps them in ordinary text nodes. But
// mdsvex hands its HTML output to the Svelte compiler, whose template
// parser is stricter and treats any bare "<" as the start of a tag/component,
// which throws a hard parse error. Escape stray "<" in text nodes to "&lt;"
// so it survives the trip; real markup (headings, bold, inline HTML) lives
// in other mdast node types and is untouched.
export function remarkEscapeStrayLt() {
	return (tree) => {
		walk(tree);
	};
}

function walk(node) {
	if (node.type === 'text' && typeof node.value === 'string' && node.value.includes('<')) {
		node.value = node.value.replace(/</g, '&lt;');
	}
	if (Array.isArray(node.children)) {
		for (const child of node.children) walk(child);
	}
}
