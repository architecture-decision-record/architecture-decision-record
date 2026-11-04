# [000] Pamagat
*Magtalaga ng numero sa bawat ADR para sa madaling pagsangguni at pag-catalog* \
*TANDAAN: Ang lahat ng tekstong naka-italic ay nagbibigay ng mga pahiwatig at dapat alisin sa production*

## Katayuan - DRAFT / ACTIVE /  DEPRECATED by [000] / SUPERSEDES [000]

## Konteksto
*Maikling ilarawan ang (mga) problemang nilalayong tugunan ng ADR na ito, at kung bakit umiiral ang mga problema.*

## Napiling Pamamaraan
*Idetalye ang desisyong may malaking epekto sa arkitektura na ginawa / gagawin at ilarawan kung paano nito tinutugunan ang mga problemang nakabalangkas sa seksyong Konteksto.*

## Mga Kahihinatnan
*Ano ang epekto ng desisyong ito sa mga katangian ng arkitektura at functional requirement ng sistema?*

## Governance
*Paano susubaybayan ang mga kalalabasan ng desisyong ito?* \
*Paano titiyakin ang pagsunod sa desisyong ito?*

## Pagsusuri ng mga Opsyon
*Kung naaangkop, isama o i-link ang anumang trade-off analysis na isinagawa para marating ang desisyong ginawa sa dokumentong ito.*

### Susi
*Opsyonal: Magbigay sa mga stakeholder ng mga visual aid na makatutulong para mabilis na makita ang positibo at negatibong trade-off - halimbawa, simpleng traffic-light highlight na may positibo o negatibong prefix.*

Ang <span style="background-color:#4bce97; color:black;">berdeng</span> background ay nagpapahiwatig ng magandang pagkakatugma, lumalala patungong <span style="background-color:#f1c232; color:black;">amber</span>, at ang <span style="background-color:#e06666; color:black;">pula</span> ang pinakamasamang pagkakatugma. \
\+ ay nagpapahiwatig ng komentong may positibong epekto \
\- ay nagpapahiwatig ng komentong may negatibong epekto

### Mataas na Antas na Pangkalahatang-ideya
*Gaano kahusay ang pagkakatugma ng bawat opsyon sa konteksto ng problema sa isang sulyap?*

<table>
  <thead>
    <tr>
      <th>Buod</th>
      <th>Opsyon 1</th>
      <th>Opsyon 2</th>
      <th>Opsyon 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><i>Dali ng Implementasyon</i></td>
      <td>
        <span style="background-color:#4bce97; color:black; padding-right:5px">
          + Napakadali
        </span>
      </td>
      <td>
        <span style="background-color:#f1c232; color:black; padding-right:5px">
            - Medyo mahirap
        </span>
      </td>
      <td>
        <span style="background-color:#e06666; color:black; padding-right:5px">
            - Malaking implementasyon na nangangailangan ng ekspertong kaalaman
        </span>
      </td>
    </tr>
    <tr>
      <td><i>Mga Takdang Panahon</i></td>
      <td>
        <span style="background-color:#4bce97; color:black; padding-right:5px">
            + Napakabilis
        </span>
      </td>
       <td>
        <span style="background-color:#f1c232; color:black; padding-right:5px">
            - Medyo mabagal
        </span>
      </td>
      <td>
        <span style="background-color:#e06666; color:black; padding-right:5px">
            - Napakabagal
        </span>
      </td>
    </tr>
    <tr>
      <td><i>Estratehikong Halaga</i></td>
      <td>
        <span style="background-color:#e06666; color:black; padding-right:5px">
            - Walang estratehikong halaga, puro taktikal
        </span>
      </td>
       <td>
        <span style="background-color:#f1c232; color:black; padding-right:5px">
            + Bahagyang pinabubuti ang karanasan sa onboarding ng customer
        </span>
      </td>
      <td>
        <span style="background-color:#4bce97; color:black; padding-right:5px">
            + Mainam para sa darating na merger
        </span>
      </td>
    </tr>
  </tbody>
</table>

### Mga Functional Requirement
*Gaano kahusay ang pagkakatugma ng bawat posibleng opsyon sa mga nais na functional requirement?*

<table>
  <thead>
    <tr>
      <th>Senaryo</th>
      <th><i>Opsyon 1</i></th>
      <th><i>Opsyon 2</i></th>
      <th><i>Opsyon 3</i></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><i>Senaryo 1</i></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><i>Senaryo 2</i></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><i>Senaryo 3</i></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

*Opsyonal: Magdagdag ng mga hilera / isa pang talahanayan para saklawin ang mga kilalang senaryo sa hinaharap.*

### Mga Non-Functional Requirement
*Gaano kahusay ang pagkakatugma ng bawat posibleng opsyon sa mga nais na katangian ng arkitektura?
Tandaan: Mas angkop na pamagat ang ‘Mga Katangian ng Arkitektura’, ngunit iangkop ito sa pamilyar na wika para sa domain ng iyong negosyo.*

<table>
  <thead>
    <tr>
      <th>Katangian </br> ng Arkitektura</th>
      <th><i>Opsyon 1</i></th>
      <th><i>Opsyon 2</i></th>
      <th><i>Opsyon 3</i></th>
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

*Opsyonal: Idagdag o i-link ang mga kahulugan ng mga katangian ng arkitektura kung paano ang mga ito ay nauugnay sa iyong negosyo / produkto.*
