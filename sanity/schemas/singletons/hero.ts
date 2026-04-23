import { defineField, defineType } from "sanity";

export const hero = defineType({
  name: "hero",
  title: "Hero",
  type: "document",
  fields: [
    defineField({ name: "badgeText", title: "Badge text", type: "string" }),
    defineField({ name: "headline", title: "Headline", type: "string", validation: (r) => r.required() }),
    defineField({ name: "subheading", title: "Subheading", type: "text", rows: 3 }),
    defineField({ name: "ctaText", title: "CTA text", type: "string" }),
    defineField({
      name: "headshot",
      title: "Headshot",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt text", type: "string" }],
    }),
    defineField({
      name: "resume",
      title: "Resume file",
      type: "file",
      description: "PDF linked from the hero CTA",
    }),
  ],
  preview: {
    select: { title: "headline" },
    prepare: ({ title }) => ({ title: title || "Hero" }),
  },
});
