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
  bullets: string; // newline-separated
  icon_type: ServiceColumnIconType;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string; // comma-separated
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
  highlights: string;
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
  headshot_image_url: string;
  headshot_image_alt: string;
  resume_file_url: string;
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

export interface WhatIDoData {
  columns: ServiceColumn[];
}

export interface ProjectsData {
  projects: ProjectItem[];
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

// ── Blog ──────────────────────────────────────────────────────────────────────

export interface BlogPostData {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  published_date: string;
  tags: string; // comma-separated
  cover_image_url: string;
  cover_image_alt: string;
  body: unknown; // Portable Text document
}
