# سجل قرار البنية المعمارية (ADR)

سجل قرار البنية المعمارية (ADR) وثيقة تدوّن قرارًا معماريًا مهمًا اتُّخذ مع سياقه ونتائجه.

> [!IMPORTANT]
> أجرِ العناية الواجبة بنفسك على هذه الموارد قبل استخدامها في أي أنظمة حرجة.

المحتويات:

- [ما هو سجل قرار البنية المعمارية؟](#ما-هو-سجل-قرار-البنية-المعمارية)
- [كيف تبدأ باستخدام سجلات ADR](#كيف-تبدأ-باستخدام-سجلات-adr)
- [كيف تبدأ باستخدام سجلات ADR مع الأدوات](#كيف-تبدأ-باستخدام-سجلات-adr-مع-الأدوات)
- [كيف تبدأ باستخدام سجلات ADR مع git](#كيف-تبدأ-باستخدام-سجلات-adr-مع-git)
- [مهارات Claude Code لسجلات ADR](#مهارات-claude-code-لسجلات-adr)
- [اصطلاحات تسمية الملفات](#اصطلاحات-تسمية-الملفات)
- [اقتراحات لكتابة سجلات ADR جيدة](#اقتراحات-لكتابة-سجلات-adr-جيدة)
- [قوالب أمثلة ADR](#قوالب-أمثلة-adr)
- [نصائح العمل الجماعي لسجلات ADR](#نصائح-العمل-الجماعي-لسجلات-adr)
- [أسئلة العمل الجماعي لسجلات ADR](#أسئلة-العمل-الجماعي-لسجلات-adr)
- [مفاهيم الخطوة التالية لسجلات ADR](#مفاهيم-الخطوة-التالية-لسجلات-adr)
- [مخططات البنية المعمارية والمناظير ووجهات النظر](#مخططات-البنية-المعمارية-والمناظير-ووجهات-النظر)
- [دوال الملاءمة للقرارات بوصفها شيفرة](#دوال-الملاءمة-للقرارات-بوصفها-شيفرة)
- [حواجز حماية القرارات لطلبات السحب](#حواجز-حماية-القرارات-لطلبات-السحب)
- [لمزيد من المعلومات](#لمزيد-من-المعلومات)

القوالب:

- [قالب سجل القرار من Jeff Tyree وArt Akerman](قوالب/قالب-سجل-القرار-من-جيف-تايري-وآرت-أكرمان/)
- [قالب سجل القرار من Michael Nygard](قوالب/قالب-سجل-القرار-من-مايكل-نايغارد/)
- [قالب سجل القرار من EdgeX](قوالب/قالب-سجل-القرار-من-edgex/)
- [قالب سجل القرار من arc42](قوالب/قالب-سجل-القرار-من-arc42/)
- [قالب سجل القرار للنمط الإسكندري](قوالب/قالب-سجل-القرار-للنمط-الإسكندري/)
- [قالب سجل القرار لدراسة الجدوى](قوالب/قالب-سجل-القرار-لدراسة-الجدوى/)
- [قالب سجل القرار لمشروع MADR](قوالب/قالب-سجل-القرار-لمشروع-madr/)
- [قالب سجل القرار باستخدام Planguage](قوالب/قالب-سجل-القرار-باستخدام-planguage/)
- [قالب سجل القرار من Paulo Merson](https://github.com/pmerson/ADR-template)
- [قالب سجل القرار من Olaf Zimmermann](https://medium.com/olzzio/y-statements-10eb07b5a177)
- [قالب سجل القرار من Gareth Morgan](قوالب/قالب-سجل-القرار-من-غاريث-مورغان/)
- [قالب سجل القرار من GIG Cymru NHS Wales](قوالب/قالب-سجل-القرار-من-gig-cymru-nhs-wales/)
- [قالب سجل القرار للقرارات التقنية المهمة (ITD) من Ignacio Larrañaga](قوالب/قالب-سجل-القرار-للقرارات-التقنية-المهمة/)

الأمثلة:

- [إطار CSS](أمثلة/إطار-css/)
- [الإعداد بمتغيرات البيئة](أمثلة/الإعداد-بمتغيرات-البيئة/)
- [المقاييس والمراقبة والتنبيهات](أمثلة/المقاييس-والمراقبة-والتنبيهات/)
- [Microsoft Azure DevOps](أمثلة/مايكروسوفت-أزور-ديف-أوبس/)
- [مستودع واحد مقابل مستودعات متعددة](أمثلة/مستودع-واحد-مقابل-مستودعات-متعددة/)
- [لغات البرمجة](أمثلة/لغات-البرمجة/)
- [تخزين الأسرار](أمثلة/تخزين-الأسرار/)
- [صيغة الطابع الزمني](أمثلة/صيغة-الطابع-الزمني/)
- [المزيد...](أمثلة/)

## ما هو سجل قرار البنية المعمارية؟

**سجل قرار البنية المعمارية** (architecture decision record، ويُختصر ADR) هو وثيقة تدوّن قرارًا معماريًا مهمًا مع سياقه وعواقبه.

**قرار البنية المعمارية** (architecture decision، ويُختصر AD) هو خيار تصميمي برمجي يعالج متطلبًا جوهريًا.

**سجل قرارات البنية المعمارية** (architecture decision log، ويُختصر ADL) هو مجموعة كل سجلات ADR التي أُنشئت وصُينت لمشروع (أو مؤسسة) معيّن.

**المتطلب ذو الأثر المعماري** (architecturally-significant requirement، ويُختصر ASR) هو متطلب له أثر قابل للقياس في البنية المعمارية للنظام البرمجي.

وكل ذلك يندرج تحت موضوع **إدارة المعرفة المعمارية** (architecture knowledge management، ويُختصر AKM).

الغاية من هذه الوثيقة تقديم نظرة سريعة على سجلات ADR، وكيفية إنشائها، وأين تجد مزيدًا من المعلومات.

الاختصارات:

  * **AD**: قرار البنية المعمارية

  * **ADL**: سجل قرارات البنية المعمارية

  * **ADR**: سجل قرار البنية المعمارية

  * **AKM**: إدارة المعرفة المعمارية

  * **ASR**: المتطلب ذو الأثر المعماري

## كيف تبدأ باستخدام سجلات ADR

لتبدأ باستخدام سجلات ADR، ناقش مع زملائك في الفريق المجالات التالية.

تحديد القرارات:

  * ما مدى استعجال قرار البنية المعمارية (AD) وما مدى أهميته؟

  * هل يجب اتخاذه الآن، أم يمكن أن ينتظر حتى يُعرف المزيد؟

  * يمكن للخبرة الشخصية والجماعية، إضافةً إلى أساليب التصميم وممارساته المعترف بها، أن تساعد في تحديد القرارات.

  * من الأفضل الاحتفاظ بقائمة مهام للقرارات تكمّل قائمة مهام المنتج.

اتخاذ القرارات:

  * توجد تقنيات عديدة لاتخاذ القرارات، منها العامة ومنها الخاصة بالبنية المعمارية للبرمجيات، مثل رسم خرائط الحوار.

  * اتخاذ القرارات الجماعي موضوع بحثي نشط.

تنفيذ القرارات وإنفاذها:

  * تُستخدم قرارات AD في تصميم البرمجيات؛ ولذلك يجب إبلاغها إلى أصحاب المصلحة في النظام ممن يموّلونه ويطوّرونه ويشغّلونه، وأن يقبلوها.

  * أساليب الترميز الواضحة معماريًا ومراجعات الشيفرة التي تركّز على الاعتبارات والقرارات المعمارية ممارستان ذواتا صلة.

  * ويجب أيضًا (إعادة) النظر في قرارات AD عند تحديث نظام برمجي أثناء تطوره.

مشاركة القرارات (اختياري):

  * تتكرر كثير من قرارات AD عبر المشاريع.

  * ومن ثمّ يمكن لخبرات القرارات السابقة، الجيدة منها والسيئة، أن تكون أصولًا قيّمة قابلة لإعادة الاستخدام عند اعتماد استراتيجية صريحة لإدارة المعرفة.

توثيق القرارات:

  * توجد قوالب وأدوات كثيرة لتدوين القرارات.

  * انظر المجتمعات الرشيقة، مثل سجلات ADR لدى M. Nygard.

  * انظر عمليات هندسة البرمجيات وتصميم البنية المعمارية التقليدية، مثل تخطيطات الجداول التي اقترحتها IBM UMF وكلٌّ من Tyree وAkerman من CapitalOne.

لمزيد من المعلومات:

  * الخطوات أعلاه مقتبسة من مدخل ويكيبيديا عن [القرار المعماري](https://en.wikipedia.org/wiki/Architectural_decision)

## كيف تبدأ باستخدام سجلات ADR مع الأدوات

يمكنك البدء باستخدام سجلات ADR مع الأدوات بأي طريقة تشاء.

على سبيل المثال:

  * إذا كنت تحب استخدام Google Drive والتحرير عبر الإنترنت، يمكنك إنشاء مستند Google Docs أو جدول بيانات Google Sheets.

  * إذا كنت تحب استخدام التحكم في إصدارات الشيفرة المصدرية، مثل git، يمكنك إنشاء ملف لكل سجل ADR.

  * إذا كنت تحب استخدام أدوات تخطيط المشاريع، مثل Atlassian Jira، يمكنك استخدام متتبّع التخطيط في الأداة.

  * إذا كنت تحب الويكي، مثل MediaWiki، يمكنك إنشاء ويكي لسجلات ADR.

## كيف تبدأ باستخدام سجلات ADR مع git

إذا كنت تحب استخدام نظام التحكم في الإصدارات git، فهذه هي الطريقة التي نفضّلها للبدء باستخدام سجلات ADR مع git في مشروع برمجي نموذجي له شيفرة مصدرية.

أنشئ مجلدًا لملفات ADR:

```sh
$ mkdir adr
```

لكل سجل ADR، أنشئ ملفًا نصيًا، مثل `database.txt`:

```sh
$ vi database.txt
```

اكتب في السجل ما تشاء. راجع القوالب الموجودة في هذا المستودع للاستلهام.

أودِع السجل (commit) في مستودع git الخاص بك.

## مهارات Claude Code لسجلات ADR

يوفّر هذا المستودع مهارتين من [Claude Code](https://claude.com/claude-code) ضمن [`skills/`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/)، ليتمكن وكيل برمجة بالذكاء الاصطناعي من كتابة سجلات ADR وصيانتها بالطريقة التي يوصي بها هذا المشروع:

- [`architecture-decision-record-skill`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/architecture-decision-record-skill/) — للأغراض العامة، لكل من يكتب سجل ADR في أي مشروع. تساعد في تقرير ما إذا كان القرار يحتاج إلى سجل ADR، وتنشئ مجلد `adr/` أو `decisions/`، وتسمّي الملف، وتختار قالبًا من الهياكل الأحد عشر المرفقة، وتكتب أقسام السياق/القرار/النتائج بإحكام.

- [`architecture-decision-record-maintainer-skill`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/architecture-decision-record-maintainer-skill/) — لمشرفي هذا المستودع تحديدًا. توثّق بنية المستودع واصطلاح مطابقة README/locales، والخطوات الدقيقة لإضافة قالب أو مثال أو رابط أداة جديد.

لاستخدام مهارة، انسخ مجلدها إلى `.claude/skills/` في جذر المستودع الذي تعمل عليه (أو إلى `~/.claude/skills/` لإتاحتها في كل مشروع)، ثم اطلب من Claude Code كتابة سجل ADR أو مراجعته.

## اصطلاحات تسمية الملفات

إذا اخترت إنشاء سجلات ADR باستخدام ملفات نصية عادية، فقد ترغب في وضع اصطلاحك الخاص لتسمية ملفات ADR.

نفضّل اصطلاحًا لتسمية الملفات له صيغة محددة.

أمثلة:

  * choose-database.md

  * format-timestamps.md

  * manage-passwords.md

  * handle-exceptions.md

اصطلاحنا في تسمية الملفات:

  * يتضمن الاسم عبارة فعلية بصيغة الأمر في زمن المضارع. هذا يحسّن قابلية القراءة ويتوافق مع صيغة رسائل الإيداع (commit) لدينا.

  * يستخدم الاسم الأحرف الصغيرة والشرطات (مثل هذا المستودع). وهذا توازن بين قابلية القراءة وسهولة الاستخدام في النظام.

  * الامتداد هو markdown. وقد يفيد هذا في تنسيق سهل.

## اقتراحات لكتابة سجلات ADR جيدة

خصائص سجل ADR الجيد:

* المبرّر (Rationale): اشرح أسباب اتخاذ قرار AD المعيّن. وقد يشمل ذلك السياق (انظر أدناه)، ومزايا الخيارات المحتملة المختلفة وعيوبها، ومقارنات الميزات، ومناقشات التكلفة والفائدة، وغير ذلك.

* المحدَّد (Specific): ينبغي أن يتناول كل سجل ADR قرار AD واحدًا، لا عدة قرارات.

* الطوابع الزمنية (Timestamps): بيّن متى كُتب كل عنصر في السجل. وهذا مهم خصوصًا للجوانب التي قد تتغير بمرور الوقت، مثل التكاليف والجداول الزمنية والتوسّع وما شابه.

* غير القابل للتعديل (Immutable): لا تغيّر المعلومات الموجودة في السجل. بل عدِّل السجل بإضافة معلومات جديدة، أو استبدله بإنشاء سجل ADR جديد.

خصائص قسم «السياق» الجيد في سجل ADR:

* اشرح وضع مؤسستك وأولوياتها التجارية.

* ضمّن المبررات والاعتبارات المبنية على التركيبة الاجتماعية والمهارية لفرقك.

* ضمّن المزايا والعيوب ذات الصلة، وصفها بعبارات تتوافق مع احتياجاتك وأهدافك.

خصائص قسم «العواقب» الجيد في سجل ADR:

* اشرح ما يترتب على اتخاذ القرار. وقد يشمل ذلك الآثار والنتائج والمخرجات والمتابعات وغير ذلك.

* ضمّن معلومات عن أي سجلات ADR لاحقة. من الشائع نسبيًا أن يستدعي سجل ADR واحد الحاجة إلى سجلات أخرى، كأن يتخذ سجل قرارًا عامًا كبيرًا ينشئ بدوره الحاجة إلى قرارات أصغر.

* ضمّن أي عمليات مراجعة بعد التنفيذ. من المعتاد أن تراجع الفرق كل سجل ADR بعد شهر، لمقارنة معلومات السجل بما حدث فعليًا في الممارسة، بغرض التعلم والنمو.

يمكن لسجل ADR جديد أن يحلّ محل سجل سابق:

* عندما يُتخذ قرار AD يستبدل سجل ADR سابقًا أو يُبطله، ينبغي إنشاء سجل ADR جديد

## قوالب أمثلة ADR

قوالب أمثلة ADR التي جمعناها من الإنترنت:

- [قالب ADR من Michael Nygard](قوالب/قالب-سجل-القرار-من-مايكل-نايغارد/) (بسيط وشائع)

- [قالب ADR من Jeff Tyree وArt Akerman](قوالب/قالب-سجل-القرار-من-جيف-تايري-وآرت-أكرمان/) (أكثر تطورًا)

- [قالب ADR لنمط Alexandrian](قوالب/قالب-سجل-القرار-للنمط-الإسكندري/) (بسيط مع تفاصيل السياق)

- [قالب ADR لحالة العمل](قوالب/قالب-سجل-القرار-لدراسة-الجدوى/) (أقرب إلى منظور إدارة الأعمال، مع التكاليف وتحليل SWOT وآراء أكثر)

- [قالب ADR لمشروع Markdown Any Decision Records (MADR)](قوالب/قالب-سجل-القرار-لمشروع-madr/) (نسختان بسيطة ومفصلة؛ وتؤكد الثانية الخيارات ومزاياها وعيوبها)

- [قالب ADR باستخدام Planguage](قوالب/قالب-سجل-القرار-باستخدام-planguage/) (أقرب إلى ضمان الجودة)

- [قالب القرارات التقنية المهمة (ITD) من Ignacio Larrañaga](قوالب/قالب-سجل-القرار-للقرارات-التقنية-المهمة/) (مختصر ويبدأ بالقرار، ومُحسَّن للمراجعة التنفيذية السريعة)

## نصائح العمل الجماعي لسجلات ADR

إذا كنت تفكر في استخدام سجلات القرارات مع فريقك، فهذه بعض النصائح التي تعلمناها من العمل مع فرق كثيرة.

أمامك فرصة لقيادة زملائك بالحديث معًا عن «السبب»، بدلًا من فرض «الماهية». فمثلًا، سجلات القرارات وسيلة للفرق كي تفكر بذكاء أكبر وتتواصل بصورة أفضل؛ ولا قيمة لها إن كانت مجرد متطلب ورقي مفروض بعد وقوع الأمر.

تفضّل بعض الفرق اسم «القرارات» (decisions) كثيرًا على الاختصار «ADR». وحين تستخدم بعض الفرق اسم المجلد «decisions» يكون الأمر كمن أُضيء له مصباح، فيبدأ الفريق بوضع مزيد من المعلومات في المجلد، مثل قرارات الموردين وقرارات التخطيط وقرارات الجدولة وغيرها. وكل هذه الأنواع من المعلومات يمكن أن تستخدم القالب نفسه. ونفترض أن الناس يتعلمون أسرع بالكلمات («القرارات») منهم بالاختصارات («ADR»)، وأنهم أكثر حماسًا لكتابة وثائق العمل الجارية عند إزالة كلمة «سجل»، وأن بعض المطورين وبعض المديرين يكرهون أيضًا كلمة «بنية معمارية».

من الناحية النظرية، عدم قابلية التعديل مثالية. أما في الممارسة، فقد نجحت قابلية التعديل أكثر مع فرقنا. فنحن ندرج المعلومات الجديدة في سجل ADR القائم، مع ختم تاريخ وملاحظة بأن المعلومات وصلت بعد القرار. ويؤدي هذا النهج إلى «وثيقة حية» يمكننا جميعًا تحديثها. وتحدث التحديثات النموذجية عندما نحصل على معلومات بفضل زملاء جدد، أو عروض جديدة، أو نتائج واقعية لاستخداماتنا، أو بعد تغييرات لاحقة لدى أطراف ثالثة، مثل قدرات الموردين وخطط التسعير واتفاقيات الترخيص وغيرها.

## أسئلة العمل الجماعي لسجلات ADR

### من يستطيع إنشاء سجل ADR؟

فكّر في جوانب مثل أشخاص بعينهم، أو أدوار بعينها، أو فرق بعينها، أو أقسام بعينها؛ وفكّر أيضًا فيما إذا كان هناك أشخاص أو أدوار أو فرق أو أقسام يمكنها تكليف إنشاء سجل ADR، أي أن تطلب سجلًا يكتبه شخص آخر.

مثال على إجابة: يمكن لأي شخص في مؤسستنا قرأ صفحة README الخاصة بسجل قرار البنية المعمارية أن يقترح سجل ADR، أي أن يبدأ بكتابته ويشاركه مع الفريق.

### ما الذي يبرّر إنشاء سجل ADR؟

فكّر في جوانب مثل طرائق عمل الفرق في مؤسستك، وبنية نظامك البرمجي، والتنسيق بين الفرق، وقابلية الصيانة على المدى البعيد، والواجهات الخارجية، ومن تريد أن تفيده، وما شابه.

مثال على إجابة: نريد إنشاء سجل ADR عندما نريد أن يفهم المطورون في المستقبل «لماذا» نفعل ما نفعله.

### ما الذي يبرّر عدم إنشاء سجل ADR؟

فكّر في جوانب مثل القرارات التي لا تتعلق بالبنية المعمارية، أو الصغيرة مثل قليلة المخاطر أو المستقلة بذاتها أو الخاصة بمطور واحد، أو المغطاة كليًا في مكان آخر مثل المعايير أو السياسات أو التوثيق، أو المؤقتة مثل الحلول البديلة أو إثباتات المفهوم أو التجارب.

مثال على إجابة: نريد تخطي سجل ADR عندما يكون القرار محدودًا في النطاق والوقت والمخاطر والتكلفة، أو مغطى بالفعل في مكان آخر.

### ما دورة حياة سجل ADR؟

فكّر في جوانب مثل عملية الإنشاء، وعملية البحث، وعملية اتخاذ القرار، وعملية التنفيذ، وعملية الإنهاء. وفكّر في كيفية تتبّع دورة حياة السجل عبر الزمن، مثل كيفية نقل السجل من حالة إلى الحالة التالية، وكيفية إبلاغ أصحاب المصلحة بذلك.

مثال على إجابة: نريد أن يكون لسجل ADR خمس مراحل في دورة حياته: البدء ← البحث ← التقييم ← التنفيذ ← الصيانة ← الإنهاء.

### ما معايير مراحل دورة حياة سجل ADR؟

فكّر في جوانب مثل معايير قبول السجل، أي كيف تعرف أنه جيد بما يكفي للانتقال من مرحلة في دورة الحياة إلى التالية؟ هل صيغت المشكلة بوضوح؟ هل نُظر في البدائل؟ هل المفاضلات مفهومة وموثقة بما يكفي؟ هل السياق ذو الصلة كله موجود؟ هل أصحاب المصلحة المعنيون كلهم مشاركون؟ هل أُدرجت كل الملاحظات؟

مثال على إجابة: نريد أن يصوّت أصحاب المصلحة على سجل ADR عندما يكون الفريق النشط قد 1) أكمل بحثه، 2) أكمل تقييمه، 3) نشر مقترح السجل على أصحاب المصلحة مع طلب تعليقات ومهلة أسبوع، 4) أدرج كل تعليقات أصحاب المصلحة وعالجها.

### ما الأدوار والمسؤوليات المتفاعلة مع سجل ADR؟

فكّر في أدوار مثل المقترِح والباحث والمقيّم والمراجع والمعتمِد والمشرف على الصيانة وما شابه. وفكّر في مسؤوليات مثل التواصل مع أصحاب المصلحة، وضمان تلبية التوقعات، والنشر على الموقع الإلكتروني أو الشبكة الداخلية، ومراجعة العمل دوريًا وخصوصًا عند حدوث تغييرات ذات صلة.

مثال على إجابة: نريد أن يكون لكل سجل ADR دائمًا شخص اتصال أساسي وشخص اتصال ثانوي وفريق مسؤول؛ وهؤلاء مسؤولون عن الاتصالات والنشر والصيانة والمراجعة الدورية مرة في السنة على الأقل والإنهاء النهائي عند الحاجة.

### كيف تتفاعل الحوكمة مع سجل ADR؟

فكّر في جوانب مثل طرائق العمل في مؤسستك، وأي احتياجات امتثال خاصة مثل الجوانب القانونية أو جوانب الموارد البشرية، وكيف تريد التعامل مع التوافق مقابل الخلاف مقابل التصعيد. هل هناك مجالات أو أشخاص أو فرق يمكن أن يكون لها تأثير أكبر من غيرها فيما يخص سجل ADR، كأن تستطيع اعتماده أو التصويت عليه أو نقضه؟

مثال على إجابة: تكون حوكمة سجل ADR بهذا الترتيب من الأولوية: الرئيس التنفيذي (CEO)، والمدير التقني (CTO)، والمدير القانوني (CLO)، والفريق الذي ينفّذ السجل، والخبراء في الفريق الأكثر معرفة بالسجل ADD. ولا يملك أحد غيرهم حوكمة ما لم ينص السجل على ذلك.

### ما المبادئ المتفاعلة مع سجل ADR؟

فكّر في جوانب مثل طرائق العمل في مؤسستك التي تشمل التحرك بسرعة مقابل التحرك ببطء، وتوافق القرارات مقابل تضارب القرارات، وتفضيلات المخاطرة مقابل تفضيلات الأمان، والنقاش العلني مقابل النقاش الخاص، وما شابه.

مثال على إجابة: نستخدم مبادئ القيادة التالية: الانحياز إلى الفعل، والاختلاف ثم الالتزام (disagree-and-commit)، وكفاية تقديرات بنسبة 70% للقرارات التي يسهل التراجع عنها وعزلها، وطرائق العمل العلنية باستثناء المعلومات السرية كما هو موضح في اتفاقية السرية الخاصة بمؤسستنا.

## مفاهيم الخطوة التالية لسجلات ADR

يجيب [Arc42](https://arc42.org/) عن سؤالين بطريقة عملية ويمكن تكييفه مع احتياجاتك. ماذا ينبغي أن توثّق/تنقل عن بنيتك المعمارية؟ وكيف ينبغي أن توثّق/تنقل؟ يتضمن Arc42 سجلات قرارات البنية المعمارية إضافةً إلى إرشادات حول الأهداف والقيود والسياقات والجودة والمخاطر وغيرها.

[نموذج C4](https://c4model.com/) نهج سهل التعلّم ومناسب للمطورين لرسم مخططات البنية المعمارية للبرمجيات. C4 مجموعة من المخططات الهرمية للسياق والحاويات والمكوّنات والشيفرة، إضافةً إلى مخططات داعمة لمشهد الأنظمة والديناميكية والنشر.

## مخططات البنية المعمارية والمناظير ووجهات النظر

يُسمّى مخطط البنية المعمارية "منظورًا معماريًا".

والـ"منظور المعماري" هو مثيل لـ"وجهة نظر معمارية".

ولكل "وجهة نظر معمارية" جمهور محدد له اهتمامات محددة.

أمثلة على وجهات النظر المعمارية والمناظير والمخططات:

- القدرات التجارية

- العمليات التجارية عالية المستوى

- [تدفقات القيمة](https://en.wikipedia.org/wiki/Value_stream)

- الوظائف البرمجية المرتبطة بمكوّنات التطبيق

- [C4 Model](https://en.wikipedia.org/wiki/C4_model) مخطط السياق (TO-BE / AS-IS)

- [C4 Model](https://en.wikipedia.org/wiki/C4_model) مخطط الحاويات (TO-BE / AS-IS)

- [مخطط الكيانات والعلاقات](https://en.wikipedia.org/w/index.php?title=Entity_relationship_diagram) (ERD) لربط كيانات البيانات بمكوّنات التطبيق

- [مخططات التسلسل](https://en.wikipedia.org/wiki/Sequence_diagram) لوصف التدفقات الوظيفية داخل الأنظمة وفي التكاملات

- [نمذجة وتدوين العمليات التجارية](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN) مخططات لوصف تدفقات البيانات عبر مكوّنات التطبيق

- [نمذجة وتدوين العمليات التجارية](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN) مخططات لوصف العمليات التجارية / سيناريوهات المستخدم

- [إدارة الهوية والوصول](https://en.wikipedia.org/wiki/Identity_and_access_management) (IAM) مخططات

- [التحكم في الوصول القائم على الأدوار](https://en.wikipedia.org/wiki/Role-based_access_control) (RBAC) مخططات بأدوار لكل مكوّن تطبيق

- [التحكم في الوصول القائم على السمات](https://en.wikipedia.org/wiki/Attribute-based_access_control) (ABAC) مخططات بسمات لكل مكوّن تطبيق

- مخططات الخصوصية

مخططات ذات صلة:

- يعرض مخطط حالات الاستخدام حالات الاستخدام للإدارة/العملاء، وهو يسبق المتطلبات التي تسبق البنية المعمارية للبرمجيات.

- يعرض مخطط النشر الأجهزة/الحواسيب المادية التي تُنشر عليها مكوّنات البرمجيات.
- يعرض مخطط تدفق البيانات كيف تنتقل البيانات عبر النظام وتُحوَّل.
- يُستخدم مخطط التسلسل لإظهار كيفية عمل بروتوكولات مثل HTTP على محور زمني.

- يصوّر مخطط النشاط سير عمل الأنشطة التي ينفذها نظام برمجي، مثل ذكاء NPC الاصطناعي.

## دوال الملاءمة للقرارات بوصفها شيفرة

دوال الملاءمة (fitness functions) هي فحوص آلية موضوعية، مكتوبة بشيفرة برمجية، تتحقق من أن القرارات يجري الالتزام بها.

- تجعل دوال الملاءمة القرارات قابلة للاختبار والتأكيد.

- يمكن لدوال الملاءمة الخاصة بالقرارات أن تساعد كثيرًا في ضمان الجودة والعمليات التنظيمية وأهداف الحوكمة.

### كيف ترتبط دوال الملاءمة بالقرارات

يوثّق سجل القرار القرار، بينما تؤكّد دالة الملاءمة القرار.

- مثال على قرار: نستخدم توثيق الأحداث (event sourcing) لمتطلبات التدقيق.

- مثال على دالة ملاءمة: نستخدم خادم التكامل المستمر لاختبار أن كل تغييرات الحالة يجب أن تنتج أحداثًا.

### لماذا تساعد دوال الملاءمة القرارات

قياسات موضوعية: تنجح دوال الملاءمة أو تفشل، فيكون العمل مرئيًا وواضحًا.

استخدام مستمر: دوال الملاءمة هي قواعدك الحية، تعمل مع كل إيداع (commit) وكل بناء (build).

ثقة في إعادة الهيكلة: تلتقط دوال الملاءمة تلقائيًا أخطاء قواعد القرارات.

حوكمة قابلة للتوسّع: تؤكّد دوال الملاءمة المعايير دون خلق اختناقات.

### هل يمكن لدوال الملاءمة استخدام الذكاء الاصطناعي؟

يمكن لدوال الملاءمة الاستفادة من نماذج اللغة الكبيرة (LLM) للذكاء الاصطناعي في القرارات بطرح أسئلة عن عملك، مثل خططك وشيفرتك ومخططاتك وواجهاتك البرمجية وغير ذلك:

```txt
IMPORTANT: Prefer retrieval-led reasoning over pre-training-led reasoning.
IMPORTANT: Turn on extended thinking. Turn on expert advice. Turn on search.

This is a fitness function to evaluate if our work is
using all our decisions, and is correct and accurate.

- Our decisions are here: {url}
- Our work to evaluate is here: {url}

Explain any errors, problems, gaps, weaknesses. Be direct. Be decisive.
```

### اختبار وحدة البنية المعمارية

[ArchUnit](https://www.archunit.org/): يفحص القواعد المعمارية لشيفرة Java باستخدام أي إطار اختبار وحدات عادي في Java.

[ArchUnitTS](https://github.com/LukasNiessen/ArchUnitTS): يفحص القواعد المعمارية لشيفرة TypeScript وJavaScript باستخدام Jest وVitest وJasmine وغيرها.

## حواجز حماية القرارات لطلبات السحب

[Decision Guardian](https://github.com/DecispherHQ/decision-guardian)
يُظهر تلقائيًا سجلات القرارات المناسبة في اللحظة المناسبة، أي عندما يعدّل المطوّر
فعليًا الشيفرة التي تغطيها تلك القرارات. فبدلًا من الأمل في أن يقرأ المطورون
مجلد وثائق قبل الدمج، يظهر السياق ذو الصلة مباشرةً في طلب السحب.

يعمل هذا مع أي نوع من سجلات القرارات: قرارات البنية المعمارية، وقرارات البيانات، وقرارات الامتثال، والقرارات السريرية والطبية، وقرارات الأمان، وغيرها.

يعمل مع أي نظام تكامل مستمر (GitLab وJenkins وCircleCI) وكخطّاف pre-commit.
مفتوح المصدر. ترخيص MIT.

[ADR Guard](https://github.com/chohan-sarmad-ali/delivery-gates) إجراء GitHub
يُفشل طلب السحب عندما تتغير مسارات الشيفرة المراقَبة دون إضافة سجل قرار معماري أو تحديثه. الاستثناءات صريحة: سطر
`ADR-Exempt:` مع سبب يجتاز البوابة ويُسجَّل في ملخص المهمة. لا يرتبط بقالب معين ولا يحتاج إلى تبعيات. مفتوح المصدر. ترخيص MIT.

## لمزيد من المعلومات

مقدمة:

- [Architectural decision (wikipedia.org)](https://wikipedia.org/wiki/Architectural_decision)

- [Architecturally significant requirements (wikipedia.org)](https://wikipedia.org/wiki/Architecturally_significant_requirements)

القوالب:

- [Documenting architecture decisions - Michael Nygard (thinkrelevance.com)](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)

- [Markdown Architectural Decision Records (adr.github.io)](https://adr.github.io/madr/)

- [Template for documenting architecture alternatives and decisions (stackoverflow.com)](http://stackoverflow.com/questions/7104735/template-for-documenting-architecture-alternatives-and-decisions)

بتعمق:

- [ADMentor XML project (github.com)](https://github.com/IFS-HSR/ADMentor)

- [Architectural Decision Guidance across Projects: Problem Space Modeling, Decision Backlog Management and Cloud Computing Knowledge (ifs.hsr.ch)](https://www.ifs.hsr.ch/fileadmin/user_upload/customers/ifs.hsr.ch/Home/projekte/ADMentor-WICSA2015ubmissionv11nc.pdf)

- [The Decision View's Role in Software Architecture Practice (computer.org)](https://www.computer.org/csdl/mags/so/2009/02/mso2009020036-abs.html)

- [Documenting Software Architectures: Views and Beyond (resources.sei.cmu.edu)](http://resources.sei.cmu.edu/library/asset-view.cfm?assetID=30386)

- [Architecture Decisions: Demystifying Architecture (utdallas.edu)](https://www.utdallas.edu/~chung/SA/zz-Impreso-architecture_decisions-tyree-05.pdf)

- [ThoughtWorks Technology Radar: Lightweight Architecture Decision Records (thoughtworks.com)](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)

- [A Skeptic’s Guide to Software Architecture Decisions (infoq.com)](https://www.infoq.com/articles/architecture-skeptics-guide/)

- [Architectural Decisions — The Making Of](https://ozimmer.ch/practices/2020/04/27/ArchitectureDecisionMaking.html)

- [Architectural Retrospectives: the Key to Getting Better at Architecting](https://www.infoq.com/articles/architectural-retrospectives/)

- [Software Architecture Monday with Mark Richards](https://developertoarchitect.com/lessons/) - درس شهري مجاني في هندسة البرمجيات المعمارية

- [Solution Architecture Decisions - By Gareth Morgan](https://www.linkedin.com/pulse/solution-architecture-decisions-gareth-morgan-0r5xe/)

- ["Keep the Why: Code Becomes Legacy When Nobody Remembers Why"](https://blog.technopathy.club/keep-the-why-code-becomes-legacy-when-nobody-remembers-why)

الأدوات:

- [Command-line tools for working with Architecture Decision Records](https://github.com/npryce/adr-tools)

- [Command line tools with python - by Victor Sluiter](https://bitbucket.org/tinkerer_/adr-tools-python/src/master/)

- [Architectural Design Decision Support Framework (ADvISE)](https://swa.univie.ac.at/Software_Architecture/research-projects/architectural-design-decision-support-framework-advise/)

- [Decision Guardian](https://github.com/DecispherHQ/decision-guardian)

- [Mneme HQ - ADR enforcement for AI coding agents](https://github.com/TheoV823/mneme)

- [Keep the Why - a repo-native convention and agent skill that continuously captures, or retrospectively recovers, the reasoning behind a codebase](https://github.com/oliver-zehentleitner/keep-the-why)

- [ADR Guard - GitHub Action that fails a pull request changing watched code without an architecture decision record](https://github.com/chohan-sarmad-ali/delivery-gates)

- [kgai - append-only decision log for AI coding agents, a machine-readable companion to ADR files](https://github.com/kgaidev/kgai)

إرشادات خاصة بالشركات:

- [Amazon: AWS Prescriptive Guidance: ADR Process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)

- [GitHub: ADR GitHub organization](https://adr.github.io/)

- [RedHat: Why you should use ADRs](https://www.redhat.com/architect/architecture-decision-records)

الأمثلة:

- [Repository of Architecture Decision Records made for the Arachne Framework](https://github.com/arachne-framework/architecture)

مقاطع الفيديو:

- [An introduction to arc42 with Savvas Kleanthous](https://www.youtube.com/watch?v=V5clR8c6D7o)

- [The C4 model for visualising software architecture - by Simon Brown](https://www.youtube.com/watch?v=KvoBrUd1-5E)

البودكاست:

- [Software Architecture Bookclub Podcast](https://www.developertoarchitect.com/bookclub-podcast.html)

الكتب:

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

انظر أيضًا:

- REMAP (Representation and Maintenance of Process Knowledge)

- DRL (Decision Representation Language)

- IBIS (Issue-Based Information System)

- QOC (Questions, Options, and Criteria)

- IBM’s e-Business Reference Architecture Framework

- [Decision Reasoning Format (DRF)](https://github.com/reasoning-formats/reasoning-formats) - صيغة YAML/JSON محايدة تجاه الموردين وقابلة للقراءة آليًا لتمثيل القرارات مع المنطق الصريح والافتراضات والحالة المعرفية والمقايضات. تكمّل سجلات ADR بإضافة منطق منظَّم يمكن التحقق منه إلى توثيق القرارات.
