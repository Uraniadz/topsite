import { Routes, Route, Navigate } from 'react-router-dom';
import NotFoundPage404 from '@/pages/NotFoundPage404/NotFoundPage404';
import LayOut from '@/layout/LayOut';
import HomePage from '@/pages/HomePage/HomePage';
import AboutPage from '@/pages/AboutPage/About';

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={'/pl'} replace />} />
        <Route path={'/:lng'} element={<LayOut />}>
          <Route index element={<HomePage />} />
          <Route path={'about'} element={<AboutPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage404 />} />
      </Routes>
    </>
  );
}

export default AppRouter;
