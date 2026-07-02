import { alexandriaUniversityLogo, ciiLogo, fraLogo } from '@/assets';

export interface Certification {
  id: string;
  name: string;
  nameEn: string;
  nameAr: string;
  logo: string;
}

export const certifications: Certification[] = [
  {
    id: 'fra',
    name: 'Financial Regulatory Authority',
    nameEn: 'Financial Regulatory Authority',
    nameAr: 'هيئة الرقابة المالية',
    logo: fraLogo,
  },
  {
    id: 'cii',
    name: 'The Chartered Insurance Institute of London (CII)',
    nameEn: 'The Chartered Insurance Institute of London (CII)',
    nameAr: 'المعهد الملكي البريطاني للتأمين (CII)',
    logo: ciiLogo,
  },
  {
    id: 'alexandria-university',
    name: 'Alexandria University',
    nameEn: 'Alexandria University',
    nameAr: 'جامعة الإسكندرية',
    logo: alexandriaUniversityLogo,
  },
];
