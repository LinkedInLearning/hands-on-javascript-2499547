import Icon from './Icon.jsx';

/** Guideline iconography: line icon on a solid square tile (forest on sage, inverted on light sections). */
export default function IconTile({ name, className = '' }) {
  return (
    <span className={`grid h-16 w-16 shrink-0 place-items-center bg-accent text-bg ${className}`}>
      <Icon name={name} className="h-8 w-8" strokeWidth={1.5} />
    </span>
  );
}
