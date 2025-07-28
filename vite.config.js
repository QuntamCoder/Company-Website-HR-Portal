
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Company-Website-HR-Portal/',  // 👈 required for GitHub Pages
});
