# 📱 Setup PWA untuk Aplikasi Dialek Pantai Timur

## ✅ Fail yang telah dibuat untuk PWA:

1. ✅ `/public/manifest.json` - PWA manifest
2. ✅ `/public/sw.js` - Service Worker untuk offline support
3. ✅ `/index.html` - HTML dengan PWA meta tags
4. ✅ `/src/main.tsx` - Entry point aplikasi
5. ✅ `/.github/workflows/deploy.yml` - Auto-deploy ke GitHub Pages
6. ✅ `/vite.config.ts` - Konfigurasi build

## 🗑️ Fail yang telah dibuang:

- ❌ `/vercel.json` - Tidak perlu (guna GitHub Pages)
- ❌ `/utils/supabase/client.ts` - Tidak perlu (guna localStorage)
- ❌ `/utils/database.ts` - Tidak perlu (guna localStorage)
- ❌ `/supabase/migrations/001_initial_schema.sql` - Tidak perlu

## 📝 Langkah Deploy ke GitHub Pages:

### 1. **Edit vite.config.ts**
Buka `/vite.config.ts` dan gantikan `aplikasi-dialek-pantai-timur` dengan nama repo GitHub anda:

```typescript
base: process.env.GITHUB_PAGES === 'true' ? '/NAMA-REPO-ANDA/' : '/',
```

### 2. **Buat Icon PWA**
Anda perlu buat 2 icon PNG:
- `/public/icon-192.png` (192x192 pixels)
- `/public/icon-512.png` (512x512 pixels)

**Cara buat icon:**
1. Guna canva.com atau photopea.com
2. Buat design square dengan logo "Dialek Pantai Timur"
3. Export sebagai PNG 192x192 dan 512x512
4. Upload ke folder `/public/`

### 3. **Enable GitHub Pages**
1. Pergi ke repository GitHub anda
2. Klik **Settings** → **Pages**
3. Pilih Source: **GitHub Actions**

### 4. **Push ke GitHub**
```bash
git add .
git commit -m "Setup PWA with GitHub Pages"
git push
```

### 5. **Deploy Automatik**
- GitHub Actions akan auto-deploy
- Tunggu 2-3 minit
- Website ready di: `https://USERNAME.github.io/NAMA-REPO/`

## 📱 Cara Install PWA di Phone:

### Android (Chrome/Edge):
1. Buka website di browser
2. Klik menu (3 dots)
3. Pilih **"Add to Home screen"** atau **"Install app"**
4. Confirm install
5. Icon app akan muncul di home screen!

### iOS (Safari):
1. Buka website di Safari
2. Klik button **Share** (kotak dengan anak panah)
3. Scroll dan pilih **"Add to Home Screen"**
4. Confirm
5. Icon app akan muncul di home screen!

### Desktop (Chrome/Edge):
1. Buka website
2. Klik icon install di address bar (sebelah bookmark)
3. Atau menu → **Install Aplikasi Dialek Pantai Timur**

## 🎯 Features PWA yang telah disetup:

✅ **Offline Support** - App boleh buka tanpa internet (cached)
✅ **Install sebagai App** - Boleh install di home screen
✅ **Fast Loading** - Service worker cache assets
✅ **Responsive** - Works di mobile, tablet, desktop
✅ **Native Feel** - Fullscreen mode, no browser UI

## 🔧 Testing PWA Locally:

```bash
npm install
npm run build
npm run preview
```

Buka browser dan test:
1. Buka DevTools → Application → Manifest (check manifest OK)
2. Application → Service Workers (check SW registered)
3. Lighthouse → PWA audit (score should be 90+)

## 📊 PWA Checklist:

- [x] manifest.json created
- [x] Service Worker registered
- [x] Icons 192x192 and 512x512 (PERLU GANTI dengan icon sebenar)
- [x] Theme color set
- [x] Apple touch icon
- [x] Offline support
- [x] HTTPS (GitHub Pages auto SSL)

## ⚠️ Penting:

**MESTI ganti icon placeholder** (`/public/icon-192.png` dan `/public/icon-512.png`) dengan icon PNG sebenar sebelum deploy!

## 🆘 Troubleshooting:

**Problem:** White screen di GitHub Pages
**Solution:** Pastikan `base` di `vite.config.ts` sama dengan nama repo

**Problem:** PWA tidak boleh install
**Solution:** Pastikan icon PNG wujud dan manifest.json valid

**Problem:** Service Worker error
**Solution:** Clear cache dan reload

## 📞 Support:

Jika ada masalah, check:
1. GitHub Actions logs (tab Actions di GitHub repo)
2. Browser console (F12 → Console)
3. Application tab → Manifest & Service Workers
