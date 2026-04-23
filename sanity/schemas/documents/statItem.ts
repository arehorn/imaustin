import { defineField, defineType } from "sanity";

export const statItem = defineType({
  name: "statItem",
  title: "Stat",
  type: "document",
  fields: [
    defineField({ name: "value", title: "Value", type: "string", validation: (r) => r.required() }),
    defineField({ name: "label", title: "Label", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "section",
      title: "Which section",
      type: "string",
      options: {
        list: [
          { title: "About", value: "about" },
          { title: "Experience", value: "experience" },
        ],
        layout: "radio",
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: "order", title: "Sort order", type: "number" }),
  ],
  preview: {
    select: { value: "value", label: "label", section: "section" },
    prepare: ({ value, label, section }) => ({
      title: `${value} — ${label}`,
      subtitle: section,
    }),
  },
});
