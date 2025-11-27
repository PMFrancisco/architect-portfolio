// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: Update this to your production URL when deploying
  site: 'https://arquitecto.com',
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['f880918e5de2.ngrok-free.app']
    }
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false // Spanish at root (/), English at /en/
    }
  }
});