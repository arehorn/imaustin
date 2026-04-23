import { defineField, defineType } from "sanity";

export const contactItem = defineType({
  name: "contactItem",
  title: "Contact item",
  type: "document",
  fields: [
    defineField({ name: "label", title: "Label", type: "string", validation: (r) => r.required() }),
    defineField({ name: "value", title: "Value", type: "string", validation: (r) => r.required() }),
    defineField({ name: "href", title: "Link", type: "string" }),
    defineField({
      name: "iconType",
      title: "Icon",
      type: "string",
      options: {
        list: [
          { title: "Email", value: "email" },
          { title: "Phone", value: "phone" },
          { title: "LinkedIn", value: "linkedin" },
          { title: "Location", value: "location" },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: "order", title: "Sort order", type: "number" }),
  ],
  preview: { select: { title: "label", subtitle: "value" } },
});
