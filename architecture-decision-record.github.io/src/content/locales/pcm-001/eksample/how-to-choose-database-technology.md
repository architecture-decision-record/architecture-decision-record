# Architecture Decision Record: How to Choose Database Technology

## Status

Accepted

## Context

We dey design new application wey need to store and retrieve data in scalable and performant way. We don identify three types of database technologies wey people commonly use: relational databases, document databases, and event databases.

Relational databases dey store data for tables with fixed schemas and dem enforce strict data integrity constraints. Dem suit applications wey need complex data relationships and transactions. Examples include MySQL, PostgreSQL, and Oracle.

Document databases dey store data for JSON-like documents and dem be schema-less. Dem suit applications wey need flexible data models and to scale horizontally. Examples include MongoDB, Couchbase, and Amazon DynamoDB.

Event databases dey store data as series of events, wey capture every change to di data. Dem suit applications wey need auditing, event sourcing, and complex data processing. Examples include Apache Kafka, Apache Pulsar, and AWS Kinesis.
Decision

After we carefully evaluate di requirements and constraints of our application, we don decide to use document database.

## Rationale

We choose document database because:

1. Our application need flexible data model wey fit evolve as time dey go. Document databases allow us to store data for schema-less format, wey mean say we fit add new fields or change di structure of documents wey dey already without to modify di database schema.

2. Our application need to scale horizontally to handle large volumes of data and traffic. Document databases provide built-in support for sharding and replication, wey enable us to distribute data across multiple servers and handle high read and write throughput.

3. Our application need fast and efficient data retrieval. Document databases provide powerful indexing and querying capabilities wey enable us to retrieve data quick and efficiently.

4. Our application no need complex transactions or data relationships. Even though relational databases excel to enforce data integrity constraints and to handle complex transactions, our application no get such requirements. Document databases fit provide sufficient consistency and durability guarantees for our use case.

## Consequences

If we choose document database, we go need to invest for learning and understanding di specific technology wey we choose to use. Also, we go need to make sure say our application data model fit well with di data model of di document database to maximize performance and scalability.

But we believe say di benefits of to use document database pass di costs, and say na di best fit for our application requirements and constraints.
