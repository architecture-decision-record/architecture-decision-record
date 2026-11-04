# 决策即代码个适应度函数

适应度函数是用编程代码写个客观自动检查，用来验证决策有勿有被维持。

- 适应度函数让决策可以测试，可以保证。

- 决策个适应度函数可以大大帮助质量保证、合规流程搭治理目标。

## 适应度函数搭决策哪能连起来

决策记录记下决策，适应度函数保证决策。

- 决策例子：阿拉用事件溯源来满足审计需求。

- 适应度函数例子：阿拉用持续集成服务器来测试，所有状态变更必须产生事件。

## 适应度函数为啥对决策有帮助

客观度量：适应度函数要么通过要么失败，所以工作看得见，也清爽。

持续使用：适应度函数是侬活个规则，每次提交搭构建侪会跑。

有信心重构：适应度函数自动抓出决策规则个错误。

可扩展个治理：适应度函数保证标准，又勿会造成瓶颈。

## 适应度函数好用 AI 伐？

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

## 架构单元测试

[ArchUnit](https://www.archunit.org/)：用任何普通 Java 单元测试框架，检查 Java 代码个架构规则。

[ArchUnitTS](https://github.com/LukasNiessen/ArchUnitTS)：用 Jest、Vitest、Jasmine 等等，检查 TypeScript 代码搭 JavaScript 代码个架构规则。
