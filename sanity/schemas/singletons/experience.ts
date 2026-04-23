import { defineField, defineType } from "sanity";

export const experience = defineType({
  name: "experience",
  title: "Experience section",
  type: "document",
  fields: [
    defineField({ name: "sectionHeading", title: "Section heading", type: "string" }),
    defineField({ name: "sectionSubheading", title: "Section subheading", type: "text", rows: 2 }),
    defineField({ name: "ctaHeading", title: "CTA heading", type: "string" }),
    defineField({ name: "ctaSubheading", title: "CTA subheading", type: "text", rows: 2 }),
    defineField({
      name: "headshot",
      title: "Headshot",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt text", type: "string" }],
    }),
  ],
  preview: {
    select: { title: "sectionHeading" },
    prepare: ({ title }) => ({ title: title || "Experience" }),
  },
});
