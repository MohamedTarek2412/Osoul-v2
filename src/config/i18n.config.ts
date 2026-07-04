import { ar } from './locales/ar';
import { en } from './locales/en';

export type Locale = 'ar' | 'en';

export const locales: Locale[] = ['ar', 'en'];

export const translationCopy = { ar, en } as const;

export type TranslationCopy = typeof translationCopy['ar'];
