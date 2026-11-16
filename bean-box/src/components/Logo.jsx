export default function Logo({ className = '' }) {
  return (
    <a href="/#top" className={`inline-flex min-h-11 items-center font-display text-[0.95rem] font-medium uppercase tracking-logo text-cream sm:text-base ${className}`}>
      <span className="text-gold-light">The</span>&nbsp;Bean&nbsp;Box
    </a>
  );
}
