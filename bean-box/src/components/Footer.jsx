import config from '../config.js';
import { NAV } from '../data/content.js';
import Logo from './Logo.jsx';
import { ContactList, SocialList } from './Contact.jsx';

export default function Footer({ base = '' }) {
  return (
    <footer
      className="relative border-t border-gold/15 bg-ink"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="container-site grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-4 max-w-xs font-display text-lg text-cream/80">Premium Rwandan Coffee. Anytime. Anywhere.</p>
          <ContactList className="mt-6" />
          <SocialList className="mt-6" />
        </div>

        <nav aria-label="Footer" className="md:col-span-4 md:col-start-7">
          <h2 className="font-display text-xs font-medium uppercase tracking-eyebrow text-gold">Explore</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-6">
            {NAV.map((l) => (
              <li key={l.href}>
                <a href={`${base}${l.href}`} className="inline-flex min-h-11 items-center text-cream/80 hover:text-gold-light">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="/privacy.html" className="inline-flex min-h-11 items-center text-cream/80 hover:text-gold-light">
                Privacy
              </a>
            </li>
          </ul>
        </nav>

        {config.ravensUrl && (
          <div className="md:col-span-2 md:text-right">
            <h2 className="font-display text-xs font-medium uppercase tracking-eyebrow text-gold">Made by</h2>
            <a
              href={config.ravensUrl}
              target="_blank"
              rel="noopener"
              className="mt-4 inline-flex min-h-11 items-center text-cream/85 hover:text-gold-light"
            >
              A Ravens Tech machine
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        )}
      </div>
      <div className="container-site">
        <div className="gold-rule" />
        <p className="py-6 text-sm text-cream/60">© {new Date().getFullYear()} The Bean Box. All rights reserved.</p>
      </div>
    </footer>
  );
}
