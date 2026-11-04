# [000] Title
*Give each ADR number so e go easy to reference and catalog* \
*NOTE: All di italicised text na hints and dem suppose remove dem for production*

## Status - DRAFT / ACTIVE /  DEPRECATED by [000] / SUPERSEDES [000]

## Context
*Describe briefly di problem(s) wey dis ADR wan address, and why di problems dey exist.*

## Approach Wey We Decide
*Detail di architecturally significant decision wey dem don make / go make and describe how e address di problems wey dem outline for di Context section.*

## Consequences
*Wetin be di impact of dis decision on di architecture characteristics and functional requirements of di system?*

## Governance
*How dem go monitor di outcomes of dis decision?* \
*How dem go ensure compliance with dis decision?*

## Options Analysis
*If e apply, include or link to any trade-off analysis wey dem perform to reach di decision wey dem make for dis document.*

### Key
*Optional: Give stakeholders visual aids wey fit help dem spot quick di positive and di negative trade-offs - for example simple traffic-light highlights with positive or negative prefixes.*

A <span style="background-color:#4bce97; color:black;">green</span> background mean good fit, wey dey get worse through <span style="background-color:#f1c232; color:black;">amber</span>, with <span style="background-color:#e06666; color:black;">red</span> as di worst fit. \
\+ mean comment wey get positive impact \
\- mean comment wey get negative impact

### High-Level Overview
*How well each option fit di problem context for one look?*

<table>
  <thead>
    <tr>
      <th>Summary</th>
      <th>Option 1</th>
      <th>Option 2</th>
      <th>Option 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><i>Ease of Implementation</i></td>
      <td>
        <span style="background-color:#4bce97; color:black; padding-right:5px">
          + Super easy
        </span>
      </td>
      <td>
        <span style="background-color:#f1c232; color:black; padding-right:5px">
            - E tricky
        </span>
      </td>
      <td>
        <span style="background-color:#e06666; color:black; padding-right:5px">
            - Big implementation wey need expert knowledge
        </span>
      </td>
    </tr>
    <tr>
      <td><i>Timescales</i></td>
      <td>
        <span style="background-color:#4bce97; color:black; padding-right:5px">
            + E quick well well
        </span>
      </td>
       <td>
        <span style="background-color:#f1c232; color:black; padding-right:5px">
            - E slow small
        </span>
      </td>
      <td>
        <span style="background-color:#e06666; color:black; padding-right:5px">
            - E slow well well
        </span>
      </td>
    </tr>
    <tr>
      <td><i>Strategic Value</i></td>
      <td>
        <span style="background-color:#e06666; color:black; padding-right:5px">
            - No strategic value, na just tactical
        </span>
      </td>
       <td>
        <span style="background-color:#f1c232; color:black; padding-right:5px">
            + E improve di customer onboarding experience small
        </span>
      </td>
      <td>
        <span style="background-color:#4bce97; color:black; padding-right:5px">
            + E perfect for di merger wey dey come
        </span>
      </td>
    </tr>
  </tbody>
</table>

### Functional Requirements
*How well each potential option fit di functional requirements wey we want?*

<table>
  <thead>
    <tr>
      <th>Scenario</th>
      <th><i>Option 1</i></th>
      <th><i>Option 2</i></th>
      <th><i>Option 3</i></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><i>Scenario 1</i></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><i>Scenario 2</i></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><i>Scenario 3</i></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

*Optional: Add rows / another table to cover future scenarios wey dem don know.*

### Non-Functional Requirements
*How well each potential option fit di architecture characteristics wey we want?
Note: ‘Architecture Characteristics’ go be more appropriate title, but tailor dis to language wey familiar for your business domain.*

<table>
  <thead>
    <tr>
      <th>Architecture </br> Characteristic</th>
      <th><i>Option 1</i></th>
      <th><i>Option 2</i></th>
      <th><i>Option 3</i></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><i>Scalability</i></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><i>Performance</i></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><i>Availability</i></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

*Optional: Add or link to definitions of di architecture characteristics as dem relate to your business / product.*