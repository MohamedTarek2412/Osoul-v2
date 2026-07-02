import { motion } from 'framer-motion';
import { services } from '@/data/services';
import { ServiceCard } from './ServiceCard';
import { SectionReveal } from '@/components/shared/SectionReveal';
import { staggerContainer, scaleIn } from '@/lib/motion';

export function ServicesGrid() {
  return (
    <SectionReveal className="section-padding pt-0">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={scaleIn}>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionReveal>
  );
}
