export default function Eyebrow({ children, className = '', as: Tag = 'p' }) {
  return (
    <Tag className={`flex items-center gap-3 font-display text-xs font-medium uppercase tracking-eyebrow text-gold ${className}`}>
      <span aria-hidden="true" className="h-px w-8 bg-gold/70" />
      {children}
    </Tag>
  );
}
