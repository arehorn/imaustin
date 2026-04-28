import { c as createComponent } from './astro-component_DcC5NTMY.mjs';
import 'piccolore';
import { h as addAttribute, n as renderHead, l as renderComponent, o as renderSlot, r as renderTemplate } from './entrypoint_TbWjRS6S.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import imageUrlBuilder from '@sanity/image-url';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Connect", href: "#connect" }
  ];
  return /* @__PURE__ */ jsxs("nav", { className: "fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl glass-card rounded-full px-6 sm:px-8 py-3 flex justify-between items-center", children: [
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: "#hero",
        className: "text-lg sm:text-xl font-black tracking-tighter font-['Plus_Jakarta_Sans']",
        children: [
          /* @__PURE__ */ jsx("span", { className: "text-white", children: "AUSTIN" }),
          /* @__PURE__ */ jsx("span", { className: "bg-clip-text text-transparent bg-gradient-to-r from-[#00F2FF] to-[#7000FF]", children: "REHORN" })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center space-x-8 lg:space-x-10", children: links.map((link, i) => /* @__PURE__ */ jsx(
      "a",
      {
        href: link.href,
        className: i === 0 ? "text-[#00F2FF] font-bold relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[#00F2FF] glow-cyan text-sm uppercase tracking-widest" : "text-gray-400 hover:text-white transition-colors font-medium text-sm uppercase tracking-widest",
        children: link.label
      },
      link.label
    )) }),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "#connect",
        className: "hidden sm:inline-flex bg-gradient-to-r from-[#7000FF] to-[#00F2FF] text-white font-bold px-5 lg:px-6 py-2 rounded-full hover:brightness-110 transition-all shadow-[0_0_20px_rgba(112,0,255,0.4)] text-xs lg:text-sm",
        children: "Work Together"
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "md:hidden p-2 rounded-full text-gray-300 hover:text-white transition-colors",
        onClick: () => setMenuOpen(!menuOpen),
        "aria-label": "Toggle menu",
        "aria-expanded": menuOpen,
        children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: menuOpen ? /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) : /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" }) })
      }
    ),
    menuOpen && /* @__PURE__ */ jsxs("div", { className: "absolute top-full left-0 right-0 mt-3 glass-card rounded-3xl md:hidden px-6 py-5 flex flex-col gap-3", children: [
      links.map((link) => /* @__PURE__ */ jsx(
        "a",
        {
          href: link.href,
          onClick: () => setMenuOpen(false),
          className: "px-3 py-2 text-sm font-medium uppercase tracking-widest text-gray-300 hover:text-[#00F2FF] transition-colors",
          children: link.label
        },
        link.label
      )),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "#connect",
          onClick: () => setMenuOpen(false),
          className: "mt-2 bg-gradient-to-r from-[#7000FF] to-[#00F2FF] text-white font-bold text-center px-5 py-2.5 rounded-full text-sm",
          children: "Work Together"
        }
      )
    ] })
  ] });
}

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Austin Rehorn — Enterprise Account Management & AI Automation",
    description = "Trust and Relationships by choice, AI automation by necessity. Enterprise account manager and AI builder based in Mt. Pleasant, SC."
  } = Astro2.props;
  return renderTemplate`<html lang="en" class="h-full antialiased"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&family=Be+Vietnam+Pro:wght@400;500;700&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet">${renderHead()}</head> <body class="min-h-full flex flex-col bg-[#0A0B10] text-white selection:bg-[#7000FF] selection:text-white"> <!-- Nebula gradient layer --> <div class="fixed inset-0 nebula-bg pointer-events-none z-0" aria-hidden="true"></div> <!-- Stardust texture overlay --> <div class="fixed inset-0 opacity-30 pointer-events-none z-0" style="background-image: url('https://www.transparenttextures.com/patterns/stardust.png');" aria-hidden="true"></div> <div class="relative z-10 flex flex-col min-h-full"> ${renderComponent($$result, "Nav", Nav, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/app/src/components/Nav", "client:component-export": "default" })} ${renderSlot($$result, $$slots["default"])} <footer class="relative w-full px-6 pt-32 pb-16"> <div class="max-w-7xl mx-auto border-t border-white/10 pt-16 flex flex-col items-center space-y-8"> <div class="text-2xl font-black text-white font-['Plus_Jakarta_Sans'] tracking-tighter">
AUSTIN<span class="bg-clip-text text-transparent bg-gradient-to-r from-[#00F2FF] to-[#7000FF]">REHORN</span> </div> <p class="text-gray-600 font-medium text-[10px] uppercase tracking-[0.5em] text-center max-w-sm leading-loose">
© ${(/* @__PURE__ */ new Date()).getFullYear()} Austin Rehorn. <span class="text-gray-400">Forged in the heart of the digital nebula.</span> </p> </div> </footer> </div> </body></html>`;
}, "/app/src/layouts/Layout.astro", void 0);

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID || "h0f14hm4";
const dataset = process.env.PUBLIC_SANITY_DATASET || "production";
const builder = imageUrlBuilder({ projectId, dataset });
function imageUrl(source, opts = {}) {
  if (!source) return "";
  let b = builder.image(source).auto("format").fit("max");
  if (opts.width) b = b.width(opts.width);
  if (opts.height) b = b.height(opts.height);
  if (opts.quality) b = b.quality(opts.quality);
  return b.url();
}

const HERO_QUERY = (
  /* groq */
  `
  *[_type == "hero"][0]{
    badgeText,
    headline,
    subheading,
    ctaText,
    "headshot": headshot,
    "headshotAlt": headshot.alt,
    "resumeUrl": resume.asset->url
  }
`
);
const ABOUT_QUERY = (
  /* groq */
  `
  *[_type == "about"][0]{
    heading,
    bioParagraph1,
    bioParagraph2,
    quote,
    closingStatement,
    "photo": photo,
    "photoAlt": photo.alt
  }
`
);
const ABOUT_STATS_QUERY = (
  /* groq */
  `
  *[_type == "statItem" && section == "about"] | order(order asc, _createdAt asc){
    _id, value, label
  }
`
);
const EXPERIENCE_STATS_QUERY = (
  /* groq */
  `
  *[_type == "statItem" && section == "experience"] | order(order asc, _createdAt asc){
    _id, value, label
  }
`
);
const PERSONALITY_CARDS_QUERY = (
  /* groq */
  `
  *[_type == "personalityCard"] | order(order asc, _createdAt asc){
    _id, title, description, icon, accentColor
  }
`
);
const OFF_CLOCK_NOTES_QUERY = (
  /* groq */
  `
  *[_type == "offClockNote"] | order(order asc, _createdAt asc){
    _id, label, value
  }
`
);
const SERVICE_COLUMNS_QUERY = (
  /* groq */
  `
  *[_type == "serviceColumn"] | order(order asc, _createdAt asc){
    _id, title, bullets, iconType
  }
`
);
const PROJECTS_QUERY = (
  /* groq */
  `
  *[_type == "projectItem"] | order(order asc, _createdAt asc){
    _id, title, description, tags, href
  }
`
);
const EXPERIENCE_QUERY = (
  /* groq */
  `
  *[_type == "experience"][0]{
    sectionHeading,
    sectionSubheading,
    ctaHeading,
    ctaSubheading,
    "headshot": headshot,
    "headshotAlt": headshot.alt
  }
`
);
const EXPERIENCE_ROLES_QUERY = (
  /* groq */
  `
  *[_type == "experienceRole"] | order(order asc, _createdAt asc){
    _id, title, company, division, dates, era, side, iconType, highlights
  }
`
);
const CONNECT_QUERY = (
  /* groq */
  `
  *[_type == "connect"][0]{
    quote,
    "photo": photo,
    "photoAlt": photo.alt
  }
`
);
const CONTACT_ITEMS_QUERY = (
  /* groq */
  `
  *[_type == "contactItem"] | order(order asc, _createdAt asc){
    _id, label, value, href, iconType
  }
`
);
const BLOG_LIST_QUERY = (
  /* groq */
  `
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
`
);
const BLOG_POST_QUERY = (
  /* groq */
  `
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
`
);

export { $$Layout as $, ABOUT_QUERY as A, BLOG_POST_QUERY as B, CONNECT_QUERY as C, EXPERIENCE_QUERY as E, HERO_QUERY as H, OFF_CLOCK_NOTES_QUERY as O, PERSONALITY_CARDS_QUERY as P, SERVICE_COLUMNS_QUERY as S, BLOG_LIST_QUERY as a, ABOUT_STATS_QUERY as b, PROJECTS_QUERY as c, EXPERIENCE_ROLES_QUERY as d, EXPERIENCE_STATS_QUERY as e, CONTACT_ITEMS_QUERY as f, imageUrl as i };
