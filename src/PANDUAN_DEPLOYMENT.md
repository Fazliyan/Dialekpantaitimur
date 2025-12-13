# 📱 Panduan Deployment - Aplikasi Dialek Pantai Timur

Panduan lengkap untuk deploy aplikasi anda sebagai web app dan PWA (Progressive Web App).

## 🚀 Pilihan Deployment

### 1️⃣ VERCEL (Disyorkan - Paling Mudah!)

#### Langkah-langkah:

1. **Push code ke GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Aplikasi Dialek Pantai Timur"
   git branch -M main
   git remote add origin https://github.com/USERNAME/NAMA-REPO.git
   git push -u origin main
   ```

2. **Deploy ke Vercel**
   - Pergi ke [vercel.com](https://vercel.com)
   - Sign up dengan akaun GitHub anda
   - Klik "New Project"
   - Import repository GitHub anda
   - Vercel akan auto-detect settings (sudah setup dalam `vercel.json`)
   - Klik "Deploy"
   - Selesai! 🎉

3. **URL anda akan jadi**: `https://nama-app.vercel.app`

4. **Custom Domain (Optional)**
   - Pergi ke Project Settings > Domains
   - Tambah domain anda sendiri (contoh: `dialekpantaitimur.com`)

#### Kebaikan Vercel:
✅ Deploy dalam 2 minit
✅ Auto-deploy setiap kali push ke GitHub
✅ SSL certificate percuma
✅ Performance sangat pantas
✅ Analytics percuma

---

### 2️⃣ NETLIFY (Alternatif yang baik)

#### Langkah-langkah:

1. **Push code ke GitHub** (sama seperti di atas)

2. **Deploy ke Netlify**
   - Pergi ke [netlify.com](https://netlify.com)
   - Sign up dengan GitHub
   - Klik "Add new site" > "Import an existing project"
   - Pilih repository anda
   - Settings sudah auto-detect dari `netlify.toml`
   - Klik "Deploy"

3. **URL anda**: `https://nama-app.netlify.app`

#### Kebaikan Netlify:
✅ Interface yang mudah
✅ Form handling built-in
✅ Split testing support
✅ Rollback mudah

---

### 3️⃣ GITHUB PAGES (Percuma tapi perlu setup lebih)

#### Langkah-langkah:

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Tambah scripts dalam `package.json`**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://USERNAME.github.io/NAMA-REPO"
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**
   - Pergi ke repo Settings > Pages
   - Source: `gh-pages` branch
   - Save

#### Kebaikan GitHub Pages:
✅ Percuma sepenuhnya
✅ Terus dari GitHub
✅ SSL included

---

## 📱 PWA Features (Sudah Siap!)

Aplikasi anda kini sudah ada:

### ✨ Features yang telah ditambah:

1. **Install Prompt** 
   - User akan dapat notifikasi untuk install app
   - Boleh add to home screen di phone/tablet

2. **Offline Support**
   - Service Worker akan cache content
   - App boleh berfungsi tanpa internet (limited)

3. **App-like Experience**
   - Full screen mode
   - Custom splash screen
   - Native app feel

4. **Manifest File** (`/public/manifest.json`)
   - App name, icons, colors sudah set
   - Optimized untuk mobile

### 📱 Cara Install di Phone:

**iOS (Safari):**
1. Buka website di Safari
2. Tap butang "Share" 
3. Scroll dan tap "Add to Home Screen"
4. Siap! Icon akan muncul di home screen

**Android (Chrome):**
1. Buka website di Chrome
2. Akan muncul popup "Install app"
3. Atau: Menu (3 dots) > "Add to Home Screen"
4. Siap!

---

## 🎨 Customization Untuk Production

### Icon PWA (Perlu buat!)

Anda perlu buat 2 icon untuk PWA:

1. **icon-192.png** (192x192 pixels)
2. **icon-512.png** (512x512 pixels)

Letakkan dalam folder `/public/`

**Tips membuat icon:**
- Guna logo atau inisial app ("DPT")
- Background warna orange/red (sesuai dengan theme)
- Simple dan mudah dikenal
- Tools: Canva, Figma, atau [PWA Icon Generator](https://www.pwabuilder.com/imageGenerator)

### Meta Tags (Auto-inject oleh framework)

Framework akan auto-inject meta tags, tapi untuk custom, tambah dalam HTML head:
```html
<meta name="theme-color" content="#ea580c">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
```

---

## 🔧 Environment Setup

### Build Command (sudah set):
```bash
npm run build
```

### Preview Locally:
```bash
npm run preview
```

### Check PWA Score:
1. Deploy dulu
2. Pergi ke Chrome DevTools
3. Tab "Lighthouse"
4. Run audit untuk "Progressive Web App"
5. Target: 90+ score

---

## 📊 Analytics (Optional tapi berguna!)

### Google Analytics 4

1. Buat GA4 property di [analytics.google.com](https://analytics.google.com)
2. Install package:
   ```bash
   npm install react-ga4
   ```
3. Setup dalam `App.tsx`

### Vercel Analytics (Paling mudah!)
- Auto-enable dalam Vercel dashboard
- Percuma untuk basic metrics
- Tak perlu code changes

---

## ✅ Checklist Pre-Launch

Sebelum share dengan public:

- [ ] Test di different browsers (Chrome, Safari, Firefox)
- [ ] Test di mobile (iOS & Android)
- [ ] Test offline mode
- [ ] Create PWA icons (192px & 512px)
- [ ] Test install app flow
- [ ] Check loading speed
- [ ] Test all features works
- [ ] Update manifest.json dengan info betul
- [ ] Add custom domain (optional)
- [ ] Setup analytics (optional)

---

## 🆘 Troubleshooting

### Service Worker tak register?
- Check browser console untuk errors
- Pastikan HTTPS (localhost OK untuk testing)
- Clear cache dan reload

### Install prompt tak muncul?
- PWA criteria mesti fulfilled:
  - HTTPS ✓
  - Valid manifest.json ✓
  - Service worker registered ✓
  - Icons available (perlu tambah!)

### Build error?
- Run `npm install` dulu
- Check `node_modules` ada
- Try `npm run build` locally

---

## 🎯 Next Steps Recommended

1. **Deploy ke Vercel ASAP** (5 minit je!)
2. **Buat icons untuk PWA** (gunakan Canva)
3. **Test di mobile phone**
4. **Share dengan friends untuk feedback**
5. **Consider custom domain** (contoh: dialekpantaitimur.my)

---

## 📞 Support & Resources

- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [PWA Guide](https://web.dev/progressive-web-apps/)
- [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)

---

## 🎉 Tahniah!

Aplikasi anda kini ready untuk di-deploy! Ikut langkah-langkah di atas dan dalam masa sejam, aplikasi anda akan live dan boleh diakses oleh sesiapa sahaja di seluruh dunia! 🌍

**Good luck!** 🚀
