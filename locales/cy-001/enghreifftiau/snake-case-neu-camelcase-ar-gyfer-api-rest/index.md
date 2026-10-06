# Cofnod penderfyniad saernïaeth: snake_case neu camelCase ar gyfer API REST?

Penderfyniad: Defnyddir y confensiwn enwi snake_case ar gyfer diweddbwyntiau API REST

Statws: Wedi'i dderbyn

## Cyd-destun

Mewn confensiynau enwi ar gyfer APIau REST, mae dau fformat poblogaidd: snake_case a camelCase. Yn y fformat snake_case, caiff pob gair yn yr enw ei wahanu gan danlinellau, tra bo camelCase yn golygu bod gair cyntaf yr enw mewn llythrennau bach, ac mae llythyren gyntaf y geiriau canlynol yn briflythyren. Bydd y penderfyniad hwn yn pennu pa gonfensiwn enwi y dylid ei ddefnyddio ar gyfer API REST.

## Ysgogwyr y penderfyniad

- Cysondeb â'r confensiynau enwi presennol yn y prosiect

- Darllenadwyedd ac eglurder i unrhyw un a all fod yn gweithio ar yr API

- Cyd-fynd ag arferion gorau'r diwydiant ar gyfer confensiynau enwi APIau REST

- Rhwyddineb gweithredu a chynnal

## Penderfyniad

Defnyddir y confensiwn enwi snake_case ar gyfer diweddbwyntiau API REST. Gyrrir y dewis hwn gan y ffactorau canlynol:

1. **Cysondeb**: Mae'r prosiect eisoes yn defnyddio'r confensiwn enwi snake_case ar gyfer pob diweddbwynt, a byddai'n fuddiol cynnal y confensiwn hwn i sicrhau cysondeb ar draws y prosiect cyfan.

2. **Darllenadwyedd ac eglurder**: Mae'r confensiwn snake_case yn fwy darllenadwy ac yn haws ei ddeall. Mae'r tanlinellau yn rhoi gwahaniad clir rhwng geiriau, gan ei gwneud hi'n haws dehongli a deall ystyr yr enw.

3. **Cyd-fynd ag arferion gorau'r diwydiant**: Defnyddir y confensiwn snake_case yn eang yn y diwydiant ac fe'i hystyrir yn arfer gorau ar gyfer APIau REST, sy'n ei wneud yn ddewis da ar gyfer y prosiect.

4. **Rhwyddineb gweithredu a chynnal**: Mae cadw at y confensiwn enwi presennol yn haws i'w weithredu a'i gynnal gan y byddai angen diweddaru'r holl god a dogfennaeth presennol pe câi confensiwn newydd ei ddewis.

## Canlyniadau

Mae canlyniadau posibl i'r penderfyniad hwn. 

* Os nad yw unrhyw aelodau newydd o'r tîm sy'n ymuno â'r prosiect yn gyfarwydd â'r confensiwn enwi snake_case, gallai arwain at ddryswch a chamgymeriadau wrth ddatblygu. Fodd bynnag, gan fod snake_case yn gonfensiwn a ddefnyddir yn eang, mae risg o'r fath yn fach iawn. 
  
* Os defnyddir offer neu fframweithiau eraill yn y prosiect sy'n seiliedig yn drwm ar y confensiwn camelCase, gall fod angen ymdrech ychwanegol i drosi rhwng confensiynau enwi. Fodd bynnag, nid yw'n bryder sylweddol gan fod y prosiect wedi safoni ar y confensiwn snake_case. 
 
At ei gilydd, mae'r penderfyniad i ddefnyddio'r confensiwn enwi snake_case ar gyfer diweddbwyntiau API REST yn arwain at ddull cyson, darllenadwy a safonol i'r diwydiant sy'n hawdd ei weithredu a'i gynnal.

<h6>Cydnabyddiaeth: cynhyrchwyd y dudalen hon gan ChatGPT, yna fe'i golygwyd er eglurder a fformat.</h6>
