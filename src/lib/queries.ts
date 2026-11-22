// src/lib/queries.ts
// GROQ queries used by the site. Kept small and explicit.

export const HERO_QUERY = /* groq */ `
  *[_type == "hero"][0]{
    "headshot": headshot,
    "headshotAlt": headshot.alt,
    "resumeUrl": resume.asset->url
  }
`;

export const PROJECTS_QUERY = /* groq */ `
  *[_type == "projectItem"] | order(order asc, _createdAt asc){
    _id, title, description, tags, href
  }
`;

export const EXPERIENCE_ROLES_QUERY = /* groq */ `
  *[_type == "experienceRole"] | order(order asc, _createdAt asc){
    _id, title, company, division, dates, highlights
  }
`;

export const CONNECT_QUERY = /* groq */ `
  *[_type == "connect"][0]{
    quote
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
