import { SectionHeading } from '@/components/shared/SectionHeading';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/motion';

const items = [
  { year: '2019', title: 'Founded', desc: 'Established as Osoul Insurance Brokerage.' },
  { year: '2020', title: 'Growth', desc: 'Expanded corporate partnerships and services.' },
  { year: '2023', title: 'Trusted', desc: 'Serving clients across multiple industries.' },
];

export function TimelineSection() {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <SectionHeading title="Our Story" subtitle="Milestones" />
        <div className="mt-8 grid gap-6">
          {items.map((it) => (
            <motion.div key={it.year} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-semibold">{it.year}</div>
              <div>
                <h4 className="font-semibold">{it.title}</h4>
                <p className="text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
