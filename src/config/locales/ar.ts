import { companyProfile } from '@/data/company-profile';
import { license } from '@/data/license';
import { siteConfig } from '@/config/site.config';

export const ar = {
  nav: {
    home: 'الرئيسية',
    services: 'خدماتنا',
    contact: 'تواصل معنا',
  },
  header: {
    skipToContent: 'تخطي إلى المحتوى',
    switchLang: 'English',
    switchLangLabel: 'التبديل إلى الإنجليزية',
    contact: 'تواصل معنا',
    mobileMenu: 'القائمة',
    mainNavLabel: 'القائمة الرئيسية',
    closeMenu: 'إغلاق القائمة',
    toggleThemeLabel: 'تبديل الوضع',
  },
  footer: {
    quickLinks: 'روابط سريعة',
    contact: 'تواصل',
    rights: 'جميع الحقوق محفوظة. | ترخيص FRA:',
    copyright: `© ${new Date().getFullYear()} ${siteConfig.name}. جميع الحقوق محفوظة. | ترخيص FRA: ${siteConfig.licenseNumber}`,
  },
  hero: {
    pretitle: 'مرخص من هيئة الرقابة المالية',
    title: 'حماية موثوقة لمستقبلك',
    description: siteConfig.description,
    services: 'اكتشف خدماتنا',
    contact: 'استشارة مجانية',
    spotlight: `${siteConfig.name} · ${siteConfig.yearsExperience}+ سنة من الخبرة في السوق المصري`,
  },
  about: {
    title: 'شريكك الموثوق في عالم التأمين',
    content: companyProfile.about.content,
  },
  licensedTrusted: {
    title: 'مرخصون وموثوقون',
    badge: 'Licensed & Trusted',
    description: license.descriptionAr,
    licenseLabel: 'License Card',
  },
  trustedClients: {
    title: 'عملاؤنا يثقون بنا',
    subtitle: 'شركاء النجاح',
    description: 'نفخر بخدمة مجموعة متنوعة من الشركات والمؤسسات الرائدة',
  },
  leadership: {
    title: 'فريق القيادة',
    subtitle: 'Leadership Team',
    description: 'خبراء متخصصون يقودون رؤيتنا نحو التميز',
  },
  howWeWork: {
    title: 'كيف نعمل',
    subtitle: 'منهجيتنا',
    description: 'عملية بسيطة وشفافة من الاستشارة إلى الدعم المستمر',
  },
  servicesPreview: {
    title: 'خدماتنا التأمينية',
    subtitle: 'خدماتنا',
    description: 'حلول شاملة للأفراد والشركات',
    viewAll: 'عرض جميع الخدمات',
  },
  whyChoose: {
    title: 'لماذا تختار أصول للتأمين؟',
    subtitle: 'مزايانا',
    description: 'نقدم تجربة تأمينية متميزة تجمع بين الخبرة والاحترافية',
  },
  certifications: {
    title: 'الشهادات والاعتمادات المهنية',
    subtitle: 'اعتمادات ومؤسسات',
    description: 'نعمل وفق أعلى معايير الجودة والاعتماد المهني',
  },
  cta: {
    title: 'هل أنت مستعد للحماية؟',
    description: 'احصل على استشارة تأمينية مجانية من خبرائنا واكتشف الحل الأمثل لاحتياجاتك',
    action: 'ابدأ الآن',
  },
  servicesPage: {
    pretitle: 'خدماتنا',
    title: 'حلول تأمينية شاملة',
    description:
      'نقدم مجموعة متكاملة من خدمات التأمين للأفراد والشركات، مصممة لتلبية احتياجاتك بأفضل الأسعار وأوسع التغطيات.',
  },
  contactPage: {
    pretitle: 'تواصل معنا',
    title: 'نحن هنا لمساعدتك',
    description: 'تواصل مع فريقنا للحصول على استشارة تأمينية مجانية أو لأي استفسار',
    formTitle: 'أرسل لنا رسالة',
    mapTitle: 'موقع أصول للتأمين على خرائط Google',
    labels: {
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      serviceType: 'نوع الخدمة',
      subject: 'الموضوع',
      message: 'الرسالة',
      send: 'إرسال الرسالة',
      sending: 'جاري الإرسال...',
      servicePlaceholder: 'اختر الخدمة',
      namePlaceholder: 'اسمك الكامل',
      emailPlaceholder: 'email@example.com',
      phonePlaceholder: '01xxxxxxxxx',
      subjectPlaceholder: 'موضوع الرسالة',
      messagePlaceholder: 'اكتب رسالتك هنا...',
    },
    errors: {
      nameMin: 'الاسم يجب أن يكون حرفين على الأقل',
      nameMax: 'الاسم طويل جداً',
      emailInvalid: 'البريد الإلكتروني غير صالح',
      phoneMin: 'رقم الهاتف غير صالح',
      phoneInvalid: 'رقم الهاتف غير صالح',
      subjectMin: 'الموضوع قصير جداً',
      subjectMax: 'الموضوع طويل جداً',
      messageMin: 'الرسالة قصيرة جداً',
      messageMax: 'الرسالة طويلة جداً',
    },
    contactItems: {
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      address: 'العنوان',
      hours: 'ساعات العمل',
    },
    hours: 'الأحد - الخميس: 9:00 ص - 5:00 م',
    success: 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.',
  },
  error: {
    notFoundTitle: 'الصفحة غير موجودة',
    notFoundMessage: 'عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.',
    backHome: 'العودة للرئيسية',
    errorTitle: 'حدث خطأ غير متوقع',
    errorMessage: 'حدثت مشكلة أثناء معالجة طلبك.',
    loadError: 'حدث عطل أثناء تحميل الصفحة.',
    returnHome: 'العودة إلى الصفحة الرئيسية',
  },
  seo: {
    home: {
      title: `${siteConfig.name} - وسيط تأميني رائد في مصر`,
      description: siteConfig.description,
    },
    services: {
      title: `خدماتنا | ${siteConfig.name}`,
      description:
        'اكتشف مجموعة خدماتنا التأمينية الشاملة للأفراد والشركات - تأمين طبي، سيارات، ممتلكات، ومسؤولية.',
    },
    contact: {
      title: `تواصل معنا | ${siteConfig.name}`,
      description:
        'تواصل مع فريق أصول للتأمين للحصول على استشارة مجانية وحلول تأمينية مخصصة لاحتياجاتك.',
    },
    notFound: {
      title: `الصفحة غير موجودة | ${siteConfig.name}`,
      description: 'الصفحة التي تبحث عنها غير موجودة.',
    },
  },
} as const;
