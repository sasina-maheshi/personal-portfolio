import { PROFILE } from "../data/profile";
import Wrap from "./Wrap";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-bg/86 backdrop-blur-[6px]">
      <Wrap className="flex h-16 items-center justify-between">
        <div className="font-display text-[15px] font-semibold">{PROFILE.name}</div>
        <ul className="m-0 flex list-none gap-7 p-0">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-[13px] tracking-[0.05em] text-ink-soft no-underline transition-colors duration-150 hover:text-ink"
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
