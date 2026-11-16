/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './privacy.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#142B24',
        matte: '#101010',
        ink: '#080806',
        gold: '#C8A76B',
        'gold-light': '#E8D3A6',
        cream: '#F5F1EA',
        'gold-deep': '#7A5C2B',
        graphite: '#141412',
      },
      fontFamily: {
        display: ['"Outfit Variable"', 'Outfit', 'system-ui', 'sans-serif'],
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { eyebrow: '0.28em', logo: '0.32em' },
      maxWidth: { site: '80rem' },
    },
  },
  plugins: [],
};
