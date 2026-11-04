## Architecture decision record: framework sa browser automation para sa E2E testing (Playwright kontra Selenium)

### 1. **Konteksto**

Pumipili kami ng browser automation framework para sa aming end-to-end (E2E) testing pipeline. Magiging mahalaga ang framework na ito sa aming mga proseso ng CI/CD, na magpapatakbo ng mga test na ginagaya ang totoong interaksyon ng user sa aming platform. Partikular, sasaklawin ng mga test ang mga senaryo tulad ng user sign-up/sign-in, pag-upload ng file, interaksyon sa dashboard, at pag-download ng ulat.

Bilang isang **startup**, nakatuon kami sa **agile na pagbuo**, na may pangangailangang mabilis na mag-iterate at umunlad. Pangunahing gumagamit ang aming koponan ng **TypeScript** at **Python**, at mahalagang makasulat ng mga test sa mga wikang ito. Bukod pa rito, naglalaman ang platform ng **mga interactive na chart at dashboard**, kaya kritikal na suportahan nang mahusay ng automation tool ang mayayaman at dynamic na UI.

Ang dalawang kandidato para sa gawaing ito ay ang **Playwright** at **Selenium**, na may kanya-kanyang lakas at trade-off. Kailangan naming suriin ang mga framework na ito batay sa mga feature at requirement na nakabalangkas sa ibaba.

### 2. **Mga Isinaalang-alang na Opsyon**

- **Playwright** (ng Microsoft)
- **Selenium** (ng Selenium Project)

### 3. **Mga Driver ng Desisyon**

Ang mga salik na nakaimpluwensya sa aming desisyon ay ang mga sumusunod:

1. **Agile na Pagbuo**: Dapat magbigay-daan ang napiling tool sa mabilis at flexible na mga siklo ng pagbuo.
2. **Suporta sa Wika**: Kailangan ng aming koponan ang suporta para sa parehong **TypeScript** at **Python**.
3. **Interactive na UI Testing**: Mahalaga ang kakayahang subukin nang maaasahan ang mga interactive na chart, dashboard, at dynamic na elemento.
4. **Bilis sa Runtime**: Bagama't hindi pangunahing alalahanin, isinasaalang-alang ang performance sa mga CI/CD pipeline.
5. **Scalability**: Hindi kami nagpaplano ng malawakang pag-scale sa agarang hinaharap, ngunit gusto naming matiyak na kakayanin ng solusyon ang paglago sa hinaharap.
6. **Backwards Compatibility**: Hindi kritikal sa aming proyekto sa ngayon ang mga legacy system at compatibility sa mas lumang browser.
7. **Mobile Testing**: Bagama't hindi agarang pokus, dapat kayang subukin ng framework ang mga mobile-responsive na feature o mapalawak para sa ganitong mga gamit.
8. **Multi-monitor Testing**: Pangalawang requirement ang suporta para sa mga multi-monitor na configuration, lalo na kung sakaling mag-scale kami sa pagsubok ng mas masalimuot na workflow ng user.
9. **File Upload Testing**: Dapat mahusay na mahawakan ng framework ang mga pag-upload ng file, na pangunahing requirement ng aming mga pangangailangan sa testing.

### 4. **Mga Pamantayan sa Pagsusuri**

- **Dali ng Paggamit**: Gaano kadaling sumulat at magpanatili ng mga test?
- **Suporta sa Wika**: Sinusuportahan ba ng framework ang TypeScript at Python, ang dalawang wikang pinakamadalas gamitin ng aming koponan?
- **Interactive na UI Testing**: Gaano kahusay hinahawakan ng framework ang masalimuot at interactive na user interface tulad ng mga chart, pag-upload ng file, at dynamic na data?
- **Integrasyon sa CI/CD**: Gaano kahusay nag-iintegrate ang framework sa mga karaniwang CI/CD tool at serbisyo?
- **Suporta sa Iba't Ibang Browser**: Anong mga browser ang sinusuportahan at gaano kahusay ang performance ng mga ito?
- **Performance at Bilis**: Gaano kabilis tumatakbo ang mga test, lalo na sa CI/CD pipeline?
- **Scalability**: Gaano kahusay mag-scale ang framework kung dadagdagan ang mga test o mas masalimuot na senaryo?
- **Komunidad at Ecosystem**: Gaano kaaktibo ang komunidad ng framework? Marami bang available na integration at extension?

### 5. **Mga Konsiderasyon**

#### 5.1 **Playwright**

##### **Mga Pakinabang**:
1. **Mas Matalinong API para sa Lokal na Pag-upload ng File**: Mas simple at mas madaling maunawaan ang API ng Playwright para sa pakikipag-ugnayan sa mga lokal na file at pagsasagawa ng pag-upload ng file. Magpapadali ito sa pagpapatupad at pagpapanatili ng file upload testing.
2. **Syntax at Code Generation**: Mas maikli at mas maigsi ang syntax ng Playwright. Nagreresulta ito sa mas kaunting boilerplate code, na nagpapabuti sa maintainability at kahusayan ng developer. Bukod pa rito, pinabubuti ng mas maikling syntax na ito ang kalidad ng code generation ng OpenAI, kaya mas madaling awtomatikong makabuo ng mga test script.
3. **Interactive na UI Testing**: Mahusay ang Playwright sa pagsubok ng mga dynamic at interactive na web application, tulad ng may mayayamang chart, masalimuot na interaksyon ng user, at real-time na update. Napakahusay nitong nahahawakan ang WebSockets, WebRTC, shadow DOM, at iba pang makabagong teknolohiya sa web.
4. **Suporta sa Iba't Ibang Browser**: Sinusuportahan ng Playwright ang **Chromium**, **WebKit**, at **Firefox**. Pare-pareho ang performance nito sa mga browser na ito, na dapat sumaklaw sa karamihan ng aming pangangailangan sa testing.
5. **Integrasyon sa CI/CD**: Maayos na nag-iintegrate ang Playwright sa mga makabagong CI/CD platform (GitHub Actions, Jenkins, atbp.). Kaya nitong magpatakbo ng mga test nang magkakasabay sa iba't ibang browser, na nag-o-optimize sa oras ng pagpapatakbo ng test at nagiging angkop para sa mabilis na pagbuo.
6. **Mabilis at Maaasahan**: Karaniwang mas mabilis ang Playwright kaysa sa Selenium, lalo na sa headless mode, at mas matatag sa paghawak ng mga asynchronous na web element.

##### **Mga Disbentaha**:
1. **Limitadong Mobile Testing**: Bagama't sinusuportahan ng Playwright ang mobile emulation para sa mga browser, kulang ito sa native na kakayahan sa mobile testing tulad ng integrasyon ng Selenium sa Appium para sa tunay na mobile testing.
2. **Mas Maliit na Ecosystem**: Mas bago at hindi pa gaanong matatag ang Playwright kaysa sa Selenium. Bagama't mabilis na lumalaki ang komunidad nito at maganda ang dokumentasyon, maaaring wala pa itong malawak na ecosystem ng mga plugin at integration na iniaalok ng Selenium.
3. **Limitadong Suporta sa Browser**: Bagama't sinasaklaw ng Playwright ang mga pangunahing makabagong browser (Chrome, Safari, Firefox), hindi kasing-tibay ng sa Selenium ang suporta nito sa mga legacy browser (hal., Internet Explorer).

#### 5.2 **Selenium**

##### **Mga Pakinabang**:
1. **Mas Mahabang Kasaysayan at Katatagan**: Matagal nang umiiral ang Selenium at may napatunayang rekord. Malawak itong ginagamit ng maraming koponan at industriya, na humantong sa malawak na ecosystem ng mga plugin, integration, at resource.
2. **Suporta sa Iba't Ibang Browser at Platform**: Sinusuportahan ng Selenium ang **malawak na uri ng mga browser** at bersyon, kasama ang **Internet Explorer**, at maaari ring i-integrate sa iba't ibang tool tulad ng **Docker**, **Selenium Grid**, at **mga cloud service** para sa distributed testing.
3. **Mobile Testing**: Sa pamamagitan ng integrasyon nito sa **Appium**, mas matatag ang Selenium sa mobile testing, kasama ang parehong Android at iOS application. Ginagawa itong mas magandang pagpipilian para sa mga proyektong mobile-first o mabigat sa mobile.
4. **Multi-monitor Testing**: Nagbibigay ang Selenium ng mas mahusay na suporta para sa mga senaryong may **maraming monitor** o masalimuot na interaksyon sa maraming window.

##### **Mga Disbentaha**:
1. **Pagiging Masalimuot**: Mas verbose at tahasan ang API ng Selenium. Bagama't maaari itong maging bentahe sa ilang kaso, nangangahulugan ito ng mas maraming code na isusulat at papanatilihin, na maaaring magpabawas ng liksi ng developer—lalo na mahalaga sa kapaligiran ng startup.
2. **Performance**: Karaniwang mas mabagal tumakbo ang Selenium kaysa sa Playwright, lalo na sa headless mode. Maaari itong makaapekto sa mga CI/CD pipeline, lalo na kapag dumarami ang mga test.
3. **Interactive na UI Testing**: Hindi kasing-makinis ng Playwright ang Selenium pagdating sa pagsubok ng mga makabago at interactive na web UI, partikular sa mga chart at real-time na pag-update ng data. Nangangailangan ito ng mas maraming setup at paghawak para maaasahang makipag-ugnayan sa dynamic na nilalaman.

### 6. **Buod ng Paghahambing**

| Feature                          | Playwright                                    | Selenium                                   |
|-----------------------------------|-----------------------------------------------|-------------------------------------------|
| **Dali ng Paggamit**                   | Mas maikling syntax, mas madaling unawain para sa makabagong UI | Mas tahasan, nangangailangan ng mas maraming boilerplate  |
| **Suporta sa Wika**              | TypeScript, Python, JavaScript                | TypeScript, Python, Java, Ruby, C#        |
| **Interactive na UI Testing**        | Napakahusay para sa dynamic, real-time na UI          | Nahahawakan ang mga pangunahing UI, ngunit mas verbose at masalimuot para sa mayayamang interaksyon |
| **File Upload Testing**           | Mas matalinong API para sa pag-upload ng file                  | Mas verbose, mas hindi madaling unawain na API         |
| **Integrasyon sa CI/CD**             | Madaling integrasyon sa GitHub Actions, Jenkins | Matibay na integrasyon sa maraming CI tool    |
| **Mobile Testing**                | Limitado, emulation lamang                       | Buong suporta sa pamamagitan ng Appium               |
| **Suporta sa Iba't Ibang Browser**         | Chromium, WebKit, Firefox                     | Buong suporta sa mga pangunahin at legacy na browser |
| **Performance**                   | Mabilis, naka-optimize para sa headless testing          | Mas mabagal, lalo na sa headless mode       |
| **Multi-monitor Testing**         | Limitado                                       | Mahusay na suporta sa mga multi-monitor na setup    |
| **Komunidad at Ecosystem**       | Lumalaki, magandang dokumentasyon                   | Malaki, matatag, malawak na ecosystem       |

### 7. **Desisyon**

Matapos isaalang-alang ang mga requirement at trade-off, ang **Playwright** ang mas mahusay na pagpipilian para sa aming kasalukuyang pangangailangan. Ang mas matalinong API nito para sa lokal na file upload testing, maigsing syntax, at matibay na suporta sa interactive na UI testing ay ginagawa itong mainam para sa aming agile na siklo ng pagbuo. Kritikal para sa aming koponan na sinusuportahan nito ang parehong **TypeScript** at **Python**, at ang makabagong pamamaraan ng framework sa testing ay magpapahintulot sa aming sumulat ng malinis at napapanatiling code.

Bagama't nananatiling mahusay na tool ang **Selenium**, partikular para sa mobile testing, suporta sa legacy browser, at mga multi-monitor na setup, hindi ito gaanong angkop sa aming kasalukuyang pangangailangan. Dahil sa pagiging verbose nito, mas mabagal na performance, at mas masalimuot na paghawak ng mga dynamic na UI tulad ng mga chart, hindi ito gaanong optimal para sa aming gamit.

### 8. **Mga Kahihinatnan**

- **Agarang Aksyon**: Aampunin namin ang **Playwright** para sa aming E2E testing, na nakatuon sa pagsubok ng mga daloy ng user na kinasasangkutan ng sign-up, sign-in, pag-upload ng file, mga dashboard, at pag-download ng ulat.
- **Mga Pangmatagalang Konsiderasyon**: Babantayan namin ang umuunlad na ecosystem ng Playwright. Kung magbago ang aming mga pangangailangan, partikular sa mobile testing o suporta sa legacy browser, maaari naming balikan ang Selenium.
- **Pagsasanay at Dokumentasyon**: Kailangang maging pamilyar ang mga development team sa API ng Playwright, partikular sa paghawak ng mga dynamic na UI at pag-upload ng file.
- **Migrasyon**: Unti-unting ililipat sa Playwright ang mga umiiral na Selenium test (kung mayroon).

### 9. **Mga Konsiderasyon sa Hinaharap**
