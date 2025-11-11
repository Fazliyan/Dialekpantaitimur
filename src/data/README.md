# 📚 Folder Data Dialek

Folder ini mengandungi semua data untuk aplikasi Dialek Pantai Timur.

---

## 📂 Fail-fail dalam folder ini:

### 1. `dialectData.ts` ⭐ **FILE UTAMA**
**Fail paling penting!** Mengandungi semua data:
- ✅ Perkataan dialek Kelantan, Terengganu, Pahang
- ✅ Soalan kuiz untuk setiap negeri
- ✅ Soalan kuiz campuran
- ✅ Helper functions

**Ini satu-satunya fail yang anda perlu edit untuk update data aplikasi.**

---

### 2. `CONTOH_TEMPLATE.ts`
Template copy-paste untuk tambah data baru dengan mudah.

**Gunakan bila:**
- Mahu tambah perkataan baru
- Mahu tambah soalan kuiz baru
- Perlukan contoh format yang betul

---

### 3. `README.md` (fail ini)
Panduan ringkas tentang folder data.

---

## 🚀 Quick Start: Cara Update Data

### Langkah 1: Buka fail utama
```
/data/dialectData.ts
```

### Langkah 2: Pilih section yang mahu edit

**Untuk tambah perkataan Kelantan:**
- Scroll ke `export const kelantanPhrases: Phrase[]`
- Tambah entry baru di dalam array

**Untuk tambah perkataan Terengganu:**
- Scroll ke `export const terengganuPhrases: Phrase[]`
- Tambah entry baru di dalam array

**Untuk tambah perkataan Pahang:**
- Scroll ke `export const pahangPhrases: Phrase[]`
- Tambah entry baru di dalam array

**Untuk tambah kuiz:**
- Scroll ke section kuiz yang berkaitan
- Tambah soalan baru di dalam array

### Langkah 3: Copy template dari CONTOH_TEMPLATE.ts

### Langkah 4: Modify template dengan data sebenar

### Langkah 5: Save fail dan refresh browser

---

## 📝 Format Data

### Perkataan Dialek:
```typescript
{
  id: "k1",                    // ID unik
  dialect: "Tae",              // Perkataan dalam dialek
  standard: "Tidak",           // BM Standard
  pronunciation: "tae",        // Panduan sebutan
  category: "Kata Bantu",      // Kategori
  example: "Tae nok gi...",    // Contoh ayat
  audioUrl: "https://...",     // URL audio (optional)
}
```

### Soalan Kuiz:
```typescript
{
  id: "kq1",
  question: "Apakah maksud...?",
  options: ["A", "B", "C", "D"],
  correctAnswer: 1,            // Index 0-3
  explanation: "Penjelasan...",
  state: "Kelantan",
}
```

---

## 🎵 Cara Tambah Audio

### Pilihan 1: Google Drive (Mudah)
1. Upload `.mp3` ke Google Drive
2. Share > "Anyone with the link"
3. Copy link ID
4. Format: `https://drive.google.com/uc?export=download&id=FILE_ID`

### Pilihan 2: URL Langsung
Jika anda ada hosting sendiri, gunakan direct URL ke fail audio:
```
audioUrl: "https://example.com/audio/tae.mp3"
```

### Pilihan 3: Text-to-Speech
Gunakan Google Translate TTS:
```
audioUrl: "https://translate.google.com/translate_tts?ie=UTF-8&tl=ms&client=tw-ob&q=Tae"
```

---

## ✅ Checklist Update Data

Sebelum save perubahan:

- [ ] ID unik (tiada duplicate)
- [ ] Semua field wajib diisi (kecuali audioUrl)
- [ ] Ejaan dan grammar betul
- [ ] Format konsisten
- [ ] Audio URL berfungsi (jika ada)
- [ ] Test dalam aplikasi

---

## 📊 Data Sedia Ada

**Kelantan:**
- 5 perkataan
- 5 soalan kuiz

**Terengganu:**
- 5 perkataan
- 5 soalan kuiz

**Pahang:**
- 5 perkataan
- 5 soalan kuiz

**Campuran:**
- 5 soalan kuiz

**JUMLAH:** 15 perkataan, 20 soalan kuiz

---

## 🎯 Target Kandungan

Untuk aplikasi yang lebih lengkap:

### Minimum (Untuk testing):
- 10-20 perkataan per negeri
- 10-15 soalan per negeri

### Ideal (Untuk penyelidikan):
- 50-100 perkataan per negeri
- 25-50 soalan per negeri
- Audio untuk 80%+ perkataan

### Kategori Yang Perlu:
1. Salam & Sapaan
2. Keluarga
3. Makanan
4. Nombor & Masa
5. Tempat & Arah
6. Aktiviti Harian
7. Perasaan
8. Cuaca & Alam

---

## 🆘 Bantuan Lanjut

Rujuk dokumentasi lengkap:
```
/PANDUAN_UPDATE_DATA.md
```

Atau semak template:
```
/data/CONTOH_TEMPLATE.ts
```

---

## 🔍 Nota Penting

1. **Jangan edit fail lain** - Hanya edit `dialectData.ts`
2. **Backup data** - Export data lama sebelum update besar
3. **Test selepas update** - Buka aplikasi untuk verify
4. **Format JSON** - Pastikan syntax betul (comma, bracket, etc)
5. **Audio optional** - Boleh kosongkan `audioUrl: ""`

---

## 📞 Tips

- Gunakan VS Code untuk edit (syntax highlighting)
- Format code dengan Prettier (optional)
- Commit changes ke Git (jika guna version control)
- Test di browser yang berbeza
- Dapatkan feedback dari penutur jati untuk accuracy

---

**Selamat menambah data! Setiap perkataan yang anda tambah membantu memelihara warisan linguistik Pantai Timur Malaysia! 🇲🇾🗣️**
