import Wrap from "./Wrap";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

export default function About() {
  return (
    <Reveal as="section" id="about" className="border-b border-line py-24">
      <Wrap>
        <Eyebrow>About</Eyebrow>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="m-0 font-display text-[26px] uppercase leading-[1.3] tracking-tight">
              I started with no web development background, and learned by
              building real, deployed projects instead of tutorials.
            </p>
          </div>
          <div>
            <div className="space-y-4 text-[15.5px] leading-[1.75] text-ink-soft">
              <p>
                I'm an Industrial Management student in the Faculty of Science at
                the University of Kelaniya, working toward an IT-related degree.
                Alongside coursework, I run several concurrent projects — some
                solo, some with a team — spanning web development, mobile apps,
                and product design.
              </p>
              <p>
                Each project has been a way to pick up a new layer of the stack:
                Git workflows and local dev environments first, then deployment
                on Vercel and Render, then databases, real-time systems, and
                CI/CD. I'd rather understand why something works before I run it,
                so most of what's below started as a concept I dug into, not just
                code I copied.
              </p>
            </div>
            <div className="mt-7 grid grid-cols-1 gap-2 border-t border-line pt-5 font-mono text-[12.5px] text-ink-soft">
              <div>
                <b className="font-medium text-ink">Studying:</b> Industrial Management (IT), University of Kelaniya
              </div>
              <div>
                <b className="font-medium text-ink">Focus:</b> Frontend, backend, mobile, DevOps
              </div>
              <div>
                <b className="font-medium text-ink">Currently:</b> Building across 4+ active projects
              </div>
            </div>
          </div>
        </div>
      </Wrap>
    </Reveal>
  );
}
