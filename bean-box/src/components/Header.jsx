import { useEffect, useRef, useState } from 'react';
import { NAV } from '../data/content.js';
import Button from './Button.jsx';
import Icon from './Icon.jsx';
import Logo from './Logo.jsx';
import { navHref } from './Footer.jsx';

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
  // Over the sage hero the header uses the light tone; once scrolled it becomes solid forest
  const tone = overLight && !solid ? 'tone-light' : 'tone-dark';

  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-sage px-5 py-3 font-display text-sm font-semibold text-forest focus:translate-y-0"
      >
        Skip to content
      </a>

      <header
        className={`${tone} fixed inset-x-0 top-0 z-[60] transition-[background-color,border-color,backdrop-filter] duration-300 ${
          solid ? 'border-b border-accent/20 bg-bg/90 backdrop-blur-xl' : 'border-b border-transparent bg-transparent'
        }`}
        style={{ paddingTop: 'env(safe-area-inset-top)' }}
      >
        <div className="container-site flex h-16 items-center justify-between gap-6 md:h-20">
          <Logo />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-6 xl:gap-8">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a
                    href={navHref(l, base)}
                    className="inline-flex min-h-11 items-center text-sm text-fg/80 transition-colors hover:text-hi"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Button href={`${base}#partner`} variant="primary" className="hidden sm:inline-flex">
              Partner With Us
            </Button>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="grid h-11 w-11 place-items-center rounded-full border border-fg/20 text-fg hover:border-accent hover:text-accent lg:hidden"
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
          className="tone-dark glow-left fixed inset-0 z-[55] flex flex-col overflow-y-auto lg:hidden"
          style={{
            paddingTop: 'calc(env(safe-area-inset-top) + 5.5rem)',
            paddingBottom: 'calc(env(safe-area-inset-bottom) + 2rem)',
          }}
        >
          <nav aria-label="Mobile" className="container-site flex flex-1 flex-col">
            <ul className="divide-y divide-accent/15 border-y border-accent/15">
              {NAV.map((l, i) => (
                <li key={l.href}>
                  <a
                    href={navHref(l, base)}
                    onClick={() => setOpen(false)}
                    className="flex min-h-16 items-baseline gap-5 py-4 font-display text-3xl font-light uppercase text-fg hover:text-hi sm:text-4xl"
                  >
                    <span aria-hidden="true" className="text-sm tracking-[0.15em] text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button href={`${base}#partner`} onClick={() => setOpen(false)} variant="primary" size="lg" className="mt-10 w-full sm:w-auto sm:self-start">
              Partner With Us
            </Button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-auto inline-flex min-h-11 items-center gap-2 self-start pt-10 text-sm uppercase tracking-eyebrow text-fg/70 hover:text-accent"
            >
              <Icon name="close" className="h-4 w-4" /> Close
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
