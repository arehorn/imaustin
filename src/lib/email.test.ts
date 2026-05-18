import { describe, it, expect } from 'vitest';
import { escapeHtml, renderContactEmail } from './email';

describe('email utils', () => {
  describe('escapeHtml', () => {
    it('escapes & to &amp;', () => {
      expect(escapeHtml('fish & chips')).toBe('fish &amp; chips');
    });

    it('escapes < to &lt;', () => {
      expect(escapeHtml('<script>')).toBe('&lt;script&gt;');
    });

    it('escapes > to &gt;', () => {
      expect(escapeHtml('a > b')).toBe('a &gt; b');
    });

    it('escapes " to &quot;', () => {
      expect(escapeHtml('He said "hello"')).toBe('He said &quot;hello&quot;');
    });

    it('escapes \' to &#39;', () => {
      expect(escapeHtml("It's a me")).toBe('It&#39;s a me');
    });

    it('escapes multiple characters', () => {
      expect(escapeHtml('<b class="test">&</b>')).toBe('&lt;b class=&quot;test&quot;&gt;&amp;&lt;/b&gt;');
    });
  });

  describe('renderContactEmail', () => {
    const name = 'John Doe';
    const email = 'john@example.com';
    const message = 'Hello, this is a test message.';

    it('renders the HTML structure correctly', () => {
      const html = renderContactEmail(name, email, message);
      expect(html).toContain('<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">');
      expect(html).toContain('<h2 style="color: #3D4852;">New contact from austinrehorn.com</h2>');
      expect(html).toContain('<strong>Name:</strong> John Doe');
      expect(html).toContain('<strong>Email:</strong> <a href="mailto:john@example.com">john@example.com</a>');
      expect(html).toContain('white-space: pre-wrap; color: #3D4852;">Hello, this is a test message.</p>');
    });

    it('escapes the name field', () => {
      const html = renderContactEmail('<script>alert("name")</script>', email, message);
      expect(html).toContain('&lt;script&gt;alert(&quot;name&quot;)&lt;/script&gt;');
      expect(html).not.toContain('<script>');
    });

    it('escapes the email field', () => {
      const html = renderContactEmail(name, '"><script>alert("email")</script>', message);
      expect(html).toContain('href="mailto:&quot;&gt;&lt;script&gt;alert(&quot;email&quot;)&lt;/script&gt;"');
      expect(html).toContain('&quot;&gt;&lt;script&gt;alert(&quot;email&quot;)&lt;/script&gt;</a>');
      expect(html).not.toContain('"><script>');
    });

    it('escapes the message field', () => {
      const html = renderContactEmail(name, email, 'Line 1\nLine 2 <script>');
      expect(html).toContain('Line 1\nLine 2 &lt;script&gt;');
      expect(html).not.toContain('<script>');
    });
  });
});
