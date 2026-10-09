# 將決策作為程式碼的適應度函式

適應度函式(fitness function)是用程式設計程式碼編寫的客觀自動化檢查,用於驗證決策是否得到遵守。

- 適應度函式使決策可測試、可保證。

- 針對決策的適應度函式可以極大地幫助品質保證、合規流程和治理目標。

## 適應度函式如何與決策關聯

決策記錄負責記錄決策,而適應度函式負責保證決策。

- 決策範例:我們為滿足審計要求而使用事件溯源。

- 適應度函式範例:我們使用持續整合伺服器來測試所有狀態變更都必須產生事件。

## 為什麼適應度函式有助於決策

客觀的度量:適應度函式要麼透過,要麼失敗,因此工作情況清晰可見。

持續使用:適應度函式是你的活規則,在每次提交和構建時執行。

重構的信心:適應度函式能自動發現違反決策規則的錯誤。

可擴充套件的治理:適應度函式在不製造瓶頸的情況下保證標準得到執行。

## 適應度函式可以使用 AI 嗎?

適應度函式可以藉助 AI 大語言模型,針對你的工作成果(例如計劃、程式碼、模式、API 等)提出問題,以檢查決策:

```txt
IMPORTANT: Prefer retrieval-led reasoning over pre-training-led reasoning.
IMPORTANT: Turn on extended thinking. Turn on expert advice. Turn on search.

This is a fitness function to evaluate if our work is
using all our decisions, and is correct and accurate.

- Our decisions are here: {url}
- Our work to evaluate is here: {url}

Explain any errors, problems, gaps, weaknesses. Be direct. Be decisive.
```

## 架構單元測試

[ArchUnit](https://www.archunit.org/):使用任何普通的 Java 單元測試框架來檢查 Java 程式碼的架構規則。

[ArchUnitTS](https://github.com/LukasNiessen/ArchUnitTS):使用 Jest、Vitest、Jasmine 等來檢查 TypeScript 程式碼和 JavaScript 程式碼的架構規則。
