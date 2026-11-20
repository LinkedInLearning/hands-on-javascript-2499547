import { LogoArt } from './Logo.jsx';

/** Large faded bean mark, as on the guideline's Brand Overview and closing pages. Decorative. */
export default function BeanWatermark({ className = '' }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute text-accent/[0.09] ${className}`}>
      <LogoArt variant="mark" decorative />
    </div>
  );
}
