# 架構決策記錄(ADR)

架構決策記錄(ADR)是一份文件,記錄一項重要的架構決策及其背景與後果。

> [!IMPORTANT]
> 在將這些資源用於任何關鍵系統之前,請自行做好盡職調查。

目錄:

- [什麼是架構決策記錄?](#什麼是架構決策記錄)
- [如何開始使用 ADR](#如何開始使用-adr)
- [如何藉助工具開始使用 ADR](#如何藉助工具開始使用-adr)
- [如何透過 git 開始使用 ADR](#如何透過-git-開始使用-adr)
- [適用於 ADR 的 Claude Code 技能](#適用於-adr-的-claude-code-技能)
- [檔案命名約定](#檔案命名約定)
- [撰寫優質 ADR 的建議](#撰寫優質-adr-的建議)
- [ADR 範例範本](#adr-範例範本)
- [ADR 團隊協作建議](#adr-團隊協作建議)
- [ADR 的團隊合作問題](#adr-的團隊合作問題)
- [ADR 的下一步概念](#adr-的下一步概念)
- [架構圖、檢視與觀點](#架構圖檢視與觀點)
- [將決策作為程式碼的適應度函式](#將決策作為程式碼的適應度函式)
- [拉取請求的決策護欄](#拉取請求的決策護欄)
- [更多資訊](#更多資訊)

範本:

- [Jeff Tyree 和 Art Akerman 的決策記錄範本](範本/jeff-tyree和art-akerman的決策記錄範本/)
- [Michael Nygard 的決策記錄範本](範本/michael-nygard的決策記錄範本/)
- [EdgeX 的決策記錄範本](範本/edgex的決策記錄範本/)
- [arc42 的決策記錄範本](範本/arc42的決策記錄範本/)
- [亞歷山大模式的決策記錄範本](範本/亞歷山大模式的決策記錄範本/)
- [商業論證的決策記錄範本](範本/商業論證的決策記錄範本/)
- [MADR 專案的決策記錄範本](範本/madr專案的決策記錄範本/)
- [使用 Planguage 的決策記錄範本](範本/使用planguage的決策記錄範本/)
- [Paulo Merson 的決策記錄範本](https://github.com/pmerson/ADR-template)
- [Olaf Zimmermann 的決策記錄範本](https://medium.com/olzzio/y-statements-10eb07b5a177)
- [Gareth Morgan 的決策記錄範本](範本/gareth-morgan的決策記錄範本/)
- [GIG Cymru NHS Wales 的決策記錄範本](範本/gig-cymru-nhs-wales的決策記錄範本/)
- [Ignacio Larrañaga 的重要技術決策(ITD)決策記錄範本](範本/重要技術決策itd的決策記錄範本/)

範例:

- [CSS 框架](範例/css框架/)
- [環境變數配置](範例/環境變數配置/)
- [指標、監控、告警](範例/指標監控告警/)
- [Microsoft Azure DevOps](範例/microsoft-azure-devops/)
- [單體儲存庫與多儲存庫](範例/單體儲存庫與多儲存庫/)
- [程式語言](範例/程式語言/)
- [金鑰儲存](範例/金鑰儲存/)
- [時間戳格式](範例/時間戳格式/)
- [更多...](範例/)

## 什麼是架構決策記錄?

**架構決策記錄**(architecture decision record,ADR)是一份文件,用於記錄一項重要的架構決策及其背景和後果。

**架構決策**(architecture decision,AD)是針對某項重大需求所做的軟體設計選擇。

**架構決策日誌**(architecture decision log,ADL)是為某個特定專案(或組織)建立並維護的所有 ADR 的集合。

**架構顯著需求**(architecturally-significant requirement,ASR)是對軟體系統架構有可衡量影響的需求。

以上這些都屬於**架構知識管理**(architecture knowledge management,AKM)的範疇。

本文件的目標是快速概述 ADR、如何建立 ADR,以及在哪裡可以找到更多資訊。

縮寫:

  * **AD**:架構決策

  * **ADL**:架構決策日誌

  * **ADR**:架構決策記錄

  * **AKM**:架構知識管理

  * **ASR**:架構顯著需求

## 如何開始使用 ADR

要開始使用 ADR,請與你的隊友討論以下幾個方面。

決策識別:

  * 這項 AD 有多緊急、多重要?

  * 必須現在做出決定,還是可以等到了解更多資訊之後?

  * 個人和集體的經驗,以及公認的設計方法與實踐,都有助於識別決策。

  * 理想情況下,維護一份與產品待辦事項相互補充的決策待辦清單。

決策制定:

  * 存在許多決策制定技術,既有通用的,也有專門針對軟體架構的,例如對話對映(dialogue mapping)。

  * 群體決策是一個活躍的研究課題。

決策實施與執行:

  * AD 用於軟體設計;因此必須將其傳達給出資、開發和運營該系統的利益相關者,並獲得他們的接受。

  * 架構上一目瞭然的編碼風格,以及關注架構問題和決策的程式碼評審,是兩項相關的實踐。

  * 在軟體演進過程中對軟體系統進行現代化改造時,也必須(重新)考慮 AD。

決策共享(可選):

  * 許多 AD 會在不同專案中反覆出現。

  * 因此,在採用明確的知識管理策略時,過往決策的經驗(無論好壞)都可以成為寶貴的可複用資產。

決策文件化:

  * 存在許多用於記錄決策的範本和工具。

  * 參見敏捷社群,例如 M. Nygard 的 ADR。

  * 參見傳統的軟體工程和架構設計流程,例如 IBM UMF 以及 CapitalOne 的 Tyree 和 Akerman 所建議的表格佈局。

更多資訊:

  * 以上步驟取自維基百科的[架構決策](https://en.wikipedia.org/wiki/Architectural_decision)詞條

## 如何藉助工具開始使用 ADR

你可以按任何自己喜歡的方式藉助工具開始使用 ADR。

例如:

  * 如果你喜歡使用 Google 雲端硬碟和線上編輯,那麼可以建立一個 Google 文件或 Google 表格。

  * 如果你喜歡使用 git 等原始碼版本控制,那麼可以為每個 ADR 建立一個檔案。

  * 如果你喜歡使用 Atlassian Jira 等專案規劃工具,那麼可以使用該工具的規劃跟蹤器。

  * 如果你喜歡使用 MediaWiki 等維基,那麼可以建立一個 ADR 維基。

## 如何透過 git 開始使用 ADR

如果你喜歡使用 git 版本控制,那麼對於一個帶有原始碼的典型軟體專案,下面是我們喜歡的透過 git 開始使用 ADR 的方式。

為 ADR 檔案建立一個目錄:

```sh
$ mkdir adr
```

為每個 ADR 建立一個文字檔案,例如 `database.txt`:

```sh
$ vi database.txt
```

在 ADR 中寫下你想寫的任何內容。可以參考本儲存庫中的範本獲取靈感。

將 ADR 提交到你的 git 儲存庫。

## 適用於 ADR 的 Claude Code 技能

本儲存庫在 [`skills/`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/) 下提供了兩個 [Claude Code](https://claude.com/claude-code) 技能(skill),讓 AI 程式設計代理能夠依本專案建議的方式撰寫並維護 ADR:

- [`architecture-decision-record-skill`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/architecture-decision-record-skill/) — 通用技能,適合在任何專案中撰寫 ADR 的人。協助判斷一項決策是否需要 ADR,建立 `adr/` 或 `decisions/` 目錄,為檔案命名,從隨附的十一個骨架中選擇範本,並寫出紮實的背景/決策/後果各節。

- [`architecture-decision-record-maintainer-skill`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/architecture-decision-record-maintainer-skill/) — 專為本儲存庫的維護者設計。記錄儲存庫的結構、README 與 locales 的對應慣例,以及新增範本、範例或工具連結的確切步驟。

若要使用某項技能,請將其資料夾複製到你正在工作的儲存庫根目錄下的 `.claude/skills/`(或複製到 `~/.claude/skills/` 以便在每個專案中使用),然後請 Claude Code 撰寫或審閱 ADR。

## 檔案命名約定

如果你選擇使用常見的文字檔案來建立 ADR,那麼你可能需要制定自己的 ADR 檔案命名約定。

我們傾向於使用具有特定格式的檔案命名約定。

範例:

  * choose-database.md

  * format-timestamps.md

  * manage-passwords.md

  * handle-exceptions.md

我們的檔案命名約定:

  * 名稱使用一般現在時的祈使動詞短語。這有助於提高可讀性,並與我們的提交資訊格式保持一致。

  * 名稱使用小寫字母和連字元(與本儲存庫相同)。這是在可讀性和系統可用性之間取得的平衡。

  * 副檔名為 markdown。這便於簡單地設定格式。

## 撰寫優質 ADR 的建議

優質 ADR 的特徵:

* 理由(Rationale):解釋做出該項 AD 的原因。可以包括背景(見下文)、各種潛在選擇的利弊、功能對比、成本效益討論等。

* 具體(Specific):每個 ADR 應只針對一項 AD,而不是多項 AD。

* 時間戳(Timestamps):標明 ADR 中每一項內容的撰寫時間。這對於可能隨時間變化的方面尤為重要,例如成本、進度、擴充套件規模等。

* 不可變(Immutable):不要修改 ADR 中已有的資訊。相反,應透過新增新資訊來修訂該 ADR,或透過建立新的 ADR 來取代它。

ADR 中優質「背景」(Context)部分的特徵:

* 說明你所在組織的處境和業務優先事項。

* 包含基於團隊的社會構成和技能構成所做的理由與考量。

* 包含相關的利弊,並用符合你的需求和目標的方式加以描述。

ADR 中優質「後果」(Consequences)部分的特徵:

* 解釋做出該決策之後會產生什麼。這可以包括影響、結果、產出、後續跟進等。

* 包含任何後續 ADR 的資訊。一個 ADR 引發對更多 ADR 的需求相當常見,例如某個 ADR 做出了一項重大的總體選擇,進而產生了更多較小決策的需求。

* 包含任何事後覆盤流程。團隊通常會在每個 ADR 做出一個月後對其進行評審,將 ADR 中的資訊與實際發生的情況加以比較,以便學習和成長。

新的 ADR 可以取代以前的 ADR:

* 當做出的某項 AD 替代或否定了以前的某個 ADR 時,應建立一個新的 ADR

## ADR 範例範本

我們在網路上蒐集的 ADR 範例範本:

- [Michael Nygard 的 ADR 範本](範本/michael-nygard的決策記錄範本/) (簡單且受歡迎)

- [Jeff Tyree 與 Art Akerman 的 ADR 範本](範本/jeff-tyree和art-akerman的決策記錄範本/) (更為複雜)

- [Alexandrian 模式的 ADR 範本](範本/亞歷山大模式的決策記錄範本/) (簡單,附有背景細節)

- [商業案例的 ADR 範本](範本/商業論證的決策記錄範本/) (更偏重 MBA,包含成本、SWOT 與更多觀點)

- [Markdown Any Decision Records(MADR)專案的 ADR 範本](範本/madr專案的決策記錄範本/) (既有簡單版也有詳盡版;後者強調各選項及其優缺點)

- [使用 Planguage 的 ADR 範本](範本/使用planguage的決策記錄範本/) (更偏重品質保證)

- [Ignacio Larrañaga 的重要技術決策(ITD)範本](範本/重要技術決策itd的決策記錄範本/) (精簡且決策優先,為管理層快速審閱而最佳化)

## ADR 團隊協作建議

如果你正在考慮讓團隊使用決策記錄,下面是我們在與許多團隊合作中積累的一些建議。

你有機會引領你的隊友,方法是共同討論「為什麼」,而不是強制規定「做什麼」。例如,決策記錄是團隊更聰明地思考、更好地溝通的一種方式;如果它只是事後被迫完成的文書工作,決策記錄就沒有價值。

有些團隊更喜歡「決策」(decisions)這個名稱,而不是縮寫“ADR”。當一些團隊使用“decisions”作為目錄名時,就像燈泡突然亮了,團隊開始往該目錄中放入更多資訊,例如供應商決策、規劃決策、排期決策等。所有這些型別的資訊都可以使用同一個範本。我們推測,相比縮寫(“ADR”),人們用完整的詞(「決策」)學得更快;去掉「記錄」(record)這個詞之後,人們更有動力撰寫進行中的文件;此外,一些開發人員和一些管理者不喜歡「架構」這個詞。

理論上,不可變性是理想的。實踐中,可變性對我們的團隊效果更好。我們會把新資訊插入現有的 ADR,並附上日期戳,以及一條說明該資訊是在決策之後才獲得的備註。這種做法會形成一份我們所有人都能更新的「活文件」。典型的更新場景包括:因新隊友加入、新產品出現或實際使用的真實結果而獲得了資訊,或者出現了事後的第三方變化,例如供應商的能力、定價方案、許可通訊協定等。

## ADR 的團隊合作問題

### 誰可以建立 ADR?

可以考慮特定的人員、特定的角色、特定的團隊或特定的部門等方面;也要考慮是否存在可以委託建立 ADR 的人員、角色、團隊或部門,即由他們提出請求,而由其他人來撰寫。

範例回答:我們組織中任何閱讀過架構決策記錄 README 頁面的人都可以提出 ADR,也就是說,該人員可以開始撰寫並與團隊分享。

### 什麼情況下應當提出 ADR?

可以考慮諸如你所在組織的團隊工作方式、軟體系統結構、跨團隊協調、長期可維護性、外部介面、你希望讓誰受益等方面。

範例回答:當我們希望未來的開發人員理解我們所做事情背後的「為什麼」時,我們就想建立 ADR。

### 什麼情況下不應提出 ADR?

可以考慮諸如以下情形:決策與架構無關;決策很小,例如風險極低、自成一體或僅涉及單個開發人員;決策已在別處(例如標準、政策或文件)得到充分涵蓋;或者決策是臨時性的,例如變通方案、概念驗證或實驗。

範例回答:當決策在範圍、時間、風險和成本上都很有限,或已在別處涵蓋時,我們會跳過 ADR。

### ADR 的生命週期是什麼?

可以考慮建立流程、調研流程、決策流程、實施流程和退役流程等方面。考慮如何隨時間跟蹤 ADR 的生命週期,例如如何將 ADR 從一個狀態推進到下一個狀態,以及如何向利益相關者傳達這一點。

範例回答:我們希望 ADR 有五個生命週期階段:啟動 → 調研 → 評估 → 實施 → 維護 → 退役。

### ADR 生命週期各步驟的標準是什麼?

可以考慮諸如 ADR 的驗收標準等方面,也就是說,你如何知道它已經足夠好,可以從一個生命週期步驟進入下一個?問題是否被清楚地闡述?是否已考慮各種備選方案?權衡取捨是否得到充分理解並記錄?所有相關背景是否齊備?所有相關利益相關者是否都已參與?所有反饋是否都已吸收?

範例回答:當積極參與的團隊 1)已完成調研,2)已完成評估,3)已向利益相關者釋出 ADR 提案並徵求意見,時限為一週,4)所有利益相關者的意見都已吸收和處理之後,我們希望由利益相關者對 ADR 進行投票。

### 哪些角色和職責與 ADR 相關?

可以考慮提議者、調研者、評估者、評審者、批准者、維護者等角色。考慮諸如與利益相關者溝通、確保滿足期望、在網站或內網上分享、定期複查工作(尤其是在發生相關變化時)等職責。

範例回答:我們希望每個 ADR 始終有一名主要聯絡人、一名次要聯絡人和一個負責團隊;他們負責溝通、釋出、維護、至少每年一次的定期複查,以及在需要時最終使其退役。

### 治理如何與 ADR 相關?

可以考慮諸如你所在組織的工作方式、任何特殊的合規需求(例如法律方面或人力資源方面),以及你希望如何處理共識、衝突與升級。在 ADR 方面,是否有某些領域、人員或團隊比其他人影響力更大,例如能夠批准、投票或否決它?

範例回答:ADR 的治理按以下優先順序:執行長(CEO)、技術長(CTO)、首席法務官(CLO)、實施 ADR 的團隊、團隊中最瞭解該 ADR 的專家。除非 ADR 中另有說明,其他人沒有治理權。

### 哪些原則與 ADR 相關?

可以考慮諸如你所在組織的工作方式,包括快速行動與慢速行動、決策共識與決策衝突、風險偏好與安全偏好、公開討論與私下討論等。

範例回答:我們採用的領導力原則是:崇尚行動、有異議但服從決定(disagree-and-commit)、對於易於撤銷且易於隔離的決策,70% 的估計就足夠好,以及採取公開的工作方式,但我們組織的保密通訊協定所述的機密資訊除外。

## ADR 的下一步概念

[Arc42](https://arc42.org/) 以務實的方式回答兩個問題,並可依你的具體需求調整。關於你的架構,應當記錄/溝通什麼?應當如何記錄/溝通?Arc42 包含架構決策記錄,以及關於目標、限制、背景、品質、風險等方面的指引。

[C4 模型](https://c4model.com/)是一種易學、對開發者友善的軟體架構繪圖方法。C4 是一組分層圖,涵蓋背景、容器、元件與程式碼,另有系統全貌、動態與部署的輔助圖。

## 架構圖、檢視與觀點

架構圖稱為「架構檢視」。

「架構檢視」是「架構觀點」的一個實例。

「架構觀點」針對具有特定關注點的特定對象。

架構觀點、檢視與圖的範例:

- 業務能力

- 高階業務流程

- [價值流](https://en.wikipedia.org/wiki/Value_stream)

- 對應到應用程式元件的軟體功能

- [C4 Model](https://en.wikipedia.org/wiki/C4_model) 背景圖 (TO-BE / AS-IS)

- [C4 Model](https://en.wikipedia.org/wiki/C4_model) 容器圖 (TO-BE / AS-IS)

- [實體關係圖](https://en.wikipedia.org/w/index.php?title=Entity_relationship_diagram) (ERD) 用於將資料實體對應到應用程式元件

- [循序圖](https://en.wikipedia.org/wiki/Sequence_diagram) 用於描述系統內部及整合中的功能流程

- [業務流程模型與標記法](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN) 用於描述跨應用程式元件的資料流的圖

- [業務流程模型與標記法](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN) 用於描述業務流程/使用者情境的圖

- [身分與存取管理](https://en.wikipedia.org/wiki/Identity_and_access_management) (IAM) 圖

- [角色型存取控制](https://en.wikipedia.org/wiki/Role-based_access_control) (RBAC) 依應用程式元件列出角色的圖

- [屬性型存取控制](https://en.wikipedia.org/wiki/Attribute-based_access_control) (ABAC) 依應用程式元件列出屬性的圖

- 隱私圖

相關圖:

- 使用案例圖向管理層/客戶展示使用案例,它先於需求,而需求先於軟體架構。

- 部署圖展示軟體元件所部署到的實體硬體/電腦。
- 資料流圖展示資料如何在系統中流動與轉換。
- 循序圖用於在時間軸上展示 HTTP 等協定的運作方式。

- 活動圖描繪軟體系統所執行活動的工作流程,例如 NPC 的 AI。

## 將決策作為程式碼的適應度函式

適應度函式(fitness function)是用程式設計程式碼編寫的客觀自動化檢查,用於驗證決策是否得到遵守。

- 適應度函式使決策可測試、可保證。

- 針對決策的適應度函式可以極大地幫助品質保證、合規流程和治理目標。

### 適應度函式如何與決策關聯

決策記錄負責記錄決策,而適應度函式負責保證決策。

- 決策範例:我們為滿足審計要求而使用事件溯源。

- 適應度函式範例:我們使用持續整合伺服器來測試所有狀態變更都必須產生事件。

### 為什麼適應度函式有助於決策

客觀的度量:適應度函式要麼透過,要麼失敗,因此工作情況清晰可見。

持續使用:適應度函式是你的活規則,在每次提交和構建時執行。

重構的信心:適應度函式能自動發現違反決策規則的錯誤。

可擴充套件的治理:適應度函式在不製造瓶頸的情況下保證標準得到執行。

### 適應度函式可以使用 AI 嗎?

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

### 架構單元測試

[ArchUnit](https://www.archunit.org/):使用任何普通的 Java 單元測試框架來檢查 Java 程式碼的架構規則。

[ArchUnitTS](https://github.com/LukasNiessen/ArchUnitTS):使用 Jest、Vitest、Jasmine 等來檢查 TypeScript 程式碼和 JavaScript 程式碼的架構規則。

## 拉取請求的決策護欄

[Decision Guardian](https://github.com/DecispherHQ/decision-guardian)
會在適當的時刻,也就是開發者正在修改這些決策所涵蓋的程式碼時,
自動呈現相應的決策記錄。它不再寄望開發者在合併前閱讀文件資料夾,
而是讓相關背景直接出現在拉取請求上。

這適用於任何類型的決策記錄:架構決策、資料決策、合規決策、臨床與醫療決策、安全決策等。

可與任何 CI 系統(GitLab、Jenkins、CircleCI)搭配使用,也可作為 pre-commit 掛鉤。
開放原始碼。MIT 授權。

[ADR Guard](https://github.com/chohan-sarmad-ali/delivery-gates) 是一個 GitHub
Action,當受監視的程式碼路徑變更而沒有新增或更新架構決策記錄時,它會使拉取請求失敗。豁免是明確的:附有理由的
`ADR-Exempt:` 行可通過關卡,並寫入工作摘要。與範本無關,無相依性。開放原始碼。MIT 授權。

## 更多資訊

簡介:

- [Architectural decision (wikipedia.org)](https://wikipedia.org/wiki/Architectural_decision)

- [Architecturally significant requirements (wikipedia.org)](https://wikipedia.org/wiki/Architecturally_significant_requirements)

範本:

- [Documenting architecture decisions - Michael Nygard (thinkrelevance.com)](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)

- [Markdown Architectural Decision Records (adr.github.io)](https://adr.github.io/madr/)

- [Template for documenting architecture alternatives and decisions (stackoverflow.com)](http://stackoverflow.com/questions/7104735/template-for-documenting-architecture-alternatives-and-decisions)

深入閱讀:

- [ADMentor XML project (github.com)](https://github.com/IFS-HSR/ADMentor)

- [Architectural Decision Guidance across Projects: Problem Space Modeling, Decision Backlog Management and Cloud Computing Knowledge (ifs.hsr.ch)](https://www.ifs.hsr.ch/fileadmin/user_upload/customers/ifs.hsr.ch/Home/projekte/ADMentor-WICSA2015ubmissionv11nc.pdf)

- [The Decision View's Role in Software Architecture Practice (computer.org)](https://www.computer.org/csdl/mags/so/2009/02/mso2009020036-abs.html)

- [Documenting Software Architectures: Views and Beyond (resources.sei.cmu.edu)](http://resources.sei.cmu.edu/library/asset-view.cfm?assetID=30386)

- [Architecture Decisions: Demystifying Architecture (utdallas.edu)](https://www.utdallas.edu/~chung/SA/zz-Impreso-architecture_decisions-tyree-05.pdf)

- [ThoughtWorks Technology Radar: Lightweight Architecture Decision Records (thoughtworks.com)](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)

- [A Skeptic’s Guide to Software Architecture Decisions (infoq.com)](https://www.infoq.com/articles/architecture-skeptics-guide/)

- [Architectural Decisions — The Making Of](https://ozimmer.ch/practices/2020/04/27/ArchitectureDecisionMaking.html)

- [Architectural Retrospectives: the Key to Getting Better at Architecting](https://www.infoq.com/articles/architectural-retrospectives/)

- [Software Architecture Monday with Mark Richards](https://developertoarchitect.com/lessons/) - 免費的每月軟體架構課程

- [Solution Architecture Decisions - By Gareth Morgan](https://www.linkedin.com/pulse/solution-architecture-decisions-gareth-morgan-0r5xe/)

- ["Keep the Why: Code Becomes Legacy When Nobody Remembers Why"](https://blog.technopathy.club/keep-the-why-code-becomes-legacy-when-nobody-remembers-why)

工具:

- [Command-line tools for working with Architecture Decision Records](https://github.com/npryce/adr-tools)

- [Command line tools with python - by Victor Sluiter](https://bitbucket.org/tinkerer_/adr-tools-python/src/master/)

- [Architectural Design Decision Support Framework (ADvISE)](https://swa.univie.ac.at/Software_Architecture/research-projects/architectural-design-decision-support-framework-advise/)

- [Decision Guardian](https://github.com/DecispherHQ/decision-guardian)

- [Mneme HQ - ADR enforcement for AI coding agents](https://github.com/TheoV823/mneme)

- [Keep the Why - a repo-native convention and agent skill that continuously captures, or retrospectively recovers, the reasoning behind a codebase](https://github.com/oliver-zehentleitner/keep-the-why)

- [ADR Guard - GitHub Action that fails a pull request changing watched code without an architecture decision record](https://github.com/chohan-sarmad-ali/delivery-gates)

- [kgai - append-only decision log for AI coding agents, a machine-readable companion to ADR files](https://github.com/kgaidev/kgai)

特定公司的指引:

- [Amazon: AWS Prescriptive Guidance: ADR Process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)

- [GitHub: ADR GitHub organization](https://adr.github.io/)

- [RedHat: Why you should use ADRs](https://www.redhat.com/architect/architecture-decision-records)

範例:

- [Repository of Architecture Decision Records made for the Arachne Framework](https://github.com/arachne-framework/architecture)

影片:

- [An introduction to arc42 with Savvas Kleanthous](https://www.youtube.com/watch?v=V5clR8c6D7o)

- [The C4 model for visualising software architecture - by Simon Brown](https://www.youtube.com/watch?v=KvoBrUd1-5E)

Podcast:

- [Software Architecture Bookclub Podcast](https://www.developertoarchitect.com/bookclub-podcast.html)

書籍:

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

另請參閱:

- REMAP (Representation and Maintenance of Process Knowledge)

- DRL (Decision Representation Language)

- IBIS (Issue-Based Information System)

- QOC (Questions, Options, and Criteria)

- IBM’s e-Business Reference Architecture Framework

- [Decision Reasoning Format (DRF)](https://github.com/reasoning-formats/reasoning-formats) - 一種與供應商無關、機器可讀的 YAML/JSON 格式,用於表示帶有明確推理、假設、認知狀態與取捨的決策。藉由為決策文件增加結構化、可驗證的推理來補充 ADR。
