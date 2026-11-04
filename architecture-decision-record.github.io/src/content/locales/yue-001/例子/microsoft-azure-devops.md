# Microsoft Azure DevOps

內容：

* [摘要](#摘要)
  * [問題](#問題)
  * [決策](#決策)
  * [狀態](#狀態)
* [詳情](#詳情)
  * [假設](#假設)
  * [限制](#限制)
  * [立場](#立場)
  * [論據](#論據)
  * [影響](#影響)
* [相關](#相關)
  * [相關決策](#相關決策)
  * [相關需求](#相關需求)
  * [相關工件](#相關工件)
  * [相關原則](#相關原則)
* [備註](#備註)
  * [Microsoft Devops CI：一次令人失望嘅經歷](#microsoft-devops-ci一次令人失望嘅經歷)
  * [Hacker News 討論重點](#hacker-news-討論重點)
  * [Windows 開發 MVP](#windows-開發-mvp)
  * [Edward Thomson（Azure PM）摘要](#edward-thomsonazure-pm摘要)


## 摘要


### 問題

我哋想用 devops 去建置、整合、部署同託管我哋嘅項目。我哋正考慮 Microsoft Azure DevOps。

  * 我哋想開發者體驗快速而可靠，包括 devops 嘅設定（例如配置）同持續使用（例如快速建置時間）。
  
  * 我哋想考慮整體使用 Microsoft Azure，去託管項目嘅應用程式、資料庫等。


### 決策

決定不採用 Microsoft Azure DevOps。


### 狀態

已決定。如果日後有重要新資料，我哋持開放態度重新檢討。


## 詳情


### 假設

所有常見嘅 devops 假設，例如《Accelerate》一書所述。

  * 快速建置有莫大幫助，因為佢加速回饋循環。

  * 我哋可以替換來自其他供應商嘅部分，即係我哋可能想自備更高速嘅建置伺服器，或者用我哋自己揀選嘅版本控制系統，或者同自行託管嘅持續整合伺服器協調。
  
  * 簡化嘅易用性有莫大幫助，對開發者體驗有幫助，繼而對一致性、清晰度、保安同易學程度等微妙範疇亦有幫助。

  * 當任何嘢壞咗或者出現問題，我哋想有有效嘅方法報告問題。對於任何同保安有關嘅問題，呢點尤其重要。


### 限制

冇已知限制。Azure 公開承諾會同外部工具和睦相處。


### 立場

我哋考慮過用 Microsoft Azure Devops 對比現有嘅 AWS。

我哋試驗過 Azure DevOps、Azure Pipelines、Azure Repo，以及透過 Terraform 喺 Azure 起動新伺服器。

我哋試驗過向 Microsoft 代表尋求支援。

我哋從同業嘅網誌同 Hacker News 收集資料。


### 論據

Azure DevOps 宣傳有一套出色嘅產品，但佢哋經唔起考驗，彼此配合得唔好，而且支援欠佳。

我哋第一手嘅經驗：

  * Azure 嘅設定係一堆混亂嘅用戶介面，其中一些同 Microsoft 帳戶重疊，另一些就唔重疊。例如，有 Azure 登入、Microsoft.com 登入、Live.com 登入等，而且全部同時運作。

  * 我哋喺設定期間遇到一個輕微嘅保安問題，但搵唔到解決方法。我哋試過好多方法向好多 Microsoft 代表報告，都冇成功。我哋成功向 Microsoft 保安部門報告，佢哋回覆話唔會修復。

  * 文件經常係錯誤或者過時。至少部分原因係 Microsoft 嘅搜尋引擎差，部分原因係 SEO 欠佳。
  
  * Terraform 設定有完善文件，而且行得通。不過，同 AWS 相比，Terraform 支援較弱，因為 Microsoft 正與供應商建立業務關係，去製作串連式嘅 Terraform 設定例子。

我哋同業嘅經驗：

  * 我哋做完自己嘅盲測評估之後，就尋找同業嘅經驗。我哋發現嘅內容印證咗我哋嘅經驗。

  * 同業報告咗建置時間以及自備建置伺服器方面嘅額外問題。呢啲問題比用戶介面問題嚴重得多，因為執行建置係建置管線嘅核心目的，而我哋預期每日要做好多次。

  * 我哋發現 Azure 團隊成員喺討論區參與度極佳。為此向 Microsoft 致敬。Azure PM 兼程式設計師 Edward Thomson 尤其令我哋印象深刻，因為佢參與討論、直率，而且技術解釋清楚。


### 影響

揀選 Microsoft Azure DevOps，喺時間同成本上似乎會比唔揀 Azure 貴（約 3 倍）。


## 相關


### 相關決策

如果我哋揀選 Azure DevOps，會有好多相關產品，包括 Azure Repo、Azure Pipeline 等。我哋相信，如果揀選 Azure Devops，可能令使用更多 Azure 功能變得更容易，或者令使用其他供應商嘅功能變得更困難。

我哋相信 Microsoft 喺開發者體驗方面取得長足進步，而且我哋見到 Microsoft 大規模收購開發者工具（例如 GitHub）同依賴項（例如 Citus）。

如果我哋揀選 Azure DevOps，可能想著重揀選 Microsoft 收購嘅產品，亦可能想更審慎／更仔細評估呢啲收購產品，因為存在潛在嘅排斥反應，例如員工流失風險。


### 相關需求

我哋想建置時間非常快。我哋接受為此付出高昂溢價。原因係我哋想非常快速咁迭代。

我哋想可靠性非常高。我哋接受為此付出高昂溢價。原因係我哋正測試高價值嘅使用情況，包括金融交易、機密交易等。

我哋頭 4 個 devops KPI 包括平均復原時間，需要快速建置同高可靠性。


### 相關工件

我哋想建置系統輸出適合用於其他系統（例如 Artifactory）嘅工件。


### 相關原則

容易回復。我哋可以同現有嘅 AWS 並行評估 Azure DevOps。


## 備註


### Microsoft Devops CI：一次令人失望嘅經歷

https://toxicbakery.github.io/vsts-devops/microsoft-devops-ci/

網誌文章。

「作為軟件開發人員，我親身知道要又快又平咁建置優質產品有幾困難。呢門藝術有時我哋做得啱，有時就變成類似奧巴馬年代醫療保健政府網站嘅東西。我哋對最終產品嘅控制程度各有不同，而失敗嘅責任經常落咗喺決策層級入面嘅錯誤人選身上。Microsoft 嘅 Azure DevOps（前稱 Visual Studio Team Services），儘管善意明顯，卻係糟糕決策同欠佳執行構成嘅完美風暴。」


### Hacker News 討論重點

https://news.ycombinator.com/item?id=18983586

「我哋公司廣泛使用 Azure DevOps，我用過 GitHub、Gitlab、自行託管方案、Jenkins、TeamCity 之後……Azure DevOps 排名墊底。」

「用戶介面到處都極之笨拙。對我嚟講最差嘅係 pull request。同人喺 pull request 上合作難到極點。我連指出某「一個」特定問題都做唔到——對我哋嚟講，到處都係壞嘅。」

「Azure Devops 係我好想鍾意嘅嘢。用戶介面不斷改變，但存在已久嘅底層 bug 卻冇修復。」

「工具之間整合得唔好，用戶介面慢到不得了，冇儀表板視圖可以睇我最愛儲存庫嘅活躍 pull request、建置、發佈等。建置／部署時間慢到離譜。」

「我哋亦試過用 Azure Boards（Work Items、Boards、Backlogs 等）。慘。完全係一堆互不連貫嘅想法組成嘅混亂用戶介面。佢哋冇好好實現一樣嘢，反而糟糕地實現咗兩打嘢。」


### Windows 開發 MVP

Windows 開發 MVP 在此。我覺得我必須為冇更大聲疾呼呢啲問題承擔部分責任。不過必須講，聽到你話對用戶體驗問題感到「驚訝」，我好失望。我一直（甚至早在發佈前）都話畀你哋嘅人聽，用戶體驗好差，但不斷聽到嘅答覆係「我哋知道，我哋喺度修緊」。我會開始將回饋整理成正式形式，並透過渠道推進，請繼續留意。我亦住喺本地（Bellevue），好想過嚟試下為我哋相對簡單嘅開源 .net/wpf/uwp 應用程式建立管線。我懷疑對大家都會係一次大開眼界。

一些例子：

* 你冇辦法為包含子模組嘅 git 儲存庫建立管線

* 發現冇可能為某些自訂工具編輯 PATH

* 「新增管線」嘅體驗真係冇乜道理，新用戶四圍點擊，最終會去到錯誤嘅文件。


### Edward Thomson（Azure PM）摘要

我寫咗合併你哋 pull request 嘅程式碼。Microsoft 嘅 Azure DevOps 項目經理；前身係 GitHub、Microsoft、SourceGear 版本控制工具嘅軟件工程師。

https://www.edwardthomson.com/

libgit2 嘅共同維護者。https://libgit2.github.io

All Things Git（關於 Git 嘅 Podcast）嘅共同主持。https://www.allthingsgit.com/

Developer Tools Weekly（關於開發工具嘅通訊）嘅策展人。https://developertoolsweekly.com/
