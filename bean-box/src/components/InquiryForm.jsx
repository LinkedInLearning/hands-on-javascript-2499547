import { useEffect, useId, useRef, useState } from 'react';
import config from '../config.js';
import { INQUIRY_TYPES, LEASE_TERMS, FOOT_TRAFFIC } from '../data/content.js';
import Button from './Button.jsx';
import Icon from './Icon.jsx';
import url from '../url.js';

const DRAFT_KEY = 'beanbox-inquiry-draft';
const EMPTY = {
  type: '',
  name: '',
  company: '',
  email: '',
  phone: '',
  city: '',
  units: '',
  term: '',
  traffic: '',
  region: '',
  message: '',
  tier: '',
  consent: false,
};
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const show = {
  units: (t) => t === 'buy' || t === 'lease',
  term: (t) => t === 'lease',
  traffic: (t) => t === 'host',
  region: (t) => t === 'partner',
};

function loadDraft() {
  try {
    const raw = sessionStorage.getItem(DRAFT_KEY);
    return raw ? { ...EMPTY, ...JSON.parse(raw) } : EMPTY;
  } catch {
    return EMPTY;
  }
}

function validate(v) {
  const e = {};
  if (!v.type) e.type = 'Choose what you would like to do.';
  if (!v.name.trim()) e.name = 'Enter your full name.';
  if (!v.email.trim()) e.email = 'Enter your email address.';
  else if (!EMAIL_RE.test(v.email.trim())) e.email = 'Enter an email address like name@company.com.';
  if (v.phone && !/^[+()\d\s.-]{6,}$/.test(v.phone.trim())) e.phone = 'Enter a valid phone number.';
  if (show.units(v.type) && v.units !== '' && !(Number.isInteger(Number(v.units)) && Number(v.units) >= 1))
    e.units = 'Enter a whole number of 1 or more.';
  if (!v.consent) e.consent = 'Please agree to the privacy policy so we can reply.';
  return e;
}

/** Only the fields that apply to the chosen inquiry type, with readable labels. */
function payloadOf(v) {
  const type = INQUIRY_TYPES.find((t) => t.value === v.type);
  const out = {
    inquiry: type?.title ?? '',
    programme: v.tier,
    name: v.name.trim(),
    company: v.company.trim(),
    email: v.email.trim(),
    phone: v.phone.trim(),
    city: v.city.trim(),
  };
  if (show.units(v.type)) out.units = v.units;
  if (show.term(v.type)) out.term = v.term;
  if (show.traffic(v.type)) out.dailyFootTraffic = v.traffic;
  if (show.region(v.type)) out.region = v.region.trim();
  out.message = v.message.trim();
  return Object.fromEntries(Object.entries(out).filter(([, val]) => val !== ''));
}

const LABELS = {
  inquiry: 'Inquiry',
  programme: 'Programme',
  name: 'Name',
  company: 'Company / venue',
  email: 'Email',
  phone: 'Phone',
  city: 'City / location',
  units: 'Units',
  term: 'Lease term',
  dailyFootTraffic: 'Daily foot traffic',
  region: 'Region',
  message: 'Message',
};

function Field({ id, label, required, error, hint, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-fg/90">
        {label}
        {required && (
          <span className="text-accent" aria-hidden="true">
            {' '}*
          </span>
        )}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1.5 text-xs text-fg/60">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-hi">
          {error}
        </p>
      )}
    </div>
  );
}

export default function InquiryForm() {
  const uid = useId();
  const id = (n) => `${uid}-${n}`;
  const [values, setValues] = useState(loadDraft);
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | mailto | error
  const [serverError, setServerError] = useState('');
  const honeypot = useRef(null);
  const formRef = useRef(null);
  const statusRef = useRef(null);

  const errors = validate(values);
  const visibleError = (k) => (touched[k] ? errors[k] : undefined);
  const chosen = INQUIRY_TYPES.find((t) => t.value === values.type);
  const submitLabel = chosen?.submit ?? 'Send inquiry';

  // "Enquire about this programme" / "Become a Partner" preselect the option
  useEffect(() => {
    const onChoose = (e) => {
      const { type, tier } = e.detail || {};
      setValues((v) => ({ ...v, type: type || v.type, tier: tier || '' }));
      if (type) setTouched((t) => ({ ...t, type: true }));
    };
    window.addEventListener('beanbox:choose', onChoose);
    return () => window.removeEventListener('beanbox:choose', onChoose);
  }, []);

  useEffect(() => {
    try {
      sessionStorage.setItem(DRAFT_KEY, JSON.stringify(values));
    } catch {
      /* storage unavailable: drafts are a convenience only */
    }
  }, [values]);

  useEffect(() => {
    if (status === 'success' || status === 'mailto' || status === 'error') statusRef.current?.focus();
  }, [status]);

  const set = (k) => (e) => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setValues((v) => ({ ...v, [k]: val }));
  };
  const blur = (k) => () => setTouched((t) => ({ ...t, [k]: true }));

  const aria = (k, hint) => ({
    id: id(k),
    'aria-invalid': visibleError(k) ? 'true' : undefined,
    'aria-describedby': visibleError(k) ? `${id(k)}-error` : hint ? `${id(k)}-hint` : undefined,
  });

  async function onSubmit(e) {
    e.preventDefault();
    setTouched(Object.fromEntries(Object.keys(EMPTY).map((k) => [k, true])));
    const keys = Object.keys(errors);
    if (keys.length) {
      const first = keys[0] === 'type' ? formRef.current.querySelector('input[name="type"]') : document.getElementById(id(keys[0]));
      first?.focus();
      return;
    }

    // Bots fill the hidden field; pretend success and send nothing.
    if (honeypot.current?.value) {
      setStatus('success');
      return;
    }

    const data = payloadOf(values);
    const subject = `The Bean Box inquiry: ${data.inquiry}${data.company ? ` (${data.company})` : ''}`;

    if (config.formEndpoint) {
      setStatus('loading');
      setServerError('');
      try {
        const res = await fetch(config.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ ...data, _subject: subject, _replyto: data.email }),
        });
        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          throw new Error(body?.errors?.map((x) => x.message).join(' ') || `Request failed (${res.status})`);
        }
        finish('success');
      } catch (err) {
        setServerError(err.message);
        setStatus('error');
      }
      return;
    }

    if (config.email) {
      const body = Object.entries(data)
        .map(([k, val]) => `${LABELS[k] ?? k}: ${val}`)
        .join('\n');
      window.location.href = `mailto:${config.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      finish('mailto');
      return;
    }

    setServerError('Online inquiries are not set up yet.');
    setStatus('error');
  }

  function finish(next) {
    try {
      sessionStorage.removeItem(DRAFT_KEY);
    } catch {
      /* ignore */
    }
    setStatus(next);
  }

  function reset() {
    setValues(EMPTY);
    setTouched({});
    setStatus('idle');
  }

  if (status === 'success' || status === 'mailto') {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        className="flex min-h-[28rem] flex-col items-center justify-center rounded-3xl bg-bg p-8 text-center"
      >
        <span className="grid h-14 w-14 place-items-center rounded-full border border-accent/50 text-accent">
          <Icon name="check" className="h-7 w-7" strokeWidth={1.8} />
        </span>
        <h3 className="mt-6 font-display text-2xl font-medium">
          {status === 'success' ? 'Thank you. Your inquiry is in.' : 'Your email is ready to send.'}
        </h3>
        <p className="mt-3 max-w-sm text-fg/75">
          {status === 'success'
            ? 'We reply within one business day.'
            : `Your email app should have opened with your inquiry filled in. Press send and we'll reply within one business day.`}
        </p>
        <Button variant="ghost" className="mt-8" onClick={reset}>
          Send another inquiry
        </Button>
      </div>
    );
  }

  const loading = status === 'loading';

  return (
    <form
      ref={formRef}
      noValidate
      onSubmit={onSubmit}
      aria-busy={loading}
      className="rounded-3xl bg-bg p-5 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)] sm:p-8"
    >
      <fieldset aria-describedby={visibleError('type') ? `${id('type')}-error` : undefined}>
        <legend className="font-display text-lg font-medium text-fg">
          What would you like to do?
          <span className="text-accent" aria-hidden="true">
            {' '}*
          </span>
        </legend>
        {values.tier && (
          <p className="mt-3 flex flex-wrap items-center gap-3 text-sm text-fg/85">
            <span>
              Programme: <strong className="font-semibold text-accent">{values.tier}</strong>
            </span>
            <button
              type="button"
              onClick={() => setValues((v) => ({ ...v, tier: '' }))}
              className="min-h-11 text-fg/80 underline underline-offset-4 hover:text-fg"
            >
              Clear
            </button>
          </p>
        )}
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {INQUIRY_TYPES.map((t) => (
            <label key={t.value} className="relative block cursor-pointer">
              <input
                type="radio"
                name="type"
                value={t.value}
                checked={values.type === t.value}
                onChange={(e) => {
                  set('type')(e);
                  setTouched((x) => ({ ...x, type: true }));
                }}
                className="peer sr-only"
              />
              <span className="flex h-full min-h-[5.5rem] flex-col rounded-2xl border border-fg/15 bg-bg/60 p-4 transition-colors hover:border-accent/50 peer-checked:border-accent peer-checked:bg-accent/10 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent">
                <span className="pr-7 font-display font-medium text-fg">{t.title}</span>
                <span className="mt-1 text-sm text-fg/70">{t.text}</span>
              </span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-4 grid h-5 w-5 place-items-center rounded-full border border-fg/30 peer-checked:border-accent peer-checked:bg-accent peer-checked:[&>span]:opacity-100"
              >
                <span className="h-2 w-2 rounded-full bg-bg opacity-0" />
              </span>
            </label>
          ))}
        </div>
        {visibleError('type') && (
          <p id={`${id('type')}-error`} className="mt-2 text-sm text-hi">
            {errors.type}
          </p>
        )}
      </fieldset>

      <div className="rule my-7" />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={id('name')} label="Full name" required error={visibleError('name')}>
          <input className="field" type="text" autoComplete="name" required value={values.name} onChange={set('name')} onBlur={blur('name')} {...aria('name')} />
        </Field>
        <Field id={id('company')} label="Company or venue">
          <input className="field" type="text" autoComplete="organization" value={values.company} onChange={set('company')} {...aria('company')} />
        </Field>
        <Field id={id('email')} label="Email" required error={visibleError('email')}>
          <input className="field" type="email" inputMode="email" autoComplete="email" required value={values.email} onChange={set('email')} onBlur={blur('email')} {...aria('email')} />
        </Field>
        <Field id={id('phone')} label="Phone" error={visibleError('phone')}>
          <input className="field" type="tel" inputMode="tel" autoComplete="tel" value={values.phone} onChange={set('phone')} onBlur={blur('phone')} {...aria('phone')} />
        </Field>
        <Field id={id('city')} label="City / location">
          <input className="field" type="text" autoComplete="address-level2" value={values.city} onChange={set('city')} {...aria('city')} />
        </Field>

        {show.units(values.type) && (
          <Field id={id('units')} label="Number of units" error={visibleError('units')}>
            <input className="field" type="number" inputMode="numeric" min="1" step="1" value={values.units} onChange={set('units')} onBlur={blur('units')} {...aria('units')} />
          </Field>
        )}
        {show.term(values.type) && (
          <Field id={id('term')} label="Lease term">
            <select className="field" value={values.term} onChange={set('term')} {...aria('term')}>
              <option value="">Select a term</option>
              {LEASE_TERMS.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </Field>
        )}
        {show.traffic(values.type) && (
          <Field id={id('traffic')} label="Daily foot traffic" hint="A rough estimate is fine.">
            <select className="field" value={values.traffic} onChange={set('traffic')} {...aria('traffic', true)}>
              <option value="">Select a range</option>
              {FOOT_TRAFFIC.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </Field>
        )}
        {show.region(values.type) && (
          <Field id={id('region')} label="Region you cover" hint="Country, province or city.">
            <input className="field" type="text" value={values.region} onChange={set('region')} {...aria('region', true)} />
          </Field>
        )}

        <div className="sm:col-span-2">
          <Field id={id('message')} label="Message">
            <textarea className="field min-h-[7.5rem] resize-y" rows={4} value={values.message} onChange={set('message')} {...aria('message')} />
          </Field>
        </div>
      </div>

      {/* Honeypot: hidden from people and assistive tech */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={id('website')}>Leave this field empty</label>
        <input ref={honeypot} id={id('website')} name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-6">
        <label className="flex cursor-pointer items-start gap-3 text-sm text-fg/80">
          <input
            id={id('consent')}
            type="checkbox"
            checked={values.consent}
            onChange={(e) => {
              set('consent')(e);
              setTouched((x) => ({ ...x, consent: true }));
            }}
            aria-invalid={visibleError('consent') ? 'true' : undefined}
            aria-describedby={visibleError('consent') ? `${id('consent')}-error` : undefined}
            className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded accent-[#C8C5A5]"
          />
          <span>
            I agree to The Bean Box contacting me about this inquiry and to the{' '}
            <a href={url('/privacy.html')} className="text-hi underline decoration-accent/50 underline-offset-4 hover:text-accent">
              privacy policy
            </a>
            .<span className="text-accent" aria-hidden="true"> *</span>
          </span>
        </label>
        {visibleError('consent') && (
          <p id={`${id('consent')}-error`} className="mt-1.5 pl-8 text-sm text-hi">
            {errors.consent}
          </p>
        )}
      </div>

      {status === 'error' && (
        <div ref={statusRef} tabIndex={-1} role="alert" className="mt-6 rounded-xl border border-hi/50 bg-hi/10 p-4 text-sm text-fg">
          <p className="font-medium">We couldn't send your inquiry.</p>
          <p className="mt-1 text-fg/75">
            {serverError} {config.email ? (
              <>
                Please try again, or email us at{' '}
                <a className="text-hi underline underline-offset-4" href={`mailto:${config.email}`}>
                  {config.email}
                </a>
                .
              </>
            ) : (
              'Please try again in a moment.'
            )}
          </p>
        </div>
      )}

      <div className="mt-7 flex flex-col-reverse items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-fg/60">
          <span className="text-accent" aria-hidden="true">*</span> Required
        </p>
        <Button type="submit" variant="primary" size="lg" disabled={loading} className="sm:min-w-[15rem]">
          {loading ? (
            <>
              <span aria-hidden="true" className="h-4 w-4 animate-spin rounded-full border-2 border-bg/30 border-t-bg" />
              Sending…
            </>
          ) : (
            submitLabel
          )}
        </Button>
      </div>
    </form>
  );
}
