import { s as sanityClient } from './page-ssr_DrMGQT2P.mjs';
import { c as createComponent } from './astro-component_Chng-ls_.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_C9Yw3kBZ.mjs';
import { PortableText } from '@portabletext/react';
import { B as BLOG_POST_QUERY, i as imageUrl, $ as $$Layout } from './queries_BDuizlrt.mjs';

const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  if (!slug) return Astro2.redirect("/blog");
  const client = sanityClient;
  const post = await client.fetch(BLOG_POST_QUERY, { slug });
  if (!post) return Astro2.redirect("/blog");
  const tags = Array.isArray(post.tags) ? post.tags : [];
  const coverUrl = imageUrl(post.coverImage, { width: 1400, quality: 85 });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${post.title} — Austin Rehorn`, "description": post.excerpt }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative min-h-screen pt-40 pb-20"> <div class="max-w-3xl mx-auto px-6"> <a href="/blog" class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-gray-500 hover:text-[#00F2FF] transition-colors mb-12"> <span>←</span> <span>Back to Notes</span> </a> <div class="mb-12"> <div class="flex flex-wrap gap-2 mb-6"> ${tags.map((tag) => renderTemplate`<span class="tag-pill px-3 py-1 text-[10px] font-medium uppercase tracking-widest">${tag}</span>`)} </div> <h1 class="font-['Plus_Jakarta_Sans'] font-extrabold text-4xl lg:text-6xl leading-[1.05] tracking-tighter mb-6 text-white"> ${post.title} </h1> ${post.publishedDate && renderTemplate`<p class="text-[10px] font-bold uppercase tracking-[0.3em] text-[#00F2FF]">
Published ${new Date(post.publishedDate).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  })} </p>`} </div> ${coverUrl && renderTemplate`<div class="relative w-full h-96 rounded-[2rem] overflow-hidden mb-12 glass-card p-2"> <div class="absolute -inset-2 bg-gradient-to-tr from-[#7000FF]/30 to-[#00F2FF]/30 opacity-40 blur-2xl pointer-events-none" aria-hidden="true"></div> <img${addAttribute(coverUrl, "src")}${addAttribute(post.coverImageAlt || post.title, "alt")} class="relative w-full h-full object-cover rounded-[1.6rem] brightness-90 contrast-110"> </div>`} ${post.body && renderTemplate`<div class="prose-invert-custom prose-lg max-w-none mb-16 text-gray-300 leading-relaxed"> ${renderComponent($$result2, "PortableText", PortableText, { "value": post.body })} </div>`} <div class="pt-12 border-t border-white/10"> <a href="/blog" class="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card text-sm font-bold text-white hover:bg-white/10 transition-all"> <span>←</span> <span>Back to Notes</span> </a> </div> </div> </main> ` })}`;
}, "/app/src/pages/blog/[slug].astro", void 0);

const $$file = "/app/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
