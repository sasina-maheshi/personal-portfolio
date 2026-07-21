import { PROFILE } from "../data/profile";
import Wrap from "./Wrap";
import { usePastHero } from "../hooks/usePastHero";
import { useActiveSection } from "../hooks/useActiveSection";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const SECTION_IDS = LINKS.map((l) => l.href.slice(1));

export default function Nav() {
  const scrolled = usePastHero();
  const active = useActiveSection(SECTION_IDS);

  return (
    <header
      className={`sticky top-0 z-10 border-b transition-colors duration-300 ${
        scrolled ? "border-line bg-bg/92 backdrop-blur-md" : "border-transparent bg-bg/30 backdrop-blur-[2px]"
      }`}
    >
      <Wrap className="flex h-16 items-center justify-between">
        <div className="font-display text-lg tracking-wide">{PROFILE.name}</div>
        <ul className="m-0 flex list-none gap-7 p-0">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`font-mono text-[13px] tracking-[0.05em] no-underline transition-colors duration-150 hover:text-accent ${
                  active === link.href.slice(1) ? "text-accent" : "text-ink-soft"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </Wrap>
    </header>
  );
}
