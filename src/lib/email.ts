export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Renders the HTML template for a contact form message.
 */
export function renderContactEmail(name: string, email: string, message: string): string {
  return `<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #3D4852;">New contact from austinrehorn.com</h2>
  <p><strong>Name:</strong> ${escapeHtml(name)}</p>
  <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
  <hr style="border: none; border-top: 1px solid #E0E5EC; margin: 20px 0;" />
  <p style="white-space: pre-wrap; color: #3D4852;">${escapeHtml(message)}</p>
</div>`;
}
