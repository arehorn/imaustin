# imaustin.me Setup Guide

## Current Status: Phase 1 Complete ✅

Project initialization is complete! Here's what's been set up:

### ✅ Completed
- Astro + TypeScript project structure
- Design system (colors, spacing, typography)
- Glassmorphism UI components
- Layout infrastructure (Header, Footer, main layout)
- All page sections implemented:
  - Hero (personality-driven intro)
  - Personality Bullets (quick snapshot)
  - Vibe Project (HolliWeather showcase)
  - Projects (grid layout, ready for emdash)
  - Connect (contact section)
- CSS styling with responsive design
- API endpoint stub for Phase 2 chatbot
- Git commit history initialized

### ⏳ Next: Phase 2 - emdash CMS Setup

When ready to continue implementation (in an environment with internet):

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Visit http://localhost:3000/admin to set up emdash

# 4. Create content collections:
#    - Hero (title, subtitle, cta_text)
#    - Projects (title, description, image, link, featured)
#    - Personality (bullets array)
#    - Contact (email, social links)

# 5. Build and deploy
npm run build
npm run preview
```

## Project Structure

```
src/
├── pages/           # Astro pages and API routes
├── layouts/         # Page layout wrappers
├── components/      # Astro components
│   ├── layout/     # Header, Footer, main layout
│   ├── common/     # Reusable: GlassPanel, Container, Section, Button
│   └── sections/   # Page sections: Hero, Projects, Connect, etc.
├── styles/         # Global CSS, design tokens, glassmorphism
├── lib/            # Utilities and helpers
│   └── chatbot/    # Chatbot system prompt (Phase 2)
└── types/          # TypeScript type definitions
```

## Configuration Files

- `astro.config.mjs` - Astro + emdash configuration
- `tailwind.config.mjs` - Tailwind CSS setup
- `postcss.config.mjs` - PostCSS configuration
- `tsconfig.json` - TypeScript strict mode
- `.env.local.example` - Environment variable template

## Design System

### Colors
- **Primary**: Blue (#2563eb)
- **Secondary**: Purple (#7c3aed)
- **Accents**: Red, Amber, Green (for personality)

### Spacing
8px base unit: xs(4px), sm(8px), md(16px), lg(24px), xl(32px), 2xl(48px), 3xl(64px)

### Glassmorphism
All `.glass-panel` components include:
- Backdrop blur (10px)
- Semi-transparent background
- Subtle hover effects
- Accent variations for each color

## Development

### Local Development
```bash
npm run dev
# Starts Astro dev server on http://localhost:3000
```

### Build & Preview
```bash
npm run build
npm run preview
```

### Adding New Components
1. Create component in `src/components/`
2. Use `.astro` for static components
3. Use `.tsx` for interactive Islands
4. Import and use in pages

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repo to Vercel
3. Set environment variables (emdash, API keys)
4. Deploy automatically on git push

### Other Platforms
- **Netlify**: Configure `netlify.toml`
- **Self-hosted**: Use Node.js or Cloudflare Workers adapter

## Phase 2 Roadmap

### Chatbot Implementation
- Install `@anthropic-ai/sdk`
- Implement `/api/chat` endpoint with Claude integration
- Create React Island component for chat UI
- Test chatbot personality and responses

### Additional Features
- Life Behind the Scenes section (lifestyle photos)
- Tools I'm Loving (affiliate section)
- Now section (current interests)
- Email subscription
- Analytics integration

## Important Notes

### emdash CMS (Phase 2)
- Self-hosted headless CMS
- Content stored in SQLite (local) or PostgreSQL (production)
- Media managed via emdash admin UI (not git)
- `.emdash/` directory is git-ignored
- Regular backups recommended for production

### Performance
- Lighthouse target: 95+ (all metrics)
- Zero JavaScript by default (Astro)
- Islands only hydrated when needed
- Images optimized automatically

### Content
- Content data is separate from code
- Updates via emdash admin UI (no rebuild needed for some scenarios)
- Real photos only (authenticity priority)
- Portable Text format for rich content

## Troubleshooting

### Dev Server Issues
```bash
# Clear cache and restart
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Build Errors
```bash
# Clean build
rm -rf dist/
npm run build
```

### emdash Issues (Phase 2)
```bash
# Reset local emdash
rm -rf .emdash/
npm run dev
# Visit /admin to recreate
```

## Support Resources

- [Astro Documentation](https://docs.astro.build)
- [emdash GitHub](https://github.com/emdash-cms/emdash)
- [Tailwind CSS](https://tailwindcss.com)
- [Anthropic Claude API](https://claude.ai/api)

---

**Status**: Ready for Phase 2 integration
**Last Updated**: April 4, 2026
**Branch**: `claude/plan-website-redesign-NYIAp`
