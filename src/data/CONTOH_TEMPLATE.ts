/**
 * 📋 TEMPLATE UNTUK COPY & PASTE
 * 
 * Gunakan template ini untuk mudahkan tambah data baru.
 * Copy template yang sesuai, tukar nilai, dan paste ke dialectData.ts
 */

// ============================================
// ✅ TEMPLATE: TAMBAH PERKATAAN BARU
// ============================================

/*
COPY TEMPLATE INI:

{
  id: "k__",                    // Tukar: k1, k2, k3... (k=Kelantan, t=Terengganu, p=Pahang)
  dialect: "___",               // Tukar: Perkataan dalam dialek
  standard: "___",              // Tukar: Perkataan dalam BM standard
  pronunciation: "___",         // Tukar: Panduan sebutan (contoh: "ga-po")
  category: "___",              // Pilih: Kata Nama / Kata Kerja / Kata Tanya / dll
  example: "___",               // Tukar: Contoh ayat (format: "Dialek - Standard")
  audioUrl: "",                 // Kosongkan dulu atau masukkan URL audio
},

CONTOH SIAP:

{
  id: "k6",
  dialect: "Ore",
  standard: "Orang",
  pronunciation: "o-re",
  category: "Kata Nama",
  example: "Ore Kelantan - Orang Kelantan",
  audioUrl: "https://example.com/audio/ore.mp3",
},
*/

// ============================================
// ✅ TEMPLATE: TAMBAH SOALAN KUIZ
// ============================================

/*
COPY TEMPLATE INI:

{
  id: "kq__",                   // Tukar: kq1, kq2, kq3...
  question: "___?",             // Tukar: Soalan kuiz (mesti ada tanda tanya)
  options: [
    "___",                      // Pilihan A
    "___",                      // Pilihan B
    "___",                      // Pilihan C
    "___"                       // Pilihan D
  ],
  correctAnswer: _,             // Tukar: 0, 1, 2, atau 3 (index jawapan betul)
  explanation: "___",           // Tukar: Penjelasan kenapa jawapan itu betul
  state: "___",                 // Tukar: Kelantan / Terengganu / Pahang / Campuran
},

CONTOH SIAP:

{
  id: "kq6",
  question: "Apakah maksud 'Ore' dalam dialek Kelantan?",
  options: [
    "Saya",
    "Orang",
    "Dia",
    "Kita"
  ],
  correctAnswer: 1,
  explanation: "'Ore' bermaksud 'Orang' dalam dialek Kelantan.",
  state: "Kelantan",
},
*/

// ============================================
// 📝 TIPS PANTAS
// ============================================

/*
1. ID MESTI UNIK
   ✅ Betul: k1, k2, k3, k4...
   ❌ Salah: k1, k1, k1 (duplicate)

2. CORRECTANSWER ADALAH INDEX (MULA DARI 0)
   Index 0 = Pilihan pertama
   Index 1 = Pilihan kedua
   Index 2 = Pilihan ketiga
   Index 3 = Pilihan keempat

3. AUDIO URL OPTIONAL
   Boleh kosongkan: audioUrl: ""
   Atau isi URL: audioUrl: "https://..."

4. KATEGORI YANG DISYORKAN
   - Kata Nama
   - Kata Kerja
   - Kata Adjektif
   - Kata Tanya
   - Kata Ganti
   - Kata Bantu
   - Kata Bilangan
   - Ungkapan

5. FORMAT EXAMPLE
   Gunakan format: "Dialek - Standard"
   Contoh: "Tae nok gi - Tidak mahu pergi"
*/

// ============================================
// 🎯 SET DATA LENGKAP (10 PERKATAAN + 10 KUIZ)
// ============================================

/*
Ini contoh 10 perkataan + 10 kuiz untuk satu negeri.
Anda boleh copy dan modify untuk Kelantan/Terengganu/Pahang.

PERKATAAN (10 items):
*/

export const templatePhrases = [
  {
    id: "x1",
    dialect: "Perkataan1",
    standard: "Standard1",
    pronunciation: "per-ka-ta-an-1",
    category: "Kata Nama",
    example: "Contoh ayat 1 - Example 1",
    audioUrl: "",
  },
  {
    id: "x2",
    dialect: "Perkataan2",
    standard: "Standard2",
    pronunciation: "per-ka-ta-an-2",
    category: "Kata Kerja",
    example: "Contoh ayat 2 - Example 2",
    audioUrl: "",
  },
  {
    id: "x3",
    dialect: "Perkataan3",
    standard: "Standard3",
    pronunciation: "per-ka-ta-an-3",
    category: "Kata Tanya",
    example: "Contoh ayat 3 - Example 3",
    audioUrl: "",
  },
  {
    id: "x4",
    dialect: "Perkataan4",
    standard: "Standard4",
    pronunciation: "per-ka-ta-an-4",
    category: "Kata Ganti",
    example: "Contoh ayat 4 - Example 4",
    audioUrl: "",
  },
  {
    id: "x5",
    dialect: "Perkataan5",
    standard: "Standard5",
    pronunciation: "per-ka-ta-an-5",
    category: "Kata Bantu",
    example: "Contoh ayat 5 - Example 5",
    audioUrl: "",
  },
  {
    id: "x6",
    dialect: "Perkataan6",
    standard: "Standard6",
    pronunciation: "per-ka-ta-an-6",
    category: "Kata Adjektif",
    example: "Contoh ayat 6 - Example 6",
    audioUrl: "",
  },
  {
    id: "x7",
    dialect: "Perkataan7",
    standard: "Standard7",
    pronunciation: "per-ka-ta-an-7",
    category: "Kata Bilangan",
    example: "Contoh ayat 7 - Example 7",
    audioUrl: "",
  },
  {
    id: "x8",
    dialect: "Perkataan8",
    standard: "Standard8",
    pronunciation: "per-ka-ta-an-8",
    category: "Ungkapan",
    example: "Contoh ayat 8 - Example 8",
    audioUrl: "",
  },
  {
    id: "x9",
    dialect: "Perkataan9",
    standard: "Standard9",
    pronunciation: "per-ka-ta-an-9",
    category: "Kata Nama",
    example: "Contoh ayat 9 - Example 9",
    audioUrl: "",
  },
  {
    id: "x10",
    dialect: "Perkataan10",
    standard: "Standard10",
    pronunciation: "per-ka-ta-an-10",
    category: "Kata Kerja",
    example: "Contoh ayat 10 - Example 10",
    audioUrl: "",
  },
];

/*
KUIZ (10 soalan):
*/

export const templateQuiz = [
  {
    id: "xq1",
    question: "Soalan 1?",
    options: ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D"],
    correctAnswer: 1,
    explanation: "Penjelasan 1",
    state: "Negeri",
  },
  {
    id: "xq2",
    question: "Soalan 2?",
    options: ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D"],
    correctAnswer: 2,
    explanation: "Penjelasan 2",
    state: "Negeri",
  },
  {
    id: "xq3",
    question: "Soalan 3?",
    options: ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D"],
    correctAnswer: 0,
    explanation: "Penjelasan 3",
    state: "Negeri",
  },
  {
    id: "xq4",
    question: "Soalan 4?",
    options: ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D"],
    correctAnswer: 3,
    explanation: "Penjelasan 4",
    state: "Negeri",
  },
  {
    id: "xq5",
    question: "Soalan 5?",
    options: ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D"],
    correctAnswer: 1,
    explanation: "Penjelasan 5",
    state: "Negeri",
  },
  {
    id: "xq6",
    question: "Soalan 6?",
    options: ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D"],
    correctAnswer: 2,
    explanation: "Penjelasan 6",
    state: "Negeri",
  },
  {
    id: "xq7",
    question: "Soalan 7?",
    options: ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D"],
    correctAnswer: 0,
    explanation: "Penjelasan 7",
    state: "Negeri",
  },
  {
    id: "xq8",
    question: "Soalan 8?",
    options: ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D"],
    correctAnswer: 1,
    explanation: "Penjelasan 8",
    state: "Negeri",
  },
  {
    id: "xq9",
    question: "Soalan 9?",
    options: ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D"],
    correctAnswer: 3,
    explanation: "Penjelasan 9",
    state: "Negeri",
  },
  {
    id: "xq10",
    question: "Soalan 10?",
    options: ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D"],
    correctAnswer: 2,
    explanation: "Penjelasan 10",
    state: "Negeri",
  },
];

// ============================================
// 🎓 PANDUAN AUDIO
// ============================================

/*
CARA 1: Gunakan Google Drive
1. Upload audio ke Google Drive
2. Share > Anyone with the link > Viewer
3. Get link: https://drive.google.com/file/d/FILE_ID/view
4. Tukar jadi: https://drive.google.com/uc?export=download&id=FILE_ID
5. Paste URL dalam audioUrl

CARA 2: Gunakan Dropbox
1. Upload audio ke Dropbox
2. Get share link
3. Tukar dl=0 kepada dl=1 di hujung URL
4. Paste URL dalam audioUrl

CARA 3: Gunakan hosting sendiri
1. Upload ke server anda
2. Dapatkan public URL
3. Paste URL dalam audioUrl

CARA 4: Text-to-Speech (Google Translate)
audioUrl: "https://translate.google.com/translate_tts?ie=UTF-8&tl=ms&client=tw-ob&q=PERKATAAN_DI_SINI"

Format audio yang disokong:
✅ .mp3 (paling sesuai)
✅ .wav
✅ .ogg
✅ .m4a
*/

// ============================================
// 📊 SENARAI SEMAK KUALITI
// ============================================

/*
SEBELUM SUBMIT DATA BARU, SEMAK:

□ ID unik untuk setiap item
□ Tiada duplicate ID
□ Semua field wajib diisi (kecuali audioUrl)
□ Ejaan betul
□ Tatabahasa betul
□ Format contoh konsisten: "Dialek - Standard"
□ Pronunciation guide jelas
□ Kategori tepat
□ Kuiz ada 4 pilihan
□ correctAnswer betul (0-3)
□ Penjelasan jelas dan membantu
□ Audio URL berfungsi (jika ada)
□ Test dalam aplikasi

KUALITI DATA YANG BAIK:
✅ Autentik (dari penutur jati)
✅ Konsisten (format sama)
✅ Lengkap (semua field ada)
✅ Betul (tiada typo)
✅ Relevan (sesuai untuk pembelajaran)
*/
