import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { ToastProvider } from '@/providers/ToastProvider';
import { LanguageProvider } from '@/providers/LanguageProvider';

interface AppProvidersProps {
  children: React.ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="light">
        <LanguageProvider>
          <ToastProvider>{children}</ToastProvider>
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
