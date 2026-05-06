// імпорти фото
import landing from '@/assets/images/services/landing.png';
import business from '@/assets/images/services/business.png';
import ecommerce from '@/assets/images/services/ecommerce.png';

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export const servicesData: Service[] = [
  {
    id: 'landing-page',
    title: 'Landing Page',
    description: 'Modern high-converting landing pages for businesses.',
    image: landing,
    link: '/services/landing-page',
  },

  {
    id: 'business-website',
    title: 'Business Website',
    description: 'Scalable multi-page websites with future expansion.',
    image: business,
    link: '/services/business-website',
  },

  {
    id: 'ecommerce',
    title: 'E-commerce',
    description: 'Online stores with backend integrations and payments.',
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
