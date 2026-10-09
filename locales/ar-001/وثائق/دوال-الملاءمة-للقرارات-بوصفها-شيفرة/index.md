# دوال الملاءمة للقرارات بوصفها شيفرة

دوال الملاءمة (fitness functions) هي فحوص آلية موضوعية، مكتوبة بشيفرة برمجية، تتحقق من أن القرارات يجري الالتزام بها.

- تجعل دوال الملاءمة القرارات قابلة للاختبار والتأكيد.

- يمكن لدوال الملاءمة الخاصة بالقرارات أن تساعد كثيرًا في ضمان الجودة والعمليات التنظيمية وأهداف الحوكمة.

## كيف ترتبط دوال الملاءمة بالقرارات

يوثّق سجل القرار القرار، بينما تؤكّد دالة الملاءمة القرار.

- مثال على قرار: نستخدم توثيق الأحداث (event sourcing) لمتطلبات التدقيق.

- مثال على دالة ملاءمة: نستخدم خادم التكامل المستمر لاختبار أن كل تغييرات الحالة يجب أن تنتج أحداثًا.

## لماذا تساعد دوال الملاءمة القرارات

قياسات موضوعية: تنجح دوال الملاءمة أو تفشل، فيكون العمل مرئيًا وواضحًا.

استخدام مستمر: دوال الملاءمة هي قواعدك الحية، تعمل مع كل إيداع (commit) وكل بناء (build).

ثقة في إعادة الهيكلة: تلتقط دوال الملاءمة تلقائيًا أخطاء قواعد القرارات.

حوكمة قابلة للتوسّع: تؤكّد دوال الملاءمة المعايير دون خلق اختناقات.

## هل يمكن لدوال الملاءمة استخدام الذكاء الاصطناعي؟

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

## اختبار وحدة البنية المعمارية

[ArchUnit](https://www.archunit.org/): يفحص القواعد المعمارية لشيفرة Java باستخدام أي إطار اختبار وحدات عادي في Java.

[ArchUnitTS](https://github.com/LukasNiessen/ArchUnitTS): يفحص القواعد المعمارية لشيفرة TypeScript وJavaScript باستخدام Jest وVitest وJasmine وغيرها.
