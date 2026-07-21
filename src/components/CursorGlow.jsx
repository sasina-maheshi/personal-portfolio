import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const SIZE = 620;
const HOVER_QUERY = "(hover: hover) and (pointer: fine)";

export default function CursorGlow() {
  const reduced = usePrefersReducedMotion();
  const ref = useRef(null);
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(HOVER_QUERY);
    setDesktop(mq.matches);
    const onChange = () => setDesktop(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced || !desktop) return;
    const el = ref.current;
    if (!el) return;

    let raf = null;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    const paint = () => {
      el.style.transform = `translate3d(${x - SIZE / 2}px, ${y - SIZE / 2}px, 0)`;
      raf = null;
    };
    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (raf === null) raf = requestAnimationFrame(paint);
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, [reduced, desktop]);

  if (reduced || !desktop) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 rounded-full opacity-[0.10] blur-3xl"
      style={{
        width: SIZE,
        height: SIZE,
        background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
      }}
    />
  );
}
