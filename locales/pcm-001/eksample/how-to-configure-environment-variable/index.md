# Configuration fo environment variable

Wetin Dey Inside:

* [Summary](#summary)
  * [Issue](#issue)
  * [Decision](#decision)
  * [Status](#status)
* [Details](#details)
  * [Wetin We Assume](#wetin-we-assume)
  * [Wetin Dey Limit Us](#wetin-dey-limit-us)
  * [Positions](#positions)
  * [Argument](#argument)
  * [Wetin E Mean](#wetin-e-mean)
* [Wetin Join](#wetin-join)
  * [Decision Dem Wey Join](#decision-dem-wey-join)
  * [Requirement Dem Wey Join](#requirement-dem-wey-join)
  * [Artifact Dem Wey Join](#artifact-dem-wey-join)
  * [Principle Dem Wey Join](#principle-dem-wey-join)
* [Notes](#notes)


## Summary


### Issue

We want make our applications fit configure beyond artifacts/binaries/source, so one build fit behave different depending on di deployment environment wey e dey.

  * To do dis, we want use environment variable configuration.

  * We want manage di configuration with files wey we fit version control.

  * We want provide some developer experience ergonomics, like to know wetin fit configure and any relevant defaults.


### Decision

We decide on .env files with related default file and schema file.


### Status

Decided. We open to consider new capabilities as dem come up.


## Details


### Wetin We Assume

We favor to separate di application code and environment code. We assume say di app need to work different for different environments, like development environment, test environment, demo environment, production environment, etc.

We favor di industry practice of "12 factor app" and even more di related practice of "15 factor app".

Many of our previous projects don use di convention of `.env` file or similar `.env` directory. Typical practice dey to keep dem out of version control, and instead use some other way to deploy dem, version dem, and manage dem.


### Wetin Dey Limit Us

We want keep secrets out of our source code management (SCM) version control system (VCS).

We want aim for compatibility with popular software frameworks and libraries. For example, Node get module "dotenv" to read environment variable configuration.


### Positions

We consider few approaches:

  * Store config inside di app like for file `config.js` file.

  * Store config inside di environment like for file `.env`.

  * Fetch config from known location like license server.


### Argument

We select di approach of file .env because:

  * E popular including among experts.

  * E follow di pattern of `.env` files wey our teams don use successfully many times for many projects.

  * E simple. Notably, we dey fine for now with di significant trade-offs wey we see, like lack of audit capabilities compared to approach of license server.


### Wetin E Mean

We need to figure out way to separate environment variable configuration wey public from any secrets management.


## Wetin Join


### Decision Dem Wey Join

We expect all our applications to use dis approach.

We go plan to upgrade any of our applications wey use less-capable approach, like hardcoding for binary or for source code.

We go keep as-is any of our applications wey use more-capable approach, like licensing server.


### Requirement Dem Wey Join

We go add devops capabilities for di files, including hooks, tests, and continuous integration.

We need to train all developer teammates on dis decision.



### Artifact Dem Wey Join

Each area where we deploy go need im own .env file and related files.


### Principle Dem Wey Join

Easily reversible.


## Notes


Example file `.env`:

```env
NAME=Alice Anderson
EMAIL=alice@example.com
```

Example file `.env.defaults`:

```env
NAME=Joe Doe
EMAIL=joe@example.com
```

Example file `.env.schema` with just di keys:

```env
NAME
EMAIL
```
