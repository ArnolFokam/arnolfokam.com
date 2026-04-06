"use client";

import { useState } from "react";

export default function AnnouncementBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-900/95 backdrop-blur-md">
      <div className="relative flex items-center justify-center gap-4 px-10 py-2.5">

        {/* Subtle left accent */}
        <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:block" />

        <p className="text-center text-xs text-zinc-400 sm:text-sm">
          I write about AI, building, and the journey.
        </p>

        <a
          href="https://thebuilderdiarybyarnol.substack.com/welcome"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-medium text-white transition-all hover:border-white/40 hover:bg-white/20 sm:text-sm"
        >
          The Builder&apos;s Diary →
        </a>

        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss banner"
          className="absolute right-4 flex h-6 w-6 items-center justify-center rounded-full text-zinc-500 transition-all hover:bg-white/10 hover:text-zinc-200"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
