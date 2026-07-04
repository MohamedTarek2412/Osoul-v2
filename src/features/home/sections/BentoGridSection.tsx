import { SectionHeading } from '@/components/shared/SectionHeading';

export function BentoGridSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-accent/5 to-background">
      <div className="section-container">
        <SectionHeading title="Highlights" subtitle="Bento-style grid" />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2 rounded-lg bg-card p-6 shadow">Large promo</div>
          <div className="rounded-lg bg-card p-6 shadow">Item 1</div>
          <div className="rounded-lg bg-card p-6 shadow">Item 2</div>
        </div>
      </div>
    </section>
  );
}
