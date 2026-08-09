import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();

  // Security Enhancement: Global HTTP Security Headers
  // Prevent MIME-sniffing by enforcing the declared content-type
  response.headers.set("X-Content-Type-Options", "nosniff");
  // Prevent clickjacking by restricting embedding in iframes
  response.headers.set("X-Frame-Options", "DENY");
  // Enable browser's built-in XSS filtering
  response.headers.set("X-XSS-Protection", "1; mode=block");
  // Control referrer information sent in headers for privacy
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  // Enforce HTTPS and protect against downgrade attacks
  response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");

  return response;
});
