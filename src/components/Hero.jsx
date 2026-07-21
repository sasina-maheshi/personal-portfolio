import Wrap from "./Wrap";

export default function Hero() {
  return (
    <section className="border-b border-line pt-[140px] pb-[120px]">
      <Wrap>
        <div className="mono-label mb-5 text-[13px] text-ink-soft">Sasi — Builder</div>
        <h1 className="mb-7 max-w-[15ch] font-display text-[clamp(2.4rem,5.4vw,4.4rem)] leading-[1.05] font-semibold">
          I build things that work <em className="text-accent not-italic">end to end.</em>
        </h1>
        <p className="mb-10 max-w-[46ch] text-lg leading-[1.6] text-ink-soft">
          Full-stack web, mobile apps, and product design — from the first commit
          to a deployed URL. Currently studying Industrial Management (IT) at the
          University of Kelaniya.
        </p>
        <div className="flex flex-wrap gap-3.5">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-[3px] border border-transparent bg-ink px-[22px] py-[13px] text-sm font-medium text-white no-underline transition-colors duration-150 hover:bg-accent"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-[3px] border border-line-strong bg-transparent px-[22px] py-[13px] text-sm font-medium text-ink no-underline transition-colors duration-150 hover:border-ink"
          >
            Get in touch
          </a>
        </div>
        <div className="mono-label mt-[90px] flex max-w-[640px] justify-between text-[11px] text-ink-soft opacity-70">
          <span>LAT. 6.9271° N</span>
          <span>SRI LANKA</span>
          <span>REV. 2026.07</span>
        </div>
      </Wrap>
    </section>
  );
}
