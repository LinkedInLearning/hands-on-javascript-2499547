export default function FeatureList({ items, className = '' }) {
  return (
    <ol className={`divide-y divide-gold/15 border-y border-gold/15 ${className}`}>
      {items.map((item, i) => (
        <li key={item.title} className="flex gap-5 py-5 sm:gap-7">
          <span aria-hidden="true" className="pt-0.5 font-display text-sm font-medium tracking-[0.12em] text-gold">
            {String(i + 1).padStart(2, '0')}
          </span>
          <div>
            <h3 className="font-display text-lg font-medium text-cream">{item.title}</h3>
            <p className="mt-1 text-cream/70">{item.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
