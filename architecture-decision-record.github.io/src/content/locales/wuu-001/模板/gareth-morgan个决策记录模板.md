# [000] 标题
*给每份 ADR 分配一个编号，方便引用搭编目* \
*注意：所有斜体文字是提示，正式使用时应该删掉*

## 状态 - 草稿 / 生效 /  被 [000] 弃用 / 取代 [000]

## 背景
*简单描述迭份 ADR 想解决个问题，还有问题为啥存在。*

## 决定个办法
*详细讲明已经做或者将要做个、对架构有重大意义个决策，并且讲明伊哪能解决背景章节里概述个问题。*

## 后果
*迭个决策对系统个架构特性搭功能需求有啥影响？*

## 治理
*决策个结果哪能监控？* \
*哪能确保遵守迭个决策？*

## 选项分析
*如果适用，放进或者链接为得出迭份文件里个决策而做过个任何取舍分析。*

### 图例
*可选：为利益相关者提供视觉辅助，帮助快速发现正面搭负面个取舍，比方用简单个红绿灯高亮，加上正面或者负面前缀。*

<span style="background-color:#4bce97; color:black;">绿色</span>背景表示很合适，经过<span style="background-color:#f1c232; color:black;">琥珀色</span>逐渐变差，<span style="background-color:#e06666; color:black;">红色</span>表示最勿合适。 \
\+ 表示有正面影响个评论 \
\- 表示有负面影响个评论

### 高层概览
*每个选项一眼看上去搭问题背景有多合适？*

<table>
  <thead>
    <tr>
      <th>摘要</th>
      <th>选项 1</th>
      <th>选项 2</th>
      <th>选项 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><i>实施难易度</i></td>
      <td>
        <span style="background-color:#4bce97; color:black; padding-right:5px">
          + 非常容易
        </span>
      </td>
      <td>
        <span style="background-color:#f1c232; color:black; padding-right:5px">
            - 有眼棘手
        </span>
      </td>
      <td>
        <span style="background-color:#e06666; color:black; padding-right:5px">
            - 实施规模大，需要专家知识
        </span>
      </td>
    </tr>
    <tr>
      <td><i>辰光安排</i></td>
      <td>
        <span style="background-color:#4bce97; color:black; padding-right:5px">
            + 非常快
        </span>
      </td>
       <td>
        <span style="background-color:#f1c232; color:black; padding-right:5px">
            - 蛮慢
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
            - 呒没战略价值，纯粹是战术上个
        </span>
      </td>
       <td>
        <span style="background-color:#f1c232; color:black; padding-right:5px">
            + 稍微改善客户上手体验
        </span>
      </td>
      <td>
        <span style="background-color:#4bce97; color:black; padding-right:5px">
            + 适合即将到来个合并
        </span>
      </td>
    </tr>
  </tbody>
</table>

### 功能需求
*每个潜在选项搭想要个功能需求有多合适？*

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

*可选：加行或者再加一张表，覆盖已经晓得个以后场景。*

### 非功能需求
*每个潜在选项搭想要个架构特性有多合适？
注意：“架构特性”会是更加合适个标题，勿过请按侬业务领域熟悉个语言来调整。*

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

*可选：放进或者链接迭眼架构特性搭侬个业务／产品相关个定义。*
