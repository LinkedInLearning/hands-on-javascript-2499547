const VARIANTS = {
  gold: 'bg-gold text-ink hover:bg-gold-light shadow-[0_10px_30px_-12px_rgba(200,167,107,0.7)]',
  light: 'bg-cream text-ink hover:bg-gold-light shadow-[0_10px_30px_-14px_rgba(245,241,234,0.55)]',
  soft: 'bg-cream/10 text-cream hover:bg-cream/15 border border-cream/10',
  ghost: 'border border-cream/30 text-cream hover:border-gold hover:text-gold-light bg-ink/20 backdrop-blur-sm',
};

const SIZES = {
  md: 'min-h-11 px-6 text-sm',
  lg: 'min-h-12 px-7 text-[0.95rem]',
};

export default function Button({ href, variant = 'gold', size = 'md', className = '', children, ...rest }) {
  const cls = `lift inline-flex items-center justify-center gap-2 rounded-full font-display font-normal tracking-[0.02em] disabled:cursor-not-allowed disabled:opacity-60 ${VARIANTS[variant]} ${SIZES[size]} ${className}`;
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  );
}
