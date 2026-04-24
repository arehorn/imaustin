import { vi, describe, beforeEach, it, expect } from 'vitest';
import { P as POST } from './contact_C4z4CORb.mjs';

global.fetch = vi.fn();
describe("POST /api/contact", () => {
  beforeEach(() => {
    vi.resetAllMocks();
    vi.stubEnv("RESEND_API_KEY", "test_api_key");
  });
  const createRequest = (body) => {
    return new Request("http://localhost:4321/api/contact", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    });
  };
  it("should return 400 for invalid JSON", async () => {
    const request = new Request("http://localhost:4321/api/contact", {
      method: "POST",
      body: "{ invalid json ",
      headers: { "Content-Type": "application/json" }
    });
    const response = await POST({ request });
    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data).toEqual({ error: "Invalid JSON." });
  });
  it("should return 400 if name is missing", async () => {
    const request = createRequest({ email: "test@example.com", message: "Hello" });
    const response = await POST({ request });
    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data).toEqual({ error: "All fields are required." });
  });
  it("should return 400 if email is missing", async () => {
    const request = createRequest({ name: "Test User", message: "Hello" });
    const response = await POST({ request });
    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data).toEqual({ error: "All fields are required." });
  });
  it("should return 400 if message is missing", async () => {
    const request = createRequest({ name: "Test User", email: "test@example.com" });
    const response = await POST({ request });
    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data).toEqual({ error: "All fields are required." });
  });
  it("should return 400 if email is invalid format", async () => {
    const request = createRequest({ name: "Test User", email: "invalid-email", message: "Hello" });
    const response = await POST({ request });
    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data).toEqual({ error: "Invalid email format." });
  });
  it("should return 500 if RESEND_API_KEY is not configured", async () => {
    vi.unstubAllEnvs();
    const request = createRequest({ name: "Test User", email: "test@example.com", message: "Hello" });
    const response = await POST({ request });
    expect(response.status).toBe(500);
    const data = await response.json();
    expect(data).toEqual({ error: "Email service not configured." });
  });
  it("should return 500 if fetch to Resend fails", async () => {
    vi.mocked(global.fetch).mockResolvedValueOnce({
      ok: false
    });
    const request = createRequest({ name: "Test User", email: "test@example.com", message: "Hello" });
    const response = await POST({ request });
    expect(response.status).toBe(500);
    const data = await response.json();
    expect(data).toEqual({ error: "Failed to send message." });
  });
  it("should return 200 and success response for valid submission", async () => {
    vi.mocked(global.fetch).mockResolvedValueOnce({
      ok: true
    });
    const request = createRequest({ name: "Test User", email: "test@example.com", message: `Hello <world>&"'!` });
    const response = await POST({ request });
    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data).toEqual({ success: true });
    expect(global.fetch).toHaveBeenCalledTimes(1);
    const [url, options] = vi.mocked(global.fetch).mock.calls[0];
    expect(url).toBe("https://api.resend.com/emails");
    expect(options?.method).toBe("POST");
    expect(options?.headers).toEqual({
      Authorization: "Bearer test_api_key",
      "Content-Type": "application/json"
    });
    const bodyObj = JSON.parse(options?.body);
    expect(bodyObj.from).toBe("austinrehorn.com <onboarding@resend.dev>");
    expect(bodyObj.to).toBe("rehorna1@gmail.com");
    expect(bodyObj.reply_to).toBe("test@example.com");
    expect(bodyObj.subject).toBe("New message from Test User");
    expect(bodyObj.html).toContain("&lt;world&gt;");
    expect(bodyObj.html).toContain("&amp;");
    expect(bodyObj.html).toContain("&quot;");
    expect(bodyObj.html).toContain("&#39;");
  });
});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
