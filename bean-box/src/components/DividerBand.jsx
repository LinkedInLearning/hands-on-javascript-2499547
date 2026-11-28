import Img from './Img.jsx';
import { IMAGES } from '../data/content.js';

/** Guideline section divider: a translucent sage band over the coffee-cherry photo, with number and title. */
export default function DividerBand({ number, title, id }) {
  return (
    <div className="relative overflow-hidden bg-forest">
      <Img src={IMAGES.cherries.src} alt="" sizes="100vw" width={1000} height={571} className="absolute inset-0 h-full w-full" />
      <div className="relative py-12 md:py-20">
        <div className="tone-light relative bg-bg/[0.86] px-4 py-14 text-center md:py-20">
          <span aria-hidden="true" className="absolute right-0 top-6 h-px w-1/3 bg-fg md:top-8" />
          <span aria-hidden="true" className="absolute bottom-6 left-0 h-px w-1/3 bg-fg md:bottom-8" />
          <h2 id={id} className="reveal font-display font-medium uppercase leading-tight text-head">
            <span className="block text-[clamp(2.2rem,5vw,3.75rem)]">{number}</span>
            <span className="block text-balance text-[clamp(1.9rem,5vw,3.75rem)] tracking-[0.02em]">{title}</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
