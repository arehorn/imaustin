/**
 * Processes tags in a single pass to ensure they are unique, trimmed, and non-empty.
 * Handles both arrays and comma-separated strings.
 */
export function formatTags(tags: unknown): string[] {
  if (!tags) return [];

  let rawTags: any[];
  if (Array.isArray(tags)) {
    rawTags = tags;
  } else if (typeof tags === "string") {
    rawTags = tags.split(",");
  } else {
    return [];
  }

  const seen = new Set<string>();
  const result: string[] = [];

  for (let i = 0; i < rawTags.length; i++) {
    const tag = rawTags[i];
    if (typeof tag !== "string") continue;

    const trimmed = tag.trim();
    if (trimmed && !seen.has(trimmed)) {
      seen.add(trimmed);
      result.push(trimmed);
    }
  }

  return result;
}
