# 单一仓库还是多仓库

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


## 摘要


### 问题

阿拉个项目涉及开发三大类软件：

  * 前端 GUI
  * 中间件服务
  * 后端服务器

阿拉开发个辰光，源代码管理（SCM）个版本控制系统（VCS）是 git。

阿拉需要选择哪能用 git 来组织代码。

顶层个选择是组织成“monorepo”（单一仓库）、“polyrepo”（多仓库）还是“混合”：

  * Monorepo 意味着阿拉拿所有部分放进一个大仓库
  * Polyrepo 意味着阿拉拿每个部分放辣自家个仓库里
  * 混合意味着 monorepo 搭 polyrepo 个某种混合

更加多信息请看 https://github.com/joelparkerhenderson/monorepo-vs-polyrepo


### 决策

组织／团队／项目比较小，而且快速迭代个优先级高于维持稳定个辰光，用 monorepo。

组织／团队／项目比较大，而且维持稳定个优先级高于快速迭代个辰光，用 polyrepo。


### 状态

已决定。要是有管理 monorepo 和／或者 polyrepo 个新工具，愿意重新考虑。


## 详情


### 假设

阿拉开发个所有代码，侪是为一个组织个产品服务个，勿是面向一般公众个。也就是讲，Broker-Dealer 勿打算有类似一般公众志愿开发者个东西。


### 限制

限制辣 https://github.com/joelparkerhenderson/monorepo-vs-polyrepo 上有详细记录。


### 立场

阿拉考虑过 Google、Facebook 等等风格个 monorepo。阿拉认为任何 monorepo 个扩展问题侪辣蛮远个以后，到阿拉需要个辰光，阿拉可以利用搭 Google 和 Facebook 一样个实践。

阿拉考虑过典型 Git 开源项目风格个 polyrepo，比方 Google Android、Facebook React 等等。阿拉认为迭眼是一般公众参与（比方世界上任何人侪可以参与代码）搭个别可用性（比方项目单独使用，勿需要任何其他部分）个最好选择。


### 论据

组织／团队／项目比较小个辰光，阿拉选 monorepo，因为快速迭代个优先级明显高于维持稳定

组织／团队／项目比较大个辰光，阿拉选 polyrepo，因为维持稳定个优先级明显高于快速迭代。


### 影响

要是已经有 CI+CD 个流水线，阿拉可能需要调整伊，来测试一个仓库里向个多个项目。

monorepo 个 CI+CD 完整构建可能花更加多辰光，因为 CI+CD 可能构建 monorepo 里所有个项目。

要是组织／团队／项目增长，monorepo 会有扩展问题。

monorepo 个扩展问题可能让转到 polyrepo 越来越有价值。

从 monorepo 转到 polyrepo 是一个重大个 devops 任务，需要计划、管理搭编程。


## 相关


### 相关决策

阿拉会为管理 monorepo（比方 Google Bazel）搭 polyrepo（比方 Lyft Refactorator）个相关工具创建决策。


### 相关需求

阿拉需要开发 CI+CD 流水线，让伊搭 git 配合得好。


### 相关工件

阿拉预期仓库组织会有配置、配置管理、测试搭类似 devops 领域个相关工件。


### 相关原则

容易撤销。要是 monorepo 实践中勿管用，或者领导层勿想要，转成 polyrepo 很简单。

客户至上。阿拉重视拿项目交到客户手里，阿拉相信 monorepo 比 polyrepo 可以更加快做到，也可以帮助阿拉更加快迭代。

想得大。Google 搭 Facebook 非常强烈地提倡 monorepo 而勿是 polyrepo，因为所有核心产品可以协同开发／测试／部署。


## 备注

迭里加任何备注。
