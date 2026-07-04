import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { Breadcrumb } from '@/components/shared/Breadcrumb';

export function ServicesHero() {
  const { copy } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-noise bg-card pt-24 pb-12 border-b border-border/40">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background/50 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

      <div className="section-container relative z-10">
        
        {/* Dynamic Accessible Breadcrumbs */}
        <Breadcrumb className="mb-8 max-w-fit" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold tracking-wide text-primary shadow-sm mb-4">
            {copy.servicesPage.pretitle}
          </span>
          
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
            {copy.servicesPage.title}
          </h1>
          
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground font-light max-w-2xl">
            {copy.servicesPage.description}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
