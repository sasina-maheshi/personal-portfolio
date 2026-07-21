export default function Eyebrow({ children }) {
  return (
    <div className="mono-label mb-7 flex items-center gap-2.5 text-[12px] text-accent">
      <span className="h-px w-10 bg-accent opacity-50" />
      {children}
    </div>
  );
}
