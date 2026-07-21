import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

// Returns a 0-1 progress value as the page scrolls through `distance` px.
export function useScrollScrub(distance = 600) {
  const reduced = usePrefersReducedMotion();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (reduced) return;
    let raf = null;

    const measure = () => {
      const p = Math.min(1, Math.max(0, window.scrollY / distance));
      setProgress(p);
      raf = null;
    };
    const onScroll = () => {
      if (raf === null) raf = requestAnimationFrame(measure);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    measure();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, [reduced, distance]);

  return reduced ? 0 : progress;
}
