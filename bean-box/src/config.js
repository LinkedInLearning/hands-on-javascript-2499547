/**
 * THE BEAN BOX — site settings.
 * Every value is optional: an empty string ('') hides the element that uses it.
 */
const config = {
  // Contact
  email: '', // e.g. 'hello@thebeanbox.example'
  phone: '', // e.g. '+250 7XX XXX XXX' (shown as written; dialled with spaces removed)
  location: '', // e.g. 'Kigali, Rwanda'

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

  // Product film: a YouTube / Vimeo URL or a direct .mp4/.webm file.
  // Empty shows "Film coming soon".
  filmUrl: '',

  // Coffee origin facts. Fill in with verified details only; empty rows are hidden.
  origin: {
    region: '',
    altitude: '',
    cooperative: '',
    roaster: '',
  },
};

export default config;
