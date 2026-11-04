# 決策即程式碼嘅適應度函數

適應度函數係用程式碼寫成嘅客觀自動化檢查，用嚟驗證決策有冇持續被遵守。

- 適應度函數令決策可以被測試同保證。

- 決策嘅適應度函數可以大大幫助品質保證、監管流程同管治目標。

## 適應度函數同決策點樣連繫

決策記錄負責記錄決策，而適應度函數就負責保證決策。

- 決策例子：我哋為咗符合審計要求而採用事件溯源（event sourcing）。

- 適應度函數例子：我哋用持續整合伺服器去測試，所有狀態更改都必須產生事件。

## 點解適應度函數對決策有幫助

客觀量度：適應度函數只有通過或者失敗，所以工作成果一目了然。

持續使用：適應度函數係你活生生嘅規則，每次提交同建置都會運行。

有信心重構：適應度函數會自動揪出違反決策規則嘅錯誤。

可擴展嘅管治：適應度函數可以保證標準得到遵守，又唔會造成樽頸。

## 適應度函數可以用 AI 嗎？

適應度函數可以利用 AI 大型語言模型（LLM）嚟處理決策，方法係就你嘅工作（例如計劃、程式碼、結構描述、API 等）提出問題：

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

[ArchUnit](https://www.archunit.org/)：用任何普通嘅 Java 單元測試框架，檢查 Java 程式碼嘅架構規則。

[ArchUnitTS](https://github.com/LukasNiessen/ArchUnitTS)：用 Jest、Vitest、Jasmine 等，檢查 TypeScript 程式碼同 JavaScript 程式碼嘅架構規則。
