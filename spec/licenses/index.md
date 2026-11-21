# Licenses

This specification states which licenses this project is offered under, and how the
license files, manifests, and documentation keep that statement consistent.

## Requirements

1. The project is offered under any one of the licenses in the table below, at the
   recipient's option. `OR` means the recipient chooses; no obligation from one
   license applies to someone who chose another.
2. `LICENSE.md` lists every license in the table, with its SPDX identifier.
3. Where a package manifest (`Cargo.toml`, `package.json`, `*.csproj`, and similar)
   declares a license, it uses the SPDX expression below, or a single identifier from
   the table where the packaging format does not accept an expression.
4. Documentation that lists the licenses (`README.md`, `CITATION.cff`, `INSTALL.md`,
   and similar) agrees with this table.
5. When this table changes, `LICENSE.md`, the manifests, and the documentation change
   in the same commit.

## Licenses

| License | SPDX identifier |
| --- | --- |
| [MIT](https://opensource.org/license/mit) | [`MIT`](https://spdx.org/licenses/MIT.html) |
| [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) | [`Apache-2.0`](https://spdx.org/licenses/Apache-2.0.html) |
| [BSD 3-Clause License](https://opensource.org/license/bsd-3-clause) | [`BSD-3-Clause`](https://spdx.org/licenses/BSD-3-Clause.html) |
| [GNU General Public License v2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0-standalone.html) | [`GPL-2.0-only`](https://spdx.org/licenses/GPL-2.0-only.html) |
| [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0-standalone.html) | [`GPL-3.0-only`](https://spdx.org/licenses/GPL-3.0-only.html) |
| [UK Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/) | [`OGL-UK-3.0`](https://spdx.org/licenses/OGL-UK-3.0.html) |
| [Creative Commons Attribution Non Commercial Share Alike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/) | [`CC-BY-NC-SA-4.0`](https://spdx.org/licenses/CC-BY-NC-SA-4.0.html) |

Custom license terms are available by arrangement.

## SPDX expression

```
MIT OR Apache-2.0 OR BSD-3-Clause OR GPL-2.0-only OR GPL-3.0-only OR OGL-UK-3.0 OR CC-BY-NC-SA-4.0
```

## Notes on the two newer licenses

- **OGL-UK-3.0** (UK Open Government Licence v3.0) permits free reuse, including
  commercial reuse, of information with attribution. It suits specification text,
  guidance, and data.
- **CC-BY-NC-SA-4.0** requires attribution, allows only non-commercial use, and
  requires adaptations to be shared under the same license. Anyone who needs
  commercial use chooses one of the other licenses in the table, or asks for custom
  terms. It suits documentation and content more than code.
