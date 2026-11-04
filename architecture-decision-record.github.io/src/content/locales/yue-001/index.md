# 架構決策記錄（ADR）

架構決策記錄（ADR）係一份文件，記錄一項重要嘅架構決策，連同佢嘅背景同後果。

> [!IMPORTANT]
> 喺將呢啲資源用於任何關鍵系統之前，請自行做足盡職審查。

內容：

- [咩係架構決策記錄？](#咩係架構決策記錄)
- [點樣開始用 ADR](#點樣開始用-adr)
- [點樣用工具開始用 ADR](#點樣用工具開始用-adr)
- [點樣用 git 開始用 ADR](#點樣用-git-開始用-adr)
- [架構決策記錄嘅 Claude Code 技能](#架構決策記錄嘅-claude-code-技能)
- [ADR 檔案命名慣例](#adr-檔案命名慣例)
- [寫好 ADR 嘅建議](#寫好-adr-嘅建議)
- [ADR 範本例子](#adr-範本例子)
- [ADR 團隊合作建議](#adr-團隊合作建議)
- [ADR 團隊合作問題](#adr-團隊合作問題)
- [ADR 嘅下一步概念](#adr-嘅下一步概念)
- [架構圖同視圖同觀點](#架構圖同視圖同觀點)
- [決策即程式碼嘅適應度函數](#決策即程式碼嘅適應度函數)
- [Pull request 嘅決策護欄](#pull-request-嘅決策護欄)
- [更多資料](#更多資料)

範本：

- [Jeff Tyree 同 Art Akerman 嘅決策記錄範本](範本/jeff-tyree同art-akerman嘅決策記錄範本/)
- [Michael Nygard 嘅決策記錄範本](範本/michael-nygard嘅決策記錄範本/)
- [EdgeX 嘅決策記錄範本](範本/edgex嘅決策記錄範本/)
- [arc42 嘅決策記錄範本](範本/arc42嘅決策記錄範本/)
- [亞歷山大模式嘅決策記錄範本](範本/亞歷山大模式嘅決策記錄範本/)
- [商業個案嘅決策記錄範本](範本/商業個案嘅決策記錄範本/)
- [MADR 項目嘅決策記錄範本](範本/madr項目嘅決策記錄範本/)
- [用 Planguage 嘅決策記錄範本](範本/用planguage嘅決策記錄範本/)
- [Paulo Merson 嘅決策記錄範本](https://github.com/pmerson/ADR-template)
- [Olaf Zimmermann 嘅決策記錄範本](https://medium.com/olzzio/y-statements-10eb07b5a177)
- [Gareth Morgan 嘅決策記錄範本](範本/gareth-morgan嘅決策記錄範本/)
- [GIG Cymru NHS Wales 嘅決策記錄範本](範本/gig-cymru-nhs-wales嘅決策記錄範本/)
- [Ignacio Larrañaga 嘅重要技術決策（ITD）決策記錄範本](範本/重要技術決策itd嘅決策記錄範本/)

例子：

- [CSS 框架](例子/css框架/)
- [環境變數配置](例子/環境變數配置/)
- [指標、監控、警報](例子/指標監控同警報/)
- [Microsoft Azure DevOps](例子/microsoft-azure-devops/)
- [單一倉庫定多倉庫](例子/單一倉庫定多倉庫/)
- [程式語言](例子/程式語言/)
- [機密儲存](例子/機密儲存/)
- [時間戳格式](例子/時間戳格式/)
- [仲有好多……](例子/)

## 咩係架構決策記錄？

**架構決策記錄**（ADR）係一份文件，記錄一項重要嘅架構決策，連同佢嘅背景同後果。

**架構決策**（AD）係針對重要需求而作出嘅軟件設計選擇。

**架構決策日誌**（ADL）係為某個項目（或者組織）建立同維護嘅所有 ADR 嘅集合。

**架構重大需求**（ASR）係對軟件系統架構有可衡量影響嘅需求。

以上全部都屬於**架構知識管理**（AKM）嘅範疇。

本文件嘅目標，係快速概述 ADR、點樣建立 ADR，以及邊度可以搵到更多資料。

縮寫：

  * **AD**：架構決策

  * **ADL**：架構決策日誌

  * **ADR**：架構決策記錄

  * **AKM**：架構知識管理

  * **ASR**：架構重大需求

## 點樣開始用 ADR

想開始用 ADR，可以同你嘅隊友傾下以下幾方面。

決策識別：

  * 呢個 AD 有幾緊急、幾重要？

  * 要而家就做決定，定係可以等多啲資料先決定？

  * 個人同集體嘅經驗，以及公認嘅設計方法同實踐，都可以幫助識別決策。

  * 最理想係維持一份決策待辦清單，同產品待辦清單互相補足。

決策制定：

  * 現時有好多決策制定技巧，有通用嘅，亦有針對軟件架構嘅，例如對話圖譜（dialogue mapping）。

  * 群體決策係一個活躍嘅研究課題。

決策落實同執行：

  * AD 係用喺軟件設計入面，所以必須傳達畀出資、開發同營運系統嘅持份者，並且獲佢哋接受。

  * 架構上一目了然嘅編碼風格，以及專注於架構關注點同決策嘅程式碼審閱，係兩種相關嘅做法。

  * 喺軟件演進過程中將軟件系統現代化嗰陣，亦要（重新）考慮 AD。

決策分享（可選）：

  * 好多 AD 會喺唔同項目之間重複出現。

  * 因此，採用明確嘅知識管理策略嗰陣，過往決策嘅經驗（無論好定壞）都可以成為寶貴嘅可重用資產。

決策記錄：

  * 現時有好多用嚟記錄決策嘅範本同工具。

  * 可以睇敏捷社群，例如 M. Nygard 嘅 ADR。

  * 可以睇傳統嘅軟件工程同架構設計流程，例如 IBM UMF 以及 CapitalOne 嘅 Tyree 同 Akerman 所建議嘅表格版面。

更多資料：

  * 以上步驟採用自維基百科嘅 [Architectural Decision](https://en.wikipedia.org/wiki/Architectural_decision) 條目

## 點樣用工具開始用 ADR

- [MySpec](https://myspec.dev) — 自動化規格同架構決策平台，將項目章程、技術架構同 ADR 整理成清晰嘅 Markdown，並透過 MCP 提供。

你可以隨自己喜好，用任何方式配合工具開始用 ADR。

例如：

  * 如果你鍾意用 Google Drive 同線上編輯，就可以建立一份 Google Doc 或者 Google Sheet。

  * 如果你鍾意用原始碼版本控制（例如 git），就可以為每份 ADR 建立一個檔案。

  * 如果你鍾意用項目規劃工具（例如 Atlassian Jira），就可以用工具嘅規劃追蹤器。

  * 如果你鍾意用 wiki（例如 MediaWiki），就可以建立一個 ADR wiki。

## 點樣用 git 開始用 ADR

如果你鍾意用 git 版本控制，以下係我哋喺一般有原始碼嘅軟件項目入面，點樣用 git 開始用 ADR 嘅方法。

為 ADR 檔案建立一個目錄：

```sh
$ mkdir adr
```

為每份 ADR 建立一個文字檔案，例如 `choose-database.md`：

```sh
$ vi choose-database.md
```

喺 ADR 入面隨便寫你想寫嘅內容。可以參考本儲存庫入面嘅範本獲取靈感。

將 ADR 提交（commit）入你嘅 git 儲存庫。

## 架構決策記錄嘅 Claude Code 技能

本儲存庫喺 [`skills/`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/) 之下附帶兩個 [Claude Code](https://claude.com/claude-code) 技能，令 AI 編程代理可以按本項目建議嘅方式撰寫同維護 ADR：

- [`architecture-decision-record-skill`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/architecture-decision-record-skill/) — 通用，適合任何項目入面撰寫 ADR 嘅人。幫助判斷一個決策需唔需要 ADR、設立 `adr/` 或者 `decisions/` 目錄、為檔案命名、從內置嘅十一個骨架範本入面揀選範本，以及撰寫紮實嘅背景／決策／後果章節。

- [`architecture-decision-record-maintainer-skill`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/architecture-decision-record-maintainer-skill/) — 專為本儲存庫嘅維護者而設。記錄儲存庫嘅結構、README／語言版本對應慣例，以及新增範本、例子或者工具連結嘅確切步驟。

要使用技能，將佢嘅資料夾複製到你正工作嘅儲存庫根目錄嘅 `.claude/skills/`（或者複製到 `~/.claude/skills/`，令每個項目都可以用），然後請 Claude Code 撰寫或者審閱 ADR。

## ADR 檔案命名慣例

如果你選擇用一般文字檔案嚟建立 ADR，咁你可能想訂立自己嘅 ADR 檔案命名慣例。

我哋傾向用有特定格式嘅檔案命名慣例。

例子：

  * choose-database.md

  * format-timestamps.md

  * manage-passwords.md

  * handle-exceptions.md

我哋嘅檔案命名慣例：

  * 名稱用現在式祈使動詞短語。咁樣有助提高可讀性，亦同我哋嘅提交訊息格式一致。

  * 名稱用小寫字母同連字號（同本儲存庫一樣）。呢個係可讀性同系統易用性之間嘅平衡。

  * 副檔名係 markdown。咁樣方便排版。

## 寫好 ADR 嘅建議

好 ADR 嘅特點：

* 理據：解釋做呢個 AD 嘅原因。可以包括背景（見下文）、各個潛在選擇嘅利弊、功能比較、成本效益討論等等。

* 具體：每份 ADR 應該只講一個 AD，唔好同時講多個 AD。

* 時間戳記：標明 ADR 入面每個項目係幾時寫嘅。對於可能隨時間改變嘅方面，例如成本、時間表、擴展等等，呢點尤其重要。

* 不可更改：唔好改動 ADR 入面現有嘅資料。要補充新資料就修訂 ADR，要取代就另外建立一份新 ADR。

ADR 入面好嘅「背景」部分嘅特點：

* 說明你組織嘅處境同業務優先次序。

* 包括基於團隊嘅社交同技能組合所作出嘅理據同考慮。

* 包括相關嘅利弊，並且用配合你需要同目標嘅方式去描述。

ADR 入面好嘅「後果」部分嘅特點：

* 說明做咗決策之後會有咩跟進。可以包括影響、結果、產出、跟進工作等等。

* 包括任何後續 ADR 嘅資料。一份 ADR 觸發需要更多 ADR 係相當普遍嘅，例如一份 ADR 作出咗重大嘅整體選擇，繼而衍生出更多較細嘅決策需求。

* 包括任何事後檢討流程。團隊通常會喺一個月後檢討每份 ADR，將 ADR 嘅資料同實際情況比較，從而學習同進步。

新 ADR 可以取代之前嘅 ADR：

* 如果作出嘅 AD 取代或者令之前嘅 ADR 失效，就應該建立新 ADR

## ADR 範本例子

我哋喺網上收集嘅 ADR 範本例子：

- [Michael Nygard 嘅 ADR 範本](範本/michael-nygard嘅決策記錄範本/)（簡單而受歡迎）

- [Jeff Tyree 同 Art Akerman 嘅 ADR 範本](範本/jeff-tyree同art-akerman嘅決策記錄範本/)（較精密）

- [亞歷山大模式嘅 ADR 範本](範本/亞歷山大模式嘅決策記錄範本/)（簡單，附背景細節）

- [商業個案嘅 ADR 範本](範本/商業個案嘅決策記錄範本/)（更偏向 MBA 風格，包括成本、SWOT 同更多意見）

- [Markdown Any Decision Records（MADR）項目嘅 ADR 範本](範本/madr項目嘅決策記錄範本/)（有簡單版同詳細版；後者強調選項同佢哋嘅利弊）

- [用 Planguage 嘅 ADR 範本](範本/用planguage嘅決策記錄範本/)（更偏向品質保證）

- [Ignacio Larrañaga 嘅重要技術決策（ITD）範本](範本/重要技術決策itd嘅決策記錄範本/)（精簡、決策為先，針對管理層快速審閱而優化）

## ADR 團隊合作建議

如果你考慮同團隊一齊用決策記錄，以下係我哋同好多團隊合作之後學到嘅建議。

你有機會帶領隊友，方法係一齊傾「點解」，而唔係硬性規定「做咩」。例如，決策記錄係令團隊思考得更聰明、溝通得更好嘅方法；如果淨係變成事後被迫補交嘅文書工作，決策記錄就冇咩價值。

有啲團隊遠遠更鍾意「decisions」（決策）呢個名，多過「ADRs」呢個縮寫。有啲團隊用「decisions」做目錄名稱，就好似突然開竅咁，團隊開始將更多資料放入目錄，例如供應商決策、規劃決策、排期決策等等。所有呢啲資料都可以用同一個範本。我哋推測，人哋對文字（「decisions」）嘅學習速度快過縮寫（「ADRs」）；去除「record」（記錄）呢個字之後，人哋亦更有動力撰寫進行中嘅文件；另外有啲開發人員同經理唔鍾意「architecture」（架構）呢個字。

理論上，不可更改係最理想。實際上，可更改對我哋嘅團隊更行得通。我哋會將新資料加入現有嘅 ADR，並附上日期戳記，同埋註明該資料係喺決策之後先出現。咁樣會形成一份我哋大家都可以更新嘅「活文件」。典型嘅更新情況包括：因為新隊友、新產品或服務、我哋實際使用嘅結果而獲得新資料，或者事後出現第三方嘅變動，例如供應商嘅功能、定價方案、授權協議等等。

## ADR 團隊合作問題

### 邊個可以建立 ADR？

考慮嘅方面，例如特定嘅人、特定嘅角色、特定嘅團隊或者特定嘅部門；亦要考慮有冇人、角色、團隊或者部門可以委託製作 ADR，即係由佢哋提出要求，交由其他人撰寫。

答案例子：我哋組織入面，任何一個睇過架構決策記錄 README 頁面嘅人，都可以提出 ADR，即係話佢可以開始撰寫，並且同團隊分享。

### 咩情況值得提出 ADR？

考慮嘅方面，例如你組織嘅團隊工作方式、你嘅軟件系統結構、跨團隊協調、長遠可維護性、對外介面、你想令邊個受惠等等。

答案例子：當我哋想令日後嘅開發人員明白我哋做嘢背後嘅「點解」，就會想建立 ADR。

### 咩情況唔值得提出 ADR？

考慮嘅方面，例如決策同架構無關，或者好細（例如風險極低、自成一體或者只涉及單一開發人員），或者已經喺其他地方完全涵蓋（例如標準、政策或者文件），或者只係臨時性質（例如權宜辦法、概念驗證或者實驗）。

答案例子：當一個決策喺範圍、時間、風險同成本上都有限，或者已經喺其他地方涵蓋咗，我哋就想略過 ADR。

### ADR 嘅生命週期係點？

考慮嘅方面，例如建立流程、研究流程、決策流程、實施流程同終止流程。考慮點樣隨時間追蹤 ADR 嘅生命週期，例如點樣將 ADR 由一個狀態推進到下一個狀態，以及點樣向持份者傳達。

答案例子：我哋想 ADR 有五個生命週期階段：啟動 → 研究 → 評估 → 實施 → 維護 → 終止。

### ADR 生命週期各步驟嘅準則係咩？

考慮嘅方面，例如 ADR 嘅驗收準則，即係你點知佢夠好，可以由一個生命週期步驟推進到下一個？問題有冇清楚闡述？有冇考慮過其他選項？取捨有冇夠清楚理解同記錄？
所有相關背景有冇齊備？所有相關持份者有冇參與？所有意見有冇納入？

答案例子：當主責團隊 1) 完成研究、2) 完成評估、3) 向持份者發佈 ADR 建議並徵求意見（為期一個星期）、4) 所有持份者嘅意見都已經納入同處理，我哋就想 ADR 交由持份者投票。

### 邊啲角色同職責同 ADR 有互動？

考慮嘅角色，例如提案人、研究員、評估員、審閱者、批准者、維護者等等。考慮嘅職責，例如同持份者溝通、確保期望得到滿足、喺網站或者內聯網分享，以及定期審視工作，尤其係相關更改出現嗰陣。

答案例子：我哋想每份 ADR 都一直有一位主要聯絡人、一位次要聯絡人同一個負責團隊；佢哋負責溝通、發佈、維護、至少每年一次嘅定期檢視，以及有需要時最終終止。

### 管治同 ADR 有咩互動？

考慮嘅方面，例如你組織嘅工作方式、任何特別合規需要（例如法律或者人力資源方面）、你想點樣處理共識、衝突同升級。有冇某啲範疇、人或者團隊對 ADR 嘅影響力大過其他，例如可以批准、投票或者否決？

答案例子：ADR 嘅管治按以下優先次序：行政總裁（CEO）、技術總監（CTO）、法務總監（CLO）、實施 ADR 嘅團隊、團隊入面最熟悉該 AD 嘅專家。除非 ADR 入面有講明，否則其他人冇管治權。

### 邊啲原則同 ADR 有互動？

考慮嘅方面，例如你組織嘅工作方式，包括行動快定慢、追求決策共識定容許決策衝突、風險取向定安全取向、公開討論定私下討論等等。

答案例子：我哋採用以下領導原則：行動優先、有異議但照做（disagree-and-commit）、對於容易回復同容易隔離嘅決策，70% 嘅估算已經夠好，以及採用公開嘅工作方式，但組織保密協議所述嘅機密資料除外。

## ADR 嘅下一步概念

[Arc42](https://arc42.org/) 以務實嘅方式回答兩個問題，並且可以按你嘅具體需要調整。你應該記錄／傳達關於架構嘅咩內容？你應該點樣記錄／傳達？Arc42 包括架構決策記錄，以及關於目標、限制、背景、質素、風險等嘅指引。

[C4 模型](https://c4model.com/)係一個容易學習、對開發人員友善嘅軟件架構繪圖方法。C4 係一套層級式嘅圖，涵蓋背景、容器、組件、程式碼，另外還有支援系統全景、動態同部署嘅輔助圖。

## 架構圖同視圖同觀點

架構圖稱為「架構視圖」。

「架構視圖」係「架構觀點」嘅一個實例。

「架構觀點」有特定嘅受眾，並考慮到特定嘅關注點。

架構觀點例子、視圖例子同圖表例子：

- 業務能力

- 高層次業務流程

- [價值流](https://en.wikipedia.org/wiki/Value_stream)

- 對應到應用程式組件嘅軟件功能

- [C4 模型](https://en.wikipedia.org/wiki/C4_model)背景圖（目標狀態／現況）

- [C4 模型](https://en.wikipedia.org/wiki/C4_model)容器圖（目標狀態／現況）

- [實體關係圖](https://en.wikipedia.org/w/index.php?title=Entity_relationship_diagram)（ERD），用嚟將數據實體對應到應用程式組件

- [序列圖](https://en.wikipedia.org/wiki/Sequence_diagram)，用嚟描述系統內部同整合方面嘅功能流程

- [業務流程模型與標記法](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation)（BPMN）圖，用嚟描述跨應用程式組件嘅數據流

- [業務流程模型與標記法](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation)（BPMN）圖，用嚟描述業務流程／用戶情境

- [身份與存取管理](https://en.wikipedia.org/wiki/Identity_and_access_management)（IAM）圖

- [角色型存取控制](https://en.wikipedia.org/wiki/Role-based_access_control)（RBAC）圖，列出每個應用程式組件嘅角色

- [屬性型存取控制](https://en.wikipedia.org/wiki/Attribute-based_access_control)（ABAC）圖，列出每個應用程式組件嘅屬性

- 私隱圖

相關圖表：

- 用例圖向管理層／客戶展示用例，用例先於需求，需求先於軟件架構。

- 部署圖顯示軟件組件部署到嘅實體硬件／電腦。
- 數據流圖顯示數據點樣喺系統入面流動同被轉換。
- 序列圖用嚟顯示 HTTP 等協定喺時間軸上點樣運作。

- 活動圖描繪軟件系統所進行活動嘅工作流程，例如 NPC AI。

## 決策即程式碼嘅適應度函數

適應度函數係用程式碼寫成嘅客觀自動化檢查，用嚟驗證決策有冇持續被遵守。

- 適應度函數令決策可以被測試同保證。

- 決策嘅適應度函數可以大大幫助品質保證、監管流程同管治目標。

### 適應度函數同決策點樣連繫

決策記錄負責記錄決策，而適應度函數就負責保證決策。

- 決策例子：我哋為咗符合審計要求而採用事件溯源（event sourcing）。

- 適應度函數例子：我哋用持續整合伺服器去測試，所有狀態更改都必須產生事件。

### 點解適應度函數對決策有幫助

客觀量度：適應度函數只有通過或者失敗，所以工作成果一目了然。

持續使用：適應度函數係你活生生嘅規則，每次提交同建置都會運行。

有信心重構：適應度函數會自動揪出違反決策規則嘅錯誤。

可擴展嘅管治：適應度函數可以保證標準得到遵守，又唔會造成樽頸。

### 適應度函數可以用 AI 嗎？

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

### 架構單元測試

[ArchUnit](https://www.archunit.org/)：用任何普通嘅 Java 單元測試框架，檢查 Java 程式碼嘅架構規則。

[ArchUnitTS](https://github.com/LukasNiessen/ArchUnitTS)：用 Jest、Vitest、Jasmine 等，檢查 TypeScript 程式碼同 JavaScript 程式碼嘅架構規則。

## Pull request 嘅決策護欄

[Decision Guardian](https://github.com/DecispherHQ/decision-guardian)
會喺適當時刻自動帶出適當嘅決策記錄——即係開發人員正積極修改
該等決策所涵蓋嘅程式碼嗰陣。唔使寄望開發人員喺合併之前閱讀
文件資料夾，相關背景會直接顯示喺 pull request 上。

呢個適用於任何類型嘅決策記錄：架構決策、數據決策、合規決策、
臨床同醫療決策、保安決策等等。

可配合任何 CI 系統（GitLab、Jenkins、CircleCI）使用，亦可以用作 pre-commit 鉤子。
開源。MIT 授權。

[ADR Guard](https://github.com/chohan-sarmad-ali/delivery-gates) 係一個 GitHub
Action，當受監察嘅程式碼路徑有更改，但冇新增或者更新架構決策記錄嗰陣，
就令 pull request 失敗。豁免係明確嘅：附帶原因嘅 `ADR-Exempt:` 行可以通過關卡，
並會寫入工作摘要。唔綁定任何範本，無依賴項。開源。MIT 授權。

## 更多資料

簡介：

- [Architectural decision (wikipedia.org)](https://wikipedia.org/wiki/Architectural_decision)

- [Architecturally significant requirements (wikipedia.org)](https://wikipedia.org/wiki/Architecturally_significant_requirements)

範本：

- [Documenting architecture decisions - Michael Nygard (thinkrelevance.com)](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)

- [Markdown Architectural Decision Records (adr.github.io)](https://adr.github.io/madr/)

- [Template for documenting architecture alternatives and decisions (stackoverflow.com)](http://stackoverflow.com/questions/7104735/template-for-documenting-architecture-alternatives-and-decisions)

深入閱讀：

- [ADMentor XML project (github.com)](https://github.com/IFS-HSR/ADMentor)

- [Architectural Decision Guidance across Projects: Problem Space Modeling, Decision Backlog Management and Cloud Computing Knowledge (ifs.hsr.ch)](https://www.ifs.hsr.ch/fileadmin/user_upload/customers/ifs.hsr.ch/Home/projekte/ADMentor-WICSA2015ubmissionv11nc.pdf)

- [The Decision View's Role in Software Architecture Practice (computer.org)](https://www.computer.org/csdl/mags/so/2009/02/mso2009020036-abs.html)

- [Documenting Software Architectures: Views and Beyond (resources.sei.cmu.edu)](http://resources.sei.cmu.edu/library/asset-view.cfm?assetID=30386)

- [Architecture Decisions: Demystifying Architecture (utdallas.edu)](https://www.utdallas.edu/~chung/SA/zz-Impreso-architecture_decisions-tyree-05.pdf)

- [ThoughtWorks Technology Radar: Lightweight Architecture Decision Records (thoughtworks.com)](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)

- [A Skeptic’s Guide to Software Architecture Decisions (infoq.com)](https://www.infoq.com/articles/architecture-skeptics-guide/)

- [Architectural Decisions — The Making Of](https://ozimmer.ch/practices/2020/04/27/ArchitectureDecisionMaking.html)

- [Architectural Retrospectives: the Key to Getting Better at Architecting](https://www.infoq.com/articles/architectural-retrospectives/)

- [Software Architecture Monday with Mark Richards](https://developertoarchitect.com/lessons/) — 免費每月軟件架構課程

- [Solution Architecture Decisions - By Gareth Morgan](https://www.linkedin.com/pulse/solution-architecture-decisions-gareth-morgan-0r5xe/)

- ["Keep the Why: Code Becomes Legacy When Nobody Remembers Why"](https://blog.technopathy.club/keep-the-why-code-becomes-legacy-when-nobody-remembers-why)

工具：

- [Command-line tools for working with Architecture Decision Records](https://github.com/npryce/adr-tools)

- [Command line tools with python - by Victor Sluiter](https://bitbucket.org/tinkerer_/adr-tools-python/src/master/)

- [Architectural Design Decision Support Framework (ADvISE)](https://swa.univie.ac.at/Software_Architecture/research-projects/architectural-design-decision-support-framework-advise/)

- [Decision Guardian](https://github.com/DecispherHQ/decision-guardian)

- [Mneme HQ - ADR enforcement for AI coding agents](https://github.com/TheoV823/mneme)

- [Keep the Why - a repo-native convention and agent skill that continuously captures, or retrospectively recovers, the reasoning behind a codebase](https://github.com/oliver-zehentleitner/keep-the-why)

- [ADR Guard - GitHub Action that fails a pull request changing watched code without an architecture decision record](https://github.com/chohan-sarmad-ali/delivery-gates)

- [kgai - append-only decision log for AI coding agents, a machine-readable companion to ADR files](https://github.com/kgaidev/kgai)

特定公司嘅指引：

- [Amazon: AWS Prescriptive Guidance: ADR Process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)

- [GitHub: ADR GitHub organization](https://adr.github.io/)

- [RedHat: Why you should use ADRs](https://www.redhat.com/architect/architecture-decision-records)

例子：

- [Repository of Architecture Decision Records made for the Arachne Framework](https://github.com/arachne-framework/architecture)

影片：

- [An introduction to arc42 with Savvas Kleanthous](https://www.youtube.com/watch?v=V5clR8c6D7o)

- [The C4 model for visualising software architecture - by Simon Brown](https://www.youtube.com/watch?v=KvoBrUd1-5E)

Podcast：

- [Software Architecture Bookclub Podcast](https://www.developertoarchitect.com/bookclub-podcast.html)

書籍：

- [Software Architecture Metrics: Case Studies to Improve the Quality of Your Architecture - by Christian Ciceri, Dave Farley, Neal Ford, Andrew Harmel-Law, Michael Keeling and Carola Lilienthal](https://www.amazon.com/Software-Architecture-Metrics-Christian-Ciceri-ebook/dp/B0B1NZ8Z5V)

- [Software Systems Architecture: Working With Stakeholders Using Viewpoints and Perspectives - by Nick Rozanski and Eoin Woods](https://www.amazon.com/Software-Systems-Architecture-Stakeholders-Perspectives/dp/032171833X)

- [Software Architecture in Practice (SEI Series in Software Engineering)](https://www.amazon.com/Software-Architecture-Practice-SEI-Engineering-ebook/dp/B094CPJ96B)

- [Documenting Software Architectures: Views and Beyond (SEI Series in Software Engineering)](https://www.amazon.com/Documenting-Software-Architectures-Beyond-Engineering-ebook/dp/B0046XS3RO)

- [The Software Architect Elevator: Redefining the Architect's Role in the Digital Enterprise](https://www.amazon.com/Software-Architect-Elevator-Redefining-Architects-ebook/dp/B086WQ9XL1)

- [Fundamentals of Software Architecture: An Engineering Approach - by Mark Richards and Neal Ford](https://www.amazon.com/Fundamentals-Software-Architecture-Engineering-Approach-ebook/dp/B0849MPK73)

- [Building Evolutionary Architectures - by Neal Ford, Rebecca Parsons, Patrick Kua, Pramod Sadalage](https://www.amazon.com/Building-Evolutionary-Architectures-Neal-Ford-ebook/dp/B0BN4T1P27?crid=37FA31IFLAS0Z)

- [Foundations of Decision Analysis by Ronald Howard and Ali Abbas](https://www.amazon.com/Foundations-Decision-Analysis-Ronald-Howard-ebook/dp/B00SZECJTI?crid=14BK5SDP76UN6)

- [Head First Software Architecture - by Raju Gandhi, Neal Ford and Mark Richards](https://www.amazon.com/Head-First-Software-Architecture-Architectural-ebook/dp/B0CW1JMNF2)

- [Communication Patterns: A Guide for Developers and Architects - by Jacqui Read](https://www.amazon.com/Communication-Patterns-Guide-Developers-Architects/dp/1098140540)

另請參閱：

- REMAP (Representation and Maintenance of Process Knowledge)

- DRL (Decision Representation Language)

- IBIS (Issue-Based Information System)

- QOC (Questions, Options, and Criteria)

- IBM’s e-Business Reference Architecture Framework

- [Decision Reasoning Format (DRF)](https://github.com/reasoning-formats/reasoning-formats) — 與供應商無關、機器可讀嘅 YAML/JSON 格式，用嚟表示決策，並明確列出推理、假設、認知狀態同取捨。透過為決策文件加入結構化、可驗證嘅推理，補足 ADR。
