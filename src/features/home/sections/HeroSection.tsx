import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';
import { heroOffice, heroOfficeMd, heroOfficeSm, oibLogoSm } from '@/assets';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { useMousePosition } from '@/hooks/useMousePosition';
import { cn } from '@/lib/utils';

export function HeroSection() {
  const { copy, locale } = useLanguage();
  const isRtl = locale === 'ar';
  const { coords, handleMouseMove } = useMousePosition();
  
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  // Stagger variants for content reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-noise bg-card pt-28 pb-20 border-b border-border/40"
    >
      {/* Premium Ambient Background Accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background/50 pointer-events-none" />
      
      {/* Moving Mouse Spotlight Glow */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none transition-transform duration-100 ease-out hidden md:block"
        style={{
          transform: `translate(${coords.x - 300}px, ${coords.y - 300}px)`,
        }}
      />

      {/* Corporate Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />

      <div className="section-container relative z-10 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          
          {/* Hero Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 lg:col-span-7 flex flex-col items-start"
          >
            {/* Regulatory Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold tracking-wider text-primary shadow-sm"
            >
              <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
              <span>{copy.hero.pretitle}</span>
            </motion.div>

            {/* Main Luxury Title */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl font-black leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-4xl lg:text-5xl"
            >
              {copy.hero.title}
            </motion.h1>

            {/* Description Text */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-xl font-normal"
            >
              {copy.hero.description}
            </motion.p>

            {/* Buttons Group */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-lg transition-all hover:shadow-premium"
              >
                <Link to="/services" className="inline-flex items-center justify-center gap-2">
                  <span>{copy.hero.services}</span>
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-border hover:bg-muted hover:text-foreground text-muted-foreground font-semibold px-8 py-6 rounded-lg transition-all"
              >
                <Link to="/contact">{copy.hero.contact}</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Right Visual Column */}
          <div className="lg:col-span-5 relative flex justify-center w-full">
            {/* Soft backdrop glow panel */}
            <div className="absolute inset-0 bg-primary/10 rounded-2xl filter blur-3xl opacity-40 scale-95 pointer-events-none" />

            {/* Main Image frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
              className="relative overflow-hidden rounded-2xl shadow-premium border border-border/80 w-full max-w-md sm:max-w-none group"
            >
              {/* Picture markup with dynamic resolution switches */}
              <picture>
                <source srcSet={heroOfficeSm} media="(max-width: 640px)" />
                <source srcSet={heroOfficeMd} media="(max-width: 1024px)" />
                <img
                  src={heroOffice}
                  alt={copy.hero.title}
                  className="aspect-[4/3] sm:aspect-[4/3.5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  width={1364}
                  height={1024}
                  fetchPriority="high"
                />
              </picture>
              
              {/* Premium dark gradient overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

              {/* Float spotlight card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className={cn(
                  "absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md p-4 text-white",
                  isRtl ? "text-right" : "text-left"
                )}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 border border-primary/30">
                    <img src={oibLogoSm} alt="OIB" className="h-6 w-6 object-contain" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary font-mono tracking-widest uppercase">
                      {isRtl ? 'الريادة والخبرة' : 'LEADERSHIP & TRUST'}
                    </p>
                    <p className="text-sm text-white/80 mt-0.5 line-clamp-1">
                      {copy.hero.spotlight}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
