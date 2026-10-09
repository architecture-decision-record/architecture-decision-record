# Cofnod penderfyniad saernïaeth: API yn defnyddio JSON neu gRPC

## Statws

Wedi'i dderbyn

## Cyd-destun

Rydym yn dylunio API ar gyfer gwasanaeth newydd a fydd yn cael ei ddefnyddio gan nifer o gleientiaid. Rydym wedi bod yn ystyried dau ddewis ar gyfer gweithredu'r API: defnyddio JSON dros HTTP neu ddefnyddio gRPC.

Mae JSON dros HTTP yn ddull a ddefnyddir yn eang i adeiladu APIau, ac mae llawer o ieithoedd rhaglennu a fframweithiau yn ei gefnogi. Mae'r dull hwn yn syml, yn ysgafn ac yn hawdd ei ddeall, sy'n ei wneud yn ddewis da ar gyfer llawer o brosiectau. Fodd bynnag, gall fod yn llai effeithlon na dewisiadau eraill, yn enwedig wrth ymdrin â llawer iawn o ddata.

Ar y llaw arall, mae gRPC yn dechnoleg newyddach sy'n cynnig ffordd fwy effeithlon o adeiladu APIau. Mae'n defnyddio cyfresoli deuaidd i drosglwyddo data, a all fod yn gyflymach ac yn fwy cryno na defnyddio JSON. Mae gRPC hefyd yn cefnogi ffrydio dwyffordd, sy'n ei wneud yn ddewis da ar gyfer cymwysiadau amser real.

## Penderfyniad

Ar ôl ystyried manteision ac anfanteision y ddau ddewis, rydym wedi penderfynu defnyddio gRPC ar gyfer ein API. Er bod JSON dros HTTP yn ddewis symlach, credwn y bydd gRPC yn darparu ateb mwy effeithlon a graddadwy ar gyfer ein gwasanaeth. Rydym hefyd yn rhagweld y bydd ein API yn ymdrin â llawer iawn o ddata, a bydd cyfresoli deuaidd gRPC yn fwy effeithlon ar gyfer yr achos defnydd hwn.

Yn ogystal, credwn y bydd cefnogaeth gRPC i ffrydio dwyffordd o fudd i gymwysiadau amser real y gallem eu datblygu yn y dyfodol.

## Canlyniadau

Drwy ddewis gRPC, bydd angen i ni ddefnyddio set wahanol o offer a llyfrgelloedd i adeiladu ein API o'i gymharu â defnyddio JSON dros HTTP. Gall hyn olygu bod angen amser ac ymdrech ychwanegol i ddysgu a gweithredu'r technolegau hyn. Hefyd, bydd angen i gleientiaid sydd am ddefnyddio ein API ddefnyddio llyfrgelloedd sy'n gydnaws â gRPC, na chânt eu cefnogi mor eang efallai â llyfrgelloedd JSON dros HTTP.

Fodd bynnag, credwn fod manteision defnyddio gRPC yn drech na'r anfanteision posibl hyn, ac rydym yn hyderus y bydd y penderfyniad hwn yn arwain at API mwy effeithlon a graddadwy.
