import IconTile from './IconTile.jsx';

/** Numbered feature cards with guideline icon tiles. */
export default function FeatureList({ items, className = '' }) {
  return (
    <ol className={`grid gap-5 md:grid-cols-3 ${className}`}>
      {items.map((item, i) => (
        <li
          key={item.title}
          className="reveal relative rounded-2xl border border-accent/30 bg-fg/[0.03] px-7 pb-9 pt-8"
          style={{ '--reveal-delay': `${i * 80}ms` }}
        >
          <div className="flex items-start justify-between">
            <IconTile name={item.icon} />
            <span aria-hidden="true" className="font-display text-sm font-semibold tracking-[0.15em] text-hi">
              {String(i + 1).padStart(2, '0')}
            </span>
          </div>
          <h3 className="mt-7 font-display text-xl font-semibold text-head">{item.title}</h3>
          <p className="mt-2 text-fg/75">{item.text}</p>
        </li>
      ))}
    </ol>
  );
}
