import { motion } from 'framer-motion';
import { howWeWorkSteps } from '@/data/how-we-work';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { useLanguage } from '@/hooks/useLanguage';
import { HelpCircle, BarChart3, FileSpreadsheet, FileCheck, LifeBuoy } from 'lucide-react';
import { cn } from '@/lib/utils';

export function HowWeWorkSection() {
  const { locale, copy } = useLanguage();
  const isRtl = locale === 'ar';

  // Map step IDs to custom illustrative Lucide icons
  const iconsMap: Record<string, React.ComponentType<{ className?: string }>> = {
    consult: HelpCircle,
    analyze: BarChart3,
    propose: FileSpreadsheet,
    implement: FileCheck,
    support: LifeBuoy,
  };

  return (
    <section className="section-padding bg-card relative overflow-hidden border-t border-border/40">
      {/* Background radial overlays */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/2 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container">
        {/* Section Heading */}
        <SectionHeading
          title={copy.howWeWork.title}
          subtitle={copy.howWeWork.subtitle}
          description={copy.howWeWork.description}
        />

        {/* Vertical Zig-Zag Steps List */}
        <div className="mt-20 space-y-24 md:space-y-36">
          {howWeWorkSteps.map((step, idx) => {
            const Icon = iconsMap[step.id] || HelpCircle;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={step.id}
                className={cn(
                  'grid items-center gap-8 md:grid-cols-12',
                  isEven ? '' : 'md:flex-row-reverse'
                )}
              >
                {/* Visual Step Indicator Column */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className={cn(
                    'md:col-span-5 flex items-center justify-center relative py-4',
                    isEven ? 'md:order-1' : 'md:order-2'
                  )}
                >
                  {/* Decorative background shapes */}
                  <div className="absolute w-40 h-40 bg-muted/60 rounded-full scale-110 pointer-events-none" />
                  <div className="absolute w-28 h-28 border border-primary/25 rounded-full rotate-45 pointer-events-none" />

                  {/* Large Floating Step Number */}
                  <span className="absolute -top-6 text-[8rem] font-extrabold font-mono text-primary/5 select-none leading-none">
                    {`0${step.step}`}
                  </span>

                  {/* Main Icon Circle */}
                  <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-2xl bg-card border border-border shadow-premium text-primary group transition-all duration-500 hover:border-primary/40 hover:-translate-y-1">
                    <Icon className="h-10 w-10 transition-transform duration-500 group-hover:scale-110" />
                  </div>
                </motion.div>

                {/* Text Content Column */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className={cn(
                    'md:col-span-7 flex flex-col justify-center space-y-4 text-start',
                    isEven ? 'md:order-2 md:pl-8' : 'md:order-1 md:pr-8'
                  )}
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-primary font-mono">
                    {isRtl ? `الخطوة ${step.step}` : `Step ${step.step}`}
                  </span>
                  
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                    {locale === 'ar' ? step.title : step.titleEn}
                  </h3>
                  
                  <p className="text-sm sm:text-base leading-relaxed text-muted-foreground max-w-xl">
                    {locale === 'ar' ? step.description : step.descriptionEn}
                  </p>

                  <div className="h-0.5 w-16 bg-primary/20 rounded mt-4" />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
