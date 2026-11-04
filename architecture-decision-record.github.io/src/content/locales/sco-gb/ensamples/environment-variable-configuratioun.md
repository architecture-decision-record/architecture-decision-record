# Environment variable configuratioun

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
  * [Implicatiouns ](#implicatiouns)
* [Relatit](#relatit)
  * [Relatit decisiouns](#relatit-decisiouns)
  * [Relatit requirements](#relatit-requirements)
  * [Relatit artefacts](#relatit-artefacts)
  * [Relatit principles](#relatit-principles)
* [Jottins](#jottins)


## Soummary


### Maitter

We want oor applications tae be configurable ayont artefacts/binaries/source, sic that ae build can behave differently dependin on its deployment environment.

  * Tae accomplish this, we want tae uise environment variable configuratioun.

  * We want tae manage the configuratioun bi uisin files that we can version control.

  * We want tae provide some developer experience ergonomics, sic as kennin whit can be configured an onie relevant defaults.


### Decisioun

Decidit on .env files wi relatit default file an schema file.


### Staunin

Decidit. Open tae considerin new capabilities as they come up.


## Pairticulars


### Assumptiouns

We favour separatin the application code an environment code. We assume the app needs tae wark differently in different environments, sic as in a develapment environment, test environment, demo environment, production environment, etc.

We favour the industry practice o "12 factor app" an even mair the relatit practice o "15 factor app".

Mony o oor previous projects hae uised the convention o a `.env` file or similar `.env` directory. There's a typical practice o keepin thir oot o version control, an instead uisin some ither wey tae deploy them, version them, an manage them.


### Limitatiouns

We want tae keep secrets oot o oor source code management (SCM) version control system (VCS).

We want tae aim for compatibility wi popular saftware frameworks an leebraries. For example, Node haes a module "dotenv" for readin environment variable configuratioun.


### Positiouns

We consideret a few approaches:

  * Store config in the app sic as in a file `config.js` file.

  * Store config in the environment sic as in a file `.env`.

  * Fetch config frae a kent locatioun sic as a licence server.


### Argiment

We selectit the approach o a file .env acause:

  * It is popular includin amang experts.

  * It follaes the pattern o `.env` files which oor teams hae successfully uised mony times on mony projects.

  * It is simple. Notably,  We are fine for noo wi the significant trade-offs that we see, sic as a lack o audit capabilities as compared tae an approach o a licence server.


### Implicatiouns 

We need tae figure oot a wey tae separate environment variable configuratioun that is public frae onie secrets management.


## Relatit


### Relatit decisiouns

We expect aw oor applications tae uise this approach.

We will plan tae upgrade onie o oor applications that uise a less-capable approach, sic as hardcodin in a binary or in source code.

We will keep as-is onie o oor applications that uise a mair-capable approach, sic as a licensin server.


### Relatit requirements

We will add devops capabilities for the files, includin hooks, tests, an continuous integratioun.

We need tae train aw developer teammates on this decisioun.



### Relatit artefacts

Each area whaur we deploy will need its ain .env file an relatit files.


### Relatit principles

Easily reversible.


## Jottins


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

Example file `.env.schema` wi juist the keys:

```env
NAME
EMAIL
```
