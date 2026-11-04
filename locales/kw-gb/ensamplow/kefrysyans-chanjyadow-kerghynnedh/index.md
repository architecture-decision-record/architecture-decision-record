# Kefrysyans chanjyadow kerghynnedh

Kenwyns:

* [Berrskrif](#berrskrif)
  * [Kudyn](#kudyn)
  * [Dyberth](#dyberth)
  * [Studh](#studh)
* [Manylyow](#manylyow)
  * [Tybyansow](#tybyansow)
  * [Lettyansow](#lettyansow)
  * [Savyow](#savyow)
  * [Argument](#argument)
  * [Sewyansow](#sewyansow)
* [Kelmys](#kelmys)
  * [Dybyrthow kelmys](#dybyrthow-kelmys)
  * [Othommow kelmys](#othommow-kelmys)
  * [Arteffaktys kelmys](#arteffaktys-kelmys)
  * [Prensiplys kelmys](#prensiplys-kelmys)
* [Notennow](#notennow)


## Berrskrif


### Kudyn

Ni a vynn may hyllo agan aplikasyons bos kefrysys a-ugh arteffaktys/bynaryow/fenten, may hyllo unn drehevel omdhegesa yn dyffrans herwydh y gerghynnedh displegyans.

  * Rag gul hemma, ni a vynn usya kefrysyans chanjyadow kerghynnedh.

  * Ni a vynn rewlya an kefrysyans dre usya fayls a hyllyn gwitha gwersyon.

  * Ni a vynn ri nebes ergonomiks skians displegyor, avel godhvos pyth a hyll bos kefrysys ha pynag defowtys ledhwas.


### Dyberth

Dewisys fayls .env gans fayl defowt kelmys ha fayl skema.


### Studh

Dewisys. Ygor dhe gemeres yn kyfrif gallusow nowydh pan dheuns.


## Manylyow


### Tybyansow

Ni a gar dyberth kod an aplikasyon ha kod an kerghynnedh. Ni a gemmer may res dhe'n app oberi yn dyffrans yn kerghynnedhow dyffrans, avel kerghynnedh displegyans, kerghynnedh previans, kerghynnedh diskwedhyans, kerghynnedh produksyon, hag yn.

Ni a gar usadow an diwysyans "12 factor app" hag a-ugh hedna an usadow kelmys "15 factor app".

Lies a'gan towlow kyns re usyas an kustom a fayl `.env` po kuntlas `.env` haval. Yma usadow ollgemmyn a'ga gwitha a-ves gwithyans gwersyon, ha yn le usya fordh aral dhe'ga displegya, gwersyonya, ha rewlya.


### Lettyansow

Ni a vynn gwitha kevrinyow a-ves agan system gwithyans gwersyon (VCS) rewlyans fenten-kod (SCM).

Ni a vynn amya orth kesstowans gans framweythow ha lyvervaow medhelweyth poblek. Rag ensampel, Node a'n jeves modul "dotenv" rag redya kefrysyans chanjyadow kerghynnedh.


### Savyow

Ni a gemeras yn kyfrif nebes fordhow:

  * Gwitha kefrysyans y'n app avel yn fayl `config.js`.

  * Gwitha kefrysyans y'n kerghynnedh avel yn fayl `.env`.

  * Dre-dhelya kefrysyans dhyworth le aswonnys avel servyer lisans.


### Argument

Ni a dhewisas an fordh a fayl .env awos:

  * Ev yw poblek ow keworra yn mesk arbennigoryon.

  * Ev a holya patron fayls `.env` a veu usys yn sewen gans agan timyow lies treweyth war lies towl.

  * Ev yw sempel. Arbennik, ni yw lowen lemmyn gans an stokyow-trelyes poesek a welyn, avel diffyth a skiansow awdyt erbynn fordh servyer lisans.


### Sewyansow

Res yw dhyn kavos fordh dhe dhyberth kefrysyans chanjyadow kerghynnedh a vo poblek dhyworth rewlyans kevrinyow.


## Kelmys


### Dybyrthow kelmys

Ni a wayt may fo oll agan aplikasyons ow usya an fordh ma.

Ni a dowl nowydhhe pynag a'gan aplikasyons a usya fordh le-gallus, avel kodya hard yn bynary po yn kod-fenten.

Ni a wra gwitha avel yw pynag a'gan aplikasyons a usya fordh moy-gallus, avel servyer lisansa.


### Othommow kelmys

Ni a wra ouryen gallusow devops rag an fayls, ow keworra hooks, previansow, ha integrans pesys.

Res yw dhyn dyski oll kesoberoryon displegyans war an dyberth ma.



### Arteffaktys kelmys

Pub tiredh may hwrian displegya a res dhodho y fayl .env y honan ha fayls kelmys.


### Prensiplys kelmys

Es dhe dasfyna.


## Notennow


Fayl ensampel `.env`:

```env
NAME=Alice Anderson
EMAIL=alice@example.com
```

Fayl ensampel `.env.defaults`:

```env
NAME=Joe Doe
EMAIL=joe@example.com
```

Fayl ensampel `.env.schema` gans hepken an alhwedhyow:

```env
NAME
EMAIL
```
