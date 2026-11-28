// Guideline buttons: pill shape, Montserrat SemiBold, forest text on sage or on white.
// "primary" reads the section tone: sage pill on forest, forest pill on sage.
const VARIANTS = {
  primary: 'bg-accent text-bg hover:brightness-110 shadow-[0_12px_32px_-14px_rgb(var(--c-accent)/0.7)]',
  white: 'bg-white text-forest hover:bg-sage hover:text-forest shadow-[0_10px_30px_-14px_rgb(0_0_0/0.35)]',
  ghost: 'border border-accent/60 text-fg hover:border-accent hover:bg-accent/10',
  soft: 'bg-fg/10 text-fg hover:bg-fg/15 border border-fg/10',
};

const SIZES = {
  md: 'min-h-11 px-6 text-sm',
  lg: 'min-h-12 px-7 text-[0.95rem]',
};

export default function Button({ href, variant = 'primary', size = 'md', className = '', children, ...rest }) {
  const cls = `lift inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold disabled:cursor-not-allowed disabled:opacity-60 ${VARIANTS[variant]} ${SIZES[size]} ${className}`;
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
