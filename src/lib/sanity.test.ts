import { describe, it, expect } from 'vitest';
import { urlFor, imageUrl } from './sanity';

const mockSource = {
  _type: 'image',
  asset: {
    _ref: 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg',
    _type: 'reference'
  }
};

describe('sanity utils', () => {
  describe('urlFor', () => {
    it('returns a builder for the image source', () => {
      const builder = urlFor(mockSource);
      expect(builder).toBeDefined();
      expect(typeof builder.url).toBe('function');
      const url = builder.url();
      expect(url).toContain('Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000.jpg');
    });
  });

  describe('imageUrl', () => {
    it('returns an empty string if source is undefined or null', () => {
      expect(imageUrl(undefined)).toBe('');
      expect(imageUrl(null)).toBe('');
    });

    it('returns a valid image URL with auto format and max fit by default', () => {
      const url = imageUrl(mockSource);
      expect(url).toContain('Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000.jpg');
      expect(url).toContain('auto=format');
      expect(url).toContain('fit=max');
    });

    it('applies width option correctly', () => {
      const url = imageUrl(mockSource, { width: 500 });
      expect(url).toContain('w=500');
    });

    it('applies height option correctly', () => {
      const url = imageUrl(mockSource, { height: 300 });
      expect(url).toContain('h=300');
    });

    it('applies quality option correctly', () => {
      const url = imageUrl(mockSource, { quality: 80 });
      expect(url).toContain('q=80');
    });

    it('applies multiple options correctly', () => {
      const url = imageUrl(mockSource, { width: 500, height: 300, quality: 80 });
      expect(url).toContain('w=500');
      expect(url).toContain('h=300');
      expect(url).toContain('q=80');
    });
  });
});
