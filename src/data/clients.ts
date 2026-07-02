import type { Client } from '@/types/client.types';
import {
  abeLogoSm as abeLogo,
  dreamlandLogoSm as dreamlandLogo,
  ealLogoSm as ealLogo,
  ebeLogo,
  jacquardLogoSm as jacquardLogo,
} from '@/assets';

export const clients: Client[] = [
  {
    id: 'abe',
    name: 'ABE',
    industry: 'Agricultural Bank of Egypt',
    logo: abeLogo,
  },
  {
    id: 'ebe',
    name: 'EBE',
    industry: 'Export Development Bank of Egypt',
    logo: ebeLogo,
  },
  {
    id: 'eal',
    name: 'EAL',
    industry: 'Egyptian Arab Land Bank',
    logo: ealLogo,
  },
  {
    id: 'dreamland',
    name: 'Dreamland 6th of October',
    industry: 'Real estate and development',
    logo: dreamlandLogo,
  },
  {
    id: 'jacquard',
    name: 'Jacqard Dina Textiles Co.',
    industry: 'Textiles & Fabrics',
    logo: jacquardLogo,
  },
];
