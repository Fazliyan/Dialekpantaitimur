# ⚠️ FOLDER INI BOLEH DELETE

Folder `/workflows/` ini tidak diperlukan.

GitHub Actions memerlukan workflow di folder `.github/workflows/` (bukan `/workflows/`)

**Workflow yang betul dah ada di:** `/.github/workflows/deploy.yml`

**Anda boleh delete:**
- `/workflows/deploy.yml`
- Folder `/workflows/` (keseluruhan folder)

Ini tidak akan affect deployment kerana GitHub Actions akan guna yang betul di `/.github/workflows/`
