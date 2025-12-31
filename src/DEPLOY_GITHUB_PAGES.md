# 🚀 DEPLOY KE GITHUB PAGES

Panduan lengkap untuk deploy **Aplikasi Dialek Pantai Timur** ke GitHub Pages.

---

## ✅ SETUP COMPLETED

Semua konfigurasi untuk GitHub Pages telah siap:

- ✅ GitHub Actions workflow (`.github/workflows/deploy.yml`)
- ✅ Vite config dengan base path
- ✅ SPA routing fix (404.html)
- ✅ PWA support (manifest.json, sw.js)
- ✅ Build command yang proper (`tsc && vite build`)

---

## 📋 LANGKAH DEPLOYMENT

### **STEP 1: Setup GitHub Repository**

#### **1.1 Create Repository**

```bash
# Di GitHub.com:
# 1. Klik "New repository"
# 2. Repository name: "dialek-pantai-timur" (atau nama lain)
# 3. Public atau Private (pilih Public untuk GitHub Pages free)
# 4. JANGAN centang "Initialize with README" (sebab kita dah ada code)
# 5. Klik "Create repository"
```

#### **1.2 Push Code ke GitHub**

```bash
# Di terminal (local):

# Initialize git (jika belum)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Aplikasi Dialek Pantai Timur"

# Add remote (ganti <username> dengan username GitHub anda)
git remote add origin https://github.com/<username>/dialek-pantai-timur.git

# Push ke main branch
git branch -M main
git push -u origin main
```

---

### **STEP 2: Enable GitHub Pages**

#### **2.1 Go to Settings**

```
1. Di GitHub repo, klik tab "Settings"
2. Di sidebar kiri, klik "Pages"
```

#### **2.2 Configure Source**

```
Source: GitHub Actions

(PENTING: Pilih "GitHub Actions", BUKAN "Deploy from a branch")
```

**Screenshot Guide:**
```
Settings → Pages → Source → [Pilih "GitHub Actions"]
```

---

### **STEP 3: Configure Base Path (IMPORTANT!)**

#### **3.1 Tentukan Base Path**

GitHub Pages URL bergantung pada jenis deployment:

| Jenis | URL | Base Path |
|-------|-----|-----------|
| **User/Org Site** | `username.github.io` | `'/'` |
| **Project Site** | `username.github.io/repo-name` | `'/repo-name/'` |

#### **3.2 Update vite.config.ts**

**IF deploying to PROJECT SITE** (contoh: `username.github.io/dialek-pantai-timur`):

```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  base: '/dialek-pantai-timur/',  // ← Nama repo anda!
  // ... rest of config
});
```

**IF deploying to USER SITE** (contoh: `username.github.io`):

```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  base: '/',  // ← Default, sudah set
  // ... rest of config
});
```

**CURRENT SETTING:**
```typescript
base: '/',  // ← Set untuk user site
```

**TO CHANGE (jika project site):**

Edit `/vite.config.ts`, line 8:
```typescript
base: '/dialek-pantai-timur/',  // Ganti dengan nama repo anda
```

Then commit:
```bash
git add vite.config.ts
git commit -m "Update base path for GitHub Pages"
git push origin main
```

---

### **STEP 4: Wait for Deployment**

#### **4.1 Check Actions Tab**

```
1. Di GitHub repo, klik tab "Actions"
2. Tunggu workflow "Deploy to GitHub Pages" complete
3. Status: ✅ Green checkmark = SUCCESS
4. Status: ❌ Red X = FAILED (check logs)
```

**Expected Timeline:**
```
Workflow starts:     Immediately after push
Build time:          ~2-3 minutes
Deploy time:         ~30 seconds
Total:               ~3-5 minutes
```

#### **4.2 View Logs**

```
Actions → Latest workflow run → Click to view details
```

**Stages:**
1. ✅ Checkout code
2. ✅ Setup Node.js
3. ✅ Install dependencies (`npm ci`)
4. ✅ Build app (`npm run build`)
5. ✅ Upload artifact
6. ✅ Deploy to GitHub Pages

---

### **STEP 5: Access Your Site**

#### **5.1 Find URL**

**Project Site:**
```
https://<username>.github.io/<repo-name>/

Contoh:
https://ahmad123.github.io/dialek-pantai-timur/
```

**User Site:**
```
https://<username>.github.io/

Contoh:
https://ahmad123.github.io/
```

#### **5.2 Test**

```bash
# Open browser
# Navigate to URL
# Expected: ✅ App loads successfully!
```

---

## 🔧 VITE.CONFIG.TS SETUP

### **Current Config:**

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Update base path based on deployment type
  base: '/',  // ← For user site (username.github.io)
  // base: '/dialek-pantai-timur/',  // ← For project site (username.github.io/dialek-pantai-timur)
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
});
```

### **TO UPDATE BASE PATH:**

**If deploying to PROJECT site** (recommended):

1. Edit `vite.config.ts`, line 8
2. Change from `base: '/'` to `base: '/your-repo-name/'`
3. Save file
4. Commit and push:

```bash
git add vite.config.ts
git commit -m "Update base path for project site"
git push origin main
```

5. Wait for new deployment (~3 mins)
6. Access: `https://username.github.io/your-repo-name/`

---

## 📁 GITHUB ACTIONS WORKFLOW

File: `.github/workflows/deploy.yml`

**What it does:**
1. ✅ Triggers on push to `main` branch
2. ✅ Sets up Node.js 20
3. ✅ Installs dependencies with `npm ci`
4. ✅ Builds app with `npm run build`
5. ✅ Uploads `dist/` folder
6. ✅ Deploys to GitHub Pages

**To trigger manually:**
```
GitHub → Actions tab → "Deploy to GitHub Pages" → Run workflow
```

---

## 🧪 LOCAL TEST BEFORE DEPLOY

**ALWAYS test build locally first!**

```bash
# 1. Clean build
rm -rf node_modules dist package-lock.json

# 2. Fresh install
npm install

# 3. Build
npm run build

# Expected output:
# vite v5.4.11 building for production...
# ✓ 123 modules transformed.
# dist/index.html                   X kb
# dist/assets/index-XXXXX.css       X kb
# dist/assets/index-XXXXX.js        X kb
# ✓ built in Xs

# 4. Preview locally
npm run preview
# → Local: http://localhost:4173/

# 5. Test in browser
# If works locally → will work on GitHub Pages!
```

---

## ❌ TROUBLESHOOTING

### **Problem 1: Actions Failed**

**Symptom:**
```
Actions tab shows ❌ red X
```

**Solution:**
```bash
# Click on failed workflow
# Read error message
# Common issues:

# 1. Build failed - TypeScript errors
npm run build  # Test locally first

# 2. Permission denied
# Go to Settings → Actions → General
# Scroll to "Workflow permissions"
# Select "Read and write permissions"
# Click Save

# 3. Pages not enabled
# Go to Settings → Pages
# Source: Select "GitHub Actions"
```

---

### **Problem 2: Page Shows 404**

**Symptom:**
```
Site loads but shows blank or 404
```

**Solution:**
```typescript
// Check vite.config.ts base path!

// If URL is: username.github.io/dialek-app/
// Then base MUST be: '/dialek-app/'

// Update vite.config.ts:
base: '/dialek-app/',  // Match repo name!

// Commit and push
git add vite.config.ts
git commit -m "Fix base path"
git push origin main
```

---

### **Problem 3: Assets Not Loading**

**Symptom:**
```
Page loads but CSS/JS broken
Console shows 404 for assets
```

**Solution:**
```typescript
// Wrong base path!

// Check browser console:
// If loading from: username.github.io/assets/index.js
// But should be: username.github.io/repo-name/assets/index.js

// Fix in vite.config.ts:
base: '/repo-name/',  // Add repo name!
```

---

### **Problem 4: Build Success but Not Deploying**

**Symptom:**
```
Build ✅ succeeds
Deploy step missing
```

**Solution:**
```
1. Go to Settings → Pages
2. Ensure Source is "GitHub Actions" (NOT "Deploy from a branch")
3. Check Settings → Actions → General
4. Ensure Workflow permissions: "Read and write permissions"
5. Re-run workflow from Actions tab
```

---

## 📊 CHECKLIST BEFORE DEPLOY

```
✅ Code pushed to GitHub repo
✅ Settings → Pages → Source: "GitHub Actions"
✅ Settings → Actions → Permissions: "Read and write"
✅ vite.config.ts base path set correctly
✅ Local build successful (npm run build works)
✅ dist/ folder contains index.html
✅ public/ folder has manifest.json, icons
✅ No TypeScript errors (tsc passes)
```

**If ALL ✅ → Deploy akan berjaya!**

---

## 🎯 QUICK DEPLOY GUIDE

### **Fast Track (5 Steps):**

```bash
# 1. TEST BUILD LOCALLY
npm run build

# 2. CREATE GITHUB REPO (on github.com)
# Name: dialek-pantai-timur (or anything)

# 3. PUSH CODE
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/<username>/<repo-name>.git
git push -u origin main

# 4. ENABLE GITHUB PAGES
# Settings → Pages → Source: "GitHub Actions"

# 5. WAIT & ACCESS
# Actions tab → Wait for ✅
# Access: https://<username>.github.io/<repo-name>/
```

---

## 🔄 UPDATE APP (After Initial Deploy)

```bash
# 1. Make changes to code
# 2. Test locally
npm run build
npm run preview

# 3. Commit and push
git add .
git commit -m "Update: description of changes"
git push origin main

# 4. Auto-deploy!
# GitHub Actions will automatically rebuild and deploy
# Wait ~3 minutes
# Changes live at: https://username.github.io/repo-name/
```

---

## 📚 IMPORTANT NOTES

### **1. Base Path Rules**

```typescript
// USER SITE (username.github.io):
base: '/'

// PROJECT SITE (username.github.io/repo-name):
base: '/repo-name/'  // MUST match repo name EXACTLY!
```

### **2. Case Sensitivity**

```bash
# Repo name: Dialek-Pantai-Timur
# Base must match: '/Dialek-Pantai-Timur/'

# WRONG: '/dialek-pantai-timur/' (different case)
# RIGHT: '/Dialek-Pantai-Timur/' (exact match)
```

### **3. PWA on GitHub Pages**

```
✅ PWA features work on GitHub Pages!
✅ Service Worker registers correctly
✅ Install prompt appears (if HTTPS)
✅ Offline support works

NOTE: Requires HTTPS (GitHub Pages provides this automatically)
```

### **4. Custom Domain (Optional)**

```
# If you have custom domain:
1. Settings → Pages → Custom domain
2. Enter: dialek.yourdomain.com
3. Update DNS records (see GitHub guide)
4. Update vite.config.ts:
   base: '/'  // Root domain
```

---

## ✅ SUCCESS INDICATORS

### **Build Success:**
```
✓ npm install completes
✓ npm run build completes
✓ dist/ folder created
✓ dist/index.html exists
✓ dist/assets/ contains CSS & JS
```

### **Deploy Success:**
```
✓ Actions tab shows green checkmark
✓ Workflow completed all steps
✓ No error messages in logs
✓ Pages environment created
```

### **Site Live:**
```
✓ URL loads (no 404)
✓ Styling appears correct
✓ Navigation works
✓ Console has no errors
✓ Assets load properly
```

---

## 🎊 EXPECTED RESULTS

### **Timeline:**
```
Push code:           0 min
Workflow starts:     +30 sec
Build completes:     +3 min
Deploy completes:    +3.5 min
Site live:           +4 min
DNS propagation:     +5 min (max)

TOTAL: ~5 minutes from push to live! ⚡
```

### **Final URLs:**

**Project Site (Most Common):**
```
https://<username>.github.io/<repo-name>/

Example:
https://ahmad123.github.io/dialek-pantai-timur/
```

**User Site (Requires special repo name):**
```
Repo name MUST be: <username>.github.io
URL: https://<username>.github.io/

Example:
Repo: ahmad123.github.io
URL: https://ahmad123.github.io/
```

---

## 📖 ADDITIONAL RESOURCES

**GitHub Pages Docs:**
- https://docs.github.com/pages

**Vite + GitHub Pages:**
- https://vitejs.dev/guide/static-deploy#github-pages

**SPA on GitHub Pages:**
- https://github.com/rafgraph/spa-github-pages

---

## 🚀 DEPLOY NOW!

### **Ready? Start here:**

```bash
# 1. Test build
npm run build

# 2. If successful:
git add .
git commit -m "Ready for GitHub Pages"
git push origin main

# 3. Enable GitHub Pages
# Settings → Pages → GitHub Actions

# 4. Wait for deploy
# Actions tab → Watch progress

# 5. Access site!
# https://username.github.io/repo-name/
```

---

## 🎯 SUMMARY

```
PLATFORM:        GitHub Pages ✅
BUILD:           Vite + TypeScript
WORKFLOW:        GitHub Actions (automatic)
DEPLOY TIME:     ~3-5 minutes
COST:            FREE! 🎉
PWA:             Supported ✅
CUSTOM DOMAIN:   Supported ✅
AUTO-DEPLOY:     On every push to main ✅

STATUS:          ✅ READY TO DEPLOY!
```

---

## 💡 PRO TIPS

1. **Always test locally first**: `npm run build && npm run preview`
2. **Check base path**: Must match repo name for project sites
3. **Monitor Actions tab**: Watch for errors during deploy
4. **Use descriptive commits**: Easy to track what changed
5. **Enable HTTPS**: Already enabled by default on GitHub Pages
6. **Set up custom domain**: Professional look (optional)

---

**SELAMAT DEPLOY!** 🚀✨

Your app will be live at:
```
https://<username>.github.io/<repo-name>/
```

(Update after creating repo!)

---

## ⚡ ONE-LINER DEPLOY

```bash
npm run build && git add . && git commit -m "Deploy to GitHub Pages" && git push origin main
```

**Then enable Pages in Settings!** ✅
