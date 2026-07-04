import { motion } from 'framer-motion';
import { services } from '@/data/services';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { useLanguage } from '@/hooks/useLanguage';
import { Icon } from '@/components/shared/Icon/Icon';
import { useMousePosition } from '@/hooks/useMousePosition';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { IconName } from '@/types/icon.types';

function MasonryCard({
  title,
  desc,
  icon,
  index,
  id,
  isRtl,
}: {
  title: string;
  desc: string;
  icon: string;
  index: number;
  id: string;
  isRtl: boolean;
}) {
  const { coords, handleMouseMove } = useMousePosition();

  // Vary card padding and height to emphasize the staggered masonry effect organically
  const heights = [
    'min-h-[220px] pb-8',
    'min-h-[260px] pb-12',
    'min-h-[200px] pb-6',
    'min-h-[280px] pb-14',
    'min-h-[240px] pb-10',
    'min-h-[210px] pb-7',
  ];
  const spacingClass = heights[index % heights.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      className={cn(
        'break-inside-avoid rounded-2xl border border-border/80 bg-card p-6 shadow-premium transition-all duration-300 hover:shadow-premium-hover hover:border-primary/20 hover:-translate-y-1 flex flex-col justify-between group relative overflow-hidden',
        spacingClass
      )}
    >
      {/* Dynamic Cursor Light Glow */}
      <div
        className="absolute w-64 h-64 rounded-full bg-primary/4 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${coords.x}px`,
          top: `${coords.y}px`,
        }}
      />

      <div className="space-y-4 relative z-10">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
          <Icon name={icon as IconName} className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-primary">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {desc}
          </p>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-border/40 relative z-10 flex justify-end">
        <Link
          to={`/services#${id}`}
          className="text-sm font-semibold text-primary inline-flex items-center gap-1 group-hover:underline"
        >
          <span>{isRtl ? 'تفاصيل الخدمة' : 'Service Details'}</span>
          <span>→</span>
        </Link>
      </div>
    </motion.article>
  );
}

export function MasonryGridSection() {
  const { locale, copy } = useLanguage();
  const isRtl = locale === 'ar';

  // Preview the first 6 core corporate services in the home masonry grid
  const previewServices = services.slice(0, 6);

  return (
    <section className="section-padding bg-card relative overflow-hidden border-b border-border/40">
      {/* Decorative vectors */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-secondary/2 rounded-full blur-[80px] pointer-events-none" />

      <div className="section-container">
        
        {/* Section Heading */}
        <SectionHeading
          title={copy.servicesPreview.title}
          subtitle={copy.servicesPreview.subtitle}
          description={copy.servicesPreview.description}
        />

        {/* Masonry Columns Grid */}
        <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:balance]">
          {previewServices.map((service, idx) => (
            <MasonryCard
              key={service.id}
              id={service.id}
              title={isRtl ? service.titleAr : service.titleEn}
              desc={isRtl ? service.descriptionAr : service.descriptionEn}
              icon={service.icon}
              index={idx}
              isRtl={isRtl}
            />
          ))}
        </div>

        {/* Bottom CTA to view all products */}
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-5">
            <Link to="/services">
              {copy.servicesPreview.viewAll}
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}
