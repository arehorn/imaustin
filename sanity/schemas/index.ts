import type { SchemaTypeDefinition } from "sanity";

import { hero } from "./singletons/hero";
import { connect } from "./singletons/connect";

import { projectItem } from "./documents/projectItem";
import { experienceRole } from "./documents/experienceRole";
import { contactItem } from "./documents/contactItem";
import { blogPost } from "./documents/blogPost";

export const schemaTypes: SchemaTypeDefinition[] = [
  // Singletons
  hero,
  connect,
  // Multi-doc
  projectItem,
  experienceRole,
  contactItem,
  blogPost,
];

export const singletonTypes = new Set(["hero", "connect"]);
