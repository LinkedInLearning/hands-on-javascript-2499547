import Eyebrow from './Eyebrow.jsx';

export default function SectionHeading({ eyebrow, title, id, intro, align = 'left', className = '' }) {
  const center = align === 'center';
  return (
    <div className={`reveal ${center ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      {eyebrow && <Eyebrow className={center ? 'justify-center' : ''}>{eyebrow}</Eyebrow>}
      <h2 id={id} className="mt-5 text-balance font-display text-[clamp(2.25rem,5.5vw,4.25rem)] font-medium uppercase leading-[0.98] tracking-[-0.02em]">
        {title}
      </h2>
      {intro && <p className={`mt-6 text-lg text-cream/75 ${center ? 'mx-auto' : ''} max-w-2xl`}>{intro}</p>}
    </div>
  );
}
