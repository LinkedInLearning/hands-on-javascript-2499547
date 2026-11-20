import Button from '../components/Button.jsx';
import Chip from '../components/Chip.jsx';
import Eyebrow from '../components/Eyebrow.jsx';
import FeatureList from '../components/FeatureList.jsx';
import Gallery from '../components/Gallery.jsx';
import Icon from '../components/Icon.jsx';
import Img from '../components/Img.jsx';
import BeanWatermark from '../components/BeanWatermark.jsx';
import { GALLERY, IMAGES, MACHINE_CHIPS, MACHINE_FEATURES } from '../data/content.js';

export default function Machine() {
  return (
    <section id="machine" aria-labelledby="machine-title" className="tone-dark bean-bg lux relative py-24 md:py-32">
      <BeanWatermark className="-right-24 top-16 hidden w-[26rem] lg:block" />
      <div className="container-site relative">
        {/* About-style intro: portrait image fading into black, copy on the right */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* On small screens the hero already shows the kiosk right above, so this copy is desktop-only */}
          <div className="reveal relative hidden lg:block">
            <div aria-hidden="true" className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_45%_40%,rgba(200,167,107,0.14),transparent_65%)]" />
            <Img
              src={IMAGES.render.src}
              alt={IMAGES.render.alt}
              sizes="(min-width: 1024px) 45vw, 100vw"
              width={978}
              height={1157}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl"
              imgClassName="h-full w-full object-contain"
            />
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg to-transparent" />
          </div>

          <div className="reveal" style={{ '--reveal-delay': '120ms' }}>
            <Eyebrow>01 — The machine</Eyebrow>
            <h2 id="machine-title" className="display mt-5 text-[clamp(2.6rem,5.6vw,4.5rem)]">
              Meet <span className="emph">The Bean Box</span>
            </h2>
            <ul className="mt-7 flex flex-wrap gap-2" aria-label="Highlights">
              {MACHINE_CHIPS.map((c) => (
                <Chip key={c}>{c}</Chip>
              ))}
            </ul>
            <p className="mt-8 font-display text-2xl font-medium text-hi">Your coffee, crafted by a robot.</p>
            <p className="mt-4 max-w-lg text-fg/70">
              A robotic barista inside a glass box. Order on the touchscreen, pay contactless, then watch the arm brew
              your drink and hand over a fresh cup.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Button href="#menu" variant="soft">
                See the menu
              </Button>
              <a href="#film" className="group inline-flex min-h-11 items-center gap-3 text-sm text-fg/85 hover:text-hi">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-fg/25 group-hover:border-accent">
                  <Icon name="play" className="ml-0.5 h-4 w-4" />
                </span>
                Watch the film
              </a>
            </div>
          </div>
        </div>

        {/* Numbered feature cards */}
        <div className="mt-28 md:mt-36">
          <h3 className="reveal display mb-12 text-[clamp(2rem,4.2vw,3.25rem)]">Inside the box</h3>
          <FeatureList items={MACHINE_FEATURES} />
        </div>

        <div className="reveal mt-28 md:mt-36">
          <Gallery
            items={GALLERY}
            label="The Bean Box gallery"
            title={<h3 className="display text-[clamp(2rem,4.2vw,3.25rem)]">Up close</h3>}
          />
        </div>
      </div>
    </section>
  );
}
