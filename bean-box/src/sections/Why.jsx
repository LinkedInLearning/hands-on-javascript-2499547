import Card from '../components/Card.jsx';
import IconTile from '../components/IconTile.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { WHY } from '../data/content.js';

export default function Why() {
  return (
    <section aria-labelledby="why-title" className="tone-light lux relative py-24 md:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="04 — Why The Bean Box"
          id="why-title"
          title={
            <>
              One machine. <span className="emph block">Every advantage.</span>
            </>
          }
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w, i) => (
            <li key={w.title} className="reveal" style={{ '--reveal-delay': `${(i % 3) * 80}ms` }}>
              <Card className="h-full border-fg/25 bg-white/25 p-7 sm:p-8">
                <IconTile name={w.icon} />
                <h3 className="mt-6 font-display text-xl font-semibold text-head">{w.title}</h3>
                <p className="mt-2 text-fg/85">{w.text}</p>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
