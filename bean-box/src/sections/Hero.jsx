import Button from '../components/Button.jsx';
import Eyebrow from '../components/Eyebrow.jsx';
import Icon from '../components/Icon.jsx';
import Img from '../components/Img.jsx';
import { IMAGES, STEPS } from '../data/content.js';

export default function Hero() {
  return (
    <>
      <section id="top" aria-labelledby="hero-title" className="on-light relative overflow-hidden bg-cream text-ink">
        {/* Thin track lines, echoing the kiosk's counter */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-[58%] hidden h-24 w-full text-ink/10 lg:block"
          viewBox="0 0 1440 96"
          preserveAspectRatio="none"
          fill="none"
          stroke="currentColor"
        >
          <path d="M0 70H360L420 20H1440" strokeWidth="14" />
          <path d="M0 88H380L440 38H1440" strokeWidth="1" />
        </svg>

        <div
          className="container-site relative grid gap-12 lg:min-h-[100svh] lg:grid-cols-[1.15fr_0.85fr] lg:gap-6"
          style={{ paddingTop: 'calc(env(safe-area-inset-top) + 7rem)' }}
        >
          <div className="reveal flex flex-col justify-center lg:pb-28">
            <div className="flex gap-5">
              <span aria-hidden="true" className="hidden pt-[1.1rem] font-display text-sm text-ink/55 sm:block">
                01
              </span>
              <div>
                <Eyebrow tone="light">Robotic coffee by Ravens Tech</Eyebrow>
                <h1 id="hero-title" className="display mt-5 text-[clamp(2.9rem,9.5vw,6.5rem)] lg:text-[clamp(3.5rem,6.4vw,6.5rem)]">
                  <span className="block">The future of coffee</span>
                  <span className="text-gold-deep-gradient block pb-1">is here.</span>
                </h1>
                <p className="mt-6 max-w-md text-lg text-ink/70">Premium Rwandan Coffee. Freshly Brewed. Anytime. Anywhere.</p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Button href="#machine" variant="dark" size="lg">
                    Discover The Bean Box
                  </Button>
                  <Button href="#partner" variant="outlineDark" size="lg">
                    Partner With Us
                  </Button>
                </div>

                <div className="mt-14 flex max-w-md items-center gap-4 border-t border-ink/10 pt-6">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-ink/20 text-gold-deep">
                    <Icon name="robot" className="h-5 w-5" />
                  </span>
                  <p className="text-sm text-ink/65">
                    Order on the touchscreen, pay contactless, and watch a robot arm brew your cup.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Kiosk in a dark arch with a soft gold glow and two static rings */}
          <div className="reveal relative mx-auto w-full max-w-[26rem] self-end lg:max-w-[30rem]" style={{ '--reveal-delay': '150ms' }}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] bg-[radial-gradient(circle_at_50%_38%,#24463b_0%,#142B24_45%,#0b1813_100%)]">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid place-items-center">
                <div className="absolute aspect-square w-[90%] rounded-full bg-[radial-gradient(circle,rgba(200,167,107,0.35)_0%,rgba(200,167,107,0.08)_45%,transparent_70%)] blur-2xl" />
                <div className="absolute aspect-square w-[84%] rounded-full border border-gold/30" />
                <div className="absolute aspect-square w-[62%] rounded-full border border-gold/20" />
              </div>
              <Img
                src={IMAGES.render.src}
                alt={IMAGES.render.alt}
                priority
                sizes="(min-width: 1024px) 30rem, (min-width: 448px) 26rem, 100vw"
                width={1440}
                height={1800}
                className="relative h-full w-full"
                imgClassName="h-full w-full object-contain object-bottom drop-shadow-[0_40px_60px_rgba(0,0,0,0.55)]"
              />
            </div>
          </div>
        </div>

        {/* Angled dark edge leading into the rest of the page */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 right-0 hidden h-16 w-[64%] bg-ink lg:block"
          style={{ clipPath: 'polygon(7% 0, 100% 0, 100% 100%, 0 100%)' }}
        />
      </section>

      <div className="bg-ink">
        <div className="container-site flex items-center gap-8 py-8">
          <span aria-hidden="true" className="hidden h-px w-20 shrink-0 bg-cream/20 md:block" />
          <ol className="no-scrollbar relative -mx-4 flex min-w-0 flex-1 gap-8 overflow-x-auto px-4 md:mx-0 md:justify-between md:px-0" aria-label="How it works">
            {STEPS.map((s, i) => (
              <li key={s.label} className="flex shrink-0 items-center gap-3 text-cream/60">
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
