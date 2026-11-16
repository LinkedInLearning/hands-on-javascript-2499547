/** Surface card. `topBorder` adds the gold gradient top edge. */
export default function Card({ as: Tag = 'article', topBorder = false, className = '', children, ...rest }) {
  return (
    <Tag
      className={`relative overflow-hidden rounded-2xl border border-cream/10 bg-matte/70 ${className}`}
      {...rest}
    >
      {topBorder && (
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 z-10 h-[3px] bg-gradient-to-r from-gold-light via-gold to-gold/40"
        />
      )}
      {children}
    </Tag>
  );
}
