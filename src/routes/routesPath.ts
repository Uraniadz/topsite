const routesPath = {
  home: '',
  about: 'about',
  contact: 'contact',
  services: 'services',
  price: 'price',
  privacy: 'polityka-prywatnosci',
  cookies: 'polityka-cookies',
  landing: 'landing-page',
  business: '/business-website',
  ecommerce: '/ecommerce',
  ads: '/google-ads',
};

// чи потрібена мені ця функція
export const getLocalizedPath = (lng: string, path: string) => {
  return `/${lng}${path}`;
};

export default routesPath;
