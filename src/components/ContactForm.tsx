import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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
    "w-full rounded-2xl px-5 py-4 text-sm outline-none transition-all duration-300 glass-inset border border-white/10 text-white placeholder:text-gray-500 focus:border-[#00F2FF]/50 focus:ring-2 focus:ring-[#00F2FF]/30";

  return (
    <div className="rounded-[3rem] p-10 md:p-14 glass-card relative overflow-hidden">
      <div
        className="absolute -right-20 -top-20 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "rgba(112, 0, 255, 0.15)", filter: "blur(120px)" }}
        aria-hidden="true"
      />

      <h3 className="relative font-['Plus_Jakarta_Sans'] font-black text-3xl md:text-4xl tracking-tighter mb-8 text-white">
        Send a Message
      </h3>

      {formState === "success" ? (
        <div className="relative rounded-2xl p-8 text-center glass-inset border border-white/10" role="status" aria-live="polite">
          <div
            className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center glass-inset border border-white/10"
            style={{ boxShadow: "0 0 24px rgba(0,242,255,0.3)" }}
          >
            <svg className="w-8 h-8 glow-cyan" fill="none" stroke="#00F2FF" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="font-['Plus_Jakarta_Sans'] font-bold text-lg mb-2 text-white">Message sent!</p>
          <p className="text-sm text-gray-400">I&apos;ll get back to you as soon as I can.</p>
          <button
            onClick={() => setFormState("idle")}
            className="mt-6 px-6 py-2.5 rounded-full text-sm font-bold glass-card text-white hover:bg-white/10 transition-all"
          >
            Send another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-[10px] font-bold tracking-[0.3em] uppercase mb-2 text-[#00F2FF]" htmlFor="name">
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
                style={{ caretColor: "#00F2FF" }}
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold tracking-[0.3em] uppercase mb-2 text-[#00F2FF]" htmlFor="email">
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
                style={{ caretColor: "#00F2FF" }}
              />
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-[10px] font-bold tracking-[0.3em] uppercase mb-2 text-[#7000FF]" htmlFor="message">
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
              style={{ caretColor: "#00F2FF" }}
            />
          </div>

          {formState === "error" && (
            <p className="text-sm mb-5 text-[#ff8080]" role="alert">
              Something went wrong. Try emailing me directly at rehorna1@gmail.com.
            </p>
          )}

          <button
            type="submit"
            disabled={formState === "loading"}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#7000FF] to-[#00F2FF] text-white font-black tracking-wide shadow-[0_0_30px_rgba(112,0,255,0.4)] hover:brightness-110 transition-all transform hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            {formState === "loading" ? (
              <>
                <svg className="animate-spin -ml-1 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending…
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      )}
    </div>
  );
}
