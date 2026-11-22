import { defineField, defineType } from "sanity";

export const experienceRole = defineType({
  name: "experienceRole",
  title: "Experience role",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Job title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "company", title: "Company", type: "string", validation: (r) => r.required() }),
    defineField({ name: "division", title: "Division", type: "string" }),
    defineField({ name: "dates", title: "Dates", type: "string" }),
    defineField({
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "order", title: "Sort order", type: "number" }),
  ],
  preview: {
    select: { title: "title", subtitle: "company", dates: "dates" },
    prepare: ({ title, subtitle, dates }) => ({
      title: `${title} — ${subtitle}`,
      subtitle: dates,
    }),
  },
});
