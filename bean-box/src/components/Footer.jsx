import config from '../config.js';
import { NAV } from '../data/content.js';
import Logo from './Logo.jsx';
import { SocialList } from './Contact.jsx';

const heading = 'font-display text-sm font-normal text-cream';
const linkCls = 'inline-flex min-h-11 items-center text-sm text-cream/65 hover:text-gold-light';

export default function Footer({ base = '' }) {
  const contact = [
    config.email && { title: 'Email', label: config.email, href: `mailto:${config.email}` },
    config.phone && { title: 'Phone', label: config.phone, href: `tel:${config.phone.replace(/[^\d+]/g, '')}` },
    config.location && { title: 'Location', label: config.location },
  ].filter(Boolean);

  return (
    <footer className="relative border-t border-cream/10 bg-ink" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <div className="container-site py-16 md:py-20">
        <Logo />
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {contact.length > 0 && (
            <div className="space-y-6 lg:col-span-3">
              {contact.map((c) => (
                <div key={c.title}>
                  <h2 className={heading}>{c.title}</h2>
                  {c.href ? (
                    <a href={c.href} className={linkCls}>
                      {c.label}
                    </a>
                  ) : (
                    <p className="mt-3 text-sm text-cream/65">{c.label}</p>
                  )}
                </div>
              ))}
            </div>
          )}

          <nav aria-label="Footer" className={contact.length ? 'lg:col-span-2' : 'lg:col-span-3'}>
            <h2 className={heading}>Quick links</h2>
            <ul className="mt-1">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a href={`${base}${l.href}`} className={linkCls}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <h2 className={heading}>More</h2>
            <ul className="mt-1">
              <li>
                <a href={`${base}#film`} className={linkCls}>
                  Product film
                </a>
              </li>
              <li>
                <a href="/privacy.html" className={linkCls}>
                  Privacy
                </a>
              </li>
              {config.ravensUrl && (
                <li>
                  <a href={config.ravensUrl} target="_blank" rel="noopener" className={linkCls}>
                    A Ravens Tech machine<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div className={`sm:col-span-2 lg:col-span-4 ${contact.length ? 'lg:col-start-9' : 'lg:col-start-9'}`}>
            <p className="display text-2xl">
              Premium Rwandan coffee. <span className="text-gold-gradient">Anytime. Anywhere.</span>
            </p>
            <p className="mt-4 max-w-sm text-sm text-cream/65">
              Robotic coffee kiosks for offices, hotels, airports, universities, shopping malls and stadiums.
            </p>
            <SocialList className="mt-6" />
          </div>
        </div>
      </div>
      <div className="container-site">
        <div className="gold-rule" />
        <div className="flex flex-col gap-2 py-6 text-sm text-cream/60 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} The Bean Box. All rights reserved.</p>
          <p className="font-display uppercase tracking-eyebrow text-xs sm:self-center">A Ravens Tech machine</p>
        </div>
      </div>
    </footer>
  );
}
