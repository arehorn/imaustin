import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes, singletonTypes } from "./sanity/schemas";

// These must also be exposed in the Astro integration config in astro.config.mjs.
const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || process.env.PUBLIC_SANITY_PROJECT_ID || "h0f14hm4";
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || process.env.PUBLIC_SANITY_DATASET || "production";

if (!projectId) {
  // The Studio will run but cannot connect without a projectId. Surface the issue early.
  // eslint-disable-next-line no-console
  console.warn("[sanity.config] Missing PUBLIC_SANITY_PROJECT_ID — Studio will not connect until this is set.");
}

export default defineConfig({
  name: "imaustin",
  title: "imaustin.me",
  projectId: projectId ?? "",
  dataset,
  basePath: "/studio",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // Singletons — one document per type, no "new" button.
            S.listItem()
              .title("Hero")
              .id("hero")
              .child(S.document().schemaType("hero").documentId("hero")),
            S.listItem()
              .title("About")
              .id("about")
              .child(S.document().schemaType("about").documentId("about")),
            S.listItem()
              .title("Experience")
              .id("experience")
              .child(S.document().schemaType("experience").documentId("experience")),
            S.listItem()
              .title("Connect")
              .id("connect")
              .child(S.document().schemaType("connect").documentId("connect")),
            S.divider(),
            // Regular document lists.
            S.documentTypeListItem("personalityCard").title("Personality cards"),
            S.documentTypeListItem("offClockNote").title("Off-clock notes"),
            S.documentTypeListItem("statItem").title("Stats"),
            S.documentTypeListItem("serviceColumn").title("What I Do columns"),
            S.documentTypeListItem("projectItem").title("Projects"),
            S.documentTypeListItem("experienceRole").title("Experience roles"),
            S.documentTypeListItem("contactItem").title("Contact items"),
            S.divider(),
            S.documentTypeListItem("blogPost").title("Blog posts"),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    // Disable "new document" for singletons at root, template actions, etc.
    templates: (templates) => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    // Hide "duplicate" and "delete" on singletons.
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => !["duplicate", "delete", "unpublish"].includes(action ?? ""))
        : input,
  },
});
