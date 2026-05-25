import сommon from './en/common.json';
import cookies from './en/cookies.json';
import privacy from './en/privacy.json';
import home from './en/home.json';
import about from './en/about.json';

export type Resources = {
  common: typeof сommon;
  cookies: typeof cookies;
  privacy: typeof privacy;
  home: typeof home;
  about: typeof about;
  // price: typeof price;
  // services: typeof services;
};
