"use client";

import { useState } from "react";

export default function AnnouncementBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-900/95 backdrop-blur-md">
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-2 px-4 py-3 pr-12 sm:flex-row sm:items-center sm:justify-center sm:gap-4 sm:px-8 sm:py-2.5">
        <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:block" />
        <p className="text-sm leading-relaxed text-zinc-300 sm:text-center sm:text-sm sm:text-zinc-400">
          I write about AI, building, and the journey.
        </p>
        <a
          href="https://thebuilderdiarybyarnol.substack.com/welcome"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white transition-all hover:border-white/40 hover:bg-white/20 sm:shrink-0 sm:py-1 sm:text-sm"
        >
          The Builder&apos;s Diary →
        </a>
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss banner"
          className="absolute right-3 top-2 flex h-7 w-7 items-center justify-center rounded-full text-zinc-500 transition-all hover:bg-white/10 hover:text-zinc-200 sm:right-4 sm:top-1/2 sm:h-6 sm:w-6 sm:-translate-y-1/2"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
