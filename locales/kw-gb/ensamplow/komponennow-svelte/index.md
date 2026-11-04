# Kovskrif dyberth arkitektoryeth (ADR) rag komponennow Svelte

<!--

Prompt:

Architecture decision record for Svelte components.

Compare options: SVAR, Carbon, Flowbite, SkeletonUI, MeltUI, SvelteUI, shadcn-svelte

The goal is full features for table, charts, lists, grids, gantt, 

-->

## Kettesten

Ni yw ow tewis lyverva komponennow UI Svelte dhe ri nodhow kowlwir rag:
- **Tabelyow**
- **Chartys**
- **Rolyow**
- **Gridys**
- **Chartys Gantt**

An mynnans yw dewis lyverva a gesstrif es junyans, skoodh nodhow kowlwir, gwrians, ha gwithadewder hirdermyn. An dewisyow yn kyfrif yw:

1. **SVAR**
2. **Carbon**
3. **Flowbite**
4. **SkeletonUI**
5. **MeltUI**
6. **SvelteUI**
7. **shadcn-svelte**

## Dasdhesk dewisyow

### 1. **SVAR**
- **Dre-wel**: SVAR yw lyverva komponennow nowydhek, rych yn nodhow rag Svelte, gans fok war systemow disinyans ha komponennow parys rag kowethasow.
- **A-dhesk**:
  - Komponennow nodhow-leun, ow keworra tabelyow, furvyow, ha chartys.
  - Dewisyow hewelans uhel gans skoodh tem genesek.
  - Skoodh genesek rag hedhadewder ha gorthybadewder.
  - Dogvennys yn da gans kevrys kemeneth.
- **Drog**:
  - Martesen y fydh moy pos erbynn lyvervaow moy sempel erell.
  - Skoodh kyfyngys rag komponennow arbennik avel chartys Gantt ha gridys avonsys.
- **Gwella rag**: Aplikasyons live kowethas may fo systemow disinyans nodhow-leun othom.
- **Skoodh tabel/chart**: Kres bys da.
- **Skoodh grid/Gantt**: Minimal.

### 2. **Carbon**
- **Dre-wel**: Carbon Design System yw systemow disinyans ygor-fenten dhyworth IBM, a re set krev a gomponennow UI.
- **A-dhesk**:
  - Disinyans ansawdh uhel, gloyn, gans dogvennans ledan.
  - Pur-hedhadow ha gorthybus.
  - Lyverva komponennow bras, ow keworra gridys, tabelyow, ha kontrollow furv.
- **Drog**:
  - Nyns yw fokusys war Svelte, ytho junyans a hyll bos pos.
  - A hyll res hewelans ychwanek rag kesstowans Svelte kowlwir.
  - Heb skoodh genesek rag komponennow avonsys avel chartys Gantt po chartys kompleks.
- **Gwella rag**: Towlow skala bras a res UI kesson, gloyn.
- **Skoodh tabel/chart**: Da (gans junyansow lyverva chartys).
- **Skoodh grid/Gantt**: Da (skoodh grid kevyk, mes heb chartys Gantt).

### 3. **Flowbite**
- **Dre-wel**: Flowbite yw lyverva komponennow drehevys gans Tailwind CSS, a re lies komponenn hag elven UI.
- **A-dhesk**:
  - Selys war Tailwind CSS, a wra es y hewelya.
  - Es dhe junya hag usya gans Svelte.
  - A re komponennow rych avel tabelyow, chartys, ha kontrollow UI.
- **Drog**:
  - A ngel nodhow avonsys (rag ensampel chartys Gantt po gridys kompleks).
  - Nyns eus dhodho komponennow chartys genesek; ev a bleg orth lyvervaow a-ves.
- **Gwella rag**: Towlow a res displegyans skon gans fok war junyans Tailwind CSS.
- **Skoodh tabel/chart**: Da (a res junyans gans lyvervaow chartys trydhes-parti).
- **Skoodh grid/Gantt**: Minimal.

### 4. **SkeletonUI**
- **Dre-wel**: SkeletonUI yw lyverva komponennow skav rag Svelte, ow fokusya war sempelder ha minimalekter.
- **A-dhesk**:
  - Pur-skav ha skon.
  - API sempel hag ynnynnek.
  - Da rag towlow byghan po may fo gwrians kritek.
- **Drog**:
  - Pur-nebes komponennow yw ynno, ytho nyns yw rych yn nodhow.
  - A ngel komponennow avonsys tabel/grid/chart/Gantt.
  - Skoodh kemeneth kyfyngys ha dogvennans le kowlwir.
- **Gwella rag**: Towlow a res komponennow skav gans kost minimal.
- **Skoodh tabel/chart**: Minimal.
- **Skoodh grid/Gantt**: Minimal.

### 5. **MeltUI**
- **Dre-wel**: MeltUI yw kuntelles a gomponennow UI hedhadow rag Svelte, ow fokusya war sempelder ha kesdyllyadewder.
- **A-dhesk**:
  - Skav ha hewelus yn tien.
  - Nodhow hedhadewder da genesek.
  - Disinyans nowydhek ha minimalek.
- **Drog**:
  - Le rych yn nodhow erbynn lyvervaow erell.
  - A ngel komponennow grid ha tabel avonsys.
  - Heb chartys Gantt na dewisyow chartys kompleks.
- **Gwella rag**: Disinyansow minimalek a worr hedhadewder ha gwrians yn kynsa.
- **Skoodh tabel/chart**: Minimal.
- **Skoodh grid/Gantt**: Minimal.

### 6. **SvelteUI**
- **Dre-wel**: SvelteUI yw lyverva komponennow UI kowlwir ha hewelus rag Svelte, disinyes rag drehevel appys gwew nowydhek gans UI kuv.
- **A-dhesk**:
  - Set kowlwir a gomponennow, ow keworra tabelyow, gridys, chartys, ha furvyow.
  - A re skoodh rag modh golow ha modh tewl.
  - Pur-hewelus hag es dhe ystynna.
  - Junyansow genesek rag lyvervaow chartys avel `chart.js` po `d3.js`.
- **Drog**:
  - A hyll bos moy pos es lyvervaow komponennow moy sempel.
  - A res nebes selyans dhe junya lyvervaow a-ves rag nodhow moy kompleks avel chartys Gantt.
- **Gwella rag**: Towlow a res set kowlwir, hewelus a gomponennow.
- **Skoodh tabel/chart**: Ragorek (lyvervaow chartys skoodhys).
- **Skoodh grid/Gantt**: Da (komponennow grid kevyk; Gantt a res junyans a-ves).

### 7. **shadcn-svelte**
- **Dre-wel**: Gwersyon Svelte a ShadCN, a fok war disinyans usadow-kynsa ha re komponennow nowydhek, stylys.
- **A-dhesk**:
  - Disinyans usadow-kynsa, drehevys a-ugh Tailwind CSS, ow wul es y hewelya.
  - Set rych a gomponennow ha stylys yn tien genesek.
  - Es dhe junya gans lyvervaow erell.
- **Drog**:
  - Nyns yw mar nodhow-leun avel nebes erell yn termyn elvennow UI avonsys.
  - A ngel skoodh genesek rag tabelyow, chartys, po gridys.
  - Heb skoodh genesek rag chartys Gantt.
- **Gwella rag**: Towlow byghan-bys-kres a res fordh usadow-kynsa, hewelus.
- **Skoodh tabel/chart**: Minimal.
- **Skoodh grid/Gantt**: Minimal.

## Dyberth

### Dewis kusulys: **SvelteUI**

- **Rason**: SvelteUI a brof suite kowlwir, ewn a gomponennow a gorthyb dhe'n othom a dabelyow, chartys, gridys, ha furvyow. Ev yw pur-hewelus, a junn da gans lyvervaow chartys erell (avel `chart.js` ha `d3.js`), ha'n jeves kesstrif da a wrians skav ha rychder yn nodhow. Kyn na vo ev ow ri skoodh chartys Gantt genesek, ev a hyll bos ystynnys yn es gans junyansow trydhes-parti, ow wul ev ideal rag solusyon nodhow-leun, skalyek.
  
  - **A-dhesk**:
    - Skoodh tabel ha chart ragorek.
    - Komponennow grid ha gorholyans leun.
    - Hewelus ha junn da gans lyvervaow chartys a-ves.
    - Kemeneth ha dogvennans da.
  
  - **Drog**:
    - Moy pos es nebes lyvervaow minimalek erell.
    - A res junyans a-ves rag chartys kompleks avel chartys Gantt.
  
### Dewis aral: **Flowbite** po **Carbon** (rag towlow kowethasek brassa)
- Mar kerhir system disinyans gloyn, selys war Tailwind, po moy kesson, **Flowbite** (gans Tailwind CSS) po **Carbon** (rag solusyons live kowethas) a hyll bos dewisyow aral gwiw. Byttele, martesen i a res strivyans ychwanek rag junyansow gans chartys ha komponennow moy kompleks.

## Diwedhyans

An gwella junyans rag agan othommow (nodhow leun rag tabelyow, chartys, rolyow, gridys, Gantt) yw **SvelteUI**, ow sewya **Flowbite** ha **Carbon** herwydh othommow an towl ha dewisyow disinyans.
