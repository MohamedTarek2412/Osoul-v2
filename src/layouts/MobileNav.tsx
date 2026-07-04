import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, Globe } from 'lucide-react';
import { mainNav } from '@/config/nav.config';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const { copy, locale, setLocale } = useLanguage();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 md:hidden flex justify-end">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer Menu Container */}
          <motion.nav
            ref={menuRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label={copy.header.mobileMenu}
            initial={{ x: locale === 'ar' ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: locale === 'ar' ? '-100%' : '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className={cn(
              'relative h-full w-80 max-w-[85vw] bg-card p-6 shadow-premium flex flex-col justify-between border-s border-border',
              locale === 'ar' ? 'mr-auto' : 'ml-auto'
            )}
          >
            {/* Drawer Header */}
            <div>
              <div className="mb-8 flex items-center justify-between">
                <span className="font-bold tracking-tight text-foreground">
                  {locale === 'ar' ? 'أصول للتأمين' : 'Osoul Navigation'}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-muted border border-transparent hover:border-border"
                  onClick={onClose}
                  aria-label={copy.header.closeMenu}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Navigation Links List */}
              <ul className="space-y-1.5">
                {mainNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      onClick={onClose}
                      className={cn(
                        'block rounded-lg px-4 py-3 text-sm font-semibold text-muted-foreground transition-all hover:bg-muted hover:text-foreground border border-transparent hover:border-border',
                      )}
                    >
                      {copy.nav[item.id]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Actions */}
            <div className="space-y-4 mt-auto">
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-5">
                <Link to="/contact" onClick={onClose}>
                  {copy.header.contact}
                </Link>
              </Button>

              {/* Localized Switcher inside Mobile Drawer */}
              <Button
                type="button"
                variant="outline"
                className="w-full flex items-center justify-center gap-2 border-border text-muted-foreground font-medium py-5"
                onClick={() => {
                  setLocale(locale === 'ar' ? 'en' : 'ar');
                  onClose();
                }}
                aria-label={copy.header.switchLangLabel}
              >
                <Globe className="h-4 w-4" />
                <span>{locale === 'ar' ? 'English Language' : 'اللغة العربية'}</span>
              </Button>
            </div>
          </motion.nav>
        </div>
      )}
    </AnimatePresence>
  );
}
