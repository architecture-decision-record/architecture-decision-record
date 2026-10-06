# 将决策作为代码的适应度函数

适应度函数(fitness function)是用编程代码编写的客观自动化检查,用于验证决策是否得到遵守。

- 适应度函数使决策可测试、可保证。

- 针对决策的适应度函数可以极大地帮助质量保证、合规流程和治理目标。

## 适应度函数如何与决策关联

决策记录负责记录决策,而适应度函数负责保证决策。

- 决策示例:我们为满足审计要求而使用事件溯源。

- 适应度函数示例:我们使用持续集成服务器来测试所有状态变更都必须产生事件。

## 为什么适应度函数有助于决策

客观的度量:适应度函数要么通过,要么失败,因此工作情况清晰可见。

持续使用:适应度函数是你的活规则,在每次提交和构建时运行。

重构的信心:适应度函数能自动发现违反决策规则的错误。

可扩展的治理:适应度函数在不制造瓶颈的情况下保证标准得到执行。

## 适应度函数可以使用 AI 吗?

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

## 架构单元测试

[ArchUnit](https://www.archunit.org/):使用任何普通的 Java 单元测试框架来检查 Java 代码的架构规则。

[ArchUnitTS](https://github.com/LukasNiessen/ArchUnitTS):使用 Jest、Vitest、Jasmine 等来检查 TypeScript 代码和 JavaScript 代码的架构规则。
