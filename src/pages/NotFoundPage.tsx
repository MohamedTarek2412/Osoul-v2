import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, ArrowRight, ShieldOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Seo } from '@/components/Seo';
import { useLanguage } from '@/hooks/useLanguage';

export function NotFoundPage() {
  const { copy, locale } = useLanguage();
  const isRtl = locale === 'ar';
  const ArrowIcon = isRtl ? ArrowRight : ArrowLeft;

  return (
    <>
      <Seo title={copy.seo.notFound.title} description={copy.seo.notFound.description} canonical="/404" />

      <main
        id="main-content"
        className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-noise bg-card border-b border-border/40"
      >
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

        {/* Central radial ambient glow */}
        <div className="absolute w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 section-container flex flex-col items-center text-center gap-8 py-20">

          {/* Error Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-muted/50 text-muted-foreground"
          >
            <ShieldOff className="h-9 w-9" />
          </motion.div>

          {/* Error Code */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[8rem] sm:text-[10rem] font-extrabold font-mono leading-none text-primary/10 select-none">
              404
            </p>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3 -mt-12"
          >
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              {copy.error.notFoundTitle}
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground font-light max-w-md mx-auto leading-relaxed">
              {copy.error.notFoundMessage}
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-5 rounded-xl min-w-[180px] gap-2"
            >
              <Link to="/">
                <Home className="h-4 w-4" />
                <span>{copy.error.backHome}</span>
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border hover:bg-muted font-semibold px-8 py-5 rounded-xl min-w-[180px] gap-2"
            >
              <Link to="/contact">
                <ArrowIcon className="h-4 w-4" />
                <span>{isRtl ? 'تواصل معنا' : 'Contact Us'}</span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </main>
    </>
  );
}
