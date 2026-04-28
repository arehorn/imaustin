import { describe, it, expect, vi, beforeEach } from 'vitest';
import { POST } from './revalidate';

describe('POST /api/revalidate', () => {
  beforeEach(() => {
    delete process.env.SANITY_REVALIDATE_SECRET;
    // @ts-ignore
    if (typeof import.meta.env !== 'undefined') {
        // @ts-ignore
        delete import.meta.env.SANITY_REVALIDATE_SECRET;
    }
  });

  it('returns 500 if secret is not configured', async () => {
    const request = new Request('http://localhost/api/revalidate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({}),
    });

    // @ts-ignore
    const response = await POST({ request });

    expect(response.status).toBe(500);
    const data = await response.json();
    expect(data).toEqual({ ok: false, error: "secret not configured" });
  });

  it('returns 401 if secret is invalid', async () => {
    process.env.SANITY_REVALIDATE_SECRET = 'my-secret';

    const request = new Request('http://localhost/api/revalidate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-sanity-signature': 'wrong-secret'
      },
      body: JSON.stringify({}),
    });

    // @ts-ignore
    const response = await POST({ request });

    expect(response.status).toBe(401);
    const data = await response.json();
    expect(data).toEqual({ ok: false, error: "invalid secret" });
  });

  it('returns 200 if secret is valid in header', async () => {
    process.env.SANITY_REVALIDATE_SECRET = 'my-secret';

    const request = new Request('http://localhost/api/revalidate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-sanity-signature': 'my-secret'
      },
      body: JSON.stringify({ some: 'data' }),
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

    const request = new Request('http://localhost/api/revalidate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ secret: 'my-secret', some: 'data' }),
    });

    // @ts-ignore
    const response = await POST({ request });

    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data.ok).toBe(true);
    expect(data.received).toEqual({ secret: 'my-secret', some: 'data' });
  });
});
