import Icon from './Icon.jsx';

export default function Logo({ className = '', tone = 'dark' }) {
  const text = tone === 'light' ? 'text-ink' : 'text-cream';
  return (
    <a
      href="/#top"
      className={`inline-flex min-h-11 items-center gap-2.5 font-display text-[0.95rem] font-normal uppercase tracking-logo transition-colors ${text} ${className}`}
    >
      <span aria-hidden="true" className={`grid h-8 w-8 place-items-center rounded-full border ${tone === 'light' ? 'border-ink/30 text-gold-deep' : 'border-gold/40 text-gold'}`}>
        <Icon name="bean" className="h-4 w-4" strokeWidth={1.6} />
      </span>
      <span>
        The&nbsp;Bean&nbsp;Box
      </span>
    </a>
  );
}
