import { useState } from "react";

type Email = {
  id: string;
  from: string;
  detail: string;
  subject: string;
  preview: string;
  label: string;
  why: string;
};

const EMAILS: Email[] = [
  {
    id: "redlines",
    from: "Dana Whitfield",
    detail: "VP Operations · Meridian",
    subject: "Re: redlines — can we still sign Friday?",
    preview:
      "Legal flagged two indemnity clauses. Our GC is out until Thursday, so if Friday holds I need your markup by noon tomorrow.",
    label: "Client — urgent",
    why: "A client with a deadline in the subject and a date in the body is the one thing that should never wait until the afternoon sweep.",
  },
  {
    id: "invoice",
    from: "Billing",
    detail: "Accounts receivable",
    subject: "Invoice INV-2291 is 12 days past due",
    preview:
      "This is a reminder that invoice INV-2291 for $8,400 was due on the 3rd. Late fees apply after the 20th.",
    label: "Invoice & billing",
    why: "It has a number, a date and a consequence. File it where the monthly money pass will find it.",
  },
  {
    id: "intro",
    from: "Marcus Lee",
    detail: "Director of Talent · Northwind",
    subject: "Intro: our Head of Ops is hiring",
    preview:
      "Your name came up twice this week. Worth a 15-minute call to see if it's interesting before we open the search?",
    label: "Prospect — new",
    why: "Someone new, arriving warm, asking for fifteen minutes. That is a prospect, not a follow-up — it needs a reply today while the warmth lasts.",
  },
  {
    id: "newsletter",
    from: "The Neuron",
    detail: "Daily briefing",
    subject: "This week: model pricing, agent frameworks, and 14 links",
    preview:
      "Everything that shipped in AI this week, plus why the newest release changes how teams budget for tokens.",
    label: "Newsletter",
    why: "Genuinely interesting, genuinely not urgent. The whole point of the labels is to keep this out of the same pile as Dana.",
  },
];

const LABELS = [
  "Client — urgent",
  "Prospect — new",
  "Invoice & billing",
  "Follow-up needed",
  "Newsletter",
  "Archive",
];

function verdict(score: number, total: number) {
  if (score === total) return "Clean sweep. You'd survive my inbox.";
  if (score >= total - 1) return "Almost perfect. One thread would have waited too long.";
  if (score >= total / 2) return "Not bad. The urgent one is usually the one with a date in it.";
  return "The good news: this is exactly why I built the tagger.";
}

export default function InboxToy() {
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const email = EMAILS[step];
  const correct = picked === email.label;

  function pick(label: string) {
    if (picked) return;
    setPicked(label);
    if (label === email.label) setScore((s) => s + 1);
  }

  function next() {
    if (step + 1 >= EMAILS.length) {
      setDone(true);
      return;
    }
    setStep((s) => s + 1);
    setPicked(null);
  }

  function reset() {
    setStep(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  }

  if (done) {
    return (
      <div className="glass-card rounded-[2rem] p-8 sm:p-10" aria-live="polite">
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C9A86C]">
          Inbox triage · finished
        </p>
        <p className="mt-5 font-display text-4xl font-black tracking-tighter text-white sm:text-5xl">
          {score} / {EMAILS.length}
        </p>
        <p className="mt-3 max-w-md text-base leading-relaxed text-gray-400">
          {verdict(score, EMAILS.length)}
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white transition-colors hover:border-[#FF5A1F]/50 hover:bg-[#FF5A1F]/10"
        >
          Run it again
        </button>
      </div>
    );
  }

  return (
    <div className="glass-card overflow-hidden rounded-[2rem]">
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-6 py-4 sm:px-8">
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C9A86C]">
          Inbox triage
        </p>
        <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500">
          {step + 1} of {EMAILS.length}
        </p>
      </div>

      <div className="p-6 sm:p-8">
        <div className="rounded-2xl border border-white/10 bg-black/30 p-5 sm:p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p className="font-display text-sm font-bold text-white">{email.from}</p>
            <p className="text-[11px] uppercase tracking-[0.18em] text-gray-500">
              {email.detail}
            </p>
          </div>
          <p className="mt-3 font-display text-lg font-bold leading-snug tracking-tight text-white sm:text-xl">
            {email.subject}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-gray-400">{email.preview}</p>
        </div>

        <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.3em] text-gray-500">
          File it as
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {LABELS.map((label) => {
            const isPicked = picked === label;
            const isRight = email.label === label;
            const state =
              picked && isRight
                ? "border-[#C9A86C] bg-[#C9A86C]/15 text-[#F4F0E8]"
                : isPicked
                  ? "border-[#FF5A1F]/60 bg-[#FF5A1F]/15 text-[#F4F0E8]"
                  : "border-white/12 bg-white/[0.03] text-gray-300 hover:border-[#FF5A1F]/40 hover:text-white";
            return (
              <button
                key={label}
                type="button"
                onClick={() => pick(label)}
                disabled={picked !== null}
                aria-pressed={isPicked}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors disabled:cursor-default ${state}`}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div aria-live="polite" className="min-h-[1px]">
          {picked && (
            <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="font-display text-sm font-bold tracking-tight text-white">
                {correct ? "That's the one." : `I'd file it as ${email.label}.`}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">{email.why}</p>
              <button
                type="button"
                onClick={next}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#C9A86C] to-[#FF5A1F] px-5 py-2.5 text-sm font-bold text-white shadow-[0_0_20px_rgba(201,168,108,0.3)] transition-all hover:brightness-110"
              >
                {step + 1 >= EMAILS.length ? "See the score" : "Next email"}
                <span aria-hidden="true">→</span>
              </button>
            </div>
          )}
        </div>

        {!picked && (
          <p className="mt-6 text-xs leading-relaxed text-gray-600">
            Four threads, one morning. This is the same scheme my Gmail tagger runs — nine
            labels, context-aware draft replies, and it learns from the edits you make.
          </p>
        )}
      </div>
    </div>
  );
}
