const COLOR_CLASS = {
  terracotta: "bg-accent",
  olive: "bg-accent-2",
};

// Soft organic background accent. Pass size/position/opacity via className.
export default function Blob({ color = "terracotta", shape = "blob", className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute -z-10 blur-3xl ${COLOR_CLASS[color] ?? COLOR_CLASS.terracotta} ${
        shape === "arch" ? "rounded-t-full" : "rounded-[42%_58%_65%_35%/45%_40%_60%_55%]"
      } ${className}`}
    />
  );
}
