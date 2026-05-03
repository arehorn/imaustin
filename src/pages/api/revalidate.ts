// src/pages/api/revalidate.ts
// Sanity webhook → Vercel revalidation endpoint.
//
// Configure a GROQ-powered webhook in Sanity (Manage → API → Webhooks):
//   - URL:     https://imaustin.me/api/revalidate
//   - Trigger: Create/Update/Delete on dataset "production"
//   - Filter:  _type in ["hero","about","experience","connect","statItem",
//              "personalityCard","offClockNote","serviceColumn",
//              "projectItem","experienceRole","contactItem","blogPost"]
//   - Secret:  set to SANITY_REVALIDATE_SECRET (sent as header x-sanity-signature
//              OR body field "secret" — we accept either for simplicity)
//
// This endpoint intentionally does not attempt to perform path-level ISR
// invalidation: with output: "server" on Vercel, the Sanity CDN with
// `useCdn: true` is the primary cache, and GROQ queries re-run on each request
// after the CDN TTL expires (~60s). For now we just verify the secret and
// return 200 so Sanity webhook retries stay green.

import type { APIRoute } from "astro";
import crypto from "node:crypto";

export const prerender = false;

function secureCompare(a: string | undefined, b: string | undefined): boolean {
  if (!a || !b) return false;
  const aHash = crypto.createHash("sha256").update(a).digest();
  const bHash = crypto.createHash("sha256").update(b).digest();
  return crypto.timingSafeEqual(aHash, bHash);
}

export const POST: APIRoute = async ({ request }) => {
  const secret =
    process.env.SANITY_REVALIDATE_SECRET ?? import.meta.env.SANITY_REVALIDATE_SECRET;

  const headerSecret =
    request.headers.get("x-sanity-signature") ||
    request.headers.get("x-sanity-secret") ||
    request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");

  let bodySecret: string | undefined;
  let payload: unknown = null;
  try {
    payload = await request.clone().json();
    if (payload && typeof payload === "object" && "secret" in payload) {
      bodySecret = (payload as { secret?: string }).secret;
    }
  } catch {
    // body may be empty or not JSON; that's fine.
  }

  if (!secret) {
    return new Response(JSON.stringify({ ok: false, error: "secret not configured" }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }

  if (!secureCompare(headerSecret, secret) && !secureCompare(bodySecret, secret)) {
    return new Response(JSON.stringify({ ok: false, error: "invalid secret" }), {
      status: 401,
      headers: { "content-type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ ok: true, received: payload ?? null }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
};

export const GET: APIRoute = async () =>
  new Response(JSON.stringify({ ok: true, hint: "POST a Sanity webhook to this URL" }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
