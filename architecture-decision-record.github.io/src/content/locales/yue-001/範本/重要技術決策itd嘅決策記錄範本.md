# 重要技術決策（ITD）嘅決策記錄範本

呢個係 [ITDs: a lean ADR for executive technical decision-making at scale - Ignacio Larrañaga](https://ignaciolarranaga.medium.com/itds-a-lean-adr-for-executive-technical-decision-making-at-scale-e18bb3f6a563) 所述嘅重要技術決策（ITD）範本。

ITD 係 ADR 一個聚焦嘅演進，針對速度、清晰度同管理層驗證作出優化。ADR 記錄「決定咗咩」，而 ITD 就係精簡、以決策為先嘅工件，令決策本身可以被審閱，持份者可以快速瀏覽同輕易提出質疑。ITD 非常適合並非嚴格屬於架構範疇嘅技術決策，例如揀選模型、程式庫或者 CI/CD 策略。

喺每個 ITD 檔案入面，寫以下章節：

# 標題

寫出決策本身，而唔係課題嘅描述。
例如「用 Qwen2.5 1.5B Instruct 做裝置端翻譯」。

## 問題

用一句說話講明我哋想解決咩。

## 考慮過嘅選項

擺上枱面嘅替代方案，所揀選嘅選項用**粗體**標示。

## 理據

只寫促成選擇嘅決定性因素，唔係逐一列出所有優缺點。

## 備註

可選。任何值得記錄嘅額外背景，例如限制、假設或者連結。
