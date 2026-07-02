/**
 * Central asset registry — uses client-provided PNG/JPEG files as-is.
 */

import oibLogo from './logos/company/oib logo.webp';
import oibLogoSm from './logos/company/oib logo-sm.webp';

import abeLogo from './logos/clients/abe.webp';
import abeLogoSm from './logos/clients/abe-sm.webp';
import ebeLogo from './logos/clients/ebe.webp';
import ealLogo from './logos/clients/eal.webp';
import ealLogoSm from './logos/clients/eal-sm.webp';
import dreamlandLogo from './logos/clients/dreamland.webp';
import dreamlandLogoSm from './logos/clients/dreamland-sm.webp';
import jacquardLogo from './logos/clients/jacquard-dina-textiles-co.webp';
import jacquardLogoSm from './logos/clients/jacquard-dina-textiles-co-sm.webp';

import fraLogo from './logos/partners/fra.webp';
import ciiLogo from './logos/partners/cli.webp';
import alexandriaUniversityLogo from './logos/partners/alexandria-university.webp';

import heroOffice from './images/hero/hero-office.webp';
import heroOfficeMd from './images/hero/hero-office-748x499.webp';
import heroOfficeSm from './images/hero/hero-office-375x250.webp';
import aboutTeam from './images/about/about-team.webp';

export {
  oibLogo,
  oibLogoSm,
  abeLogo,
  abeLogoSm,
  ebeLogo,
  ealLogo,
  ealLogoSm,
  dreamlandLogo,
  dreamlandLogoSm,
  jacquardLogo,
  jacquardLogoSm,
  fraLogo,
  ciiLogo,
  alexandriaUniversityLogo,
  heroOffice,
  heroOfficeMd,
  heroOfficeSm,
  aboutTeam,
};


export const partnerLogos = {
  fra: fraLogo,
  cii: ciiLogo,
  alexandriaUniversity: alexandriaUniversityLogo,
} as const;
