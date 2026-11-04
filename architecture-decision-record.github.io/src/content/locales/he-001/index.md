# רשומת החלטה ארכיטקטונית (ADR)

רשומת החלטה ארכיטקטונית (ADR) היא מסמך שלוכד החלטה ארכיטקטונית חשובה שהתקבלה, יחד עם ההקשר והתוצאות שלה.

> [!IMPORTANT]
> בדקו בעצמכם ביסודיות את המשאבים האלה לפני השימוש בהם במערכות קריטיות כלשהן.

תוכן העניינים:

- [מהי רשומת החלטה ארכיטקטונית?](#מהי-רשומת-החלטה-ארכיטקטונית)
- [איך להתחיל להשתמש ב-ADR](#איך-להתחיל-להשתמש-ב-adr)
- [איך להתחיל להשתמש ב-ADR עם כלים](#איך-להתחיל-להשתמש-ב-adr-עם-כלים)
- [איך להתחיל להשתמש ב-ADR עם git](#איך-להתחיל-להשתמש-ב-adr-עם-git)
- [כישורי Claude Code ל-ADR](#כישורי-claude-code-ל-adr)
- [מוסכמות שמות קבצים ל-ADR](#מוסכמות-שמות-קבצים-ל-adr)
- [הצעות לכתיבת ADR טובים](#הצעות-לכתיבת-adr-טובים)
- [תבניות לדוגמה ל-ADR](#תבניות-לדוגמה-ל-adr)
- [עצות לעבודת צוות ב-ADR](#עצות-לעבודת-צוות-ב-adr)
- [שאלות לעבודת צוות ב-ADR](#שאלות-לעבודת-צוות-ב-adr)
- [מושגי צעד הבא ל-ADR](#מושגי-צעד-הבא-ל-adr)
- [תרשימי ארכיטקטורה, מבטים ונקודות מבט](#תרשימי-ארכיטקטורה-מבטים-ונקודות-מבט)
- [פונקציות התאמה להחלטות כקוד](#פונקציות-התאמה-להחלטות-כקוד)
- [מעקות בטיחות להחלטות ב-pull requests](#מעקות-בטיחות-להחלטות-ב-pull-requests)
- [מידע נוסף](#מידע-נוסף)

תבניות:

- [תבנית רשומת החלטה של ג׳ף טיירי וארט אקרמן](תבניות/תבנית-רשומת-החלטה-של-גף-טיירי-וארט-אקרמן/)
- [תבנית רשומת החלטה של מייקל נייגארד](תבניות/תבנית-רשומת-החלטה-של-מייקל-נייגארד/)
- [תבנית רשומת החלטה של EdgeX](תבניות/תבנית-רשומת-החלטה-של-edgex/)
- [תבנית רשומת החלטה של arc42](תבניות/תבנית-רשומת-החלטה-של-arc42/)
- [תבנית רשומת החלטה לתבנית אלכסנדרית](תבניות/תבנית-רשומת-החלטה-לתבנית-אלכסנדרית/)
- [תבנית רשומת החלטה לתיק עסקי](תבניות/תבנית-רשומת-החלטה-לתיק-עסקי/)
- [תבנית רשומת החלטה של פרויקט MADR](תבניות/תבנית-רשומת-החלטה-של-פרויקט-madr/)
- [תבנית רשומת החלטה באמצעות Planguage](תבניות/תבנית-רשומת-החלטה-באמצעות-planguage/)
- [תבנית רשומת החלטה של Paulo Merson](https://github.com/pmerson/ADR-template)
- [תבנית רשומת החלטה של Olaf Zimmermann](https://medium.com/olzzio/y-statements-10eb07b5a177)
- [תבנית רשומת החלטה של גארת מורגן](תבניות/תבנית-רשומת-החלטה-של-גארת-מורגן/)
- [תבנית רשומת החלטה של GIG Cymru NHS Wales](תבניות/תבנית-רשומת-החלטה-של-gig-cymru-nhs-wales/)
- [תבנית רשומת החלטה להחלטות טכניות חשובות (ITD) של Ignacio Larrañaga](תבניות/תבנית-רשומת-החלטה-להחלטות-טכניות-חשובות/)

דוגמאות:

- [מסגרת CSS](דוגמאות/מסגרת-css/)
- [הגדרת משתני סביבה](דוגמאות/הגדרת-משתני-סביבה/)
- [מדדים, ניטור והתראות](דוגמאות/מדדים-ניטור-והתראות/)
- [Microsoft Azure DevOps](דוגמאות/microsoft-azure-devops/)
- [Monorepo לעומת multirepo](דוגמאות/monorepo-לעומת-multirepo/)
- [שפות תכנות](דוגמאות/שפות-תכנות/)
- [אחסון סודות](דוגמאות/אחסון-סודות/)
- [פורמט חותמת זמן](דוגמאות/פורמט-חותמת-זמן/)
- [עוד הרבה...](דוגמאות/)

## מהי רשומת החלטה ארכיטקטונית?

**רשומת החלטה ארכיטקטונית** (architecture decision record, ADR) היא מסמך שלוכד החלטה ארכיטקטונית חשובה שהתקבלה, יחד עם ההקשר והתוצאות שלה.

**החלטה ארכיטקטונית** (architecture decision, AD) היא בחירת עיצוב תוכנה שעונה על דרישה משמעותית.

**יומן החלטות ארכיטקטוניות** (architecture decision log, ADL) הוא אוסף כל ה-ADR שנוצרו ומתוחזקות עבור פרויקט (או ארגון) מסוים.

**דרישה בעלת משמעות ארכיטקטונית** (architecturally-significant requirement, ASR) היא דרישה בעלת השפעה מדידה על הארכיטקטורה של מערכת תוכנה.

כל אלה נמצאים בתחום **ניהול ידע ארכיטקטוני** (architecture knowledge management, AKM).

מטרת המסמך הזה היא לספק סקירה מהירה של ADR, איך ליצור אותן, ואיפה לחפש מידע נוסף.

קיצורים:

  * **AD**: החלטה ארכיטקטונית (architecture decision)

  * **ADL**: יומן החלטות ארכיטקטוניות (architecture decision log)

  * **ADR**: רשומת החלטה ארכיטקטונית (architecture decision record)

  * **AKM**: ניהול ידע ארכיטקטוני (architecture knowledge management)

  * **ASR**: דרישה בעלת משמעות ארכיטקטונית (architecturally-significant requirement)

## איך להתחיל להשתמש ב-ADR

כדי להתחיל להשתמש ב-ADR, שוחחו עם חברי הצוות שלכם על התחומים האלה.

זיהוי החלטות:

  * עד כמה ה-AD דחופה ועד כמה היא חשובה?

  * האם צריך לקבל אותה עכשיו, או שאפשר לחכות עד שיהיה ידוע יותר?

  * ניסיון אישי וקולקטיבי, וכן שיטות ונהלי עיצוב מוכרים, יכולים לסייע בזיהוי החלטות.

  * במצב אידיאלי, שמרו רשימת משימות החלטות שמשלימה את רשימת משימות המוצר.

קבלת החלטות:

  * קיימות טכניקות רבות לקבלת החלטות, כלליות וגם ייעודיות לארכיטקטורת תוכנה, למשל מיפוי דיאלוג (dialogue mapping).

  * קבלת החלטות קבוצתית היא נושא מחקר פעיל.

הפעלה ואכיפה של החלטות:

  * AD משמשות בעיצוב תוכנה; לכן יש להעביר אותן לבעלי העניין במערכת שמממנים, מפתחים ומפעילים אותה, והם צריכים לקבל אותן.

  * סגנונות קוד שהארכיטקטורה ניכרת בהם וסקירות קוד שמתמקדות בשיקולים והחלטות ארכיטקטוניים הם שני נוהגים קשורים.

  * יש גם לשקול מחדש AD בעת מודרניזציה של מערכת תוכנה במסגרת התפתחות התוכנה.

שיתוף החלטות (אופציונלי):

  * AD רבות חוזרות בפרויקטים שונים.

  * לכן ניסיון בהחלטות קודמות, טובות ורעות, יכול להיות נכס רב-פעמי יקר ערך כשמפעילים אסטרטגיית ניהול ידע מפורשת.

תיעוד החלטות:

  * קיימות תבניות וכלים רבים ללכידת החלטות.

  * ראו קהילות אג'ייל, למשל ה-ADR של M. Nygard.

  * ראו תהליכי הנדסת תוכנה ועיצוב ארכיטקטורה מסורתיים, למשל פריסות הטבלאות שהציעו IBM UMF ו-Tyree ו-Akerman מ-CapitalOne.

למידע נוסף:

  * השלבים שלמעלה אומצו מהערך בוויקיפדיה על [Architectural Decision](https://en.wikipedia.org/wiki/Architectural_decision)

## איך להתחיל להשתמש ב-ADR עם כלים

- [MySpec](https://myspec.dev) — פלטפורמה אוטומטית למפרטים והחלטות ארכיטקטוניות, שמארגנת את אמנת הפרויקט, הארכיטקטורה הטכנית וה-ADR ב-Markdown נקי המוגש דרך MCP.

אפשר להתחיל להשתמש ב-ADR עם כלים בכל דרך שתרצו.

לדוגמה:

  * אם אתם אוהבים להשתמש ב-Google Drive ובעריכה מקוונת, אפשר ליצור Google Doc או Google Sheet.

  * אם אתם אוהבים להשתמש בבקרת גרסאות לקוד מקור, כמו git, אפשר ליצור קובץ לכל ADR.

  * אם אתם אוהבים להשתמש בכלי תכנון פרויקטים, כמו Atlassian Jira, אפשר להשתמש במעקב התכנון של הכלי.

  * אם אתם אוהבים להשתמש בוויקי, כמו MediaWiki, אפשר ליצור ויקי של ADR.

## איך להתחיל להשתמש ב-ADR עם git

אם אתם אוהבים להשתמש בבקרת גרסאות git, כך אנחנו אוהבים להתחיל להשתמש ב-ADR עם git בפרויקט תוכנה טיפוסי עם קוד מקור.

צרו ספרייה לקובצי ADR:

```sh
$ mkdir adr
```

לכל ADR, צרו קובץ טקסט, כמו `choose-database.md`:

```sh
$ vi choose-database.md
```

כתבו ב-ADR כל מה שתרצו. ראו את התבניות במאגר הזה לרעיונות.

בצעו commit של ה-ADR למאגר ה-git שלכם.

## כישורי Claude Code ל-ADR

המאגר הזה מגיע עם שני כישורים (skills) של [Claude Code](https://claude.com/claude-code) בתיקייה [`skills/`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/), כדי שסוכן קידוד מבוסס בינה מלאכותית יוכל לכתוב ולתחזק ADR כפי שהפרויקט הזה ממליץ:

- [`architecture-decision-record-skill`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/architecture-decision-record-skill/) — לשימוש כללי, לכל מי שכותב ADR בכל פרויקט. עוזר להחליט אם החלטה צריכה ADR, מקים ספריית `adr/` או `decisions/`, נותן שם לקובץ, בוחר תבנית מתוך אחד-עשר השלדים המצורפים וכותב סעיפי הקשר/החלטה/השלכות איכותיים.

- [`architecture-decision-record-maintainer-skill`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/architecture-decision-record-maintainer-skill/) — למתחזקי המאגר הזה בפרט. מתעד את מבנה המאגר, את מוסכמת שיקוף ה-README/locales ואת הצעדים המדויקים להוספת תבנית, דוגמה או קישור לכלי חדשים.

כדי להשתמש בכישור, העתיקו את התיקייה שלו אל `.claude/skills/` בשורש המאגר שבו אתם עובדים (או אל `~/.claude/skills/` כדי להפוך אותו לזמין בכל פרויקט), ואז בקשו מ-Claude Code לכתוב או לסקור ADR.

## מוסכמות שמות קבצים ל-ADR

אם אתם בוחרים ליצור את ה-ADR שלכם בקובצי טקסט רגילים, ייתכן שתרצו לקבוע מוסכמת שמות קבצים משלכם ל-ADR.

אנחנו מעדיפים מוסכמת שמות קבצים בעלת פורמט מסוים.

דוגמאות:

  * choose-database.md

  * format-timestamps.md

  * manage-passwords.md

  * handle-exceptions.md

מוסכמת שמות הקבצים שלנו:

  * השם כולל ביטוי פועלי בציווי בהווה. זה משפר את הקריאות ותואם את פורמט הודעות ה-commit שלנו.

  * השם משתמש באותיות קטנות ובמקפים (כמו במאגר הזה). זה איזון בין קריאות לשימושיות במערכת.

  * הסיומת היא markdown. זה יכול להיות שימושי לעיצוב קל.

## הצעות לכתיבת ADR טובים

מאפיינים של ADR טובה:

* נימוק (Rationale): הסבירו את הסיבות לקבלת ה-AD המסוימת. זה יכול לכלול את ההקשר (ראו להלן), יתרונות וחסרונות של בחירות אפשריות שונות, השוואות בין יכולות, דיונים על עלות/תועלת ועוד.

* ספציפית (Specific): כל ADR צריכה לעסוק ב-AD אחת, לא בכמה AD.

* חותמות זמן (Timestamps): ציינו מתי נכתב כל פריט ב-ADR. זה חשוב במיוחד להיבטים שעשויים להשתנות עם הזמן, כמו עלויות, לוחות זמנים, הרחבה וכדומה.

* בלתי ניתנת לשינוי (Immutable): אל תשנו מידע קיים ב-ADR. במקום זאת, תקנו את ה-ADR על ידי הוספת מידע חדש, או החליפו את ה-ADR על ידי יצירת ADR חדשה.

מאפיינים של סעיף "הקשר" (Context) טוב ב-ADR:

* הסבירו את מצב הארגון שלכם ואת סדרי העדיפויות העסקיים שלו.

* כללו נימוקים ושיקולים המבוססים על ההרכב החברתי וההרכב הכישורי של הצוותים שלכם.

* כללו יתרונות וחסרונות רלוונטיים, ותארו אותם במונחים שמתאימים לצרכים ולמטרות שלכם.

מאפיינים של סעיף "השלכות" (Consequences) טוב ב-ADR:

* הסבירו מה נובע מקבלת ההחלטה. זה יכול לכלול השפעות, תוצאות, תפוקות, מעקבים ועוד.

* כללו מידע על כל ADR עוקבות. די נפוץ ש-ADR אחת מעוררת צורך ב-ADR נוספות, למשל כשה-ADR אחת מקבלת בחירה כוללת גדולה, שבתורה יוצרת צורך בהחלטות קטנות נוספות.

* כללו כל תהליך סקירה לאחר הפעולה. מקובל שצוותים סוקרים כל ADR חודש לאחר מכן, כדי להשוות את מידע ה-ADR למה שקרה בפועל, כדי ללמוד ולצמוח.

ADR חדשה יכולה לתפוס את מקומה של ADR קודמת:

* כשמתקבלת AD שמחליפה או מבטלת ADR קודמת, יש ליצור ADR חדשה

## תבניות לדוגמה ל-ADR

תבניות ADR לדוגמה שאספנו ברשת:

- [תבנית ADR של מייקל נייגארד](תבניות/תבנית-רשומת-החלטה-של-מייקל-נייגארד/) (פשוטה ופופולרית)

- [תבנית ADR של ג׳ף טיירי וארט אקרמן](תבניות/תבנית-רשומת-החלטה-של-גף-טיירי-וארט-אקרמן/) (מתוחכמת יותר)

- [תבנית ADR לתבנית אלכסנדרית](תבניות/תבנית-רשומת-החלטה-לתבנית-אלכסנדרית/) (פשוטה עם פירוט הקשר)

- [תבנית ADR לתיק עסקי](תבניות/תבנית-רשומת-החלטה-לתיק-עסקי/) (מוכוונת MBA יותר, עם עלויות, SWOT ודעות נוספות)

- [תבנית ADR של פרויקט Markdown Any Decision Records (MADR)](תבניות/תבנית-רשומת-החלטה-של-פרויקט-madr/) (גרסה פשוטה וגם גרסה מפורטת; האחרונה מדגישה אפשרויות ואת היתרונות והחסרונות שלהן)

- [תבנית ADR באמצעות Planguage](תבניות/תבנית-רשומת-החלטה-באמצעות-planguage/) (מוכוונת הבטחת איכות יותר)

- [תבנית להחלטות טכניות חשובות (ITD) של Ignacio Larrañaga](תבניות/תבנית-רשומת-החלטה-להחלטות-טכניות-חשובות/) (רזה ועם ההחלטה במרכז, מותאמת לסקירה מהירה של הנהלה)

## עצות לעבודת צוות ב-ADR

אם אתם שוקלים להשתמש ברשומות החלטה עם הצוות שלכם, הנה כמה עצות שלמדנו מעבודה עם צוותים רבים.

יש לכם הזדמנות להוביל את חברי הצוות, על ידי שיחה משותפת על ה"למה", במקום לכפות את ה"מה". לדוגמה, רשומות החלטה הן דרך לצוותים לחשוב חכם יותר ולתקשר טוב יותר; רשומות החלטה אינן בעלות ערך אם הן רק דרישת ניירת כפויה שנעשית בדיעבד.

חלק מהצוותים מעדיפים בהרבה את השם "החלטות" על פני הקיצור "ADR". כשצוותים מסוימים משתמשים בשם הספרייה "decisions", זה כאילו נדלקת נורה, והצוות מתחיל להכניס לספרייה יותר מידע, כמו החלטות ספקים, החלטות תכנון, החלטות לוחות זמנים ועוד. לכל סוגי המידע האלה אפשר להשתמש באותה תבנית. אנחנו משערים שאנשים לומדים מהר יותר עם מילים ("החלטות") מאשר עם קיצורים ("ADR"), ושאנשים מונעים יותר לכתוב מסמכי עבודה בתהליך כשמסירים את המילה "רשומה", וכן שחלק מהמפתחים וחלק מהמנהלים לא אוהבים את המילה "ארכיטקטורה".

בתיאוריה, אי-שינוי הוא אידיאלי. בפועל, שינוי עבד טוב יותר עבור הצוותים שלנו. אנחנו מוסיפים את המידע החדש ל-ADR הקיימת, עם חותמת תאריך והערה שהמידע הגיע אחרי ההחלטה. גישה כזו מובילה ל"מסמך חי" שכולנו יכולים לעדכן. עדכונים טיפוסיים הם כשאנחנו מקבלים מידע הודות לחברי צוות חדשים, או הצעות חדשות, או תוצאות מהעולם האמיתי משימושים שלנו, או שינויים של צד שלישי בדיעבד, כמו יכולות ספקים, תוכניות תמחור, הסכמי רישיון ועוד.

## שאלות לעבודת צוות ב-ADR

### מי יכול ליצור ADR?

שקלו תחומים כמו אנשים מסוימים, או תפקידים מסוימים, או צוותים מסוימים, או מחלקות מסוימות; שקלו גם אם יש אנשים, או תפקידים, או צוותים, או מחלקות שיכולים להזמין ADR, כלומר לבקש אחת שמישהו אחר יכתוב.

דוגמה לתשובה: כל אדם בארגון שלנו שקרא את דף ה-README של רשומת ההחלטה הארכיטקטונית יכול להציע ADR, כלומר יכול להתחיל לכתוב אותה ולשתף אותה עם הצוות.

### מה מצדיק פתיחת ADR?

שקלו תחומים כמו דרכי העבודה של הצוות בארגון שלכם, מבנה מערכת התוכנה שלכם, תיאום בין צוותים, יכולת תחזוקה לטווח ארוך, ממשקים חיצוניים, מי אתם רוצים שירוויח, וכדומה.

דוגמה לתשובה: אנחנו רוצים ליצור ADR כשאנחנו רוצים שמפתחים בעתיד יבינו את ה"למה" של מה שאנחנו עושים.

### מה מצדיק לא לפתוח ADR?

שקלו תחומים כמו החלטות שאינן עוסקות בארכיטקטורה, או קטנות כמו בעלות סיכון מינימלי או עצמאיות או של מפתח יחיד, או שכבר מכוסות במלואן במקום אחר כמו בתקנים או במדיניות או בתיעוד, או זמניות כמו פתרונות עוקפים או הוכחות היתכנות או ניסויים.

דוגמה לתשובה: אנחנו רוצים לדלג על ADR כשההחלטה מוגבלת בהיקף ובזמן ובסיכון ובעלות, או שכבר מכוסה במקום אחר.

### מהו מחזור החיים של ADR?

שקלו תחומים כמו תהליך היצירה, תהליך המחקר, תהליך קבלת ההחלטה, תהליך המימוש ותהליך הפרישה. שקלו איך לעקוב אחר מחזור החיים של ה-ADR לאורך זמן, כמו איך להעביר את ה-ADR ממצב אחד למצב הבא, וגם איך להעביר זאת לבעלי העניין.

דוגמה לתשובה: אנחנו רוצים שלכל ADR יהיו שישה שלבי מחזור חיים: אתחול → מחקר → הערכה → מימוש → תחזוקה → פרישה.

### מהם הקריטריונים לשלבי מחזור החיים של ADR?

שקלו תחומים כמו קריטריוני קבלה ל-ADR, כלומר איך יודעים שהיא טובה מספיק כדי להתקדם משלב אחד של מחזור החיים לשלב הבא? האם הבעיה מנוסחת בבהירות? האם נשקלו החלופות? האם שיקולי הביניים מובנים ומתועדים היטב? האם כל ההקשר הרלוונטי קיים? האם כל בעלי העניין הרלוונטיים מעורבים? האם כל המשוב שולב?

דוגמה לתשובה: אנחנו רוצים שבעלי העניין יצביעו על ADR כשהצוות הפעיל 1) השלים את המחקר שלו, 2) השלים את ההערכה שלו, 3) פרסם את הצעת ה-ADR לבעלי העניין עם בקשה להערות ומסגרת זמן של שבוע, 4) כל הערות בעלי העניין שולבו ונענו.

### אילו תפקידים ואחריות מתקשרים עם ADR?

שקלו תפקידים כמו מציע, חוקר, מעריך, סוקר, מאשר, מתחזק וכדומה. שקלו אחריות כמו תקשורת עם בעלי עניין, הבטחה שהציפיות מתקיימות, שיתוף באתר או באינטראנט, וסקירת העבודה מדי פעם ובמיוחד כשמתרחשים שינויים רלוונטיים.

דוגמה לתשובה: אנחנו רוצים שלכל ADR יהיו תמיד איש קשר ראשי, איש קשר משני וצוות אחראי; אלה אחראים לתקשורת, לפרסומים, לתחזוקה, לסקירה תקופתית לפחות אחת לשנה ולפרישה בסופו של דבר לפי הצורך.

### איך ממשל מתקשר עם ADR?

שקלו תחומים כמו דרכי העבודה של הארגון שלכם, צרכי ציות מיוחדים כמו היבטים משפטיים או היבטי משאבי אנוש, איך אתם רוצים לטפל בקונצנזוס לעומת קונפליקט לעומת הסלמה. האם יש תחומים או אנשים או צוותים שיכולים להשפיע יותר מאחרים על ADR, כמו היכולת לאשר אותה, או להצביע עליה, או להטיל עליה וטו?

דוגמה לתשובה: הממשל של ADR הוא בסדר העדיפות הזה: המנכ"ל, מנהל הטכנולוגיות, היועץ המשפטי, הצוות שמממש ADR, המומחים בצוות שהכי בקיאים ב-AD. לאף אחד אחר אין ממשל אלא אם כן תואר ב-ADR.

### אילו עקרונות מתקשרים עם ADR?

שקלו תחומים כמו דרכי העבודה של הארגון שלכם הכוללות תנועה מהירה לעומת תנועה איטית, לקונצנזוס בהחלטות לעומת קונפליקט בהחלטות, להעדפות סיכון לעומת העדפות בטיחות, דיון פומבי לעומת דיון פרטי, וכדומה.

דוגמה לתשובה: אנחנו משתמשים בעקרונות ההנהגה של הטיה לפעולה, התנגדות ומחויבות (disagree-and-commit), הערכות של 70% מספיקות להחלטות הפיכות וניתנות לבידוד בקלות, ודרכי עבודה פומביות למעט מידע סודי כפי שמתואר בהסכם הסודיות של הארגון שלנו.

## מושגי צעד הבא ל-ADR

[Arc42](https://arc42.org/) עונה על שתי שאלות בדרך פרגמטית וניתנת להתאמה לצרכים הספציפיים שלכם. מה כדאי לתעד/להעביר על הארכיטקטורה שלכם? איך כדאי לתעד/להעביר? Arc42 כוללת רשומות החלטה ארכיטקטונית וכן הנחיות על מטרות, אילוצים, הקשרים, איכות, סיכונים ועוד.

[מודל C4](https://c4model.com/) הוא גישה קלה ללמידה וידידותית למפתחים לשרטוט תרשימי ארכיטקטורת תוכנה. C4 הוא קבוצה של תרשימים היררכיים להקשר, קונטיינרים, רכיבים וקוד, וכן תרשימי תמיכה לנוף המערכות, לדינמיקה ולפריסה.

## תרשימי ארכיטקטורה, מבטים ונקודות מבט

תרשים ארכיטקטורה נקרא "מבט ארכיטקטורה" (architecture view).

"מבט ארכיטקטורה" הוא מופע של "נקודת מבט ארכיטקטורה" (architecture viewpoint).

ל"נקודת מבט ארכיטקטורה" יש קהל ספציפי עם דאגות ספציפיות בראש.

דוגמאות לנקודות מבט ארכיטקטורה, למבטים ולתרשימים:

- יכולות עסקיות

- תהליכים עסקיים ברמה גבוהה

- [זרמי ערך](https://en.wikipedia.org/wiki/Value_stream)

- פונקציות תוכנה ממופות לרכיבי יישום

- תרשים הקשר של [מודל C4](https://en.wikipedia.org/wiki/C4_model) (TO-BE / AS-IS)

- תרשים קונטיינרים של [מודל C4](https://en.wikipedia.org/wiki/C4_model) (TO-BE / AS-IS)

- [תרשים ישויות-קשרים](https://en.wikipedia.org/w/index.php?title=Entity_relationship_diagram) (ERD) למיפוי ישויות נתונים לרכיבי יישום

- [תרשימי רצף](https://en.wikipedia.org/wiki/Sequence_diagram) לתיאור זרימות פונקציונליות בתוך מערכות ולאינטגרציות

- תרשימי [Business Process Model and Notation](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN) לתיאור זרימות נתונים בין רכיבי יישום

- תרשימי [Business Process Model and Notation](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN) לתיאור תהליכים עסקיים / תרחישי משתמש

- תרשימי [ניהול זהויות וגישה](https://en.wikipedia.org/wiki/Identity_and_access_management) (IAM)

- תרשימי [בקרת גישה מבוססת תפקידים](https://en.wikipedia.org/wiki/Role-based_access_control) (RBAC) עם תפקידים לכל רכיב יישום

- תרשימי [בקרת גישה מבוססת מאפיינים](https://en.wikipedia.org/wiki/Attribute-based_access_control) (ABAC) עם מאפיינים לכל רכיב יישום

- תרשימי פרטיות

תרשימים קשורים:

- תרשים מקרי שימוש מציג מקרי שימוש להנהלה/ללקוחות, שקודם לדרישות, שקודמות לארכיטקטורת התוכנה.

- תרשים פריסה מציג את החומרה הפיזית/המחשבים שאליהם נפרסים רכיבי התוכנה.
- תרשים זרימת נתונים מציג איך נתונים נעים במערכת ומשתנים.
- תרשים רצף משמש להצגת אופן פעולתם של פרוטוקולים כמו HTTP על ציר זמן.

- תרשים פעילות מתאר את זרימת העבודה של פעילויות שמערכת תוכנה מבצעת, כמו בינה מלאכותית של דמות לא-שחקן (NPC).

## פונקציות התאמה להחלטות כקוד

פונקציות התאמה (fitness functions) הן בדיקות אוטומטיות אובייקטיביות, שנכתבות בקוד תכנות, ומוודאות שההחלטות נשמרות.

- פונקציות התאמה הופכות החלטות לניתנות לבדיקה ולהבטחה.

- פונקציות התאמה להחלטות יכולות לסייע מאוד להבטחת איכות, לתהליכי רגולציה ולמטרות ממשל.

### איך פונקציות התאמה קשורות להחלטות

רשומת החלטה מתעדת את ההחלטה, ופונקציית התאמה מבטיחה את ההחלטה.

- דוגמה להחלטה: אנחנו משתמשים ב-event sourcing בגלל דרישות ביקורת.

- דוגמה לפונקציית התאמה: אנחנו משתמשים בשרת האינטגרציה הרציפה כדי לבדוק שכל שינוי מצב חייב להפיק אירועים.

### למה פונקציות התאמה עוזרות להחלטות

מדידות אובייקטיביות: פונקציות התאמה עוברות או נכשלות, ולכן העבודה גלויה וברורה.

שימוש רציף: פונקציות התאמה הן הכללים החיים שלכם, והן רצות בכל commit ובכל build.

ביטחון לבצע refactoring: פונקציות התאמה תופסות אוטומטית שגיאות בכללי ההחלטות.

ממשל שניתן להרחבה: פונקציות התאמה מבטיחות תקנים בלי ליצור צווארי בקבוק.

### האם פונקציות התאמה יכולות להשתמש בבינה מלאכותית?

פונקציות התאמה יכולות לנצל מודלי שפה גדולים (LLM) של בינה מלאכותית להחלטות על ידי שאילת שאלות על העבודה שלכם,
כמו התוכניות, הקוד, הסכמות, ממשקי ה-API ועוד:

```txt
IMPORTANT: Prefer retrieval-led reasoning over pre-training-led reasoning.
IMPORTANT: Turn on extended thinking. Turn on expert advice. Turn on search.

This is a fitness function to evaluate if our work is
using all our decisions, and is correct and accurate.

- Our decisions are here: {url}
- Our work to evaluate is here: {url}

Explain any errors, problems, gaps, weaknesses. Be direct. Be decisive.
```

### בדיקות יחידה לארכיטקטורה

[ArchUnit](https://www.archunit.org/): בדיקת כללי ארכיטקטורה של קוד Java באמצעות כל מסגרת בדיקות יחידה רגילה של Java.

[ArchUnitTS](https://github.com/LukasNiessen/ArchUnitTS): בדיקת כללי ארכיטקטורה של קוד TypeScript וקוד JavaScript באמצעות Jest, Vitest, Jasmine ועוד.

## מעקות בטיחות להחלטות ב-pull requests

[Decision Guardian](https://github.com/DecispherHQ/decision-guardian)
מציף אוטומטית את רשומות ההחלטה הנכונות ברגע הנכון — כשמפתח משנה באופן
פעיל את הקוד שההחלטות האלה מכסות. במקום לקוות שמפתחים יקראו תיקיית
תיעוד לפני המיזוג, ההקשר הרלוונטי מופיע ישירות ב-pull request.

זה עובד לכל סוג של רשומת החלטה: החלטות ארכיטקטורה, החלטות נתונים, החלטות
ציות, החלטות קליניות ורפואיות, החלטות אבטחה ועוד.

עובד עם כל מערכת CI (GitLab, Jenkins, CircleCI) וכ-hook מסוג pre-commit.
קוד פתוח. רישיון MIT.

[ADR Guard](https://github.com/chohan-sarmad-ali/delivery-gates) הוא GitHub
Action שמכשיל pull request כששינויים בנתיבי קוד מנוטרים מתרחשים בלי שנוספה
או עודכנה רשומת החלטה ארכיטקטונית. ויתורים הם מפורשים: שורת
`ADR-Exempt:` עם סיבה מאפשרת לעבור את השער ונכתבת בסיכום המשימה. אגנוסטי
לתבנית, ללא תלויות. קוד פתוח. רישיון MIT.

## מידע נוסף

מבוא:

- [Architectural decision (wikipedia.org)](https://wikipedia.org/wiki/Architectural_decision)

- [Architecturally significant requirements (wikipedia.org)](https://wikipedia.org/wiki/Architecturally_significant_requirements)

תבניות:

- [Documenting architecture decisions - Michael Nygard (thinkrelevance.com)](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)

- [Markdown Architectural Decision Records (adr.github.io)](https://adr.github.io/madr/)

- [Template for documenting architecture alternatives and decisions (stackoverflow.com)](http://stackoverflow.com/questions/7104735/template-for-documenting-architecture-alternatives-and-decisions)

לעומק:

- [ADMentor XML project (github.com)](https://github.com/IFS-HSR/ADMentor)

- [Architectural Decision Guidance across Projects: Problem Space Modeling, Decision Backlog Management and Cloud Computing Knowledge (ifs.hsr.ch)](https://www.ifs.hsr.ch/fileadmin/user_upload/customers/ifs.hsr.ch/Home/projekte/ADMentor-WICSA2015ubmissionv11nc.pdf)

- [The Decision View's Role in Software Architecture Practice (computer.org)](https://www.computer.org/csdl/mags/so/2009/02/mso2009020036-abs.html)

- [Documenting Software Architectures: Views and Beyond (resources.sei.cmu.edu)](http://resources.sei.cmu.edu/library/asset-view.cfm?assetID=30386)

- [Architecture Decisions: Demystifying Architecture (utdallas.edu)](https://www.utdallas.edu/~chung/SA/zz-Impreso-architecture_decisions-tyree-05.pdf)

- [ThoughtWorks Technology Radar: Lightweight Architecture Decision Records (thoughtworks.com)](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)

- [A Skeptic’s Guide to Software Architecture Decisions (infoq.com)](https://www.infoq.com/articles/architecture-skeptics-guide/)

- [Architectural Decisions — The Making Of](https://ozimmer.ch/practices/2020/04/27/ArchitectureDecisionMaking.html)

- [Architectural Retrospectives: the Key to Getting Better at Architecting](https://www.infoq.com/articles/architectural-retrospectives/)

- [Software Architecture Monday with Mark Richards](https://developertoarchitect.com/lessons/) — שיעור חודשי חינמי בארכיטקטורת תוכנה

- [Solution Architecture Decisions - By Gareth Morgan](https://www.linkedin.com/pulse/solution-architecture-decisions-gareth-morgan-0r5xe/)

- ["Keep the Why: Code Becomes Legacy When Nobody Remembers Why"](https://blog.technopathy.club/keep-the-why-code-becomes-legacy-when-nobody-remembers-why)

כלים:

- [Command-line tools for working with Architecture Decision Records](https://github.com/npryce/adr-tools)

- [Command line tools with python - by Victor Sluiter](https://bitbucket.org/tinkerer_/adr-tools-python/src/master/)

- [Architectural Design Decision Support Framework (ADvISE)](https://swa.univie.ac.at/Software_Architecture/research-projects/architectural-design-decision-support-framework-advise/)

- [Decision Guardian](https://github.com/DecispherHQ/decision-guardian)

- [Mneme HQ - ADR enforcement for AI coding agents](https://github.com/TheoV823/mneme)

- [Keep the Why - a repo-native convention and agent skill that continuously captures, or retrospectively recovers, the reasoning behind a codebase](https://github.com/oliver-zehentleitner/keep-the-why)

- [ADR Guard - GitHub Action that fails a pull request changing watched code without an architecture decision record](https://github.com/chohan-sarmad-ali/delivery-gates)

- [kgai - append-only decision log for AI coding agents, a machine-readable companion to ADR files](https://github.com/kgaidev/kgai)

הנחיות ספציפיות לחברות:

- [Amazon: AWS Prescriptive Guidance: ADR Process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)

- [GitHub: ADR GitHub organization](https://adr.github.io/)

- [RedHat: Why you should use ADRs](https://www.redhat.com/architect/architecture-decision-records)

דוגמאות:

- [Repository of Architecture Decision Records made for the Arachne Framework](https://github.com/arachne-framework/architecture)

סרטונים:

- [An introduction to arc42 with Savvas Kleanthous](https://www.youtube.com/watch?v=V5clR8c6D7o)

- [The C4 model for visualising software architecture - by Simon Brown](https://www.youtube.com/watch?v=KvoBrUd1-5E)

פודקאסטים:

- [Software Architecture Bookclub Podcast](https://www.developertoarchitect.com/bookclub-podcast.html)

ספרים:

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

ראו גם:

- REMAP (Representation and Maintenance of Process Knowledge)

- DRL (Decision Representation Language)

- IBIS (Issue-Based Information System)

- QOC (Questions, Options, and Criteria)

- IBM’s e-Business Reference Architecture Framework

- [Decision Reasoning Format (DRF)](https://github.com/reasoning-formats/reasoning-formats) — פורמט YAML/JSON ניטרלי לספקים וקריא למכונה לייצוג החלטות עם נימוק מפורש, הנחות, מצב קוגניטיבי ושיקולי ביניים. משלים ADR על ידי הוספת נימוק מובנה וניתן לאימות לתיעוד ההחלטות.
