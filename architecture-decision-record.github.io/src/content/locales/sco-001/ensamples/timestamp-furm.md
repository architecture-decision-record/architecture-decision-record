# Timestamp furm

Contents:

* [Soummary](#soummary)
  * [Maitter](#maitter)
  * [Decisioun](#decisioun)
  * [Staunin](#staunin)
* [Pairticulars](#pairticulars)
  * [Assumptiouns](#assumptiouns)
  * [Limitatiouns](#limitatiouns)
  * [Positiouns](#positiouns)
  * [Argiment](#argiment)
  * [Implicatiouns](#implicatiouns)
* [Relatit](#relatit)
  * [Relatit decisiouns](#relatit-decisiouns)
  * [Relatit requirements](#relatit-requirements)
  * [Relatit artefacts](#relatit-artefacts)
  * [Relatit principles](#relatit-principles)
* [Jottins](#jottins)


## Soummary


### Maitter

We want tae be able tae track whan things happen bi uisin timestamps an bi uisin a consistent timestamp furm that warks weel athort aw oor systems an third-pairty systems.

We interact wi systems that hae different timestamp furms:

* JSON messages dinnae hae a native timestamp furm, sae we need tae chuise hoo tae convert a timestamp tae a string, an convert a string tae a timestamp, i.e. hoo tae serialize/deserialize.

* Some applications are set tae uise local time, raither than UTC time. This can be convenient for projects that maun adjust tae local time, sic as projects that trigger events that are based on local time.

* Some systems hae different time precision needs an capabilities, sic as uisin a time resolution o seconds vs. milliseconds vs. nanoseconds. For example, the Linux operatin system `date` command uises a default time precision o seconds, whereas the Nasdaq stock exchange wants a default time precision o nanoseconds.


### Decisioun

We chuise the timestamp staundart furm ISO 8601 wi nanosecond precision, specifically "YYYY-MM-DDTHH:MM:SS.NNNNNNNNNZ".

The furm shaws the year, month, day, oor, minute, second, nanoseconds, an Zulu time zone a.k.a. UTC, GMT.


### Staunin

Decidit.


## Pairticulars


### Assumptiouns

We need tae haunle thir timestamp text strings, tae convert frae a timestamp tae a string (a.k.a. serialize) an convert frae a string tae a timestamp (a.k.a. deserialize).

We want a furm that is generally easy tae uise, easy tae convert, an easy for a person tae read.

We want compatibility wi a braid range o external systems that we canna control, sic as analytics systems, databaise systems, financial systems.


### Limitatiouns

Some systems hae time precision limitatiouns. For example, the macOS operatin system `date` command can print time precision in seconds, but no in nanoseconds.


### Positiouns

We consideret a range o options:

* Unix epoch i.e. ae incrementin nummer.

* Terse text furm "YYYYMMDDTHHMMSSNNNNNNNNN".

* Uisin a local time zone vs. the UTC time zone.


### Argiment

For typical uise, we value easy tae read/screive bi humans, mair than raw speed/size.

For typical uise, we want a furm that warks fine in machine systems, an an aw warks weel manually, sic as screivin sample data, readin JSON output, greppin a log file, etc.

For atypical uise, sic as heich performance computin, we expect we'll want tae optimise onie text furm we chuise bi convertin the text tae a faster furm, sic as a programmin leid's biggit-in date object type. Sae the text furm daesna maitter much for HPC.


### Implicatiouns

Oor various text systems an time systems will converge on this furm.


## Relatit


### Relatit decisiouns

We micht want a fast/easy wey tae an aw track time deltas a.k.a. durations. Thir are easy wi Unix epoch timestamps.


### Relatit requirements

We micht want tae adjust oor decisioun e.g. if we hae a relatit requirement for a specific kind o loggin message stamp, sic as for Splunk, Sumo, ELK, etc.


### Relatit artefacts

Leid formatters an parsers:

  * [date-fns: Modern JavaScript date utility library](https://date-fns.org/)
  * [Crono: date and time library for Rust](https://github.com/chronotope/chron)
  
Rosetta Code examples:

  * [System time](https://www.rosettacode.org/wiki/System_time)
  * [Data format](https://www.rosettacode.org/wiki/Date_format)
  * [Show the epoch](https://www.rosettacode.org/wiki/Show_the_epoch)

SixArm examples:

  * [now_string](https://github.com/SixArm/rosetta_code/tree/master/tasks/now_string)


### Relatit principles

Easily reversible. We can chynge pretty easily tae a different furm, sic as Unix epoch.

Defer premature optimisation. For typical uise we dinnae care much aboot a haunfu o extra characters sic as a furm that uises dashes an colons.


## Jottins

Add notes here.
