import { s as sanityClient } from './page-ssr_DrMGQT2P.mjs';
import { c as createComponent } from './astro-component_Dqn_3KqG.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_BAiKasTW.mjs';
import { a as BLOG_LIST_QUERY, i as imageUrl, $ as $$Layout } from './queries_BxF3A8xG.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const client = sanityClient;
  const rawPosts = await client.fetch(BLOG_LIST_QUERY);
  const posts = (rawPosts ?? []).map((p) => ({
    id: p.slug,
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt ?? "",
    published_date: p.publishedDate ?? "",
    tags: Array.isArray(p.tags) ? p.tags.join(",") : "",
    cover_image_url: imageUrl(p.coverImage, { width: 800, quality: 85 }),
    cover_image_alt: p.coverImageAlt ?? p.title
  }));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Notes & Thinking — Austin Rehorn" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative min-h-screen pt-40 pb-20"> <div class="max-w-7xl mx-auto px-6"> <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 border-l-4 border-[#7000FF] pl-8 mb-16"> <div class="space-y-4"> <span class="text-[#7000FF] font-bold uppercase tracking-[0.4em] text-xs">Writing</span> <h1 class="font-['Plus_Jakarta_Sans'] font-extrabold text-5xl lg:text-7xl leading-[1.05] tracking-tighter text-white">
Notes &amp; <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#00F2FF] to-[#7000FF]">Thinking</span>.
</h1> </div> </div> ${posts.length === 0 ? renderTemplate`<p class="text-gray-400 text-lg">Nothing published yet — check back soon.</p>` : renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${posts.map((post) => {
    const tags = post.tags ? [...new Set(post.tags.split(",").map((t) => t.trim()).filter(Boolean))] : [];
    return renderTemplate`<a${addAttribute(`/blog/${post.slug}`, "href")} class="rounded-[2.5rem] p-8 glass-card flex flex-col hover:-translate-y-2 transition-all duration-500 hover:border-[#00F2FF]/40 group"> ${post.cover_image_url && renderTemplate`<div class="relative w-full h-44 rounded-2xl overflow-hidden mb-6"> <div class="absolute inset-0 bg-gradient-to-br from-[#7000FF]/20 to-[#00F2FF]/20 opacity-60 group-hover:opacity-20 transition-opacity z-10 pointer-events-none"></div> <img${addAttribute(post.cover_image_url, "src")}${addAttribute(post.cover_image_alt || post.title, "alt")} class="w-full h-full object-cover brightness-90 contrast-110" loading="lazy"> </div>`} <div class="flex flex-wrap gap-2 mb-4"> ${tags.map((tag) => renderTemplate`<span class="tag-pill px-3 py-1 text-[10px] font-medium uppercase tracking-widest">${tag}</span>`)} </div> <h2 class="font-['Plus_Jakarta_Sans'] font-bold text-xl tracking-tighter mb-3 flex-1 text-white leading-tight"> ${post.title} </h2> ${post.excerpt && renderTemplate`<p class="text-gray-400 text-sm leading-relaxed mb-4">${post.excerpt}</p>`} ${post.published_date && renderTemplate`<p class="text-[10px] font-bold uppercase tracking-[0.3em] text-[#00F2FF] mt-auto"> ${new Date(post.published_date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    })} </p>`} </a>`;
  })} </div>`} </div> </main> ` })}`;
}, "/app/src/pages/blog/index.astro", void 0);

const $$file = "/app/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
