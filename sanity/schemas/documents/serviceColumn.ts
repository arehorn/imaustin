import { defineField, defineType } from "sanity";

export const serviceColumn = defineType({
  name: "serviceColumn",
  title: "What I Do — column",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "bullets",
      title: "Bullets",
      type: "array",
      of: [{ type: "string" }],
      description: "Each bullet is one string.",
    }),
    defineField({
      name: "iconType",
      title: "Icon type",
      type: "string",
      options: {
        list: [
          { title: "People", value: "people" },
          { title: "Lightbulb", value: "lightbulb" },
        ],
        layout: "radio",
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: "order", title: "Sort order", type: "number" }),
  ],
  preview: { select: { title: "title", subtitle: "iconType" } },
});
