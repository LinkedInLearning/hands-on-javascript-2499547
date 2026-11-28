/**
 * THE BEAN BOX — site settings.
 * Every value is optional: an empty string ('') hides the element that uses it.
 */
const config = {
  // Contact
  email: 'info@ravensnexus.com',
  phone: '', // e.g. '+250 7XX XXX XXX' (shown as written; dialled with spaces removed)
  location: '', // e.g. 'Kigali, Rwanda'

  // Office hours shown in the footer (empty list hides the card)
  hours: [
    { days: 'Monday to Friday', time: '9:00 am to 6:00 pm' },
    { days: 'Saturday', time: '9:00 am to 12:00 noon' },
  ],

  // Handle or hashtag for "Tag us in your photos!", e.g. '@thebeanbox' (empty shows the line without it)
  socialHandle: '',

  // Social links: leave a URL empty to hide that network
  social: {
    instagram: '',
    linkedin: '',
    x: '',
    facebook: '',
    tiktok: '',
    youtube: '',
  },

  // Inquiry form: a Formspree-compatible endpoint (https://formspree.io/f/xxxx).
  // If empty, the form opens a pre-filled email to `email` instead.
  formEndpoint: '',

  // Parent brand site, used in the footer ("A Ravens Tech machine")
  ravensUrl: '',

  // Film: a YouTube / Vimeo URL or a direct .mp4/.webm file (files in /public/film are served at /film/...).
  // Empty shows "Film coming soon".
  filmUrl: '/film/barista-competition.mp4',
  // Still image shown before the film plays (optional; used for direct video files)
  filmPoster: '/film/barista-competition-poster.webp',

  // Coffee origin facts. Fill in with verified details only; empty rows are hidden.
  origin: {
    region: '',
    altitude: '',
    cooperative: '',
    roaster: '',
  },
};

export default config;
