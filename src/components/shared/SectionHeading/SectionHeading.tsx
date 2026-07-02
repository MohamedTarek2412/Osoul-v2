import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'center' | 'start';
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <section className={cn('mb-12 max-w-2xl', className)} aria-labelledby={title.replace(/\s+/g, '-')}> 
      {subtitle && (
        <p className={cn(
          'mb-2 text-sm font-semibold uppercase tracking-wider text-primary',
          align === 'center' ? 'text-center' : 'text-start',
        )}>
          {subtitle}
        </p>
      )}
      <h2
        id={title.replace(/\s+/g, '-')}
        className={cn(
          'text-3xl font-bold tracking-tight md:text-4xl',
          align === 'center' ? 'text-center' : 'text-start',
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn(
          'mt-4 text-lg text-muted-foreground',
          align === 'center' ? 'mx-auto text-center' : 'text-start',
        )}>
          {description}
        </p>
      )}
    </section>
  );
}
