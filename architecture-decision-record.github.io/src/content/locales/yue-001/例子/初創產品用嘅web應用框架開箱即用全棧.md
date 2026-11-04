# 架構決策記錄：初創產品用嘅網頁應用框架（開箱即用、全棧）

<!-- 

ChatGPT prompt

Long software architecture decision record 
for a web application framework, batteries included, full stack, for a startup product.

Evaluate Python Django, Ruby on Rails, Phoenix Elixir, Rust Loco.

Primary need: web application for paying customers to sign in, upload files, process data, and view reports. 

High importance: 1. Agile development because this is for a startup. 2. Full-stack because we do not want to spend extra time on a separate front-end. 3. Works well with AI/ML tools for data analysis, such as Project Jupyter notebooks.

Low importance: 1. Runtime speed. 2. Scalability. 3. Backwards compatibility.

-->

**首要目標：**  
建置一個網頁應用程式，供付費客戶登入、上載檔案、處理數據同查看報告，重點係敏捷開發、全棧功能，以及同 AI/ML 工具（尤其係 Project Jupyter notebooks）有強大兼容性。

### 背景同需求：

1. **敏捷開發（高優先）**：作為初創公司，我哋需要快速迭代同靈活性。快速製作原型、迭代開發同適應變化等敏捷做法，係我哋開發週期嘅關鍵。

2. **全棧框架（高優先）**：我哋旨在透過揀選一個可以高效處理後端同前端嘅框架，減少額外開銷，減少對獨立前端框架嘅需要。

3. **同 AI/ML 工具兼容（高優先）**：必須能夠輕鬆同 Jupyter notebooks 等數據分析工具，以及 Python 嘅數據科學生態系統（NumPy、Pandas、TensorFlow 等）整合。咁樣有助高效處理數據同製作報告。

4. **低重要性準則**：
   - **運行速度**：雖然效能相關，但一開始並非最關鍵嘅因素，因為我哋更關注開發速度同功能完整性。
   - **可擴展性**：我哋預期會增長，但可擴展性方面嘅疑慮可以遲啲處理，而且目前並非主要需求。
   - **向後兼容性**：我哋專注於目前嘅技術，並唔太關注同舊有系統嘅向後兼容性。

### 評估嘅框架：

1. **Django（Python）**  
2. **Ruby on Rails（Ruby）**  
3. **Phoenix（Elixir）**  
4. **Loco（Rust）**

---

### 1. **Django（Python）**

**概覽**：  
Django 係 Python 嘅高階網頁框架，促進快速開發同簡潔務實嘅設計。佢以「開箱即用」（batteries included）理念見稱，意味住佢開箱即包含認證、路由、ORM 同表單處理等許多功能。

**強項**：  
- **全棧**：Django 係全面嘅全棧框架，可以透過整合功能（例如範本引擎、管理介面）處理後端同前端需求。
- **敏捷開發**：Django 清晰界定嘅結構同慣例，令開發可以快速進行並具適應性，對初創環境至關重要。框架附有出色嘅文件，以及豐富嘅第三方套件生態系統，加快開發。
- **AI/ML 整合**：講到數據科學同機器學習，Python 嘅生態系統無可匹敵。Django 以 Python 為基礎，可以同 Jupyter notebooks、Pandas、NumPy、TensorFlow 同 scikit-learn 等工具無縫整合。
- **社群同生態系統**：Django 擁有龐大嘅社群、穩健嘅文件，以及廣泛嘅外掛同擴充，大大加快開發同疑難排解。
  
**弱點**：  
- **運行速度**：同 Rust 或者 Elixir 等語言相比，Python 往往較慢。不過，對於效能並非首要考慮嘅呢個使用情況，這未必係致命缺點。
- **可擴展性**：雖然 Django 具高度可擴展性，但如果冇審慎優化，喺極大規模下（例如處理大量並行請求時）可能會有挑戰。不過，Django 仍然可以透過負載平衡同快取技術有效擴展。

**結論**：  
Django 同敏捷開發、全棧支援同 AI/ML 兼容性嘅需求配合良好。佢同 Python 嘅整合，提供對應用程式所需數據科學工具同程式庫嘅無縫存取。

---

### 2. **Ruby on Rails（Ruby）**

**概覽**：  
Ruby on Rails（RoR）係一個成熟嘅全棧網頁應用程式框架，以「約定優於配置」嘅做法見稱，有助快速開發。

**強項**：  
- **全棧**：RoR 內置後端同前端開發工具（例如視圖、範本、腳手架），而且豐富嘅 gem 庫令各種功能可以快速實現。
- **敏捷開發**：Ruby on Rails 尤其以快速迭代週期見稱，對想快速迭代功能嘅初創公司有利。RoR 支援測試驅動開發（TDD），並擁有成熟嘅敏捷工作流程生態系統。
- **社群同生態系統**：RoR 擁有穩固而強大嘅社群，以及大量可以加快開發嘅 gem。
- **易用**：Rails 嘅語法對開發人員非常友善，以令資料庫遷移、模型—視圖—控制器（MVC）架構同路由處理等任務快速簡單見稱。

**弱點**：  
- **效能**：同 Python 或者 Elixir 相比，Ruby 嘅運行時效能往往較慢。雖然 RoR 可以憑適當嘅基礎設施擴展，但對於需要大量即時處理或者高並行流量嘅應用程式，Ruby 嘅效能可能成為樽頸。
- **AI/ML 整合**：雖然 Ruby 有一些機器學習程式庫，但喺 AI/ML 社群入面冇 Python 咁廣泛採用。同 Jupyter notebooks 等工具嘅整合冇咁無縫，令 Python 成為數據密集型應用程式嘅更強選擇。
  
**結論**：  
Ruby on Rails 雖然擅長敏捷開發同快速製作原型，但同 Python（Django）相比，喺 AI/ML 兼容性方面有所不足。對於優先考慮快速迭代多過深入數據分析整合嘅初創公司，佢係可行嘅選擇。

---

### 3. **Phoenix（Elixir）**

**概覽**：  
Phoenix 係用 Elixir 建置嘅網頁框架，Elixir 係專為可擴展性同並行而設計嘅函數式程式語言。Phoenix 善用 Erlang VM，Erlang VM 以處理大規模並行同容錯系統見稱。

**強項**：  
- **可擴展性同效能**：Phoenix 喺可擴展性同處理高並行方面表現出色。佢建基於 Erlang VM，可以支援數以千計（甚至數以百萬計）嘅並行連接，令佢成為需要即時數據處理或者高流量嘅應用程式嘅有力候選。
- **全棧**：Phoenix 包含建置應用程式後端同前端所需嘅一切。佢支援用於互動式 UI 更新嘅 live view，並包含範本引擎。
- **敏捷開發**：Phoenix 高度模組化，容許快速迭代功能。佢非常適合需要快速行動嘅初創公司。
- **AI/ML 兼容性**：雖然 Elixir 有新興嘅機器學習程式庫，但喺 AI/ML 任務方面冇 Python 咁獲廣泛支援。同 Jupyter notebooks 等工具整合需要變通辦法，因為 Elixir 嘅數據科學生態系統冇 Python 咁成熟。

**弱點**：  
- **AI/ML 生態系統**：Elixir 並非數據科學或者機器學習嘅主要語言，生態系統亦冇 Python 咁成熟。因此，同 Jupyter notebooks 或者熱門 AI 程式庫（TensorFlow、PyTorch）整合會好繁瑣。
- **學習曲線**：如果團隊唔熟悉函數式編程同 Elixir，學習曲線可能較陡。

**結論**：  
如果可擴展性同並行係首要考慮，Phoenix 係出色嘅選擇。不過，鑑於優先考慮 AI/ML 兼容性，由於 Elixir 喺此領域嘅生態系統有限，Phoenix 未必係最合適嘅選擇。

---

### 4. **Loco（Rust）**

**概覽**：  
Loco 係用 Rust 建置嘅網頁框架，Rust 係以效能、記憶體安全同並行見稱嘅系統程式語言。Rust 越來越受歡迎，用於建置高效能應用程式。

**強項**：  
- **效能**：Rust 嘅主要強項在於高效能同記憶體安全，令佢成為需要底層控制或者極高效能嘅應用程式嘅絕佳選擇。
- **並行**：Rust 嘅所有權系統確保記憶體安全，同時容許安全嘅並行編程，非常適合需要高效擴展同處理並行嘅系統。

**弱點**：  
- **全棧開發**：Loco 雖然有前途，但喺提供完整全棧方案方面冇其他框架成熟。佢更適合後端開發，而 Rust 周邊嘅前端生態系統仍在興起。
- **敏捷開發**：由於 Rust 較底層同學習曲線較陡，同 Python 或 Ruby 等高階語言相比，用 Rust 開發可能較慢。
- **AI/ML 生態系統**：Rust 冇 Python 咁廣泛嘅 AI/ML 生態系統。雖然 Rust 嘅數值運算程式庫不斷增加，但同 Python 嘅產品（例如 Jupyter notebooks 或者機器學習框架）相比，成熟度遠遠不及。
  
**結論**：  
Rust 同佢嘅框架 Loco 雖然提供卓越效能，但欠缺全棧支援、敏捷開發嘅好處同 AI/ML 生態系統，令佢對呢個特定使用情況較不理想。佢更適合效能關鍵型應用程式，而唔係配合整合數據科學工具嘅快速網頁開發。

---

### 結論

根據項目需求評估過各個選項之後，**Django（Python）**係最合適嘅選擇。佢提供以下優勢：

- **全棧能力**：Django 係整合後端同前端開發嘅全棧框架。
- **敏捷開發**：框架非常適合快速製作原型同迭代，對初創環境至關重要。
- **AI/ML 兼容性**：Python 係 AI/ML 領域嘅領先語言，而 Django 同 Jupyter notebooks 等程式庫嘅兼容性，確保數據分析同處理嘅順暢整合。
- **社群同生態系統**：Django 強大嘅社群支援同龐大嘅程式庫生態系統，提供大量加快開發嘅工具。

**Ruby on Rails** 雖然亦係敏捷開發嘅強力競爭者，但佢有限嘅 AI/ML 支援，令佢對呢個特定使用情況較不理想。**Phoenix（Elixir）**同 **Loco（Rust）**雖然喺可擴展性同效能方面出色，但喺 AI/ML 整合同全棧開發方面有所不足。因此，建議呢個項目用 Django 框架。
