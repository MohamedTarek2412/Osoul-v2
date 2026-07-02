import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Seo } from '@/components/Seo';
import { useLanguage } from '@/hooks/useLanguage';

export function NotFoundPage() {
  const { copy } = useLanguage();

  return (
    <>
      <Seo title={copy.seo.notFound.title} description={copy.seo.notFound.description} canonical="/404" />
      <section className="flex min-h-[60vh] items-center justify-center section-padding">
        <div className="text-center">
          <p className="text-8xl font-extrabold text-primary">404</p>
          <h1 className="mt-4 text-2xl font-bold">{copy.error.notFoundTitle}</h1>
          <p className="mt-2 text-muted-foreground">{copy.error.notFoundMessage}</p>
          <Button asChild className="mt-8">
            <Link to="/">
              <Home className="ml-2 h-4 w-4" />
              {copy.error.backHome}
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
