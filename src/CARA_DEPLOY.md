# 🚀 Cara Deploy Aplikasi ke GitHub Pages (3 Langkah Mudah!)

## ⚠️ PENTING - BACA DULU!

Ada 2 cara deploy. Pilih salah satu:

### 🥇 CARA 1: Deploy ke Root Domain (PALING MUDAH - RECOMMENDED!)
- Rename repo kepada: `username.github.io` (contoh: `ahmad123.github.io`)
- Website akan jadi: `https://username.github.io/`
- ✅ **TAK PERLU SET BASE PATH** - Paling senang!

### 🥈 CARA 2: Deploy ke Subdirectory
- Repo boleh nama apa-apa (contoh: `dialek-app`)
- Website akan jadi: `https://username.github.io/dialek-app/`
- ⚠️ **MESTI SET BASE PATH** yang betul di `vite.config.ts`

**Saya recommend CARA 1** kerana lebih mudah dan kurang error!

---

## 🥇 CARA 1: Deploy ke username.github.io (RECOMMENDED)

### Langkah 1: Rename Repo

1. Pergi ke repo GitHub anda
2. Klik **Settings** (tab atas kanan)
3. Scroll ke **Repository name**
4. Tukar nama kepada: `username.github.io`
   - Ganti `username` dengan username GitHub anda
   - Contoh: Jika username `ahmad123`, nama repo jadi `ahmad123.github.io`
5. Klik **Rename**

### Langkah 2: Edit vite.config.ts

Buka fail `/vite.config.ts` dan pastikan `base` adalah `/`:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/',  // ← Pastikan ini '/' sahaja
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
});
```

### Langkah 3: Buat Icon App (OPTIONAL tetapi recommended)

1. Pergi ke https://www.canva.com atau https://www.photopea.com
2. Buat design 512x512 pixels dengan logo app anda
3. Export sebagai PNG:
   - Satu 192x192 pixels → save sebagai `icon-192.png`
   - Satu 512x512 pixels → save sebagai `icon-512.png`
4. Upload kedua-dua icon ke folder `/public/` (gantikan yang sedia ada)

**PENTING:** Icon mesti PNG format dan saiz yang betul!

### Langkah 4: Deploy!

#### A. Enable GitHub Pages (Sekali sahaja):
1. Pergi ke repo GitHub anda
2. Klik **Settings** (atas kanan)
3. Klik **Pages** (sebelah kiri)
4. Di bahagian **Source**, pilih: **GitHub Actions**
5. Klik **Save**

#### B. Push Code ke GitHub:
```bash
git add .
git commit -m "Deploy PWA app"
git push
```

#### C. Tunggu Deploy Selesai:
1. Pergi ke tab **Actions** di repo GitHub
2. Anda akan nampak workflow "Deploy to GitHub Pages" sedang running
3. Tunggu 2-3 minit sehingga ada ✅ hijau
4. Website anda siap!

## 🎉 Website Anda Dah Live!

Website boleh diakses di:
```
https://USERNAME.github.io/
```

Gantikan:
- `USERNAME` dengan username GitHub anda

Contoh: `https://ahmad123.github.io/`

---

## 🥈 CARA 2: Deploy ke Subdirectory (username.github.io/nama-repo/)

**Gunakan cara ini jika:**
- Anda tak nak rename repo
- Dah ada website lain di `username.github.io`
- Nak deploy multiple projects

### Langkah 1: Pastikan Nama Repo

Repo boleh nama apa-apa. Contoh:
- `dialek-app`
- `aplikasi-dialek-pantai-timur`
- `east-coast-dialect`

**INGAT nama repo ini - PENTING untuk langkah seterusnya!**

### Langkah 2: Edit vite.config.ts

Buka fail `/vite.config.ts` dan set `base` kepada nama repo anda:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/NAMA-REPO-ANDA/',  // ← MESTI sama dengan nama repo!
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
});
```

**Contoh:** Jika repo bernama `dialek-app`:
```typescript
base: '/dialek-app/',
```

⚠️ **PENTING:**
- Mesti ada slash `/` di depan dan belakang
- Case sensitive (huruf besar kecil mesti sama)
- Mesti EXACTLY sama dengan nama repo

### Langkah 3: Enable GitHub Pages & Deploy

Sama seperti CARA 1:

1. **Settings** → **Pages** → **Source: GitHub Actions**
2. Push code:
   ```bash
   git add .
   git commit -m "Deploy to subdirectory"
   git push
   ```
3. Tunggu deploy selesai (2-3 minit)

### Website Siap!

Website boleh diakses di:
```
https://USERNAME.github.io/NAMA-REPO/
```

Contoh: `https://ahmad123.github.io/dialek-app/`

---

## 📱 Cara Install sebagai App di Phone:

### Android:
1. Buka website di Chrome
2. Tekan menu (3 titik atas kanan)
3. Pilih **"Add to Home screen"**
4. Tekan **Add**
5. Done! Icon app akan muncul di home screen 🎉

### iPhone/iPad:
1. Buka website di Safari
2. Tekan button **Share** (kotak dengan anak panah ke atas)
3. Scroll dan pilih **"Add to Home Screen"**
4. Tekan **Add**
5. Done! Icon app akan muncul di home screen 🎉

## 🔄 Cara Update App:

Setiap kali anda buat perubahan:
```bash
git add .
git commit -m "Update feature XYZ"
git push
```

GitHub Actions akan auto-deploy versi baru dalam 2-3 minit!

## ❓ Troubleshooting:

**Problem:** White screen / page kosong
**Fix:** Pastikan nama repo di `vite.config.ts` sama dengan nama repo GitHub (case sensitive!)

**Problem:** App tidak boleh install
**Fix:** Pastikan icon PNG dah upload dan betul saiznya (192x192 dan 512x512)

**Problem:** Deploy failed
**Fix:** Check GitHub Actions logs untuk error message

## 💡 Tips:

✅ Test dulu di local sebelum deploy:
```bash
npm install
npm run build
npm run preview
```

✅ Gunakan custom domain (optional):
- Beli domain dari Namecheap/GoDaddy
- Add CNAME record pointing ke `username.github.io`
- Update GitHub Pages settings dengan custom domain anda

✅ Share app anda:
- Generate QR code untuk link app
- Share di social media
- Minta feedback dari pengguna

---

**Selamat menggunakan! 🎊**

Jika ada masalah, rujuk fail `README_PWA_SETUP.md` untuk maklumat teknikal lengkap.