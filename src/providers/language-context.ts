import { createContext } from 'react';
import { translationCopy, type Locale } from '@/config/i18n.config';

export interface LanguageProviderState {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  copy: typeof translationCopy[Locale];
}

export const LanguageProviderContext = createContext<LanguageProviderState | undefined>(
  undefined,
);
