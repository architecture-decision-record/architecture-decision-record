# Modelo de registro de decisÃ£o por Jeff Tyree e Art Akerman

Este Ã© o modelo de descriÃ§Ã£o de decisÃ£o de arquitetura publicado em ["Architecture Decisions: Demystifying Architecture" por Jeff Tyree e Art Akerman, Capital One Financial](https://www.utdallas.edu/~chung/SA/zz-Impreso-architecture_decisions-tyree-05.pdf).

* **QuestÃ£o**: Descreva a questÃ£o de design de arquitetura que vocÃª estÃ¡ abordando, sem deixar dÃºvidas sobre por que vocÃª estÃ¡ abordando esta questÃ£o agora. Seguindo uma abordagem minimalista, aborde e documente apenas as questÃµes que precisam ser tratadas em vÃ¡rios pontos do ciclo de vida.

* **DecisÃ£o**: Declare claramente a direÃ§Ã£o da arquitetura, ou seja, a posiÃ§Ã£o que vocÃª selecionou.

* **Status**: O status da decisÃ£o, como pendente, decidida ou aprovada.

* **Grupo**: VocÃª pode usar um agrupamento simples, como integraÃ§Ã£o, apresentaÃ§Ã£o, dados e assim por diante, para ajudar a organizar o conjunto de decisÃµes. VocÃª tambÃ©m poderia usar uma ontologia de arquitetura mais sofisticada, como a de John Kyaruzi e Jan van Katwijk, que inclui categorias mais abstratas, como evento, calendÃ¡rio e localizaÃ§Ã£o. Por exemplo, usando essa ontologia, vocÃª agruparia sob evento as decisÃµes que lidam com ocorrÃªncias em que o sistema exige informaÃ§Ãµes.

* **Premissas**: Descreva claramente as premissas subjacentes no ambiente em que vocÃª estÃ¡ tomando a decisÃ£o: custo, cronograma, tecnologia e assim por diante. Observe que restriÃ§Ãµes ambientais (como padrÃµes de tecnologia aceitos, arquitetura corporativa, padrÃµes comumente empregados e assim por diante) podem limitar as alternativas que vocÃª considera.

* **RestriÃ§Ãµes**: Capture quaisquer restriÃ§Ãµes adicionais ao ambiente que a alternativa escolhida (a decisÃ£o) possa impor.

* **PosiÃ§Ãµes**: Liste as posiÃ§Ãµes (opÃ§Ãµes ou alternativas viÃ¡veis) que vocÃª considerou. Elas frequentemente exigem explicaÃ§Ãµes longas, Ã s vezes atÃ© modelos e diagramas. Esta nÃ£o Ã© uma lista exaustiva. No entanto, vocÃª nÃ£o quer ouvir a pergunta "VocÃª pensou em...?" durante uma revisÃ£o final; isso leva Ã  perda de credibilidade e ao questionamento de outras decisÃµes de arquitetura. Esta seÃ§Ã£o tambÃ©m ajuda a assegurar que vocÃª ouviu as opiniÃµes de outras pessoas; declarar explicitamente outras opiniÃµes ajuda a envolver seus defensores na sua decisÃ£o.

* **Argumento**: Esboce por que vocÃª selecionou uma posiÃ§Ã£o, incluindo itens como custo de implementaÃ§Ã£o, custo total de propriedade, time to market e disponibilidade dos recursos de desenvolvimento necessÃ¡rios. Isto provavelmente Ã© tÃ£o importante quanto a decisÃ£o em si.

* **ImplicaÃ§Ãµes**: Uma decisÃ£o vem com muitas implicaÃ§Ãµes, como denota o metamodelo REMAP. Por exemplo, uma decisÃ£o pode introduzir a necessidade de tomar outras decisÃµes, criar novos requisitos ou modificar requisitos existentes; impor restriÃ§Ãµes adicionais ao ambiente; exigir renegociaÃ§Ã£o de escopo ou cronograma com clientes; ou exigir treinamento adicional da equipe. Entender e declarar claramente as implicaÃ§Ãµes da sua decisÃ£o pode ser muito eficaz para obter adesÃ£o e criar um roadmap para a execuÃ§Ã£o da arquitetura.

* **DecisÃµes relacionadas**: Ã‰ Ã³bvio que muitas decisÃµes sÃ£o relacionadas; vocÃª pode listÃ¡-las aqui. No entanto, constatamos que, na prÃ¡tica, uma matriz de rastreabilidade, Ã¡rvores de decisÃ£o ou metamodelos sÃ£o mais Ãºteis. Metamodelos sÃ£o Ãºteis para mostrar relacionamentos complexos de forma diagramÃ¡tica (como modelos Rose).

* **Requisitos relacionados**: DecisÃµes devem ser orientadas pelo negÃ³cio. Para mostrar responsabilizaÃ§Ã£o, mapeie explicitamente suas decisÃµes aos objetivos ou requisitos. VocÃª pode enumerar estes requisitos relacionados aqui, mas constatamos que Ã© mais conveniente referenciar uma matriz de rastreabilidade. VocÃª pode avaliar a contribuiÃ§Ã£o de cada decisÃ£o de arquitetura para atender a cada requisito e, em seguida, avaliar quÃ£o bem o requisito Ã© atendido em todas as decisÃµes. Se uma decisÃ£o nÃ£o contribui para atender a um requisito, nÃ£o tome essa decisÃ£o.

* **Artefatos relacionados**: Liste os documentos relacionados de arquitetura, design ou escopo que esta decisÃ£o impacta.

* **PrincÃ­pios relacionados**: Se a empresa tiver um conjunto acordado de princÃ­pios, assegure-se de que a decisÃ£o seja consistente com um ou mais deles. Isso ajuda a assegurar alinhamento entre domÃ­nios ou sistemas.

* **Notas**: Como o processo de tomada de decisÃ£o pode levar semanas, constatamos que Ã© Ãºtil capturar notas e questÃµes que a equipe discute durante o processo de socializaÃ§Ã£o.
