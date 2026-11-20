import Button from '../components/Button.jsx';
import Eyebrow from '../components/Eyebrow.jsx';
import Icon from '../components/Icon.jsx';
import Img from '../components/Img.jsx';
import { IMAGES, STEPS } from '../data/content.js';

export default function Hero() {
  return (
    <>
      {/* Hero on the kiosk's own green (#182420) with the bean pattern, after the guideline cover layout */}
      <section id="top" aria-labelledby="hero-title" className="tone-dark tone-machine bean-bg lux relative overflow-hidden">
        <div
          className="container-site relative grid items-center gap-10 pb-14 lg:min-h-[100svh] lg:grid-cols-[1fr_1fr] lg:gap-6 lg:pb-16"
          style={{ paddingTop: 'calc(env(safe-area-inset-top) + 7rem)' }}
        >
          <div className="reveal">
            <Eyebrow>Robotic coffee by Ravens Tech</Eyebrow>
            <h1 id="hero-title" className="mt-7 font-display uppercase leading-[0.98] tracking-[-0.02em] text-head">
              <span className="flex items-start gap-4 text-[clamp(2.7rem,8.6vw,6rem)] font-extralight lg:text-[clamp(3.2rem,5.6vw,6rem)]">
                The future of coffee
                <Icon
                  name="arrowUpRight"
                  className="mt-[0.18em] hidden h-[0.62em] w-[0.62em] shrink-0 sm:block"
                  strokeWidth={0.9}
                />
              </span>
              <span className="mt-1 block text-[clamp(2.7rem,8.6vw,6rem)] font-bold lg:text-[clamp(3.2rem,5.6vw,6rem)]">
                is here.
              </span>
            </h1>
            <p className="mt-7 max-w-md text-lg font-medium text-fg/90">
              Premium Rwandan Coffee. Freshly Brewed. Anytime. Anywhere.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="#machine" variant="primary" size="lg">
                Discover The Bean Box
              </Button>
              <Button href="#partner" variant="white" size="lg">
                Partner With Us
              </Button>
            </div>

            <div className="mt-12 flex max-w-md items-center gap-4 border-t border-accent/30 pt-6">
              <span className="grid h-12 w-12 shrink-0 place-items-center bg-accent text-bg">
                <Icon name="robot" className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <p className="text-sm text-fg/80">
                Order on the touchscreen, pay contactless, and watch a robot arm brew your cup.
              </p>
            </div>
          </div>

          {/* The kiosk on sage, with two static concentric rings */}
          <div className="reveal relative mx-auto w-full max-w-[34rem] lg:max-w-none" style={{ '--reveal-delay': '150ms' }}>
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid place-items-center">
              <div className="absolute aspect-square w-[105%] rounded-full bg-[radial-gradient(circle,rgb(85_119_105/0.8)_0%,rgb(201_169_110/0.22)_45%,transparent_70%)] blur-2xl" />
              <div className="absolute aspect-square w-[96%] rounded-full border border-accent/35" />
              <div className="absolute aspect-square w-[72%] rounded-full border border-accent/20" />
            </div>
            <Img
              src={IMAGES.render.src}
              alt={IMAGES.render.alt}
              priority
              sizes="(min-width: 1024px) 45vw, (min-width: 544px) 34rem, 100vw"
              width={978}
              height={1157}
              className="relative"
              imgClassName="h-auto w-full drop-shadow-[0_40px_45px_rgb(0_0_0/0.6)]"
            />
          </div>
        </div>
        {/* Thin rule along the bottom, as on the guideline cover */}
        <div aria-hidden="true" className="container-site relative pb-8">
          <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-eyebrow text-fg/70">
            <span className="h-px flex-1 bg-accent/50" />
            <span className="h-3 w-px bg-accent/70" />
            Rwandan coffee · Robotic barista
            <span className="h-3 w-px bg-accent/70" />
            <span className="h-px w-16 bg-accent/50 sm:w-40" />
          </div>
        </div>
      </section>

      <div className="tone-dark tone-machine bean-bg lux relative border-y border-accent/25">
        <div className="container-site flex items-center gap-8 py-8">
          <ol tabIndex={0} className="no-scrollbar relative -mx-4 flex min-w-0 flex-1 gap-8 overflow-x-auto px-4 md:mx-0 md:justify-between md:px-0" aria-label="How it works">
            {STEPS.map((s, i) => (
              <li key={s.label} className="flex shrink-0 items-center gap-3 text-fg/80">
                <Icon name={s.icon} className="h-5 w-5 text-accent" />
                <span className="font-display text-sm font-medium uppercase tracking-[0.16em]">
                  <span className="sr-only">Step {i + 1}: </span>
                  {s.label}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}
