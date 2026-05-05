// src/pages/api/contact.ts
import type { APIRoute } from "astro";
import { renderContactEmail } from "../../lib/email";

export const POST: APIRoute = async ({ request }) => {
  let body: { name?: string; email?: string; message?: string };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!body) {
    return new Response(JSON.stringify({ error: "All fields are required." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "All fields are required." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
    return new Response(JSON.stringify({ error: "Invalid data types." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (name.length > 100 || email.length > 254 || message.length > 5000) {
    return new Response(JSON.stringify({ error: "Input exceeds maximum length." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return new Response(JSON.stringify({ error: "Invalid email format." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const resendApiKey = import.meta.env.RESEND_API_KEY;
  if (!resendApiKey) {
    return new Response(JSON.stringify({ error: "Email service not configured." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "austinrehorn.com <onboarding@resend.dev>",
      to: "rehorna1@gmail.com",
      reply_to: email,
      subject: `New message from ${name}`,
      html: renderContactEmail(name, email, message),
    }),
  });

  if (!res.ok) {
    return new Response(JSON.stringify({ error: "Failed to send message." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
