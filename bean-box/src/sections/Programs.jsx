import Button from '../components/Button.jsx';
import Eyebrow from '../components/Eyebrow.jsx';
import Icon from '../components/Icon.jsx';
import { PROGRAMS } from '../data/content.js';

/** Tells the inquiry form which option and programme to preselect. */
export function choose(type, tier = '') {
  window.dispatchEvent(new CustomEvent('beanbox:choose', { detail: { type, tier } }));
}

export default function Programs() {
  return (
    <section id="programs" aria-labelledby="programs-title" className="tone-dark bean-bg lux relative py-24 md:py-32">
      <div className="container-site">
        <div className="reveal max-w-3xl">
          <Eyebrow>06 — Ways to partner</Eyebrow>
          <h2 id="programs-title" className="display mt-5 text-[clamp(2.4rem,5.2vw,4.25rem)]">
            Own the future <span className="emph block">of coffee.</span>
          </h2>
        </div>

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {PROGRAMS.map((p, i) => (
            <li key={p.id} className="reveal" style={{ '--reveal-delay': `${i * 90}ms` }}>
              <article className="group relative flex h-full flex-col border border-accent/40 bg-bg/70 p-8 backdrop-blur-[2px] transition-colors hover:border-accent sm:p-10">
                <span aria-hidden="true" className="absolute inset-x-8 top-0 h-px bg-accent sm:inset-x-10" />
                <div className="flex items-start justify-between">
                  <Icon name={p.icon} className="h-16 w-16 text-head" strokeWidth={1.1} />
                  <span aria-hidden="true" className="font-display text-sm font-semibold tracking-[0.2em] text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-2xl font-semibold text-head">{p.name}</h3>
                <div className="gold-line my-6" />
                <dl className="flex-1 space-y-5">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-eyebrow text-accent">Designed for</dt>
                    <dd className="mt-2 text-fg/85">{p.designedFor}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-eyebrow text-accent">Investment</dt>
                    <dd className="mt-2 font-medium text-fg">{p.investment}</dd>
                  </div>
                </dl>
                <a
                  href="#partner"
                  onClick={() => choose(p.type, p.name)}
                  className="mt-8 inline-flex min-h-11 items-center gap-2 self-start font-semibold text-accent hover:text-fg"
                >
                  Enquire about this programme <span aria-hidden="true">→</span>
                </a>
              </article>
            </li>
          ))}
        </ul>

        {/* Call to action */}
        <div className="reveal relative mt-24 border-y border-accent/40 px-2 py-16 text-center md:mt-32 md:py-20">
          <h2 className="display mx-auto max-w-3xl text-[clamp(2.2rem,4.8vw,3.75rem)]">
            Ready to build <span className="emph">the future of coffee?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-fg/85">
            Whether you are looking to own a single robot kiosk, develop your local market, or lead The Bean Box across an
            entire region, there is a place for you in the future of automated coffee.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#partner" size="lg" onClick={() => choose('partner')}>
              Become a Partner
            </Button>
            <Button href="#partner" variant="ghost" size="lg">
              Request more information
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
