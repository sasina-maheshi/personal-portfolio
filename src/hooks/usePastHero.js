import { useEffect, useState } from "react";

// True once the #hero section has scrolled out from under the sticky nav.
export function usePastHero() {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const el = document.getElementById("hero");
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setPast(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-64px 0px 0px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return past;
}
