const routesPath = {
  home: '',
  about: '/about',
  contact: '/contact',
  services: '/services',
  price: '/price',
};

export const getLocalizedPath = (lng: string, path: string) => {
  return `/${lng}${path}`;
};

export default routesPath;
