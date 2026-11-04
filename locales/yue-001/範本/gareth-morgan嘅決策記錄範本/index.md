# [000] 標題
*為每份 ADR 編配一個編號，方便參照同編目* \
*注意：所有斜體文字都係提示，正式使用時應該刪除*

## 狀態 - DRAFT / ACTIVE /  DEPRECATED by [000] / SUPERSEDES [000]

## 背景
*簡單描述呢份 ADR 想處理嘅問題，以及呢啲問題點解會存在。*

## 決定嘅做法
*詳細說明已經作出（或者將會作出）嘅架構重大決策，並描述佢點樣解決「背景」章節所述嘅問題。*

## 後果
*呢個決策對系統嘅架構特性同功能性需求有咩影響？*

## 管治
*點樣監察呢個決策嘅成果？* \
*點樣確保遵守呢個決策？*

## 選項分析
*如適用，請包括或者連結到為得出本文件所作決策而進行嘅任何取捨分析。*

### 圖例
*可選：向持份者提供視覺輔助，幫助佢哋快速辨識正面同負面嘅取捨，例如用簡單嘅紅綠燈標示，配合正面或者負面前綴。*

<span style="background-color:#4bce97; color:black;">綠色</span>背景代表非常合適，逐步變差經過<span style="background-color:#f1c232; color:black;">琥珀色</span>，<span style="background-color:#e06666; color:black;">紅色</span>代表最不合適。 \
\+ 代表正面影響嘅評語 \
\- 代表負面影響嘅評語

### 高層次概覽
*一眼望去，每個選項同問題背景有幾配合？*

<table>
  <thead>
    <tr>
      <th>摘要</th>
      <th>選項 1</th>
      <th>選項 2</th>
      <th>選項 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><i>實施難易度</i></td>
      <td>
        <span style="background-color:#4bce97; color:black; padding-right:5px">
          + 超容易
        </span>
      </td>
      <td>
        <span style="background-color:#f1c232; color:black; padding-right:5px">
            - 棘手
        </span>
      </td>
      <td>
        <span style="background-color:#e06666; color:black; padding-right:5px">
            - 大型實施，需要專家知識
        </span>
      </td>
    </tr>
    <tr>
      <td><i>時間表</i></td>
      <td>
        <span style="background-color:#4bce97; color:black; padding-right:5px">
            + 非常快
        </span>
      </td>
       <td>
        <span style="background-color:#f1c232; color:black; padding-right:5px">
            - 相當慢
        </span>
      </td>
      <td>
        <span style="background-color:#e06666; color:black; padding-right:5px">
            - 非常慢
        </span>
      </td>
    </tr>
    <tr>
      <td><i>策略價值</i></td>
      <td>
        <span style="background-color:#e06666; color:black; padding-right:5px">
            - 冇策略價值，純粹屬於戰術層面
        </span>
      </td>
       <td>
        <span style="background-color:#f1c232; color:black; padding-right:5px">
            + 稍為改善客戶入門體驗
        </span>
      </td>
      <td>
        <span style="background-color:#4bce97; color:black; padding-right:5px">
            + 非常適合即將進行嘅合併
        </span>
      </td>
    </tr>
  </tbody>
</table>

### 功能性需求
*每個潛在選項同預期嘅功能性需求有幾配合？*

<table>
  <thead>
    <tr>
      <th>情境</th>
      <th><i>選項 1</i></th>
      <th><i>選項 2</i></th>
      <th><i>選項 3</i></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><i>情境 1</i></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><i>情境 2</i></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><i>情境 3</i></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

*可選：加入更多行／另一個表格，涵蓋已知嘅未來情境。*

### 非功能性需求
*每個潛在選項同預期嘅架構特性有幾配合？
注意：「架構特性」會係更合適嘅標題，不過請按你業務領域熟悉嘅用語作出調整。*

<table>
  <thead>
    <tr>
      <th>架構 </br> 特性</th>
      <th><i>選項 1</i></th>
      <th><i>選項 2</i></th>
      <th><i>選項 3</i></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><i>可擴展性</i></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><i>效能</i></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><i>可用性</i></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

*可選：加入或者連結到架構特性嘅定義，說明佢哋同你嘅業務／產品有咩關係。*
