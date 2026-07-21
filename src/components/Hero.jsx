import { useEffect, useState } from "react";
import Wrap from "./Wrap";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { useScrollScrub } from "../hooks/useScrollScrub";

const LINE_ONE = ["I", "build", "things", "that", "work"];
const WORD_STEP = 55;

function RevealWord({ children, index, shown }) {
  return (
    <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
      <span
        className="inline-block transition-all duration-700 ease-out"
        style={{
          transitionDelay: `${index * WORD_STEP}ms`,
          transform: shown ? "translateY(0)" : "translateY(115%)",
          opacity: shown ? 1 : 0,
        }}
      >
        {children}
      </span>
    </span>
  );
}

function revealLine(words, shown) {
  return words.flatMap((word, i) => {
    const nodes = [
      <RevealWord key={`w-${i}`} index={i} shown={shown}>
        {word}
      </RevealWord>,
    ];
    if (i < words.length - 1) nodes.push(" ");
    return nodes;
  });
}

export default function Hero() {
  const reduced = usePrefersReducedMotion();
  const [shown, setShown] = useState(reduced);
  const progress = useScrollScrub(700);

  useEffect(() => {
    if (reduced) return;
    const raf = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  const scrubStyle = reduced
    ? undefined
    : {
        transform: `scale(${1 - progress * 0.08}) translateY(${progress * -24}px)`,
        transformOrigin: "left top",
      };

  return (
    <section id="hero" className="border-b border-line pt-[140px] pb-[120px]">
      <Wrap>
        <div className="mb-6 font-mono text-[13px] uppercase tracking-[0.2em] text-accent">
          Sasi — Builder
        </div>
        <div style={scrubStyle}>
          <h1 className="m-0 mb-7 font-display text-[clamp(3.2rem,11vw,8.5rem)] leading-[0.92] uppercase tracking-tight">
            <span className="block">{revealLine(LINE_ONE, shown)}</span>
            <span className="block overflow-hidden pb-[0.08em]">
              <span
                className="inline-block text-accent transition-all duration-700 ease-out"
                style={{
                  transitionDelay: `${LINE_ONE.length * WORD_STEP + 80}ms`,
                  transform: shown ? "translateY(0)" : "translateY(115%)",
                  opacity: shown ? 1 : 0,
                }}
              >
                end to end.
              </span>
            </span>
          </h1>
        </div>
        <p className="mb-10 max-w-[46ch] text-lg leading-[1.6] text-ink-soft">
          Full-stack web, mobile apps, and product design — from the first commit
          to a deployed URL. Currently studying Industrial Management (IT) at the
          University of Kelaniya.
        </p>
        <div className="flex flex-wrap gap-3.5">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-[3px] border border-transparent bg-ink px-[22px] py-[13px] text-sm font-medium text-bg no-underline transition-colors duration-150 hover:bg-accent"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-[3px] border border-line-strong bg-transparent px-[22px] py-[13px] text-sm font-medium text-ink no-underline transition-colors duration-150 hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </div>
      </Wrap>
    </section>
  );
}
