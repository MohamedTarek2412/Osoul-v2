import { motion } from 'framer-motion';
import { Icon } from '@/components/shared/Icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import { cardHover } from '@/lib/motion';
import type { Service } from '@/types/service.types';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { locale } = useLanguage();

  return (
    <motion.div initial="rest" whileHover="hover" variants={cardHover}>
      <Card className="h-full transition-shadow hover:shadow-md">
        <CardHeader>
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <Icon name={service.icon} className="text-primary" size={24} />
          </div>
          <CardTitle className="text-xl">{locale === 'ar' ? service.titleAr : service.titleEn}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            {locale === 'ar' ? service.descriptionAr : service.descriptionEn}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
