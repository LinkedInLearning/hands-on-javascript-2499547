import Eyebrow from '../components/Eyebrow.jsx';
import Img from '../components/Img.jsx';
import { IMAGES } from '../data/content.js';
import url from '../url.js';

export default function Statement() {
  return (
    <section aria-labelledby="statement-title" className="tone-dark bean-bg lux relative overflow-hidden py-24 md:py-32">
      <div className="container-site grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="reveal relative order-2 lg:order-1">
          <div aria-hidden="true" className="absolute -inset-4 rounded-[2rem] border border-accent/30" />
          <Img
            src={IMAGES.cupBeans.src}
            alt={IMAGES.cupBeans.alt}
            position="center 62%"
            sizes="(min-width: 1024px) 40vw, 100vw"
            width={1440}
            height={960}
            className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] shadow-[0_40px_80px_-30px_rgb(0_0_0/0.8)]"
          />
        </div>
        <div className="reveal order-1 lg:order-2" style={{ '--reveal-delay': '120ms' }}>
          <Eyebrow>Experience the future of coffee</Eyebrow>
          <h2 id="statement-title" className="display mt-6 text-[clamp(2.3rem,4.8vw,4rem)]">
            We bring together a love for coffee <span className="emph block">+ the power of robotics.</span>
          </h2>
          <div className="gold-line my-8 max-w-md" />
          <div className="max-w-xl space-y-4 text-lg text-fg/85">
            <p>
              The Bean Box combines advanced robotic technology with Rwanda's exceptional coffee heritage to deliver a
              premium, automated coffee experience.
            </p>
            <p>
              Serve world-class coffee through innovative AI-powered coffee solutions designed for modern businesses and
              high-traffic locations.
            </p>
          </div>
          <a href={url('/story.html')} className="mt-8 inline-flex min-h-11 items-center gap-2 font-semibold text-accent hover:text-fg">
            Every cup begins with a story <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
