import Icon from './Icon.jsx';

/** Numbered feature cards: centred line icon, gold index, title and text. */
export default function FeatureList({ items, className = '' }) {
  return (
    <ol className={`grid gap-5 md:grid-cols-3 ${className}`}>
      {items.map((item, i) => (
        <li
          key={item.title}
          className="reveal relative rounded-2xl border border-cream/[0.07] bg-graphite px-7 pb-9 pt-12 text-center"
          style={{ '--reveal-delay': `${i * 80}ms` }}
        >
          <span aria-hidden="true" className="absolute left-6 top-5 font-display text-sm tracking-[0.15em] text-gold">
            {String(i + 1).padStart(2, '0')}
          </span>
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-gold/35 text-gold">
            <Icon name={item.icon} className="h-6 w-6" />
          </span>
          <h3 className="mt-6 font-display text-xl font-normal">{item.title}</h3>
          <p className="mx-auto mt-3 max-w-[16rem] text-sm leading-relaxed text-cream/65">{item.text}</p>
        </li>
      ))}
    </ol>
  );
}
