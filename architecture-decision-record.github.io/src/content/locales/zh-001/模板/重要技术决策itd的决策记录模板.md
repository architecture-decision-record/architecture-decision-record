# 重要技术决策(ITD)的决策记录模板

这是 [ITD:面向大规模高管技术决策的精益 ADR - Ignacio Larrañaga](https://ignaciolarranaga.medium.com/itds-a-lean-adr-for-executive-technical-decision-making-at-scale-e18bb3f6a563) 中所述的重要技术决策(Important Technical Decisions,ITD)模板。

ITD 是 ADR 的一种聚焦式演进,针对速度、清晰度和高管验证进行了优化。ADR 记录的是“决定了什么”,而 ITD 是一种精益的、决策优先的制品,它使决策本身可被评审,从而让利益相关者能够快速浏览并轻松提出质疑。ITD 非常适合那些不严格属于架构范畴的技术决策,例如选择模型、库或 CI/CD 策略。

在每个 ITD 文件中,撰写以下章节:

# 标题

陈述决策本身,而不是对主题的描述。
例如,“使用 Qwen2.5 1.5B Instruct 进行设备端翻译”。

## 问题

用一句话说明我们要解决什么。

## 考虑过的选项

摆在桌面上的各个备选方案,所选方案用**粗体**标出。

## 理由

只写促成该选择的决定性因素,而不是罗列所有利弊。

## 备注

可选。值得记录的任何其他背景,例如约束、假设或链接。
