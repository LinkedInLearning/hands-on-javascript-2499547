import Card from '../components/Card.jsx';
import Img from '../components/Img.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { VENUES } from '../data/content.js';

export default function Locations() {
  return (
    <section id="locations" aria-labelledby="locations-title" className="glow-forest relative py-24 md:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="05 — The places"
          id="locations-title"
          title={<>Where The Bean Box <span className="text-gold-gradient">belongs.</span></>}
          intro="Anywhere people need great coffee and nobody has time to wait for it."
        />
        <ul
          aria-label="Venues"
          className="no-scrollbar -mx-4 mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-2 md:mx-0 md:grid md:grid-cols-6 md:gap-5 md:overflow-visible md:px-0 md:pb-0"
        >
          {VENUES.map((v, i) => (
            <li
              key={v.name}
              className={`reveal w-[82%] shrink-0 snap-start sm:w-[60%] md:w-auto ${i < 2 ? 'md:col-span-3' : 'md:col-span-2'}`}
              style={{ '--reveal-delay': `${(i % 3) * 80}ms` }}
            >
              <Card className="lift group h-full hover:border-gold/40">
                <Img
                  src={v.src}
                  alt={v.alt}
                  label={v.label}
                  sizes="(min-width: 768px) 50vw, 82vw"
                  width={1440}
                  height={960}
                  className="aspect-[3/2] overflow-hidden"
                />
                <div className="p-6">
                  <h3 className="font-display text-xl font-medium">{v.name}</h3>
                  <p className="mt-2 text-cream/70">{v.line}</p>
                </div>
              </Card>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-cream/60 md:hidden" aria-hidden="true">Swipe to see more →</p>
      </div>
    </section>
  );
}
