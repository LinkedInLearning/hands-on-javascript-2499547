import Button from '../components/Button.jsx';
import Eyebrow from '../components/Eyebrow.jsx';
import Icon from '../components/Icon.jsx';
import Img from '../components/Img.jsx';
import { IMAGES, STEPS } from '../data/content.js';

export default function Hero() {
  return (
    <>
      <section id="top" aria-labelledby="hero-title" className="glow-left relative overflow-hidden">
        {/* Thin track lines running behind the kiosk */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-[60%] hidden h-24 w-full text-cream/[0.06] lg:block"
          viewBox="0 0 1440 96"
          preserveAspectRatio="none"
          fill="none"
          stroke="currentColor"
        >
          <path d="M0 70H360L420 20H1440" strokeWidth="14" />
          <path d="M0 88H380L440 38H1440" strokeWidth="1" className="text-gold/30" stroke="currentColor" />
        </svg>

        <div
          className="container-site relative grid items-center gap-10 pb-16 lg:min-h-[100svh] lg:grid-cols-[1fr_1fr] lg:gap-4 lg:pb-10"
          style={{ paddingTop: 'calc(env(safe-area-inset-top) + 7rem)' }}
        >
          <div className="reveal">
            <div className="flex gap-5">
              <span aria-hidden="true" className="hidden pt-[1.1rem] font-display text-sm text-cream/50 sm:block">
                01
              </span>
              <div>
                <Eyebrow>Robotic coffee by Ravens Tech</Eyebrow>
                <h1 id="hero-title" className="display mt-5 text-[clamp(2.9rem,9.5vw,6.5rem)] lg:text-[clamp(3.4rem,6vw,6.25rem)]">
                  <span className="block">The future of coffee</span>
                  <span className="text-gold-gradient block pb-1">is here.</span>
                </h1>
                <p className="mt-6 max-w-md text-lg text-cream/75">Premium Rwandan Coffee. Freshly Brewed. Anytime. Anywhere.</p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Button href="#machine" variant="light" size="lg">
                    Discover The Bean Box
                  </Button>
                  <Button href="#partner" variant="ghost" size="lg">
                    Partner With Us
                  </Button>
                </div>

                <div className="mt-14 flex max-w-md items-center gap-4 border-t border-cream/10 pt-6">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/35 text-gold">
                    <Icon name="robot" className="h-5 w-5" />
                  </span>
                  <p className="text-sm text-cream/65">
                    Order on the touchscreen, pay contactless, and watch a robot arm brew your cup.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* The kiosk, floating on a soft gold glow with two static concentric rings */}
          <div className="reveal relative mx-auto w-full max-w-[34rem] lg:max-w-none" style={{ '--reveal-delay': '150ms' }}>
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid place-items-center">
              <div className="absolute aspect-square w-[105%] rounded-full bg-[radial-gradient(circle,rgba(200,167,107,0.28)_0%,rgba(200,167,107,0.07)_42%,transparent_68%)] blur-2xl" />
              <div className="absolute aspect-square w-[96%] rounded-full border border-gold/25" />
              <div className="absolute aspect-square w-[72%] rounded-full border border-gold/15" />
            </div>
            <Img
              src={IMAGES.render.src}
              alt={IMAGES.render.alt}
              priority
              sizes="(min-width: 1024px) 45vw, (min-width: 544px) 34rem, 100vw"
              width={978}
              height={1157}
              className="relative"
              imgClassName="h-auto w-full drop-shadow-[0_50px_60px_rgba(0,0,0,0.7)]"
            />
            <div aria-hidden="true" className="mx-auto -mt-6 h-6 w-3/4 rounded-[100%] bg-gold/15 blur-xl" />
          </div>
        </div>
      </section>

      <div className="bg-ink">
        <div className="container-site">
          <div className="gold-rule" />
        </div>
        <div className="container-site flex items-center gap-8 py-8">
          <span aria-hidden="true" className="hidden h-px w-20 shrink-0 bg-cream/20 md:block" />
          <ol className="no-scrollbar relative -mx-4 flex min-w-0 flex-1 gap-8 overflow-x-auto px-4 md:mx-0 md:justify-between md:px-0" aria-label="How it works">
            {STEPS.map((s, i) => (
              <li key={s.label} className="flex shrink-0 items-center gap-3 text-cream/65">
                <Icon name={s.icon} className="h-5 w-5 text-gold" />
                <span className="font-display text-sm uppercase tracking-[0.18em]">
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
