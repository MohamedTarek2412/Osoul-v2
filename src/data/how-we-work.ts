export interface WorkStep {
  id: string;
  step: number;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
}

export const howWeWorkSteps: WorkStep[] = [
  {
    id: 'consult',
    step: 1,
    title: 'استشارة مجانية',
    titleEn: 'Free consultation',
    description: 'نستمع لاحتياجاتك ونفهم متطلباتك التأمينية بدقة.',
    descriptionEn: 'We listen to your needs and understand your insurance requirements precisely.',
  },
  {
    id: 'analyze',
    step: 2,
    title: 'تحليل وتقييم',
    titleEn: 'Analysis and evaluation',
    description: 'نقيّم المخاطر ونقارن أفضل العروض من شركات التأمين المعتمدة.',
    descriptionEn: 'We assess risks and compare top offers from accredited insurers.',
  },
  {
    id: 'propose',
    step: 3,
    title: 'عرض مخصص',
    titleEn: 'Customized proposal',
    description: 'نقدم لك حلولاً تأمينية مصممة خصيصاً لميزانيتك واحتياجاتك.',
    descriptionEn: 'We deliver insurance solutions tailored to your budget and needs.',
  },
  {
    id: 'implement',
    step: 4,
    title: 'إصدار الوثيقة',
    titleEn: 'Policy issuance',
    description: 'نُنهي إجراءات الإصدار بسرعة وشفافية كاملة.',
    descriptionEn: 'We complete issuance with speed and full transparency.',
  },
  {
    id: 'support',
    step: 5,
    title: 'دعم مستمر',
    titleEn: 'Ongoing support',
    description: 'نرافقك في المطالبات والتجديدات على مدار العام.',
    descriptionEn: 'We support you through claims and renewals all year round.',
  },
];
