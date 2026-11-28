import full from '../brand/logo-full.svg?raw';
import mark from '../brand/logo-mark.svg?raw';
import word from '../brand/logo-word.svg?raw';
import url from '../url.js';

const SVGS = { full, mark, word };

/**
 * The Bean Box logo, extracted as vectors from the Brand Guideline.
 * variant: "full" (stacked, primary) | "word" (wordmark) | "mark" (bean only).
 * Colour follows `currentColor`; per the guideline use sage on forest, forest on sage, black on white or white on forest.
 * Guideline minimum on screen: 150px wide for the logo; 16px for the mark as a favicon.
 */
export function LogoArt({ variant = 'full', className = '', decorative = false }) {
  const svg = decorative ? SVGS[variant].replace(/ role="img" aria-label="[^"]*"/, ' aria-hidden="true" focusable="false"') : SVGS[variant];
  return <span className={`block [&>svg]:block [&>svg]:h-auto [&>svg]:w-full ${className}`} dangerouslySetInnerHTML={{ __html: svg }} />;
}

export default function Logo({ variant = 'word', className = '' }) {
  return (
    <a href={`${url('/')}#top`} className={`inline-flex min-h-11 items-center text-head ${className}`}>
      <LogoArt variant={variant} className="w-[150px]" />
    </a>
  );
}
