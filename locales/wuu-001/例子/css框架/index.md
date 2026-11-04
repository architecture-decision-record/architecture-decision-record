# 架构决策记录：CSS 框架

目录：

- [摘要](#摘要)
  - [问题](#问题)
  - [决策](#决策)
  - [状态](#状态)
- [详情](#详情)
  - [假设](#假设)
  - [限制](#限制)
  - [立场](#立场)
  - [论据](#论据)
  - [影响](#影响)
- [相关](#相关)
  - [相关决策](#相关决策)
  - [相关需求](#相关需求)
  - [相关工件](#相关工件)
  - [相关原则](#相关原则)
- [备注](#备注)


## 摘要


### 问题

阿拉想用 CSS 框架来创建阿拉个 Web 应用：

  * 阿拉想让用户体验快速又可靠，辣所有流行个浏览器搭屏幕尺寸上。

  * 阿拉想辣设计、布局、UI/UX 等等方面快速迭代。

  * 阿拉想要响应式个应用，特别是对小屏幕（比方移动设备）、大屏幕（比方 4K 宽屏），还有动态屏幕（比方可旋转个显示器）。


### 决策

决定用 Bulma。


### 状态

决定用 Bulma。对新出现个 CSS 框架选择保持开放。


## 详情


### 假设

阿拉想创建现代、快速、可靠、响应式等等个 Web 应用。

典型个现代 Web 应用辣减少／淘汰 jQuery 个使用，有好几个原因：

  * 现代 JavaScript 辣逐步引入许多 jQuery 原来提供个能力，所以 jQuery 个需要变少哉，而且有更加好／更加快／更加小个模块来提供具体个实现

  * jQuery 个总体办法是直接操作 DOM，对现代 JavaScript 框架（比方 React、Vue、Svelte）来讲是一种反模式

  * jQuery 要是加载两趟，会自家搭自家冲突，等等


### 限制

要是阿拉选个 CSS 框架用 jQuery，阿拉就只好引入 jQuery。比方，Semantic UI 用 jQuery，而 Tachyons 勿用。

要是阿拉选个 CSS 框架是极简个，阿拉就放弃了现在或者马上可能想要个框架组件。比方，Semantic UI 提供图片轮播，而 Tachyons 勿提供。


### 立场

阿拉考虑过勿用框架。迭个看起来仍旧可行，特别是因为 CSS grid 提供了阿拉项目需要个大部分东西。

阿拉用快速短名单分流个办法考虑了许多 CSS 框架：Bootstrap、Bulma、Foundation、Materialize、Semantic UI、Tachyons 等等。阿拉挑出来深入评审个两个是 Semantic UI（因为伊个办法最语义化）搭 Bulma（因为伊最轻量，又提供阿拉现在想要个组件）。

阿拉考虑过 Semantic UI。伊提供许多组件，包括阿拉项目想要个：标签页、网格、按钮等等。阿拉用两种办法对 Semantic UI 做了试点：用典型个 CDN 文件，搭用 NPM 仓库。阿拉辣静态 HTML 页面里用 Semantic UI 成功了，勿过辣阿拉限定个辰光内，构建 JavaScript SPA 勿成功（主要因为 jQuery 加载问题）。阿拉发现其他程序员一直辣请 Semantic UI 个开发者做一个勿带 jQuery 个版本，原因搭阿拉一样。其他程序员已经请求勿带 jQuery 个版本好多年，勿过开发者讲勿行，并且讲任何勿带 jQuery 个版本侪太难写，比方大意是“Semantic UI 项目有超过 22,000 个接触点用 jQuery”。

Semantic 个例子：

```html
<div class="ui top attached tabular menu">
  <a class="item">Alpha</a>
  <a class="item">Bravo</a>
</div>
```

阿拉考虑过 Bulma。Bulma 有许多搭 Semantic UI 类似个能力，勿过精巧个组件勿那能多。Bulma 用现代技术构建，比方勿用 jQuery。Bulma 有眼第三方组件，其中有眼阿拉可能想用。


Bulma 个例子：
```html
<div class="tabs">
  <ul>
    <li><a>Alpha</a></li>
    <li><a>Bravo</a></li>
  </ul>
</div>
```


### 论据

如上。

具体来讲，Semantic UI 辣技术方面（也就是有迭能多 jQuery 接触点）还有领导方面（也就是勿带 jQuery 个版本被坚决拒绝，而勿是尝试做路线图、持续改进或者募捐等等），看起来侪有一面警告旗。


### 影响

要是阿拉找着一个好个勿带 jQuery 个 CSS 框架，总体上通常是有帮助、有好处个。


## 相关


### 相关决策

阿拉选个 CSS 框架可能影响可测试性。


### 相关需求

阿拉想快速交付一个纯现代个应用。

阿拉勿想花辰光辣用老依赖（特别是 jQuery）个老框架（特别是 Semantic UI）上。


### 相关工件

影响所有会用到迭个 CSS 个典型 HTML。


### 相关原则

容易撤销。

需要速度。


## 备注

迭里写任何备注。
