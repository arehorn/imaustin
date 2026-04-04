# imaustin.me - Personal Website Redesign

Austin's digital home: A high-personality, interactive, modern personal website that blends professional credibility with authentic lifestyle storytelling.

## Vision

Transform imaustin.me from a standard portfolio into a memorable digital experience that:
- ✨ Feels personal within first 5 seconds
- 🎨 Showcases personality (Survivor enthusiast, AI lover, dog dad, college football fanatic)
- 🚀 Demonstrates technical excellence (Astro, emdash, AI integration)
- 💬 Enables genuine connection (chatbot, contact, social links)
- ⚡ Delivers exceptional performance (Lighthouse 95+)

## Tech Stack

**Frontend**
- [Astro](https://astro.build) - Static site generation with Islands
- TypeScript - Type-safe code
- Tailwind CSS - Utility-first styling

**Backend/CMS**
- [emdash](https://github.com/emdash-cms/emdash) - Astro-native headless CMS
- SQLite (local) / PostgreSQL (production)
- S3 API for media storage

**AI**
- Claude API (Phase 2) - Personality-driven chatbot

## Design System

### Aesthetic
- Modern glassmorphism + Material You inspired
- Cool blues & purples with personality accent colors
- Confident, playful, intelligent tone

### Colors
- **Primary**: Cool blues (#0f3a7d, #2563eb)
- **Secondary**: Soft purples (#7c3aed)
- **Accents**: Georgia red (#a4161a), warm amber (#f59e0b), soft green (#10b981)

### Key Features
- Glassmorphic panels with depth and blur
- Micro-interactions (hover, click feedback)
- Responsive mobile-first design
- Zero layout shifts (CLS < 0.1)

## Current Status: Phase 1 ✅

### Implemented
- ✅ Project scaffold with Astro + TypeScript
- ✅ Design system (tokens, styles, components)
- ✅ Layout infrastructure (Header, Footer, BaseLayout)
- ✅ Reusable UI components (GlassPanel, Button, Section, Container)
- ✅ Page sections:
  - Hero: Personality-driven introduction
  - Personality Bullets: Quick snapshot (Survivor, AI, football, dogs)
  - Vibe Project: HolliWeather showcase
  - Projects: Grid of featured work
  - Connect: Contact and social links
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ API endpoint stubs (Phase 2 chatbot)
- ✅ Git history and documentation

### Not Yet Implemented
- ⏳ emdash CMS integration (Phase 2)
- ⏳ AI chatbot UI and logic
- ⏳ Lifestyle content section
- ⏳ Tools/affiliate section
- ⏳ Real content and images

## Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Quick Start

1. **Install dependencies** (when internet available)
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000

3. **Initialize emdash CMS** (Phase 2)
   - Visit http://localhost:3000/admin
   - Create passkey authentication
   - Define content collections
   - Add initial content

4. **Build for production**
   ```bash
   npm run build
   npm run preview
   ```

See [SETUP.md](./SETUP.md) for detailed setup instructions.

## Project Structure

```
imaustin/
├── src/
│   ├── pages/              # Astro pages & API routes
│   ├── layouts/            # Page layout wrappers
│   ├── components/         # Astro & React components
│   │   ├── layout/        # Header, Footer, main layout
│   │   ├── common/        # Reusable UI components
│   │   ├── sections/      # Page sections
│   │   └── islands/       # Interactive React components (Islands)
│   ├── styles/            # Global CSS, design tokens
│   ├── lib/               # Utilities & helpers
│   └── types/             # TypeScript definitions
├── public/                # Static assets
├── astro.config.mjs       # Astro + emdash configuration
├── tailwind.config.mjs    # Tailwind setup
├── tsconfig.json          # TypeScript config
├── package.json           # Dependencies
└── README.md              # This file
```

## Key Components

### Layout
- **Header** - Sticky navigation with logo and menu links
- **Footer** - Site footer with links and copyright
- **BaseLayout** - Main page wrapper with meta tags and structure

### Common Components
- **GlassPanel** - Glassmorphic card container with accent color variants
- **Container** - Max-width content wrapper
- **Section** - Page section wrapper with title and spacing
- **Button** - Customizable button/link component (primary, secondary, outline)

### Page Sections
- **Hero** - Headline, introduction, CTAs
- **PersonalityBullets** - 4-item grid of quick personality snapshots
- **VibeProject** - Featured project showcase (HolliWeather)
- **Projects** - Grid of project cards with tech tags (3+ items)
- **Connect** - Contact methods, social links, email

## Styling Approach

### Design Tokens
- CSS custom properties for colors, spacing, typography
- Glassmorphism utilities (blur, opacity, borders)
- Responsive breakpoints (640px, 768px, 1440px)

### Component Styles
- Scoped CSS per component (Astro default)
- Mobile-first responsive design
- Accessibility-first (contrast, keyboard navigation)
- Performance optimized (minimal CSS, no unnecessary animations)

## Performance Targets

- **Lighthouse**: 95+ (all metrics)
- **First Contentful Paint**: < 1s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **JavaScript Bundle**: < 50KB (gzipped)

## Deployment

### Vercel (Recommended)
```bash
# Push to GitHub
git push origin claude/plan-website-redesign-NYIAp

# Connect repo to Vercel
# Auto-deploys on every push
```

### Other Platforms
- Netlify (serverless functions for API)
- Self-hosted Node.js (with `@astrojs/node`)
- Cloudflare Pages (with Worker functions)

## Phase 2 Roadmap

### Chatbot Implementation
- [ ] Install @anthropic-ai/sdk
- [ ] Implement /api/chat endpoint with Claude
- [ ] Create ChatWidget React Island
- [ ] Test personality and conversation flows
- [ ] Deploy and monitor

### Content & Features
- [ ] Set up emdash admin UI
- [ ] Create content collections
- [ ] Add real photos and content
- [ ] Implement "Life Behind the Scenes" section
- [ ] Add "Tools I'm Loving" affiliate section
- [ ] Create "Now" section for current interests

### Optimization
- [ ] Run Lighthouse audit (target 95+)
- [ ] Set up analytics
- [ ] Email capture/newsletter
- [ ] SEO optimization

## Git Workflow

### Development Branch
- Working branch: `claude/plan-website-redesign-NYIAp`
- All changes committed here
- Ready to merge to `main` when MVP complete

### Commits
Use clear, descriptive commit messages:
```
Initialize Astro project with design system

- Set up core infrastructure
- Create design tokens
- Implement layout components
```

## Contributing

This is Austin's personal website. Content updates via emdash CMS admin.

Technical changes:
1. Work on feature branch
2. Commit with clear messages
3. Test locally before pushing
4. Merge to main when ready

## License

Personal project © 2026 Austin

---

**Status**: Phase 1 Complete - Ready for Phase 2 Integration
**Last Updated**: April 4, 2026
**Current Branch**: `claude/plan-website-redesign-NYIAp`