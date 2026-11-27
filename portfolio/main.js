/* ------------------------------------------------------------------
 * Portfolio settings: fill these in. Empty values stay hidden.
 * ------------------------------------------------------------------ */
const PORTFOLIO = {
  name: 'Yannick Dushime', // shown in the header and footer; empty shows "Portfolio"
  role: 'Senior Data Scientist · Web & Product Builder',
  email: 'yannyllc@gmail.com', // shows the "Email me" button
  linkedin: 'https://www.linkedin.com/in/yannick-rukambura-dushime-2021', // shows the LinkedIn button
};

/* ------------------------------------------------------------------ */

document.querySelectorAll('[data-year]').forEach((el) => (el.textContent = new Date().getFullYear()));

if (PORTFOLIO.name) {
  document.querySelectorAll('[data-name-target]').forEach((el) => (el.textContent = PORTFOLIO.name));
  document.title = `${PORTFOLIO.name} | ${PORTFOLIO.role || 'Portfolio'}`;
}
if (PORTFOLIO.role) {
  document.querySelectorAll('[data-role-target]').forEach((el) => (el.textContent = PORTFOLIO.role));
}
const email = document.querySelector('[data-email-target]');
if (email && PORTFOLIO.email) {
  email.href = `mailto:${PORTFOLIO.email}`;
  email.hidden = false;
}
const linkedin = document.querySelector('[data-linkedin-target]');
if (linkedin && PORTFOLIO.linkedin) {
  linkedin.href = PORTFOLIO.linkedin;
  linkedin.hidden = false;
}

// Fade-up on scroll (skipped when the visitor prefers reduced motion)
const items = document.querySelectorAll('.reveal');
if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  items.forEach((el) => el.classList.add('in'));
} else {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      }),
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
  );
  items.forEach((el) => io.observe(el));
}
