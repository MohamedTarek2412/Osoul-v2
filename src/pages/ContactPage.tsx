import { ContactHero } from '@/features/contact/sections/ContactHero';
import { ContactInfo } from '@/features/contact/sections/ContactInfo';
import { MapSection } from '@/features/contact/sections/MapSection';
import { ContactFormSection } from '@/features/contact/sections/ContactFormSection';
import { Seo } from '@/components/Seo';
import { useLanguage } from '@/hooks/useLanguage';

export function ContactPage() {
  const { copy } = useLanguage();

  return (
    <>
      <Seo title={copy.seo.contact.title} description={copy.seo.contact.description} canonical="/contact" />
      <ContactHero />
      <section className="section-padding pt-0">
        <div className="section-container space-y-10">
          <ContactInfo />
          <MapSection />
          <ContactFormSection />
        </div>
      </section>
    </>
  );
}
