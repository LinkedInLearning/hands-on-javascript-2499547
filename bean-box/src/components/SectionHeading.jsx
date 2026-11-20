import Eyebrow from './Eyebrow.jsx';

/** Eyebrow + thin uppercase display title. `aside` renders on the right (intro text or controls). */
export default function SectionHeading({ eyebrow, title, id, intro, aside, className = '' }) {
  return (
    <div className={`reveal flex flex-col gap-6 md:flex-row md:items-end md:justify-between ${className}`}>
      <div className="max-w-3xl">
        {eyebrow && <Eyebrow className="mb-5">{eyebrow}</Eyebrow>}
        <h2 id={id} className="display text-balance text-[clamp(2.4rem,5.2vw,4.25rem)]">
          {title}
        </h2>
      </div>
      {intro && <p className="max-w-sm text-fg/65 md:pb-2">{intro}</p>}
      {aside}
    </div>
  );
}
