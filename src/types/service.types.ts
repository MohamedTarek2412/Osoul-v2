import type { IconName } from '@/types/icon.types';

export interface Service {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  icon: IconName;
}
