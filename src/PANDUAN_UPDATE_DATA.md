# 📚 Panduan Update Data Dialek, Audio & Kuiz

Panduan lengkap untuk mengemas kini data pembelajaran dialek, audio penutur jati, dan soalan kuiz.

---

## 📂 Lokasi Data

**SEMUA data dialek dan kuiz kini disimpan dalam SATU fail sahaja:**

```
/data/dialectData.ts
```

Anda hanya perlu edit fail ini untuk update semua data aplikasi! ✨

---

## 🗣️ 1. CARA TAMBAH PERKATAAN DIALEK BARU

### Struktur Data Phrase:

```typescript
{
  id: "k6",                    // ID unik (k=Kelantan, t=Terengganu, p=Pahang)
  dialect: "Ore",              // Perkataan dalam dialek
  standard: "Orang",           // Perkataan dalam BM standard
  pronunciation: "o-re",       // Panduan sebutan
  category: "Kata Nama",       // Kategori perkataan
  example: "Ore Kelantan suko makan nasi kerabu",  // Contoh ayat
  audioUrl: "https://...",     // URL audio (optional)
}
```

### Contoh Tambah Perkataan Kelantan:

Buka `/data/dialectData.ts`, cari section **KELANTAN** dan tambah:

```typescript
export const kelantanPhrases: Phrase[] = [
  // ... perkataan sedia ada ...
  
  // TAMBAH PERKATAAN BARU DI SINI:
  {
    id: "k6",
    dialect: "Ore",
    standard: "Orang",
    pronunciation: "o-re",
    category: "Kata Nama",
    example: "Ore Kelantan suko makan nasi kerabu - Orang Kelantan suka makan nasi kerabu",
    audioUrl: "", // Kosongkan dulu jika tiada audio
  },
  {
    id: "k7",
    dialect: "Ghoyak",
    standard: "Cantik",
    pronunciation: "gho-yak",
    category: "Kata Adjektif",
    example: "Budok ni ghoyak sunggoh - Budak ini cantik sangat",
    audioUrl: "",
  },
];
```

### Kategori Perkataan Yang Disyorkan:

- `"Kata Nama"` - Orang, tempat, benda
- `"Kata Kerja"` - Tindakan
- `"Kata Adjektif"` - Sifat
- `"Kata Tanya"` - Apa, bila, mana, siapa
- `"Kata Ganti"` - Saya, kamu, mereka
- `"Kata Bantu"` - Tidak, sudah, sedang
- `"Kata Bilangan"` - Nombor
- `"Ungkapan"` - Frasa/idiom

---

## 🎵 2. CARA TAMBAH AUDIO PENUTUR JATI

### Pilihan A: Gunakan Audio Hosting (Disyorkan)

1. **Upload audio anda ke platform hosting:**
   - Google Drive (set public access)
   - Dropbox
   - SoundCloud
   - YouTube (extract audio)
   - Atau hosting sendiri

2. **Dapatkan direct URL** fail audio (format: .mp3, .wav, .ogg)

3. **Masukkan URL dalam `audioUrl`:**

```typescript
{
  id: "k1",
  dialect: "Tae",
  standard: "Tidak",
  pronunciation: "tae",
  category: "Kata Bantu",
  example: "Tae nok gi mana pun",
  audioUrl: "https://example.com/audio/kelantan/tae.mp3", // ← URL audio di sini
}
```

### Pilihan B: Gunakan Text-to-Speech API

Jika tiada rakaman audio, anda boleh guna TTS:

```typescript
audioUrl: "https://translate.google.com/translate_tts?ie=UTF-8&tl=ms&client=tw-ob&q=Tae",
```

### Pilihan C: Upload ke Project (Tidak Disyorkan)

Jika file kecil (<100KB):

1. Cipta folder `/public/audio/kelantan/`
2. Letakkan fail audio di sana
3. Reference: `audioUrl: "/audio/kelantan/tae.mp3"`

---

## ❓ 3. CARA TAMBAH SOALAN KUIZ

### Struktur Data QuizQuestion:

```typescript
{
  id: "kq6",                    // ID unik
  question: "...",              // Soalan
  options: ["A", "B", "C", "D"], // 4 pilihan
  correctAnswer: 1,             // Index jawapan betul (0-3)
  explanation: "...",           // Penjelasan
  state: "Kelantan",            // Negeri
}
```

### Contoh Tambah Soalan Kelantan:

```typescript
export const kelantanQuiz: QuizQuestion[] = [
  // ... soalan sedia ada ...
  
  // TAMBAH SOALAN BARU:
  {
    id: "kq6",
    question: "Apakah maksud 'Ore' dalam dialek Kelantan?",
    options: [
      "Saya",
      "Orang",
      "Dia",
      "Kita"
    ],
    correctAnswer: 1,  // Jawapan betul: "Orang" (index 1)
    explanation: "'Ore' bermaksud 'Orang' dalam dialek Kelantan. Contoh: 'Ore Kelantan' bermaksud 'Orang Kelantan'.",
    state: "Kelantan",
  },
  {
    id: "kq7",
    question: "Bagaimana orang Kelantan sebut 'Cantik'?",
    options: [
      "Cantik",
      "Ghoyak",
      "Molek",
      "Lawa"
    ],
    correctAnswer: 1,
    explanation: "Orang Kelantan menggunakan perkataan 'Ghoyak' untuk 'Cantik'.",
    state: "Kelantan",
  },
];
```

### Tips Soalan Kuiz Yang Baik:

✅ **DO:**
- Buat soalan yang jelas dan mudah difahami
- Berikan 4 pilihan yang munasabah
- Tulis penjelasan yang membantu pembelajaran
- Pastikan hanya 1 jawapan yang betul
- Gunakan soalan yang test pemahaman sebenar

❌ **DON'T:**
- Jangan buat soalan yang terlalu mudah/susah
- Jangan gunakan pilihan yang tak masuk akal
- Jangan copy soalan dari sumber lain tanpa modify

---

## 🎯 4. CONTOH LENGKAP: TAMBAH DATA UNTUK 3 NEGERI

### Kelantan:

```typescript
// Di bahagian kelantanPhrases
{
  id: "k10",
  dialect: "Bakpo",
  standard: "Mengapa",
  pronunciation: "bak-po",
  category: "Kata Tanya",
  example: "Bakpo demo tak datang? - Mengapa mereka tidak datang?",
  audioUrl: "https://your-audio-url.com/bakpo.mp3",
}

// Di bahagian kelantanQuiz
{
  id: "kq10",
  question: "Apakah maksud 'Bakpo' dalam dialek Kelantan?",
  options: ["Apa", "Mengapa", "Bila", "Mana"],
  correctAnswer: 1,
  explanation: "'Bakpo' bermaksud 'Mengapa' dalam dialek Kelantan.",
  state: "Kelantan",
}
```

### Terengganu:

```typescript
// Di bahagian terengganuPhrases
{
  id: "t10",
  dialect: "Nake",
  standard: "Nanti",
  pronunciation: "na-ke",
  category: "Kata Bantu",
  example: "Nake kita gi sama-sama - Nanti kita pergi bersama",
  audioUrl: "",
}

// Di bahagian terengganuQuiz
{
  id: "tq10",
  question: "Apakah maksud 'Nake' dalam dialek Terengganu?",
  options: ["Sekarang", "Nanti", "Tadi", "Esok"],
  correctAnswer: 1,
  explanation: "'Nake' bermaksud 'Nanti' dalam dialek Terengganu.",
  state: "Terengganu",
}
```

### Pahang:

```typescript
// Di bahagian pahangPhrases
{
  id: "p10",
  dialect: "Sokmo",
  standard: "Selalu",
  pronunciation: "sok-mo",
  category: "Kata Adjektif",
  example: "Dia sokmo datang lambat - Dia selalu datang lambat",
  audioUrl: "",
}

// Di bahagian pahangQuiz
{
  id: "pq10",
  question: "Apakah maksud 'Sokmo' dalam dialek Pahang?",
  options: ["Kadang-kadang", "Selalu", "Jarang", "Tidak pernah"],
  correctAnswer: 1,
  explanation: "'Sokmo' bermaksud 'Selalu' dalam dialek Pahang.",
  state: "Pahang",
}
```

---

## 📊 5. SEMAK STATISTIK DATA

Di bahagian bawah fail `dialectData.ts`, ada fungsi untuk semak statistik:

```typescript
import { getDataStats } from './data/dialectData';

const stats = getDataStats();
console.log(stats);
```

Output:
```javascript
{
  kelantan: { phrases: 5, quizzes: 5 },
  terengganu: { phrases: 5, quizzes: 5 },
  pahang: { phrases: 5, quizzes: 5 },
  mixed: { quizzes: 5 },
  total: { phrases: 15, quizzes: 20 }
}
```

---

## ✅ 6. CHECKLIST SELEPAS UPDATE

Selepas tambah data baru, pastikan:

- [ ] ID unik untuk setiap item (tiada duplicate)
- [ ] Semua field wajib diisi (kecuali audioUrl)
- [ ] Ejaan dan tatabahasa betul
- [ ] Audio URL berfungsi (jika ada)
- [ ] Test dalam aplikasi
- [ ] Kuiz ada jawapan yang betul
- [ ] Penjelasan kuiz jelas dan membantu

---

## 🎨 7. FORMAT PENULISAN YANG KONSISTEN

### Untuk Dialek:
- Gunakan ejaan yang konsisten
- Huruf besar untuk nama tempat/orang
- Format example: `"Dialek - Standard"`

### Untuk Soalan:
- Mula dengan huruf besar
- Akhir dengan tanda tanya (?)
- Gunakan bahasa yang sopan dan formal

---

## 🔧 8. TROUBLESHOOTING

### Masalah: Audio tidak main
**Penyelesaian:**
- Semak URL audio betul dan accessible
- Pastikan format audio disokong (.mp3, .wav, .ogg)
- Cuba buka URL di browser untuk verify

### Masalah: Data tidak muncul
**Penyelesaian:**
- Refresh browser (Ctrl+R atau Cmd+R)
- Semak console untuk error
- Pastikan format JSON betul (tiada comma terakhir)

### Masalah: Kuiz tidak berfungsi
**Penyelesaian:**
- Semak correctAnswer adalah 0-3
- Pastikan ada 4 options
- Verify ID unik

---

## 📞 9. CONTOH DATA LENGKAP

Untuk rujukan, ini contoh entry lengkap dengan semua field:

```typescript
// PEMBELAJARAN
{
  id: "k15",
  dialect: "Suke",
  standard: "Suka",
  pronunciation: "su-ke",
  category: "Kata Kerja",
  example: "Demo suke makan budu - Mereka suka makan budu",
  audioUrl: "https://example.com/audio/suke.mp3",
}

// KUIZ
{
  id: "kq15",
  question: "Dalam ayat 'Demo suke makan budu', apakah maksud 'suke'?",
  options: [
    "Mahu",
    "Suka",
    "Hendak",
    "Boleh"
  ],
  correctAnswer: 1,
  explanation: "'Suke' bermaksud 'Suka' dalam dialek Kelantan. Perkataan ini hampir sama dengan bahasa standard tetapi dengan sebutan yang berbeza.",
  state: "Kelantan",
}
```

---

## 🎯 10. MATLAMAT KANDUNGAN

Untuk aplikasi yang lengkap, cadangan:

### Tahap Minimum:
- 20 perkataan per negeri = 60 perkataan
- 10 soalan kuiz per negeri = 30 soalan
- 10 soalan campuran = 10 soalan

### Tahap Ideal:
- 50-100 perkataan per negeri
- 25-50 soalan per negeri
- 20-30 soalan campuran
- Audio untuk 80% perkataan

### Kategori Yang Perlu Ada:
1. Salam & Sapaan (10 frasa)
2. Keluarga & Hubungan (15 frasa)
3. Makanan & Minuman (20 frasa)
4. Nombor & Masa (15 frasa)
5. Tempat & Arah (15 frasa)
6. Aktiviti Harian (20 frasa)
7. Perasaan & Emosi (15 frasa)
8. Cuaca & Alam (10 frasa)

---

## 🚀 SELAMAT MENAMBAH DATA!

Jika ada sebarang masalah atau soalan, semak fail ini atau console browser untuk error messages.

**Ingat:** Setiap tambahan data anda membantu memelihara warisan linguistik Malaysia! 🇲🇾
