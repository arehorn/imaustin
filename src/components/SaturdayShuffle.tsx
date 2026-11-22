import { useState } from "react";

const PICKS = [
  {
    label: "Shem Creek with Erica",
    text: "Two chairs on the dock, one drink, no laptop. The whole point is that nothing gets optimized.",
  },
  {
    label: "A long one with the dogs",
    text: "Barkley and Margo set the pace. I pretend I do. Somewhere around mile three everybody agrees it was a good idea.",
  },
  {
    label: "F1, lights out",
    text: "Race weekend, 9am, phone face down. I will explain the tire strategy whether or not you asked.",
  },
  {
    label: "Football Sunday",
    text: "Watched with the same intensity I bring to a deal review. Louder, usually.",
  },
  {
    label: "Something I don't understand yet",
    text: "A tool, a paper, a person who does it completely differently. This is my actual hobby.",
  },
  {
    label: "A tiny tool that didn't exist this morning",
    text: "Usually starts as a note and ends as something running before midnight. Occasionally it ends at midnight, badly.",
  },
];

export default function SaturdayShuffle() {
  const [index, setIndex] = useState(0);
  const [round, setRound] = useState(0);

  function shuffle() {
    setIndex((prev) => {
      let next = Math.floor(Math.random() * (PICKS.length - 1));
      return next >= prev ? next + 1 : next;
    });
    setRound((r) => r + 1);
  }

  const pick = PICKS[index];

  return (
    <div className="glass-card flex h-full flex-col rounded-[2rem] p-8">
      <div className="flex items-start justify-between gap-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C9A86C]">
          A free Saturday
        </p>
        <button
          type="button"
          onClick={shuffle}
          className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-gray-300 transition-colors hover:border-[#FF5A1F]/50 hover:text-white"
        >
          <svg
            className="h-3.5 w-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h5M20 20v-5h-5M20 9a8 8 0 00-14.9-2M4 15a8 8 0 0014.9 2"
            />
          </svg>
          Shuffle
        </button>
      </div>

      <div key={round} className="shuffle-enter mt-8 flex flex-1 flex-col justify-end" aria-live="polite">
        <p className="font-display text-2xl font-bold leading-tight tracking-tighter text-white">
          {pick.label}
        </p>
        <p className="mt-3 text-base leading-relaxed text-gray-400">{pick.text}</p>
      </div>
    </div>
  );
}
