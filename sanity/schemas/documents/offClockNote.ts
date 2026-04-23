import { defineField, defineType } from "sanity";

export const offClockNote = defineType({
  name: "offClockNote",
  title: "Off-clock note",
  type: "document",
  fields: [
    defineField({ name: "label", title: "Label", type: "string", validation: (r) => r.required() }),
    defineField({ name: "value", title: "Value", type: "string", validation: (r) => r.required() }),
    defineField({ name: "order", title: "Sort order", type: "number" }),
  ],
  preview: { select: { title: "label", subtitle: "value" } },
});
