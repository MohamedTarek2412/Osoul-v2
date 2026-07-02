export const siteConfig = {
  name: 'أصول للتأمين',
  nameEn: 'Osoul Insurance Brokerage',
  shortName: 'OIB',
  description:
    'وسيط تأميني رائد في مصر، نقدم حلول تأمينية متكاملة للأفراد والشركات بأعلى معايير الجودة والاحترافية.',
  descriptionEn:
    'Osoul Insurance Brokerage is a leading Egyptian insurance brokerage offering comprehensive local, regional, and international coverage while helping your business grow.',
  url: import.meta.env.VITE_APP_URL ?? 'https://osoul-insurance.com',
  email: import.meta.env.VITE_CONTACT_EMAIL ?? 'Rania@osoulinsurance.com',
  emailSecondary:
    import.meta.env.VITE_CONTACT_EMAIL_SECONDARY ?? 'Mohamed@osoulinsurance.com',
  phone: import.meta.env.VITE_CONTACT_PHONE ?? '+201115-666-387',
  phoneSecondary:
    import.meta.env.VITE_CONTACT_PHONE_SECONDARY ?? '+201150-85-85-85',
  address: '43 القاهرة الجديدة، أمام فندق رينيسانس - التجمع الأول - أرض المالية',
  addressEn:
    '43 New Cairo, in front of Renaissance Hotel - First Settlement - Finance City',
  licenseNumber: '92',
  foundedYear: 2019,
  yearsExperience: 15,
  social: {
    facebook: 'https://facebook.com/osoul-insurance',
    linkedin: 'https://linkedin.com/company/osoul-insurance',
    twitter: 'https://twitter.com/osoul_insurance',
  },
} as const;
