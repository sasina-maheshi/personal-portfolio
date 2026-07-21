import Wrap from "./Wrap";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { PROJECTS } from "../data/projects";

export default function Projects() {
  return (
    <Reveal as="section" id="projects" className="border-b border-line py-24">
      <Wrap>
        <Eyebrow>Projects</Eyebrow>
        <div className="flex flex-col gap-6">
          {PROJECTS.map((p, i) => (
            <Reveal
              as="div"
              key={p.n}
              delay={i * 90}
              className="rounded-3xl bg-bg-alt p-8"
            >
              <div className="mb-2.5 flex flex-wrap items-baseline justify-between gap-5">
                <h3 className="m-0 font-display text-[22px] font-bold tracking-tight">
                  <span className="mr-3 text-xs font-semibold text-ink-soft">{p.n}</span>
                  {p.title}
                  <span className="mt-1 block text-sm font-normal text-ink-soft">
                    {p.subtitle}
                  </span>
                </h3>
                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="whitespace-nowrap text-[13px] font-semibold text-accent no-underline hover:underline"
                  >
                    {p.linkLabel} &rarr;
                  </a>
                ) : (
                  <span className="whitespace-nowrap text-[13px] font-medium text-ink-soft">
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
                    className="rounded-full border border-line bg-bg px-3 py-1 text-[11px] font-medium text-ink-soft"
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
