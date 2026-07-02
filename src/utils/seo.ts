import { siteConfig } from '@/config/site.config';

interface SeoMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogType?: string;
}

export function setPageMeta({ title, description, keywords, ogType = 'website' }: SeoMeta) {
  document.title = title;

  const setMeta = (name: string, content: string, property = false) => {
    const attr = property ? 'property' : 'name';
    let el = document.querySelector(`meta[${attr}="${name}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  setMeta('description', description);
  if (keywords?.length) setMeta('keywords', keywords.join(', '));
  setMeta('og:title', title, true);
  setMeta('og:description', description, true);
  setMeta('og:type', ogType, true);
  setMeta('og:url', siteConfig.url, true);
  setMeta('twitter:card', 'summary_large_image');
  setMeta('twitter:title', title);
  setMeta('twitter:description', description);
}

export function usePageSeo(meta: SeoMeta) {
  if (typeof document !== 'undefined') {
    setPageMeta(meta);
  }
}
