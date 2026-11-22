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
    },
  },

  // ─── CONNECT (singleton) ─────────────────────────────────────────────────
  {
    createOrReplace: {
      _id: "connect", _type: "connect",
      quote: "I pair relationship-led account management with AI-driven workflows, building the trust that drives referrals and the automation that makes it all scale. Exceeding revenue goals and streamlining processes. Whether you're looking for a AI-native account manager, need help automating a workflow, or just want to talk shop — Let's Connect!",
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
