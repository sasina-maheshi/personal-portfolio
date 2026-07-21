import Wrap from "./Wrap";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { PROJECTS } from "../data/projects";

export default function Projects() {
  return (
    <Reveal as="section" id="projects" className="border-b border-line py-24">
      <Wrap>
        <Eyebrow>Projects</Eyebrow>
        <div>
          {PROJECTS.map((p, i) => (
            <Reveal
              as="div"
              key={p.n}
              delay={i * 90}
              className={`border-t border-line py-9 ${i === PROJECTS.length - 1 ? "border-b" : ""}`}
            >
              <div className="mb-2.5 flex flex-wrap items-baseline justify-between gap-5">
                <h3 className="m-0 font-display text-[26px] uppercase tracking-tight">
                  <span className="mr-3 font-mono text-xs font-normal normal-case tracking-normal text-ink-soft">
                    {p.n}
                  </span>
                  {p.title}
                  <span className="mt-1 block font-sans text-sm font-normal normal-case tracking-normal text-ink-soft">
                    {p.subtitle}
                  </span>
                </h3>
                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="whitespace-nowrap font-mono text-[12px] text-accent no-underline hover:underline"
                  >
                    {p.linkLabel} &rarr;
                  </a>
                ) : (
                  <span className="whitespace-nowrap font-mono text-[12px] text-ink-soft">
                    {p.linkLabel}
                  </span>
                )}
              </div>
              <p className="m-0 mb-4 max-w-[62ch] text-[15px] leading-[1.7] text-ink-soft">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-[3px] border border-line px-[9px] py-1 font-mono text-[11px] text-ink-soft"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Wrap>
    </Reveal>
  );
}
