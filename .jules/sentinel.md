## 2024-04-26 - [Add input validation and length limits to /api/contact]
**Vulnerability:** The `/api/contact` endpoint did not enforce type checks (allowing arrays/objects to bypass string methods) or length limits, and lacked a null check on the parsed request body, which could lead to a 500 error if `body` was null.
**Learning:** API endpoints handling JSON payloads must validate the type and structure of the input before processing, especially before using string-specific methods like `.replace()`.
**Prevention:** Always implement rigorous input validation, including type checking, null checks, and reasonable length constraints, for all incoming data to prevent application-layer DoS and unhandled exceptions.

## 2024-05-03 - [Fix Timing Attack in Webhook Validation]
**Vulnerability:** The Sanity webhook revalidation endpoint (`src/pages/api/revalidate.ts`) used standard string equality (`!==`) to verify the secret `SANITY_REVALIDATE_SECRET`, which is vulnerable to timing attacks. This could potentially allow an attacker to guess the secret over time by measuring response times.
**Learning:** Checking secure tokens or secrets with `===` or `!==` in webhooks can expose those secrets to timing attacks, as the JS runtime short-circuits evaluation.
**Prevention:** Always use `crypto.timingSafeEqual` for comparing secrets. Because `timingSafeEqual` throws if the buffer lengths don't match (potentially leaking length), a robust pattern is to hash both strings (e.g., with SHA-256) and then compare the resulting constant-length digests using `timingSafeEqual`.

## 2025-05-15 - [Fix Unbounded Request Body Parsing in /api/contact and /api/revalidate]
**Vulnerability:** The `/api/contact` and `/api/revalidate` endpoints did not enforce a maximum payload size before parsing the request body as JSON. This could allow an attacker to send extremely large payloads, potentially causing a Denial of Service (DoS) by exhausting server memory.
**Learning:** Even with individual field length validation, parsing a large JSON body into memory can be a resource exhaustion vector.
**Prevention:** Always enforce a global request body size limit at the infrastructure level or at the beginning of the request handler by checking the `Content-Length` header (or by using a streaming parser with a limit) before reading the entire body into memory.
