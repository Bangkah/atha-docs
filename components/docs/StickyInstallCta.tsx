"use client";

import { useEffect, useState } from "react";
import TrackedLink from "./TrackedLink";

const DISMISS_KEY = "atha_sticky_cta_dismissed";
const DISMISS_DAYS = 7;
const DISMISS_MS = DISMISS_DAYS * 24 * 60 * 60 * 1000;

export default function StickyInstallCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const rawValue = window.localStorage.getItem(DISMISS_KEY);
      if (!rawValue) {
        setIsVisible(true);
        return;
      }

      // Migrate legacy permanent-dismiss value.
      if (rawValue === "1") {
        setIsVisible(false);
        return;
      }

      const hiddenUntil = Number(rawValue);
      if (Number.isNaN(hiddenUntil)) {
        setIsVisible(true);
        return;
      }

      setIsVisible(Date.now() >= hiddenUntil);
    };

    const rafId = window.requestAnimationFrame(updateVisibility);
    return () => window.cancelAnimationFrame(rafId);
  }, []);

  const handleClose = () => {
    const hiddenUntil = Date.now() + DISMISS_MS;
    window.localStorage.setItem(DISMISS_KEY, String(hiddenUntil));
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-40 w-[calc(100%-2rem)] max-w-md">
      <div className="rounded-xl border border-amber-300/40 bg-slate-900/95 p-4 shadow-lg backdrop-blur">
        <div className="mb-3 flex items-start justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-300">
            Ready to try ATHA today
          </p>
          <button
            type="button"
            onClick={handleClose}
            className="rounded-md border border-slate-700 px-2 py-1 text-xs font-semibold text-slate-300 hover:bg-slate-800 hover:text-white"
            aria-label="Close install popup"
          >
            Close
          </button>
        </div>

        <div>
          <p className="text-sm text-slate-200">
            Install in under 60 seconds, then run your first safe plan or dry-run.
          </p>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          <TrackedLink
            className="rounded-md bg-amber-400 px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-amber-300"
            href="https://aur.archlinux.org/packages/atha"
            label="conversion__sticky_cta__install_from_aur"
            location="sticky_cta"
          >
            Install in 60s
          </TrackedLink>
          <TrackedLink
            className="rounded-md border border-slate-600 px-3 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-800"
            href="https://raw.githubusercontent.com/Bangkah/Atha/main/install.sh"
            label="consideration__sticky_cta__view_install_script"
            location="sticky_cta"
          >
            Install script
          </TrackedLink>
          <TrackedLink
            className="rounded-md border border-slate-600 px-3 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-800"
            href="https://github.com/Bangkah/Atha/wiki"
            label="consideration__sticky_cta__read_docs"
            location="sticky_cta"
          >
            Docs
          </TrackedLink>
        </div>
      </div>
    </div>
  );
}
