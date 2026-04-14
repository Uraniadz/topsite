import { Resources } from './i18n-types';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      pl: Resources;
      en: Resources;
      uk: Resources;
    };
  }
}
