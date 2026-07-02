import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { services } from '@/data/services';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { SectionReveal } from '@/components/shared/SectionReveal';
import { ServiceCard } from '@/features/services/sections/ServiceCard';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { staggerContainer, scaleIn } from '@/lib/motion';

const previewServices = services.slice(0, 6);

export function ServicesPreviewSection() {
  const { copy } = useLanguage();

  return (
    <SectionReveal className="section-padding">
      <div className="section-container">
        <SectionHeading
          title={copy.servicesPreview.title}
          subtitle={copy.servicesPreview.subtitle}
          description={copy.servicesPreview.description}
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {previewServices.map((service) => (
            <motion.div key={service.id} variants={scaleIn}>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/services">
              {copy.servicesPreview.viewAll}
              <ArrowLeft className="mr-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </SectionReveal>
  );
}
