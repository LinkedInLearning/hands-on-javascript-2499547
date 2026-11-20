import config from '../config.js';
import Icon from './Icon.jsx';

const SOCIAL_LABELS = {
  instagram: 'Instagram',
  linkedin: 'LinkedIn',
  x: 'X',
  facebook: 'Facebook',
  tiktok: 'TikTok',
  youtube: 'YouTube',
};

export const socialLinks = () =>
  Object.entries(config.social || {})
    .filter(([, url]) => url)
    .map(([key, url]) => ({ key, url, label: SOCIAL_LABELS[key] ?? key }));

export const contactItems = () =>
  [
    config.email && { icon: 'mail', label: config.email, href: `mailto:${config.email}`, sr: 'Email' },
    config.phone && { icon: 'phone', label: config.phone, href: `tel:${config.phone.replace(/[^\d+]/g, '')}`, sr: 'Phone' },
    config.location && { icon: 'pin', label: config.location, sr: 'Location' },
  ].filter(Boolean);

export function ContactList({ className = '' }) {
  const items = contactItems();
  if (!items.length) return null;
  return (
    <ul className={`space-y-1 ${className}`}>
      {items.map((it) => {
        const inner = (
          <>
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-accent/30 text-accent">
              <Icon name={it.icon} className="h-4 w-4" />
            </span>
            <span>
              <span className="sr-only">{it.sr}: </span>
              {it.label}
            </span>
          </>
        );
        return (
          <li key={it.icon}>
            {it.href ? (
              <a href={it.href} className="inline-flex min-h-11 items-center gap-3 text-fg/85 hover:text-hi">
                {inner}
              </a>
            ) : (
              <span className="inline-flex min-h-11 items-center gap-3 text-fg/85">{inner}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function SocialList({ className = '' }) {
  const links = socialLinks();
  if (!links.length) return null;
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`} aria-label="Social media">
      {links.map((s) => (
        <li key={s.key}>
          <a
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="lift inline-flex min-h-11 items-center rounded-full border border-fg/15 px-4 text-sm text-fg/80 hover:border-accent hover:text-hi"
          >
            {s.label}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
