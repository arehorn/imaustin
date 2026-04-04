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
    "w-full bg-[#E0E5EC] rounded-2xl px-5 py-3.5 text-sm text-[#3D4852] placeholder-[#A0AEC0] outline-none transition-all duration-300 focus:ring-2 focus:ring-[#6C63FF] focus:ring-offset-2 focus:ring-offset-[#E0E5EC]";
  const inputStyle = {
    boxShadow: "inset 8px 8px 16px rgb(163 177 198 / 0.65), inset -8px -8px 16px rgba(255 255 255 / 0.6)",
  };

  return (
    <div className="neu-extruded rounded-[32px] bg-[#E0E5EC] p-10 md:p-14">
      <h3 className="font-display font-bold text-[#3D4852] text-xl tracking-tight mb-8">
        Send a Message
      </h3>

      {formState === "success" ? (
        <div className="neu-inset rounded-2xl p-8 text-center">
          <div
            className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
            style={{ backgroundColor: "#38B2AC", boxShadow: "0 0 24px rgba(56 178 172 / 0.35)" }}
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="font-display font-bold text-[#3D4852] text-lg mb-2">Message sent!</p>
          <p className="text-[#6B7280] text-sm">I&apos;ll get back to you as soon as I can.</p>
          <button
            onClick={() => setFormState("idle")}
            className="neu-btn-secondary mt-6 px-6 py-2.5 rounded-2xl text-sm font-semibold text-[#3D4852]"
          >
            Send another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-xs font-semibold tracking-widest text-[#6B7280] uppercase mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
                style={inputStyle}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold tracking-widest text-[#6B7280] uppercase mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
                style={inputStyle}
              />
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-xs font-semibold tracking-widest text-[#6B7280] uppercase mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              placeholder="What's on your mind?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`${inputClass} resize-none`}
              style={inputStyle}
            />
          </div>

          {formState === "error" && (
            <p className="text-sm text-red-500 mb-5">
              Something went wrong. Try emailing me directly at rehorna1@gmail.com.
            </p>
          )}

          <button
            type="submit"
            disabled={formState === "loading"}
            className="neu-btn-primary font-display font-semibold px-8 py-3.5 rounded-2xl text-sm tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {formState === "loading" ? "Sending…" : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}
