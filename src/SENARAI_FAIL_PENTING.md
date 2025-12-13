# 📋 Senarai Fail Penting - Aplikasi Dialek Pantai Timur

## ✅ FAIL YANG PENTING (JANGAN DELETE!)

### 📚 Dokumentasi (BACA INI!)
```
README.md                              ← Main documentation
START_HERE_DEPLOY.md                   ← MULA DI SINI untuk deploy
CARA_DEPLOY.md                         ← Panduan deploy lengkap
QUICK_FIX_WHITE_SCREEN.md              ← Fix white screen 30 saat
PENJELASAN_CARA_REACT_BERFUNGSI.md     ← Kenapa index.html "kosong"
PANDUAN_UPDATE_DATA.md                 ← Cara edit data dialek & kuiz
```

### 🚀 Core Application Files (WAJIB ADA!)
```
/App.tsx                               ← Main application
/index.html                            ← HTML entry point (dengan PWA tags)
/src/main.tsx                          ← React entry point
/package.json                          ← Dependencies
/vite.config.ts                        ← Build config (IMPORTANT - set base path!)
/tsconfig.json                         ← TypeScript config
```

### 🎨 Components (Aplikasi sebenar!)
```
/components/
  ├── HomePage.tsx                     ← Home page
  ├── LearningModule.tsx               ← Learning system
  ├── QuizModule.tsx                   ← Quiz system
  ├── ComparisonTool.tsx               ← Comparison tool
  ├── ProgressTracker.tsx              ← Progress dashboard
  ├── SettingsMenu.tsx                 ← Settings
  ├── PWAInstaller.tsx                 ← PWA install prompt
  └── ui/                              ← UI components (shadcn)
      ├── button.tsx
      ├── card.tsx
      ├── dialog.tsx
      └── ... (40+ UI components)
```

### 📊 Data Files
```
/data/
  ├── dialectData.ts                   ← 42 perkataan + 57 soalan kuiz
  ├── README.md                        ← Panduan data structure
  └── CONTOH_TEMPLATE.ts               ← Template untuk tambah data
```

### 📱 PWA Files (Untuk install di phone!)
```
/public/
  ├── manifest.json                    ← PWA manifest
  ├── sw.js                            ← Service Worker
  ├── 404.html                         ← SPA routing fix
  ├── .nojekyll                        ← Disable Jekyll
  ├── icon-192.png                     ← PWA icon (small)
  ├── icon-512.png                     ← PWA icon (large)
  └── ICON_GUIDE.md                    ← Panduan tukar icon
```

### ⚙️ GitHub Actions (Auto-deploy!)
```
/.github/workflows/deploy.yml          ← Deployment workflow (BETUL!)
```

### 🎨 Styling
```
/styles/globals.css                    ← Global CSS + Tailwind
```

### 🛠️ Utilities
```
/utils/storage.ts                      ← localStorage functions
```

---

## ⚠️ FAIL YANG BOLEH DELETE

### ❌ Folder /workflows/ (SALAH LOCATION!)
```
/workflows/deploy.yml                  ← DUPLICATE - DELETE ini!
/workflows/DELETE_THIS_FOLDER.md       ← Penjelasan
```
**Reason:** GitHub Actions perlu `.github/workflows/` bukan `/workflows/`

### ❌ Supabase Files (Tidak digunakan - using localStorage)
```
/supabase/                             ← Boleh delete (protected, tak boleh)
/utils/supabase/                       ← Boleh delete (protected, tak boleh)
```
**Note:** Files ini protected, tak boleh delete, tapi tidak affect aplikasi.

---

## 📂 Struktur Folder Ringkas

```
aplikasi-dialek-pantai-timur/
│
├── 📚 DOCUMENTATION (Baca!)
│   ├── README.md
│   ├── START_HERE_DEPLOY.md           ← MULA DI SINI!
│   ├── CARA_DEPLOY.md
│   ├── QUICK_FIX_WHITE_SCREEN.md
│   ├── PENJELASAN_CARA_REACT_BERFUNGSI.md
│   └── PANDUAN_UPDATE_DATA.md
│
├── 🚀 CORE APP
│   ├── App.tsx                        ← Main app
│   ├── index.html                     ← Entry point
│   ├── package.json
│   └── vite.config.ts                 ← SET BASE PATH DI SINI!
│
├── 📱 SRC
│   └── main.tsx                       ← React entry
│
├── 🎨 COMPONENTS (UI)
│   ├── HomePage.tsx
│   ├── LearningModule.tsx
│   ├── QuizModule.tsx
│   ├── ComparisonTool.tsx
│   ├── ProgressTracker.tsx
│   ├── SettingsMenu.tsx
│   ├── PWAInstaller.tsx
│   └── ui/                            ← 40+ components
│
├── 📊 DATA
│   ├── dialectData.ts                 ← 42 words + 57 questions
│   ├── README.md
│   └── CONTOH_TEMPLATE.ts
│
├── 📱 PUBLIC (PWA files)
│   ├── manifest.json
│   ├── sw.js
│   ├── 404.html
│   ├── .nojekyll
│   ├── icon-192.png
│   ├── icon-512.png
│   └── ICON_GUIDE.md
│
├── ⚙️ .github/workflows/
│   └── deploy.yml                     ← Auto-deploy
│
├── 🎨 STYLES
│   └── globals.css
│
└── 🛠️ UTILS
    └── storage.ts
```

---

## 🎯 FAIL UNTUK EDIT

### 1️⃣ **Wajib Edit Sebelum Deploy:**
- `/vite.config.ts` - Set `base` path mengikut nama repo

### 2️⃣ **Optional Edit:**
- `/data/dialectData.ts` - Tambah/edit perkataan & kuiz
- `/public/icon-192.png` - Tukar PWA icon
- `/public/icon-512.png` - Tukar PWA icon
- `/public/manifest.json` - Edit app name/description

### 3️⃣ **Jangan Edit (Auto-generated/Protected):**
- `/components/ui/*` - UI components dari shadcn
- `/components/figma/*` - Protected components
- `/node_modules/` - Dependencies (auto-generated)
- `/dist/` - Build output (auto-generated)

---

## 📦 Fail Yang Auto-Generated (Ignore)

```
/node_modules/          ← Dependencies (git ignored)
/dist/                  ← Build output (git ignored)
package-lock.json       ← Dependency lock file
.DS_Store              ← Mac OS file (git ignored)
```

---

## ✅ CHECKLIST FILES UNTUK DEPLOY

Pastikan fail-fail ini ADA dan BETUL:

- [ ] ✅ `/.github/workflows/deploy.yml` - Workflow betul
- [ ] ✅ `/vite.config.ts` - Base path set
- [ ] ✅ `/index.html` - Ada PWA tags
- [ ] ✅ `/package.json` - Dependencies complete
- [ ] ✅ `/App.tsx` - Main application
- [ ] ✅ `/data/dialectData.ts` - Data ada
- [ ] ✅ `/public/manifest.json` - PWA manifest
- [ ] ✅ `/public/sw.js` - Service Worker
- [ ] ✅ `/public/404.html` - SPA routing
- [ ] ✅ All `/components/` - UI components

---

## 🗑️ SELAMAT DELETE

Fail/folder ini boleh delete tanpa affect aplikasi:

- [ ] `/workflows/` - Folder salah location (GitHub Actions guna `.github/workflows/`)
- [ ] Sebarang fail `.md` backup lama yang anda tak perlukan

**Jangan delete:**
- ❌ `.github/workflows/` - INI yang betul!
- ❌ Sebarang fail `.tsx`, `.ts`, `.json`, `.css`
- ❌ Folder `components/`, `data/`, `public/`, `src/`

---

## 💡 Tips

1. **Backup sebelum delete** - Just in case
2. **Check twice** - Pastikan delete yang betul sahaja
3. **Git commit** - Commit changes sebelum delete banyak fail
4. **Test after** - Test `npm run dev` selepas delete

---

## 🎉 JUMLAH FAIL

**Core Application:** ~50 files
**UI Components:** ~40 files  
**Documentation:** 6 files
**Config Files:** ~10 files
**Data Files:** 3 files

**Total:** ~100+ files (ini NORMAL untuk React app dengan UI library!)

---

**Fail penting dah dikenal pasti! Sekarang boleh deploy dengan yakin! 🚀**
