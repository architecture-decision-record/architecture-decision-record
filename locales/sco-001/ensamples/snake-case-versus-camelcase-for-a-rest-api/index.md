# Architectur Decisioun Record: snake_case v. camelCase for a REST API?

Decision: snake_case namin convention will be uised for REST API endpynts

Status: Accepted

## Context

In namin conventiouns for REST APIs, there are twa popular formats: snake_case an camelCase. The snake_case format is whaur each wird in the name is separatit bi underscores, whereas camelCase is whaur the first wird o the name is in lower case, an the subsequent wirds hae their first letter capitalised. This decisioun will determine which namin convention sud be uised for a REST API.

## Decisioun Drivers

- Consistency wi existin namin conventiouns in the project

- Readability an clarity for onieane wha micht be warkin on the API

- Alignment wi industry best practices for REST API namin conventiouns

- Ease o implementation an maintenance

## Decision

The snake_case namin convention will be uised for REST API endpynts. This chyce is driven bi the follaein factors:

1. **Consistency**: The project awready uises snake_case namin convention for aw endpynts, an it wud be beneficial tae keep this convention tae ensure consistency athort the haill project.

2. **Readability an clarity**: The snake_case convention is mair readable an easier tae unnerstaun. The underscores provide a clear separation atween wirds, makin it easier tae parse an unnerstaun the meanin o the name.

3. **Alignment wi industry best practices**: The snake_case convention is widely uised in the industry an is considerit tae be a best practice for REST APIs, makin it a guid chyce for the project.

4. **Ease o implementation an maintenance**: Keepin wi the existin namin convention is easier tae implement an keep up as aw existin code an documentation wud need tae be updatit if a new convention wis chosen.

## Consequences

There are potential consequences o this decisioun. 

* If onie new team members joinin the project are unfamiliar wi snake_case namin convention, it could lead tae confusion an mistaks in develapment. But, sin snake_case is a widely-uised convention, sic a risk is minimal. 
  
* If ither tuils or frameworks are uised in the project that are heavily based on camelCase convention, it micht require extra effort tae convert atween namin conventiouns. But, it isna a significant concern sin the project haes staundartised on the snake_case convention. 
 
Owerall, the decisioun tae uise snake_case namin convention for REST API endpynts results in a consistent, readable, an industry-staundart approach while bein easy tae implement an keep up.

<h6>Credit: this page wis generatit bi ChatGPT, than eeditit for clarity an format.</h6>
