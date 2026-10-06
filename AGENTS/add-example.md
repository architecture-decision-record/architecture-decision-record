# Add an ADR example

Content rules: [spec/content.md](../spec/content.md).

1. Create `locales/en-001/examples/<slug>/index.md` with the worked example,
   and an identical `README.md`.
2. Link it from `locales/en-001/examples/index.md` and `README.md` in the
   right group (general, ChatGPT, language, database, orchestration, web).
3. Optionally add it to the curated `Examples:` list in the root `README.md`.
4. Update the example count (now 40) in `spec/repository.md`,
   `spec/content.md`, `AGENTS.md` and run `pnpm run content` in the site (regenerates `llms.txt`/`llms.json`).
