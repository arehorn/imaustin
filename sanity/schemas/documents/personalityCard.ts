import { defineField, defineType } from "sanity";

export const personalityCard = defineType({
  name: "personalityCard",
  title: "Personality card",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: [
          { title: "Heart", value: "heart" },
          { title: "Dog", value: "dog" },
          { title: "Brain", value: "brain" },
          { title: "Code", value: "code" },
          { title: "Star", value: "star" },
        ],
      },
    }),
    defineField({ name: "accentColor", title: "Accent color (hex)", type: "string" }),
    defineField({ name: "order", title: "Sort order", type: "number" }),
  ],
  preview: { select: { title: "title", subtitle: "icon" } },
});
