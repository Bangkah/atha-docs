"use client";

import { useEffect } from "react";
import { trackScrollDepth } from "./analytics";

const DEPTH_STEPS = [25, 50, 75, 100] as const;

export default function ScrollDepthTracker() {
  useEffect(() => {
    const sent = new Set<number>();

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const viewportHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const maxScrollable = Math.max(docHeight - viewportHeight, 1);
      const currentPercent = Math.min(100, Math.round((scrollTop / maxScrollable) * 100));

      DEPTH_STEPS.forEach((step) => {
        if (currentPercent >= step && !sent.has(step)) {
          sent.add(step);
          trackScrollDepth(step);
        }
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
