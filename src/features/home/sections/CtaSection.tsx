import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionReveal } from '@/components/shared/SectionReveal';
import { useLanguage } from '@/hooks/useLanguage';
import { siteConfig } from '@/config/site.config';

export function CtaSection() {
  const { copy, locale } = useLanguage();
  const isRtl = locale === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <SectionReveal className="section-padding bg-muted/20 border-t border-border/40">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl border border-primary/20 bg-card shadow-premium"
        >
          {/* Decorative inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5 pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center px-6 py-14 sm:px-12 sm:py-16 md:py-20 gap-8">
            {/* Label Tag */}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-primary uppercase">
              {isRtl ? 'استشارة مجانية' : 'Free Consultation'}
            </span>

            {/* Headline */}
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
                {copy.cta.title}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {copy.cta.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-xl transition-all hover:shadow-premium min-w-[200px]"
              >
                <Link to="/contact" className="inline-flex items-center gap-2">
                  <span>{copy.cta.action}</span>
                  <ArrowIcon className="h-4 w-4" />
                </Link>
              </Button>

              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2.5 rounded-xl border border-border px-6 py-4 text-sm font-semibold text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-muted/50 transition-all"
              >
                <PhoneCall className="h-4 w-4 text-primary" />
                <span dir="ltr">{siteConfig.phone}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionReveal>
  );
}
