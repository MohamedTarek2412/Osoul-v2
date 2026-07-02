import { useContext } from 'react';
import { LanguageProviderContext } from '@/providers/language-context';

export function useLanguageProvider() {
  const context = useContext(LanguageProviderContext);
  if (!context) {
    throw new Error('useLanguageProvider must be used within LanguageProvider');
  }

  return context;
}
