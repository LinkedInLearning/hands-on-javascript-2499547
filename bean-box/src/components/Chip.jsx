/** Outline pill, as in the guideline's table of contents. */
export default function Chip({ children, className = '' }) {
  return (
    <li className={`inline-flex items-center rounded-full border border-fg/50 px-4 py-1.5 text-sm font-medium text-fg ${className}`}>
      {children}
    </li>
  );
}
