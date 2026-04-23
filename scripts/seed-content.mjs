// scripts/seed-content.mjs
// Run: SANITY_TOKEN=<editor-token> node scripts/seed-content.mjs
import { createClient } from "@sanity/client";

const token = process.env.SANITY_TOKEN;
if (!token) { console.error("Missing SANITY_TOKEN"); process.exit(1); }

const client = createClient({
  projectId: "h0f14hm4",
  dataset: "production",
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

const mutations = [
  // ─── HERO ────────────────────────────────────────────────────────────────
  {
    createOrReplace: {
      _id: "hero", _type: "hero",
      badgeText: "Open to In-Office, Hybrid, and Remote roles",
      headline: "HI, I'm Austin Rehorn",
      subheading: "I help clients succeed by combining deep relationship management and trust with AI-native workflow thinking — building the trust that drives referrals and the automation that makes it all scale.",
      ctaText: "See My Work",
    },
  },

  // ─── ABOUT ───────────────────────────────────────────────────────────────
  {
    createOrReplace: {
      _id: "about", _type: "about",
      heading: "SALES INSTINCTS. BUILDER ENERGY.",
      bioParagraph1: "15 years in enterprise account management, team leadership, and closing the kind of deals that only happen when people trust you. The through line has always been the same: understand people fast, build confidence, and make hard things feel clear. I'm a Senior Account Manager with a passion for building efficient systems and delightful customer experiences. My background in Customer Success and Recruiting Ops has taught me the formula is the same: understand people fast, build confidence, and make hard things feel clear. The best solutions are the ones that prioritize human connection and clarity.",
      bioParagraph2: "That same wiring is what pulled me into AI and product building. If a workflow is clunky, I want to redesign it. If a manual task repeats twice, I want to automate it. If an idea keeps rattling around in my head, I usually ship a version of it.",
      quote: "I am curious about everything I do not know. If I do not know something, I will next time we speak.",
      closingStatement: "Me and Barkley, in a format that feels a little more like a note pinned to the page.",
    },
  },

  // ─── EXPERIENCE (singleton) ──────────────────────────────────────────────
  {
    createOrReplace: {
      _id: "experience", _type: "experience",
      sectionHeading: "Career Experience.",
      sectionSubheading: "A chronological record of enterprise leadership, client relationships, and AI-native workflow thinking.",
      ctaHeading: "Let's build the next chapter together.",
      ctaSubheading: "Open to enterprise AE/CSM roles and AI workflow consulting engagements. Remote-first, results-always.",
    },
  },

  // ─── CONNECT (singleton) ─────────────────────────────────────────────────
  {
    createOrReplace: {
      _id: "connect", _type: "connect",
      quote: "I pair relationship-led account management with AI-driven workflows, building the trust that drives referrals and the automation that makes it all scale. Exceeding revenue goals and streamlining processes. Whether you're looking for a AI-native account manager, need help automating a workflow, or just want to talk shop — Let's Connect!",
    },
  },

  // ─── STAT ITEMS — about section ──────────────────────────────────────────
  {
    createOrReplace: {
      _id: "stat-gross-margin", _type: "statItem",
      value: "~$4M", label: "Cumulative gross margin generated",
      section: "about", order: 1,
    },
  },
  {
    createOrReplace: {
      _id: "stat-search-time", _type: "statItem",
      value: "90%", label: "Reduction in search go-live time via AI automation",
      section: "about", order: 2,
    },
  },
  {
    createOrReplace: {
      _id: "stat-quota", _type: "statItem",
      value: "130%", label: "Quota attainment, 3 consecutive years. Top two revenue generator 4 years in a row.",
      section: "about", order: 3,
    },
  },

  // ─── STAT ITEMS — experience section ─────────────────────────────────────
  {
    createOrReplace: {
      _id: "exp-stat-quota", _type: "statItem",
      value: "130%+", label: "QUOTA ATTAINMENT",
      section: "experience", order: 1,
    },
  },
  {
    createOrReplace: {
      _id: "exp-stat-years", _type: "statItem",
      value: "15+", label: "YEARS EXPERIENCE",
      section: "experience", order: 2,
    },
  },

  // ─── PERSONALITY CARDS ───────────────────────────────────────────────────
  {
    createOrReplace: {
      _id: "card-afternoon", _type: "personalityCard",
      title: "BEST USE OF A FREE AFTERNOON",
      description: "Time with my wife, Erica, long walks with my pups, beautiful Charleston Spring Days, and discovering new things.",
      icon: "heart", order: 1,
    },
  },
  {
    createOrReplace: {
      _id: "card-home", _type: "personalityCard",
      title: "HOME BASE",
      description: "Charleston, SC",
      icon: "star", order: 2,
    },
  },
  {
    createOrReplace: {
      _id: "card-approach", _type: "personalityCard",
      title: "MY DEFAULT APPROACH",
      description: "Notice friction, ask better questions, build a cleaner system.",
      icon: "brain", order: 3,
    },
  },
  {
    createOrReplace: {
      _id: "card-noticed", _type: "personalityCard",
      title: "WHAT PEOPLE USUALLY NOTICE",
      description: "I can move between relationship-heavy work and highly technical problem solving without changing who I am. That mix tends to make me useful in rooms where trust, speed, and clarity all matter at once.",
      icon: "code", order: 4,
    },
  },

  // ─── OFF CLOCK NOTES ─────────────────────────────────────────────────────
  {
    createOrReplace: {
      _id: "note-side-projects", _type: "offClockNote",
      label: "Side Projects",
      value: "Tiny tools, agent workflows, and ideas that refuse to stay in my notes app.",
      order: 1,
    },
  },
  {
    createOrReplace: {
      _id: "note-curiosity", _type: "offClockNote",
      label: "Curiosity",
      value: "If I do not know something yet, I usually treat that as a short-term problem. I get genuinely energized by challenges. Curiosity isn't just something I have — it's my superpower.",
      order: 2,
    },
  },
  {
    createOrReplace: {
      _id: "note-barkley", _type: "offClockNote",
      label: "Barkley + Margo",
      value: "Two German Shepherd-poodle mixes, one house, zero shortage of personality and energy.",
      order: 3,
    },
  },
  {
    createOrReplace: {
      _id: "note-charleston", _type: "offClockNote",
      label: "Charleston Life",
      value: "Mt. Pleasant pace, Charleston energy, and just enough salt air to reset my brain.",
      order: 4,
    },
  },

  // ─── SERVICE COLUMNS ─────────────────────────────────────────────────────
  {
    createOrReplace: {
      _id: "service-passions", _type: "serviceColumn",
      title: "Passions",
      bullets: [
        "Web/AI Automation, and all things Tech",
        "Claude Skills, Plugins, and agentic system design",
        "Custom GPT development and prompt engineering",
        "Automating recruiting, inbox, and operational workflows",
        "Full-stack SaaS development / Vibe Coding",
        "Solving Problems",
      ],
      iconType: "lightbulb", order: 1,
    },
  },
  {
    createOrReplace: {
      _id: "service-account-mgmt", _type: "serviceColumn",
      title: "Account Management / Customer Success",
      bullets: [
        "Experienced managing 30–40 concurrent client projects across industries",
        "Building referral-generating relationships (90%+ referral close rate)",
        "Cross-functional team leadership and placement execution",
        "Salesforce CRM, pipeline management, and quota attainment",
      ],
      iconType: "people", order: 2,
    },
  },

  // ─── PROJECTS ────────────────────────────────────────────────────────────
  {
    createOrReplace: {
      _id: "project-holliweather", _type: "projectItem",
      title: "HolliWeather",
      description: "A web app and chrome plugin to help you find the highest probability dates for great vacation weather.",
      tags: ["Next.js", "TypeScript", "OpenAI", "PostgreSQL"],
      order: 1,
    },
  },
  {
    createOrReplace: {
      _id: "project-leasekeepr", _type: "projectItem",
      title: "LeaseKeepr",
      description: "Full-stack property management SaaS for small landlords — lease tracking, automated reminders, tenant communication, and rent collection.",
      tags: ["Next.js", "Supabase", "Stripe", "OpenAI", "Tailwind"],
      order: 2,
    },
  },
  {
    createOrReplace: {
      _id: "project-claude-skills", _type: "projectItem",
      title: "Claude Skills & Plugins",
      description: "Built a comprehensive automated recruiting suite — job title and market research, JD drafting, screening questions, and ad placement optimizations. Cut search go-live time by 90%.",
      tags: ["Claude API", "Agentic Workflows", "Prompt Engineering"],
      order: 3,
    },
  },
  {
    createOrReplace: {
      _id: "project-gmail-tagger", _type: "projectItem",
      title: "Gmail Auto-Tagger",
      description: "AI-powered inbox triage — categorizes threads into 9 actionable labels, generates context-aware draft replies utilizing AI, and learns from your edits.",
      tags: ["AI", "Gmail API", "Automation"],
      order: 4,
    },
  },
  {
    createOrReplace: {
      _id: "project-barkwalk", _type: "projectItem",
      title: "BarkWalk",
      description: "Plan the perfect walk for your best friend. Discover new trails, track your miles, and let our AI sniff out the perfect loop for you and your pup.",
      tags: ["AI", "Maps", "Next.js"],
      order: 5,
    },
  },

  // ─── EXPERIENCE ROLES ────────────────────────────────────────────────────
  {
    createOrReplace: {
      _id: "role-rhodes-wolfe", _type: "experienceRole",
      company: "Rhodes Wolfe / #twiceasnice",
      title: "SR. SEARCH CONSULTANT",
      dates: "2023–2026",
      division: "Executive Search Division",
      side: "right",
      iconType: "search",
      highlights: [
        "Built Claude-powered skills and plugins that automated the full search go-live workflow — reducing time-to-launch by 90%.",
        "Set company records for highest single-month gross margin ($125K), most repeat searches, and placement velocity.",
        "Managed RJ Reynolds nationwide search: filled 27 of 30 roles in under 2 months.",
      ],
      order: 1,
    },
  },
  {
    createOrReplace: {
      _id: "role-twiceasnice-scm", _type: "experienceRole",
      company: "#twiceasnice Recruiting",
      title: "SR. CLIENT MANAGER",
      dates: "2021–2023",
      division: "→ Promoted to Executive Search",
      side: "left",
      iconType: "team",
      highlights: [
        "Exceeded annual quota by 130%+ four consecutive years, generating $1M+ in cumulative gross margin.",
        "Managed 100+ active accounts averaging 30–40 concurrent searches across industries.",
        "Identified for executive search promotion based on consultative client approach and consistent performance.",
      ],
      order: 2,
    },
  },
  {
    createOrReplace: {
      _id: "role-grg-ops", _type: "experienceRole",
      company: "Global Resource Group / HR TruCheck · Tristarr",
      title: "OPERATIONS MANAGER",
      dates: "2017–2021",
      side: "right",
      iconType: "settings",
      highlights: [
        "Led systems and process improvement across three companies managing 100 accounts and ~2,000 GPS devices.",
        "Introduced automated reporting and custom integrations as value-added services — increasing profit margins 25% and reducing annual labor costs by $50K.",
      ],
      order: 3,
    },
  },
  {
    createOrReplace: {
      _id: "role-grg-ae", _type: "experienceRole",
      company: "Global Resource Group",
      title: "ACCOUNT EXECUTIVE → PROJECT MANAGER",
      dates: "2011–2017",
      division: "Founding Team Member",
      side: "left",
      iconType: "briefcase",
      highlights: [
        "Joined as one of the company's first three employees.",
        "Generated $1M+ in new business, sold nearly 1,000 GPS devices adding $300K in ARR.",
        "Delivered 40+ system implementation projects nationwide — all on time and within budget.",
      ],
      order: 4,
    },
  },

  // ─── CONTACT ITEMS ───────────────────────────────────────────────────────
  {
    createOrReplace: {
      _id: "contact-linkedin", _type: "contactItem",
      label: "LINKEDIN", value: "linkedin.com/in/austinrehorn",
      href: "https://linkedin.com/in/austinrehorn", iconType: "linkedin", order: 1,
    },
  },
  {
    createOrReplace: {
      _id: "contact-phone", _type: "contactItem",
      label: "PHONE", value: "(678) 358-1041",
      href: "tel:+16783581041", iconType: "phone", order: 2,
    },
  },
  {
    createOrReplace: {
      _id: "contact-location", _type: "contactItem",
      label: "LOCATION", value: "Mt. Pleasant, SC · Open to remote",
      iconType: "location", order: 3,
    },
  },
  {
    createOrReplace: {
      _id: "contact-email", _type: "contactItem",
      label: "EMAIL", value: "hello@imaustin.me",
      href: "mailto:hello@imaustin.me", iconType: "email", order: 4,
    },
  },
];

console.log(`Seeding ${mutations.length} documents...`);
const result = await client.mutate(mutations);
console.log(`✅ Done. ${result.results.length} documents written.`);
