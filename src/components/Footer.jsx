import Wrap from "./Wrap";
import { PROFILE } from "../data/profile";

export default function Footer() {
  return (
    <footer className="pt-7 pb-10">
      <Wrap className="flex justify-between text-[13px] font-medium text-ink-soft">
        <span>&copy; {new Date().getFullYear()} {PROFILE.name}</span>
        <span>Built with React</span>
      </Wrap>
    </footer>
  );
}
