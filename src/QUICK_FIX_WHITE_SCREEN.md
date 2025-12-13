# ⚡ QUICK FIX - White Screen (30 Saat!)

## 🎯 Masalah: White screen selepas deploy

## ✅ PENYELESAIAN PANTAS (Ikut langkah ini):

### 1. Check nama repo GitHub anda
   - Pergi ke repo GitHub
   - Lihat nama repo di atas (contoh: `dialek-app` atau `username.github.io`)

### 2. Buka `/vite.config.ts` dan edit:

**Jika nama repo = `username.github.io`:**
```typescript
base: '/',
```

**Jika nama repo = lain-lain (contoh: `dialek-app`):**
```typescript
base: '/dialek-app/',  // Ganti dengan nama repo anda
```

⚠️ **MESTI sama dengan nama repo, dengan slash `/` depan belakang!**

### 3. Push perubahan:
```bash
git add .
git commit -m "Fix white screen"
git push
```

### 4. Tunggu 2-3 minit

Reload page. Sepatutnya OK!

---

## 📋 CHECKLIST CEPAT:

- [ ] Nama repo di GitHub: `_______________`
- [ ] `base` di `vite.config.ts`: `_______________`
- [ ] Kedua-duanya SAMA? (Yes/No)
- [ ] GitHub Actions build SUCCESS (hijau)? (Yes/No)
- [ ] GitHub Pages enabled? Settings → Pages → GitHub Actions (Yes/No)

**Jika semua Yes, website sepatutnya OK!**

---

## 🚀 CARA TERMUDAH (Jika masih tak jadi):

**Rename repo kepada `username.github.io` dan set:**
```typescript
base: '/',
```

Ini cara paling mudah, tak perlu pening kepala!

---

## 🆘 Masih tak jadi?

Check TROUBLESHOOTING_WHITE_SCREEN.md untuk guide lengkap.
