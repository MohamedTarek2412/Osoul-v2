import { motion } from 'framer-motion';
import { ShieldCheck, Award, Globe, HeartHandshake, ArrowRight, ArrowLeft } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { useLanguage } from '@/hooks/useLanguage';
import { useMousePosition } from '@/hooks/useMousePosition';
import { Link } from 'react-router-dom';
import { useCountUp } from '@/hooks/useCountUp';
import { cn } from '@/lib/utils';

// Bento Card Wrapper with Pointer spotlight glow
function BentoCard({
  className,
  children,
  delay = 0,
}: {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}) {
  const { coords, handleMouseMove } = useMousePosition();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-premium transition-all duration-300 hover:shadow-premium-hover hover:border-primary/30 hover:-translate-y-0.5',
        className
      )}
    >
      {/* Spotlight Glow Overlay */}
      <div
        className="absolute w-72 h-72 rounded-full bg-primary/4 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${coords.x}px`,
          top: `${coords.y}px`,
        }}
      />
      {children}
    </motion.div>
  );
}

export function BentoGridSection() {
  const { locale } = useLanguage();
  const isRtl = locale === 'ar';
  
  // Custom counters
  const years = useCountUp({ end: 15, duration: 1500 });

  return (
    <section className="section-padding bg-noise bg-muted/20 border-y border-border/30 relative">
      <div className="section-container">
        
        {/* Section Title */}
        <SectionHeading
          title={isRtl ? 'أركان الثقة والتميز والاعتماد' : 'Pillars of Trust & Accreditation'}
          subtitle={isRtl ? 'الترخيص والخبرة' : 'Accredited Excellence'}
          description={isRtl ? 'تجمع أصول للوساطة التأمينية بين الترخيص الرسمي والخبرة الإقليمية لحمايتك' : 'OIB combines official regulatory licenses with extensive regional expertise to secure your assets.'}
        />

        {/* Bento Grid Layout */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]">
          
          {/* Card 1: FRA License (Span 2 cols on md, height tall - 2 rows) */}
          <BentoCard className="md:col-span-2 md:row-span-2 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                  {isRtl ? 'وسيط تأميني مرخص من الهيئة العامة للرقابة المالية' : 'FRA Licensed & Regulated Brokerage'}
                </h3>
                <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mt-3">
                  {isRtl
                    ? `نحن نعمل بترخيص رقم 92 الصادر عن الهيئة العامة للرقابة المالية (FRA) في مصر. يضمن هذا الترخيص التزامنا التام بالقوانين واللوائح والمعايير المهنية لحماية مصالح عملائنا ومستقبل ممتلكاتهم.`
                    : `Licensed by the Egyptian Financial Regulatory Authority (FRA) under number 92. This registration guarantees full compliance with regulatory codes, offering financial security, corporate transparency, and consumer protection.`}
                </p>
              </div>
            </div>
            
            {/* Visual License Certificate Badge */}
            <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-border/60 pt-4 text-sm font-semibold font-mono text-muted-foreground">
              <span className="bg-muted px-2.5 py-1 rounded border border-border">{isRtl ? 'رقم الترخيص: ٩٢' : 'FRA Lic. 92'}</span>
              <span className="bg-muted px-2.5 py-1 rounded border border-border">{isRtl ? 'تأسس: ٢٠١٩' : 'Est. 2019'}</span>
              <span className="bg-muted px-2.5 py-1 rounded border border-border text-primary font-bold">{isRtl ? 'نشط' : 'Active status'}</span>
            </div>
          </BentoCard>

          {/* Card 2: 15+ Years Experience (Height 1 row) */}
          <BentoCard className="flex items-center gap-6">
            <div className="flex-1">
              <div className="text-4xl font-extrabold text-primary font-mono tracking-tight flex items-baseline">
                <span>{years}</span>
                <span className="text-xl ml-0.5">+</span>
              </div>
              <h4 className="text-base font-extrabold text-foreground mt-1.5">
                {isRtl ? 'سنة خبرة تأمينية' : 'Years Experience'}
              </h4>
              <p className="text-sm font-medium text-muted-foreground mt-1">
                {isRtl ? 'في كبرى الشركات المحلية والدولية' : 'Inside global & regional carriers'}
              </p>
            </div>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary border border-secondary/20">
              <Award className="h-6 w-6" />
            </div>
          </BentoCard>

          {/* Card 3: International Coverage (Height 1 row) */}
          <BentoCard className="flex items-center gap-6">
            <div className="flex-1">
              <h4 className="text-lg font-extrabold text-foreground">
                {isRtl ? 'حلول تأمينية دولية' : 'Global & Local Reach'}
              </h4>
              <p className="text-base leading-relaxed text-muted-foreground mt-1.5">
                {isRtl
                  ? 'برامج مصممة بالتعاون مع أكبر شركات التأمين المحلية والعالمية لتغطية المخاطر محلياً ودولياً.'
                  : 'Tailored programs engineered alongside international and national insurance syndicates.'}
              </p>
            </div>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-accent-foreground border border-accent/30">
              <Globe className="h-5 w-5" />
            </div>
          </BentoCard>

          {/* Card 4: Ongoing Support & Claims (Span 1 col, height tall - 2 rows - wait, col-span-1 to maintain asymmetric rows) */}
          <BentoCard className="md:row-span-1 md:col-span-1 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-extrabold text-foreground">
                {isRtl ? 'دعم مستمر ومتابعة مطالبات' : 'Claims & Document Support'}
              </h4>
              <p className="text-base leading-relaxed text-muted-foreground">
                {isRtl
                  ? 'لا ينتهي دورنا بإصدار الوثيقة. فريقنا المتخصص يتابع المطالبات والتسويات ويضمن حصولك على حقوقك بأسرع وقت.'
                  : 'We actively manage policy documentation, expedite insurance payouts, and assist during complex adjustments.'}
              </p>
            </div>
          </BentoCard>

          {/* Card 5: Tailored Solutions and CTA (Span 2 cols on md, height 1 row) */}
          <BentoCard className="md:col-span-2 flex items-center justify-between gap-6">
            <div className="space-y-2 flex-1">
              <h4 className="text-lg sm:text-xl font-extrabold text-foreground">
                {isRtl ? 'هل تبحث عن تغطية خاصة بمؤسستك؟' : 'Looking for Corporate Specialty Coverages?'}
              </h4>
              <p className="text-base text-muted-foreground leading-relaxed max-w-md">
                {isRtl
                  ? 'نحن نساعد الشركات على تحليل المخاطر وتصميم باقات تأمين مخصصة للموظفين والممتلكات والمسؤوليات.'
                  : 'We help corporate entities evaluate liability metrics and design custom executive indemnity programs.'}
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/95 transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-primary shrink-0"
              aria-label={isRtl ? 'اتصل بنا' : 'Contact Us'}
            >
              {isRtl ? <ArrowLeft className="h-5 w-5" /> : <ArrowRight className="h-5 w-5" />}
            </Link>
          </BentoCard>

        </div>
      </div>
    </section>
  );
}
