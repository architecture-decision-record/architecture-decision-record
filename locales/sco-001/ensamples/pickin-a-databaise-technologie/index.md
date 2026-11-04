# Architectur Decisioun Record: Pickin a Databaise Technologie

## Status

Accepted

## Context

We are designin a new application that requires storin an retrievin data in a scalable an performant manner. We hae identifiet three types o databaise technologies that are commonly uised: relational databaises, document databaises, an event databaises.

Relational databaises store data in tables wi fixed schemas an enforce strict data integrity constraints. They are suitable for applications that require complex data relationships an transactiouns. Examples include MySQL, PostgreSQL, an Oracle.

Document databaises store data in JSON-like documents an are schema-less. They are weel-suitit for applications that require flexible data models an scalin horizontally. Examples include MongoDB, Couchbase, an Amazon DynamoDB.

Event databaises store data as a series o events, capturin ilka chynge tae the data. They are suitable for applications that require auditin, event sourcin, an complex data processin. Examples include Apache Kafka, Apache Pulsar, an AWS Kinesis.
Decisioun

Efter carefu evaluatin the requirements an constraints o oor application, we hae decidit tae uise a document databaise.

## Rationale

We hae chosen a document databaise acause:

1. Oor application requires a flexible data model that can evolve ower time. Document databaises let us store data in a schema-less format, which means we can add new fields or chynge the structur o existin documents athoot haein tae modify the databaise schema.

2. Oor application needs tae scale horizontally tae haunle lairge volumes o data an traffic. Document databaises provide biggit-in support for shardin an replication, which lets us distribute data athort multiple servers an haunle heich read an write throughput.

3. Oor application requires fast an efficient data retrieval. Document databaises provide pouerfu indexin an queryin capabilities that let us retrieve data quickly an efficiently.

4. Oor application daesna require complex transactiouns or data relationships. While relational databaises excel at enforcin data integrity constraints an haunlin complex transactiouns, oor application daesna hae sic requirements. Document databaises can provide sufficient consistency an durability guarantees for oor uise case.

## Consequences

Bi chuisin a document databaise, we will need tae invest in lairnin an unnerstaunin the specific technology we chuise tae uise. Additionally, we will need tae ensure that oor application's data model fits weel wi the document databaise's data model tae maximise performance an scalability.

But, we believe that the benefits o uisin a document databaise outweigh the costs, an that it is the best fit for oor application's requirements an constraints.
