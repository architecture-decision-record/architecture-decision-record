# Add an ADR template

Content rules: [spec/content.md](../spec/content.md).

1. Create `locales/en-001/templates/decision-record-template-<slug>/index.md`
   (plus `LICENSE.md` if the source template has one). Title it
   `# Decision record template <by|for|using> <name>`, credit the source with
   a link, then give narrative field descriptions or a literal copy of the
   template's headings.
2. Add `README.md` as a symlink to `index.md` (`ln -s index.md README.md`).
3. Link it from `locales/en-001/templates/index.md` and `README.md` (kept
   identical).
4. Add it to the root `README.md` in the `Templates:` list and in
   `## ADR example templates`, with a short parenthetical.
5. Update the template count (now 11) in `spec/repository.md`,
   `spec/content.md`, `AGENTS.md` and run `pnpm run content` in the site (regenerates `llms.txt`/`llms.json`).
6. Existing translations do not include it until translated; note this in the
   commit message.
