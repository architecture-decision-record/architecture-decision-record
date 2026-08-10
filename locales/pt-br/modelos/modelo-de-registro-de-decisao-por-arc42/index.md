# Modelo de registro de decisÃ£o por arc42

<https://arc42.org/overview>

## 1. IntroduÃ§Ã£o e objetivos

Breve descriÃ§Ã£o dos requisitos, forÃ§as direcionadoras, extrato (ou resumo) dos
requisitos. Os trÃªs principais (no mÃ¡ximo cinco) objetivos de qualidade da
arquitetura que tÃªm maior prioridade para as principais partes interessadas.
Uma tabela de partes interessadas importantes com suas expectativas em relaÃ§Ã£o
Ã  arquitetura.

## 1.1 VisÃ£o geral dos requisitos

### ConteÃºdo

Breve descriÃ§Ã£o dos requisitos funcionais, forÃ§as direcionadoras, extrato (ou
resumo) dos requisitos. Links para os documentos de requisitos (espera-se que
existam), com informaÃ§Ãµes sobre onde encontrÃ¡-los.

### MotivaÃ§Ã£o

Do ponto de vista dos usuÃ¡rios finais, um sistema Ã© criado ou modificado para
melhorar o suporte a uma atividade de negÃ³cio e/ou melhorar a qualidade.

### Forma

Breve descriÃ§Ã£o textual, provavelmente em formato tabular de caso de uso. Se
existirem documentos de requisitos, esta visÃ£o geral deve referenciÃ¡-los.

Mantenha estes extratos tÃ£o curtos quanto possÃ­vel. Equilibre a legibilidade
deste documento com a possÃ­vel redundÃ¢ncia em relaÃ§Ã£o aos documentos de
requisitos.

## 1.2 Objetivos de qualidade

### ConteÃºdo

Os trÃªs principais (no mÃ¡ximo cinco) objetivos de qualidade da arquitetura cujo
cumprimento Ã© de maior importÃ¢ncia para as principais partes interessadas.
Queremos dizer realmente objetivos de qualidade para a arquitetura. NÃ£o os
confunda com objetivos do projeto. Eles nÃ£o sÃ£o necessariamente idÃªnticos. A
norma ISO 25010 fornece uma boa visÃ£o geral de possÃ­veis tÃ³picos de interesse.

### MotivaÃ§Ã£o

VocÃª deve conhecer os objetivos de qualidade das suas partes interessadas mais
importantes, pois eles influenciarÃ£o decisÃµes fundamentais de arquitetura.
Certifique-se de ser muito concreto sobre estas qualidades e evite buzzwords.
Se vocÃª, como arquiteto, nÃ£o sabe como a qualidade do seu trabalho serÃ¡ julgada
...

### Forma

Uma tabela com os objetivos de qualidade mais importantes e cenÃ¡rios concretos, ordenados por prioridades.

## 1.3 Parte interessada

### ConteÃºdo

VisÃ£o geral explÃ­cita das partes interessadas do sistema, isto Ã©, todas as
pessoas, papÃ©is ou organizaÃ§Ãµes que

- devem conhecer a arquitetura

- precisam ser convencidas da arquitetura

- precisam trabalhar com a arquitetura ou com cÃ³digo

- precisam da documentaÃ§Ã£o da arquitetura para seu trabalho

- precisam chegar a decisÃµes sobre o sistema ou seu desenvolvimento

### MotivaÃ§Ã£o

VocÃª deve conhecer todas as partes envolvidas no desenvolvimento do sistema ou
afetadas pelo sistema. Caso contrÃ¡rio, poderÃ¡ ter surpresas desagradÃ¡veis mais
tarde no processo de desenvolvimento. Estas partes interessadas determinam a
extensÃ£o e o nÃ­vel de detalhe do seu trabalho e de seus resultados.

### Forma

Tabela com nomes de papÃ©is, nomes de pessoas e suas expectativas em relaÃ§Ã£o Ã 
arquitetura e sua documentaÃ§Ã£o.

## 2. RestriÃ§Ãµes

Qualquer coisa que restrinja as equipes em decisÃµes de design e implementaÃ§Ã£o
ou em decisÃµes sobre processos relacionados. Ã€s vezes pode ir alÃ©m de sistemas
individuais e ser vÃ¡lida para organizaÃ§Ãµes e empresas inteiras.

### ConteÃºdo

Qualquer requisito que restrinja arquitetos de software em sua liberdade de
decisÃµes de design e implementaÃ§Ã£o ou decisÃµes sobre o processo de
desenvolvimento. Estas restriÃ§Ãµes Ã s vezes vÃ£o alÃ©m de sistemas individuais e
sÃ£o vÃ¡lidas para organizaÃ§Ãµes e empresas inteiras.

### MotivaÃ§Ã£o

Arquitetos devem saber exatamente onde sÃ£o livres em suas decisÃµes de design e
onde precisam aderir a restriÃ§Ãµes. RestriÃ§Ãµes devem sempre ser tratadas; porÃ©m,
elas podem ser negociÃ¡veis.

### Forma

Tabelas simples de restriÃ§Ãµes com explicaÃ§Ãµes. Se necessÃ¡rio, vocÃª pode
subdividi-las em restriÃ§Ãµes tÃ©cnicas, restriÃ§Ãµes organizacionais e polÃ­ticas e
convenÃ§Ãµes (por exemplo, diretrizes de programaÃ§Ã£o ou versionamento,
convenÃ§Ãµes de documentaÃ§Ã£o ou nomenclatura)

## 3. Contexto e escopo

Delimita seu sistema em relaÃ§Ã£o a seus parceiros de comunicaÃ§Ã£o (externos)
(sistemas vizinhos e usuÃ¡rios). Especifica as interfaces externas. Mostrado a
partir de uma perspectiva de negÃ³cio/domÃ­nio (sempre) ou de uma perspectiva
tÃ©cnica (opcional)

### ConteÃºdo

Escopo e contexto do sistema - como o nome sugere - delimitam seu sistema (isto
Ã©, seu escopo) em relaÃ§Ã£o a todos os seus parceiros de comunicaÃ§Ã£o (sistemas
vizinhos e usuÃ¡rios, isto Ã©, o contexto do seu sistema). Assim, especificam as
interfaces externas.

Se necessÃ¡rio, diferencie o contexto de negÃ³cio (entradas e saÃ­das especÃ­ficas
do domÃ­nio) do contexto tÃ©cnico (canais, protocolos, hardware).

### MotivaÃ§Ã£o

As interfaces de domÃ­nio e interfaces tÃ©cnicas para parceiros de comunicaÃ§Ã£o
estÃ£o entre os aspectos mais crÃ­ticos do seu sistema. Certifique-se de
compreendÃª-las completamente.

### Forma

- VÃ¡rios diagramas de contexto

- Listas de parceiros de comunicaÃ§Ã£o e suas interfaces.

## 3.1 Contexto de negÃ³cio

### ConteÃºdo

EspecificaÃ§Ã£o de todos os parceiros de comunicaÃ§Ã£o (usuÃ¡rios, sistemas de TI,
...) com explicaÃ§Ãµes de entradas e saÃ­das ou interfaces especÃ­ficas do domÃ­nio.
Opcionalmente, vocÃª pode adicionar formatos especÃ­ficos do domÃ­nio ou
protocolos de comunicaÃ§Ã£o.

### MotivaÃ§Ã£o

Todas as partes interessadas devem entender quais dados sÃ£o trocados com o
ambiente do sistema.

### Forma

Todos os tipos de diagramas que mostram o sistema como uma caixa preta e
especificam as interfaces de domÃ­nio para parceiros de comunicaÃ§Ã£o.

Alternativamente (ou adicionalmente), vocÃª pode usar uma tabela. O tÃ­tulo da
tabela Ã© o nome do seu sistema; as trÃªs colunas contÃªm o nome do parceiro de
comunicaÃ§Ã£o, as entradas e as saÃ­das.

## 3.2 Contexto tÃ©cnico

### ConteÃºdo

Interfaces tÃ©cnicas (canais e meios de transmissÃ£o) que conectam seu sistema ao
seu ambiente. AlÃ©m disso, um mapeamento de entrada/saÃ­da especÃ­fica do domÃ­nio
para os canais, isto Ã©, uma explicaÃ§Ã£o de qual I/O usa qual canal.

### MotivaÃ§Ã£o

Muitas partes interessadas tomam decisÃµes de arquitetura com base nas
interfaces tÃ©cnicas entre o sistema e seu contexto. Especialmente designers de
infraestrutura ou hardware decidem estas interfaces tÃ©cnicas.

### Forma

Por exemplo, diagrama de implantaÃ§Ã£o UML descrevendo canais para sistemas
vizinhos, junto com uma tabela de mapeamento que mostra os relacionamentos
entre canais e entrada/saÃ­da.

## 4. EstratÃ©gia de soluÃ§Ã£o

Resumo das decisÃµes fundamentais e estratÃ©gias de soluÃ§Ã£o que moldam a
arquitetura. Pode incluir tecnologia, decomposiÃ§Ã£o de alto nÃ­vel, abordagens
para alcanÃ§ar os principais objetivos de qualidade e decisÃµes organizacionais
relevantes.

### ConteÃºdo

Um breve resumo e explicaÃ§Ã£o das decisÃµes fundamentais e estratÃ©gias de soluÃ§Ã£o que moldam a arquitetura do sistema. Elas incluem

- decisÃµes de tecnologia

- decisÃµes sobre a decomposiÃ§Ã£o de alto nÃ­vel do sistema, por exemplo, uso de um padrÃ£o de arquitetura ou padrÃ£o de design

- decisÃµes sobre como alcanÃ§ar objetivos de qualidade principais

- decisÃµes organizacionais relevantes, por exemplo, selecionar um processo de desenvolvimento ou delegar certas tarefas a terceiros.

### MotivaÃ§Ã£o

Estas decisÃµes formam os pilares da sua arquitetura. Elas sÃ£o a base para
muitas outras decisÃµes detalhadas ou regras de implementaÃ§Ã£o.

### Forma

Mantenha curta a explicaÃ§Ã£o destas decisÃµes-chave.

Motive o que vocÃª decidiu e por que decidiu dessa forma, com base na sua
declaraÃ§Ã£o do problema, nos objetivos de qualidade e nas principais restriÃ§Ãµes.
Consulte detalhes nas seÃ§Ãµes seguintes (seÃ§Ã£o 5 para detalhes estruturais,
seÃ§Ã£o 8 para conceitos transversais).

VocÃª pode usar uma lista de abordagens de soluÃ§Ã£o ou uma tabela.

## 5. VisÃ£o de blocos de construÃ§Ã£o

DecomposiÃ§Ã£o estÃ¡tica do sistema, abstraÃ§Ãµes de cÃ³digo-fonte, mostradas como
hierarquia de caixas brancas (contendo caixas pretas), atÃ© o nÃ­vel de detalhe
apropriado.

### ConteÃºdo

A visÃ£o de blocos de construÃ§Ã£o mostra a decomposiÃ§Ã£o estÃ¡tica do sistema em
blocos de construÃ§Ã£o (mÃ³dulos, componentes, subsistemas, classes, interfaces,
pacotes, bibliotecas, frameworks, camadas, partiÃ§Ãµes, tiers, funÃ§Ãµes, macros,
operaÃ§Ãµes, estruturas de dados, ...) bem como suas dependÃªncias
(relacionamentos, associaÃ§Ãµes, ...)

Esta visÃ£o Ã© obrigatÃ³ria para toda documentaÃ§Ã£o de arquitetura. Em analogia a
uma casa, este Ã© o plano de planta.

### MotivaÃ§Ã£o

Mantenha uma visÃ£o geral do seu cÃ³digo-fonte tornando sua estrutura
compreensÃ­vel por meio de abstraÃ§Ã£o.

Isso permite que vocÃª se comunique com suas partes interessadas em um nÃ­vel
abstrato sem revelar detalhes de implementaÃ§Ã£o.

### Forma

A visÃ£o de blocos de construÃ§Ã£o Ã© uma coleÃ§Ã£o hierÃ¡rquica de caixas pretas e
caixas brancas (veja a figura abaixo) e suas descriÃ§Ãµes.

## 5.1 Caixa branca do sistema geral

Aqui vocÃª descreve a decomposiÃ§Ã£o do sistema geral usando o seguinte modelo de caixa branca. Ele contÃ©m

- um diagrama de visÃ£o geral

- uma motivaÃ§Ã£o para a decomposiÃ§Ã£o

- descriÃ§Ãµes de caixa preta dos blocos de construÃ§Ã£o contidos. Para elas, oferecemos alternativas:

  - use uma tabela para uma visÃ£o geral curta e pragmÃ¡tica de todos os blocos de construÃ§Ã£o contidos e suas interfaces

  - use uma lista de descriÃ§Ãµes de caixa preta dos blocos de construÃ§Ã£o de acordo com o modelo de caixa preta (veja abaixo). Dependendo da sua escolha de ferramenta, esta lista poderia ser subcapÃ­tulos (em arquivos de texto), subpÃ¡ginas (em uma Wiki) ou elementos aninhados (em uma ferramenta de modelagem).

  - (opcional:) interfaces importantes que nÃ£o sÃ£o explicadas nos modelos de caixa preta de um bloco de construÃ§Ã£o, mas sÃ£o muito importantes para entender a caixa branca.

Como hÃ¡ tantas formas de especificar interfaces, por que nÃ£o fornecer um modelo especÃ­fico para elas.

No melhor caso, vocÃª conseguirÃ¡ se virar com exemplos ou assinaturas simples.

## 5.2 NÃ­vel 2

Aqui vocÃª pode especificar a estrutura interna de (alguns) blocos de construÃ§Ã£o
do nÃ­vel 1 como caixas brancas.

VocÃª precisa decidir quais blocos de construÃ§Ã£o do seu sistema sÃ£o importantes
o suficiente para justificar uma descriÃ§Ã£o tÃ£o detalhada. Prefira relevÃ¢ncia em
vez de completude. Especifique blocos de construÃ§Ã£o importantes,
surpreendentes, arriscados, complexos ou volÃ¡teis. Deixe de fora partes
normais, simples, entediantes ou padronizadas do seu sistema

### 5.2.1 Caixa branca para o bloco de construÃ§Ã£o 1

Especifica a estrutura interna do bloco de construÃ§Ã£o 1.

Use o modelo de caixa branca (veja acima).

## 6. VisÃ£o de tempo de execuÃ§Ã£o

Comportamento de blocos de construÃ§Ã£o como cenÃ¡rios, cobrindo casos de uso ou
funcionalidades importantes, interaÃ§Ãµes em interfaces externas crÃ­ticas,
operaÃ§Ã£o e administraÃ§Ã£o, alÃ©m de comportamento de erros e exceÃ§Ãµes.

### ConteÃºdo

A visÃ£o de tempo de execuÃ§Ã£o descreve comportamento e interaÃ§Ãµes concretos dos blocos de construÃ§Ã£o do sistema na forma de cenÃ¡rios das seguintes Ã¡reas:

- casos de uso ou funcionalidades importantes: como os blocos de construÃ§Ã£o os executam?

- interaÃ§Ãµes em interfaces externas crÃ­ticas: como os blocos de construÃ§Ã£o cooperam com usuÃ¡rios e sistemas vizinhos?

- operaÃ§Ã£o e administraÃ§Ã£o: lanÃ§amento, inicializaÃ§Ã£o, parada

- cenÃ¡rios de erro e exceÃ§Ã£o

ObservaÃ§Ã£o: O principal critÃ©rio para escolher cenÃ¡rios possÃ­veis (sequÃªncias, workflows) Ã© sua relevÃ¢ncia arquitetural. NÃ£o Ã© importante descrever um grande nÃºmero de cenÃ¡rios. Em vez disso, vocÃª deve documentar uma seleÃ§Ã£o representativa.

### MotivaÃ§Ã£o

VocÃª deve entender como (instÃ¢ncias de) blocos de construÃ§Ã£o do seu sistema realizam seu trabalho e se comunicam em tempo de execuÃ§Ã£o. VocÃª capturarÃ¡ cenÃ¡rios principalmente na sua documentaÃ§Ã£o para comunicar sua arquitetura a partes interessadas que estÃ£o menos dispostas ou aptas a ler e entender os modelos estÃ¡ticos (visÃ£o de blocos de construÃ§Ã£o, visÃ£o de implantaÃ§Ã£o).

### Forma

HÃ¡ muitas notaÃ§Ãµes para descrever cenÃ¡rios, por exemplo:


- lista numerada de passos (em linguagem natural)

- diagramas de atividade ou fluxogramas

- diagramas de sequÃªncia

- BPMN ou EPCs (event process chains)

- mÃ¡quinas de estado

- etc.

## 6.n CenÃ¡rio de tempo de execuÃ§Ã£o n (1, 2, 3 etc.)

Insira o diagrama de tempo de execuÃ§Ã£o ou a descriÃ§Ã£o textual do cenÃ¡rio.

Insira a descriÃ§Ã£o dos aspectos notÃ¡veis das interaÃ§Ãµes entre as instÃ¢ncias de blocos de construÃ§Ã£o representadas neste diagrama.

## 7. VisÃ£o de implantaÃ§Ã£o

Infraestrutura tÃ©cnica com ambientes, computadores, processadores, topologias.
Mapeamento de blocos de construÃ§Ã£o (de software) para elementos de
infraestrutura.

### ConteÃºdo

A visÃ£o de implantaÃ§Ã£o descreve:

- a infraestrutura tÃ©cnica usada para executar seu sistema, com elementos de
  infraestrutura como localizaÃ§Ãµes geogrÃ¡ficas, ambientes, computadores,
  processadores, canais e topologias de rede, bem como outros elementos de
  infraestrutura e

- o mapeamento de blocos de construÃ§Ã£o (de software) para esses elementos de infraestrutura.

Frequentemente, sistemas sÃ£o executados em diferentes ambientes, por exemplo,
ambiente de desenvolvimento, ambiente de teste, ambiente de produÃ§Ã£o. Nesses
casos, vocÃª deve documentar todos os ambientes relevantes.

Documente especialmente a visÃ£o de implantaÃ§Ã£o quando seu software for
executado como sistema distribuÃ­do com mais de um computador, processador,
servidor ou container, ou quando vocÃª projetar e construir seus prÃ³prios
processadores e chips de hardware.

Da perspectiva de software, Ã© suficiente capturar os elementos da infraestrutura
necessÃ¡rios para mostrar a implantaÃ§Ã£o dos seus blocos de construÃ§Ã£o. Arquitetos
de hardware podem ir alÃ©m disso e descrever a infraestrutura em qualquer nÃ­vel
de detalhe de que precisem para capturÃ¡-la.

### MotivaÃ§Ã£o

Software nÃ£o roda sem hardware. Esta infraestrutura subjacente pode influenciar
e influenciarÃ¡ seu sistema e/ou alguns conceitos transversais. Portanto, vocÃª
precisa conhecer a infraestrutura.

### Forma

Talvez o diagrama de implantaÃ§Ã£o de nÃ­vel mais alto jÃ¡ esteja contido na seÃ§Ã£o 3.2. como contexto tÃ©cnico, com sua prÃ³pria infraestrutura como UMA caixa preta. Nesta seÃ§Ã£o, vocÃª darÃ¡ zoom nesta caixa preta usando diagramas de implantaÃ§Ã£o adicionais.

- UML oferece diagramas de implantaÃ§Ã£o para expressar essa visÃ£o. Use-os, provavelmente com diagramas aninhados, quando sua infraestrutura for mais complexa.

- Quando suas partes interessadas (de hardware) preferirem outros tipos de diagramas em vez de
  diagrama de implantaÃ§Ã£o UML, deixe-as usar qualquer tipo capaz de mostrar nÃ³s e
  canais da infraestrutura.

## 7.1 Infraestrutura nÃ­vel 1

Descreva (normalmente em uma combinaÃ§Ã£o de diagramas, tabelas e texto):

- a distribuiÃ§Ã£o do seu sistema para mÃºltiplas localizaÃ§Ãµes, ambientes, computadores, processadores, .. bem como as conexÃµes fÃ­sicas entre eles

- justificativa ou motivaÃ§Ã£o importante para esta estrutura de implantaÃ§Ã£o

- caracterÃ­sticas de qualidade e/ou desempenho da infraestrutura

- o mapeamento de artefatos de software (blocos de construÃ§Ã£o) para elementos da infraestrutura

Para mÃºltiplos ambientes ou implantaÃ§Ãµes alternativas, copie esta seÃ§Ã£o do arc42 para todos os ambientes relevantes. **

## 7.2 Infraestrutura nÃ­vel 2

Aqui vocÃª pode incluir a estrutura interna de (alguns) elementos de infraestrutura do nÃ­vel de infraestrutura 1.

Copie a estrutura do nÃ­vel 1 para cada elemento selecionado.

## 8. Conceitos transversais

Regulamentos principais, gerais, e abordagens de soluÃ§Ã£o relevantes em mÃºltiplas
partes (â†’ transversais) do sistema. Conceitos frequentemente se relacionam a
mÃºltiplos blocos de construÃ§Ã£o. Inclua diferentes tÃ³picos como modelos de
domÃ­nio, padrÃµes e estilos de arquitetura, regras para uso de tecnologia
especÃ­fica e regras de implementaÃ§Ã£o.

### ConteÃºdo

Esta seÃ§Ã£o descreve conceitos transversais (prÃ¡ticas, padrÃµes, regulamentos ou
ideias de soluÃ§Ã£o). Tais conceitos frequentemente se relacionam a mÃºltiplos
blocos de construÃ§Ã£o. Eles podem incluir muitos tÃ³picos diferentes.

### MotivaÃ§Ã£o

Conceitos formam a base para a integridade conceitual (consistÃªncia,
homogeneidade) da arquitetura. Portanto, eles sÃ£o uma contribuiÃ§Ã£o importante
para alcanÃ§ar qualidades internas do seu sistema.

Este Ã© o lugar no modelo que fornecemos para uma especificaÃ§Ã£o coesa desses
conceitos.

Muitos destes conceitos se relacionam a vÃ¡rios dos seus blocos de construÃ§Ã£o ou
os influenciam.

### Forma

A forma pode variar:

- documentos conceituais com qualquer tipo de estrutura

- implementaÃ§Ãµes de exemplo, especialmente para conceitos tÃ©cnicos

- excertos de modelos transversais ou cenÃ¡rios usando notaÃ§Ãµes das visÃµes de arquitetura

### Estrutura desta seÃ§Ã£o

Escolha apenas os tÃ³picos mais necessÃ¡rios para seu sistema e atribua a cada um um heading de nÃ­vel 2 nesta seÃ§Ã£o (por exemplo, 8.1, 8.2 etc).

- NÃƒO TENTE cobrir todos os tÃ³picos do diagrama mencionado acima.

### Contexto adicional

Alguns tÃ³picos dentro de sistemas frequentemente dizem respeito a mÃºltiplos
blocos de construÃ§Ã£o, elementos de hardware ou processos de desenvolvimento.
Pode ser mais fÃ¡cil comunicar ou documentar esses tÃ³picos transversais em um
local central, em vez de repeti-los na descriÃ§Ã£o dos blocos de construÃ§Ã£o,
elementos de hardware ou processos de desenvolvimento envolvidos.

Certos conceitos podem dizer respeito a todos os elementos de um sistema,
outros podem ser relevantes apenas para alguns.

## 9. DecisÃµes de arquitetura

DecisÃµes de arquitetura importantes, caras, crÃ­ticas, de grande escala ou
arriscadas, incluindo justificativas.

### ConteÃºdo

DecisÃµes de arquitetura importantes, caras, de grande escala ou arriscadas,
incluindo justificativas. Com "decisÃµes", queremos dizer selecionar uma
alternativa com base em determinados critÃ©rios.

Use seu julgamento para decidir se uma decisÃ£o de arquitetura deve ser
documentada aqui nesta seÃ§Ã£o central ou se Ã© melhor documentÃ¡-la localmente
(por exemplo, dentro do modelo de caixa branca de um bloco de construÃ§Ã£o).
Evite textos redundantes. Consulte a seÃ§Ã£o 4, onde vocÃª jÃ¡ capturou as decisÃµes
mais importantes da sua arquitetura.

### MotivaÃ§Ã£o

As partes interessadas do seu sistema devem ser capazes de compreender e
rastrear suas decisÃµes.

### Forma

- ADR (architecture decision record) para cada decisÃ£o importante

- lista ou tabela, ordenada por importÃ¢ncia e consequÃªncias ou

- mais detalhado na forma de seÃ§Ãµes separadas por decisÃ£o

### Contexto adicional (sobre ADRs)

Pequenas partes de documentaÃ§Ã£o sÃ£o mais fÃ¡ceis de ler, criar e manter. Quando
se trata de decisÃµes de arquitetura, equipes de desenvolvimento frequentemente:

- sabem da decisÃ£o, pois ela estÃ¡ visÃ­vel, por exemplo, no cÃ³digo-fonte, mas

- perdem a motivaÃ§Ã£o por trÃ¡s dessa decisÃ£o (veja Nygard 2011)

Portanto, vocÃª deve documentar algumas decisÃµes importantes junto com sua
motivaÃ§Ã£o e raciocÃ­nio

### Nossa proposta sobre decisÃµes

Mantenha uma coleÃ§Ã£o de decisÃµes arquiteturalmente significativas, aquelas
decisÃµes que afetam a estrutura, caracterÃ­sticas de qualidade, dependÃªncias e
interfaces importantes (especialmente externas), ou tÃ©cnicas de construÃ§Ã£o
(agradecimentos a Michael Nygard por esta proposta).

## 10. Requisitos de qualidade

Requisitos de qualidade como cenÃ¡rios, com Ã¡rvore de qualidade para fornecer
uma visÃ£o geral de alto nÃ­vel. Os objetivos de qualidade mais importantes
devem ter sido descritos na seÃ§Ã£o 1.2. (objetivos de qualidade).

### ConteÃºdo

Esta seÃ§Ã£o contÃ©m todos os requisitos de qualidade relevantes.

Os mais importantes destes requisitos jÃ¡ foram descritos na seÃ§Ã£o 1.2.
(objetivos de qualidade), portanto eles devem ser apenas referenciados aqui.
Nesta seÃ§Ã£o 10, vocÃª tambÃ©m deve capturar requisitos de qualidade de menor
importÃ¢ncia, que nÃ£o criarÃ£o riscos altos se nÃ£o forem plenamente alcanÃ§ados
(mas podem ser desejÃ¡veis).

### MotivaÃ§Ã£o

Como requisitos de qualidade terÃ£o muita influÃªncia sobre decisÃµes de
arquitetura, vocÃª deve saber quais qualidades sÃ£o realmente importantes para
suas partes interessadas, de uma forma especÃ­fica e mensurÃ¡vel.

### InformaÃ§Ãµes adicionais

Veja o extenso modelo de qualidade Q42 em https://quality.arc42.org.

## 10.1 VisÃ£o geral dos requisitos de qualidade

### ConteÃºdo

Uma visÃ£o geral ou resumo dos requisitos de qualidade.

### MotivaÃ§Ã£o

Frequentemente encontramos dezenas (ou atÃ© centenas) de requisitos de qualidade
detalhados. Nesta seÃ§Ã£o de visÃ£o geral, vocÃª deve tentar resumir, por exemplo,
descrevendo categorias ou tÃ³picos (como sugerido pela ISO 25010:2023 ou Q42

Se estas descriÃ§Ãµes resumidas jÃ¡ forem precisas, especÃ­ficas o suficiente e
mensurÃ¡veis, vocÃª pode pular a seÃ§Ã£o 10.2.

### Forma

Use uma tabela simples em que cada linha contÃ©m uma categoria ou tÃ³pico e uma
breve descriÃ§Ã£o do requisito de qualidade. Alternativamente, vocÃª pode usar um
mapa mental para estruturar estes requisitos de qualidade.

Na literatura, a ideia de uma Ã¡rvore de atributos de qualidade tambÃ©m foi
descrita, colocando o termo genÃ©rico "qualidade" como raiz e usando um
refinamento em forma de Ã¡rvore do termo "qualidade". [Bass+21] introduziu o
termo "Quality Attribute Utility Tree" para esse propÃ³sito.

## 10.2 CenÃ¡rios de qualidade

### ConteÃºdo

CenÃ¡rios de qualidade tornam requisitos de qualidade concretos e permitem
decidir se eles sÃ£o cumpridos (no sentido de critÃ©rios de aceite). Certifique-se
de que seus cenÃ¡rios sejam especÃ­ficos e mensurÃ¡veis.

Dois tipos de cenÃ¡rios sÃ£o especialmente Ãºteis:

- CenÃ¡rios de uso (tambÃ©m chamados de cenÃ¡rios de aplicaÃ§Ã£o ou cenÃ¡rios de caso de uso)
  descrevem a reaÃ§Ã£o do sistema em tempo de execuÃ§Ã£o a um determinado estÃ­mulo. Isso tambÃ©m
  inclui cenÃ¡rios que descrevem a eficiÃªncia ou desempenho do sistema.
  Exemplo: O sistema reage Ã  solicitaÃ§Ã£o de um usuÃ¡rio em atÃ© um segundo.

- CenÃ¡rios de mudanÃ§a descrevem o efeito desejado de uma modificaÃ§Ã£o ou extensÃ£o do
  sistema ou de seu ambiente imediato. Exemplo: Funcionalidade adicional
  Ã© implementada ou requisitos de um atributo de qualidade mudam, e o esforÃ§o
  ou duraÃ§Ã£o da mudanÃ§a Ã© medido.

### Forma

InformaÃ§Ãµes tÃ­picas para cenÃ¡rios detalhados incluem o seguinte:

Na forma curta (favorecida no modelo Q42):

- Contexto/HistÃ³rico: Que tipo de sistema ou componente, qual Ã© o ambiente ou situaÃ§Ã£o?

- Fonte/EstÃ­mulo: Quem ou o que inicia ou dispara um comportamento, reaÃ§Ã£o ou aÃ§Ã£o.

- MÃ©trica/CritÃ©rios de aceite: Uma resposta incluindo uma medida ou mÃ©trica

A forma longa de cenÃ¡rios (favorecida pelo SEI e [Bass+21]) Ã© mais detalhada e inclui as seguintes informaÃ§Ãµes:

- ID do cenÃ¡rio: Um identificador Ãºnico para o cenÃ¡rio.

- Nome do cenÃ¡rio: Um nome curto e descritivo para o cenÃ¡rio.

- Fonte: A entidade (usuÃ¡rio, sistema ou evento) que inicia o cenÃ¡rio.

- EstÃ­mulo: O evento ou condiÃ§Ã£o disparadora que o sistema deve tratar.

- Ambiente: O contexto ou condiÃ§Ã£o operacional sob o qual o sistema experimenta o estÃ­mulo.

- Artefato: Os blocos de construÃ§Ã£o ou outros elementos do sistema afetados pelo estÃ­mulo.

- Resposta: O resultado ou comportamento que o sistema exibe em reaÃ§Ã£o ao estÃ­mulo.

- Medida de resposta: Os critÃ©rios ou mÃ©trica pelos quais a resposta do sistema Ã© avaliada.

### Veja tambÃ©m

Desde janeiro de 2023, arc42 fornece um modelo pragmÃ¡tico de qualidade que
propÃµe rotular requisitos de qualidade com hashtags ou labels como #flexible,
#efficient, #usable, #operable, #testable, #secure, #safe, #reliable.

## 11. Riscos e dÃ­vida tÃ©cnica

Riscos tÃ©cnicos conhecidos ou dÃ­vida tÃ©cnica. Que problemas potenciais existem
dentro ou ao redor do sistema? O que faz a equipe de desenvolvimento se sentir
desconfortÃ¡vel?

### ConteÃºdo

Uma lista de riscos tÃ©cnicos ou dÃ­vidas tÃ©cnicas identificados, ordenada por prioridade

### MotivaÃ§Ã£o

"Risk management is project management for grown-ups" (Tim Lister, Atlantic
Systems Guild.)

Este deve ser seu lema para detecÃ§Ã£o e avaliaÃ§Ã£o sistemÃ¡ticas de riscos e
dÃ­vidas tÃ©cnicas na arquitetura, que serÃ£o necessÃ¡rias para partes interessadas
de gestÃ£o (por exemplo, gerentes de projeto, product owners) como parte da
anÃ¡lise geral de riscos e do planejamento de mediÃ§Ã£o.

### Forma

Lista de riscos e/ou dÃ­vidas tÃ©cnicas, provavelmente incluindo medidas sugeridas
para minimizar, mitigar ou evitar riscos ou reduzir dÃ­vidas tÃ©cnicas.
