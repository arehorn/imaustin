import { defineField, defineType } from "sanity";

export const connect = defineType({
  name: "connect",
  title: "Connect section",
  type: "document",
  fields: [
    defineField({ name: "quote", title: "Quote", type: "text", rows: 2 }),
  ],
  preview: {
    select: { title: "quote" },
    prepare: ({ title }) => ({ title: title ? `"${title.slice(0, 40)}…"` : "Connect" }),
  },
});
