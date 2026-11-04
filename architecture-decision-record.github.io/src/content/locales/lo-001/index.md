# ບັນທຶກການຕັດສິນໃຈດ້ານສະຖາປັດຕະຍະກຳ (ADR)

ບັນທຶກການຕັດສິນໃຈດ້ານສະຖາປັດຕະຍະກຳ (ADR) ແມ່ນເອກະສານທີ່ບັນທຶກການຕັດສິນໃຈດ້ານສະຖາປັດຕະຍະກຳທີ່ສຳຄັນທີ່ໄດ້ເຮັດ ພ້ອມທັງບໍລິບົດ ແລະ ຜົນສະທ້ອນຂອງມັນ.

> [!IMPORTANT]
> ກະລຸນາກວດສອບຢ່າງຮອບຄອບດ້ວຍຕົນເອງສຳລັບຊັບພະຍາກອນເຫຼົ່ານີ້ ກ່ອນນຳໄປໃຊ້ໃນລະບົບທີ່ສຳຄັນໃດໆ.

ສາລະບານ:

- [ບັນທຶກການຕັດສິນໃຈດ້ານສະຖາປັດຕະຍະກຳແມ່ນຫຍັງ?](#ບັນທຶກການຕັດສິນໃຈດ້ານສະຖາປັດຕະຍະກຳແມ່ນຫຍັງ)
- [ວິທີເລີ່ມຕົ້ນໃຊ້ ADR](#ວິທີເລີ່ມຕົ້ນໃຊ້-adr)
- [ວິທີເລີ່ມຕົ້ນໃຊ້ ADR ກັບເຄື່ອງມື](#ວິທີເລີ່ມຕົ້ນໃຊ້-adr-ກັບເຄື່ອງມື)
- [ວິທີເລີ່ມຕົ້ນໃຊ້ ADR ກັບ git](#ວິທີເລີ່ມຕົ້ນໃຊ້-adr-ກັບ-git)
- [ທັກສະ Claude Code ສຳລັບ ADR](#ທັກສະ-claude-code-ສຳລັບ-adr)
- [ຂໍ້ກຳນົດການຕັ້ງຊື່ໄຟລ໌ສຳລັບ ADR](#ຂໍ້ກຳນົດການຕັ້ງຊື່ໄຟລ໌ສຳລັບ-adr)
- [ຄຳແນະນຳໃນການຂຽນ ADR ທີ່ດີ](#ຄຳແນະນຳໃນການຂຽນ-adr-ທີ່ດີ)
- [ແມ່ແບບຕົວຢ່າງ ADR](#ແມ່ແບບຕົວຢ່າງ-adr)
- [ຄຳແນະນຳດ້ານການເຮັດວຽກເປັນທີມສຳລັບ ADR](#ຄຳແນະນຳດ້ານການເຮັດວຽກເປັນທີມສຳລັບ-adr)
- [ຄຳຖາມດ້ານການເຮັດວຽກເປັນທີມສຳລັບ ADR](#ຄຳຖາມດ້ານການເຮັດວຽກເປັນທີມສຳລັບ-adr)
- [ແນວຄິດຂັ້ນຕໍ່ໄປສຳລັບ ADR](#ແນວຄິດຂັ້ນຕໍ່ໄປສຳລັບ-adr)
- [ແຜນຜັງສະຖາປັດຕະຍະກຳ, ມຸມມອງ ແລະ ຈຸດຢືນ](#ແຜນຜັງສະຖາປັດຕະຍະກຳ-ມຸມມອງ-ແລະ-ຈຸດຢືນ)
- [ຟັງຊັນຄວາມເໝາະສົມສຳລັບການຕັດສິນໃຈເປັນໂຄ້ດ](#ຟັງຊັນຄວາມເໝາະສົມສຳລັບການຕັດສິນໃຈເປັນໂຄ້ດ)
- [ຮົ້ວກັ້ນການຕັດສິນໃຈສຳລັບ pull request](#ຮົ້ວກັ້ນການຕັດສິນໃຈສຳລັບ-pull-request)
- [ຂໍ້ມູນເພີ່ມເຕີມ](#ຂໍ້ມູນເພີ່ມເຕີມ)

ແມ່ແບບ:

- [ແມ່ແບບບັນທຶກການຕັດສິນໃຈຈາກ Jeff Tyree ແລະ Art Akerman](ແມ່ແບບ/ແມ່ແບບບັນທຶກການຕັດສິນໃຈຈາກ-jeff-tyree-ແລະ-art-akerman/)
- [ແມ່ແບບບັນທຶກການຕັດສິນໃຈຈາກ Michael Nygard](ແມ່ແບບ/ແມ່ແບບບັນທຶກການຕັດສິນໃຈຈາກ-michael-nygard/)
- [ແມ່ແບບບັນທຶກການຕັດສິນໃຈຈາກ EdgeX](ແມ່ແບບ/ແມ່ແບບບັນທຶກການຕັດສິນໃຈຈາກ-edgex/)
- [ແມ່ແບບບັນທຶກການຕັດສິນໃຈຈາກ arc42](ແມ່ແບບ/ແມ່ແບບບັນທຶກການຕັດສິນໃຈຈາກ-arc42/)
- [ແມ່ແບບບັນທຶກການຕັດສິນໃຈສຳລັບຮູບແບບ Alexandrian](ແມ່ແບບ/ແມ່ແບບບັນທຶກການຕັດສິນໃຈສຳລັບຮູບແບບ-alexandrian/)
- [ແມ່ແບບບັນທຶກການຕັດສິນໃຈສຳລັບກໍລະນີທຸລະກິດ](ແມ່ແບບ/ແມ່ແບບບັນທຶກການຕັດສິນໃຈສຳລັບກໍລະນີທຸລະກິດ/)
- [ແມ່ແບບບັນທຶກການຕັດສິນໃຈຂອງໂຄງການ MADR](ແມ່ແບບ/ແມ່ແບບບັນທຶກການຕັດສິນໃຈຂອງໂຄງການ-madr/)
- [ແມ່ແບບບັນທຶກການຕັດສິນໃຈທີ່ໃຊ້ Planguage](ແມ່ແບບ/ແມ່ແບບບັນທຶກການຕັດສິນໃຈທີ່ໃຊ້-planguage/)
- [ແມ່ແບບບັນທຶກການຕັດສິນໃຈໂດຍ Paulo Merson](https://github.com/pmerson/ADR-template)
- [ແມ່ແບບບັນທຶກການຕັດສິນໃຈໂດຍ Olaf Zimmermann](https://medium.com/olzzio/y-statements-10eb07b5a177)
- [ແມ່ແບບບັນທຶກການຕັດສິນໃຈຈາກ Gareth Morgan](ແມ່ແບບ/ແມ່ແບບບັນທຶກການຕັດສິນໃຈຈາກ-gareth-morgan/)
- [ແມ່ແບບບັນທຶກການຕັດສິນໃຈຈາກ GIG Cymru NHS Wales](ແມ່ແບບ/ແມ່ແບບບັນທຶກການຕັດສິນໃຈຈາກ-gig-cymru-nhs-wales/)
- [ແມ່ແບບບັນທຶກການຕັດສິນໃຈສຳລັບການຕັດສິນໃຈດ້ານເຕັກນິກທີ່ສຳຄັນ (ITD) ໂດຍ Ignacio Larrañaga](ແມ່ແບບ/ແມ່ແບບບັນທຶກການຕັດສິນໃຈສຳລັບການຕັດສິນໃຈດ້ານເຕັກນິກທີ່ສຳຄັນ/)

ຕົວຢ່າງ:

- [ເຟຣມເວີກ CSS](ຕົວຢ່າງ/ເຟຣມເວີກ-css/)
- [ການຕັ້ງຄ່າຕົວແປສະພາບແວດລ້ອມ](ຕົວຢ່າງ/ການຕັ້ງຄ່າຕົວແປສະພາບແວດລ້ອມ/)
- [ຕົວຊີ້ວັດ, ການຕິດຕາມ, ການແຈ້ງເຕືອນ](ຕົວຢ່າງ/ຕົວຊີ້ວັດ-ການຕິດຕາມ-ການແຈ້ງເຕືອນ/)
- [Microsoft Azure DevOps](ຕົວຢ່າງ/microsoft-azure-devops/)
- [Monorepo ທຽບກັບ multirepo](ຕົວຢ່າງ/monorepo-ທຽບກັບ-multirepo/)
- [ພາສາການຂຽນໂປຣແກຣມ](ຕົວຢ່າງ/ພາສາການຂຽນໂປຣແກຣມ/)
- [ບ່ອນເກັບຂໍ້ມູນລັບ](ຕົວຢ່າງ/ບ່ອນເກັບຂໍ້ມູນລັບ/)
- [ຮູບແບບຕາປະທັບເວລາ](ຕົວຢ່າງ/ຮູບແບບຕາປະທັບເວລາ/)
- [ອີກຫຼາຍອັນ...](ຕົວຢ່າງ/)

## ບັນທຶກການຕັດສິນໃຈດ້ານສະຖາປັດຕະຍະກຳແມ່ນຫຍັງ?

**ບັນທຶກການຕັດສິນໃຈດ້ານສະຖາປັດຕະຍະກຳ** (ADR) ແມ່ນເອກະສານທີ່ບັນທຶກການຕັດສິນໃຈດ້ານສະຖາປັດຕະຍະກຳທີ່ສຳຄັນ ພ້ອມທັງບໍລິບົດ ແລະ ຜົນສະທ້ອນຂອງການຕັດສິນໃຈນັ້ນ.

**ການຕັດສິນໃຈດ້ານສະຖາປັດຕະຍະກຳ** (AD) ແມ່ນການເລືອກອອກແບບຊອບແວທີ່ຕອບສະໜອງຄວາມຕ້ອງການທີ່ສຳຄັນ.

**ບັນທຶກລວມການຕັດສິນໃຈດ້ານສະຖາປັດຕະຍະກຳ** (ADL) ແມ່ນການລວບລວມ ADR ທັງໝົດທີ່ສ້າງຂຶ້ນ ແລະ ບຳລຸງຮັກສາໄວ້ສຳລັບໂຄງການ (ຫຼື ອົງກອນ) ໃດໜຶ່ງ.

**ຄວາມຕ້ອງການທີ່ມີນັຍສຳຄັນຕໍ່ສະຖາປັດຕະຍະກຳ** (ASR) ແມ່ນຄວາມຕ້ອງການທີ່ມີຜົນກະທົບທີ່ວັດແທກໄດ້ຕໍ່ສະຖາປັດຕະຍະກຳຂອງລະບົບຊອບແວ.

ທັງໝົດນີ້ຢູ່ພາຍໃນຫົວຂໍ້ **ການຄຸ້ມຄອງຄວາມຮູ້ດ້ານສະຖາປັດຕະຍະກຳ** (AKM).

ເປົ້າໝາຍຂອງເອກະສານນີ້ແມ່ນເພື່ອໃຫ້ພາບລວມຢ່າງວ່ອງໄວກ່ຽວກັບ ADR, ວິທີສ້າງ ADR, ແລະ ບ່ອນທີ່ຈະຊອກຫາຂໍ້ມູນເພີ່ມເຕີມ.

ຕົວຫຍໍ້:

  * **AD**: ການຕັດສິນໃຈດ້ານສະຖາປັດຕະຍະກຳ

  * **ADL**: ບັນທຶກລວມການຕັດສິນໃຈດ້ານສະຖາປັດຕະຍະກຳ

  * **ADR**: ບັນທຶກການຕັດສິນໃຈດ້ານສະຖາປັດຕະຍະກຳ

  * **AKM**: ການຄຸ້ມຄອງຄວາມຮູ້ດ້ານສະຖາປັດຕະຍະກຳ

  * **ASR**: ຄວາມຕ້ອງການທີ່ມີນັຍສຳຄັນຕໍ່ສະຖາປັດຕະຍະກຳ

## ວິທີເລີ່ມຕົ້ນໃຊ້ ADR

ເພື່ອເລີ່ມຕົ້ນໃຊ້ ADR ໃຫ້ປຶກສາຫາລືກັບເພື່ອນຮ່ວມທີມກ່ຽວກັບຫົວຂໍ້ເຫຼົ່ານີ້.

ການລະບຸການຕັດສິນໃຈ:

  * AD ມີຄວາມຮີບດ່ວນ ແລະ ສຳຄັນຫຼາຍປານໃດ?

  * ຕ້ອງຕັດສິນໃຈດຽວນີ້ ຫຼື ລໍຖ້າຈົນກວ່າຈະຮູ້ຂໍ້ມູນຫຼາຍກວ່ານີ້ໄດ້?

  * ທັງປະສົບການສ່ວນບຸກຄົນ ແລະ ປະສົບການລວມໝູ່ ລວມເຖິງວິທີການ ແລະ ແນວປະຕິບັດດ້ານການອອກແບບທີ່ເປັນທີ່ຍອມຮັບ ສາມາດຊ່ວຍໃນການລະບຸການຕັດສິນໃຈໄດ້.

  * ໃນທາງທີ່ດີ ຄວນຮັກສາລາຍການສິ່ງທີ່ຕ້ອງຕັດສິນໃຈ ເພື່ອເສີມລາຍການສິ່ງທີ່ຕ້ອງເຮັດຂອງຜະລິດຕະພັນ.

ການຕັດສິນໃຈ:

  * ມີເຕັກນິກການຕັດສິນໃຈຫຼາຍຢ່າງ ທັງແບບທົ່ວໄປ ແລະ ແບບສະເພາະດ້ານສະຖາປັດຕະຍະກຳຊອບແວ ເຊັ່ນ ການສ້າງແຜນທີ່ການສົນທະນາ (dialogue mapping).

  * ການຕັດສິນໃຈເປັນກຸ່ມແມ່ນຫົວຂໍ້ຄົ້ນຄວ້າທີ່ກຳລັງຢູ່ໃນຄວາມສົນໃຈ.

ການບັງຄັບໃຊ້ ແລະ ການຮັບປະກັນການຕັດສິນໃຈ:

  * AD ຖືກນຳໃຊ້ໃນການອອກແບບຊອບແວ; ດັ່ງນັ້ນຕ້ອງສື່ສານໃຫ້ຜູ້ມີສ່ວນໄດ້ສ່ວນເສຍຂອງລະບົບທີ່ສະໜອງທຶນ, ພັດທະນາ ແລະ ດຳເນີນງານລະບົບນັ້ນຮັບຮູ້ ແລະ ຍອມຮັບ.

  * ຮູບແບບການຂຽນໂຄ້ດທີ່ເຫັນສະຖາປັດຕະຍະກຳໄດ້ຊັດເຈນ ແລະ ການທົບທວນໂຄ້ດທີ່ເນັ້ນຄວາມກັງວົນ ແລະ ການຕັດສິນໃຈດ້ານສະຖາປັດຕະຍະກຳ ແມ່ນສອງແນວປະຕິບັດທີ່ກ່ຽວຂ້ອງກັນ.

  * AD ຍັງຕ້ອງໄດ້ຮັບການພິຈາລະນາ (ຄືນໃໝ່) ເມື່ອປັບປຸງລະບົບຊອບແວໃຫ້ທັນສະໄໝໃນການພັດທະນາຕໍ່ເນື່ອງຂອງຊອບແວ.

ການແບ່ງປັນການຕັດສິນໃຈ (ທາງເລືອກ):

  * AD ຫຼາຍຢ່າງເກີດຂຶ້ນຊ້ຳໆໃນຫຼາຍໂຄງການ.

  * ດັ່ງນັ້ນ ປະສົບການກ່ຽວກັບການຕັດສິນໃຈໃນອະດີດ ທັງດີ ແລະ ບໍ່ດີ ສາມາດເປັນຊັບສິນທີ່ນຳກັບມາໃຊ້ໃໝ່ໄດ້ຢ່າງມີຄຸນຄ່າ ເມື່ອໃຊ້ຍຸດທະສາດການຄຸ້ມຄອງຄວາມຮູ້ຢ່າງຊັດເຈນ.

ການບັນທຶກເອກະສານການຕັດສິນໃຈ:

  * ມີແມ່ແບບ ແລະ ເຄື່ອງມືຫຼາຍຢ່າງສຳລັບການບັນທຶກການຕັດສິນໃຈ.

  * ເບິ່ງຊຸມຊົນ agile ເຊັ່ນ ADR ຂອງ M. Nygard.

  * ເບິ່ງຂະບວນການວິສະວະກຳຊອບແວ ແລະ ການອອກແບບສະຖາປັດຕະຍະກຳແບບດັ້ງເດີມ ເຊັ່ນ ຮູບແບບຕາຕະລາງທີ່ IBM UMF ແລະ Tyree ກັບ Akerman ຈາກ CapitalOne ແນະນຳ.

ເພື່ອຂໍ້ມູນເພີ່ມເຕີມ:

  * ຂັ້ນຕອນຂ້າງເທິງນີ້ຖືກນຳມາຈາກບົດຄວາມ Wikipedia ເລື່ອງ [Architectural Decision](https://en.wikipedia.org/wiki/Architectural_decision)

## ວິທີເລີ່ມຕົ້ນໃຊ້ ADR ກັບເຄື່ອງມື

- [MySpec](https://myspec.dev) — ແພລດຟອມຂໍ້ກຳນົດສະເພາະ ແລະ ການຕັດສິນໃຈດ້ານສະຖາປັດຕະຍະກຳແບບອັດຕະໂນມັດ ທີ່ຈັດໂຄງສ້າງລັດຖະທຳມະນູນຂອງໂຄງການ, ສະຖາປັດຕະຍະກຳດ້ານເຕັກນິກ ແລະ ADR ໃຫ້ເປັນ Markdown ທີ່ສະອາດ ແລະ ໃຫ້ບໍລິການຜ່ານ MCP.

ທ່ານສາມາດເລີ່ມຕົ້ນໃຊ້ ADR ກັບເຄື່ອງມືໃດກໍໄດ້ຕາມທີ່ທ່ານຕ້ອງການ.

ຕົວຢ່າງ:

  * ຖ້າທ່ານມັກໃຊ້ Google Drive ແລະ ການແກ້ໄຂອອນລາຍ ທ່ານສາມາດສ້າງ Google Doc ຫຼື Google Sheet.

  * ຖ້າທ່ານມັກໃຊ້ລະບົບຄວບຄຸມເວີຊັນຂອງຊອດໂຄ້ດ ເຊັ່ນ git ທ່ານສາມາດສ້າງໄຟລ໌ໜຶ່ງສຳລັບແຕ່ລະ ADR.

  * ຖ້າທ່ານມັກໃຊ້ເຄື່ອງມືວາງແຜນໂຄງການ ເຊັ່ນ Atlassian Jira ທ່ານສາມາດໃຊ້ຕົວຕິດຕາມການວາງແຜນຂອງເຄື່ອງມືນັ້ນ.

  * ຖ້າທ່ານມັກໃຊ້ວິກິ ເຊັ່ນ MediaWiki ທ່ານສາມາດສ້າງວິກິ ADR.

## ວິທີເລີ່ມຕົ້ນໃຊ້ ADR ກັບ git

ຖ້າທ່ານມັກໃຊ້ລະບົບຄວບຄຸມເວີຊັນ git ນີ້ຄືວິທີທີ່ພວກເຮົາມັກເລີ່ມຕົ້ນໃຊ້ ADR ກັບ git ສຳລັບໂຄງການຊອບແວທົ່ວໄປທີ່ມີຊອດໂຄ້ດ.

ສ້າງໄດເຣັກທໍຣີສຳລັບໄຟລ໌ ADR:

```sh
$ mkdir adr
```

ສຳລັບແຕ່ລະ ADR ໃຫ້ສ້າງໄຟລ໌ຂໍ້ຄວາມໜຶ່ງໄຟລ໌ ເຊັ່ນ `choose-database.md`:

```sh
$ vi choose-database.md
```

ຂຽນຫຍັງກໍໄດ້ທີ່ທ່ານຕ້ອງການໃນ ADR. ເບິ່ງແມ່ແບບໃນຄັງເກັບຂໍ້ມູນນີ້ເພື່ອຂໍແນວຄິດ.

Commit ADR ເຂົ້າໃນ git repo ຂອງທ່ານ.

## ທັກສະ Claude Code ສຳລັບ ADR

ຄັງເກັບຂໍ້ມູນນີ້ມີສອງທັກສະ (skills) ຂອງ [Claude Code](https://claude.com/claude-code) ພາຍໃຕ້ [`skills/`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/) ເພື່ອໃຫ້ຕົວແທນຂຽນໂຄ້ດດ້ວຍ AI ສາມາດຂຽນ ແລະ ບຳລຸງຮັກສາ ADR ຕາມວິທີທີ່ໂຄງການນີ້ແນະນຳ:

- [`architecture-decision-record-skill`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/architecture-decision-record-skill/) — ໃຊ້ທົ່ວໄປ ສຳລັບທຸກຄົນທີ່ຂຽນ ADR ໃນໂຄງການໃດກໍໄດ້. ຊ່ວຍຕັດສິນວ່າການຕັດສິນໃຈຕ້ອງມີ ADR ຫຼືບໍ່, ຕັ້ງໄດເຣັກທໍຣີ `adr/` ຫຼື `decisions/`, ຕັ້ງຊື່ໄຟລ໌, ເລືອກແມ່ແບບຈາກໂຄງຮ່າງສິບເອັດແບບທີ່ມາພ້ອມ ແລະ ຂຽນສ່ວນບໍລິບົດ/ການຕັດສິນໃຈ/ຜົນສະທ້ອນທີ່ແຂງແກ່ນ.

- [`architecture-decision-record-maintainer-skill`](https://github.com/architecture-decision-record/architecture-decision-record/tree/main/skills/architecture-decision-record-maintainer-skill/) — ສຳລັບຜູ້ບຳລຸງຮັກສາຄັງເກັບຂໍ້ມູນນີ້ໂດຍສະເພາະ. ບັນທຶກໂຄງຮ່າງຂອງຄັງເກັບຂໍ້ມູນ, ຂໍ້ກຳນົດການສະທ້ອນ README/locales ແລະ ຂັ້ນຕອນທີ່ແນ່ນອນສຳລັບການເພີ່ມແມ່ແບບ, ຕົວຢ່າງ ຫຼື ລິ້ງເຄື່ອງມືໃໝ່.

ເພື່ອໃຊ້ທັກສະ ໃຫ້ສຳເນົາໂຟນເດີຂອງມັນໄປໃສ່ `.claude/skills/` ທີ່ຮາກຂອງຄັງເກັບຂໍ້ມູນທີ່ທ່ານກຳລັງເຮັດວຽກຢູ່ (ຫຼື ໃສ່ `~/.claude/skills/` ເພື່ອໃຫ້ໃຊ້ໄດ້ໃນທຸກໂຄງການ) ແລ້ວຂໍໃຫ້ Claude Code ຂຽນ ຫຼື ທົບທວນ ADR.

## ຂໍ້ກຳນົດການຕັ້ງຊື່ໄຟລ໌ສຳລັບ ADR

ຖ້າທ່ານເລືອກສ້າງ ADR ເປັນໄຟລ໌ຂໍ້ຄວາມທົ່ວໄປ ທ່ານອາດຕ້ອງການກຳນົດຂໍ້ກຳນົດການຕັ້ງຊື່ໄຟລ໌ ADR ຂອງທ່ານເອງ.

ພວກເຮົາມັກໃຊ້ຂໍ້ກຳນົດການຕັ້ງຊື່ໄຟລ໌ທີ່ມີຮູບແບບສະເພາະ.

ຕົວຢ່າງ:

  * choose-database.md

  * format-timestamps.md

  * manage-passwords.md

  * handle-exceptions.md

ຂໍ້ກຳນົດການຕັ້ງຊື່ໄຟລ໌ຂອງພວກເຮົາ:

  * ຊື່ໃຊ້ວະລີກິລິຍາຄຳສັ່ງໃນປັດຈຸບັນກາລ. ນີ້ຊ່ວຍໃຫ້ອ່ານງ່າຍ ແລະ ກົງກັບຮູບແບບຂໍ້ຄວາມ commit ຂອງພວກເຮົາ.

  * ຊື່ໃຊ້ຕົວພິມນ້ອຍ ແລະ ຂີດຕໍ່ (ຄືກັບຄັງເກັບຂໍ້ມູນນີ້). ນີ້ເປັນຄວາມສົມດຸນລະຫວ່າງຄວາມງ່າຍໃນການອ່ານ ແລະ ຄວາມສະດວກໃນການໃຊ້ງານລະບົບ.

  * ນາມສະກຸນໄຟລ໌ແມ່ນ markdown. ນີ້ມີປະໂຫຍດຕໍ່ການຈັດຮູບແບບທີ່ງ່າຍ.

## ຄຳແນະນຳໃນການຂຽນ ADR ທີ່ດີ

ລັກສະນະຂອງ ADR ທີ່ດີ:

* ເຫດຜົນ: ອະທິບາຍເຫດຜົນທີ່ເຮັດ AD ນັ້ນ. ອາດລວມບໍລິບົດ (ເບິ່ງຂ້າງລຸ່ມ), ຂໍ້ດີ ແລະ ຂໍ້ເສຍຂອງທາງເລືອກຕ່າງໆທີ່ເປັນໄປໄດ້, ການປຽບທຽບຄຸນສົມບັດ, ການສົນທະນາເລື່ອງຕົ້ນທຶນ/ຜົນປະໂຫຍດ ແລະ ອື່ນໆ.

* ສະເພາະເຈາະຈົງ: ແຕ່ລະ ADR ຄວນເປັນເລື່ອງຂອງ AD ດຽວ ບໍ່ແມ່ນຫຼາຍ AD.

* ຕາປະທັບເວລາ: ລະບຸວ່າແຕ່ລະລາຍການໃນ ADR ຖືກຂຽນເມື່ອໃດ. ສິ່ງນີ້ສຳຄັນເປັນພິເສດສຳລັບດ້ານທີ່ອາດປ່ຽນແປງຕະຫຼອດເວລາ ເຊັ່ນ ຕົ້ນທຶນ, ກຳນົດການ, ການຂະຫຍາຍຂະໜາດ ແລະ ເລື່ອງທຳນອງດຽວກັນ.

* ບໍ່ປ່ຽນແປງ: ຢ່າແກ້ໄຂຂໍ້ມູນທີ່ມີຢູ່ແລ້ວໃນ ADR. ແຕ່ໃຫ້ແກ້ໄຂເພີ່ມເຕີມ ADR ໂດຍການເພີ່ມຂໍ້ມູນໃໝ່ ຫຼື ແທນທີ່ ADR ໂດຍການສ້າງ ADR ໃໝ່.

ລັກສະນະຂອງສ່ວນ “ບໍລິບົດ” ທີ່ດີໃນ ADR:

* ອະທິບາຍສະຖານະການຂອງອົງກອນຂອງທ່ານ ແລະ ບູລິມະສິດທາງທຸລະກິດ.

* ລວມເຫດຜົນ ແລະ ຂໍ້ພິຈາລະນາທີ່ອີງໃສ່ອົງປະກອບທາງສັງຄົມ ແລະ ທັກສະຂອງທີມຂອງທ່ານ.

* ລວມຂໍ້ດີ ແລະ ຂໍ້ເສຍທີ່ກ່ຽວຂ້ອງ ແລະ ອະທິບາຍໃນແງ່ທີ່ສອດຄ່ອງກັບຄວາມຕ້ອງການ ແລະ ເປົ້າໝາຍຂອງທ່ານ.

ລັກສະນະຂອງສ່ວນ “ຜົນສະທ້ອນ” ທີ່ດີໃນ ADR:

* ອະທິບາຍສິ່ງທີ່ຕາມມາຈາກການຕັດສິນໃຈ. ອາດລວມຜົນກະທົບ, ຜົນລັບ, ຜົນຜະລິດ, ການຕິດຕາມຜົນ ແລະ ອື່ນໆ.

* ລວມຂໍ້ມູນກ່ຽວກັບ ADR ທີ່ຕາມມາ. ເປັນເລື່ອງທີ່ເກີດຂຶ້ນທົ່ວໄປທີ່ ADR ໜຶ່ງຈະກະຕຸ້ນໃຫ້ຕ້ອງມີ ADR ເພີ່ມເຕີມ ເຊັ່ນ ເມື່ອ ADR ໜຶ່ງເລືອກທາງເລືອກໃຫຍ່ທີ່ຄຸມທັງໝົດ ເຊິ່ງເຮັດໃຫ້ຕ້ອງມີການຕັດສິນໃຈຍ່ອຍເພີ່ມເຕີມ.

* ລວມຂະບວນການທົບທວນຫຼັງດຳເນີນການ. ທີມທົ່ວໄປຈະທົບທວນແຕ່ລະ ADR ຫຼັງຈາກນັ້ນໜຶ່ງເດືອນ ເພື່ອປຽບທຽບຂໍ້ມູນ ADR ກັບສິ່ງທີ່ເກີດຂຶ້ນຈິງໃນການປະຕິບັດ ເພື່ອຮຽນຮູ້ ແລະ ເຕີບໃຫຍ່.

ADR ໃໝ່ອາດເຂົ້າມາແທນທີ່ ADR ກ່ອນໜ້າ:

* ເມື່ອມີການຕັດສິນໃຈ AD ທີ່ແທນທີ່ ຫຼື ເຮັດໃຫ້ ADR ກ່ອນໜ້າໝົດຄວາມຖືກຕ້ອງ ຄວນສ້າງ ADR ໃໝ່

## ແມ່ແບບຕົວຢ່າງ ADR

ແມ່ແບບຕົວຢ່າງ ADR ທີ່ພວກເຮົາລວບລວມຈາກອິນເຕີເນັດ:

- [ແມ່ແບບ ADR ໂດຍ Michael Nygard](ແມ່ແບບ/ແມ່ແບບບັນທຶກການຕັດສິນໃຈຈາກ-michael-nygard/) (ງ່າຍ ແລະ ນິຍົມ)

- [ແມ່ແບບ ADR ໂດຍ Jeff Tyree ແລະ Art Akerman](ແມ່ແບບ/ແມ່ແບບບັນທຶກການຕັດສິນໃຈຈາກ-jeff-tyree-ແລະ-art-akerman/) (ຊັບຊ້ອນກວ່າ)

- [ແມ່ແບບ ADR ສຳລັບຮູບແບບ Alexandrian](ແມ່ແບບ/ແມ່ແບບບັນທຶກການຕັດສິນໃຈສຳລັບຮູບແບບ-alexandrian/) (ງ່າຍ ພ້ອມລາຍລະອຽດບໍລິບົດ)

- [ແມ່ແບບ ADR ສຳລັບກໍລະນີທຸລະກິດ](ແມ່ແບບ/ແມ່ແບບບັນທຶກການຕັດສິນໃຈສຳລັບກໍລະນີທຸລະກິດ/) (ເນັ້ນ MBA ຫຼາຍກວ່າ ພ້ອມຕົ້ນທຶນ, SWOT ແລະ ຄວາມຄິດເຫັນເພີ່ມເຕີມ)

- [ແມ່ແບບ ADR ຂອງໂຄງການ Markdown Any Decision Records (MADR)](ແມ່ແບບ/ແມ່ແບບບັນທຶກການຕັດສິນໃຈຂອງໂຄງການ-madr/) (ທັງເວີຊັນງ່າຍ ແລະ ລະອຽດ; ເວີຊັນຫຼັງເນັ້ນທາງເລືອກ ແລະ ຂໍ້ດີຂໍ້ເສຍຂອງມັນ)

- [ແມ່ແບບ ADR ທີ່ໃຊ້ Planguage](ແມ່ແບບ/ແມ່ແບບບັນທຶກການຕັດສິນໃຈທີ່ໃຊ້-planguage/) (ເນັ້ນການຮັບປະກັນຄຸນນະພາບຫຼາຍກວ່າ)

- [ແມ່ແບບສຳລັບການຕັດສິນໃຈດ້ານເຕັກນິກທີ່ສຳຄັນ (ITD) ໂດຍ Ignacio Larrañaga](ແມ່ແບບ/ແມ່ແບບບັນທຶກການຕັດສິນໃຈສຳລັບການຕັດສິນໃຈດ້ານເຕັກນິກທີ່ສຳຄັນ/) (ກະທັດຮັດ ແລະ ເອົາການຕັດສິນໃຈເປັນອັນດັບໜຶ່ງ ປັບປຸງເພື່ອການທົບທວນຂອງຜູ້ບໍລິຫານທີ່ວ່ອງໄວ)

## ຄຳແນະນຳດ້ານການເຮັດວຽກເປັນທີມສຳລັບ ADR

ຖ້າທ່ານກຳລັງພິຈາລະນາໃຊ້ບັນທຶກການຕັດສິນໃຈກັບທີມຂອງທ່ານ ນີ້ແມ່ນຄຳແນະນຳບາງຢ່າງທີ່ພວກເຮົາໄດ້ຮຽນຮູ້ຈາກການເຮັດວຽກກັບຫຼາຍທີມ.

ທ່ານມີໂອກາດນຳພາເພື່ອນຮ່ວມທີມ ໂດຍການລົມກັນກ່ຽວກັບ “ເປັນຫຍັງ” ແທນທີ່ຈະບັງຄັບ “ເຮັດຫຍັງ”. ຕົວຢ່າງ ບັນທຶກການຕັດສິນໃຈເປັນວິທີໃຫ້ທີມຄິດໄດ້ສະຫຼາດຂຶ້ນ ແລະ ສື່ສານໄດ້ດີຂຶ້ນ; ບັນທຶກການຕັດສິນໃຈບໍ່ມີຄຸນຄ່າຖ້າມັນເປັນພຽງເອກະສານທີ່ຖືກບັງຄັບໃຫ້ເຮັດຫຼັງເກີດເຫດ.

ບາງທີມມັກຊື່ “ການຕັດສິນໃຈ” (decisions) ຫຼາຍກວ່າຕົວຫຍໍ້ “ADR”. ເມື່ອບາງທີມໃຊ້ຊື່ໄດເຣັກທໍຣີວ່າ “decisions” ມັນຄືກັບວ່າຫຼອດໄຟສະຫວ່າງຂຶ້ນ ແລະ ທີມເລີ່ມໃສ່ຂໍ້ມູນເພີ່ມເຕີມລົງໃນໄດເຣັກທໍຣີ ເຊັ່ນ ການຕັດສິນໃຈເລື່ອງຜູ້ຂາຍ, ການຕັດສິນໃຈເລື່ອງການວາງແຜນ, ການຕັດສິນໃຈເລື່ອງກຳນົດການ ແລະ ອື່ນໆ. ຂໍ້ມູນທຸກປະເພດເຫຼົ່ານີ້ສາມາດໃຊ້ແມ່ແບບດຽວກັນ. ພວກເຮົາຕັ້ງສົມມຸດຕິຖານວ່າຄົນຮຽນຮູ້ໄວກວ່າດ້ວຍຄຳສັບ (“decisions”) ຫຼາຍກວ່າຕົວຫຍໍ້ (“ADR”) ແລະ ຄົນມີແຮງຈູງໃຈຫຼາຍຂຶ້ນທີ່ຈະຂຽນເອກະສານງານທີ່ກຳລັງດຳເນີນເມື່ອຕັດຄຳວ່າ “ບັນທຶກ” (record) ອອກ ແລະ ນັກພັດທະນາ ແລະ ຜູ້ຈັດການບາງຄົນກໍບໍ່ມັກຄຳວ່າ “ສະຖາປັດຕະຍະກຳ” (architecture).

ໃນທາງທິດສະດີ ການບໍ່ປ່ຽນແປງແມ່ນດີທີ່ສຸດ. ໃນທາງປະຕິບັດ ການປ່ຽນແປງໄດ້ໃຊ້ໄດ້ຜົນດີກວ່າສຳລັບທີມຂອງພວກເຮົາ. ພວກເຮົາໃສ່ຂໍ້ມູນໃໝ່ເຂົ້າໃນ ADR ທີ່ມີຢູ່ ພ້ອມກັບຕາປະທັບວັນທີ ແລະ ໝາຍເຫດວ່າຂໍ້ມູນນັ້ນມາຫຼັງຈາກການຕັດສິນໃຈ. ແນວທາງແບບນີ້ນຳໄປສູ່ “ເອກະສານທີ່ມີຊີວິດ” ທີ່ພວກເຮົາທຸກຄົນສາມາດປັບປຸງໄດ້. ການປັບປຸງທົ່ວໄປແມ່ນເມື່ອພວກເຮົາໄດ້ຂໍ້ມູນຈາກເພື່ອນຮ່ວມທີມໃໝ່, ຜະລິດຕະພັນໃໝ່, ຜົນຈິງຈາກການນຳໃຊ້ຂອງພວກເຮົາ ຫຼື ການປ່ຽນແປງຈາກບຸກຄົນທີສາມຫຼັງຈາກນັ້ນ ເຊັ່ນ ຄວາມສາມາດຂອງຜູ້ຂາຍ, ແຜນລາຄາ, ສັນຍາອະນຸຍາດ ແລະ ອື່ນໆ.

## ຄຳຖາມດ້ານການເຮັດວຽກເປັນທີມສຳລັບ ADR

### ໃຜສາມາດສ້າງ ADR ໄດ້?

ພິຈາລະນາດ້ານຕ່າງໆ ເຊັ່ນ ບຸກຄົນສະເພາະ, ຫຼື ບົດບາດສະເພາະ, ຫຼື ທີມສະເພາະ, ຫຼື ພະແນກສະເພາະ; ແລະ ພິຈາລະນາດ້ວຍວ່າມີບຸກຄົນ, ບົດບາດ, ທີມ ຫຼື ພະແນກໃດທີ່ສາມາດມອບໝາຍໃຫ້ສ້າງ ADR ໄດ້ ຄືພວກເຂົາຮ້ອງຂໍ ADR ທີ່ຄົນອື່ນຈະເປັນຜູ້ຂຽນ. 

ຕົວຢ່າງຄຳຕອບ: ທຸກຄົນໃນອົງກອນຂອງພວກເຮົາທີ່ໄດ້ອ່ານໜ້າ README ກ່ຽວກັບບັນທຶກການຕັດສິນໃຈດ້ານສະຖາປັດຕະຍະກຳ ສາມາດສະເໜີ ADR ໄດ້ ຄືບຸກຄົນນັ້ນສາມາດເລີ່ມຂຽນມັນ ແລະ ແບ່ງປັນໃຫ້ທີມ.

### ອັນໃດເປັນເຫດຜົນໃຫ້ສ້າງ ADR?

ພິຈາລະນາດ້ານຕ່າງໆ ເຊັ່ນ ວິທີການເຮັດວຽກຂອງທີມໃນອົງກອນຂອງທ່ານ, ໂຄງສ້າງລະບົບຊອບແວຂອງທ່ານ, ການປະສານງານລະຫວ່າງທີມ, ຄວາມສາມາດໃນການບຳລຸງຮັກສາໄລຍະຍາວ, ສ່ວນຕໍ່ປະສານພາຍນອກ, ທ່ານຢາກໃຫ້ໃຜໄດ້ຮັບປະໂຫຍດ ແລະ ເລື່ອງທຳນອງດຽວກັນ. 

ຕົວຢ່າງຄຳຕອບ: ພວກເຮົາຢາກສ້າງ ADR ເມື່ອພວກເຮົາຢາກໃຫ້ນັກພັດທະນາໃນອະນາຄົດເຂົ້າໃຈ “ເຫດຜົນ” ຂອງສິ່ງທີ່ພວກເຮົາກຳລັງເຮັດ.

### ອັນໃດເປັນເຫດຜົນບໍ່ໃຫ້ສ້າງ ADR?

ພິຈາລະນາດ້ານຕ່າງໆ ເຊັ່ນ ການຕັດສິນໃຈທີ່ບໍ່ກ່ຽວກັບສະຖາປັດຕະຍະກຳ, ຫຼື ນ້ອຍມາກ ເຊັ່ນ ມີຄວາມສ່ຽງໜ້ອຍທີ່ສຸດ ຫຼື ຢູ່ໃນຕົວເອງ ຫຼື ກ່ຽວກັບນັກພັດທະນາຄົນດຽວ, ຫຼື ໄດ້ຮັບການຄຸ້ມຄອງຄົບຖ້ວນຢູ່ບ່ອນອື່ນແລ້ວ ເຊັ່ນ ໂດຍມາດຕະຖານ ຫຼື ນະໂຍບາຍ ຫຼື ເອກະສານ, ຫຼື ເປັນການຊົ່ວຄາວ ເຊັ່ນ ວິທີແກ້ໄຂຊົ່ວຄາວ ຫຼື ການພິສູດແນວຄິດ ຫຼື ການທົດລອງ. 

ຕົວຢ່າງຄຳຕອບ: ພວກເຮົາຢາກຂ້າມ ADR ເມື່ອການຕັດສິນໃຈມີຂອບເຂດ, ເວລາ, ຄວາມສ່ຽງ ແລະ ຕົ້ນທຶນຈຳກັດ, ຫຼື ໄດ້ຮັບການຄຸ້ມຄອງຢູ່ບ່ອນອື່ນແລ້ວ.

### ວົງຈອນຊີວິດຂອງ ADR ແມ່ນຫຍັງ?

ພິຈາລະນາດ້ານຕ່າງໆ ເຊັ່ນ ຂະບວນການສ້າງ, ຂະບວນການຄົ້ນຄວ້າ, ຂະບວນການຕັດສິນໃຈ, ຂະບວນການປະຕິບັດ ແລະ ຂະບວນການຢຸດໃຊ້. ພິຈາລະນາວິທີຕິດຕາມວົງຈອນຊີວິດຂອງ ADR ຕະຫຼອດເວລາ ເຊັ່ນ ວິທີຍ້າຍ ADR ຈາກສະຖານະໜຶ່ງໄປຍັງສະຖານະຕໍ່ໄປ ແລະ ວິທີສື່ສານເລື່ອງນີ້ໃຫ້ຜູ້ມີສ່ວນໄດ້ສ່ວນເສຍ. 

ຕົວຢ່າງຄຳຕອບ: ພວກເຮົາຢາກໃຫ້ ADR ມີຫ້າຂັ້ນຕອນຂອງວົງຈອນຊີວິດ: ເລີ່ມຕົ້ນ → ຄົ້ນຄວ້າ → ປະເມີນ → ປະຕິບັດ → ບຳລຸງຮັກສາ → ຢຸດໃຊ້.

### ເກນສຳລັບຂັ້ນຕອນວົງຈອນຊີວິດຂອງ ADR ແມ່ນຫຍັງ?

ພິຈາລະນາດ້ານຕ່າງໆ ເຊັ່ນ ເກນການຍອມຮັບສຳລັບ ADR ຄືທ່ານຮູ້ໄດ້ແນວໃດວ່າມັນດີພໍທີ່ຈະກ້າວຈາກຂັ້ນຕອນວົງຈອນຊີວິດໜຶ່ງໄປຍັງຂັ້ນຕອນຕໍ່ໄປ? ບັນຫາຖືກອະທິບາຍຢ່າງຊັດເຈນບໍ? ໄດ້ພິຈາລະນາທາງເລືອກແລ້ວບໍ? ຂໍ້ແລກປ່ຽນຖືກເຂົ້າໃຈ ແລະ ບັນທຶກໄວ້ດີພໍບໍ?
ບໍລິບົດທີ່ກ່ຽວຂ້ອງທັງໝົດຄົບຖ້ວນບໍ? ຜູ້ມີສ່ວນໄດ້ສ່ວນເສຍທີ່ກ່ຽວຂ້ອງທັງໝົດມີສ່ວນຮ່ວມແລ້ວບໍ? ຄຳຕິຊົມທັງໝົດຖືກນຳມາລວມແລ້ວບໍ? 

ຕົວຢ່າງຄຳຕອບ: ພວກເຮົາຢາກໃຫ້ຜູ້ມີສ່ວນໄດ້ສ່ວນເສຍລົງຄະແນນສຽງໃຫ້ ADR ເມື່ອທີມທີ່ຮັບຜິດຊອບໄດ້ 1) ສຳເລັດການຄົ້ນຄວ້າ, 2) ສຳເລັດການປະເມີນ, 3) ເຜີຍແຜ່ຂໍ້ສະເໜີ ADR ໃຫ້ຜູ້ມີສ່ວນໄດ້ສ່ວນເສຍພ້ອມຄຳຂໍຄວາມຄິດເຫັນ ແລະ ກອບເວລາໜຶ່ງອາທິດ, 4) ຄວາມຄິດເຫັນທັງໝົດຂອງຜູ້ມີສ່ວນໄດ້ສ່ວນເສຍຖືກນຳມາລວມ ແລະ ແກ້ໄຂແລ້ວ.

### ບົດບາດ ແລະ ຄວາມຮັບຜິດຊອບໃດທີ່ກ່ຽວຂ້ອງກັບ ADR?

ພິຈາລະນາບົດບາດ ເຊັ່ນ ຜູ້ສະເໜີ, ຜູ້ຄົ້ນຄວ້າ, ຜູ້ປະເມີນ, ຜູ້ທົບທວນ, ຜູ້ອະນຸມັດ, ຜູ້ບຳລຸງຮັກສາ ແລະ ອື່ນໆ. ພິຈາລະນາຄວາມຮັບຜິດຊອບ ເຊັ່ນ ການສື່ສານກັບຜູ້ມີສ່ວນໄດ້ສ່ວນເສຍ, ການຮັບປະກັນວ່າຄວາມຄາດຫວັງຖືກຕອບສະໜອງ, ການແບ່ງປັນໃນເວັບໄຊ ຫຼື ອິນທຣາເນັດ ແລະ ການທົບທວນວຽກເປັນໄລຍະ ໂດຍສະເພາະເມື່ອມີການປ່ຽນແປງທີ່ກ່ຽວຂ້ອງ.

ຕົວຢ່າງຄຳຕອບ: ພວກເຮົາຢາກໃຫ້ແຕ່ລະ ADR ມີຜູ້ຕິດຕໍ່ຫຼັກ, ຜູ້ຕິດຕໍ່ສຳຮອງ ແລະ ທີມທີ່ຮັບຜິດຊອບສະເໝີ; ພວກເຂົາຮັບຜິດຊອບການສື່ສານ, ການເຜີຍແຜ່, ການບຳລຸງຮັກສາ, ການທົບທວນເປັນໄລຍະຢ່າງໜ້ອຍປີລະຄັ້ງ ແລະ ການຢຸດໃຊ້ໃນທີ່ສຸດຕາມຄວາມຈຳເປັນ.

### ການກຳກັບດູແລກ່ຽວຂ້ອງກັບ ADR ແນວໃດ?

ພິຈາລະນາດ້ານຕ່າງໆ ເຊັ່ນ ວິທີການເຮັດວຽກຂອງອົງກອນທ່ານ, ຄວາມຕ້ອງການພິເສດດ້ານການປະຕິບັດຕາມກົດລະບຽບ ເຊັ່ນ ດ້ານກົດໝາຍ ຫຼື ດ້ານຊັບພະຍາກອນມະນຸດ, ທ່ານຢາກຈັດການກັບການເຫັນພ້ອມທຽບກັບຄວາມຂັດແຍ້ງທຽບກັບການສົ່ງຕໍ່ຂຶ້ນລະດັບສູງແນວໃດ. ມີດ້ານ, ບຸກຄົນ ຫຼື ທີມໃດທີ່ສາມາດມີອິດທິພົນຕໍ່ ADR ຫຼາຍກວ່າຄົນອື່ນ ເຊັ່ນ ສາມາດອະນຸມັດ, ລົງຄະແນນສຽງ ຫຼື ຄັດຄ້ານມັນ?

ຕົວຢ່າງຄຳຕອບ: ການກຳກັບດູແລ ADR ເປັນໄປຕາມລຳດັບຄວາມສຳຄັນນີ້: CEO, CTO, CLO, ທີມທີ່ປະຕິບັດ ADR, ຜູ້ຊ່ຽວຊານໃນທີມທີ່ມີຄວາມຮູ້ກ່ຽວກັບ AD ຫຼາຍທີ່ສຸດ. ບໍ່ມີໃຜອື່ນມີອຳນາດກຳກັບດູແລ ເວັ້ນເສຍແຕ່ໄດ້ອະທິບາຍໄວ້ໃນ ADR. 

### ຫຼັກການໃດທີ່ກ່ຽວຂ້ອງກັບ ADR?

ພິຈາລະນາດ້ານຕ່າງໆ ເຊັ່ນ ວິທີການເຮັດວຽກຂອງອົງກອນທ່ານ ເຊິ່ງລວມເຖິງການເຄື່ອນໄຫວໄວທຽບກັບຊ້າ, ສຳລັບການເຫັນພ້ອມໃນການຕັດສິນໃຈທຽບກັບຄວາມຂັດແຍ້ງໃນການຕັດສິນໃຈ, ແລະ ສຳລັບຄວາມມັກຄວາມສ່ຽງທຽບກັບຄວາມມັກຄວາມປອດໄພ, ການສົນທະນາສາທາລະນະທຽບກັບການສົນທະນາສ່ວນຕົວ ແລະ ເລື່ອງທຳນອງດຽວກັນ.

ຕົວຢ່າງຄຳຕອບ: ພວກເຮົາໃຊ້ຫຼັກການຜູ້ນຳຄື ໃຫ້ຄວາມສຳຄັນກັບການລົງມືເຮັດ, ບໍ່ເຫັນດີແຕ່ຍອມຕາມ (disagree-and-commit), ການຄາດຄະເນທີ່ໝັ້ນໃຈ 70% ແມ່ນດີພໍສຳລັບການຕັດສິນໃຈທີ່ຍ້ອນກັບງ່າຍ ແລະ ແຍກອອກງ່າຍ, ແລະ ວິທີການເຮັດວຽກແບບເປີດເຜີຍ ຍົກເວັ້ນຂໍ້ມູນລັບຕາມທີ່ອະທິບາຍໄວ້ໃນຂໍ້ຕົກລົງຄວາມລັບຂອງອົງກອນຂອງພວກເຮົາ.

## ແນວຄິດຂັ້ນຕໍ່ໄປສຳລັບ ADR

[Arc42](https://arc42.org/) ຕອບສອງຄຳຖາມໃນແບບເປັນຈິງ ແລະ ສາມາດປັບໃຫ້ເໝາະກັບຄວາມຕ້ອງການສະເພາະຂອງທ່ານ. ທ່ານຄວນບັນທຶກ/ສື່ສານຫຍັງກ່ຽວກັບສະຖາປັດຕະຍະກຳຂອງທ່ານ? ທ່ານຄວນບັນທຶກ/ສື່ສານແນວໃດ? Arc42 ລວມບັນທຶກການຕັດສິນໃຈດ້ານສະຖາປັດຕະຍະກຳ ພ້ອມຄຳແນະນຳກ່ຽວກັບເປົ້າໝາຍ, ຂໍ້ຈຳກັດ, ບໍລິບົດ, ຄຸນນະພາບ, ຄວາມສ່ຽງ ແລະ ອື່ນໆ.

[ແບບຈຳລອງ C4](https://c4model.com/) ເປັນແນວທາງການແຕ້ມແຜນຜັງສະຖາປັດຕະຍະກຳຊອບແວທີ່ຮຽນຮູ້ງ່າຍ ແລະ ເປັນມິດກັບນັກພັດທະນາ. C4 ເປັນຊຸດແຜນຜັງແບບລຳດັບຊັ້ນສຳລັບບໍລິບົດ, ຄອນເທນເນີ, ອົງປະກອບ, ໂຄ້ດ ພ້ອມແຜນຜັງສະໜັບສະໜູນສຳລັບພູມທັດລະບົບ, ແບບເຄື່ອນໄຫວ ແລະ ການຕິດຕັ້ງ.

## ແຜນຜັງສະຖາປັດຕະຍະກຳ, ມຸມມອງ ແລະ ຈຸດຢືນ

ແຜນຜັງສະຖາປັດຕະຍະກຳເອີ້ນວ່າ "ມຸມມອງສະຖາປັດຕະຍະກຳ" (architecture view).

"ມຸມມອງສະຖາປັດຕະຍະກຳ" ແມ່ນຕົວຢ່າງຂອງ "ຈຸດຢືນສະຖາປັດຕະຍະກຳ" (architecture viewpoint).

"ຈຸດຢືນສະຖາປັດຕະຍະກຳ" ມີຜູ້ຊົມສະເພາະທີ່ມີຄວາມກັງວົນສະເພາະຢູ່ໃນໃຈ.

ຕົວຢ່າງຈຸດຢືນສະຖາປັດຕະຍະກຳ, ມຸມມອງ ແລະ ແຜນຜັງ:

- ຄວາມສາມາດທາງທຸລະກິດ

- ຂະບວນການທຸລະກິດລະດັບສູງ

- [ກະແສຄຸນຄ່າ](https://en.wikipedia.org/wiki/Value_stream)

- ໜ້າທີ່ຊອບແວທີ່ແຜນທີ່ໄປຫາອົງປະກອບແອັບພລິເຄຊັນ

- ແຜນຜັງບໍລິບົດຂອງ[ແບບຈຳລອງ C4](https://en.wikipedia.org/wiki/C4_model) (TO-BE / AS-IS)

- ແຜນຜັງຄອນເທນເນີຂອງ[ແບບຈຳລອງ C4](https://en.wikipedia.org/wiki/C4_model) (TO-BE / AS-IS)

- [ແຜນຜັງຄວາມສຳພັນຂອງເອນທິຕີ](https://en.wikipedia.org/w/index.php?title=Entity_relationship_diagram) (ERD) ເພື່ອແຜນທີ່ເອນທິຕີຂໍ້ມູນໄປຫາອົງປະກອບແອັບພລິເຄຊັນ

- [ແຜນຜັງລຳດັບ](https://en.wikipedia.org/wiki/Sequence_diagram) ເພື່ອອະທິບາຍຂັ້ນຕອນໜ້າທີ່ພາຍໃນລະບົບ ແລະ ສຳລັບການເຊື່ອມໂຍງ

- ແຜນຜັງ[Business Process Model and Notation](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN) ເພື່ອອະທິບາຍການໄຫຼຂອງຂໍ້ມູນຂ້າມອົງປະກອບແອັບພລິເຄຊັນ

- ແຜນຜັງ[Business Process Model and Notation](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN) ເພື່ອອະທິບາຍຂະບວນການທຸລະກິດ / ສະຖານະການຂອງຜູ້ໃຊ້

- ແຜນຜັງ[ການຈັດການຕົວຕົນ ແລະ ການເຂົ້າເຖິງ](https://en.wikipedia.org/wiki/Identity_and_access_management) (IAM)

- ແຜນຜັງ[ການຄວບຄຸມການເຂົ້າເຖິງຕາມບົດບາດ](https://en.wikipedia.org/wiki/Role-based_access_control) (RBAC) ພ້ອມບົດບາດຕໍ່ອົງປະກອບແອັບພລິເຄຊັນ

- ແຜນຜັງ[ການຄວບຄຸມການເຂົ້າເຖິງຕາມຄຸນລັກສະນະ](https://en.wikipedia.org/wiki/Attribute-based_access_control) (ABAC) ພ້ອມຄຸນລັກສະນະຕໍ່ອົງປະກອບແອັບພລິເຄຊັນ

- ແຜນຜັງຄວາມເປັນສ່ວນຕົວ

ແຜນຜັງທີ່ກ່ຽວຂ້ອງ:

- ແຜນຜັງກໍລະນີການນຳໃຊ້ (Use Case Diagram) ສະແດງກໍລະນີການນຳໃຊ້ຕໍ່ຝ່າຍບໍລິຫານ/ລູກຄ້າ ເຊິ່ງມາກ່ອນຄວາມຕ້ອງການ ເຊິ່ງມາກ່ອນສະຖາປັດຕະຍະກຳຊອບແວ.

- ແຜນຜັງການຕິດຕັ້ງ (Deployment Diagram) ສະແດງຮາດແວ/ຄອມພິວເຕີທາງກາຍະພາບທີ່ອົງປະກອບຊອບແວຖືກຕິດຕັ້ງໄປຫາ.
- ແຜນຜັງການໄຫຼຂອງຂໍ້ມູນ (Data Flow Diagram) ສະແດງວິທີທີ່ຂໍ້ມູນເຄື່ອນຜ່ານລະບົບ ແລະ ຖືກແປງ.
- ແຜນຜັງລຳດັບ (Sequence Diagram) ຖືກໃຊ້ເພື່ອສະແດງວິທີທີ່ໂປຣໂຕຄອນເຊັ່ນ HTTP ເຮັດວຽກເທິງແກນເວລາ.

- ແຜນຜັງກິດຈະກຳ (Activity Diagram) ສະແດງຂັ້ນຕອນການເຮັດວຽກຂອງກິດຈະກຳທີ່ລະບົບຊອບແວດຳເນີນ ຄືກັບ AI ຂອງ NPC.

## ຟັງຊັນຄວາມເໝາະສົມສຳລັບການຕັດສິນໃຈເປັນໂຄ້ດ

ຟັງຊັນຄວາມເໝາະສົມ (fitness function) ແມ່ນການກວດສອບອັດຕະໂນມັດທີ່ເປັນເປົ້າໝາຍ ຂຽນດ້ວຍໂຄ້ດໂປຣແກຣມ ເພື່ອຢືນຢັນວ່າການຕັດສິນໃຈຖືກຮັກສາໄວ້.

- ຟັງຊັນຄວາມເໝາະສົມເຮັດໃຫ້ການຕັດສິນໃຈທົດສອບໄດ້ ແລະ ຮັບປະກັນໄດ້.

- ຟັງຊັນຄວາມເໝາະສົມສຳລັບການຕັດສິນໃຈສາມາດຊ່ວຍການຮັບປະກັນຄຸນນະພາບ, ຂະບວນການຕາມລະບຽບ ແລະ ເປົ້າໝາຍການກຳກັບດູແລໄດ້ຫຼາຍ.

### ຟັງຊັນຄວາມເໝາະສົມເຊື່ອມໂຍງກັບການຕັດສິນໃຈແນວໃດ

ບັນທຶກການຕັດສິນໃຈບັນທຶກເອກະສານການຕັດສິນໃຈ ໃນຂະນະທີ່ຟັງຊັນຄວາມເໝາະສົມຮັບປະກັນການຕັດສິນໃຈນັ້ນ.

- ຕົວຢ່າງການຕັດສິນໃຈ: ພວກເຮົາໃຊ້ event sourcing ເພື່ອຕອບສະໜອງຄວາມຕ້ອງການດ້ານການກວດສອບ.

- ຕົວຢ່າງຟັງຊັນຄວາມເໝາະສົມ: ພວກເຮົາໃຊ້ເຊີບເວີການລວມລະບົບຢ່າງຕໍ່ເນື່ອງເພື່ອທົດສອບວ່າທຸກການປ່ຽນແປງສະຖານະຕ້ອງສ້າງເຫດການ (events).

### ເປັນຫຍັງຟັງຊັນຄວາມເໝາະສົມຈຶ່ງຊ່ວຍການຕັດສິນໃຈ

ການວັດແທກທີ່ເປັນເປົ້າໝາຍ: ຟັງຊັນຄວາມເໝາະສົມຜ່ານ ຫຼື ບໍ່ຜ່ານ ສະນັ້ນວຽກຈຶ່ງເຫັນໄດ້ ແລະ ຊັດເຈນ.

ການໃຊ້ຢ່າງຕໍ່ເນື່ອງ: ຟັງຊັນຄວາມເໝາະສົມແມ່ນກົດທີ່ມີຊີວິດຂອງທ່ານ ເຮັດວຽກທຸກຄັ້ງທີ່ commit ແລະ build.

ຄວາມໝັ້ນໃຈໃນການ refactor: ຟັງຊັນຄວາມເໝາະສົມຈັບຂໍ້ຜິດພາດຂອງກົດການຕັດສິນໃຈໂດຍອັດຕະໂນມັດ.

ການກຳກັບດູແລທີ່ຂະຫຍາຍໄດ້: ຟັງຊັນຄວາມເໝາະສົມຮັບປະກັນມາດຕະຖານໂດຍບໍ່ສ້າງຈຸດຄອດຂວດ.

### ຟັງຊັນຄວາມເໝາະສົມໃຊ້ AI ໄດ້ບໍ?

ຟັງຊັນຄວາມເໝາະສົມສາມາດນຳໃຊ້ AI LLM ສຳລັບການຕັດສິນໃຈ ໂດຍຖາມຄຳຖາມກ່ຽວກັບວຽກຂອງທ່ານ
ເຊັ່ນ ແຜນ, ໂຄ້ດ, ສະກີມາ, API ແລະ ອື່ນໆ:

```txt
IMPORTANT: Prefer retrieval-led reasoning over pre-training-led reasoning.
IMPORTANT: Turn on extended thinking. Turn on expert advice. Turn on search.

This is a fitness function to evaluate if our work is
using all our decisions, and is correct and accurate.

- Our decisions are here: {url}
- Our work to evaluate is here: {url}

Explain any errors, problems, gaps, weaknesses. Be direct. Be decisive.
```

### ການທົດສອບໜ່ວຍສະຖາປັດຕະຍະກຳ

[ArchUnit](https://www.archunit.org/): ກວດກົດສະຖາປັດຕະຍະກຳຂອງໂຄ້ດ Java ໂດຍໃຊ້ເຟຣມເວີກທົດສອບໜ່ວຍ Java ທົ່ວໄປໃດກໍໄດ້.

[ArchUnitTS](https://github.com/LukasNiessen/ArchUnitTS): ກວດກົດສະຖາປັດຕະຍະກຳຂອງໂຄ້ດ TypeScript ແລະ ໂຄ້ດ JavaScript ໂດຍໃຊ້ Jest, Vitest, Jasmine ແລະ ອື່ນໆ.

## ຮົ້ວກັ້ນການຕັດສິນໃຈສຳລັບ pull request

[Decision Guardian](https://github.com/DecispherHQ/decision-guardian)
ສະແດງບັນທຶກການຕັດສິນໃຈທີ່ຖືກຕ້ອງໂດຍອັດຕະໂນມັດໃນເວລາທີ່ຖືກຕ້ອງ — ເມື່ອ
ນັກພັດທະນາກຳລັງແກ້ໄຂໂຄ້ດທີ່ການຕັດສິນໃຈເຫຼົ່ານັ້ນຄຸມຢູ່. ແທນທີ່ຈະ
ຫວັງວ່ານັກພັດທະນາຈະອ່ານໂຟນເດີເອກະສານກ່ອນລວມ ບໍລິບົດທີ່ກ່ຽວຂ້ອງ
ປາກົດໂດຍກົງເທິງ pull request.

ສິ່ງນີ້ໃຊ້ໄດ້ກັບບັນທຶກການຕັດສິນໃຈທຸກປະເພດ: ການຕັດສິນໃຈດ້ານສະຖາປັດຕະຍະກຳ, ການຕັດສິນໃຈດ້ານຂໍ້ມູນ,
ການຕັດສິນໃຈດ້ານການປະຕິບັດຕາມກົດລະບຽບ, ການຕັດສິນໃຈທາງຄລີນິກ ແລະ ການແພດ, ການຕັດສິນໃຈດ້ານຄວາມປອດໄພ
ແລະ ອື່ນໆ.

ໃຊ້ໄດ້ກັບທຸກລະບົບ CI (GitLab, Jenkins, CircleCI) ແລະ ເປັນ pre-commit hook.
ຊອດເປີດ. ໃບອະນຸຍາດ MIT.

[ADR Guard](https://github.com/chohan-sarmad-ali/delivery-gates) ເປັນ GitHub
Action ທີ່ເຮັດໃຫ້ pull request ລົ້ມເຫຼວເມື່ອເສັ້ນທາງໂຄ້ດທີ່ເຝົ້າເບິ່ງປ່ຽນແປງ ໂດຍບໍ່ມີ
ບັນທຶກການຕັດສິນໃຈດ້ານສະຖາປັດຕະຍະກຳຖືກເພີ່ມ ຫຼື ອັບເດດ. ການຍົກເວັ້ນແມ່ນຊັດເຈນ: ແຖວ
`ADR-Exempt:` ພ້ອມເຫດຜົນຈະຜ່ານປະຕູ ແລະ ຖືກຂຽນລົງໃນບົດສະຫຼຸບ
ຂອງວຽກ. ບໍ່ຂຶ້ນກັບແມ່ແບບ, ບໍ່ມີຄວາມຂຶ້ນກັບກັນ. ຊອດເປີດ. ໃບອະນຸຍາດ MIT.

## ຂໍ້ມູນເພີ່ມເຕີມ

ບົດນຳ:

- [Architectural decision (wikipedia.org)](https://wikipedia.org/wiki/Architectural_decision)

- [Architecturally significant requirements (wikipedia.org)](https://wikipedia.org/wiki/Architecturally_significant_requirements)

ແມ່ແບບ:

- [Documenting architecture decisions - Michael Nygard (thinkrelevance.com)](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)

- [Markdown Architectural Decision Records (adr.github.io)](https://adr.github.io/madr/)

- [Template for documenting architecture alternatives and decisions (stackoverflow.com)](http://stackoverflow.com/questions/7104735/template-for-documenting-architecture-alternatives-and-decisions)

ເຈາະເລິກ:

- [ADMentor XML project (github.com)](https://github.com/IFS-HSR/ADMentor)

- [Architectural Decision Guidance across Projects: Problem Space Modeling, Decision Backlog Management and Cloud Computing Knowledge (ifs.hsr.ch)](https://www.ifs.hsr.ch/fileadmin/user_upload/customers/ifs.hsr.ch/Home/projekte/ADMentor-WICSA2015ubmissionv11nc.pdf)

- [The Decision View's Role in Software Architecture Practice (computer.org)](https://www.computer.org/csdl/mags/so/2009/02/mso2009020036-abs.html)

- [Documenting Software Architectures: Views and Beyond (resources.sei.cmu.edu)](http://resources.sei.cmu.edu/library/asset-view.cfm?assetID=30386)

- [Architecture Decisions: Demystifying Architecture (utdallas.edu)](https://www.utdallas.edu/~chung/SA/zz-Impreso-architecture_decisions-tyree-05.pdf)

- [ThoughtWorks Technology Radar: Lightweight Architecture Decision Records (thoughtworks.com)](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)

- [A Skeptic’s Guide to Software Architecture Decisions (infoq.com)](https://www.infoq.com/articles/architecture-skeptics-guide/)

- [Architectural Decisions — The Making Of](https://ozimmer.ch/practices/2020/04/27/ArchitectureDecisionMaking.html)

- [Architectural Retrospectives: the Key to Getting Better at Architecting](https://www.infoq.com/articles/architectural-retrospectives/)

- [Software Architecture Monday with Mark Richards](https://developertoarchitect.com/lessons/) - ບົດຮຽນສະຖາປັດຕະຍະກຳຊອບແວລາຍເດືອນຟຣີ

- [Solution Architecture Decisions - By Gareth Morgan](https://www.linkedin.com/pulse/solution-architecture-decisions-gareth-morgan-0r5xe/)

- ["Keep the Why: Code Becomes Legacy When Nobody Remembers Why"](https://blog.technopathy.club/keep-the-why-code-becomes-legacy-when-nobody-remembers-why)

ເຄື່ອງມື:

- [Command-line tools for working with Architecture Decision Records](https://github.com/npryce/adr-tools)

- [Command line tools with python - by Victor Sluiter](https://bitbucket.org/tinkerer_/adr-tools-python/src/master/)

- [Architectural Design Decision Support Framework (ADvISE)](https://swa.univie.ac.at/Software_Architecture/research-projects/architectural-design-decision-support-framework-advise/)

- [Decision Guardian](https://github.com/DecispherHQ/decision-guardian)

- [Mneme HQ - ADR enforcement for AI coding agents](https://github.com/TheoV823/mneme)

- [Keep the Why - a repo-native convention and agent skill that continuously captures, or retrospectively recovers, the reasoning behind a codebase](https://github.com/oliver-zehentleitner/keep-the-why)

- [ADR Guard - GitHub Action that fails a pull request changing watched code without an architecture decision record](https://github.com/chohan-sarmad-ali/delivery-gates)

- [kgai - append-only decision log for AI coding agents, a machine-readable companion to ADR files](https://github.com/kgaidev/kgai)

ຄຳແນະນຳສະເພາະບໍລິສັດ:

- [Amazon: AWS Prescriptive Guidance: ADR Process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)

- [GitHub: ADR GitHub organization](https://adr.github.io/)

- [RedHat: Why you should use ADRs](https://www.redhat.com/architect/architecture-decision-records)

ຕົວຢ່າງ:

- [Repository of Architecture Decision Records made for the Arachne Framework](https://github.com/arachne-framework/architecture)

ວິດີໂອ:

- [An introduction to arc42 with Savvas Kleanthous](https://www.youtube.com/watch?v=V5clR8c6D7o)

- [The C4 model for visualising software architecture - by Simon Brown](https://www.youtube.com/watch?v=KvoBrUd1-5E)

ພອດແຄສ:

- [Software Architecture Bookclub Podcast](https://www.developertoarchitect.com/bookclub-podcast.html)

ປຶ້ມ:

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

ເບິ່ງເພີ່ມເຕີມ:

- REMAP (Representation and Maintenance of Process Knowledge)

- DRL (Decision Representation Language)

- IBIS (Issue-Based Information System)

- QOC (Questions, Options, and Criteria)

- IBM’s e-Business Reference Architecture Framework

- [Decision Reasoning Format (DRF)](https://github.com/reasoning-formats/reasoning-formats) - ຮູບແບບ YAML/JSON ທີ່ເປັນກາງຕໍ່ຜູ້ຂາຍ ແລະ ເຄື່ອງອ່ານໄດ້ ສຳລັບສະແດງການຕັດສິນໃຈພ້ອມການໃຫ້ເຫດຜົນທີ່ຊັດເຈນ, ສົມມຸດຕິຖານ, ສະຖານະການຮັບຮູ້ ແລະ ຂໍ້ແລກປ່ຽນ. ເສີມ ADR ໂດຍເພີ່ມການໃຫ້ເຫດຜົນທີ່ມີໂຄງສ້າງ ແລະ ກວດສອບໄດ້ເຂົ້າໃນເອກະສານການຕັດສິນໃຈ.
