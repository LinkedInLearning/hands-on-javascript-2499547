import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Eyebrow from './components/Eyebrow.jsx';
import Button from './components/Button.jsx';
import Img from './components/Img.jsx';
import BeanWatermark from './components/BeanWatermark.jsx';
import { STORY } from './data/content.js';
import useReveal from './useReveal.js';
import url from './url.js';

export default function Story() {
  useReveal();
  const home = url('/');
  return (
    <>
      <Header base={home} />
      <main id="main" tabIndex={-1} className="outline-none">
        <section aria-labelledby="story-title" className="tone-dark bean-bg lux relative overflow-hidden">
          <BeanWatermark className="-right-24 top-24 hidden w-[24rem] lg:block" />
          <div className="container-site relative pb-20 text-center md:pb-28" style={{ paddingTop: 'calc(env(safe-area-inset-top) + 9rem)' }}>
            <Eyebrow className="justify-center">Our story</Eyebrow>
            <h1 id="story-title" className="display mx-auto mt-6 max-w-4xl text-[clamp(2.7rem,7vw,5.75rem)]">
              Every cup begins <span className="emph block">with a story.</span>
            </h1>
            <div className="gold-line mx-auto mt-10 max-w-md" />
            <ol className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium uppercase tracking-[0.16em] text-fg/80" aria-label="Chapters">
              {STORY.map((c) => (
                <li key={c.n}>
                  <a href={`#chapter-${c.n}`} className="inline-flex min-h-11 items-center gap-2 hover:text-accent">
                    <span className="text-accent">{c.n}</span> {c.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {STORY.map((c, i) => {
          const light = i % 2 === 1;
          return (
            <section
              key={c.n}
              id={`chapter-${c.n}`}
              aria-labelledby={`chapter-${c.n}-title`}
              className={`${light ? 'tone-light lux' : 'tone-dark bean-bg lux'} relative overflow-hidden py-20 md:py-28`}
            >
              <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
                <div className={`reveal relative ${i % 2 ? 'lg:order-2' : ''}`}>
                  <div aria-hidden="true" className="absolute -inset-4 border border-accent/40" />
                  <Img
                    src={c.image.src}
                    alt={c.image.alt}
                    label={c.image.label}
                    position={c.image.position}
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    width={1440}
                    height={1080}
                    className={`relative aspect-[4/3] overflow-hidden ${c.image.contain ? 'bg-sage/10' : ''}`}
                    imgClassName={c.image.contain ? 'h-full w-full object-contain p-6' : 'h-full w-full object-cover'}
                  />
                </div>
                <div className="reveal" style={{ '--reveal-delay': '120ms' }}>
                  <p aria-hidden="true" className="font-display text-[clamp(4rem,9vw,7.5rem)] font-extralight leading-none text-accent">
                    {c.n}
                  </p>
                  <h2 id={`chapter-${c.n}-title`} className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-bold uppercase leading-tight text-head">
                    <span className="sr-only">Chapter {c.n}: </span>
                    {c.title}
                  </h2>
                  <div className="my-7 h-px w-24 bg-accent" />
                  <p className="max-w-lg text-xl leading-relaxed text-fg/90">{c.text}</p>
                </div>
              </div>
            </section>
          );
        })}

        <section aria-labelledby="story-cta" className="tone-dark bean-bg lux py-20 text-center md:py-28">
          <div className="container-site">
            <h2 id="story-cta" className="display mx-auto max-w-3xl text-[clamp(2.2rem,4.8vw,3.75rem)]">
              Taste the story <span className="emph">for yourself.</span>
            </h2>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={`${home}#menu`} size="lg">See the menu</Button>
              <Button href={`${home}#programs`} variant="ghost" size="lg">Become a Partner</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer base={home} />
    </>
  );
}
