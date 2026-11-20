import { useRef, useState } from 'react';
import config from '../config.js';
import Img from '../components/Img.jsx';
import DividerBand from '../components/DividerBand.jsx';
import Eyebrow from '../components/Eyebrow.jsx';
import { ORIGIN_TABS, QUESTION_COFFEE } from '../data/content.js';

const FACTS = [
  ['region', 'Region'],
  ['altitude', 'Altitude'],
  ['cooperative', 'Cooperative'],
  ['roaster', 'Roaster'],
];

export default function Origin() {
  const [active, setActive] = useState(0);
  const tabs = useRef([]);
  const facts = FACTS.filter(([k]) => config.origin?.[k]);
  const tab = ORIGIN_TABS[active];

  const onKeyDown = (e) => {
    const last = ORIGIN_TABS.length - 1;
    const next = {
      ArrowDown: active === last ? 0 : active + 1,
      ArrowRight: active === last ? 0 : active + 1,
      ArrowUp: active === 0 ? last : active - 1,
      ArrowLeft: active === 0 ? last : active - 1,
      Home: 0,
      End: last,
    }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <section id="coffee" aria-labelledby="coffee-title" className="tone-light lux relative">
      <DividerBand number="02." title="From Rwanda to your cup" id="coffee-title" />
      <div className="container-site relative py-20 md:py-28">
        <p className="reveal max-w-2xl text-lg font-medium text-fg/85">
          From the growers, to the grinder, to the cup in your hand.
        </p>

        <div className="reveal mt-14 grid gap-8 lg:grid-cols-[11rem_1fr_19rem] lg:gap-10 [&>*]:min-w-0">
          <div
            role="tablist"
            aria-label="From farm to cup"
            aria-orientation="vertical"
            onKeyDown={onKeyDown}
            className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 lg:mx-0 lg:flex-col lg:gap-1 lg:px-0 lg:pt-1"
          >
            {ORIGIN_TABS.map((t, i) => {
              const selected = i === active;
              return (
                <button
                  key={t.id}
                  ref={(el) => (tabs.current[i] = el)}
                  role="tab"
                  type="button"
                  id={`origin-tab-${t.id}`}
                  aria-selected={selected}
                  aria-controls={`origin-panel-${t.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  className={`flex min-h-11 shrink-0 items-center gap-3 rounded-full px-4 text-left text-sm transition-colors lg:rounded-none lg:px-0 ${
                    selected ? 'bg-fg/10 font-semibold text-fg lg:bg-transparent' : 'text-fg/80 hover:text-fg'
                  }`}
                >
                  <span aria-hidden="true" className={`hidden h-px transition-all lg:block ${selected ? 'w-6 bg-accent' : 'w-3 bg-fg/40'}`} />
                  {t.label}
                </button>
              );
            })}
          </div>

          <Img
            key={tab.id}
            src={tab.image.src}
            alt={tab.image.alt}
            label={tab.image.label}
            position={tab.image.position}
            sizes="(min-width: 1024px) 50vw, 100vw"
            width={1440}
            height={900}
            className="aspect-[16/10] overflow-hidden rounded-2xl border border-fg/[0.07]"
          />

          <div
            role="tabpanel"
            id={`origin-panel-${tab.id}`}
            aria-labelledby={`origin-tab-${tab.id}`}
            className="flex flex-col"
          >
            <h3 className="font-display text-2xl font-light">{tab.title}</h3>
            <p className="mt-4 text-fg/70">{tab.text}</p>

            {tab.showFacts && facts.length > 0 && (
              <dl className="mt-6 space-y-3 border-t border-fg/10 pt-5 text-sm">
                {facts.map(([k, label]) => (
                  <div key={k} className="flex justify-between gap-4">
                    <dt className="text-fg/55">{label}</dt>
                    <dd className="text-right text-fg">{config.origin[k]}</dd>
                  </div>
                ))}
              </dl>
            )}

            <div className="mt-auto flex items-center justify-between border-t border-fg/10 pt-5 text-sm text-fg/80 lg:mt-10">
              <span>
                {String(active + 1).padStart(2, '0')} / {String(ORIGIN_TABS.length).padStart(2, '0')}
              </span>
              <span className="text-fg/75">Question Coffee</span>
            </div>
          </div>
        </div>
        {/* Question Coffee */}
        <div className="tone-dark reveal relative mt-24 grid gap-12 overflow-hidden rounded-3xl bg-bg p-7 sm:p-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:p-16">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative">
            <Eyebrow>Our coffee</Eyebrow>
            <h3 className="display mt-5 text-[clamp(2.1rem,4.2vw,3.5rem)]">
              We serve <span className="emph block">Question Coffee.</span>
            </h3>
            <p className="mt-7 text-lg text-fg/80">{QUESTION_COFFEE.mission}</p>
            <p className="mt-4 text-fg/65">{QUESTION_COFFEE.more}</p>
          </div>
          <div className="relative lg:pt-2">
            <h4 className="font-display text-sm uppercase tracking-eyebrow text-accent">Where your money goes</h4>
            <ol className="mt-6 space-y-4">
              {QUESTION_COFFEE.impact.map((step, i) => (
                <li key={step.title} className="flex gap-5 rounded-2xl border border-fg/10 bg-bg/60 p-6">
                  <span aria-hidden="true" className="font-display text-sm tracking-[0.15em] text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="font-display text-xl font-normal text-fg">{step.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-fg/70">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm text-fg/60">Every cup you buy from The Bean Box is Question Coffee.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
