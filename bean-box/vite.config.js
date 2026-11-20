import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

// Full public address of the site, ending in "/" (used for link previews and the canonical URL).
// The GitHub Pages workflow sets this; change the default here when you add a custom domain.
process.env.VITE_SITE_URL ||= 'https://yannidus.github.io/hands-on-javascript-2499547/';

export default defineConfig({
  // Deploy path: '/' at a domain root, '/repo-name/' on GitHub Pages (set by the deploy workflow)
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        story: resolve(__dirname, 'story.html'),
      },
    },
  },
});
