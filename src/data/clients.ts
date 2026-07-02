import type { Client } from '@/types/client.types';
import {
  abeLogo,
  dreamlandLogo,
  ealLogo,
  ebeLogo,
  jacquardLogo,
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
