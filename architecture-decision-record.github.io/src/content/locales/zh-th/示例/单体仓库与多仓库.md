# 单体仓库与多仓库

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


## 摘要


### 问题

我们的项目涉及开发三大类软件:

  * 前端图形界面(GUI)
  * 中间件服务
  * 后端服务器

在开发时,我们的源代码管理(SCM)版本控制系统(VCS)是 git。

我们需要选择如何使用 git 来组织我们的代码。

最高层的选择是组织成“monorepo(单体仓库)”、“polyrepo(多仓库)”或“混合”:

  * Monorepo 意味着我们把所有部分放进一个大仓库
  * Polyrepo 意味着我们把每个部分放进各自的仓库
  * 混合意味着 monorepo 与 polyrepo 的某种组合

更多信息请参见 https://github.com/joelparkerhenderson/monorepo-vs-polyrepo


### 决策

当组织/团队/项目相对较小,且快速迭代的优先级高于维持稳定性时,选择 monorepo。

当组织/团队/项目相对较大,且维持稳定性的优先级高于快速迭代时,选择 polyrepo。


### 状态

已决定。如果/当出现用于管理 monorepo 和/或 polyrepo 的新工具时,愿意重新审视。


## 详情


### 假设

我们开发的所有代码都是为某一个组织的产品服务的,而不是面向公众的。也就是说,这家券商(Broker-Dealer)并不打算拥有任何类似公众志愿开发者的群体。


### 约束

约束在 https://github.com/joelparkerhenderson/monorepo-vs-polyrepo 中有详细记录。


### 立场

我们考虑了 Google、Facebook 等风格的 monorepo。我们认为,任何 monorepo 的扩展问题都出现在遥远的将来,到我们需要的时候,我们将能够利用与 Google 和 Facebook 相同的实践。

我们考虑了典型 Git 开源项目风格的 polyrepo,例如 Google Android、Facebook React 等。我们认为,对于公众参与(例如全世界任何人都可以参与代码工作)和单独可用性(例如项目可以独立使用,不依赖任何其他部分),这些是最佳选择。


### 论证

当组织/团队/项目相对较小时,我们选择 monorepo,因为快速迭代的优先级明显高于维持稳定性。

当组织/团队/项目相对较大时,我们选择 polyrepo,因为维持稳定性的优先级明显高于快速迭代。


### 影响

如果已有 CI+CD 流水线,我们可能需要对其进行调整,以便在一个仓库内测试多个项目。

对于 monorepo,CI+CD 的完整构建可能耗时更长,因为 CI+CD 可能会构建 monorepo 中的所有项目。

如果组织/团队/项目不断增长,monorepo 将出现扩展问题。

monorepo 的扩展问题可能使过渡到 polyrepo 变得越来越有价值。

从 monorepo 过渡到 polyrepo 是一项重大的 DevOps 任务,需要计划、管理和编程实现。


## 相关内容


### 相关决策

我们将为管理 monorepo(例如 Google Bazel)和 polyrepo(例如 Lyft Refactorator)的相关工具创建决策。


### 相关需求

我们需要开发能够与 git 良好协作的 CI+CD 流水线。


### 相关制品

我们预计仓库组织将带有用于资源供应、配置管理、测试以及类似 DevOps 领域的相关制品。


### 相关原则

易于撤销。如果 monorepo 在实践中行不通,或者领导层不想要,可以很容易地改为 polyrepo。

痴迷于客户(Customer Obsession)。我们重视让项目尽快送到客户手中,并且相信 monorepo 比 polyrepo 能更快地做到这一点,也有助于我们更快地迭代。

志存高远(Think big)。Google 和 Facebook 是 monorepo 优于 polyrepo 的强力倡导者,因为所有核心产品可以协同开发/测试/部署。


## 备注

在此添加任何备注。
