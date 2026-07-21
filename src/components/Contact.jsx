import Wrap from "./Wrap";
import Eyebrow from "./Eyebrow";
import { PROFILE } from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <Wrap>
        <Eyebrow>Sec. 04 — Contact</Eyebrow>
        <div className="flex flex-wrap items-end justify-between gap-10">
          <p className="m-0 max-w-[16ch] font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold">
            Have a project in mind, or just want to talk shop?
          </p>
          <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
            <li>
              <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2.5 text-[15px] no-underline">
                <span className="font-mono text-[11px] text-ink-soft w-[70px]">Email</span>
                {PROFILE.email}
              </a>
            </li>
            <li>
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-[15px] no-underline">
                <span className="font-mono text-[11px] text-ink-soft w-[70px]">GitHub</span>
                {PROFILE.github.replace("https://", "")}
              </a>
            </li>
            <li>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-[15px] no-underline">
                <span className="font-mono text-[11px] text-ink-soft w-[70px]">LinkedIn</span>
                {PROFILE.linkedin.replace("https://", "")}
              </a>
            </li>
          </ul>
        </div>
      </Wrap>
    </section>
  );
}
