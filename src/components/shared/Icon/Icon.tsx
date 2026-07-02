import type { IconName } from '@/types/icon.types';
import { iconMap } from './iconMap';

interface IconProps {
  name: IconName;
  className?: string;
  size?: number;
}

export function Icon({ name, className, size = 24 }: IconProps) {
  const LucideIconComponent = iconMap[name];
  return <LucideIconComponent className={className} size={size} aria-hidden="true" />;
}
