// The guide content (copied out of the parent repo's README.md — see
// sync-content.mjs) links to templates and examples with relative paths
// like "locales/en/templates/decision-record-template-by-michael-nygard/",
// which only resolve inside the source repo. Rewrite those into this site's
// own routes. A relative link into "skills/" (the Claude Code skills, which
// this site doesn't mirror as pages) instead goes to the source repo on
// GitHub. Leave external links, mailto:, anchors, and already-absolute
// paths untouched.
import { visit } from 'unist-util-visit';

const SECTION_ROUTES = { templates: 'templates', examples: 'examples' };
const REPO_URL = 'https://github.com/architecture-decision-record/architecture-decision-record';

export function remarkResolveContentLinks() {
  return (tree) => {
    visit(tree, 'link', (node) => {
      const url = node.url;
      if (!url || /^([a-z]+:)?\/\//i.test(url) || url.startsWith('#') || url.startsWith('mailto:')) return;

      const match = /^locales\/en\/(templates|examples)\/([a-z0-9-]+)\/?$/.exec(url);
      if (match) {
        const [, section, slug] = match;
        node.url = `/${SECTION_ROUTES[section]}/${slug}/`;
        return;
      }

      const bare = /^locales\/en\/(templates|examples)\/?$/.exec(url);
      if (bare) {
        node.url = `/${SECTION_ROUTES[bare[1]]}/`;
        return;
      }

      const skill = /^skills\/([a-z0-9-]+)\/?$/.exec(url);
      if (skill) {
        node.url = `${REPO_URL}/tree/main/skills/${skill[1]}/`;
        return;
      }

      if (url === 'skills/' || url === 'skills') {
        node.url = `${REPO_URL}/tree/main/skills`;
      }
    });
  };
}
