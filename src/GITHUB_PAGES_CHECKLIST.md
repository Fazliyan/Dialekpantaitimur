# ✅ GITHUB PAGES DEPLOYMENT CHECKLIST

Panduan ringkas untuk deploy **Aplikasi Dialek Pantai Timur** ke GitHub Pages.

---

## 🎯 QUICK START (5 STEPS)

### **STEP 1: Test Build Locally** ✅

```bash
# Clean build
rm -rf node_modules dist package-lock.json

# Install dependencies
npm install

# Build
npm run build

# Expected: dist/ folder created with index.html
```

**✅ Success if:** `dist/index.html` exists and no errors

---

### **STEP 2: Create GitHub Repository** ✅

1. Go to https://github.com/new
2. **Repository name:** `dialek-pantai-timur` (atau nama lain)
3. **Visibility:** Public (required for free GitHub Pages)
4. **DON'T** check "Initialize with README"
5. Click **"Create repository"**

---

### **STEP 3: Push Code to GitHub** ✅

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Aplikasi Dialek Pantai Timur"

# Add remote (replace <username> and <repo-name>)
git remote add origin https://github.com/<username>/<repo-name>.git

# Push
git branch -M main
git push -u origin main
```

**✅ Success if:** Code appears in GitHub repository

---

### **STEP 4: Enable GitHub Pages** ✅

1. Go to repository on GitHub
2. Click **"Settings"** tab
3. Click **"Pages"** in left sidebar
4. Under **"Source"**, select: **"GitHub Actions"**
5. Save (if needed)

**IMPORTANT:** Must select **"GitHub Actions"**, NOT "Deploy from a branch"!

---

### **STEP 5: Update Base Path** ✅

#### **If deploying to PROJECT SITE** (e.g., `username.github.io/dialek-pantai-timur`):

**Edit `vite.config.ts` line 8:**

```typescript
// BEFORE:
base: '/',

// AFTER (replace with YOUR repo name):
base: '/dialek-pantai-timur/',
```

**Then commit and push:**

```bash
git add vite.config.ts
git commit -m "Update base path for GitHub Pages"
git push origin main
```

#### **If deploying to USER SITE** (e.g., `username.github.io`):

**Keep as is:**
```typescript
base: '/',  // Already correct!
```

**Note:** User site requires repo name to be `username.github.io`

---

## ⏱️ WAIT FOR DEPLOYMENT

### **Check Progress:**

1. Go to **"Actions"** tab in GitHub
2. Watch for **"Deploy to GitHub Pages"** workflow
3. Wait for **green checkmark ✅** (takes ~3-5 minutes)
4. If **red X ❌**, click to see error details

### **Timeline:**

```
Push code:        0:00
Workflow starts:  0:30
Build complete:   3:00
Deploy complete:  3:30
Site live:        4:00
Total:            ~4-5 minutes ⚡
```

---

## 🌐 ACCESS YOUR SITE

### **Find Your URL:**

**Project Site (Most Common):**
```
https://<username>.github.io/<repo-name>/

Example:
https://ahmad123.github.io/dialek-pantai-timur/
```

**User Site (Special Case):**
```
https://<username>.github.io/

Example:
https://ahmad123.github.io/

Note: Requires repo name to be exactly: username.github.io
```

### **Test Your Site:**

1. Open URL in browser
2. Check all features work:
   - ✅ Sidebar navigation
   - ✅ Learn module
   - ✅ Quiz module
   - ✅ Leaderboard
   - ✅ Profile
   - ✅ Tentang

---

## 🔧 CONFIGURATION REFERENCE

### **Files Already Configured:**

| File | Purpose | Status |
|------|---------|--------|
| `.github/workflows/deploy.yml` | Auto-deploy on push | ✅ Ready |
| `vite.config.ts` | Base path config | ⚠️ Update if project site |
| `public/404.html` | SPA routing fix | ✅ Ready |
| `index.html` | SPA redirect script | ✅ Ready |
| `package.json` | Build commands | ✅ Ready |
| `tsconfig.json` | TypeScript config | ✅ Ready |

**Only need to update:** `vite.config.ts` base path (if project site)

---

## ❌ TROUBLESHOOTING

### **Problem: Actions Failed (Red X)**

**Solution:**

```bash
# 1. Check workflow permissions
# Settings → Actions → General → Workflow permissions
# Select: "Read and write permissions"
# Save

# 2. Re-run workflow
# Actions → Failed workflow → Re-run all jobs
```

---

### **Problem: Page Shows 404**

**Solution:**

```typescript
// Check base path in vite.config.ts

// If URL is: username.github.io/dialek-app/
// Then base MUST be:
base: '/dialek-app/',  // EXACT match with repo name!

// Commit and push:
git add vite.config.ts
git commit -m "Fix base path"
git push origin main
```

---

### **Problem: CSS/JS Not Loading**

**Symptom:** Page loads but no styling

**Solution:**

```typescript
// Wrong base path!
// Check browser console for 404 errors

// Update vite.config.ts:
base: '/your-repo-name/',  // Must match repo name exactly

// Case-sensitive!
// If repo is "Dialek-App", use '/Dialek-App/'
// NOT '/dialek-app/'
```

---

### **Problem: Build Succeeds but No Deploy Step**

**Solution:**

```
1. Settings → Pages
2. Ensure Source is "GitHub Actions" (NOT "Deploy from a branch")
3. Settings → Actions → General
4. Workflow permissions: "Read and write permissions"
5. Actions → Re-run workflow
```

---

## ✅ PRE-DEPLOYMENT CHECKLIST

Before pushing to GitHub, verify:

```
✅ npm run build succeeds locally
✅ dist/ folder created
✅ dist/index.html exists
✅ No TypeScript errors
✅ No console errors when running npm run preview
✅ Git initialized (git init)
✅ All files committed (git status shows clean)
✅ Remote added (git remote -v shows origin)
✅ GitHub repository created
✅ Repository is Public (for free Pages)
```

---

## 📊 POST-DEPLOYMENT CHECKLIST

After deployment succeeds, verify:

```
✅ Actions tab shows green checkmark
✅ Site loads at correct URL
✅ No 404 errors
✅ Sidebar navigation works
✅ All 5 menu items accessible
✅ Learn module displays words
✅ Quiz shows questions
✅ Leaderboard displays scores
✅ Profile shows user info
✅ Tentang page loads
✅ Audio buttons present (even if simulated)
✅ No console errors
✅ CSS styling applied correctly
✅ Responsive on mobile
✅ PWA installable (optional)
```

---

## 🔄 UPDATE APP (After Initial Deploy)

To update app after making changes:

```bash
# 1. Make changes to code
# 2. Test locally
npm run build
npm run preview

# 3. Commit and push
git add .
git commit -m "Update: description of changes"
git push origin main

# 4. Auto-deploy happens automatically!
# Wait ~3-5 minutes
# Changes will be live
```

**No need to manually trigger deploy - it's automatic on every push!** ✨

---

## 🎯 SUCCESS CRITERIA

### **Build Success:**

```bash
npm run build

# Output should show:
vite v5.4.11 building for production...
✓ 123 modules transformed.
dist/index.html                   X.XX kB
dist/assets/index-XXXXX.css       X.XX kB
dist/assets/index-XXXXX.js        XXX.XX kB
✓ built in X.XXs
```

### **Deploy Success:**

```
Actions tab:
✅ Deploy to GitHub Pages
   └─ Build: Success
   └─ Deploy: Success
   └─ Environment: github-pages
```

### **Site Live:**

```
URL accessible: https://username.github.io/repo-name/
Status: 200 OK
Content: Aplikasi Dialek Pantai Timur loads
Console: No errors
```

---

## 📋 COMMAND REFERENCE

### **Development:**

```bash
npm run dev          # Start dev server (port 5173)
npm run build        # Build for production
npm run preview      # Preview production build
```

### **Git:**

```bash
git status           # Check file changes
git add .            # Stage all changes
git commit -m "msg"  # Commit with message
git push origin main # Push to GitHub
git log              # View commit history
```

### **Troubleshooting:**

```bash
# Clean everything and rebuild
rm -rf node_modules dist package-lock.json
npm install
npm run build

# Check TypeScript errors
npx tsc --noEmit

# View build output
ls -la dist/
```

---

## 🚀 FINAL DEPLOYMENT COMMAND

### **All-in-One:**

```bash
# Test, commit, and push in one go:
npm run build && \
git add . && \
git commit -m "Deploy to GitHub Pages" && \
git push origin main
```

**Then:**
1. Go to Settings → Pages → Enable GitHub Actions (one-time)
2. Wait 3-5 minutes
3. Visit: `https://username.github.io/repo-name/`

---

## 💡 TIPS

### **1. Always Test Locally First**
```bash
npm run build && npm run preview
# If works locally → will work on GitHub Pages
```

### **2. Case Sensitivity Matters**
```typescript
// Repo: dialek-app
base: '/dialek-app/',  // ✅ Correct

// Repo: Dialek-App
base: '/Dialek-App/',  // ✅ Correct
base: '/dialek-app/',  // ❌ WRONG - case mismatch!
```

### **3. Monitor Actions Tab**
```
Push → Actions tab → Watch for completion
If fails → Click for error details
```

### **4. Use Git Commits Wisely**
```bash
# Good commits:
git commit -m "Add new quiz questions"
git commit -m "Fix audio button styling"
git commit -m "Update base path for deployment"

# Bad commits:
git commit -m "update"
git commit -m "fix"
```

### **5. Keep Dependencies Updated**
```bash
# Check for updates
npm outdated

# Update if needed
npm update
```

---

## 📚 RESOURCES

- **GitHub Pages Docs:** https://docs.github.com/pages
- **Vite Deployment Guide:** https://vitejs.dev/guide/static-deploy
- **Full Deployment Guide:** [DEPLOY_GITHUB_PAGES.md](./DEPLOY_GITHUB_PAGES.md)
- **Project README:** [README.md](./README.md)

---

## ✅ SUMMARY

```
PLATFORM:      GitHub Pages (FREE!)
BUILD TOOL:    Vite + TypeScript
DEPLOY:        GitHub Actions (automatic)
SETUP TIME:    ~10 minutes
DEPLOY TIME:   ~3-5 minutes per update
COST:          FREE ✨
PWA SUPPORT:   YES ✅
CUSTOM DOMAIN: YES (optional) ✅

STATUS:        ✅ READY TO DEPLOY!
```

---

## 🎊 YOU'RE READY!

**Start deployment now:**

```bash
# Step 1: Test
npm run build

# Step 2: Push
git add .
git commit -m "Initial deployment"
git push origin main

# Step 3: Enable Pages
# Settings → Pages → GitHub Actions

# Step 4: Wait & Access
# https://username.github.io/repo-name/
```

**Good luck!** 🚀✨

---

## ⚡ ULTRA-QUICK REFERENCE

```bash
# 1. BUILD
npm run build

# 2. PUSH
git add . && git commit -m "Deploy" && git push

# 3. ENABLE
# Settings → Pages → GitHub Actions

# 4. WAIT
# ~3-5 minutes

# 5. ACCESS
# https://username.github.io/repo-name/
```

**DONE!** ✅
