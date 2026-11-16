import Card from '../components/Card.jsx';
import Img from '../components/Img.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { MENU } from '../data/content.js';

export default function Menu() {
  return (
    <section id="menu" aria-labelledby="menu-title" className="relative bg-ink py-24 md:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="03 — The menu"
          id="menu-title"
          title="Our menu"
          intro="Classic espresso drinks, made one at a time and served fresh from the machine."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {MENU.map((d, i) => (
            <li key={d.name} className="reveal" style={{ '--reveal-delay': `${(i % 4) * 70}ms` }}>
              <Card topBorder className="lift h-full hover:border-gold/30">
                <Img
                  src={d.src}
                  alt={d.alt}
                  label={d.label}
                  sizes="(min-width: 1280px) 300px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  width={960}
                  height={960}
                  className="aspect-square overflow-hidden"
                />
                <div className="p-6">
                  <h3 className="font-display text-xl font-normal">{d.name}</h3>
                  <p className="mt-2 text-sm text-cream/65">{d.line}</p>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
