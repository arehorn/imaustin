import { s as sanityClient } from './page-ssr_DrMGQT2P.mjs';
import { c as createComponent } from './astro-component_MJogN64W.mjs';
import 'piccolore';
import { m as maybeRenderHead, h as addAttribute, r as renderTemplate, l as renderComponent } from './entrypoint_BgQT3pYz.mjs';
import { H as HERO_QUERY, A as ABOUT_QUERY, b as ABOUT_STATS_QUERY, P as PERSONALITY_CARDS_QUERY, O as OFF_CLOCK_NOTES_QUERY, S as SERVICE_COLUMNS_QUERY, c as PROJECTS_QUERY, E as EXPERIENCE_QUERY, d as EXPERIENCE_ROLES_QUERY, e as EXPERIENCE_STATS_QUERY, C as CONNECT_QUERY, f as CONTACT_ITEMS_QUERY, i as imageUrl, $ as $$Layout } from './queries_B-YxNUmp.mjs';
import 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Hero;
  const { hero } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="hero" class="relative pt-40 pb-24 overflow-hidden"> <div class="max-w-7xl mx-auto px-6"> <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">  <div class="lg:col-span-7 space-y-10"> <div class="space-y-6"> <span class="inline-block px-4 py-1 rounded-full border border-[#7000FF]/30 bg-[#7000FF]/10 text-[#00F2FF] text-xs uppercase tracking-[0.3em] font-bold animate-fade-in-up"> ${hero.badge_text} </span> <h1 class="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold font-['Plus_Jakarta_Sans'] leading-[1.05] tracking-tighter text-white animate-fade-in-up animation-delay-100"> <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#00F2FF] to-[#7000FF]">${hero.headline}</span> </h1> </div> <p class="text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-200"> ${hero.subheading} </p> <div class="flex flex-wrap gap-4 pt-2 animate-fade-in-up animation-delay-300"> <a href="#work" class="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#7000FF] to-[#00F2FF] text-white font-black tracking-wide hover:brightness-110 transition-all transform hover:-translate-y-1 shadow-[0_0_30px_rgba(112,0,255,0.4)]">
See My Work
</a> <a href="#connect" class="px-8 py-4 rounded-2xl glass-card text-white font-bold tracking-wide hover:bg-white/10 transition-all">
Let&apos;s Connect
</a> ${hero.resume_file_url && renderTemplate`<a${addAttribute(hero.resume_url, "href")} download class="px-8 py-4 rounded-2xl glass-card text-white font-bold tracking-wide hover:bg-white/10 transition-all inline-flex items-center gap-3 group"> <span class="material-symbols-outlined group-hover:translate-y-1 transition-transform text-[#00F2FF]">download</span>
Download CV
</a>`} </div> <p class="text-sm text-gray-500 uppercase tracking-[0.3em] animate-fade-in-up animation-delay-400"> ${hero.cta_text} </p> </div>  <div class="lg:col-span-5 flex justify-center lg:justify-end"> <div class="relative w-full aspect-[4/5] max-w-md p-2 rounded-[2rem] glass-card rotate-3 hover:rotate-0 transition-transform duration-700 shadow-[0_0_50px_rgba(112,0,255,0.2)] group animate-float"> <div class="absolute -inset-4 bg-gradient-to-tr from-[#7000FF] to-[#00F2FF] opacity-20 blur-3xl group-hover:opacity-40 transition-opacity" aria-hidden="true"></div> <img${addAttribute(hero.headshot_url, "src")}${addAttribute(hero.headshot_alt || "Austin Rehorn", "alt")} width="480" height="600" class="relative w-full h-full object-cover object-top rounded-[1.8rem] brightness-90 contrast-110" loading="eager"> </div> </div> </div> </div> </section>`;
}, "/app/src/components/Hero.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$About;
  const { about, stats, personalityCards, offClockNotes } = Astro2.props;
  const PERSONALITY_ICON_MAP = {
    heart: {
      iconPath: "M12 21c4.97-4.058 8-7.71 8-11a8 8 0 10-16 0c0 3.29 3.03 6.942 8 11zm0-8.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
      glow: "glow-cyan",
      color: "#00F2FF"
    },
    dog: {
      iconPath: "M8 11V8a4 4 0 118 0v3m-8 0a3 3 0 00-3 3v1a2 2 0 002 2h10a2 2 0 002-2v-1a3 3 0 00-3-3m-8 0h8",
      glow: "glow-purple",
      color: "#7000FF"
    },
    brain: {
      iconPath: "M9 18h6M10 22h4M12 2a7 7 0 00-4 12.75c.64.56 1 1.38 1 2.23V17h6v-.02c0-.85.36-1.67 1-2.23A7 7 0 0012 2z",
      glow: "glow-cyan",
      color: "#00F2FF"
    },
    code: {
      iconPath: "M10.5 6h3m-7 5.5h11m-9 4h7M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z",
      glow: "glow-purple",
      color: "#7000FF"
    },
    star: {
      iconPath: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
      glow: "glow-cyan",
      color: "#00F2FF"
    }
  };
  const STAT_GLOWS = ["glow-cyan", "glow-purple"];
  const STAT_LABEL_COLORS = ["text-[#00F2FF]", "text-[#7000FF]"];
  return renderTemplate`${maybeRenderHead()}<section id="about" class="relative py-28 overflow-hidden"> <div class="max-w-7xl mx-auto px-6"> <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 border-l-4 border-[#7000FF] pl-8 mb-16"> <div class="space-y-4"> <span class="text-[#7000FF] font-bold uppercase tracking-[0.4em] text-xs">About</span> <h2 class="text-4xl lg:text-5xl font-extrabold font-['Plus_Jakarta_Sans'] text-white tracking-tighter">
Sales instincts. Builder energy.
</h2> </div> </div> <div class="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start mb-16">  <article class="relative rounded-[2.5rem] p-10 md:p-12 glass-card overflow-hidden"> <div class="absolute -top-20 -left-14 w-64 h-64 bg-[#7000FF]/20 blur-[100px] rounded-full pointer-events-none" aria-hidden="true"></div> <div class="absolute -bottom-20 right-0 w-64 h-64 bg-[#00F2FF]/15 blur-[100px] rounded-full pointer-events-none" aria-hidden="true"></div> <div class="relative max-w-2xl"> <h2 class="font-['Plus_Jakarta_Sans'] font-extrabold text-3xl md:text-4xl leading-tight tracking-tighter mb-6 text-white"> ${about.heading} </h2> <p class="text-lg leading-relaxed mb-5 text-gray-300">${about.bio_paragraph_1}</p> <p class="text-lg leading-relaxed mb-8 text-gray-400">${about.bio_paragraph_2}</p> <div class="rounded-2xl p-6 md:p-7 glass-inset border border-white/5"> <div class="flex gap-4 items-start"> <svg class="w-8 h-8 shrink-0 mt-1 glow-cyan" fill="none" stroke="#00F2FF" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M9 11H5a2 2 0 01-2-2V7a4 4 0 014-4h1v8zm10 0h-4V3h1a4 4 0 014 4v2a2 2 0 01-2 2z"></path> </svg> <p class="text-lg leading-relaxed text-gray-200 italic">${about.quote}</p> </div> </div> </div> </article>  <div class="space-y-6">  <aside class="rounded-[2rem] p-6 glass-card"> <div class="flex items-start justify-between gap-4 mb-4"> <div> <p class="text-xs font-bold tracking-[0.3em] uppercase mb-2 text-[#00F2FF]">
Small proof of life
</p> <p class="text-sm leading-relaxed max-w-xs text-gray-400">
Me and Barkley, in a format that feels a little more like a note pinned to the page.
</p> </div> </div> <div class="relative max-w-[260px] mx-auto rotate-[3deg] hover:rotate-0 transition-transform duration-700 group"> <div class="absolute -inset-3 bg-gradient-to-tr from-[#7000FF] to-[#00F2FF] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity" aria-hidden="true"></div> <div class="relative rounded-[24px] overflow-hidden p-2 glass-card"> <img${addAttribute(about.photo_url, "src")}${addAttribute(about.photo_alt || "Austin with Barkley", "alt")} width="512" height="768" class="w-full h-auto object-cover rounded-[18px] brightness-90 contrast-110"> </div> </div> </aside>  <aside class="rounded-[2rem] p-8 glass-card"> <p class="text-xs font-bold tracking-[0.3em] uppercase mb-5 text-[#7000FF]">
Off the clock
</p> <ul class="space-y-5"> ${offClockNotes.map((note) => renderTemplate`<li> <p class="font-['Plus_Jakarta_Sans'] font-bold text-sm uppercase tracking-[0.18em] mb-1 text-white"> ${note.label} </p> <p class="leading-relaxed text-gray-400">${note.value}</p> </li>`)} </ul> </aside>  <aside class="rounded-[2rem] p-8 glass-inset border border-white/5"> <p class="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-[#00F2FF]">
What people usually notice
</p> <p class="leading-relaxed text-gray-200">${about.closing_statement}</p> </aside> </div> </div>  <div class="relative rounded-[3rem] p-10 md:p-12 mb-16 glass-card overflow-hidden"> <div class="absolute -top-20 left-20 w-96 h-96 bg-[#00F2FF]/10 blur-[120px] rounded-full pointer-events-none" aria-hidden="true"></div> <div class="absolute -bottom-20 right-10 w-96 h-96 bg-[#7000FF]/10 blur-[120px] rounded-full pointer-events-none" aria-hidden="true"></div> <div class="relative flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10"> <div> <p class="text-xs font-bold tracking-[0.4em] uppercase mb-3 text-[#7000FF]">
Things I Love
</p> <h3 class="font-['Plus_Jakarta_Sans'] font-extrabold text-2xl md:text-3xl tracking-tighter text-white">
The personal details behind the operating system
</h3> </div> </div> <div class="relative grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"> ${personalityCards.map((card) => {
    const iconDef = PERSONALITY_ICON_MAP[card.icon] ?? PERSONALITY_ICON_MAP.star;
    return renderTemplate`<article class="staggered-item rounded-[2rem] p-7 glass-card hover:-translate-y-4 transition-all duration-500"> <div class="w-16 h-16 rounded-2xl glass-inset border border-white/5 flex items-center justify-center mb-5"> <svg${addAttribute(`w-7 h-7 ${iconDef.glow}`, "class")} fill="none"${addAttribute(iconDef.color, "stroke")} viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"${addAttribute(iconDef.iconPath, "d")}></path> </svg> </div> <h4 class="font-['Plus_Jakarta_Sans'] font-bold text-lg mb-2 text-white">${card.title}</h4> <p class="text-sm leading-relaxed text-gray-400">${card.description}</p> </article>`;
  })} </div> </div>  <div class="grid grid-cols-1 sm:grid-cols-3 gap-6"> ${stats.map((stat, i) => {
    const glow = STAT_GLOWS[i % STAT_GLOWS.length];
    const labelColor = STAT_LABEL_COLORS[i % STAT_LABEL_COLORS.length];
    return renderTemplate`<div class="rounded-[2.5rem] p-10 glass-card"> <p${addAttribute(`font-['Plus_Jakarta_Sans'] font-black text-6xl leading-none tracking-tighter mb-4 text-white ${glow}`, "class")}> ${stat.value} </p> <p${addAttribute(`text-xs font-bold uppercase tracking-[0.3em] leading-snug ${labelColor}`, "class")}> ${stat.label} </p> </div>`;
  })} </div> </div> </section>`;
}, "/app/src/components/About.astro", void 0);

const $$WhatIDo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$WhatIDo;
  const { columns } = Astro2.props;
  const COLUMN_ICON_PATHS = {
    people: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    lightbulb: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
  };
  const GLOW_CYCLE = ["glow-cyan", "glow-purple"];
  const STROKE_CYCLE = ["#00F2FF", "#7000FF"];
  const HOVER_BORDER_CYCLE = ["hover:border-[#00F2FF]/50", "hover:border-[#7000FF]/50"];
  return renderTemplate`${maybeRenderHead()}<section id="what-i-do" class="relative py-28"> <div class="max-w-7xl mx-auto px-6"> <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 border-l-4 border-[#00F2FF] pl-8 mb-20"> <div class="space-y-4"> <span class="text-[#00F2FF] font-bold uppercase tracking-[0.4em] text-xs">What I Do</span> <h2 class="text-4xl lg:text-5xl font-extrabold font-['Plus_Jakarta_Sans'] text-white tracking-tighter">
Strategic Specializations
</h2> </div> <p class="text-gray-500 max-w-md italic text-lg">
Precision-engineered processes designed for the next era of enterprise operations.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-6"> ${columns.map((col, i) => {
    const iconPath = COLUMN_ICON_PATHS[col.icon_type] ?? COLUMN_ICON_PATHS.people;
    const bullets = col.bullets.split("\n").filter(Boolean);
    const glow = GLOW_CYCLE[i % GLOW_CYCLE.length];
    const stroke = STROKE_CYCLE[i % STROKE_CYCLE.length];
    const hoverBorder = HOVER_BORDER_CYCLE[i % HOVER_BORDER_CYCLE.length];
    return renderTemplate`<div${addAttribute(`staggered-item p-10 rounded-[2.5rem] glass-card flex flex-col group hover:-translate-y-4 transition-all duration-500 ${hoverBorder} relative`, "class")}> <div class="w-20 h-20 rounded-3xl glass-inset flex items-center justify-center mb-8 border border-white/5"> <svg${addAttribute(`w-9 h-9 ${glow}`, "class")} fill="none"${addAttribute(stroke, "stroke")} viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"${addAttribute(iconPath, "d")}></path> </svg> </div> <h3 class="text-2xl font-bold font-['Plus_Jakarta_Sans'] text-white leading-tight mb-5"> ${col.title} </h3> <ul class="space-y-4"> ${bullets.map((bullet) => renderTemplate`<li class="flex gap-3 text-base leading-relaxed text-gray-400"> <span class="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-[#00F2FF]" style="box-shadow: 0 0 8px rgba(0,242,255,0.6);"></span> ${bullet} </li>`)} </ul> </div>`;
  })} </div> </div> </section>`;
}, "/app/src/components/WhatIDo.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Projects;
  const { projects } = Astro2.props;
  const ACCENT_CYCLE = [
    { from: "#00F2FF", to: "#7000FF", border: "hover:border-[#00F2FF]/50" },
    { from: "#7000FF", to: "#00F2FF", border: "hover:border-[#7000FF]/50" }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="work" class="relative py-28"> <div class="max-w-7xl mx-auto px-6"> <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 border-l-4 border-[#00F2FF] pl-8 mb-20"> <div class="space-y-4"> <span class="text-[#00F2FF] font-bold uppercase tracking-[0.4em] text-xs">Featured Work</span> <h2 class="text-4xl lg:text-5xl font-extrabold font-['Plus_Jakarta_Sans'] text-white tracking-tighter">
Signal in the noise.
</h2> </div> <p class="text-gray-500 max-w-md italic text-lg">
Projects where strategy met shipping.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-6"> ${projects.map((project, i) => {
    const accent = ACCENT_CYCLE[i % ACCENT_CYCLE.length];
    return renderTemplate`<div${addAttribute(`staggered-item rounded-[2.5rem] p-10 glass-card flex flex-col group hover:-translate-y-4 transition-all duration-500 ${accent.border}`, "class")}> <div class="w-16 h-1.5 rounded-full mb-8"${addAttribute(`background: linear-gradient(90deg, ${accent.from}, ${accent.to}); box-shadow: 0 0 15px ${accent.from}80;`, "style")}></div> <h3 class="font-['Plus_Jakarta_Sans'] font-bold text-2xl mb-4 tracking-tighter text-white leading-tight"> ${project.title} </h3> <p class="text-base leading-relaxed mb-8 flex-1 text-gray-400"> ${project.description} </p> <div class="flex flex-wrap gap-2"> ${project.tags.map((tag) => renderTemplate`<span class="tag-pill px-3 py-1.5 text-xs font-medium uppercase tracking-wider"> ${tag} </span>`)} </div> </div>`;
  })} </div> </div> </section>`;
}, "/app/src/components/Projects.astro", void 0);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Experience;
  const {
    sectionHeading,
    sectionSubheading,
    roles,
    stats,
    ctaHeading,
    ctaSubheading,
    headshotUrl,
    headshotAlt
  } = Astro2.props;
  const EXPERIENCE_ICON_PATHS = {
    search: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
    team: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    settings: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    briefcase: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 00-2 2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  };
  const ICON_ACCENTS = [
    { stroke: "#00F2FF", glow: "glow-cyan" },
    { stroke: "#7000FF", glow: "glow-purple" }
  ];
  function roleCard(role, accentIndex) {
    const accent = ICON_ACCENTS[accentIndex % ICON_ACCENTS.length];
    return { accent };
  }
  return renderTemplate`${maybeRenderHead()}<section id="experience" class="relative py-28"> <div class="max-w-7xl mx-auto px-6"> <!-- Header --> <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20 border-l-4 border-[#7000FF] pl-8"> <div class="max-w-xl space-y-4"> <span class="text-[#7000FF] font-bold uppercase tracking-[0.4em] text-xs">Experience</span> <h2 class="font-['Plus_Jakarta_Sans'] font-extrabold text-4xl lg:text-6xl leading-[1.05] tracking-tighter text-white"> ${sectionHeading} </h2> <p class="text-base leading-relaxed max-w-sm text-gray-400">${sectionSubheading}</p> </div> <div class="flex flex-wrap gap-4 shrink-0"> ${stats.map((stat, i) => {
    const glow = i % 2 === 0 ? "glow-cyan" : "glow-purple";
    const labelColor = i % 2 === 0 ? "text-[#00F2FF]" : "text-[#7000FF]";
    return renderTemplate`<div class="rounded-[1.5rem] px-6 py-5 text-center glass-card"> <p${addAttribute(`font-['Plus_Jakarta_Sans'] font-black text-3xl leading-none mb-2 text-white ${glow}`, "class")}>${stat.value}</p> <p${addAttribute(`text-[10px] font-bold tracking-[0.25em] uppercase leading-snug ${labelColor}`, "class")}>${stat.label}</p> </div>`;
  })} </div> </div> <!-- Timeline (desktop) --> <div class="hidden lg:block relative"> <div class="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px" style="background: linear-gradient(to bottom, transparent, rgba(0,242,255,0.3) 10%, rgba(112,0,255,0.3) 90%, transparent)"></div> <div class="space-y-14"> ${roles.map((role, i) => {
    const { accent } = roleCard(role, i);
    return renderTemplate`<div class="relative grid grid-cols-[1fr_48px_1fr] items-center"> ${role.side === "left" ? renderTemplate`<div class="pr-8"> <div class="rounded-[2rem] p-8 glass-card hover:-translate-y-1 transition-transform duration-500"> <div class="flex items-start gap-4 mb-4"> <div class="shrink-0 w-14 h-14 rounded-2xl glass-inset border border-white/5 flex items-center justify-center"> <svg${addAttribute(`w-6 h-6 ${accent.glow}`, "class")} fill="none"${addAttribute(accent.stroke, "stroke")} viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"${addAttribute(EXPERIENCE_ICON_PATHS[role.icon_type] ?? EXPERIENCE_ICON_PATHS.briefcase, "d")}></path> </svg> </div> <div class="min-w-0"> <p class="font-['Plus_Jakarta_Sans'] font-bold text-lg leading-snug text-white">${role.company}</p> <p class="text-xs font-bold tracking-[0.22em] uppercase mt-1 text-[#00F2FF]">${role.title}</p> </div> </div> <p class="text-sm leading-relaxed text-gray-400">${role.highlights}</p> <div class="mt-5 flex flex-wrap items-center gap-2"> <span class="tag-pill text-xs font-medium px-3 py-1 uppercase tracking-wider"> ${role.dates} </span> <span class="text-xs text-gray-500">${role.division}</span> </div> </div> </div>` : renderTemplate`<div class="pr-8 flex justify-end items-center"> ${role.era && renderTemplate`<span class="font-['Plus_Jakarta_Sans'] font-black text-5xl tracking-tighter select-none bg-clip-text text-transparent bg-gradient-to-r from-[#00F2FF]/20 to-[#7000FF]/20"> ${role.era} </span>`} </div>`} <div class="flex items-center justify-center relative z-10"> <div class="w-4 h-4 rounded-full bg-[#0A0B10]" style="box-shadow: 0 0 0 3px rgba(0,242,255,0.4), 0 0 16px rgba(112,0,255,0.5);"></div> </div> ${role.side === "right" ? renderTemplate`<div class="pl-8"> <div class="rounded-[2rem] p-8 glass-card hover:-translate-y-1 transition-transform duration-500"> <div class="flex items-start gap-4 mb-4"> <div class="shrink-0 w-14 h-14 rounded-2xl glass-inset border border-white/5 flex items-center justify-center"> <svg${addAttribute(`w-6 h-6 ${accent.glow}`, "class")} fill="none"${addAttribute(accent.stroke, "stroke")} viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"${addAttribute(EXPERIENCE_ICON_PATHS[role.icon_type] ?? EXPERIENCE_ICON_PATHS.briefcase, "d")}></path> </svg> </div> <div class="min-w-0"> <p class="font-['Plus_Jakarta_Sans'] font-bold text-lg leading-snug text-white">${role.company}</p> <p class="text-xs font-bold tracking-[0.22em] uppercase mt-1 text-[#7000FF]">${role.title}</p> </div> </div> <p class="text-sm leading-relaxed text-gray-400">${role.highlights}</p> <div class="mt-5 flex flex-wrap items-center gap-2"> <span class="tag-pill text-xs font-medium px-3 py-1 uppercase tracking-wider"> ${role.dates} </span> <span class="text-xs text-gray-500">${role.division}</span> </div> </div> </div>` : renderTemplate`<div class="pl-8 flex items-center"> ${role.era && renderTemplate`<span class="font-['Plus_Jakarta_Sans'] font-black text-5xl tracking-tighter select-none bg-clip-text text-transparent bg-gradient-to-r from-[#7000FF]/20 to-[#00F2FF]/20"> ${role.era} </span>`} </div>`} </div>`;
  })} </div> </div> <!-- Timeline (mobile stacked) --> <div class="lg:hidden space-y-5"> ${roles.map((role, i) => {
    const accent = ICON_ACCENTS[i % ICON_ACCENTS.length];
    return renderTemplate`<div class="rounded-[2rem] p-6 glass-card"> <div class="flex items-start gap-4 mb-4"> <div class="shrink-0 w-12 h-12 rounded-2xl glass-inset border border-white/5 flex items-center justify-center"> <svg${addAttribute(`w-6 h-6 ${accent.glow}`, "class")} fill="none"${addAttribute(accent.stroke, "stroke")} viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"${addAttribute(EXPERIENCE_ICON_PATHS[role.icon_type] ?? EXPERIENCE_ICON_PATHS.briefcase, "d")}></path> </svg> </div> <div class="min-w-0"> <p class="font-['Plus_Jakarta_Sans'] font-bold text-base leading-snug text-white">${role.company}</p> <p class="text-xs font-bold tracking-[0.22em] uppercase mt-1 text-[#00F2FF]">${role.title}</p> </div> </div> <p class="text-sm leading-relaxed text-gray-400">${role.highlights}</p> <div class="mt-4 flex flex-wrap items-center gap-2"> <span class="tag-pill text-xs font-medium px-3 py-1 uppercase tracking-wider"> ${role.dates} </span> <span class="text-xs text-gray-500">${role.division}</span> </div> </div>`;
  })} </div> <!-- CTA Banner --> <div class="mt-20 rounded-[3rem] glass-card overflow-hidden relative"> <div class="absolute -right-20 -top-20 w-96 h-96 bg-[#7000FF]/20 blur-[120px] rounded-full pointer-events-none" aria-hidden="true"></div> <div class="absolute -left-20 -bottom-20 w-96 h-96 bg-[#00F2FF]/15 blur-[120px] rounded-full pointer-events-none" aria-hidden="true"></div> <div class="relative grid grid-cols-1 lg:grid-cols-[1fr_auto] items-stretch"> <div class="p-10 lg:p-14"> <h3 class="font-['Plus_Jakarta_Sans'] font-black text-3xl lg:text-5xl leading-[1.05] tracking-tighter mb-6 text-white"> ${ctaHeading} </h3> <p class="text-base leading-relaxed mb-8 max-w-md text-gray-400">${ctaSubheading}</p> <div class="flex flex-wrap gap-4"> <a href="#connect" class="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#7000FF] to-[#00F2FF] text-white font-black shadow-[0_0_30px_rgba(112,0,255,0.4)] hover:brightness-110 transition-all transform hover:-translate-y-1"> <span class="material-symbols-outlined">send</span>
Get In Touch
</a> </div> </div> ${headshotUrl && renderTemplate`<div class="hidden lg:block relative w-56 m-6 rounded-[1.8rem] overflow-hidden glass-card p-2"> <img${addAttribute(headshotUrl, "src")}${addAttribute(headshotAlt || "Austin Rehorn", "alt")} class="w-full h-full object-cover object-top rounded-[1.4rem]" style="filter: grayscale(60%) contrast(1.15) brightness(0.8);"> </div>`} </div> </div> </div> </section>`;
}, "/app/src/components/Experience.astro", void 0);

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState("idle");
  async function handleSubmit(e) {
    e.preventDefault();
    setFormState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      });
      if (res.ok) {
        setFormState("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }
  const inputClass = "w-full rounded-2xl px-5 py-4 text-sm outline-none transition-all duration-300 glass-inset border border-white/10 text-white placeholder:text-gray-500 focus:border-[#00F2FF]/50 focus:ring-2 focus:ring-[#00F2FF]/30";
  return /* @__PURE__ */ jsxs("div", { className: "rounded-[3rem] p-10 md:p-14 glass-card relative overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute -right-20 -top-20 w-96 h-96 rounded-full pointer-events-none",
        style: { background: "rgba(112, 0, 255, 0.15)", filter: "blur(120px)" },
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ jsx("h3", { className: "relative font-['Plus_Jakarta_Sans'] font-black text-3xl md:text-4xl tracking-tighter mb-8 text-white", children: "Send a Message" }),
    formState === "success" ? /* @__PURE__ */ jsxs("div", { className: "relative rounded-2xl p-8 text-center glass-inset border border-white/10", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center glass-inset border border-white/10",
          style: { boxShadow: "0 0 24px rgba(0,242,255,0.3)" },
          children: /* @__PURE__ */ jsx("svg", { className: "w-8 h-8 glow-cyan", fill: "none", stroke: "#00F2FF", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) })
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "font-['Plus_Jakarta_Sans'] font-bold text-lg mb-2 text-white", children: "Message sent!" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400", children: "I'll get back to you as soon as I can." }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setFormState("idle"),
          className: "mt-6 px-6 py-2.5 rounded-full text-sm font-bold glass-card text-white hover:bg-white/10 transition-all",
          children: "Send another"
        }
      )
    ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, noValidate: true, className: "relative", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-[10px] font-bold tracking-[0.3em] uppercase mb-2 text-[#00F2FF]", htmlFor: "name", children: "Name" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "name",
              type: "text",
              required: true,
              placeholder: "Your name",
              value: name,
              onChange: (e) => setName(e.target.value),
              className: inputClass,
              style: { caretColor: "#00F2FF" }
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-[10px] font-bold tracking-[0.3em] uppercase mb-2 text-[#00F2FF]", htmlFor: "email", children: "Email" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "email",
              type: "email",
              required: true,
              placeholder: "your@email.com",
              value: email,
              onChange: (e) => setEmail(e.target.value),
              className: inputClass,
              style: { caretColor: "#00F2FF" }
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsx("label", { className: "block text-[10px] font-bold tracking-[0.3em] uppercase mb-2 text-[#7000FF]", htmlFor: "message", children: "Message" }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            id: "message",
            required: true,
            rows: 5,
            placeholder: "What's on your mind?",
            value: message,
            onChange: (e) => setMessage(e.target.value),
            className: `${inputClass} resize-none`,
            style: { caretColor: "#00F2FF" }
          }
        )
      ] }),
      formState === "error" && /* @__PURE__ */ jsx("p", { className: "text-sm mb-5 text-[#ff8080]", children: "Something went wrong. Try emailing me directly at rehorna1@gmail.com." }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          disabled: formState === "loading",
          className: "inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#7000FF] to-[#00F2FF] text-white font-black tracking-wide shadow-[0_0_30px_rgba(112,0,255,0.4)] hover:brightness-110 transition-all transform hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0",
          children: formState === "loading" ? "Sending…" : "Send Message"
        }
      )
    ] })
  ] });
}

const $$Connect = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Connect;
  const { connect, contactItems } = Astro2.props;
  const CONTACT_ICON_PATHS = {
    email: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    phone: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    linkedin: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z",
    location: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
  };
  const ACCENTS = [
    { stroke: "#00F2FF", glow: "glow-cyan" },
    { stroke: "#7000FF", glow: "glow-purple" }
  ];
  const quoteParts = connect.quote.split("—");
  const quoteMain = quoteParts[0];
  const quoteAccent = quoteParts[1]?.trim();
  return renderTemplate`${maybeRenderHead()}<section id="connect" class="relative py-28"> <div class="max-w-7xl mx-auto px-6"> <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 border-l-4 border-[#00F2FF] pl-8 mb-20"> <div class="space-y-4"> <span class="text-[#00F2FF] font-bold uppercase tracking-[0.4em] text-xs">Let&apos;s Connect</span> <h2 class="text-4xl lg:text-5xl font-extrabold font-['Plus_Jakarta_Sans'] text-white tracking-tighter">
Start a conversation.
</h2> </div> </div> <!-- Photo + quote banner --> <div class="rounded-[3rem] p-10 md:p-14 mb-10 glass-card flex flex-col md:flex-row gap-10 items-center relative overflow-hidden"> <div class="absolute -right-16 -top-16 w-72 h-72 bg-[#7000FF]/20 blur-[100px] rounded-full pointer-events-none" aria-hidden="true"></div> <div class="absolute -left-16 -bottom-16 w-72 h-72 bg-[#00F2FF]/15 blur-[100px] rounded-full pointer-events-none" aria-hidden="true"></div> <div class="shrink-0 relative"> <div class="absolute -inset-3 bg-gradient-to-tr from-[#7000FF] to-[#00F2FF] opacity-25 blur-2xl" aria-hidden="true"></div> <div class="relative rounded-[1.5rem] overflow-hidden glass-card p-2" style="width: 220px; height: 260px;"> <img${addAttribute(connect.photo_url, "src")}${addAttribute(connect.photo_alt || "Austin Rehorn", "alt")} width="220" height="260" class="w-full h-full object-cover object-top rounded-[1.2rem] brightness-90 contrast-110"> </div> </div> <p class="relative font-['Plus_Jakarta_Sans'] font-black text-2xl md:text-4xl leading-tight tracking-tighter text-white"> ${quoteMain}—${" "} <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#00F2FF] to-[#7000FF]">${quoteAccent}</span> </p> </div> <!-- Contact items grid --> <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10"> ${contactItems.map((item, i) => {
    const iconPath = CONTACT_ICON_PATHS[item.icon_type] ?? CONTACT_ICON_PATHS.email;
    const accent = ACCENTS[i % ACCENTS.length];
    return renderTemplate`<div class="rounded-[2rem] p-7 glass-card flex gap-5 items-center hover:-translate-y-1 transition-transform duration-500"> <div class="shrink-0 w-14 h-14 rounded-2xl glass-inset border border-white/5 flex items-center justify-center"> <svg${addAttribute(`w-6 h-6 ${accent.glow}`, "class")} fill="none"${addAttribute(accent.stroke, "stroke")} viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"${addAttribute(iconPath, "d")}></path> </svg> </div> <div class="min-w-0"> <p class="text-[10px] font-bold tracking-[0.3em] uppercase mb-2 text-gray-500">${item.label}</p> ${item.href ? renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(item.href.startsWith("http") ? "_blank" : void 0, "target")}${addAttribute(item.href.startsWith("http") ? "noopener noreferrer" : void 0, "rel")} class="font-['Plus_Jakarta_Sans'] font-bold text-sm truncate block text-white hover:text-[#00F2FF] transition-colors"> ${item.value} </a>` : renderTemplate`<p class="font-['Plus_Jakarta_Sans'] font-bold text-sm text-white">${item.value}</p>`} </div> </div>`;
  })} </div> <!-- Contact form (React island) --> ${renderComponent($$result, "ContactForm", ContactForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/app/src/components/ContactForm", "client:component-export": "default" })} </div> </section>`;
}, "/app/src/components/Connect.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const client = sanityClient;
  const [
    heroRaw,
    aboutRaw,
    aboutStatsRaw,
    personalityCardsRaw,
    offClockNotesRaw,
    serviceColumnsRaw,
    projectsRaw,
    experienceRaw,
    experienceRolesRaw,
    experienceStatsRaw,
    connectRaw,
    contactItemsRaw
  ] = await Promise.all([
    client.fetch(HERO_QUERY),
    client.fetch(ABOUT_QUERY),
    client.fetch(ABOUT_STATS_QUERY),
    client.fetch(PERSONALITY_CARDS_QUERY),
    client.fetch(OFF_CLOCK_NOTES_QUERY),
    client.fetch(SERVICE_COLUMNS_QUERY),
    client.fetch(PROJECTS_QUERY),
    client.fetch(EXPERIENCE_QUERY),
    client.fetch(EXPERIENCE_ROLES_QUERY),
    client.fetch(EXPERIENCE_STATS_QUERY),
    client.fetch(CONNECT_QUERY),
    client.fetch(CONTACT_ITEMS_QUERY)
  ]);
  const hero = {
    id: "hero",
    badge_text: heroRaw?.badgeText ?? "",
    headline: heroRaw?.headline ?? "",
    subheading: heroRaw?.subheading ?? "",
    cta_text: heroRaw?.ctaText ?? "",
    headshot_url: imageUrl(heroRaw?.headshot, { width: 1e3, quality: 85 }),
    headshot_alt: heroRaw?.headshotAlt ?? "",
    resume_url: heroRaw?.resumeUrl ?? ""
  };
  const about = {
    id: "about",
    heading: aboutRaw?.heading ?? "",
    bio_paragraph_1: aboutRaw?.bioParagraph1 ?? "",
    bio_paragraph_2: aboutRaw?.bioParagraph2 ?? "",
    quote: aboutRaw?.quote ?? "",
    closing_statement: aboutRaw?.closingStatement ?? "",
    photo_url: imageUrl(aboutRaw?.photo, { width: 800, quality: 85 }),
    photo_alt: aboutRaw?.photoAlt ?? ""
  };
  const aboutStats = (aboutStatsRaw ?? []).map((s) => ({
    id: s._id,
    value: s.value,
    label: s.label
  }));
  const personalityCards = (personalityCardsRaw ?? []).map((c) => ({
    id: c._id,
    title: c.title,
    description: c.description ?? "",
    icon: c.icon ?? "star",
    accent_color: c.accentColor ?? ""
  }));
  const offClockNotes = (offClockNotesRaw ?? []).map((n) => ({
    id: n._id,
    label: n.label,
    value: n.value
  }));
  const serviceColumns = (serviceColumnsRaw ?? []).map((c) => ({
    id: c._id,
    title: c.title,
    bullets: Array.isArray(c.bullets) ? c.bullets.join("\n") : c.bullets ?? "",
    icon_type: c.iconType ?? "people"
  }));
  const projects = (projectsRaw ?? []).map((p) => {
    let tags = [];
    if (Array.isArray(p.tags)) {
      tags = p.tags.map((t) => String(t).trim()).filter(Boolean);
    } else if (typeof p.tags === "string") {
      tags = p.tags.split(",").map((t) => t.trim()).filter(Boolean);
    }
    return {
      id: p._id,
      title: p.title,
      description: p.description ?? "",
      tags,
      href: p.href ?? ""
    };
  });
  const experienceRoles = (experienceRolesRaw ?? []).map((r) => ({
    id: r._id,
    title: r.title,
    company: r.company,
    division: r.division ?? "",
    dates: r.dates ?? "",
    era: r.era ?? "",
    side: r.side ?? "left",
    icon_type: r.iconType ?? "briefcase",
    highlights: Array.isArray(r.highlights) ? r.highlights.join("\n") : r.highlights ?? ""
  }));
  const experienceStats = (experienceStatsRaw ?? []).map((s) => ({
    id: s._id,
    value: s.value,
    label: s.label
  }));
  const experience = {
    section_heading: experienceRaw?.sectionHeading ?? "",
    section_subheading: experienceRaw?.sectionSubheading ?? "",
    cta_heading: experienceRaw?.ctaHeading ?? "",
    cta_subheading: experienceRaw?.ctaSubheading ?? "",
    headshot_url: imageUrl(experienceRaw?.headshot, { width: 800, quality: 85 }),
    headshot_alt: experienceRaw?.headshotAlt ?? ""
  };
  const contactItems = (contactItemsRaw ?? []).map((c) => ({
    id: c._id,
    label: c.label,
    value: c.value,
    href: c.href ?? "",
    icon_type: c.iconType ?? "email"
  }));
  const connect = {
    id: "connect",
    quote: connectRaw?.quote ?? "",
    photo_url: imageUrl(connectRaw?.photo, { width: 800, quality: 85 }),
    photo_alt: connectRaw?.photoAlt ?? "",
    contact_items: contactItems
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, { "hero": hero })} ${renderComponent($$result2, "About", $$About, { "about": about, "stats": aboutStats, "personalityCards": personalityCards, "offClockNotes": offClockNotes })} ${renderComponent($$result2, "WhatIDo", $$WhatIDo, { "columns": serviceColumns })} ${renderComponent($$result2, "Projects", $$Projects, { "projects": projects })} ${renderComponent($$result2, "Experience", $$Experience, { "sectionHeading": experience.section_heading, "sectionSubheading": experience.section_subheading, "roles": experienceRoles, "stats": experienceStats, "ctaHeading": experience.cta_heading, "ctaSubheading": experience.cta_subheading, "headshotUrl": experience.headshot_url, "headshotAlt": experience.headshot_alt })} ${renderComponent($$result2, "Connect", $$Connect, { "connect": connect, "contactItems": contactItems })} </main> ` })}`;
}, "/app/src/pages/index.astro", void 0);

const $$file = "/app/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
