import SectionHeading from '../components/SectionHeading.jsx';
import { MENU } from '../data/content.js';

export default function Menu() {
  return (
    <section id="menu" aria-labelledby="menu-title" className="tone-dark bean-bg lux relative py-24 md:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="03 — The menu"
          id="menu-title"
          title="Our menu"
          intro="Classic coffee drinks made with Question Coffee, plus a rich hot chocolate. Made one cup at a time."
        />
        <div className="reveal mt-14 overflow-hidden rounded-3xl border border-fg/[0.07] bg-fg/[0.035]">
          <span aria-hidden="true" className="block h-[3px] bg-accent" />
          <ol className="grid px-6 sm:px-10 md:grid-cols-2 md:gap-x-16 lg:px-14">
            {MENU.map((name, i) => (
              <li key={name} className="flex items-baseline gap-6 border-b border-fg/10 py-6 last:border-b-0">
                <span aria-hidden="true" className="w-7 shrink-0 font-display text-sm tracking-[0.15em] text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="display text-[clamp(1.6rem,3vw,2.25rem)]">{name}</span>
              </li>
            ))}
          </ol>
          <div className="flex flex-col gap-3 border-t border-accent/20 px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-14">
            <p className="text-fg/75">
              <span className="font-display text-xs uppercase tracking-eyebrow text-accent">Seasonal signatures</span>
              <span className="mt-2 block">Question Coffee baristas created a signature coffee for The Bean Box for each of the four seasons.</span>
            </p>
            <a href="#film" className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm text-hi hover:text-accent">
              Watch the film <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
