import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/motion';
import { useLanguage } from '@/hooks/useLanguage';

export function ServicesHero() {
  const { copy } = useLanguage();

  return (
    <section className="bg-gradient-to-b from-accent/50 to-background section-padding pb-12">
      <div className="section-container">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            {copy.servicesPage.pretitle}
          </span>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">{copy.servicesPage.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{copy.servicesPage.description}</p>
        </motion.div>
      </div>
    </section>
  );
}
