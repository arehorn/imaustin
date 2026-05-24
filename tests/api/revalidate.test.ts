import { describe, it, expect, vi, beforeEach } from 'vitest';
import { POST } from '../../src/pages/api/revalidate';

describe('POST /api/revalidate', () => {
  beforeEach(() => {
    delete process.env.SANITY_REVALIDATE_SECRET;
    // @ts-ignore
    if (typeof import.meta.env !== 'undefined') {
        // @ts-ignore
        delete import.meta.env.SANITY_REVALIDATE_SECRET;
    }
  });

  it('returns 413 if payload is too large', async () => {
    const request = new Request('http://localhost/api/revalidate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': '102401'
      },
      body: JSON.stringify({}),
    });

    // @ts-ignore
    const response = await POST({ request });

    expect(response.status).toBe(413);
    const data = await response.json();
    expect(data).toEqual({ ok: false, error: "payload too large" });
  });

  it('returns 411 if Content-Length header is missing', async () => {
    const request = new Request('http://localhost/api/revalidate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({}),
    });

    // Simulate missing content-length header
    const mockedRequest = {
      ...request,
      headers: {
        get: (key: string) => key.toLowerCase() === 'content-length' ? null : request.headers.get(key)
      },
      clone: () => ({ json: request.json.bind(request) })
    } as any;

    const response = await POST({ request: mockedRequest } as any);

    expect(response.status).toBe(411);
    const data = await response.json();
    expect(data).toEqual({ ok: false, error: "length required" });
  });

  it('returns 413 if Content-Length exceeds 100KB', async () => {
    const request = new Request('http://localhost/api/revalidate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': '102401'
      },
      body: JSON.stringify({}),
    });

    const response = await POST({ request } as any);

    expect(response.status).toBe(413);
    const data = await response.json();
    expect(data).toEqual({ ok: false, error: "payload too large" });
  });

  it('returns 500 if secret is not configured', async () => {
    const json = JSON.stringify({});
    const request = new Request('http://localhost/api/revalidate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': String(new TextEncoder().encode(json).length)
      },
      body: json,
    });

    // @ts-ignore
    const response = await POST({ request });

    expect(response.status).toBe(500);
    const data = await response.json();
    expect(data).toEqual({ ok: false, error: "secret not configured" });
  });

  it('returns 401 if secret is invalid', async () => {
    process.env.SANITY_REVALIDATE_SECRET = 'my-secret';

    const json = JSON.stringify({});
    const request = new Request('http://localhost/api/revalidate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-sanity-signature': 'wrong-secret',
        'Content-Length': String(new TextEncoder().encode(json).length)
      },
      body: json,
    });

    // @ts-ignore
    const response = await POST({ request });

    expect(response.status).toBe(401);
    const data = await response.json();
    expect(data).toEqual({ ok: false, error: "invalid secret" });
  });

  it('returns 200 if secret is valid in header', async () => {
    process.env.SANITY_REVALIDATE_SECRET = 'my-secret';

    const json = JSON.stringify({ some: 'data' });
    const request = new Request('http://localhost/api/revalidate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-sanity-signature': 'my-secret',
        'Content-Length': String(new TextEncoder().encode(json).length)
      },
      body: json,
    });

    // @ts-ignore
    const response = await POST({ request });

    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data.ok).toBe(true);
    expect(data.received).toEqual({ some: 'data' });
  });

  it('returns 200 if secret is valid in body', async () => {
    process.env.SANITY_REVALIDATE_SECRET = 'my-secret';

    const json = JSON.stringify({ secret: 'my-secret', some: 'data' });
    const request = new Request('http://localhost/api/revalidate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': String(new TextEncoder().encode(json).length)
      },
      body: json,
    });

    // @ts-ignore
    const response = await POST({ request });

    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data.ok).toBe(true);
    expect(data.received).toEqual({ secret: 'my-secret', some: 'data' });
  });

  it('returns 413 if payload is too large', async () => {
    process.env.SANITY_REVALIDATE_SECRET = 'my-secret';

    const request = new Request('http://localhost/api/revalidate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': (1024 * 101).toString(),
      },
      body: JSON.stringify({ name: 'a'.repeat(1024 * 101) }),
    });

    // @ts-ignore
    const response = await POST({ request });

    expect(response.status).toBe(413);
    const data = await response.json();
    expect(data).toEqual({ ok: false, error: 'payload too large' });
  });
});
