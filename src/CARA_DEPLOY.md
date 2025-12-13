# 🚀 Cara Deploy Aplikasi ke GitHub Pages (3 Langkah Mudah!)

## Langkah 1️⃣: Edit Nama Repo
Buka fail `/vite.config.ts` dan tukar ini:
```typescript
base: process.env.GITHUB_PAGES === 'true' ? '/aplikasi-dialek-pantai-timur/' : '/',
```

Gantikan `aplikasi-dialek-pantai-timur` dengan nama repo GitHub anda.

Contoh: Kalau repo anda bernama `dialek-app`, tukar jadi:
```typescript
base: process.env.GITHUB_PAGES === 'true' ? '/dialek-app/' : '/',
```

## Langkah 2️⃣: Buat Icon App
1. Pergi ke https://www.canva.com atau https://www.photopea.com
2. Buat design 512x512 pixels dengan logo app anda
3. Export sebagai PNG:
   - Satu 192x192 pixels → save sebagai `icon-192.png`
   - Satu 512x512 pixels → save sebagai `icon-512.png`
4. Upload kedua-dua icon ke folder `/public/` (gantikan yang sedia ada)

**PENTING:** Icon mesti PNG format dan saiz yang betul!

## Langkah 3️⃣: Deploy!

### A. Enable GitHub Pages (Sekali sahaja):
1. Pergi ke repo GitHub anda
2. Klik **Settings** (atas kanan)
3. Klik **Pages** (sebelah kiri)
4. Di bahagian **Source**, pilih: **GitHub Actions**
5. Klik **Save**

### B. Push Code ke GitHub:
```bash
git add .
git commit -m "Deploy PWA app"
git push
```

### C. Tunggu Deploy Selesai:
1. Pergi ke tab **Actions** di repo GitHub
2. Anda akan nampak workflow "Deploy to GitHub Pages" sedang running
3. Tunggu 2-3 minit sehingga ada ✅ hijau
4. Website anda siap!

## 🎉 Website Anda Dah Live!

Website boleh diakses di:
```
https://USERNAME.github.io/NAMA-REPO/
```

Gantikan:
- `USERNAME` dengan username GitHub anda
- `NAMA-REPO` dengan nama repository anda

Contoh: `https://ahmad123.github.io/dialek-app/`

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
