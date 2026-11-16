import config from '../config.js';
import Img from '../components/Img.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { IMAGES } from '../data/content.js';

const FACTS = [
  ['region', 'Region'],
  ['altitude', 'Altitude'],
  ['cooperative', 'Cooperative'],
  ['roaster', 'Roaster'],
];

export default function Origin() {
  const facts = FACTS.filter(([k]) => config.origin?.[k]);

  return (
    <section id="coffee" aria-labelledby="coffee-title" className="glow-forest relative py-24 md:py-32">
      <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading eyebrow="02 — The origin" id="coffee-title" title={<>From Rwanda <span className="text-gold-gradient">to your cup.</span></>} />
          <div className="reveal mt-8 space-y-5 text-lg text-cream/75">
            <p>Every cup from The Bean Box is brewed with coffee from Rwanda.</p>
            <p>
              The beans travel from the farm, to the roaster, to the grinder inside the machine. Nothing is ground or
              poured until you order.
            </p>
          </div>

          {facts.length > 0 && (
            <dl className="reveal mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-gold/15 bg-gold/15">
              {facts.map(([k, label]) => (
                <div key={k} className="bg-ink/95 p-5">
                  <dt className="font-display text-xs font-medium uppercase tracking-eyebrow text-gold">{label}</dt>
                  <dd className="mt-2 font-display text-lg text-cream">{config.origin[k]}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>

        <div className="reveal relative" style={{ '--reveal-delay': '120ms' }}>
          <Img
            src={IMAGES.farm.src}
            alt={IMAGES.farm.alt}
            label={IMAGES.farm.label}
            sizes="(min-width: 1024px) 45vw, 100vw"
            width={1440}
            height={1800}
            className="aspect-[4/5] overflow-hidden rounded-3xl border border-gold/15"
          />
          <div aria-hidden="true" className="absolute -bottom-5 -left-5 -z-10 h-2/3 w-2/3 rounded-3xl border border-gold/20" />
        </div>
      </div>
    </section>
  );
}
