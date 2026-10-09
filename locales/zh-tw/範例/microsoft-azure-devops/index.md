# Microsoft Azure DevOps

目錄:

* [摘要](#摘要)
  * [問題](#問題)
  * [決策](#決策)
  * [狀態](#狀態)
* [詳情](#詳情)
  * [假設](#假設)
  * [約束](#約束)
  * [立場](#立場)
  * [論證](#論證)
  * [影響](#影響)
* [相關內容](#相關內容)
  * [相關決策](#相關決策)
  * [相關需求](#相關需求)
  * [相關製品](#相關製品)
  * [相關原則](#相關原則)
* [備註](#備註)
  * [Microsoft Devops CI:一次令人不滿意的冒險](#microsoft-devops-ci一次令人不滿意的冒險)
  * [Hacker News 討論要點](#hacker-news-討論要點)
  * [Windows 開發 MVP](#windows-開發-mvp)
  * [Edward Thomson(Azure PM)簡介](#edward-thomsonazure-pm簡介)


## 摘要


### 問題

我們想使用 DevOps 來構建、整合、部署和託管我們的專案。我們正在考慮 Microsoft Azure DevOps。

  * 我們希望開發者體驗快速而可靠,既包括 DevOps 的設定(例如配置),也包括持續使用(例如快速的構建時間)。
  
  * 我們希望考慮整體使用 Microsoft Azure,來託管專案的應用、資料庫等。


### 決策

決定不採用 Microsoft Azure DevOps。


### 狀態

已決定。如果/當有新的重要資訊出現時,願意重新審視。


## 詳情


### 假設

所有常見的 DevOps 假設,例如《Accelerate》一書中的假設。

  * 快速構建有很大幫助。這能加快反饋迴圈。

  * 我們可以換入/換出來自其他供應商的元件,也就是說,我們可能想自帶更高速的構建伺服器,或使用我們自己選擇的版本控制系統,或與自託管的持續整合伺服器協同工作。
  
  * 簡化的可用性有很大幫助,對開發者體驗有幫助,進而對一致性、清晰度、安全性和學習曲線的易用性等微妙方面也有幫助。

  * 當任何東西出現故障或問題時,我們希望有一種有效的方式來報告問題。這對於任何與安全相關的問題尤為重要。


### 約束

沒有已知的約束。Azure 公開承諾會與外部工具良好協作。


### 立場

我們考慮了使用 Microsoft Azure Devops 與現有的 AWS 相比的情況。

我們試用了 Azure DevOps、Azure Pipelines、Azure Repo,以及透過 Terraform 啟動新的 Azure 伺服器。

我們嘗試了從 Microsoft 代表那裡獲得支援。

我們從同行的部落格和 Hacker News 上收集了資訊。


### 論證

Azure DevOps 宣傳了一套出色的產品,但它們名不副實,彼此之間配合不佳,而且支援很差。

我們的親身體驗:

  * Azure 的設定是一堆混亂的介面,其中一些與 Microsoft 賬號重疊,一些則不重疊。例如,有 Azure 登入、Microsoft.com 登入、Live.com 登入等,而且它們同時都在起作用。

  * 我們在設定過程中遇到了一個輕微的安全問題,但沒有找到解決辦法。我們嘗試了許多方式向許多 Microsoft 代表報告,均無結果。我們成功地向 Microsoft 安全部門報告了該問題,對方回覆為不予修復(won't fix)。

  * 文件往往要麼有誤,要麼過時。其中至少一部分歸因於 Microsoft 糟糕的搜尋引擎,另一部分歸因於欠佳的 SEO。
  
  * Terraform 的設定文件齊全,並且可用。然而,與 AWS 相比,Terraform 的支援較弱,因為 Microsoft 正在與供應商建立業務關係,以提供貫通式的 Terraform 設定範例。

我們同行的體驗:

  * 在我們自己做了盲評之後,我們尋找了同行的體驗。我們的發現印證了我們自己的體驗。

  * 同行報告了構建時間方面的更多問題,以及自帶構建伺服器方面的問題。這些問題比介面問題嚴重得多,因為執行構建是構建流水線的核心目的,而我們預計每天要執行許多次。

  * 我們發現 Azure 團隊成員在討論區的參與度非常高。在此向 Microsoft 致敬。我們對 Azure PM 兼程式設計師 Edward Thomson 印象尤為深刻,因為他積極參與、坦率直接,並給出了技術性的解釋。


### 影響

選擇 Microsoft Azure DevOps 看起來在時間和成本上可能比不選擇 Azure 要貴(約 3 倍)。


## 相關內容


### 相關決策

如果我們選擇 Azure DevOps,會有許多相關產品,包括 Azure Repo、Azure Pipeline 等。我們認為,如果選擇 Azure Devops,這可能會使使用更多 Azure 功能變得更容易,也可能會使使用其他供應商的功能變得更困難。

我們認為 Microsoft 在開發者體驗方面正取得長足進步,我們也看到 Microsoft 在大規模收購開發者工具(例如 GitHub)和依賴項(例如 Citus)。

如果我們選擇 Azure DevOps,那麼我們可能需要著重選擇 Microsoft 收購來的產品,同時也可能需要更謹慎地評估這些收購來的產品,因為存在潛在的「排異反應」,例如員工流失風險。


### 相關需求

我們希望構建時間非常快。我們接受為此支付高額溢價。這是因為我們希望非常快速地迭代。

我們希望可靠性非常高。我們接受為此支付高額溢價。這是因為我們正在測試高價值的使用場景,包括金融交易、機密交易等。

我們的前 4 項 DevOps 關鍵績效指標(KPI)包括平均恢復時間,這就需要快速構建和高可靠性。


### 相關製品

我們希望構建系統輸出適合在 Artifactory 等其他系統中使用的製品。


### 相關原則

易於撤銷。我們可以與現有的 AWS 並行評估 Azure DevOps。


## 備註


### Microsoft Devops CI:一次令人不滿意的冒險

https://toxicbakery.github.io/vsts-devops/microsoft-devops-ci/

部落格文章。

「作為一名軟體開發人員,我親身體會到快速而廉價地構建高品質產品有多麼困難。這是一門藝術,我們有時能做對,有時則會淪落到類似奧巴馬時代醫療保健政府網站的境地。我們對最終產品的控制程度各不相同,而失敗的責任往往落在決策層級中錯誤的人身上。Microsoft 的 Azure DevOps(前身為 Visual Studio Team Services),儘管顯然出於好意,卻是糟糕決策和糟糕執行的完美風暴。」


### Hacker News 討論要點

https://news.ycombinator.com/item?id=18983586

「我們在工作中大量使用 Azure DevOps,在用過 GitHub、Gitlab、自託管方案、Jenkins、TeamCity 之後……Azure DevOps 排名墊底。」

「介面到處都極其笨拙。對我來說最糟糕的是拉取請求。與他人在拉取請求上協作極其困難。我甚至無法指出『某一個』特定問題——對我們來說,它到處都是壞的。」

「Azure Devops 是我想要喜歡的東西。介面一直在變,卻不修復存在已久的底層缺陷。」

「這些工具整合得不好,介面真的很慢,沒有儀表板檢視來顯示我常用儲存庫中活躍的拉取請求、構建、釋出等。構建/部署時間慢得離譜。」

「我們還嘗試使用了 Azure Boards(工作項、看板、待辦事項列表等)。哎呀。那是一堆互不相干想法拼湊而成的徹底混亂的介面。他們沒有把一件事做好,而是把兩打事情都做得很糟糕。」


### Windows 開發 MVP

我是 Windows 開發 MVP。我覺得自己必須為沒有對這些問題發出更大的聲音而承擔一部分責任。但必須說,聽到你們對使用者體驗問題感到「驚訝」,我很失望。我一直在告訴你們的人,使用者體驗糟糕透頂(例如早在釋出之前就說過),而得到的回覆一直是「我們知道,我們正在修復」。我會開始把反饋整理成正式形式,並透過渠道提交,敬請關注。我也在本地(Bellevue),很樂意過來,嘗試為我們相對簡單的開源 .net/wpf/uwp 應用搭建流水線。我猜這會讓我們雙方都大開眼界。

一些例子:

* 無法為包含子模組(submodule)的 git 儲存庫構建流水線

* 發現無法為某些自定義工具編輯 PATH

* 「新建流水線」的體驗毫無道理,新使用者隨意點選,最終會跑到錯誤的文件頁面。


### Edward Thomson(Azure PM)簡介

我編寫了合併你拉取請求的程式碼。Microsoft Azure DevOps 的專案經理;此前是 GitHub、Microsoft 和 SourceGear 版本控制工具的軟體工程師。

https://www.edwardthomson.com/

libgit2 的共同維護者。https://libgit2.github.io

《All Things Git》(關於 Git 的播客)的共同主持人。https://www.allthingsgit.com/

《Developer Tools Weekly》(關於開發工具的新聞簡報)的策展人。https://developertoolsweekly.com/
