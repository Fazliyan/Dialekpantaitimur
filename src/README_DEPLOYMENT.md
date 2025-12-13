# 📦 Deployment Guide - Aplikasi Dialek Pantai Timur

## 🎯 Anda ada masalah WHITE SCREEN?

**Baca fail ini → `QUICK_FIX_WHITE_SCREEN.md`** (30 saat solve!)

Atau untuk guide lengkap → `TROUBLESHOOTING_WHITE_SCREEN.md`

---

## 📚 Fail-fail Penting:

| Fail | Untuk Apa |
|------|-----------|
| **QUICK_FIX_WHITE_SCREEN.md** | ⚡ Fix white screen dalam 30 saat |
| **CARA_DEPLOY.md** | 🚀 Panduan deploy step-by-step (Bahasa Melayu) |
| **TROUBLESHOOTING_WHITE_SCREEN.md** | 🔧 Troubleshooting lengkap untuk white screen |
| **README_PWA_SETUP.md** | 📱 Technical guide untuk PWA features |
| **RINGKASAN_PERUBAHAN.md** | 📋 Senarai semua perubahan & fail baru |

---

## ⚡ QUICK START (3 Langkah):

### Langkah 1: Pilih deployment method

**PILIHAN A (RECOMMENDED):** Rename repo kepada `username.github.io`
- Edit `/vite.config.ts` → set `base: '/'`
- Website: `https://username.github.io/`

**PILIHAN B:** Deploy ke subdirectory
- Edit `/vite.config.ts` → set `base: '/nama-repo/'`
- Website: `https://username.github.io/nama-repo/`

### Langkah 2: Enable GitHub Pages
- Settings → Pages → Source: **GitHub Actions**

### Langkah 3: Push & Deploy
```bash
git add .
git commit -m "Deploy PWA"
git push
```

Tunggu 2-3 minit. Done! 🎉

---

## ✅ Fail-fail yang telah dibuat/diupdate:

### PWA Files:
- ✅ `/public/manifest.json` - PWA manifest
- ✅ `/public/sw.js` - Service Worker
- ✅ `/public/404.html` - SPA routing fix
- ✅ `/public/.nojekyll` - Disable Jekyll processing
- ✅ `/index.html` - PWA meta tags & SPA redirect script

### Build Configuration:
- ✅ `/.github/workflows/deploy.yml` - GitHub Actions deployment
- ✅ `/vite.config.ts` - Vite build config (IMPORTANT!)
- ✅ `/package.json` - Dependencies
- ✅ `/tsconfig.json` - TypeScript config

### Documentation:
- ✅ `/QUICK_FIX_WHITE_SCREEN.md` - Quick fix guide
- ✅ `/CARA_DEPLOY.md` - Step-by-step deploy guide
- ✅ `/TROUBLESHOOTING_WHITE_SCREEN.md` - Detailed troubleshooting
- ✅ `/README_PWA_SETUP.md` - PWA technical guide
- ✅ `/RINGKASAN_PERUBAHAN.md` - Changes summary

---

## 🗑️ Fail yang telah dibuang:

- ❌ `/vercel.json` - Tidak perlu (guna GitHub Pages)
- ❌ `/utils/supabase/client.ts` - Tidak perlu (guna localStorage)
- ❌ `/utils/database.ts` - Tidak perlu
- ❌ `/supabase/migrations/001_initial_schema.sql` - Tidak perlu
- ❌ `/workflows/deploy.yml` - Duplicate (guna `.github/workflows/deploy.yml`)

---

## ⚙️ KONFIGURASI PENTING:

### `/vite.config.ts` (CRITICAL!)

**Jika repo = `username.github.io`:**
```typescript
base: '/',
```

**Jika repo = `dialek-app` (atau nama lain):**
```typescript
base: '/dialek-app/',  // MESTI sama dengan nama repo!
```

⚠️ **INI PUNCA UTAMA WHITE SCREEN!** Pastikan betul!

---

## 🎨 Icon PWA (OPTIONAL):

Gantikan icon di:
- `/public/icon-192.png` (192x192 pixels)
- `/public/icon-512.png` (512x512 pixels)

Buat di: https://www.canva.com atau https://www.photopea.com

---

## 📱 PWA Features Enabled:

✅ **Installable** - Boleh install di phone home screen
✅ **Offline Support** - Service Worker cache assets
✅ **Fast Loading** - Assets cached for quick load
✅ **Responsive** - Works on mobile, tablet, desktop
✅ **Native Feel** - Fullscreen mode tanpa browser UI

---

## 🔄 Update Workflow:

Setiap kali nak update app:
```bash
# 1. Buat changes pada code
# 2. Commit & push
git add .
git commit -m "Update feature X"
git push

# 3. GitHub Actions auto-deploy (2-3 minit)
# 4. Done!
```

---

## 🆘 Troubleshooting Quick Links:

| Masalah | Baca Fail |
|---------|-----------|
| White screen | `QUICK_FIX_WHITE_SCREEN.md` |
| Deploy failed | `TROUBLESHOOTING_WHITE_SCREEN.md` |
| Tak boleh install PWA | `README_PWA_SETUP.md` |
| Service Worker error | `README_PWA_SETUP.md` |

---

## 💡 Pro Tips:

1. **Test locally first:**
   ```bash
   npm install
   npm run build
   npm run preview
   ```

2. **Check build logs:**
   - GitHub repo → Actions tab
   - Lihat workflow yang running
   - Check error kalau ada (merah = failed)

3. **Debug browser:**
   - F12 → Console (check JavaScript errors)
   - F12 → Network (check 404 errors)
   - F12 → Application → Manifest (check PWA valid)

4. **Clear cache kalau update:**
   - Ctrl+Shift+R (hard refresh)
   - Atau guna Incognito mode

---

## 🎉 Success Indicators:

✅ GitHub Actions build **SUCCESS** (hijau)
✅ Website accessible (tidak white screen)
✅ Can install as PWA (prompt muncul)
✅ Works offline (service worker active)
✅ Lighthouse PWA score 90+

---

## 📞 Need Help?

1. Check `QUICK_FIX_WHITE_SCREEN.md` first
2. Then `TROUBLESHOOTING_WHITE_SCREEN.md`
3. Verify `base` path di `vite.config.ts` SAMA dengan nama repo
4. Check GitHub Actions logs untuk errors

**99% masalah white screen = base path salah di vite.config.ts**

---

**Selamat Berjaya! 🚀**

Deploy aplikasi anda dan kongsi dengan pengguna untuk memelihara warisan dialek Pantai Timur!
