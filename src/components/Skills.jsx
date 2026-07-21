import Wrap from "./Wrap";
import Eyebrow from "./Eyebrow";
import { SKILLS } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line py-24">
      <Wrap>
        <Eyebrow>Sec. 02 — Skills</Eyebrow>
        <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2">
          {SKILLS.map((s) => (
            <div className="bg-bg px-[30px] py-7" key={s.label}>
              <h3 className="mb-3.5 font-mono text-[12px] font-medium tracking-[0.08em] text-accent uppercase">
                {s.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <span
                    key={i}
                    className="rounded-[3px] border border-line bg-bg-alt px-2.5 py-[5px] text-[13px]"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
