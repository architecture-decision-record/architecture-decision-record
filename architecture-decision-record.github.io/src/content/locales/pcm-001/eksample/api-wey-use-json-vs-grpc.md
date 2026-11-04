# Architecture Decision Record: API wey use JSON vs. gRPC

## Status

Accepted

## Context

We dey design API for new service wey multiple clients go use. We don dey consider two options to implement di API: to use JSON over HTTP or to use gRPC.

JSON over HTTP na widely-used approach to build APIs, and plenty programming languages and frameworks support am. Dis approach simple, lightweight, and easy to understand, so e be good choice for many projects. But e fit less efficient pass other options, especially wen e come to handle large amounts of data.

gRPC, for di other hand, na newer technology wey offer more efficient way to build APIs. E dey use binary serialization to transfer data, wey fit faster and more compact than to use JSON. gRPC also support bidirectional streaming, so e be good choice for real-time applications.

## Decision

After we consider di pros and cons of both options, we don decide to use gRPC for our API. Even though JSON over HTTP na simpler option, we believe say gRPC go give more efficient and scalable solution for our service. We also expect say our API go handle large amount of data, and gRPC binary serialization go more efficient for dis use case.

Plus, we believe say gRPC support for bidirectional streaming go benefit real-time applications wey we fit develop for future.

## Consequences

If we choose gRPC, we go need to use different set of tools and libraries to build our API compared to JSON over HTTP. Dis one fit require additional time and effort to learn and implement dis technologies. Also, clients wey want use our API go need to use gRPC-compatible libraries, wey fit no get as much support as JSON over HTTP libraries.

But we believe say di benefits of to use gRPC pass dis potential drawbacks, and we confident say dis decision go result for more efficient and scalable API.
