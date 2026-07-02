/**
 * Central asset registry — uses client-provided PNG/JPEG files as-is.
 */

import oibLogo from './logos/company/oib logo.webp';

import abeLogo from './logos/clients/abe.webp';
import ebeLogo from './logos/clients/ebe.webp';
import ealLogo from './logos/clients/eal.webp';
import dreamlandLogo from './logos/clients/dreamland.webp';
import jacquardLogo from './logos/clients/jacquard-dina-textiles-co.webp';

import fraLogo from './logos/partners/fra.webp';
import ciiLogo from './logos/partners/cli.webp';
import alexandriaUniversityLogo from './logos/partners/alexandria-university.webp';

import heroOffice from './images/hero/hero-office.webp';
import aboutTeam from './images/about/about-team.webp';

export {
  oibLogo,
  abeLogo,
  ebeLogo,
  ealLogo,
  dreamlandLogo,
  jacquardLogo,
  fraLogo,
  ciiLogo,
  alexandriaUniversityLogo,
  heroOffice,
  aboutTeam,
};


export const partnerLogos = {
  fra: fraLogo,
  cii: ciiLogo,
  alexandriaUniversity: alexandriaUniversityLogo,
} as const;
