import EN from '@/assets/flags/united-states.png';
import PL from '@/assets/flags/poland.png';
import UK from '@/assets/flags/ukraine.png';

export const supportedLngs = ['pl', 'en', 'uk'];

export const localeMap: Record<string, string> = {
  en: 'en_US',
  pl: 'pl_PL',
  uk: 'uk_UA',
};
export const LANGS = [
  { code: 'pl', label: 'Polski', flag: PL },
  { code: 'en', label: 'English', flag: EN },
  { code: 'uk', label: 'Українська', flag: UK },
];
