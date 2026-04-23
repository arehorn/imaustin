import type { SchemaTypeDefinition } from "sanity";

import { hero } from "./singletons/hero";
import { about } from "./singletons/about";
import { experience } from "./singletons/experience";
import { connect } from "./singletons/connect";

import { statItem } from "./documents/statItem";
import { personalityCard } from "./documents/personalityCard";
import { offClockNote } from "./documents/offClockNote";
import { serviceColumn } from "./documents/serviceColumn";
import { projectItem } from "./documents/projectItem";
import { experienceRole } from "./documents/experienceRole";
import { contactItem } from "./documents/contactItem";
import { blogPost } from "./documents/blogPost";

export const schemaTypes: SchemaTypeDefinition[] = [
  // Singletons
  hero,
  about,
  experience,
  connect,
  // Multi-doc
  statItem,
  personalityCard,
  offClockNote,
  serviceColumn,
  projectItem,
  experienceRole,
  contactItem,
  blogPost,
];

export const singletonTypes = new Set(["hero", "about", "experience", "connect"]);
