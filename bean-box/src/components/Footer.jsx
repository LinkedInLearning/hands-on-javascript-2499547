import config from '../config.js';
import { NAV } from '../data/content.js';
import Logo from './Logo.jsx';
import Icon from './Icon.jsx';
import BeanWatermark from './BeanWatermark.jsx';
import { socialLinks } from './Contact.jsx';
import url from '../url.js';

const heading = 'font-display text-sm font-semibold uppercase tracking-eyebrow text-accent';
const linkCls = 'inline-flex min-h-11 items-center text-sm text-fg/80 hover:text-accent';
const ICONS = { facebook: 'facebook', x: 'x' };

export const navHref = (l, base) => (l.page ? url(l.href) : `${base}${l.href}`);

export default function Footer({ base = '' }) {
  const contact = [
    config.email && { title: 'Email', label: config.email, href: `mailto:${config.email}` },
    config.phone && { title: 'Phone', label: config.phone, href: `tel:${config.phone.replace(/[^\d+]/g, '')}` },
    config.location && { title: 'Location', label: config.location },
  ].filter(Boolean);
  const socials = socialLinks();
  const hours = config.hours || [];

  return (
    <footer className="tone-dark bean-bg lux relative overflow-hidden border-t border-accent/30" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <BeanWatermark className="-bottom-40 -right-20 hidden w-[20rem] md:block" />
      <div className="container-site relative py-16 md:py-20">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Logo variant="full" />
          <p className="display max-w-md text-2xl md:text-right">
            Premium Rwandan coffee. <span className="emph">Anytime. Anywhere.</span>
          </p>
        </div>

        {/* Office hours + Get social */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {hours.length > 0 && (
            <section aria-labelledby="hours-title" className="border border-fg/40 bg-bg/60 p-8 sm:p-10">
              <h2 id="hours-title" className="flex items-center gap-3 font-display text-2xl font-medium text-fg">
                <Icon name="clock" className="h-6 w-6 text-accent" /> Office Hours
              </h2>
              <dl className="mt-6 space-y-5">
                {hours.map((h) => (
                  <div key={h.days}>
                    <dt className="font-medium text-fg">{h.days}</dt>
                    <dd className="text-fg/80">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}
          <section aria-labelledby="social-title" className="border border-fg/40 bg-bg/60 p-8 sm:p-10">
            <h2 id="social-title" className="font-display text-2xl font-medium text-fg">Get Social</h2>
            {socials.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-3" aria-label="Social media">
                {socials.map((s) => (
                  <li key={s.key}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${s.label} (opens in a new tab)`}
                      className="lift grid h-12 w-12 place-items-center rounded-full text-head hover:text-accent"
                    >
                      {ICONS[s.key] ? <Icon name={ICONS[s.key]} className="h-9 w-9" /> : <span className="text-sm font-semibold">{s.label}</span>}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            <p className="mt-6 flex min-h-12 items-center justify-center rounded-full border border-fg/60 px-6 text-center italic text-fg">
              Tag us in your photos!{config.socialHandle ? ` ${config.socialHandle}` : ''}
            </p>
          </section>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          <nav aria-label="Footer">
            <h2 className={heading}>Explore</h2>
            <ul className="mt-2">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a href={navHref(l, base)} className={linkCls}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h2 className={heading}>More</h2>
            <ul className="mt-2">
              <li>
                <a href={`${base}#programs`} className={linkCls}>Ways to partner</a>
              </li>
              <li>
                <a href={`${base}#film`} className={linkCls}>The film</a>
              </li>
              <li>
                <a href={url('/privacy.html')} className={linkCls}>Privacy</a>
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
          {contact.length > 0 && (
            <div>
              <h2 className={heading}>Contact</h2>
              <ul className="mt-2">
                {contact.map((c) => (
                  <li key={c.title}>
                    {c.href ? (
                      <a href={c.href} className={linkCls}>{c.label}</a>
                    ) : (
                      <span className="inline-flex min-h-11 items-center text-sm text-fg/80">{c.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="container-site relative">
        <div className="gold-line" />
        <div className="flex flex-col gap-2 py-6 text-sm text-fg/75 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} The Bean Box. All rights reserved.</p>
          <p className="font-display text-xs uppercase tracking-eyebrow sm:self-center">A Ravens Tech machine</p>
        </div>
      </div>
    </footer>
  );
}
