# Panduan Setup Database Supabase

## 🎯 Penting: Setup Database

Aplikasi ini memerlukan database Supabase untuk berfungsi dengan sempurna. Ikuti langkah-langkah berikut untuk setup database.

---

## 📋 Langkah 1: Akses Supabase Dashboard

1. Pergi ke **Supabase Dashboard** di tab pelayar anda
2. Atau buka [https://supabase.com/dashboard](https://supabase.com/dashboard)
3. Login dengan akaun Supabase anda

---

## 📊 Langkah 2: Cipta Database Tables

### Pilihan A: Menggunakan SQL Editor (Disyorkan)

1. Di Supabase Dashboard, klik **SQL Editor** di sidebar kiri
2. Klik **New query**
3. Copy dan paste SQL code di bawah:

```sql
-- Cipta table user_profiles
CREATE TABLE IF NOT EXISTS user_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id)
);

-- Cipta table user_progress
CREATE TABLE IF NOT EXISTS user_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  kelantan INTEGER DEFAULT 0,
  terengganu INTEGER DEFAULT 0,
  pahang INTEGER DEFAULT 0,
  total_points INTEGER DEFAULT 0,
  completed_lessons TEXT[] DEFAULT '{}',
  last_active_date TIMESTAMPTZ DEFAULT NOW(),
  streak_days INTEGER DEFAULT 0,
  achievements TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id)
);

-- Cipta table quiz_scores
CREATE TABLE IF NOT EXISTS quiz_scores (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  quiz_type TEXT NOT NULL,
  score INTEGER NOT NULL,
  total_questions INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_scores ENABLE ROW LEVEL SECURITY;

-- Policies untuk user_profiles
CREATE POLICY "Users can view own profile"
  ON user_profiles FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own profile"
  ON user_profiles FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own profile"
  ON user_profiles FOR UPDATE
  USING (auth.uid() = user_id);

-- Policies untuk user_progress
CREATE POLICY "Users can view own progress"
  ON user_progress FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress"
  ON user_progress FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress"
  ON user_progress FOR UPDATE
  USING (auth.uid() = user_id);

-- Policies untuk quiz_scores
CREATE POLICY "Users can view own quiz scores"
  ON quiz_scores FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own quiz scores"
  ON quiz_scores FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Create indexes untuk performance
CREATE INDEX idx_user_profiles_user_id ON user_profiles(user_id);
CREATE INDEX idx_user_progress_user_id ON user_progress(user_id);
CREATE INDEX idx_quiz_scores_user_id ON quiz_scores(user_id);
CREATE INDEX idx_quiz_scores_created_at ON quiz_scores(created_at DESC);

-- Function untuk auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger untuk auto-update updated_at
CREATE TRIGGER update_user_profiles_updated_at
    BEFORE UPDATE ON user_profiles
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_progress_updated_at
    BEFORE UPDATE ON user_progress
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
```

4. Klik **Run** atau tekan `Ctrl+Enter`
5. Pastikan tiada error. Anda akan nampak mesej "Success. No rows returned"

### Pilihan B: Menggunakan Table Editor

Jika anda lebih suka GUI, anda boleh cipta table secara manual di **Table Editor**.

---

## ✅ Langkah 3: Verify Setup

1. Klik **Table Editor** di sidebar
2. Anda sepatutnya nampak 3 tables:
   - `user_profiles`
   - `user_progress`
   - `quiz_scores`
3. Klik pada setiap table untuk verify struktur

---

## 🔒 Langkah 4: Verify Row Level Security

1. Pergi ke **Authentication** > **Policies**
2. Pastikan setiap table ada policies yang betul
3. RLS melindungi data pengguna supaya hanya mereka sahaja boleh akses data sendiri

---

## 🎨 Struktur Database

### Table: `user_profiles`
Menyimpan maklumat profil pengguna
- `id` - UUID primary key
- `user_id` - Reference ke auth.users
- `full_name` - Nama penuh
- `email` - Email pengguna
- `created_at`, `updated_at` - Timestamps

### Table: `user_progress`
Menyimpan progres pembelajaran
- `id` - UUID primary key
- `user_id` - Reference ke auth.users
- `kelantan` - Progres Kelantan (0-100)
- `terengganu` - Progres Terengganu (0-100)
- `pahang` - Progres Pahang (0-100)
- `total_points` - Jumlah mata
- `completed_lessons` - Array pelajaran selesai
- `last_active_date` - Tarikh terakhir aktif
- `streak_days` - Bilangan hari berturut-turut
- `achievements` - Array pencapaian
- `created_at`, `updated_at` - Timestamps

### Table: `quiz_scores`
Menyimpan skor kuiz
- `id` - UUID primary key
- `user_id` - Reference ke auth.users
- `quiz_type` - Jenis kuiz (kelantan/terengganu/pahang/mixed)
- `score` - Skor (0-100)
- `total_questions` - Jumlah soalan
- `created_at` - Timestamp

---

## 🧪 Testing

Selepas setup, cuba:

1. **Daftar akaun baru** di aplikasi
2. **Log masuk** dengan akaun tersebut
3. **Mulakan pembelajaran** di mana-mana negeri
4. **Ambil kuiz** untuk test simpanan data
5. **Log keluar dan log masuk semula** - data sepatutnya masih ada

---

## ❗ Troubleshooting

### Error: "relation does not exist"
- Tables belum dicipta. Ulangi Langkah 2.

### Error: "new row violates row-level security policy"
- RLS policies tidak betul. Pastikan policies dicipta dengan betul di Langkah 2.

### Data tidak tersimpan
- Semak Console untuk error messages
- Verify user sudah login dengan betul
- Semak RLS policies di Supabase Dashboard

### Authentication tidak berfungsi
- Pastikan Supabase connection berjaya
- Semak Project ID dan API keys betul
- Verify email confirmation settings di Supabase > Authentication > Email

---

## 📞 Sokongan

Jika ada masalah:
1. Semak Console browser (F12) untuk error messages
2. Semak Supabase Logs di Dashboard
3. Verify semua tables dicipta dengan betul
4. Pastikan RLS policies ada untuk semua tables

---

## 🎉 Selesai!

Database anda sudah siap! Aplikasi Dialek Pantai Timur kini boleh menyimpan data pengguna dengan selamat di cloud.

**Selamat menggunakan aplikasi! 🗣️**
