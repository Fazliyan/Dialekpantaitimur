# Aplikasi Dialek Pantai Timur 🌊

Aplikasi pembelajaran interaktif untuk memelihara dan mempopularkan warisan linguistik Pantai Timur Malaysia (Kelantan, Terengganu, dan Pahang).

**📱 Progressive Web App (PWA)** - Boleh install di phone sebagai app!

---

## 🚀 DEPLOY KE GITHUB PAGES

**MULA DI SINI:** Baca fail `START_HERE_DEPLOY.md`

### Quick Deploy (3 Langkah):

1. **Edit `/vite.config.ts`** - Set `base` path mengikut nama repo
2. **Enable GitHub Pages** - Settings → Pages → Source: GitHub Actions  
3. **Push** - `git push` dan tunggu 2-3 minit

**Masalah white screen?** → Baca `QUICK_FIX_WHITE_SCREEN.md`

---

## 📚 Panduan Deployment

| Fail | Kegunaan |
|------|----------|
| `START_HERE_DEPLOY.md` | 🚀 Mula di sini untuk deploy |
| `CARA_DEPLOY.md` | 📝 Panduan deploy lengkap step-by-step |
| `QUICK_FIX_WHITE_SCREEN.md` | ⚡ Fix white screen dalam 30 saat |
| `PENJELASAN_CARA_REACT_BERFUNGSI.md` | 📖 Kenapa index.html "kosong" |
| `PANDUAN_UPDATE_DATA.md` | ✏️ Cara tambah/edit perkataan & kuiz |

---

## 🎯 Tujuan Aplikasi

Aplikasi ini bertujuan untuk:
- Memelihara warisan linguistik dialek Melayu Pantai Timur
- Menarik minat generasi muda untuk mempelajari dialek tempatan
- Menyediakan platform pembelajaran yang interaktif dan menyeronokkan
- Membantu pengguna memahami perbezaan antara dialek dengan Bahasa Melayu standard

---

## ✨ Ciri-ciri Utama

### 1. Modul Pembelajaran Berasaskan Audio
- 42 perkataan autentik dari penutur jati
- Panduan sebutan terperinci
- Contoh penggunaan dalam ayat
- Pembelajaran berasaskan kategori kata

### 2. Kuiz Interaktif
- 57 soalan pelbagai pilihan
- Kuiz khusus untuk setiap negeri
- Kuiz campuran untuk semua dialek
- Penjelasan untuk setiap jawapan

### 3. Alat Perbandingan Dialek
- Bandingkan perkataan merentasi 3 dialek
- Fungsi carian dan penapis
- Rujukan pantas untuk pembelajaran

### 4. Sistem Gamifikasi
- Sistem mata untuk setiap pencapaian
- Achievements untuk motivasi
- Jejakan streak pembelajaran harian
- Papan progres visual untuk setiap negeri

### 5. Progressive Web App (PWA)
- ✅ Boleh install di phone home screen
- ✅ Berfungsi offline
- ✅ Fast loading dengan service worker
- ✅ Native app experience

---

## 💾 Sistem Penyimpanan Data

Aplikasi ini menggunakan **localStorage** untuk menyimpan data pengguna secara tempatan di pelayar web.

### Kelebihan:
✅ Mudah digunakan - tiada setup tambahan diperlukan
✅ Data kekal walaupun pelayar ditutup
✅ Pantas dan responsif
✅ Tidak memerlukan sambungan internet
✅ Privasi terjaga - data disimpan di peranti pengguna sahaja

### Data Yang Disimpan:
- Progres pembelajaran setiap negeri (0-100%)
- Jumlah mata terkumpul
- Sejarah skor kuiz
- Streak pembelajaran harian
- Pencapaian yang telah dibuka

### Ciri-ciri Pengurusan Data:
- **Export/Backup** - Download data dalam format JSON
- **Import/Restore** - Pulihkan data dari backup
- **Reset** - Mulakan semula dari awal

---

## 🛠️ Teknologi Yang Digunakan

- **React + TypeScript** - Framework frontend
- **Tailwind CSS** - Styling
- **Shadcn/UI** - Komponen UI
- **Vite** - Build tool
- **PWA** - Service Worker + Manifest
- **GitHub Pages** - Hosting
- **localStorage API** - Penyimpanan data

---

## 🎨 Reka Bentuk

### Skema Warna:
- **Kelantan**: Merah (#EF4444)
- **Terengganu**: Biru (#3B82F6)
- **Pahang**: Hijau (#10B981)
- **Utama**: Gradien teal-cyan-blue

### Prinsip:
- User-Centered Design (UCD)
- Responsif untuk mobile dan desktop
- Antara muka yang intuitif
- Aksesibiliti yang baik

---

## 📱 Keserasian Platform

✅ Pelayar web (Chrome, Firefox, Safari, Edge)
✅ Peranti mobile (iOS Safari, Chrome Android)
✅ Tablet
✅ Desktop
✅ Installable sebagai PWA

---

## 🔒 Privasi & Keselamatan

- Data disimpan secara tempatan di peranti anda
- Tiada data dihantar ke server luaran
- Tiada data peribadi dikumpul
- Aplikasi tidak menggunakan cookies penjejakan

---

## 💡 Petua Penggunaan

1. **Backup Berkala** - Export data anda secara berkala untuk keselamatan
2. **Konsisten** - Belajar setiap hari untuk mengekalkan streak
3. **Install sebagai App** - Install di phone untuk pengalaman lebih baik
4. **Kuiz Campuran** - Cuba kuiz campuran selepas menguasai satu dialek
5. **Audio** - Dengar audio berulang kali untuk sebutan yang betul

---

## 🔮 Pembangunan Masa Depan

Cadangan penambahbaikan:
- [ ] Integrasi audio penutur jati sebenar (bukan simulasi)
- [ ] Lebih banyak frasa dan kategori
- [ ] Video pembelajaran
- [ ] Permainan interaktif tambahan
- [ ] Papan pendahulu (leaderboard)
- [ ] Analitik pembelajaran lanjutan

---

## 📄 Lesen

Aplikasi ini dibangunkan untuk tujuan pendidikan dan penyelidikan.

---

**Dikembangkan dengan ❤️ untuk memelihara warisan bahasa Pantai Timur Malaysia**