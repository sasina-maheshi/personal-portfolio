import { useEffect, useState } from "react";
import Wrap from "./Wrap";
import Blob from "./Blob";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { useScrollScrub } from "../hooks/useScrollScrub";

const LINE_ONE = ["I", "build", "things", "that", "work"];
const WORD_STEP = 55;

function RevealWord({ children, index, shown }) {
  return (
    <span className="inline-block overflow-hidden pb-[0.1em] align-bottom">
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
        transform: `scale(${1 - progress * 0.06}) translateY(${progress * -20}px)`,
        transformOrigin: "left top",
      };

  return (
    <section id="hero" className="relative overflow-hidden border-b border-line pt-[140px] pb-[120px]">
      <Blob color="terracotta" className="-right-40 -top-24 h-[560px] w-[560px] opacity-[0.16]" />
      <Blob color="olive" className="-bottom-32 -left-24 h-[360px] w-[360px] opacity-[0.12]" />
      <Wrap className="relative z-10">
        <div className="mb-6 text-[13px] font-semibold uppercase tracking-[0.2em] text-accent">
          Sasi — Builder
        </div>
        <div style={scrubStyle}>
          <h1 className="m-0 mb-7 font-display text-[clamp(2.6rem,7.5vw,5.5rem)] font-extrabold leading-[1.05] tracking-tight">
            <span className="block">{revealLine(LINE_ONE, shown)}</span>
            <span className="block overflow-hidden pb-[0.1em]">
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
          to a deployed URL. Currently pursuing a BSc (Hons) in Management and
          Information Technology at the University of Kelaniya.
        </p>
        <div className="flex flex-wrap gap-3.5">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-transparent bg-ink px-6 py-[13px] text-sm font-semibold text-bg no-underline transition-colors duration-150 hover:bg-accent"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-transparent px-6 py-[13px] text-sm font-semibold text-ink no-underline transition-colors duration-150 hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </div>
      </Wrap>
    </section>
  );
}
