# 重要技术决策（ITD）个决策记录模板

迭是[《ITDs: a lean ADR for executive technical decision-making at scale - Ignacio Larrañaga》](https://ignaciolarranaga.medium.com/itds-a-lean-adr-for-executive-technical-decision-making-at-scale-e18bb3f6a563)里描述个重要技术决策（ITD）模板。

ITD 是 ADR 个聚焦演进，针对速度、清爽搭高层确认做了优化。ADR 记录个是做了啥决定，ITD 则是精简、决策优先个工件，让决策本身可以被评审，
利益相关者可以快速浏览，也容易提出质疑。ITD 特别适合勿严格属于架构个技术决策，比方选模型、选库或者选 CI/CD 策略。

每份 ITD 文件里，写下底迭几节：

# 标题

写出决策本身，而弗是对话题个描述。
比方“设备端翻译用 Qwen2.5 1.5B Instruct”。

## 问题

用一句话讲明阿拉想解决啥。

## 考虑过个选项

摆辣桌面上个备选方案，选中个选项用**粗体**。

## 理据

只写导致迭个选择个决定性因素，勿需要列出所有利弊。

## 备注

可选。任何值得记下个额外背景，比方限制、假设或者链接。
