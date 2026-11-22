// src/types/emdash.ts
// Shapes the current page actually renders. Anything the story design no
// longer reads (about, stats, personality cards, service columns, old
// hero copy) was removed with the components that used it.

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
}

export interface ExperienceRole {
  id: string;
  title: string;
  company: string;
  division: string;
  dates: string;
  highlights: string | string[];
}

export interface ContactItem {
  id: string;
  label: string;
  value: string;
  href: string;
  icon_type: "email" | "phone" | "linkedin" | "location";
}

export interface HeroData {
  headshot_url: string;
  headshot_alt: string;
  resume_url: string;
}
