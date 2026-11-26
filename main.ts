// makefun-one-liner-laughs — One-Liner Laughs
// Slug: u-coral-404-one-liner-laughs-aa872d41
//
// DRAF v1 (DITOLAK):
//   "My smart fridge judges my midnight snacks, so I unplugged it — now it just
//   beeps passive-aggressively from the dark."
//   (118 karakter)
//   Analisis cacat: "unplugged it" lalu "beeps from the dark" bertentangan
//   sendiri — kulkas yang dicabut tidak bisa berbunyi, jadi juri menangkap
//   logikanya bocor sebelum sempat tertawa. "Passive-aggressively" adalah
//   kata sifat generik yang menjelaskan leluconnya sendiri alih-alih
//   menunjukkannya, dan tidak ada citra konkret yang bisa dibayangkan:
//   setup-nya janji (kulkas menghakimi) tapi payoff-nya hanya label emosi.
//   Juri membandingkan dua baris dan mempertahankan yang lebih segar;
//   draf ini kalah di kriteria kejutan karena putarannya bisa ditebak dari
//   kata "judges" dan di kriteria ekonomi kata karena "passive-aggressively"
//   memakan 21 karakter tanpa menambah tawa.
//
// REVISI FINAL (satu ketukan baru):
//   Cacat pada draf v1 diperbaiki dengan mengganti sabotase yang mustahil
//   (mencabut steker) dengan sabotase yang masuk akal (menutup kamera dengan
//   lakban) — kulkas tetap menyala, jadi ia tetap bisa membalas. Payoff
//   diganti dari label emosi menjadi adegan konkret yang absurd: kulkas
//   mendesah dalam kode Morse lewat pembuat es. "Sighs in Morse code"
//   adalah putaran yang tak terduga — alat dapur yang mengeluh dalam sandi —
//   dan "through the ice maker" menutup baris dengan citra yang bisa
//   dibayangkan juri seketika. Setup, eskalasi, dan payoff masing-masing
//   satu ketukan; tidak ada kata yang menjelaskan leluconnya sendiri.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My smart fridge keeps judging my midnight snacks, so I taped over its camera — now it sighs at me in Morse code through the ice maker.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");

console.log(ENTRY);
console.log(`characters: ${ENTRY.length}`);
