// імпорти фото
import landing from '@/assets/images/services/landing.png';
import business from '@/assets/images/services/business.png';
import ecommerce from '@/assets/images/services/ecommerce.png';

export interface Service {
  id: string;
  titleKey: string;
  descriptionKey: string;
  image: string;
  link: string;
}

export const servicesData: Service[] = [
  {
    id: 'landing-page',

    titleKey: 'services.items.landing.title',

    descriptionKey: 'services.items.landing.description',

    image: landing,

    link: '/services/landing-page',
  },

  {
    id: 'business-website',

    titleKey: 'services.items.business.title',

    descriptionKey: 'services.items.business.description',

    image: business,

    link: '/services/business-website',
  },

  {
    id: 'ecommerce',

    titleKey: 'services.items.ecommerce.title',

    descriptionKey: 'services.items.ecommerce.description',

    image: ecommerce,

    link: '/services/ecommerce',
  },
];

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
