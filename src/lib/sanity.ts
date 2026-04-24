// src/lib/sanity.ts
// Helpers for Sanity in Astro pages and components.
//
// The Sanity client itself comes from the @sanity/astro integration via the
// `sanity:client` virtual module (import { sanityClient } from "sanity:client").
// This file exposes the image URL builder and a tiny type.
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const projectId =
  import.meta.env.PUBLIC_SANITY_PROJECT_ID ||
  process.env.PUBLIC_SANITY_PROJECT_ID ||
  "h0f14hm4";
const dataset =
  import.meta.env.PUBLIC_SANITY_DATASET ||
  process.env.PUBLIC_SANITY_DATASET ||
  "production";

const builder = imageUrlBuilder({ projectId, dataset });

/** Safe URL string for an image with optional dimensions. Returns empty string if no source. */
export function imageUrl(
  source: SanityImageSource | undefined | null,
  opts: { width?: number; height?: number; quality?: number } = {},
): string {
  if (!source) return "";
  let b = builder.image(source).auto("format").fit("max");
  if (opts.width) b = b.width(opts.width);
  if (opts.height) b = b.height(opts.height);
  if (opts.quality) b = b.quality(opts.quality);
  return b.url();
}

export type SanityImage = {
  asset?: { _ref?: string; _type?: string };
  alt?: string;
};
