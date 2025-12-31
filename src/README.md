# 🌊 Aplikasi Dialek Pantai Timur

Aplikasi pembelajaran interaktif untuk memelihara warisan linguistik Melayu dari **Kelantan**, **Terengganu** dan **Pahang**.

---

## ✨ Features

- 📚 **60 Perkataan Autentik** - 20 perkataan untuk setiap negeri
- 🎧 **Audio Simulation** - Dengar sebutan dialek
- 📖 **Modul Pembelajaran** - Infinite scroll dengan dropdown selector negeri
- 🎯 **Kuiz Interaktif** - 75 soalan untuk uji pemahaman
- 🏆 **Sistem Markah** - Track progress anda
- 📱 **PWA Support** - Install sebagai aplikasi mobile
- 🎨 **Responsive Design** - Berfungsi di semua peranti
- 💾 **Offline Support** - Data tersimpan di localStorage

---

## 🚀 Live Demo

**GitHub Pages:**
```
https://<username>.github.io/<repo-name>/
```

*(Update selepas deploy)*

---

## 🛠️ Tech Stack

- **Frontend:** React 18 + TypeScript
- **Styling:** Tailwind CSS v4
- **Build Tool:** Vite 5
- **Icons:** Lucide React
- **Notifications:** Sonner
- **Storage:** LocalStorage (no backend required)
- **PWA:** Service Worker + Manifest

---

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/<username>/<repo-name>.git

# Navigate to directory
cd <repo-name>

# Install dependencies
npm install

# Run development server
npm run dev
```

**Access:** http://localhost:5173

---

## 🔨 Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

**Output:** `dist/` folder

---

## 🚀 Deploy to GitHub Pages

### **Quick Steps:**

1. **Enable GitHub Pages:**
   - Go to: Settings → Pages
   - Source: Select "GitHub Actions"

2. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **Wait for deployment** (~3-5 minutes)

4. **Access your site:**
   ```
   https://<username>.github.io/<repo-name>/
   ```

### **Important: Base Path**

If deploying to project site (e.g., `username.github.io/dialek-app`):

1. Update `vite.config.ts`:
   ```typescript
   base: '/dialek-app/',  // Your repo name
   ```

2. Commit and push:
   ```bash
   git add vite.config.ts
   git commit -m "Update base path"
   git push origin main
   ```

**Full deployment guide:** See [DEPLOY_GITHUB_PAGES.md](./DEPLOY_GITHUB_PAGES.md)

---

## 📱 PWA Installation

1. **Visit site** on mobile browser
2. **Tap "Add to Home Screen"** when prompt appears
3. **App installs** like native app
4. **Works offline** after first visit

---

## 📂 Project Structure

```
/
├── src/
│   ├── main.tsx              # Entry point
│   └── ...
├── components/
│   ├── Sidebar.tsx           # Navigation
│   ├── Learn.tsx             # Learning module
│   ├── Quiz.tsx              # Quiz module
│   ├── Profile.tsx           # User profile
│   └── ...
├── data/
│   ├── words.ts              # 60 dialect words
│   ├── quizQuestions.ts      # 75 quiz questions
│   └── ...
├── utils/
│   └── storage.ts            # LocalStorage utilities
├── public/
│   ├── manifest.json         # PWA manifest
│   ├── sw.js                 # Service worker
│   ├── icon-192.png          # App icons
│   └── icon-512.png
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions workflow
├── App.tsx                   # Main component
├── index.html                # HTML template
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript config
└── package.json              # Dependencies
```

---

## 🎮 Usage

### **1. Modul Pembelajaran**

- Pilih negeri dari dropdown (Kelantan/Terengganu/Pahang)
- Scroll infinite list perkataan
- Klik audio icon untuk dengar sebutan
- Pelajari makna dan contoh ayat

### **2. Kuiz**

- Jawab 75 soalan interaktif
- Klik jawapan untuk pilih
- Dapat feedback instant
- Track markah di Profile

### **3. Leaderboard**

- Lihat top 10 peserta
- Markah dikira dari kuiz
- Ranking auto-update

### **4. Profile**

- Lihat total markah
- Track pembelajaran
- Statistik lengkap

### **5. Tentang**

- Info aplikasi
- Tujuan pembelajaran
- Maklumat negeri

---

## 🌐 Negeri Coverage

| Negeri | Perkataan | Kuiz |
|--------|-----------|------|
| 🟢 Kelantan | 20 | 25+ |
| 🔵 Terengganu | 20 | 25+ |
| 🟡 Pahang | 20 | 25+ |
| **TOTAL** | **60** | **75** |

---

## 💾 Data Storage

**LocalStorage Keys:**
- `dialekScore` - User total score
- `dialekQuizProgress` - Quiz completion status
- Additional app state as needed

**Note:** No backend required, all data stored locally!

---

## 🔧 Configuration

### **vite.config.ts**

```typescript
{
  base: '/',  // Update for GitHub Pages project site
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
}
```

### **package.json**

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  }
}
```

---

## 🤝 Contributing

Contributions welcome! Untuk menambah:

- ✅ Perkataan dialek baru
- ✅ Soalan kuiz tambahan
- ✅ Features baru
- ✅ Bug fixes
- ✅ Documentation improvements

**Steps:**
1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open Pull Request

---

## 📄 License

Open source - bebas untuk digunakan dan diubahsuai.

---

## 🎯 Purpose

Aplikasi ini bertujuan untuk:

1. **Memelihara warisan linguistik** Pantai Timur Malaysia
2. **Mendidik generasi muda** tentang dialek tempatan
3. **Mempromosi keunikan** bahasa Melayu setiap negeri
4. **Menyediakan platform pembelajaran** yang interaktif dan menarik

---

## 📞 Contact

Ada soalan atau cadangan? Buka issue di GitHub!

---

## 🙏 Acknowledgments

- Terima kasih kepada semua yang menyumbang data dialek
- Built with ❤️ untuk Pantai Timur Malaysia
- Powered by React, Vite, and GitHub Pages

---

## ⚡ Quick Links

- 📖 [Full Deployment Guide](./DEPLOY_GITHUB_PAGES.md)
- 🚀 [Live Demo](#) *(update after deploy)*
- 🐛 [Report Issues](../../issues)
- 💡 [Feature Requests](../../issues)

---

**Selamat Belajar Dialek Pantai Timur!** 🌊✨
