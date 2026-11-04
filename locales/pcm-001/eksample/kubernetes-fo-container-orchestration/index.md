# Architecture Decision Record: Kubernetes container orchestration

## Problem Statement

We need to select container orchestration platform for our growing cloud-native application portfolio. Our current legacy platform deployment too slow, and e no agile enough to follow our growing needs. We dey look for system wey go allow us scale our services for di most efficient way possible without to compromise on agility or ease of use.

## Considered Alternatives

1. Docker Swarm

2. Kubernetes

3. Apache Mesos

## Decision Made

After we do thorough analysis of each container orchestration platform, we don decide to adopt Kubernetes as di best option for our enterprise needs. Na dis be our reasons for to choose Kubernetes:

1. **Scalability:**  Kubernetes unique design perfect to scale applications, and as our requirements for scalability dey evolve as time dey go, Kubernetes get built-in ability to meet dis changes without any wahala.

2. **Decentralized Architecture:**  Kubernetes master-worker topology ensure decentralized architecture wey ensure say no single point of failure dey.

3. **Community Support:**  Kubernetes get di largest and most active open-source community, wey mean say plenty contributors, developers, and vendors dey, wey make am easier for us to get help and find resources.

4. **Ecosystem Support:**  Kubernetes get growing ecosystem with variety of third-party tools, integrations with container registries, CI/CD pipelines, data storage, and more.

So, we don decide to adopt Kubernetes as our container orchestration platform for now and for di immediate future.

<h6>Credit: ChatGPT generate dis page, then dem edit am for clarity and format.</h6>
