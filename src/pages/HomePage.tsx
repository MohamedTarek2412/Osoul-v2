import { lazy, Suspense } from 'react';
import { HeroSection } from '@/features/home/sections/HeroSection';
import { LicensedTrustedSection } from '@/features/home/sections/LicensedTrustedSection';
import { Seo } from '@/components/Seo';
import { useLanguage } from '@/hooks/useLanguage';

// Below-the-fold sections — code-split to reduce initial parse cost (~70 KiB savings)
const TrustedClientsSection = lazy(() =>
  import('@/features/home/sections/TrustedClientsSection').then((m) => ({ default: m.TrustedClientsSection })),
);
const AboutSection = lazy(() =>
  import('@/features/home/sections/AboutSection').then((m) => ({ default: m.AboutSection })),
);
const BentoGridSection = lazy(() =>
  import('@/features/home/sections/BentoGridSection').then((m) => ({ default: m.BentoGridSection })),
);
const TimelineSection = lazy(() =>
  import('@/features/home/sections/TimelineSection').then((m) => ({ default: m.TimelineSection })),
);
const MasonryGridSection = lazy(() =>
  import('@/features/home/sections/MasonryGridSection').then((m) => ({ default: m.MasonryGridSection })),
);
const HowWeWorkSection = lazy(() =>
  import('@/features/home/sections/HowWeWorkSection').then((m) => ({ default: m.HowWeWorkSection })),
);
const WhyChooseSection = lazy(() =>
  import('@/features/home/sections/WhyChooseSection').then((m) => ({ default: m.WhyChooseSection })),
);
const LeadershipTeamSection = lazy(() =>
  import('@/features/home/sections/LeadershipTeamSection').then((m) => ({ default: m.LeadershipTeamSection })),
);
const CertificationsSection = lazy(() =>
  import('@/features/home/sections/CertificationsSection').then((m) => ({ default: m.CertificationsSection })),
);
const CtaSection = lazy(() =>
  import('@/features/home/sections/CtaSection').then((m) => ({ default: m.CtaSection })),
);

export function HomePage() {
  const { copy } = useLanguage();

  return (
    <>
      <Seo title={copy.seo.home.title} description={copy.seo.home.description} canonical="/" />
      <main id="main-content">
        {/* Above-fold: eagerly loaded */}
        <HeroSection />
        <LicensedTrustedSection />

        {/* Below-fold: lazy loaded — reduces initial JS parse by ~70 KiB */}
        <Suspense fallback={null}>
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
        </Suspense>
      </main>
    </>
  );
}

