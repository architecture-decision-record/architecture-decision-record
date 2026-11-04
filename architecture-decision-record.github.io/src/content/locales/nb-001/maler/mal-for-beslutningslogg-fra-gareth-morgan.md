# [000] Tittel
*Gi hver ADR et nummer for enkel referanse og katalogisering* \
*MERK: All kursiv tekst er hint og bør fjernes i produksjon*

## Status - UTKAST / AKTIV /  FORELDET av [000] / ERSTATTER [000]

## Kontekst
*Beskriv kort problemet eller problemene som denne ADR-en skal ta for seg, og hvorfor problemene finnes.*

## Valgt tilnærming
*Beskriv i detalj den arkitektonisk betydningsfulle beslutningen som er tatt / skal tas, og beskriv hvordan den tar for seg problemene som er skissert i delen Kontekst.*

## Konsekvenser
*Hvilken innvirkning har denne beslutningen på arkitekturegenskapene og de funksjonelle kravene til systemet?*

## Styring
*Hvordan skal resultatene av denne beslutningen følges opp?* \
*Hvordan skal det sikres at beslutningen etterleves?*

## Alternativanalyse
*Hvis relevant, ta med eller lenk til en eventuell avveiningsanalyse som er utført for å komme fram til beslutningen i dette dokumentet.*

### Tegnforklaring
*Valgfritt: Gi interessentene visuelle hjelpemidler som gjør det raskt å se de positive og negative avveiningene – for eksempel enkel markering i trafikklysfarger med positive eller negative prefikser.*

En <span style="background-color:#4bce97; color:black;">grønn</span> bakgrunn viser god tilpasning, som blir dårligere via <span style="background-color:#f1c232; color:black;">gul</span>, og <span style="background-color:#e06666; color:black;">rød</span> er dårligste tilpasning. \
\+ viser en kommentar med positiv innvirkning \
\- viser en kommentar med negativ innvirkning

### Overordnet oversikt
*Hvor godt passer hvert alternativ til problemkonteksten ved første blikk?*

<table>
  <thead>
    <tr>
      <th>Sammendrag</th>
      <th>Alternativ 1</th>
      <th>Alternativ 2</th>
      <th>Alternativ 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><i>Enkel å implementere</i></td>
      <td>
        <span style="background-color:#4bce97; color:black; padding-right:5px">
          + Superenkel
        </span>
      </td>
      <td>
        <span style="background-color:#f1c232; color:black; padding-right:5px">
            - Vrien
        </span>
      </td>
      <td>
        <span style="background-color:#e06666; color:black; padding-right:5px">
            - Stor implementering som krever ekspertkunnskap
        </span>
      </td>
    </tr>
    <tr>
      <td><i>Tidsrammer</i></td>
      <td>
        <span style="background-color:#4bce97; color:black; padding-right:5px">
            + Veldig raskt
        </span>
      </td>
       <td>
        <span style="background-color:#f1c232; color:black; padding-right:5px">
            - Ganske tregt
        </span>
      </td>
      <td>
        <span style="background-color:#e06666; color:black; padding-right:5px">
            - Veldig tregt
        </span>
      </td>
    </tr>
    <tr>
      <td><i>Strategisk verdi</i></td>
      <td>
        <span style="background-color:#e06666; color:black; padding-right:5px">
            - Ingen strategisk verdi, rent taktisk
        </span>
      </td>
       <td>
        <span style="background-color:#f1c232; color:black; padding-right:5px">
            + Forbedrer opplevelsen når kunder kommer i gang noe
        </span>
      </td>
      <td>
        <span style="background-color:#4bce97; color:black; padding-right:5px">
            + Ideelt for den kommende fusjonen
        </span>
      </td>
    </tr>
  </tbody>
</table>

### Funksjonelle krav
*Hvor godt passer hvert mulig alternativ til de ønskede funksjonelle kravene?*

<table>
  <thead>
    <tr>
      <th>Scenario</th>
      <th><i>Alternativ 1</i></th>
      <th><i>Alternativ 2</i></th>
      <th><i>Alternativ 3</i></th>
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

*Valgfritt: Legg til rader / en ny tabell for kjente framtidige scenarioer.*

### Ikke-funksjonelle krav
*Hvor godt passer hvert mulig alternativ til de ønskede arkitekturegenskapene?
Merk: «Arkitekturegenskaper» ville vært en mer passende tittel, men tilpass den til språket som er kjent i ditt forretningsområde.*

<table>
  <thead>
    <tr>
      <th>Arkitektur- </br> egenskap</th>
      <th><i>Alternativ 1</i></th>
      <th><i>Alternativ 2</i></th>
      <th><i>Alternativ 3</i></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><i>Skalerbarhet</i></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><i>Ytelse</i></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><i>Tilgjengelighet</i></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

*Valgfritt: Legg til eller lenk til definisjoner av arkitekturegenskapene slik de gjelder for din virksomhet / ditt produkt.*