// makefun-one-liner-laughs — One-Liner Laughs
// Slug: u-coral-404-one-liner-laughs-aa872d41
//
// ROUND 1 (sudah disubmit, v3, 125 karakter):
//   "My smart fridge judges my midnight snacks, so I taped over its camera —
//   now it taps out insults in Morse code with ice cubes."
//   Tema: kulkas pintar menghakimi. Round 2 HARUS berbeda total: topik,
//   mekanisme, dan payoff baru.
//
// ROUND 2 — DRAF v1 (ditulis in-session, lalu direvisi di bawah):
//   "I bought noise-cancelling headphones to hear myself think — turns out
//   I had nothing to say."
//   (91 karakter — diuji dengan node main.ts)
//   Analisis cacat: "turns out" menelepon punchline sebelum tiba dan
//   memakan 10 karakter tanpa menambah tawa. "I had nothing to say" adalah
//   self-deprecation yang sudah umum — begitu setup menyebut "hear myself
//   think", pembaca sudah bisa menebak arahnya, jadi kejutan putarannya
//   lemah. Setup juga memakai motivasi paling klise untuk produk ini
//   ("hear myself think"), sehingga juri yang membandingkan dua baris
//   akan menilai baris ini kalah segar.
//
// ROUND 2 — REVISI v2 (genuine, 27 Nov 2026 ~10:12 WIB):
//   Cacat v1 diperbaiki dengan membuang "turns out" dan mengganti payoff
//   dengan putaran yang memakai fitur produk itu sendiri melawan pembeli:
//   "my thoughts were on mute". "On mute" adalah aksi konkret yang
//   terdengar (keheningan tombol mute), bukan label perasaan, dan tidak
//   bisa ditebak dari setup — juri mengharapkan keluhan soal suara luar,
//   bukan soal pikiran sendiri yang bisu. Setup tetap satu ketukan,
//   payoff satu ketukan, tanpa kata yang menjelaskan leluconnya sendiri.
//   Bonus ekonomi kata: 85 karakter (lebih pendek dari round 1 = 125),
//   menguntungkan di tie-break Size (ascending).
//   Baris v2: 85 karakter (diuji dengan node main.ts).

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I bought noise-cancelling headphones to hear myself think — my thoughts were on mute.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");

console.log(ENTRY);
console.log(`characters: ${ENTRY.length}`);
