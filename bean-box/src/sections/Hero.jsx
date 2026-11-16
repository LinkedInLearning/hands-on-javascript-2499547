import Button from '../components/Button.jsx';
import Eyebrow from '../components/Eyebrow.jsx';
import Img from '../components/Img.jsx';
import { IMAGES } from '../data/content.js';

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="glow-forest relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink"
      />
      <div
        className="container-site relative grid items-center gap-12 pb-20 lg:min-h-[100svh] lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:pb-16"
        style={{ paddingTop: 'calc(env(safe-area-inset-top) + 7rem)' }}
      >
        <div className="reveal">
          <Eyebrow>Robotic coffee by Ravens Tech</Eyebrow>
          <h1
            id="hero-title"
            className="mt-6 font-display text-[clamp(2.9rem,10.5vw,6.75rem)] font-semibold uppercase leading-[0.92] tracking-[-0.035em] lg:text-[clamp(3.5rem,6.6vw,6.75rem)]"
          >
            <span className="block">The future of coffee</span>
            <span className="text-gold-gradient block pb-1">is here.</span>
          </h1>
          <p className="mt-7 max-w-xl font-display text-lg text-cream/80 sm:text-xl">
            Premium Rwandan Coffee. Freshly Brewed. Anytime. Anywhere.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="#machine" variant="light" size="lg">
              Discover The Bean Box
            </Button>
            <Button href="#partner" variant="ghost" size="lg">
              Partner With Us
            </Button>
          </div>
        </div>

        <div className="reveal relative mx-auto w-full max-w-md lg:max-w-none" style={{ '--reveal-delay': '150ms' }}>
          {/* Glow and two static concentric rings */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid place-items-center">
            <div className="absolute aspect-square w-[95%] rounded-full bg-[radial-gradient(circle,rgba(200,167,107,0.32)_0%,rgba(200,167,107,0.08)_45%,transparent_70%)] blur-2xl" />
            <div className="absolute aspect-square w-[88%] rounded-full border border-gold/25" />
            <div className="absolute aspect-square w-[66%] rounded-full border border-gold/15" />
          </div>
          <Img
            src={IMAGES.render.src}
            alt={IMAGES.render.alt}
            priority
            sizes="(min-width: 1024px) 42vw, (min-width: 448px) 448px, 100vw"
            width={1440}
            height={1800}
            className="relative aspect-[4/5] overflow-hidden rounded-[2rem]"
            imgClassName="h-full w-full object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)]"
          />
        </div>
      </div>
    </section>
  );
}
