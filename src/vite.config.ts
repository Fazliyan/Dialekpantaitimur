import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Untuk GitHub Pages
  // Jika repo name: "dialek-app", set base: '/dialek-app/'
  // Jika deploy ke username.github.io (root), set base: '/'
  base: '/',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
});
