// імпорти фото

export interface WebServiceItem {
  id: string;
  i18nKey: string;
  link: string;
  image: string;
}

export const webServiceData: WebServiceItem[] = [
  {
    id: 'landing',
    i18nKey: 'services.web.landing',
    link: '/landing-page',
    image: '',
  },
  {
    id: 'business',
    i18nKey: 'services.web.business',
    link: '/website',
    image: '',
  },
  {
    id: 'shop',
    i18nKey: 'services.web.shop',
    link: '/ecommerce',
    image: '',
  },
  {
    id: 'other',
    i18nKey: 'services.web.other',
    link: '/contact',
    image: '',
  },
];
