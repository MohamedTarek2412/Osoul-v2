import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, ShieldCheck, ExternalLink } from 'lucide-react';
import { footerNav } from '@/config/nav.config';
import { siteConfig } from '@/config/site.config';
import { oibLogo, fraLogo } from '@/assets';
import { useLanguage } from '@/hooks/useLanguage';

export function Footer() {
  const { locale, copy } = useLanguage();
  const address = locale === 'ar' ? siteConfig.address : siteConfig.addressEn;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-card text-foreground overflow-hidden">
      {/* Decorative Gold Radial Glow */}
      <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Footer Content */}
      <div className="section-container pt-16 pb-8 relative z-10">
        <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
          {/* Company Brief & FRA Badge */}
          <div className="flex flex-col gap-5">
            <Link to="/" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md">
              <img
                src={oibLogo}
                alt={locale === 'ar' ? siteConfig.name : siteConfig.nameEn}
                className="h-12 w-auto object-contain dark:brightness-110"
              />
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {locale === 'ar' ? siteConfig.description : siteConfig.descriptionEn}
            </p>

            {/* Compliance Tag */}
            <div className="flex items-center gap-3 rounded-lg border border-border bg-muted/30 p-3 mt-2">
              <ShieldCheck className="h-5 w-5 shrink-0 text-primary" />
              <div className="flex flex-col leading-tight">
                <span className="text-xs font-bold text-foreground">
                  {locale === 'ar' ? 'وساطة مرخصة رسمياً' : 'Licensed Brokerage'}
                </span>
                <span className="text-[10px] text-muted-foreground">
                  {locale === 'ar' ? `هيئة الرقابة المالية رقم ${siteConfig.licenseNumber}` : `FRA License No. ${siteConfig.licenseNumber}`}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary font-mono">
              {copy.footer.quickLinks}
            </h3>
            <ul className="space-y-2.5">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="group inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                  >
                    <span>{copy.nav[item.id]}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-all translate-x-1 group-hover:translate-x-0.5 text-xs text-primary ml-1 rtl:mr-1 rtl:ml-0">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary font-mono">
              {copy.footer.contact}
            </h3>
            <ul className="space-y-3.5 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" />
                <div className="flex flex-col gap-1.5" dir="ltr">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="hover:text-foreground transition-colors focus-visible:underline"
                  >
                    {siteConfig.phone}
                  </a>
                  <a
                    href={`tel:${siteConfig.phoneSecondary}`}
                    className="hover:text-foreground transition-colors focus-visible:underline"
                  >
                    {siteConfig.phoneSecondary}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" />
                <div className="flex flex-col gap-1.5">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-foreground transition-colors focus-visible:underline break-all"
                  >
                    {siteConfig.email}
                  </a>
                  <a
                    href={`mailto:${siteConfig.emailSecondary}`}
                    className="hover:text-foreground transition-colors focus-visible:underline break-all"
                  >
                    {siteConfig.emailSecondary}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Corporate Location & Partners */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary font-mono">
              {locale === 'ar' ? 'المقر الرئيسي' : 'Headquarters'}
            </h3>
            <div className="flex gap-3 text-sm text-muted-foreground leading-relaxed mb-1">
              <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" />
              <span>{address}</span>
            </div>

            {/* Official Authority logos */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://fra.gov.eg"
                target="_blank"
                rel="noreferrer"
                className="group opacity-70 hover:opacity-100 transition-opacity focus-visible:ring-2 focus-visible:ring-primary rounded-md"
                aria-label="FRA Website"
              >
                <img
                  src={fraLogo}
                  alt="Financial Regulatory Authority Logo"
                  className="h-10 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground text-center md:text-start">
          <p className="font-medium">
            {locale === 'ar'
              ? `© ${currentYear} أصول للوساطة التأمينية (ش.م.م.). جميع الحقوق محفوظة. ترخيص هيئة الرقابة المالية رقم 92.`
              : `© ${currentYear} Osoul Insurance Brokerage (S.A.E.). All rights reserved. FRA Licensed No. 92.`}
          </p>
          <div className="flex gap-6">
            <a href="https://fra.gov.eg" target="_blank" rel="noreferrer" className="hover:text-foreground inline-flex items-center gap-1">
              <span>{locale === 'ar' ? 'الهيئة العامة للرقابة المالية' : 'FRA Egypt'}</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
