import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/motion';
import { useLanguage } from '@/hooks/useLanguage';

export function ContactHero() {
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
            {copy.contactPage.pretitle}
          </span>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">{copy.contactPage.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{copy.contactPage.description}</p>
        </motion.div>
      </div>
    </section>
  );
}
