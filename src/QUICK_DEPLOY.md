# ⚡ QUICK DEPLOY GUIDE

Deploy **Aplikasi Dialek Pantai Timur** ke GitHub Pages dalam 5 minit!

---

## 🚀 5 STEPS SAHAJA

### **1️⃣ TEST BUILD** (1 min)

```bash
npm run build
```

**✅ Success:** `dist/` folder created  
**❌ Error:** Fix errors first before proceed

---

### **2️⃣ CREATE GITHUB REPO** (1 min)

1. Pergi: https://github.com/new
2. **Name:** `dialek-pantai-timur`
3. **Public** ✅
4. **Create repository**

---

### **3️⃣ PUSH CODE** (1 min)

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/<username>/dialek-pantai-timur.git
git push -u origin main
```

*(Ganti `<username>` dengan username GitHub anda)*

---

### **4️⃣ ENABLE PAGES** (30 sec)

1. **Settings** → **Pages**
2. **Source:** Pilih **"GitHub Actions"**
3. Done!

---

### **5️⃣ UPDATE BASE PATH** (30 sec)

**Edit `vite.config.ts` line 8:**

```typescript
base: '/dialek-pantai-timur/',  // Ganti dengan nama repo anda
```

**Commit & Push:**

```bash
git add vite.config.ts
git commit -m "Update base path"
git push origin main
```

---

## ⏱️ WAIT 3-5 MINUTES

**Check progress:**
- **Actions** tab → Tunggu **green ✅**

---

## 🌐 ACCESS SITE

```
https://<username>.github.io/dialek-pantai-timur/
```

**Ganti:**
- `<username>` → GitHub username anda
- `dialek-pantai-timur` → Nama repo anda

---

## ✅ DONE!

Your app is now live! 🎉

---

## 🔄 UPDATE LATER

```bash
# Make changes
git add .
git commit -m "Update description"
git push origin main

# Auto-deploy! Wait 3-5 mins
```

---

## ❌ PROBLEM?

### **Actions Failed:**

```
Settings → Actions → General → Workflow permissions
→ Select "Read and write permissions" → Save
→ Actions → Re-run workflow
```

### **Page 404:**

```typescript
// Check vite.config.ts
base: '/your-exact-repo-name/',  // Must match!
```

### **CSS Not Loading:**

```typescript
// Wrong base path!
// Update vite.config.ts with correct repo name
base: '/dialek-pantai-timur/',
```

---

## 📚 MORE INFO

- Full guide: [DEPLOY_GITHUB_PAGES.md](./DEPLOY_GITHUB_PAGES.md)
- Checklist: [GITHUB_PAGES_CHECKLIST.md](./GITHUB_PAGES_CHECKLIST.md)
- README: [README.md](./README.md)

---

## 🎯 COMMAND CHEAT SHEET

```bash
# Test build
npm run build

# Preview locally
npm run preview

# Deploy (after initial setup)
git add . && git commit -m "Update" && git push

# Clean rebuild
rm -rf node_modules dist && npm install && npm run build
```

---

**SELAMAT DEPLOY!** 🚀✨
