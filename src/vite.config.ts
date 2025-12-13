import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Gantikan 'aplikasi-dialek-pantai-timur' dengan nama repo GitHub anda yang sebenar
  base: process.env.GITHUB_PAGES === 'true' ? '/aplikasi-dialek-pantai-timur/' : '/',
  build: {
    outDir: 'dist',
  },
});