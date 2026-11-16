import { useCallback, useEffect, useRef, useState } from 'react';
import Img from './Img.jsx';
import Icon from './Icon.jsx';

export default function Gallery({ items, label = 'Gallery' }) {
  const track = useRef(null);
  const [index, setIndex] = useState(0);

  const slides = () => Array.from(track.current?.children ?? []);

  const onScroll = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const left = el.getBoundingClientRect().left;
    let best = 0;
    let min = Infinity;
    slides().forEach((s, i) => {
      const d = Math.abs(s.getBoundingClientRect().left - left);
      if (d < min) {
        min = d;
        best = i;
      }
    });
    // At the far right edge, the last slide is the current one
    if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 4) best = items.length - 1;
    setIndex(best);
  }, [items.length]);

  useEffect(() => {
    const el = track.current;
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  const go = (i) => {
    const target = Math.max(0, Math.min(items.length - 1, i));
    const el = track.current;
    const slide = slides()[target];
    if (!slide) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollTo({ left: slide.offsetLeft - el.offsetLeft, behavior: reduce ? 'auto' : 'smooth' });
    setIndex(target);
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      go(index + 1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      go(index - 1);
    }
  };

  return (
    <div role="region" aria-roledescription="carousel" aria-label={label}>
      <div
        ref={track}
        tabIndex={0}
        onKeyDown={onKeyDown}
        aria-label={`${label}: use the left and right arrow keys to browse`}
        className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-2 md:mx-0 md:scroll-px-0 md:px-0 md:gap-6"
      >
        {items.map((item, i) => (
          <div
            key={item.src}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${items.length}`}
            className="w-[86%] shrink-0 snap-start sm:w-[72%] lg:w-[58%]"
          >
            <figure>
            <Img
              src={item.src}
              alt={item.alt}
              label={item.label}
              sizes="(min-width: 1024px) 58vw, (min-width: 640px) 72vw, 86vw"
              className="aspect-[3/2] overflow-hidden rounded-2xl border border-cream/10 bg-matte"
            />
            <figcaption className="mt-4 flex gap-3 text-sm text-cream/75">
              <span aria-hidden="true" className="font-display text-gold">{String(i + 1).padStart(2, '0')}</span>
              {item.caption}
            </figcaption>
            </figure>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="font-display text-sm tracking-[0.2em] text-cream/70" aria-live="polite">
          <span className="text-gold-light">{String(index + 1).padStart(2, '0')}</span> / {String(items.length).padStart(2, '0')}
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => go(index - 1)}
            disabled={index === 0}
            aria-label="Previous image"
            className="lift grid h-12 w-12 place-items-center rounded-full border border-gold/40 text-gold hover:border-gold hover:bg-gold hover:text-ink disabled:pointer-events-none disabled:opacity-35"
          >
            <Icon name="arrowLeft" className="h-5 w-5" strokeWidth={1.8} />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            disabled={index === items.length - 1}
            aria-label="Next image"
            className="lift grid h-12 w-12 place-items-center rounded-full border border-gold/40 text-gold hover:border-gold hover:bg-gold hover:text-ink disabled:pointer-events-none disabled:opacity-35"
          >
            <Icon name="arrowRight" className="h-5 w-5" strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </div>
  );
}
