# Architecture Decision Record: snake_case v. camelCase fo REST API?

Decision: Dem go use snake_case naming convention for REST API endpoints

Status: Accepted

## Context

For naming conventions for REST APIs, two popular formats dey: snake_case and camelCase. For snake_case format, underscores dey separate each word for di name, while for camelCase, di first word of di name dey lower case, and di subsequent words get capital letter for their first letter. Dis decision go determine which naming convention suppose dem use for REST API.

## Decision Drivers

- Consistency with existing naming conventions for di project

- Readability and clarity for anybody wey fit dey work on di API

- Alignment with industry best practices for REST API naming conventions

- Ease of implementation and maintenance

## Decision

Dem go use snake_case naming convention for REST API endpoints. Na dis factors drive dis choice:

1. **Consistency**: Di project already dey use snake_case naming convention for all endpoints, and e go beneficial to maintain dis convention so e go ensure consistency across di whole project.

2. **Readability and clarity**: Di snake_case convention more readable and easier to understand. Di underscores provide clear separation between words, wey make am easier to parse and understand di meaning of di name.

3. **Alignment with industry best practices**: Dem widely use snake_case convention for di industry and dem consider am as best practice for REST APIs, wey make am good choice for di project.

4. **Ease of implementation and maintenance**: To keep di existing naming convention easier to implement and maintain because dem go need to update all existing code and documentation if dem choose new convention.

## Consequences

Potential consequences dey for dis decision.

* If any new team members wey join di project no familiar with snake_case naming convention, e fit lead to confusion and mistakes for development. But since dem widely use snake_case convention, such risk minimal.
  
* If dem use other tools or frameworks for di project wey heavily base on camelCase convention, e fit require extra effort to convert between naming conventions. But e no be significant concern since di project don standardize on snake_case convention.
 
Overall, di decision to use snake_case naming convention for REST API endpoints result for consistent, readable, and industry-standard approach while e still easy to implement and maintain.

<h6>Credit: ChatGPT generate dis page, then dem edit am for clarity and format.</h6>
