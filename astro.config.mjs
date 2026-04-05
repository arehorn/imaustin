// astro.config.mjs
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import emdash from "emdash/astro";
import { d1 } from "@emdash-cms/cloudflare";

export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [
    react(),
    emdash({
      database: d1({ binding: "DB" }),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
