import { Routes, Route } from 'react-router-dom';
import NotFoundPage404 from '@/pages/NotFoundPage404/NotFoundPage404';
import LayOut from '@/layout/LayOut';
import HomePage from '@/pages/HomePage/HomePage';
import AboutPage from '@/pages/AboutPage/About';
import routesPath from './routesPath';
import ServicesPage from '@/pages/ServicesPage/ServicesPage';
import ContactPage from '@/pages/ContactPage/ContactPage';
import PricePage from '@/pages/PricePage/PricePage';
import RootRedirect from './RootRedirect';
import CookiesPolicyPage from '@/pages/CookiesPolicy/CookiesPolicy';

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootRedirect />} />
        <Route path={'/:lng'} element={<LayOut />}>
          <Route index element={<HomePage />} />
          <Route path={routesPath.about} element={<AboutPage />} />
          <Route path={routesPath.services} element={<ServicesPage />} />
          <Route path={routesPath.contact} element={<ContactPage />} />
          <Route path={routesPath.price} element={<PricePage />} />
          <Route path={routesPath.cookies} element={<CookiesPolicyPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage404 />} />
      </Routes>
    </>
  );
}

export default AppRouter;
