import { useState } from 'react';
import config from '../config.js';
import Chip from '../components/Chip.jsx';
import FeatureList from '../components/FeatureList.jsx';
import Gallery from '../components/Gallery.jsx';
import Icon from '../components/Icon.jsx';
import Img from '../components/Img.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { GALLERY, IMAGES, MACHINE_CHIPS, MACHINE_FEATURES } from '../data/content.js';

function embedFor(url) {
  const yt = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{6,})/);
  if (yt) return { kind: 'iframe', src: `https://www.youtube-nocookie.com/embed/${yt[1]}?autoplay=1&rel=0` };
  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeo) return { kind: 'iframe', src: `https://player.vimeo.com/video/${vimeo[1]}?autoplay=1` };
  return { kind: 'video', src: url };
}

function ProductFilm() {
  const [playing, setPlaying] = useState(false);
  const url = config.filmUrl;
  const embed = url ? embedFor(url) : null;

  return (
    <figure className="reveal">
      <div className="relative aspect-video overflow-hidden rounded-3xl border border-gold/20 bg-matte">
        {playing && embed ? (
          embed.kind === 'iframe' ? (
            <iframe
              src={embed.src}
              title="The Bean Box product film"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          ) : (
            <video src={embed.src} controls autoPlay playsInline className="absolute inset-0 h-full w-full bg-black object-contain">
              Your browser cannot play this video.
            </video>
          )
        ) : (
          <>
            <Img
              src={IMAGES.concept.src}
              alt=""
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="absolute inset-0 opacity-45"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,8,6,0.2),rgba(8,8,6,0.85))]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-6 text-center">
              {embed ? (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  className="lift group grid h-20 w-20 place-items-center rounded-full bg-gold text-ink shadow-[0_0_0_10px_rgba(200,167,107,0.18)] hover:bg-gold-light sm:h-24 sm:w-24"
                  aria-label="Play the product film"
                >
                  <Icon name="play" className="ml-1 h-8 w-8" />
                </button>
              ) : (
                <span aria-hidden="true" className="grid h-20 w-20 place-items-center rounded-full border border-gold/50 text-gold sm:h-24 sm:w-24">
                  <Icon name="play" className="ml-1 h-8 w-8" />
                </span>
              )}
              <p className="font-display text-xs font-medium uppercase tracking-eyebrow text-gold-light">
                {embed ? 'Watch the product film' : 'Film coming soon'}
              </p>
            </div>
          </>
        )}
      </div>
      <figcaption className="mt-4 text-sm text-cream/70">Product film: The Bean Box at work, from order to hand-off.</figcaption>
    </figure>
  );
}

export default function Machine() {
  return (
    <section id="machine" aria-labelledby="machine-title" className="glow-gold relative py-24 md:py-32">
      <div className="container-site">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="reveal order-2 lg:order-1">
            <div className="relative">
              <div aria-hidden="true" className="absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(circle_at_50%_40%,rgba(20,43,36,0.9),transparent_70%)]" />
              <Img
                src={IMAGES.render.src}
                alt={IMAGES.render.alt}
                sizes="(min-width: 1024px) 45vw, 100vw"
                width={1440}
                height={1800}
                className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-gold/15 bg-matte"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading eyebrow="01 — The machine" id="machine-title" title="Meet The Bean Box" />
            <div className="reveal">
              <p className="text-gold-gradient mt-6 font-display text-2xl font-medium">Your coffee, crafted by a robot.</p>
              <p className="mt-5 text-lg text-cream/75">
                A robotic barista inside a glass box. Order on the touchscreen, pay contactless, then watch the arm brew
                your drink and hand over a fresh cup.
              </p>
              <FeatureList items={MACHINE_FEATURES} className="mt-10" />
              <ul className="mt-8 flex flex-wrap gap-2" aria-label="Highlights">
                {MACHINE_CHIPS.map((c) => (
                  <Chip key={c}>{c}</Chip>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-24 md:mt-32">
          <div className="reveal mb-8 flex items-end justify-between gap-6">
            <h3 className="font-display text-2xl font-medium sm:text-3xl">Up close</h3>
            <div className="gold-rule hidden flex-1 sm:block" />
          </div>
          <div className="reveal">
            <Gallery items={GALLERY} label="The Bean Box gallery" />
          </div>
        </div>

        <div className="mt-24 md:mt-32">
          <div className="reveal mb-8 flex items-end justify-between gap-6">
            <h3 className="font-display text-2xl font-medium sm:text-3xl">See it in motion</h3>
            <div className="gold-rule hidden flex-1 sm:block" />
          </div>
          <ProductFilm />
        </div>
      </div>
    </section>
  );
}
