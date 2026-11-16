export default function Chip({ children, className = '' }) {
  return (
    <li
      className={`inline-flex items-center rounded-full border border-cream/20 px-4 py-1.5 text-xs text-cream/85 ${className}`}
    >
      {children}
    </li>
  );
}
