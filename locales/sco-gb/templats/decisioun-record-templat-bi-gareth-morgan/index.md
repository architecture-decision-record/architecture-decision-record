# [000] Title
*Gie ilka ADR a nummer for easy reference an catalogin* \
*NOTE: Aw italicised text gies hints an sud be taen awa for production*

## Status - DRAFT / ACTIVE /  DEPRECATED by [000] / SUPERSEDES [000]

## Context
*Briefly describe the problem(s) that this ADR intends tae address, an why the problems exist.*

## Decided Approach
*Detail the architecturally significant decisioun that haes been / will be made an describe hoo it addresses the problems outlined in the Context section.*

## Consequences
*Whit is the impact o this decisioun on the architectur characteristics an functional requirements o the system?*

## Governance
*Hoo will the outcomes o this decisioun be monitored?* \
*Hoo will compliance wi this decisioun be ensured?*

## Options Analysis
*If applicable, include or link tae onie trade-off analysis which haes been performed tae arrive at the decisioun made in this document.*

### Key
*Optional: Provide visual aids tae stakeholders which can help tae quickly spot the positive an the negative trade-offs - for example simple traffic-licht highlichts wi positive or negative prefixes.*

A <span style="background-color:#4bce97; color:black;">green</span> background indicates a guid fit, worsenin throu <span style="background-color:#f1c232; color:black;">amber</span>, wi <span style="background-color:#e06666; color:black;">red</span> bein the warst fit. \
\+ indicates a positive impactin comment \
\- indicates a negative impactin comment

### High-Level Overview
*Hoo weel daes each option fit the problem context at a glance?*

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
      <td><i>Ease o Implementation</i></td>
      <td>
        <span style="background-color:#4bce97; color:black; padding-right:5px">
          + Dead easy
        </span>
      </td>
      <td>
        <span style="background-color:#f1c232; color:black; padding-right:5px">
            - Tricky
        </span>
      </td>
      <td>
        <span style="background-color:#e06666; color:black; padding-right:5px">
            - Muckle implementation requirin expert knowledge
        </span>
      </td>
    </tr>
    <tr>
      <td><i>Timescales</i></td>
      <td>
        <span style="background-color:#4bce97; color:black; padding-right:5px">
            + Unco quick
        </span>
      </td>
       <td>
        <span style="background-color:#f1c232; color:black; padding-right:5px">
            - Gey slaw
        </span>
      </td>
      <td>
        <span style="background-color:#e06666; color:black; padding-right:5px">
            - Unco slaw
        </span>
      </td>
    </tr>
    <tr>
      <td><i>Strategic Value</i></td>
      <td>
        <span style="background-color:#e06666; color:black; padding-right:5px">
            - Nae strategic value, purely tactical
        </span>
      </td>
       <td>
        <span style="background-color:#f1c232; color:black; padding-right:5px">
            + Slichtly improves the customer onboardin experience
        </span>
      </td>
      <td>
        <span style="background-color:#4bce97; color:black; padding-right:5px">
            + Ideal for the upcomin merger
        </span>
      </td>
    </tr>
  </tbody>
</table>

### Functional Requirements
*Hoo weel daes each potential option fit the desired functional requirements?*

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

*Optional: Add rows / anither table tae cover kent future scenarios.*

### Non-Functional Requirements
*Hoo weel daes each potential option fit the desired architectur characteristics?
Note: ‘Architecture Characteristics’ wud be a mair appropriate title, but tailor this tae familiar leid for yer business domain.*

<table>
  <thead>
    <tr>
      <th>Architectur </br> Characteristic</th>
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

*Optional: Add in or link tae definitions o the architectur characteristics as they pertain tae yer business / product.*
