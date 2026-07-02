import { ServicesHero } from '@/features/services/sections/ServicesHero';
import { ServicesGrid } from '@/features/services/sections/ServicesGrid';
import { CtaSection } from '@/features/home/sections/CtaSection';
import { Seo } from '@/components/Seo';
import { useLanguage } from '@/hooks/useLanguage';

export function ServicesPage() {
  const { copy } = useLanguage();

  return (
    <>
      <Seo title={copy.seo.services.title} description={copy.seo.services.description} canonical="/services" />
      <ServicesHero />
      <ServicesGrid />
      <CtaSection />
    </>
  );
}
