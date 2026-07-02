import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { MobileNav } from './MobileNav';
import { useLanguage } from '@/hooks/useLanguage';

export function RootLayout() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { copy } = useLanguage();

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg transition-transform duration-150"
      >
        {copy.header.skipToContent}
      </a>
      <Header
        mobileNavOpen={mobileNavOpen}
        onMenuOpen={() => setMobileNavOpen(true)}
      />
      <MobileNav open={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
