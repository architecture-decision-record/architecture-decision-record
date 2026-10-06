# Microsoft Azure DevOps

目录:

* [摘要](#摘要)
  * [问题](#问题)
  * [决策](#决策)
  * [状态](#状态)
* [详情](#详情)
  * [假设](#假设)
  * [约束](#约束)
  * [立场](#立场)
  * [论证](#论证)
  * [影响](#影响)
* [相关内容](#相关内容)
  * [相关决策](#相关决策)
  * [相关需求](#相关需求)
  * [相关制品](#相关制品)
  * [相关原则](#相关原则)
* [备注](#备注)
  * [Microsoft Devops CI:一次令人不满意的冒险](#microsoft-devops-ci一次令人不满意的冒险)
  * [Hacker News 讨论要点](#hacker-news-讨论要点)
  * [Windows 开发 MVP](#windows-开发-mvp)
  * [Edward Thomson(Azure PM)简介](#edward-thomsonazure-pm简介)


## 摘要


### 问题

我们想使用 DevOps 来构建、集成、部署和托管我们的项目。我们正在考虑 Microsoft Azure DevOps。

  * 我们希望开发者体验快速而可靠,既包括 DevOps 的设置(例如配置),也包括持续使用(例如快速的构建时间)。
  
  * 我们希望考虑整体使用 Microsoft Azure,来托管项目的应用、数据库等。


### 决策

决定不采用 Microsoft Azure DevOps。


### 状态

已决定。如果/当有新的重要信息出现时,愿意重新审视。


## 详情


### 假设

所有常见的 DevOps 假设,例如《Accelerate》一书中的假设。

  * 快速构建有很大帮助。这能加快反馈循环。

  * 我们可以换入/换出来自其他供应商的组件,也就是说,我们可能想自带更高速的构建服务器,或使用我们自己选择的版本控制系统,或与自托管的持续集成服务器协同工作。
  
  * 简化的可用性有很大帮助,对开发者体验有帮助,进而对一致性、清晰度、安全性和学习曲线的易用性等微妙方面也有帮助。

  * 当任何东西出现故障或问题时,我们希望有一种有效的方式来报告问题。这对于任何与安全相关的问题尤为重要。


### 约束

没有已知的约束。Azure 公开承诺会与外部工具良好协作。


### 立场

我们考虑了使用 Microsoft Azure Devops 与现有的 AWS 相比的情况。

我们试用了 Azure DevOps、Azure Pipelines、Azure Repo,以及通过 Terraform 启动新的 Azure 服务器。

我们尝试了从 Microsoft 代表那里获得支持。

我们从同行的博客和 Hacker News 上收集了信息。


### 论证

Azure DevOps 宣传了一套出色的产品,但它们名不副实,彼此之间配合不佳,而且支持很差。

我们的亲身体验:

  * Azure 的设置是一堆混乱的界面,其中一些与 Microsoft 账号重叠,一些则不重叠。例如,有 Azure 登录、Microsoft.com 登录、Live.com 登录等,而且它们同时都在起作用。

  * 我们在设置过程中遇到了一个轻微的安全问题,但没有找到解决办法。我们尝试了许多方式向许多 Microsoft 代表报告,均无结果。我们成功地向 Microsoft 安全部门报告了该问题,对方回复为不予修复(won't fix)。

  * 文档往往要么有误,要么过时。其中至少一部分归因于 Microsoft 糟糕的搜索引擎,另一部分归因于欠佳的 SEO。
  
  * Terraform 的设置文档齐全,并且可用。然而,与 AWS 相比,Terraform 的支持较弱,因为 Microsoft 正在与供应商建立业务关系,以提供贯通式的 Terraform 设置示例。

我们同行的体验:

  * 在我们自己做了盲评之后,我们寻找了同行的体验。我们的发现印证了我们自己的体验。

  * 同行报告了构建时间方面的更多问题,以及自带构建服务器方面的问题。这些问题比界面问题严重得多,因为执行构建是构建流水线的核心目的,而我们预计每天要执行许多次。

  * 我们发现 Azure 团队成员在讨论区的参与度非常高。在此向 Microsoft 致敬。我们对 Azure PM 兼程序员 Edward Thomson 印象尤为深刻,因为他积极参与、坦率直接,并给出了技术性的解释。


### 影响

选择 Microsoft Azure DevOps 看起来在时间和成本上可能比不选择 Azure 要贵(约 3 倍)。


## 相关内容


### 相关决策

如果我们选择 Azure DevOps,会有许多相关产品,包括 Azure Repo、Azure Pipeline 等。我们认为,如果选择 Azure Devops,这可能会使使用更多 Azure 功能变得更容易,也可能会使使用其他供应商的功能变得更困难。

我们认为 Microsoft 在开发者体验方面正取得长足进步,我们也看到 Microsoft 在大规模收购开发者工具(例如 GitHub)和依赖项(例如 Citus)。

如果我们选择 Azure DevOps,那么我们可能需要着重选择 Microsoft 收购来的产品,同时也可能需要更谨慎地评估这些收购来的产品,因为存在潜在的“排异反应”,例如员工流失风险。


### 相关需求

我们希望构建时间非常快。我们接受为此支付高额溢价。这是因为我们希望非常快速地迭代。

我们希望可靠性非常高。我们接受为此支付高额溢价。这是因为我们正在测试高价值的使用场景,包括金融交易、机密交易等。

我们的前 4 项 DevOps 关键绩效指标(KPI)包括平均恢复时间,这就需要快速构建和高可靠性。


### 相关制品

我们希望构建系统输出适合在 Artifactory 等其他系统中使用的制品。


### 相关原则

易于撤销。我们可以与现有的 AWS 并行评估 Azure DevOps。


## 备注


### Microsoft Devops CI:一次令人不满意的冒险

https://toxicbakery.github.io/vsts-devops/microsoft-devops-ci/

博客文章。

“作为一名软件开发人员,我亲身体会到快速而廉价地构建高质量产品有多么困难。这是一门艺术,我们有时能做对,有时则会沦落到类似奥巴马时代医疗保健政府网站的境地。我们对最终产品的控制程度各不相同,而失败的责任往往落在决策层级中错误的人身上。Microsoft 的 Azure DevOps(前身为 Visual Studio Team Services),尽管显然出于好意,却是糟糕决策和糟糕执行的完美风暴。”


### Hacker News 讨论要点

https://news.ycombinator.com/item?id=18983586

“我们在工作中大量使用 Azure DevOps,在用过 GitHub、Gitlab、自托管方案、Jenkins、TeamCity 之后……Azure DevOps 排名垫底。”

“界面到处都极其笨拙。对我来说最糟糕的是拉取请求。与他人在拉取请求上协作极其困难。我甚至无法指出‘某一个’特定问题——对我们来说,它到处都是坏的。”

“Azure Devops 是我想要喜欢的东西。界面一直在变,却不修复存在已久的底层缺陷。”

“这些工具集成得不好,界面真的很慢,没有仪表板视图来显示我常用仓库中活跃的拉取请求、构建、发布等。构建/部署时间慢得离谱。”

“我们还尝试使用了 Azure Boards(工作项、看板、待办事项列表等)。哎呀。那是一堆互不相干想法拼凑而成的彻底混乱的界面。他们没有把一件事做好,而是把两打事情都做得很糟糕。”


### Windows 开发 MVP

我是 Windows 开发 MVP。我觉得自己必须为没有对这些问题发出更大的声音而承担一部分责任。但必须说,听到你们对用户体验问题感到“惊讶”,我很失望。我一直在告诉你们的人,用户体验糟糕透顶(例如早在发布之前就说过),而得到的回复一直是“我们知道,我们正在修复”。我会开始把反馈整理成正式形式,并通过渠道提交,敬请关注。我也在本地(Bellevue),很乐意过来,尝试为我们相对简单的开源 .net/wpf/uwp 应用搭建流水线。我猜这会让我们双方都大开眼界。

一些例子:

* 无法为包含子模块(submodule)的 git 仓库构建流水线

* 发现无法为某些自定义工具编辑 PATH

* “新建流水线”的体验毫无道理,新用户随意点击,最终会跑到错误的文档页面。


### Edward Thomson(Azure PM)简介

我编写了合并你拉取请求的代码。Microsoft Azure DevOps 的项目经理;此前是 GitHub、Microsoft 和 SourceGear 版本控制工具的软件工程师。

https://www.edwardthomson.com/

libgit2 的共同维护者。https://libgit2.github.io

《All Things Git》(关于 Git 的播客)的共同主持人。https://www.allthingsgit.com/

《Developer Tools Weekly》(关于开发工具的新闻简报)的策展人。https://developertoolsweekly.com/
