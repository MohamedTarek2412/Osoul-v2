import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { mainNav } from '@/config/nav.config';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const { copy, locale, setLocale } = useLanguage();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden />
      <nav
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label={copy.header.mobileMenu}
        className="absolute inset-y-0 right-0 w-72 bg-background p-6 shadow-xl"
      >
        <div className="mb-8 flex items-center justify-between">
          <span className="font-bold">{copy.header.mobileMenu}</span>
          <Button variant="ghost" size="icon" onClick={onClose} aria-label={copy.header.closeMenu}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        <ul className="space-y-2">
          {mainNav.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                onClick={onClose}
                className={cn(
                  'block rounded-md px-4 py-3 text-sm font-medium transition-colors hover:bg-accent',
                )}
              >
                {copy.nav[item.id]}
              </Link>
            </li>
          ))}
        </ul>
        <Button asChild className="mt-6 w-full">
          <Link to="/contact" onClick={onClose}>
            {copy.header.contact}
          </Link>
        </Button>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="mt-4 w-full"
          onClick={() => setLocale(locale === 'ar' ? 'en' : 'ar')}
          aria-label={copy.header.switchLangLabel}
        >
          {copy.header.switchLang}
        </Button>
      </nav>
    </div>
  );
}
