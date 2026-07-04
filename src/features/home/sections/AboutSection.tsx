import { motion } from 'framer-motion';
import { aboutTeam } from '@/assets';
import { companyProfile } from '@/data/company-profile';
import { useLanguage } from '@/hooks/useLanguage';
import { ShieldCheck, Globe, Users } from 'lucide-react';

export function AboutSection() {
  const { locale, copy } = useLanguage();
  const isRtl = locale === 'ar';

  const pillars = [
    {
      icon: ShieldCheck,
      labelAr: 'مرخصة رسمياً',
      labelEn: 'Officially Licensed',
    },
    {
      icon: Globe,
      labelAr: 'تغطية دولية',
      labelEn: 'Global Coverage',
    },
    {
      icon: Users,
      labelAr: 'خدمة متخصصة',
      labelEn: 'Expert Service',
    },
  ];

  return (
    <section className="section-padding bg-noise bg-muted/20 border-t border-b border-border/40 relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/2 rounded-full blur-[80px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Image Column — left on LTR, right on RTL */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`relative ${isRtl ? 'lg:order-2' : 'lg:order-1'}`}
          >
            {/* Image frame with rotated border accent */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl border border-primary/15 rotate-2 pointer-events-none" />
              <div className="overflow-hidden rounded-2xl border border-border/80 shadow-premium">
                <img
                  src={aboutTeam}
                  alt={isRtl ? companyProfile.about.title : companyProfile.about.titleEn}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-5 -end-5 rounded-2xl border border-border/80 bg-card px-5 py-4 shadow-premium backdrop-blur-md">
                <p className="text-3xl font-extrabold font-mono text-primary">15+</p>
                <p className="text-sm font-semibold text-muted-foreground mt-0.5 leading-tight max-w-[100px]">
                  {isRtl ? 'سنة خبرة في التأمين' : 'Years Insurance Expertise'}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Text Content Column */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className={`space-y-7 ${isRtl ? 'lg:order-1' : 'lg:order-2'}`}
          >
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-primary font-mono">
                {isRtl ? companyProfile.about.title : companyProfile.about.titleEn}
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
                {copy.about.title}
              </h2>
            </div>

            <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground font-medium">
              {locale === 'ar' ? companyProfile.about.content : companyProfile.about.contentEn}
            </p>

            {/* Trust Pillars Row */}
            <div className="flex flex-wrap gap-3 pt-2">
              {pillars.map(({ icon: Icon, labelAr, labelEn }) => (
                <div
                  key={labelEn}
                  className="flex items-center gap-2 rounded-lg border border-border/80 bg-card px-4 py-2.5 text-sm font-bold text-foreground shadow-sm"
                >
                  <Icon className="h-4 w-4 text-primary shrink-0" />
                  <span>{isRtl ? labelAr : labelEn}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
