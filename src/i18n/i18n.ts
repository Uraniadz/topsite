import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { resources } from './resources';

void i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    defaultNS: 'common',
    // мови
    supportedLngs: ['en', 'pl', 'uk'],
    // Використовуємо тільки базову мову (en-US → en)
    load: 'languageOnly',
    // Детектор мови (параметри за замовчуванням можна міняти тут)
    detection: {
      order: ['localStorage', 'querystring', 'navigator'],
      caches: ['localStorage'],
    },
    fallbackLng: ['en'],
    // Рендерінг
    interpolation: { escapeValue: false }, // React сам екранує
    returnNull: false, // якщо ключ відсутній — не повертати null
  });

// Оновлюємо <html lang="..."> при зміні мови
i18next.on('languageChanged', (lng) => {
  if (typeof document !== 'undefined') {
    const shortLng = lng?.split('-')[0] || 'en';
    document.documentElement.lang = shortLng;
  }
});
