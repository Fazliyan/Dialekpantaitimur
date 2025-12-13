# 🔧 Cara Betulkan White Screen di GitHub Pages

## ❗ Masalah: White Screen / Blank Page

Jika aplikasi anda deploy tetapi hanya keluar white screen, ikut langkah-langkah di bawah:

---

## 🎯 PENYELESAIAN PANTAS (Pilih salah satu):

### PILIHAN A: Deploy ke `username.github.io` (PALING MUDAH!)

Jika nama repo anda adalah `username.github.io` (contoh: `ahmad123.github.io`), guna cara ini:

**1. Set base ke `/` di `vite.config.ts`:**
```typescript
base: '/',
```

**2. Push dan deploy:**
```bash
git add .
git commit -m "Fix white screen"
git push
```

**3. Website akan jadi di:** `https://username.github.io/`

✅ **Ini cara PALING MUDAH kerana tak perlu set base path!**

---

### PILIHAN B: Deploy ke `username.github.io/nama-repo/`

Jika nama repo anda bukan `username.github.io` (contoh repo: `dialek-app`):

**1. Kena set base path betul-betul di `vite.config.ts`:**
```typescript
base: '/nama-repo-anda/',  // MESTI sama dengan nama repo!
```

**Contoh:** Jika repo bernama `dialek-app`:
```typescript
base: '/dialek-app/',
```

**2. Push dan deploy:**
```bash
git add .
git commit -m "Fix base path"
git push
```

**3. Website akan jadi di:** `https://username.github.io/nama-repo/`

⚠️ **PENTING:** 
- Base path MESTI sama dengan nama repo (case sensitive!)
- Jangan lupa slash `/` di depan dan belakang!

---

## 🔍 DIAGNOSTIK MASALAH:

### Langkah 1: Check Build Berjaya atau Tidak

1. Pergi ke repo GitHub anda
2. Klik tab **Actions** (atas)
3. Lihat workflow terbaru:
   - ✅ **Hijau (Success)** = Build OK
   - ❌ **Merah (Failed)** = Ada error

**Jika MERAH (Failed):**
- Klik pada workflow yang failed
- Lihat error message
- Biasanya error sebab dependencies issue

**Fix:** 
```bash
# Delete package-lock.json kalau ada error dependencies
rm package-lock.json
npm install
git add .
git commit -m "Fix dependencies"
git push
```

---

### Langkah 2: Check GitHub Pages Settings

1. Repo → **Settings** → **Pages** (sebelah kiri)
2. Pastikan:
   - ✅ **Source:** GitHub Actions
   - ✅ Ada link website (contoh: `https://username.github.io/repo/`)

**Jika tiada link atau error:**
- Save sekali lagi settings
- Atau trigger redeploy: push any change

---

### Langkah 3: Check Browser Console

1. Buka website yang white screen
2. Tekan **F12** (Developer Tools)
3. Klik tab **Console**
4. Lihat ada error merah tak?

**Common Errors:**

#### Error: "Failed to load module"
```
Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type...
```

**Fix:** Base path salah! Update `vite.config.ts`:
- Jika repo `username.github.io`: set `base: '/'`
- Jika repo `nama-repo`: set `base: '/nama-repo/'`

#### Error: 404 (Not Found)
```
GET https://username.github.io/assets/index-xyz.js net::ERR_ABORTED 404
```

**Fix:** File path salah. Kemungkinan:
1. Base path salah (check `vite.config.ts`)
2. Build tidak berjaya (check GitHub Actions)

#### Error: "Cannot read property of undefined"
```
Uncaught TypeError: Cannot read property 'xxx' of undefined
```

**Fix:** JavaScript running tetapi ada bug. Check:
1. Code error (check console untuk line number)
2. Missing dependencies

---

### Langkah 4: Check Network Tab

1. F12 → tab **Network**
2. Refresh page (Ctrl+R)
3. Lihat file mana yang 404 (error merah)

**Jika banyak 404:**
- Base path salah 100%!
- Betulkan di `vite.config.ts`

---

## 🚀 WORKFLOW BETUL untuk Deploy:

### Cara 1: Deploy ke `username.github.io` (RECOMMENDED!)

```bash
# 1. Tukar nama repo kepada username.github.io
# Contoh: ahmad123.github.io

# 2. Edit vite.config.ts
base: '/',

# 3. Push
git add .
git commit -m "Deploy to GitHub Pages"
git push

# 4. Website ready di: https://username.github.io/
```

---

### Cara 2: Deploy ke subdirectory

```bash
# 1. Repo boleh nama apa-apa (contoh: dialek-app)

# 2. Edit vite.config.ts - MESTI sama dengan nama repo!
base: '/dialek-app/',

# 3. Push
git add .
git commit -m "Fix base path"
git push

# 4. Website ready di: https://username.github.io/dialek-app/
```

---

## ✅ CHECKLIST LENGKAP:

Sebelum deploy, pastikan:

- [ ] **GitHub Pages enabled:** Settings → Pages → Source: GitHub Actions
- [ ] **Base path betul di `vite.config.ts`:**
  - Jika repo `username.github.io` → `base: '/'`
  - Jika repo lain → `base: '/nama-repo/'` (SAMA dengan nama repo!)
- [ ] **Nama repo dan base path MATCHING** (case sensitive!)
- [ ] **`.github/workflows/deploy.yml` wujud** (untuk auto-deploy)
- [ ] **`package.json` ada** (untuk npm install)
- [ ] **Push semua changes ke GitHub**

---

## 🎯 QUICKEST FIX (Recommended):

**Cara paling mudah tanpa headache:**

1. **Rename repo kepada `username.github.io`**
   - Settings → Repository name → Rename
   - Tukar kepada format: `username.github.io`
   
2. **Set base ke `/` di `vite.config.ts`:**
   ```typescript
   base: '/',
   ```

3. **Push:**
   ```bash
   git add .
   git commit -m "Simplify deployment"
   git push
   ```

4. **Done!** Website di `https://username.github.io/`

✅ **Cara ini paling senang kerana:**
- Tak perlu fikir base path
- Website di root domain
- Mudah configure
- Tak perlu update env variables

---

## 📞 Masih Tak Jalan?

Check satu persatu:

1. ✅ GitHub Actions build success (hijau)?
2. ✅ GitHub Pages enabled?
3. ✅ Base path sama dengan nama repo?
4. ✅ Browser console ada error?
5. ✅ Network tab ada 404?

**Kalau masih stuck:**
1. Screenshot error di console
2. Screenshot GitHub Actions logs
3. Share nama repo dan base path setting

---

## 💡 PRO TIPS:

### Tip 1: Test Build Locally
```bash
npm run build
npm run preview
```
Buka `http://localhost:4173` - kalau OK di sini, sepatutnya OK di GitHub Pages.

### Tip 2: Clear Cache
Kadang browser cache lama. Try:
- Hard refresh: `Ctrl+Shift+R` (Windows) atau `Cmd+Shift+R` (Mac)
- Incognito/Private mode
- Clear browser cache

### Tip 3: Check File Case Sensitivity
GitHub Pages case-sensitive! Pastikan:
- `App.tsx` bukan `app.tsx`
- Import paths sama case dengan actual filename

### Tip 4: Simplify First
Kalau terlalu complex, try deploy basic version dulu:
1. Deploy simple "Hello World"
2. Confirm deployment works
3. Then deploy full app

---

**Selamat Mencuba! 🚀**

Jika masih ada masalah, kemungkinan besar base path issue. Double check `vite.config.ts` dan nama repo SAMA!
