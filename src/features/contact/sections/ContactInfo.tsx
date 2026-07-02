import { motion } from 'framer-motion';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { staggerContainer, scaleIn } from '@/lib/motion';

export function ContactInfo() {
  const { locale, copy } = useLanguage();

  const contactItems = [
    {
      icon: Phone,
      title: copy.contactPage.contactItems.phone,
      value: [siteConfig.phone, siteConfig.phoneSecondary],
      href: [`tel:${siteConfig.phone}`, `tel:${siteConfig.phoneSecondary.replace(/[^+\d]/g, '')}`],
    },
    {
      icon: Mail,
      title: copy.contactPage.contactItems.email,
      value: [siteConfig.email, siteConfig.emailSecondary],
      href: [`mailto:${siteConfig.email}`, `mailto:${siteConfig.emailSecondary}`],
    },
    {
      icon: MapPin,
      title: copy.contactPage.contactItems.address,
      value: locale === 'ar' ? siteConfig.address : siteConfig.addressEn,
    },
    {
      icon: Clock,
      title: copy.contactPage.contactItems.hours,
      value: copy.contactPage.hours,
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="grid gap-4 sm:grid-cols-2"
    >
      {contactItems.map((item) => (
        <motion.div key={item.title} variants={scaleIn}>
          <Card className="transition-shadow hover:shadow-md">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <item.icon className="h-5 w-5 text-primary" />
                <CardTitle className="text-base">{item.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              {item.href ? (
                <div className="space-y-1 text-sm text-muted-foreground">
                  {Array.isArray(item.value) ? (
                    item.value.map((value, index) => (
                      <a
                        key={value}
                        href={item.href[index]}
                        className="block transition-colors hover:text-primary"
                        dir={item.icon === Phone ? 'ltr' : undefined}
                      >
                        {value}
                      </a>
                    ))
                  ) : (
                    <a
                      href={Array.isArray(item.href) ? item.href[0] : item.href}
                      className="transition-colors hover:text-primary"
                      dir={item.icon === Phone ? 'ltr' : undefined}
                    >
                      {item.value}
                    </a>
                  )}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">{item.value}</p>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
