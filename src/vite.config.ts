import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Untuk GitHub Pages, base path MESTI sama dengan nama repo
  // Contoh: jika repo bernama "dialek-app", tukar kepada '/dialek-app/'
  // ATAU set kepada '/' jika deploy ke custom domain atau username.github.io (tanpa subdirectory)
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
});