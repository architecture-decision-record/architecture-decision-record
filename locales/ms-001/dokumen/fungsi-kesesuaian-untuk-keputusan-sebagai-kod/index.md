# Fungsi kesesuaian untuk keputusan sebagai kod

Fungsi kesesuaian (fitness functions) ialah semakan automatik yang objektif, ditulis dengan kod pengaturcaraan, yang mengesahkan bahawa keputusan sedang dikekalkan.

- Fungsi kesesuaian menjadikan keputusan boleh diuji dan boleh dijamin.

- Fungsi kesesuaian untuk keputusan boleh membantu jaminan kualiti, proses kawal selia dan matlamat tadbir urus dengan banyak.

## Bagaimana fungsi kesesuaian berkaitan dengan keputusan

Rekod keputusan mendokumenkan keputusan, manakala fungsi kesesuaian menjamin keputusan itu.

- Contoh keputusan: Kami menggunakan event sourcing untuk keperluan audit.

- Contoh fungsi kesesuaian: Kami menggunakan pelayan integrasi berterusan untuk menguji bahawa semua perubahan keadaan mesti menghasilkan peristiwa.

## Mengapa fungsi kesesuaian membantu keputusan

Ukuran objektif: Fungsi kesesuaian lulus atau gagal, jadi kerja kelihatan dan jelas.

Penggunaan berterusan: Fungsi kesesuaian ialah peraturan hidup anda, dijalankan pada setiap commit dan build.

Keyakinan untuk melakukan refactor: Fungsi kesesuaian menangkap ralat peraturan keputusan secara automatik.

Tadbir urus yang boleh diskalakan: Fungsi kesesuaian menjamin piawaian tanpa mewujudkan kesesakan.

## Bolehkah fungsi kesesuaian menggunakan AI?

Fungsi kesesuaian boleh memanfaatkan LLM AI untuk keputusan dengan mengemukakan soalan tentang kerja anda,
seperti pelan, kod, skema, API anda dan banyak lagi:

```txt
IMPORTANT: Prefer retrieval-led reasoning over pre-training-led reasoning.
IMPORTANT: Turn on extended thinking. Turn on expert advice. Turn on search.

This is a fitness function to evaluate if our work is
using all our decisions, and is correct and accurate.

- Our decisions are here: {url}
- Our work to evaluate is here: {url}

Explain any errors, problems, gaps, weaknesses. Be direct. Be decisive.
```

## Ujian unit seni bina

[ArchUnit](https://www.archunit.org/): semak peraturan seni bina kod Java dengan menggunakan mana-mana rangka kerja ujian unit Java biasa.

[ArchUnitTS](https://github.com/LukasNiessen/ArchUnitTS): semak peraturan seni bina kod TypeScript dan kod JavaScript dengan menggunakan Jest, Vitest, Jasmine dan sebagainya.
