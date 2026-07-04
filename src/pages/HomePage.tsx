import { HeroSection } from '@/features/home/sections/HeroSection';
import { LicensedTrustedSection } from '@/features/home/sections/LicensedTrustedSection';
import { TrustedClientsSection } from '@/features/home/sections/TrustedClientsSection';
import { AboutSection } from '@/features/home/sections/AboutSection';
import { BentoGridSection } from '@/features/home/sections/BentoGridSection';
import { TimelineSection } from '@/features/home/sections/TimelineSection';
import { MasonryGridSection } from '@/features/home/sections/MasonryGridSection';
import { HowWeWorkSection } from '@/features/home/sections/HowWeWorkSection';
import { WhyChooseSection } from '@/features/home/sections/WhyChooseSection';
import { LeadershipTeamSection } from '@/features/home/sections/LeadershipTeamSection';
import { CertificationsSection } from '@/features/home/sections/CertificationsSection';
import { CtaSection } from '@/features/home/sections/CtaSection';
import { Seo } from '@/components/Seo';
import { useLanguage } from '@/hooks/useLanguage';

export function HomePage() {
  const { copy } = useLanguage();

  return (
    <>
      <Seo title={copy.seo.home.title} description={copy.seo.home.description} canonical="/" />
      <main id="main-content">
        <HeroSection />
        <LicensedTrustedSection />
        <TrustedClientsSection />
        <AboutSection />
        <BentoGridSection />
        <TimelineSection />
        <MasonryGridSection />
        <HowWeWorkSection />
        <WhyChooseSection />
        <LeadershipTeamSection />
        <CertificationsSection />
        <CtaSection />
      </main>
    </>
  );
}
