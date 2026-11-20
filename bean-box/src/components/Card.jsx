/** Surface card: thin accent border on a faint tint, as in the guideline's logo panels. */
export default function Card({ as: Tag = 'article', topBorder = false, className = '', children, ...rest }) {
  return (
    <Tag className={`relative overflow-hidden rounded-2xl border border-accent/30 bg-fg/[0.03] ${className}`} {...rest}>
      {topBorder && <span aria-hidden="true" className="absolute inset-x-0 top-0 z-10 h-[3px] bg-accent" />}
      {children}
    </Tag>
  );
}
