import { useState } from 'react';
import config from '../config.js';
import Icon from '../components/Icon.jsx';
import Img from '../components/Img.jsx';
import { IMAGES } from '../data/content.js';
import url from '../url.js';

function embedFor(url) {
  const yt = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{6,})/);
  if (yt) return { kind: 'iframe', src: `https://www.youtube-nocookie.com/embed/${yt[1]}?autoplay=1&rel=0` };
  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeo) return { kind: 'iframe', src: `https://player.vimeo.com/video/${vimeo[1]}?autoplay=1` };
  return { kind: 'video', src: url };
}

/** Full-width product film banner. Without config.filmUrl it reads "Film coming soon". */
export default function Film() {
  const [playing, setPlaying] = useState(false);
  const embed = config.filmUrl ? embedFor(url(config.filmUrl)) : null;
  const poster = url(config.filmPoster);

  return (
    <section id="film" aria-labelledby="film-title" className="tone-dark bean-bg lux py-12 md:py-20">
      <div className="container-site">
        <div className="reveal relative overflow-hidden rounded-3xl border border-fg/[0.07] bg-fg/[0.035]">
          {playing && embed ? (
            <div className="relative aspect-video">
              <h2 id="film-title" className="sr-only">
                The Bean Box barista competition film
              </h2>
              {embed.kind === 'iframe' ? (
                <iframe
                  src={embed.src}
                  title="The Bean Box barista competition film"
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              ) : (
                <video
                  src={embed.src}
                  poster={poster || undefined}
                  controls
                  autoPlay
                  playsInline
                  aria-label="The Blind Barista Challenge at Question Coffee"
                  className="absolute inset-0 h-full w-full bg-black object-contain"
                >
                  Your browser cannot play this video.
                </video>
              )}
            </div>
          ) : (
            <div className="relative grid min-h-[26rem] items-end md:aspect-[21/9] md:min-h-0 md:items-center">
              {poster ? (
                <img
                  src={poster}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width={1024}
                  height={576}
                  className="absolute inset-0 h-full w-full object-cover opacity-75"
                  style={{ objectPosition: '30% 50%' }}
                />
              ) : (
                <Img src={IMAGES.highlands.src} alt="" position="center 38%" sizes="(min-width: 1280px) 1216px, 100vw" width={1024} height={1820} className="absolute inset-0 opacity-70" />
              )}
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-bg/95 via-bg/60 to-bg/30" />

              <div className="relative grid gap-8 p-7 sm:p-12 md:grid-cols-[1.2fr_auto_1fr] md:items-center md:gap-10 lg:p-16">
                <h2 id="film-title" className="display text-[clamp(2.5rem,6vw,5rem)]">
                  Crafted for <span className="emph block">every season.</span>
                </h2>
                <div className="flex md:justify-center">
                  {embed ? (
                    <button
                      type="button"
                      onClick={() => setPlaying(true)}
                      aria-label="Play the barista competition film"
                      className="lift grid h-20 w-20 place-items-center rounded-full bg-fg/15 text-fg backdrop-blur hover:bg-accent hover:text-bg"
                    >
                      <Icon name="play" className="ml-1 h-7 w-7" />
                    </button>
                  ) : (
                    <span aria-hidden="true" className="grid h-20 w-20 place-items-center rounded-full border border-fg/25 bg-fg/5 text-fg/70 backdrop-blur">
                      <Icon name="play" className="ml-1 h-7 w-7" />
                    </span>
                  )}
                </div>
                <div className="max-w-sm text-sm text-fg/80">
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                    {embed ? 'The Blind Barista Challenge · 1 min' : 'Film coming soon'}
                  </p>
                  <p className="mt-3">
                    At our barista competition at Question Coffee, the Blind Barista Challenge, baristas created signature coffees for The Bean Box, one
                    for each of the four seasons.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
