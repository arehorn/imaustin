const prerender = false;
const POST = async ({ request }) => {
  const secret = process.env.SANITY_REVALIDATE_SECRET ?? undefined                                        ;
  const headerSecret = request.headers.get("x-sanity-signature") || request.headers.get("x-sanity-secret") || request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
  let bodySecret;
  let payload = null;
  try {
    payload = await request.clone().json();
    if (payload && typeof payload === "object" && "secret" in payload) {
      bodySecret = payload.secret;
    }
  } catch {
  }
  if (!secret) {
    return new Response(JSON.stringify({ ok: false, error: "secret not configured" }), {
      status: 500,
      headers: { "content-type": "application/json" }
    });
  }
  if (headerSecret !== secret && bodySecret !== secret) {
    return new Response(JSON.stringify({ ok: false, error: "invalid secret" }), {
      status: 401,
      headers: { "content-type": "application/json" }
    });
  }
  return new Response(JSON.stringify({ ok: true, received: payload ?? null }), {
    status: 200,
    headers: { "content-type": "application/json" }
  });
};
const GET = async () => new Response(JSON.stringify({ ok: true, hint: "POST a Sanity webhook to this URL" }), {
  status: 200,
  headers: { "content-type": "application/json" }
});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
