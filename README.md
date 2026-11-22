# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## ☁️ Hosting

This site is server-rendered (`output: "server"`) and built with the **Vercel** adapter (`@astrojs/vercel`), so `astro build` produces **no HTML**. Pages are rendered by a server function in `.vercel/output/functions/`, and the only files under `dist/` are static assets in `dist/client/`.

The Cloudflare **Pages** project connected to this repo cannot serve the site for that reason: Pages uploads `dist/` as plain files, so `/`, `/blog`, and every other route 404s even though the build and deploy report success. Pages is also no longer supported by the Astro Cloudflare adapter — v13+, required by Astro 6, targets Workers with static assets only.

Practical upshot: treat the Pages project as retired and off the deploy path. The supported Cloudflare target is **Workers** (`@astrojs/cloudflare` + a `wrangler.jsonc` + `wrangler deploy`); Vercel remains the working host, currently paused at the project level.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
