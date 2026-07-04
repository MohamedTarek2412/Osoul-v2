import { SectionHeading } from '@/components/shared/SectionHeading';

const cards = new Array(8).fill(null).map((_, i) => ({ id: i, title: `Service ${i + 1}`, desc: 'Short description for the service.' }));

export function MasonryGridSection() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <SectionHeading title="Our Services" subtitle="Masonry preview" />
        <div className="mt-8 columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {cards.map((c) => (
            <article key={c.id} className="break-inside-avoid rounded-lg bg-card p-6 shadow">
              <h3 className="font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
