# [000] 标题
*为每个 ADR 分配一个编号,以便于引用和编目* \
*注意:所有斜体文字均为提示,用于正式文档时应删除*

## 状态 - 草稿(DRAFT)/ 生效中(ACTIVE)/ 已被 [000] 弃用(DEPRECATED)/ 取代 [000]（SUPERSEDES）

## 背景
*简要描述本 ADR 旨在解决的问题,以及这些问题为何存在。*

## 所决定的方法
*详述已经/将要做出的具有架构意义的决策,并说明它如何解决“背景”一节中概述的问题。*

## 后果
*该决策对系统的架构特性和功能需求有何影响?*

## 治理
*将如何监控该决策的结果?* \
*将如何确保遵守该决策?*

## 选项分析
*如适用,请包含或链接到为得出本文档所述决策而进行的任何权衡分析。*

### 图例
*可选:为利益相关者提供视觉辅助,帮助他们快速发现正面和负面的权衡——例如使用简单的红绿灯高亮,并加上正面或负面前缀。*

<span style="background-color:#4bce97; color:black;">绿色</span>背景表示非常契合,依次递减为<span style="background-color:#f1c232; color:black;">琥珀色</span>,<span style="background-color:#e06666; color:black;">红色</span>表示最不契合。 \
\+ 表示具有正面影响的评论 \
\- 表示具有负面影响的评论

### 高层概览
*每个选项与问题背景的契合程度一目了然。*

<table>
  <thead>
    <tr>
      <th>概要</th>
      <th>选项 1</th>
      <th>选项 2</th>
      <th>选项 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><i>实施难易程度</i></td>
      <td>
        <span style="background-color:#4bce97; color:black; padding-right:5px">
          + 非常容易
        </span>
      </td>
      <td>
        <span style="background-color:#f1c232; color:black; padding-right:5px">
            - 有些棘手
        </span>
      </td>
      <td>
        <span style="background-color:#e06666; color:black; padding-right:5px">
            - 实施规模大,需要专家知识
        </span>
      </td>
    </tr>
    <tr>
      <td><i>时间周期</i></td>
      <td>
        <span style="background-color:#4bce97; color:black; padding-right:5px">
            + 非常快
        </span>
      </td>
       <td>
        <span style="background-color:#f1c232; color:black; padding-right:5px">
            - 相当慢
        </span>
      </td>
      <td>
        <span style="background-color:#e06666; color:black; padding-right:5px">
            - 非常慢
        </span>
      </td>
    </tr>
    <tr>
      <td><i>战略价值</i></td>
      <td>
        <span style="background-color:#e06666; color:black; padding-right:5px">
            - 没有战略价值,纯属战术性
        </span>
      </td>
       <td>
        <span style="background-color:#f1c232; color:black; padding-right:5px">
            + 略微改善客户入驻体验
        </span>
      </td>
      <td>
        <span style="background-color:#4bce97; color:black; padding-right:5px">
            + 非常适合即将进行的合并
        </span>
      </td>
    </tr>
  </tbody>
</table>

### 功能需求
*每个潜在选项与期望的功能需求的契合程度如何?*

<table>
  <thead>
    <tr>
      <th>场景</th>
      <th><i>选项 1</i></th>
      <th><i>选项 2</i></th>
      <th><i>选项 3</i></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><i>场景 1</i></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><i>场景 2</i></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><i>场景 3</i></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

*可选:添加行/另一张表格,以涵盖已知的未来场景。*

### 非功能需求
*每个潜在选项与期望的架构特性的契合程度如何?
注意:“架构特性”会是更恰当的标题,但请根据你所在业务领域的常用语言进行调整。*

<table>
  <thead>
    <tr>
      <th>架构 </br> 特性</th>
      <th><i>选项 1</i></th>
      <th><i>选项 2</i></th>
      <th><i>选项 3</i></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><i>可扩展性</i></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><i>性能</i></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><i>可用性</i></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

*可选:加入或链接到这些架构特性在你的业务/产品中的定义。*
