# ✅ Deployment Checklist

Ikut checklist ini untuk deploy aplikasi dengan jayanya!

## 📋 Pre-Deployment

- [ ] **Test aplikasi locally**
  ```bash
  npm run dev
  ```
  Pastikan semua features berfungsi

- [ ] **Test build locally**
  ```bash
  npm run build
  npm run preview
  ```
  Pastikan tiada errors

- [ ] **Buat PWA Icons**
  - [ ] icon-192.png (192x192)
  - [ ] icon-512.png (512x512)
  - [ ] Letakkan dalam `/public/`
  - Rujuk: [ICON_GUIDE.md](/public/ICON_GUIDE.md)

- [ ] **Update manifest.json**
  - [ ] Check nama app betul
  - [ ] Check description
  - [ ] Check theme color

## 🚀 Deployment Steps

### Vercel (Recommended)

- [ ] **Setup GitHub repo**
  ```bash
  git init
  git add .
  git commit -m "Initial commit - Dialek Pantai Timur"
  git branch -M main
  git remote add origin YOUR_REPO_URL
  git push -u origin main
  ```

- [ ] **Deploy ke Vercel**
  - [ ] Sign up di [vercel.com](https://vercel.com)
  - [ ] Import GitHub repo
  - [ ] Klik Deploy
  - [ ] Tunggu deploy complete

- [ ] **Test deployment**
  - [ ] Buka URL yang diberi
  - [ ] Test semua pages
  - [ ] Test di mobile

## 📱 PWA Testing

- [ ] **Test di Chrome Desktop**
  - [ ] Buka DevTools (F12)
  - [ ] Tab Application > Manifest
  - [ ] Check icons loaded
  - [ ] Tab Application > Service Workers
  - [ ] Check SW registered

- [ ] **Test di Mobile (Android)**
  - [ ] Buka site di Chrome
  - [ ] Check "Install app" prompt muncul
  - [ ] Cuba install
  - [ ] Test app dari home screen

- [ ] **Test di Mobile (iOS)**
  - [ ] Buka site di Safari
  - [ ] Share > Add to Home Screen
  - [ ] Test app dari home screen

## 🎯 Post-Deployment

- [ ] **Test Functionality**
  - [ ] Homepage loads
  - [ ] Learning modules (Kelantan, Terengganu, Pahang)
  - [ ] Quiz modules
  - [ ] Comparison tool
  - [ ] Progress tracker
  - [ ] Settings & reset

- [ ] **Test Audio**
  - [ ] Audio playback works
  - [ ] Volume controls work
  - [ ] No errors in console

- [ ] **Test Offline Mode**
  - [ ] Turn off internet
  - [ ] App still loads (basic content)
  - [ ] Service worker caching works

- [ ] **Performance Check**
  - [ ] Page loads fast (<3 seconds)
  - [ ] No layout shifts
  - [ ] Smooth animations
  - [ ] Run Lighthouse audit (target 90+)

## 🔧 Optional Enhancements

- [ ] **Custom Domain**
  - [ ] Buy domain (GoDaddy, Namecheap, etc)
  - [ ] Add to Vercel
  - [ ] Configure DNS
  - [ ] Wait for SSL certificate

- [ ] **Analytics**
  - [ ] Enable Vercel Analytics
  - [ ] atau setup Google Analytics
  - [ ] Track user behavior

- [ ] **SEO**
  - [ ] Add meta description
  - [ ] Add Open Graph tags
  - [ ] Submit to Google Search Console

## 📣 Launch

- [ ] **Soft Launch**
  - [ ] Share with friends/family
  - [ ] Get initial feedback
  - [ ] Fix any bugs found

- [ ] **Public Launch**
  - [ ] Announce on social media
  - [ ] Share in relevant groups
  - [ ] Create launch post/video

- [ ] **Monitor**
  - [ ] Check analytics
  - [ ] Monitor error logs
  - [ ] Collect user feedback

## 🆘 Troubleshooting

Jika ada masalah:

1. **Check build logs** dalam Vercel dashboard
2. **Check browser console** untuk errors
3. **Clear cache** dan test semula
4. **Test dalam Incognito mode**
5. **Rujuk** [PANDUAN_DEPLOYMENT.md](./PANDUAN_DEPLOYMENT.md)

## 📊 Success Metrics

Aplikasi dianggap berjaya jika:

- ✅ Build success tanpa errors
- ✅ All pages accessible
- ✅ Mobile responsive
- ✅ PWA installable
- ✅ Works offline (basic)
- ✅ Fast loading (<3s)
- ✅ No console errors
- ✅ Lighthouse PWA score 90+

## 🎉 You're Done!

Setelah complete semua checklist:

1. Share URL dengan orang ramai
2. Collect feedback
3. Iterate dan improve
4. Update regularly

**Tahniah! Aplikasi anda kini live!** 🚀

---

**Quick Links:**
- [Quick Deploy Guide](./README_DEPLOY.md)
- [Full Deployment Guide](./PANDUAN_DEPLOYMENT.md)
- [Icon Guide](./public/ICON_GUIDE.md)

**Live URL:** _____________________

**Last Updated:** `[Tarikh deploy]`
