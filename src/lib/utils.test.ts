import { describe, it, expect } from 'vitest';
import { formatTags } from './utils';

describe('formatTags', () => {
  it('processes an array of tags correctly', () => {
    expect(formatTags(["tag1", " tag2 ", "tag1", ""])).toEqual(["tag1", "tag2"]);
  });

  it('processes a comma-separated string correctly', () => {
    expect(formatTags("tag1, tag2 , tag1, ")).toEqual(["tag1", "tag2"]);
  });

  it('handles mixed content in array by ignoring non-strings', () => {
    expect(formatTags(["tag1", 123, "tag2"])).toEqual(["tag1", "tag2"]);
  });

  it('returns an empty array for empty/null/undefined inputs', () => {
    expect(formatTags([])).toEqual([]);
    expect(formatTags("")).toEqual([]);
    expect(formatTags(null)).toEqual([]);
    expect(formatTags(undefined)).toEqual([]);
  });

  it('handles single tag inputs', () => {
    expect(formatTags("tag1")).toEqual(["tag1"]);
    expect(formatTags(["tag1"])).toEqual(["tag1"]);
  });
});
