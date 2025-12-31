# 🚀 PANDUAN DEPLOY KE VERCEL

Panduan lengkap untuk deploy **Aplikasi Dialek Pantai Timur** ke Vercel dengan PWA support.

---

## 📋 CHECKLIST PRE-DEPLOYMENT

### ✅ Files Yang Diperlukan (Sudah Ada!)

- [x] **package.json** - Dependencies dan scripts ✅
- [x] **vite.config.ts** - Build configuration ✅
- [x] **vercel.json** - Vercel configuration ✅
- [x] **index.html** - Entry point ✅
- [x] **public/manifest.json** - PWA manifest ✅
- [x] **public/sw.js** - Service Worker ✅
- [x] **public/icon-192.png** - PWA icon small ✅
- [x] **public/icon-512.png** - PWA icon large ✅

### ✅ Konfigurasi Yang Diperlukan

- [x] **Base path**: `/` (untuk Vercel)
- [x] **Output directory**: `dist`
- [x] **Build command**: `npm run build`
- [x] **SPA routing**: Configured via rewrites
- [x] **PWA headers**: Configured untuk Service Worker

---

## 🎯 CARA DEPLOY (3 METHOD)

### **METHOD 1: Deploy via Vercel Website (RECOMMENDED)** ⭐

#### **Step 1: Sign Up / Login**

1. Pergi ke [https://vercel.com](https://vercel.com)
2. Click **Sign Up** atau **Log In**
3. Pilih salah satu:
   - **Continue with GitHub** (recommended)
   - Continue with GitLab
   - Continue with Bitbucket
   - Continue with Email

#### **Step 2: Import Project**

1. Selepas login, click **"Add New..."** → **"Project"**
2. Pilih **"Import Git Repository"**
3. Jika belum connect GitHub:
   - Click **"Add GitHub Account"**
   - Authorize Vercel
   - Pilih repository anda

4. Atau upload folder secara manual:
   - Click **"Browse"** di bahagian bawah
   - Pilih folder project anda
   - Upload semua files

#### **Step 3: Configure Project**

Vercel akan auto-detect Vite framework. Pastikan settings:

```
Framework Preset:     Vite
Build Command:        npm run build  (auto-detected)
Output Directory:     dist           (auto-detected)
Install Command:      npm install    (auto-detected)
```

**Environment Variables:**
- Tidak diperlukan (pure frontend app)

#### **Step 4: Deploy!**

1. Click **"Deploy"**
2. Tunggu 1-3 minit
3. Done! 🎉

**Your app will be live at:**
```
https://your-project-name.vercel.app
```

---

### **METHOD 2: Deploy via Vercel CLI**

#### **Step 1: Install Vercel CLI**

```bash
npm install -g vercel
```

#### **Step 2: Login**

```bash
vercel login
```

Pilih method (GitHub, Email, etc.)

#### **Step 3: Deploy**

Dari root folder project:

```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

#### **Step 4: Follow Prompts**

```
? Set up and deploy "~/dialek-app"? [Y/n] y
? Which scope do you want to deploy to? Your Name
? Link to existing project? [y/N] n
? What's your project's name? dialek-pantai-timur
? In which directory is your code located? ./
Auto-detected Project Settings (Vite):
- Build Command: npm run build
- Output Directory: dist
- Development Command: npm run dev
? Want to override the settings? [y/N] n
```

#### **Step 5: Done!**

```
✅ Deployment ready
🔗 https://dialek-pantai-timur.vercel.app
```

---

### **METHOD 3: Deploy via GitHub Integration (BEST)**

#### **Step 1: Push to GitHub**

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Aplikasi Dialek Pantai Timur"

# Create GitHub repo (via GitHub website)
# Then add remote
git remote add origin https://github.com/username/dialek-pantai-timur.git

# Push
git push -u origin main
```

#### **Step 2: Import from GitHub (Vercel)**

1. Pergi ke [https://vercel.com/new](https://vercel.com/new)
2. Click **"Import Git Repository"**
3. Pilih repository anda
4. Click **"Import"**

#### **Step 3: Auto Deploy Setup** ✨

**Automatic Deployments:**
- ✅ **Production**: Every push to `main` branch
- ✅ **Preview**: Every push to other branches
- ✅ **PR Previews**: Every pull request

**What this means:**
```
main branch push      → Auto deploy to production
develop branch push   → Auto deploy to preview URL
Pull request created  → Auto deploy preview for review
```

#### **Step 4: Custom Domain (Optional)**

1. Go to project settings
2. Click **"Domains"**
3. Add your domain:
   - `dialekpantaitimur.com`
   - `www.dialekpantaitimur.com`
4. Follow DNS configuration instructions
5. Wait for SSL certificate (automatic)

---

## 🔧 VERCEL CONFIGURATION

### **vercel.json Explained**

```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  
  // SPA Routing: All routes → index.html
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  
  // Headers for PWA and Security
  "headers": [
    {
      "source": "/sw.js",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=0, must-revalidate"
        },
        {
          "key": "Service-Worker-Allowed",
          "value": "/"
        }
      ]
    },
    {
      "source": "/manifest.json",
      "headers": [
        {
          "key": "Content-Type",
          "value": "application/manifest+json"
        }
      ]
    },
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

**Key Features:**
- ✅ SPA routing (client-side navigation works)
- ✅ PWA headers (Service Worker works)
- ✅ Security headers (XSS protection)
- ✅ Proper manifest.json content-type

---

## 📱 PWA VERIFICATION

### **After Deployment, Test PWA:**

#### **Desktop (Chrome/Edge):**

1. Visit your Vercel URL
2. Look for **Install icon** in address bar (🖥️+)
3. Click to install
4. App opens in standalone window

**DevTools Check:**
```
1. Open DevTools (F12)
2. Go to "Application" tab
3. Check:
   - ✅ Manifest: Should show app details
   - ✅ Service Workers: Should show sw.js registered
   - ✅ Cache Storage: Should show cached files
```

#### **Mobile (Android Chrome):**

1. Visit your Vercel URL
2. Menu (⋮) → **"Add to Home screen"**
3. Install prompt appears
4. Click **"Install"**
5. App icon appears on home screen
6. Open → Runs like native app!

#### **Mobile (iOS Safari):**

1. Visit your Vercel URL
2. Share button (⬆️)
3. **"Add to Home Screen"**
4. Name it → **"Add"**
5. App icon appears
6. Open → Runs in standalone mode

---

## 🌐 CUSTOM DOMAIN SETUP

### **Option 1: Register Domain via Vercel**

1. Go to project → **"Domains"**
2. Click **"Buy a domain"**
3. Search for domain
4. Purchase (integrated)
5. Auto-configured! ✅

### **Option 2: Use Existing Domain**

#### **A. Subdomain (e.g., dialek.yourdomain.com)**

1. In Vercel project → **"Domains"**
2. Add: `dialek.yourdomain.com`
3. Vercel shows DNS records:
   ```
   Type:  CNAME
   Name:  dialek
   Value: cname.vercel-dns.com
   ```
4. Go to your DNS provider (Namecheap, GoDaddy, etc.)
5. Add CNAME record
6. Wait 5-60 minutes
7. SSL auto-generated ✅

#### **B. Root Domain (e.g., dialekpantaitimur.com)**

1. In Vercel project → **"Domains"**
2. Add: `dialekpantaitimur.com`
3. Vercel shows DNS records:
   ```
   Type:  A
   Name:  @
   Value: 76.76.21.21
   
   Type:  AAAA
   Name:  @
   Value: 2606:4700:10::ac43:1515
   ```
4. Go to your DNS provider
5. Add A and AAAA records
6. Also add www CNAME:
   ```
   Type:  CNAME
   Name:  www
   Value: cname.vercel-dns.com
   ```
7. Wait for propagation
8. SSL auto-generated ✅

---

## 📊 MONITORING & ANALYTICS

### **Built-in Vercel Analytics**

1. Go to project dashboard
2. Click **"Analytics"** tab
3. See:
   - ✅ Page views
   - ✅ Unique visitors
   - ✅ Top pages
   - ✅ Real User Monitoring (RUM)
   - ✅ Web Vitals (CLS, LCP, FID)

### **Enable Analytics (Free)**

1. Project Settings → **"Analytics"**
2. Click **"Enable"**
3. Add script to `index.html`:
   ```html
   <script defer src="/_vercel/insights/script.js"></script>
   ```

### **Speed Insights**

1. Project Settings → **"Speed Insights"**
2. Click **"Enable"**
3. Monitor:
   - Largest Contentful Paint (LCP)
   - First Input Delay (FID)
   - Cumulative Layout Shift (CLS)
   - Time to First Byte (TTFB)

---

## 🔄 CONTINUOUS DEPLOYMENT

### **Automatic Deploys**

**Every Git Push:**
```
main branch    → Production (dialek-pantai-timur.vercel.app)
other branches → Preview URL (branch-name-dialek-pantai-timur.vercel.app)
```

**Deployment Process:**
```
1. Push to GitHub
   ↓
2. Vercel detects push
   ↓
3. Starts build (npm run build)
   ↓
4. Runs tests (if configured)
   ↓
5. Deploys to edge network
   ↓
6. Invalidates cache
   ↓
7. Live! ✅
```

**Build Time:** ~1-2 minutes

### **Preview Deployments**

**For Every PR:**
```
Pull Request opened → Vercel creates preview URL
Comments on PR      → Auto-deployed preview
Team can test       → Before merging to main
```

**Example:**
```
PR #123: "Add new feature"
Preview URL: pr-123-dialek-pantai-timur.vercel.app
```

---

## 🛠️ TROUBLESHOOTING

### **Issue 1: Build Fails**

**Error:**
```
Error: Build failed with exit code 1
```

**Solution:**
```bash
# Test locally first
npm install
npm run build

# If works locally, check:
1. Node version (Vercel uses Node 18 by default)
2. Dependencies in package.json
3. Build logs in Vercel dashboard
```

**Fix Node Version:**
```json
// package.json
{
  "engines": {
    "node": "18.x"
  }
}
```

---

### **Issue 2: 404 on Refresh**

**Problem:** App works on homepage, but refresh on `/learn` shows 404

**Cause:** SPA routing not configured

**Solution:** Already fixed in `vercel.json`!
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

### **Issue 3: Service Worker Not Working**

**Problem:** PWA install prompt doesn't appear

**Checklist:**
1. ✅ Must be served over HTTPS (Vercel does this automatically)
2. ✅ `sw.js` must be in `public/` folder
3. ✅ Headers must be set (done in `vercel.json`)
4. ✅ `manifest.json` must be valid

**Test:**
```
1. Open DevTools → Application
2. Service Workers → Should show "activated"
3. Manifest → Should show app details
```

**Force Re-register:**
```javascript
// In browser console
navigator.serviceWorker.getRegistrations().then(registrations => {
  registrations.forEach(registration => registration.unregister());
});
// Then refresh page
```

---

### **Issue 4: Slow Build Times**

**Problem:** Build takes > 5 minutes

**Solution:**
```json
// vercel.json - Add caching
{
  "build": {
    "env": {
      "NODE_ENV": "production"
    }
  },
  "functions": {
    "src/api/**/*.ts": {
      "memory": 1024,
      "maxDuration": 10
    }
  }
}
```

**Or use pnpm (faster):**
```json
// package.json
{
  "scripts": {
    "build": "vite build"
  },
  "packageManager": "pnpm@8.0.0"
}
```

---

### **Issue 5: localStorage Not Persisting**

**Problem:** User progress lost on refresh

**Cause:** Service Worker cache issues or incognito mode

**Solution:**
1. ✅ Already handled in `utils/storage.ts`
2. Check browser isn't in incognito
3. Check browser settings allow localStorage

**Test:**
```javascript
// In console
localStorage.setItem('test', 'hello');
console.log(localStorage.getItem('test')); // Should show 'hello'
```

---

## 🎯 PERFORMANCE OPTIMIZATION

### **Already Implemented:**

1. ✅ **Vite Build Optimization**
   - Code splitting
   - Tree shaking
   - Minification
   - Asset optimization

2. ✅ **Service Worker Caching**
   - Offline support
   - Fast subsequent loads
   - Cache-first strategy

3. ✅ **Vercel Edge Network**
   - Global CDN
   - Automatic compression (Brotli/Gzip)
   - HTTP/2
   - Intelligent caching

### **Lighthouse Score Target:**

```
Performance:      95-100 ✅
Accessibility:    95-100 ✅
Best Practices:   95-100 ✅
SEO:              90-100 ✅
PWA:              100    ✅
```

**Test:**
```
1. Open site in incognito
2. F12 → Lighthouse tab
3. Click "Generate report"
4. Review scores
```

---

## 📈 POST-DEPLOYMENT CHECKLIST

### **Immediately After Deploy:**

- [ ] Visit production URL
- [ ] Test all pages (Utama, Belajar, Kuiz, Padanan Kata, Tetapan)
- [ ] Test on mobile device
- [ ] Test PWA install
- [ ] Test offline mode
- [ ] Check browser console for errors
- [ ] Run Lighthouse audit

### **Within 24 Hours:**

- [ ] Monitor Vercel Analytics
- [ ] Check for any user reports
- [ ] Test on different browsers (Chrome, Safari, Firefox)
- [ ] Test on different devices (iOS, Android)
- [ ] Share with test users

### **Within 1 Week:**

- [ ] Review analytics data
- [ ] Check error logs
- [ ] Gather user feedback
- [ ] Plan improvements

---

## 🔗 USEFUL LINKS

### **Vercel Resources:**
- [Vercel Dashboard](https://vercel.com/dashboard)
- [Vercel Docs](https://vercel.com/docs)
- [Vite on Vercel](https://vercel.com/docs/frameworks/vite)
- [Custom Domains](https://vercel.com/docs/concepts/projects/custom-domains)

### **PWA Resources:**
- [Web.dev PWA](https://web.dev/progressive-web-apps/)
- [PWA Checklist](https://web.dev/pwa-checklist/)
- [Workbox](https://developers.google.com/web/tools/workbox)

### **Testing Tools:**
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Can I Use](https://caniuse.com/)
- [BrowserStack](https://www.browserstack.com/)

---

## 💰 PRICING

### **Vercel Free Tier (Perfect for this app!):**

```
✅ FREE FOREVER:
- 100 GB bandwidth/month
- Unlimited deployments
- Automatic HTTPS
- Global CDN
- Custom domains
- Preview deployments
- Basic analytics

LIMITS:
- 100 GB bandwidth (enough for 100,000+ visits/month)
- 100 builds/day (more than enough)
- 1 concurrent build

UPGRADE IF:
- Need more bandwidth
- Team collaboration
- Advanced analytics
- Priority support
```

**For this app:** Free tier is MORE than sufficient! 🎉

---

## 🎊 SUCCESS CHECKLIST

Your deployment is successful if:

✅ **Functionality:**
- [ ] All pages load correctly
- [ ] Navigation works (sidebar, buttons)
- [ ] Learning module shows all words
- [ ] Quiz works and saves scores
- [ ] Padanan Kata works and saves scores
- [ ] Settings page works
- [ ] localStorage persists data

✅ **Performance:**
- [ ] Lighthouse score > 90
- [ ] Load time < 3 seconds
- [ ] PWA installable
- [ ] Works offline (after first visit)

✅ **Compatibility:**
- [ ] Works on Chrome/Edge
- [ ] Works on Safari (iOS)
- [ ] Works on Firefox
- [ ] Responsive on mobile
- [ ] Responsive on tablet

✅ **PWA:**
- [ ] Install prompt appears
- [ ] Icon shows on home screen
- [ ] Runs in standalone mode
- [ ] Splash screen shows
- [ ] Service Worker active

---

## 🚀 FINAL STEPS

### **1. Deploy Now:**

```bash
# Method 1: Vercel CLI
npm install -g vercel
vercel login
vercel --prod

# Method 2: Push to GitHub
git add .
git commit -m "Ready for production"
git push origin main
# Then import to Vercel from GitHub
```

### **2. Test Everything:**

```
1. Visit your URL
2. Test all features
3. Install as PWA
4. Test offline
5. Share with friends!
```

### **3. Share Your App:**

```
Production URL: https://dialek-pantai-timur.vercel.app
Custom Domain:  https://dialekpantaitimur.com (if configured)

Share on:
- WhatsApp
- Facebook
- Twitter
- Email
- School/University groups
```

---

## 🎉 CONGRATULATIONS!

Your **Aplikasi Dialek Pantai Timur** is now LIVE on Vercel! 🚀

**Benefits:**
- ✅ Accessible worldwide
- ✅ Lightning fast (Edge CDN)
- ✅ Secure (HTTPS)
- ✅ Installable (PWA)
- ✅ Scalable (Auto-scaling)
- ✅ Free hosting
- ✅ Auto-deploy on push
- ✅ Analytics included

**Next Steps:**
1. Share with users
2. Gather feedback
3. Monitor analytics
4. Keep improving!

---

**Happy Deploying! 🎊**

*Aplikasi Dialek Pantai Timur - Memelihara Warisan Linguistik Melayu* 🇲🇾
