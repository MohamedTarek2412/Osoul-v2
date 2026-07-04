import { siteConfig } from '@/config/site.config';
import { license } from '@/data/license';

export const en = {
  nav: {
    home: 'Home',
    services: 'Services',
    contact: 'Contact',
  },
  header: {
    skipToContent: 'Skip to content',
    switchLang: 'عربي',
    switchLangLabel: 'Switch to Arabic',
    contact: 'Contact Us',
    mobileMenu: 'Menu',
    mainNavLabel: 'Main navigation',
    closeMenu: 'Close menu',
    toggleThemeLabel: 'Toggle theme',
  },
  footer: {
    quickLinks: 'Quick Links',
    contact: 'Contact',
    rights: 'All rights reserved. | FRA License:',
    copyright: `© ${new Date().getFullYear()} ${siteConfig.nameEn}. All rights reserved. | FRA License: ${siteConfig.licenseNumber}`,
  },
  hero: {
    pretitle: 'Licensed by FRA',
    title: 'Trusted protection for your future',
    description:
      'Osoul Insurance Broker is a leading Egyptian insurance intermediary providing complete coverage for individuals and businesses with a focus on service excellence.',
    services: 'Explore Services',
    contact: 'Free Consultation',
    spotlight: `${siteConfig.nameEn} · ${siteConfig.yearsExperience}+ years of experience in the Egyptian market`,
  },
  about: {
    title: 'Your trusted insurance partner',
    content:
      'Osoul Insurance Broker (OIB) is licensed by the Egyptian Financial Regulatory Authority under license 92/2019. We deliver tailored insurance solutions for individuals and businesses with transparency, professionalism, and exceptional client care.',
  },
  licensedTrusted: {
    title: 'Licensed & Trusted',
    badge: 'Licensed & Trusted',
    description: license.description,
    licenseLabel: 'License Card',
  },
  trustedClients: {
    title: 'Our clients trust us',
    subtitle: 'Trusted partners',
    description: 'We proudly serve a diverse mix of leading organizations.',
  },
  leadership: {
    title: 'Leadership Team',
    subtitle: 'Leadership Team',
    description: 'Specialized experts driving our vision toward excellence',
  },
  howWeWork: {
    title: 'How we work',
    subtitle: 'Our approach',
    description: 'A simple, transparent process from consultation to ongoing support.',
  },
  servicesPreview: {
    title: 'Our insurance services',
    subtitle: 'Services',
    description: 'Comprehensive solutions for individuals and businesses.',
    viewAll: 'View all services',
  },
  whyChoose: {
    title: 'Why choose Osoul Insurance?',
    subtitle: 'Our advantages',
    description: 'We deliver a distinctive insurance experience rooted in expertise and trust.',
  },
  certifications: {
    title: 'Certifications & partnerships',
    subtitle: 'Professional certifications',
    description: 'We operate with the highest standards of quality, compliance, and accreditation.',
  },
  cta: {
    title: 'Ready for protection?',
    description:
      'Get a free insurance consultation from our experts and find the best solution for your needs.',
    action: 'Start Now',
  },
  servicesPage: {
    pretitle: 'Services',
    title: 'Comprehensive insurance solutions',
    description:
      'We offer a complete suite of insurance products for individuals and businesses, designed to meet your needs with strong coverage and competitive pricing.',
  },
  contactPage: {
    pretitle: 'Contact Us',
    title: 'We are here to help',
    description:
      'Reach out to our team for a free insurance consultation or any inquiry.',
    formTitle: 'Send us a message',
    mapTitle: 'Osoul Insurance location on Google Maps',
    labels: {
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      serviceType: 'Service type',
      subject: 'Subject',
      message: 'Message',
      send: 'Send message',
      sending: 'Sending...',
      servicePlaceholder: 'Choose a service',
      namePlaceholder: 'Your full name',
      emailPlaceholder: 'email@example.com',
      phonePlaceholder: '+20 1xxxxxxxxx',
      subjectPlaceholder: 'Message subject',
      messagePlaceholder: 'Write your message here...',
    },
    errors: {
      nameMin: 'Name must be at least 2 characters',
      nameMax: 'Name is too long',
      emailInvalid: 'Invalid email address',
      phoneMin: 'Invalid phone number',
      phoneInvalid: 'Invalid phone number',
      subjectMin: 'Subject is too short',
      subjectMax: 'Subject is too long',
      messageMin: 'Message is too short',
      messageMax: 'Message is too long',
    },
    contactItems: {
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      hours: 'Office hours',
    },
    hours: 'Sun - Thu: 9:00 AM - 5:00 PM',
    success: 'Your message has been sent successfully! We will contact you shortly.',
  },
  error: {
    notFoundTitle: 'Page not found',
    notFoundMessage: 'Sorry, the page you are looking for cannot be found or has moved.',
    backHome: 'Back to home',
    errorTitle: 'Unexpected error',
    errorMessage: 'There was an issue processing your request.',
    loadError: 'An error occurred while loading the page.',
    returnHome: 'Return to homepage',
  },
  seo: {
    home: {
      title: `${siteConfig.nameEn} | Trusted insurance broker in Egypt`,
      description:
        'Osoul Insurance Broker provides personalized insurance solutions for individuals and businesses across Egypt.',
    },
    services: {
      title: `Services | ${siteConfig.nameEn}`,
      description:
        'Explore our full range of insurance services for medical, motor, property, liability, life, marine, and commercial coverage.',
    },
    contact: {
      title: `Contact | ${siteConfig.nameEn}`,
      description:
        'Contact Osoul Insurance Broker for a free consultation and tailored insurance solutions.',
    },
    notFound: {
      title: `Page not found | ${siteConfig.nameEn}`,
      description: 'The page you are looking for cannot be found.',
    },
  },
} as const;
