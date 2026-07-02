import { motion } from 'framer-motion';
import { clients } from '@/data/clients';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { LogoWall } from '@/components/shared/LogoWall';
import { SectionReveal } from '@/components/shared/SectionReveal';
import { useLanguage } from '@/hooks/useLanguage';
import { fadeInUp } from '@/lib/motion';

export function TrustedClientsSection() {
  const { copy } = useLanguage();

  return (
    <SectionReveal className="section-padding bg-gradient-to-b from-accent/10 via-background to-background">
      <div className="section-container">
        <SectionHeading
          title={copy.trustedClients.title}
          subtitle={copy.trustedClients.subtitle}
          description={copy.trustedClients.description}
          align="center"
          className="mx-auto max-w-3xl"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="rounded-[2rem] border border-accent/20 bg-background/90 p-6 shadow-xl shadow-accent/10 md:p-8"
        >
          <LogoWall clients={clients} />
        </motion.div>
      </div>
    </SectionReveal>
  );
}
