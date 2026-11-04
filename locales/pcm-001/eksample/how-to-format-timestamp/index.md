# Format fo timestamp

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

We want fit track wen things happen by to use timestamps and by to use consistent timestamp format wey work well across all our systems and third-party systems.

We dey interact with systems wey get different timestamp formats:

* JSON messages no get native timestamp format, so we need to choose how to convert timestamp to string, and convert string to timestamp, i.e. how to serialize/deserialize.

* Some applications set to use local time, instead of UTC time. Dis one fit convenient for projects wey must adjust to local time, like projects wey trigger events wey base on local time.

* Some systems get different time precision needs and capabilities, like to use time resolution of seconds vs. milliseconds vs. nanoseconds. For example, Linux operating system `date` command use default time precision of seconds, while Nasdaq stock exchange want default time precision of nanoseconds.


### Decision

We choose di timestamp standard format ISO 8601 with nanosecond precision, specifically "YYYY-MM-DDTHH:MM:SS.NNNNNNNNNZ".

Di format show di year, month, day, hour, minute, second, nanoseconds, and Zulu time zone a.k.a. UTC, GMT.


### Status

Decided.


## Details


### Wetin We Assume

We need to handle dis timestamp text strings, to convert from timestamp to string (a.k.a. serialize) and convert from string to timestamp (a.k.a. deserialize).

We want format wey generally easy to use, easy to convert, and easy for person to read.

We want compatibility with wide range of external systems wey we no fit control, like analytics systems, database systems, financial systems.


### Wetin Dey Limit Us

Some systems get time precision limitations. For example, macOS operating system `date` command fit print time precision for seconds, but no for nanoseconds.


### Positions

We consider range of options:

* Unix epoch i.e. one incrementing number.

* Terse text format "YYYYMMDDTHHMMSSNNNNNNNNN".

* To use local time zone vs. di UTC time zone.


### Argument

For typical use, we value easy to read/write by humans, pass raw speed/size.

For typical use, we want format wey work fine for machine systems, and also work well manually, like to write sample data, read JSON output, grep log file, etc.

For atypical use, like high performance computing, we expect say we go want optimize any text format wey we choose by to convert di text to faster format, like programming language built-in date object type. So di text format no matter much for HPC.


### Wetin E Mean

Our various text systems and time systems go converge on dis format.


## Wetin Join


### Decision Dem Wey Join

We fit want fast/easy way to also track time deltas a.k.a. durations. Dem easy with Unix epoch timestamps.


### Requirement Dem Wey Join

We fit want adjust our decision e.g. if we get related requirement for specific kind of logging message stamp, like for Splunk, Sumo, ELK, etc.


### Artifact Dem Wey Join

Language formatters and parsers:

  * [date-fns: Modern JavaScript date utility library](https://date-fns.org/)
  * [Crono: date and time library for Rust](https://github.com/chronotope/chron)
  
Rosetta Code examples:

  * [System time](https://www.rosettacode.org/wiki/System_time)
  * [Data format](https://www.rosettacode.org/wiki/Date_format)
  * [Show the epoch](https://www.rosettacode.org/wiki/Show_the_epoch)

SixArm examples:

  * [now_string](https://github.com/SixArm/rosetta_code/tree/master/tasks/now_string)


### Principle Dem Wey Join

Easily reversible. We fit change easy go different format, like Unix epoch.

Defer premature optimization. For typical use we no care much about handful of extra characters like format wey use dashes and colons.


## Notes

Add notes here.
