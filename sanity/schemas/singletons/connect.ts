import { defineField, defineType } from "sanity";

export const connect = defineType({
  name: "connect",
  title: "Connect section",
  type: "document",
  fields: [
    defineField({ name: "quote", title: "Quote", type: "text", rows: 2 }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt text", type: "string" }],
    }),
  ],
  preview: {
    select: { title: "quote" },
    prepare: ({ title }) => ({ title: title ? `"${title.slice(0, 40)}…"` : "Connect" }),
  },
});
