export default function Eyebrow({ children, className = '', tone = 'dark', as: Tag = 'p' }) {
  const color = tone === 'light' ? 'text-gold-deep' : 'text-gold';
  return (
    <Tag className={`font-display text-xs font-normal uppercase tracking-eyebrow ${color} ${className}`}>{children}</Tag>
  );
}
