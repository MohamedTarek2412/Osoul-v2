import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Seo } from '@/components/Seo';
import { useLanguage } from '@/hooks/useLanguage';

export function RouteErrorBoundary() {
  const error = useRouteError();
  const { copy } = useLanguage();

  const title = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText ?? copy.error.errorTitle}`
    : copy.error.errorTitle;

  const message = isRouteErrorResponse(error)
    ? error.data?.message ?? copy.error.loadError
    : error instanceof Error
    ? error.message
    : copy.error.errorMessage;

  return (
    <>
      <Seo title={copy.seo.notFound.title} description={copy.seo.notFound.description} canonical="/404" />
      <section className="flex min-h-[70vh] items-center justify-center px-4 py-16 text-center">
        <div className="w-full max-w-xl rounded-3xl border border-border bg-background/95 p-10 shadow-xl shadow-black/5">
          <p className="text-7xl font-extrabold tracking-tight text-primary">
            {isRouteErrorResponse(error) ? error.status : '500'}
          </p>
          <h1 className="mt-6 text-3xl font-semibold text-foreground">{title}</h1>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">{message}</p>
          <div className="mt-8 flex justify-center gap-3">
            <Button asChild>
              <Link to="/">
                <Home className="ml-2 h-4 w-4" />
                {copy.error.returnHome}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
