import { describe, it, expect, vi, beforeEach } from 'vitest';
import { POST } from './contact';

// Mock the global fetch function
global.fetch = vi.fn();

describe('POST /api/contact', () => {
  beforeEach(() => {
    vi.resetAllMocks();
    // Set a mock environment variable for RESEND_API_KEY
    vi.stubEnv('RESEND_API_KEY', 'test_api_key');
  });

  const createRequest = (body: any) => {
    return new Request('http://localhost:4321/api/contact', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  it('should return 400 for empty body', async () => {
    const request = new Request('http://localhost:4321/api/contact', {
      method: 'POST',
      body: 'null',
      headers: { 'Content-Type': 'application/json' },
    });
    const response = await POST({ request } as any);
    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data).toEqual({ error: 'All fields are required.' });
  });

  it('should return 400 for invalid JSON', async () => {
    const request = new Request('http://localhost:4321/api/contact', {
      method: 'POST',
      body: '{ invalid json ',
      headers: { 'Content-Type': 'application/json' },
    });

    const response = await POST({ request } as any);
    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data).toEqual({ error: 'Invalid JSON.' });
  });

  it('should return 400 for non-string types', async () => {
    const request = createRequest({ name: 123, email: 'test@example.com', message: 'Hello' });
    const response = await POST({ request } as any);
    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data).toEqual({ error: 'Invalid data types.' });
  });

  it('should return 400 for inputs exceeding maximum length', async () => {
    const request = createRequest({ name: 'A'.repeat(101), email: 'test@example.com', message: 'Hello' });
    const response = await POST({ request } as any);
    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data).toEqual({ error: 'Input exceeds maximum length.' });
  });

  it('should return 400 if name is missing', async () => {
    const request = createRequest({ email: 'test@example.com', message: 'Hello' });
    const response = await POST({ request } as any);
    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data).toEqual({ error: 'All fields are required.' });
  });

  it('should return 400 if email is missing', async () => {
    const request = createRequest({ name: 'Test User', message: 'Hello' });
    const response = await POST({ request } as any);
    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data).toEqual({ error: 'All fields are required.' });
  });

  it('should return 400 if message is missing', async () => {
    const request = createRequest({ name: 'Test User', email: 'test@example.com' });
    const response = await POST({ request } as any);
    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data).toEqual({ error: 'All fields are required.' });
  });

  it('should return 400 if email is invalid format', async () => {
    const request = createRequest({ name: 'Test User', email: 'invalid-email', message: 'Hello' });
    const response = await POST({ request } as any);
    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data).toEqual({ error: 'Invalid email format.' });
  });

  it('should return 500 if RESEND_API_KEY is not configured', async () => {
    vi.unstubAllEnvs(); // Remove the stubbed env var

    const request = createRequest({ name: 'Test User', email: 'test@example.com', message: 'Hello' });
    const response = await POST({ request } as any);
    expect(response.status).toBe(500);
    const data = await response.json();
    expect(data).toEqual({ error: 'Email service not configured.' });
  });

  it('should return 500 if fetch to Resend fails', async () => {
    vi.mocked(global.fetch).mockResolvedValueOnce({
      ok: false,
    } as Response);

    const request = createRequest({ name: 'Test User', email: 'test@example.com', message: 'Hello' });
    const response = await POST({ request } as any);
    expect(response.status).toBe(500);
    const data = await response.json();
    expect(data).toEqual({ error: 'Failed to send message.' });
  });

  it('should return 200 and success response for valid submission', async () => {
    vi.mocked(global.fetch).mockResolvedValueOnce({
      ok: true,
    } as Response);

    const request = createRequest({ name: 'Test User', email: 'test@example.com', message: 'Hello <world>&"\'!' });
    const response = await POST({ request } as any);
    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data).toEqual({ success: true });

    // Verify fetch was called correctly, and HTML escaping works
    expect(global.fetch).toHaveBeenCalledTimes(1);
    const [url, options] = vi.mocked(global.fetch).mock.calls[0];
    expect(url).toBe('https://api.resend.com/emails');
    expect(options?.method).toBe('POST');
    expect(options?.headers).toEqual({
      Authorization: 'Bearer test_api_key',
      'Content-Type': 'application/json',
    });

    const bodyObj = JSON.parse(options?.body as string);
    expect(bodyObj.from).toBe('austinrehorn.com <onboarding@resend.dev>');
    expect(bodyObj.to).toBe('rehorna1@gmail.com');
    expect(bodyObj.reply_to).toBe('test@example.com');
    expect(bodyObj.subject).toBe('New message from Test User');

    // Check that escaping worked
    expect(bodyObj.html).toContain('&lt;world&gt;');
    expect(bodyObj.html).toContain('&amp;');
    expect(bodyObj.html).toContain('&quot;');
    expect(bodyObj.html).toContain('&#39;');
  });
});
