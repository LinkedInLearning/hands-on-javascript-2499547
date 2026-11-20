import Eyebrow from '../components/Eyebrow.jsx';
import InquiryForm from '../components/InquiryForm.jsx';
import { ContactList, contactItems } from '../components/Contact.jsx';

export default function Partner() {
  return (
    <section id="partner" aria-labelledby="partner-title" className="tone-light lux relative py-24 md:py-32">
      <div className="container-site grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="reveal lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>07 — Get in touch</Eyebrow>
          <h2
            id="partner-title"
            className="display mt-5 text-[clamp(2.4rem,5.2vw,4.25rem)]"
          >
            Bring The Bean Box <span className="emph">to your space.</span>
          </h2>
          <p className="mt-6 text-lg text-fg/85">
            Buy a machine, lease one, or host one at your venue while we run it. Tell us a little about your space and
            we'll recommend the right fit.
          </p>
          <p className="mt-8 inline-flex items-center gap-3 rounded-full border border-accent/30 bg-accent/10 px-5 py-2.5 text-sm text-hi">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />
            We reply within one business day
          </p>
          {contactItems().length > 0 && (
            <>
              <div className="rule my-8" />
              <ContactList />
            </>
          )}
        </div>
        <div className="tone-dark reveal" style={{ '--reveal-delay': '120ms' }}>
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}
