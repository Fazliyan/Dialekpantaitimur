# 🔧 BUILD TROUBLESHOOTING - VERCEL

## ❌ ERROR: "No Output Directory named 'dist' found"

### 🎯 PENYELESAIAN YANG TELAH DIBUAT

#### **1. Updated vercel.json**
```json
{
  "version": 2,
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "devCommand": "npm run dev"
}
```

#### **2. Updated package.json**
```json
{
  "engines": {
    "node": ">=18.0.0"
  },
  "scripts": {
    "build": "vite build"
  }
}
```

#### **3. Created .nvmrc**
```
18
```

#### **4. Fixed LearningModule.tsx**
```typescript
interface LearningModuleProps {
  state: "kelantan" | "terengganu" | "pahang";
  onBack: () => void;
  onComplete?: (points: number) => void;  // Made optional
}
```

---

## ✅ STEPS TO FIX

### **STEP 1: Test Build Locally**

```bash
# Clear cache
rm -rf node_modules dist .vite

# Fresh install
npm install

# Build
npm run build

# Check if dist folder created
ls -la dist/
```

**Expected output:**
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   └── index-[hash].css
├── icon-192.png
├── icon-512.png
├── manifest.json
└── sw.js
```

---

### **STEP 2: Verify Build Command**

Test each step:

```bash
# Step 1: Install
npm install
# Should succeed with no errors

# Step 2: Type check (optional)
npx tsc --noEmit
# Should pass (might show warnings, that's OK)

# Step 3: Build
npm run build
# Should output:
# vite v5.x.x building for production...
# ✓ built in XXXms
```

---

### **STEP 3: Check for TypeScript Errors**

If build fails, check for errors:

```bash
# Run build with verbose
npm run build -- --debug

# Or check TypeScript directly
npx tsc --noEmit --skipLibCheck
```

**Common errors:**
- Missing imports
- Type mismatches
- Unused variables (now disabled in tsconfig)

---

### **STEP 4: Vercel Project Settings**

In Vercel dashboard:

1. Go to **Project Settings**
2. Click **General**
3. Verify:
   ```
   Framework Preset:     Vite
   Build Command:        npm run build
   Output Directory:     dist
   Install Command:      npm install
   Node.js Version:      18.x (or auto)
   ```

4. Click **Save**
5. Redeploy

---

### **STEP 5: Force Redeploy**

If still not working:

```bash
# Via CLI
vercel --force --prod

# Or via dashboard
# Deployments → Latest → "Redeploy"
```

---

## 🔍 DEBUGGING CHECKLIST

### **Build Fails Locally?**

- [ ] Run `npm install` fresh
- [ ] Clear `.vite` cache: `rm -rf .vite`
- [ ] Check Node version: `node -v` (should be 18+)
- [ ] Check for syntax errors in files
- [ ] Check console for specific error

### **Build Succeeds Locally but Fails on Vercel?**

- [ ] Check Vercel build logs
- [ ] Verify Node version in Vercel (should be 18.x)
- [ ] Check if all files committed to git
- [ ] Verify `.gitignore` doesn't exclude important files
- [ ] Check Environment Variables (none needed for this app)

### **dist Folder Not Created?**

- [ ] Check `vite.config.ts` has `outDir: 'dist'`
- [ ] Run `npm run build` and look for errors
- [ ] Check disk space (unlikely but possible)
- [ ] Verify write permissions

---

## 📊 VERCEL BUILD LOGS

### **What to Look For:**

```
✅ GOOD BUILD:
Running "npm install"
...
Running "npm run build"
vite v5.x.x building for production...
✓ 123 modules transformed.
dist/index.html                  1.23 kB
dist/assets/index-abc123.js    150.45 kB
dist/assets/index-abc123.css    45.67 kB
✓ built in 1234ms
Build Completed in /vercel/output

❌ BAD BUILD:
Running "npm run build"
[vite] Internal server error
  Error: ...some error...
Build failed with exit code 1
```

### **Check Build Logs:**

1. Vercel Dashboard
2. Your Project
3. Deployments
4. Click latest deployment
5. Click "Building" or "View Function Logs"
6. Read error messages

---

## 🛠️ ALTERNATIVE: Manual Build Settings

If auto-detect fails, configure manually:

### **In Vercel Dashboard:**

1. Project Settings → General
2. Build & Development Settings
3. Override settings:

```
Framework Preset:     Other
Build Command:        npm run build
Output Directory:     dist
Install Command:      npm install
Development Command:  npm run dev
```

4. Click **Save**
5. Trigger new deployment

---

## 🔄 CLEAN REDEPLOY

If nothing works, try clean deploy:

### **Method 1: CLI**

```bash
# Remove Vercel config
rm -rf .vercel

# Redeploy
vercel --prod

# Follow prompts
```

### **Method 2: GitHub**

```bash
# Create new commit
git add .
git commit -m "Fix build configuration"
git push

# Vercel will auto-deploy
```

### **Method 3: Dashboard**

1. Delete project in Vercel
2. Re-import from GitHub
3. Fresh deployment

---

## ✅ VERIFICATION

### **After Successful Build:**

```bash
# Check dist contents
ls -la dist/

# Should see:
dist/index.html          ✅
dist/assets/             ✅
dist/manifest.json       ✅
dist/sw.js              ✅
dist/icon-*.png         ✅
```

### **Test Locally:**

```bash
# Preview production build
npm run preview

# Open http://localhost:4173
# Test all features
```

### **Test on Vercel:**

```
1. Visit production URL
2. Check all pages load
3. Check PWA works
4. Check no console errors
```

---

## 📞 STILL NOT WORKING?

### **Quick Fixes to Try:**

1. **Clear Vercel Cache:**
   ```
   Deployment Settings → Redeploy → 
   Check "Clear Cache and Retry"
   ```

2. **Update Dependencies:**
   ```bash
   npm update
   git add package.json package-lock.json
   git commit -m "Update dependencies"
   git push
   ```

3. **Simplify vercel.json:**
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": "dist"
   }
   ```

4. **Check for Hidden Errors:**
   - Look at full build logs
   - Check for warnings that became errors
   - Verify all imports are correct

---

## 🎯 EXPECTED BUILD OUTPUT

### **Successful Build Log:**

```
[11:23:45.123] Cloning github.com/username/repo-name
[11:23:46.456] Running "npm install"
[11:23:52.789] Running "npm run build"
[11:23:53.001] 
[11:23:53.002] > build
[11:23:53.003] > vite build
[11:23:53.004] 
[11:23:53.500] vite v5.4.11 building for production...
[11:23:54.123] transforming...
[11:23:56.789] ✓ 123 modules transformed.
[11:23:57.001] rendering chunks...
[11:23:57.456] computing gzip size...
[11:23:57.789] dist/index.html                   1.23 kB │ gzip: 0.65 kB
[11:23:57.790] dist/assets/index-abc123.css     45.67 kB │ gzip: 8.90 kB
[11:23:57.791] dist/assets/index-abc123.js     150.45 kB │ gzip: 48.23 kB
[11:23:57.792] 
[11:23:57.793] ✓ built in 4.79s
[11:23:58.000] Build Completed in /vercel/output [4s]
[11:23:59.000] Deploying...
[11:24:01.000] ✅ Deployment Complete!
```

---

## 🎊 SUCCESS INDICATORS

After fixing, you should see:

✅ Build logs show "✓ built in Xs"
✅ dist/ folder appears in logs
✅ Assets listed (js, css files)
✅ "Build Completed" message
✅ Deployment succeeds
✅ Site is live and working

---

## 📚 REFERENCE

### **Key Files:**

| File | Must Have |
|------|-----------|
| `package.json` | `"build": "vite build"` |
| `vite.config.ts` | `outDir: 'dist'` |
| `vercel.json` | `"outputDirectory": "dist"` |
| `.nvmrc` | `18` |

### **Key Commands:**

```bash
# Local test
npm install && npm run build && npm run preview

# Vercel deploy
vercel --prod

# Force rebuild
vercel --force --prod
```

---

**SELESAI!** Jika masih ada masalah, check Vercel build logs untuk error yang specific! 🔧
