import Eyebrow from '../components/Eyebrow.jsx';
import InquiryForm from '../components/InquiryForm.jsx';
import { ContactList, contactItems } from '../components/Contact.jsx';

export default function Partner() {
  return (
    <section id="partner" aria-labelledby="partner-title" className="glow-gold relative py-24 md:py-32">
      <div className="container-site grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="reveal lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>06 — Partner with us</Eyebrow>
          <h2
            id="partner-title"
            className="mt-5 font-display text-[clamp(2.25rem,5.5vw,4.25rem)] font-medium uppercase leading-[0.98] tracking-[-0.02em]"
          >
            Bring The Bean Box <span className="text-gold-gradient">to your space.</span>
          </h2>
          <p className="mt-6 text-lg text-cream/75">
            Buy a machine, lease one, or host one at your venue while we run it. Tell us a little about your space and
            we'll recommend the right fit.
          </p>
          <p className="mt-8 inline-flex items-center gap-3 rounded-full border border-gold/30 bg-forest/40 px-5 py-2.5 text-sm text-gold-light">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-gold" />
            We reply within one business day
          </p>
          {contactItems().length > 0 && (
            <>
              <div className="gold-rule my-8" />
              <ContactList />
            </>
          )}
        </div>
        <div className="reveal" style={{ '--reveal-delay': '120ms' }}>
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}
