import Wrap from "./Wrap";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { SKILLS } from "../data/skills";

export default function Skills() {
  return (
    <Reveal as="section" id="skills" className="border-b border-line py-24">
      <Wrap>
        <Eyebrow>Skills</Eyebrow>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
          {SKILLS.map((s) => (
            <div className="bg-bg px-[30px] py-7" key={s.label}>
              <h3 className="mb-3.5 text-xs font-semibold tracking-[0.1em] text-accent uppercase">
                {s.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <span
                    key={i}
                    className="rounded-full border border-line bg-bg-alt px-3 py-[5px] text-[13px]"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Wrap>
    </Reveal>
  );
}
