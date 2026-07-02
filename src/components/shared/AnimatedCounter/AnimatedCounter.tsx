import { useCountUp } from '@/hooks/useCountUp';
import { formatNumber } from '@/utils/format';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  enabled?: boolean;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix = '',
  enabled = true,
  className,
}: AnimatedCounterProps) {
  const count = useCountUp({ end: value, enabled });

  return (
    <span className={className} aria-live="polite" aria-atomic="true">
      {formatNumber(count)}
      {suffix}
    </span>
  );
}
