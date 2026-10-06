# Content

Source of truth for content is `locales/en-001`. Every other locale is a
translation of it, never the reverse.

## Documents (12)

aws-adr-process, decision-sustainability-criteria,
file-name-conventions-for-adrs, fitness-functions-for-decisions-as-code,
guidelines-to-achieve-sustainable-decisions, how-to-start-using-adrs,
how-to-start-using-adrs-with-git, how-to-start-using-adrs-with-tools,
suggestions-for-writing-good-adrs, teamwork-advice-for-adrs,
teamwork-questions-for-adrs, what-is-an-architecture-decision-record.

## Templates (11)

`decision-record-template-` followed by: by-arc42, by-edgex,
by-gareth-morgan, by-gig-cymru-nhs-wales, by-jeff-tyree-and-art-akerman,
by-michael-nygard, for-alexandrian-pattern, for-business-case,
for-important-technical-decisions, of-the-madr-project, using-planguage.

arc42 and GIG Cymru are directories that contain further files; their links
in the templates index end with `/`.

## Examples (40)

The set is whatever directories exist under `locales/en-001/examples/`
(excluding `index.md` and `README.md`). The examples index groups them as:
general list, ChatGPT examples, specific languages, databases, container
orchestration, and web frameworks/libraries/styles. Adding or removing an
example requires updating the English index, every translated index, the
count in this spec, and `static/llms.txt` in the website.

## Writing rules

- Product, tool, and company names stay in Latin script in every locale
  (e.g. Kubernetes, PostgreSQL, Tailwind CSS).
- Code blocks, URLs, and file names inside code are not translated.
- Heading text is translated; the table of contents in a document must link
  to the slugs of its own translated headings.
- ChatGPT attribution footers on generated examples are translated.
- Do not invent facts, versions, or links absent from the English source.
