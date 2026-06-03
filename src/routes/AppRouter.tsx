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
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage/PrivacyPolicyPage';
import LandingPage from '@/pages/LandingPage/LandingPage';
import BusinessPage from '@/pages/BusinessPage/BusinessPage';

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
          <Route path={routesPath.privacy} element={<PrivacyPolicyPage />} />
          <Route path={routesPath.landing} element={<LandingPage />} />
          <Route path={routesPath.business} element={<BusinessPage />} />
          <Route path="*" element={<NotFoundPage404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRouter;
