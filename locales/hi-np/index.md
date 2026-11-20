# आर्किटेक्चर निर्णय रिकॉर्ड (ADR)

आर्किटेक्चर निर्णय रिकॉर्ड (ADR) एक ऐसा दस्तावेज़ है जो लिए गए किसी महत्वपूर्ण आर्किटेक्चर निर्णय को उसके संदर्भ और परिणामों के साथ दर्ज करता है।

> [!IMPORTANT]
> इन संसाधनों को किसी भी महत्वपूर्ण सिस्टम में उपयोग करने से पहले अपनी ओर से उचित जाँच-पड़ताल अवश्य करें।

विषय-सूची:

- [आर्किटेक्चर निर्णय रिकॉर्ड क्या है?](#आर्किटेक्चर-निर्णय-रिकॉर्ड-क्या-है)
- [ADR का उपयोग कैसे शुरू करें](#adr-का-उपयोग-कैसे-शुरू-करें)
- [उपकरणों के साथ ADR का उपयोग कैसे शुरू करें](#उपकरणों-के-साथ-adr-का-उपयोग-कैसे-शुरू-करें)
- [git के साथ ADR का उपयोग कैसे शुरू करें](#git-के-साथ-adr-का-उपयोग-कैसे-शुरू-करें)
- [ADR के लिए Claude Code स्किल](#adr-के-लिए-claude-code-स्किल)
- [फ़ाइल नामकरण परिपाटी](#फ़ाइल-नामकरण-परिपाटी)
- [अच्छे ADR लिखने के सुझाव](#अच्छे-adr-लिखने-के-सुझाव)
- [ADR उदाहरण टेम्पलेट](#adr-उदाहरण-टेम्पलेट)
- [ADR के लिए टीमवर्क सलाह](#adr-के-लिए-टीमवर्क-सलाह)
- [ADR के लिए टीमवर्क प्रश्न](#adr-के-लिए-टीमवर्क-प्रश्न)
- [ADR के लिए अगले चरण की अवधारणाएँ](#adr-के-लिए-अगले-चरण-की-अवधारणाएँ)
- [आर्किटेक्चर आरेख, दृश्य और दृष्टिकोण](#आर्किटेक्चर-आरेख-दृश्य-और-दृष्टिकोण)
- [कोड के रूप में निर्णयों के लिए फ़िटनेस फ़ंक्शन](#कोड-के-रूप-में-निर्णयों-के-लिए-फ़िटनेस-फ़ंक्शन)
- [पुल रिक्वेस्ट के लिए निर्णय गार्डरेल](#पुल-रिक्वेस्ट-के-लिए-निर्णय-गार्डरेल)
- [अधिक जानकारी के लिए](#अधिक-जानकारी-के-लिए)

टेम्पलेट:

- [Jeff Tyree और Art Akerman द्वारा निर्णय रिकॉर्ड टेम्पलेट](टेम्पलेट/जेफ-टाइरी-और-आर्ट-अकरमैन-द्वारा-निर्णय-रिकॉर्ड-टेम्पलेट/)
- [Michael Nygard द्वारा निर्णय रिकॉर्ड टेम्पलेट](टेम्पलेट/माइकल-नाइगार्ड-द्वारा-निर्णय-रिकॉर्ड-टेम्पलेट/)
- [EdgeX द्वारा निर्णय रिकॉर्ड टेम्पलेट](टेम्पलेट/edgex-द्वारा-निर्णय-रिकॉर्ड-टेम्पलेट/)
- [arc42 द्वारा निर्णय रिकॉर्ड टेम्पलेट](टेम्पलेट/arc42-द्वारा-निर्णय-रिकॉर्ड-टेम्पलेट/)
- [अलेक्ज़ेंड्रियन पैटर्न के लिए निर्णय रिकॉर्ड टेम्पलेट](टेम्पलेट/अलेक्ज़ेंड्रियन-पैटर्न-के-लिए-निर्णय-रिकॉर्ड-टेम्पलेट/)
- [व्यावसायिक मामले के लिए निर्णय रिकॉर्ड टेम्पलेट](टेम्पलेट/व्यावसायिक-मामले-के-लिए-निर्णय-रिकॉर्ड-टेम्पलेट/)
- [MADR परियोजना का निर्णय रिकॉर्ड टेम्पलेट](टेम्पलेट/madr-परियोजना-का-निर्णय-रिकॉर्ड-टेम्पलेट/)
- [Planguage का उपयोग करके निर्णय रिकॉर्ड टेम्पलेट](टेम्पलेट/planguage-का-उपयोग-करके-निर्णय-रिकॉर्ड-टेम्पलेट/)
- [Paulo Merson का निर्णय रिकॉर्ड टेम्पलेट](https://github.com/pmerson/ADR-template)
- [Olaf Zimmermann का निर्णय रिकॉर्ड टेम्पलेट](https://medium.com/olzzio/y-statements-10eb07b5a177)
- [Gareth Morgan द्वारा निर्णय रिकॉर्ड टेम्पलेट](टेम्पलेट/गैरेथ-मॉर्गन-द्वारा-निर्णय-रिकॉर्ड-टेम्पलेट/)
- [GIG Cymru NHS Wales द्वारा निर्णय रिकॉर्ड टेम्पलेट](टेम्पलेट/gig-cymru-nhs-wales-द्वारा-निर्णय-रिकॉर्ड-टेम्पलेट/)
- [Ignacio Larrañaga द्वारा महत्वपूर्ण तकनीकी निर्णयों (ITD) के लिए निर्णय रिकॉर्ड टेम्पलेट](टेम्पलेट/महत्वपूर्ण-तकनीकी-निर्णयों-के-लिए-निर्णय-रिकॉर्ड-टेम्पलेट/)

उदाहरण:

- [CSS फ़्रेमवर्क](उदाहरण/css-फ़्रेमवर्क/)
- [एनवायरनमेंट वेरिएबल कॉन्फ़िगरेशन](उदाहरण/एनवायरनमेंट-वेरिएबल-कॉन्फ़िगरेशन/)
- [मेट्रिक्स, मॉनिटर, अलर्ट](उदाहरण/मेट्रिक्स-मॉनिटर-अलर्ट/)
- [Microsoft Azure DevOps](उदाहरण/माइक्रोसॉफ्ट-एज़्योर-देवऑप्स/)
- [मोनोरेपो बनाम मल्टीरेपो](उदाहरण/मोनोरेपो-बनाम-मल्टीरेपो/)
- [प्रोग्रामिंग भाषाएँ](उदाहरण/प्रोग्रामिंग-भाषाएँ/)
- [गोपनीय जानकारी का भंडारण](उदाहरण/गोपनीय-जानकारी-का-भंडारण/)
- [टाइमस्टैम्प प्रारूप](उदाहरण/टाइमस्टैम्प-प्रारूप/)
- [और भी बहुत कुछ...](उदाहरण/)

## आर्किटेक्चर निर्णय रिकॉर्ड क्या है?

**आर्किटेक्चर निर्णय रिकॉर्ड** (architecture decision record, ADR) एक दस्तावेज़ है जो किसी महत्वपूर्ण आर्किटेक्चर संबंधी निर्णय को उसके संदर्भ और परिणामों के साथ दर्ज करता है।

**आर्किटेक्चर निर्णय** (architecture decision, AD) सॉफ़्टवेयर डिज़ाइन का एक ऐसा चयन है जो किसी महत्वपूर्ण आवश्यकता को पूरा करता है।

**आर्किटेक्चर निर्णय लॉग** (architecture decision log, ADL) किसी विशेष परियोजना (या संगठन) के लिए बनाए और बनाए रखे गए सभी ADR का संग्रह है।

**आर्किटेक्चर की दृष्टि से महत्वपूर्ण आवश्यकता** (architecturally-significant requirement, ASR) वह आवश्यकता है जिसका किसी सॉफ़्टवेयर सिस्टम के आर्किटेक्चर पर मापने योग्य प्रभाव पड़ता है।

ये सभी **आर्किटेक्चर ज्ञान प्रबंधन** (architecture knowledge management, AKM) विषय के अंतर्गत आते हैं।

इस दस्तावेज़ का लक्ष्य ADR का त्वरित अवलोकन देना है: उन्हें कैसे बनाएँ, और अधिक जानकारी कहाँ मिलेगी।

संक्षिप्त रूप:

  * **AD**: आर्किटेक्चर निर्णय

  * **ADL**: आर्किटेक्चर निर्णय लॉग

  * **ADR**: आर्किटेक्चर निर्णय रिकॉर्ड

  * **AKM**: आर्किटेक्चर ज्ञान प्रबंधन

  * **ASR**: आर्किटेक्चर की दृष्टि से महत्वपूर्ण आवश्यकता

## ADR का उपयोग कैसे शुरू करें

ADR का उपयोग शुरू करने के लिए, अपने साथियों से इन क्षेत्रों पर बात करें।

निर्णय की पहचान:

  * AD कितना अत्यावश्यक और कितना महत्वपूर्ण है?

  * क्या इसे अभी लेना ज़रूरी है, या अधिक जानकारी मिलने तक प्रतीक्षा की जा सकती है?

  * निर्णय की पहचान में व्यक्तिगत और सामूहिक अनुभव, तथा मान्यता प्राप्त डिज़ाइन विधियाँ और प्रथाएँ सहायक हो सकती हैं।

  * आदर्श रूप से, उत्पाद की कार्य-सूची के पूरक के रूप में एक निर्णय कार्य-सूची रखें।

निर्णय लेना:

  * निर्णय लेने की कई तकनीकें मौजूद हैं, कुछ सामान्य और कुछ सॉफ़्टवेयर आर्किटेक्चर के लिए विशिष्ट, उदाहरण के लिए डायलॉग मैपिंग।

  * समूह में निर्णय लेना एक सक्रिय शोध विषय है।

निर्णय का क्रियान्वयन और प्रवर्तन:

  * AD का उपयोग सॉफ़्टवेयर डिज़ाइन में होता है; इसलिए उन्हें सिस्टम के उन हितधारकों तक पहुँचाना और उनसे स्वीकृत करवाना ज़रूरी है जो उसके लिए धन देते हैं, उसे विकसित करते हैं और चलाते हैं।

  * आर्किटेक्चर की दृष्टि से स्पष्ट कोडिंग शैलियाँ, और आर्किटेक्चर संबंधी चिंताओं व निर्णयों पर केंद्रित कोड समीक्षाएँ, दो संबंधित प्रथाएँ हैं।

  * सॉफ़्टवेयर के विकास के दौरान किसी सॉफ़्टवेयर सिस्टम का आधुनिकीकरण करते समय भी AD पर (पुनः) विचार करना आवश्यक है।

निर्णय साझा करना (वैकल्पिक):

  * कई AD विभिन्न परियोजनाओं में दोहराए जाते हैं।

  * इसलिए, जब स्पष्ट ज्ञान प्रबंधन रणनीति अपनाई जाती है, तब पिछले निर्णयों के अनुभव, अच्छे और बुरे दोनों, मूल्यवान पुन: उपयोग योग्य संपत्ति बन सकते हैं।

निर्णय का दस्तावेज़ीकरण:

  * निर्णय दर्ज करने के लिए कई टेम्पलेट और उपकरण मौजूद हैं।

  * एजाइल समुदायों को देखें, जैसे M. Nygard के ADR।

  * पारंपरिक सॉफ़्टवेयर इंजीनियरिंग और आर्किटेक्चर डिज़ाइन प्रक्रियाओं को देखें, जैसे IBM UMF और CapitalOne के Tyree और Akerman द्वारा सुझाए गए तालिका प्रारूप।

अधिक जानकारी के लिए:

  * ऊपर के चरण विकिपीडिया की प्रविष्टि [Architectural Decision](https://en.wikipedia.org/wiki/Architectural_decision) से लिए गए हैं

## उपकरणों के साथ ADR का उपयोग कैसे शुरू करें

- [MySpec](https://myspec.dev) — स्वचालित विनिर्देश और आर्किटेक्चर निर्णय प्लेटफ़ॉर्म, जो प्रोजेक्ट के संविधान, तकनीकी आर्किटेक्चर और ADR को स्वच्छ Markdown में संरचित करता है, जिसे MCP के माध्यम से परोसा जाता है।

आप जिस भी तरीके से चाहें, उपकरणों के साथ ADR का उपयोग शुरू कर सकते हैं।

उदाहरण के लिए:

  * यदि आपको Google Drive और ऑनलाइन संपादन पसंद है, तो आप एक Google Doc या Google Sheet बना सकते हैं।

  * यदि आपको git जैसे स्रोत कोड संस्करण नियंत्रण का उपयोग पसंद है, तो आप प्रत्येक ADR के लिए एक फ़ाइल बना सकते हैं।

  * यदि आपको Atlassian Jira जैसे परियोजना नियोजन उपकरणों का उपयोग पसंद है, तो आप उस उपकरण के नियोजन ट्रैकर का उपयोग कर सकते हैं।

  * यदि आपको MediaWiki जैसे विकी पसंद हैं, तो आप एक ADR विकी बना सकते हैं।

## git के साथ ADR का उपयोग कैसे शुरू करें

यदि आप git संस्करण नियंत्रण का उपयोग करना पसंद करते हैं, तो स्रोत कोड वाली किसी सामान्य सॉफ़्टवेयर परियोजना के लिए git के साथ ADR का उपयोग शुरू करने का हमारा पसंदीदा तरीका यह है।

ADR फ़ाइलों के लिए एक डायरेक्टरी बनाएँ:

```sh
$ mkdir adr
```

प्रत्येक ADR के लिए एक टेक्स्ट फ़ाइल बनाएँ, जैसे `database.txt`:

```sh
$ vi database.txt
```

ADR में जो चाहें लिखें। विचारों के लिए इस रिपॉज़िटरी के टेम्पलेट देखें।

ADR को अपने git रिपॉज़िटरी में कमिट करें।

## ADR के लिए Claude Code स्किल

यह रिपॉज़िटरी [`skills/`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/) के अंतर्गत दो [Claude Code](https://claude.com/claude-code) स्किल देती है, ताकि कोई AI कोडिंग एजेंट इस प्रोजेक्ट की अनुशंसा के अनुसार ADR लिख और बनाए रख सके:

- [`architecture-decision-record-skill`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/architecture-decision-record-skill/) — सामान्य उपयोग के लिए, किसी भी प्रोजेक्ट में ADR लिखने वाले हर व्यक्ति के लिए। यह तय करने में मदद करती है कि किसी निर्णय को ADR चाहिए या नहीं, `adr/` या `decisions/` डायरेक्टरी बनाती है, फ़ाइल का नाम रखती है, साथ आने वाले ग्यारह ढाँचों में से एक टेम्पलेट चुनती है, और संदर्भ/निर्णय/परिणाम के ठोस खंड लिखती है।

- [`architecture-decision-record-maintainer-skill`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/architecture-decision-record-maintainer-skill/) — विशेष रूप से इस रिपॉज़िटरी के अनुरक्षकों के लिए। यह रिपॉज़िटरी की संरचना, README/locales को समान रखने की परिपाटी और नया टेम्पलेट, उदाहरण या टूल लिंक जोड़ने के सटीक चरण दर्ज करती है।

किसी स्किल का उपयोग करने के लिए उसका फ़ोल्डर उस रिपॉज़िटरी के रूट में `.claude/skills/` में कॉपी करें जिस पर आप काम कर रहे हैं (या हर प्रोजेक्ट में उपलब्ध कराने के लिए `~/.claude/skills/` में), फिर Claude Code से ADR लिखने या समीक्षा करने को कहें।

## फ़ाइल नामकरण परिपाटी

यदि आप सामान्य टेक्स्ट फ़ाइलों में अपने ADR बनाना चुनते हैं, तो हो सकता है कि आप अपनी ADR फ़ाइल नामकरण परिपाटी तय करना चाहें।

हम एक निश्चित प्रारूप वाली फ़ाइल नामकरण परिपाटी को प्राथमिकता देते हैं।

उदाहरण:

  * choose-database.md

  * format-timestamps.md

  * manage-passwords.md

  * handle-exceptions.md

हमारी फ़ाइल नामकरण परिपाटी:

  * नाम में वर्तमान काल का आज्ञार्थक क्रिया-पद होता है। इससे पठनीयता बढ़ती है और यह हमारे कमिट संदेश के प्रारूप से मेल खाता है।

  * नाम में छोटे अक्षर और डैश (हाइफ़न) का उपयोग होता है (इस रिपॉज़िटरी की तरह)। यह पठनीयता और सिस्टम की उपयोगिता के बीच संतुलन है।

  * एक्सटेंशन markdown है। इससे आसान फ़ॉर्मैटिंग में सहायता मिल सकती है।

## अच्छे ADR लिखने के सुझाव

एक अच्छे ADR की विशेषताएँ:

* तर्क (Rationale): किसी विशेष AD को करने के कारण समझाएँ। इसमें संदर्भ (नीचे देखें), विभिन्न संभावित विकल्पों के लाभ और हानियाँ, सुविधाओं की तुलना, लागत/लाभ की चर्चा, और बहुत कुछ शामिल हो सकता है।

* विशिष्ट (Specific): प्रत्येक ADR एक ही AD के बारे में होना चाहिए, अनेक AD के बारे में नहीं।

* टाइमस्टैम्प (Timestamps): बताएँ कि ADR का प्रत्येक अंश कब लिखा गया। यह उन पहलुओं के लिए विशेष रूप से महत्वपूर्ण है जो समय के साथ बदल सकते हैं, जैसे लागत, समय-सारणी, स्केलिंग आदि।

* अपरिवर्तनीय (Immutable): ADR में मौजूद जानकारी को न बदलें। इसके बजाय, नई जानकारी जोड़कर ADR में संशोधन करें, या नया ADR बनाकर पुराने ADR को प्रतिस्थापित करें।

ADR के एक अच्छे "संदर्भ" (Context) खंड की विशेषताएँ:

* अपने संगठन की स्थिति और व्यावसायिक प्राथमिकताएँ समझाएँ।

* अपनी टीमों की सामाजिक और कौशल संरचना पर आधारित तर्क और विचार शामिल करें।

* प्रासंगिक लाभ और हानियाँ शामिल करें, और उन्हें ऐसे शब्दों में बताएँ जो आपकी आवश्यकताओं और लक्ष्यों से मेल खाते हों।

ADR के एक अच्छे "परिणाम" (Consequences) खंड की विशेषताएँ:

* समझाएँ कि निर्णय लेने से क्या-क्या होगा। इसमें प्रभाव, नतीजे, उत्पाद, आगे की कार्रवाई और बहुत कुछ शामिल हो सकता है।

* किसी भी आगामी ADR की जानकारी शामिल करें। एक ADR के कारण और ADR की आवश्यकता पड़ना आम बात है, जैसे जब एक ADR कोई बड़ा व्यापक चयन करता है, जिससे आगे अनेक छोटे निर्णयों की आवश्यकता बनती है।

* कार्रवाई के बाद की किसी भी समीक्षा प्रक्रिया को शामिल करें। टीमों के लिए प्रत्येक ADR की एक माह बाद समीक्षा करना आम बात है, ताकि ADR की जानकारी की तुलना वास्तविक व्यवहार में जो हुआ उससे की जा सके, और सीखा तथा आगे बढ़ा जा सके।

नया ADR पिछले ADR का स्थान ले सकता है:

* जब कोई AD किसी पिछले ADR को प्रतिस्थापित या अमान्य करता है, तब एक नया ADR बनाया जाना चाहिए

## ADR उदाहरण टेम्पलेट

वे ADR उदाहरण टेम्पलेट जो हमने इंटरनेट से एकत्र किए हैं:

- [Michael Nygard का ADR टेम्पलेट](टेम्पलेट/माइकल-नाइगार्ड-द्वारा-निर्णय-रिकॉर्ड-टेम्पलेट/) (सरल और लोकप्रिय)

- [Jeff Tyree और Art Akerman का ADR टेम्पलेट](टेम्पलेट/जेफ-टाइरी-और-आर्ट-अकरमैन-द्वारा-निर्णय-रिकॉर्ड-टेम्पलेट/) (अधिक परिष्कृत)

- [Alexandrian पैटर्न के लिए ADR टेम्पलेट](टेम्पलेट/अलेक्ज़ेंड्रियन-पैटर्न-के-लिए-निर्णय-रिकॉर्ड-टेम्पलेट/) (संदर्भ के ब्योरे के साथ सरल)

- [व्यावसायिक प्रकरण के लिए ADR टेम्पलेट](टेम्पलेट/व्यावसायिक-मामले-के-लिए-निर्णय-रिकॉर्ड-टेम्पलेट/) (अधिक MBA-उन्मुख, लागत, SWOT और अधिक मतों के साथ)

- [Markdown Any Decision Records (MADR) प्रोजेक्ट का ADR टेम्पलेट](टेम्पलेट/madr-परियोजना-का-निर्णय-रिकॉर्ड-टेम्पलेट/) (सरल और विस्तृत दोनों संस्करण; बाद वाला विकल्पों और उनके लाभ-हानि पर ज़ोर देता है)

- [Planguage का उपयोग करने वाला ADR टेम्पलेट](टेम्पलेट/planguage-का-उपयोग-करके-निर्णय-रिकॉर्ड-टेम्पलेट/) (गुणवत्ता आश्वासन की ओर अधिक उन्मुख)

- [Ignacio Larrañaga का महत्वपूर्ण तकनीकी निर्णयों (ITD) का टेम्पलेट](टेम्पलेट/महत्वपूर्ण-तकनीकी-निर्णयों-के-लिए-निर्णय-रिकॉर्ड-टेम्पलेट/) (संक्षिप्त और निर्णय-प्रथम, तेज़ कार्यकारी समीक्षा के लिए अनुकूलित)

## ADR के लिए टीमवर्क सलाह

यदि आप अपनी टीम के साथ निर्णय रिकॉर्ड का उपयोग करने पर विचार कर रहे हैं, तो कई टीमों के साथ काम करके हमने जो सलाह सीखी है, वह यह है।

आपके पास अपने साथियों का नेतृत्व करने का अवसर है, "क्या करना है" को अनिवार्य करने के बजाय मिलकर "क्यों" पर बात करके। उदाहरण के लिए, निर्णय रिकॉर्ड टीमों के लिए अधिक समझदारी से सोचने और बेहतर संवाद करने का एक तरीका हैं; यदि वे केवल काम के बाद थोपी गई कागज़ी औपचारिकता हैं, तो निर्णय रिकॉर्ड का कोई मूल्य नहीं है।

कुछ टीमें संक्षिप्त नाम "ADR" की तुलना में "निर्णय" (decisions) नाम को कहीं अधिक पसंद करती हैं। जब कुछ टीमें डायरेक्टरी का नाम "decisions" रखती हैं, तो ऐसा लगता है मानो बत्ती जल गई हो, और टीम उस डायरेक्टरी में अधिक जानकारी डालने लगती है, जैसे विक्रेता निर्णय, नियोजन निर्णय, समय-निर्धारण निर्णय आदि। इन सभी प्रकार की जानकारी के लिए एक ही टेम्पलेट इस्तेमाल हो सकता है। हमारी परिकल्पना है कि लोग संक्षिप्त नामों ("ADR") की तुलना में शब्दों ("निर्णय") से तेज़ सीखते हैं, "रिकॉर्ड" शब्द हटाने पर लोग चालू कार्य के दस्तावेज़ लिखने के लिए अधिक प्रेरित होते हैं, और कुछ डेवलपरों और कुछ प्रबंधकों को "आर्किटेक्चर" शब्द भी पसंद नहीं आता।

सिद्धांत में, अपरिवर्तनीयता आदर्श है। व्यवहार में, हमारी टीमों के लिए परिवर्तनशीलता बेहतर रही है। हम नई जानकारी को मौजूदा ADR में तिथि-मुहर और इस टिप्पणी के साथ जोड़ते हैं कि जानकारी निर्णय के बाद आई। इस तरह का दृष्टिकोण एक "जीवंत दस्तावेज़" बनाता है जिसे हम सभी अद्यतन कर सकते हैं। सामान्य अद्यतन तब होते हैं जब हमें नए साथियों, नई पेशकशों, या हमारे उपयोग के वास्तविक परिणामों के कारण जानकारी मिलती है, या बाद में तीसरे पक्ष के परिवर्तन होते हैं, जैसे विक्रेता की क्षमताएँ, मूल्य योजनाएँ, लाइसेंस समझौते आदि।

## ADR के लिए टीमवर्क प्रश्न

### ADR कौन बना सकता है?

विशिष्ट व्यक्तियों, विशिष्ट भूमिकाओं, विशिष्ट टीमों या विशिष्ट विभागों जैसे क्षेत्रों पर विचार करें; यह भी विचार करें कि क्या ऐसे व्यक्ति, भूमिकाएँ, टीमें या विभाग हैं जो ADR को कमीशन कर सकते हैं, यानी वे उसकी माँग करें और कोई और उसे लिखे।

उदाहरण उत्तर: हमारे संगठन का कोई भी व्यक्ति जिसने आर्किटेक्चर निर्णय रिकॉर्ड का README पृष्ठ पढ़ा है, ADR प्रस्तावित कर सकता है, यानी वह व्यक्ति उसे लिखना शुरू कर सकता है और टीम के साथ साझा कर सकता है।

### ADR बनाने का औचित्य क्या है?

अपने संगठन की टीम के कार्य करने के तरीकों, अपने सॉफ़्टवेयर सिस्टम की संरचना, टीमों के बीच समन्वय, दीर्घकालिक रखरखाव, बाहरी इंटरफ़ेस, आप किसे लाभ पहुँचाना चाहते हैं, और इसी तरह के क्षेत्रों पर विचार करें।

उदाहरण उत्तर: हम तब ADR बनाना चाहते हैं जब हम चाहते हैं कि भविष्य के डेवलपर समझें कि हम जो कर रहे हैं उसका "क्यों" क्या है।

### ADR न बनाने का औचित्य क्या है?

ऐसे क्षेत्रों पर विचार करें जैसे वे निर्णय जो आर्किटेक्चर के बारे में नहीं हैं, या छोटे हैं जैसे न्यूनतम जोखिम वाले या स्वतंत्र या एकल-डेवलपर वाले, या जो पहले से कहीं और पूरी तरह शामिल हैं जैसे मानकों, नीतियों या दस्तावेज़ीकरण में, या जो अस्थायी हैं जैसे अस्थायी समाधान, अवधारणा के प्रमाण या प्रयोग।

उदाहरण उत्तर: जब कोई निर्णय दायरे, समय, जोखिम और लागत में सीमित हो, या पहले से कहीं और शामिल हो, तब हम ADR छोड़ना चाहते हैं।

### ADR का जीवन-चक्र क्या है?

निर्माण प्रक्रिया, शोध प्रक्रिया, निर्णय प्रक्रिया, क्रियान्वयन प्रक्रिया और समापन प्रक्रिया जैसे क्षेत्रों पर विचार करें। विचार करें कि समय के साथ ADR के जीवन-चक्र को कैसे ट्रैक करें, जैसे ADR को एक अवस्था से अगली अवस्था में कैसे ले जाएँ, और इसे हितधारकों तक कैसे पहुँचाएँ।

उदाहरण उत्तर: हम चाहते हैं कि ADR के जीवन-चक्र के पाँच चरण हों: आरंभ → शोध → मूल्यांकन → क्रियान्वयन → रखरखाव → समापन।

### ADR के जीवन-चक्र चरणों के मानदंड क्या हैं?

ADR के स्वीकृति मानदंड जैसे क्षेत्रों पर विचार करें, यानी आप कैसे जानेंगे कि वह एक जीवन-चक्र चरण से अगले में बढ़ने के लिए पर्याप्त अच्छा है? क्या समस्या स्पष्ट रूप से बताई गई है? क्या विकल्पों पर विचार किया गया है? क्या समझौतों (trade-offs) को पर्याप्त रूप से समझा और दर्ज किया गया है? क्या सभी प्रासंगिक संदर्भ मौजूद हैं? क्या सभी प्रासंगिक हितधारक शामिल हैं? क्या सारी प्रतिक्रिया शामिल कर ली गई है?

उदाहरण उत्तर: हम चाहते हैं कि ADR पर हितधारक तब मतदान करें जब सक्रिय टीम ने 1) अपना शोध पूरा कर लिया हो, 2) अपना मूल्यांकन पूरा कर लिया हो, 3) ADR प्रस्ताव को टिप्पणियों के अनुरोध और एक सप्ताह की समय-सीमा के साथ हितधारकों के सामने प्रकाशित कर दिया हो, 4) सभी हितधारकों की टिप्पणियाँ शामिल और संबोधित कर ली गई हों।

### कौन-सी भूमिकाएँ और ज़िम्मेदारियाँ ADR से जुड़ी हैं?

प्रस्तावक, शोधकर्ता, मूल्यांकनकर्ता, समीक्षक, अनुमोदक, रखरखावकर्ता जैसी भूमिकाओं पर विचार करें। हितधारकों से संवाद, अपेक्षाओं की पूर्ति सुनिश्चित करना, वेबसाइट या इंट्रानेट पर साझा करना, और काम की समय-समय पर, विशेष रूप से प्रासंगिक परिवर्तन होने पर, समीक्षा करना जैसी ज़िम्मेदारियों पर विचार करें।

उदाहरण उत्तर: हम चाहते हैं कि प्रत्येक ADR का हमेशा एक प्राथमिक संपर्क व्यक्ति, एक द्वितीयक संपर्क व्यक्ति और एक जवाबदेह टीम हो; ये संवाद, प्रकाशन, रखरखाव, कम से कम वर्ष में एक बार नियमित समीक्षा, और आवश्यकतानुसार अंततः समापन के लिए ज़िम्मेदार हैं।

### शासन ADR से कैसे जुड़ता है?

अपने संगठन के कार्य करने के तरीकों, किसी विशेष अनुपालन आवश्यकता (जैसे कानूनी पहलू या मानव संसाधन पहलू), और आम सहमति बनाम संघर्ष बनाम वृद्धि (escalation) को आप कैसे संभालना चाहते हैं, जैसे क्षेत्रों पर विचार करें। क्या ADR के संबंध में कुछ क्षेत्र या व्यक्ति या टीमें दूसरों से अधिक प्रभाव रख सकती हैं, जैसे उसे स्वीकृत करने, उस पर मतदान करने या उसे वीटो करने में सक्षम होना?

उदाहरण उत्तर: ADR का शासन इस प्राथमिकता क्रम में है: CEO, CTO, CLO, ADR को लागू करने वाली टीम, टीम के वे विशेषज्ञ जो ADD के बारे में सबसे अधिक जानकार हैं। ADR में वर्णित होने तक किसी और के पास शासन का अधिकार नहीं है।

### कौन-से सिद्धांत ADR से जुड़ते हैं?

अपने संगठन के कार्य करने के उन तरीकों पर विचार करें जिनमें तेज़ी से बनाम धीरे चलना, निर्णय पर आम सहमति बनाम निर्णय पर संघर्ष, जोखिम की प्राथमिकताएँ बनाम सुरक्षा की प्राथमिकताएँ, सार्वजनिक चर्चा बनाम निजी चर्चा आदि शामिल हैं।

उदाहरण उत्तर: हम इन नेतृत्व सिद्धांतों का उपयोग करते हैं: कार्रवाई की ओर झुकाव, असहमत हों पर प्रतिबद्ध रहें (disagree-and-commit), आसानी से पलटे जा सकने वाले और आसानी से अलग किए जा सकने वाले निर्णयों के लिए 70% अनुमान काफ़ी अच्छे हैं, और सार्वजनिक कार्य-पद्धति, सिवाय गोपनीय जानकारी के जैसा कि हमारे संगठन के गोपनीयता समझौते में वर्णित है।

## ADR के लिए अगले चरण की अवधारणाएँ

[Arc42](https://arc42.org/) दो प्रश्नों का व्यावहारिक उत्तर देता है और आपकी विशिष्ट आवश्यकताओं के अनुसार ढाला जा सकता है। आपको अपने आर्किटेक्चर के बारे में क्या दस्तावेज़ित/संप्रेषित करना चाहिए? कैसे दस्तावेज़ित/संप्रेषित करना चाहिए? Arc42 में आर्किटेक्चर निर्णय रिकॉर्ड के साथ लक्ष्यों, बाधाओं, संदर्भों, गुणवत्ता, जोखिमों और अन्य विषयों पर मार्गदर्शन शामिल है।

[C4 मॉडल](https://c4model.com/) सॉफ़्टवेयर आर्किटेक्चर के आरेख बनाने का आसानी से सीखा जा सकने वाला, डेवलपर-अनुकूल तरीका है। C4 संदर्भ, कंटेनर, कंपोनेंट और कोड के क्रमबद्ध आरेखों का समूह है, साथ ही सिस्टम परिदृश्य, गतिकी और परिनियोजन के सहायक आरेख भी।

## आर्किटेक्चर आरेख, दृश्य और दृष्टिकोण

आर्किटेक्चर आरेख को "आर्किटेक्चर दृश्य" कहा जाता है।

"आर्किटेक्चर दृश्य" किसी "आर्किटेक्चर दृष्टिकोण" का एक उदाहरण है।

किसी "आर्किटेक्चर दृष्टिकोण" में विशिष्ट चिंताओं वाले एक विशिष्ट श्रोता वर्ग को ध्यान में रखा जाता है।

आर्किटेक्चर दृष्टिकोण, दृश्य और आरेख के उदाहरण:

- व्यावसायिक क्षमताएँ

- उच्च-स्तरीय व्यावसायिक प्रक्रियाएँ

- [वैल्यू स्ट्रीम](https://en.wikipedia.org/wiki/Value_stream)

- एप्लिकेशन कंपोनेंट से जुड़े सॉफ़्टवेयर फ़ंक्शन

- [C4 Model](https://en.wikipedia.org/wiki/C4_model) संदर्भ आरेख (TO-BE / AS-IS)

- [C4 Model](https://en.wikipedia.org/wiki/C4_model) कंटेनर आरेख (TO-BE / AS-IS)

- [एंटिटी-रिलेशनशिप आरेख](https://en.wikipedia.org/w/index.php?title=Entity_relationship_diagram) (ERD) डेटा एंटिटी को एप्लिकेशन कंपोनेंट से जोड़ने के लिए

- [सीक्वेंस आरेख](https://en.wikipedia.org/wiki/Sequence_diagram) सिस्टम के भीतर और इंटीग्रेशन के कार्यात्मक प्रवाह का वर्णन करने के लिए

- [बिज़नेस प्रोसेस मॉडल एंड नोटेशन](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN) एप्लिकेशन कंपोनेंट में डेटा प्रवाह का वर्णन करने वाले आरेख

- [बिज़नेस प्रोसेस मॉडल एंड नोटेशन](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN) व्यावसायिक प्रक्रियाओं / उपयोगकर्ता परिदृश्यों का वर्णन करने वाले आरेख

- [आइडेंटिटी एंड एक्सेस मैनेजमेंट](https://en.wikipedia.org/wiki/Identity_and_access_management) (IAM) आरेख

- [रोल-बेस्ड एक्सेस कंट्रोल](https://en.wikipedia.org/wiki/Role-based_access_control) (RBAC) प्रति एप्लिकेशन कंपोनेंट भूमिकाओं वाले आरेख

- [एट्रिब्यूट-बेस्ड एक्सेस कंट्रोल](https://en.wikipedia.org/wiki/Attribute-based_access_control) (ABAC) प्रति एप्लिकेशन कंपोनेंट एट्रिब्यूट वाले आरेख

- गोपनीयता आरेख

संबंधित आरेख:

- यूज़ केस आरेख प्रबंधन/ग्राहकों को उपयोग-परिदृश्य दिखाता है, जो आवश्यकताओं से पहले आते हैं, और आवश्यकताएँ सॉफ़्टवेयर आर्किटेक्चर से पहले आती हैं।

- डिप्लॉयमेंट आरेख वह भौतिक हार्डवेयर/कंप्यूटर दिखाता है जिन पर सॉफ़्टवेयर कंपोनेंट परिनियोजित होते हैं।
- डेटा फ़्लो आरेख दिखाता है कि डेटा सिस्टम में कैसे चलता और रूपांतरित होता है।
- सीक्वेंस आरेख का उपयोग समय अक्ष पर यह दिखाने के लिए होता है कि HTTP जैसे प्रोटोकॉल कैसे काम करते हैं।

- एक्टिविटी आरेख किसी सॉफ़्टवेयर सिस्टम द्वारा की जाने वाली गतिविधियों का कार्यप्रवाह दर्शाता है, जैसे NPC AI।

## कोड के रूप में निर्णयों के लिए फ़िटनेस फ़ंक्शन

फ़िटनेस फ़ंक्शन (fitness function) प्रोग्रामिंग कोड से लिखी गई वस्तुनिष्ठ स्वचालित जाँचें हैं, जो सत्यापित करती हैं कि निर्णयों का पालन हो रहा है।

- फ़िटनेस फ़ंक्शन निर्णयों को परीक्षण योग्य और सुनिश्चित करने योग्य बनाते हैं।

- निर्णयों के लिए फ़िटनेस फ़ंक्शन गुणवत्ता आश्वासन, नियामक प्रक्रियाओं और शासन के लक्ष्यों में बहुत सहायक हो सकते हैं।

### फ़िटनेस फ़ंक्शन निर्णयों से कैसे जुड़ते हैं

निर्णय रिकॉर्ड निर्णय को दर्ज करता है, जबकि फ़िटनेस फ़ंक्शन निर्णय को सुनिश्चित करता है।

- उदाहरण निर्णय: हम ऑडिट आवश्यकताओं के लिए इवेंट सोर्सिंग का उपयोग करते हैं।

- उदाहरण फ़िटनेस फ़ंक्शन: हम कंटीन्युअस इंटीग्रेशन सर्वर का उपयोग यह परखने के लिए करते हैं कि सभी स्थिति परिवर्तनों से इवेंट उत्पन्न होना अनिवार्य है।

### फ़िटनेस फ़ंक्शन निर्णयों में क्यों सहायक हैं

वस्तुनिष्ठ माप: फ़िटनेस फ़ंक्शन पास या फ़ेल होते हैं, इसलिए कार्य दिखाई देता है और स्पष्ट रहता है।

निरंतर उपयोग: फ़िटनेस फ़ंक्शन आपके जीवंत नियम हैं, जो हर कमिट और बिल्ड पर चलते हैं।

रीफ़ैक्टर करने का आत्मविश्वास: फ़िटनेस फ़ंक्शन निर्णय के नियमों की त्रुटियाँ अपने-आप पकड़ लेते हैं।

विस्तार योग्य शासन: फ़िटनेस फ़ंक्शन बाधाएँ खड़ी किए बिना मानकों को सुनिश्चित करते हैं।

### क्या फ़िटनेस फ़ंक्शन AI का उपयोग कर सकते हैं?

फ़िटनेस फ़ंक्शन आपके कार्य, जैसे योजनाओं, कोड, स्कीमा, API आदि के बारे में प्रश्न पूछकर निर्णयों के लिए AI LLM का लाभ उठा सकते हैं:

```txt
IMPORTANT: Prefer retrieval-led reasoning over pre-training-led reasoning.
IMPORTANT: Turn on extended thinking. Turn on expert advice. Turn on search.

This is a fitness function to evaluate if our work is
using all our decisions, and is correct and accurate.

- Our decisions are here: {url}
- Our work to evaluate is here: {url}

Explain any errors, problems, gaps, weaknesses. Be direct. Be decisive.
```

### आर्किटेक्चर यूनिट परीक्षण

[ArchUnit](https://www.archunit.org/): किसी भी सामान्य Java यूनिट परीक्षण फ़्रेमवर्क का उपयोग करके Java कोड के आर्किटेक्चर नियमों की जाँच करें।

[ArchUnitTS](https://github.com/LukasNiessen/ArchUnitTS): Jest, Vitest, Jasmine आदि का उपयोग करके TypeScript कोड और JavaScript कोड के आर्किटेक्चर नियमों की जाँच करें।

## पुल रिक्वेस्ट के लिए निर्णय गार्डरेल

[Decision Guardian](https://github.com/DecispherHQ/decision-guardian)
सही समय पर सही निर्णय रिकॉर्ड अपने-आप सामने लाता है, यानी तब जब कोई
डेवलपर उस कोड को सक्रिय रूप से बदल रहा हो जिसे वे निर्णय कवर करते हैं। मर्ज करने से पहले डेवलपर
दस्तावेज़ फ़ोल्डर पढ़ लेंगे, ऐसी उम्मीद के बजाय प्रासंगिक संदर्भ सीधे पुल रिक्वेस्ट पर दिखाई देता है।

यह हर प्रकार के निर्णय रिकॉर्ड के लिए काम करता है: आर्किटेक्चर निर्णय, डेटा निर्णय, अनुपालन निर्णय, नैदानिक और चिकित्सा निर्णय, सुरक्षा निर्णय और अन्य।

किसी भी CI सिस्टम (GitLab, Jenkins, CircleCI) के साथ और pre-commit हुक के रूप में काम करता है।
ओपन सोर्स। MIT लाइसेंस।

[ADR Guard](https://github.com/chohan-sarmad-ali/delivery-gates) एक GitHub
एक्शन है जो तब पुल रिक्वेस्ट को विफल कर देता है जब निगरानी वाले कोड पथ बिना किसी आर्किटेक्चर निर्णय रिकॉर्ड के जोड़े या अद्यतन किए बदल जाते हैं। छूट स्पष्ट होती है: कारण सहित एक
`ADR-Exempt:` पंक्ति गेट पार करा देती है और जॉब सारांश में लिखी जाती है। टेम्पलेट-निरपेक्ष, कोई निर्भरता नहीं। ओपन सोर्स। MIT लाइसेंस।

## अधिक जानकारी के लिए

परिचय:

- [Architectural decision (wikipedia.org)](https://wikipedia.org/wiki/Architectural_decision)

- [Architecturally significant requirements (wikipedia.org)](https://wikipedia.org/wiki/Architecturally_significant_requirements)

टेम्पलेट:

- [Documenting architecture decisions - Michael Nygard (thinkrelevance.com)](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)

- [Markdown Architectural Decision Records (adr.github.io)](https://adr.github.io/madr/)

- [Template for documenting architecture alternatives and decisions (stackoverflow.com)](http://stackoverflow.com/questions/7104735/template-for-documenting-architecture-alternatives-and-decisions)

गहन अध्ययन:

- [ADMentor XML project (github.com)](https://github.com/IFS-HSR/ADMentor)

- [Architectural Decision Guidance across Projects: Problem Space Modeling, Decision Backlog Management and Cloud Computing Knowledge (ifs.hsr.ch)](https://www.ifs.hsr.ch/fileadmin/user_upload/customers/ifs.hsr.ch/Home/projekte/ADMentor-WICSA2015ubmissionv11nc.pdf)

- [The Decision View's Role in Software Architecture Practice (computer.org)](https://www.computer.org/csdl/mags/so/2009/02/mso2009020036-abs.html)

- [Documenting Software Architectures: Views and Beyond (resources.sei.cmu.edu)](http://resources.sei.cmu.edu/library/asset-view.cfm?assetID=30386)

- [Architecture Decisions: Demystifying Architecture (utdallas.edu)](https://www.utdallas.edu/~chung/SA/zz-Impreso-architecture_decisions-tyree-05.pdf)

- [ThoughtWorks Technology Radar: Lightweight Architecture Decision Records (thoughtworks.com)](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)

- [A Skeptic’s Guide to Software Architecture Decisions (infoq.com)](https://www.infoq.com/articles/architecture-skeptics-guide/)

- [Architectural Decisions — The Making Of](https://ozimmer.ch/practices/2020/04/27/ArchitectureDecisionMaking.html)

- [Architectural Retrospectives: the Key to Getting Better at Architecting](https://www.infoq.com/articles/architectural-retrospectives/)

- [Software Architecture Monday with Mark Richards](https://developertoarchitect.com/lessons/) - निःशुल्क मासिक सॉफ़्टवेयर आर्किटेक्चर पाठ

- [Solution Architecture Decisions - By Gareth Morgan](https://www.linkedin.com/pulse/solution-architecture-decisions-gareth-morgan-0r5xe/)

- ["Keep the Why: Code Becomes Legacy When Nobody Remembers Why"](https://blog.technopathy.club/keep-the-why-code-becomes-legacy-when-nobody-remembers-why)

टूल:

- [Command-line tools for working with Architecture Decision Records](https://github.com/npryce/adr-tools)

- [Command line tools with python - by Victor Sluiter](https://bitbucket.org/tinkerer_/adr-tools-python/src/master/)

- [Architectural Design Decision Support Framework (ADvISE)](https://swa.univie.ac.at/Software_Architecture/research-projects/architectural-design-decision-support-framework-advise/)

- [Decision Guardian](https://github.com/DecispherHQ/decision-guardian)

- [Mneme HQ - ADR enforcement for AI coding agents](https://github.com/TheoV823/mneme)

- [Keep the Why - a repo-native convention and agent skill that continuously captures, or retrospectively recovers, the reasoning behind a codebase](https://github.com/oliver-zehentleitner/keep-the-why)

- [ADR Guard - GitHub Action that fails a pull request changing watched code without an architecture decision record](https://github.com/chohan-sarmad-ali/delivery-gates)

- [kgai - append-only decision log for AI coding agents, a machine-readable companion to ADR files](https://github.com/kgaidev/kgai)

कंपनी-विशिष्ट मार्गदर्शन:

- [Amazon: AWS Prescriptive Guidance: ADR Process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)

- [GitHub: ADR GitHub organization](https://adr.github.io/)

- [RedHat: Why you should use ADRs](https://www.redhat.com/architect/architecture-decision-records)

उदाहरण:

- [Repository of Architecture Decision Records made for the Arachne Framework](https://github.com/arachne-framework/architecture)

वीडियो:

- [An introduction to arc42 with Savvas Kleanthous](https://www.youtube.com/watch?v=V5clR8c6D7o)

- [The C4 model for visualising software architecture - by Simon Brown](https://www.youtube.com/watch?v=KvoBrUd1-5E)

पॉडकास्ट:

- [Software Architecture Bookclub Podcast](https://www.developertoarchitect.com/bookclub-podcast.html)

पुस्तकें:

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

यह भी देखें:

- REMAP (Representation and Maintenance of Process Knowledge)

- DRL (Decision Representation Language)

- IBIS (Issue-Based Information System)

- QOC (Questions, Options, and Criteria)

- IBM’s e-Business Reference Architecture Framework

- [Decision Reasoning Format (DRF)](https://github.com/reasoning-formats/reasoning-formats) - स्पष्ट तर्क, मान्यताओं, संज्ञानात्मक स्थिति और समझौतों के साथ निर्णयों को दर्शाने के लिए विक्रेता-निरपेक्ष, मशीन-पठनीय YAML/JSON प्रारूप। निर्णय दस्तावेज़ीकरण में संरचित, सत्यापन-योग्य तर्क जोड़कर ADR का पूरक बनता है।
