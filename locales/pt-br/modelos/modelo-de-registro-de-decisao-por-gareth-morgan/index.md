# [000] TÃ­tulo
*Atribua um nÃºmero a cada ADR para facilitar referÃªncia e catalogaÃ§Ã£o* \
*NOTA: Todo texto em itÃ¡lico fornece dicas e deve ser removido na produÃ§Ã£o*

## Status - RASCUNHO / ATIVO / OBSOLETO por [000] / SUBSTITUI [000]

## Contexto
*Descreva brevemente o(s) problema(s) que esta ADR pretende abordar e por que esses problemas existem.*

## Abordagem decidida
*Detalhe a decisÃ£o arquiteturalmente significativa que foi / serÃ¡ tomada e descreva como ela aborda os problemas descritos na seÃ§Ã£o Contexto.*

## ConsequÃªncias
*Qual Ã© o impacto desta decisÃ£o nas caracterÃ­sticas de arquitetura e nos requisitos funcionais do sistema?*

## GovernanÃ§a
*Como os resultados desta decisÃ£o serÃ£o monitorados?* \
*Como a conformidade com esta decisÃ£o serÃ¡ assegurada?*

## AnÃ¡lise de opÃ§Ãµes
*Se aplicÃ¡vel, inclua ou vincule qualquer anÃ¡lise de trade-offs realizada para chegar Ã  decisÃ£o tomada neste documento.*

### Chave
*Opcional: ForneÃ§a auxÃ­lios visuais para as partes interessadas que possam ajudar a identificar rapidamente os trade-offs positivos e negativos - por exemplo, destaques simples de semÃ¡foro com prefixos positivos ou negativos.*

Um fundo <span style="background-color:#4bce97; color:black;">verde</span> indica um bom encaixe, piorando atÃ© <span style="background-color:#f1c232; color:black;">Ã¢mbar</span>, com <span style="background-color:#e06666; color:black;">vermelho</span> sendo o pior encaixe. \
\+ indica um comentÃ¡rio de impacto positivo \
\- indica um comentÃ¡rio de impacto negativo

### VisÃ£o geral de alto nÃ­vel
*Em uma olhada, quÃ£o bem cada opÃ§Ã£o se ajusta ao contexto do problema?*

<table>
  <thead>
    <tr>
      <th>Resumo</th>
      <th>OpÃ§Ã£o 1</th>
      <th>OpÃ§Ã£o 2</th>
      <th>OpÃ§Ã£o 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><i>Facilidade de implementaÃ§Ã£o</i></td>
      <td>
        <span style="background-color:#4bce97; color:black; padding-right:5px">
          + Muito fÃ¡cil
        </span>
      </td>
      <td>
        <span style="background-color:#f1c232; color:black; padding-right:5px">
            - Trabalhosa
        </span>
      </td>
      <td>
        <span style="background-color:#e06666; color:black; padding-right:5px">
            - Grande implementaÃ§Ã£o que exige conhecimento especializado
        </span>
      </td>
    </tr>
    <tr>
      <td><i>Prazos</i></td>
      <td>
        <span style="background-color:#4bce97; color:black; padding-right:5px">
            + Muito rÃ¡pido
        </span>
      </td>
       <td>
        <span style="background-color:#f1c232; color:black; padding-right:5px">
            - Relativamente lento
        </span>
      </td>
      <td>
        <span style="background-color:#e06666; color:black; padding-right:5px">
            - Muito lento
        </span>
      </td>
    </tr>
    <tr>
      <td><i>Valor estratÃ©gico</i></td>
      <td>
        <span style="background-color:#e06666; color:black; padding-right:5px">
            - Sem valor estratÃ©gico, puramente tÃ¡tico
        </span>
      </td>
       <td>
        <span style="background-color:#f1c232; color:black; padding-right:5px">
            + Melhora ligeiramente a experiÃªncia de onboarding do cliente
        </span>
      </td>
      <td>
        <span style="background-color:#4bce97; color:black; padding-right:5px">
            + Ideal para a prÃ³xima fusÃ£o
        </span>
      </td>
    </tr>
  </tbody>
</table>

### Requisitos funcionais
*QuÃ£o bem cada opÃ§Ã£o potencial atende aos requisitos funcionais desejados?*

<table>
  <thead>
    <tr>
      <th>CenÃ¡rio</th>
      <th><i>OpÃ§Ã£o 1</i></th>
      <th><i>OpÃ§Ã£o 2</i></th>
      <th><i>OpÃ§Ã£o 3</i></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><i>CenÃ¡rio 1</i></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><i>CenÃ¡rio 2</i></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><i>CenÃ¡rio 3</i></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

*Opcional: Adicione linhas / outra tabela para cobrir cenÃ¡rios futuros conhecidos.*

### Requisitos nÃ£o funcionais
*QuÃ£o bem cada opÃ§Ã£o potencial atende Ã s caracterÃ­sticas de arquitetura desejadas?
Nota: 'CaracterÃ­sticas de arquitetura' seria um tÃ­tulo mais apropriado, mas adapte isto Ã  linguagem familiar ao seu domÃ­nio de negÃ³cio.*

<table>
  <thead>
    <tr>
      <th>CaracterÃ­stica </br> de arquitetura</th>
      <th><i>OpÃ§Ã£o 1</i></th>
      <th><i>OpÃ§Ã£o 2</i></th>
      <th><i>OpÃ§Ã£o 3</i></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><i>Escalabilidade</i></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><i>Desempenho</i></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><i>Disponibilidade</i></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

*Opcional: Adicione ou vincule definiÃ§Ãµes das caracterÃ­sticas de arquitetura conforme se aplicam ao seu negÃ³cio / produto.*
