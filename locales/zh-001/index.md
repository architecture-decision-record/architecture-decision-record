# 架构决策记录(ADR)

架构决策记录(ADR)是一份文档,记录一项重要的架构决策及其背景和后果。

> [!IMPORTANT]
> 在将这些资源用于任何关键系统之前,请自行做好尽职调查。

目录:

- [什么是架构决策记录?](#什么是架构决策记录)
- [如何开始使用 ADR](#如何开始使用-adr)
- [如何借助工具开始使用 ADR](#如何借助工具开始使用-adr)
- [如何通过 git 开始使用 ADR](#如何通过-git-开始使用-adr)
- [适用于 ADR 的 Claude Code 技能](#适用于-adr-的-claude-code-技能)
- [文件命名约定](#文件命名约定)
- [撰写优质 ADR 的建议](#撰写优质-adr-的建议)
- [ADR 示例模板](#adr-示例模板)
- [ADR 团队协作建议](#adr-团队协作建议)
- [ADR 的团队协作问题](#adr-的团队协作问题)
- [ADR 的下一步概念](#adr-的下一步概念)
- [架构图、视图与视角](#架构图视图与视角)
- [将决策作为代码的适应度函数](#将决策作为代码的适应度函数)
- [拉取请求的决策护栏](#拉取请求的决策护栏)
- [更多信息](#更多信息)

模板:

- [Jeff Tyree 和 Art Akerman 的决策记录模板](模板/jeff-tyree和art-akerman的决策记录模板/)
- [Michael Nygard 的决策记录模板](模板/michael-nygard的决策记录模板/)
- [EdgeX 的决策记录模板](模板/edgex的决策记录模板/)
- [arc42 的决策记录模板](模板/arc42的决策记录模板/)
- [亚历山大模式的决策记录模板](模板/亚历山大模式的决策记录模板/)
- [商业论证的决策记录模板](模板/商业论证的决策记录模板/)
- [MADR 项目的决策记录模板](模板/madr项目的决策记录模板/)
- [使用 Planguage 的决策记录模板](模板/使用planguage的决策记录模板/)
- [Paulo Merson 的决策记录模板](https://github.com/pmerson/ADR-template)
- [Olaf Zimmermann 的决策记录模板](https://medium.com/olzzio/y-statements-10eb07b5a177)
- [Gareth Morgan 的决策记录模板](模板/gareth-morgan的决策记录模板/)
- [GIG Cymru NHS Wales 的决策记录模板](模板/gig-cymru-nhs-wales的决策记录模板/)
- [Ignacio Larrañaga 的重要技术决策(ITD)决策记录模板](模板/重要技术决策itd的决策记录模板/)

示例:

- [CSS 框架](示例/css框架/)
- [环境变量配置](示例/环境变量配置/)
- [指标、监控、告警](示例/指标监控告警/)
- [Microsoft Azure DevOps](示例/microsoft-azure-devops/)
- [单体仓库与多仓库](示例/单体仓库与多仓库/)
- [编程语言](示例/编程语言/)
- [密钥存储](示例/密钥存储/)
- [时间戳格式](示例/时间戳格式/)
- [更多...](示例/)

## 什么是架构决策记录?

**架构决策记录**(architecture decision record,ADR)是一份文档,用于记录一项重要的架构决策及其背景和后果。

**架构决策**(architecture decision,AD)是针对某项重大需求所做的软件设计选择。

**架构决策日志**(architecture decision log,ADL)是为某个特定项目(或组织)创建并维护的所有 ADR 的集合。

**架构显著需求**(architecturally-significant requirement,ASR)是对软件系统架构有可衡量影响的需求。

以上这些都属于**架构知识管理**(architecture knowledge management,AKM)的范畴。

本文档的目标是快速概述 ADR、如何创建 ADR,以及在哪里可以找到更多信息。

缩写:

  * **AD**:架构决策

  * **ADL**:架构决策日志

  * **ADR**:架构决策记录

  * **AKM**:架构知识管理

  * **ASR**:架构显著需求

## 如何开始使用 ADR

要开始使用 ADR,请与你的队友讨论以下几个方面。

决策识别:

  * 这项 AD 有多紧急、多重要?

  * 必须现在做出决定,还是可以等到了解更多信息之后?

  * 个人和集体的经验,以及公认的设计方法与实践,都有助于识别决策。

  * 理想情况下,维护一份与产品待办事项相互补充的决策待办清单。

决策制定:

  * 存在许多决策制定技术,既有通用的,也有专门针对软件架构的,例如对话映射(dialogue mapping)。

  * 群体决策是一个活跃的研究课题。

决策实施与执行:

  * AD 用于软件设计;因此必须将其传达给出资、开发和运营该系统的利益相关者,并获得他们的接受。

  * 架构上一目了然的编码风格,以及关注架构问题和决策的代码评审,是两项相关的实践。

  * 在软件演进过程中对软件系统进行现代化改造时,也必须(重新)考虑 AD。

决策共享(可选):

  * 许多 AD 会在不同项目中反复出现。

  * 因此,在采用明确的知识管理策略时,过往决策的经验(无论好坏)都可以成为宝贵的可复用资产。

决策文档化:

  * 存在许多用于记录决策的模板和工具。

  * 参见敏捷社区,例如 M. Nygard 的 ADR。

  * 参见传统的软件工程和架构设计流程,例如 IBM UMF 以及 CapitalOne 的 Tyree 和 Akerman 所建议的表格布局。

更多信息:

  * 以上步骤取自维基百科的[架构决策](https://en.wikipedia.org/wiki/Architectural_decision)词条

## 如何借助工具开始使用 ADR

你可以按任何自己喜欢的方式借助工具开始使用 ADR。

例如:

  * 如果你喜欢使用 Google 云端硬盘和在线编辑,那么可以创建一个 Google 文档或 Google 表格。

  * 如果你喜欢使用 git 等源代码版本控制,那么可以为每个 ADR 创建一个文件。

  * 如果你喜欢使用 Atlassian Jira 等项目规划工具,那么可以使用该工具的规划跟踪器。

  * 如果你喜欢使用 MediaWiki 等维基,那么可以创建一个 ADR 维基。

## 如何通过 git 开始使用 ADR

如果你喜欢使用 git 版本控制,那么对于一个带有源代码的典型软件项目,下面是我们喜欢的通过 git 开始使用 ADR 的方式。

为 ADR 文件创建一个目录:

```sh
$ mkdir adr
```

为每个 ADR 创建一个文本文件,例如 `database.txt`:

```sh
$ vi database.txt
```

在 ADR 中写下你想写的任何内容。可以参考本仓库中的模板获取灵感。

将 ADR 提交到你的 git 仓库。

## 适用于 ADR 的 Claude Code 技能

本仓库在 [`skills/`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/) 下提供了两个 [Claude Code](https://claude.com/claude-code) 技能(skill),让 AI 编程智能体能够按本项目推荐的方式编写和维护 ADR:

- [`architecture-decision-record-skill`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/architecture-decision-record-skill/) — 通用技能,适合在任何项目中编写 ADR 的人。帮助判断一项决策是否需要 ADR,建立 `adr/` 或 `decisions/` 目录,为文件命名,从随附的十一个骨架中选择模板,并写出扎实的背景/决策/后果各节。

- [`architecture-decision-record-maintainer-skill`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/architecture-decision-record-maintainer-skill/) — 专为本仓库的维护者设计。记录仓库的结构、README 与 locales 的对应约定,以及添加新模板、示例或工具链接的确切步骤。

要使用某项技能,请将其文件夹复制到你正在工作的仓库根目录下的 `.claude/skills/`(或复制到 `~/.claude/skills/` 以便在每个项目中使用),然后请 Claude Code 编写或审阅 ADR。

## 文件命名约定

如果你选择使用常见的文本文件来创建 ADR,那么你可能需要制定自己的 ADR 文件命名约定。

我们倾向于使用具有特定格式的文件命名约定。

示例:

  * choose-database.md

  * format-timestamps.md

  * manage-passwords.md

  * handle-exceptions.md

我们的文件命名约定:

  * 名称使用一般现在时的祈使动词短语。这有助于提高可读性,并与我们的提交信息格式保持一致。

  * 名称使用小写字母和连字符(与本仓库相同)。这是在可读性和系统可用性之间取得的平衡。

  * 扩展名为 markdown。这便于简单地设置格式。

## 撰写优质 ADR 的建议

优质 ADR 的特征:

* 理由(Rationale):解释做出该项 AD 的原因。可以包括背景(见下文)、各种潜在选择的利弊、功能对比、成本效益讨论等。

* 具体(Specific):每个 ADR 应只针对一项 AD,而不是多项 AD。

* 时间戳(Timestamps):标明 ADR 中每一项内容的撰写时间。这对于可能随时间变化的方面尤为重要,例如成本、进度、扩展规模等。

* 不可变(Immutable):不要修改 ADR 中已有的信息。相反,应通过添加新信息来修订该 ADR,或通过创建新的 ADR 来取代它。

ADR 中优质“背景”(Context)部分的特征:

* 说明你所在组织的处境和业务优先事项。

* 包含基于团队的社会构成和技能构成所做的理由与考量。

* 包含相关的利弊,并用符合你的需求和目标的方式加以描述。

ADR 中优质“后果”(Consequences)部分的特征:

* 解释做出该决策之后会产生什么。这可以包括影响、结果、产出、后续跟进等。

* 包含任何后续 ADR 的信息。一个 ADR 引发对更多 ADR 的需求相当常见,例如某个 ADR 做出了一项重大的总体选择,进而产生了更多较小决策的需求。

* 包含任何事后复盘流程。团队通常会在每个 ADR 做出一个月后对其进行评审,将 ADR 中的信息与实际发生的情况加以比较,以便学习和成长。

新的 ADR 可以取代以前的 ADR:

* 当做出的某项 AD 替代或否定了以前的某个 ADR 时,应创建一个新的 ADR

## ADR 示例模板

我们在网上收集的 ADR 示例模板:

- [Michael Nygard 的 ADR 模板](模板/michael-nygard的决策记录模板/) (简单且流行)

- [Jeff Tyree 和 Art Akerman 的 ADR 模板](模板/jeff-tyree和art-akerman的决策记录模板/) (更为复杂)

- [Alexandrian 模式的 ADR 模板](模板/亚历山大模式的决策记录模板/) (简单,带有背景细节)

- [业务案例的 ADR 模板](模板/商业论证的决策记录模板/) (更偏重 MBA,包含成本、SWOT 和更多观点)

- [Markdown Any Decision Records(MADR)项目的 ADR 模板](模板/madr项目的决策记录模板/) (既有简单版也有详尽版;后者强调各选项及其优缺点)

- [使用 Planguage 的 ADR 模板](模板/使用planguage的决策记录模板/) (更偏重质量保证)

- [Ignacio Larrañaga 的重要技术决策(ITD)模板](模板/重要技术决策itd的决策记录模板/) (精简且决策优先,为管理层快速审阅而优化)

## ADR 团队协作建议

如果你正在考虑让团队使用决策记录,下面是我们在与许多团队合作中积累的一些建议。

你有机会引领你的队友,方法是共同讨论“为什么”,而不是强制规定“做什么”。例如,决策记录是团队更聪明地思考、更好地沟通的一种方式;如果它只是事后被迫完成的文书工作,决策记录就没有价值。

有些团队更喜欢“决策”(decisions)这个名称,而不是缩写“ADR”。当一些团队使用“decisions”作为目录名时,就像灯泡突然亮了,团队开始往该目录中放入更多信息,例如供应商决策、规划决策、排期决策等。所有这些类型的信息都可以使用同一个模板。我们推测,相比缩写(“ADR”),人们用完整的词(“决策”)学得更快;去掉“记录”(record)这个词之后,人们更有动力撰写进行中的文档;此外,一些开发人员和一些管理者不喜欢“架构”这个词。

理论上,不可变性是理想的。实践中,可变性对我们的团队效果更好。我们会把新信息插入现有的 ADR,并附上日期戳,以及一条说明该信息是在决策之后才获得的备注。这种做法会形成一份我们所有人都能更新的“活文档”。典型的更新场景包括:因新队友加入、新产品出现或实际使用的真实结果而获得了信息,或者出现了事后的第三方变化,例如供应商的能力、定价方案、许可协议等。

## ADR 的团队协作问题

### 谁可以创建 ADR?

可以考虑特定的人员、特定的角色、特定的团队或特定的部门等方面;也要考虑是否存在可以委托创建 ADR 的人员、角色、团队或部门,即由他们提出请求,而由其他人来撰写。

示例回答:我们组织中任何阅读过架构决策记录 README 页面的人都可以提出 ADR,也就是说,该人员可以开始撰写并与团队分享。

### 什么情况下应当提出 ADR?

可以考虑诸如你所在组织的团队工作方式、软件系统结构、跨团队协调、长期可维护性、外部接口、你希望让谁受益等方面。

示例回答:当我们希望未来的开发人员理解我们所做事情背后的“为什么”时,我们就想创建 ADR。

### 什么情况下不应提出 ADR?

可以考虑诸如以下情形:决策与架构无关;决策很小,例如风险极低、自成一体或仅涉及单个开发人员;决策已在别处(例如标准、政策或文档)得到充分涵盖;或者决策是临时性的,例如变通方案、概念验证或实验。

示例回答:当决策在范围、时间、风险和成本上都很有限,或已在别处涵盖时,我们会跳过 ADR。

### ADR 的生命周期是什么?

可以考虑创建流程、调研流程、决策流程、实施流程和退役流程等方面。考虑如何随时间跟踪 ADR 的生命周期,例如如何将 ADR 从一个状态推进到下一个状态,以及如何向利益相关者传达这一点。

示例回答:我们希望 ADR 有五个生命周期阶段:启动 → 调研 → 评估 → 实施 → 维护 → 退役。

### ADR 生命周期各步骤的标准是什么?

可以考虑诸如 ADR 的验收标准等方面,也就是说,你如何知道它已经足够好,可以从一个生命周期步骤进入下一个?问题是否被清楚地阐述?是否已考虑各种备选方案?权衡取舍是否得到充分理解并记录?所有相关背景是否齐备?所有相关利益相关者是否都已参与?所有反馈是否都已吸收?

示例回答:当积极参与的团队 1)已完成调研,2)已完成评估,3)已向利益相关者发布 ADR 提案并征求意见,时限为一周,4)所有利益相关者的意见都已吸收和处理之后,我们希望由利益相关者对 ADR 进行投票。

### 哪些角色和职责与 ADR 相关?

可以考虑提议者、调研者、评估者、评审者、批准者、维护者等角色。考虑诸如与利益相关者沟通、确保满足期望、在网站或内网上分享、定期复查工作(尤其是在发生相关变化时)等职责。

示例回答:我们希望每个 ADR 始终有一名主要联系人、一名次要联系人和一个负责团队;他们负责沟通、发布、维护、至少每年一次的定期复查,以及在需要时最终使其退役。

### 治理如何与 ADR 相关?

可以考虑诸如你所在组织的工作方式、任何特殊的合规需求(例如法律方面或人力资源方面),以及你希望如何处理共识、冲突与升级。在 ADR 方面,是否有某些领域、人员或团队比其他人影响力更大,例如能够批准、投票或否决它?

示例回答:ADR 的治理按以下优先顺序:首席执行官(CEO)、首席技术官(CTO)、首席法务官(CLO)、实施 ADR 的团队、团队中最了解该 ADR 的专家。除非 ADR 中另有说明,其他人没有治理权。

### 哪些原则与 ADR 相关?

可以考虑诸如你所在组织的工作方式,包括快速行动与慢速行动、决策共识与决策冲突、风险偏好与安全偏好、公开讨论与私下讨论等。

示例回答:我们采用的领导力原则是:崇尚行动、有异议但服从决定(disagree-and-commit)、对于易于撤销且易于隔离的决策,70% 的估计就足够好,以及采取公开的工作方式,但我们组织的保密协议所述的机密信息除外。

## ADR 的下一步概念

[Arc42](https://arc42.org/) 以务实的方式回答两个问题,并可根据你的具体需求裁剪。关于你的架构,应当记录/沟通什么?应当如何记录/沟通?Arc42 包含架构决策记录,以及关于目标、约束、背景、质量、风险等方面的指导。

[C4 模型](https://c4model.com/)是一种易学、对开发者友好的软件架构绘图方法。C4 是一组分层图,涵盖背景、容器、组件和代码,另有系统全景、动态和部署的辅助图。

## 架构图、视图与视角

架构图称为"架构视图"。

"架构视图"是"架构视角"的一个实例。

"架构视角"针对具有特定关注点的特定受众。

架构视角、视图和图的示例:

- 业务能力

- 高层业务流程

- [价值流](https://en.wikipedia.org/wiki/Value_stream)

- 映射到应用组件的软件功能

- [C4 Model](https://en.wikipedia.org/wiki/C4_model) 背景图 (TO-BE / AS-IS)

- [C4 Model](https://en.wikipedia.org/wiki/C4_model) 容器图 (TO-BE / AS-IS)

- [实体关系图](https://en.wikipedia.org/w/index.php?title=Entity_relationship_diagram) (ERD) 用于将数据实体映射到应用组件

- [序列图](https://en.wikipedia.org/wiki/Sequence_diagram) 用于描述系统内部及集成中的功能流程

- [业务流程模型和符号](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN) 用于描述跨应用组件的数据流的图

- [业务流程模型和符号](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN) 用于描述业务流程/用户场景的图

- [身份与访问管理](https://en.wikipedia.org/wiki/Identity_and_access_management) (IAM) 图

- [基于角色的访问控制](https://en.wikipedia.org/wiki/Role-based_access_control) (RBAC) 按应用组件列出角色的图

- [基于属性的访问控制](https://en.wikipedia.org/wiki/Attribute-based_access_control) (ABAC) 按应用组件列出属性的图

- 隐私图

相关图:

- 用例图向管理层/客户展示用例,它先于需求,而需求先于软件架构。

- 部署图展示软件组件所部署到的物理硬件/计算机。
- 数据流图展示数据如何在系统中流动和转换。
- 序列图用于在时间轴上展示 HTTP 等协议的工作方式。

- 活动图描绘软件系统所执行活动的工作流,例如 NPC 的 AI。

## 将决策作为代码的适应度函数

适应度函数(fitness function)是用编程代码编写的客观自动化检查,用于验证决策是否得到遵守。

- 适应度函数使决策可测试、可保证。

- 针对决策的适应度函数可以极大地帮助质量保证、合规流程和治理目标。

### 适应度函数如何与决策关联

决策记录负责记录决策,而适应度函数负责保证决策。

- 决策示例:我们为满足审计要求而使用事件溯源。

- 适应度函数示例:我们使用持续集成服务器来测试所有状态变更都必须产生事件。

### 为什么适应度函数有助于决策

客观的度量:适应度函数要么通过,要么失败,因此工作情况清晰可见。

持续使用:适应度函数是你的活规则,在每次提交和构建时运行。

重构的信心:适应度函数能自动发现违反决策规则的错误。

可扩展的治理:适应度函数在不制造瓶颈的情况下保证标准得到执行。

### 适应度函数可以使用 AI 吗?

适应度函数可以借助 AI 大语言模型,针对你的工作成果(例如计划、代码、模式、API 等)提出问题,以检查决策:

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

[ArchUnit](https://www.archunit.org/):使用任何普通的 Java 单元测试框架来检查 Java 代码的架构规则。

[ArchUnitTS](https://github.com/LukasNiessen/ArchUnitTS):使用 Jest、Vitest、Jasmine 等来检查 TypeScript 代码和 JavaScript 代码的架构规则。

## 拉取请求的决策护栏

[Decision Guardian](https://github.com/DecispherHQ/decision-guardian)
会在合适的时刻,也就是开发者正在修改这些决策所涵盖的代码时,
自动呈现相应的决策记录。它不再寄希望于开发者在合并前阅读文档文件夹,
而是让相关背景直接出现在拉取请求上。

这适用于任何类型的决策记录:架构决策、数据决策、合规决策、临床和医疗决策、安全决策等。

可与任何 CI 系统(GitLab、Jenkins、CircleCI)配合使用,也可作为 pre-commit 钩子。
开源。MIT 许可证。

[ADR Guard](https://github.com/chohan-sarmad-ali/delivery-gates) 是一个 GitHub
Action,当被监视的代码路径发生变化而没有新增或更新架构决策记录时,它会使拉取请求失败。豁免是明确的:带有理由的
`ADR-Exempt:` 行可通过关卡,并写入作业摘要。与模板无关,无依赖。开源。MIT 许可证。

## 更多信息

简介:

- [Architectural decision (wikipedia.org)](https://wikipedia.org/wiki/Architectural_decision)

- [Architecturally significant requirements (wikipedia.org)](https://wikipedia.org/wiki/Architecturally_significant_requirements)

模板:

- [Documenting architecture decisions - Michael Nygard (thinkrelevance.com)](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)

- [Markdown Architectural Decision Records (adr.github.io)](https://adr.github.io/madr/)

- [Template for documenting architecture alternatives and decisions (stackoverflow.com)](http://stackoverflow.com/questions/7104735/template-for-documenting-architecture-alternatives-and-decisions)

深入阅读:

- [ADMentor XML project (github.com)](https://github.com/IFS-HSR/ADMentor)

- [Architectural Decision Guidance across Projects: Problem Space Modeling, Decision Backlog Management and Cloud Computing Knowledge (ifs.hsr.ch)](https://www.ifs.hsr.ch/fileadmin/user_upload/customers/ifs.hsr.ch/Home/projekte/ADMentor-WICSA2015ubmissionv11nc.pdf)

- [The Decision View's Role in Software Architecture Practice (computer.org)](https://www.computer.org/csdl/mags/so/2009/02/mso2009020036-abs.html)

- [Documenting Software Architectures: Views and Beyond (resources.sei.cmu.edu)](http://resources.sei.cmu.edu/library/asset-view.cfm?assetID=30386)

- [Architecture Decisions: Demystifying Architecture (utdallas.edu)](https://www.utdallas.edu/~chung/SA/zz-Impreso-architecture_decisions-tyree-05.pdf)

- [ThoughtWorks Technology Radar: Lightweight Architecture Decision Records (thoughtworks.com)](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)

- [A Skeptic’s Guide to Software Architecture Decisions (infoq.com)](https://www.infoq.com/articles/architecture-skeptics-guide/)

- [Architectural Decisions — The Making Of](https://ozimmer.ch/practices/2020/04/27/ArchitectureDecisionMaking.html)

- [Architectural Retrospectives: the Key to Getting Better at Architecting](https://www.infoq.com/articles/architectural-retrospectives/)

- [Software Architecture Monday with Mark Richards](https://developertoarchitect.com/lessons/) - 免费的每月软件架构课程

- [Solution Architecture Decisions - By Gareth Morgan](https://www.linkedin.com/pulse/solution-architecture-decisions-gareth-morgan-0r5xe/)

- ["Keep the Why: Code Becomes Legacy When Nobody Remembers Why"](https://blog.technopathy.club/keep-the-why-code-becomes-legacy-when-nobody-remembers-why)

工具:

- [Command-line tools for working with Architecture Decision Records](https://github.com/npryce/adr-tools)

- [Command line tools with python - by Victor Sluiter](https://bitbucket.org/tinkerer_/adr-tools-python/src/master/)

- [Architectural Design Decision Support Framework (ADvISE)](https://swa.univie.ac.at/Software_Architecture/research-projects/architectural-design-decision-support-framework-advise/)

- [Decision Guardian](https://github.com/DecispherHQ/decision-guardian)

- [Mneme HQ - ADR enforcement for AI coding agents](https://github.com/TheoV823/mneme)

- [Keep the Why - a repo-native convention and agent skill that continuously captures, or retrospectively recovers, the reasoning behind a codebase](https://github.com/oliver-zehentleitner/keep-the-why)

- [ADR Guard - GitHub Action that fails a pull request changing watched code without an architecture decision record](https://github.com/chohan-sarmad-ali/delivery-gates)

- [kgai - append-only decision log for AI coding agents, a machine-readable companion to ADR files](https://github.com/kgaidev/kgai)

特定公司的指南:

- [Amazon: AWS Prescriptive Guidance: ADR Process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)

- [GitHub: ADR GitHub organization](https://adr.github.io/)

- [RedHat: Why you should use ADRs](https://www.redhat.com/architect/architecture-decision-records)

示例:

- [Repository of Architecture Decision Records made for the Arachne Framework](https://github.com/arachne-framework/architecture)

视频:

- [An introduction to arc42 with Savvas Kleanthous](https://www.youtube.com/watch?v=V5clR8c6D7o)

- [The C4 model for visualising software architecture - by Simon Brown](https://www.youtube.com/watch?v=KvoBrUd1-5E)

播客:

- [Software Architecture Bookclub Podcast](https://www.developertoarchitect.com/bookclub-podcast.html)

书籍:

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

另请参阅:

- REMAP (Representation and Maintenance of Process Knowledge)

- DRL (Decision Representation Language)

- IBIS (Issue-Based Information System)

- QOC (Questions, Options, and Criteria)

- IBM’s e-Business Reference Architecture Framework

- [Decision Reasoning Format (DRF)](https://github.com/reasoning-formats/reasoning-formats) - 一种与供应商无关、机器可读的 YAML/JSON 格式,用于表示带有明确推理、假设、认知状态和权衡的决策。通过为决策文档增加结构化、可验证的推理来补充 ADR。
