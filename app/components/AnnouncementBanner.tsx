"use client";

import { useState } from "react";

export default function AnnouncementBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex items-center justify-center gap-3 bg-zinc-800/90 px-4 py-2 backdrop-blur-sm">
      <span className="text-xs text-zinc-400 sm:text-sm">
        ✍️ I write about AI, building, and the journey —
      </span>
      <a
        href="https://thebuilderdiarybyarnol.substack.com/welcome"
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 rounded-md bg-white px-3 py-1 text-xs font-semibold text-zinc-900 transition-opacity hover:opacity-80 sm:text-sm"
      >
        Subscribe to The Builder&apos;s Diary →
      </a>
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss banner"
        className="absolute right-3 text-zinc-500 transition-colors hover:text-zinc-200"
      >
        ✕
      </button>
    </div>
  );
}
