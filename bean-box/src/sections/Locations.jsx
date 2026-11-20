import Eyebrow from '../components/Eyebrow.jsx';
import Img from '../components/Img.jsx';
import { VENUES } from '../data/content.js';

export default function Locations() {
  return (
    <section id="locations" aria-labelledby="locations-title" className="tone-dark bean-bg lux relative overflow-hidden py-24 md:py-32">
      {/* Thin sweeping line behind the cards */}
      <svg aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-1/2 hidden h-64 w-full text-fg/10 md:block" viewBox="0 0 1440 256" preserveAspectRatio="none" fill="none">
        <path d="M0 220C320 220 420 60 760 60S1180 200 1440 140" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      <div className="container-site relative grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20 [&>*]:min-w-0">
        <div className="reveal lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>05 — The places</Eyebrow>
          <h2 id="locations-title" className="display mt-5 text-[clamp(2.4rem,5.2vw,4.25rem)]">
            Where The Bean Box <span className="emph">belongs.</span>
          </h2>
          <div className="mt-8 h-px w-full max-w-sm bg-fg/20" />
          <p className="mt-8 max-w-md text-fg/65">Anywhere people need great coffee and nobody has time to wait for it.</p>
        </div>

        <div>
          <ul
            tabIndex={0}
            aria-label="Venues"
            className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-2 md:mx-0 md:flex-col md:overflow-visible md:px-0 md:pb-0"
          >
            {VENUES.map((v, i) => (
              <li
                key={v.name}
                className="reveal w-[80%] shrink-0 snap-start sm:w-[55%] md:w-auto"
                style={{ '--reveal-delay': `${i * 60}ms` }}
              >
                <article className="lift flex h-full flex-col overflow-hidden rounded-2xl border border-fg/[0.07] bg-fg/[0.035] backdrop-blur hover:border-accent/30 md:flex-row-reverse md:items-center md:gap-6 md:p-5">
                  <Img
                    src={v.src}
                    alt={v.alt}
                    label={v.label}
                    position={v.position}
                    sizes="(min-width: 768px) 14rem, 80vw"
                    width={960}
                    height={640}
                    className="aspect-[3/2] shrink-0 overflow-hidden md:w-56 md:rounded-xl"
                  />
                  <div className="flex-1 p-6 md:p-1">
                    <h3 className="font-display text-xl font-normal">{v.name}</h3>
                    <p className="mt-2 text-sm text-fg/65">{v.line}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-fg/60 md:hidden" aria-hidden="true">
            Swipe to see more →
          </p>
        </div>
      </div>
    </section>
  );
}
