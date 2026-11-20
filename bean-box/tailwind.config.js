/** @type {import('tailwindcss').Config} */
// Brand colours from The Bean Box Brand Guideline.
// bg / fg / head / accent / hi follow the section tone (.tone-dark or .tone-light, see index.css).
const tone = (v) => `rgb(var(--c-${v}) / <alpha-value>)`;

export default {
  content: ['./index.html', './privacy.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: tone('bg'),
        fg: tone('fg'),
        head: tone('head'),
        accent: tone('accent'),
        hi: tone('hi'),
        // Fixed brand colours (primary + secondary)
        forest: '#12211C',
        sage: '#C8C5A5',
        gold: '#C9A96E',
        brown: '#3B2A26',
        moss: '#557769',
        mist: '#D9D9D9',
      },
      fontFamily: {
        display: ['"Montserrat Variable"', 'Montserrat', 'system-ui', 'sans-serif'],
        sans: ['"Montserrat Variable"', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { eyebrow: '0.24em', logo: '0.32em' },
      maxWidth: { site: '80rem' },
    },
  },
  plugins: [],
};
