const routesPath = {
  home: '',
  about: 'about',
  contact: 'contact',
  services: 'services',
  price: 'price',
  privacy: 'polityka-prywatnosci',
  cookies: 'polityka-cookies',
};

// чи потрібена мені ця функція
export const getLocalizedPath = (lng: string, path: string) => {
  return `/${lng}${path}`;
};

export default routesPath;
