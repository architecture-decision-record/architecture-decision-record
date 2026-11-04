# פונקציות התאמה להחלטות כקוד

פונקציות התאמה (fitness functions) הן בדיקות אוטומטיות אובייקטיביות, שנכתבות בקוד תכנות, ומוודאות שההחלטות נשמרות.

- פונקציות התאמה הופכות החלטות לניתנות לבדיקה ולהבטחה.

- פונקציות התאמה להחלטות יכולות לסייע מאוד להבטחת איכות, לתהליכי רגולציה ולמטרות ממשל.

## איך פונקציות התאמה קשורות להחלטות

רשומת החלטה מתעדת את ההחלטה, ופונקציית התאמה מבטיחה את ההחלטה.

- דוגמה להחלטה: אנחנו משתמשים ב-event sourcing בגלל דרישות ביקורת.

- דוגמה לפונקציית התאמה: אנחנו משתמשים בשרת האינטגרציה הרציפה כדי לבדוק שכל שינוי מצב חייב להפיק אירועים.

## למה פונקציות התאמה עוזרות להחלטות

מדידות אובייקטיביות: פונקציות התאמה עוברות או נכשלות, ולכן העבודה גלויה וברורה.

שימוש רציף: פונקציות התאמה הן הכללים החיים שלכם, והן רצות בכל commit ובכל build.

ביטחון לבצע refactoring: פונקציות התאמה תופסות אוטומטית שגיאות בכללי ההחלטות.

ממשל שניתן להרחבה: פונקציות התאמה מבטיחות תקנים בלי ליצור צווארי בקבוק.

## האם פונקציות התאמה יכולות להשתמש בבינה מלאכותית?

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

## בדיקות יחידה לארכיטקטורה

[ArchUnit](https://www.archunit.org/): בדיקת כללי ארכיטקטורה של קוד Java באמצעות כל מסגרת בדיקות יחידה רגילה של Java.

[ArchUnitTS](https://github.com/LukasNiessen/ArchUnitTS): בדיקת כללי ארכיטקטורה של קוד TypeScript וקוד JavaScript באמצעות Jest, Vitest, Jasmine ועוד.
