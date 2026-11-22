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

This site is server-rendered (`output: "server"`) and deploys to **Cloudflare Workers** with static assets, using the `@astrojs/cloudflare` adapter. Worker settings live in [`wrangler.jsonc`](./wrangler.jsonc): the `@astrojs/cloudflare/entrypoints/server` entrypoint, `nodejs_compat` (for `node:crypto` and `process.env`), the `./dist` assets bound as `ASSETS`, and the public `PUBLIC_SANITY_*` vars.

`npm run build` produces **no HTML**: `dist/client/` holds the static assets and `dist/server/` holds the Worker, which renders every page per request. That is also why the old Cloudflare **Pages** project cannot serve the site — Pages only uploads files, and the Cloudflare adapter dropped Pages support in v13 (the version Astro 6 requires). The previous **Vercel** host is retired: `@astrojs/vercel` is gone and the paused Vercel project should stay off the deploy path.

### Deploying

```sh
npx wrangler login                                  # once per machine
npx wrangler secret put SANITY_REVALIDATE_SECRET    # once, and whenever it rotates
npm run build && npx wrangler deploy
```

`astro build` writes `.wrangler/deploy/config.json`, so plain `wrangler deploy` picks up `dist/server/wrangler.json` — no `--config` flag needed. The first deploy auto-provisions the `SESSION` KV namespace and the `IMAGES` binding the adapter requests. Afterwards, attach `imaustin.me` to the Worker under **Settings → Domains & Routes** and retire the Pages project. The Sanity webhook URL stays `https://imaustin.me/api/revalidate`, so no webhook change is needed while the domain moves.

Locally, `npm run dev` and `npm run preview` both run on workerd. `npm run preview` serves the built Worker; put `SANITY_REVALIDATE_SECRET` in a gitignored `.dev.vars` to exercise `/api/revalidate`.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
