# 🚀 Quick Deploy Guide

## Cara Paling Mudah - Deploy dalam 5 Minit!

### Step 1: Push ke GitHub

```bash
# Dalam folder project anda
git init
git add .
git commit -m "Initial commit"

# Tukar USERNAME dan NAMA-REPO dengan punya anda
git remote add origin https://github.com/USERNAME/NAMA-REPO.git
git push -u origin main
```

### Step 2: Deploy ke Vercel

1. Pergi ke **[vercel.com](https://vercel.com)**
2. Klik **"Sign Up"** (guna GitHub account)
3. Klik **"New Project"**
4. Pilih repository anda
5. Klik **"Deploy"**
6. Tunggu 2 minit... **SIAP!** 🎉

### Step 3: Dapatkan URL Anda

Vercel akan bagi URL: `https://nama-app.vercel.app`

Share link ni dengan sesiapa sahaja! 🎊

---

## ✨ Bonus: Custom Domain

Nak domain sendiri? Contoh: `www.dialekpantaitimur.com`

1. Beli domain dari GoDaddy, Namecheap, atau Exabytes
2. Dalam Vercel dashboard, pergi **Settings > Domains**
3. Add domain anda
4. Follow instruction untuk setup DNS
5. Siap dalam 24 jam!

---

## 📱 Test PWA di Phone

Selepas deploy:

**iOS:**
1. Buka website di Safari
2. Tap Share button
3. "Add to Home Screen"

**Android:**
1. Buka di Chrome
2. Popup akan muncul "Install app"
3. Atau Menu > "Add to Home Screen"

---

## 🎯 Important: Buat PWA Icons!

Sebelum share public, anda PERLU buat 2 icon:

1. **icon-192.png** (192 x 192 pixels)
2. **icon-512.png** (512 x 512 pixels)

**Cara buat:**
- Guna Canva (percuma!)
- Design simple: Logo atau "DPT" 
- Warna orange/red (ikut theme app)
- Save sebagai PNG
- Upload ke folder `/public/`
- Deploy semula

---

## 🆘 Masalah?

### Build Error?
```bash
npm install
npm run build
```

### Site tak loading?
- Check build logs dalam Vercel dashboard
- Pastikan semua files committed ke GitHub

### PWA install prompt tak keluar?
- Tambah icons (192px & 512px) dulu
- Redeploy
- Test dalam Incognito mode

---

## 📚 Panduan Lengkap

Baca **[PANDUAN_DEPLOYMENT.md](./PANDUAN_DEPLOYMENT.md)** untuk:
- Alternative platforms (Netlify, GitHub Pages)
- PWA optimization
- Analytics setup
- Custom domain details
- Troubleshooting guide

---

## ✅ Checklist

- [ ] Code pushed to GitHub
- [ ] Deployed to Vercel/Netlify
- [ ] Created PWA icons (192px & 512px)
- [ ] Tested on mobile
- [ ] Tested install app flow
- [ ] Shared with friends! 🎉

---

**Selamat Maju Jaya!** 🚀

Aplikasi anda kini boleh diakses oleh seluruh Malaysia (dan dunia)!
