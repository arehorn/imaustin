import { defineField, defineType } from "sanity";

export const about = defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({ name: "bioParagraph1", title: "Bio paragraph 1", type: "text", rows: 4 }),
    defineField({ name: "bioParagraph2", title: "Bio paragraph 2", type: "text", rows: 4 }),
    defineField({ name: "quote", title: "Quote", type: "text", rows: 2 }),
    defineField({ name: "closingStatement", title: "Closing statement", type: "text", rows: 2 }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt text", type: "string" }],
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare: ({ title }) => ({ title: title || "About" }),
  },
});
