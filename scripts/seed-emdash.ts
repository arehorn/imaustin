/**
 * seed-emdash.ts
 *
 * One-time content migration: Storyblok JSON export → EM Dash REST API.
 *
 * Usage:
 *   1. Export Storyblok content:
 *      curl "https://api.storyblok.com/v2/cdn/stories?token=UISr4CbRUJtksaCWiqzjfQtt&per_page=100&version=published" \
 *        -o scripts/storyblok-export.json
 *
 *   2. Start your local EM Dash dev server (wrangler dev)
 *
 *   3. Run:
 *      EMDASH_TOKEN=your-admin-token npx tsx scripts/seed-emdash.ts
 */

import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const EMDASH_BASE = process.env.EMDASH_BASE ?? "http://localhost:8788";
const EMDASH_TOKEN = process.env.EMDASH_TOKEN ?? "";

if (!EMDASH_TOKEN) {
  console.error("Error: EMDASH_TOKEN env var is required");
  process.exit(1);
}

// ---------------------------------------------------------------------------
// EM Dash API helpers
// ---------------------------------------------------------------------------

async function createEntry(collection: string, data: unknown): Promise<void> {
  const url = `${EMDASH_BASE}/_emdash/api/content/${collection}`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${EMDASH_TOKEN}`,
    },
    body: JSON.stringify({ data }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`POST ${url} failed (${res.status}): ${text}`);
  }
}

async function upsertSingleton(collection: string, data: unknown): Promise<void> {
  // Singletons use PUT to the collection root
  const url = `${EMDASH_BASE}/_emdash/api/content/${collection}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${EMDASH_TOKEN}`,
    },
    body: JSON.stringify({ data }),
  });

  if (!res.ok) {
    // If PUT not supported, fall back to POST (first entry wins for singletons)
    await createEntry(collection, data);
  }
}

// ---------------------------------------------------------------------------
// Load export
// ---------------------------------------------------------------------------

const exportPath = join(__dirname, "storyblok-export.json");
let exportData: { stories: StoryblokStory[] };

try {
  exportData = JSON.parse(readFileSync(exportPath, "utf-8"));
} catch {
  console.error(`Could not read ${exportPath}. Run the curl export command first.`);
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Types (minimal subset needed for mapping)
// ---------------------------------------------------------------------------

interface StoryblokStory {
  slug: string;
  full_slug: string;
  content: Record<string, unknown>;
}

interface SbBlok {
  component: string;
  [key: string]: unknown;
}

// ---------------------------------------------------------------------------
// Find stories
// ---------------------------------------------------------------------------

const stories = exportData.stories ?? [];
const homeStory = stories.find((s) => s.slug === "home");
const blogStories = stories.filter((s) => s.full_slug.startsWith("blog/"));

if (!homeStory) {
  console.warn("Warning: no 'home' story found in export. Skipping homepage sections.");
}

const body: SbBlok[] = (homeStory?.content?.body as SbBlok[]) ?? [];

function findBlok(component: string): SbBlok | undefined {
  return body.find((b) => b.component === component);
}

// ---------------------------------------------------------------------------
// Seed hero
// ---------------------------------------------------------------------------

const heroBlok = findBlok("hero-section");
if (heroBlok) {
  console.log("Seeding hero...");
  const headshot = heroBlok.headshot_image as { filename?: string; alt?: string } | undefined;
  const resume = heroBlok.resume_file as { filename?: string } | undefined;
  await upsertSingleton("hero", {
    badge_text: heroBlok.badge_text ?? "",
    headline: heroBlok.headline ?? "",
    subheading: heroBlok.subheading ?? "",
    cta_text: heroBlok.cta_text ?? "",
    headshot_url: headshot?.filename ?? "",
    headshot_alt: headshot?.alt ?? "Austin Rehorn",
    resume_url: resume?.filename ?? "",
  });
  console.log("  ✓ hero");
}

// ---------------------------------------------------------------------------
// Seed about
// ---------------------------------------------------------------------------

const aboutBlok = findBlok("about-section");
if (aboutBlok) {
  console.log("Seeding about...");
  const photo = aboutBlok.photo as { filename?: string; alt?: string } | undefined;

  await upsertSingleton("about", {
    heading: aboutBlok.heading ?? "",
    bio_paragraph_1: aboutBlok.bio_paragraph_1 ?? "",
    bio_paragraph_2: aboutBlok.bio_paragraph_2 ?? "",
    quote: aboutBlok.quote ?? "",
    closing_statement: aboutBlok.closing_statement ?? "",
    photo_url: photo?.filename ?? "",
    photo_alt: photo?.alt ?? "Austin Rehorn",
  });
  console.log("  ✓ about");

  // about_stats
  const stats = (aboutBlok.stats as SbBlok[]) ?? [];
  for (const stat of stats) {
    await createEntry("about_stats", {
      value: stat.value ?? "",
      label: stat.label ?? "",
    });
  }
  console.log(`  ✓ about_stats (${stats.length})`);

  // about_personality_cards
  const cards = (aboutBlok.personality_cards as SbBlok[]) ?? [];
  for (const card of cards) {
    await createEntry("about_personality_cards", {
      title: card.title ?? "",
      description: card.description ?? "",
      icon: card.icon ?? "star",
      accent_color: card.accent_color ?? "#6C63FF",
    });
  }
  console.log(`  ✓ about_personality_cards (${cards.length})`);

  // about_off_clock_notes
  const notes = (aboutBlok.off_clock_notes as SbBlok[]) ?? [];
  for (const note of notes) {
    await createEntry("about_off_clock_notes", {
      label: note.label ?? "",
      value: note.value ?? "",
    });
  }
  console.log(`  ✓ about_off_clock_notes (${notes.length})`);
}

// ---------------------------------------------------------------------------
// Seed what_i_do_columns
// ---------------------------------------------------------------------------

const whatIDoBlok = findBlok("what-i-do-section");
if (whatIDoBlok) {
  console.log("Seeding what_i_do_columns...");
  const columns = (whatIDoBlok.columns as SbBlok[]) ?? [];
  for (const col of columns) {
    await createEntry("what_i_do_columns", {
      title: col.title ?? "",
      bullets: col.bullets ?? "",
      icon_type: col.icon_type ?? "lightbulb",
    });
  }
  console.log(`  ✓ what_i_do_columns (${columns.length})`);
}

// ---------------------------------------------------------------------------
// Seed projects
// ---------------------------------------------------------------------------

const projectsBlok = findBlok("projects-section");
if (projectsBlok) {
  console.log("Seeding projects...");
  const projects = (projectsBlok.projects as SbBlok[]) ?? [];
  for (const project of projects) {
    await createEntry("projects", {
      title: project.title ?? "",
      description: project.description ?? "",
      tags: project.tags ?? "",
      href: project.href ?? "",
    });
  }
  console.log(`  ✓ projects (${projects.length})`);
}

// ---------------------------------------------------------------------------
// Seed experience
// ---------------------------------------------------------------------------

const experienceBlok = findBlok("experience-section");
if (experienceBlok) {
  console.log("Seeding experience...");
  const headshot = experienceBlok.headshot as { filename?: string; alt?: string } | undefined;

  await upsertSingleton("experience", {
    section_heading: experienceBlok.section_heading ?? "",
    section_subheading: experienceBlok.section_subheading ?? "",
    cta_heading: experienceBlok.cta_heading ?? "",
    cta_subheading: experienceBlok.cta_subheading ?? "",
    headshot_url: headshot?.filename ?? "",
    headshot_alt: headshot?.alt ?? "Austin Rehorn",
  });
  console.log("  ✓ experience");

  // experience_roles
  const roles = (experienceBlok.roles as SbBlok[]) ?? [];
  for (const role of roles) {
    await createEntry("experience_roles", {
      title: role.title ?? "",
      company: role.company ?? "",
      division: role.division ?? "",
      dates: role.dates ?? "",
      era: role.era ?? "",
      side: role.side ?? "left",
      icon_type: role.icon_type ?? "briefcase",
      highlights: role.highlights ?? "",
    });
  }
  console.log(`  ✓ experience_roles (${roles.length})`);

  // experience_stats
  const stats = (experienceBlok.stats as SbBlok[]) ?? [];
  for (const stat of stats) {
    await createEntry("experience_stats", {
      value: stat.value ?? "",
      label: stat.label ?? "",
    });
  }
  console.log(`  ✓ experience_stats (${stats.length})`);
}

// ---------------------------------------------------------------------------
// Seed connect
// ---------------------------------------------------------------------------

const connectBlok = findBlok("connect-section");
if (connectBlok) {
  console.log("Seeding connect...");
  const photo = connectBlok.photo as { filename?: string; alt?: string } | undefined;
  const contactItems = (connectBlok.contact_items as SbBlok[]) ?? [];

  await upsertSingleton("connect", {
    quote: connectBlok.quote ?? "",
    photo_url: photo?.filename ?? "",
    photo_alt: photo?.alt ?? "Austin Rehorn",
    contact_items: contactItems.map((item) => ({
      label: item.label ?? "",
      value: item.value ?? "",
      href: item.href ?? "",
      icon_type: item.icon_type ?? "email",
    })),
  });
  console.log("  ✓ connect");
}

// ---------------------------------------------------------------------------
// Seed blog posts
// ---------------------------------------------------------------------------

if (blogStories.length > 0) {
  console.log(`Seeding ${blogStories.length} blog posts...`);
  for (const story of blogStories) {
    const c = story.content as {
      title?: string;
      excerpt?: string;
      published_date?: string;
      tags?: string;
      cover_image?: { filename?: string; alt?: string };
    };

    // Store body as a minimal Portable Text stub.
    // Re-enter rich content manually in the EM Dash admin after seeding.
    const bodyStub = [
      {
        _type: "block",
        style: "normal",
        children: [{ _type: "span", text: c.excerpt ?? "" }],
      },
    ];

    await createEntry("posts", {
      title: c.title ?? story.slug,
      excerpt: c.excerpt ?? "",
      published_date: c.published_date ?? new Date().toISOString().split("T")[0],
      tags: c.tags ?? "",
      cover_image_url: c.cover_image?.filename ?? "",
      cover_image_alt: c.cover_image?.alt ?? "",
      body: bodyStub,
    });
  }
  console.log(`  ✓ posts (${blogStories.length})`);
}

console.log("\nSeed complete! Open the EM Dash admin to review and update content.");
console.log("Note: Blog post bodies are stubs — re-enter rich text content manually.");
