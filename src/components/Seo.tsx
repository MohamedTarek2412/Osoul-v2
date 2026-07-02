import { Helmet } from 'react-helmet-async';
import { siteConfig } from '@/config/site.config';

interface SeoProps {
  title: string;
  description: string;
  keywords?: readonly string[];
  ogType?: string;
  canonical?: string;
}

export function Seo({
  title,
  description,
  keywords,
  ogType = 'website',
  canonical = '/',
}: SeoProps) {
  const url = `${siteConfig.url.replace(/\/$/, '')}${canonical.startsWith('/') ? canonical : `/${canonical}`}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/favicon.png`,
    description,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: siteConfig.phone,
        contactType: 'customer service',
        areaServed: 'EG',
        availableLanguage: ['Arabic', 'English'],
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'القاهرة',
      addressCountry: 'EG',
      streetAddress: siteConfig.address,
    },
    sameAs: [siteConfig.social.facebook, siteConfig.social.twitter, siteConfig.social.linkedin],
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords?.length ? <meta name="keywords" content={keywords.join(', ')} /> : null}
      <link rel="canonical" href={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteConfig.nameEn} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={url} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
