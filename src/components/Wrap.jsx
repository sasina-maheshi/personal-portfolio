export default function Wrap({ children, className = "" }) {
  return <div className={`mx-auto max-w-[1040px] px-7 ${className}`}>{children}</div>;
}
