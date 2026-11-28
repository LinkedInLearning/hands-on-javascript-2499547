import { useEffect, useRef, useState } from 'react';
import url from '../url.js';

const WIDTHS = [480, 960, 1440];

/**
 * Responsive image. `src` is the path without extension; the build expects
 * `${src}-480.webp`, `${src}-960.webp` and `${src}-1440.webp` (see scripts/make-images.mjs).
 * If the file is missing, a dark labelled placeholder is shown instead.
 */
export default function Img({
  src,
  alt,
  label,
  sizes = '100vw',
  priority = false,
  width = 1440,
  height = 960,
  className = '',
  imgClassName = 'h-full w-full object-cover',
  position,
}) {
  const [failed, setFailed] = useState(!src);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, []);

  const base = url(src);

  if (failed) {
    if (alt === '') return <div aria-hidden="true" className={`placeholder-box ${className}`} />;
    return (
      <div
        role="img"
        aria-label={alt}
        className={`placeholder-box flex items-center justify-center text-center ${className}`}
      >
        <span className="px-4 font-display text-[0.7rem] font-medium uppercase tracking-eyebrow text-accent/80">
          {label || alt}
          <span className="mt-1 block text-[0.65rem] tracking-[0.2em] text-fg/60">Image coming soon</span>
        </span>
      </div>
    );
  }

  return (
    <div className={className}>
      <img
        ref={ref}
        src={`${base}-960.webp`}
        srcSet={WIDTHS.map((w) => `${base}-${w}.webp ${w}w`).join(', ')}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchpriority={priority ? 'high' : undefined}
        onError={() => setFailed(true)}
        className={imgClassName}
        style={position ? { objectPosition: position } : undefined}
      />
    </div>
  );
}
