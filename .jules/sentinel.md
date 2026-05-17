## 2024-04-26 - [Add input validation and length limits to /api/contact]
**Vulnerability:** The `/api/contact` endpoint did not enforce type checks (allowing arrays/objects to bypass string methods) or length limits, and lacked a null check on the parsed request body, which could lead to a 500 error if `body` was null.
**Learning:** API endpoints handling JSON payloads must validate the type and structure of the input before processing, especially before using string-specific methods like `.replace()`.
**Prevention:** Always implement rigorous input validation, including type checking, null checks, and reasonable length constraints, for all incoming data to prevent application-layer DoS and unhandled exceptions.

## 2024-05-03 - [Fix Timing Attack in Webhook Validation]
**Vulnerability:** The Sanity webhook revalidation endpoint (`src/pages/api/revalidate.ts`) used standard string equality (`!==`) to verify the secret `SANITY_REVALIDATE_SECRET`, which is vulnerable to timing attacks. This could potentially allow an attacker to guess the secret over time by measuring response times.
**Learning:** Checking secure tokens or secrets with `===` or `!==` in webhooks can expose those secrets to timing attacks, as the JS runtime short-circuits evaluation.
**Prevention:** Always use `crypto.timingSafeEqual` for comparing secrets. Because `timingSafeEqual` throws if the buffer lengths don't match (potentially leaking length), a robust pattern is to hash both strings (e.g., with SHA-256) and then compare the resulting constant-length digests using `timingSafeEqual`.

## 2024-05-17 - [Add Strict Payload Size Limits to JSON Endpoints]
**Vulnerability:** API endpoints that parse incoming JSON bodies (`request.json()`), such as `/api/contact` and `/api/revalidate`, were doing so without bounding the payload size. An attacker could intentionally send an arbitrarily large JSON body, exhausting server CPU and memory to cause a Denial of Service (DoS) attack, as well as exploit chunked-encoding bypasses if missing a valid `Content-Length`.
**Learning:** `request.json()` in native Edge/Server runtimes will attempt to buffer and parse unbounded streams if not restricted upstream. This creates a significant surface area for application-layer DoS vulnerabilities.
**Prevention:** Always enforce strict payload size limits on API routes that parse JSON bodies. Implement a check requiring the `Content-Length` header (returning `411 Length Required` if missing) and explicitly validating that the reported size does not exceed a reasonable threshold like 100KB (returning `413 Payload Too Large` if it does) before invoking `.json()`.
