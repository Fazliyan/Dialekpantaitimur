# Aplikasi Dialek Pantai Timur

Aplikasi pembelajaran interaktif untuk memelihara dan mempopularkan warisan linguistik Pantai Timur Malaysia (Kelantan, Terengganu, dan Pahang).

## 🎯 Tujuan Aplikasi

Aplikasi ini bertujuan untuk:
- Memelihara warisan linguistik dialek Melayu Pantai Timur
- Menarik minat generasi muda untuk mempelajari dialek tempatan
- Menyediakan platform pembelajaran yang interaktif dan menyeronokkan
- Membantu pengguna memahami perbezaan antara dialek dengan Bahasa Melayu standard

## ✨ Ciri-ciri Utama

### 1. Modul Pembelajaran Berasaskan Audio
- Audio penutur jati untuk setiap dialek (simulasi)
- Panduan sebutan terperinci
- Contoh penggunaan dalam ayat
- Pembelajaran berasaskan kategori kata (kata nama, kata kerja, dll)

### 2. Kuiz Interaktif
- Soalan pelbagai pilihan untuk menguji pemahaman
- Kuiz khusus untuk setiap negeri
- Kuiz campuran untuk semua dialek
- Penjelasan untuk setiap jawapan

### 3. Alat Perbandingan Dialek
- Jadual perbandingan komprehensif
- Bandingkan perkataan merentasi 3 dialek
- Fungsi carian dan penapis
- Rujukan pantas untuk pembelajaran

### 4. Sistem Gamifikasi
- Sistem mata untuk setiap pencapaian
- Pencapaian (achievements) untuk motivasi
- Jejakan streak pembelajaran harian
- Papan progres visual untuk setiap negeri

### 5. Penjejak Progres
- Statistik pembelajaran terperinci
- Progres mengikut negeri
- Sejarah skor kuiz
- Pencapaian yang terbuka dan belum terbuka

## 💾 Sistem Penyimpanan Data

### localStorage (Kaedah Semasa)

Aplikasi ini menggunakan **localStorage** untuk menyimpan data pengguna secara tempatan di pelayar web.

#### Kelebihan:
✅ Mudah digunakan - tiada setup tambahan diperlukan
✅ Data kekal walaupun pelayar ditutup
✅ Pantas dan responsif
✅ Tidak memerlukan sambungan internet
✅ Privasi terjaga - data disimpan di peranti pengguna sahaja

#### Kekurangan:
❌ Data terhad kepada pelayar/peranti tertentu
❌ Boleh hilang jika data pelayar dibersihkan
❌ Tidak boleh sync antara peranti
❌ Tidak sesuai untuk data yang sensitif atau kritikal
❌ Had saiz penyimpanan (~5-10MB bergantung pelayar)

#### Data Yang Disimpan:
```typescript
{
  kelantan: number,          // Progres pembelajaran Kelantan (0-100)
  terengganu: number,        // Progres pembelajaran Terengganu (0-100)
  pahang: number,            // Progres pembelajaran Pahang (0-100)
  totalPoints: number,       // Jumlah mata terkumpul
  completedLessons: string[], // Senarai pelajaran yang telah selesai
  quizScores: [{             // Sejarah skor kuiz
    type: string,
    score: number,
    date: string,
    totalQuestions: number
  }],
  lastActiveDate: string,    // Tarikh terakhir aktif
  streakDays: number,        // Bilangan hari berturut-turut belajar
  achievements: string[]     // Pencapaian yang telah dibuka
}
```

### Ciri-ciri Pengurusan Data

#### 1. Export/Backup Data
- Muat turun data pembelajaran dalam format JSON
- Boleh disimpan sebagai backup
- Mudah untuk dipindahkan ke peranti lain

#### 2. Import/Restore Data
- Pulihkan data dari fail backup
- Upload fail JSON yang telah diexport
- Atau tampal data JSON secara terus

#### 3. Reset Data
- Padam semua progres pembelajaran
- Mulakan semula dari awal
- Dilengkapi dengan amaran keselamatan

## 🚀 Pilihan Upgrade: Supabase

Untuk pengalaman yang lebih baik, aplikasi ini boleh di-upgrade menggunakan **Supabase** untuk:

### Kelebihan Supabase:
✅ Sync data antara pelbagai peranti
✅ Backup automatik di cloud
✅ Sistem pengesahan pengguna (authentication)
✅ Data lebih selamat dan terjamin
✅ Boleh akses dari mana-mana peranti
✅ Sokongan untuk ciri-ciri tambahan:
  - Papan pendahulu (leaderboard)
  - Pembelajaran berkongsi
  - Notifikasi push
  - Analitik pembelajaran

### Pertimbangan:
- Memerlukan sambungan internet
- Setup yang lebih kompleks
- Kos hosting untuk skala besar

## 🎨 Reka Bentuk

### Skema Warna
- **Kelantan**: Merah (#EF4444 - #DC2626)
- **Terengganu**: Biru (#3B82F6 - #2563EB)
- **Pahang**: Hijau (#10B981 - #059669)
- **Utama**: Gradien oren, kuning, dan pink

### Prinsip Reka Bentuk
- User-Centered Design (UCD)
- Responsif untuk mobile dan desktop
- Antara muka yang intuitif
- Aksesibiliti yang baik
- Warna yang menarik dan sesuai budaya

## 📱 Keserasian Platform

Aplikasi ini sesuai untuk:
- ✅ Pelayar web (Chrome, Firefox, Safari, Edge)
- ✅ Peranti mobile (iOS Safari, Chrome Android)
- ✅ Tablet
- ✅ Desktop

## 🛠️ Teknologi Yang Digunakan

- **React** - Framework frontend
- **TypeScript** - Bahasa pengaturcaraan
- **Tailwind CSS** - Styling
- **Shadcn/UI** - Komponen UI
- **Lucide React** - Ikon
- **Sonner** - Toast notifications
- **localStorage API** - Penyimpanan data tempatan

## 📖 Cara Penggunaan

### Mula Pembelajaran
1. Pilih negeri yang ingin dipelajari (Kelantan/Terengganu/Pahang)
2. Belajar frasa demi frasa dengan audio dan panduan
3. Tandakan sebagai selesai untuk kumpul mata
4. Ulangi untuk semua negeri

### Ambil Kuiz
1. Pilih kuiz mengikut negeri atau kuiz campuran
2. Jawab soalan pelbagai pilihan
3. Lihat penjelasan untuk setiap jawapan
4. Kumpul mata berdasarkan skor

### Bandingkan Dialek
1. Buka Alat Perbandingan
2. Cari perkataan yang ingin dibandingkan
3. Lihat perbezaan antara dialek
4. Gunakan sebagai rujukan pantas

### Jejak Progres
1. Klik "Progres Saya" di laman utama
2. Lihat statistik pembelajaran
3. Semak pencapaian yang telah dibuka
4. Jejaki streak pembelajaran harian

### Urus Data
1. Buka menu Tetapan
2. Export data untuk backup
3. Import data untuk pulihkan progres
4. Reset data jika perlu mulakan semula

## 🔒 Privasi & Keselamatan

- Data disimpan secara tempatan di peranti anda
- Tiada data dihantar ke server luaran
- Tiada data peribadi dikumpul
- Aplikasi tidak menggunakan cookies penjejakan

## 💡 Petua Penggunaan

1. **Backup Berkala**: Export data anda secara berkala untuk keselamatan
2. **Konsisten**: Belajar setiap hari untuk mengekalkan streak
3. **Ulang Kaji**: Gunakan alat perbandingan untuk rujukan pantas
4. **Kuiz Campuran**: Cuba kuiz campuran selepas menguasai satu dialek
5. **Audio**: Dengar audio berulang kali untuk sebutan yang betul

## 🎓 Untuk Penyelidik

Aplikasi ini sesuai untuk:
- Kajian linguistik dialek Melayu
- Penyelidikan pembelajaran bahasa berasaskan teknologi
- Kajian pemeliharaan warisan bahasa
- Analisis etnografi komunikasi
- Kajian reka bentuk berpusatkan pengguna (UCD)

## 📝 Nota Penting

⚠️ **Mengenai Audio**: Pada masa ini, audio adalah simulasi. Untuk versi penuh, audio penutur jati sebenar perlu direkodkan dan diintegrasikan.

⚠️ **Data Tempatan**: Ingat untuk backup data anda kerana data localStorage boleh hilang jika:
- Data pelayar dibersihkan
- Menggunakan mod penyamaran
- Menukar peranti atau pelayar

## 🔮 Pembangunan Masa Depan

Cadangan penambahbaikan:
- [ ] Integrasi audio penutur jati sebenar
- [ ] Lebih banyak frasa dan kategori
- [ ] Video pembelajaran
- [ ] Permainan interaktif tambahan
- [ ] Papan pendahulu (leaderboard)
- [ ] Mod pembelajaran berkumpulan
- [ ] Integrasi Supabase untuk sync data
- [ ] Aplikasi mobile native (iOS/Android)
- [ ] Sokongan offline penuh (PWA)
- [ ] Analitik pembelajaran lanjutan

## 📄 Lesen

Aplikasi ini dibangunkan untuk tujuan pendidikan dan penyelidikan.

---

**Dikembangkan dengan ❤️ untuk memelihara warisan bahasa Pantai Timur Malaysia**
