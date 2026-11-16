export default function Eyebrow({ children, className = '', as: Tag = 'p' }) {
  return (
    <Tag className={`font-display text-xs font-normal uppercase tracking-eyebrow text-gold ${className}`}>{children}</Tag>
  );
}
