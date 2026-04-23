// astro.config.mjs
import { defineConfig, envField } from "astro/config";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import sanity from "@sanity/astro";

const SANITY_PROJECT_ID = process.env.PUBLIC_SANITY_PROJECT_ID || "h0f14hm4";
const SANITY_DATASET = process.env.PUBLIC_SANITY_DATASET ?? "production";

export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [
    sanity({
      projectId: SANITY_PROJECT_ID,
      dataset: SANITY_DATASET,
      useCdn: true,
      studioBasePath: "/studio",
      logClientRequests: "dev",
    }),
    react(),
  ],
  env: {
    schema: {
      PUBLIC_SANITY_PROJECT_ID: envField.string({ context: "client", access: "public", optional: true }),
      PUBLIC_SANITY_DATASET: envField.string({
        context: "client",
        access: "public",
        optional: true,
        default: "production",
      }),
      SANITY_REVALIDATE_SECRET: envField.string({ context: "server", access: "secret", optional: true }),
      RESEND_API_KEY: envField.string({ context: "server", access: "secret", optional: true }),
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
