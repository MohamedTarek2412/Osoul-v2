import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, Moon, Sun, Globe } from 'lucide-react';
import { mainNav } from '@/config/nav.config';
import { siteConfig } from '@/config/site.config';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { useTheme } from '@/hooks/useTheme';
import { oibLogo } from '@/assets';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  mobileNavOpen: boolean;
  onMenuOpen: () => void;
}

export function Header({ mobileNavOpen, onMenuOpen }: HeaderProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const { locale, setLocale, copy } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  const toggleLanguage = () => {
    setLocale(locale === 'ar' ? 'en' : 'ar');
  };

  const logoLabel = locale === 'ar' ? siteConfig.name : siteConfig.nameEn;

  return (
    <>
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:start-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
      >
        {copy.header.skipToContent}
      </a>

      <header
        className={cn(
          'sticky top-0 z-40 w-full transition-all duration-300 border-b border-transparent bg-background/80 backdrop-blur-md',
          isScrolled
            ? 'h-16 shadow-premium border-border bg-background/90'
            : 'h-20 bg-background/30'
        )}
      >
        <div className="section-container flex h-full items-center justify-between">
          {/* Logo & Corporate Branding */}
          <Link
            to="/"
            className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md"
            aria-label={logoLabel}
          >
            <img
              src={oibLogo}
              alt={logoLabel}
              className={cn(
                'w-auto object-contain transition-all duration-300',
                isScrolled ? 'h-9 sm:h-10' : 'h-11 sm:h-12'
              )}
            />
            <div className="hidden flex-col items-start leading-none sm:flex">
              <span className="text-base font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                {logoLabel}
              </span>
              <span className="mt-0.5 text-[10px] uppercase tracking-widest text-muted-foreground">
                {locale === 'ar' ? 'أصول للوساطة التأمينية' : 'Insurance Brokerage'}
              </span>
            </div>
          </Link>

          {/* Premium Desktop Navigation */}
          <nav
            aria-label={copy.header.mainNavLabel}
            className="hidden items-center gap-1 md:flex"
          >
            <ul className="flex items-center gap-1" onMouseLeave={() => setHoveredIdx(null)}>
              {mainNav.map((item, idx) => {
                const isActive = location.pathname === item.href;
                return (
                  <li key={item.href} className="relative">
                    <NavLink
                      to={item.href}
                      onMouseEnter={() => setHoveredIdx(idx)}
                      className={({ isActive: linkActive }) =>
                        cn(
                          'relative z-10 block px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md',
                          linkActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                        )
                      }
                    >
                      {copy.nav[item.id]}

                      {/* Active Indicator Line */}
                      {isActive && (
                        <motion.div
                          layoutId="activeNavLine"
                          className="absolute bottom-0 inset-x-4 h-0.5 bg-primary"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </NavLink>

                    {/* Hover Capsule Glow */}
                    <AnimatePresence>
                      {hoveredIdx === idx && (
                        <motion.span
                          layoutId="navHoverCapsule"
                          className="absolute inset-0 z-0 rounded-md bg-muted/60"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ type: 'spring', stiffness: 350, damping: 35 }}
                        />
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Action Icons & Global Controls */}
          <div className="flex items-center gap-3">
            {/* Elegant Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="group flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground border border-transparent hover:border-border hover:bg-muted/50 transition-all focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={copy.header.switchLangLabel}
            >
              <Globe className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span>{locale === 'ar' ? 'English' : 'العربية'}</span>
            </button>

            {/* Premium Theme Switcher */}
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground border border-transparent hover:border-border hover:bg-muted/50 transition-all focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={copy.header.toggleThemeLabel}
            >
              <AnimatePresence mode="wait" initial={false}>
                {resolvedTheme === 'dark' ? (
                  <motion.div
                    key="sun"
                    initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Sun className="h-4 w-4 text-primary" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Moon className="h-4 w-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Corporate Call To Action */}
            <Button
              asChild
              className="hidden sm:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-premium transition-all shadow-sm"
            >
              <Link to="/contact">{copy.header.contact}</Link>
            </Button>

            {/* Mobile Hamburger Trigger */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden border border-transparent hover:border-border hover:bg-muted"
              onClick={onMenuOpen}
              aria-expanded={mobileNavOpen}
              aria-controls="mobile-navigation"
              aria-label={copy.header.mobileMenu}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}
