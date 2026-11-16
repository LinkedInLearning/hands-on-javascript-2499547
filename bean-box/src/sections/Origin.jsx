import { useRef, useState } from 'react';
import config from '../config.js';
import Img from '../components/Img.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { ORIGIN_TABS } from '../data/content.js';

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
    <section id="coffee" aria-labelledby="coffee-title" className="glow-left relative py-24 md:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="02 — The origin"
          id="coffee-title"
          title={
            <>
              From Rwanda <span className="text-gold-gradient block">to your cup.</span>
            </>
          }
        />

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
                    selected ? 'bg-cream/10 text-cream lg:bg-transparent' : 'text-cream/55 hover:text-cream'
                  }`}
                >
                  <span aria-hidden="true" className={`hidden h-px transition-all lg:block ${selected ? 'w-6 bg-gold' : 'w-3 bg-cream/25'}`} />
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
            sizes="(min-width: 1024px) 50vw, 100vw"
            width={1440}
            height={900}
            className="aspect-[16/10] overflow-hidden rounded-2xl border border-cream/[0.07]"
          />

          <div
            role="tabpanel"
            id={`origin-panel-${tab.id}`}
            aria-labelledby={`origin-tab-${tab.id}`}
            className="flex flex-col"
          >
            <h3 className="font-display text-2xl font-light">{tab.title}</h3>
            <p className="mt-4 text-cream/70">{tab.text}</p>

            {tab.showFacts && facts.length > 0 && (
              <dl className="mt-6 space-y-3 border-t border-cream/10 pt-5 text-sm">
                {facts.map(([k, label]) => (
                  <div key={k} className="flex justify-between gap-4">
                    <dt className="text-cream/55">{label}</dt>
                    <dd className="text-right text-cream">{config.origin[k]}</dd>
                  </div>
                ))}
              </dl>
            )}

            <div className="mt-auto flex items-center justify-between border-t border-cream/10 pt-5 text-sm text-cream/55 lg:mt-10">
              <span>
                {String(active + 1).padStart(2, '0')} / {String(ORIGIN_TABS.length).padStart(2, '0')}
              </span>
              <span className="text-cream/75">Rwandan coffee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
