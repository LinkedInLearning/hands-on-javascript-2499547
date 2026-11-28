import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

// Full public address of the site, ending in "/" (used for link previews and the canonical URL).
// Hosted on Cloudflare Pages. If your project name or domain differs, set VITE_SITE_URL in
// Cloudflare (Settings → Variables) or change the default here.
process.env.VITE_SITE_URL ||= 'https://thebeanbox.pages.dev/';

export default defineConfig({
  // Deploy path: '/' at a domain root (Cloudflare Pages). Set BASE_PATH only to serve from a sub-folder.
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
