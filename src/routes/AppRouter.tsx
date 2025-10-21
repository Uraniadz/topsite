import { Routes, Route } from 'react-router-dom';
import routesPath from '@/routes/routesPath';
import NotFoundPage404 from '@/pages/NotFoundPage404/NotFoundPage404';
import LayOut from '@/layout/LayOut';
import HomePage from '@/pages/NotFoundPage404/HomePage/HomePage';

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path={routesPath.home} element={<LayOut />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="*" element={<NotFoundPage404 />} />
      </Routes>
    </>
  );
}

export default AppRouter;
