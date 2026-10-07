# آرکیٹیکچر فیصلے کا ریکارڈ (ADR)

آرکیٹیکچر فیصلے کا ریکارڈ (ADR) ایک دستاویز ہے جو کیے گئے کسی اہم آرکیٹیکچر فیصلے کو اس کے پس منظر اور نتائج کے ساتھ درج کرتی ہے۔

> [!IMPORTANT]
> ان وسائل کو کسی بھی اہم نظام میں استعمال کرنے سے پہلے اپنی طرف سے مناسب جانچ پڑتال ضرور کریں۔

فہرستِ مضامین:

- [آرکیٹیکچر فیصلے کا ریکارڈ کیا ہے؟](#آرکیٹیکچر-فیصلے-کا-ریکارڈ-کیا-ہے)
- [ADR استعمال کرنا کیسے شروع کریں](#adr-استعمال-کرنا-کیسے-شروع-کریں)
- [ٹولز کے ساتھ ADR استعمال کرنا کیسے شروع کریں](#ٹولز-کے-ساتھ-adr-استعمال-کرنا-کیسے-شروع-کریں)
- [git کے ساتھ ADR استعمال کرنا کیسے شروع کریں](#git-کے-ساتھ-adr-استعمال-کرنا-کیسے-شروع-کریں)
- [ADR کے لیے Claude Code اسکلز](#adr-کے-لیے-claude-code-اسکلز)
- [فائل ناموں کے اصول](#فائل-ناموں-کے-اصول)
- [اچھے ADR لکھنے کے مشورے](#اچھے-adr-لکھنے-کے-مشورے)
- [ADR کے مثالی ٹیمپلیٹس](#adr-کے-مثالی-ٹیمپلیٹس)
- [ADR کے لیے ٹیم ورک کے مشورے](#adr-کے-لیے-ٹیم-ورک-کے-مشورے)
- [ADR کے لیے ٹیم ورک کے سوالات](#adr-کے-لیے-ٹیم-ورک-کے-سوالات)
- [ADR کے لیے اگلے قدم کے تصورات](#adr-کے-لیے-اگلے-قدم-کے-تصورات)
- [آرکیٹیکچر ڈایاگرام، منظر اور نقطۂ نظر](#آرکیٹیکچر-ڈایاگرام-منظر-اور-نقطۂ-نظر)
- [فیصلوں کے لیے فٹنس فنکشنز بطور کوڈ](#فیصلوں-کے-لیے-فٹنس-فنکشنز-بطور-کوڈ)
- [پل ریکویسٹ کے لیے فیصلوں کی حفاظتی ریلنگ](#پل-ریکویسٹ-کے-لیے-فیصلوں-کی-حفاظتی-ریلنگ)
- [مزید معلومات کے لیے](#مزید-معلومات-کے-لیے)

ٹیمپلیٹس:

- [جیف ٹائری اور آرٹ اکرمین کا فیصلہ ریکارڈ سانچہ](سانچے/جیف-ٹائری-اور-آرٹ-اکرمین-کا-فیصلہ-ریکارڈ-سانچہ/)
- [مائیکل نائیگارڈ کا فیصلہ ریکارڈ سانچہ](سانچے/مائیکل-نائیگارڈ-کا-فیصلہ-ریکارڈ-سانچہ/)
- [EdgeX کا فیصلہ ریکارڈ سانچہ](سانچے/edgex-کا-فیصلہ-ریکارڈ-سانچہ/)
- [arc42 کا فیصلہ ریکارڈ سانچہ](سانچے/arc42-کا-فیصلہ-ریکارڈ-سانچہ/)
- [اسکندریائی پیٹرن کے لیے فیصلہ ریکارڈ سانچہ](سانچے/اسکندریائی-پیٹرن-کے-لیے-فیصلہ-ریکارڈ-سانچہ/)
- [کاروباری کیس کے لیے فیصلہ ریکارڈ سانچہ](سانچے/کاروباری-کیس-کے-لیے-فیصلہ-ریکارڈ-سانچہ/)
- [MADR منصوبے کا فیصلہ ریکارڈ سانچہ](سانچے/madr-منصوبے-کا-فیصلہ-ریکارڈ-سانچہ/)
- [Planguage استعمال کرنے والا فیصلہ ریکارڈ سانچہ](سانچے/planguage-استعمال-کرنے-والا-فیصلہ-ریکارڈ-سانچہ/)
- [Paulo Merson کا فیصلہ ریکارڈ ٹیمپلیٹ](https://github.com/pmerson/ADR-template)
- [Olaf Zimmermann کا فیصلہ ریکارڈ ٹیمپلیٹ](https://medium.com/olzzio/y-statements-10eb07b5a177)
- [گیرتھ مورگن کا فیصلہ ریکارڈ سانچہ](سانچے/گیرتھ-مورگن-کا-فیصلہ-ریکارڈ-سانچہ/)
- [GIG Cymru NHS Wales کا فیصلہ ریکارڈ سانچہ](سانچے/gig-cymru-nhs-wales-کا-فیصلہ-ریکارڈ-سانچہ/)
- [Ignacio Larrañaga کے اہم تکنیکی فیصلوں (ITD) کے لیے فیصلہ ریکارڈ سانچہ](سانچے/اہم-تکنیکی-فیصلوں-کے-لیے-فیصلہ-ریکارڈ-سانچہ/)

مثالیں:

- [CSS فریم ورک](مثالیں/css-فریم-ورک/)
- [ماحولیاتی متغیرات کی ترتیب](مثالیں/ماحولیاتی-متغیرات-کی-ترتیب/)
- [میٹرکس، مانیٹرز، الرٹس](مثالیں/میٹرکس-مانیٹرز-الرٹس/)
- [مائیکروسافٹ Azure DevOps](مثالیں/مائیکروسافٹ-azure-devops/)
- [مونوریپو یا ملٹی ریپو](مثالیں/مونوریپو-یا-ملٹی-ریپو/)
- [پروگرامنگ زبانیں](مثالیں/پروگرامنگ-زبانیں/)
- [رازوں کا ذخیرہ](مثالیں/رازوں-کا-ذخیرہ/)
- [ٹائم اسٹیمپ فارمیٹ](مثالیں/ٹائم-اسٹیمپ-فارمیٹ/)
- [اور بہت کچھ...](مثالیں/)

## آرکیٹیکچر فیصلے کا ریکارڈ کیا ہے؟

**آرکیٹیکچر فیصلے کا ریکارڈ** (ADR) ایک دستاویز ہے جو کیے گئے اہم آرکیٹیکچر کے فیصلے کو اس کے سیاق و سباق اور نتائج کے ساتھ سمیٹتی ہے۔

**آرکیٹیکچر کا فیصلہ** (AD) سافٹ ویئر ڈیزائن کا ایک انتخاب ہے جو کسی اہم تقاضے کو پورا کرتا ہے۔

**آرکیٹیکچر فیصلوں کا لاگ** (ADL) کسی خاص منصوبے (یا تنظیم) کے لیے بنائے گئے اور برقرار رکھے گئے تمام ADR کا مجموعہ ہے۔

**آرکیٹیکچر کے لحاظ سے اہم تقاضا** (ASR) ایسا تقاضا ہے جس کا سافٹ ویئر سسٹم کے آرکیٹیکچر پر قابلِ پیمائش اثر ہو۔

یہ سب **آرکیٹیکچر کے علم کے انتظام** (AKM) کے موضوع کے اندر ہیں۔

اس دستاویز کا مقصد ADR کا فوری جائزہ، انہیں بنانے کا طریقہ، اور مزید معلومات کہاں دیکھنی ہیں، فراہم کرنا ہے۔

مخففات:

  * **AD**: آرکیٹیکچر کا فیصلہ

  * **ADL**: آرکیٹیکچر فیصلوں کا لاگ

  * **ADR**: آرکیٹیکچر فیصلے کا ریکارڈ

  * **AKM**: آرکیٹیکچر کے علم کا انتظام

  * **ASR**: آرکیٹیکچر کے لحاظ سے اہم تقاضا

## ADR استعمال کرنا کیسے شروع کریں

ADR استعمال کرنا شروع کرنے کے لیے اپنے ساتھیوں سے ان شعبوں پر بات کریں۔

فیصلے کی نشاندہی:

  * AD کتنا فوری اور کتنا اہم ہے؟

  * کیا یہ ابھی کرنا ضروری ہے، یا زیادہ معلوم ہونے تک انتظار کیا جا سکتا ہے؟

  * ذاتی اور اجتماعی تجربہ، نیز تسلیم شدہ ڈیزائن کے طریقے اور مشقیں، فیصلے کی نشاندہی میں مدد دے سکتی ہیں۔

  * مثالی طور پر فیصلوں کی ایک کرنے کی فہرست رکھیں جو پروڈکٹ کی کرنے کی فہرست کی تکمیل کرے۔

فیصلہ سازی:

  * فیصلہ سازی کی کئی تکنیکیں موجود ہیں، عمومی بھی اور سافٹ ویئر آرکیٹیکچر کے لیے مخصوص بھی، مثلاً ڈائیلاگ میپنگ۔

  * گروہی فیصلہ سازی تحقیق کا ایک فعال موضوع ہے۔

فیصلے کا نفاذ اور تعمیل:

  * AD سافٹ ویئر ڈیزائن میں استعمال ہوتے ہیں؛ لہٰذا انہیں سسٹم کے اسٹیک ہولڈرز تک پہنچانا اور ان سے قبول کروانا ضروری ہے جو اس کی مالی معاونت، ڈویلپمنٹ اور آپریشن کرتے ہیں۔

  * آرکیٹیکچر کے لحاظ سے واضح کوڈنگ کے انداز اور وہ کوڈ جائزے جو آرکیٹیکچر کے خدشات اور فیصلوں پر مرکوز ہوں، دو متعلقہ مشقیں ہیں۔

  * سافٹ ویئر کے ارتقا میں کسی سافٹ ویئر سسٹم کو جدید بناتے وقت بھی AD پر (دوبارہ) غور کرنا پڑتا ہے۔

فیصلے کا اشتراک (اختیاری):

  * بہت سے AD منصوبوں میں دہرائے جاتے ہیں۔

  * اس لیے ماضی کے فیصلوں کے تجربات، اچھے اور برے دونوں، واضح علمی انتظام کی حکمتِ عملی اپناتے وقت قیمتی قابلِ دوبارہ استعمال اثاثے ہو سکتے ہیں۔

فیصلے کی دستاویز بندی:

  * فیصلے سمیٹنے کے لیے بہت سے سانچے اور ٹولز موجود ہیں۔

  * ایجائل کمیونٹیز دیکھیں، مثلاً M. Nygard کے ADR۔

  * روایتی سافٹ ویئر انجینئرنگ اور آرکیٹیکچر ڈیزائن کے عمل دیکھیں، مثلاً IBM UMF اور CapitalOne کے Tyree اور Akerman کی تجویز کردہ جدول کی ترتیب۔

مزید کے لیے:

  * اوپر کے مراحل وکی پیڈیا کے اندراج [Architectural Decision](https://en.wikipedia.org/wiki/Architectural_decision) سے لیے گئے ہیں

## ٹولز کے ساتھ ADR استعمال کرنا کیسے شروع کریں

- [MySpec](https://myspec.dev) — خودکار تفصیلات اور آرکیٹیکچر فیصلوں کا پلیٹ فارم جو پروجیکٹ کے آئین، تکنیکی آرکیٹیکچر اور ADR کو صاف Markdown میں ترتیب دیتا ہے، جو MCP کے ذریعے پیش کیا جاتا ہے۔

آپ ٹولز کے ساتھ ADR استعمال کرنا جیسے چاہیں شروع کر سکتے ہیں۔

مثلاً:

  * اگر آپ کو Google Drive اور آن لائن ایڈیٹنگ پسند ہے تو آپ Google Doc یا Google Sheet بنا سکتے ہیں۔

  * اگر آپ کو git جیسا سورس کوڈ ورژن کنٹرول استعمال کرنا پسند ہے تو آپ ہر ADR کے لیے ایک فائل بنا سکتے ہیں۔

  * اگر آپ کو Atlassian Jira جیسے منصوبہ بندی کے ٹولز استعمال کرنا پسند ہے تو آپ ٹول کا منصوبہ بندی ٹریکر استعمال کر سکتے ہیں۔

  * اگر آپ کو MediaWiki جیسی وکیز پسند ہیں تو آپ ADR وکی بنا سکتے ہیں۔

## git کے ساتھ ADR استعمال کرنا کیسے شروع کریں

اگر آپ کو git ورژن کنٹرول استعمال کرنا پسند ہے تو سورس کوڈ والے عام سافٹ ویئر منصوبے کے لیے ہم git کے ساتھ ADR استعمال کرنا اس طرح شروع کرنا پسند کرتے ہیں۔

ADR فائلوں کے لیے ایک ڈائریکٹری بنائیں:

```sh
$ mkdir adr
```

ہر ADR کے لیے ایک ٹیکسٹ فائل بنائیں، مثلاً `database.txt`:

```sh
$ vi database.txt
```

ADR میں جو چاہیں لکھیں۔ خیالات کے لیے اس ریپوزٹری کے سانچے دیکھیں۔

ADR کو اپنی git ریپو میں کمٹ کریں۔

## ADR کے لیے Claude Code اسکلز

یہ ریپوزٹری [`skills/`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/) کے تحت دو [Claude Code](https://claude.com/claude-code) اسکلز فراہم کرتی ہے، تاکہ AI کوڈنگ ایجنٹ اس پروجیکٹ کی سفارش کے مطابق ADR لکھ سکے اور برقرار رکھ سکے:

- [`architecture-decision-record-skill`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/architecture-decision-record-skill/) — عمومی مقصد کے لیے، کسی بھی پروجیکٹ میں ADR لکھنے والے ہر شخص کے لیے۔ یہ طے کرنے میں مدد کرتی ہے کہ کسی فیصلے کو ADR کی ضرورت ہے یا نہیں، `adr/` یا `decisions/` ڈائریکٹری بناتی ہے، فائل کا نام رکھتی ہے، ساتھ آنے والے گیارہ ڈھانچوں میں سے ایک ٹیمپلیٹ چنتی ہے، اور پس منظر/فیصلہ/نتائج کے مضبوط حصے لکھتی ہے۔

- [`architecture-decision-record-maintainer-skill`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/architecture-decision-record-maintainer-skill/) — خاص طور پر اس ریپوزٹری کے منتظمین کے لیے۔ یہ ریپوزٹری کی ساخت، README/locales کو ہم آہنگ رکھنے کی روایت، اور نیا ٹیمپلیٹ، مثال یا ٹول لنک شامل کرنے کے درست مراحل دستاویزی بناتی ہے۔

کوئی اسکل استعمال کرنے کے لیے اس کا فولڈر اس ریپوزٹری کی جڑ میں `.claude/skills/` میں کاپی کریں جس پر آپ کام کر رہے ہیں (یا ہر پروجیکٹ میں دستیاب کرنے کے لیے `~/.claude/skills/` میں)، پھر Claude Code سے ADR لکھنے یا جائزہ لینے کو کہیں۔

## فائل ناموں کے اصول

اگر آپ اپنے ADR عام ٹیکسٹ فائلوں میں بنانے کا انتخاب کرتے ہیں تو ہو سکتا ہے آپ ADR فائل کے ناموں کا اپنا اصول طے کرنا چاہیں۔

ہم فائل کے ناموں کا ایسا اصول استعمال کرنا پسند کرتے ہیں جس کی ایک مخصوص شکل ہو۔

مثالیں:

  * choose-database.md

  * format-timestamps.md

  * manage-passwords.md

  * handle-exceptions.md

ہمارا فائل ناموں کا اصول:

  * نام میں حالِ حاضر کے حکمیہ (imperative) فعل پر مبنی جملہ ہوتا ہے۔ یہ پڑھنے میں آسانی دیتا ہے اور ہمارے کمٹ پیغام کی شکل سے ملتا ہے۔

  * نام میں چھوٹے حروف اور ڈیش استعمال ہوتے ہیں (جیسا کہ اس ریپوزٹری میں)۔ یہ پڑھنے میں آسانی اور سسٹم کی قابلِ استعمالیت کے درمیان توازن ہے۔

  * ایکسٹینشن markdown ہے۔ یہ آسان فارمیٹنگ کے لیے مفید ہو سکتی ہے۔

## اچھے ADR لکھنے کے مشورے

اچھے ADR کی خصوصیات:

* جواز: مخصوص AD کرنے کی وجوہات بیان کریں۔ اس میں سیاق و سباق (نیچے دیکھیں)، مختلف ممکنہ انتخابات کے فوائد و نقصانات، خصوصیات کا موازنہ، لاگت/فائدے کی بحثیں اور مزید شامل ہو سکتے ہیں۔

* مخصوص: ہر ADR ایک AD کے بارے میں ہونا چاہیے، متعدد AD کے بارے میں نہیں۔

* ٹائم اسٹیمپس: ADR میں ہر چیز کے لکھے جانے کا وقت بتائیں۔ یہ خاص طور پر ان پہلوؤں کے لیے اہم ہے جو وقت کے ساتھ بدل سکتے ہیں، جیسے لاگتیں، شیڈول، توسیع پذیری وغیرہ۔

* ناقابلِ تغیر: ADR میں موجود معلومات کو نہ بدلیں۔ اس کی بجائے نئی معلومات شامل کر کے ADR میں ترمیم کریں، یا نیا ADR بنا کر اس ADR کی جگہ لے لیں۔

ADR میں اچھے “سیاق و سباق” (Context) حصے کی خصوصیات:

* اپنی تنظیم کی صورتحال اور کاروباری ترجیحات بیان کریں۔

* اپنی ٹیموں کی سماجی اور مہارتوں کی ساخت پر مبنی جواز اور غور و فکر شامل کریں۔

* متعلقہ فوائد و نقصانات شامل کریں اور انہیں ایسی اصطلاحات میں بیان کریں جو آپ کی ضروریات اور اہداف سے ہم آہنگ ہوں۔

ADR میں اچھے “نتائج” (Consequences) حصے کی خصوصیات:

* بیان کریں کہ فیصلہ کرنے کے بعد کیا ہوتا ہے۔ اس میں اثرات، نتائج، حاصلات، فالو اپس اور مزید شامل ہو سکتے ہیں۔

* کسی بھی بعد کے ADR کے بارے میں معلومات شامل کریں۔ ایک ADR کا مزید ADR کی ضرورت پیدا کرنا نسبتاً عام ہے، مثلاً جب ایک ADR کوئی بڑا جامع انتخاب کرتا ہے جو بدلے میں مزید چھوٹے فیصلوں کی ضرورت پیدا کرتا ہے۔

* عمل کے بعد جائزے کے کوئی بھی عمل شامل کریں۔ ٹیموں کے لیے یہ عام ہے کہ وہ ہر ADR کا ایک ماہ بعد جائزہ لیں تاکہ ADR کی معلومات کا موازنہ عملی طور پر جو ہوا اس سے کیا جا سکے، تاکہ سیکھا اور ترقی کی جا سکے۔

نیا ADR پچھلے ADR کی جگہ لے سکتا ہے:

* جب کوئی AD کیا جائے جو پچھلے ADR کی جگہ لیتا ہو یا اسے کالعدم کرتا ہو تو نیا ADR بنانا چاہیے

## ADR کے مثالی ٹیمپلیٹس

ADR کے وہ مثالی ٹیمپلیٹس جو ہم نے انٹرنیٹ سے جمع کیے ہیں:

- [Michael Nygard کا ADR ٹیمپلیٹ](سانچے/مائیکل-نائیگارڈ-کا-فیصلہ-ریکارڈ-سانچہ/) (سادہ اور مقبول)

- [Jeff Tyree اور Art Akerman کا ADR ٹیمپلیٹ](سانچے/جیف-ٹائری-اور-آرٹ-اکرمین-کا-فیصلہ-ریکارڈ-سانچہ/) (زیادہ نفیس)

- [Alexandrian پیٹرن کے لیے ADR ٹیمپلیٹ](سانچے/اسکندریائی-پیٹرن-کے-لیے-فیصلہ-ریکارڈ-سانچہ/) (پس منظر کی تفصیل کے ساتھ سادہ)

- [کاروباری مقدمے کے لیے ADR ٹیمپلیٹ](سانچے/کاروباری-کیس-کے-لیے-فیصلہ-ریکارڈ-سانچہ/) (زیادہ MBA رجحان والا، لاگت، SWOT اور مزید آراء کے ساتھ)

- [Markdown Any Decision Records (MADR) پروجیکٹ کا ADR ٹیمپلیٹ](سانچے/madr-منصوبے-کا-فیصلہ-ریکارڈ-سانچہ/) (سادہ اور تفصیلی دونوں ورژن؛ آخری ورژن اختیارات اور ان کے فوائد و نقصانات پر زور دیتا ہے)

- [Planguage استعمال کرنے والا ADR ٹیمپلیٹ](سانچے/planguage-استعمال-کرنے-والا-فیصلہ-ریکارڈ-سانچہ/) (معیار کی یقین دہانی کی طرف زیادہ مائل)

- [Ignacio Larrañaga کا اہم تکنیکی فیصلوں (ITD) کا ٹیمپلیٹ](سانچے/اہم-تکنیکی-فیصلوں-کے-لیے-فیصلہ-ریکارڈ-سانچہ/) (مختصر اور فیصلہ پہلے، تیز انتظامی جائزے کے لیے موزوں)

## ADR کے لیے ٹیم ورک کے مشورے

اگر آپ اپنی ٹیم کے ساتھ فیصلوں کے ریکارڈز استعمال کرنے پر غور کر رہے ہیں تو یہاں کچھ مشورے ہیں جو ہم نے بہت سی ٹیموں کے ساتھ کام کر کے سیکھے ہیں۔

آپ کے پاس اپنے ساتھیوں کی رہنمائی کا موقع ہے، “کیا” مسلط کرنے کی بجائے “کیوں” پر مل کر بات کر کے۔ مثلاً فیصلوں کے ریکارڈز ٹیموں کے لیے زیادہ ذہانت سے سوچنے اور بہتر طور پر رابطہ کرنے کا ایک طریقہ ہیں؛ فیصلوں کے ریکارڈز کی کوئی قدر نہیں اگر وہ محض کام کے بعد زبردستی کی کاغذی کارروائی کا تقاضا ہوں۔

کچھ ٹیمیں مخفف “ADR” کے مقابلے میں “فیصلے” (decisions) نام کو بہت زیادہ پسند کرتی ہیں۔ جب کچھ ٹیمیں ڈائریکٹری کا نام “decisions” استعمال کرتی ہیں تو جیسے بلب روشن ہو جاتا ہے، اور ٹیم ڈائریکٹری میں مزید معلومات رکھنے لگتی ہے، مثلاً وینڈر کے فیصلے، منصوبہ بندی کے فیصلے، شیڈولنگ کے فیصلے وغیرہ۔ ان تمام قسم کی معلومات کے لیے ایک ہی سانچہ استعمال ہو سکتا ہے۔ ہمارا قیاس ہے کہ لوگ مخففات (“ADR”) کے بجائے الفاظ (“decisions”) سے زیادہ تیزی سے سیکھتے ہیں، جب لفظ “ریکارڈ” ہٹا دیا جائے تو لوگ زیرِ تکمیل دستاویزات لکھنے کے لیے زیادہ پرجوش ہوتے ہیں، اور کچھ ڈویلپرز اور کچھ مینیجرز کو لفظ “آرکیٹیکچر” ناپسند ہے۔

نظریاتی طور پر ناقابلِ تغیر ہونا مثالی ہے۔ عملی طور پر ہماری ٹیموں کے لیے قابلِ تغیر ہونا بہتر کام کرتا رہا ہے۔ ہم نئی معلومات کو موجودہ ADR میں تاریخ کی مہر اور اس نوٹ کے ساتھ ڈالتے ہیں کہ معلومات فیصلے کے بعد آئیں۔ اس قسم کا طریقہ ایک “زندہ دستاویز” تک لے جاتا ہے جسے ہم سب اپ ڈیٹ کر سکتے ہیں۔ عام اپ ڈیٹس تب ہوتی ہیں جب ہمیں نئے ساتھیوں، نئی پیشکشوں، اپنے استعمال کے حقیقی نتائج، یا فیصلے کے بعد تیسرے فریق کی تبدیلیوں، مثلاً وینڈر کی صلاحیتوں، قیمتوں کے منصوبوں، لائسنس کے معاہدوں وغیرہ کی بدولت معلومات ملتی ہیں۔

## ADR کے لیے ٹیم ورک کے سوالات

### ADR کون بنا سکتا ہے؟

مخصوص افراد، مخصوص کردار، مخصوص ٹیمیں، یا مخصوص شعبے جیسے پہلوؤں پر غور کریں؛ نیز یہ بھی سوچیں کہ کیا ایسے افراد، کردار، ٹیمیں یا شعبے ہیں جو ADR کی فرمائش (commission) کر سکتے ہیں، یعنی ایسا ADR مانگ سکتے ہیں جسے کوئی اور لکھے گا۔ 

مثالی جواب: ہماری تنظیم کا کوئی بھی شخص جس نے آرکیٹیکچر فیصلے کے ریکارڈ کا README صفحہ پڑھا ہو، ADR تجویز کر سکتا ہے، یعنی وہ اسے لکھنا شروع کر کے ٹیم کے ساتھ شیئر کر سکتا ہے۔

### ADR اٹھانے کا جواز کیا ہے؟

اپنی تنظیم کی ٹیموں کے کام کے طریقے، اپنے سافٹ ویئر سسٹم کی ساخت، ٹیموں کے درمیان ہم آہنگی، طویل مدتی دیکھ بھال کی اہلیت، بیرونی انٹرفیسز، آپ کن کو فائدہ پہنچانا چاہتے ہیں، اور اس جیسے پہلوؤں پر غور کریں۔ 

مثالی جواب: ہم ADR بنانا چاہتے ہیں جب ہم چاہتے ہیں کہ مستقبل کے ڈویلپرز سمجھیں کہ ہم جو کر رہے ہیں اس کا “کیوں” کیا ہے۔

### ADR نہ اٹھانے کا جواز کیا ہے؟

ایسے پہلوؤں پر غور کریں جیسے وہ فیصلے جو آرکیٹیکچر کے بارے میں نہیں، یا معمولی ہیں، مثلاً کم از کم خطرے والے یا خود مکتفی یا ایک ڈویلپر کے، یا کہیں اور مکمل طور پر احاطہ شدہ ہیں، مثلاً معیارات یا پالیسیوں یا دستاویزات میں، یا عارضی ہیں، مثلاً عارضی حل یا تصور کے ثبوت یا تجربات۔ 

مثالی جواب: ہم ADR چھوڑنا چاہتے ہیں جب فیصلہ دائرے، وقت، خطرے اور لاگت میں محدود ہو، یا پہلے ہی کہیں اور احاطہ شدہ ہو۔

### ADR کا زندگی کا چکر (lifecycle) کیا ہے؟

تخلیق کے عمل، تحقیق کے عمل، فیصلہ سازی کے عمل، نفاذ کے عمل اور ریٹائر کرنے کے عمل جیسے پہلوؤں پر غور کریں۔ غور کریں کہ ADR کے زندگی کے چکر کا وقت کے ساتھ سراغ کیسے رکھا جائے، مثلاً ADR کو ایک حالت سے اگلی حالت میں کیسے منتقل کیا جائے، اور اسٹیک ہولڈرز تک یہ کیسے پہنچایا جائے۔ 

مثالی جواب: ہم چاہتے ہیں کہ ADR کے زندگی کے چکر کے پانچ مراحل ہوں: آغاز ← تحقیق ← جانچ ← نفاذ ← دیکھ بھال ← ریٹائرمنٹ۔

### ADR کے زندگی کے چکر کے مراحل کے معیارات کیا ہیں؟

ADR کی قبولیت کے معیارات جیسے پہلوؤں پر غور کریں، یعنی آپ کو کیسے پتا چلے کہ وہ ایک زندگی کے چکر کے مرحلے سے اگلے مرحلے میں جانے کے لیے کافی اچھا ہے؟ کیا مسئلہ واضح طور پر بیان ہوا ہے؟ کیا متبادل پر غور ہوا ہے؟ کیا سمجھوتوں (trade-offs) کو کافی اچھی طرح سمجھا اور دستاویزی بنایا گیا ہے؟
کیا تمام متعلقہ سیاق و سباق موجود ہے؟ کیا تمام متعلقہ اسٹیک ہولڈرز شامل ہیں؟ کیا تمام رائے شامل کر لی گئی ہے؟ 

مثالی جواب: ہم چاہتے ہیں کہ ADR پر اسٹیک ہولڈرز ووٹ دیں جب فعال ٹیم 1) اپنی تحقیق مکمل کر لے، 2) اپنی جانچ مکمل کر لے، 3) ADR کی تجویز اسٹیک ہولڈرز کو تبصروں کی درخواست اور ایک ہفتے کی مدت کے ساتھ شائع کر دے، 4) تمام اسٹیک ہولڈر تبصرے شامل اور حل کر لیے گئے ہوں۔

### کون سے کردار اور ذمہ داریاں ADR سے تعامل کرتی ہیں؟

تجویز کنندہ، محقق، جائزہ کار، نظرثانی کار، منظور کنندہ، دیکھ بھال کنندہ اور اس جیسے کرداروں پر غور کریں۔ اسٹیک ہولڈرز کے ساتھ رابطہ، توقعات کی تکمیل یقینی بنانا، ویب سائٹ یا انٹرانیٹ پر شیئر کرنا، اور کام کا وقتاً فوقتاً اور خاص طور پر متعلقہ تبدیلیاں ہونے پر جائزہ لینے جیسی ذمہ داریوں پر غور کریں۔

مثالی جواب: ہم چاہتے ہیں کہ ہر ADR کا ہمیشہ ایک بنیادی رابطہ شخص، ایک ثانوی رابطہ شخص اور ایک جوابدہ ٹیم ہو؛ یہ رابطوں، اشاعتوں، دیکھ بھال، کم از کم سال میں ایک بار وقتاً فوقتاً جائزے اور ضرورت کے مطابق بالآخر ریٹائرمنٹ کے ذمہ دار ہوں۔

### گورننس ADR سے کیسے تعامل کرتی ہے؟

اپنی تنظیم کے کام کے طریقوں، قانونی یا انسانی وسائل کے پہلوؤں جیسی کسی خاص تعمیل کی ضروریات، اور اتفاقِ رائے بمقابلہ تنازع بمقابلہ بالائی سطح پر بھیجنے (escalation) کو آپ کیسے سنبھالنا چاہتے ہیں، جیسے پہلوؤں پر غور کریں۔ کیا ایسے شعبے یا افراد یا ٹیمیں ہیں جو ADR کے بارے میں دوسروں سے زیادہ اثر رکھ سکتی ہیں، مثلاً اس کی منظوری دینے، اس پر ووٹ دینے یا اسے ویٹو کرنے کے قابل؟

مثالی جواب: ADR کی گورننس اس ترجیحی ترتیب میں ہے: CEO، CTO، CLO، وہ ٹیم جو ADR نافذ کرتی ہے، ٹیم کے وہ ماہرین جو ADD کے بارے میں سب سے زیادہ جانتے ہیں۔ جب تک ADR میں بیان نہ ہو، کسی اور کی گورننس نہیں۔ 

### کون سے اصول ADR سے تعامل کرتے ہیں؟

اپنی تنظیم کے کام کے طریقوں جیسے پہلوؤں پر غور کریں جن میں تیزی سے چلنا بمقابلہ آہستہ چلنا، فیصلے پر اتفاقِ رائے بمقابلہ فیصلے پر تنازع، خطرے کی ترجیحات بمقابلہ حفاظت کی ترجیحات، عوامی بحث بمقابلہ نجی بحث، اور اس جیسی چیزیں شامل ہیں۔

مثالی جواب: ہم قیادت کے ان اصولوں کا استعمال کرتے ہیں: عمل کی طرف جھکاؤ، اختلاف کرو اور پابند ہو جاؤ، آسانی سے واپس لیے جانے والے اور آسانی سے الگ کیے جانے والے فیصلوں کے لیے 70% اندازے کافی اچھے ہیں، اور ہماری تنظیم کے رازداری کے معاہدے میں بیان کردہ رازدارانہ معلومات کے استثنا کے ساتھ عوامی کام کے طریقے۔

## ADR کے لیے اگلے قدم کے تصورات

[Arc42](https://arc42.org/) دو سوالوں کا عملی جواب دیتا ہے اور آپ کی مخصوص ضروریات کے مطابق ڈھالا جا سکتا ہے۔ آپ کو اپنے آرکیٹیکچر کے بارے میں کیا دستاویزی بنانا/بتانا چاہیے؟ کیسے دستاویزی بنانا/بتانا چاہیے؟ Arc42 میں آرکیٹیکچر فیصلوں کے ریکارڈ کے ساتھ اہداف، پابندیوں، سیاق، معیار، خطرات اور دیگر پر رہنمائی شامل ہے۔

[C4 ماڈل](https://c4model.com/) سافٹ ویئر آرکیٹیکچر کے ڈایاگرام بنانے کا آسانی سے سیکھا جانے والا، ڈیولپر دوست طریقہ ہے۔ C4 پس منظر، کنٹینرز، کمپوننٹس اور کوڈ کے درجہ وار ڈایاگراموں کا مجموعہ ہے، ساتھ ہی سسٹم لینڈ اسکیپ، ڈائنامک اور تعیناتی کے معاون ڈایاگرام بھی۔

## آرکیٹیکچر ڈایاگرام، منظر اور نقطۂ نظر

آرکیٹیکچر ڈایاگرام کو "آرکیٹیکچر منظر" کہا جاتا ہے۔

"آرکیٹیکچر منظر" کسی "آرکیٹیکچر نقطۂ نظر" کی ایک مثال ہے۔

کسی "آرکیٹیکچر نقطۂ نظر" میں مخصوص خدشات رکھنے والا ایک مخصوص سامع پیشِ نظر ہوتا ہے۔

آرکیٹیکچر نقطۂ نظر، مناظر اور ڈایاگراموں کی مثالیں:

- کاروباری صلاحیتیں

- اعلیٰ سطح کے کاروباری عمل

- [ویلیو اسٹریمز](https://en.wikipedia.org/wiki/Value_stream)

- ایپلیکیشن کمپوننٹس سے منسلک سافٹ ویئر فنکشنز

- [C4 Model](https://en.wikipedia.org/wiki/C4_model) سیاقی ڈایاگرام (TO-BE / AS-IS)

- [C4 Model](https://en.wikipedia.org/wiki/C4_model) کنٹینر ڈایاگرام (TO-BE / AS-IS)

- [اینٹیٹی-ریلیشن شپ ڈایاگرام](https://en.wikipedia.org/w/index.php?title=Entity_relationship_diagram) (ERD) ڈیٹا اینٹیٹیز کو ایپلیکیشن کمپوننٹس سے جوڑنے کے لیے

- [سیکوئنس ڈایاگرام](https://en.wikipedia.org/wiki/Sequence_diagram) سسٹمز کے اندر اور انضمام کے فنکشنل بہاؤ بیان کرنے کے لیے

- [بزنس پروسیس ماڈل اینڈ نوٹیشن](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN) ایپلیکیشن کمپوننٹس کے درمیان ڈیٹا کے بہاؤ بیان کرنے والے ڈایاگرام

- [بزنس پروسیس ماڈل اینڈ نوٹیشن](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN) کاروباری عمل / صارف کے منظرناموں کو بیان کرنے والے ڈایاگرام

- [شناخت اور رسائی کا انتظام](https://en.wikipedia.org/wiki/Identity_and_access_management) (IAM) ڈایاگرام

- [کردار پر مبنی رسائی کنٹرول](https://en.wikipedia.org/wiki/Role-based_access_control) (RBAC) فی ایپلیکیشن کمپوننٹ کرداروں والے ڈایاگرام

- [خصوصیت پر مبنی رسائی کنٹرول](https://en.wikipedia.org/wiki/Attribute-based_access_control) (ABAC) فی ایپلیکیشن کمپوننٹ خصوصیات والے ڈایاگرام

- رازداری کے ڈایاگرام

متعلقہ ڈایاگرام:

- یوز کیس ڈایاگرام انتظامیہ/صارفین کو استعمال کے منظرنامے دکھاتا ہے، جو تقاضوں سے پہلے آتے ہیں، اور تقاضے سافٹ ویئر آرکیٹیکچر سے پہلے۔

- ڈیپلائمنٹ ڈایاگرام وہ طبعی ہارڈ ویئر/کمپیوٹرز دکھاتا ہے جن پر سافٹ ویئر کمپوننٹس تعینات ہوتے ہیں۔
- ڈیٹا فلو ڈایاگرام دکھاتا ہے کہ ڈیٹا سسٹم میں کیسے حرکت کرتا اور تبدیل ہوتا ہے۔
- سیکوئنس ڈایاگرام وقت کے محور پر یہ دکھانے کے لیے استعمال ہوتا ہے کہ HTTP جیسے پروٹوکول کیسے کام کرتے ہیں۔

- ایکٹیویٹی ڈایاگرام سافٹ ویئر سسٹم کی سرگرمیوں کا ورک فلو دکھاتا ہے، جیسے NPC AI۔

## فیصلوں کے لیے فٹنس فنکشنز بطور کوڈ

فٹنس فنکشنز (fitness functions) معروضی خودکار جانچیں ہیں، جو پروگرامنگ کوڈ سے لکھی جاتی ہیں اور تصدیق کرتی ہیں کہ فیصلوں کو برقرار رکھا جا رہا ہے۔

- فٹنس فنکشنز فیصلوں کو قابلِ جانچ اور یقینی بنانے کے قابل بناتے ہیں۔

- فیصلوں کے لیے فٹنس فنکشنز کوالٹی ایشورنس، ریگولیٹری عمل اور گورننس کے اہداف میں بہت مدد کر سکتے ہیں۔

### فٹنس فنکشنز فیصلوں سے کیسے جڑتے ہیں

فیصلے کا ریکارڈ فیصلے کو دستاویزی شکل دیتا ہے، جبکہ فٹنس فنکشن فیصلے کو یقینی بناتا ہے۔

- مثالی فیصلہ: ہم آڈٹ کے تقاضوں کے لیے ایونٹ سورسنگ استعمال کرتے ہیں۔

- مثالی فٹنس فنکشن: ہم مسلسل انضمام کے سرور کو استعمال کر کے جانچتے ہیں کہ ہر حالت کی تبدیلی لازماً ایونٹس پیدا کرے۔

### فٹنس فنکشنز فیصلوں کی مدد کیوں کرتے ہیں

معروضی پیمائشیں: فٹنس فنکشنز پاس یا فیل ہوتے ہیں، اس لیے کام نظر آتا ہے اور واضح رہتا ہے۔

مسلسل استعمال: فٹنس فنکشنز آپ کے زندہ اصول ہیں، جو ہر کمٹ اور بلڈ پر چلتے ہیں۔

ری فیکٹر کرنے کا اعتماد: فٹنس فنکشنز فیصلے کے اصولوں کی غلطیاں خودکار طور پر پکڑ لیتے ہیں۔

وسعت پذیر گورننس: فٹنس فنکشنز رکاوٹیں پیدا کیے بغیر معیارات کو یقینی بناتے ہیں۔

### کیا فٹنس فنکشنز AI استعمال کر سکتے ہیں؟

فٹنس فنکشنز آپ کے کام، مثلاً آپ کے منصوبوں، کوڈ، اسکیماز، APIs اور مزید کے بارے میں سوالات پوچھ کر فیصلوں کے لیے AI LLMs سے فائدہ اٹھا سکتے ہیں:

```txt
IMPORTANT: Prefer retrieval-led reasoning over pre-training-led reasoning.
IMPORTANT: Turn on extended thinking. Turn on expert advice. Turn on search.

This is a fitness function to evaluate if our work is
using all our decisions, and is correct and accurate.

- Our decisions are here: {url}
- Our work to evaluate is here: {url}

Explain any errors, problems, gaps, weaknesses. Be direct. Be decisive.
```

### آرکیٹیکچر یونٹ ٹیسٹنگ

[ArchUnit](https://www.archunit.org/): کسی بھی سادہ Java یونٹ ٹیسٹ فریم ورک کے ذریعے Java کوڈ کے آرکیٹیکچر کے اصولوں کی جانچ کریں۔

[ArchUnitTS](https://github.com/LukasNiessen/ArchUnitTS): Jest، Vitest، Jasmine وغیرہ کے ذریعے TypeScript کوڈ اور JavaScript کوڈ کے آرکیٹیکچر کے اصولوں کی جانچ کریں۔

## پل ریکویسٹ کے لیے فیصلوں کی حفاظتی ریلنگ

[Decision Guardian](https://github.com/DecispherHQ/decision-guardian)
درست وقت پر درست فیصلہ ریکارڈز خودکار طور پر سامنے لاتا ہے، یعنی جب ڈیولپر
اس کوڈ کو فعال طور پر بدل رہا ہو جسے وہ فیصلے کور کرتے ہیں۔ اس امید پر رہنے کے بجائے کہ ڈیولپرز
ضم کرنے سے پہلے دستاویزات کا فولڈر پڑھ لیں گے، متعلقہ سیاق براہِ راست پل ریکویسٹ پر ظاہر ہوتا ہے۔

یہ ہر قسم کے فیصلہ ریکارڈ کے لیے کام کرتا ہے: آرکیٹیکچر فیصلے، ڈیٹا فیصلے، تعمیلی فیصلے، طبی اور معالجاتی فیصلے، سلامتی کے فیصلے اور مزید۔

کسی بھی CI سسٹم (GitLab، Jenkins، CircleCI) کے ساتھ اور pre-commit ہُک کے طور پر کام کرتا ہے۔
اوپن سورس۔ MIT لائسنس۔

[ADR Guard](https://github.com/chohan-sarmad-ali/delivery-gates) ایک GitHub
ایکشن ہے جو اس وقت پل ریکویسٹ کو ناکام کر دیتا ہے جب نگرانی والے کوڈ راستے آرکیٹیکچر فیصلے کا ریکارڈ شامل یا اپ ڈیٹ کیے بغیر بدل جائیں۔ استثنا واضح ہوتے ہیں: وجہ کے ساتھ ایک
`ADR-Exempt:` سطر دروازہ پار کرا دیتی ہے اور جاب کے خلاصے میں لکھ دی جاتی ہے۔ ٹیمپلیٹ سے آزاد، کوئی انحصار نہیں۔ اوپن سورس۔ MIT لائسنس۔

## مزید معلومات کے لیے

تعارف:

- [Architectural decision (wikipedia.org)](https://wikipedia.org/wiki/Architectural_decision)

- [Architecturally significant requirements (wikipedia.org)](https://wikipedia.org/wiki/Architecturally_significant_requirements)

ٹیمپلیٹس:

- [Documenting architecture decisions - Michael Nygard (thinkrelevance.com)](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)

- [Markdown Architectural Decision Records (adr.github.io)](https://adr.github.io/madr/)

- [Template for documenting architecture alternatives and decisions (stackoverflow.com)](http://stackoverflow.com/questions/7104735/template-for-documenting-architecture-alternatives-and-decisions)

گہرائی میں:

- [ADMentor XML project (github.com)](https://github.com/IFS-HSR/ADMentor)

- [Architectural Decision Guidance across Projects: Problem Space Modeling, Decision Backlog Management and Cloud Computing Knowledge (ifs.hsr.ch)](https://www.ifs.hsr.ch/fileadmin/user_upload/customers/ifs.hsr.ch/Home/projekte/ADMentor-WICSA2015ubmissionv11nc.pdf)

- [The Decision View's Role in Software Architecture Practice (computer.org)](https://www.computer.org/csdl/mags/so/2009/02/mso2009020036-abs.html)

- [Documenting Software Architectures: Views and Beyond (resources.sei.cmu.edu)](http://resources.sei.cmu.edu/library/asset-view.cfm?assetID=30386)

- [Architecture Decisions: Demystifying Architecture (utdallas.edu)](https://www.utdallas.edu/~chung/SA/zz-Impreso-architecture_decisions-tyree-05.pdf)

- [ThoughtWorks Technology Radar: Lightweight Architecture Decision Records (thoughtworks.com)](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)

- [A Skeptic’s Guide to Software Architecture Decisions (infoq.com)](https://www.infoq.com/articles/architecture-skeptics-guide/)

- [Architectural Decisions — The Making Of](https://ozimmer.ch/practices/2020/04/27/ArchitectureDecisionMaking.html)

- [Architectural Retrospectives: the Key to Getting Better at Architecting](https://www.infoq.com/articles/architectural-retrospectives/)

- [Software Architecture Monday with Mark Richards](https://developertoarchitect.com/lessons/) - مفت ماہانہ سافٹ ویئر آرکیٹیکچر سبق

- [Solution Architecture Decisions - By Gareth Morgan](https://www.linkedin.com/pulse/solution-architecture-decisions-gareth-morgan-0r5xe/)

- ["Keep the Why: Code Becomes Legacy When Nobody Remembers Why"](https://blog.technopathy.club/keep-the-why-code-becomes-legacy-when-nobody-remembers-why)

ٹولز:

- [Command-line tools for working with Architecture Decision Records](https://github.com/npryce/adr-tools)

- [Command line tools with python - by Victor Sluiter](https://bitbucket.org/tinkerer_/adr-tools-python/src/master/)

- [Architectural Design Decision Support Framework (ADvISE)](https://swa.univie.ac.at/Software_Architecture/research-projects/architectural-design-decision-support-framework-advise/)

- [Decision Guardian](https://github.com/DecispherHQ/decision-guardian)

- [Mneme HQ - ADR enforcement for AI coding agents](https://github.com/TheoV823/mneme)

- [Keep the Why - a repo-native convention and agent skill that continuously captures, or retrospectively recovers, the reasoning behind a codebase](https://github.com/oliver-zehentleitner/keep-the-why)

- [ADR Guard - GitHub Action that fails a pull request changing watched code without an architecture decision record](https://github.com/chohan-sarmad-ali/delivery-gates)

- [kgai - append-only decision log for AI coding agents, a machine-readable companion to ADR files](https://github.com/kgaidev/kgai)

کمپنی سے مخصوص رہنمائی:

- [Amazon: AWS Prescriptive Guidance: ADR Process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)

- [GitHub: ADR GitHub organization](https://adr.github.io/)

- [RedHat: Why you should use ADRs](https://www.redhat.com/architect/architecture-decision-records)

مثالیں:

- [Repository of Architecture Decision Records made for the Arachne Framework](https://github.com/arachne-framework/architecture)

ویڈیوز:

- [An introduction to arc42 with Savvas Kleanthous](https://www.youtube.com/watch?v=V5clR8c6D7o)

- [The C4 model for visualising software architecture - by Simon Brown](https://www.youtube.com/watch?v=KvoBrUd1-5E)

پوڈکاسٹس:

- [Software Architecture Bookclub Podcast](https://www.developertoarchitect.com/bookclub-podcast.html)

کتابیں:

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

یہ بھی دیکھیں:

- REMAP (Representation and Maintenance of Process Knowledge)

- DRL (Decision Representation Language)

- IBIS (Issue-Based Information System)

- QOC (Questions, Options, and Criteria)

- IBM’s e-Business Reference Architecture Framework

- [Decision Reasoning Format (DRF)](https://github.com/reasoning-formats/reasoning-formats) - واضح استدلال، مفروضات، ادراکی کیفیت اور سمجھوتوں کے ساتھ فیصلے پیش کرنے کے لیے وینڈر سے غیر جانبدار، مشین کے پڑھنے کے قابل YAML/JSON فارمیٹ۔ فیصلہ دستاویزات میں منظم، قابلِ توثیق استدلال شامل کر کے ADR کی تکمیل کرتا ہے۔
