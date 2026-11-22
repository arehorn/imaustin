import { useEffect, useState } from "react";

type Path = "curious" | "hiring" | "build";

const DOORS: { id: Path; label: string }[] = [
  { id: "hiring", label: "I'm hiring" },
  { id: "build", label: "I need something built" },
  { id: "curious", label: "just looking" },
];

const CAPTIONS: Record<Path, string> = {
  curious:
    "The whole story, in order. Pick a door and the page re-weights itself around what you need — nothing gets hidden.",
  hiring:
    "Weighted for a hiring manager: the track record and the numbers come forward, and the résumé is one tap away.",
  build:
    "Weighted for a project: the systems and the builds come forward, with the workflow evidence behind them.",
};

export default function PathChooser() {
  const [path, setPath] = useState<Path>("curious");

  useEffect(() => {
    const saved = document.documentElement.dataset.path as Path | undefined;
    if (saved && saved !== path) setPath(saved);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function choose(next: Path) {
    setPath(next);
    document.documentElement.dataset.path = next;
    try {
      sessionStorage.setItem("imaustin.path", next);
    } catch {
      /* private mode — the choice just won't persist */
    }
    window.dispatchEvent(new Event("pathchange"));
  }

  return (
    <div>
      <div
        role="group"
        aria-label="Choose how to read this page"
        className="flex flex-wrap items-center gap-2.5"
      >
        {DOORS.map((door) => (
          <button
            key={door.id}
            type="button"
            className="door"
            data-door={door.id}
            aria-pressed={path === door.id}
            onClick={() => choose(door.id)}
          >
            {door.label}
          </button>
        ))}
      </div>
      <p
        className="mt-4 max-w-md text-sm leading-relaxed text-gray-500"
        aria-live="polite"
      >
        {CAPTIONS[path]}
      </p>
    </div>
  );
}
