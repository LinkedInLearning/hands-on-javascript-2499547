import Card from '../components/Card.jsx';
import Icon from '../components/Icon.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { WHY } from '../data/content.js';

export default function Why() {
  return (
    <section aria-labelledby="why-title" className="glow-gold relative py-24 md:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="04 — Why The Bean Box"
          id="why-title"
          title={
            <>
              One machine. <span className="text-gold-gradient block">Every advantage.</span>
            </>
          }
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w, i) => (
            <li key={w.title} className="reveal" style={{ '--reveal-delay': `${(i % 3) * 80}ms` }}>
              <Card className="h-full px-7 pb-10 pt-11 text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-gold/35 text-gold">
                  <Icon name={w.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-xl font-normal">{w.title}</h3>
                <p className="mx-auto mt-3 max-w-[17rem] text-sm leading-relaxed text-cream/65">{w.text}</p>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
