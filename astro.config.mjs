// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  integrations: [alpinejs({ entrypoint: '/src/entrypoint' })],
  vite: {
    plugins: [tailwindcss()]
  },
  site: "https://evogrowth.dev",
  devToolbar: {
    enabled: false
  },
  i18n:{
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false
    }
  }
});