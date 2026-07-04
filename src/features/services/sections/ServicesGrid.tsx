import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '@/data/services';
import { SectionReveal } from '@/components/shared/SectionReveal';
import { Icon } from '@/components/shared/Icon/Icon';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { useMousePosition } from '@/hooks/useMousePosition';
import { Search, Briefcase, User, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { IconName } from '@/types/icon.types';
import type { Service } from '@/types/service.types';

// Lists of IDs that fall under Corporate vs Individual Insurance
const CORPORATE_IDS = ['property', 'liability', 'marine', 'engineering', 'credit', 'group'];

// Premium Service Card with Spotlight cursor tracking
function ServiceGridCard({
  service,
  isRtl,
}: {
  service: Service;
  isRtl: boolean;
}) {
  const { coords, handleMouseMove } = useMousePosition();
  const isCorporate = CORPORATE_IDS.includes(service.id);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      id={service.id}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-premium transition-all duration-300 hover:shadow-premium-hover hover:border-primary/30 hover:-translate-y-1 flex flex-col justify-between"
    >
      {/* Spotlight Cursor Glow */}
      <div
        className="absolute w-72 h-72 rounded-full bg-primary/4 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${coords.x}px`,
          top: `${coords.y}px`,
        }}
      />

      <div className="space-y-4 relative z-10">
        {/* Card Header row */}
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
            <Icon name={service.icon as IconName} className="h-6 w-6" />
          </div>
          
          {/* Category Tag */}
          <span
            className={cn(
              'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold font-mono tracking-wide',
              isCorporate
                ? 'bg-secondary/15 text-secondary dark:bg-secondary/10'
                : 'bg-primary/15 text-primary dark:bg-primary/10'
            )}
          >
            {isCorporate ? (
              <>
                <Briefcase className="h-3 w-3" />
                <span>{isRtl ? 'أعمال' : 'Business'}</span>
              </>
            ) : (
              <>
                <User className="h-3 w-3" />
                <span>{isRtl ? 'أفراد' : 'Personal'}</span>
              </>
            )}
          </span>
        </div>

        {/* Card Copy */}
        <div className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
            {isRtl ? service.titleAr : service.titleEn}
          </h3>
          <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground font-light">
            {isRtl ? service.descriptionAr : service.descriptionEn}
          </p>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-border/40 relative z-10 flex justify-end">
        <a
          href={`/contact?service=${service.id}`}
          className="text-xs font-bold text-primary inline-flex items-center gap-1 hover:underline"
        >
          <span>{isRtl ? 'طلب استشارة الوثيقة' : 'Request Consultation'}</span>
          <span>→</span>
        </a>
      </div>
    </motion.article>
  );
}

export function ServicesGrid() {
  const { locale } = useLanguage();
  const isRtl = locale === 'ar';
  const location = useLocation();
  const searchInputRef = useRef<HTMLInputElement>(null);

  // States
  const [filter, setFilter] = useState<'all' | 'corporate' | 'individual'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Handle anchor scroll on load / hash changes
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          element.classList.add('ring-2', 'ring-primary', 'ring-offset-4');
          setTimeout(() => {
            element.classList.remove('ring-2', 'ring-primary', 'ring-offset-4');
          }, 3000);
        }, 300);
      }
    }
  }, [location]);

  // Clean filters
  const handleClear = () => {
    setSearchQuery('');
    if (searchInputRef.current) {
      searchInputRef.current.value = '';
    }
  };

  // Filter logic
  const filteredServices = services.filter((service) => {
    const isCorporate = CORPORATE_IDS.includes(service.id);
    
    // 1. Tab filter
    if (filter === 'corporate' && !isCorporate) return false;
    if (filter === 'individual' && isCorporate) return false;

    // 2. Search query filter
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const title = (isRtl ? service.titleAr : service.titleEn).toLowerCase();
      const desc = (isRtl ? service.descriptionAr : service.descriptionEn).toLowerCase();
      return title.includes(q) || desc.includes(q);
    }

    return true;
  });

  return (
    <SectionReveal className="section-padding pt-12 bg-noise bg-muted/20">
      <div className="section-container">
        
        {/* Filter and Search Bar Block */}
        <div className="mb-12 flex flex-col md:flex-row gap-6 items-center justify-between border-b border-border/80 pb-8">
          
          {/* Interactive Sliding Tabs */}
          <div className="relative flex rounded-full bg-card p-1.5 border border-border/60 w-full md:w-auto overflow-hidden">
            <ul className="flex items-center w-full justify-around md:justify-start gap-1">
              {[
                { id: 'all' as const, labelAr: 'الكل', labelEn: 'All Products' },
                { id: 'corporate' as const, labelAr: 'أعمال / شركات', labelEn: 'Corporate' },
                { id: 'individual' as const, labelAr: 'أفراد / عائلات', labelEn: 'Individual' },
              ].map((tab) => {
                const isActive = filter === tab.id;
                return (
                  <li key={tab.id} className="relative z-10 w-full md:w-auto">
                    <button
                      onClick={() => setFilter(tab.id)}
                      className={cn(
                        'relative block w-full px-5 py-2.5 text-xs sm:text-sm font-bold tracking-tight rounded-full transition-colors focus-visible:outline-none',
                        isActive ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                      )}
                    >
                      {isRtl ? tab.labelAr : tab.labelEn}

                      {/* Sliding Tab Highlight background */}
                      {isActive && (
                        <motion.div
                          layoutId="servicesTabBg"
                          className="absolute inset-0 -z-10 rounded-full bg-primary"
                          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Premium Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute start-4.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder={isRtl ? 'بحث في الخدمات...' : 'Search services...'}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-border bg-card py-2.5 ps-11 pe-9 text-xs sm:text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
            />
            {searchQuery && (
              <button
                onClick={handleClear}
                className="absolute end-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground focus-visible:outline-none"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

        </div>

        {/* Services Cards Grid Layout */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <ServiceGridCard
                key={service.id}
                service={service}
                isRtl={isRtl}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search Result State */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center space-y-4"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted border border-border text-muted-foreground">
              <Search className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">
                {isRtl ? 'لم نجد أي خدمات مطابقة' : 'No Services Found'}
              </h3>
              <p className="text-sm text-muted-foreground mt-1 max-w-sm font-light">
                {isRtl
                  ? 'جرب البحث بكلمات أخرى أو تصفح كل فئات الخدمات.'
                  : 'Try searching for different terms or reset your filters.'}
              </p>
            </div>
            <Button onClick={handleClear} variant="outline" size="sm" className="mt-2">
              {isRtl ? 'إعادة ضبط البحث' : 'Reset Search'}
            </Button>
          </motion.div>
        )}

      </div>
    </SectionReveal>
  );
}
