# Decision record templet wey Jeff Tyree and Art Akerman mek

Dis na di architecture decision description templet wey dem publish for ["Architecture Decisions: Demystifying Architecture" by Jeff Tyree and Art Akerman, Capital One Financial](https://www.utdallas.edu/~chung/SA/zz-Impreso-architecture_decisions-tyree-05.pdf).

* **Issue**: Describe di architectural design issue wey you dey address, so no question go remain about why you dey address dis issue now. Follow minimalist approach, address and document only di issues wey need addressing at different points for di life cycle.

* **Decision**: State clear di direction of di architecture—dat na, di position wey you select.

* **Status**: Di status of di decision, like pending, decided, or approved.

* **Group**: You fit use simple grouping—like integration, presentation, data, and so on—to help organize di set of decisions. You fit also use more sophisticated architecture ontology, like John Kyaruzi and Jan van Katwijk own, wey include more abstract categories like event, calendar, and location. For example, if you use dis ontology, you go group decisions wey deal with occurrences where di system need information under event.

* **Assumptions**: Describe clear di underlying assumptions for di environment where you dey make di decision—cost, schedule, technology, and so on. Note say environmental constraints (like accepted technology standards, enterprise architecture, commonly employed patterns, and so on) fit limit di alternatives wey you consider.

* **Constraints**: Capture any additional constraints to di environment wey di chosen alternative (di decision) fit pose.

* **Positions**: List di positions (viable options or alternatives) wey you consider. Dem often need long explanations, sometimes even models and diagrams. Dis no be exhaustive list. But you no go want hear di question "Did you think about...?" during final review; dis one dey cause loss of credibility and questioning of other architectural decisions. Dis section also dey help make sure say you hear other people opinions; if you state other opinions explicit, e dey help enroll their advocates for your decision.

* **Argument**: Outline why you select one position, including items like implementation cost, total ownership cost, time to market, and availability of required development resources. Dis one probably important as di decision itself.

* **Implications**: Decision dey come with many implications, as di REMAP metamodel denote. For example, decision fit introduce need to make other decisions, create new requirements, or modify existing requirements; pose additional constraints to di environment; require renegotiating scope or schedule with customers; or require additional staff training. If you understand and state clear di implications of your decision, e fit very effective to gain buy-in and to create roadmap for architecture execution.

* **Related decisions**: E obvious say many decisions dey related; you fit list dem here. But we don find say for practice, traceability matrix, decision trees, or metamodels dey more useful. Metamodels dey useful to show complex relationships diagrammatically (like Rose models).

* **Related requirements**: Decisions suppose dey business driven. To show accountability, map your decisions explicit to di objectives or requirements. You fit enumerate dis related requirements here, but we don find say e more convenient to reference traceability matrix. You fit assess how each architecture decision contribute to meeting each requirement, and then assess how well dem meet di requirement across all decisions. If decision no contribute to meeting requirement, no make dat decision.

* **Related artifacts**: List di related architecture, design, or scope documents wey dis decision impact.

* **Related principles**: If di enterprise get agreed-upon set of principles, make sure say di decision consistent with one or more of dem. Dis one dey help ensure alignment across domains or systems.

* **Notes**: Because di decision-making process fit take weeks, we don find say e useful to capture notes and issues wey di team discuss during di socialization process.
