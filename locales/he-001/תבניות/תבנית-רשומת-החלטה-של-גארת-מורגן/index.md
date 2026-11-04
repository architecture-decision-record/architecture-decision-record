# [000] כותרת
*תנו לכל ADR מספר להפניה ולקטלוג קלים* \
*הערה: כל הטקסט הנטוי מספק רמזים ויש להסירו בגרסת הייצור*

## מצב - טיוטה / פעילה / הוצאה משימוש על ידי [000] / מחליפה את [000]

## הקשר
*תארו בקצרה את הבעיה או הבעיות שה-ADR הזו מיועדת לטפל בהן, ולמה הבעיות קיימות.*

## הגישה שנבחרה
*פרטו את ההחלטה בעלת המשמעות הארכיטקטונית שהתקבלה / שתתקבל, ותארו איך היא מטפלת בבעיות שתוארו בסעיף ההקשר.*

## השלכות
*מה ההשפעה של ההחלטה הזו על מאפייני הארכיטקטורה ועל הדרישות הפונקציונליות של המערכת?*

## ממשל
*איך ינוטרו תוצאות ההחלטה הזו?* \
*איך יובטח הציות להחלטה הזו?*

## ניתוח אפשרויות
*אם רלוונטי, כללו או קשרו לכל ניתוח של שיקולי ביניים שבוצע כדי להגיע להחלטה שבמסמך הזה.*

### מקרא
*אופציונלי: ספקו לבעלי העניין עזרים חזותיים שיכולים לעזור לזהות במהירות את שיקולי הביניים החיוביים והשליליים, למשל הדגשות פשוטות בצבעי רמזור עם קידומות חיוביות או שליליות.*

רקע <span style="background-color:#4bce97; color:black;">ירוק</span> מציין התאמה טובה, שמחמירה דרך <span style="background-color:#f1c232; color:black;">כתום</span>, כאשר <span style="background-color:#e06666; color:black;">אדום</span> הוא ההתאמה הגרועה ביותר. \
\+ מציין הערה בעלת השפעה חיובית \
\- מציין הערה בעלת השפעה שלילית

### סקירה ברמה גבוהה
*עד כמה כל אפשרות מתאימה להקשר הבעיה במבט חטוף?*

<table>
  <thead>
    <tr>
      <th>סיכום</th>
      <th>אפשרות 1</th>
      <th>אפשרות 2</th>
      <th>אפשרות 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><i>קלות מימוש</i></td>
      <td>
        <span style="background-color:#4bce97; color:black; padding-right:5px">
          + קל מאוד
        </span>
      </td>
      <td>
        <span style="background-color:#f1c232; color:black; padding-right:5px">
            - מסובך
        </span>
      </td>
      <td>
        <span style="background-color:#e06666; color:black; padding-right:5px">
            - מימוש גדול שדורש ידע מומחה
        </span>
      </td>
    </tr>
    <tr>
      <td><i>לוחות זמנים</i></td>
      <td>
        <span style="background-color:#4bce97; color:black; padding-right:5px">
            + מהיר מאוד
        </span>
      </td>
       <td>
        <span style="background-color:#f1c232; color:black; padding-right:5px">
            - איטי למדי
        </span>
      </td>
      <td>
        <span style="background-color:#e06666; color:black; padding-right:5px">
            - איטי מאוד
        </span>
      </td>
    </tr>
    <tr>
      <td><i>ערך אסטרטגי</i></td>
      <td>
        <span style="background-color:#e06666; color:black; padding-right:5px">
            - אין ערך אסטרטגי, טקטי בלבד
        </span>
      </td>
       <td>
        <span style="background-color:#f1c232; color:black; padding-right:5px">
            + משפר מעט את חוויית קליטת הלקוחות
        </span>
      </td>
      <td>
        <span style="background-color:#4bce97; color:black; padding-right:5px">
            + אידיאלי למיזוג הקרוב
        </span>
      </td>
    </tr>
  </tbody>
</table>

### דרישות פונקציונליות
*עד כמה כל אפשרות פוטנציאלית מתאימה לדרישות הפונקציונליות הרצויות?*

<table>
  <thead>
    <tr>
      <th>תרחיש</th>
      <th><i>אפשרות 1</i></th>
      <th><i>אפשרות 2</i></th>
      <th><i>אפשרות 3</i></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><i>תרחיש 1</i></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><i>תרחיש 2</i></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><i>תרחיש 3</i></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

*אופציונלי: הוסיפו שורות / טבלה נוספת כדי לכסות תרחישים עתידיים ידועים.*

### דרישות לא פונקציונליות
*עד כמה כל אפשרות פוטנציאלית מתאימה למאפייני הארכיטקטורה הרצויים?
הערה: 'מאפייני ארכיטקטורה' יהיה כותרת מתאימה יותר, אבל התאימו זאת לשפה המוכרת בתחום העסקי שלכם.*

<table>
  <thead>
    <tr>
      <th>מאפיין </br> ארכיטקטורה</th>
      <th><i>אפשרות 1</i></th>
      <th><i>אפשרות 2</i></th>
      <th><i>אפשרות 3</i></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><i>יכולת הרחבה</i></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><i>ביצועים</i></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><i>זמינות</i></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

*אופציונלי: הוסיפו או קשרו להגדרות של מאפייני הארכיטקטורה כפי שהם נוגעים לתחום העסקי / למוצר שלכם.*
