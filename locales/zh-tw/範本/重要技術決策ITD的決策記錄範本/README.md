# 重要技術決策(ITD)的決策記錄範本

這是 [ITD:面向大規模高管技術決策的精益 ADR - Ignacio Larrañaga](https://ignaciolarranaga.medium.com/itds-a-lean-adr-for-executive-technical-decision-making-at-scale-e18bb3f6a563) 中所述的重要技術決策(Important Technical Decisions,ITD)範本。

ITD 是 ADR 的一種聚焦式演進,針對速度、清晰度和高管驗證進行了最佳化。ADR 記錄的是「決定了什麼」,而 ITD 是一種精益的、決策優先的製品,它使決策本身可被評審,從而讓利益相關者能夠快速瀏覽並輕鬆提出質疑。ITD 非常適合那些不嚴格屬於架構範疇的技術決策,例如選擇模型、庫或 CI/CD 策略。

在每個 ITD 檔案中,撰寫以下章節:

# 標題

陳述決策本身,而不是對主題的描述。
例如,「使用 Qwen2.5 1.5B Instruct 進行裝置端翻譯」。

## 問題

用一句話說明我們要解決什麼。

## 考慮過的選項

擺在桌面上的各個備選方案,所選方案用**粗體**標出。

## 理由

只寫促成該選擇的決定性因素,而不是羅列所有利弊。

## 備註

可選。值得記錄的任何其他背景,例如約束、假設或連結。
