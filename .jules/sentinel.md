## 2024-04-26 - [Add input validation and length limits to /api/contact]
**Vulnerability:** The `/api/contact` endpoint did not enforce type checks (allowing arrays/objects to bypass string methods) or length limits, and lacked a null check on the parsed request body, which could lead to a 500 error if `body` was null.
**Learning:** API endpoints handling JSON payloads must validate the type and structure of the input before processing, especially before using string-specific methods like `.replace()`.
**Prevention:** Always implement rigorous input validation, including type checking, null checks, and reasonable length constraints, for all incoming data to prevent application-layer DoS and unhandled exceptions.

## 2024-05-03 - [Fix Timing Attack in Webhook Validation]
**Vulnerability:** The Sanity webhook revalidation endpoint (`src/pages/api/revalidate.ts`) used standard string equality (`!==`) to verify the secret `SANITY_REVALIDATE_SECRET`, which is vulnerable to timing attacks. This could potentially allow an attacker to guess the secret over time by measuring response times.
**Learning:** Checking secure tokens or secrets with `===` or `!==` in webhooks can expose those secrets to timing attacks, as the JS runtime short-circuits evaluation.
**Prevention:** Always use `crypto.timingSafeEqual` for comparing secrets. Because `timingSafeEqual` throws if the buffer lengths don't match (potentially leaking length), a robust pattern is to hash both strings (e.g., with SHA-256) and then compare the resulting constant-length digests using `timingSafeEqual`.

## 2024-05-24 - Unbounded JSON Payload DoS
**Vulnerability:** API routes (`/api/contact`, `/api/revalidate`) lack `Content-Length` limits when parsing JSON, making them vulnerable to Denial of Service via large unbounded payloads.
**Learning:** `request.json()` loads the full body into memory. Since these routes don't enforce payload sizes, attackers can send massive JSON requests to exhaust server memory and CPU.
**Prevention:** Always check the `Content-Length` header against a maximum safe limit (e.g., 100KB) and reject the request (413 Payload Too Large) before calling `.json()`.

## 2025-02-23 - [Add Global Security Headers via Astro Middleware]
**Vulnerability:** The application was missing defense-in-depth HTTP security headers (e.g., `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Strict-Transport-Security`), leaving it potentially vulnerable to attacks like clickjacking or MIME-type sniffing.
**Learning:** In Astro, global security HTTP headers can be easily applied across the entire application using middleware.
**Prevention:** Always configure an Astro middleware (`src/middleware.ts`) to set these essential security headers by mutating the `response.headers` object returned by `next()`.
