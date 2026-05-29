// src/types/emdash.ts

// ── Primitives ────────────────────────────────────────────────────────────────

export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export interface PersonalityCard {
  id: string;
  title: string;
  description: string;
  icon: "heart" | "dog" | "brain" | "code" | "star";
  accent_color: string;
}

export interface OffClockNote {
  id: string;
  label: string;
  value: string;
}

export type ServiceColumnIconType = "people" | "lightbulb";

export interface ServiceColumn {
  id: string;
  title: string;
  bullets: string[];
  icon_type: ServiceColumnIconType;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
}

export type ExperienceIconType = "search" | "team" | "settings" | "briefcase";

export interface ExperienceRole {
  id: string;
  title: string;
  company: string;
  division: string;
  dates: string;
  era: string;
  side: "left" | "right";
  icon_type: ExperienceIconType;
  highlights: string | string[];
}

export interface ContactItem {
  id: string;
  label: string;
  value: string;
  href: string;
  icon_type: "email" | "phone" | "linkedin" | "location";
}

// ── Section data ──────────────────────────────────────────────────────────────

export interface HeroData {
  id: string;
  badge_text: string;
  headline: string;
  subheading: string;
  cta_text: string;
  headshot_url: string;
  headshot_alt: string;
  resume_url: string;
}

export interface AboutData {
  id: string;
  heading: string;
  bio_paragraph_1: string;
  bio_paragraph_2: string;
  quote: string;
  closing_statement: string;
  photo_url: string;
  photo_alt: string;
}

export interface ExperienceData {
  id: string;
  section_heading: string;
  section_subheading: string;
  roles: ExperienceRole[];
  stats: StatItem[];
  cta_heading: string;
  cta_subheading: string;
  headshot_url: string;
  headshot_alt: string;
}

export interface ConnectData {
  id: string;
  quote: string;
  photo_url: string;
  photo_alt: string;
  contact_items: ContactItem[];
}


// ── Raw Sanity Data Types ──────────────────────────────────────────────────────

export interface RawStatItem {
  _id: string;
  value: string;
  label: string;
}

export interface RawPersonalityCard {
  _id: string;
  title: string;
  description?: string;
  icon?: "heart" | "dog" | "brain" | "code" | "star";
  accentColor?: string;
}

export interface RawOffClockNote {
  _id: string;
  label: string;
  value: string;
}

export interface RawServiceColumn {
  _id: string;
  title: string;
  bullets?: string[] | string;
  iconType?: ServiceColumnIconType;
}

export interface RawProjectItem {
  _id: string;
  title: string;
  description?: string;
  tags?: string[];
  href?: string;
}

export interface RawExperienceRole {
  _id: string;
  title: string;
  company: string;
  division?: string;
  dates?: string;
  era?: string;
  side?: "left" | "right";
  iconType?: ExperienceIconType;
  highlights?: string | string[];
}

export interface RawContactItem {
  _id: string;
  label: string;
  value: string;
  href?: string;
  iconType?: "email" | "phone" | "linkedin" | "location";
}
