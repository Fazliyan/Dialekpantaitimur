# ✅ Checklist Sebelum Deploy ke GitHub Pages

## 📋 MANDATORY CHECKS (WAJIB!)

### 1. ✅ Check Nama Repo GitHub
- [ ] Pergi ke repo GitHub anda
- [ ] Catat nama repo (contoh: `dialek-app` atau `username.github.io`)

**Nama repo saya:** `_____________________`

---

### 2. ✅ Update vite.config.ts

Buka fail `/vite.config.ts` dan set `base` mengikut nama repo:

#### Jika nama repo = `username.github.io`:
```typescript
base: '/',
```

#### Jika nama repo = nama lain (contoh: `dialek-app`):
```typescript
base: '/dialek-app/',  // ← Tukar dengan nama repo anda!
```

- [ ] Dah update `base` path
- [ ] `base` path SAMA dengan nama repo (case sensitive!)
- [ ] Ada slash `/` di depan dan belakang (kalau subdirectory)

**Contoh BETUL:**
```typescript
base: '/dialek-app/',        ✅ BETUL
base: '/aplikasi-dialek/',   ✅ BETUL
base: '/',                   ✅ BETUL (untuk username.github.io)
```

**Contoh SALAH:**
```typescript
base: 'dialek-app',          ❌ SALAH (tiada slash)
base: '/dialek-app',         ❌ SALAH (tiada slash belakang)
base: 'dialek-app/',         ❌ SALAH (tiada slash depan)
```

---

### 3. ✅ Enable GitHub Pages

- [ ] Pergi ke repo GitHub → **Settings**
- [ ] Klik **Pages** (menu sebelah kiri)
- [ ] **Source:** Pilih **GitHub Actions**
- [ ] Klik **Save**

---

### 4. ✅ Verify Files Ada

Pastikan fail-fail ini wujud:

#### Core Files:
- [ ] `/index.html` - Main HTML (dengan PWA tags)
- [ ] `/src/main.tsx` - React entry point
- [ ] `/App.tsx` - Main application
- [ ] `/package.json` - Dependencies

#### Build Config:
- [ ] `/vite.config.ts` - Vite configuration
- [ ] `/tsconfig.json` - TypeScript config
- [ ] `/.github/workflows/deploy.yml` - GitHub Actions

#### PWA Files:
- [ ] `/public/manifest.json` - PWA manifest
- [ ] `/public/sw.js` - Service Worker
- [ ] `/public/404.html` - SPA routing fix
- [ ] `/public/.nojekyll` - Disable Jekyll

#### Components (Aplikasi sebenar!):
- [ ] `/components/HomePage.tsx`
- [ ] `/components/LearningModule.tsx`
- [ ] `/components/QuizModule.tsx`
- [ ] `/components/ComparisonTool.tsx`
- [ ] `/components/ProgressTracker.tsx`

#### Data:
- [ ] `/data/dialectData.ts` - 42 words + 57 questions

---

### 5. ✅ Test Build Locally (Recommended!)

```bash
# Install dependencies
npm install

# Test build
npm run build

# Preview build (test production version)
npm run preview
```

- [ ] Build berjaya (no errors)
- [ ] Preview accessible di `http://localhost:4173`
- [ ] Website nampak betul (not white screen)

**Jika ada error, fix dulu sebelum deploy!**

---

## 🚀 READY TO DEPLOY!

### Push to GitHub:

```bash
git add .
git commit -m "Deploy aplikasi dialek pantai timur"
git push
```

### Monitor Deployment:

1. [ ] Pergi ke tab **Actions** di GitHub repo
2. [ ] Workflow "Deploy to GitHub Pages" running
3. [ ] Tunggu sehingga status jadi ✅ (hijau)
4. [ ] Kalau ❌ (merah), klik untuk lihat error logs

### Expected Timeline:
- **Build:** 1-2 minit
- **Deploy:** 30 saat - 1 minit
- **Total:** ~2-3 minit

---

## 🎉 AFTER DEPLOY

### Check Website Live:

- [ ] Buka `https://username.github.io/` (jika repo = username.github.io)
- [ ] Atau `https://username.github.io/repo-name/` (jika repo lain)
- [ ] Website loads correctly (not white screen)
- [ ] Can navigate between pages
- [ ] Can test quiz
- [ ] Can see progress tracker

### Test PWA Features:

- [ ] Browser show "Install" prompt (optional)
- [ ] F12 → Application → Manifest (valid)
- [ ] F12 → Application → Service Workers (registered)
- [ ] Works offline (try airplane mode)

---

## ❌ TROUBLESHOOTING

### If White Screen:

1. Check `base` path di `/vite.config.ts`
2. Make sure sama dengan nama repo
3. Check browser console (F12) untuk errors
4. Read `QUICK_FIX_WHITE_SCREEN.md`

### If Build Failed:

1. Check GitHub Actions logs untuk error
2. Usually: dependencies issue
3. Try: `rm package-lock.json && npm install` locally
4. Push again

### If 404 Errors:

1. Base path salah 100%!
2. Double check `/vite.config.ts`
3. Nama repo MESTI sama (case sensitive)

---

## 📊 SUCCESS INDICATORS

✅ GitHub Actions build: **SUCCESS** (green)
✅ Website accessible: **YES** (not white screen)
✅ Navigation works: **YES** (can click around)
✅ Content displays: **YES** (can see dialects, quiz, etc)
✅ PWA installable: **YES** (install prompt appears)
✅ Lighthouse PWA score: **90+**

---

## 🎯 FINAL CHECKS

Semak sekali lagi:

- [ ] ✅ `base` path di `vite.config.ts` BETUL
- [ ] ✅ GitHub Pages enabled (Settings → Pages → GitHub Actions)
- [ ] ✅ Semua files committed dan pushed
- [ ] ✅ GitHub Actions build SUCCESS (hijau)
- [ ] ✅ Website accessible dan berfungsi

---

## 💡 PRO TIPS

### Tip 1: Use username.github.io repo name
Paling mudah! Set `base: '/'` dan tak perlu pening kepala.

### Tip 2: Test locally first
Always `npm run build && npm run preview` before deploy.

### Tip 3: Check base path carefully
99% white screen issues = base path salah!

### Tip 4: Clear browser cache
After deploy, try Ctrl+Shift+R atau Incognito mode.

### Tip 5: Monitor Actions tab
Watch build process untuk detect issues early.

---

## 🆘 NEED HELP?

Check these files:
1. `QUICK_FIX_WHITE_SCREEN.md` - Quick fixes
2. `TROUBLESHOOTING_WHITE_SCREEN.md` - Detailed guide
3. `PENJELASAN_CARA_REACT_BERFUNGSI.md` - How React works
4. `CARA_DEPLOY.md` - Step-by-step deploy guide

---

**Good luck! 🚀 Deploy aplikasi anda dan share dengan pengguna untuk pelihara dialek Pantai Timur!**
