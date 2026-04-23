import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setFormState("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  const inputClass =
    "w-full rounded-2xl px-5 py-3.5 text-sm outline-none transition-all duration-300";
  const inputStyle: React.CSSProperties = {
    backgroundColor: "#1a2236",
    color: "#dae2fd",
    border: "0.5px solid rgba(255,255,255,0.1)",
    boxShadow: "inset 0 2px 8px rgba(0,0,0,0.3)",
  };
  const inputFocusRing = "focus:ring-2 focus:ring-[#c3c0ff] focus:ring-offset-2";

  return (
    <div
      className="rounded-[32px] p-10 md:p-14"
      style={{ backgroundColor: "#131b2e", boxShadow: "0 8px 24px rgba(195,192,255,0.04), 0 2px 8px rgba(0,0,0,0.3)" }}
    >
      <h3 className="font-display font-bold text-xl tracking-tight mb-8" style={{ color: "#dae2fd" }}>
        Send a Message
      </h3>

      {formState === "success" ? (
        <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: "#1a2236", border: "0.5px solid rgba(255,255,255,0.08)" }}>
          <div
            className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
            style={{ backgroundColor: "rgba(123,208,255,0.15)", boxShadow: "0 0 24px rgba(123,208,255,0.2)" }}
          >
            <svg className="w-8 h-8" fill="none" stroke="#7bd0ff" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="font-display font-bold text-lg mb-2" style={{ color: "#dae2fd" }}>Message sent!</p>
          <p className="text-sm" style={{ color: "#c6c6cd" }}>I&apos;ll get back to you as soon as I can.</p>
          <button
            onClick={() => setFormState("idle")}
            className="btn-secondary mt-6 px-6 py-2.5 rounded-full text-sm font-semibold"
          >
            Send another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#c6c6cd" }} htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`${inputClass} ${inputFocusRing}`}
                style={{ ...inputStyle, caretColor: "#c3c0ff" }}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#c6c6cd" }} htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`${inputClass} ${inputFocusRing}`}
                style={{ ...inputStyle, caretColor: "#c3c0ff" }}
              />
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#c6c6cd" }} htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              placeholder="What's on your mind?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`${inputClass} ${inputFocusRing} resize-none`}
              style={{ ...inputStyle, caretColor: "#c3c0ff" }}
            />
          </div>

          {formState === "error" && (
            <p className="text-sm mb-5" style={{ color: "#ff8080" }}>
              Something went wrong. Try emailing me directly at rehorna1@gmail.com.
            </p>
          )}

          <button
            type="submit"
            disabled={formState === "loading"}
            className="btn-primary font-display font-semibold px-8 py-3.5 text-sm tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {formState === "loading" ? "Sending…" : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}
