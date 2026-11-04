# 架构决策记录（ADR）

架构决策记录（ADR）是一份文件，记录一个重要个架构决策，连同伊个背景搭后果。

> [!IMPORTANT]
> 辣拿迭眼资源用于任何关键系统之前，请自家做足尽职审查。

目录：

- [啥是架构决策记录？](#啥是架构决策记录)
- [哪能开始用 ADR](#哪能开始用-adr)
- [哪能用工具开始用 ADR](#哪能用工具开始用-adr)
- [哪能用 git 开始用 ADR](#哪能用-git-开始用-adr)
- [架构决策记录个 Claude Code 技能](#架构决策记录个-claude-code-技能)
- [ADR 个文件命名规则](#adr-个文件命名规则)
- [写好 ADR 个建议](#写好-adr-个建议)
- [ADR 模板例子](#adr-模板例子)
- [ADR 团队合作建议](#adr-团队合作建议)
- [ADR 团队合作问题](#adr-团队合作问题)
- [ADR 个下一步概念](#adr-个下一步概念)
- [架构图搭视图搭观点](#架构图搭视图搭观点)
- [决策即代码个适应度函数](#决策即代码个适应度函数)
- [Pull request 个决策护栏](#pull-request-个决策护栏)
- [更多信息](#更多信息)

模板：

- [Jeff Tyree 搭 Art Akerman 个决策记录模板](模板/jeff-tyree搭art-akerman个决策记录模板/)
- [Michael Nygard 个决策记录模板](模板/michael-nygard个决策记录模板/)
- [EdgeX 个决策记录模板](模板/edgex个决策记录模板/)
- [arc42 个决策记录模板](模板/arc42个决策记录模板/)
- [亚历山大模式个决策记录模板](模板/亚历山大模式个决策记录模板/)
- [商业案例个决策记录模板](模板/商业案例个决策记录模板/)
- [MADR 项目个决策记录模板](模板/madr项目个决策记录模板/)
- [用 Planguage 个决策记录模板](模板/用planguage个决策记录模板/)
- [Paulo Merson 个决策记录模板](https://github.com/pmerson/ADR-template)
- [Olaf Zimmermann 个决策记录模板](https://medium.com/olzzio/y-statements-10eb07b5a177)
- [Gareth Morgan 个决策记录模板](模板/gareth-morgan个决策记录模板/)
- [GIG Cymru NHS Wales 个决策记录模板](模板/gig-cymru-nhs-wales个决策记录模板/)
- [Ignacio Larrañaga 个重要技术决策（ITD）决策记录模板](模板/重要技术决策itd个决策记录模板/)

例子：

- [CSS 框架](例子/css框架/)
- [环境变量配置](例子/环境变量配置/)
- [指标、监控、告警](例子/指标监控搭告警/)
- [Microsoft Azure DevOps](例子/microsoft-azure-devops/)
- [单一仓库还是多仓库](例子/单一仓库还是多仓库/)
- [编程语言](例子/编程语言/)
- [机密存储](例子/机密存储/)
- [时间戳格式](例子/时间戳格式/)
- [还有交关……](例子/)

## 啥是架构决策记录？

**架构决策记录**（architecture decision record，ADR）是一份文件，记下一个重要个架构决策，连同伊个背景搭后果。

**架构决策**（architecture decision，AD）是应对一个重大需求个软件设计选择。

**架构决策日志**（architecture decision log，ADL）是为某个特定项目（或者组织）创建搭维护个所有 ADR 个集合。

**架构重要需求**（architecturally-significant requirement，ASR）是对软件系统架构有可度量影响个需求。

迭眼侪属于**架构知识管理**（architecture knowledge management，AKM）个话题。

迭份文件个目标，是快速概览 ADR、哪能创建 ADR，还有到啥地方找更加多信息。

缩写：

  * **AD**：架构决策

  * **ADL**：架构决策日志

  * **ADR**：架构决策记录

  * **AKM**：架构知识管理

  * **ASR**：架构重要需求

## 哪能开始用 ADR

要开始用 ADR，搭侬个队友谈谈下底迭眼方面。

决策识别：

  * 迭个架构决策有多急、有多重要？

  * 是必须现在就做，还是可以等晓得更加多再做？

  * 个人搭集体个经验，加上公认个设计方法搭实践，侪可以帮助识别决策。

  * 理想个状况是维护一份决策待办清单，搭产品待办清单配合。

决策制定：

  * 有许多决策制定技术，有通用个，也有软件架构专用个，比方对话映射。

  * 群体决策是一个活跃个研究课题。

决策实施搭执行：

  * 架构决策用辣软件设计里，所以必须传达给出钱、开发搭运营系统个利益相关者，并且得到伊拉接受。

  * 体现架构个编码风格，搭关注架构问题搭决策个代码评审，是两种相关个实践。

  * 辣软件演进当中现代化一个软件系统个辰光，架构决策也要（重新）考虑。

决策分享（可选）：

  * 许多架构决策会辣勿同项目里向反复出现。

  * 所以，要是采用明确个知识管理策略，过去决策个经验，勿管好坏，侪可以是有价值个可复用资产。

决策文档：

  * 有许多记录决策个模板搭工具。

  * 参考敏捷社区，比方 M. Nygard 个 ADR。

  * 参考传统软件工程搭架构设计流程，比方 IBM UMF 搭 CapitalOne 个 Tyree 搭 Akerman 建议个表格布局。

更多信息：

  * 上头个步骤采用自维基百科个 [Architectural Decision](https://en.wikipedia.org/wiki/Architectural_decision) 词条

## 哪能用工具开始用 ADR

- [MySpec](https://myspec.dev) — 自动化个规格搭架构决策平台，拿项目章程、技术架构搭 ADR 整理成清爽个 Markdown，通过 MCP 提供。

侬可以随便哪能用工具开始用 ADR。

比方：

  * 要是侬欢喜用 Google Drive 搭在线编辑，可以建一个 Google Doc 或者 Google Sheet。

  * 要是侬欢喜用源代码版本控制，比方 git，可以每份 ADR 建一个文件。

  * 要是侬欢喜用项目计划工具，比方 Atlassian Jira，可以用工具里个计划跟踪器。

  * 要是侬欢喜用维基，比方 MediaWiki，可以建一个 ADR 维基。

## 哪能用 git 开始用 ADR

要是侬欢喜用 git 版本控制，下底是阿拉辣有源代码个典型软件项目里，欢喜个用 git 开始用 ADR 个办法。

建一个放 ADR 文件个目录：

```sh
$ mkdir adr
```

每份 ADR 建一个文本文件，比方 `choose-database.md`：

```sh
$ vi choose-database.md
```

辣 ADR 里向想写啥就写啥。可以参考迭个仓库里向个模板找灵感。

拿 ADR 提交到侬个 git 仓库。

## 架构决策记录个 Claude Code 技能

迭个仓库辣 [`skills/`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/) 下头带了两个 [Claude Code](https://claude.com/claude-code) 技能，让 AI 编程代理可以按迭个项目建议个办法写搭维护 ADR：

- [`architecture-decision-record-skill`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/architecture-decision-record-skill/) — 通用，适合任何项目里写 ADR 个人。帮助判断一个决策需勿需要 ADR，建立 `adr/` 或者 `decisions/` 目录，给文件起名，从内置个十一个骨架模板里挑模板，还有写扎实个背景／决策／后果章节。

- [`architecture-decision-record-maintainer-skill`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/architecture-decision-record-maintainer-skill/) — 专门给迭个仓库个维护者用。记录仓库个结构、README／语言版本对应约定，还有新增模板、例子或者工具链接个确切步骤。

要用技能，拿伊个文件夹复制到侬正辣工作个仓库根目录个 `.claude/skills/` 里（或者复制到 `~/.claude/skills/`，让每个项目侪好用），然后请 Claude Code 写或者评审 ADR。

## ADR 个文件命名规则

要是侬选用普通文本文件来写 ADR，可能想定一套自家个 ADR 文件命名规则。

阿拉欢喜用格式固定个文件命名规则。

例子：

  * choose-database.md

  * format-timestamps.md

  * manage-passwords.md

  * handle-exceptions.md

阿拉个文件命名规则：

  * 名字用一个现在时个祈使动词短语。迭能容易读，也搭阿拉个提交信息格式一致。

  * 名字用小写字母搭连字符（搭迭个仓库一样）。迭是可读性搭系统好用性之间个平衡。

  * 扩展名是 markdown。迭能便于排版。

## 写好 ADR 个建议

好 ADR 个特点：

* 理据：讲清爽做迭个架构决策个理由。可以包括背景（见下底）、各种可能选择个利弊、功能比较、成本／收益讨论等等。

* 具体：每份 ADR 只讲一个架构决策，勿要讲好几个。

* 时间戳：标明 ADR 里每一项是啥辰光写个。对会随辰光变化个方面特别重要，比方成本、日程、扩展等等。

* 勿可变：勿要改 ADR 里现成个信息。要么加新信息来修订 ADR，要么新建一份 ADR 来取代伊。

ADR 里好个“背景”章节个特点：

* 讲清爽侬组织个情况搭业务优先级。

* 包括根据团队个社交搭技能构成得出个理据搭考虑。

* 包括相关个利弊，用搭侬个需求搭目标一致个方式来描述。

ADR 里好个“后果”章节个特点：

* 讲清爽做了迭个决策之后会发生啥。可以包括影响、结果、产出、后续跟进等等。

* 包括任何后续 ADR 个信息。一份 ADR 引出更加多 ADR 是蛮常见个，比方一份 ADR 做了一个大个总体选择，伊又带来更加多较小决策个需要。

* 包括任何事后回顾个流程。团队一般辣一个月之后回顾每份 ADR，拿 ADR 里个信息搭实际发生个情况比一比，用来学习搭成长。

新 ADR 可以取代之前个 ADR：

* 做了一个取代或者推翻之前 ADR 个架构决策，就应该新建一份 ADR

## ADR 模板例子

阿拉辣网上收集个 ADR 模板例子：

- [Michael Nygard 个 ADR 模板](模板/michael-nygard个决策记录模板/)（简单又流行）

- [Jeff Tyree 搭 Art Akerman 个 ADR 模板](模板/jeff-tyree搭art-akerman个决策记录模板/)（更加精细）

- [亚历山大模式个 ADR 模板](模板/亚历山大模式个决策记录模板/)（简单，带背景细节）

- [商业案例个 ADR 模板](模板/商业案例个决策记录模板/)（更加偏 MBA 风格，包括成本、SWOT 搭更加多意见）

- [Markdown Any Decision Records（MADR）项目个 ADR 模板](模板/madr项目个决策记录模板/)（有简单版搭详细版；后者强调选项搭伊拉个利弊）

- [用 Planguage 个 ADR 模板](模板/用planguage个决策记录模板/)（更加偏质量保证）

- [Ignacio Larrañaga 个重要技术决策（ITD）模板](模板/重要技术决策itd个决策记录模板/)（精简、决策优先，针对管理层快速评审做了优化）

## ADR 团队合作建议

要是侬考虑搭团队一道用决策记录，下底是阿拉搭许多团队合作之后学着个建议。

侬有机会带领队友，办法是一道谈“为啥”，而弗是强制规定“做啥”。比方，决策记录是让团队想得更加聪明、沟通得更加好个办法；要是决策记录只是事后被迫补个文书工作，就呒没价值。

有眼团队欢喜“决策”迭个名字，胜过缩写“ADR”。有眼团队用“decisions”做目录名个辰光，就好像电灯泡亮起来，团队开始拿更加多信息放进迭个目录，比方供应商决策、计划决策、日程决策等等。迭眼各种信息侪可以用同一个模板。阿拉个假设是，人学得最快个是词（“决策”），而弗是缩写（“ADR”）；拿“记录”迭个词拿掉之后，人更加愿意写进行中个文档；还有眼开发者搭经理勿欢喜“架构”迭个词。

理论上，勿可变是理想个。实践中，可变对阿拉个团队更加管用。阿拉拿新信息插进现成个 ADR，加上日期戳，再加一句讲明迭个信息是决策之后才来个。迭种办法会得到一份阿拉大家侪好更新个“活文档”。典型个更新，是因为新队友、新产品、阿拉用下来个真实结果带来了信息，或者事后第三方有变化，比方供应商能力、价格方案、许可协议等等。

## ADR 团队合作问题

### 啥人可以建 ADR？

考虑个方面，比方特定个人、特定角色、特定团队、特定部门；也考虑有勿有人、角色、团队或者部门可以委托建 ADR，也就是伊拉提出要求，由别人来写。

回答例子：阿拉组织里向任何看过架构决策记录 README 页面个人，侪可以提议 ADR，也就是可以开始写，再搭团队分享。

### 啥情况值得提 ADR？

考虑个方面，比方侬组织个团队工作方式、软件系统结构、跨团队协调、长期可维护性、外部接口、想让啥人受益等等。

回答例子：阿拉想让以后个开发者理解阿拉所做事体个“为啥”个辰光，就要建 ADR。

### 啥情况勿值得提 ADR？

考虑个方面，比方决策搭架构无关，或者极小（比方风险最小、自成一体或者只涉及一个开发者），或者别处已经完全覆盖（比方标准、政策或者文档），或者是暂时个（比方变通办法、概念验证或者实验）。

回答例子：决策个范围、辰光、风险搭成本侪有限，或者别处已经覆盖，阿拉就跳过 ADR。

### ADR 个生命周期是啥？

考虑个方面，比方创建流程、调研流程、决策流程、实施流程搭退役流程。考虑哪能随辰光跟踪 ADR 个生命周期，比方哪能拿 ADR 从一个状态移到下一个状态，还有哪能拿迭个告诉利益相关者。

回答例子：阿拉想让 ADR 有五个生命周期阶段：启动 → 调研 → 评估 → 实施 → 维护 → 退役。

### ADR 生命周期各步骤个标准是啥？

考虑个方面，比方 ADR 个验收标准，也就是哪能晓得伊已经好到可以从一个生命周期步骤进到下一个？问题有勿有讲清爽？备选方案有勿有考虑过？取舍有勿有足够了解，也有勿有记录下来？
所有相关背景侪有哉伐？所有相关个利益相关者侪参与哉伐？所有反馈侪吸收进去哉伐？

回答例子：当活跃团队 1）完成调研，2）完成评估，3）拿 ADR 提案发布给利益相关者，征求意见，期限一个礼拜，4）所有利益相关者个意见侪已经吸收搭处理，阿拉就想让利益相关者对 ADR 投票。

### 啥角色搭职责搭 ADR 有关？

考虑个角色，比方提议者、调研者、评估者、评审者、批准者、维护者等等。考虑个职责，比方搭利益相关者沟通、确保期望得到满足、辣网站或者内网分享，还有定期回顾工作，特别是相关变化发生个辰光。

回答例子：阿拉想让每份 ADR 始终有一个主要联系人、一个次要联系人搭一个负责团队；伊拉负责沟通、发布、维护、至少一年一次个定期回顾，还有必要辰光个最终退役。

### 治理搭 ADR 哪能互动？

考虑个方面，比方侬组织个工作方式、任何特殊个合规需要（比方法律方面或者人力资源方面）、想哪能处理共识、冲突搭升级。对 ADR 来讲，有勿有某眼领域、人或者团队可以比其他人有更加大个影响力，比方可以批准、投票或者否决？

回答例子：ADR 个治理按迭个优先顺序：CEO、CTO、CLO、实施 ADR 个团队、团队里最了解迭个架构决策个专家。除非 ADR 里有讲明，别人呒没治理权。

### 啥原则搭 ADR 有关？

考虑个方面，比方侬组织个工作方式，包括快速行动还是慢慢来、决策共识还是决策冲突、风险偏好还是安全偏好、公开讨论还是私下讨论等等。

回答例子：阿拉用个领导力原则是行动优先、有异议但执行、对容易撤销又容易隔离个决策，70% 个估计就够好哉，还有公开个工作方式，但阿拉组织保密协议里讲明个机密信息除外。

## ADR 个下一步概念

[Arc42](https://arc42.org/) 用务实个办法回答两个问题，并且可以按侬个具体需要调整。侬应该记录／传达关于架构个啥内容？侬应该哪能记录／传达？Arc42 包括架构决策记录，还有关于目标、限制、背景、质量、风险等等个指南。

[C4 模型](https://c4model.com/)是一种容易学、对开发者友好个软件架构绘图办法。C4 是一套层级式个图，涵盖背景、容器、组件、代码，另外还有支持系统全景、动态搭部署个辅助图。

## 架构图搭视图搭观点

架构图叫做“架构视图”。

“架构视图”是“架构观点”个一个实例。

“架构观点”有特定个受众，并且考虑到特定个关注点。

架构观点例子、视图例子搭图表例子：

- 业务能力

- 高层业务流程

- [价值流](https://en.wikipedia.org/wiki/Value_stream)

- 对应到应用组件个软件功能

- [C4 模型](https://en.wikipedia.org/wiki/C4_model)背景图（目标状态／现状）

- [C4 模型](https://en.wikipedia.org/wiki/C4_model)容器图（目标状态／现状）

- [实体关系图](https://en.wikipedia.org/w/index.php?title=Entity_relationship_diagram)（ERD），用来拿数据实体对应到应用组件

- [序列图](https://en.wikipedia.org/wiki/Sequence_diagram)，用来描述系统内部搭集成方面个功能流程

- [业务流程模型与标记法](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation)（BPMN）图，用来描述跨应用组件个数据流

- [业务流程模型与标记法](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation)（BPMN）图，用来描述业务流程／用户场景

- [身份与访问管理](https://en.wikipedia.org/wiki/Identity_and_access_management)（IAM）图

- [基于角色个访问控制](https://en.wikipedia.org/wiki/Role-based_access_control)（RBAC）图，列出每个应用组件个角色

- [基于属性个访问控制](https://en.wikipedia.org/wiki/Attribute-based_access_control)（ABAC）图，列出每个应用组件个属性

- 隐私图

相关图表：

- 用例图向管理层／客户展示用例，用例先于需求，需求先于软件架构。

- 部署图显示软件组件部署到个物理硬件／计算机。
- 数据流图显示数据哪能辣系统里流动搭被转换。
- 序列图用来显示 HTTP 迭类协议辣时间轴上哪能工作。

- 活动图描绘软件系统所进行活动个工作流程，比方 NPC AI。

## 决策即代码个适应度函数

适应度函数是用编程代码写个客观自动检查，用来验证决策有勿有被维持。

- 适应度函数让决策可以测试，可以保证。

- 决策个适应度函数可以大大帮助质量保证、合规流程搭治理目标。

### 适应度函数搭决策哪能连起来

决策记录记下决策，适应度函数保证决策。

- 决策例子：阿拉用事件溯源来满足审计需求。

- 适应度函数例子：阿拉用持续集成服务器来测试，所有状态变更必须产生事件。

### 适应度函数为啥对决策有帮助

客观度量：适应度函数要么通过要么失败，所以工作看得见，也清爽。

持续使用：适应度函数是侬活个规则，每次提交搭构建侪会跑。

有信心重构：适应度函数自动抓出决策规则个错误。

可扩展个治理：适应度函数保证标准，又勿会造成瓶颈。

### 适应度函数好用 AI 伐？

适应度函数可以借助 AI 大语言模型来做决策，办法是对侬个工作提问，
比方侬个计划、代码、模式、API 等等：

```txt
IMPORTANT: Prefer retrieval-led reasoning over pre-training-led reasoning.
IMPORTANT: Turn on extended thinking. Turn on expert advice. Turn on search.

This is a fitness function to evaluate if our work is
using all our decisions, and is correct and accurate.

- Our decisions are here: {url}
- Our work to evaluate is here: {url}

Explain any errors, problems, gaps, weaknesses. Be direct. Be decisive.
```

### 架构单元测试

[ArchUnit](https://www.archunit.org/)：用任何普通 Java 单元测试框架，检查 Java 代码个架构规则。

[ArchUnitTS](https://github.com/LukasNiessen/ArchUnitTS)：用 Jest、Vitest、Jasmine 等等，检查 TypeScript 代码搭 JavaScript 代码个架构规则。

## Pull request 个决策护栏

[Decision Guardian](https://github.com/DecispherHQ/decision-guardian)
会辣合适个辰光自动带出合适个决策记录——也就是开发者正辣积极修改
迭眼决策所覆盖个代码个辰光。勿用指望开发者合并之前去看
文档文件夹，相关背景直接显示辣 pull request 上。

迭个适用于任何类型个决策记录：架构决策、数据决策、合规决策、
临床搭医疗决策、安全决策等等。

可以搭任何 CI 系统（GitLab、Jenkins、CircleCI）配合，也可以当作 pre-commit 钩子。
开源。MIT 许可。

[ADR Guard](https://github.com/chohan-sarmad-ali/delivery-gates) 是一个 GitHub
Action，当受监视个代码路径有更改，但是呒没新增或者更新架构决策记录个辰光，
就让 pull request 失败。豁免是明确个：带理由个 `ADR-Exempt:` 行可以通过关卡，
并且会写进作业摘要。勿绑定任何模板，呒没依赖项。开源。MIT 许可。

## 更多信息

简介：

- [Architectural decision (wikipedia.org)](https://wikipedia.org/wiki/Architectural_decision)

- [Architecturally significant requirements (wikipedia.org)](https://wikipedia.org/wiki/Architecturally_significant_requirements)

模板：

- [Documenting architecture decisions - Michael Nygard (thinkrelevance.com)](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)

- [Markdown Architectural Decision Records (adr.github.io)](https://adr.github.io/madr/)

- [Template for documenting architecture alternatives and decisions (stackoverflow.com)](http://stackoverflow.com/questions/7104735/template-for-documenting-architecture-alternatives-and-decisions)

深入阅读：

- [ADMentor XML project (github.com)](https://github.com/IFS-HSR/ADMentor)

- [Architectural Decision Guidance across Projects: Problem Space Modeling, Decision Backlog Management and Cloud Computing Knowledge (ifs.hsr.ch)](https://www.ifs.hsr.ch/fileadmin/user_upload/customers/ifs.hsr.ch/Home/projekte/ADMentor-WICSA2015ubmissionv11nc.pdf)

- [The Decision View's Role in Software Architecture Practice (computer.org)](https://www.computer.org/csdl/mags/so/2009/02/mso2009020036-abs.html)

- [Documenting Software Architectures: Views and Beyond (resources.sei.cmu.edu)](http://resources.sei.cmu.edu/library/asset-view.cfm?assetID=30386)

- [Architecture Decisions: Demystifying Architecture (utdallas.edu)](https://www.utdallas.edu/~chung/SA/zz-Impreso-architecture_decisions-tyree-05.pdf)

- [ThoughtWorks Technology Radar: Lightweight Architecture Decision Records (thoughtworks.com)](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)

- [A Skeptic’s Guide to Software Architecture Decisions (infoq.com)](https://www.infoq.com/articles/architecture-skeptics-guide/)

- [Architectural Decisions — The Making Of](https://ozimmer.ch/practices/2020/04/27/ArchitectureDecisionMaking.html)

- [Architectural Retrospectives: the Key to Getting Better at Architecting](https://www.infoq.com/articles/architectural-retrospectives/)

- [Software Architecture Monday with Mark Richards](https://developertoarchitect.com/lessons/) — 免费个每月软件架构课

- [Solution Architecture Decisions - By Gareth Morgan](https://www.linkedin.com/pulse/solution-architecture-decisions-gareth-morgan-0r5xe/)

- ["Keep the Why: Code Becomes Legacy When Nobody Remembers Why"](https://blog.technopathy.club/keep-the-why-code-becomes-legacy-when-nobody-remembers-why)

工具：

- [Command-line tools for working with Architecture Decision Records](https://github.com/npryce/adr-tools)

- [Command line tools with python - by Victor Sluiter](https://bitbucket.org/tinkerer_/adr-tools-python/src/master/)

- [Architectural Design Decision Support Framework (ADvISE)](https://swa.univie.ac.at/Software_Architecture/research-projects/architectural-design-decision-support-framework-advise/)

- [Decision Guardian](https://github.com/DecispherHQ/decision-guardian)

- [Mneme HQ - ADR enforcement for AI coding agents](https://github.com/TheoV823/mneme)

- [Keep the Why - a repo-native convention and agent skill that continuously captures, or retrospectively recovers, the reasoning behind a codebase](https://github.com/oliver-zehentleitner/keep-the-why)

- [ADR Guard - GitHub Action that fails a pull request changing watched code without an architecture decision record](https://github.com/chohan-sarmad-ali/delivery-gates)

- [kgai - append-only decision log for AI coding agents, a machine-readable companion to ADR files](https://github.com/kgaidev/kgai)

特定公司个指南：

- [Amazon: AWS Prescriptive Guidance: ADR Process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)

- [GitHub: ADR GitHub organization](https://adr.github.io/)

- [RedHat: Why you should use ADRs](https://www.redhat.com/architect/architecture-decision-records)

例子：

- [Repository of Architecture Decision Records made for the Arachne Framework](https://github.com/arachne-framework/architecture)

视频：

- [An introduction to arc42 with Savvas Kleanthous](https://www.youtube.com/watch?v=V5clR8c6D7o)

- [The C4 model for visualising software architecture - by Simon Brown](https://www.youtube.com/watch?v=KvoBrUd1-5E)

Podcast：

- [Software Architecture Bookclub Podcast](https://www.developertoarchitect.com/bookclub-podcast.html)

书籍：

- [Software Architecture Metrics: Case Studies to Improve the Quality of Your Architecture - by Christian Ciceri, Dave Farley, Neal Ford, Andrew Harmel-Law, Michael Keeling and Carola Lilienthal](https://www.amazon.com/Software-Architecture-Metrics-Christian-Ciceri-ebook/dp/B0B1NZ8Z5V)

- [Software Systems Architecture: Working With Stakeholders Using Viewpoints and Perspectives - by Nick Rozanski and Eoin Woods](https://www.amazon.com/Software-Systems-Architecture-Stakeholders-Perspectives/dp/032171833X)

- [Software Architecture in Practice (SEI Series in Software Engineering)](https://www.amazon.com/Software-Architecture-Practice-SEI-Engineering-ebook/dp/B094CPJ96B)

- [Documenting Software Architectures: Views and Beyond (SEI Series in Software Engineering)](https://www.amazon.com/Documenting-Software-Architectures-Beyond-Engineering-ebook/dp/B0046XS3RO)

- [The Software Architect Elevator: Redefining the Architect's Role in the Digital Enterprise](https://www.amazon.com/Software-Architect-Elevator-Redefining-Architects-ebook/dp/B086WQ9XL1)

- [Fundamentals of Software Architecture: An Engineering Approach - by Mark Richards and Neal Ford](https://www.amazon.com/Fundamentals-Software-Architecture-Engineering-Approach-ebook/dp/B0849MPK73)

- [Building Evolutionary Architectures - by Neal Ford, Rebecca Parsons, Patrick Kua, Pramod Sadalage](https://www.amazon.com/Building-Evolutionary-Architectures-Neal-Ford-ebook/dp/B0BN4T1P27?crid=37FA31IFLAS0Z)

- [Foundations of Decision Analysis by Ronald Howard and Ali Abbas](https://www.amazon.com/Foundations-Decision-Analysis-Ronald-Howard-ebook/dp/B00SZECJTI?crid=14BK5SDP76UN6)

- [Head First Software Architecture - by Raju Gandhi, Neal Ford and Mark Richards](https://www.amazon.com/Head-First-Software-Architecture-Architectural-ebook/dp/B0CW1JMNF2)

- [Communication Patterns: A Guide for Developers and Architects - by Jacqui Read](https://www.amazon.com/Communication-Patterns-Guide-Developers-Architects/dp/1098140540)

另请参阅：

- REMAP (Representation and Maintenance of Process Knowledge)

- DRL (Decision Representation Language)

- IBIS (Issue-Based Information System)

- QOC (Questions, Options, and Criteria)

- IBM’s e-Business Reference Architecture Framework

- [Decision Reasoning Format (DRF)](https://github.com/reasoning-formats/reasoning-formats) — 搭供应商无关、机器可读个 YAML/JSON 格式，用来表示决策，并且明确列出推理、假设、认知状态搭取舍。通过给决策文档加上结构化、可验证个推理，补充 ADR。
