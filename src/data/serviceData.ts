// імпорти фото
import landing from '@/assets/images/services/landing.png';
import business from '@/assets/images/services/business.png';
import ecommerce from '@/assets/images/services/ecommerce.png';
import googleAds from '@/assets/images/services/google-ads.png';
import routesPath from '@/routes/routesPath';

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

    link: routesPath.landing,
  },

  {
    id: 'business-website',

    titleKey: 'services.items.business.title',

    descriptionKey: 'services.items.business.description',

    image: business,

    link: routesPath.business,
  },

  {
    id: 'ecommerce',

    titleKey: 'services.items.ecommerce.title',

    descriptionKey: 'services.items.ecommerce.description',

    image: ecommerce,

    link: routesPath.ecommerce,
  },
  {
    id: 'google-ads',

    titleKey: 'services.items.googleAds.title',

    descriptionKey: 'services.items.googleAds.description',

    image: googleAds,

    link: routesPath.ads,
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
