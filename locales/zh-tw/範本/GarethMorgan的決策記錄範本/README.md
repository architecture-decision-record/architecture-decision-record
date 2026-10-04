# [000] 標題
*為每個 ADR 分配一個編號,以便於引用和編目* \
*注意:所有斜體文字均為提示,用於正式文件時應刪除*

## 狀態 - 草稿(DRAFT)/ 生效中(ACTIVE)/ 已被 [000] 棄用(DEPRECATED)/ 取代 [000](SUPERSEDES)

## 背景
*簡要描述本 ADR 旨在解決的問題,以及這些問題為何存在。*

## 所決定的方法
*詳述已經/將要做出的具有架構意義的決策,並說明它如何解決「背景」一節中概述的問題。*

## 後果
*該決策對系統的架構特性和功能需求有何影響?*

## 治理
*將如何監控該決策的結果?* \
*將如何確保遵守該決策?*

## 選項分析
*如適用,請包含或連結到為得出本文件所述決策而進行的任何權衡分析。*

### 圖例
*可選:為利益相關者提供視覺輔助,幫助他們快速發現正面和負面的權衡——例如使用簡單的紅綠燈高亮,並加上正面或負面字首。*

<span style="background-color:#4bce97; color:black;">綠色</span>背景表示非常契合,依次遞減為<span style="background-color:#f1c232; color:black;">琥珀色</span>,<span style="background-color:#e06666; color:black;">紅色</span>表示最不契合。 \
\+ 表示具有正面影響的評論 \
\- 表示具有負面影響的評論

### 高層概覽
*每個選項與問題背景的契合程度一目瞭然。*

<table>
  <thead>
    <tr>
      <th>概要</th>
      <th>選項 1</th>
      <th>選項 2</th>
      <th>選項 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><i>實施難易程度</i></td>
      <td>
        <span style="background-color:#4bce97; color:black; padding-right:5px">
          + 非常容易
        </span>
      </td>
      <td>
        <span style="background-color:#f1c232; color:black; padding-right:5px">
            - 有些棘手
        </span>
      </td>
      <td>
        <span style="background-color:#e06666; color:black; padding-right:5px">
            - 實施規模大,需要專家知識
        </span>
      </td>
    </tr>
    <tr>
      <td><i>時間週期</i></td>
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
      <td><i>戰略價值</i></td>
      <td>
        <span style="background-color:#e06666; color:black; padding-right:5px">
            - 沒有戰略價值,純屬戰術性
        </span>
      </td>
       <td>
        <span style="background-color:#f1c232; color:black; padding-right:5px">
            + 略微改善客戶入駐體驗
        </span>
      </td>
      <td>
        <span style="background-color:#4bce97; color:black; padding-right:5px">
            + 非常適合即將進行的合併
        </span>
      </td>
    </tr>
  </tbody>
</table>

### 功能需求
*每個潛在選項與期望的功能需求的契合程度如何?*

<table>
  <thead>
    <tr>
      <th>場景</th>
      <th><i>選項 1</i></th>
      <th><i>選項 2</i></th>
      <th><i>選項 3</i></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><i>場景 1</i></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><i>場景 2</i></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><i>場景 3</i></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

*可選:新增行/另一張表格,以涵蓋已知的未來場景。*

### 非功能需求
*每個潛在選項與期望的架構特性的契合程度如何?
注意:「架構特性」會是更恰當的標題,但請根據你所在業務領域的常用語言進行調整。*

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
      <td><i>可擴充套件性</i></td>
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

*可選:加入或連結到這些架構特性在你的業務/產品中的定義。*
