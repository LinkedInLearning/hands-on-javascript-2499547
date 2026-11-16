export default function Chip({ children, className = '' }) {
  return (
    <li
      className={`inline-flex items-center rounded-full border border-gold/30 bg-forest/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-gold-light ${className}`}
    >
      {children}
    </li>
  );
}
