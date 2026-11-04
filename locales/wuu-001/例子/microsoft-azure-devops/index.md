# Microsoft Azure DevOps

目录：

* [摘要](#摘要)
  * [问题](#问题)
  * [决策](#决策)
  * [状态](#状态)
* [详情](#详情)
  * [假设](#假设)
  * [限制](#限制)
  * [立场](#立场)
  * [论据](#论据)
  * [影响](#影响)
* [相关](#相关)
  * [相关决策](#相关决策)
  * [相关需求](#相关需求)
  * [相关工件](#相关工件)
  * [相关原则](#相关原则)
* [备注](#备注)
  * [Microsoft Devops CI：一次勿令人满意个冒险](#microsoft-devops-ci一次勿令人满意个冒险)
  * [Hacker News 讨论要点](#hacker-news-讨论要点)
  * [Windows 开发 MVP](#windows-开发-mvp)
  * [Edward Thomson（Azure PM）个总结](#edward-thomsonazure-pm个总结)


## 摘要


### 问题

阿拉想用 devops 来构建、集成、部署搭托管阿拉个项目。阿拉辣考虑 Microsoft Azure DevOps。

  * 阿拉想让开发者体验快速又可靠，无论是 devops 个设置（比方配置），还是持续使用（比方快速个构建辰光）。

  * 阿拉想考虑整体使用 Microsoft Azure，来托管项目个应用、数据库等等。


### 决策

决定勿选 Microsoft Azure DevOps。


### 状态

已决定。要是有新个重要信息，愿意重新考虑。


## 详情


### 假设

所有通常个 devops 假设，比方《Accelerate》迭本书里个。

  * 快速构建是重大个帮助。迭加快了反馈循环。

  * 阿拉可以换进换出其他供应商个组件，也就是阿拉可能想自带更加高速个构建服务器，或者用自家选个版本控制系统，或者搭自托管个持续集成服务器配合。

  * 流畅个易用性是重大个帮助，对开发者体验有帮助，进而对一致性、清爽度、安全性搭学习曲线个容易程度迭类微妙个方面也有帮助。

  * 任何东西坏了或者有问题，阿拉想有一个有效个办法报告问题。对任何安全相关个问题，迭点特别重要。


### 限制

呒没已知个限制。Azure 公开承诺搭外部工具配合得好。


### 立场

阿拉考虑过用 Microsoft Azure Devops 对比现任个 AWS。

阿拉试验过 Azure DevOps、Azure Pipelines、Azure Repo，还有通过 Terraform 启动新服务器个 Azure 办法。

阿拉试验过从 Microsoft 代表那里获得支持。

阿拉从同行写个博客搭 Hacker News 上收集了信息。


### 论据

Azure DevOps 宣传一套出色个产品，勿过伊拉经勿起检验，伊拉勿能很好地一道工作，而且支持勿好。

阿拉自家个第一手经验：

  * Azure 个设置是一团乱麻个 UI，其中有眼搭 Microsoft 账户重叠，有眼勿重叠。比方，有 Azure 登录、Microsoft.com 登录、Live.com 登录等等，而且侪同时起作用。

  * 阿拉辣设置当中碰着一个小个安全问题，没找到解决办法。阿拉试了许多办法，向许多 Microsoft 代表报告，侪呒没成功。阿拉成功地向 Microsoft 安全部门报告了，伊个回复是勿修复。

  * 文档常常要么是错个，要么是过时个。其中至少有一部分是因为 Microsoft 搜索引擎勿好，还有一部分是因为 SEO 一般。

  * Terraform 个设置文档良好，也管用。勿过，搭 AWS 比起来，Terraform 支持较弱，因为 Microsoft 辣搭供应商建立业务关系，来做链式个 Terraform 设置例子。

阿拉同行个经验：

  * 阿拉自家做完盲评估之后，去找同行个经验。阿拉找着个证实了阿拉个经验。

  * 同行报告了构建辰光方面个额外问题，还有自带构建服务器个问题。迭眼问题比 UI 问题严重得多，因为做构建是构建流水线个核心目的，阿拉预计每日要做许多趟。

  * 阿拉发现 Azure 团队成员辣讨论区里参与得很出色。要向 Microsoft 致敬。阿拉特别对 Azure PM 兼程序员 Edward Thomson 印象深刻，因为伊个参与、直率搭技术解释。


### 影响

选 Microsoft Azure DevOps，看起来辣辰光搭成本上可能比勿选 Azure 更加贵（约 3 倍）。


## 相关


### 相关决策

要是阿拉选 Azure DevOps，有许多相关个产品，包括 Azure Repo、Azure Pipeline 等等。阿拉相信，要是选 Azure Devops，可能让使用更加多 Azure 能力更加容易，也可能让使用其他供应商个能力更加困难。

阿拉相信 Microsoft 辣开发者体验方面取得很大进步，阿拉看到 Microsoft 大规模收购开发者工具（比方 GitHub）搭依赖项（比方 Citus）。

要是阿拉选 Azure DevOps，那阿拉可能想重点选 Microsoft 收购来个产品，同时因为潜在个排异反应（比方员工流失风险），阿拉也可能想更加当心／仔细地评估收购来个产品。


### 相关需求

阿拉想让构建辰光非常快。阿拉接受为此付高额个溢价。迭是因为阿拉想非常快地迭代。

阿拉想让可靠性非常高。阿拉接受为此付高额个溢价。迭是因为阿拉辣测试高价值个用例，包括金融交易、机密交易等等。

阿拉前 4 个 devops KPI 包括平均恢复辰光，所以需要快速构建搭高可靠性。


### 相关工件

阿拉想让构建系统输出适合用辣其他系统（比方 Artifactory）里个工件。


### 相关原则

容易撤销。阿拉可以搭现任个 AWS 并行评估 Azure DevOps。


## 备注


### Microsoft Devops CI：一次勿令人满意个冒险

https://toxicbakery.github.io/vsts-devops/microsoft-devops-ci/

博客文章。

“作为一个软件开发者，我亲身晓得又快又便宜地构建高质量产品有多难。迭是一门艺术，阿拉有辰光做得对，有辰光又堕落成类似奥巴马时代医保政府网站个东西。阿拉对最终产品个控制程度勿一，失败个责怪常常落辣决策层级里错误个人头上。Microsoft 个 Azure DevOps（以前叫 Visual Studio Team Services），虽然显然出于好意，却是糟糕决策搭糟糕执行个完美风暴。”


### Hacker News 讨论要点

https://news.ycombinator.com/item?id=18983586

“阿拉辣工作中大量使用 Azure DevOps，辣用过 GitHub、Gitlab、自托管方案、Jenkins、TeamCity 之后……Azure DevOps 排最后一名。”

“UI 到处侪笨拙得要命。对我来讲最糟个是 pull request。搭人一道辣 pull request 上工作难得要命。我甚至勿能指出‘某一个’具体问题——对阿拉来讲，到处侪是坏个。”

“Azure Devops 是我想爱上个东西。UI 勿断变，却勿修复已经存在好多年个底层缺陷。”

“工具集成得勿好，UI 真个蛮慢，呒没一个仪表盘视图可以看我最欢喜个仓库里活跃个 pull request、构建、发布等等。构建／部署辰光慢得离谱。”

“阿拉也试着用 Azure Boards（工作项、看板、待办清单等等）。哎呀。伊是一团混乱个 UI，里向个想法互相脱节。伊拉勿是把一件事体做好，而是拿二十几件事体做得一塌糊涂。”


### Windows 开发 MVP

我是 Windows 开发 MVP。我觉得我必须承担一部分责任，因为我呒没更加大声地讲迭眼问题。勿过必须讲，听到侬讲对 UX 问题“感到惊讶”，我蛮失望。我一直告诉侬拉个人，UX 糟糕透顶（比方早到发布前），却一直听到回答“阿拉晓得，阿拉辣修”。我会开始拿反馈正式整理，通过渠道提上去，请继续关注。我也辣本地（Bellevue），很愿意过来，试着为阿拉相对简单个开源 .net/wpf/uwp 应用搭流水线。我猜迭会让阿拉两家侪大开眼界。

一眼例子：

* 勿能用包含子模块个 git 仓库来构建流水线

* 发现勿可能为一眼自定义工具修改 PATH

* 新建流水线个体验实辣讲勿通，新用户点来点去，最后会到错误个文档。


### Edward Thomson（Azure PM）个总结

合并侬 pull request 个代码是我写个。Microsoft Azure DevOps 个项目经理；以前是 GitHub、Microsoft、SourceGear 版本控制工具个软件工程师。

https://www.edwardthomson.com/

libgit2 个共同维护者。https://libgit2.github.io

All Things Git（关于 Git 个 Podcast）个共同主持人。https://www.allthingsgit.com/

Developer Tools Weekly（关于开发工具个通讯）个策划人。https://developertoolsweekly.com/
