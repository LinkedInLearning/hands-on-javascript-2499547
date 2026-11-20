import config from '../config.js';
import { NAV } from '../data/content.js';
import Logo from './Logo.jsx';
import BeanWatermark from './BeanWatermark.jsx';
import { SocialList } from './Contact.jsx';
import url from '../url.js';

const heading = 'font-display text-sm font-normal text-fg';
const linkCls = 'inline-flex min-h-11 items-center text-sm text-fg/65 hover:text-hi';

export default function Footer({ base = '' }) {
  const contact = [
    config.email && { title: 'Email', label: config.email, href: `mailto:${config.email}` },
    config.phone && { title: 'Phone', label: config.phone, href: `tel:${config.phone.replace(/[^\d+]/g, '')}` },
    config.location && { title: 'Location', label: config.location },
  ].filter(Boolean);

  return (
    <footer className="tone-dark relative overflow-hidden border-t border-accent/20 bg-bg" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <BeanWatermark className="-bottom-40 -right-20 hidden w-[20rem] md:block" />
      <div className="container-site relative py-16 md:py-20">
        <Logo variant="full" />
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
                    <p className="mt-3 text-sm text-fg/65">{c.label}</p>
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
                  The film
                </a>
              </li>
              <li>
                <a href={url('/privacy.html')} className={linkCls}>
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
              Premium Rwandan coffee. <span className="emph">Anytime. Anywhere.</span>
            </p>
            <p className="mt-4 max-w-sm text-sm text-fg/65">
              Robotic coffee kiosks for offices, hotels, airports, universities, shopping malls and stadiums.
            </p>
            <SocialList className="mt-6" />
          </div>
        </div>
      </div>
      <div className="container-site relative">
        <div className="rule" />
        <div className="flex flex-col gap-2 py-6 text-sm text-fg/60 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} The Bean Box. All rights reserved.</p>
          <p className="font-display uppercase tracking-eyebrow text-xs sm:self-center">A Ravens Tech machine</p>
        </div>
      </div>
    </footer>
  );
}
