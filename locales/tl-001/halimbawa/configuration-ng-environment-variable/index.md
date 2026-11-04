# Configuration ng environment variable

Nilalaman:

* [Buod](#buod)
  * [Isyu](#isyu)
  * [Desisyon](#desisyon)
  * [Katayuan](#katayuan)
* [Mga detalye](#mga-detalye)
  * [Mga palagay](#mga-palagay)
  * [Mga limitasyon](#mga-limitasyon)
  * [Mga posisyon](#mga-posisyon)
  * [Argumento](#argumento)
  * [Mga implikasyon](#mga-implikasyon)
* [Kaugnay](#kaugnay)
  * [Mga kaugnay na desisyon](#mga-kaugnay-na-desisyon)
  * [Mga kaugnay na requirement](#mga-kaugnay-na-requirement)
  * [Mga kaugnay na artifact](#mga-kaugnay-na-artifact)
  * [Mga kaugnay na prinsipyo](#mga-kaugnay-na-prinsipyo)
* [Mga tala](#mga-tala)


## Buod


### Isyu

Gusto naming ma-configure ang aming mga application nang lampas sa mga artifact/binary/source, upang ang isang build ay makapag-iba ng pag-uugali depende sa deployment environment nito.

  * Para magawa ito, gusto naming gumamit ng configuration ng environment variable.

  * Gusto naming pamahalaan ang configuration gamit ang mga file na maaari naming i-version control.

  * Gusto naming magbigay ng ilang ergonomics sa developer experience, tulad ng pagkaalam kung ano ang maaaring i-configure at anumang kaugnay na default.


### Desisyon

Nagpasya sa mga .env file na may kaugnay na default file at schema file.


### Katayuan

Napagpasyahan. Bukas sa pagsasaalang-alang ng mga bagong kakayahan habang lumilitaw ang mga ito.


## Mga detalye


### Mga palagay

Mas pinipili namin ang paghihiwalay ng application code at environment code. Ipinapalagay naming kailangang gumana nang iba ang app sa iba't ibang environment, tulad ng development environment, test environment, demo environment, production environment, atbp.

Pinapaboran namin ang gawi sa industriya na "12 factor app" at lalo na ang kaugnay na gawi na "15 factor app".

Maraming dating proyekto namin ang gumamit ng kumbensyon ng `.env` file o katulad na `.env` directory. May karaniwang gawi na ilayo ang mga ito sa version control, at sa halip ay gumamit ng ibang paraan para i-deploy, i-version, at pamahalaan ang mga ito.


### Mga limitasyon

Gusto naming ilayo ang mga lihim sa aming source code management (SCM) version control system (VCS).

Gusto naming layuning maging compatible sa mga popular na software framework at library. Halimbawa, may module ang Node na "dotenv" para sa pagbabasa ng configuration ng environment variable.


### Mga posisyon

Isinaalang-alang namin ang ilang pamamaraan:

  * Iimbak ang config sa app tulad ng sa file na `config.js`.

  * Iimbak ang config sa environment tulad ng sa file na `.env`.

  * Kunin ang config mula sa kilalang lokasyon tulad ng license server.


### Argumento

Pinili namin ang pamamaraan ng file na .env dahil:

  * Popular ito kabilang sa mga eksperto.

  * Sumusunod ito sa pattern ng mga `.env` file na matagumpay na ginamit ng aming mga koponan nang maraming beses sa maraming proyekto.

  * Simple ito. Kapansin-pansin, ayos lang sa amin sa ngayon ang malalaking trade-off na nakikita namin, tulad ng kakulangan ng kakayahan sa audit kumpara sa pamamaraan ng license server.


### Mga implikasyon 

Kailangan naming humanap ng paraan para paghiwalayin ang configuration ng environment variable na pampubliko mula sa anumang pamamahala ng mga lihim.


## Kaugnay


### Mga kaugnay na desisyon

Inaasahan naming gagamitin ng lahat ng aming application ang pamamaraang ito.

Plano naming i-upgrade ang alinman sa aming mga application na gumagamit ng mas mababang-kakayahang pamamaraan, tulad ng hardcoding sa binary o sa source code.

Pananatilihin namin kung ano ito ang alinman sa aming mga application na gumagamit ng mas mataas-ang-kakayahang pamamaraan, tulad ng licensing server.


### Mga kaugnay na requirement

Magdaragdag kami ng mga kakayahan sa devops para sa mga file, kasama ang mga hook, test, at continuous integration.

Kailangan naming sanayin ang lahat ng kasamahang developer tungkol sa desisyong ito.



### Mga kaugnay na artifact

Bawat lugar na pagde-deploy-an namin ay mangangailangan ng sarili nitong .env file at mga kaugnay na file.


### Mga kaugnay na prinsipyo

Madaling baligtarin.


## Mga tala


Halimbawang file na `.env`:

```env
NAME=Alice Anderson
EMAIL=alice@example.com
```

Halimbawang file na `.env.defaults`:

```env
NAME=Joe Doe
EMAIL=joe@example.com
```

Halimbawang file na `.env.schema` na mga key lang:

```env
NAME
EMAIL
```
