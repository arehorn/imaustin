// src/lib/queries.ts
// GROQ queries used by the site. Kept small and explicit.

export const HERO_QUERY = /* groq */ `
  *[_type == "hero"][0]{
    badgeText,
    headline,
    subheading,
    ctaText,
    "headshot": headshot,
    "headshotAlt": headshot.alt,
    "resumeUrl": resume.asset->url
  }
`;

export const ABOUT_QUERY = /* groq */ `
  *[_type == "about"][0]{
    heading,
    bioParagraph1,
    bioParagraph2,
    quote,
    closingStatement,
    "photo": photo,
    "photoAlt": photo.alt
  }
`;

export const ABOUT_STATS_QUERY = /* groq */ `
  *[_type == "statItem" && section == "about"] | order(order asc, _createdAt asc){
    _id, value, label
  }
`;

export const EXPERIENCE_STATS_QUERY = /* groq */ `
  *[_type == "statItem" && section == "experience"] | order(order asc, _createdAt asc){
    _id, value, label
  }
`;

export const PERSONALITY_CARDS_QUERY = /* groq */ `
  *[_type == "personalityCard"] | order(order asc, _createdAt asc){
    _id, title, description, icon, accentColor
  }
`;

export const OFF_CLOCK_NOTES_QUERY = /* groq */ `
  *[_type == "offClockNote"] | order(order asc, _createdAt asc){
    _id, label, value
  }
`;

export const SERVICE_COLUMNS_QUERY = /* groq */ `
  *[_type == "serviceColumn"] | order(order asc, _createdAt asc){
    _id, title, bullets, iconType
  }
`;

export const PROJECTS_QUERY = /* groq */ `
  *[_type == "projectItem"] | order(order asc, _createdAt asc){
    _id, title, description, tags, href
  }
`;

export const EXPERIENCE_QUERY = /* groq */ `
  *[_type == "experience"][0]{
    sectionHeading,
    sectionSubheading,
    ctaHeading,
    ctaSubheading,
    "headshot": headshot,
    "headshotAlt": headshot.alt
  }
`;

export const EXPERIENCE_ROLES_QUERY = /* groq */ `
  *[_type == "experienceRole"] | order(order asc, _createdAt asc){
    _id, title, company, division, dates, era, side, iconType, highlights
  }
`;

export const CONNECT_QUERY = /* groq */ `
  *[_type == "connect"][0]{
    quote,
    "photo": photo,
    "photoAlt": photo.alt
  }
`;

export const CONTACT_ITEMS_QUERY = /* groq */ `
  *[_type == "contactItem"] | order(order asc, _createdAt asc){
    _id, label, value, href, iconType
  }
`;

export const BLOG_LIST_QUERY = /* groq */ `
  *[_type == "blogPost" && defined(slug.current)] | order(publishedDate desc){
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedDate,
    tags,
    "coverImage": coverImage,
    "coverImageAlt": coverImage.alt
  }
`;

export const BLOG_POST_QUERY = /* groq */ `
  *[_type == "blogPost" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedDate,
    tags,
    "coverImage": coverImage,
    "coverImageAlt": coverImage.alt,
    body
  }
`;

export const BLOG_SLUGS_QUERY = /* groq */ `
  *[_type == "blogPost" && defined(slug.current)][].slug.current
`;
