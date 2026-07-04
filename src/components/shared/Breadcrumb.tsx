import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Home } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';

interface BreadcrumbProps {
  className?: string;
  customLabels?: Record<string, string>;
}

export function Breadcrumb({ className, customLabels }: BreadcrumbProps) {
  const { locale } = useLanguage();
  const location = useLocation();
  const isRtl = locale === 'ar';
  
  const pathnames = location.pathname.split('/').filter((x) => x);
  if (pathnames.length === 0) return null;

  // Translation mapping for breadcrumb labels
  const defaultLabels: Record<string, string> = {
    services: isRtl ? 'الخدمات' : 'Services',
    contact: isRtl ? 'اتصل بنا' : 'Contact Us',
    about: isRtl ? 'من نحن' : 'About Us',
  };

  const getLabel = (path: string) => {
    if (customLabels && customLabels[path]) return customLabels[path];
    if (defaultLabels[path]) return defaultLabels[path];
    // fallback to capitalizing path segments
    return path.charAt(0).toUpperCase() + path.slice(1);
  };

  return (
    <nav
      aria-label={isRtl ? 'مسار التنقل' : 'Breadcrumb'}
      className={cn('flex py-3 px-4 rounded-lg bg-muted/30 border border-border/50 text-xs sm:text-sm', className)}
    >
      <ol className="flex items-center space-y-0 flex-wrap gap-1.5 sm:gap-2 text-muted-foreground">
        {/* Home Item */}
        <li>
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded-sm"
          >
            <Home className="h-3.5 w-3.5" />
            <span className="sr-only">{isRtl ? 'الرئيسية' : 'Home'}</span>
          </Link>
        </li>

        {/* Dynamic Segments */}
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return (
            <li key={to} className="flex items-center gap-1.5 sm:gap-2">
              {/* Chevron icon direction depends on locale */}
              {isRtl ? (
                <ChevronLeft className="h-3.5 w-3.5 shrink-0 text-muted-foreground/60" />
              ) : (
                <ChevronRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground/60" />
              )}
              {last ? (
                <span className="font-semibold text-foreground select-none" aria-current="page">
                  {getLabel(value)}
                </span>
              ) : (
                <Link
                  to={to}
                  className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded-sm"
                >
                  {getLabel(value)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
