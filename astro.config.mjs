import { defineConfig } from 'astro/config';
import emdash from '@emdash/astro';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Site URL for SEO and deployment
  site: 'https://imaustin.me',

  // Output configuration
  output: 'static',

  // Integrations
  integrations: [
    // emdash CMS integration (Astro-native)
    emdash({
      database: {
        type: 'sqlite',
        path: './.emdash/d1.sqlite',
      },
      storage: {
        type: 'local',
        path: './.emdash/uploads/',
      },
      // Admin UI settings
      admin: {
        enabled: true,
        port: 3000,
        path: '/admin',
      },
    }),
    // Tailwind CSS integration (optional)
    tailwind({
      applyBaseStyles: false,
    }),
  ],

  // Vite configuration for dev server
  vite: {
    ssr: {
      external: ['sharp'],
    },
  },

  // Build optimization
  build: {
    inlineStylesheets: 'auto',
  },
});
