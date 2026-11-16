import { useEffect, useRef, useState } from 'react';
import { NAV } from '../data/content.js';
import Button from './Button.jsx';
import Icon from './Icon.jsx';
import Logo from './Logo.jsx';

export default function Header({ base = '', overLight = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Mobile menu: lock scroll, trap focus, close on Esc, restore focus
  useEffect(() => {
    if (!open) return undefined;
    const panel = panelRef.current;
    const focusables = () => [toggleRef.current, ...panel.querySelectorAll('a[href], button:not([disabled])')];
    focusables()[1]?.focus();
    document.body.style.overflow = 'hidden';

    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setOpen(false);
        return;
      }
      if (e.key !== 'Tab') return;
      const list = focusables();
      const first = list[0];
      const last = list[list.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    const toggle = toggleRef.current;
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      toggle?.focus();
    };
  }, [open]);

  // Close the menu if the viewport grows to desktop
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const solid = scrolled || open;
  const light = overLight && !solid; // dark text while over the light hero

  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-gold px-5 py-3 font-display text-sm font-medium text-ink focus:translate-y-0"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-[60] transition-[background-color,border-color,backdrop-filter] duration-300 ${
          solid ? 'border-b border-gold/15 bg-ink/75 backdrop-blur-xl' : 'border-b border-transparent bg-transparent'
        } ${light ? 'on-light' : ''}`}
        style={{ paddingTop: 'env(safe-area-inset-top)' }}
      >
        <div className="container-site flex h-16 items-center justify-between gap-6 md:h-20">
          <Logo tone={light ? 'light' : 'dark'} />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a
                    href={`${base}${l.href}`}
                    className={`inline-flex min-h-11 items-center text-sm transition-colors ${
                      light ? 'text-ink/75 hover:text-ink' : 'text-cream/80 hover:text-gold-light'
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Button href={`${base}#partner`} variant="gold" className="hidden sm:inline-flex">
              Partner With Us
            </Button>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className={`grid h-11 w-11 place-items-center rounded-full border lg:hidden ${
                light ? 'border-ink/25 text-ink hover:border-ink' : 'border-cream/20 text-cream hover:border-gold hover:text-gold'
              }`}
            >
              <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" strokeWidth={1.6} />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          id="mobile-menu"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="glow-forest fixed inset-0 z-[55] flex flex-col overflow-y-auto lg:hidden"
          style={{
            paddingTop: 'calc(env(safe-area-inset-top) + 5.5rem)',
            paddingBottom: 'calc(env(safe-area-inset-bottom) + 2rem)',
          }}
        >
          <nav aria-label="Mobile" className="container-site flex flex-1 flex-col">
            <ul className="divide-y divide-gold/15 border-y border-gold/15">
              {NAV.map((l, i) => (
                <li key={l.href}>
                  <a
                    href={`${base}${l.href}`}
                    onClick={() => setOpen(false)}
                    className="flex min-h-16 items-baseline gap-5 py-4 font-display text-3xl font-light uppercase text-cream hover:text-gold-light sm:text-4xl"
                  >
                    <span aria-hidden="true" className="text-sm tracking-[0.15em] text-gold">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button href={`${base}#partner`} onClick={() => setOpen(false)} variant="gold" size="lg" className="mt-10 w-full sm:w-auto sm:self-start">
              Partner With Us
            </Button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-auto inline-flex min-h-11 items-center gap-2 self-start pt-10 text-sm uppercase tracking-eyebrow text-cream/70 hover:text-gold"
            >
              <Icon name="close" className="h-4 w-4" /> Close
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
